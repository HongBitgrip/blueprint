Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorLocalizationUtil", function(StructEditorLocalizationUtil) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil;
import com.coremedia.cap.content.ContentTypeNames;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField')]
public class StructEditorLocalizationUtil {

  private static const*/var BUNDLE$static/*:Object*/;/* =*/function BUNDLE$static_(){BUNDLE$static=( mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField').content);};/*

  internal static*/ function localizeType$static(propertyDescriptor/*:CapPropertyDescriptor*/)/*:String*/ {
    var parts/*:Array*/ = [];
    var linkType/*:CapType*/ = com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.getLinkType(propertyDescriptor);
    if (linkType && linkType.getName() !== com.coremedia.cap.content.ContentTypeNames.CONTENT) {
      parts.push(com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(linkType.getName()));
      // leave out linkType for propertyType localization:
    }
    var localizedPropertyType/*:String*/ = BUNDLE$static[getPropertyTypeLocalizationKey$static(propertyDescriptor)];
    parts.push(localizedPropertyType);
    return parts.join(" ");
  }/*

  internal static*/ function localizeElementType$static(propertyType/*:String*/)/*:String*/ {
    return BUNDLE$static["propertyType_" + propertyType.toLowerCase() + "_text"];
  }/*

  internal static*/ function localizeTypeTooltip$static(propertyDescriptor/*:CapPropertyDescriptor*/)/*:String*/ {
    return Ext.String.format(BUNDLE$static.Action_addStructProperty_tooltip, StructEditorLocalizationUtil.localizeType(propertyDescriptor));
  }/*

  private static*/ function getPropertyTypeLocalizationKey$static(propertyType/*:CapPropertyDescriptor*/)/*:String*/ {
    var type/*:String*/ = propertyType.type;
    if (propertyType.collection) {
      type += "s";
    }
    return "propertyType_" + type.toLowerCase() + "_text";
  }/*

}*/function StructEditorLocalizationUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: StructEditorLocalizationUtil$,
      statics: {
        BUNDLE: undefined,
        localizeType: localizeType$static,
        localizeElementType: localizeElementType$static,
        localizeTypeTooltip: localizeTypeTooltip$static,
        __initStatics__: function() {
          BUNDLE$static_();
        }
      },
      requires: [
        "Ext.String",
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil",
        "com.coremedia.cap.content.ContentTypeNames",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField_properties",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"]
    };
});
