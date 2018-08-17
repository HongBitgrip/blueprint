Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeActionBase", function(MoveStructNodeActionBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;
import com.coremedia.ui.data.dependencies.DependencyTracker;

import ext.data.Store;

public class MoveStructNodeActionBase extends StructNodeAction {

  public*/ function MoveStructNodeActionBase$(config/*: MoveStructNodeAction = null*/) {if(arguments.length<=0)config=null;
    this.super$ygFL(AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'moveStructListItem' + AS3.getBindable(config,"direction"))));
  }/*

  private*/ function isUp()/*:Boolean*/ {
    return AS3.getBindable(AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction,this.initialConfig),"direction") === "Up";
  }/*

  override protected*/ function isDisabledForNode(selectedNode/*:StructTreeNode*/)/*:Boolean*/ {
    // Make sure to update enabledness when the tree changes.
    var store/*:Store*/ = selectedNode.getOwnerTree().getStore();
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(store, "add");
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(store, "append");
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(store, "insert");
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(store, "move");
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(store, "remove");

    return this.isUp$ygFL() ? !selectedNode.previousSibling : !selectedNode.nextSibling;
  }/*

  override protected*/ function executeOnSelectedNode(node/*:StructTreeNode*/)/*:void*/ {
    if (node.isPropertyNode()) {
      if (this.isUp$ygFL()) {
        node.moveUpProperty();
      } else {
        AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode,node.nextSibling).moveUpProperty();
      }
      node.select();
    } else if (node.isListItemNode()) {
      if (this.isUp$ygFL()) {
        node.moveUpListItem();
        AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode,node.previousSibling).select();
      } else {
        AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode,node.nextSibling).moveUpListItem();
        AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode,node.nextSibling).select();
      }
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction",
      constructor: MoveStructNodeActionBase$,
      super$ygFL: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction.prototype.constructor.apply(this, arguments);
      },
      isUp$ygFL: isUp,
      isDisabledForNode: isDisabledForNode,
      executeOnSelectedNode: executeOnSelectedNode,
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction",
        "com.coremedia.ui.data.dependencies.DependencyTracker"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode"
      ]
    };
});
