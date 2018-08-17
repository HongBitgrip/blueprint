Ext.define("com.coremedia.cap.content.impl.VersionStructRemoteBeanImpl", function(VersionStructRemoteBeanImpl) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.common.impl.StructRemoteBeanImpl;

[RestResource(uriTemplate="content/{id:[0-9]+}/versions/{version:[0-9]+}/structs/{property:[A-Za-z0-9_]+}")]
public class VersionStructRemoteBeanImpl extends StructRemoteBeanImpl {
  public*/ function VersionStructRemoteBeanImpl$(uri/*:String*/, vars/*:Object*/) {
    this.super$3y6y(uri);
  }/*

  override protected*/ function beforeUpdateProperty()/*:void*/ {
    throw new AS3.Error('Can not update Version Struct.');
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
          "content/{id:[0-9]+}/versions/{version:[0-9]+}/structs/{property:[A-Za-z0-9_]+}"
        ]
      ]},
      constructor: VersionStructRemoteBeanImpl$,
      super$3y6y: function() {
        com.coremedia.cap.common.impl.StructRemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      beforeUpdateProperty: beforeUpdateProperty,
      requires: [
        "AS3.Error",
        "com.coremedia.cap.common.impl.StructRemoteBeanImpl"
      ]
    };
});
