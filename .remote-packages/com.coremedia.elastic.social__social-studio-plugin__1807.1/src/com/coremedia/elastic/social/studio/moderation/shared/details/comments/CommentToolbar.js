Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentToolbar", function(CommentToolbar) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments{
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.ckeditor.RichTextAction;
import ext.toolbar.Separator;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButton;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class CommentToolbar extends CommentToolbarBase{

    import com.coremedia.elastic.social.studio.model.BlacklistAdministration;
    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.commentToolbar";

    public*/function CommentToolbar$(config/*:CommentToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentToolbarBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentToolbarBase,{});
    var defaults_$1/*:CommentToolbar*/ =AS3.cast(CommentToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.enableOverflow = false;
    config_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentToolbarBase.RICHTEXT_TOOLBAR_ITEMID);
    config_$1.defaultButtonUI =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    var ui_IconButton_36_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    var ui_RichTextAction_38_9_$1/*:com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_38_9_$1,"commandName" , "undo");
    ui_IconButton_36_5_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_38_9_$1);
    var ui_IconButton_41_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    var ui_RichTextAction_43_9_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_43_9_$1,"commandName" , "redo");
    ui_IconButton_41_5_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_43_9_$1);
    var tbSeparator_46_5_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var es_BlacklistToolbarButton_47_5_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButton*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButton,{});
    AS3.setBindable(es_BlacklistToolbarButton_47_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'blacklist_open_button_tooltop'));
    AS3.setBindable(es_BlacklistToolbarButton_47_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'blacklist_open_button_tooltop')));
    AS3.setBindable(es_BlacklistToolbarButton_47_5_$1,"blacklistAdministration" , AS3.getBindable(config,"blacklistAdministration"));
    AS3.setBindable(es_BlacklistToolbarButton_47_5_$1,"richTextAreaId" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"richTextAreaId")));
    var tbSeparator_52_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_53_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    var ui_RichTextAction_55_9_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_55_9_$1,"commandName" , "bold");
    ui_IconButton_53_5_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_55_9_$1);
    var ui_IconButton_58_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    var ui_RichTextAction_60_9_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_60_9_$1,"commandName" , "italic");
    ui_IconButton_58_5_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_60_9_$1);
    var ui_IconButton_63_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_63_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'quote_button_tooltip'));
    var ui_RichTextAction_66_9_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_66_9_$1,"commandName" , "blockquote");
    ui_IconButton_63_5_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_66_9_$1);
    var ui_IconButton_69_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    var ui_RichTextAction_71_9_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_71_9_$1,"commandName" , "link");
    ui_IconButton_69_5_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_71_9_$1);
    var ui_IconButton_74_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    var ui_RichTextAction_76_9_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_76_9_$1,"commandName" , "unlink");
    ui_IconButton_74_5_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_76_9_$1);
    config_$1.items = [ui_IconButton_36_5_$1, ui_IconButton_41_5_$1, tbSeparator_46_5_$1, es_BlacklistToolbarButton_47_5_$1, tbSeparator_52_5_$1, ui_IconButton_53_5_$1, ui_IconButton_58_5_$1, ui_IconButton_63_5_$1, ui_IconButton_69_5_$1, ui_IconButton_74_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$N2d3(config_$1);
  }/*

    [Bindable]
    public var abstractContribution:AbstractContributionAdministration;

    [Bindable]
    public var blacklistAdministration:BlacklistAdministration;

    [Bindable]
    public var richTextAreaId:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentToolbarBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.commentToolbar",
      constructor: CommentToolbar$,
      super$N2d3: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentToolbarBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        abstractContribution: null,
        blacklistAdministration: null,
        richTextAreaId: null
      },
      requires: [
        "Ext.toolbar.Separator",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentToolbarBase",
        "com.coremedia.ui.ckeditor.RichTextAction",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButton"]
    };
});
