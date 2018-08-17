Ext.define("com.coremedia.ui.plugins.TabDropZone", function(TabDropZone) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.logging.Logger;

import ext.Component;
import ext.Ext;
import ext.dd.DD;
import ext.dd.DragDropManager;
import ext.dd.DragSource;
import ext.dd.DropZone;
import ext.dom.Element;
import ext.event.Event;
import ext.tab.TabPanel;
import ext.util.DelayedTask;

public class TabDropZone extends DropZone {

  private static const*/var TAB_STRIP_OVER_LEFT$static/*:String*/ = "cm-tab-strip-over-left";/*
  private static const*/var TAB_STRIP_OVER_RIGHT$static/*:String*/ = "cm-tab-strip-over-right";/*

  /* config * /

  private var tabPanelCmp:TabPanel;

  /**
   * If a valid ddGroup is set rearrange functionality will be activated for the @see ext.TabPanel meaning tab strips
   * dragged tab strips can be dropped on the tab strip bar to rearrange the tabs.
   * /
  [Bindable]
  public var rearrangeDDGroup:String;

  /**
   *    Only applies if a valid rearrangeDDGroup is set.
   *
   * The function to call for adding a dragged-and-dropped tab at its new position.
   * The signature of the function is:
   * <code> @param tab The tab panel's item index where the tab is added.</code>
   * <code> @param tab The tab to add.</code>
   * <code>function(index:int, tab:ext.Component):void</code>
   * By default, <code>Container.insert(index, tab):void</code> is called.
   * /
  public var addTabFunction:Function;

  /**
   * Only applies if a valid rearrangeDDGroup is set.
   *
   * The function to call for removal of a dragged-and-dropped tab before it gets added again at its
   * new position. The signature of the function is:
   * <code> @param tab The tab to remove.&lt;/code>
   * <code>function(tab:ext.Component):void&lt;/code>
   * By default, <code>Container.remove(tab, false)</code> is called.
   * /
  public var removeTabFunction:Function;

  /**
   * If in drag mode and the drag source belongs to any of the given groups the corresponding tab will be opened after
   * a certain delay when hovering over a tab strip.
   * /
  [ArrayElementType("String")]
  [Bindable]
  public var activateOnHoverDDGroups:Array;

  /**
   * Specifies a delay if tab should not be opened immediately on hover.
   * /
  [Bindable]
  public var activateOnHoverDelay:int;

  /* state * /

  private var tabStripUnder:Element;
  private var dropPosition:int;
  private var draggedTabStripEl:Element;
  private var delayedOpenTab:DelayedTask;

  public*/ function TabDropZone$(tp/*:TabPanel = null*/, config/*:TabDropZone = null*/) {var this$=this;switch(arguments.length){case 0:tp=null;case 1:config=null;}
    this.addTabFunction = config.addTabFunction;
    this.removeTabFunction = config.removeTabFunction;
    this.tabPanelCmp$UorU = tp;
    AS3.setBindable(this,"rearrangeDDGroup" , AS3.getBindable(config,"rearrangeDDGroup"));
    AS3.setBindable(this,"activateOnHoverDDGroups" , AS3.getBindable(config,"activateOnHoverDDGroups") || []);
    AS3.setBindable(this,"activateOnHoverDelay" , AS3.getBindable(config,"activateOnHoverDelay") || 0);

    var ddGroups/*:Array*/ = mergeDDGroups$static(AS3.getBindable(this,"rearrangeDDGroup"), AS3.getBindable(this,"activateOnHoverDDGroups"));
    var newConfig/*:TabDropZone*/ = AS3.cast(TabDropZone,Ext.apply({ddGroup: ddGroups.shift()}, config));

    this.super$UorU(tp.getTabBar().el, newConfig);

    // attach remaining dd groups
    ddGroups.forEach(function (group/*:String*/)/*:void*/ {
      this$.addToGroup(group);
    });
  }/*

  override public*/ function onContainerOver(source/*:DragSource*/, evt/*:Event*/, data/*:Object*/)/*:String*/ {
    this.cancelOpenTab$UorU();
    var oldTabStripUnder/*:Element*/ = this.tabStripUnder$UorU;
    this.tabStripUnder$UorU =AS3.as( evt.getTarget('a', 10, true),  Ext.dom.Element);

    if (this.tabStripUnder$UorU) {
      if (oldTabStripUnder && oldTabStripUnder.getId() !== this.tabStripUnder$UorU.getId()) {
        this.removeTabStripOverCls$UorU(oldTabStripUnder);
      }
      if (AS3.getBindable(this,"activateOnHoverDDGroups") && hasOneOfDdGroups$static(source, AS3.getBindable(this,"activateOnHoverDDGroups"))) {
        this.delayedOpenTab$UorU = new Ext.util.DelayedTask(AS3.bind(this,"openTab$UorU"));
        this.delayedOpenTab$UorU.delay(AS3.getBindable(this,"activateOnHoverDelay"));
      }
      if (AS3.getBindable(this,"rearrangeDDGroup") && hasOneOfDdGroups$static(source, [AS3.getBindable(this,"rearrangeDDGroup")])) {
        if (data.draggedTabStripEl) {
          this.setupDragging$UorU(data);
        }
        this.dropPosition$UorU = this.getTabStrips$UorU().indexOf(this.tabStripUnder$UorU.dom);
        var dragPositionOverLeftHalfOfTabStrip/*:Boolean*/ = this.isDragPositionOverLeftHalfOfTabStrip$UorU(evt);
        if (dragPositionOverLeftHalfOfTabStrip) {
          this.tabStripUnder$UorU.removeCls(TAB_STRIP_OVER_RIGHT$static);
          this.tabStripUnder$UorU.addCls(TAB_STRIP_OVER_LEFT$static);
        } else {
          this.tabStripUnder$UorU.removeCls(TAB_STRIP_OVER_LEFT$static);
          this.tabStripUnder$UorU.addCls(TAB_STRIP_OVER_RIGHT$static);
          this.dropPosition$UorU++;
        }
        return this.dropAllowed;
      }
    }

    this.dropPosition$UorU = -1;
    this.removeTabStripOverCls$UorU(oldTabStripUnder);
    return this.dropNotAllowed;
  }/*


  private static*/ function hasOneOfDdGroups$static(dd/*:DD*/, ddGroups/*:Array*/)/*:Boolean*/ {
    return ddGroups.some(function (ddGroup/*:String*/)/*:Boolean*/ {
      return dd.groups.hasOwnProperty(ddGroup);
    });
  }/*

  override public*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.cancelOpenTab$UorU();
    this.dropPosition$UorU = -1;
    this.removeTabStripOverCls$UorU(this.tabStripUnder$UorU);
    Ext.dd.DropZone.prototype.notifyOut.call(this,source, e, data);
  }/*

  private*/ function removeTabStripOverCls(elem/*:Element*/)/*:void*/ {
    if (elem) {
      elem.removeCls(TAB_STRIP_OVER_LEFT$static);
      elem.removeCls(TAB_STRIP_OVER_RIGHT$static);
    }
  }/*

  private*/ function cancelOpenTab()/*:void*/ {
    if (this.delayedOpenTab$UorU) {
      this.delayedOpenTab$UorU.cancel();
      this.delayedOpenTab$UorU = null;
    }
  }/*

  private*/ function openTab()/*:void*/ {
    if (this.tabStripUnder$UorU) {
      var tabStripUnderIndex/*:int*/ = this.getTabStrips$UorU().indexOf(this.tabStripUnder$UorU.dom);
      var tab/*:Component*/ = this.tabPanelCmp$UorU.getComponent(tabStripUnderIndex);
      this.activateTab$UorU(tab);
    }
  }/*

  private*/ function activateTab(tab/*:Component*/)/*:void*/ {
    // (1) activate new tab
    this.tabPanelCmp$UorU.setActiveTab(tab);
    // (2) give new tab element focus, otherwise CSS focus styles remain
    AS3.cast(Ext.dom.Element,tab['tab'].el).focus();

    // Fixes CMS-6200:
    // Refresh DragDropManager's location cache for our DD groups.
    // Otherwise the location of drop zones in previously inactive
    // tabs do not get updated automatically on tab activation.
    Ext.dd.DragDropManager.refreshCache(this.groups);
  }/*

  private*/ function isDragPositionOverLeftHalfOfTabStrip(evt/*:Event*/)/*:Boolean*/ {
    var xy/*:Array*/ = evt.getXY();
    var tabStripUnderWidth/*:int*/ = this.tabStripUnder$UorU.getWidth();
    var tabStripUnderLeftOffset/*:int*/ = this.tabStripUnder$UorU.getLeft(false);
    var dragPositionOverLeftHalfOfTabStrip/*:Boolean*/ = (xy[0] - tabStripUnderLeftOffset) < (tabStripUnderWidth / 2);
    return dragPositionOverLeftHalfOfTabStrip;
  }/*

  private*/ function setupDragging(data/*:Object*/)/*:void*/ {
    this.draggedTabStripEl$UorU = data.draggedTabStripEl;
    delete data.draggedTabStripEl;
  }/*

  private*/ function getTabStrips()/*:Array*/ {
    return nodeListToArray$static(AS3.cast(Ext.dom.Element,this.tabPanelCmp$UorU.getTabBar().el.down(".x-box-target")).dom.childNodes);
  }/*

  private static*/ function nodeListToArray$static(nl/*:Object*/)/*:Array*/ {
    var result/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < nl.length; i++) {
      result[i] = nl[i];
    }
    return result;
  }/*

  override public*/ function onContainerDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    if (this.dropPosition$UorU == -1) {
      return true;
    }
    if (!this.draggedTabStripEl$UorU) {
      com.coremedia.ui.logging.Logger.error("draggedTabStripEl is null => no DOM");
      return true;
    }

    var insertPosition/*:int*/ = this.dropPosition$UorU;
    var draggedTabStripIndex/*:int*/ = this.getTabStrips$UorU().indexOf(this.draggedTabStripEl$UorU.dom);

    this.cancelOpenTab$UorU();
    this.removeTabStripOverCls$UorU(this.tabStripUnder$UorU);

    if (isDroppedOntoItself$static(insertPosition, draggedTabStripIndex)) {
      return true;
    }

    if (draggedTabStripIndex < insertPosition) {
      insertPosition--;
    }

    var draggedTab/*:Component*/ = (AS3.as(data.dragItem,  Ext.Component));
    var draggedTabIsActiveTab/*:Boolean*/ = (draggedTab === this.tabPanelCmp$UorU.getActiveTab());

    if (this.removeTabFunction) {
      this.removeTabFunction.call(this.tabPanelCmp$UorU, draggedTab);
    } else {
      this.tabPanelCmp$UorU.remove(draggedTab, false);
    }

    if (this.addTabFunction) {
      this.addTabFunction.call(this.tabPanelCmp$UorU, insertPosition, draggedTab);
    } else {
      this.tabPanelCmp$UorU.insert(insertPosition, draggedTab);
    }

    if (draggedTabIsActiveTab) {
      this.activateTab$UorU(draggedTab);
    }

    return true;
  }/*

  private static*/ function isDroppedOntoItself$static(insertPosition/*:int*/, draggedTabStripIndex/*:int*/)/*:Boolean*/ {
    var delta/*:int*/ = insertPosition - draggedTabStripIndex;
    return delta === 0 || delta === 1;
  }/*

  private static*/ function mergeDDGroups$static(rearrangeDDGroup/*:String*/, activateOnHoverDDGroups/*:Array*/)/*:Array*/ {
    var result/*:Array*/ = [];
    rearrangeDDGroup && result.push(rearrangeDDGroup);
    activateOnHoverDDGroups && activateOnHoverDDGroups.forEach(AS3.bind(result,"push"));
    return result;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropZone",
      tabPanelCmp$UorU: null,
      addTabFunction: null,
      removeTabFunction: null,
      tabStripUnder$UorU: null,
      dropPosition$UorU: 0,
      draggedTabStripEl$UorU: null,
      delayedOpenTab$UorU: null,
      constructor: TabDropZone$,
      super$UorU: function() {
        Ext.dd.DropZone.prototype.constructor.apply(this, arguments);
      },
      onContainerOver: onContainerOver,
      notifyOut: notifyOut,
      removeTabStripOverCls$UorU: removeTabStripOverCls,
      cancelOpenTab$UorU: cancelOpenTab,
      openTab$UorU: openTab,
      activateTab$UorU: activateTab,
      isDragPositionOverLeftHalfOfTabStrip$UorU: isDragPositionOverLeftHalfOfTabStrip,
      setupDragging$UorU: setupDragging,
      getTabStrips$UorU: getTabStrips,
      onContainerDrop: onContainerDrop,
      config: {
        rearrangeDDGroup: null,
        activateOnHoverDDGroups: null,
        activateOnHoverDelay: 0
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.dd.DragDropManager",
        "Ext.dd.DropZone",
        "Ext.dom.Element",
        "Ext.util.DelayedTask",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
