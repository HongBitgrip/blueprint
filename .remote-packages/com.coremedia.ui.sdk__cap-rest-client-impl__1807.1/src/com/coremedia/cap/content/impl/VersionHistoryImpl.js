Ext.define("com.coremedia.cap.content.impl.VersionHistoryImpl", function(VersionHistoryImpl) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.VersionHistory;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

[RestResource(uriTemplate="content/{id:[0-9]+}/versions")]
public class VersionHistoryImpl extends RemoteBeanImpl implements VersionHistory {
  public*/ function VersionHistoryImpl$(uri/*:String*/) {
    this.super$1_k3(uri);
  }/*

  public*/ function getItems()/*:Vector.<Version>*/ {
    return this.get('items');
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.content.VersionHistory"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "content/{id:[0-9]+}/versions"
        ]
      ]},
      constructor: VersionHistoryImpl$,
      super$1_k3: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getItems: getItems,
      requires: [
        "com.coremedia.cap.content.VersionHistory",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ]
    };
});
