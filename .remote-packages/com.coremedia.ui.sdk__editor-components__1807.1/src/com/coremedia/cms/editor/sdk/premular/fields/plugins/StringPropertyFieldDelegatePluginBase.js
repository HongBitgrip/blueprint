Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.StringPropertyFieldDelegatePluginBase", function(StringPropertyFieldDelegatePluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {

import com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField;

import ext.Component;
import ext.form.field.TextField;

/**
 * A plugin, which is used within the {@see StringPropertyField} to track
 * changes of the delegated content, when the content of this field is empty;
 * /
[PublicApi]
public class StringPropertyFieldDelegatePluginBase extends PropertyFieldDelegatePlugin {

  public*/ function StringPropertyFieldDelegatePluginBase$(config/*:StringPropertyFieldDelegatePlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$4crS(config);
  }/*

  /**
   * @param component
   * /
  override public*/ function init(component/*:Component*/)/*:void*/ {
    var initialConfig/*:StringPropertyField*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField,component.initialConfig);
    this.bindTo = AS3.getBindable(initialConfig,"bindTo","DUMMY");
    this.fieldContainer =AS3.as( component,  com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField);

    com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePlugin.prototype.init.call(this,component);
  }/*

  override protected*/ function afterLayoutTextfieldContainer(component/*:Component = null*/)/*:void*/ {if(arguments.length<=0)component=null;
    com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePlugin.prototype.afterLayoutTextfieldContainer.call(this,AS3.as(this.fieldContainer.queryById('stringPropertyField'),  Ext.form.field.Text));
  }/*

  override protected*/ function onFieldBlur()/*:void*/ {var this$=this;
    window.setTimeout(
            function ()/*:void*/ {
              var value/*:String*/ = this$.myFieldValueExpression.getValue();
              this$.applyDelegating(value);
            },
            this.getChangeBuffer()); // wait for the spf to save its changes before applying delegation
  }/*

  override protected*/ function applyDelegatedValue()/*:void*/ {
    // suppress change event causing a content change (checkout)
    this.textComponent.suspendEvent("change");
    (AS3.as(this.textComponent,  Ext.form.field.Text)).setValue(this.delegateFieldValueExpression.getValue());
    this.textComponent.resumeEvent("change");
  }/*

  /**
   * checks, if delegating is active, when text is empty
   * /
  override protected*/ function checkForDelegating()/*:void*/ {
    var myValue/*:String*/ = this.myFieldValueExpression.getValue();
    this.applyDelegating(myValue);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePlugin",
      metadata: {"": ["PublicApi"]},
      constructor: StringPropertyFieldDelegatePluginBase$,
      super$4crS: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePlugin.prototype.constructor.apply(this, arguments);
      },
      init: init,
      afterLayoutTextfieldContainer: afterLayoutTextfieldContainer,
      onFieldBlur: onFieldBlur,
      applyDelegatedValue: applyDelegatedValue,
      checkForDelegating: checkForDelegating,
      requires: [
        "Ext.form.field.Text",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePlugin"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField"]
    };
});
