Ext.define("com.coremedia.ui.data.TreeRelation", function(TreeRelation) {/*package com.coremedia.ui.data {

/**
 * A tree relation represents a hierarchical relation over nodes.
 *
 * <p>One trivial example of a tree relation is the tree relation built into the content server.
 *
 * <p>More complex tree relations may be implemented with link list properties or by external objects
 * like e-Commerce categories.
 *
 * <p>This interface only allows read access.
 * /
public interface TreeRelation {

  /**
   * Returns all children for the given node (which must represent a tree node according to this tree relation).
   *
   * @param node the tree node to retrieve the children for
   * @return a list where each node is a child of the given node, or undefined if something needs to be
   * loaded before the children can be computed.
   * /
  function getChildrenOf(node:Object):Array;

  /**
   * Returns the parent node of the given node according to this tree relation.
   * This method checks for cycles, and to do so, computes the whole path to root under the hood.
   * If you want to walk up to the tree root and avoid an infinite loop,
   * better use <code>pathToRoot()</code> instead to also avoid computing the path over and over again.
   *
   * @param node the node to retrieve the parent for
   * @return the parent according to the semantics of the tree relation, or null if this node has no parent or
   * the path to root ran into a cycle, or undefined if some node needs to be loaded before the parent can be computed.
   * /
  function getParentOf(node:Object):Object;

  /**
   * Returns the parent node of the given node according to this tree relation.
   * This method does not check for cycles; if you want to receive <code>null</code> when the path to root is
   * cyclic, use <code>getParentOf()</code>; if you want to walk up to the tree root and avoid an infinite loop,
   * use <code>pathToRoot()</code> instead.
   *
   * @param node the node to retrieve the parent for
   * @return the parent according to the semantics of the tree relation, or null if this node has no parent,
   * or undefined if some node needs to be loaded before the parent can be computed.
   * /
  function getParentUnchecked(node:Object):Object;

  /**
   * Return whether the given node is the root node of this tree relation.
   * Note that pathToRoot() may return a path where the top-level node is actually not the root node,
   * if there is an unconnected sub-tree.
   * @param node the node to check
   * @return whether the given node is the root node
   * /
  function isRoot(node:Object):Boolean;

  /**
   * Return the path of parents of the given node,
   * starting with the node itself and ending when getParentOf() returns null.
   * Return undefined if the list of parents cannot be computed.
   * Return null if the tree relation has a cycle.
   *
   * @param node the node to start from
   * @return the parent path as an array of nodes
   * /
  function pathToRoot(node:Object):Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
