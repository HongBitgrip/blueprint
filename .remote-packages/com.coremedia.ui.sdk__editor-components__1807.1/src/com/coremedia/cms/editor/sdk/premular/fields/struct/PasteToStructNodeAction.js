Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.PasteToStructNodeAction", function(PasteToStructNodeAction) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.impl.StructTypeImpl;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;
import com.coremedia.cms.editor.sdk.clipboard.Clipboard;

import mx.resources.ResourceManager;

public class PasteToStructNodeAction extends StructNodeAction {
  public*/ function PasteToStructNodeAction$(config/*: PasteToStructNodeAction = null*/) {if(arguments.length<=0)config=null;
    this.super$lBhr(AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "pasteToStructNode")));
  }/*

  private static*/ function getStructClipboardEntry$static()/*:StructClipboardEntry*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();

    var value/*:**/ = clipboard.getValue(com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardEntry.FLAVOR, com.coremedia.cms.editor.sdk.clipboard.Clipboard.CONTENTS_FLAVOR);
    if (value === undefined) {
      return null;
    }

    if (AS3.is(value,  com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardEntry)) {
      return value;
    }
    return new com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardEntry(null, value);
  }/*

  override protected*/ function isDisabledForNode(selectedNode/*:StructTreeNode*/)/*:Boolean*/ {
    var clipboardEntry/*:StructClipboardEntry*/ = getStructClipboardEntry$static();
    if (!clipboardEntry) {
      return true;
    }

    var value/*:**/ = clipboardEntry.getValue();
    // The only restrictions apply to unstructured list item nodes.
    if (!selectedNode.isListItemNode() || selectedNode.isStructNode()) {
      return false;
    }
    // For unstructured list item nodes, only appropriate values may be pasted,
    // not properties.
    if (clipboardEntry.getPropertyDescriptor()) {
      return true;
    }
    var parentPropertyDescriptor/*:CapPropertyDescriptor*/ = selectedNode.getParentStructTreeNode().getPropertyDescriptor();
    var array/*:Array*/ =AS3.as( value,  Array);
    if (!array) {
      array = [value];
    }
    return !com.coremedia.cap.common.impl.StructTypeImpl.isValidValue(array, parentPropertyDescriptor);
  }/*

  override protected*/ function executeOnSelectedNode(node/*:StructTreeNode*/)/*:void*/ {
    var clipboardEntry/*:StructClipboardEntry*/ = getStructClipboardEntry$static();
    if (!clipboardEntry) {
      return;
    }

    if (clipboardEntry.getPropertyDescriptor()) {
      // A property. Add it to the nearest struct.
      addProperty$static(node, clipboardEntry);
    } else {
      // A value without a property specification.
      var value/*:**/ = clipboardEntry.getValue();
      if (value[com.coremedia.cap.common.impl.StructTypeImpl.DESCRIPTORS_PROPERTY]) {
        // A root struct. Add all of its properties individually.
        addAllProperties$static(node, value);
      } else {
        // An unstructured value.
        addPlainValue$static(node, value);
      }
    }
  }/*

  private static*/ function addPlainValue$static(node/*:StructTreeNode*/, value/*:**/)/*:void*/ {
    // Try to insert the value into the existing property, if the type permits it.
    var propertyNode/*:StructTreeNode*/ = node.isListItemNode() ? node.getParentStructTreeNode() : node;
    var propertyDescriptor/*:CapPropertyDescriptor*/ = propertyNode.getPropertyDescriptor();
    var valueForExistingProperty/*:**/ = null;
    var childIndexToSelect/*:Number*/ = NaN;
    var isStructNode/*:Boolean*/ =AS3.is( node.getValue(),  com.coremedia.cap.struct.Struct);
    if (!isStructNode) {
      var valueAsArray/*:Array*/ =AS3.as( value,  Array);
      if (propertyDescriptor.atomic) {
        if (valueAsArray) {
          if (valueAsArray.length === 1) {
            valueForExistingProperty = value[0];
          }
        } else {
          valueForExistingProperty = value;
        }
      } else {
        var array/*:Array*/;
        if (valueAsArray) {
          array = valueAsArray;
        } else {
          array = [value];
        }
        if (com.coremedia.cap.common.impl.StructTypeImpl.isValidValue(array, propertyDescriptor)) {
          var insertionPoint/*:Number*/ = node.isListItemNode() ? node.getListItemIndex() + 1: 0;
          var oldArray/*:Array*/ = propertyNode.getValue();
          childIndexToSelect = insertionPoint + array.length - 1;
          valueForExistingProperty = oldArray.slice(0, insertionPoint).concat(array, oldArray.slice(insertionPoint));
        }
      }
    }
    if (valueForExistingProperty && com.coremedia.cap.common.impl.StructTypeImpl.isValidValue(valueForExistingProperty, propertyDescriptor)) {
      propertyNode.replaceValue(propertyDescriptor, valueForExistingProperty);
      if (!isNaN(childIndexToSelect)) {
        newTreeNodeCreated$static(AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode,propertyNode.getChildAt(childIndexToSelect)));
      }
    } else {
      // Create a new property.
      var nodeForInsert/*:StructTreeNode*/ = isStructNode ? node : propertyNode.getParentStructTreeNode();
      var referencePropertyName/*:String*/ = isStructNode ? null : propertyNode.getPropertyName();
      var newDescriptor/*:CapPropertyDescriptor*/ = com.coremedia.cap.common.impl.StructTypeImpl.createDescriptorImplicitly(value,
              mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'new_property_text'));
      var newTreeNode/*:StructTreeNode*/ = nodeForInsert.addProperty(newDescriptor,
              referencePropertyName,
              value);
      newTreeNodeCreated$static(newTreeNode);
    }
  }/*

  private static*/ function addProperty$static(node/*:StructTreeNode*/, clipboardEntry/*:StructClipboardEntry*/)/*:StructTreeNode*/ {
    var pasteTarget/*:StructTreeNode*/;
    var referencePropertyName/*:String*/;

    if (AS3.is(node.getValue(),  com.coremedia.cap.struct.Struct)) {
      pasteTarget = node;
      referencePropertyName = null;
    } else {
      pasteTarget = node.getParentStructTreeNode();
      referencePropertyName = node.getPropertyName();
    }

    newTreeNodeCreated$static(pasteTarget.addProperty(clipboardEntry.getPropertyDescriptor(),
            referencePropertyName,
            clipboardEntry.getValue()));
  }/*

  private static*/ function addAllProperties$static(node/*:StructTreeNode*/, value/*:**/)/*:void*/ {
    var pasteTarget/*:StructTreeNode*/ = node;
    var referencePropertyName/*:String*/ = null;
    while (!(AS3.is(pasteTarget.getValue(),  com.coremedia.cap.struct.Struct))) {
      if (pasteTarget.isPropertyNode()) {
        referencePropertyName = pasteTarget.getPropertyName();
      }
      pasteTarget = pasteTarget.getParentStructTreeNode();
    }

    var lastInsertedNode/*:StructTreeNode*/ = pasteTarget.addAllProperties(value, referencePropertyName);
    if (lastInsertedNode) {
      lastInsertedNode.select();
    }
  }/*

  private static*/ function newTreeNodeCreated$static(newTreeNode/*:StructTreeNode*/)/*:void*/ {
    if (newTreeNode) {
      newTreeNode.select();
      newTreeNode.startEditing();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction",
      constructor: PasteToStructNodeAction$,
      super$lBhr: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledForNode: isDisabledForNode,
      executeOnSelectedNode: executeOnSelectedNode,
      requires: [
        "com.coremedia.cap.common.impl.StructTypeImpl",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructNodeAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardEntry",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeNode"
      ]
    };
});
