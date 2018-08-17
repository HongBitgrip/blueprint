Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.DuplicateStructNodeAction", function(DuplicateStructNodeAction) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;

public class DuplicateStructNodeAction extends StructNodeAction {
  public*/ function DuplicateStructNodeAction$(config/*: DuplicateStructNodeAction = null*/) {if(arguments.length<=0)config=null;
    this.super$cayI(AS3.cast(DuplicateStructNodeAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "duplicateStructNode")));
  }/*

  override protected*/ function isDisabledForNode(selectedNode/*:StructTreeNode*/)/*:Boolean*/ {
    return selectedNode.isRootNode();
  }/*

  override protected*/ function executeOnSelectedNode(node/*:StructTreeNode*/)/*:void*/ {
    var value/*:**/ = node.getValue();
    var parentNode/*:StructTreeNode*/ = node.getParentStructTreeNode();
    var structTreeNode/*:StructTreeNode*/;
    if (node.isPropertyNode()) {
      // duplicate a Struct property, using a new unique name:
      var propertyName/*:String*/ = node.getPropertyName();
      structTreeNode = parentNode.addProperty(node.getPropertyDescriptor(), propertyName, value);
      structTreeNode.select();
      structTreeNode.startEditing(0);
    } else if (node.isListItemNode()) {
      // insert a copy of the selected element after itself:
      structTreeNode = parentNode.addAt(node.getListItemIndex() + 1, value);
      structTreeNode.select();
      structTreeNode.startEditing(1);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction",
      constructor: DuplicateStructNodeAction$,
      super$cayI: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledForNode: isDisabledForNode,
      executeOnSelectedNode: executeOnSelectedNode,
      requires: ["com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction"],
      uses: ["com.coremedia.cms.editor.sdk.actions.ActionConfigUtil"]
    };
});
