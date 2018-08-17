Ext.define("com.coremedia.elastic.social.studio.metadata.CommentMetadataNodeRenderer", function(CommentMetadataNodeRenderer) {/*package com.coremedia.elastic.social.studio.metadata {
import com.coremedia.cms.editor.sdk.preview.MetadataHelper;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;
import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.Review;
import com.coremedia.ui.data.Bean;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.icons.CoreIcons')]
[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class CommentMetadataNodeRenderer implements MetadataNodeRenderer {
  public*/ function CommentMetadataNodeRenderer$() {/*
    super()*/;
  }/*

  public*/ function canRender(metadataNode/*:MetadataTreeNode*/)/*:Boolean*/ {
    return AS3.is( com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(metadataNode),  com.coremedia.elastic.social.studio.model.Comment);
  }/*

  public*/ function renderText(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    if (this.canRender(metadataNode)) {
      var beanMetadataValue/*:Bean*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(metadataNode);
      if (AS3.is(beanMetadataValue,  com.coremedia.elastic.social.studio.model.Comment)) {
        var comment/*:Comment*/ = (AS3.as(beanMetadataValue,  com.coremedia.elastic.social.studio.model.Comment));
        var readableState/*:Boolean*/ = comment.getState().readable;
        if (readableState === false) {
          return Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Content_notReadable_text'), comment.getId());
        } else {
          if (AS3.is(comment,  com.coremedia.elastic.social.studio.model.Review)) {
            return (AS3.as(comment,  com.coremedia.elastic.social.studio.model.Review)).getTitle() + " (" + mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_scope_review_text') +")";
          } else {
            return comment.getSubject() + " (" + mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_filter_panel_scope_comment_text') +")";
          }
        }
      }
    }
    return undefined;
  }/*

  public*/ function renderIconCls(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    if (this.canRender(metadataNode)) {
      var beanMetadataValue/*:Bean*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(metadataNode);
      if (AS3.is(beanMetadataValue,  com.coremedia.elastic.social.studio.model.Comment)) {
        var comment/*:Comment*/ = (AS3.as(beanMetadataValue,  com.coremedia.elastic.social.studio.model.Comment));
        var readableState/*:Boolean*/ = comment.getState().readable;
        if (readableState === false) {
          return mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'no_rights');
        } else {
          if (AS3.is(comment,  com.coremedia.elastic.social.studio.model.Review)) {
            return mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'review');
          } else {
            return mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'comment');
          }
        }
      }
    }
    return undefined;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer"],
      constructor: CommentMetadataNodeRenderer$,
      canRender: canRender,
      renderText: renderText,
      renderIconCls: renderIconCls,
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.preview.MetadataHelper",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.Review"
      ]
    };
});
