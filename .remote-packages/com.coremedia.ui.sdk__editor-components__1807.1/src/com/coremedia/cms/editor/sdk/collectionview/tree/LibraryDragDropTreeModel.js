Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.LibraryDragDropTreeModel", function(LibraryDragDropTreeModel) {/*package com.coremedia.cms.editor.sdk.collectionview.tree {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.models.DragDropModel;

import ext.dd.DragSource;

public class LibraryDragDropTreeModel implements DragDropModel {

  public*/ function LibraryDragDropTreeModel$() {
  }/*
  
  public*/ function performDefaultAction(droppedNodeIds/*:Array*/, targetNodeId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    var dragDropModel/*:DragDropModel*/ = this.getDragDropModel$8tei(targetNodeId);
    if(dragDropModel) {
      dragDropModel.performDefaultAction(droppedNodeIds, targetNodeId, callback);
    }
  }/*

  public*/ function performAlternativeAction(droppedNodeIds/*:Array*/, targetNodeId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    var dragDropModel/*:DragDropModel*/ = this.getDragDropModel$8tei(targetNodeId);
    if(dragDropModel) {
      dragDropModel.performAlternativeAction(droppedNodeIds, targetNodeId, callback);
    }
  }/*

  public*/ function allowDefaultAction(source/*:DragSource*/, nodeIds/*:Array*/, targetNodeId/*:String*/)/*:Boolean*/ {
    var dragDropModel/*:DragDropModel*/ = this.getDragDropModel$8tei(targetNodeId);
    if(dragDropModel) {
      return dragDropModel.allowDefaultAction(source, nodeIds, targetNodeId);
    }
    return false;
  }/*

  public*/ function allowAlternativeAction(source/*:DragSource*/, nodeIds/*:Array*/, targetNodeId/*:String*/)/*:Boolean*/ {
    var dragDropModel/*:DragDropModel*/ = this.getDragDropModel$8tei(targetNodeId);
    if(dragDropModel) {
      return dragDropModel.allowAlternativeAction(source, nodeIds, targetNodeId);
    }
    return false;
  }/*

  public*/ function getModelItemId()/*:String*/ {
    return undefined;
  }/*

  private*/ function getDragDropModel(nodeId/*:String*/)/*:DragDropModel*/ {
    return (AS3.as(com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager(),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerImpl)).getDragDropModel(nodeId);
  }/*


  public*/ function toString()/*:String*/ {
    return "LibraryDragDropTreeModel";
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.models.DragDropModel"],
      constructor: LibraryDragDropTreeModel$,
      performDefaultAction: performDefaultAction,
      performAlternativeAction: performAlternativeAction,
      allowDefaultAction: allowDefaultAction,
      allowAlternativeAction: allowAlternativeAction,
      getModelItemId: getModelItemId,
      getDragDropModel$8tei: getDragDropModel,
      toString: toString,
      requires: ["com.coremedia.ui.models.DragDropModel"],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerImpl",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
