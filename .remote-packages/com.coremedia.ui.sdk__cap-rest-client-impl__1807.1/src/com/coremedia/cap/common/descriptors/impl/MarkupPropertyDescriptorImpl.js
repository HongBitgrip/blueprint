Ext.define("com.coremedia.cap.common.descriptors.impl.MarkupPropertyDescriptorImpl", function(MarkupPropertyDescriptorImpl) {/*package com.coremedia.cap.common.descriptors.impl {

import com.coremedia.cap.common.descriptors.MarkupPropertyDescriptor;

import ext.Ext;

internal class MarkupPropertyDescriptorImpl extends CapPropertyDescriptorImpl implements MarkupPropertyDescriptor {
  public*/ function MarkupPropertyDescriptorImpl$(config/*:Object*/) {
    this.super$jHFV(config);
    this["grammar"] = config.grammar;
  }/*

  override internal*/ function toObject()/*:Object*/ {
    return Ext.apply(com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl.prototype.toObject.call(this), {
      grammar: this.grammar
    });
  }/*

  public native function get grammar():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl",
      mixins: ["com.coremedia.cap.common.descriptors.MarkupPropertyDescriptor"],
      constructor: MarkupPropertyDescriptorImpl$,
      super$jHFV: function() {
        com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl.prototype.constructor.apply(this, arguments);
      },
      toObject: toObject,
      requires: [
        "Ext",
        "com.coremedia.cap.common.descriptors.MarkupPropertyDescriptor",
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl"
      ]
    };
});
