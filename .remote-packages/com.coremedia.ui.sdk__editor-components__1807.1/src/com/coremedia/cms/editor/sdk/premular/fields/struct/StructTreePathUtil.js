Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreePathUtil", function(StructTreePathUtil) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import ext.JSON;

public class StructTreePathUtil {
  internal static const ROOT_ID:String =*/function ROOT_ID$static_(){StructTreePathUtil.ROOT_ID=( StructTreePathUtil.encodePath([]));}/*;

  internal static*/ function encodePath$static(propertyPath/*:Array*/)/*:String*/ {
    return encodeURIComponent(Ext.JSON.encode(propertyPath));
  }/*

  internal static*/ function decodePath$static(encodedPropertyPath/*:String*/)/*:Array*/ {
    return AS3.as( Ext.JSON.decode(decodeURIComponent(encodedPropertyPath)),  Array);
  }/*
}*/function StructTreePathUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: StructTreePathUtil$,
      statics: {
        ROOT_ID: undefined,
        encodePath: encodePath$static,
        decodePath: decodePath$static,
        __initStatics__: function() {
          ROOT_ID$static_();
        }
      },
      requires: ["Ext.JSON"]
    };
});
