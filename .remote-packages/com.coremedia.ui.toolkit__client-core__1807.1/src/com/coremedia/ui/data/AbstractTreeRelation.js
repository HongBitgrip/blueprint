Ext.define("com.coremedia.ui.data.AbstractTreeRelation", function(AbstractTreeRelation) {/* /**
 * A base class for TreeRelation implementors.
 * It computes <code>pathToRoot</code> based on <code>getParentUnchecked()</code>,
 * checking for cycles.
 * It computes <code>isRoot()</code> based on <code>getParentUnchecked()</code> returning <code>null</code>.
 * /
package com.coremedia.ui.data {
public class AbstractTreeRelation implements TreeRelation {

  /**
   * Abstract method. Implement in subclasses and do not call super.getChildrenOf().
   * /
  public*/ function getChildrenOf(node/*:Object*/)/*:Array*/ {
    throw new AS3.Error("abstract method");
  }/*

  /**
   * Abstract method. Implement in subclasses and do not call super.getParentUnchecked().
   * /
  public*/ function getParentUnchecked(node/*:Object*/)/*:Object*/ {
    throw new AS3.Error("abstract method");
  }/*

  /**
   * Implementation based on <code>pathToRoot(node)</code>.
   * If available, returns the last-but-one element of that path.
   * /
  public*/ function getParentOf(node/*:Object*/)/*:Object*/ {
    var path/*:Array*/ = this.pathToRoot(node);
    return path === undefined
            ? undefined
            : path === null || path.length <= 1
            ? null
            : path[path.length - 2];
  }/*

  /**
   * Cycle-checking implementation based on <code>getParentUnchecked()</code>.
   * If a cycle is detected, <code>null</code> is returned.
   * /
  public*/ function pathToRoot(node/*:Object*/)/*:Array*/ {
    var result/*:Array*/ = [];
    var current/*:Object*/ = node;
    while (current) {
      if (result.indexOf(current) !== -1) {
        // A cycle was found.
        return null;
      }
      result.push(current);
      var next = this.getParentUnchecked(current);
      if (next === undefined) {
        return undefined;
      }
      current = next;
    }
    return result;
  }/*

  /**
   * Implementation based on whether <code>getParentUnchecked()</code> returns <code>null</code>.
   * /
  public*/ function isRoot(node/*:Object*/)/*:Boolean*/ {
    var parent/*:Object*/ = this.getParentUnchecked(node);
    return parent === undefined
            ? undefined
            : parent === null;
  }/*
}*/function AbstractTreeRelation$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.TreeRelation"],
      getChildrenOf: getChildrenOf,
      getParentUnchecked: getParentUnchecked,
      getParentOf: getParentOf,
      pathToRoot: pathToRoot,
      isRoot: isRoot,
      constructor: AbstractTreeRelation$,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.data.TreeRelation"
      ]
    };
});
