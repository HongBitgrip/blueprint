Ext.define("com.coremedia.ui.models.NodeChildren", function(NodeChildren) {/*package com.coremedia.ui.models {

/**
 * Information about the children of a tree node.
 * Node children objects are returned by
 * tree models when information about a node is requested.
 * This object contains enough information to render
 * children of a node in collapsed state.
 *
 * @see TreeModel
 * /
public class NodeChildren {
  private var childIds:Array;
  private var textsByChildId:Object;
  private var iconsByChildId:Object;
  private var clsByChildId:Object;
  private var leafByChildId:Object;

  /**
   * Create a new children object.
   *
   * @param childIds the ids of child nodes in the order in which they should appear in the tree
   * @param textsByChildId the texts of the child nodes indexed by the ids of the child nodes
   * @param iconsByChildId the style classes for the icons of the child nodes indexed by the ids of the child nodes; if no icon is given, no special style class is used
   * @param clsByChildId the style classes for the node texts indexed by the ids of the child nodes; if no class is given, the default style applies
   * /
  public*/ function NodeChildren$(childIds/*:Array*/, textsByChildId/*:Object*/, iconsByChildId/*:Object*/, clsByChildId/*:Object = null*/, leafByChildId/*:Object = null*/) {switch(Math.max(arguments.length,3)){case 3:clsByChildId=null;case 4:leafByChildId=null;}
    this.childIds$2N0X = childIds;
    this.textsByChildId$2N0X = textsByChildId;
    this.iconsByChildId$2N0X = iconsByChildId;
    this.clsByChildId$2N0X = clsByChildId || {};
    this.leafByChildId$2N0X = leafByChildId || {};
  }/*

  /**
   * Return the ids of children in the order in which they should appear in the tree.
   *
   * @return the ids of children of this node
   * /
  public*/ function getChildIds()/*:Array*/ {
    return this.childIds$2N0X;
  }/*

  /**
   * Return the texts of the child nodes indexed by the ids of the child nodes.
   *
   * @return the texts of the child nodes indexed by the ids of the child nodes
   * /
  public*/ function getTextsByChildId()/*:Object*/ {
    return this.textsByChildId$2N0X;
  }/*

  /**
   * Return boolean values indicating which child nodes are leaf nodes
   *
   * @return boolean values indicating which child nodes are leaf nodes
   * /
  public*/ function getLeafByChildId()/*:Object*/ {
    return this.leafByChildId$2N0X;
  }/*

  /**
   * Return the style classes for the icons of the child nodes indexed by the ids of the child nodes.
   *
   * @return the style classes for the icons of child nodes indexed by the ids of the child nodes
   * /
  public*/ function getIconsByChildId()/*:Object*/ {
    return this.iconsByChildId$2N0X;
  }/*

  /**
   * Return the style classes for the texts of the child nodes indexed by the ids of the child nodes.
   *
   * @return the style classes for the texts of child nodes indexed by the ids of the child nodes
   * /
  public*/ function getClsByChildId()/*:Object*/ {
    return this.clsByChildId$2N0X;
  }/*

  /**
   * Removed the node with the given id from the list of children
   * @param filteredId the tree node id to remove
   * /
  public*/ function removeNode(filteredId/*:String*/)/*:void*/ {
    delete this.iconsByChildId$2N0X[filteredId];
    delete this.textsByChildId$2N0X[filteredId];
    delete this.clsByChildId$2N0X[filteredId];
    this.childIds$2N0X = this.childIds$2N0X.filter(function(id/*:String*/)/*:Boolean*/ {
      return id !== filteredId;
    });
    delete this.leafByChildId$2N0X[filteredId];
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      childIds$2N0X: null,
      textsByChildId$2N0X: null,
      iconsByChildId$2N0X: null,
      clsByChildId$2N0X: null,
      leafByChildId$2N0X: null,
      constructor: NodeChildren$,
      getChildIds: getChildIds,
      getTextsByChildId: getTextsByChildId,
      getLeafByChildId: getLeafByChildId,
      getIconsByChildId: getIconsByChildId,
      getClsByChildId: getClsByChildId,
      removeNode: removeNode
    };
});
