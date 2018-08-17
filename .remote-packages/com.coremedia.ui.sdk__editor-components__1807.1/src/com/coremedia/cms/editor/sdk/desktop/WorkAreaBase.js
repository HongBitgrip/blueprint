Ext.define("com.coremedia.cms.editor.sdk.desktop.WorkAreaBase", function(WorkAreaBase) {/*package com.coremedia.cms.editor.sdk.desktop {

import com.coremedia.cms.editor.sdk.dashboard.Dashboard;
import com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState;
import com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.components.ExtendedTab;
import com.coremedia.ui.data.StateHolder;
import com.coremedia.ui.util.AsyncObserver;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;
import com.coremedia.ui.util.reusableComponentsService;

import ext.ClassManager;
import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.panel.Panel;
import ext.tab.TabPanel;
import ext.util.DelayedTask;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class WorkAreaBase extends TabPanel {
  /** @private * /
  public static const COMPONENT_ID:String = 'workarea';

  private var tabTypeById:Object;
  private var tabTypeByTabId:Object;
  private var defaultTabType:WorkAreaTabType;
  private var cachedSingletonTabs:Object =*/function cachedSingletonTabs_(){this.cachedSingletonTabs$QzPR=( {});}/*;

  // Information about pending tab reuses: tab IDs are mapped
  // onto the next ProxyTabStates that have been requested for
  // the tabs.
  private var queuedTabStates:Object =*/function queuedTabStates_(){this.queuedTabStates$QzPR=( {});}/*;

  public*/ function WorkAreaBase$(config/*:WorkArea = null*/) {if(arguments.length<=0)config=null;
    this.tabTypeById$QzPR = {};
    this.tabTypeByTabId$QzPR = {};
    this.super$QzPR(config);cachedSingletonTabs_.call(this);queuedTabStates_.call(this);;

    this.itemCollection.addListener('remove',AS3.bind( this,"tabRemoved$QzPR"));
    this.addListener('render',AS3.bind( this,"createDefaultTabs$QzPR"), {   // on first render, create a default tab !
      single: true
    });

    // On tab change, close singleton tabs that are explicitly marked as foreground tabs.
    this.on('beforetabchange',AS3.bind( this,"handleTabChange$QzPR"));
  }/*

  // TODO: refactor singleton caching into tab reusability
  private static const*/var NO_HEADER_TAB_TYPE_IDS$static/*:Array*/;/* =*/function NO_HEADER_TAB_TYPE_IDS$static_(){NO_HEADER_TAB_TYPE_IDS$static=( [com.coremedia.cms.editor.sdk.dashboard.Dashboard.xtype, com.coremedia.cms.editor.sdk.desktop.StartTab.xtype]);};/*

  //noinspection JSUnusedLocalSymbols
  private*/ function handleTabChange(thys/*:TabPanel*/, newTab/*:Panel*/, currentTab/*:Panel*/)/*:Boolean*/ {var this$=this;
    if (currentTab && newTab) {
      var oldTabType/*:WorkAreaTabType*/ = this.getTabTypeByTab(currentTab);
      if (oldTabType && NO_HEADER_TAB_TYPE_IDS$static.indexOf(oldTabType.getId()) !== -1) {
        this.on('tabchange', function ()/*:void*/ {
          this$.cacheAndHideSingletonTab$QzPR(oldTabType.getId());
        }, this, {single: true});
        return true;
      }
    }

    return true;
  }/*

  override public*/ function add(/*...component*/)/*:**/ {var component=Array.prototype.slice.call(arguments);
    var index/*:Number*/ = (typeof component[0] === 'number') ? component.shift() : -1;
    return this.pushComponents$QzPR(component, index);
  }/*

  private*/ function pushComponents(components/*:Array*/, index/*:int = -1*/)/*:Array*/ {if(arguments.length<=1)index=-1;
    var tabs/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < components.length; i++) {
      var componentOrConfig/*:**/ = components[i];
      if (!componentOrConfig.render) {
        componentOrConfig = Ext.ComponentManager.create(componentOrConfig);
      }
      tabs.push(this.addTab(this.getTabTypeById(componentOrConfig.xtype), componentOrConfig, index));
    }
    return tabs;
  }/*

  /**
   * Adds a new tab. However, if the given tab type is a ReusableTabType, it might also be the
   * case that an existing tab is reused instead. In this case, instead of a new tab, the
   * parameter tabOrState holds a ProxyTabState that is taken to determine the tab to reuse.
   * /
  public*/ function addTab(tabType/*:WorkAreaTabType*/, tabOrState/*:**/, index/*:Number = -1*/, highlight/*:Boolean = false*/)/*:**/ {switch(Math.max(arguments.length,2)){case 2:index=-1;case 3:highlight=false;}
    // Remove 'Start' tab if necessary
    var activeTab/*:Panel*/ = AS3.cast(Ext.panel.Panel,this.getActiveTab());
    if (activeTab
            && this.getTabTypeByTab(activeTab) === this.getDefaultTabType$QzPR()) {
      if (tabOrState.xtype === activeTab.xtype) {
        return;
      }
      this.remove(activeTab);
    }

    // Determine whether an existing tab should be reused.
    var tab/*:Panel*/;
    var reused/*:Panel*/ = this.getReusedPanel$QzPR(tabType, tabOrState);
    if (reused) {
      // If so, take this reused tab from here on.
      tab = reused;
    } else {
      // Otherwise, tabOrState holds a new tab and we take it from here on.
      tab = tabOrState;
    }

    // Get or create the WorkAreaTabProxy for the new or reused tab.
    // We only get a result if a new proxy was created.
    var proxy/*:WorkAreaTabProxy*/ = this.getTabProxy$QzPR(tabType, tab, tabOrState);

    var workAreaProxies/*:TabPanel*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies();

    if (AS3.is(tab,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypeAware)) {
      AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypeAware,tab).setWorkAreaTabType(tabType);
    }
    this.tabTypeByTabId$QzPR[tab.getId()] = tabType;

    // 1. If we have a freshly created WorkAreaTabProxy, add it to the
    //    WorkAreaTabProxiesTabPanel.
    // 2. If the tab is not a reused one, add it to the WorkArea.
    var result/*:**/;
    if (index >= 0) {
      if (reused && reused.up()) {
        result = reused;
      } else {
        result = Ext.tab.Panel.prototype.add.call(this,tab);
      }
      proxy && workAreaProxies.insert(index, proxy);
    } else {
      result = (reused && reused.up()) ? false : Ext.tab.Panel.prototype.add.call(this,tab);
      proxy && workAreaProxies.add(proxy);
    }

    if (highlight) {
      this.highlightTab(tab);
    }

    return result;
  }/*

  /**
   * Determines whether an existing tab can be reused for the given tabOrState.
   * /
  private*/ function getReusedPanel(tabType/*:WorkAreaTabType*/, tabOrState/*:Object*/)/*:Panel*/ {
    // Only iff we have a ReusableTabType and a ProxyTabState, reusability may happen.
    if (!(AS3.is(tabType,  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType) &&AS3.is( tabOrState,  com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState))) {
      return null;
    }

    var reusedTab/*:WorkAreaTab*/;

    var tabState/*:ProxyTabState*/ =AS3.as( tabOrState,  com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState);
    var reusableTabType/*:ReusableTabType*/ =AS3.as( tabType,  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType);
    var reusabilityKey/*:String*/ = reusableTabType.computeReusabilityKey(tabState);

    // Let's see if we can obtain a reusable tab from the service.
    reusedTab =AS3.as( com.coremedia.ui.util.reusableComponentsService.requestComponentForReuse(reusabilityKey),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab);

    if (reusedTab) {

      // Just to make sure, set entity.
      var entityProperty/*:String*/ = AS3.getBindable((AS3.as(reusableTabType,  com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType)),"entityProperty");
      tabState.entity = tabOrState[entityProperty];

      // If there is currently a WorkAreaTabProxy associated with the reused tab (via their respective entities) we need to cut this link.
      var currentTabProxyForReusedTab/*:WorkAreaTabProxy*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies().getWorkAreaTabProxyForEntity(this.getEntityForTab$QzPR(reusedTab));
      if (currentTabProxyForReusedTab && AS3.getBindable(currentTabProxyForReusedTab,"referenceTab") === reusedTab) {
        AS3.setBindable(currentTabProxyForReusedTab,"referenceTab" , null);
      }

      this.setupReusedTab$QzPR(reusableTabType, reusedTab, tabState);

      // Each reusable tab gets its new close() method.
      var me/*:WorkAreaBase*/ = this;
      reusedTab.close = function ()/*:void*/ {
        com.coremedia.ui.util.reusableComponentsService.removeReusableComponentCleanly(AS3.as(this,  Ext.panel.Panel));

        // Special treatment for the case where there is a reusability limit of 1 for tabs.
        // In this case the closing procedure has to fully run through before
        // the singular reusable tab tab is added again if there is a
        // tab proxy with this tab as reference tab.
        if (!this.up()) {
          var activeProxy/*:WorkAreaTabProxy*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies().getActiveTab(),  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy);
          if (activeProxy && AS3.getBindable(activeProxy,"referenceTab") === this) {
            me.add(this);
            me.setActiveTab(this);
          }
        }
      };
    }

    return reusedTab;
  }/*

  private*/ function getEntityForTab(tab/*:WorkAreaTab*/)/*:Object*/ {
    var queuedState/*:ProxyTabState*/ = this.queuedTabStates$QzPR[tab.getId()];
    return queuedState ? queuedState.entity : (AS3.as(tab,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)).getEntity();
  }/*

  /**
   * Sets up reuse for a WorkAreaTab. The tab takes on its new content given by a ProxyTabState.
   * It is important that multiple reuse operations for a tab do not overlap. This may
   * happen if a user switches between tabs very fast.
   *
   * If no tab reuse is currently in progress for the tab, the given ProxyTabState is
   * immediately applied. If there is already a tab reuse in progress, it is waited until this
   * reuse has been completed before the given ProxyTabState is applied.
   *
   * @param reusableTabType The ReusableTabType of the tab
   * @param reusedTab the reused WorkAreaTab
   * @param tabState the new ProxyTabState for the tab
   * /
  private*/ function setupReusedTab(reusableTabType/*:ReusableTabType*/, reusedTab/*:WorkAreaTab*/, tabState/*:ProxyTabState = null*/)/*:void*/ {var this$=this;if(arguments.length<=2)tabState=null;

    // Clone state object to obtain a unique reference
    var nextTabState/*:ProxyTabState*/ = tabState.clone();

    // tab reuse already in progress?
    if(this.queuedTabStates$QzPR[reusedTab.getId()]){
      // Just update the queued tab state (only the last queued tab state will be considered later on)
      this.queuedTabStates$QzPR[reusedTab.getId()] = nextTabState;
      return;
    }

    this.queuedTabStates$QzPR[reusedTab.getId()] = nextTabState;

    // Start reuse
    reusedTab.fireEvent(com.coremedia.cms.editor.sdk.desktop.WorkArea.BEFORE_TAB_REUSE_EVENT, reusedTab);
    reusableTabType.setupReusedTab(nextTabState, reusedTab);

    com.coremedia.ui.util.AsyncObserver.complete(function ()/*:void*/ {
      // what is the queued tab state
      var lastQueuedState/*:ProxyTabState*/ = this$.queuedTabStates$QzPR[reusedTab.getId()];
      delete this$.queuedTabStates$QzPR[reusedTab.getId()];

      // If the just applied tab state is not the least recently queued --> reuse tab again
      if (nextTabState === lastQueuedState) {
        reusedTab.fireEvent(com.coremedia.cms.editor.sdk.desktop.WorkArea.AFTER_TAB_REUSE_EVENT, reusedTab);
      } else {
        this$.setupReusedTab$QzPR(reusableTabType, reusedTab, lastQueuedState);
      }
    });
  }/*

  /**
   * Get or create WorkAreaTabProxy for the given tab. Only returns the proxy if it was created.
   * /
  private*/ function getTabProxy(tabType/*:WorkAreaTabType*/, tab/*:Panel*/, tabOrState/*:Object*/)/*:WorkAreaTabProxy*/ {
    var proxy/*:WorkAreaTabProxy*/;

    // Is there already a WorkAreaTabProxy for the tab's entity?
    if (AS3.is(tab,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)) {
      proxy = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies().getWorkAreaTabProxyForEntity(this.getEntityForTab$QzPR(AS3.as(tab,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)));
    }

    if (proxy) {
      // If so, the proxy was just activated and needs to be re-associated with the tab.
      AS3.setBindable(proxy,"referenceTab" , tab);
      AS3.setBindable(proxy,"referenceTabType" , tabType);
      (AS3.as(proxy.up(),  Ext.tab.Panel)).setActiveTab(proxy);
      // Only return the proxy if a new one was created.
      proxy = null;
    } else {
      // Otherwise, create a new proxy (config).
      proxy = AS3.cast(com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy,{});
      AS3.setBindable(proxy,"referenceTab" , tab);
      AS3.setBindable(proxy,"referenceTabType" , tabType);
      if (AS3.is(tabOrState,  com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState)) {
        AS3.setBindable(proxy,"proxyState" ,AS3.as( tabOrState,  com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState));
      } else if (AS3.is(tabOrState,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)) {
        AS3.setBindable(proxy,"proxyState" , new com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState({entity: this.getEntityForTab$QzPR(AS3.as(tab,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab))}));
      }
    }

    return proxy;
  }/*

  /**
   * Show a tab of the given type, ensuring that a new tab is only created if there is
   * existing tab of this type. Tries to reuse cached tabs.
   *
   * @param tabTypeId the tab type
   * /
  internal*/ function showSingletonTab(tabTypeId/*:String*/)/*:void*/ {var this$=this;
    var tabsOfType/*:Array*/ = this.getTabsOfType$QzPR(tabTypeId);
    if (tabsOfType.length === 0) {
      var newTab/*:Panel*/;
      var tabType/*:WorkAreaTabType*/ = this.getTabTypeById(tabTypeId);
      if (this.getCachedSingletonTab$QzPR(tabTypeId)) {
        // There is a cached singleton tab available ... Use it and remove it from cache.
        newTab = this.getCachedSingletonTab$QzPR(tabTypeId);
        this.removeCachedSingletonTab$QzPR(tabTypeId);
        this.addNewTab$QzPR(tabType, newTab);
      } else {
        // No tab exists. Create one.
        tabType.createTab({}, function (tab/*:Panel*/)/*:void*/ {
          this$.addNewTab$QzPR(tabType, tab);
        });
      }
    } else if (tabsOfType.indexOf(this.getActiveTab()) === -1) {
      // None of the tabs (hopefully only one) of the correct type are active. Switch to the first.
      this.setActiveTab(tabsOfType[0]);
    }
  }/*

  private*/ function addNewTab(tabType/*:WorkAreaTabType*/, newTab/*:Panel*/)/*:void*/ {
    // Suspending / resuming layouts is necessary. The reason is ... unclear to me.
    Ext.suspendLayouts();
    this.addTab(tabType, newTab);
    Ext.resumeLayouts();

    this.setActiveTab(newTab);

    var activeElement/*:**/ = Ext.getDoc().dom['activeElement'];
    // shortcuts in richtext editor only work in firefox with these two blurs
    if (Ext.isGecko && activeElement && activeElement['nodeName'] === 'IFRAME') {
      activeElement.blur(); // two blurs required, do not remove
      activeElement.blur(); // two blurs required, do not remove
    }
  }/*

  /**
   * Toggle singleton tab of the given type.
   * Move tab to cache if it is open and active. Otherwise show it.
   *
   * @param tabTypeId
   * @private
   * /
  public*/ function toggleSingletonTab(tabTypeId/*:String*/)/*:void*/ {
    if (this.getTabsOfType$QzPR(tabTypeId).length > 0 && this.getActiveTab() === this.getTabsOfType$QzPR(tabTypeId)[0]) {
      this.cacheAndHideSingletonTab$QzPR(tabTypeId);
    } else {
      this.showSingletonTab(tabTypeId);
    }
  }/*

  private*/ function cacheAndHideSingletonTab(tabTypeId/*:String*/)/*:void*/ {
    var tab/*:Panel*/ =AS3.as( this.getTabsOfType$QzPR(tabTypeId)[0],  Ext.panel.Panel);
    if (tab) {
      // Do not destroy tab. Remove it from tab panel and move it to list of cached singleton tabs.
      this.addCachedSingletonTab$QzPR(tab, tabTypeId);
      tab.fireEvent('close', tab);
      this.remove(tab, false);
      tab.hide();
    }
  }/*

  private*/ function addCachedSingletonTab(tab/*:Panel*/, tabTypeId/*:String*/)/*:void*/ {var this$=this;
    var currentCacheValue/*:Panel*/ = this.cachedSingletonTabs$QzPR[tabTypeId];
    if (currentCacheValue && currentCacheValue !== tab) {
      // This should never happen...
      currentCacheValue.destroy();
    }

    if (!currentCacheValue) {
      this.cachedSingletonTabs$QzPR[tabTypeId] = tab;
      // Attach a destroy listener just in case the cached singleton tab is destroyed while it is not
      // visible but in cache.
      tab.mon(tab, "beforedestroy", function ()/*:void*/ {
        this$.removeCachedSingletonTab$QzPR(tabTypeId);
      });
    }
  }/*

  private*/ function getCachedSingletonTab(tabTypeId/*:String*/)/*:Panel*/ {
    return this.cachedSingletonTabs$QzPR[tabTypeId];
  }/*

  private*/ function removeCachedSingletonTab(tabTypeId/*:String*/)/*:void*/ {
    this.cachedSingletonTabs$QzPR[tabTypeId] && delete this.cachedSingletonTabs$QzPR[tabTypeId];
  }/*

  /**
   * Highlight tab for 5seconds.
   *
   * @param tab
   * /
  internal*/ function highlightTab(tab/*:Panel*/)/*:void*/ {
    var workAreaTab/*:WorkAreaTab*/ =AS3.as( tab,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab);
    var proxy/*:WorkAreaTabProxy*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies().getWorkAreaTabProxyForEntity(AS3.getBindable(workAreaTab,"entity"));
    var extendedTab/*:ExtendedTab*/ =AS3.as( proxy['tab'],  com.coremedia.ui.components.ExtendedTab);
    if (extendedTab) {
      AS3.setBindable(extendedTab,"highlighted" , true);
      var delayAnimation/*:**/ = new Ext.util.DelayedTask(function ()/*:void*/ {
        if (extendedTab) {
          AS3.setBindable(extendedTab,"highlighted" , false);
        }
      });
      delayAnimation.delay(5000);
    }
  }/*

  private*/ function createDefaultTabs()/*:void*/ {var this$=this;
    this.defaultTabType$QzPR.createTab({}, function (defaultTab/*:Panel*/)/*:void*/ {
      this$.addTab(this$.defaultTabType$QzPR, defaultTab);
      this$.setActiveTab(defaultTab);
    });
  }/*

  internal*/ function setDefaultTabTypeId(defaultTabTypeId/*:String*/)/*:void*/ {
    for/* each*/ (var $1 in this.tabTypeById$QzPR) {var workAreaTabType/*:WorkAreaTabType*/ =this.tabTypeById$QzPR[$1];
      if (workAreaTabType.getId() === defaultTabTypeId) {
        this.defaultTabType$QzPR = workAreaTabType;
        return;
      }
    }
    throw new AS3.Error("workAreaTabTypesPlugin defaultTabType '" + defaultTabTypeId + "' not found.");
  }/*

  private*/ function getDefaultTabType()/*:WorkAreaTabType*/ {
    return this.defaultTabType$QzPR;
  }/*

  internal*/ function registerTabType(tabType/*:WorkAreaTabType*/)/*:void*/ {
    this.tabTypeById$QzPR[tabType.getId()] = tabType;
  }/*

  /**
   * @private
   * /
  public*/ function getTabTypeById(id/*:String*/)/*:WorkAreaTabType*/ {
    if (!this.tabTypeById$QzPR[id]) {
      //if the tab type is not registered then register a default tab type
      //then id is assumed to be a xtype
      if (Ext.ClassManager.getByAlias("widget." + id)) {
        this.registerTabType(new com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType(AS3.cast(com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType,{tabComponent: {xtype: id}})));
      } else {
        // when even the xtype is unknown then the tab type will be undefined.
      }
    }
    return this.tabTypeById$QzPR[id];
  }/*

  internal*/ function getTabTypeByTab(tab/*:Panel*/)/*:WorkAreaTabType*/ {
    return this.tabTypeByTabId$QzPR[tab.getId()];
  }/*

  private*/ function getTabTypes()/*:Vector.<WorkAreaTabType>*/ {
    var tabTypes/*:Vector.<WorkAreaTabType>*/ =/* new <WorkAreaTabType>*/[];
    for/* each*/ (var $1 in this.tabTypeById$QzPR) {var tabType/*:WorkAreaTabType*/ =this.tabTypeById$QzPR[$1];
      tabTypes.push(tabType); // NOSONAR
    }
    return tabTypes;
  }/*

  internal*/ function getEntityTabTypes()/*:Vector.<EntityWorkAreaTabType>*/ {
    return AS3.cast(Vector$object/*.<EntityWorkAreaTabType>*/,this.getTabTypes$QzPR().filter(isEntityTabType$static));
  }/*

  private static*/ function isEntityTabType$static(tabType/*:WorkAreaTabType*/)/*:Boolean*/ {
    return AS3.is( tabType,  com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType);
  }/*

  private*/ function getTabsOfType(tabTypeId/*:String*/)/*:Array*/ {var this$=this;
    var result/*:Array*/ = [];
    this.itemCollection.each(function (tab/*:Panel*/)/*:void*/ {
      if (tab && this$.getTabTypeByTab(tab).getId() === tabTypeId) {
        result.push(tab);
      }
    });
    return result;
  }/*

  override protected*/ function onAdd(component/*:Component*/, position/*:Number*/)/*:void*/ {
    Ext.tab.Panel.prototype.onAdd.call(this,component, position);

    // if the added tabpanel has a dedicated aria role, keep it. ExtJS will always override it with "tabpanel"
    // this is necessary because although we add some components like the Dashboard to the WorkArea, they are not meant
    // to be a tab panel from a visual and screen reader perspective
    if (component.initialConfig && component.initialConfig.ariaRole) {
      component["ariaRole"] = component.initialConfig.ariaRole;
    }
  }/*

  private*/ function tabRemoved(tab/*:Panel*/)/*:void*/ {var this$=this;
    delete this.tabTypeByTabId$QzPR[tab.getId()];
    if (this.itemCollection.getCount() === 0) { // Check if only the placeholderTab is present.
      com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
        if (this$.itemCollection.getCount() === 0) { // double check that this still holds true "later"!
          this$.createDefaultTabs$QzPR();
        }
      });
    }
  }/*

  override public*/ function setActiveTab(card/*:**/)/*:Component*/ {
    var tabProxy/*:WorkAreaTabProxy*/;

    if (AS3.is(card,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)) {
      tabProxy = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies().getWorkAreaTabProxyForEntity(this.getEntityForTab$QzPR(AS3.as(card,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)));
    } else {
      tabProxy = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies().getWorkAreaTabProxyForEntity(card);
    }

    if (tabProxy) {
      com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies().setActiveTab(tabProxy);
    }

    return Ext.tab.Panel.prototype.setActiveTab.call(this,card);
  }/*

  public*/ function findTab(tabState/*:Object*/)/*:Panel*/ {var this$=this;
    return AS3.as( this.itemCollection.findBy(function (tab/*:Panel*/)/*:Boolean*/ {
      var stateHolder/*:StateHolder*/ =AS3.as( tab,  com.coremedia.ui.data.StateHolder);
      if (stateHolder) {
        var workAreaTab/*:WorkAreaTab*/ =AS3.as( tab,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab);
        if (this$.isTabDirty(workAreaTab)) {
          return false;
        }
        var otherTabState/*:Object*/ = stateHolder.getStateValueExpression().getValue();
        if (workAreaTab) {
          // If the current tab is a representing an entity, only compare the entities, not the complete tab state!
          // WorkAreaTabs are assumed to have an EntityWokrAreaTabType:
          var entityWorkAreaTabType/*:EntityWorkAreaTabType*/ = AS3.cast(com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType,this$.getTabTypeByTab(tab));
          // The EntityWorkAreaTabType knows how to extract an entity from a state:
          var entity/*:Object*/ = entityWorkAreaTabType.extractEntity(tabState);
          var otherEntity/*:Object*/ = entityWorkAreaTabType.extractEntity(otherTabState);
          if (entity === otherEntity) {
            return true;
          }
        } else {
          // Do a partial match of the tab state: only consider properties given in the tab state to look for!
          for (var property/*:String*/ in tabState) {
            if (!com.coremedia.ui.util.ObjectUtils.equal(tabState[property], otherTabState[property])) {
              return false;
            }
          }
          return true;
        }
      }
      return false;
    }),  Ext.panel.Panel);
  }/*

  public*/ function isTabDirty(workAreaTab/*:WorkAreaTab*/)/*:Boolean*/ {
    return workAreaTab.getEntity() !== this.getEntityForTab$QzPR(workAreaTab);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tab.Panel",
      metadata: {"": ["PublicApi"]},
      tabTypeById$QzPR: null,
      tabTypeByTabId$QzPR: null,
      defaultTabType$QzPR: null,
      constructor: WorkAreaBase$,
      super$QzPR: function() {
        Ext.tab.Panel.prototype.constructor.apply(this, arguments);
      },
      handleTabChange$QzPR: handleTabChange,
      add: add,
      pushComponents$QzPR: pushComponents,
      addTab: addTab,
      getReusedPanel$QzPR: getReusedPanel,
      getEntityForTab$QzPR: getEntityForTab,
      setupReusedTab$QzPR: setupReusedTab,
      getTabProxy$QzPR: getTabProxy,
      showSingletonTab: showSingletonTab,
      addNewTab$QzPR: addNewTab,
      toggleSingletonTab: toggleSingletonTab,
      cacheAndHideSingletonTab$QzPR: cacheAndHideSingletonTab,
      addCachedSingletonTab$QzPR: addCachedSingletonTab,
      getCachedSingletonTab$QzPR: getCachedSingletonTab,
      removeCachedSingletonTab$QzPR: removeCachedSingletonTab,
      highlightTab: highlightTab,
      createDefaultTabs$QzPR: createDefaultTabs,
      setDefaultTabTypeId: setDefaultTabTypeId,
      getDefaultTabType$QzPR: getDefaultTabType,
      registerTabType: registerTabType,
      getTabTypeById: getTabTypeById,
      getTabTypeByTab: getTabTypeByTab,
      getTabTypes$QzPR: getTabTypes,
      getEntityTabTypes: getEntityTabTypes,
      getTabsOfType$QzPR: getTabsOfType,
      onAdd: onAdd,
      tabRemoved$QzPR: tabRemoved,
      setActiveTab: setActiveTab,
      findTab: findTab,
      isTabDirty: isTabDirty,
      statics: {
        COMPONENT_ID: 'workarea',
        NO_HEADER_TAB_TYPE_IDS: undefined,
        __initStatics__: function() {
          NO_HEADER_TAB_TYPE_IDS$static_();
        }
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.ClassManager",
        "Ext.ComponentManager",
        "Ext.panel.Panel",
        "Ext.tab.Panel",
        "Ext.util.DelayedTask",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.ExtendedTab",
        "com.coremedia.ui.data.StateHolder",
        "com.coremedia.ui.util.AsyncObserver",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils",
        "com.coremedia.ui.util.reusableComponentsService"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard",
        "com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.StartTab",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTab",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypeAware",
        "com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState",
        "com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType",
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
