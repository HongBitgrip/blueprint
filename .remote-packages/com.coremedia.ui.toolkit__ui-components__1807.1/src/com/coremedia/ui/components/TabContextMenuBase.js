Ext.define("com.coremedia.ui.components.TabContextMenuBase", function(TabContextMenuBase) {/*package com.coremedia.ui.components {
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;

import ext.Component;
import ext.menu.Menu;
import ext.tab.TabPanel;

[PublicApi]
public class TabContextMenuBase extends Menu {

  private var contextClickedTabPanel:TabPanel;
  private var contextClickedTab:Component;

  public*/ function TabContextMenuBase$(config/*:Menu = null*/) {if(arguments.length<=0)config=null;
    this.super$LyCU(config);
  }/*

  /** @private * /
  [ProvideToExtChildren]
  public*/ function getContextClickedTabPanel()/*:TabPanel*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, com.coremedia.ui.components.TabContextMenu.CONTEXT_CLICKED_TAB_PANEL_VARIABLE_NAME);
    return this.contextClickedTabPanel$LyCU;
  }/*

  /** @private * /
  public*/ function setContextClickedTabPanel(tp/*:TabPanel*/)/*:void*/ {
    var oldTabPanel/*:TabPanel*/ = this.contextClickedTabPanel$LyCU;
    this.contextClickedTabPanel$LyCU = tp;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.ui.components.TabContextMenu.CONTEXT_CLICKED_TAB_PANEL_VARIABLE_NAME, oldTabPanel, this.contextClickedTabPanel$LyCU);
  }/*

  /** @private * /
  [ProvideToExtChildren]
  public*/ function getContextClickedTab()/*:Component*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, com.coremedia.ui.components.TabContextMenu.CONTEXT_CLICKED_TAB_VARIABLE_NAME);
    return this.contextClickedTab$LyCU;
  }/*

  /** @private * /
  public*/ function setContextClickedTab(tab/*:Component*/)/*:void*/ {
    var oldTab/*:Component*/ = this.contextClickedTab$LyCU;
    this.contextClickedTab$LyCU = tab;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.ui.components.TabContextMenu.CONTEXT_CLICKED_TAB_VARIABLE_NAME, oldTab, this.contextClickedTab$LyCU);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      metadata: {
        "": ["PublicApi"],
        getContextClickedTabPanel: ["ProvideToExtChildren"],
        getContextClickedTab: ["ProvideToExtChildren"]
      },
      contextClickedTabPanel$LyCU: null,
      contextClickedTab$LyCU: null,
      constructor: TabContextMenuBase$,
      super$LyCU: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      getContextClickedTabPanel: getContextClickedTabPanel,
      setContextClickedTabPanel: setContextClickedTabPanel,
      getContextClickedTab: getContextClickedTab,
      setContextClickedTab: setContextClickedTab,
      requires: [
        "Ext.menu.Menu",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: ["com.coremedia.ui.components.TabContextMenu"]
    };
});
