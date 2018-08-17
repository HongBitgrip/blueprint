Ext.define("com.coremedia.cms.editor.sdk.plugins.TabExpandPlugin", function(TabExpandPlugin) {/*package com.coremedia.cms.editor.sdk.plugins {

import com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.util.ConcurrentUtil;
import com.coremedia.ui.util.EventUtil;

import ext.Component;
import ext.Ext;
import ext.dom.Element;
import ext.panel.Panel;
import ext.plugin.AbstractPlugin;
import ext.tab.Tab;
import ext.tab.TabBar;
import ext.tab.TabPanel;

[PublicApi]
/**
 * Plugin for the DocumentTabPanel to hide some tabs.
 * The tabs to hide can be configured by passing their titles to the <code>tabs</code> config attribute.
 * The user can configure in the preferences if this feature is enabled or not.
 * /
public class TabExpandPlugin extends AbstractPlugin {
  public static var ADVANCED_TABS_ENABLED:Boolean = false;

  private static const*/var EXPAND_TITLE$static/*:String*/ = '&middot;&nbsp;&middot;&nbsp;&middot;';/*
  private static const*/var EXPAND_BUTTON_ITEM_ID$static/*:String*/ = "expandButton";/*

  private var tabPanel:TabPanel;
  private var hiddenTabs:Array =*/function hiddenTabs_(){this.hiddenTabs$nwjw=( []);}/*;
  private var expandButton:Panel;
  private var collapsedMode:Boolean = false;

  //selection is a generated tab, so object works just fine to access the "autoHide" attribute
  private var selectedTab:Object;
  private var settingsChangedVE:ValueExpression;

  // Indicator if the mouse is over the tab bar
  private var tabBarHovered:Boolean = false;

  /**
   * The tabs to hide by default, alphanumeric values.
   * /
  [Bindable]
  public var tabs:Array;

  public*/ function TabExpandPlugin$(config/*:TabExpandPlugin = null*/) {if(arguments.length<=0)config=null;
    config.pluginId = "tabExpandPlugin";
    AS3.setBindable(this,"tabs" , AS3.getBindable(config,"tabs"));
    this.super$nwjw(config);hiddenTabs_.call(this);;
  }/*

  /**
   * Initializes the plugin, uses a FunctionValueExpression to calculate
   * if the expand button should be displayed.
   * @param component
   * /
  override public*/ function init(component/*:Component*/)/*:void*/ {
    this.tabPanel$nwjw =AS3.as( component,  Ext.tab.Panel);

    this.settingsChangedVE$nwjw = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.SHOW_ALL_TABS_IN_FORM, com.coremedia.cms.editor.sdk.editorContext.getPreferences());
    this.settingsChangedVE$nwjw.addChangeListener(AS3.bind(this,"settingsChanged$nwjw"));

    //plugin is disabled
    if (!TabExpandPlugin.ADVANCED_TABS_ENABLED) {
      return;
    }

    this.tabPanel$nwjw.addListener('beforedestroy',AS3.bind( this,"tabsDestroyed$nwjw"));

    this.tabPanel$nwjw["originalSetActiveTab"] = this.tabPanel$nwjw["setActiveTab"];
    this.tabPanel$nwjw["setActiveTab"] =AS3.bind( this,"setActiveTabConsideringHidden$nwjw");

    this.tabPanel$nwjw.addListener('afterrender',AS3.bind( this,"refresh"));
  }/*

  public*/ function refresh()/*:void*/ {
    this.tabPanel$nwjw.addListener('afterrender',AS3.bind( this,"refresh"));
    //plugin is disabled
    if (!TabExpandPlugin.ADVANCED_TABS_ENABLED) {
      return;
    }
    //the method is only called from the Premular, so we have reset it completely
    this.collapsedMode$nwjw = false;
    if (this.expandButton$nwjw) {
      this.tabPanel$nwjw.remove(this.expandButton$nwjw, true);
    }
    this.tabPanelRendered$nwjw();
  }/*

  private*/ function setActiveTabConsideringHidden(tab/*:**/)/*:void*/ {
    var hasHiddenTabs/*:Boolean*/ = this.tabPanel$nwjw.queryById(EXPAND_BUTTON_ITEM_ID$static) !== null;

    if (hasHiddenTabs) {
      if (AS3.is(tab,  Number)
              && (AS3.as(tab,  Number)) > this.tabPanel$nwjw.itemCollection.getCount() -2) {
        this.tabChanged$nwjw(this.tabPanel$nwjw, this.expandButton$nwjw);
      } else if (AS3.is(tab,  Ext.panel.Panel)) {
        //noinspection JSMismatchedCollectionQueryUpdate
        var filteredHiddenTabs/*:Array*/ = this.hiddenTabs$nwjw.filter(function (hiddenTab/*:Panel*/)/*:Boolean*/ {
          return tab.title === AS3.getBindable(hiddenTab,"title","DUMMY");
        });
        if (filteredHiddenTabs.length > 0) {
          this.tabChanged$nwjw(this.tabPanel$nwjw, this.expandButton$nwjw);
          tab = AS3.cast(Ext.panel.Panel,this.tabPanel$nwjw.itemCollection.findBy(function (realTab/*:Panel*/)/*:Boolean*/ {
            return AS3.getBindable(realTab,"title","DUMMY") === tab.title;
          }));
        }
      }
    }
    this.tabPanel$nwjw["originalSetActiveTab"](tab);
  }/*

  private*/ function tabPanelRendered()/*:void*/ {
    //we attach the "real" tabchange listener later...
    this.tabPanel$nwjw.removeListener('tabchange',AS3.bind( this,"tabPanelRendered$nwjw"));

    //find all tab titles that have the "autoHide" flag enabled
    this.hiddenTabs$nwjw = this.tabPanel$nwjw.itemCollection.filter("autoHide", true).getRange();

    if (this.hiddenTabs$nwjw.length > 0) {
      this.collapseMode$nwjw();
    }

    var tabBar/*:TabBar*/ = this.tabPanel$nwjw.getTabBar();
    if (tabBar.rendered) {
      tabBar.getEl().on("mouseenter",AS3.bind( this,"onTabBarMouseEnter$nwjw"));
      tabBar.getEl().on("mouseleave",AS3.bind( this,"onTabBarMouseLeave$nwjw"));
    }
  }/*

  /**
   * Saves the hover state above the tab bar and
   * /
  private*/ function onTabBarMouseLeave()/*:void*/ {
    this.tabBarHovered$nwjw = false;
    this.onMouseOut$nwjw();
  }/*

  /**
   * Saves the hover state of the tabpane
   * /
  private*/ function onTabBarMouseEnter()/*:void*/ {
    this.tabBarHovered$nwjw = true;
  }/*

  /**
   * Invoked when the user changes the preferences if tabs should hide or not
   * /
  private*/ function settingsChanged(ve/*:ValueExpression*/)/*:void*/ {var this$=this;
    this.selectedTab$nwjw = this.tabPanel$nwjw.getActiveTab();

    //switch to "always expand" view
    if (ve.getValue()) {
      this.collapsedMode$nwjw = true;
      this.tabPanel$nwjw.removeListener('tabchange',AS3.bind( this,"tabChanged$nwjw"));

      if (!this.selectedTab$nwjw.autoHide) {
        //remove expand button, show hidden tabs
        this.tabPanel$nwjw.remove(this.expandButton$nwjw, true);
        this.hiddenTabs$nwjw.forEach(function (hiddenTab/*:Panel*/)/*:void*/ {
          this$.tabPanel$nwjw.add(hiddenTab);
        });
        this.tabPanel$nwjw.setActiveTab(this.selectedTab$nwjw);
      }
    }
    //switch to auto collapse view
    else {
      this.collapsedMode$nwjw = false;
      //check if the form is already in expanded mode
      if (this.selectedTab$nwjw.autoHide) {
        //add listeners
        this.tabPanel$nwjw.addListener('tabchange',AS3.bind( this,"tabChanged$nwjw"));
      }
      else {
        this.collapseMode$nwjw();
      }
    }
  }/*

  /**
   * Remove the tabs that have been configured as hidden tabs.
   * The tabs to remove are identified by their title.
   * The 'tabs' parameter passed to this plugin contains the titles to remove.
   * /
  private*/ function collapseMode()/*:void*/ {var this$=this;
    if (this.collapsedMode$nwjw) {
      return;
    }

    // do not collapse if show all tabs is configured
    var showAllTabs/*:**/ = com.coremedia.cms.editor.sdk.editorContext.getPreferences().get(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.SHOW_ALL_TABS_IN_FORM);
    if (showAllTabs) {
      return;
    }

    this.tabPanel$nwjw.removeListener('tabchange',AS3.bind( this,"tabChanged$nwjw"));

    //remove tabs that should not be visible by default
    Ext.each(this.hiddenTabs$nwjw, function (tab/*:Panel*/)/*:void*/ {
      this$.tabPanel$nwjw.remove(tab, false);
    });

    //add expand button
    var expandButtonConfig/*:Panel*/ = AS3.cast(Ext.panel.Panel,{});
    AS3.setBindable(expandButtonConfig,"title" , EXPAND_TITLE$static);
    expandButtonConfig.itemId = EXPAND_BUTTON_ITEM_ID$static;
    this.expandButton$nwjw = this.tabPanel$nwjw.add(expandButtonConfig);
    this.addOnMouseOverListener$nwjw(this.expandButton$nwjw);

    if (this.selectedTab$nwjw) {
      this.tabPanel$nwjw.setActiveTab(this.selectedTab$nwjw);
    }
    else {
      this.tabPanel$nwjw.setActiveTab(0);
    }
    this.tabPanel$nwjw.addListener('tabchange',AS3.bind( this,"tabChanged$nwjw"));
    this.collapsedMode$nwjw = true;
  }/*

  /**
   * Add a mouse over listener to the DOM element of the expand button tab.
   * /
  private*/ function addOnMouseOverListener(expandButton/*:Panel*/)/*:void*/ {var this$=this;
    var tab/*:Tab*/ = getTab$static(expandButton);
    if (tab.rendered) {
      var element/*:Element*/ = getTabElement$static(expandButton);
      if (element) {
        element.addListener('mouseover',AS3.bind( this,"onMouseOver$nwjw"));
      }
    } else {
      tab.addListener("afterrender", function ()/*:void*/ {
        var element/*:Element*/ = getTabElement$static(expandButton);
        if (element) {
          element.addListener('mouseover',AS3.bind( this$,"onMouseOver$nwjw"));
        }
      }, null, {single: true});
    }
  }/*

  /**
   * Restores the hidden tabs and removes
   * the expand tab button.
   * /
  private*/ function expandMode()/*:void*/ {
    if (!this.collapsedMode$nwjw) {
      return;
    }

    this.tabPanel$nwjw.removeListener('tabchange',AS3.bind( this,"tabChanged$nwjw"));

    this.tabPanel$nwjw.remove(this.expandButton$nwjw, true);
    for (var i/*:int*/ = 0; i < this.hiddenTabs$nwjw.length; i++) {
      var hiddenTab/*:Panel*/ = this.hiddenTabs$nwjw[i];
      this.tabPanel$nwjw.add(hiddenTab);
    }

    this.tabPanel$nwjw.addListener('tabchange',AS3.bind( this,"tabChanged$nwjw"));
    this.collapsedMode$nwjw = false;

    if (!this.tabBarHovered$nwjw) {
      this.onMouseOut$nwjw();
    }
  }/*

  /**
   * stores the last selection
   * @param tabPanel the tab panel whose active tab has changed
   * @param selection the selected tab
   * /
  private*/ function tabChanged(tabPanel/*:TabPanel*/, selection/*:Panel*/)/*:void*/ {
    if (AS3.getBindable(selection,"title","DUMMY") == EXPAND_TITLE$static) {
      if (this.selectedTab$nwjw) {
        tabPanel.setActiveTab(this.selectedTab$nwjw);
      }

      // If the new selection is the '...' tab AND its tab-strip has focus,
      // we are working with left/right key navigation. In this case,
      // we wait until the hidden tabs are expanded, activate the first one
      // and focus its tab-strip as soon as it is rendered.
      var shouldActivateFirstHidden/*:Boolean*/ = selection['tab'].hasFocus;
      this.expandMode$nwjw();
      if (shouldActivateFirstHidden) {
        this.activateFirstHiddenEventually$nwjw(tabPanel);
      }

    } else if (selection["autoHide"]) {
      this.selectedTab$nwjw = selection;
    }
    else {
      this.selectedTab$nwjw = selection;
      if (!this.tabBarHovered$nwjw) {
        this.collapseMode$nwjw();
      }
    }
  }/*

  private*/ function activateFirstHiddenEventually(tabPanel/*:TabPanel*/)/*:void*/ {
    var firstHiddenTab/*:Panel*/ = this.hiddenTabs$nwjw[0];
    var firstHiddenTabStrip/*:Tab*/ = firstHiddenTab['tab'];

    com.coremedia.ui.util.ConcurrentUtil.executeWhen(
            function ()/*:Boolean*/ {
              com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(firstHiddenTabStrip, "afterrender");
              return firstHiddenTabStrip.rendered;
            },
            function ()/*:void*/ {
              firstHiddenTabStrip.focus();
              tabPanel.setActiveTab(firstHiddenTab);
            }
    );
  }/*

  /**
   * Fired when the mouse is hovered over the expand button
   * /
  private*/ function onMouseOver()/*:void*/ {
    this.expandMode$nwjw();
  }/*

  /**
   * When the mouse leaves the tab bar, collapse the hidden tabs after a short delay.
   * If the mouse leaves and returns within the delay, no collapse will happen.
   * /
  private*/ function onMouseOut()/*:void*/ {var this$=this;
    window.setTimeout(function ()/*:void*/ {
      if (!this$.tabBarHovered$nwjw && (!this$.selectedTab$nwjw || !this$.selectedTab$nwjw.autoHide)) {
        this$.collapseMode$nwjw();
      }
    }, 400);//the delay used for hiding the tabs!
  }/*

  /**
   * Returns the dom element of the tab header.
   * /
  private static*/ function getTabElement$static(tabPanel/*:Panel*/)/*:Element*/ {
    var tab/*:Tab*/ = getTab$static(tabPanel);
    return tab && Ext.get(tab.getEl());
  }/*

  /**
   * Returns the tab header.
   * /
  private static*/ function getTab$static(tabPanel/*:Panel*/)/*:Tab*/ {
    return tabPanel && tabPanel['tab'] && AS3.cast(Ext.tab.Tab,tabPanel['tab']);
  }/*

  /**
   * Remove listeners
   * /
  private*/ function tabsDestroyed()/*:void*/ {
    //setActiveTabConsideringHidden will throw error during destroy
    this.tabPanel$nwjw["setActiveTab"] = function()/*:void*/{};

    if (this.settingsChangedVE$nwjw) {
      this.settingsChangedVE$nwjw.removeChangeListener(AS3.bind(this,"settingsChanged$nwjw"));
    }
    var element/*:Element*/ = getTabElement$static(this.expandButton$nwjw);
    if (element) {
      element.removeListener('mouseover',AS3.bind( this,"onMouseOver$nwjw"));
    }

    for (var i/*:int*/ = 0; i < this.hiddenTabs$nwjw.length; i++) {
      var documentForm/*:Panel*/ = this.hiddenTabs$nwjw[i];
      documentForm.destroy();
    }
    this.tabPanel$nwjw.remove(this.expandButton$nwjw, true);
    this.tabPanel$nwjw.removeListener('tabchange',AS3.bind( this,"tabChanged$nwjw"));

    var tabBar/*:TabBar*/ = this.tabPanel$nwjw.getTabBar();
    if (tabBar.rendered) {
      tabBar.getEl().removeListener("mouseenter",AS3.bind( this,"onTabBarMouseEnter$nwjw"));
      tabBar.getEl().removeListener("mouseleave",AS3.bind( this,"onTabBarMouseLeave$nwjw"));
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      tabPanel$nwjw: null,
      expandButton$nwjw: null,
      collapsedMode$nwjw: false,
      selectedTab$nwjw: null,
      settingsChangedVE$nwjw: null,
      tabBarHovered$nwjw: false,
      constructor: TabExpandPlugin$,
      super$nwjw: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      refresh: refresh,
      setActiveTabConsideringHidden$nwjw: setActiveTabConsideringHidden,
      tabPanelRendered$nwjw: tabPanelRendered,
      onTabBarMouseLeave$nwjw: onTabBarMouseLeave,
      onTabBarMouseEnter$nwjw: onTabBarMouseEnter,
      settingsChanged$nwjw: settingsChanged,
      collapseMode$nwjw: collapseMode,
      addOnMouseOverListener$nwjw: addOnMouseOverListener,
      expandMode$nwjw: expandMode,
      tabChanged$nwjw: tabChanged,
      activateFirstHiddenEventually$nwjw: activateFirstHiddenEventually,
      onMouseOver$nwjw: onMouseOver,
      onMouseOut$nwjw: onMouseOut,
      tabsDestroyed$nwjw: tabsDestroyed,
      config: {tabs: null},
      statics: {ADVANCED_TABS_ENABLED: false},
      requires: [
        "Ext",
        "Ext.panel.Panel",
        "Ext.plugin.Abstract",
        "Ext.tab.Panel",
        "Ext.tab.Tab",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.util.ConcurrentUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
