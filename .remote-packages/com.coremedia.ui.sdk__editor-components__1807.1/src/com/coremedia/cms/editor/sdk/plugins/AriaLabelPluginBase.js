Ext.define("com.coremedia.cms.editor.sdk.plugins.AriaLabelPluginBase", function(AriaLabelPluginBase) {/*package com.coremedia.cms.editor.sdk.plugins {

import ext.Component;
import ext.Ext;
import ext.Plugin;
import ext.StringUtil;

/**
 * Plugin to update the aria role of a component depending on it's value.
 * /
public class AriaLabelPluginBase implements Plugin {

  private var component:Component;
  private var parent:Object;
  private var suffix:String;
  private var properties:Array =*/function properties_(){this.properties$AQj7=( []);}/*;
  private var overrideLabel:Boolean = true;

  public*/ function AriaLabelPluginBase$(config/*:AriaLabelPlugin = null*/) {properties_.call(this);if(arguments.length<=0)config=null;
    this.parent$AQj7 = AS3.getBindable(config,"parent");
    this.suffix$AQj7 = AS3.getBindable(config,"suffix") || '';

    if(AS3.getBindable(config,"overrideLabel") !== null && AS3.getBindable(config,"overrideLabel") !== undefined) {
      this.overrideLabel$AQj7 = AS3.getBindable(config,"overrideLabel");
    }

    //set up the properties to check
    this.properties$AQj7.push(AS3.getBindable(config,"parentProperty"));
    this.properties$AQj7.push('ariaLabel');
    this.properties$AQj7.push('title');
  }/*

  /**
   * Stores the component the plugin is working on.
   * @param component
   * /
  public*/ function init(component/*:Component*/)/*:void*/ {
    this.component$AQj7 = component;

    //only apply the plugin if not value is set yet
    if(!component.ariaLabel || this.overrideLabel$AQj7) {
      this.component$AQj7.addListener('afterrender',AS3.bind( this,"componentRendered$AQj7"));
    }
  }/*


  private*/ function componentRendered()/*:void*/ {
    this.component$AQj7.removeListener('afterrender',AS3.bind( this,"componentRendered$AQj7"));

    var parentComponent/*:Component*/ = null;
    if(!this.parent$AQj7){
      parentComponent = this.component$AQj7;
    }
    else if(AS3.as(this.parent$AQj7,  String)) {
      parentComponent = this.component$AQj7.findParentByType(this.parent$AQj7);
    }
    else if(AS3.as(this.parent$AQj7,  Function)) {
      parentComponent = (AS3.as(this.parent$AQj7,  Function)).call(null);
    }

    if(parentComponent) {
      for/* each*/(var $1=0;$1</* in*/ this.properties$AQj7.length;++$1) {var property/*:String*/ =this.properties$AQj7[$1];
        if(this.setAriaLabelFor$AQj7(parentComponent, property)) {
          return;
        }
      }
    }

    Ext['ariaWarn']("No aria label set for " + this.component$AQj7.xtype + " with itemId '" + AS3.getBindable(this.component$AQj7,"itemId","DUMMY") + "'");
  }/*

  /**
   * Sets the aria label with a suffix if the given property is available on the parent component
   * @param parent the referenced parent component
   * @param property the property to use as prefix
   * @return true if the label was set.
   * /
  private*/ function setAriaLabelFor(parent/*:Component*/, property/*:String*/)/*:Boolean*/ {
    if(property) {
      var label/*:String*/ = parent[property];
      if(label) {
        this.component$AQj7.getEl().dom.setAttribute('aria-label', Ext.String.trim(label + ' ' + this.suffix$AQj7));
        return true;
      }
    }
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      component$AQj7: null,
      parent$AQj7: null,
      suffix$AQj7: null,
      overrideLabel$AQj7: true,
      constructor: AriaLabelPluginBase$,
      init: init,
      componentRendered$AQj7: componentRendered,
      setAriaLabelFor$AQj7: setAriaLabelFor,
      requires: [
        "Ext",
        "Ext.String",
        "ext.Plugin"
      ]
    };
});
