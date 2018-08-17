Ext.define("com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBoxBase", function(AvailableLocalesComboBoxBase) {/*package com.coremedia.cms.editor.sdk.translate {

import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class AvailableLocalesComboBoxBase extends LocalComboBox {

  private var localesExpression:ValueExpression;
  private var addEmptyItem:Boolean;

  public*/ function AvailableLocalesComboBoxBase$(config/*:AvailableLocalesComboBox = null*/) {if(arguments.length<=0)config=null;
    this.super$FQpu(config);
  }/*

  internal*/ function getLocalesExpression(addEmptyItem/*:Boolean*/)/*:ValueExpression*/ {
    if (!this.localesExpression$FQpu) {
      this.addEmptyItem$FQpu = addEmptyItem;
      this.localesExpression$FQpu = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getLocales$FQpu"));
    }
    return this.localesExpression$FQpu;
  }/*

  private*/ function getLocales()/*:Array*/ {
    var availableLocalesExpression/*:ValueExpression*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).getLocalesService().getAvailableLocalesExpression();
    var value/*:Object*/ =AS3.as( availableLocalesExpression.getValue(),  Object);

    if (!value) {
      return undefined;
    }

    var result/*:Array*//*<Object>*/ = [];

    if (this.addEmptyItem$FQpu) {
      result.push({'id': '', 'displayName': '---'});
    }

    for (var languageTag/*:String*/ in value) {
      if (value.hasOwnProperty(languageTag)) {
        var locale/*:Locale*/ = value[languageTag];
        result.push({
          'id': languageTag,
          'displayName': locale ? locale.getDisplayName() : languageTag
        });
      }
    }

    return result;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.LocalComboBox",
      localesExpression$FQpu: null,
      addEmptyItem$FQpu: false,
      constructor: AvailableLocalesComboBoxBase$,
      super$FQpu: function() {
        com.coremedia.ui.components.LocalComboBox.prototype.constructor.apply(this, arguments);
      },
      getLocalesExpression: getLocalesExpression,
      getLocales$FQpu: getLocales,
      requires: [
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
