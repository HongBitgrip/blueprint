Ext.define("com.coremedia.ui.plugins.BindComponentsPluginBase", function(BindComponentsPluginBase) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.Plugin;
import ext.container.Container;
import ext.dom.Element;

/**
 * The plugin binds a list of values or beans to a list of components.
 * It must be used with containers only and replaces the items of its container with the
 * list of bound components.
 * /
public class BindComponentsPluginBase implements Plugin {

  private var beanListValueExpression:ValueExpression;
  private var container:Container;
  private var sortField:String;
  private var sortDirection:String;
  private var reuseComponents:Boolean;
  private var clearBeforeUpdate:Boolean;
  private var removeFunction:Function;
  private var addFunction:Function;
  private var configBeanParameterName:String;
  private var template:Object;
  private var lastList:Array;
  private var getKey:Function;
  private var currentMapping:Object =*/function currentMapping_(){this.currentMapping$XpU9=( {});}/*; // bean URI (or index) -> Component
  private var newMapping:Object =*/function newMapping_(){this.newMapping$XpU9=( {});}/*; // bean URI (or index) -> Component
  private var beforeUpdateCallback:Function;
  private var afterUpdateCallback:Function;
  private var containerDefaults:Object;
  private var scrollLocator:Function;

  /**
   * Create BindComponentsPlugin plugin
   * @param config the configuration object
   * /
  public*/ function BindComponentsPluginBase$(config/*:BindComponentsPlugin = null*/) {currentMapping_.call(this);newMapping_.call(this);if(arguments.length<=0)config=null;
    if (!AS3.getBindable(config,"template")) {
      throw "required property 'template' is not set";
    }
    this.configBeanParameterName$XpU9 = AS3.getBindable(config,"configBeanParameterName") || 'currentBean';
    this.template$XpU9 = AS3.getBindable(config,"template");
    this.sortField$XpU9 = AS3.getBindable(config,"sortField");
    this.sortDirection$XpU9 = AS3.getBindable(config,"sortDirection") || 'ASC';
    this.reuseComponents$XpU9 = AS3.getBindable(config,"reuseComponents") !== false;
    this.clearBeforeUpdate$XpU9 = AS3.getBindable(config,"clearBeforeUpdate");
    this.removeFunction$XpU9 = AS3.getBindable(config,"removeFunction");
    this.addFunction$XpU9 = AS3.getBindable(config,"addFunction");
    this.getKey$XpU9 = AS3.getBindable(config,"getKey") || defaultGetKey$static;
    this.beanListValueExpression$XpU9 = AS3.getBindable(config,"valueExpression");
    this.beforeUpdateCallback$XpU9 = AS3.getBindable(config,"beforeUpdateCallback");
    this.afterUpdateCallback$XpU9 = AS3.getBindable(config,"afterUpdateCallback");
    if (AS3.getBindable(config,"scrollLocator")) {
      this.scrollLocator$XpU9 = AS3.getBindable(config,"scrollLocator");
    } else if (AS3.getBindable(config,"preserveScroll")) {
      this.scrollLocator$XpU9 =AS3.bind( this,"getScrollObject");
    }
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    if (!(AS3.is(component,  Ext.container.Container))) {
      throw "unsupported container type: " + component.xtype;
    }

    this.container$XpU9 =AS3.as( component,  Ext.container.Container);
    this.containerDefaults$XpU9 = this.container$XpU9.defaults;
    this.container$XpU9["defaults"] = {};
    this.container$XpU9.addListener('beforedestroy',AS3.bind( this,"containerDestroyed$XpU9"));
    this.dataUpdated$XpU9(this.beanListValueExpression$XpU9);
    this.beanListValueExpression$XpU9.addChangeListener(AS3.bind(this,"dataUpdated$XpU9"));
  }/*

  private*/ function containerDestroyed()/*:void*/ {
    this.beanListValueExpression$XpU9.removeChangeListener(AS3.bind(this,"dataUpdated$XpU9"));
    this.beanListValueExpression$XpU9 = null;
    this.container$XpU9 = null;
  }/*

  private*/ function dataUpdated(beanListValueExpression/*:ValueExpression*/)/*:void*/ {/*
    const*/var list/*:Array*/ = com.coremedia.ui.util.ArrayUtils.asArray(beanListValueExpression.getValue());
    if (!com.coremedia.ui.util.ObjectUtils.equal(list, this.lastList$XpU9)) {

      var scrollState/*:Object*/;
      var scroller/*:Element*/ = undefined;
      if (this.scrollLocator$XpU9) {
        scroller =AS3.as( this.scrollLocator$XpU9.call(),  Ext.dom.Element);
      }

      if (scroller) {
        scrollState = scroller.getScroll();
      }

      if (this.beforeUpdateCallback$XpU9) {
        this.beforeUpdateCallback$XpU9.call(this.container$XpU9);
      }

      if (list) {
        this.bindComponents$XpU9(list);
      } else {
        // new list is empty, so remove items
        if (this.removeFunction$XpU9) {
          this.removeFunction$XpU9.call(null, this.container$XpU9, true);
        } else {
          this.container$XpU9.removeAll(true);
        }
      }
      this.lastList$XpU9 = list;

      if (scroller) {
        var currentScrollState/*:Object*/ = scroller.getScroll();
        if ((currentScrollState.top !== 0 && currentScrollState.top !== scrollState.top)
                || (currentScrollState.left !== 0 && currentScrollState.left !== scrollState.left))  {
          scrollState = currentScrollState;
        }
      }

      if (scroller) {
        scroller.setScrollTop(scrollState.top);
        scroller.setScrollLeft(scrollState.left);
      }

      if (this.afterUpdateCallback$XpU9) {
        this.afterUpdateCallback$XpU9.call(this.container$XpU9);
      }
    }
  }/*

  /**
   * compute the components for the given list of beans and add them to the container's items
   * @param list array of beans
   * /
  private*/ function bindComponents(list/*:Array*/)/*:void*/ {
    var components/*:Array*/ = list.map(AS3.bind(this,"getOrCreateComponent$XpU9"));
    if (this.reuseComponents$XpU9) {
      if (this.container$XpU9.itemCollection) {
        // Remove obsolete old items.
        for (var index/*:String*/ in this.currentMapping$XpU9) {
          if (!this.newMapping$XpU9[index]) {
            this.container$XpU9.remove(this.currentMapping$XpU9[index], true);
          }
        }
      }
      if (this.clearBeforeUpdate$XpU9) {
        // Remove all preexisting items.
        if (this.removeFunction$XpU9) {
          this.removeFunction$XpU9.call(null, this.container$XpU9, false);
        } else {
          this.container$XpU9.removeAll(false);
        }
      }
    } else {
      if (this.removeFunction$XpU9) {
        this.removeFunction$XpU9.call(null, this.container$XpU9, true);
      } else {
        this.container$XpU9.removeAll(true);
      }
    }
    //set the new items
    if (this.addFunction$XpU9) {
      this.addFunction$XpU9.call(null, this.container$XpU9, components);
    } else {
      this.container$XpU9.add(components);
    }
    this.currentMapping$XpU9 = this.newMapping$XpU9;
    this.newMapping$XpU9 = {};
  }/*

  /**
   * lookup the component for a bound item from the previous currentMapping or create it
   * @param element the bean that is (to be) bound to a component
   * @return the component
   * /
  private*/ function getOrCreateComponent(element/*:**/)/*:Component*/ {
    var index/*:**/ = this.getKey$XpU9(element);
    var component/*:Component*/ = this.currentMapping$XpU9[index];
    if (!component || !this.reuseComponents$XpU9) {
      // let's create a component
      var config/*:Component*/ = this.createConfig$XpU9(element);
      Ext.applyIf(config, this.containerDefaults$XpU9);
      component = Ext.ComponentManager.create(config, 'component');
    }
    this.newMapping$XpU9[index] = component;
    return component;
  }/*

  private*/ function createConfig(element/*:**/)/*:Component*/ {
    var config/*:Component*/ = AS3.cast(Ext.Component,Ext.apply({}, this.template$XpU9));
    if (element !== undefined) {
      config[this.configBeanParameterName$XpU9] = element;
    }
    return config;
  }/*

  private static*/ function defaultGetKey$static(value/*:**/)/*:String*/ {
    if (typeof value === "string") {
      return String(value);
    } else if (AS3.is(value,  com.coremedia.ui.data.RemoteBean)) {
      return AS3.cast(com.coremedia.ui.data.RemoteBean,value).getUriPath();
    } else if (value['getId']) {
      return String(value['getId']());
    } else {
      throw new AS3.Error("cannot get key of value: " + value);
    }
  }/*

  public*/ function getScrollObject()/*:Element*/ {
    var result/*:Element*/ = undefined;
    if (this.container$XpU9.rendered && this.container$XpU9["getScrollerEl"]) {
      result = this.container$XpU9["getScrollerEl"]();
    }
    return result;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      beanListValueExpression$XpU9: null,
      container$XpU9: null,
      sortField$XpU9: null,
      sortDirection$XpU9: null,
      reuseComponents$XpU9: false,
      clearBeforeUpdate$XpU9: false,
      removeFunction$XpU9: null,
      addFunction$XpU9: null,
      configBeanParameterName$XpU9: null,
      template$XpU9: null,
      lastList$XpU9: null,
      getKey$XpU9: null,
      beforeUpdateCallback$XpU9: null,
      afterUpdateCallback$XpU9: null,
      containerDefaults$XpU9: null,
      scrollLocator$XpU9: null,
      constructor: BindComponentsPluginBase$,
      init: init,
      containerDestroyed$XpU9: containerDestroyed,
      dataUpdated$XpU9: dataUpdated,
      bindComponents$XpU9: bindComponents,
      getOrCreateComponent$XpU9: getOrCreateComponent,
      createConfig$XpU9: createConfig,
      getScrollObject: getScrollObject,
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.Component",
        "Ext.ComponentManager",
        "Ext.container.Container",
        "Ext.dom.Element",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.ObjectUtils",
        "ext.Plugin"
      ]
    };
});
