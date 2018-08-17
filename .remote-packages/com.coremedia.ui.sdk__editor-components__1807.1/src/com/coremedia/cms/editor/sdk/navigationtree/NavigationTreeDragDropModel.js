Ext.define("com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeDragDropModel", function(NavigationTreeDragDropModel) {/*package com.coremedia.cms.editor.sdk.navigationtree {
import com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeDragDropModel;
import com.coremedia.ui.models.TreeModel;

import ext.dd.DragSource;

/**
 * The DnD model of the navigation tree.
 * We simply do not allow any drag an drop since we don't know which
 * other extensions are out there which may interfere with the DnD behaviour.
 * /
public class NavigationTreeDragDropModel extends RepositoryTreeDragDropModel {

  public*/ function NavigationTreeDragDropModel$(treeModel/*:TreeModel*/) {
    this.super$iHwI(treeModel);
  }/*

  override protected*/ function isValidDragSource(source/*:DragSource*/)/*:Boolean*/ {
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeDragDropModel",
      constructor: NavigationTreeDragDropModel$,
      super$iHwI: function() {
        com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeDragDropModel.prototype.constructor.apply(this, arguments);
      },
      isValidDragSource: isValidDragSource,
      requires: ["com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeDragDropModel"]
    };
});
