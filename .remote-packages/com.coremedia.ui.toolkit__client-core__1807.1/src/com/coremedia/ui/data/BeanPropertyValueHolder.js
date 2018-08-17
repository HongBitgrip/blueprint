Ext.define("com.coremedia.ui.data.BeanPropertyValueHolder", function(BeanPropertyValueHolder) {/*package com.coremedia.ui.data {
import com.coremedia.ui.util.ObjectUtils;

public class BeanPropertyValueHolder implements ValueHolder {

  private var bean:Object;
  private var property:String;
  private var forceAccessors:Boolean;

  public*/ function BeanPropertyValueHolder$(bean/*:Object*/, property/*:String*/, forceAccessors/*:Boolean = false*/) {if(arguments.length<=2)forceAccessors=false;
    this.bean$$wVO = bean;
    this.property$$wVO = property;
    this.forceAccessors$$wVO = forceAccessors;
  }/*

  public*/ function setValue(value/*:**/)/*:Boolean*/ {
    return this.forceAccessors$$wVO ? com.coremedia.ui.util.ObjectUtils.setPropertyNoBean(this.bean$$wVO, this.property$$wVO, value) : com.coremedia.ui.util.ObjectUtils.setProperty(this.bean$$wVO, this.property$$wVO, value);
  }/*

  public*/ function getValue()/*:**/ {
    return this.forceAccessors$$wVO ? com.coremedia.ui.util.ObjectUtils.getPropertyNoBean(this.bean$$wVO, this.property$$wVO) : com.coremedia.ui.util.ObjectUtils.getProperty(this.bean$$wVO, this.property$$wVO);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.ValueHolder"],
      bean$$wVO: null,
      property$$wVO: null,
      forceAccessors$$wVO: false,
      constructor: BeanPropertyValueHolder$,
      setValue: setValue,
      getValue: getValue,
      requires: ["com.coremedia.ui.data.ValueHolder"],
      uses: ["com.coremedia.ui.util.ObjectUtils"]
    };
});
