Ext.define("com.coremedia.ui.plugins.TabContextMenuPluginBase", function(TabContextMenuPluginBase) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.components.TabContextMenu;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.dom.Element;
import ext.event.Event;
import ext.plugin.AbstractPlugin;
import ext.tab.Tab;
import ext.tab.TabBar;
import ext.tab.TabPanel;

import js.HTMLElement;

[PublicApi]
public class TabContextMenuPluginBase extends AbstractPlugin {

  private var theMenu:TabContextMenu;
  private var menuConfig:TabContextMenu;

  public*/ function TabContextMenuPluginBase$(config/*:TabContextMenuPlugin = null*/) {this.super$Rzsl();if(arguments.length<=0)config=null;
    this.menuConfig$Rzsl = AS3.getBindable(config,"contextMenu");
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    var tabPanel/*:TabPanel*/ =AS3.as( component,  Ext.tab.Panel);
    tabPanel.mon(tabPanel, "afterrender",AS3.bind( this,"initContextMenu$Rzsl"));
  }/*

  private*/ function initContextMenu(tabPanel/*:TabPanel*/)/*:void*/ {
    var tabBar/*:TabBar*/ = tabPanel.getTabBar();
    var tabBarEl/*:Element*/ = tabBar.getEl();
    tabBarEl.on("contextmenu",AS3.bind( this,"onContextMenu$Rzsl"), null, tabPanel);
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    Ext.destroy(this.theMenu$Rzsl);
    this.theMenu$Rzsl = null;
    Ext.plugin.Abstract.prototype.destroy.call(this,params);
  }/*

  private*/ function onContextMenu(e/*:Event*/, tab/*:HTMLElement*/, tabPanel/*:TabPanel*/)/*:Boolean*/ {
    var tabElement/*:Tab*/ =AS3.as( tabPanel.getTabBar().getChildByElement(tab, true),  Ext.tab.Tab);
    e.stopEvent();
    if (tabElement) {
      var m/*:TabContextMenu*/ = this.createMenu$Rzsl();
      m.setContextClickedTabPanel(tabPanel);
      m.setContextClickedTab(tabElement["card"]);
      m.showAt(e.getXY());
    }
    return true;
  }/*

  private*/ function createMenu()/*:TabContextMenu*/ {
    if (!this.theMenu$Rzsl) {
      this.theMenu$Rzsl = AS3.cast(com.coremedia.ui.components.TabContextMenu,Ext.ComponentManager.create(this.menuConfig$Rzsl));
    }
    return this.theMenu$Rzsl;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      theMenu$Rzsl: null,
      menuConfig$Rzsl: null,
      constructor: TabContextMenuPluginBase$,
      super$Rzsl: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      initContextMenu$Rzsl: initContextMenu,
      destroy: destroy,
      onContextMenu$Rzsl: onContextMenu,
      createMenu$Rzsl: createMenu,
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.plugin.Abstract",
        "Ext.tab.Panel",
        "Ext.tab.Tab"
      ],
      uses: ["com.coremedia.ui.components.TabContextMenu"]
    };
});
