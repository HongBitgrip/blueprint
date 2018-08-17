Ext.define("com.coremedia.ui.plugins.WriteBeforeFlushPluginBase", function(WriteBeforeFlushPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.ckeditor.RichTextArea;
import com.coremedia.ui.data.BeforeFlushEvent;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Ext;
import ext.Plugin;
import ext.form.field.TextField;

/**
 * A plugin to make an ext.form.TextField send 'change' events
 * before a bean that is indicated by a value expression is about to be flushed.
 * /
public class WriteBeforeFlushPluginBase implements Plugin {
  private static const*/var PROPERTY_VALUE$static/*:String*/ = 'value';/*
  private static const*/var PROPERTY_ORIGINAL_VALUE$static/*:String*/ = 'originalValue';/*
  private static const*/var EVENT_CHANGE$static/*:String*/ = 'change';/*

  private var textField:Component;
  private var isRichTextArea:Boolean;
  private var valueExpression:ValueExpression;

  private var currentBean:RemoteBean = null;

  /**
   * A plugin to make an ext.form.TextField send 'change' events immediately after changes.
   * To do so, it installs a 'keypress' event listener that, after the event has been processed
   * and has actually changed the field's value, fires a 'change' event.
   * /
  public*/ function WriteBeforeFlushPluginBase$(config/*:WriteBeforeFlushPlugin = null*/) {if(arguments.length<=0)config=null;
    this.valueExpression$hury = AS3.getBindable(config,"valueExpression");
  }/*

  private*/ function beforeFlush(event/*:BeforeFlushEvent*/)/*:void*/ {
    // If the text field has lost its focus, we can assume that it has send
    // a change event, if the current value differed from the start value
    // that was recorded at focus time. We want to make sure that we do not send
    // late change events, because these may trigger race conditions.
    if (this.hasFocus$hury()) {
      var dirty/*:Boolean*/;
      var newValue/*:String*/; // only guaranteed to be set if dirty
      var originalValue/*:String*/; // only guaranteed to be set if dirty
      if (this.isRichTextArea$hury) {
        dirty = (AS3.as(this.textField$hury,  com.coremedia.ui.ckeditor.RichTextArea)).isDirty() && !AS3.getBindable((AS3.as(this.textField$hury,  com.coremedia.ui.ckeditor.RichTextArea)),"delegating");
        com.coremedia.ui.logging.Logger.debug(com.coremedia.ui.plugins.WriteBeforeFlushPlugin + ": ValueExpression " + this.valueExpression$hury.getValue() + " dirty: " + dirty);
        if (dirty) {
          newValue = com.coremedia.ui.util.ObjectUtils.getProperty(this.textField$hury, PROPERTY_VALUE$static);
          originalValue = com.coremedia.ui.util.ObjectUtils.getProperty(this.textField$hury, PROPERTY_ORIGINAL_VALUE$static);
        }
      } else {
        newValue = com.coremedia.ui.util.ObjectUtils.getProperty(this.textField$hury, PROPERTY_VALUE$static);
        originalValue = com.coremedia.ui.util.ObjectUtils.getProperty(this.textField$hury, PROPERTY_ORIGINAL_VALUE$static);
        dirty = newValue !== originalValue;
      }
      if (dirty) {
        this.textField$hury.fireEvent(EVENT_CHANGE$static, this.textField$hury, originalValue, newValue);
        com.coremedia.ui.logging.Logger.debug(com.coremedia.ui.plugins.WriteBeforeFlushPlugin + ": fire change event: originalValue " + originalValue + ", newValue " + newValue);
        // Remember that the new value was propagated to the listeners.
        this.textField$hury[PROPERTY_ORIGINAL_VALUE$static] = newValue;
        if (this.isRichTextArea$hury){
          (AS3.as(this.textField$hury,  com.coremedia.ui.ckeditor.RichTextArea)).resetDirty();
        }
      }
    }
  }/*

  private*/ function hasFocus()/*:**/ {
    // HACK: The condition textField['hasFocus'] is not officially documented,
    // but it was mentioned in
    // http://forums.ext.net/showthread.php?12645-SOLVED-verify-if-Textbox-has-focus
    // by the ExtJS core developer Vladimir.
    //
    // Rich text areas do not support focusing. Treat specially.
    //TODO: EXT6_API
    return this.isRichTextArea$hury || this.textField$hury['hasFocus'];
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    if (AS3.is(component,  Ext.form.field.Text) ||AS3.is( component,  com.coremedia.ui.ckeditor.RichTextArea)) {
      this.textField$hury = component;
      this.isRichTextArea$hury =AS3.is( this.textField$hury,  com.coremedia.ui.ckeditor.RichTextArea);
    } else {
      throw new AS3.Error(Ext.getClassName(this) +
              " plugin only supports ext.form.TextField and com.coremedia.ui.ckeditor.RichTextArea, not " +
              component.constructor.xtype + ".");
    }

    this.valueExpression$hury.addChangeListener(AS3.bind(this,"registerListener$hury"));
    this.registerListener$hury();
    component.on('removed',AS3.bind( this,"unregisterListeners$hury"));
  }/*

  private*/ function registerListener()/*:void*/ {
    var nextBean/*:RemoteBean*/ =AS3.as( this.valueExpression$hury.getValue(),  com.coremedia.ui.data.RemoteBean);
    if (nextBean !== this.currentBean$hury) {
      if (this.currentBean$hury) {
        this.currentBean$hury.removeBeforeFlushListener(AS3.bind(this,"beforeFlush$hury"));
      }
      this.currentBean$hury = nextBean;
      if (this.currentBean$hury) {
        this.currentBean$hury.addBeforeFlushListener(AS3.bind(this,"beforeFlush$hury"));
      }
    }
  }/*

  private*/ function unregisterListeners()/*:void*/ {
    if (this.currentBean$hury) {
      this.currentBean$hury.removeBeforeFlushListener(AS3.bind(this,"beforeFlush$hury"));
      this.currentBean$hury = null;
    }
    this.valueExpression$hury.removeChangeListener(AS3.bind(this,"registerListener$hury"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      textField$hury: null,
      isRichTextArea$hury: false,
      valueExpression$hury: null,
      currentBean$hury: null,
      constructor: WriteBeforeFlushPluginBase$,
      beforeFlush$hury: beforeFlush,
      hasFocus$hury: hasFocus,
      init: init,
      registerListener$hury: registerListener,
      unregisterListeners$hury: unregisterListeners,
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.form.field.Text",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ObjectUtils",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.ui.ckeditor.RichTextArea",
        "com.coremedia.ui.plugins.WriteBeforeFlushPlugin"
      ]
    };
});
