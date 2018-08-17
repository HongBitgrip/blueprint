Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl", function(SidePanelManagerImpl) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel {

import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.LocalStorageUtil;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.JSON;
import ext.container.Container;
import ext.event.Event;
import ext.panel.Panel;
import ext.util.Floating;
import ext.window.Window;

public class SidePanelManagerImpl implements ISidePanelManager {
  private var items:Object =*/function items_(){this.items$Snwj=( {});}/*;
  private var itemXTypes:Object =*/function itemXTypes_(){this.itemXTypes$Snwj=( {});}/*;
  private var sidePanels:Object =*/function sidePanels_(){this.sidePanels$Snwj=( {});}/*;

  private var itemStates:Object =*/function itemStates_(){this.itemStates$Snwj=( {});}/*;
  private var addItemCallbacks:Object =*/function addItemCallbacks_(){this.addItemCallbacks$Snwj=( {});}/*;

  public*/ function SidePanelManagerImpl$() {items_.call(this);itemXTypes_.call(this);sidePanels_.call(this);itemStates_.call(this);addItemCallbacks_.call(this);
    this.readState$Snwj();
  }/*

  private static*/ function createDefaults$static()/*:Panel*/ {
    var panelCfg/*:Panel*/ = AS3.cast(Ext.panel.Panel,{});
    panelCfg['minWidth'] = 300;
    panelCfg['minHeight'] = 200;
    AS3.setBindable(panelCfg,"width" , 400);
    AS3.setBindable(panelCfg,"height" , 300);
    panelCfg['header'] = false;
    return panelCfg;
  }/*

  public*/ function init()/*:void*/ {
    this.initVisibleItems$Snwj();
  }/*

  private*/ function readState()/*:void*/ {
    this.itemStates$Snwj = Ext.JSON.decode(com.coremedia.ui.util.LocalStorageUtil.getItem('side-panel-manager')) || {};
  }/*

  private*/ function storeParent(id/*:String*/)/*:void*/ {
    var item/*:Component*/ = this.items$Snwj[id];
    if (this.itemStates$Snwj[id]) {
      this.itemStates$Snwj[id].parent = this.getParentId$Snwj(item);
    } else {
      this.itemStates$Snwj[id] = {
        parent: this.getParentId$Snwj(item),
        visible: false
      };
    }
    this.storeState$Snwj();
  }/*

  private*/ function storeVisibility(id/*:String*/, visible/*:Boolean*/)/*:void*/ {
    var item/*:Component*/ = this.items$Snwj[id];
    if (this.itemStates$Snwj[id]) {
      this.itemStates$Snwj[id].visible = visible;
    } else {
      this.itemStates$Snwj[id] = {
        parent: this.getParentId$Snwj(item),
        visible: visible
      };
    }
    this.storeState$Snwj();
  }/*

  private*/ function storeState()/*:void*/ {
    com.coremedia.ui.util.LocalStorageUtil.setItem('side-panel-manager', Ext.JSON.encode(this.itemStates$Snwj));
  }/*

  private*/ function getParentId(item/*:Component*/)/*:String*/ {
    var parent/*:Container*/ = item.findParentBy(function (container/*:Container*/, item/*:Component*/)/*:Boolean*/ {
      return AS3.is( container,  com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow) ||AS3.is( container,  com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel);
    });

    return parent && parent.getId();
  }/*

  private*/ function initVisibleItems()/*:void*/ {
    for (var id/*:String*/ in this.itemStates$Snwj) {
      var itemState/*:Object*/ = this.itemStates$Snwj[id];
      if (itemState && itemState.visible) {
        var item/*:Component*/ = this.getOrCreateComponent(id);
        if (item) {
          item.show();
        } else {
          // no item registered with id => delete old state
          delete this.itemStates$Snwj[id];
        }
      }
    }
  }/*

  public*/ function registerComponent(id/*:String*/, xtype/*:String*/)/*:void*/ {
    this.itemXTypes$Snwj[id] = xtype;
  }/*

  public*/ function getComponent(id/*:String*/)/*:Component*/ {
    return this.items$Snwj[id];
  }/*

  public*/ function getOrCreateComponent(id/*:String*/)/*:Component*/ {
    return this.getComponent(id) || this.createItem$Snwj(id);
  }/*

  public*/ function getComponentOnCreation(id/*:String*/, callback/*:Function*/)/*:void*/ {
    var item/*:Component*/ = this.getComponent(id);
    if (item) {
      com.coremedia.ui.util.EventUtil.invokeLater(callback(item));
    } else {
      if (this.addItemCallbacks$Snwj[id]) {
        Array(this.addItemCallbacks$Snwj[id]).push(callback);
      } else {
        this.addItemCallbacks$Snwj[id] = [callback];
      }
    }
  }/*

  private*/ function createItem(id/*:String*/)/*:Component*/ {var this$=this;

    var xtype/*:String*/ = this.itemXTypes$Snwj[id];
    if (!xtype) {
      com.coremedia.ui.logging.Logger.warn("No component registered with id " + id);
      return null;
    } else {
      var newItem/*:Component*/ = Ext.ComponentManager.create({id: id}, xtype);
      applyDefaults$static(newItem, createDefaults$static());

      // always ask parent for visibility (deep=true) because
      // isVisible(false) will return true for hidden side panels
      var isVisibleOrig/*:Function*/ =AS3.bind( newItem,"isVisible");
      newItem.isVisible = function(deep/*:Boolean = undefined*/)/*:Boolean*/ {
        return isVisibleOrig.apply(newItem, [true]);
      };
      this.registerItem(newItem);
      this.monitorItem$Snwj(id, newItem);

      var mainView/*:Component*/ = Ext.getCmp('main');
      var itemState/*:Object*/ = this.itemStates$Snwj[id];

      if (mainView) {
        if (mainView.rendered) {
          this.addItemToPanelOrWindow$Snwj(id, newItem, itemState);
        } else {
          mainView.mon(mainView, 'afterrender', function ()/*:void*/ {
            this$.addItemToPanelOrWindow$Snwj(id, newItem, itemState);
          }, null, {single: true});
        }
      } else {
        com.coremedia.ui.logging.Logger.warn("Could not add item " + id);
      }

      return newItem;
    }
  }/*

  /**
   * @private for access from tests only
   * /
  public*/ function registerItem(newItem/*:Component*/)/*:void*/ {
    this.items$Snwj[AS3.getBindable(newItem,"id","DUMMY")] = newItem;
  }/*

  /**
   * @private for access from tests only
   * /
  public*/ function resetItems()/*:void*/ {
    this.items$Snwj = {};
  }/*

  private static*/ function applyDefaults$static(obj/*:Object*/, defaults/*:Object*/)/*:void*/ {
    for (var key/*:String*/ in defaults) {
      if (!obj[key]) {
        obj[key] = defaults[key];
      }
    }
  }/*

  private*/ function monitorItem(id/*:String*/, newItem/*:Component*/)/*:void*/ {var this$=this;
    newItem.mon(newItem, 'added', function ()/*:void*/ {
      this$.storeParent$Snwj(id);
    });
    newItem.mon(newItem, 'show', function ()/*:void*/ {
      this$.storeVisibility$Snwj(id, true);
    });
    newItem.mon(newItem, 'hide', function ()/*:void*/ {
      this$.storeVisibility$Snwj(id, false);
    });
  }/*

  private*/ function addItemToPanelOrWindow(id/*:String*/, newItem/*:Component*/, itemState/*:Object*/)/*:void*/ {
    var parentId/*:String*/ = itemState && itemState.parent;
    var sidePanelFloatingWindowConfig/*:SidePanelFloatingWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow,{});
    sidePanelFloatingWindowConfig.items = [newItem];

    if (parentId) {
      if (this.getSidePanel(parentId)) {
        this.getSidePanel(parentId).addItem(newItem);
      } else {
        new com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow(sidePanelFloatingWindowConfig);
      }
    } else {
      if (newItem.initialConfig.docked) {
        var sidePanels/*:Array*/ = this.getSidePanels();
        var sidePanel/*:SidePanel*/ = sidePanels && sidePanels.length > 0 && sidePanels[0];
        if (sidePanel) {
          sidePanel.addItem(newItem);
        } else {
          new com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow(sidePanelFloatingWindowConfig);
        }
      } else {
        new com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow(sidePanelFloatingWindowConfig);
      }
    }

    var callbacks/*:Array*/ = this.addItemCallbacks$Snwj[id] || [];
    for (var i/*:int*/ = 0; i < callbacks.length; i++) {
      var callback/*:Function*/ = callbacks[i];
      callback(newItem, id);
    }

    delete this.addItemCallbacks$Snwj[id];
  }/*

  public*/ function registerSidePanel(id/*:String*/, sidePanel/*:SidePanel*/)/*:void*/ {
    this.sidePanels$Snwj[id] = sidePanel;
  }/*

  public*/ function getSidePanel(id/*:String*/)/*:SidePanel*/ {
    return this.sidePanels$Snwj[id];
  }/*

  public*/ function getSidePanels()/*:Array*/ {
    var sidePanelArray/*:Array*/ = [];

    for (var id/*:String*/ in this.sidePanels$Snwj) {
      sidePanelArray.push(this.sidePanels$Snwj[id]);
    }

    return sidePanelArray;
  }/*

  public*/ function dock(id/*:String*/)/*:void*/ {
    var toDock/*:Component*/ = this.getComponent(id);
    if (toDock) {
      var parent/*:Window*/ =AS3.as( toDock.up(),  Ext.window.Window);
      if (parent) {
        var sidePanels/*:Array*/ = this.getSidePanels();
        if (sidePanels.length > 0) {
          var sidePanel/*:SidePanel*/ = sidePanels[0];
          sidePanel.dockItem(parent);
        }
      }
    }
  }/*

  public*/ function onDragFloatingWindow(w/*:SidePanelFloatingWindow*/, e/*:Event*/)/*:void*/ {
    for (var id/*:String*/ in this.sidePanels$Snwj) {
      var sidePanel/*:SidePanel*/ = this.sidePanels$Snwj[id];
      sidePanel.onDragFloatingWindow(w, e);
    }
  }/*

  public*/ function endDragFloatingWindow(w/*:SidePanelFloatingWindow*/, e/*:Event*/)/*:Boolean*/ {
    var willDock/*:Boolean*/ = false;

    for (var id/*:String*/ in this.sidePanels$Snwj) {
      var sidePanel/*:SidePanel*/ = this.sidePanels$Snwj[id];
      willDock = willDock || sidePanel.endDragFloatingWindow(w, e);
    }
    return willDock;
  }/*

  public*/ function onDragSidePanel(draggedPanel/*:SidePanel*/, e/*:Event*/)/*:void*/ {
    for (var id/*:String*/ in this.sidePanels$Snwj) {
      var sidePanel/*:SidePanel*/ = this.sidePanels$Snwj[id];
      sidePanel.onDragSidePanel(draggedPanel, e);
    }
  }/*

  public*/ function endDragSidePanel(draggedPanel/*:SidePanel*/, e/*:Event*/)/*:Boolean*/ {
    var willDock/*:Boolean*/ = false;

    for (var id/*:String*/ in this.sidePanels$Snwj) {
      var sidePanel/*:SidePanel*/ = this.sidePanels$Snwj[id];
      willDock = willDock || sidePanel.endDragSidePanel(draggedPanel, e);
    }
    return willDock;
  }/*

  public static*/ function reRegisterFloatings$static(rootItem/*:Component*/)/*:void*/ {
    // Re-register all nested floatings under the root item with their (possibly changed) zIndexParent
    var floatings/*:Array*/ = rootItem.isFloating() ? [rootItem] : [];
    if (AS3.is(rootItem,  Ext.container.Container)) {
      floatings = floatings.concat((AS3.as(rootItem,  Ext.container.Container)).query('component[floating=true]'));
    }
    floatings.forEach(function (floating/*:Floating*/)/*:void*/ {
      floating['registerWithOwnerCt']();
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.desktop.sidepanel.ISidePanelManager"],
      constructor: SidePanelManagerImpl$,
      init: init,
      readState$Snwj: readState,
      storeParent$Snwj: storeParent,
      storeVisibility$Snwj: storeVisibility,
      storeState$Snwj: storeState,
      getParentId$Snwj: getParentId,
      initVisibleItems$Snwj: initVisibleItems,
      registerComponent: registerComponent,
      getComponent: getComponent,
      getOrCreateComponent: getOrCreateComponent,
      getComponentOnCreation: getComponentOnCreation,
      createItem$Snwj: createItem,
      registerItem: registerItem,
      resetItems: resetItems,
      monitorItem$Snwj: monitorItem,
      addItemToPanelOrWindow$Snwj: addItemToPanelOrWindow,
      registerSidePanel: registerSidePanel,
      getSidePanel: getSidePanel,
      getSidePanels: getSidePanels,
      dock: dock,
      onDragFloatingWindow: onDragFloatingWindow,
      endDragFloatingWindow: endDragFloatingWindow,
      onDragSidePanel: onDragSidePanel,
      endDragSidePanel: endDragSidePanel,
      statics: {reRegisterFloatings: reRegisterFloatings$static},
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.JSON",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "Ext.window.Window",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.ISidePanelManager",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.LocalStorageUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow"
      ]
    };
});
