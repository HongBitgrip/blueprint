Ext.define("com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod", function(AbstractBulkPublishMethod) {/*package com.coremedia.cap.content.publication.impl {

import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.impl.*;
import com.coremedia.cap.content.results.PublicationResult;
import com.coremedia.cap.content.results.PublicationResultItem;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.ExecuteEventually;

public class AbstractBulkPublishMethod extends AbstractBulkMethod {
  public*/ function AbstractBulkPublishMethod$(contentRepository/*:ContentRepository*/, uriProperty/*:String*/,
                                            isModifyingAllVersions/*:Boolean*/,
                                            contents/*:Array*/, callback/*:Function*/) {
    this.super$LGVN(contentRepository, uriProperty, true, isModifyingAllVersions, contents, callback);
  }/*

  override protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return new com.coremedia.cap.content.publication.impl.PublicationResultBuilder().convert(response);
  }/*

  override protected*/ function invalidate(result/*:Object*/, executeEventually/*:ExecuteEventually*/)/*:void*/ {
    com.coremedia.cap.content.impl.AbstractBulkMethod.prototype.invalidate.call(this,result, executeEventually);

    // Also invalidate impediments.
    var items/*:Array*/ = AS3.cast(com.coremedia.cap.content.results.PublicationResult,result).results;
    for (var i/*:uint*/ = 0; i < items.length; i++) {
      var item/*:PublicationResultItem*/ = items[i];
      if (item.impediment) {
        // Maybe the other error occurred, because the impediment content
        // is not up to date in our caches.
        item.impediment.invalidate(executeEventually.delay());
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.AbstractBulkMethod",
      constructor: AbstractBulkPublishMethod$,
      super$LGVN: function() {
        com.coremedia.cap.content.impl.AbstractBulkMethod.prototype.constructor.apply(this, arguments);
      },
      makeResult: makeResult,
      invalidate: invalidate,
      requires: [
        "com.coremedia.cap.content.impl.AbstractBulkMethod",
        "com.coremedia.cap.content.results.PublicationResult"
      ],
      uses: ["com.coremedia.cap.content.publication.impl.PublicationResultBuilder"]
    };
});
