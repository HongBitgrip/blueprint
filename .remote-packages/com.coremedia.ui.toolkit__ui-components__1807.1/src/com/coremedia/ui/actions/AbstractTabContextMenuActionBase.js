Ext.define("com.coremedia.ui.actions.AbstractTabContextMenuActionBase", function(AbstractTabContextMenuActionBase) {/*package com.coremedia.ui.actions {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;

import ext.panel.Panel;
import ext.tab.TabPanel;

/**
 * An abstract action for items of a <code>TabContextMenu</code>.
 * It offers methods for accessing the context-clicked tab and its associated tab panel.
 * For subclasses to work, it is necessary to override the methods
 * <code>checkDisable()</code> and <code>handler()</code>.
 *
 * @see com.coremedia.ui.components.TabContextMenu
 * /
[PublicApi]
public class AbstractTabContextMenuActionBase extends DependencyTrackedAction {

  private var contextClickedTabPanelVE:ValueExpression;
  private var contextClickedTabVE:ValueExpression;

  public*/ function AbstractTabContextMenuActionBase$(config/*:AbstractTabContextMenuAction = null*/) {if(arguments.length<=0)config=null;
    this.super$j1st(config);
  }/*

  /**
   * Returns the ValueExpression for the context-clicked tab panel.
   *
   * @return the ValueExpression for context-clicked tab panel.
   * /
  private*/ function getContextClickedTabPanelVE()/*:ValueExpression*/ {
    if (!this.contextClickedTabPanelVE$j1st) {
      this.contextClickedTabPanelVE$j1st = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.contextClickedTabPanelVE$j1st;
  }/*

  /**
   * Returns the ValueExpression for the context-clicked tab.
   *
   * @return the ValueExpression for context-clicked tab.
   * /
  private*/ function getContextClickedTabVE()/*:ValueExpression*/ {
    if (!this.contextClickedTabVE$j1st) {
      this.contextClickedTabVE$j1st = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.contextClickedTabVE$j1st;
  }/*

  /**
   * Sets the context-clicked tab. Usually, do not call this
   * method directly. It is called by the component IOC manager.
   *
   * @param tab the context-clicked tab
   * /
  [InjectFromExtParent]
  public*/ function setContextClickedTab(tab/*:Panel*/)/*:void*/ {var this$=this;
    this.getContextClickedTabVE$j1st().setValue(tab);
    tab.on("destroy", function ()/*:void*/ {
      if (this$.getContextClickedTab() === tab) {
        this$.getContextClickedTabVE$j1st().setValue(null);
      }
    });
  }/*

  /**
   * Sets the context-clicked tab panel. Usually, do not call this
   * method directly. It is called by the component IOC manager.
   *
   * @param tabPanel the context-clicked tab panel
   * /
  [InjectFromExtParent]
  public*/ function setContextClickedTabPanel(tabPanel/*:TabPanel*/)/*:void*/ {
    this.getContextClickedTabPanelVE$j1st().setValue(tabPanel);
  }/*

  /**
   * Returns the context-clicked tab panel.
   *
   * @return the context-clicked tab panel or undefined if no valid context-click has happened yet
   * /
  public*/ function getContextClickedTabPanel()/*:TabPanel*/ {
    var tabPanel/*:TabPanel*/ = this.getContextClickedTabPanelVE$j1st().getValue();
    if(tabPanel) {
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(tabPanel, "add");
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(tabPanel, "remove");
    }
    return tabPanel;
  }/*

  /**
   * Returns the context-clicked tab.
   *
   * @return the context-clicked tab or undefined if no valid context-click has happened yet
   * /
  public*/ function getContextClickedTab()/*:Panel*/ {
    return this.getContextClickedTabVE$j1st().getValue();
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    if (!this.getContextClickedTab() || !this.getContextClickedTabPanel()) {
      return true;
    }
    return this.checkDisabled();
  }/*

  /**
   * Determines whether the action should be disabled given the
   * current context-clicked tab and tab panel (obtained by
   * <code>getContextClickedTab()</code> and <code>getContextClickedTabPanel()</code>).
   * This method has to be overridden in subclasses.
   * It serves the purpose to more conveniently check the disabled status of the action
   * as it is called at appropriate times (as soon as a context clicks happens
   * and the new values for the context-clicked tab and tab panel are determined).
   *
   * @return true if the action is to be disabled, false otherwise
   * /
  protected*/ function checkDisabled()/*:Boolean*/ {
    throw new AS3.Error("please override in subclass");
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    if (!this.getContextClickedTab() || !this.getContextClickedTabPanel()) {
      return true;
    }
    return this.checkHidden();
  }/*

  /**
   * Determines whether the action should be hidden given the
   * current context-clicked tab and tab panel (obtained by
   * <code>getContextClickedTab()</code> and <code>getContextClickedTabPanel()</code>).
   *
   * This method returns false by default.
   *
   * @return true if the action is to be hidden, false otherwise
   * /
  protected*/ function checkHidden()/*:Boolean*/ {
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      metadata: {
        "": ["PublicApi"],
        setContextClickedTab: ["InjectFromExtParent"],
        setContextClickedTabPanel: ["InjectFromExtParent"]
      },
      contextClickedTabPanelVE$j1st: null,
      contextClickedTabVE$j1st: null,
      constructor: AbstractTabContextMenuActionBase$,
      super$j1st: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      getContextClickedTabPanelVE$j1st: getContextClickedTabPanelVE,
      getContextClickedTabVE$j1st: getContextClickedTabVE,
      setContextClickedTab: setContextClickedTab,
      setContextClickedTabPanel: setContextClickedTabPanel,
      getContextClickedTabPanel: getContextClickedTabPanel,
      getContextClickedTab: getContextClickedTab,
      calculateDisabled: calculateDisabled,
      checkDisabled: checkDisabled,
      calculateHidden: calculateHidden,
      checkHidden: checkHidden,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker"
      ]
    };
});
