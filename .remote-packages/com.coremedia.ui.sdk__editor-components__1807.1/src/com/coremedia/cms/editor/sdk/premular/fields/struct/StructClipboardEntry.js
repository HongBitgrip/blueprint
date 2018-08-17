Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardEntry", function(StructClipboardEntry) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cap.common.CapPropertyDescriptor;

public class StructClipboardEntry {
  public static const FLAVOR:String = 'struct';

  private var propertyDescriptor:CapPropertyDescriptor;
  private var value:*;

  public*/ function StructClipboardEntry$(propertyDescriptor/*:CapPropertyDescriptor*/, value/*:**/) {
    this.propertyDescriptor$9DGN = propertyDescriptor;
    this.value$9DGN = value;
  }/*

  public*/ function getPropertyDescriptor()/*:CapPropertyDescriptor*/ {
    return this.propertyDescriptor$9DGN;
  }/*

  public*/ function getValue()/*:**/ {
    return this.value$9DGN;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      propertyDescriptor$9DGN: null,
      value$9DGN: undefined,
      constructor: StructClipboardEntry$,
      getPropertyDescriptor: getPropertyDescriptor,
      getValue: getValue,
      statics: {FLAVOR: 'struct'}
    };
});
