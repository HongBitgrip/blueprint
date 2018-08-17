Ext.define("com.coremedia.cap.content.impl.ContentStructRemoteBeanImpl", function(ContentStructRemoteBeanImpl) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.common.impl.StructRemoteBeanImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.RequestQueue;

[RestResource(uriTemplate="content/{id:[0-9]+}/structs/{property:[A-Za-z0-9_]+}")]
public class ContentStructRemoteBeanImpl extends StructRemoteBeanImpl {

  private var numericId:int;

  public*/ function ContentStructRemoteBeanImpl$(uri/*:String*/, vars/*:Object*/) {
    // Remember the id before calling super, so that createRequestQueue can read it.
    var id/*:**/ = vars['id'];
    this.numericId$4hxT =AS3.is( id,  Number) ? id : parseInt(id);

    this.super$4hxT(uri);
  }/*

  public*/ function getContent()/*:Content*/ {
    return AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean("content/" + this.numericId$4hxT),  com.coremedia.cap.content.Content);
  }/*

  override protected*/ function createRequestQueue()/*:RequestQueue*/ {
    return com.coremedia.cap.content.impl.ContentRequestQueues.getRequestQueue(this.numericId$4hxT);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.impl.StructRemoteBeanImpl",
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "content/{id:[0-9]+}/structs/{property:[A-Za-z0-9_]+}"
        ]
      ]},
      numericId$4hxT: 0,
      constructor: ContentStructRemoteBeanImpl$,
      super$4hxT: function() {
        com.coremedia.cap.common.impl.StructRemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getContent: getContent,
      createRequestQueue: createRequestQueue,
      requires: [
        "com.coremedia.cap.common.impl.StructRemoteBeanImpl",
        "com.coremedia.cap.content.Content",
        "com.coremedia.ui.data.beanFactory"
      ],
      uses: ["com.coremedia.cap.content.impl.ContentRequestQueues"]
    };
});
