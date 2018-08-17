Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.TextAreaPropertyFieldDelegatePluginBase", function(TextAreaPropertyFieldDelegatePluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {

import com.coremedia.cms.editor.sdk.premular.fields.TextAreaPropertyField;
import com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer;
import com.coremedia.ui.components.ResizableTextArea;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.form.field.TextArea;
import ext.form.field.TextField;

/**
 * A plugin, which is used within the {@see TextAreaPropertyField} to track
 * changes of the delegated content, when the content of this field is empty;
 * /
public class TextAreaPropertyFieldDelegatePluginBase extends AbstractRichTextPropertyFieldDelegatePluginBase{

  [Bindable]
  public var delegateRichText:Boolean = true;

  public*/ function TextAreaPropertyFieldDelegatePluginBase$(config/*:TextAreaPropertyFieldDelegatePlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$Bqqp(config);
  }/*

  /**
   * @param component
   * /
  override public*/ function init(component/*:Component*/)/*:void*/ {
    var initialConfig/*:TextAreaPropertyField*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.TextAreaPropertyField,component.initialConfig);
    this.bindTo = AS3.getBindable(initialConfig,"bindTo");
    this.fieldContainer =AS3.as( component,  com.coremedia.cms.editor.sdk.premular.fields.TextAreaPropertyField);

    com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase.prototype.init.call(this,component);
  }/*

  override protected*/ function afterLayoutTextfieldContainer(component/*:Component = null*/)/*:void*/ {if(arguments.length<=0)component=null;
    var textArea/*:TextArea*/ =AS3.as( this.fieldContainer.query(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.ui.components.ResizableTextArea.xtype).build())[0],  Ext.form.field.TextArea);
    com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase.prototype.afterLayoutTextfieldContainer.call(this,textArea);
    this.onInstanceReady();
  }/*

  override protected*/ function setDelegationValue(value/*:String*/)/*:void*/ {
    // suppress change event causing a content change (checkout)
    this.textComponent.suspendEvent("change");
    if (value !== null) {
      if (AS3.getBindable(this,"delegateRichText")) {
        (AS3.as(this.textComponent,  Ext.form.field.Text)).setValue(com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer.convertToPlainText(value));
      }
      else {
        (AS3.as(this.textComponent,  Ext.form.field.Text)).setValue(value);
      }
    } else {
      (AS3.as(this.textComponent,  Ext.form.field.Text)).setValue("");
    }
    this.textComponent.resumeEvent("change");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase",
      constructor: TextAreaPropertyFieldDelegatePluginBase$,
      super$Bqqp: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase.prototype.constructor.apply(this, arguments);
      },
      init: init,
      afterLayoutTextfieldContainer: afterLayoutTextfieldContainer,
      setDelegationValue: setDelegationValue,
      config: {delegateRichText: true},
      requires: [
        "Ext.form.field.Text",
        "Ext.form.field.TextArea",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase",
        "com.coremedia.ui.components.ResizableTextArea",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.fields.TextAreaPropertyField",
        "com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer"
      ]
    };
});
