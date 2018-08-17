Ext.define("com.coremedia.ui.PluginRulesMgr", function(PluginRulesMgr) {/*package com.coremedia.ui {

import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.Ext;

/**
 * The plugin manager allows to add plugins to components implicitly, based on the
 * component's ID, xtype or class.
 * <p>To add a plugin for a well-known component id, use <code>registerForId()</code>.</p>
 * <p>To add a plugin for a well-known xtype, use <code>registerForXtype()</code>. The plugin will
 * also be applied to all components of subclasses of the class corresponding to the given xtype.</p>
 * <p>To add a plugin for all instances of a certain component class, use <code>registerForClass()</code>. The
 * component class has to provide an xtype constant.</p>
 * <p>The plugin is given as an Object with a <code>ptype</code> property and plugin-specific other
 * properties used to parametrize the plugin instance.</p>
 * <p>Multiple plugins for one component are initialized from general to specific: first plugins registered for
 * the most general xtype / class, then more concrete xtypes / classes, then plugins registered for the component's
 * ID. If two plugins are registered for the same xtype, class or ID, they are applied in the order in which
 * they were registered.</p>
 * <p>All plugins added by the PluginRulesMgr are added after plugins that are configured directly for
 * that component.</p>
 *
 * @see ext.Component
 * @see ext.ComponentManager
 * @see ext.Plugin
 * /
public class PluginRulesMgr {

  private static const*/var id2pluginConfigs$static/*:Object*/;/* =*/function id2pluginConfigs$static_(){id2pluginConfigs$static=( {});};/*
  private static const*/var xtype2pluginConfigs$static/*:Object*/;/* =*/function xtype2pluginConfigs$static_(){xtype2pluginConfigs$static=( {});};/*
  private static*/ var listening$static/*:Boolean*/ = false;/*

  /**
   * Register a Plugin for a Component with the well-known given id.
   * When a component with the given id is added, the Plugin given as a Plugin config object
   * is instantiated and applied to the Component (i.e. the plugin's <code>init()</code>
   * method is invoked with that Component.
   *
   * @param id the id of the Component to which this Plugin will be applied 
   * @param pluginConfig the Plugin config object that parametrizes the Plugin
   * /
  public static*/ function registerForId$static(id/*:String*/, pluginConfig/*:Object*/)/*:void*/ {
    register$static(id2pluginConfigs$static, id, pluginConfig);
  }/*

  /**
   * Register a Plugin for any Component of the given xtype or any more specific xtype.
   * When a component of the given xtype is added, the Plugin given as a Plugin config object
   * is instantiated and applied to the Component (i.e. the plugin's <code>init()</code>
   * method is invoked with that Component).
   *
   * @param xtype the xtype of Components to which this Plugin will be applied
   * @param pluginConfig the Plugin config object that parametrizes the Plugin
   * /
  public static*/ function registerForXtype$static(xtype/*:String*/, pluginConfig/*:Object*/)/*:void*/ {
    register$static(xtype2pluginConfigs$static, xtype, pluginConfig);
  }/*

  /**
   * Register a Plugin for any Component of the given or any more specific Class.
   * The Class has to be a Component subclass with a static <code>xtype</code> constant.
   * When a component of the given class is added, the Plugin given as a Plugin config object
   * is instantiated and applied to the Component (i.e. the plugin's <code>init()</code>
   * method is invoked with that Component.
   *
   * @param componentClass the Component subclass for whose instances this Plugin will be applied
   * @param pluginConfig the Plugin config object that parametrizes the Plugin
   * /
  public static*/ function registerForClass$static(componentClass/*:Class*/, pluginConfig/*:Object*/)/*:void*/ {
    PluginRulesMgr.registerForXtype(componentClass.xtype, pluginConfig);
  }/*

  private static*/ function register$static(map/*:Object*/, key/*:String*/, value/*:Object*/)/*:void*/ {
    var values/*:Array*/ = map[key];
    if (!values) {
      values = map[key] = [];
      if (!listening$static) {
        listening$static = true;
        Ext.define(null, {
          override: 'Ext.Component',
          initComponent: function()/*:void*/ {arguments=Array.prototype.slice.call(arguments);
            if (AS3.is(this,  Ext.Component))  {
              beforeComponentInit$static(AS3.cast(Ext.Component,this));
            }
            this.callParent(arguments);
          }
        });
      }
    } // else: if values exists, we surely have attached the listener already!
    values.push(value);
  }/*

  /**
   * Counterpart to <code>registerForId()</code>.
   * Note that pluginConfig must be the identical object like the one that was registered.
   *
   * @see #registerForId()
   * /
  public static*/ function unregisterForId$static(id/*:String*/, pluginConfig/*:Object*/)/*:void*/ {
    unregister$static(id2pluginConfigs$static, id, pluginConfig);
  }/*

  /**
   * Counterpart to <code>registerForXtype()</code>.
   * Note that pluginConfig must be the identical object like the one that was registered.
   *
   * @see #registerForXtype()
   * /
  public static*/ function unregisterForXtype$static(xtype/*:String*/, pluginConfig/*:Object*/)/*:void*/ {
    unregister$static(xtype2pluginConfigs$static, xtype, pluginConfig);
  }/*

  /**
   * Counterpart to <code>registerForClass()</code>.
   * Note that pluginConfig must be the identical object like the one that was registered.
   *
   * @see #registerForClass()
   * /
  public static*/ function unregisterForClass$static(componentClass/*:Class*/, pluginConfig/*:Object*/)/*:void*/ {
    PluginRulesMgr.registerForXtype(componentClass.xtype, pluginConfig);
  }/*

  private static*/ function unregister$static(map/*:Object*/, key/*:String*/, value/*:Object*/)/*:Boolean*/ {
    var values/*:Array*/ = map[key];
    if (values) {
      var index/*:int*/ = values.indexOf(value);
      if (index >= 0) {
        values.splice(index,1);
        if (values.length == 0) {
          delete map[key]; // clean up
        }
        return true;
      }
    }
    return false;
  }/*

  private static*/ function beforeComponentInit$static(c/*:Component*/)/*:void*/ {
    //TODO xtype may not be set, check xclass too
    var allPluginConfigs/*:Array*/ = id2pluginConfigs$static[c.getId()] || [];
    var xtypes/*:Array*//*String*/ = c.getXTypes().split('/');
    for (var i/*:int*/ = xtypes.length - 1; i >= 0; --i) {
      var xtype/*:String*/ = xtypes[i];
      var pluginConfigs/*:Array*/ = xtype2pluginConfigs$static[xtype];
      if (pluginConfigs) {
        allPluginConfigs = pluginConfigs.concat(allPluginConfigs);
      }
    }
    if (allPluginConfigs.length > 0) {
      // concatenate the new additional plugin configs, ensuring c.plugins is an Array:
      c.plugins = com.coremedia.ui.util.ArrayUtils.asArray(c.plugins).concat(allPluginConfigs);
      c.plugins = c['constructPlugins']();
      // If the component has a base action, set the plugins array also to the component's
      // initial config. This is because the component's 'plugins' property gets overriden
      // by the initial config's 'plugins' property when the component is added to its base action.
      if (c.baseAction) {
        c.initialConfig['plugins'] = com.coremedia.ui.util.ArrayUtils.asArray(c.initialConfig['plugins']).concat(allPluginConfigs);
      }

    }
  }/*

}*/function PluginRulesMgr$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PluginRulesMgr$,
      statics: {
        id2pluginConfigs: undefined,
        xtype2pluginConfigs: undefined,
        registerForId: registerForId$static,
        registerForXtype: registerForXtype$static,
        registerForClass: registerForClass$static,
        unregisterForId: unregisterForId$static,
        unregisterForXtype: unregisterForXtype$static,
        unregisterForClass: unregisterForClass$static,
        __initStatics__: function() {
          id2pluginConfigs$static_();
          xtype2pluginConfigs$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.Component",
        "com.coremedia.ui.util.ArrayUtils"
      ]
    };
});
