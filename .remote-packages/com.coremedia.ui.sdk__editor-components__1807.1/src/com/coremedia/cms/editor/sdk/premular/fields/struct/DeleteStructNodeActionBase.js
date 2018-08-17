Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeActionBase", function(DeleteStructNodeActionBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;

public class DeleteStructNodeActionBase extends StructNodeAction {
  public*/ function DeleteStructNodeActionBase$(config/*: DeleteStructNodeAction = null*/) {if(arguments.length<=0)config=null;
    this.super$yxil(AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "deleteStructNode")));
  }/*

  override protected*/ function isDisabledForNode(selectedNode/*:StructTreeNode*/)/*:Boolean*/ {
    return selectedNode.isRootNode();
  }/*

  override protected*/ function executeOnSelectedNode(node/*:StructTreeNode*/)/*:void*/ {
    var nodeToSelect/*:StructTreeNode*/;
    if (node.isPropertyNode()) {
      if (!node.isCollection() && node.getPropertyType() === com.coremedia.cap.common.CapPropertyDescriptorType.LINK &&
              node.getValue()) {
        // Instead of deleting the whole link property, just set the value to null.
        node.clearProperty();
        return;
      }

      nodeToSelect = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode,node.nextSibling || node.previousSibling || node.parentNode);
      if (!node.removeProperty()) {
        return;
      }
    } else if (node.isListItemNode()) {
      nodeToSelect = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode,node.nextSibling ? node : node.previousSibling || node.parentNode);
      node.removeListItem();
    }
    if (nodeToSelect && node !== nodeToSelect) {
      nodeToSelect.select();
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction",
      constructor: DeleteStructNodeActionBase$,
      super$yxil: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledForNode: isDisabledForNode,
      executeOnSelectedNode: executeOnSelectedNode,
      requires: [
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode"
      ]
    };
});
