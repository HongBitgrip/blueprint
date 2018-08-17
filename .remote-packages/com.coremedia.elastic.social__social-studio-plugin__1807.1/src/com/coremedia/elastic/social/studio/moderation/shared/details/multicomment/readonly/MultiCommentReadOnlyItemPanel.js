Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.readonly.MultiCommentReadOnlyItemPanel", function(MultiCommentReadOnlyItemPanel) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.readonly{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import ext.form.field.DisplayField;
import ext.button.Button;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.ckeditor.RichTextArea;
import com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPlugin;
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class MultiCommentReadOnlyItemPanel extends Container{

    import com.coremedia.elastic.social.studio.model.Comment;
    import com.coremedia.elastic.social.studio.model.ModeratedItem;
    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.util.EncodingUtil;

    import ext.DateUtil;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.multiCommentReadOnlyItemPanel";

    public*/function MultiCommentReadOnlyItemPanel$(config/*:MultiCommentReadOnlyItemPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:MultiCommentReadOnlyItemPanel*/ =AS3.cast(MultiCommentReadOnlyItemPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.flex = 1.0;
    AS3.setBindable(config_$1,"minHeight" , calcHeight$static(config));
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.CARD_200);
    var container_72_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_72_5_$1.itemId =net.jangaroo.ext.Exml.asString( HEADER_ITEM_ID$static);
    AS3.setBindable(container_72_5_$1,"height" , 25);
    var displayField_74_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_74_9_$1.itemId =net.jangaroo.ext.Exml.asString( HEADER_AUTHOR_NAME_ITEM_ID$static);
    AS3.setBindable(displayField_74_9_$1,"value" , com.coremedia.ui.util.EncodingUtil.encodeForHTML(AS3.getBindable(config,"authorName")));
    var displayField_76_9_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_76_9_$1,"margin" , "0 3 0 3");
    AS3.setBindable(displayField_76_9_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'curated_content_multi_comment_title_label'));
    var displayField_78_9_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_78_9_$1.itemId =net.jangaroo.ext.Exml.asString( HEADER_DATE_ITEM_ID$static);
    AS3.setBindable(displayField_78_9_$1,"value" , Ext.Date.format(AS3.getBindable(config,"creationDate"), this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dateFormat')));
    var container_80_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_80_9_$1.flex = 1.0;
    var button_81_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_81_9_$1.itemId =net.jangaroo.ext.Exml.asString( HEADER_REMOVE_BUTTON_ITEM_ID$static);
    AS3.setBindable(button_81_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'curated_content_multi_comment_remove_selection')));
    button_81_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_81_9_$1,"handler" ,AS3.bind( this,"removeContributionFromSelection$wF8I"));
    container_72_5_$1.items = [displayField_74_9_$1, displayField_76_9_$1, displayField_78_9_$1, container_80_9_$1, button_81_9_$1];
    var layout_HBox_87_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_72_5_$1,"layout" , layout_HBox_87_9_$1);
    var ui_RichTextArea_91_5_$1/*:com.coremedia.ui.ckeditor.RichTextArea*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextArea,{});
    ui_RichTextArea_91_5_$1.itemId =net.jangaroo.ext.Exml.asString( RICHTEXT_ITEM_ID$static);
    AS3.setBindable(ui_RichTextArea_91_5_$1,"minHeight" , 80.0);
    ui_RichTextArea_91_5_$1.flex = 1.0;
    var ui_RemoveCKEditorPluginsPlugin_95_9_$1/*:com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPlugin,{});
    AS3.setBindable(ui_RemoveCKEditorPluginsPlugin_95_9_$1,"plugins" , ["cmrichtextdataprocessor,cmstyles,classstyles,bbcode"]);
    var ui_BindPropertyPlugin_96_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_96_9_$1.bidirectional = false;
    ui_BindPropertyPlugin_96_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"commentText"));
    var editor_BindReadOnlyPlugin_98_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    editor_BindReadOnlyPlugin_98_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(true);
    AS3.setBindable(editor_BindReadOnlyPlugin_98_9_$1,"forceReadOnlyValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(true));
    var ui_AddCKEditorPluginsPlugin_100_9_$1/*:com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPlugin,{});
    AS3.setBindable(ui_AddCKEditorPluginsPlugin_100_9_$1,"plugins" , ["htmlwriter,elasticbbcode,link"]);
    ui_RichTextArea_91_5_$1.plugins = [ui_RemoveCKEditorPluginsPlugin_95_9_$1, ui_BindPropertyPlugin_96_9_$1, editor_BindReadOnlyPlugin_98_9_$1, ui_AddCKEditorPluginsPlugin_100_9_$1];
    var es_AttachmentPanel_104_5_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel,{});
    es_AttachmentPanel_104_5_$1.itemId =net.jangaroo.ext.Exml.asString( ATTACHMENT_ITEM_ID$static);
    AS3.setBindable(es_AttachmentPanel_104_5_$1,"contributionAdministration" , AS3.getBindable(config,"abstractContribution"));
    AS3.setBindable(es_AttachmentPanel_104_5_$1,"hidden" , !(AS3.getBindable(config,"attachments").length>0));
    AS3.setBindable(es_AttachmentPanel_104_5_$1,"attachments" , AS3.getBindable(config,"attachments"));
    config_$1.items = [container_72_5_$1, ui_RichTextArea_91_5_$1, es_AttachmentPanel_104_5_$1];
    var layout_VBox_111_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_111_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_111_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wF8I(config_$1);
  }/*

    [Bindable]
    public var abstractContribution:AbstractContributionAdministration;

    [Bindable]
    public var comment:Comment;

    [Bindable]
    public var moderatedItem:ModeratedItem;

    private static const*/var HEADER_ITEM_ID$static/*:String*/ = "header";/*
    private static const*/var HEADER_AUTHOR_NAME_ITEM_ID$static/*:String*/ = "author-field";/*
    private static const*/var HEADER_DATE_ITEM_ID$static/*:String*/ = "date-field";/*
    private static const*/var HEADER_REMOVE_BUTTON_ITEM_ID$static/*:String*/ = "remove-button";/*
    private static const*/var RICHTEXT_ITEM_ID$static/*:String*/ = "richtext";/*
    private static const*/var ATTACHMENT_ITEM_ID$static/*:String*/ = "attachment-container";/*

    private*/ function removeContributionFromSelection()/*:void*/ {
      AS3.getBindable(this,"abstractContribution").removeContributionFromSelectedItems(AS3.getBindable(this,"moderatedItem"));
    }/*

    private static*/ function calcHeight$static(config/*:MultiCommentReadOnlyItemPanel*/)/*:Number*/ {
      var height/*:int*/ = 180;
      if (AS3.getBindable(config,"attachments").length > 0) {
        height += 140;
      }
      return height;
    }/*

    [Bindable]
    public var authorName:String;


    [Bindable]
    public var creationDate:Date;


    [Bindable]
    public var commentText:String;


    [Bindable]
    public var attachments:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.elastic.social.studio.config.multiCommentReadOnlyItemPanel",
      constructor: MultiCommentReadOnlyItemPanel$,
      super$wF8I: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      removeContributionFromSelection$wF8I: removeContributionFromSelection,
      config: {
        abstractContribution: null,
        comment: null,
        moderatedItem: null,
        authorName: null,
        creationDate: null,
        commentText: null,
        attachments: null
      },
      requires: [
        "Ext.Date",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.ckeditor.RichTextArea",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPlugin",
        "com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel"]
    };
});
