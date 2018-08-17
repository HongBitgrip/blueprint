Ext.define("com.coremedia.cap.common.descriptors.impl.BlobPropertyDescriptorImpl", function(BlobPropertyDescriptorImpl) {/*package com.coremedia.cap.common.descriptors.impl {

import com.coremedia.cap.common.descriptors.BlobPropertyDescriptor;

import ext.Ext;

internal class BlobPropertyDescriptorImpl extends CapPropertyDescriptorImpl implements BlobPropertyDescriptor {
  public*/ function BlobPropertyDescriptorImpl$(config/*:Object*/) {
    this.super$pcXK(config);
    this["contentType"] = config.contentType || "*/*";
  }/*

  override internal*/ function toObject()/*:Object*/ {
    return Ext.apply(com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl.prototype.toObject.call(this), {
      contentType: this.contentType
    });
  }/*

  public native function get contentType():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl",
      mixins: ["com.coremedia.cap.common.descriptors.BlobPropertyDescriptor"],
      constructor: BlobPropertyDescriptorImpl$,
      super$pcXK: function() {
        com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl.prototype.constructor.apply(this, arguments);
      },
      toObject: toObject,
      requires: [
        "Ext",
        "com.coremedia.cap.common.descriptors.BlobPropertyDescriptor",
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl"
      ]
    };
});
