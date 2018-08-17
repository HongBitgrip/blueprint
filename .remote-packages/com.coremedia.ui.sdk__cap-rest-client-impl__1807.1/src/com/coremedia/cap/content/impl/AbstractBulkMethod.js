Ext.define("com.coremedia.cap.content.impl.AbstractBulkMethod", function(AbstractBulkMethod) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.ExecuteEventually;

public class AbstractBulkMethod extends ContentRepositoryMethod {
  private var contents:Array;

  public*/ function AbstractBulkMethod$(contentRepository/*:ContentRepository*/, uriProperty/*:String*/,
                                     isModifyingVersions/*:Boolean*/, isModifyingAllVersions/*:Boolean*/,
                                     contents/*:Array*/, callback/*:Function*/) {
    this.super$MmZy(contentRepository, uriProperty, isModifyingVersions, isModifyingAllVersions, {
      contents: contents
    }, callback);

    this.contents$MmZy = contents;
  }/*

  protected*/ function getContents()/*:Array*/ {
    return this.contents$MmZy;
  }/*

  public*/ function execute()/*:void*/ {
    // Flush first, so that the current state of the sources gets published.
    com.coremedia.ui.data.RemoteBeanUtil.flushAll(AS3.bind(this,"doExecute"), this.contents$MmZy);
  }/*

  override protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return new com.coremedia.cap.content.impl.BulkOperationResultBuilder().convert(response);
  }/*

  override protected*/ function invalidate(result/*:Object*/, executeEventually/*:ExecuteEventually*/)/*:void*/ {
    com.coremedia.cap.content.impl.ContentRepositoryMethod.prototype.invalidate.call(this,result, executeEventually);

    var items/*:Array*/ = AS3.cast(com.coremedia.cap.content.results.BulkOperationResult,result).results;
    for (var i/*:uint*/ = 0; i < items.length; i++) {
      var item/*:BulkOperationResultItem*/ = items[i];
      var content/*:Content*/ = item.content;
      this.invalidateContent(content, executeEventually);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.ContentRepositoryMethod",
      contents$MmZy: null,
      constructor: AbstractBulkMethod$,
      super$MmZy: function() {
        com.coremedia.cap.content.impl.ContentRepositoryMethod.prototype.constructor.apply(this, arguments);
      },
      getContents: getContents,
      execute: execute,
      makeResult: makeResult,
      invalidate: invalidate,
      requires: [
        "com.coremedia.cap.content.impl.ContentRepositoryMethod",
        "com.coremedia.cap.content.results.BulkOperationResult",
        "com.coremedia.ui.data.RemoteBeanUtil"
      ],
      uses: ["com.coremedia.cap.content.impl.BulkOperationResultBuilder"]
    };
});
