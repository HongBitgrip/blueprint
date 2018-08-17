Ext.define("com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxyBase", function(WorkAreaTabProxyBase) {/*package com.coremedia.cms.editor.sdk.desktop.reusability {
import com.coremedia.cms.editor.sdk.dashboard.Dashboard;
import com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType;
import com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase;
import com.coremedia.cms.editor.sdk.desktop.StartTab;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaBase;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaTab;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaTabType;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.components.AsynchronouslyClosable;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.StateHolder;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.mixins.ILazyItemsContainerMixin;
import com.coremedia.ui.plugins.TabDragZone;
import com.coremedia.ui.util.DraggableItemsUtils;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.reusableComponentsService;

import ext.dom.Element;
import ext.panel.Panel;
import ext.tab.TabPanel;

public class WorkAreaTabProxyBase extends Panel implements ILazyItemsContainerMixin, AsynchronouslyClosable, StateHolder {

  // No-Header tabs do not show a tab strip and are 'toggled away' (cached and hidden) as soon as the
  // user changes to another tab. No-Header tabs are always singleton tabs.
  private static const*/var NO_HEADER_TAB_TYPE_IDS$static/*:Array*/;/* =*/function NO_HEADER_TAB_TYPE_IDS$static_(){NO_HEADER_TAB_TYPE_IDS$static=( [com.coremedia.cms.editor.sdk.dashboard.Dashboard.xtype, com.coremedia.cms.editor.sdk.desktop.StartTab.xtype]);};/*

  private static const*/var PROXY_STATE_CHANGED_EVENT$static/*:String*/ = "proxyStateChangedEvent";/*
  public static const REFERENCE_TAB_CHANGED_EVENT:String = "referenceTabChangedEvent";

  private var myTitle:String;
  private var titleVE:ValueExpression;
  private var myIconCls:Object;
  private var iconClsVE:ValueExpression;

  private var lastState:Object =*/function lastState_(){this.lastState$bfYf=( {});}/*;

  // [Bindable] see below
  private var _proxyState:ProxyTabState;

  // [Bindable] see below
  private var _referenceTab:Panel;

  [Bindable]
  public var referenceTabType:WorkAreaTabType;

  private var stateExpression:ValueExpression;

  private var entityChangeHandlers:Object =*/function entityChangeHandlers_(){this.entityChangeHandlers$bfYf=( {});}/*;

  public*/ function WorkAreaTabProxyBase$(config/*:WorkAreaTabProxy = null*/) {if(arguments.length<=0)config=null;
    this.super$bfYf(config);lastState_.call(this);entityChangeHandlers_.call(this);;

    this.on("beforeclose",AS3.bind( this,"closeHandler$bfYf"));
    this.on("activate",AS3.bind( this,"setReferenceTabActive$bfYf"));
    this.on("afterrender",AS3.bind( this,"setReferenceTabActive$bfYf"));


    if (!AS3.getBindable(this,"proxyState")) {
      AS3.setBindable(this,"proxyState" , new com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState({}));
    }

    this.register$bfYf();

    if (AS3.is(AS3.getBindable(this,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)) {
      (AS3.as(AS3.getBindable(this,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)).notifyTabProxyReady(AS3.as(this,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy));
    }

    this.manageTabStripVisibility$bfYf();

    this.fireEvent(WorkAreaTabProxyBase.REFERENCE_TAB_CHANGED_EVENT);
  }/*

  [Bindable]
  public*/ function get$proxyState()/*:ProxyTabState*/ {
    return this._proxyState$bfYf;
  }/*

  [Bindable]
  public*/ function set$proxyState(newProxyState/*:ProxyTabState*/)/*:void*/ {
    var oldEntity/*:Object*/ = this._proxyState$bfYf ? this._proxyState$bfYf.entity : null;

    this.unregister$bfYf();
    this._proxyState$bfYf = newProxyState;
    this.register$bfYf();

    // Only update reference tab if we currently have a consistent
    // proxyState.entity <-> referenceTab.entity relation. Otherwise
    // the tab is currently under reuse and its entity will be updated later on.
    if (oldEntity
            && AS3.getBindable(this,"referenceTab")
            &&AS3.is( AS3.getBindable(this,"referenceTab"),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)
            && (AS3.as(AS3.getBindable(this,"referenceTab"),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)).getEntity() === oldEntity) {
      (AS3.as(AS3.getBindable(this,"referenceTab"),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)).setEntity(this._proxyState$bfYf.entity);
    }

    this.fireEvent(PROXY_STATE_CHANGED_EVENT$static);
  }/*

  [Bindable]
  public*/ function get$referenceTab()/*:Panel*/ {
    return this._referenceTab$bfYf;
  }/*

  [Bindable]
  public*/ function set$referenceTab(tab/*:Panel*/)/*:void*/ {
    this.detachFromReferenceTab$bfYf();
    this._referenceTab$bfYf = tab;
    this.attachToReferenceTab$bfYf();

    this.fireEvent(WorkAreaTabProxyBase.REFERENCE_TAB_CHANGED_EVENT);
  }/*

  private*/ function register()/*:void*/ {
    if (!AS3.getBindable(this,"proxyState")) {
      return;
    }

    this.attachEntityChangeHandlers$bfYf();

    if (AS3.getBindable(this,"proxyState").entity) {
      (AS3.as(this.up(),  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel)).registerWorkAreaTabProxyForEntity(AS3.getBindable(this,"proxyState").entity,AS3.as( this,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy));
    } else {
      (AS3.as(this.up(),  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel)).registerWorkAreaTabProxyForEntity(AS3.getBindable(this,"referenceTab"),AS3.as( this,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy));
    }
  }/*

  private*/ function unregister()/*:void*/ {
    if (!AS3.getBindable(this,"proxyState") || !this.up()) {
      return;
    }

    this.detachEntityChangeHandlers$bfYf();

    if (AS3.getBindable(this,"proxyState").entity) {
      (AS3.as(this.up(),  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel)).unregisterWorkAreaTabProxyForEntity(AS3.getBindable(this,"proxyState").entity);
    } else {
      (AS3.as(this.up(),  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel)).unregisterWorkAreaTabProxyForEntity(AS3.getBindable(this,"referenceTab"));
    }
  }/*

  private*/ function manageTabStripVisibility()/*:void*/ {
    if (NO_HEADER_TAB_TYPE_IDS$static.indexOf(AS3.getBindable(this,"referenceTabType").getId()) !== -1) {
      if (this.rendered) {
        this['tab'].setVisible(false);
      } else {
        this.on("afterrender", function ()/*:void*/ {
          this['tab'].setVisible(false);
        });
      }
    }
  }/*

  private*/ function setReferenceTabActive()/*:void*/ {
    // Double check if this proxy is the active one before activating reference tab.
    if (!(com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies().getActiveTab() === this)) {
      return;
    }

    if (!AS3.getBindable(this,"referenceTab") || !AS3.getBindable(this,"referenceTab").up()) {
      AS3.getBindable(this,"proxyState").entity && com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().openTabForEntity(AS3.getBindable(this,"proxyState").entity, false);
      return;
    }

    (AS3.as(AS3.getBindable(this,"referenceTab").up(),  Ext.tab.Panel)).setActiveTab(AS3.getBindable(this,"referenceTab"));

    var reusableTabType/*:ReusableTabType*/ =AS3.as( AS3.getBindable(this,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType);
    if (reusableTabType) {
      var reusabilityKey/*:String*/ = reusableTabType.computeReusabilityKey(AS3.getBindable(this,"proxyState"));
      com.coremedia.ui.util.reusableComponentsService.reusableComponentActivated(reusabilityKey, AS3.getBindable(this,"referenceTab"));
    }
  }/*

  private*/ function closeHandler()/*:Boolean*/ {
    return this.closeAsynchronously();
  }/*

  private*/ function attachToReferenceTab()/*:void*/ {
    if (AS3.getBindable(this,"referenceTab")) {
      AS3.setBindable(this,"closable" , AS3.getBindable(AS3.getBindable(this,"referenceTab"),"closable","DUMMY"));
      this.mon(AS3.getBindable(this,"referenceTab"), "activate",AS3.bind( this,"setActive$bfYf"));
      this.mon(AS3.getBindable(this,"referenceTab"), "removed",AS3.bind( this,"onReferenceTabRemoved$bfYf"));
    }
  }/*

  private*/ function setActive()/*:void*/ {
    (AS3.as(this.up(),  Ext.tab.Panel)).setActiveTab(this);
  }/*

  private*/ function onReferenceTabRemoved()/*:void*/ {
    AS3.setBindable(this,"referenceTab" , null);
    this.unregister$bfYf();
    this.destroy();
  }/*

  private*/ function detachFromReferenceTab()/*:void*/ {
    if (AS3.getBindable(this,"referenceTab")) {
      this.mun(AS3.getBindable(this,"referenceTab"), "activate",AS3.bind( this,"setActive$bfYf"));
      this.mun(AS3.getBindable(this,"referenceTab"), "removed",AS3.bind( this,"onReferenceTabRemoved$bfYf"));
    }
  }/*

  protected*/ function getTitleVE()/*:ValueExpression*/ {var this$=this;
    var me/*:Panel*/ = this;

    if (!this.titleVE$bfYf) {
      this.titleVE$bfYf = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(me, PROXY_STATE_CHANGED_EVENT$static);
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(me, WorkAreaTabProxyBase.REFERENCE_TAB_CHANGED_EVENT);

        if (AS3.getBindable(this$,"referenceTabType") &&AS3.is( AS3.getBindable(this$,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)) {
          return (AS3.as(AS3.getBindable(this$,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)).computeTabTitle(AS3.getBindable(this$,"proxyState"));
        }

        if (!AS3.getBindable(this$,"referenceTab")) {
          return this$.myTitle$bfYf;
        }

        if (AS3.is(AS3.getBindable(this$,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)) {
          this$.myTitle$bfYf = (AS3.as(AS3.getBindable(this$,"referenceTab"),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)).calculateTitle();
        } else {
          this$.myTitle$bfYf = AS3.getBindable(this$,"referenceTab").getTitle();
        }

        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(AS3.getBindable(this$,"referenceTab"), "titlechange");

        return this$.myTitle$bfYf;
      });
    }

    return this.titleVE$bfYf;
  }/*

  protected*/ function getIconClsVE()/*:ValueExpression*/ {var this$=this;
    var me/*:Panel*/ = this;

    if (!this.iconClsVE$bfYf) {
      this.iconClsVE$bfYf = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Object*/ {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(me, PROXY_STATE_CHANGED_EVENT$static);
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(me, WorkAreaTabProxyBase.REFERENCE_TAB_CHANGED_EVENT);

        if (AS3.getBindable(this$,"referenceTabType") &&AS3.is( AS3.getBindable(this$,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)) {
          return (AS3.as(AS3.getBindable(this$,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)).computeTabIconCls(AS3.getBindable(this$,"proxyState"));
        }

        if (!AS3.getBindable(this$,"referenceTab")) {
          return this$.myIconCls$bfYf;
        }

        if (AS3.is(AS3.getBindable(this$,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType)) {
          this$.myIconCls$bfYf = (AS3.as(AS3.getBindable(this$,"referenceTab"),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)).calculateIcon();
        } else {
          this$.myIconCls$bfYf = AS3.getBindable(this$,"referenceTab").getIconCls();
        }

        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(AS3.getBindable(this$,"referenceTab"), "iconclschange");

        return this$.myIconCls$bfYf;
      });
    }

    return this.iconClsVE$bfYf;
  }/*

  public*/ function closeAsynchronously(continueClosingCallback/*:Function = null*/)/*:Boolean*/ {if(arguments.length<=0)continueClosingCallback=null;

    var reusableTabType/*:ReusableTabType*/ =AS3.as( AS3.getBindable(this,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType);

    if (AS3.getBindable(this,"referenceTab") && !(AS3.is(AS3.getBindable(this,"referenceTab"),  com.coremedia.ui.components.AsynchronouslyClosable))) {
      this.unregisterAndCloseReferenceTab$bfYf();
      return true;
    }

    if (!AS3.getBindable(this,"referenceTab") && reusableTabType && reusableTabType.isDirectlyClosable(AS3.getBindable(this,"proxyState"))) {
      this.unregisterAndDestroyWorkAreaTabProxy$bfYf();
      return true;
    }

    if (!AS3.getBindable(this,"referenceTab")) {
      com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().openTabForEntity(AS3.getBindable(this,"proxyState").entity, false);
    }

    if (AS3.is(AS3.getBindable(this,"referenceTab"),  com.coremedia.ui.components.AsynchronouslyClosable)) {
      var asyncClose/*:AsynchronouslyClosable*/ =AS3.as( AS3.getBindable(this,"referenceTab"),  com.coremedia.ui.components.AsynchronouslyClosable);
      var closedSynchronously/*:Boolean*/ = asyncClose.closeAsynchronously(function (cont/*:Boolean*/)/*:void*/ {
        continueClosingCallback && continueClosingCallback(cont);
      });
      if (closedSynchronously) {
        // Close reference tab for sure, might not have happened in asyncClose.closeAsynchronously() due to active references.
        if (!this.destroyed) {
          this.unregisterAndCloseReferenceTab$bfYf();
        }
      }

      return closedSynchronously;
    } else {
      this.unregisterAndCloseReferenceTab$bfYf();
      return true;
    }
  }/*

  private*/ function unregisterAndCloseReferenceTab()/*:void*/ {
    this.unregister$bfYf();
    AS3.getBindable(this,"referenceTab").close();
  }/*

  private*/ function unregisterAndDestroyWorkAreaTabProxy()/*:void*/ {
    this.unregister$bfYf();
    this.destroy();
  }/*

  public*/ function getStateValueExpression()/*:ValueExpression*/ {var this$=this;
    var me/*:WorkAreaTabProxy*/ =AS3.as( this,  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy);

    if (!this.stateExpression$bfYf) {
      this.stateExpression$bfYf = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Object*/ {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(me, WorkAreaTabProxyBase.REFERENCE_TAB_CHANGED_EVENT);

        if (AS3.getBindable(this$,"referenceTab")) {
          var referenceTabStateVE/*:ValueExpression*/;

          var tabStateHolder/*:StateHolder*/ =AS3.as( AS3.getBindable(this$,"referenceTab"),  com.coremedia.ui.data.StateHolder);
          if (tabStateHolder) {
            referenceTabStateVE = tabStateHolder.getStateValueExpression();
          } else {
            //noinspection JSDeprecatedSymbols
            referenceTabStateVE = AS3.getBindable(this$,"referenceTabType").getStateValueExpression(AS3.getBindable(this$,"referenceTab"));
          }

          if (referenceTabStateVE) {
            this$.lastState$bfYf = referenceTabStateVE.getValue();
          } else {
            this$.lastState$bfYf = {};
          }

          // Finally. (after all other ValueExpressions have been captured in order to
          // track dependencies), check if reference tab is dirty. If so, compute fallback
          // tab state.
          if (AS3.is(AS3.getBindable(this$,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType) &&
                  (AS3.as(com.coremedia.cms.editor.sdk.editorContext.getWorkArea(),  com.coremedia.cms.editor.sdk.desktop.WorkAreaBase)).isTabDirty(AS3.as(AS3.getBindable(this$,"referenceTab"),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab))) {
            this$.lastState$bfYf = (AS3.as(AS3.getBindable(this$,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase)).computeStateSerialization(AS3.getBindable(this$,"proxyState"));
          }
        }

        return this$.lastState$bfYf;
      });
    }

    return this.stateExpression$bfYf;
  }/*

  internal*/ function customizeDragData(tabDragZone/*:TabDragZone*/, dragData/*:Object*/, dragGhost/*:Element*/)/*:void*/ {
    if (AS3.is(AS3.getBindable(this,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType)) {
      var dragDropGroup/*:String*/ = (AS3.as(AS3.getBindable(this,"referenceTabType"),  com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType)).getDragDropGroup();
      if (dragDropGroup) {
        tabDragZone.addToGroup(dragDropGroup);
        dragGhost.dom.innerHTML = com.coremedia.ui.util.DraggableItemsUtils.DRAG_GHOST_TEMPLATE.apply({
          title: this.getDragTitle$bfYf(),
          icon: this.getDragIcon()
        });
        dragData.contents = [AS3.getBindable(this,"proxyState").entity];
      }
    }
  }/*

  private*/ function getDragTitle()/*:String*/ {
    return this.getTitleVE().getValue();
  }/*

  protected*/ function getDragIcon()/*:String*/ {
    return this.getIconClsVE().getValue();
  }/*

  protected static*/ function encodeForHtml$static(str/*:String*/)/*:String*/ {
    return com.coremedia.ui.util.EncodingUtil.encodeForHTML(com.coremedia.ui.util.EncodingUtil.decodeFromHTML(str));
  }/*

  public*/ function registerEntityChangeHandler(property/*:String*/, handler/*:Function*/)/*:void*/ {
    this.entityChangeHandlers$bfYf[property] = handler;

    this.attachEntityChangeHandler$bfYf(property, handler);
  }/*

  private*/ function attachEntityChangeHandler(property/*:String*/, handler/*:Function*/)/*:void*/ {
    if (AS3.getBindable(this,"proxyState").entity &&AS3.is( AS3.getBindable(this,"proxyState").entity,  com.coremedia.ui.data.Bean)) {
      var entityBean/*:Bean*/ =AS3.as( AS3.getBindable(this,"proxyState").entity,  com.coremedia.ui.data.Bean);
      entityBean.addPropertyChangeListener(property, handler);
    }
  }/*

  private*/ function attachEntityChangeHandlers()/*:void*/ {
    if (AS3.getBindable(this,"proxyState").entity &&AS3.is( AS3.getBindable(this,"proxyState").entity,  com.coremedia.ui.data.Bean)) {
      var entityBean/*:Bean*/ =AS3.as( AS3.getBindable(this,"proxyState").entity,  com.coremedia.ui.data.Bean);

      for (var property/*:String*/ in this.entityChangeHandlers$bfYf) {
        entityBean.addPropertyChangeListener(property, this.entityChangeHandlers$bfYf[property]);
      }
    }
  }/*

  private*/ function detachEntityChangeHandlers()/*:void*/ {
    if (AS3.getBindable(this,"proxyState").entity &&AS3.is( AS3.getBindable(this,"proxyState").entity,  com.coremedia.ui.data.Bean)) {
      var entityBean/*:Bean*/ =AS3.as( AS3.getBindable(this,"proxyState").entity,  com.coremedia.ui.data.Bean);

      for (var property/*:String*/ in this.entityChangeHandlers$bfYf) {
        entityBean.removePropertyChangeListener(property, this.entityChangeHandlers$bfYf[property]);
      }
    }
  }/*

  /** @private * /
  public native function itemsAreLazy():Boolean;

  /** @private * /
  public native function get itemsLazyUntilEvent():String;

  /** @private * /
  public native function set itemsLazyUntilEvent(eventName:String):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      mixins: [
        "com.coremedia.ui.mixins.LazyItemsContainerMixin",
        "com.coremedia.ui.components.AsynchronouslyClosable",
        "com.coremedia.ui.data.StateHolder"
      ],
      myTitle$bfYf: null,
      titleVE$bfYf: null,
      myIconCls$bfYf: null,
      iconClsVE$bfYf: null,
      _proxyState$bfYf: null,
      _referenceTab$bfYf: null,
      stateExpression$bfYf: null,
      constructor: WorkAreaTabProxyBase$,
      super$bfYf: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getProxyState: get$proxyState,
      setProxyState: set$proxyState,
      getReferenceTab: get$referenceTab,
      setReferenceTab: set$referenceTab,
      register$bfYf: register,
      unregister$bfYf: unregister,
      manageTabStripVisibility$bfYf: manageTabStripVisibility,
      setReferenceTabActive$bfYf: setReferenceTabActive,
      closeHandler$bfYf: closeHandler,
      attachToReferenceTab$bfYf: attachToReferenceTab,
      setActive$bfYf: setActive,
      onReferenceTabRemoved$bfYf: onReferenceTabRemoved,
      detachFromReferenceTab$bfYf: detachFromReferenceTab,
      getTitleVE: getTitleVE,
      getIconClsVE: getIconClsVE,
      closeAsynchronously: closeAsynchronously,
      unregisterAndCloseReferenceTab$bfYf: unregisterAndCloseReferenceTab,
      unregisterAndDestroyWorkAreaTabProxy$bfYf: unregisterAndDestroyWorkAreaTabProxy,
      getStateValueExpression: getStateValueExpression,
      customizeDragData: customizeDragData,
      getDragTitle$bfYf: getDragTitle,
      getDragIcon: getDragIcon,
      registerEntityChangeHandler: registerEntityChangeHandler,
      attachEntityChangeHandler$bfYf: attachEntityChangeHandler,
      attachEntityChangeHandlers$bfYf: attachEntityChangeHandlers,
      detachEntityChangeHandlers$bfYf: detachEntityChangeHandlers,
      config: {
        referenceTabType: null,
        proxyState: undefined,
        referenceTab: undefined
      },
      statics: {
        NO_HEADER_TAB_TYPE_IDS: undefined,
        REFERENCE_TAB_CHANGED_EVENT: "referenceTabChangedEvent",
        encodeForHtml: encodeForHtml$static,
        __initStatics__: function() {
          NO_HEADER_TAB_TYPE_IDS$static_();
        }
      },
      requires: [
        "Ext.panel.Panel",
        "Ext.tab.Panel",
        "com.coremedia.ui.components.AsynchronouslyClosable",
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.data.StateHolder",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin",
        "com.coremedia.ui.util.DraggableItemsUtils",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.reusableComponentsService"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard",
        "com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase",
        "com.coremedia.cms.editor.sdk.desktop.StartTab",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaBase",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTab",
        "com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState",
        "com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType",
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel",
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
