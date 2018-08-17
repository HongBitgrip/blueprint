Ext.define("com.coremedia.cap.common.impl.StructSubBean", function(StructSubBean) {/*package com.coremedia.cap.common.impl {
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.struct.StructType;
import com.coremedia.ui.data.impl.SubBean;

/**
 * A sub-bean supporting the struct interface. Simple, because only the type getter is special.
 * /
public class StructSubBean extends SubBean implements Struct {
  public*/ function StructSubBean$(parent/*:StructRemoteBeanImpl*/, propertyPrefix/*:String*/) {
    this.super$LuBU(parent,  propertyPrefix);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getType()/*:StructType*/ {
    return new com.coremedia.cap.common.impl.StructTypeImpl(this);
  }/*

  public*/ function getType_()/*:CapType*/ {
    return this.getType();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.SubBean",
      mixins: ["com.coremedia.cap.struct.Struct"],
      constructor: StructSubBean$,
      super$LuBU: function() {
        com.coremedia.ui.data.impl.SubBean.prototype.constructor.apply(this, arguments);
      },
      getType: getType,
      getType_: getType_,
      requires: [
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.ui.data.impl.SubBean"
      ],
      uses: ["com.coremedia.cap.common.impl.StructTypeImpl"]
    };
});
