Ext.define("com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl", function(CapPropertyDescriptorImpl) {/*package com.coremedia.cap.common.descriptors.impl {

import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.ui.data.impl.RemoteService;

internal class CapPropertyDescriptorImpl implements CapPropertyDescriptor {
  public*/ function CapPropertyDescriptorImpl$(config/*:Object*/) {
    if (!config.type) {
      throw new ArgumentError("CapPropertyDescriptor must have a type, was: " + config.type);
    }
    this["name"] = config.name;
    this["type"] = config.type;
    this["collection"] = config.collection !== undefined ? config.collection :
            config.atomic !== undefined ? !config.atomic :
                    config.maxCardinality > 1;
    this["atomic"] = !this.collection;
    this["minCardinality"] = config.minCardinality !== undefined ? config.minCardinality
            : this.collection ? 0 : 1;
    this["maxCardinality"] = config.maxCardinality !== undefined ? config.maxCardinality
            : this.collection ? AS3.int_.MAX_VALUE : 1;
  }/*

  public native function get name():String;
  public native function get type():String;
  public native function get atomic():Boolean;
  public native function get collection():Boolean;
  public native function get minCardinality():int;
  public native function get maxCardinality():int;

  internal*/ function toObject()/*:Object*/ {
    return {
      name:           this.name,
      type:           this.type,
      atomic:         this.atomic,
      collection:     this.collection,
      minCardinality: this.minCardinality,
      maxCardinality: this.maxCardinality
    };
  }function static$0(){

  com.coremedia.ui.data.impl.RemoteService.registerMarshaller(CapPropertyDescriptorImpl, marshal$static);}/*
  private static*/ function marshal$static(self/*:CapPropertyDescriptorImpl*/)/*:Object*/ {
    return com.coremedia.ui.data.impl.RemoteService.marshalValue(self.toObject());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapPropertyDescriptor"],
      constructor: CapPropertyDescriptorImpl$,
      toObject: toObject,
      statics: {__initStatics__: function() {
          static$0();
        }},
      requires: [
        "AS3.int_",
        "ArgumentError",
        "com.coremedia.cap.common.CapPropertyDescriptor",
        "com.coremedia.ui.data.impl.RemoteService"
      ]
    };
});
