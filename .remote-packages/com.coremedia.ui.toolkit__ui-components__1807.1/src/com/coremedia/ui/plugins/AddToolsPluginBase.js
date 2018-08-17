Ext.define("com.coremedia.ui.plugins.AddToolsPluginBase", function(AddToolsPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.Plugin;
import ext.panel.Panel;

/**
 * A Plugin that adds a list of tools to an ext.Panel.
 * It does not make much sense to use this plugin explicitly.
 * Rather use the Plugin manager to add a configuration of the
 * AddToolsPlugin to any component of a certain xtype, like so:
 * <pre>
 * com.coremedia.ui.PluginRulesMgr.registerForXtype("mypanel", new com.coremedia.ui.config.addToolsPlugin({
 *   tools: {
 *     id:'close',
 *     handler: function(e:*, target:*, panel:Panel):void {
 *       panel.ownerCt.remove(panel, true);
 *     }
 *   }
 * }));
 * </pre>
 *
 * @see com.coremedia.ui.PluginRulesMgr
 * @see com.coremedia.ui.plugins.AddToolsPlugin
 * /
public class AddToolsPluginBase implements Plugin {

  private var tools:Array;

  /**
   * @param config the config object
   * /
  public*/ function AddToolsPluginBase$(config/*:AddToolsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.tools$KUBG = com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"tools"));
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    if (AS3.is(component,  Ext.panel.Panel)) {
      var panel/*:Panel*/ =AS3.as( component,  Ext.panel.Panel);
      com.coremedia.ui.util.ArrayUtils.ensureArray(component, "tools");
      panel.tools = panel.tools.concat(this.tools$KUBG);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      tools$KUBG: null,
      constructor: AddToolsPluginBase$,
      init: init,
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.ui.util.ArrayUtils",
        "ext.Plugin"
      ]
    };
});
