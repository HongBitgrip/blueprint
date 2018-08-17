Ext.define("com.coremedia.cms.editor.sdk.preview.metadata.PropertyMetadataNodeRenderer", function(PropertyMetadataNodeRenderer) {/*package com.coremedia.cms.editor.sdk.preview.metadata {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.preview.MetadataHelper;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.icons.CoreIcons')]
public class PropertyMetadataNodeRenderer implements MetadataNodeRenderer {
  private static const*/var PROPERTY_NODE_ICON_CLASS$static/*:String*/;/* =*/function PROPERTY_NODE_ICON_CLASS$static_(){PROPERTY_NODE_ICON_CLASS$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'arrow_right'));};/*

  public*/ function PropertyMetadataNodeRenderer$() {/*
    super()*/;
  }/*

  public*/ function canRender(metadataNode/*:MetadataTreeNode*/)/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.preview.MetadataHelper.getPropertyMetadataValue(metadataNode) &&AS3.is(
            com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(com.coremedia.cms.editor.sdk.preview.MetadataHelper.getFirstBeanParentNode(metadataNode)),  com.coremedia.cap.content.Content);
  }/*

  public*/ function renderText(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    if (this.canRender(metadataNode)) {
      var propertyName/*:String*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getPropertyMetadataValue(metadataNode);
      var firstBeanParentNode/*:MetadataTreeNode*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getFirstBeanParentNode(metadataNode);
      var content/*:Content*/ =AS3.as( com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(firstBeanParentNode),  com.coremedia.cap.content.Content);
      if (content && content.getState().readable && content.getType()) {
        var shortenedPropertyName/*:String*/ = propertyName.indexOf('.') >= 0 ? propertyName.substring(propertyName.indexOf('.') + 1) : propertyName;
        return com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getLocalizedLabel(content.getType().getName(), shortenedPropertyName);
      } else {
        return propertyName;
      }
    }
    return undefined;
  }/*

  public*/ function renderIconCls(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    if (this.canRender(metadataNode)) {
      return PROPERTY_NODE_ICON_CLASS$static;
    }
    return undefined;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer"],
      constructor: PropertyMetadataNodeRenderer$,
      canRender: canRender,
      renderText: renderText,
      renderIconCls: renderIconCls,
      statics: {
        PROPERTY_NODE_ICON_CLASS: undefined,
        __initStatics__: function() {
          PROPERTY_NODE_ICON_CLASS$static_();
        }
      },
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer",
        "com.coremedia.icons.CoreIcons_properties",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.preview.MetadataHelper",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"
      ]
    };
});
