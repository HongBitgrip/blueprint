Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePluginBase", function(PropertyFieldDelegatePluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {

import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;

import ext.Component;
import ext.StringUtil;
import ext.form.FieldContainer;
import ext.plugin.AbstractPlugin;

/**
 * A plugin, which is used within the {@see TextAreaPropertyField} to track
 * changes of the delegated content, when the content of this field is empty;
 * /
public class PropertyFieldDelegatePluginBase extends AbstractPlugin {

  protected var DEFAULT_TEXT_CLS:String = "cm-text-field--display-default-text";

  protected var bindTo:ValueExpression;

  //the field the delegate plugin belongs to
  protected var fieldContainer:FieldContainer;

  //the component the value should be read from
  protected var textComponent:Component;

  /*
   * change this, if the look and feel of this feature should be changed
   * /
  private var delegatePropertyName:String;
  private var masterPropertyName:String;
  protected var delegateFieldValueExpression:ValueExpression;
  private var delegateExpression:ValueExpression;
  private var masterValueExpression:ValueExpression;
  protected var myFieldValueExpression:ValueExpression;

  public*/ function PropertyFieldDelegatePluginBase$(config/*:PropertyFieldDelegatePlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$JBhj(config);
    this.masterPropertyName$JBhj = AS3.getBindable(config,"masterPropertyName");
    this.delegatePropertyName$JBhj = AS3.getBindable(config,"delegatePropertyName");
    this.delegateExpression$JBhj = AS3.getBindable(config,"delegateExpression");
  }/*

  /**
   * @param component
   * /
  override public*/ function init(component/*:Component*/)/*:void*/ {
    this.fieldContainer.addListener('afterlayout',AS3.bind( this,"afterLayoutTextfieldContainer"));
    var propertyName/*:String*/ = component.initialConfig.propertyName;

    if (this.delegateExpression$JBhj) {
      this.delegateFieldValueExpression = this.delegateExpression$JBhj;
    } else if (this.masterPropertyName$JBhj) {
      this.masterValueExpression$JBhj = this.bindTo.extendBy('properties.' + this.masterPropertyName$JBhj);
      this.masterValueExpression$JBhj.addChangeListener(AS3.bind(this,"masterValueChanged$JBhj"));
      var masterDocuments/*:Array*/ = this.masterValueExpression$JBhj.getValue();
      if (masterDocuments.length > 0) {
        var master/*:Content*/ = masterDocuments[0];
        this.delegateFieldValueExpression = com.coremedia.ui.data.ValueExpressionFactory.create('properties.' + this.delegatePropertyName$JBhj, master);
      }
    }
    else {
      this.delegateFieldValueExpression = this.bindTo.extendBy('properties.' + this.delegatePropertyName$JBhj);
    }

    this.myFieldValueExpression = this.bindTo.extendBy('properties.' + propertyName);
  }/*

  protected*/ function afterLayoutTextfieldContainer(component/*:Component = null*/)/*:void*/ {if(arguments.length<=0)component=null;
    this.textComponent = component;
    this.fieldContainer.removeListener('afterlayout',AS3.bind( this,"afterLayoutTextfieldContainer"));
    this.textComponent.addListener("destroy",AS3.bind( this,"onDestroy"));
    this.textComponent.addListener("focus",AS3.bind( this,"disableDelegating"));
    this.textComponent.addListener("blur",AS3.bind( this,"onFieldBlur"));
    this.listenForDelegating();
  }/*

  protected*/ function listenForDelegating()/*:void*/ {
    if (this.delegateFieldValueExpression) {
      this.delegateFieldValueExpression.addChangeListener(AS3.bind(this,"checkForDelegating"));
    }

    if (this.myFieldValueExpression) {
      this.myFieldValueExpression.addChangeListener(AS3.bind(this,"checkForDelegating"));
    }

    // Check for delegating now, events may have been missed.
    this.checkForDelegating();
  }/*

  /**
   * For textfields the changeBuffer is defined on the field container, not the text editor component
   * /
  protected*/ function getChangeBuffer()/*:Number*/ {
    return this.fieldContainer['changeBuffer'];
  }/*

  protected*/ function onFieldBlur()/*:void*/ {
    throw new AS3.Error("Abstract Method: onFieldBlur");
  }/*

  protected*/ function applyDelegatedValue()/*:void*/ {
    throw new AS3.Error("Abstract Method: applyDelegating");
  }/*

  protected*/ function checkForDelegating()/*:void*/ {
    throw new AS3.Error("Abstract Method: checkForDelegating");
  }/*

  protected*/ function onDestroy()/*:void*/ {
    if (this.delegateFieldValueExpression) {
      this.delegateFieldValueExpression.removeChangeListener(AS3.bind(this,"checkForDelegating"));
    }
    if (this.myFieldValueExpression) {
      this.myFieldValueExpression.removeChangeListener(AS3.bind(this,"checkForDelegating"));
    }
  }/*

  /**
   * disables delegating when gain focus
   * /
  protected*/ function disableDelegating()/*:void*/ {
    this.applyDelegateStyle(false);
  }/*

  protected*/ function applyDelegating(myValue/*:String*/)/*:void*/ {
    //textfield is not rendered in some situations like the tab in the background
    if (!this.textComponent || this.textfieldHasFocus$JBhj()) {
      return;
    }
    //only apply delegating if the target has no value
    if (!myValue || Ext.String.trim(myValue).length === 0) {
      this.applyDelegatedValue();
      this.applyDelegateStyle(true);
    }
    else {
      this.applyDelegateStyle(false);
    }
  }/*

  protected*/ function applyDelegateStyle(apply/*:Boolean*/)/*:void*/ {
    if (this.textComponent) {
      if (apply) {
        this.textComponent.addCls(this.DEFAULT_TEXT_CLS);
      }
      else {
        this.textComponent.removeCls(this.DEFAULT_TEXT_CLS);
      }
    }
  }/*

  private*/ function masterValueChanged()/*:void*/ {
    if (this.delegateFieldValueExpression) {
      this.delegateFieldValueExpression.removeChangeListener(AS3.bind(this,"checkForDelegating"));
    }
    var masterDocuments/*:Array*/ = this.masterValueExpression$JBhj.getValue();
    if (masterDocuments.length > 0) {
      var master/*:Content*/ = masterDocuments[0];
      this.delegateFieldValueExpression = com.coremedia.ui.data.ValueExpressionFactory.create('properties.' + this.delegatePropertyName$JBhj, master);
      this.delegateFieldValueExpression.addChangeListener(AS3.bind(this,"checkForDelegating"));
    }
    else {
      this.delegateFieldValueExpression = com.coremedia.ui.data.ValueExpressionFactory.create('noDelegate', com.coremedia.ui.data.beanFactory.createLocalBean());
      this.delegateFieldValueExpression.setValue("");
    }
    this.checkForDelegating();
  }/*

  private*/ function textfieldHasFocus()/*:Boolean*/ {
    // HACK: The condition field['hasFocus'] is not officially documented,
    // but it was mentioned in
    // http://forums.ext.net/showthread.php?12645-SOLVED-verify-if-Textbox-has-focus
    // by the ExtJS core developer Vladimir.
    //
    return this.textComponent['hasFocus']; //webkit browsers cannot focus the checkbox, so we fix it by that:
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      DEFAULT_TEXT_CLS: "cm-text-field--display-default-text",
      bindTo: null,
      fieldContainer: null,
      textComponent: null,
      delegatePropertyName$JBhj: null,
      masterPropertyName$JBhj: null,
      delegateFieldValueExpression: null,
      delegateExpression$JBhj: null,
      masterValueExpression$JBhj: null,
      myFieldValueExpression: null,
      constructor: PropertyFieldDelegatePluginBase$,
      super$JBhj: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      afterLayoutTextfieldContainer: afterLayoutTextfieldContainer,
      listenForDelegating: listenForDelegating,
      getChangeBuffer: getChangeBuffer,
      onFieldBlur: onFieldBlur,
      applyDelegatedValue: applyDelegatedValue,
      checkForDelegating: checkForDelegating,
      onDestroy: onDestroy,
      disableDelegating: disableDelegating,
      applyDelegating: applyDelegating,
      applyDelegateStyle: applyDelegateStyle,
      masterValueChanged$JBhj: masterValueChanged,
      textfieldHasFocus$JBhj: textfieldHasFocus,
      requires: [
        "AS3.Error",
        "Ext.String",
        "Ext.plugin.Abstract",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory"
      ]
    };
});
