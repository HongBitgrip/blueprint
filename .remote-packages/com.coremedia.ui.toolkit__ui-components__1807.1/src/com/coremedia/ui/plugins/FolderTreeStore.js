Ext.define("com.coremedia.ui.plugins.FolderTreeStore", function(FolderTreeStore) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.TreeExpander;
import com.coremedia.ui.models.TreeModel;

import ext.Base;
import ext.Ext;
import ext.data.TreeStore;
import ext.tree.TreePanel;

/**
 * A special TreeLoader that creates TreeNodes incrementally on updating the tree.
 * In contrast to the ext.tree.TreeLoader it does to not remove and recreate all
 * TreeNodes if the parent node is reloaded, but adds and removes nodes incrementally.
 * /
public class FolderTreeStore extends TreeStore implements TreeExpander {

  private static const*/var PATH_SEPARATOR$static/*:String*/ = '>';/*

  private var treePanel:TreePanel;
  private var treeModel:TreeModel;
  private var expandInitially:Boolean;
  private var encode:Boolean;

  public*/ function FolderTreeStore$(treePanel/*:TreePanel*/, treeModel/*:TreeModel*/, expandInitially/*:Boolean*/, encode/*:Boolean*/) {
    this.treePanel$UvU3 = treePanel;
    this.treeModel$UvU3 = treeModel;
    this.expandInitially$UvU3 = expandInitially;
    this.encode$UvU3 = encode;

    var Model/*:Base*/ = Ext.define(null, {
      extend: com.coremedia.ui.plugins.FolderTreeNode,
      expanded: expandInitially,
      getChildren:AS3.bind( treeModel,"getChildren"),
      encode: encode
    });

    this.super$UvU3(AS3.cast(Ext.data.TreeStore,{
      model: Model,
      root: {
        id: treeModel.getRootId(),
        text: "...",
        leaf: false,
        expanded: true
      },
      proxy: new com.coremedia.ui.plugins.FolderTreeProxy(this, treePanel)
    }));
  }/*

  private*/ function computeIdPath(nodeId/*:String*/)/*:String*/ {
    // Ask the model to compute the path.
    var path/*:Array*/ = this.treeModel$UvU3.getIdPath(nodeId);
    // Convert to Ext path syntax.
    if (path === undefined) {
      return undefined;
    } else if (path === null) {
      return null;
    } else {
      return PATH_SEPARATOR$static + path.join(PATH_SEPARATOR$static);
    }
  }/*

  public*/ function expandPathTo(nodeId/*:String*/, callback/*:Function*/)/*:void*/ {var this$=this;
    var idPathValueExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeIdPath$UvU3"), nodeId);
    idPathValueExpression.loadValue(function(idPath/*:String*/)/*:void*/ {
      if (idPath) {

        // Only expand UP TO the last node in the path, do not expand the last node itself (TreePanel.expandPath() also expands the last node)
        var lastSeparatorIndex/*:int*/ = Math.max(0, idPath.lastIndexOf(PATH_SEPARATOR$static));
        idPath = idPath.substr(0, lastSeparatorIndex);

        this$.treePanel$UvU3.expandPath(idPath, {
          callback: callback,
          separator: '>'
        });
      } else {
        callback();
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.data.TreeStore",
      mixins: ["com.coremedia.ui.models.TreeExpander"],
      treePanel$UvU3: null,
      treeModel$UvU3: null,
      expandInitially$UvU3: false,
      encode$UvU3: false,
      constructor: FolderTreeStore$,
      super$UvU3: function() {
        Ext.data.TreeStore.prototype.constructor.apply(this, arguments);
      },
      computeIdPath$UvU3: computeIdPath,
      expandPathTo: expandPathTo,
      requires: [
        "Ext",
        "Ext.data.TreeStore",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.models.TreeExpander"
      ],
      uses: [
        "com.coremedia.ui.plugins.FolderTreeNode",
        "com.coremedia.ui.plugins.FolderTreeProxy"
      ]
    };
});
