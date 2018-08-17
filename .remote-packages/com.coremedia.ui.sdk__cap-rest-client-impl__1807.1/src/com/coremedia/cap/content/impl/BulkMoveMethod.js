Ext.define("com.coremedia.cap.content.impl.BulkMoveMethod", function(BulkMoveMethod) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.cap.content.results.MoveResultCodes;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.ExecuteEventually;

public class BulkMoveMethod extends ContentRepositoryMethod {
  private var contents:Array;
  private var target:Content;

  public*/ function BulkMoveMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/, target/*:Content*/, callback/*:Function*/) {
    this.super$1WZh(contentRepository, "bulkMoveUri", false, false, {
      contents: contents, 
      target: target
    }, callback);

    this.contents$1WZh = contents;
    this.target$1WZh = target;
  }/*

  public*/ function execute()/*:void*/ {
    // Flush first, so that the current state of the sources gets copied.
    com.coremedia.ui.data.RemoteBeanUtil.flushAll(AS3.bind(this,"doExecute"), this.contents$1WZh, this.target$1WZh);
  }/*

  override protected*/ function invalidate(result/*:Object*/, executeEventually/*:ExecuteEventually*/)/*:void*/ {
    com.coremedia.cap.content.impl.ContentRepositoryMethod.prototype.invalidate.call(this,result, executeEventually);

    var items/*:Array*/ = AS3.cast(com.coremedia.cap.content.results.BulkOperationResult,result).results;
    var modified/*:Array*/ = [];
    var parents/*:Array*/ = [];
    for (var i/*:uint*/ = 0; i < items.length; i++) {
      var item/*:BulkOperationResultItem*/ = items[i];
      var resultCode/*:String*/ = item.resultCode;
      if (resultCode === com.coremedia.cap.content.results.MoveResultCodes.CONTENT_MOVED) {
        var content/*:Content*/ = item.content;
        var parent/*:Content*/ = content.getParent();
        if (parent && parents.indexOf(parent) === -1) {
          parents.push(parent);
        }
        modified.push(content);
      }
    }
    if (modified.length > 0) {
      // Invalidate old parents FIRST... DO NOT invalidate target folder first as this
      // would result in an inconsistent tree state. Temporarily the content node would
      // be linked twice. This would break the tree.
      // TODO: Perhaps it would be safer to sequence the invalidations ?!?
      parents.forEach(function(parent/*:Content*/)/*:void*/ {
        parent.invalidate();
      });
      this.target$1WZh.invalidate();
      modified.forEach(function(content/*:Content*/)/*:void*/ {
        content.invalidate();
      });
    }
  }/*

  override protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return new com.coremedia.cap.content.impl.BulkOperationResultBuilder().convert(response);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.ContentRepositoryMethod",
      contents$1WZh: null,
      target$1WZh: null,
      constructor: BulkMoveMethod$,
      super$1WZh: function() {
        com.coremedia.cap.content.impl.ContentRepositoryMethod.prototype.constructor.apply(this, arguments);
      },
      execute: execute,
      invalidate: invalidate,
      makeResult: makeResult,
      requires: [
        "com.coremedia.cap.content.impl.ContentRepositoryMethod",
        "com.coremedia.cap.content.results.BulkOperationResult",
        "com.coremedia.cap.content.results.MoveResultCodes",
        "com.coremedia.ui.data.RemoteBeanUtil"
      ],
      uses: ["com.coremedia.cap.content.impl.BulkOperationResultBuilder"]
    };
});
