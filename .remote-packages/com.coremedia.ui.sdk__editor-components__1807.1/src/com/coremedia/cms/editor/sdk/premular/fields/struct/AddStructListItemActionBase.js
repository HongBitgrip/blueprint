Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemActionBase", function(AddStructListItemActionBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;

public class AddStructListItemActionBase extends StructNodeAction {
  public*/ function AddStructListItemActionBase$(config/*: AddStructListItemAction = null*/) {if(arguments.length<=0)config=null;
    this.super$21Ke(AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'addStructListItem')));
  }/*

  override protected*/ function isDisabledForNode(selectedNode/*:StructTreeNode*/)/*:Boolean*/ {
    // It must be a collection node or a list item node.
    return !(selectedNode.getPropertyDescriptor().collection || selectedNode.isListItemNode());
  }/*

  override protected*/ function executeOnSelectedNode(node/*:StructTreeNode*/)/*:void*/ {
    var propertyType/*:String*/ = node.getPropertyType();
    if (propertyType === com.coremedia.cap.common.CapPropertyDescriptorType.LINK) {
      // Links would be null initially, so these can only be added via drag-and-drop.
      // However, we can trigger editing, which opens the collection window with the corresponding content type.
      node.startEditing(1);
    } else {
      var initialValue/*:**/ = undefined;
      // null values are not allowed inside collections and except for integer and date
      // all other initial values will be chosen correctly
      if (propertyType === com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER) {
        initialValue = 0;
      } else if (propertyType === com.coremedia.cap.common.CapPropertyDescriptorType.DATE) {
        initialValue = new Date();
      }

      var structListItemNode/*:StructTreeNode*/ = node.getPropertyDescriptor().collection ?
              node.addAt(0, initialValue) :
        // it must be a list item node: 
              node.getParentStructTreeNode().addAt(node.getListItemIndex() + 1, initialValue);
      structListItemNode.select();
      structListItemNode.startEditing(1);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction",
      constructor: AddStructListItemActionBase$,
      super$21Ke: function() {
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
        "com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemAction"
      ]
    };
});
