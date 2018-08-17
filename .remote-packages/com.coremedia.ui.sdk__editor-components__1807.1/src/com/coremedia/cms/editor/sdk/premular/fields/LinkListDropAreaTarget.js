Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaTarget", function(LinkListDropAreaTarget) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.cms.editor.sdk.dragdrop.DragInfo;
import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;

import ext.Component;
import ext.dd.DragSource;
import ext.dd.DropTarget;
import ext.event.Event;
import ext.view.AbstractView;

/**
 * A drop zone for property editors of link list properties
 * /
public class LinkListDropAreaTarget extends DropTarget {

  private var dropArea:Component;
  private var boundView:AbstractView;
  private var linkListWrapper:ILinkListWrapper;
  private var handleEnter:Function;
  private var handleOver:Function;
  private var handleOut:Function;
  private var handleDrop:Function;

  public*/ function LinkListDropAreaTarget$(dropArea/*:Component*/,
                                         linkListWrapper/*:ILinkListWrapper*/,
                                         ddGroups/*:Array*/,
                                         boundView/*:AbstractView = null*/,
                                         handleEnter/*:Function = null*/,
                                         handlerOver/*:Function = null*/,
                                         handleOut/*:Function = null*/,
                                         handleDrop/*:Function = null*/) {var this$=this;switch(Math.max(arguments.length,3)){case 3:boundView=null;case 4:handleEnter=null;case 5:handlerOver=null;case 6:handleOut=null;case 7:handleDrop=null;}
    ddGroups = ddGroups || [];
    this.super$kexO(dropArea.getEl(), AS3.cast(Ext.dd.DropTarget,{
      ddGroup: ddGroups.length > 0 ? ddGroups[0] : undefined
    }));
    ddGroups.length > 1 && ddGroups.slice(1).forEach(function (ddGroup/*:String*/)/*:void*/ {
      this$.addToGroup(ddGroup);
    });

    this.dropArea$kexO = dropArea;
    this.linkListWrapper$kexO = linkListWrapper;
    this.boundView$kexO = boundView;
    this.handleEnter$kexO = handleEnter;
    this.handleOver$kexO = handlerOver;
    this.handleOut$kexO = handleOut;
    this.handleDrop$kexO = handleDrop;

    // Lock drop target until the bean property is fully loaded.
    this.lock();
    linkListWrapper.getVE().loadValue(function()/*:void*/ {
      this$.unlock();
    });
  }/*

  private*/ function allowDrop(dragInfo/*:DragInfo*/, fromView/*:AbstractView*/)/*:Boolean*/ {
    if (!dragInfo
      || this.dropArea$kexO.disabled) {
      return false;
    }
    if (!this.linkListWrapper$kexO.acceptsLinks(dragInfo.getContents())) {
      return false;
    }
    return (this.boundView$kexO !== null && this.boundView$kexO === fromView) || this.linkListWrapper$kexO.getFreeCapacity() >= dragInfo.getContents().length;
  }/*

  override public*/ function notifyEnter(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    var mayDrop/*:Boolean*/ = this.allowDrop$kexO(dragInfo, data.view);
    this.handleEnter$kexO && this.handleEnter$kexO(mayDrop);
    return mayDrop ? this.dropAllowed : this.dropNotAllowed;
  }/*

  override public*/ function notifyOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    var mayDrop/*:Boolean*/ = this.allowDrop$kexO(dragInfo, data.view);
    this.handleOver$kexO && this.handleOver$kexO(mayDrop);
    return mayDrop ? this.dropAllowed : this.dropNotAllowed;
  }/*

  override public*/ function notifyDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    var mayDrop/*:Boolean*/ = this.allowDrop$kexO(dragInfo, data.view);
    this.handleDrop$kexO && this.handleDrop$kexO(mayDrop, dragInfo.getContents(), data.view);
    return mayDrop;
  }/*

  override public*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    var mayDrop/*:Boolean*/ = this.allowDrop$kexO(dragInfo, data.view);
    this.handleOut$kexO && this.handleOut$kexO(mayDrop);
    Ext.dd.DropTarget.prototype.notifyOut.call(this,source, e, data);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropTarget",
      dropArea$kexO: null,
      boundView$kexO: null,
      linkListWrapper$kexO: null,
      handleEnter$kexO: null,
      handleOver$kexO: null,
      handleOut$kexO: null,
      handleDrop$kexO: null,
      constructor: LinkListDropAreaTarget$,
      super$kexO: function() {
        Ext.dd.DropTarget.prototype.constructor.apply(this, arguments);
      },
      allowDrop$kexO: allowDrop,
      notifyEnter: notifyEnter,
      notifyOver: notifyOver,
      notifyDrop: notifyDrop,
      notifyOut: notifyOut,
      requires: ["Ext.dd.DropTarget"],
      uses: ["com.coremedia.cms.editor.sdk.dragdrop.DragInfo"]
    };
});
