Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentsGridDropZone", function(UserChosenContentsGridDropZone) {/*package com.coremedia.cms.editor.controlroom.workflow.components {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.cms.editor.sdk.dragdrop.DragInfo;
import com.coremedia.cms.editor.sdk.util.contentUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.ArrayUtils;

import ext.dd.DragSource;
import ext.dd.DropZone;
import ext.event.Event;

public class UserChosenContentsGridDropZone extends DropZone {
  private var contentValueExpression:ValueExpression;

  public var allowFolders:Boolean;
  public var expandFolders:Boolean;

  public*/ function UserChosenContentsGridDropZone$(el/*:**/, config/*:UserChosenContentsGridDropZone*/, contentValueExpression/*:ValueExpression*/) {
    this.super$RfpT(el, config);
    this.allowFolders = config.allowFolders;
    this.expandFolders = config.expandFolders;
    this.contentValueExpression$RfpT = contentValueExpression;
  }/*

  override public*/ function onContainerDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {var this$=this;
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    if (!this.allowDrop$RfpT(dragInfo)) {
      return false;
    }

    var oldContents/*:Array*/ = this.contentValueExpression$RfpT.getValue();
    // just to be sure, filter null items
    var initialContents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(dragInfo.getContents());

    if (!this.expandFolders) {
      var resultContents/*:Array*/ = this.allowFolders ? initialContents : initialContents.filter(
                      function (content/*:Content*/)/*:Boolean*/ {
                        return content.isDocument();
                      });
      this.contentValueExpression$RfpT.setValue(com.coremedia.ui.util.ArrayUtils.unique(oldContents.concat(resultContents)));
    } else {
      com.coremedia.cms.editor.sdk.util.contentUtil.expandFolders(function (documents/*:Array*/)/*:void*/ {
        if (documents.length === 0) {
          return;
        }
        this$.contentValueExpression$RfpT.setValue(com.coremedia.ui.util.ArrayUtils.unique(oldContents.concat(documents)));
      }, initialContents);
    }

    return initialContents;
  }/*

  override public*/ function onContainerOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    var dragInfo/*:DragInfo*/ = com.coremedia.cms.editor.sdk.dragdrop.DragInfo.makeDragInfo(data);
    return this.allowDrop$RfpT(dragInfo) ? this.dropAllowed : this.dropNotAllowed;
  }/*

  private*/ function allowDrop(dragInfo/*:DragInfo*/)/*:Boolean*/ {
    var draggedItems/*:Array*/ = dragInfo.getContents();
    var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(draggedItems);
    if (draggedItems.length !== contents.length) {
      return false;
    }
    if (!this.allowFolders && !this.expandFolders) {
      if (contents.some(function (content/*:Content*/)/*:Boolean*/ {
                return content.isFolder();
              })) {
        return false;
      }
    }
    return true;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropZone",
      contentValueExpression$RfpT: null,
      allowFolders: false,
      expandFolders: false,
      constructor: UserChosenContentsGridDropZone$,
      super$RfpT: function() {
        Ext.dd.DropZone.prototype.constructor.apply(this, arguments);
      },
      onContainerDrop: onContainerDrop,
      onContainerOver: onContainerOver,
      allowDrop$RfpT: allowDrop,
      requires: [
        "Ext.dd.DropZone",
        "com.coremedia.cap.content.ContentProxyHelper",
        "com.coremedia.cms.editor.sdk.dragdrop.DragInfo",
        "com.coremedia.cms.editor.sdk.util.contentUtil",
        "com.coremedia.ui.util.ArrayUtils"
      ]
    };
});
