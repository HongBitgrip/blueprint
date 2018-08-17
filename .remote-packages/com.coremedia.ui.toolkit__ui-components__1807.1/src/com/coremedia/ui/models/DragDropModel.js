Ext.define("com.coremedia.ui.models.DragDropModel", function(DragDropModel) {/*package com.coremedia.ui.models {
import ext.dd.DragSource;

public interface DragDropModel {
  /**
   * Perform default action to a set of nodes. The corresponding nodes can be fetched from the dropEvent.
   *
   * @param droppedNodeIds the ids of the dropped nodes
   * @param targetNodeId the id of the target node
   * @param callback an optional callback function the move operation result is passed to
   * /
  function performDefaultAction(droppedNodeIds:Array, targetNodeId:String, callback:Function = undefined):void;

  /**
   * Perform alternative action to a set of nodes. The corresponding nodes can be fetched from the dropEvent.
   *
   * @param droppedNodeIds the ids of the dropped nodes
   * @param targetNodeId the id of the target node
   * @param callback an optional callback function the copy operation result is passed to
   * /
  function performAlternativeAction(droppedNodeIds:Array, targetNodeId:String, callback:Function = undefined):void;

  /**
   * Whether the default action may be performed for the nodes with the given ids.
   * @param source the drag information of the source
   * @param nodeIds the ids
   * @param targetNodeId the id of the target node
   * @return whether the default action may be performed
   * /
  function allowDefaultAction(source:DragSource, nodeIds:Array, targetNodeId:String):Boolean;

  /**
   * Whether the alternative action may be performed for the nodes with the given ids
   * @param source the drag information of the source
   * @param nodeIds the ids
   * @param targetNodeId the id of the target node
   * @return whether the alternative action may be performed
   * /
  function allowAlternativeAction(source:DragSource, nodeIds:Array, targetNodeId:String):Boolean;

  /**
   * Get the itemId of the model container or undefined.
   *
   * @return itemId of the model container or undefined
   * /
  function getModelItemId():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
