Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridDropTarget", function(StructEditorTreeGridDropTarget) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.cms.editor.sdk.dragdrop.DragInfo;

import ext.dd.DragSource;
import ext.dd.DropTarget;
import ext.event.Event;

import js.HTMLElement;

/**
 * A drop zone for property editors of link list properties that
 * support a single link per property. 
 * /
public class StructEditorTreeGridDropTarget extends DropTarget {

  public static const LINK_CELL_HOVER_CLASS:String = "struct-link-cell-hover";

  private var structEditorTreeGrid:StructEditorTreeGridBase;
  private var lastHover:HTMLElement;

  public*/ function StructEditorTreeGridDropTarget$(structEditorTreeGrid/*:StructEditorTreeGridBase*/) {
    this.super$oRgi(structEditorTreeGrid.getView().getEl(), AS3.cast(Ext.dd.DropTarget,{
      ddGroup: "ContentLinkDD",
      overClass: StructEditorTreeGridDropTarget.LINK_CELL_HOVER_CLASS
    }));
    this.addToGroup('ContentDD');
    this.structEditorTreeGrid$oRgi = structEditorTreeGrid;
  }/*


  private*/ function getStructTreeNodeFromEvent(e/*:Event*/)/*:StructTreeNode*/ {
    return AS3.as( this.structEditorTreeGrid$oRgi.getView().getRecord(e.target),  com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode);
  }/*

  private static*/ function allowDrop$static(structTreeNode/*:StructTreeNode*/, dragInfo/*:DragInfo*/)/*:**/ {
    if (!structTreeNode || !dragInfo) {
      return false;
    }
    var draggedItems/*:Array*/ = dragInfo.getContents();
    var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(draggedItems);
    // make sure no dragged item was filtered out
    if (draggedItems.length !== contents.length) {
      return false;
    }
    return structTreeNode.allowDropLinks(contents);
  }/*

  override public*/ function notifyOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    return this.handleOverDrag$oRgi(source, e, data);
  }/*
  
  override public*/ function notifyEnter(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
   return this.handleOverDrag$oRgi(source, e, data);
  }/*

  private*/ function handleOverDrag(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    if (allowDrop$static(this.getStructTreeNodeFromEvent$oRgi(e), dragInfo)) {
      this.removeHoverClass$oRgi();
      this.lastHover$oRgi = e.getTarget(".x-treegrid-col");
      //Element.fly(lastHover).addClass(LINK_CELL_HOVER_CLASS);
      return this.dropAllowed;
    } else {
      return this.dropNotAllowed;
    }
  }/*

  override public*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.removeHoverClass$oRgi();
  }/*

  private*/ function removeHoverClass()/*:void*/ {
    if (this.lastHover$oRgi) {
      //Element.fly(lastHover).removeClass(LINK_CELL_HOVER_CLASS);
    }
  }/*

  override public*/ function onDrag(e/*:Event*/)/*:void*/ {
    Ext.dd.DropTarget.prototype.onDrag.call(this,e);
  }/*

  override public*/ function notifyDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    var structTreeNode/*:StructTreeNode*/ = this.getStructTreeNodeFromEvent$oRgi(e);
    if (!allowDrop$static(structTreeNode, dragInfo)) {
      return false;
    }
    // just to be sure filter the contents
    var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(dragInfo.getContents());
    // Set the property value to the singleton list containing the
    // bean indicated by the dragged.
    structTreeNode.dropLinks(contents);
    this.removeHoverClass$oRgi();

    return true;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropTarget",
      structEditorTreeGrid$oRgi: null,
      lastHover$oRgi: null,
      constructor: StructEditorTreeGridDropTarget$,
      super$oRgi: function() {
        Ext.dd.DropTarget.prototype.constructor.apply(this, arguments);
      },
      getStructTreeNodeFromEvent$oRgi: getStructTreeNodeFromEvent,
      notifyOver: notifyOver,
      notifyEnter: notifyEnter,
      handleOverDrag$oRgi: handleOverDrag,
      notifyOut: notifyOut,
      removeHoverClass$oRgi: removeHoverClass,
      onDrag: onDrag,
      notifyDrop: notifyDrop,
      statics: {LINK_CELL_HOVER_CLASS: "struct-link-cell-hover"},
      requires: [
        "Ext.dd.DropTarget",
        "com.coremedia.cap.content.ContentProxyHelper"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dragdrop.DragInfo",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode"
      ]
    };
});
