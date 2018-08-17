Ext.define("com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode", function(MetadataTreeNode) {/*package com.coremedia.cms.editor.sdk.preview.metadata {
import com.coremedia.ui.util.ObjectUtils;

public class MetadataTreeNode {

  private var id:String;
  private var children:Array =*/function children_(){this.children$pjKk=( []);}/*;
  private var parent:MetadataTreeNode;
  private var properties:Object;

  public*/ function MetadataTreeNode$(rawNodeData/*:Object*/) {var this$=this;children_.call(this);
    this.id$pjKk = rawNodeData.id || "root";
    this.properties$pjKk = {};
    this.setProperties$pjKk(rawNodeData);
    var rawChildren/*:Array*/ = rawNodeData.children || [];
    var thys/*:MetadataTreeNode*/ = this;
    rawChildren.forEach(function (child/*:Object*/)/*:void*/ {
      var metadataTreeNodeChild/*:MetadataTreeNode*/ = new MetadataTreeNode(child);
      metadataTreeNodeChild.parent$pjKk = thys;
      this$.children$pjKk.push(metadataTreeNodeChild);
    });
  }/*

  /**
   * Gets the ID of this metadata tree node.
   *
   * @return the ID of this metadata tree node.
   * /
  public*/ function getId()/*:String*/ {
    return this.id$pjKk;
  }/*

  /**
   * Returns the direct children of this metadata tree node.
   *
   * @return the direct children of this metadata tree node.
   * /
  public*/ function getChildren()/*:Array*/ {
    return this.children$pjKk;
  }/*

  private*/ function setProperties(rawNodeData/*:Object*/)/*:void*/ {
    for (var property/*:String*/ in rawNodeData) {
      if (property !== "children") {
        this.properties$pjKk[property] = rawNodeData[property];
      }
    }
  }/*

  internal*/ function getProperties()/*:Object*/ {
    return this.properties$pjKk;
  }/*

  /**
   * Gets the value of the given property path of this metadata tree node.
   *
   * @param propertyPath the property path
   * @return the value of the given property path.
   * /
  public*/ function getProperty(propertyPath/*:String*/)/*:**/ {
    return com.coremedia.ui.util.ObjectUtils.getPropertyAt(this.properties$pjKk, propertyPath);
  }/*

  /**
   * Gets the direct parent of this metadata tree node.
   *
   * @return the direct parent of this metadata tree node.
   * /
  public*/ function getParent()/*:MetadataTreeNode*/ {
    return this.parent$pjKk;
  }/*

  /**
   * Gets all direct and non-direct children of this metadata tree node as an array.
   * The children are given in the order that they are visited in
   * a breadth-first traversion of the tree.
   *
   * @return all direct and non-direct children of this metadata tree node as an array.
   * /
  public*/ function getAllChildrenAsList()/*:Array*/ {
    var result/*:Array*/ = [this];
    var arrayIndex/*:int*/ = 0;
    while (arrayIndex < result.length) {
      var currentNode/*:MetadataTreeNode*/ = result[arrayIndex];
      if (currentNode.getChildren()) {
        var children/*:Array*/ = currentNode.getChildren();
        Array['prototype'].push.apply(result, children);
      }
      arrayIndex++;
    }
    return result;
  }/*


  /**
   * Gets the nearest parent of this metadata tree node by a given property (or property path).
   * The name of the property or a property path has to be given. If an optional value is provided,
   * the returned parent has a property with the given name and value. If no value is provided,
   * the parent has a property with the given name, no matter its value.
   *
   * @param propertyPath the name of the parent's property.
   * @param value optional value requirement for the parent's property.
   * @return the nearest parent node with a property of the given name (and possibly value).
   * /
  public*/ function findParentByProperty(propertyPath/*:String*/, value/*:* = undefined*/)/*:MetadataTreeNode*/ {
    return this.findParentBy(function (node/*:MetadataTreeNode*/)/*:Boolean*/ {
      return node.getProperty(propertyPath) && (value === undefined || node.getProperty(propertyPath) === value);
    });
  }/*

  /**
   * Gets the nearest parent of this metadata tree node that fulfills the
   * criteria of a given selector function. The signature of the
   * selector function has to be as follows:
   * <code>
   *   function selector(node:MetadataTreeNode):Boolean
   * </code>
   * The nearest parent for which the function returns <code>true</code> is returned.
   *
   * @param selector function that determines whether a parent node fulfills the selection criteria.
   * @return the nearest parent that fulfills the selector function's criteria, if any.
   * /
  public*/ function findParentBy(selector/*:Function*/)/*:MetadataTreeNode*/ {
    var ancestor/*:MetadataTreeNode*/ = this.parent$pjKk;
    while (ancestor) {
      if (selector(ancestor)) {
        return ancestor;
      }
      ancestor = ancestor.getParent();
    }
    return null;
  }/*

  /**
   * Gets all direct or non-direct children of this metadata tree node by a given property (or property path).
   * The name of the property or a property path has to be given. If an optional value is provided,
   * each returned child has a property of the given name and value. If no value is provided,
   * each returned child has a property with the given name, no matter its value.
   *
   * @param propertyPath the name of the children's required property.
   * @param value optional value requirement for the children's property.
   * @param includeNonDirectChildren Set to false to only search for a direct child (default: true)
   * @return array of children where each child has a property with the given name (and possibly value).
   * /
  public*/ function findChildrenByProperty(propertyPath/*:String*/, value/*:* = undefined*/, includeNonDirectChildren/*:Boolean = true*/)/*:Array*/ {if(arguments.length<=2)includeNonDirectChildren=true;
    return this.findChildrenBy(function (successor/*:MetadataTreeNode*/)/*:Boolean*/ {
      return successor.getProperty(propertyPath) && (value === undefined || successor.getProperty(propertyPath) === value);
    }, includeNonDirectChildren);
  }/*

  /**
   * Gets all direct or non-direct children of this metadata tree node that
   * fulfill the criteria of a given selector function. The signature of the
   * selector function has to be as follows:
   * <code>
   *   function selector(node:MetadataTreeNode):Boolean
   * </code>
   *
   * @param selector function that determines whether a child node fulfills the selection criteria.
   * @param includeNonDirectChildren Set to false to only search for a direct child (default: true)
   * @return array of children that fulfill the selector function's criteria.
   * /
  public*/ function findChildrenBy(selector/*:Function*/, includeNonDirectChildren/*:Boolean = true*/)/*:Array*/ {if(arguments.length<=1)includeNonDirectChildren=true;
    var result/*:Array*/ = [];

    var childrenList/*:Array*/ = includeNonDirectChildren ? this.getAllChildrenAsList() : this.getChildren();
    childrenList.forEach(function (successor/*:MetadataTreeNode*/)/*:void*/ {
      if (selector(successor)) {
        result.push(successor);
      }
    });

    return result;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      id$pjKk: null,
      parent$pjKk: null,
      properties$pjKk: null,
      constructor: MetadataTreeNode$,
      getId: getId,
      getChildren: getChildren,
      setProperties$pjKk: setProperties,
      getProperties: getProperties,
      getProperty: getProperty,
      getParent: getParent,
      getAllChildrenAsList: getAllChildrenAsList,
      findParentByProperty: findParentByProperty,
      findParentBy: findParentBy,
      findChildrenByProperty: findChildrenByProperty,
      findChildrenBy: findChildrenBy,
      requires: ["com.coremedia.ui.util.ObjectUtils"]
    };
});
