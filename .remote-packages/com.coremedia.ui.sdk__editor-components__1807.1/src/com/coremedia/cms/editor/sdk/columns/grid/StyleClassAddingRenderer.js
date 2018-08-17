Ext.define("com.coremedia.cms.editor.sdk.columns.grid.StyleClassAddingRenderer", function(StyleClassAddingRenderer) {/*package com.coremedia.cms.editor.sdk.columns.grid {
import ext.data.Model;

/**
 * A renderer that adds a CSS class provided in a data field.
 * The value is passed through unchanged.
 * /
public class StyleClassAddingRenderer {
  public static*/ function makeRenderer$static(classDataIndex/*:String*/)/*:Function*/ {
    return function (value/*:**/, metaData/*:Object*/, record/*:Model*/)/*:**/ {
      // obtain additional data field with configured name
      var cls/*:String*/ =AS3.as( record.get(classDataIndex),  String);
      if (cls) {
        if (metaData.css) {
          metaData.css += ' ' + cls;
        } else {
          // something falsy. replace with style class.
          metaData.css = cls;
        }
      }
      return value;
    };
  }/*
}*/function StyleClassAddingRenderer$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: StyleClassAddingRenderer$,
      statics: {makeRenderer: makeRenderer$static}
    };
});
