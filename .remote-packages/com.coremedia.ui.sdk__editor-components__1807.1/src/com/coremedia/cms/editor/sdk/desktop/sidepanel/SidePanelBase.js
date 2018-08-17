Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelBase", function(SidePanelBase) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel {

import com.coremedia.cms.editor.sdk.desktop.EditorMainView;
import com.coremedia.ui.components.IFrameMgr;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.skins.ContainerSkin;
import com.coremedia.ui.util.ContextMenuUtil;
import com.coremedia.ui.util.EventUtil;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.container.Container;
import ext.event.Event;
import ext.panel.Panel;
import ext.window.Window;

public class SidePanelBase extends Panel {

  private var activeItemValueExpression:ValueExpression;
  private var switchingContainer:SwitchingContainer;
  private var dropZoneThresholdPixel:Number;

  public*/ function SidePanelBase$(config/*:SidePanel = null*/) {if(arguments.length<=0)config=null;
    this.dropZoneThresholdPixel$fDUH = AS3.getBindable(config,"dropZoneThresholdPixel");

    this.super$fDUH(AS3.cast(Ext.panel.Panel,Ext.apply({draggable: this.createDraggable$fDUH()}, config)));

    this.switchingContainer$fDUH = AS3.cast(com.coremedia.ui.components.SwitchingContainer,this.getComponent('switching-container'));
    this.switchingContainer$fDUH.mon(this.switchingContainer$fDUH, 'beforeremove',AS3.bind( this,"onSwitchingContainerBeforeRemove$fDUH"));

    this.on('afterrender',AS3.bind( this,"onAfterRender$fDUH"));
    this.on('show',AS3.bind( this,"onShowInternal$fDUH"));
    this.on('hide',AS3.bind( this,"onHideInternal$fDUH"));

    AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl,com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager).registerSidePanel(AS3.getBindable(config,"id","DUMMY") || AS3.getBindable(config,"itemId","DUMMY") || this.getItemId(), AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel,this));
  }/*

  private*/ function onAfterRender()/*:void*/ {
    this.disableHeaderContextMenu$fDUH();
  }/*

  private*/ function onShowInternal(comp/*:Component*/)/*:void*/ {var this$=this;
    var activeItem/*:Component*/ = this.getActiveItem();

    if (comp === this) {
      if (activeItem) {
        activeItem.events['show'].bubble = false;
        activeItem.show();
        activeItem.events['show'].bubble = true;
      }
    } else if (comp === activeItem) {
      this.rendered && this.suspendEvents(false);
      this.show();
      this.rendered && this.resumeEvents();

      this.doLayoutMainView$fDUH();
    } else {
      comp.on("activate", function (cmp/*:Component*/)/*:void*/ {
        if (cmp.up() === this$.switchingContainer$fDUH) {
          this$.onShowInternal$fDUH(cmp);
        }
      }, null, {single : true});

      this.setActiveContainerItem(comp);
    }
  }/*

  private*/ function onHideInternal(comp/*:Component*/)/*:void*/ {
    var activeItem/*:Component*/ = this.getActiveItem();

    if (comp === this) {
      if (activeItem) {
        activeItem.events['hide'].bubble = false;
        activeItem.hide();
        activeItem.events['hide'].bubble = true;
      } else {
        this.doLayoutMainView$fDUH();
      }
    } else if (comp === activeItem) {
      this.rendered && this.suspendEvents(false);
      this.hide();
      this.rendered && this.resumeEvents();

      this.doLayoutMainView$fDUH();
    }
  }/*

  private*/ function onSwitchingContainerBeforeRemove(container/*:Container*/, component/*:Component*/)/*:void*/ {
    component.mun(component, 'titlechange',AS3.bind( this,"onTitleChange$fDUH"));
    this.getActiveItemValueExpression().setValue(null);
  }/*

  private*/ function disableHeaderContextMenu()/*:void*/ {
    this.mon(this.header, "contextmenu", com.coremedia.ui.util.ContextMenuUtil.disableContextMenu);
    this.mun(this, 'afterrender',AS3.bind( this,"disableHeaderContextMenu$fDUH"));
  }/*

  internal*/ function getActiveItem()/*:Component*/ {
    var activeItemId/*:String*/ = this.getActiveItemValueExpression().getValue();
    return activeItemId ? this.switchingContainer$fDUH.getComponent(activeItemId) : null;
  }/*

  internal*/ function setActiveContainerItem(item/*:**/)/*:Component*/ {
    var component/*:Component*/;

    if (AS3.is(item,  String)) {
      component = this.switchingContainer$fDUH.getComponent(item);
    } else if (AS3.is(item,  Ext.Component) && AS3.cast(Ext.Component,item).up() === this.switchingContainer$fDUH) {
      component = item;
    }

    if (!component) {
      component = this.addItem(item);
    }

    var activeItem/*:Component*/ = this.getActiveItem();
    activeItem && activeItem.mun(activeItem, 'titlechange',AS3.bind( this,"onTitleChange$fDUH"));

    this.show();

    // This is not particularly great. However, if 'hidden' is false for the component, the following may happen:
    // (1) The old active item is hidden and CardLayout throws a 'hide' event (which bubbles as a 'hide' event of this SidePanel itself)
    // (2) The component becomes the new active item, but as it is not hidden, no 'show' event is thrown
    // ==> this SidePanel throws just a 'hide' although actually a new component was shown
    // ==> leads to errorneous behaviour of listening components.
    component["hidden"] = true;
    this.getActiveItemValueExpression().setValue(component.getId());

    this.setTitle(component['title'] || '');
    component.mon(component, 'titlechange',AS3.bind( this,"onTitleChange$fDUH"));

    AS3.setBindable(this,"minWidth" , component.initialConfig.minWidth);

    return component;
  }/*

  private*/ function onTitleChange(component/*:Component*/, title/*:String*/)/*:Boolean*/ {
    this.setTitle(title);
  }/*

  internal*/ function getActiveItemValueExpression()/*:ValueExpression*/ {
    return this.activeItemValueExpression$fDUH ||
            (this.activeItemValueExpression$fDUH = com.coremedia.ui.data.ValueExpressionFactory.createFromValue());
  }/*

  internal*/ function addItem(item/*:**/)/*:Component*/ {
    var component/*:Component*/ = this.switchingContainer$fDUH.add(item);

    // Re-register nested floatings with their new zIndexParent (WindowManager in this case)
    com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl.reRegisterFloatings(item);

    component.enableBubble(['beforeshow', 'show', 'hide']);
    return component;
  }/*

  private*/ function createDraggable()/*:Object*/ {var this$=this;
    var that/*:SidePanel*/ = AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel,this);

    var draggable/*:Object*/ = {
      insertProxy: false,

      startDrag: function (e/*:Event*/)/*:void*/ {
        com.coremedia.ui.components.IFrameMgr.getInstance().showShims();
      },

      onDrag: function (e/*:Event*/)/*:void*/ {
        AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl,com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager).onDragSidePanel(that, e);
      },

      endDrag: function (e/*:Event*/)/*:void*/ {arguments=Array.prototype.slice.call(arguments);
        if (e) {
          var movedToOtherSidePanel/*:Boolean*/ = AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl,com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager).endDragSidePanel(that, e);
          movedToOtherSidePanel || this$.undockActiveItem$fDUH(e);
          com.coremedia.ui.components.IFrameMgr.getInstance().hideShims();
        }

        AS3.cast(Function,window.Ext.panel.DD['prototype'].endDrag).apply(this, arguments);
        movedToOtherSidePanel && Ext.getCmp(com.coremedia.cms.editor.sdk.desktop.EditorMainView.ID).updateLayout();
      }
    };

    return draggable;
  }/*

  private*/ function undockActiveItem(e/*:Event*/)/*:void*/ {
    var itemToUndock/*:Component*/ = this.getActiveItem();
    this.undockItem(itemToUndock, e.getX(), e.getY());
  }/*

  public*/ function undockItem(itemToUndock/*:Component*/, x/*:Number = undefined*/, y/*:Number = undefined*/)/*:void*/ {
    this.getActiveItemValueExpression().setValue(null);

    var config/*:SidePanelFloatingWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow,{});
    if(x !== undefined || y !== undefined) {
      AS3.setBindable(config,"x" , x);
      AS3.setBindable(config,"y" , y);
    }

    config.items = [itemToUndock];

    this.hide();

    var window/*:Window*/ = AS3.cast(Ext.window.Window,Ext.ComponentManager.create(config));
    window.show();

    // Update layout of undocked item as wrong sizes might be present.
    itemToUndock.updateLayout();
  }/*

  internal*/ function onDragFloatingWindow(w/*:Window*/, e/*:Event*/)/*:void*/ {
    this.onDrag$fDUH(e);
  }/*

  internal*/ function endDragFloatingWindow(w/*:Window*/, e/*:Event*/)/*:Boolean*/ {
    if (this.isInDropZone$fDUH(e.getX(), e.getY())) {
      this.highlightDropZone$fDUH(false);
      this.dockItem(w);

      return true;
    }

    return false;
  }/*

  public*/ function dockItem(w/*:Window*/)/*:void*/ {
    var component/*:Component*/ = w.getComponent(0);
    // Remove component cleanly from window before adding it to SidePanel.
    // Otherwise, race conditions might lead to errors (e.g. QuickTip) due to
    // referenced but destroyed DOM elements.
    w.remove(component, {destroy: false, detach: true});
    this.setActiveContainerItem(component);
    w.destroy();
  }/*

  internal*/ function onDragSidePanel(draggedPanel/*:SidePanel*/, e/*:Event*/)/*:void*/ {
    this.onDrag$fDUH(e);
  }/*

  internal*/ function endDragSidePanel(draggedPanel/*:SidePanel*/, e/*:Event*/)/*:Boolean*/ {
    if (this.isInDropZone$fDUH(e.getX(), e.getY())) {
      this.highlightDropZone$fDUH(false);

      if (draggedPanel === this) {
        return true;
      }

      var item/*:Component*/ = draggedPanel.getActiveItem();
      if (!item) {
        return false;
      }

      this.setActiveContainerItem(item);

      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(draggedPanel,"hide"));

      return true;
    }

    return false;
  }/*

  private*/ function onDrag(e/*:Event*/)/*:void*/ {
    if (this.isInDropZone$fDUH(e.pageX, e.pageY)) {
      this.highlightDropZone$fDUH(true);
    } else {
      this.highlightDropZone$fDUH(false);
    }
  }/*

  private*/ function isInDropZone(x/*:Number*/, y/*:Number*/)/*:Boolean*/ {
    var dropZone/*:Component*/ = this.getDropZone();

    if (dropZone) {
      var dropZoneMinX/*:Number*/ = dropZone.getEl().getX() - this.dropZoneThresholdPixel$fDUH;
      var dropZoneMaxX/*:Number*/ = dropZoneMinX + dropZone.getEl().getWidth() + 2 * this.dropZoneThresholdPixel$fDUH;
      var dropZoneMinY/*:Number*/ = dropZone.getEl().getY() - this.dropZoneThresholdPixel$fDUH;
      var dropZoneMaxY/*:Number*/ = dropZoneMinY + dropZone.getEl().getHeight() + 2 * this.dropZoneThresholdPixel$fDUH;

      return ! !(x > dropZoneMinX && x < dropZoneMaxX &&
              y > dropZoneMinY && y < dropZoneMaxY);
    }
  }/*

  private*/ function highlightDropZone(highlight/*:Boolean*/)/*:void*/ {
    var dropZone/*:Component*/ = this.getDropZone();
    if (dropZone) {
      if (highlight) {
        dropZone.setUI(com.coremedia.ui.skins.ContainerSkin.HIGHLIGHTED.getSkin());
      } else {
        dropZone.setUI(com.coremedia.ui.skins.ContainerSkin.LIGHT.getSkin());
      }
    }
  }/*

  internal*/ function getDropZone()/*:Component*/ {
    if (!this.initialConfig.dropZone) {
      return null;
    }

    if (AS3.is(this.initialConfig.dropZone,  Ext.Component)) {
      return this.initialConfig.dropZone;
    } else if (AS3.is(this.initialConfig.dropZone,  String)) {
      return Ext.getCmp(this.initialConfig.dropZone);
    }

    return null;
  }/*

  private*/ function doLayoutMainView()/*:void*/ {
    this.up().updateLayout();
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      activeItemValueExpression$fDUH: null,
      switchingContainer$fDUH: null,
      dropZoneThresholdPixel$fDUH: NaN,
      constructor: SidePanelBase$,
      super$fDUH: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      onAfterRender$fDUH: onAfterRender,
      onShowInternal$fDUH: onShowInternal,
      onHideInternal$fDUH: onHideInternal,
      onSwitchingContainerBeforeRemove$fDUH: onSwitchingContainerBeforeRemove,
      disableHeaderContextMenu$fDUH: disableHeaderContextMenu,
      getActiveItem: getActiveItem,
      setActiveContainerItem: setActiveContainerItem,
      onTitleChange$fDUH: onTitleChange,
      getActiveItemValueExpression: getActiveItemValueExpression,
      addItem: addItem,
      createDraggable$fDUH: createDraggable,
      undockActiveItem$fDUH: undockActiveItem,
      undockItem: undockItem,
      onDragFloatingWindow: onDragFloatingWindow,
      endDragFloatingWindow: endDragFloatingWindow,
      dockItem: dockItem,
      onDragSidePanel: onDragSidePanel,
      endDragSidePanel: endDragSidePanel,
      onDrag$fDUH: onDrag,
      isInDropZone$fDUH: isInDropZone,
      highlightDropZone$fDUH: highlightDropZone,
      getDropZone: getDropZone,
      doLayoutMainView$fDUH: doLayoutMainView,
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.ComponentManager",
        "Ext.panel.Panel",
        "Ext.window.Window",
        "com.coremedia.ui.components.IFrameMgr",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.util.ContextMenuUtil",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.EditorMainView",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager"
      ]
    };
});
