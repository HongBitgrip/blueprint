Ext.define("com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanelBase", function(WorkAreaTabProxiesTabPanelBase) {/*package com.coremedia.cms.editor.sdk.desktop.reusability {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.LocalesService;
import com.coremedia.cms.editor.sdk.desktop.*;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SiteModel;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.dependencies.Trigger;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.plugins.TabDragZone;

import ext.Component;
import ext.Ext;
import ext.dom.Element;
import ext.panel.Panel;
import ext.tab.Tab;
import ext.tab.TabBar;
import ext.tab.TabPanel;

public class WorkAreaTabProxiesTabPanelBase extends TabPanel{

  private var entitiesToWorkAreaTabProxiesMap:Object;

  private var tooltipSkipFlags:Bean;
  private var tooltipInfoTrigger:Trigger =*/function tooltipInfoTrigger_(){this.tooltipInfoTrigger$6NfM=( new com.coremedia.ui.data.dependencies.Trigger());}/*;

  public*/ function WorkAreaTabProxiesTabPanelBase$(config/*:WorkAreaTabProxiesTabPanel = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.entitiesToWorkAreaTabProxiesMap$6NfM = {};

    this.super$6NfM(config);tooltipInfoTrigger_.call(this);;

    this.tooltipSkipFlags$6NfM = com.coremedia.ui.data.beanFactory.createLocalBean();

    this.tooltipSkipFlags$6NfM.addValueChangeListener(function (event/*:PropertyChangeEvent*/)/*:void*/ {
      this$.updateTooltips$6NfM();
    });

    this.startUpdateTooltipInfo$6NfM();
  }/*

  override protected*/ function onAdd(component/*:Component*/, position/*:Number*/)/*:void*/ {var this$=this;
    Ext.tab.Panel.prototype.onAdd.call(this,component, position);

    var proxy/*:WorkAreaTabProxy*/ =AS3.as( component,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy);

    this.mon(proxy, "titlechange", function ()/*:void*/ {
      this$.triggerTooltipUpdate$6NfM();
      this$.updateTooltip$6NfM(proxy);
    });

    this.mon(proxy, "destroy",AS3.bind( this,"triggerTooltipUpdate$6NfM"));

    this.triggerTooltipUpdate$6NfM();
    this.updateTooltip$6NfM(proxy);
  }/*


  private*/ function triggerTooltipUpdate()/*:void*/ {
    this.tooltipInfoTrigger$6NfM.trigger();
  }/*

  private*/ function updateTooltips()/*:void*/ {
    this.itemCollection.each(AS3.bind(this,"updateTooltip$6NfM"));
  }/*

  private*/ function updateTooltip(item/*:Component*/)/*:void*/ {
    var tab/*:Tab*/ = item['tab'];
    if (!tab) {
      com.coremedia.ui.logging.Logger.warn("Premular tab '" + item.getId() + "' has no tab property!");
      return;
    }

    var ve/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeToolTip$6NfM"), item);
    ve.loadValue(function (tooltip/*:String*/)/*:void*/ {
      tab.setTooltip(tooltip);
    });
  }/*

  private*/ function computeToolTip(proxy/*:WorkAreaTabProxy*/)/*:String*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(proxy, com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxyBase.REFERENCE_TAB_CHANGED_EVENT);

    var tabTooltipInfoObject/*:**/;

    if (AS3.is(AS3.getBindable(proxy,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)) {
      tabTooltipInfoObject = (AS3.as(AS3.getBindable(proxy,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)).computeTooltipInfo(AS3.getBindable(proxy,"proxyState"));
    } else {
      var workAreaTab/*:WorkAreaTab*/ =AS3.as( AS3.getBindable(proxy,"referenceTab"),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab);
      tabTooltipInfoObject = workAreaTab && workAreaTab.calculateTooltip();
    }
    if (tabTooltipInfoObject === undefined) {
      return undefined;
    }
    var tabTooltipInfo/*:TabTooltipInfo*/ =AS3.as( tabTooltipInfoObject,  com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo);

    //fallback for other tab types
    if (!tabTooltipInfo) {
      return '<div>' + proxy['title'] + '</div>';
    }

    var tooltipEntries/*:Array*/ = tabTooltipInfo.getTooltipEntries();

    var tooltip/*:String*/ = '';
    var spaceAdded/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < tooltipEntries.length; i++) {
      var entry/*:TabTooltipEntry*/ = tooltipEntries[i];
      var skipEntry/*:Boolean*/ = this.tooltipSkipFlags$6NfM.get(entry.getName());
      if (!skipEntry) {
        //add some space between the title and the rest
        if (!spaceAdded && i > 0) {
          tooltip += '<div style="height:6px"></div>';
          spaceAdded = true;
        }
        tooltip += '<div>' + entry + '</div>';
      }
    }
    return tooltip;
  }/*

  private*/ function startUpdateTooltipInfo()/*:void*/ {var this$=this;
    var ve/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:**/ {
      var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();

      // trigger invalidation when the set of tabs has changed (tab added / removed)
      this$.tooltipInfoTrigger$6NfM.dependOn();

      //noinspection JSMismatchedCollectionQueryUpdate
      var allSites/*:Array*/ = sitesService.getSites();
      if (allSites === undefined) {
        return undefined;
      }

      if (allSites.length === 0) {
        return null;
      }

      var returnUndefined/*:**/ = AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).computeTooltipSkipFlags(this$.tooltipSkipFlags$6NfM, this$.itemCollection);

      if (returnUndefined === true || returnUndefined === undefined) {
        return undefined;
      }
      return null;
    });

    ve.addChangeListener(Ext.emptyFn);
    ve.loadValue(Ext.emptyFn);
  }/*

  private static*/ function getContentLocale$static(content/*:Content*/)/*:Locale*/ {
    var siteModel/*:SiteModel*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteModel();
    if (!siteModel) {
      return null;
    }

    var localeDescriptor/*:CapPropertyDescriptor*/ = content.getType().getDescriptor(siteModel.getLocaleProperty());
    if (!localeDescriptor) {
      return null;
    }

    var properties/*:ContentProperties*/ = content.getProperties();
    if (!properties) {
      return undefined;
    }

    var contentLanguageTag/*:String*/ = properties.get(localeDescriptor.name);
    if (contentLanguageTag === undefined) {
      return undefined;
    }
    if (!contentLanguageTag) {
      return null;
    }

    var localesService/*:LocalesService*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).getLocalesService();
    return localesService.getLocale(contentLanguageTag);
  }/*

  internal static*/ function customizeDragData$static(tabDragZone/*:TabDragZone*/, dragData/*:Object*/, dragGhost/*:Element*/)/*:void*/ {
    var draggedTabProxy/*:WorkAreaTabProxy*/ =AS3.as( dragData.dragItem,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy);
    if (draggedTabProxy) {
      draggedTabProxy.customizeDragData(tabDragZone, dragData, dragGhost);
    }
  }/*

  public*/ function registerWorkAreaTabProxyForEntity(entity/*:Object*/, proxy/*:WorkAreaTabProxy*/)/*:void*/ {
    this.entitiesToWorkAreaTabProxiesMap$6NfM[getEntityKey$static(entity)] = proxy;
  }/*

  public*/ function unregisterWorkAreaTabProxyForEntity(entity/*:Object*/)/*:void*/ {
    delete this.entitiesToWorkAreaTabProxiesMap$6NfM[getEntityKey$static(entity)];
  }/*

  public*/ function getWorkAreaTabProxyForEntity(entity/*:Object*/)/*:WorkAreaTabProxy*/ {
    return this.entitiesToWorkAreaTabProxiesMap$6NfM[getEntityKey$static(entity)];
  }/*

  private static*/ function getEntityKey$static(entity/*:Object*/)/*:Object*/ {
    if (AS3.is(entity,  String)) {
      return entity;
    } else if (AS3.is(entity,  com.coremedia.ui.data.RemoteBean)) {
      return (AS3.as(entity,  com.coremedia.ui.data.RemoteBean)).getUriPath();
    } else if (AS3.is(entity,  Ext.Component)) {
      return (AS3.as(entity,  Ext.Component)).getId();
    } else if (entity) {
      return entity;
    } else {
      return "";
    }
  }/*

  protected*/ function getTabBarVisibilityVE()/*:ValueExpression*/ {var this$=this;
    var me/*:WorkAreaTabProxiesTabPanel*/ =AS3.as( this,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel);
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var tabBar/*:TabBar*/ = this$.getTabBar();
      if (tabBar) {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(tabBar, "add");
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(tabBar, "remove");
        return tabBar.itemCollection.getCount() !== 0 && tabBar.itemCollection.filterBy(function (item/*:Tab*/)/*:Boolean*/ {
                  return !item.isHidden();
                }).length > 0;
      }
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(me, "afterrender");
      return true;
    });
  }/*

  // For tests
  //noinspection JSUnusedGlobalSymbols
  public*/ function getProxyForWorkAreaTab(tab/*:Panel*/)/*:WorkAreaTabProxy*/ {
    if (AS3.is(tab,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)) {
      return this.getWorkAreaTabProxyForEntity((AS3.as(tab,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)).getEntity());
    } else {
      return this.getWorkAreaTabProxyForEntity(tab);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tab.Panel",
      entitiesToWorkAreaTabProxiesMap$6NfM: null,
      tooltipSkipFlags$6NfM: null,
      constructor: WorkAreaTabProxiesTabPanelBase$,
      super$6NfM: function() {
        Ext.tab.Panel.prototype.constructor.apply(this, arguments);
      },
      onAdd: onAdd,
      triggerTooltipUpdate$6NfM: triggerTooltipUpdate,
      updateTooltips$6NfM: updateTooltips,
      updateTooltip$6NfM: updateTooltip,
      computeToolTip$6NfM: computeToolTip,
      startUpdateTooltipInfo$6NfM: startUpdateTooltipInfo,
      registerWorkAreaTabProxyForEntity: registerWorkAreaTabProxyForEntity,
      unregisterWorkAreaTabProxyForEntity: unregisterWorkAreaTabProxyForEntity,
      getWorkAreaTabProxyForEntity: getWorkAreaTabProxyForEntity,
      getTabBarVisibilityVE: getTabBarVisibilityVE,
      getProxyForWorkAreaTab: getProxyForWorkAreaTab,
      statics: {customizeDragData: customizeDragData$static},
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.tab.Panel",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.dependencies.Trigger",
        "com.coremedia.ui.logging.Logger"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTab",
        "com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType",
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel",
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy",
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxyBase",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
