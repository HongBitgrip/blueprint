Ext.define("com.coremedia.ui.plugins.TabDragZone", function(TabDragZone) {/*package com.coremedia.ui.plugins {
import ext.Component;
import ext.Ext;
import ext.Template;
import ext.XTemplate;
import ext.dd.DragZone;
import ext.dom.Element;
import ext.event.Event;
import ext.tab.TabPanel;

public class TabDragZone extends DragZone {

  private var clickTimer:Date;
  private var tabPanelCmp:TabPanel;
  private var tab:Component;
  public var customizeDragData:Function;

  public*/ function TabDragZone$(tab/*:Component*/, config/*:TabDragZone*/, tp/*:TabPanel*/) {
    this.tabPanelCmp$684Z = tp;
    var cmpEl/*:Element*/ = tab["tab"].el;
    this.super$684Z(cmpEl, config);

    this.customizeDragData = config.customizeDragData;
    this.tab$684Z = tab;
  }/*

  override public*/ function getDragData(evtObj/*:Event*/)/*:Object*/ {
    var draggedTabStripEl/*:Element*/ =AS3.as( evtObj.getTarget('a', 10, true),  Ext.dom.Element);
    if (draggedTabStripEl) {

      // Get tab of dragged tab strip
      var tab/*:Component*/ = null;
      this.tabPanelCmp$684Z.itemCollection.each(function (aTab/*:Component*/)/*:void*/ {
        if (aTab["tab"].el === draggedTabStripEl) {
          tab = aTab;
        }
      });

      // Construct drag ghost
      var dragGhostEl/*:Element*/ = getDragGhost$static(tab);

      var theDragData/*:Object*/ = {
        repairXY: Ext.fly(draggedTabStripEl).getXY(),
        dragItem: tab,
        draggedTabStripEl: draggedTabStripEl,
        copy: true,
        ddel: dragGhostEl.dom
      };

      if (this.customizeDragData) {
        this.customizeDragData.call(this.tabPanelCmp$684Z, this, theDragData, dragGhostEl);
      }

      return theDragData;
    }
    return null;
  }/*

  private static*/ function getDragGhost$static(tab/*:Component*/)/*:Element*/ {
    var dragDropEl/*:Element*/ = Ext.get(window.document.createElement('div'));
    var contentTypeDragDropTemplate/*:Template*/ = new Ext.XTemplate(
            '<div>' +
              '{tabTitle:htmlEncode}' +
            '</div>'
    ).compile();
    dragDropEl.dom.innerHTML = contentTypeDragDropTemplate.apply({
      tabTitle: AS3.cast(Ext.dom.Element,tab["tab"].el.child(".x-tab-wrap .x-tab-text")).dom["innerText"],
      imgSrc: Ext.BLANK_IMAGE_URL
    });
    return dragDropEl;
  }/*

  override public*/ function getRepairXY(e/*:Event*/)/*:Array*/ {
    return this.dragData["repairXY"];
  }/*

  override public*/ function b4MouseDown(e/*:Event*/)/*:void*/ {
    this.clickTimer$684Z = new Date();
    Ext.dd.DragZone.prototype.b4MouseDown.call(this,e);
  }/*

  override public*/ function onMouseUp(e/*:Event*/)/*:void*/ {
    // On content tabs, the drag zone "masks" the usual one-click behavior (i.e.
    // open the respective tab, every click is interpreted as a "drag attempt"
    // So to still be able to open the respective tab on single-clicking, we measure
    // the time between mouseDown and mouseUp, and if it's less than 200msecs, we
    // interpret this as a "single click" event and then open the respective tab, but only
    // if the click does not happen on the tab close icon.
    if (e.type == 'mouseup' && Number(new Date()) - Number(this.clickTimer$684Z) < 200 && e.target !== this.tab$684Z["tab"].closeEl.dom) {
      this.tabPanelCmp$684Z.setActiveTab(this.tab$684Z);
    }
    else {
      Ext.dd.DragZone.prototype.onMouseUp.call(this,e);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DragZone",
      clickTimer$684Z: null,
      tabPanelCmp$684Z: null,
      tab$684Z: null,
      customizeDragData: null,
      constructor: TabDragZone$,
      super$684Z: function() {
        Ext.dd.DragZone.prototype.constructor.apply(this, arguments);
      },
      getDragData: getDragData,
      getRepairXY: getRepairXY,
      b4MouseDown: b4MouseDown,
      onMouseUp: onMouseUp,
      requires: [
        "Ext",
        "Ext.XTemplate",
        "Ext.dd.DragZone",
        "Ext.dom.Element"
      ]
    };
});
