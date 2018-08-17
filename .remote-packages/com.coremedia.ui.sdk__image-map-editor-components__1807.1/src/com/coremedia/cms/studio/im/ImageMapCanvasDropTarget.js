Ext.define("com.coremedia.cms.studio.im.ImageMapCanvasDropTarget", function(ImageMapCanvasDropTarget) {/*package com.coremedia.cms.studio.im {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.dragdrop.DragInfo;
import com.coremedia.cms.editor.sdk.util.LinkListUtil;

import ext.dd.DragSource;
import ext.dd.DropTarget;
import ext.event.Event;

public class ImageMapCanvasDropTarget extends DropTarget {

  private var canvasMgr:ImageMapCanvasManager;
  private var imageMapEditor:ImageMapEditorBase;
  private var dropHandler:Function;
  private var areaContentType:String;

  public*/ function ImageMapCanvasDropTarget$(imageMapEditor/*:ImageMapEditorBase*/, dropHandler/*:Function*/, areaContentType/*:String*/) {
    this.imageMapEditor$Fmo6 = imageMapEditor;
    this.canvasMgr$Fmo6 = imageMapEditor.getCanvasManager();
    this.dropHandler$Fmo6 = dropHandler;
    this.areaContentType$Fmo6 = areaContentType;

    this.super$Fmo6(this.canvasMgr$Fmo6.getStageEl(), AS3.cast(Ext.dd.DropTarget,{
      ddGroup: "ContentDD"
    }));

    this.addToGroup("ContentLinkDD");
  }/*

  override public*/ function notifyDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    if (!this.dropHandler$Fmo6) {
      return false;
    }
    var shapes/*:Array*/ = this.canvasMgr$Fmo6.getShapesAtPosition(e.getX(), e.getY());
    if (!shapes || shapes.length === 0) {
      return false;
    }
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    if (!this.allowDrag$Fmo6(dragInfo)) {
      return false;
    }
    this.dropHandler$Fmo6(shapes[0], dragInfo);
    return true;
  }/*

  override public*/ function notifyOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var shapes/*:Array*/ = this.canvasMgr$Fmo6.getShapesAtPosition(e.getX(), e.getY());
    if (!shapes || shapes.length === 0) {
      return this.dropNotAllowed;
    }
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    return this.allowDrag$Fmo6(dragInfo) ? this.dropAllowed : this.dropNotAllowed;
  }/*

  private*/ function allowDrag(dragInfo/*:DragInfo*/)/*:Boolean*/ {
    if (!dragInfo) {
      return false;
    }
    var draggedItems/*:Array*/ = dragInfo.getContents();
    var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(draggedItems);
    // all dragged items must be valid
    if (draggedItems.length !== contents.length) {
      return false;
    }
    if (contents.length !== 1) {
      return false;
    }
    if (this.areaContentType$Fmo6) {
      var contentType/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(this.areaContentType$Fmo6);
      if (com.coremedia.cms.editor.sdk.util.LinkListUtil.containsContentNotMatchingType(contentType, contents) !== null) {
        return false;
      }
    }
    return true;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropTarget",
      canvasMgr$Fmo6: null,
      imageMapEditor$Fmo6: null,
      dropHandler$Fmo6: null,
      areaContentType$Fmo6: null,
      constructor: ImageMapCanvasDropTarget$,
      super$Fmo6: function() {
        Ext.dd.DropTarget.prototype.constructor.apply(this, arguments);
      },
      notifyDrop: notifyDrop,
      notifyOver: notifyOver,
      allowDrag$Fmo6: allowDrag,
      requires: [
        "Ext.dd.DropTarget",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.ContentProxyHelper",
        "com.coremedia.cms.editor.sdk.dragdrop.DragInfo",
        "com.coremedia.cms.editor.sdk.util.LinkListUtil"
      ]
    };
});
