Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeDragDropModel", function(RepositoryTreeDragDropModel) {/*package com.coremedia.cms.editor.sdk.collectionview.tree {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.actions.CopyContentAction;
import com.coremedia.cms.editor.sdk.actions.MoveContentAction;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.models.TreeModel;
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;

import ext.dd.DragSource;

public class RepositoryTreeDragDropModel implements DragDropModel {
  protected var treeModel:TreeModel;

  public*/ function RepositoryTreeDragDropModel$(treeModel/*:TreeModel*/) {
    this.treeModel = treeModel;
  }/*

  /**
   * Uses the MoveContentAction to execute a move for content.
   * @param droppedNodeIds the node ids of the contents that are currently dragged.
   * @param targetNodeId the node id of the target content
   * @param callback the optional callback method invoked with the move result
   * /
  public*/ function performDefaultAction(droppedNodeIds/*:Array*/, targetNodeId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    var contents/*:Array*/ = this.getContents$hkwV(droppedNodeIds);
    if(contents) {
      var targetFolder/*:Content*/ =AS3.as( this.treeModel.getNodeModel(targetNodeId),  com.coremedia.cap.content.Content);
      new com.coremedia.cms.editor.sdk.actions.MoveContentAction(contents, targetFolder).execute(callback);
    }
  }/*

  /**
   * Uses the CopyContentAction to execute the copying of content.
   * @param droppedNodeIds the node ids of the contents that are currently dragged.
   * @param targetNodeId the node id of the target content
   * @param callback the optional callback method invoked with the copy result
   * /
  public*/ function performAlternativeAction(droppedNodeIds/*:Array*/, targetNodeId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    var contents/*:Array*/ = this.getContents$hkwV(droppedNodeIds);
    if(contents) {
      var targetFolder/*:Content*/ =AS3.as( this.treeModel.getNodeModel(targetNodeId),  com.coremedia.cap.content.Content);
      var copiedContentValueExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
      new com.coremedia.cms.editor.sdk.actions.CopyContentAction(contents,AS3.as( targetFolder,  com.coremedia.cap.content.Content)).execute(callback);
    }
  }/*

  /**
   *
   * @param source the DragSource instance of the drag, used to calculate if the drag comes from a "valid" component.
   * @param beanIds the node ids of the contents that are currently dragged.
   * @param targetId the node id of the target content
   * @return true if the contents can be moved to the target
   * /
  public*/ function allowDefaultAction(source/*:DragSource*/, beanIds/*:Array*/, targetId/*:String*/)/*:Boolean*/ {
    var contents/*:Array*/ = this.getContents$hkwV(beanIds);
    if(contents && this.isValidDragSource(source)) {
      var targetFolder/*:Content*/ = getContent$static(targetId);
      if(targetFolder ) {
        var folderTreeRelation/*:ContentTreeRelation*/ = this.getContentTreeRelation$hkwV(targetFolder);
        if (folderTreeRelation) {
          return folderTreeRelation.mayMove(contents, targetFolder);
        }
      }
    }
    return false;
  }/*

  public*/ function allowAlternativeAction(source/*:DragSource*/, beanIds/*:Array*/, targetId/*:String*/)/*:Boolean*/ {
    var contents/*:Array*/ = this.getContents$hkwV(beanIds);
    if(contents && this.isValidDragSource(source)) {
      var targetFolder/*:Content*/ = getContent$static(targetId);
      var folderTreeRelation/*:ContentTreeRelation*/ = this.getContentTreeRelation$hkwV(targetFolder);
      if (folderTreeRelation) {
        return folderTreeRelation.mayCopy(contents, targetFolder);
      }
    }
    return false;
  }/*

  private*/ function getContentTreeRelation(content/*:Content*/)/*:ContentTreeRelation*/ {
    var collectionViewExtender/*:CollectionViewExtender*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender();
    var collectionViewExtension/*:CollectionViewExtension*/ = collectionViewExtender.getExtension(content);
    if(collectionViewExtension === undefined) {
      return undefined;
    }
    return collectionViewExtension && collectionViewExtension.getContentTreeRelation();
  }/*

  public*/ function getModelItemId()/*:String*/ {
    return undefined;
  }/*

  /**
   * Uses the tree relation to find the parent
   * @param target the content to find the parent for
   * /
  private*/ function getParent(target/*:Content*/)/*:Content*/ {
    var targetFolderRelation/*:ContentTreeRelation*/ = this.getContentTreeRelation$hkwV(target);
    return targetFolderRelation && targetFolderRelation.getParent(target);
  }/*

  /**
   * Checks if the given drag source comes from another tree.
   * @param source the drag source
   * @return true, if the source has been dragged from a content tree.
   * /
  protected*/ function isValidDragSource(source/*:DragSource*/)/*:Boolean*/ {
    var dragData/*:Object*/ = source.dragData;
    var ids/*:Array*/ = com.coremedia.ui.util.BeanCollectionDropZoneHelper.extractNodeIds(dragData);
    if(ids.length > 0) {
      var cvManager/*:CollectionViewManagerInternal*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager(),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal);
      var compoundTreeModel/*:CompoundTreeModel*/ = cvManager.getLibraryTreeModel();

      var content/*:Content*/ = getContent$static(ids[0]);
      //the method is expected to be called in FVE, but we need it synchronous here
      var idPath/*:Array*/ = compoundTreeModel.getIdPathFromModel(content);
      if(!idPath) {
        return undefined;
      }
      var sourceTreeModel/*:TreeModel*/ = compoundTreeModel.getTreeModel(idPath[1]);

      //check if the node is part of the original tree (or subclassed ones)
      return sourceTreeModel.getRootId() === this.treeModel.getRootId();
    }
    return true;
  }/*

  /**
   * Converts the given bean id to Content.
   * @param beanIds the id to convert
   * /
  private static*/ function getContent$static(id/*:String*/)/*:Content*/ {
    return AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(id),  com.coremedia.cap.content.Content);
  }/*

  /**
   * Converts the list of content to node ids. When Drag and Drop is used, the drag information stores
   * the ids of the content, not the content itself.
   * @param toMove the content array of the content to be dragged
   * @return the list of content ids used for the DragInfo.
   * /
  public static*/ function toSourceIds$static(toMove/*:Array*/)/*:Array*/ {
    var ids/*:Array*/ = [];
    for(var i/*:int*/ = 0; i<toMove.length; i++) {
      var remoteBean/*:RemoteBean*/ =AS3.as( toMove[i],  com.coremedia.ui.data.RemoteBean);
      if (remoteBean) {
        var id/*:String*/ = com.coremedia.ui.util.BeanCollectionDropZoneHelper.extractNodeId(remoteBean);
        ids.push(id);
      }
    }
    return ids;
  }/*

  /**
   * Converts the list of bean ids to an array of content.
   * @param beanIds the ids to retrieve the content for.
   * @return a content array
   * /
  private*/ function getContents(beanIds/*:Array*/)/*:Array*/ {
    var contents/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < beanIds.length; i++) {
      var content/*:Content*/ = getContent$static(beanIds[i]);
      if (content) {
        contents.push(content);
      }
      else {
        return undefined;
      }
    }
    return contents;
  }/*


  public*/ function toString()/*:String*/ {
    return "DnD Model for the Repository";
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.models.DragDropModel"],
      treeModel: null,
      constructor: RepositoryTreeDragDropModel$,
      performDefaultAction: performDefaultAction,
      performAlternativeAction: performAlternativeAction,
      allowDefaultAction: allowDefaultAction,
      allowAlternativeAction: allowAlternativeAction,
      getContentTreeRelation$hkwV: getContentTreeRelation,
      getModelItemId: getModelItemId,
      getParent$hkwV: getParent,
      isValidDragSource: isValidDragSource,
      getContents$hkwV: getContents,
      toString: toString,
      statics: {toSourceIds: toSourceIds$static},
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.models.DragDropModel",
        "com.coremedia.ui.util.BeanCollectionDropZoneHelper"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.CopyContentAction",
        "com.coremedia.cms.editor.sdk.actions.MoveContentAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
