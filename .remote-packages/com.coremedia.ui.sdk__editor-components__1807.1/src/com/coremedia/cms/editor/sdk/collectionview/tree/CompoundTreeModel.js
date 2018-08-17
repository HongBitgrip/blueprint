Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.CompoundTreeModel", function(CompoundTreeModel) {/*package com.coremedia.cms.editor.sdk.collectionview.tree {

import com.coremedia.cms.editor.configuration.TreeFilter;
import com.coremedia.ui.models.NodeChildren;
import com.coremedia.ui.models.TreeModel;

import ext.Ext;

/**
 * A TreeModel composed of several subtree models. Each subtree model must use a fixed prefix for its node ids.
 * This prefix must be given on subtree model registration (see addTreeModel())
 * and it must be unique among all registered subtree models.
 * /
public class CompoundTreeModel implements TreeModel {

  private static const*/var ROOT_ID$static/*:String*/ = "compoundTreeRoot";/*
  private static const*/var ROOT$static/*:Object*/;/* =*/function ROOT$static_(){ROOT$static=(  ROOT_ID$static);};/*

  private var delegates :Array/*(TreeModel)* / =*/function delegates_(){this.delegates$kqyX=( []);}/*;
  private var treeFilters:Array =*/function treeFilters_(){this.treeFilters$kqyX=( []);}/*;

  public*/ function CompoundTreeModel$() {delegates_.call(this);treeFilters_.call(this);
    //trace('CompoundTreeModel created');
  }/*

  public*/ function getTreeModelForId(id/*:String*/)/*:TreeModel*/ {
    for (var i/* :int*/ = 0; i < this.delegates$kqyX.length; i++) {
      var treeModel/*:CompoundChildTreeModel*/ = this.delegates$kqyX[i];
      if (treeModel.getTreeId() === id) {
        return treeModel;
      }
    }
    return null;
  }/*

  public*/ function getTreeModelForModel(model/*:Object*/)/*:TreeModel*/ {
    var nodeId/*:String*/ = this.getNodeId(model);
    return this.getTreeModel(nodeId);
  }/*

  /**
   * Add the given tree model to the composed tree.
   * @param treeModel the tree model to add
   *
   *  The root node of the given subtree should be rendered only if treemodel.isRootVisible() returns true.
   * Otherwise, the only the first level child nodes should be made visible by views.
   * /
  public*/ function addTreeModel(treeModel/*:CompoundChildTreeModel*/)/*:void*/ {
    this.delegates$kqyX = [treeModel].concat(this.delegates$kqyX);
  }/*

  /**
   * Adds a tree filter that is used when the child nodes are build
   * /
  public*/ function addTreeFilter(treeFilter/*:TreeFilter*/)/*:void*/ {
    this.treeFilters$kqyX.push(treeFilter);
  }/*


  public*/ function isEditable(model/*:Object*/)/*:Boolean*/ {
    var nodeId/*:String*/ = this.getNodeId(model);
    var treeModel/*:TreeModel*/ = this.getTreeModel(nodeId);
    return treeModel.isEditable(model);
  }/*

  public*/ function isRootVisible()/*:Boolean*/{
    return false;
  }/*

  public*/ function rename(model/*:Object*/, newName/*:String*/, oldName/*:String*/, callback/*:Function*/)/*:void*/ {
    var nodeId/*:String*/ = this.getNodeId(model);
    var treeModel/*:TreeModel*/ = this.getTreeModel(nodeId);
    treeModel.rename(model, newName, oldName, callback);
  }/*

  public*/ function getRootId()/*:String*/ {
    return ROOT_ID$static;
  }/*

  public*/ function getText(nodeId/*:String*/)/*:String*/ {
    if (nodeId === ROOT_ID$static) {
      return ROOT_ID$static;
    }
    var treeModel/*:TreeModel*/ = this.getTreeModel(nodeId);
    return treeModel.getText(nodeId);
  }/*

  public*/ function getIconCls(nodeId/*:String*/)/*:String*/ {
    var treeModel/*:TreeModel*/ = this.getTreeModel(nodeId);
    return treeModel.getIconCls(nodeId);
  }/*

  public*/ function getTextCls(nodeId/*:String*/)/*:String*/ {
    var treeModel/*:TreeModel*/ = this.getTreeModel(nodeId);
    return treeModel.getTextCls(nodeId);
  }/*

  public*/ function getChildren(nodeId/*:String*/)/*:NodeChildren*/ {
    if (nodeId === ROOT_ID$static) {
      return this.getRootNodeState$kqyX();
    }
    var treeModel/*:TreeModel*/ = this.getTreeModel(nodeId);
    if (!treeModel) {
      return undefined;
    }
    var children/*:NodeChildren*/ = treeModel.getChildren(nodeId);
    if(children === undefined) {
      return undefined;
    }

    if(children) {
      return this.filter$kqyX(children);
    }
    return children;
  }/*


  public*/ function getIdPathFromModel(model/*:Object*/)/*:Array*/ {
    for (var i/* :int*/ = 0; i < this.delegates$kqyX.length; i++) {
      var treeModel/*:TreeModel*/ = this.delegates$kqyX[i];
      var path/*:Array*/ = treeModel.getIdPathFromModel(model);
      if (path === undefined) {
        return path;
      }
      if (path !== null) {
        if (!treeModel.isRootVisible()) {
          path.shift();
        }
        return [ROOT$static].concat(path);
      }
    }
    return null;
  }/*

  public*/ function getIdPath(nodeId/*:String*/)/*:Array*/ {
    return this.getIdPathFromModel(this.getNodeModel(nodeId));
  }/*

  public*/ function getNodeId(model/*:Object*/)/*:String*/ {
    if (model === ROOT$static) {
      return ROOT_ID$static;
    }
    var treeModels/*:Array*/ = this.getTreeModels$kqyX();
    for (var i/*:int*/ = 0; i < treeModels.length; i++) {
      var treeModel/*:TreeModel*/ = treeModels[i];
      var nodeId/*:String*/ = treeModel.getNodeId(model);
      if (nodeId) {
        return nodeId;
      }
    }
    return null;
  }/*

  public*/ function getNodeModel(nodeId/*:String*/)/*:Object*/ {
    if (nodeId === ROOT_ID$static) {
      return ROOT$static;
    }
    for (var i/* :int*/ = 0; i < this.delegates$kqyX.length; i++) {
      var treeModel/*:TreeModel*/ = this.delegates$kqyX[i];
      var model/*:Object*/ = treeModel.getNodeModel(nodeId);
      if (model) {
        return model;
      }
    }
    return null;
  }/*

  private*/ function getTreeModels()/*:Array*/ {
    return this.delegates$kqyX;
  }/*

  /**
   * Returns the tree model that accepts nodes with the given id format, or null if no such tree model is known
   * /
  public*/ function getTreeModel(nodeId/*:String*/)/*:TreeModel*/ {
    if (nodeId === ROOT_ID$static) {
      return this;
    }
    for (var i/* :int*/ = 0; i < this.delegates$kqyX.length; i++) {
      var treeModel/*:TreeModel*/ = this.delegates$kqyX[i];
      var model/*:Object*/ = treeModel.getNodeModel(nodeId);
      if(model === undefined) {
        return undefined;
      }
      if (model) {
        return treeModel;
      }
    }
    return null;
  }/*


  /**
   * Checks every children for removal
   * @param children the children to remove
   * /
  public*/ function filterTreeChildren(children/*:Array*/, nodeChildren/*:NodeChildren = undefined*/)/*:Array*/ {
    var filtered/*:Array*/ = [];
    for(var i/*:int*/ = 0; i<children.length; i++) {
      var doRemove/*:Boolean*/ = this.filterChild$kqyX(this.treeFilters$kqyX, children[i]);
      //ensure that the model is loaded
      if(doRemove === undefined) {
        return undefined;
      }
      if(!doRemove) {
        filtered.push(children[i]);
      }
      else if(nodeChildren) {
        var id/*:String*/ = this.getNodeId(children[i]);
        nodeChildren.removeNode(id);
      }
    }
    return filtered;
  }/*

  /**
   * Checks if the given model should be removed from the result list.
   * @param filter the filter methods to apply
   * @param child the child to apply the filter methods for.
   * @return true if the child should be filtered or undefined if the model has not been loaded yet.
   * /
  private*/ function filterChild(filter/*:Array*/, child/*:Object*/)/*:Boolean*/ {
    var id/*:String*/ = this.getNodeId(child);
    var treeModel/*:TreeModel*/ = null;
    if (id) {
      treeModel = this.getTreeModel(id);
    }
    for(var i/*:int*/ = 0; i<filter.length; i++) {
      var doRemove/*:Boolean*/ = filter[i].filter(treeModel, child);
      if(doRemove === undefined) {
        return undefined;
      }

      if(doRemove) {
        return true;
      }
    }
    return false;
  }/*

  /**
   * Calls every filter method that has been added via plugin
   * to this tree model. If one of the methods returns true,
   * the given model won't be added as tree leaf.
   *
   * @param children the children to check the filter method with
   * @return return undefined if the node or some properties of it are not loaded yet
   * /
  private*/ function filter(children/*:NodeChildren*/)/*:NodeChildren*/ {
    var childrenToFilter/*:Array*/ = [];

    //retrieve models
    for(var i/*:int*/ = 0; i<children.getChildIds().length; i++) {
      var id/*:String*/ = children.getChildIds()[i];
      var model/*:Object*/ = this.getNodeModel(id);
      childrenToFilter.push(model);
    }

    //filter models
    var filteredChildren/*:Array*/ = this.filterTreeChildren(childrenToFilter, children);
    if(!filteredChildren) {
      return undefined;
    }

    return children;
  }/*

  private*/ function getRootNodeState()/*:NodeChildren*/ {
    var childIds/*:Array*/ = [];
    var textsByChildId/*:Object*/ = {};
    var iconsByChildId/*:Object*/ = {};
    var classByChildId/*:Object*/ = {};

    var treeModels/*:Array*/ = (this.getTreeModels$kqyX().concat([])).reverse();
    var rootIndex/*:int*/ = 0;
    for (var i/*:int*/ = 0; i < treeModels.length; i++) {
      var treeModel/*:CompoundChildTreeModel*/ = treeModels[i];

      //remove disabled child trees
      if(!treeModel.isEnabled()) {
        continue;
      }

      var subTreeId/*:String*/ = treeModel.getRootId();
      if (subTreeId) {
        if(treeModel.isRootVisible()) {
          // regular tree model, we append only the root node and increment the child count
          childIds.push(subTreeId);
          textsByChildId[childIds[rootIndex]] = treeModel.getText(subTreeId);
          iconsByChildId[childIds[rootIndex]] = treeModel.getIconCls(subTreeId);
          classByChildId[childIds[rootIndex]] = treeModel.getTextCls(subTreeId);
          rootIndex++;
        } else {
          // invisible tree node, we apply the first level nodes as root nodes
          var subChildren/*:NodeChildren*/ = treeModel.getChildren(subTreeId);
          if (subChildren === undefined) {
            return undefined;
          }
          Ext.each(subChildren.getChildIds(), function(subChildId/*:String*/)/*:void*/ {
            childIds.push(subChildId);
            textsByChildId[childIds[rootIndex]] = treeModel.getText(subChildId);
            iconsByChildId[childIds[rootIndex]] = treeModel.getIconCls(subChildId);
            classByChildId[childIds[rootIndex]] = treeModel.getTextCls(subChildId);
            rootIndex++;
          });
        }
      }
    }
    return new com.coremedia.ui.models.NodeChildren(
            childIds,
            textsByChildId,
            iconsByChildId,
            classByChildId);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.models.TreeModel"],
      constructor: CompoundTreeModel$,
      getTreeModelForId: getTreeModelForId,
      getTreeModelForModel: getTreeModelForModel,
      addTreeModel: addTreeModel,
      addTreeFilter: addTreeFilter,
      isEditable: isEditable,
      isRootVisible: isRootVisible,
      rename: rename,
      getRootId: getRootId,
      getText: getText,
      getIconCls: getIconCls,
      getTextCls: getTextCls,
      getChildren: getChildren,
      getIdPathFromModel: getIdPathFromModel,
      getIdPath: getIdPath,
      getNodeId: getNodeId,
      getNodeModel: getNodeModel,
      getTreeModels$kqyX: getTreeModels,
      getTreeModel: getTreeModel,
      filterTreeChildren: filterTreeChildren,
      filterChild$kqyX: filterChild,
      filter$kqyX: filter,
      getRootNodeState$kqyX: getRootNodeState,
      statics: {
        ROOT: undefined,
        __initStatics__: function() {
          ROOT$static_();
        }
      },
      requires: [
        "Ext",
        "com.coremedia.ui.models.NodeChildren",
        "com.coremedia.ui.models.TreeModel"
      ]
    };
});
