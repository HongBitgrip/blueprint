Ext.define("com.coremedia.ui.models.TreeModel", function(TreeModel) {/*package com.coremedia.ui.models {
/**
 * The model layer of a dynamically computed tree.
 * All methods implemented here should use dependency tracking
 * so that the methods of this class can be used inside
 * a function value expression. See the documentation of
 * ValueExpressionFactory.createFromFunction for details on
 * dependency tracking.
 *
 * @see com.coremedia.ui.data.dependencies.DependencyTracker
 * @see com.coremedia.ui.data.ValueExpressionFactory#createFromFunction
 * /
public interface TreeModel {
  /**
   * Return the id of the root node.
   *
   * @return the id of the root node
   * /
  function getRootId():String;

  /**
   * Return true if the root node should be displayed in any view.
   * Return false if views should start rendering the tree with the immediate children of the root node.
   * /
  function isRootVisible():Boolean;

  /**
   * Return the text to be displayed for the node with the given id.
   * If at this point of time the text cannot be computed, return undefined,
   * but trigger a load of the required data.
   *
   * @param nodeId the node id
   * @return the text
   * /
  function getText(nodeId:String):String;

  /**
   * Return the icon class to be used for the node with the given id.
   * If at this point of time the class cannot be computed, return undefined.
   *
   * @param nodeId the node id
   * @return the icon class
   * /
  function getIconCls(nodeId:String):String;

  /**
   * Return the text class to be used for the node with the given id.
   * If at this point of time the class cannot be computed, return undefined.
   *
   * @param nodeId the node id
   * @return the text class
   * /
  function getTextCls(nodeId:String):String;

  /**
   * Return the state of the node identified by the given id.
   * If at this point of time the state cannot be computed, return undefined,
   * but trigger a load of the required data.
   *
   * @param nodeId the node id
   * @return the node state
   * /
  function getChildren(nodeId:String):NodeChildren;

  /**
   * Compute an array of node ids, starting with the root node id and
   * leading up, traversing the tree
   * towards its leaves. This traversal is finished with the last node which should be part of the tree,
   * which might be the given node itself or one of its parents.
   *
   * If at this point of time the path cannot be
   * computed, return undefined, but trigger a load of the required
   * data.
   *
   * If the node and none of its parent nodes is known not to be contained in the tree, return null.
   *
   * @param nodeId
   * @return the array of node ids, or null or undefined (see above)
   * /
  function getIdPath(nodeId:String):Array;

  //TODO doc
  function getIdPathFromModel(model:Object):Array;

  /**
   * Retrieve the node ID for the given model object. This method returns its
   * result immediately.
   *
   * This method is part of the TreeModel interface in order to handle tree
   * selections in components.
   *
   * @param model Model object. Its expected type depends on the TreeModel type. Must neither be null nor undefined.
   *
   * @return node id as String value, or null if the given model is not of the expected type
   *
   * /
  function getNodeId(model:Object):String;

  /**
   * Retrieve the model object for the given node id. The type of the returned
   * model object depends on the type of the TreeModel.
   *
   * This method is part of the TreeModel interface in order to handle tree
   * selections in components.
   *
   * @param nodeId the node id
   * @return model object for the specified node, or null if the given node id is not a part of this tree model
   * /
  function getNodeModel(nodeId:String):Object;

  /**
   * @param model the model to check
   * @return true if the model can be renamed
   * /
  function isEditable(model:Object):Boolean;

  /**
   * Applies the newly inputted node name.
   * If false is returned, the renaming is cancelled and reverted to the old name.
   * @param model the model to rename
   * @param newName the new name
   * @param oldName the original name
   * @param callback the function to call when the rename request returns from the server, parameter signature
   *   see flush call of RemoteBean
   * @return true if the renaming has been applied successfully.
   *
   * @see com.coremedia.ui.data.RemoteBean#flush()
   * /
  function rename(model:Object, newName:String, oldName:String, callback:Function):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
