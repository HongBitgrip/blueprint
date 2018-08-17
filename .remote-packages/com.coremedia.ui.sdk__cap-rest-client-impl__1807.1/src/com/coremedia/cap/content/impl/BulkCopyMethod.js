Ext.define("com.coremedia.cap.content.impl.BulkCopyMethod", function(BulkCopyMethod) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.results.CopyResult;
import com.coremedia.cap.content.results.CopyResultCodes;
import com.coremedia.cap.content.results.CopyResultItem;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.ExecuteEventually;

public class BulkCopyMethod extends ContentRepositoryMethod {
  private var contents:Array;
  private var target:Content;

  public*/ function BulkCopyMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/, target/*:Content*/, callback/*:Function*/) {
    this.super$tJ6F(contentRepository, "bulkCopyUri", false, false, {
      contents: contents, 
      target: target
    }, callback);

    this.contents$tJ6F = contents;
    this.target$tJ6F = target;
  }/*

  public*/ function execute()/*:void*/ {
    // Flush first, so that the current state of the sources gets copied.
    com.coremedia.ui.data.RemoteBeanUtil.flushAll(AS3.bind(this,"doExecute"), this.contents$tJ6F, this.target$tJ6F);
  }/*

  override protected*/ function invalidate(result/*:Object*/, executeEventually/*:ExecuteEventually*/)/*:void*/ {
    com.coremedia.cap.content.impl.ContentRepositoryMethod.prototype.invalidate.call(this,result, executeEventually);

    var items/*:Array*/ = AS3.cast(com.coremedia.cap.content.results.CopyResult,result).results;
    var modified/*:Boolean*/ = false;
    for (var i/*:uint*/ = 0; i < items.length; i++) {
      var item/*:CopyResultItem*/ = items[i];
      var resultCode/*:String*/ = item.resultCode;
      if (resultCode === com.coremedia.cap.content.results.CopyResultCodes.CONTENT_COPIED ||
              resultCode === com.coremedia.cap.content.results.CopyResultCodes.CONTENT_COPIED_CHECKED_OUT) {
        modified = true;
        break;
      }
    }
    if (modified) {
      this.target$tJ6F.invalidate(executeEventually.delay());
    }
  }/*

  override protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return new com.coremedia.cap.content.impl.CopyResultBuilder().convert(response);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.ContentRepositoryMethod",
      contents$tJ6F: null,
      target$tJ6F: null,
      constructor: BulkCopyMethod$,
      super$tJ6F: function() {
        com.coremedia.cap.content.impl.ContentRepositoryMethod.prototype.constructor.apply(this, arguments);
      },
      execute: execute,
      invalidate: invalidate,
      makeResult: makeResult,
      requires: [
        "com.coremedia.cap.content.impl.ContentRepositoryMethod",
        "com.coremedia.cap.content.results.CopyResult",
        "com.coremedia.cap.content.results.CopyResultCodes",
        "com.coremedia.ui.data.RemoteBeanUtil"
      ],
      uses: ["com.coremedia.cap.content.impl.CopyResultBuilder"]
    };
});
