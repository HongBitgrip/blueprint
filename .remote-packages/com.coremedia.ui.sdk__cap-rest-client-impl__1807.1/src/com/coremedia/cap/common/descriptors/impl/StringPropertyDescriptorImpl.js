Ext.define("com.coremedia.cap.common.descriptors.impl.StringPropertyDescriptorImpl", function(StringPropertyDescriptorImpl) {/*package com.coremedia.cap.common.descriptors.impl {

import com.coremedia.cap.common.descriptors.StringPropertyDescriptor;

import ext.Ext;

internal class StringPropertyDescriptorImpl extends CapPropertyDescriptorImpl implements StringPropertyDescriptor {
  public*/ function StringPropertyDescriptorImpl$(config/*:Object*/) {
    this.super$TPa8(config);
    this["length"] = config.length || AS3.int_.MAX_VALUE;
    this["encodedLength"] = config.encodedLength || AS3.int_.MAX_VALUE;
  }/*

  override internal*/ function toObject()/*:Object*/ {
    return Ext.apply(com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl.prototype.toObject.call(this), {
      length: this.length,
      encodedLength: this.encodedLength
    });
  }/*

  public native function get length():int;
  public native function get encodedLength():int;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl",
      mixins: ["com.coremedia.cap.common.descriptors.StringPropertyDescriptor"],
      constructor: StringPropertyDescriptorImpl$,
      super$TPa8: function() {
        com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl.prototype.constructor.apply(this, arguments);
      },
      toObject: toObject,
      requires: [
        "AS3.int_",
        "Ext",
        "com.coremedia.cap.common.descriptors.StringPropertyDescriptor",
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl"
      ]
    };
});
