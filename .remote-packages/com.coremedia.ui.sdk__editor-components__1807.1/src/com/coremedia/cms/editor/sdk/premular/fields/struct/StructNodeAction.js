Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction", function(StructNodeAction) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cms.editor.sdk.actions.ContentUpdateAction;
import com.coremedia.ui.data.ValueExpression;

import ext.Ext;

public class StructNodeAction extends ContentUpdateAction {
  [Bindable]
  public var selectedNodeExpression:ValueExpression;

  public*/ function StructNodeAction$(config/*:StructNodeAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    this.super$DP$p(AS3.cast(com.coremedia.cms.editor.sdk.actions.ContentUpdateAction,Ext.apply({}, config, {handler:AS3.bind( this,"doExecute$DP$p") })));
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var selectedNode/*:StructTreeNode*/ = AS3.getBindable(this,"selectedNodeExpression").getValue();
    return com.coremedia.cms.editor.sdk.actions.ContentUpdateAction.prototype.isDisabledFor.call(this,contents) ||
            !selectedNode ||
            selectedNode.destroyed ||
            !this.isNodeInSync$DP$p(selectedNode) ||
            this.isDisabledForNode(selectedNode);
  }/*

  private*/ function isNodeInSync(selectedNode/*:StructTreeNode*/)/*:Boolean*/ {
    return selectedNode.isInSync();
  }/*

  protected*/ function isDisabledForNode(selectedNode/*:StructTreeNode*/)/*:Boolean*/ {
    throw new AS3.Error("abstract method");
  }/*

  private*/ function doExecute()/*:void*/ {
    var selectedNode/*:StructTreeNode*/ = AS3.getBindable(this,"selectedNodeExpression").getValue();
    if (!this.isDisabledFor(this.getContents())) { // better check again, race conditions?
      this.executeOnSelectedNode(selectedNode);
    }
  }/*

  protected*/ function executeOnSelectedNode(node/*:StructTreeNode*/)/*:void*/ {
    throw new AS3.Error("abstract method");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentUpdateAction",
      constructor: StructNodeAction$,
      super$DP$p: function() {
        com.coremedia.cms.editor.sdk.actions.ContentUpdateAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      isNodeInSync$DP$p: isNodeInSync,
      isDisabledForNode: isDisabledForNode,
      doExecute$DP$p: doExecute,
      executeOnSelectedNode: executeOnSelectedNode,
      config: {selectedNodeExpression: null},
      requires: [
        "AS3.Error",
        "Ext",
        "com.coremedia.cms.editor.sdk.actions.ContentUpdateAction"
      ]
    };
});
