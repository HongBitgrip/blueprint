Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyActionBase", function(AddStructPropertyActionBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil;

import ext.Ext;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField')]
public class AddStructPropertyActionBase extends StructNodeAction {
  private var propertyDescriptor:CapPropertyDescriptor;

  public*/ function AddStructPropertyActionBase$(config/*: AddStructPropertyAction = null*/) {if(arguments.length<=0)config=null;
    this.propertyDescriptor$y5qi = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.create({
      name:mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'new_property_text'),
      type:AS3.getBindable(config,"propertyType"),
      collection:AS3.getBindable(config,"isCollection")
    });
    var rewrittenConfig/*:AddStructPropertyAction*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,Ext.apply({}, config));
    AS3.setBindable(rewrittenConfig,"text" , com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorLocalizationUtil.localizeType(this.propertyDescriptor$y5qi));
    rewrittenConfig["tooltip"] = com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorLocalizationUtil.localizeTypeTooltip(this.propertyDescriptor$y5qi);

    this.super$y5qi(rewrittenConfig);
  }/*

  override protected*/ function isDisabledForNode(selectedNode/*:StructTreeNode*/)/*:Boolean*/ {
    return !(selectedNode.isPropertyNode() || selectedNode.isStructNode());
  }/*

  override protected*/ function executeOnSelectedNode(node/*:StructTreeNode*/)/*:void*/ {var this$=this;
    // Timeout is needed to prevent WATF-Test failures, which happen if selenium clicks on a menu item faster, than
    // the menu item actually becomes focus
    // If the menu item is clicked, the newTreeNode created and activated for editing (newTreeNode.startEditing())
    // before the delayed focus event comes, which wants to focus the menu item, then it steels the focus from the cell
    // editor, the cell becomes not focused and not editable. Therefore we wait 100 milliseconds, to let the menu item
    // receive focus event and get focus before we proceed. (Focusing menu items is important for ARIA support).
    window.setTimeout(function ()/*:void*/ {
      var newTreeNode/*:StructTreeNode*/ = node.isStructNode() ?
              this$.addStructProperty$y5qi(node) :
              this$.addStructProperty$y5qi(node.getParentStructTreeNode(), node.getPropertyName());
      newTreeNode.select();
      newTreeNode.startEditing();
    }, 100);
  }/*

  private*/ function addStructProperty(node/*:StructTreeNode*/, referencePropertyName/*:String = null*/)/*:StructTreeNode*/ {if(arguments.length<=1)referencePropertyName=null;
    return node.addProperty(this.propertyDescriptor$y5qi, referencePropertyName);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction",
      propertyDescriptor$y5qi: null,
      constructor: AddStructPropertyActionBase$,
      super$y5qi: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledForNode: isDisabledForNode,
      executeOnSelectedNode: executeOnSelectedNode,
      addStructProperty$y5qi: addStructProperty,
      requires: [
        "Ext",
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField_properties",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorLocalizationUtil"
      ]
    };
});
