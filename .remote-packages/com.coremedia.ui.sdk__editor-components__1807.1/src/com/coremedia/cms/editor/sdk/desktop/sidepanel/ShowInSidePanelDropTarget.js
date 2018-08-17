Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.ShowInSidePanelDropTarget", function(ShowInSidePanelDropTarget) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel {
import ext.Component;
import ext.dd.DragSource;
import ext.dd.DropTarget;
import ext.event.Event;

public class ShowInSidePanelDropTarget extends DropTarget {
  private var showInSidePanelTimer:Object;
  private var hoverHandler:Function;

  public*/ function ShowInSidePanelDropTarget$(comp/*:Component*/, hoverHandler/*:Function*/) {
    this.super$4DT_(comp.getEl(), AS3.cast(Ext.dd.DropTarget,{
      ddGroup: "ContentLinkDD"
    }));
    this.hoverHandler$4DT_ = hoverHandler;
    this.addToGroup("ContentDD");
  }/*

  private*/ function onHover()/*:void*/ {
    this.showInSidePanelTimer$4DT_ = null;
    this.hoverHandler$4DT_();
  }/*

  override public*/ function notifyEnter(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    if (!this.showInSidePanelTimer$4DT_) {
      this.showInSidePanelTimer$4DT_ = window.setTimeout(AS3.bind(this,"onHover$4DT_"), 1000);
    }

    return this.dropNotAllowed;
  }/*

  override public*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.clearTimeout$4DT_();
  }/*

  override public*/ function notifyDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    this.clearTimeout$4DT_();
    return false;
  }/*

  private*/ function clearTimeout()/*:void*/ {
    if (this.showInSidePanelTimer$4DT_) {
      window.clearTimeout(this.showInSidePanelTimer$4DT_);
      this.showInSidePanelTimer$4DT_ = null;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropTarget",
      showInSidePanelTimer$4DT_: null,
      hoverHandler$4DT_: null,
      constructor: ShowInSidePanelDropTarget$,
      super$4DT_: function() {
        Ext.dd.DropTarget.prototype.constructor.apply(this, arguments);
      },
      onHover$4DT_: onHover,
      notifyEnter: notifyEnter,
      notifyOut: notifyOut,
      notifyDrop: notifyDrop,
      clearTimeout$4DT_: clearTimeout,
      requires: ["Ext.dd.DropTarget"]
    };
});
