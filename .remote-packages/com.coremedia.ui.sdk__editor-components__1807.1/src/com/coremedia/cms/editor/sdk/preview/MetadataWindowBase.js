Ext.define("com.coremedia.cms.editor.sdk.preview.MetadataWindowBase", function(MetadataWindowBase) {/*package com.coremedia.cms.editor.sdk.preview {
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.TreeModel;

import ext.button.Button;
import ext.data.NodeInterface;
import ext.tree.TreePanel;

public class MetadataWindowBase extends StudioDialog {
  private var treeModel:TreeModel;
  private var showWarningsVE:ValueExpression;

  public*/ function MetadataWindowBase$(config/*:MetadataWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$9Xfm(config);

    this.getTree$9Xfm().on("load",AS3.bind( this,"expandRoot$9Xfm"));
    this.getTree$9Xfm().on("beforecollapsenode",AS3.bind( this,"beforeCollapseNode$9Xfm"));
  }/*

  private*/ function getTree()/*:TreePanel*/ {
    var tree/*:TreePanel*/ = AS3.cast(Ext.tree.Panel,this.getComponent(com.coremedia.cms.editor.sdk.preview.MetadataWindow.TREE_PANEL_ITEM_ID));
    return tree;
  }/*

  private*/ function beforeCollapseNode(node/*:NodeInterface*/, deep/*:Boolean*/)/*:Boolean*/ {
    if (deep) {
      return true;
    }

    // Force a deep collapse.
    node.collapse(true);
    // Suppress default collapse.
    return false;
  }/*

  private*/ function expandRoot()/*:void*/ {
    this.getTree$9Xfm().getRootNode().expand();
  }/*

  protected*/ function expandAll()/*:void*/ {
    var tree/*:TreePanel*/ = this.getTree$9Xfm();
    tree.expandAll();
  }/*

  protected*/ function showWarnings(warningsButton/*:Button*/)/*:void*/ {
    this.getShowWarningsValueExpression().setValue(warningsButton.pressed);
  }/*

  public*/ function getTreeModel(config/*:MetadataWindow*/)/*:TreeModel*/ {
    if (!this.treeModel$9Xfm) {
      this.treeModel$9Xfm = new com.coremedia.cms.editor.sdk.preview.MetadataWindowTreeModel(AS3.getBindable(config,"treeVE"), this.getShowWarningsValueExpression());
    }
    return this.treeModel$9Xfm;
  }/*

  public*/ function getShowWarningsValueExpression()/*:ValueExpression*/ {
    if (!this.showWarningsVE$9Xfm) {
      this.showWarningsVE$9Xfm = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(true);
    }
    return this.showWarningsVE$9Xfm;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      treeModel$9Xfm: null,
      showWarningsVE$9Xfm: null,
      constructor: MetadataWindowBase$,
      super$9Xfm: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      getTree$9Xfm: getTree,
      beforeCollapseNode$9Xfm: beforeCollapseNode,
      expandRoot$9Xfm: expandRoot,
      expandAll: expandAll,
      showWarnings: showWarnings,
      getTreeModel: getTreeModel,
      getShowWarningsValueExpression: getShowWarningsValueExpression,
      requires: [
        "Ext.tree.Panel",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.preview.MetadataWindow",
        "com.coremedia.cms.editor.sdk.preview.MetadataWindowTreeModel"
      ]
    };
});
