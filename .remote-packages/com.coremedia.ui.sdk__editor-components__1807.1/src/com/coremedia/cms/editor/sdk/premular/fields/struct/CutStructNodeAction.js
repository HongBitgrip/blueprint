Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.CutStructNodeAction", function(CutStructNodeAction) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;

public class CutStructNodeAction extends StructNodeAction {
  public*/ function CutStructNodeAction$(config/*: CutStructNodeAction = null*/) {if(arguments.length<=0)config=null;
    this.super$D479(AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "cutStructNode")));
  }/*

  override protected*/ function isDisabledForNode(selectedNode/*:StructTreeNode*/)/*:Boolean*/ {
    return selectedNode.isRootNode();
  }/*

  override protected*/ function executeOnSelectedNode(node/*:StructTreeNode*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardUtil.copyToClipboard(node);

    var nodeToSelect/*:StructTreeNode*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode,node.parentNode);
    if (node.isPropertyNode()) {
      if (!node.removeProperty()) {
        return;
      }
    } else if (node.isListItemNode()) {
      node.removeListItem();
    }

    if (nodeToSelect) {
      nodeToSelect.select();
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction",
      constructor: CutStructNodeAction$,
      super$D479: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledForNode: isDisabledForNode,
      executeOnSelectedNode: executeOnSelectedNode,
      requires: ["com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardUtil",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode"
      ]
    };
});
