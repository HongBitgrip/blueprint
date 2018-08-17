Ext.define("com.coremedia.cms.editor.sdk.plugins.AriaVisibilityPluginBase", function(AriaVisibilityPluginBase) {/*package com.coremedia.cms.editor.sdk.plugins {

import com.coremedia.ui.data.ValueExpression;

import ext.Component;
import ext.Plugin;

/**
 * Plugin to update the aria role of a component depending on it's value.
 * /
public class AriaVisibilityPluginBase implements Plugin {

  private var bindTo:ValueExpression;
  private var component:Component;

  public*/ function AriaVisibilityPluginBase$(config/*:AriaVisibilityPlugin = null*/) {if(arguments.length<=0)config=null;
    this.bindTo$eT8d = AS3.getBindable(config,"bindTo");
    this.bindTo$eT8d.addChangeListener(AS3.bind(this,"valueChanged$eT8d"));
  }/*

  /**
   * Stores the component the plugin is working on.
   * @param component
   * /
  public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    this.component$eT8d = component;
    this.component$eT8d.addListener('afterrender',AS3.bind( this,"valueChanged$eT8d"));

    this.component$eT8d.on('beforedestroy', function ()/*:void*/ {
      this$.bindTo$eT8d.removeChangeListener(AS3.bind(this$,"valueChanged$eT8d"));
    });
  }/*

  /**
   * Called when the value of the component changes.
   * Will update the aria visibility.
   * /
  private*/ function valueChanged()/*:void*/ {
    var value/*:**/ = this.bindTo$eT8d.getValue();
    var hidden/*:Boolean*/ = !value || value.length === 0;
    if (this.component$eT8d.getEl()) {
      this.setAriaHidden$eT8d(hidden);
    }
  }/*

  private*/ function setAriaHidden(hidden/*:Boolean*/)/*:void*/ {
    this.component$eT8d.getEl().dom.setAttribute('aria-hidden', hidden);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      bindTo$eT8d: null,
      component$eT8d: null,
      constructor: AriaVisibilityPluginBase$,
      init: init,
      valueChanged$eT8d: valueChanged,
      setAriaHidden$eT8d: setAriaHidden,
      requires: ["ext.Plugin"]
    };
});
