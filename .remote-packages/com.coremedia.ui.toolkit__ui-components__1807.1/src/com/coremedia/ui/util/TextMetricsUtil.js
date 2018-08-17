Ext.define("com.coremedia.ui.util.TextMetricsUtil", function(TextMetricsUtil) {/*package com.coremedia.ui.util {
import ext.Ext;
import ext.dom.Element;
import ext.util.TextMetrics;

public class TextMetricsUtil {
  public static*/ function getMaxWidth$static(elementTagName/*:String*/, classes/*:Array*/, strings/*:Array*/)/*:int*/ {
    var result/*:int*/ = 0;

    var referenceElement/*:Element*/ = Ext.dom.Element.get(window.document.createElement(elementTagName));
    referenceElement.setVisible(false);
    Ext.fly(window.document.body).appendChild(referenceElement);
    for (var i/*:int*/ = 0; i < classes.length; i++) {
      referenceElement.addCls(classes[i]);
    }
    var textMets/*:TextMetrics*/ = new Ext.util.TextMetrics(referenceElement);
    for (var j/*:int*/ = 0; j < strings.length; j++) {
      result = Math.max(result, textMets.getWidth(strings[j]));
    }
    referenceElement.remove();
    return result;
  }/*
}*/function TextMetricsUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TextMetricsUtil$,
      statics: {getMaxWidth: getMaxWidth$static},
      requires: [
        "Ext",
        "Ext.dom.Element",
        "Ext.util.TextMetrics"
      ]
    };
});
