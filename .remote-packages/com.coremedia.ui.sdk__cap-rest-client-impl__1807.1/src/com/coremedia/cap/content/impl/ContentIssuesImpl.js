Ext.define("com.coremedia.cap.content.impl.ContentIssuesImpl", function(ContentIssuesImpl) {/*package com.coremedia.cap.content.impl {

import com.coremedia.ui.data.impl.IssuesImpl;
import com.coremedia.ui.data.impl.RequestQueue;

[RestResource(uriTemplate="content/{id:[0-9]+}/issues")]
/**
 * A specialized issues object that binds itself to the content request queue.
 * /
public class ContentIssuesImpl extends IssuesImpl {
  private var numericId:int;

  /**
   * Do not invoke directly. Used by the bean factory to create content issues objects.
   *
   * @param uri the bean's URI
   * @param vars the URI variables
   * /
  public*/ function ContentIssuesImpl$(uri/*:String*/, vars/*:Object*/) {
    // Remember the id before calling super, so that createRequestQueue can read it.
    var id/*:**/ = vars['id'];
    this.numericId$FF7C =AS3.is( id,  Number) ? id : parseInt(id);

    this.super$FF7C(uri);
  }/*

  override protected*/ function createRequestQueue()/*:RequestQueue*/ {
    return com.coremedia.cap.content.impl.ContentRequestQueues.getRequestQueue(this.numericId$FF7C);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.IssuesImpl",
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "content/{id:[0-9]+}/issues"
        ]
      ]},
      numericId$FF7C: 0,
      constructor: ContentIssuesImpl$,
      super$FF7C: function() {
        com.coremedia.ui.data.impl.IssuesImpl.prototype.constructor.apply(this, arguments);
      },
      createRequestQueue: createRequestQueue,
      requires: ["com.coremedia.ui.data.impl.IssuesImpl"],
      uses: ["com.coremedia.cap.content.impl.ContentRequestQueues"]
    };
});
