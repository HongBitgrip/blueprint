Ext.define("com.coremedia.ui.plugins.BindItemsPluginBase", function(BindItemsPluginBase) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.Plugin;
import ext.container.Container;

/**
 * The plugin binds a list of values or beans to a list of components.
 * It must be used with containers only and replaces the items of its container with the
 * list of bound components.
 * /
public class BindItemsPluginBase implements Plugin {

  private var container:Container;
  private var configsListValueExpression:ValueExpression;
  private var reuseComponents:Boolean;
  private var lazy:Boolean;
  private var lazyEvent:String;

  /**
   * Create BindItemsPlugin plugin
   * @param config the configuration object
   * /
  public*/ function BindItemsPluginBase$(config/*:BindItemsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.configsListValueExpression$O8Vr = AS3.getBindable(config,"valueExpression");
    this.reuseComponents$O8Vr = AS3.getBindable(config,"reuseComponents") !== false;
    this.lazy$O8Vr = AS3.getBindable(config,"lazy") || false;
    this.lazyEvent$O8Vr = AS3.getBindable(config,"lazyEvent") || 'beforerender';
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    if (!(AS3.is(component,  Ext.container.Container))) {
      throw "unsupported container type: " + component.xtype;
    }

    this.container$O8Vr =AS3.as( component,  Ext.container.Container);

    if (this.lazy$O8Vr) {
      this.container$O8Vr.mon(this.container$O8Vr, this.lazyEvent$O8Vr,AS3.bind( this,"doInit$O8Vr"));
    } else {
      this.doInit$O8Vr();
    }
  }/*

  private*/ function doInit()/*:void*/ {
    if (this.lazy$O8Vr) {
      this.container$O8Vr.mun(this.container$O8Vr, this.lazyEvent$O8Vr,AS3.bind( this,"doInit$O8Vr"));
    }

    this.container$O8Vr.addListener('beforedestroy',AS3.bind( this,"containerDestroyed$O8Vr"));
    this.dataUpdated$O8Vr(this.configsListValueExpression$O8Vr);
    this.configsListValueExpression$O8Vr.addChangeListener(AS3.bind(this,"dataUpdated$O8Vr"));
  }/*

  private*/ function containerDestroyed()/*:void*/ {
    this.configsListValueExpression$O8Vr.removeChangeListener(AS3.bind(this,"dataUpdated$O8Vr"));
    this.configsListValueExpression$O8Vr = null;
    this.container$O8Vr = null;
  }/*

  private*/ function dataUpdated(configsListValueExpression/*:ValueExpression*/)/*:void*/ {/*
    const*/var list/*:Array*/ = com.coremedia.ui.util.ArrayUtils.asArray(configsListValueExpression.getValue());
    if (list) {
      this.bindItems$O8Vr(list);
    } else {
      // new list is empty, so remove items
      this.container$O8Vr.removeAll(true);
    }
    this.container$O8Vr.updateLayout();
  }/*

  /**
   * Add the given list of configs and add them to the container's items.
   * If reuseComponents is set, keep child components with itemIds that are still
   * contained in the config list.
   * @param list array of config objects
   * /
  private*/ function bindItems(list/*:Array*/)/*:void*/ {var this$=this;
    var components/*:Array*/ = list.concat(); // must use a clone of the list as it is modified if reuseComponents is true

    if (!this.reuseComponents$O8Vr) {
      this.container$O8Vr.removeAll(true);
    } else if (this.container$O8Vr.itemCollection) {
      var itemIds/*:Array*/ = components.map(itemIdOf$static);
      var lastReusedIndex/*:int*/ = -1;
      var reusedComponentsCount/*:int*/ = 0;
      this.container$O8Vr.itemCollection.getRange().forEach(function (item/*:Component*/)/*:void*/ {
        var itemId/*:String*/ = item.getItemId();
        var newIndex/*:int*/ = itemId ? itemIds.indexOf(itemId) : -1;
        if (newIndex === -1 || newIndex < lastReusedIndex) {
          // Remove obsolete or not-reusable-because-of-changed-order old item:
          this$.container$O8Vr.remove(item, true);
        } else {
          // Replace new config by existing component:
          components[newIndex] = item;
          ++reusedComponentsCount;
          lastReusedIndex = newIndex;
        }
      });

      if (reusedComponentsCount === lastReusedIndex + 1) {
        // starting from index 0, all components have been reused, no need to remove and re-add everything:
        this.container$O8Vr.add(components.slice(lastReusedIndex + 1));
        return;
      }

      this.container$O8Vr.removeAll(false);
    }

    this.container$O8Vr.add(components);
  }/*

  private static*/ function itemIdOf$static(config/*:Component*/)/*:String*/ {
    return AS3.getBindable(config,"itemId","DUMMY");
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      container$O8Vr: null,
      configsListValueExpression$O8Vr: null,
      reuseComponents$O8Vr: false,
      lazy$O8Vr: false,
      lazyEvent$O8Vr: null,
      constructor: BindItemsPluginBase$,
      init: init,
      doInit$O8Vr: doInit,
      containerDestroyed$O8Vr: containerDestroyed,
      dataUpdated$O8Vr: dataUpdated,
      bindItems$O8Vr: bindItems,
      requires: [
        "Ext.container.Container",
        "com.coremedia.ui.util.ArrayUtils",
        "ext.Plugin"
      ]
    };
});
