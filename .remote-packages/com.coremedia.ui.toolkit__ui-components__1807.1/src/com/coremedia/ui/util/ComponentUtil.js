Ext.define("com.coremedia.ui.util.ComponentUtil", function(ComponentUtil) {/*package com.coremedia.ui.util {

import ext.Component;
import ext.ComponentManager;
import ext.container.Container;
import ext.panel.Panel;
import ext.toolbar.Toolbar;

public class ComponentUtil {
  /**
   * Determine a component with the given xtype (or a subtype thereof)
   * that is a parent component of the given component
   * and pass it as the single argument to the callback function.
   *
   * @param component the base component
   * @param xtype the xtype to search for
   * @param callback the callback function
   * /
  public static*/ function findAsParentOf$static(component/*:Component*/, xtype/*:String*/, callback/*:Function*/)/*:void*/ {
    (function search(component/*:Component*/)/*:void*/ {
      // Crawl up the container hierarchy.
      // For toolbars, no owner is defined by Ext JS,
      // so that we have to use our own magic backlink to the panel.
      while (component.up() || component['cmOwnerCt']) {
        component = component.up() || component['cmOwnerCt'];
        if (component.isXType(xtype)) {
          callback(component);
          return;
        }
      }
      if (!component.rendered) {
        component.mon(component, "added", search, null, {single:true});
      } else {
        callback(null);
      }
    })(component);
  }/*

  /**
   * Searches for items in a container with a given xtype
   * This method works just like Ext.Component.query, but escapes all dots in the xtype string before calling the query method
   *
   * @param container the container
   * @param xtype the xtype of the items we are looking for
   * /
  public static*/ function findByXType$static(container/*:Container*/, xtype/*:String*/)/*:Array*/ {
    return container.query(xtype.split(".").join("\\."));
  }/*

  /**
   * Execute the given callback once the given component has been rendered.
   * Execute the callback before returning from the call if the component is
   * already rendered.
   *
   * @param component the component
   * @param callback the callback
   * /
  public static*/ function afterRenderOrNow$static(component/*:Component*/, callback/*:Function*/)/*:void*/ {
    if (component.rendered) {
      callback();
    } else {
      component.on("afterrender", callback, null, {
        single: true
      });
    }
  }/*

  /**
   * Clone the given component from its xtype and initialConfig.
   *
   * @param component the component to clone
   * @return the cloned component
   * /
  public static*/ function cloneComponent$static(component/*:Component*/)/*:Component*/ {
    if (!component) {
      return component;
    }
    return Ext.ComponentManager.create(component.initialConfig, component.xtype);
  }/*

  /**
   * Clone the given array of components from their xtypes and initialConfigs.
   *
   * @param components the components to clone
   * @return the cloned components
   * /
  public static*/ function cloneComponents$static(components/*:Array*/)/*:Array*/ {
    if (!components) {
      return components;
    }
    return components.map(ComponentUtil.cloneComponent);
  }/*

  /**
   * @param panel the panel
   * @return Returns the footer toolbar of the panel if existing, otherwise null.
   * /
  public static*/ function getFooterToolbar$static(panel/*:Panel*/)/*:Toolbar*/ {
    var fbars/*:Array*/ = panel.query("> toolbar[dock='bottom']");
    if (fbars && fbars.length > 0) {
      return AS3.as( fbars[0],  Ext.toolbar.Toolbar);
    }
    return null;
  }/*
}*/function ComponentUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ComponentUtil$,
      statics: {
        findAsParentOf: findAsParentOf$static,
        findByXType: findByXType$static,
        afterRenderOrNow: afterRenderOrNow$static,
        cloneComponent: cloneComponent$static,
        cloneComponents: cloneComponents$static,
        getFooterToolbar: getFooterToolbar$static
      },
      requires: [
        "Ext.ComponentManager",
        "Ext.toolbar.Toolbar"
      ]
    };
});
