Ext.define("com.coremedia.cms.editor.sdk.preview.metadata.DefaultMetadataNodeRenderer", function(DefaultMetadataNodeRenderer) {/*package com.coremedia.cms.editor.sdk.preview.metadata {
import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.icons.CoreIcons')]
public class DefaultMetadataNodeRenderer implements MetadataNodeRenderer {
  private static const*/var DEFAULT_ICON_CLASS$static/*:String*/;/* =*/function DEFAULT_ICON_CLASS$static_(){DEFAULT_ICON_CLASS$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'type_object'));};/*

  public*/ function DefaultMetadataNodeRenderer$() {/*
    super()*/;
  }/*

  public*/ function canRender(metadataNode/*:MetadataTreeNode*/)/*:Boolean*/ {
    return true;
  }/*

  public*/ function renderText(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    return metadataNode.getId();
  }/*

  public*/ function renderIconCls(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    return DEFAULT_ICON_CLASS$static;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer"],
      constructor: DefaultMetadataNodeRenderer$,
      canRender: canRender,
      renderText: renderText,
      renderIconCls: renderIconCls,
      statics: {
        DEFAULT_ICON_CLASS: undefined,
        __initStatics__: function() {
          DEFAULT_ICON_CLASS$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer",
        "com.coremedia.icons.CoreIcons_properties",
        "mx.resources.ResourceManager"
      ]
    };
});
