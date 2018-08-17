Ext.define("com.coremedia.cms.editor.controlroom.dd.EditedContentPanelDragDropModel", function(EditedContentPanelDragDropModel) {/*package com.coremedia.cms.editor.controlroom.dd {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.cms.editor.controlroom.EditedContentGridPanel;
import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;

import ext.dd.DragSource;

public class EditedContentPanelDragDropModel implements DragDropModel {

  private var editedContentPanel:EditedContentGridPanel;

  public*/ function EditedContentPanelDragDropModel$(editentContentPanel/*:EditedContentGridPanel*/) {
    this.editedContentPanel$G_1W = editentContentPanel;
  }/*

  public*/ function performDefaultAction(droppedContentIds/*:Array*/, targetNodeId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    if (droppedContentIds && droppedContentIds.length > 0) {
      var droppedRemoteBeans/*:Array*/ = com.coremedia.ui.util.BeanCollectionDropZoneHelper.getRemoteBeansForNodes(droppedContentIds);

      var newEditedContents/*:Array*/ = [];
      droppedRemoteBeans.forEach(function (remoteBean/*:RemoteBean*/)/*:void*/ {
        var content/*:Content*/ = com.coremedia.cap.content.ContentProxyHelper.getContent(remoteBean);
        if (content && !content.isFolder()) {
          newEditedContents.push(content);
        }
      });

      if (newEditedContents.length > 0) {
        com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance().getEditedContents().addItems(newEditedContents);
      }
    }
  }/*

  public*/ function performAlternativeAction(droppedContentIds/*:Array*/, targetNodeId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    // not allowed
  }/*

  public*/ function allowDefaultAction(source/*:DragSource*/, nodeIds/*:Array*/, targetNodeId/*:String*/)/*:Boolean*/ {
    var mayBeMoved/*:Boolean*/ = true;
    var remoteBeansForNodes/*:Array*/ = com.coremedia.ui.util.BeanCollectionDropZoneHelper.getRemoteBeansForNodes(nodeIds);
    remoteBeansForNodes.forEach(function (remoteBean/*:RemoteBean*/)/*:void*/ {
      var content/*:Content*/ = com.coremedia.cap.content.ContentProxyHelper.getContent(remoteBean);
      if (!content || content.isFolder()) {
        mayBeMoved = false;
      }
    });
    return mayBeMoved;
  }/*

  public*/ function allowAlternativeAction(source/*:DragSource*/, nodeIds/*:Array*/, targetNodeId/*:String*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function getModelItemId()/*:String*/ {
    return this.editedContentPanel$G_1W.getItemId();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.models.DragDropModel"],
      editedContentPanel$G_1W: null,
      constructor: EditedContentPanelDragDropModel$,
      performDefaultAction: performDefaultAction,
      performAlternativeAction: performAlternativeAction,
      allowDefaultAction: allowDefaultAction,
      allowAlternativeAction: allowAlternativeAction,
      getModelItemId: getModelItemId,
      requires: [
        "com.coremedia.cap.content.ContentProxyHelper",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl",
        "com.coremedia.ui.models.DragDropModel",
        "com.coremedia.ui.util.BeanCollectionDropZoneHelper"
      ]
    };
});
