Ext.define("com.coremedia.ui.plugins.NestedRulesPlugin", function(NestedRulesPlugin) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.util.ArrayUtils;

import ext.ClassManager;
import ext.Component;
import ext.Ext;
import ext.Plugin;
import ext.button.Button;
import ext.container.Container;
import ext.menu.Item;
import ext.panel.Panel;
import ext.plugin.AbstractPlugin;
import ext.tab.TabPanel;

import js.JSON;

/**
 * A plugin that defines plugin rules for sub-extension-points of its extension point component.
 * <p>Rules may consist of an xtype (the EXML element name) and optionally an <code>itemId</code>.
 * The xtype matches sub-components with the exact or a more specific xtype.
 * If an <code>itemId</code> is given, it has to match exactly.
 * </p>
 * <p>Sub-components are any of the following:
 * </p>
 * <ul>
 * <li>the <code>items</code> of a <code>container</code>,</li>
 * <li>the <code>top</code>, <code>bottom</code>, and <code>footer</code> toolbar of a <code>panel</code>,</li>
 * <li>the <code>menu</code> of a <code>button</code> or <code>menuitem</code>, and</li>
 * <li>any context <code>menu</code> plugged in using <code>&lt;ui:contextMenuPlugin&gt;</code>.</li>
 * </ul>
 * /
[PublicApi]
public class NestedRulesPlugin extends AbstractPlugin implements Plugin {
  /**
   * Plugin rules for sub-extension-points of the given extension point.
   * /
  [ExtConfig]
  public var rules:Array;

  public*/ function NestedRulesPlugin$(config/*:NestedRulesPlugin = null*/) {this.super$rvA1();if(arguments.length<=0)config=null;
    this.rules = com.coremedia.ui.util.ArrayUtils.asArray(config.rules);
  }/*


  override public*/ function init(component/*:Component*/)/*:void*/ {
    for/* each*/ (var $2=0;$2</* in*/ this.rules.length;++$2) {var rule/*:Component*/ =this.rules[$2];
      var subComponents/*:Array*/ = findSubComponents$static(component, rule);
      if (subComponents.length === 0) {
        var stringifyableRule/*:Object*/ = Ext.copyIf({}, rule, ["xtype", "itemId", "id"]);
        AS3.trace("[INFO]", "No sub-components of extension point " + component.xtype + " found that match rule pattern " + JSON.stringify(stringifyableRule) + "." +
                " Waiting for lazy items.");
      } else {
        for/* each*/ (var $1=0;$1</* in*/ subComponents.length;++$1) {var subComponent/*:Component*/ =subComponents[$1];
          addPluginsToComponent$static(rule, subComponent);
        }
      }
      component.on("add",AS3.bind( this,"childLazilyAdded$rvA1"));

    }
  }/*

  private*/ function childLazilyAdded(container/*:Container*/, component/*:Component*/)/*:void*/ {
    if (!component) {
      return;
    }

    for/* each*/ (var $1=0;$1</* in*/ this.rules.length;++$1) {var rule/*:Component*/ =this.rules[$1];
      if (matches$static(component, rule)) {
        addPluginsToComponent$static(rule, component);
      }
    }

    // Toolbars, bottom bars, footers etc do not come with the 'add' event that we need
    // for items that are added later on (see above).
    // They do come with a 'dockedadd' event but this does not bubble.
    // So we just handle these bars explicitly.
    var toolbarHolder/*:Panel*/ =AS3.as( component,  Ext.panel.Panel);
    if (toolbarHolder) {
      this.childLazilyAdded$rvA1(toolbarHolder, toolbarHolder.getTopToolbar());
      this.childLazilyAdded$rvA1(toolbarHolder, toolbarHolder.getBottomToolbar());
      this.childLazilyAdded$rvA1(toolbarHolder, toolbarHolder.getFooterToolbar());
      var tabbarHolder/*:TabPanel*/ =AS3.as( component,  Ext.tab.Panel);
      if (tabbarHolder) {
        this.childLazilyAdded$rvA1(tabbarHolder, tabbarHolder.getTabBar());
      }
    }
  }/*

  private static*/ function addPluginsToComponent$static(rule/*:Component*/, component/*:Component*/)/*:void*/ {
    var rulePlugins/*:Array*/ = rule.plugins;
    for/* each*/ (var $1=0;$1</* in*/ rulePlugins.length;++$1) {var pluginConfig/*:Object*/ =rulePlugins[$1];
      component["addPlugin"](pluginConfig);
    }

  }/*

  private static*/ function findSubComponents$static(extensionPoint/*:Component*/, configPattern/*:Component*/)/*:Array*/ {
    var subComponents/*:Array*/ = [];
    recurse(extensionPoint);
    return subComponents;

    function recurse(item/*:Component*/)/*:void*/ {
      var container/*:Container*/ =AS3.as( item,  Ext.container.Container);
      if (container) {
        if (container.itemCollection) {
          container.itemCollection.each(matchOrRecurse);
        }
        var toolbarHolder/*:Panel*/ =AS3.as( item,  Ext.panel.Panel);
        if (toolbarHolder) {
          matchOrRecurse(toolbarHolder.getTopToolbar());
          matchOrRecurse(toolbarHolder.getBottomToolbar());
          matchOrRecurse(toolbarHolder.getFooterToolbar());
        }
        var tabbarHolder/*:TabPanel*/ =AS3.as( item,  Ext.tab.Panel);
        if (tabbarHolder) {
          matchOrRecurse(tabbarHolder.getTabBar());
        }
      } else {
        var button/*:Button*/ =AS3.as( item,  Ext.button.Button);
        if (button) {
          matchOrRecurse(AS3.getBindable(button,"menu","DUMMY"));
        } else {
          var menuItem/*:Item*/ =AS3.as( item,  Ext.menu.Item);
          if (menuItem) {
            matchOrRecurse(AS3.getBindable(menuItem,"menu","DUMMY"));
          }
        }
      }
      matchOrRecurse(com.coremedia.ui.plugins.ContextMenuPlugin.findMenu(item));
    }
    // TODO: if the ui config is set use setUI();
    function matchOrRecurse(item/*:Component*/)/*:void*/ {
      if (item) {
        if (matches$static(item, configPattern)) {
          subComponents.push(item);
        } else {
          recurse(item);
        }
      }
    }
  }/*

  private static*/ function matches$static(item/*:Component*/, configPattern/*:Component*/)/*:Boolean*/ {
    return (!AS3.getBindable(configPattern,"itemId","DUMMY") || item.getItemId() === AS3.getBindable(configPattern,"itemId","DUMMY")) &&
           (!configPattern.xtype || item.isXType(configPattern.xtype)) &&
           (!configPattern['xclass'] ||AS3.is( item,  AS3.cast(Class,Ext.ClassManager.get(configPattern['xclass']))));
  }/*
  
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      mixins: ["ext.Plugin"],
      metadata: {"": ["PublicApi"]},
      rules: null,
      constructor: NestedRulesPlugin$,
      super$rvA1: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      childLazilyAdded$rvA1: childLazilyAdded,
      requires: [
        "AS3.trace",
        "Ext",
        "Ext.ClassManager",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.menu.Item",
        "Ext.panel.Panel",
        "Ext.plugin.Abstract",
        "Ext.tab.Panel",
        "com.coremedia.ui.util.ArrayUtils",
        "ext.Plugin"
      ],
      uses: ["com.coremedia.ui.plugins.ContextMenuPlugin"]
    };
});
