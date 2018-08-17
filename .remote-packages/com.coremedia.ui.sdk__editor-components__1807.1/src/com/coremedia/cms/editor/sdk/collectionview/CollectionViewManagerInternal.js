Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal", function(CollectionViewManagerInternal) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.configuration.TreeFilter;
import com.coremedia.cms.editor.sdk.collectionview.tree.CompoundChildTreeModel;
import com.coremedia.cms.editor.sdk.collectionview.tree.CompoundTreeModel;
import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.models.TreeModel;

public interface CollectionViewManagerInternal extends CollectionViewManager {

  /**
   * Return the collection view container.
   * @return the collection view container
   * /
  function getCollectionViewContainer():CollectionViewContainer;

  /**
   * Return the collection view
   * @return the collection view
   * @see CollectionViewModel#CMS_REPOSITORY
   * /
  function getCollectionView():CollectionView;

  /**
   * Opens the collection view with the given collection view model main state bean state.
   * @param state the given collection view model main state bean state
   * /
  function openWithMainState(state:Object = null):void;

  /**
   * Opens the collection view with the given collection view model state.
   * @param state the given collection view model state
   * /
  function openWithAllState(state:Object = null):void;

  /**
   * Returns the library tree model that is a compound model of subtrees,
   * add by several extensions.
   * /
  function getLibraryTreeModel():CompoundTreeModel;

  /**
   * Returns the drag&drop model for the subtree containing the given node id, or undefined if that subtree does not support drag&drop
   * /
  function getDragDropModel(nodeId:String):DragDropModel;

  /**
   * Adds a folder as a tree root.
   * Such folders are removed from their original position in the repository tree
   * and displayed at the top level next the repository root folder.
   *
   * @param content the folder
   * @param iconCls the CSS class to use for the folder icon; set to null to use default icon
   * /
  function addRepositoryTreeRoot(content:Content, iconCls:String = null):void;

  /**
   * Adds a tree model to the collection view. Typically, a collection view extension comes with a corresponding
   * tree model. However, collection view extensions may add more than one custom tree model.
   *
   * The id scheme of the new tree model must have a prefix that is unique, no
   * other added tree model may have node ids with that prefix.
   *
   * @param treeModel the tree model to add
   * @param dragDropModel a drag and drop model compatible with the given tree model
   * @param idPrefix a unique id prefix
   *
   * /
  function addTreeModel(treeModel:CompoundChildTreeModel, dragDropModel:DragDropModel = undefined):void;

  /**
   * Returns the tree model that is currently used for the tree selection.
   * @return
   * /
  function getActiveTreeModel():TreeModel;

  /**
   * Adds a filter method to the manager that allows to hide documents from the Tree and Listview in the library.
   * The method may be used to hide documents from the content tree and show them only in a separate library tree.
   * @param treeFilter the TreeFilter instance to be added
   * Return undefined if the model has not been loaded yet.
   * /
  function addTreeFilter(treeFilter:TreeFilter):void;

  /**
   * Returns the children of the currently selected node to be displayed in the list or thumbnail view.
   * @param folder the model of the selected tree node
   * @return the filtered and sorted children of the given folder.
   * /
  function getFolderChildren(folder:Content):Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.collectionview.CollectionViewManager"],
      requires: ["com.coremedia.cms.editor.sdk.collectionview.CollectionViewManager"]
    };
});
