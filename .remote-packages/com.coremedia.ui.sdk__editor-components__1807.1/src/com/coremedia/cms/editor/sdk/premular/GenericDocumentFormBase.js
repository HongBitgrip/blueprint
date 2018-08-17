Ext.define("com.coremedia.cms.editor.sdk.premular.GenericDocumentFormBase", function(GenericDocumentFormBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.common.MarkupGrammar;
import com.coremedia.cap.common.descriptors.BlobPropertyDescriptor;
import com.coremedia.cap.common.descriptors.MarkupPropertyDescriptor;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.impl.ContentTypeImpl;
import com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyField;
import com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyField;
import com.coremedia.cms.editor.sdk.premular.fields.IntegerPropertyField;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField;
import com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField;
import com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField;
import com.coremedia.cms.editor.sdk.premular.fields.TextBlobPropertyField;
import com.coremedia.cms.editor.sdk.premular.fields.XmlPropertyField;
import com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField;
import com.coremedia.ui.data.ValueExpression;

/**
 * A form for editing documents of types for which no custom document form has been provided.
 * Depending on the document type definition, property fields are heuristically added to the form.
 * /
public class GenericDocumentFormBase extends DocumentForm {


  /**
   * Create a document form.
   * /
  public*/ function GenericDocumentFormBase$(config/*:GenericDocumentForm = null*/) {if(arguments.length<=0)config=null;
    this.super$UZU5(config);
  }/*

  internal static*/ function getContent$static(config/*:GenericDocumentForm*/)/*:Content*/ {
    if (!AS3.getBindable(config,"bindTo")) {
      throw new AS3.Error("A GenericDocumentForm must have a 'bindTo' config.");
    }
    var bindTo/*:ValueExpression*/ = AS3.getBindable(config,"bindTo");
    var content/*:Content*/ =AS3.as( bindTo.getValue(),  com.coremedia.cap.content.Content);
    if (!content) {
      throw new AS3.Error("A GenericDocumentForm must be bound to a document (Content).");
    }
    return content;
  }/*

  internal static*/ function generatePropertyEditors$static(config/*:GenericDocumentForm*/)/*:Array*/ {
    var contentType/*:ContentType*/ = GenericDocumentFormBase.getContent(config).getType();
    // we assume the bean is already loaded, otherwise the type property would be undefined:
    if (!contentType) {
      throw new AS3.Error("Unknown content type.");
    }
    var propertyEditors/*:Array*/ = [];
    var tabIndex/*:int*/ = 10;
    (AS3.as(contentType,  com.coremedia.cap.content.impl.ContentTypeImpl)).getDescriptors().forEach(function(descriptor/*:CapPropertyDescriptor*/)/*:void*/ {
      // Try to create a property editor, ...
      var propertyEditor/*:Object*/ = buildPropertyEditor$static(descriptor);
      // .. but only add it if an appropriate property editor has been found.
      if (propertyEditor) {
        propertyEditors.push(propertyEditor);
      }
    });

    return propertyEditors;
  }/*

  /**
   * Return an appropriate property field component configuration for the given
   * property descriptor.
   * 
   * @param descriptor the property descriptor
   * @return the component configuration
   * /
  private static*/ function buildPropertyEditor$static(descriptor/*:CapPropertyDescriptor*/)/*:Object*/ {
    var propertyName/*:String*/ = descriptor.name;

    var propertyField/*:Object*/;
    switch (descriptor.type) {
    case com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER:
      propertyField = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.IntegerPropertyField,{});
      break;
    case com.coremedia.cap.common.CapPropertyDescriptorType.DATE:
      propertyField = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyField,{});
      AS3.setBindable((AS3.as(propertyField,  com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyField)),"timeZoneHidden" , true);
      break;
    case com.coremedia.cap.common.CapPropertyDescriptorType.STRING:
      propertyField = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField,{});
      break;
    case com.coremedia.cap.common.CapPropertyDescriptorType.BLOB:
      var blobPropertyDescriptor/*:BlobPropertyDescriptor*/ = AS3.cast(com.coremedia.cap.common.descriptors.BlobPropertyDescriptor,descriptor);
      var mimeParts/*:Array*/ = blobPropertyDescriptor.contentType.split("/");
      switch (mimeParts[0]) {
        case "text":
          propertyField = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.TextBlobPropertyField,{});
          break;
        default:
          propertyField = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyField,{});
          AS3.setBindable(AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyField,propertyField),"contentType" , blobPropertyDescriptor.contentType);
      }
      break;
    case com.coremedia.cap.common.CapPropertyDescriptorType.LINK:
      propertyField = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField,{});
      break;
      case com.coremedia.cap.common.CapPropertyDescriptorType.MARKUP:
      if (AS3.cast(com.coremedia.cap.common.descriptors.MarkupPropertyDescriptor,descriptor).grammar === com.coremedia.cap.common.MarkupGrammar.MARKUP_GRAMMAR_RICHTEXT) {
        propertyField = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField,{});
      } else {
        propertyField = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.XmlPropertyField,{});
      }
      break;
    case com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT:
      // Omit property field. We cannot edit a whole struct property easily.
      propertyField = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField,{});
      break;
/*
    default:
      throw new Error("unknown property type: " + descriptor.type);
*/
    }
    if (propertyField) {
      propertyField.propertyName = propertyName;
    }
    return propertyField;
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.DocumentForm",
      constructor: GenericDocumentFormBase$,
      super$UZU5: function() {
        com.coremedia.cms.editor.sdk.premular.DocumentForm.prototype.constructor.apply(this, arguments);
      },
      statics: {
        getContent: getContent$static,
        generatePropertyEditors: generatePropertyEditors$static
      },
      requires: [
        "AS3.Error",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.common.MarkupGrammar",
        "com.coremedia.cap.common.descriptors.BlobPropertyDescriptor",
        "com.coremedia.cap.common.descriptors.MarkupPropertyDescriptor",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.impl.ContentTypeImpl",
        "com.coremedia.cms.editor.sdk.premular.DocumentForm"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.IntegerPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.TextBlobPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.XmlPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField"
      ]
    };
});
