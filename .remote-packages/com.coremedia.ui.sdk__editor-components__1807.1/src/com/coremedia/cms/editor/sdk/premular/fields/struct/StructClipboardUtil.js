Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardUtil", function(StructClipboardUtil) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.clipboard.Clipboard;

public class StructClipboardUtil {
  public static*/ function copyToClipboard$static(node/*:StructTreeNode*/)/*:void*/ {
    var clipboardValues/*:Object*/ = {};

    var value/*:**/ = node.getValue();
    var serialized/*:**/;
    if (AS3.is(value,  com.coremedia.cap.struct.Struct)) {
      serialized = (AS3.as(value,  com.coremedia.cap.struct.Struct)).toObject();
    } else if (AS3.is(value,  Array)) {
      serialized = (AS3.as(value,  Array)).map(function(element/*:**/)/*:**/ {
        return AS3.is( element,  com.coremedia.cap.struct.Struct) ? AS3.cast(com.coremedia.cap.struct.Struct,element).toObject() : element;
      });
    } else {
      serialized = value;
    }
    var property/*:CapPropertyDescriptor*/ = node.isRootNode() || node.isListItemNode() ?
            null :
            node.getPropertyDescriptor();
    var entry/*:StructClipboardEntry*/ = new com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardEntry(property, serialized);
    clipboardValues[com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardEntry.FLAVOR] = entry;

    if (node.getPropertyDescriptor().type === com.coremedia.cap.common.CapPropertyDescriptorType.LINK) {
      if (AS3.is(value,  com.coremedia.cap.content.Content)) {
        clipboardValues[com.coremedia.cms.editor.sdk.clipboard.Clipboard.CONTENTS_FLAVOR] = [value];
      } else if (AS3.is(value,  Array)) {
        clipboardValues[com.coremedia.cms.editor.sdk.clipboard.Clipboard.CONTENTS_FLAVOR] = value;
      }
    }

    com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance().setValues(clipboardValues, com.coremedia.cms.editor.sdk.clipboard.Clipboard.COPY);
  }/*
}*/function StructClipboardUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: StructClipboardUtil$,
      statics: {copyToClipboard: copyToClipboard$static},
      requires: [
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.struct.Struct"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardEntry"
      ]
    };
});
