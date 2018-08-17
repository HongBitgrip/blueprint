Ext.define("com.coremedia.ui.plugins.ExpandPanelOnHoverDropTarget", function(ExpandPanelOnHoverDropTarget) {/*package com.coremedia.ui.plugins {

import ext.Ext;
import ext.dd.DD;
import ext.dd.DragSource;
import ext.dd.DropTarget;
import ext.event.Event;
import ext.panel.Panel;
import ext.util.DelayedTask;

public class ExpandPanelOnHoverDropTarget extends DropTarget {

  /* config * /
  private var panelCmp:Panel;

  [Bindable]
  [ArrayElementType("String")]
  /**
   * If in drag mode and the drag source belongs to any of the given groups the corresponding tab will be opened after
   * a certain delay when hovering over a tab strip.
   * /
  public var activateOnHoverDDGroups:Array;

  [Bindable]
  /**
   * Specifies a delay if panel should not be expanded immediately.
   * /
  public var activateOnHoverDelay:int;

  /* state * /

  private var delayedOpenPanel:DelayedTask;

  public*/ function ExpandPanelOnHoverDropTarget$(panelCmp/*:Panel*/, config/*:ExpandPanelOnHoverDropTarget*/) {var this$=this;
    this.panelCmp$peF5 = panelCmp;
    AS3.setBindable(this,"activateOnHoverDDGroups" , AS3.getBindable(config,"activateOnHoverDDGroups") || []);
    AS3.setBindable(this,"activateOnHoverDelay" , AS3.getBindable(config,"activateOnHoverDelay") || 0);
    this.delayedOpenPanel$peF5 = new Ext.util.DelayedTask(AS3.bind(this,"openPanel$peF5"));

    var ddGroups/*:Array*/ = AS3.getBindable(this,"activateOnHoverDDGroups").concat([]);

    var newConfig/*:ExpandPanelOnHoverDropTarget*/ = AS3.cast(ExpandPanelOnHoverDropTarget,Ext.apply({ddGroup: ddGroups.shift()}, config));

    this.super$peF5(panelCmp.header.getEl(), newConfig);

    // attach remaining dd groups
    ddGroups.forEach(function (group/*:String*/)/*:void*/ {
      this$.addToGroup(group);
    });
  }/*

  override public*/ function notifyEnter(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    this.delayedOpenPanelIfDDGroupMatches$peF5(source);
    return this.dropNotAllowed;
  }/*

  override public*/ function notifyOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    this.delayedOpenPanelIfDDGroupMatches$peF5(source);
    return this.dropNotAllowed;
  }/*

  override public*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.cancelOpenPanel$peF5();
    Ext.dd.DropTarget.prototype.notifyOut.call(this,source, e, data);
  }/*

  private*/ function delayedOpenPanelIfDDGroupMatches(dd/*:DD*/)/*:void*/ {
    var groupMatches/*:Boolean*/ = AS3.getBindable(this,"activateOnHoverDDGroups") && AS3.getBindable(this,"activateOnHoverDDGroups").some(function (ddGroup/*:String*/)/*:Boolean*/ {
      return dd.groups.hasOwnProperty(ddGroup);
    });
    if (groupMatches) {
      this.delayedOpenPanel$peF5.delay(AS3.getBindable(this,"activateOnHoverDelay"));
    }
  }/*

  private*/ function openPanel()/*:void*/ {
    if (AS3.getBindable(this.panelCmp$peF5,"collapsed","DUMMY")) {
      this.panelCmp$peF5.expand(true);
    }
  }/*

  private*/ function cancelOpenPanel()/*:void*/ {
    if (this.delayedOpenPanel$peF5) {
      this.delayedOpenPanel$peF5.cancel();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropTarget",
      panelCmp$peF5: null,
      delayedOpenPanel$peF5: null,
      constructor: ExpandPanelOnHoverDropTarget$,
      super$peF5: function() {
        Ext.dd.DropTarget.prototype.constructor.apply(this, arguments);
      },
      notifyEnter: notifyEnter,
      notifyOver: notifyOver,
      notifyOut: notifyOut,
      delayedOpenPanelIfDDGroupMatches$peF5: delayedOpenPanelIfDDGroupMatches,
      openPanel$peF5: openPanel,
      cancelOpenPanel$peF5: cancelOpenPanel,
      config: {
        activateOnHoverDDGroups: null,
        activateOnHoverDelay: 0
      },
      requires: [
        "Ext",
        "Ext.dd.DropTarget",
        "Ext.util.DelayedTask"
      ]
    };
});
