Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.RichTextPropertyFieldDelegatePluginBase", function(RichTextPropertyFieldDelegatePluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {

import com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea;
import com.coremedia.ui.ckeditor.RichTextArea;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.form.FieldContainer;

public class RichTextPropertyFieldDelegatePluginBase extends AbstractRichTextPropertyFieldDelegatePluginBase {

  private var myCkEditor:*;

  public*/ function RichTextPropertyFieldDelegatePluginBase$(config/*:RichTextPropertyFieldDelegatePlugin = null*/) {if(arguments.length<=0)config=null;
    this.DEFAULT_TEXT_CLS = "cke_editable--display-default-text";
    this.super$pSg4(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    this.fieldContainer = (AS3.as(component,  Ext.form.FieldContainer));
    this.bindTo = this.fieldContainer.initialConfig.bindTo;
    com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase.prototype.init.call(this,component);
  }/*

  override protected*/ function afterLayoutTextfieldContainer(component/*:Component = null*/)/*:void*/ {if(arguments.length<=0)component=null;
    var rt/*:CoreMediaRichTextArea*/ =AS3.as( this.fieldContainer.query(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea.xtype).build())[0],  com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea);
    this.textComponent = rt;
    this.myCkEditor$pSg4 = (AS3.as(this.textComponent,  com.coremedia.ui.ckeditor.RichTextArea)).getCKEditor();

    this.fieldContainer.removeListener('afterlayout',AS3.bind( this,"afterLayoutTextfieldContainer"));
    this.textComponent.addListener("destroy",AS3.bind( this,"onDestroy"));
    this.myCkEditor$pSg4.on("focus",AS3.bind( this,"disableDelegating"));
    this.myCkEditor$pSg4.on("blur",AS3.bind( this,"onFieldBlur"));
    this.myCkEditor$pSg4.on('instanceReady',AS3.bind( this,"onCKInstanceReady$pSg4"));
    this.listenForDelegating();
  }/*

  /**
   * Wait until the CKEditor is ready too, this takes takes longer that layouting the textfield.
   * /
  private*/ function onCKInstanceReady()/*:void*/ {
    this.myCkEditor$pSg4.removeListener('instanceReady',AS3.bind( this,"onCKInstanceReady$pSg4"));
    this.onInstanceReady();
  }/*

  /**
   * We have to re-enable editing mode for the richtext, executed when the editor is focused.
   * /
  override protected*/ function disableDelegating()/*:void*/ {
    AS3.setBindable((AS3.as(this.textComponent,  com.coremedia.ui.ckeditor.RichTextArea)),"delegating" , false);
    com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase.prototype.disableDelegating.call(this);
  }/*

  /**
   * For richt text fields the changeBuffer is on the text editor component, not the field container
   * /
  override protected*/ function getChangeBuffer()/*:Number*/ {
    return AS3.getBindable((AS3.as(this.textComponent,  com.coremedia.ui.ckeditor.RichTextArea)),"changeBuffer","DUMMY");
  }/*

  /**
   * Apply delegating value to the richtext editor.
   * We ensure that no value is written by using the marker boolean 'delegating'.
   * The RichTextEditorBase and the WriteBeforeFlushPlugin will check for this flag.
   * @param value the value that should be displayed in the rich text area as delegated value.
   * /
  override protected*/ function setDelegationValue(value/*:String*/)/*:void*/ {
    AS3.setBindable((AS3.as(this.textComponent,  com.coremedia.ui.ckeditor.RichTextArea)),"delegating" , true);
    this.myCkEditor$pSg4.setData(value);
  }/*

  /**
   * Remove CKEditor listeners!
   * /
  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase.prototype.onDestroy.call(this);
    this.myCkEditor$pSg4.on("focus",AS3.bind( this,"disableDelegating"));
    this.myCkEditor$pSg4.on("blur",AS3.bind( this,"onFieldBlur"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase",
      myCkEditor$pSg4: undefined,
      constructor: RichTextPropertyFieldDelegatePluginBase$,
      super$pSg4: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase.prototype.constructor.apply(this, arguments);
      },
      init: init,
      afterLayoutTextfieldContainer: afterLayoutTextfieldContainer,
      onCKInstanceReady$pSg4: onCKInstanceReady,
      disableDelegating: disableDelegating,
      getChangeBuffer: getChangeBuffer,
      setDelegationValue: setDelegationValue,
      onDestroy: onDestroy,
      requires: [
        "Ext.form.FieldContainer",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase",
        "com.coremedia.ui.ckeditor.RichTextArea",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea"]
    };
});
