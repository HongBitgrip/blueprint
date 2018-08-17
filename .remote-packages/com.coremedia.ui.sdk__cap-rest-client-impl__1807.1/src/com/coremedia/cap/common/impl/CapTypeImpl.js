Ext.define("com.coremedia.cap.common.impl.CapTypeImpl", function(CapTypeImpl) {/*package com.coremedia.cap.common.impl {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

public class CapTypeImpl extends RemoteBeanImpl implements CapType {

  public*/ function CapTypeImpl$(config/*:* = undefined*/) {
    this.super$2C6F(config);
  }/*

  override public*/ function getId()/*:String*/ {
    return AS3.as( this.get("id"),  String);
  }/*

  override public*/ function setId(id/*:String*/)/*:void*/ {
    com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.setId.call(this,id);
    this.setImmediateProperty('id', id);
  }/*

  public*/ function getParent()/*:CapType*/ {
    return null;
  }/*

  public*/ function isSubtypeOf(type/*:**/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function isAbstract()/*:Boolean*/ {
    return false;
  }/*

  public*/ function isConcrete()/*:Boolean*/ {
    return !this.isAbstract();
  }/*

  public*/ function getName()/*:String*/ {
    return this.get("name");
  }/*

  public*/ function getDescription()/*:String*/ {
    return AS3.as( this.get("description"),  String);
  }/*

  public*/ function getDirectDescriptors()/*:Array*/ {
    return AS3.as( this.get("directDescriptors"),  Array);
  }/*

  public*/ function getDescriptors()/*:Array*/ {
    return this.getDirectDescriptors();
  }/*

  public*/ function getDescriptor(propertyName/*:String*/)/*:CapPropertyDescriptor*/ {
    return com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getDescriptor(this.getDescriptors(), propertyName);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.common.CapType"],
      constructor: CapTypeImpl$,
      super$2C6F: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getId: getId,
      setId: setId,
      getParent: getParent,
      isSubtypeOf: isSubtypeOf,
      isAbstract: isAbstract,
      isConcrete: isConcrete,
      getName: getName,
      getDescription: getDescription,
      getDirectDescriptors: getDirectDescriptors,
      getDescriptors: getDescriptors,
      getDescriptor: getDescriptor,
      requires: [
        "com.coremedia.cap.common.CapType",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ],
      uses: ["com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil"]
    };
});
