Ext.define("com.coremedia.ui.plugins.DragDropTabPluginBase", function(DragDropTabPluginBase) {/*package com.coremedia.ui.plugins {
import ext.Component;
import ext.Ext;
import ext.Plugin;
import ext.dd.DragDrop;
import ext.dd.DragDropManager;
import ext.tab.TabPanel;

public class DragDropTabPluginBase implements Plugin {

  private var tabPanelCmp:TabPanel;
  private var addTabFunction:Function;
  private var removeTabFunction:Function;
  private var customizeDragData:Function;
  private var rearrangeDDGroup:String;

  [ArrayElementType("String")]
  private var activateOnHoverDDGroups:Array;
  private var activateOnHoverDelay:int;

  public*/ function DragDropTabPluginBase$(config/*:DragDropTabPlugin = null*/) {if(arguments.length<=0)config=null;
    this.addTabFunction$BcA4 = AS3.getBindable(config,"addTabFunction");
    this.removeTabFunction$BcA4 = AS3.getBindable(config,"removeTabFunction");
    this.customizeDragData$BcA4 = AS3.getBindable(config,"customizeDragData");
    this.rearrangeDDGroup$BcA4 = AS3.getBindable(config,"rearrangeDDGroup");
    this.activateOnHoverDDGroups$BcA4 = AS3.getBindable(config,"activateOnHoverDDGroups") || [];
    this.activateOnHoverDelay$BcA4 = AS3.getBindable(config,"activateOnHoverDelay") || 0;
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    this.tabPanelCmp$BcA4 =AS3.as( component,  Ext.tab.Panel);
    if (!this.tabPanelCmp$BcA4) {
      return;
    }

    // activate drag functionality if rearrange tabs is allowed
    if (this.rearrangeDDGroup$BcA4) {
      this.tabPanelCmp$BcA4.mon(this.tabPanelCmp$BcA4, "add", function (tp/*:TabPanel*/, tab/*:Component*/)/*:void*/ {
        if (this$.tabPanelCmp$BcA4 !== tp) {
          return;
        }
        this$.makeTabDraggable$BcA4(tab);
      });

      this.tabPanelCmp$BcA4.mon(this.tabPanelCmp$BcA4, "afterrender", function ()/*:void*/ {
        this$.tabPanelCmp$BcA4.itemCollection.each(function (tab/*:Component*/)/*:void*/ {
          this$.makeTabDraggable$BcA4(tab);
        });
      });
    }

    // activate drop functionality if rearrange tabs or activate tab on hover is allowed
    if (this.rearrangeDDGroup$BcA4 || this.activateOnHoverDDGroups$BcA4.length > 0) {
      this.tabPanelCmp$BcA4.mon(this.tabPanelCmp$BcA4, "afterrender", function ()/*:void*/ {
        var tabDropZoneConfig/*:TabDropZone*/ = AS3.cast(com.coremedia.ui.plugins.TabDropZone,{});
        AS3.setBindable(tabDropZoneConfig,"rearrangeDDGroup" , this$.rearrangeDDGroup$BcA4);
        tabDropZoneConfig.addTabFunction = this$.addTabFunction$BcA4;
        tabDropZoneConfig.removeTabFunction = this$.removeTabFunction$BcA4;
        AS3.setBindable(tabDropZoneConfig,"activateOnHoverDDGroups" , this$.activateOnHoverDDGroups$BcA4);
        AS3.setBindable(tabDropZoneConfig,"activateOnHoverDelay" , this$.activateOnHoverDelay$BcA4);
        var theTabDropZone/*:TabDropZone*/ = new com.coremedia.ui.plugins.TabDropZone(this$.tabPanelCmp$BcA4, tabDropZoneConfig);
        this$.tabPanelCmp$BcA4.mon(this$.tabPanelCmp$BcA4, "beforedestroy", function ()/*:void*/ {
          theTabDropZone.unreg();
        });
      });
    }
  }/*

  private*/ function makeTabDraggable(tab/*:Component*/)/*:void*/ {var this$=this;
    var tabDragZoneConfig/*:TabDragZone*/ = AS3.cast(com.coremedia.ui.plugins.TabDragZone,{});
    // note, this property is not part of the ext api
    tabDragZoneConfig['scroll'] = false;
    tabDragZoneConfig.ddGroup = this.rearrangeDDGroup$BcA4;
    tabDragZoneConfig.repairHighlightColor = "ignore";
    tabDragZoneConfig.customizeDragData = this.customizeDragData$BcA4;

    tab["tab"].mon(tab["tab"], "afterrender", function()/*:void*/ {
      // Only add drag zone if it does not already exist.
      // Unfortunately, it is not possible to use DragDropManager.getDDById() for this
      // as it tests the DD for being an Ext.dd.DDTarget before returning it.
      // For some reasonm only DropTargets extend DDTarget...
      var ddById/*:DragDrop*/ = Ext.dd.DragDropManager['ids'][this$.rearrangeDDGroup$BcA4][tab['tab'].id];

      if (!ddById) {
        var theTabDragZone/*:TabDragZone*/ = new com.coremedia.ui.plugins.TabDragZone(tab, tabDragZoneConfig, this$.tabPanelCmp$BcA4);
        tab["tab"].mon(tab["tab"], "beforedestroy", function ()/*:void*/ {
          theTabDragZone && theTabDragZone.unreg();
          theTabDragZone.getProxy().reset = Ext.emptyFn;
          Ext.destroy(theTabDragZone.getProxy());
        });
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      tabPanelCmp$BcA4: null,
      addTabFunction$BcA4: null,
      removeTabFunction$BcA4: null,
      customizeDragData$BcA4: null,
      rearrangeDDGroup$BcA4: null,
      activateOnHoverDDGroups$BcA4: null,
      activateOnHoverDelay$BcA4: 0,
      constructor: DragDropTabPluginBase$,
      init: init,
      makeTabDraggable$BcA4: makeTabDraggable,
      requires: [
        "Ext",
        "Ext.dd.DragDropManager",
        "Ext.tab.Panel",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.ui.plugins.TabDragZone",
        "com.coremedia.ui.plugins.TabDropZone"
      ]
    };
});
