Ext.define("com.coremedia.cms.editor.sdk.preview.metadata.ContentMetadataNodeRenderer", function(ContentMetadataNodeRenderer) {/*package com.coremedia.cms.editor.sdk.preview.metadata {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.preview.MetadataHelper;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.data.Bean;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ContentMetadataNodeRenderer implements MetadataNodeRenderer {
  public*/ function ContentMetadataNodeRenderer$() {/*
    super()*/;
  }/*

  public*/ function canRender(metadataNode/*:MetadataTreeNode*/)/*:Boolean*/ {
    return AS3.is( com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(metadataNode),  com.coremedia.cap.content.Content);
  }/*

  public*/ function renderText(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    if (this.canRender(metadataNode)) {
      var beanMetadataValue/*:Bean*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(metadataNode);
      if (AS3.is(beanMetadataValue,  com.coremedia.cap.content.Content)) {
        return ContentMetadataNodeRenderer.renderTextForContent(AS3.cast(com.coremedia.cap.content.Content,beanMetadataValue));
      }
    }
    return undefined;
  }/*

  public static*/ function renderTextForContent$static(content/*:Content*/)/*:String*/ {
    var readableState/*:Boolean*/ = content.getState().readable;
    if (readableState === false) {
      return com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableName(content);
    }
    return content.getName();
  }/*

  public*/ function renderIconCls(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    if (this.canRender(metadataNode)) {
      var beanMetadataValue/*:Bean*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(metadataNode);
      if (AS3.is(beanMetadataValue,  com.coremedia.cap.content.Content)) {
        return ContentMetadataNodeRenderer.renderIconClsForContent(AS3.cast(com.coremedia.cap.content.Content,beanMetadataValue));
      }
    }
    return undefined;
  }/*

  public static*/ function renderIconClsForContent$static(content/*:Content*/)/*:String*/ {
    var readableState/*:Boolean*/ = content.getState().readable;
    if (readableState === false) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'no_rights');
    }
    return com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(content.getType());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer"],
      constructor: ContentMetadataNodeRenderer$,
      canRender: canRender,
      renderText: renderText,
      renderIconCls: renderIconCls,
      statics: {
        renderTextForContent: renderTextForContent$static,
        renderIconClsForContent: renderIconClsForContent$static
      },
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer",
        "com.coremedia.icons.CoreIcons_properties",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.preview.MetadataHelper",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
