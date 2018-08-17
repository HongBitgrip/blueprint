Ext.define("com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin", function(ElasticSocialStudioPlugin) {/*package com.coremedia.elastic.social.studio{
import com.coremedia.elastic.social.studio.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuToolbar;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.container.Container;
import ext.button.Button;
import com.coremedia.cms.editor.sdk.actions.OpenTabAction;
import com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab;
import com.coremedia.cms.editor.sdk.preview.PreviewContextMenu;
import com.coremedia.elastic.social.studio.moderation.ShowInModerationMenuItem;
import com.coremedia.elastic.social.studio.moderation.ApproveCommentMenuItem;
import com.coremedia.elastic.social.studio.moderation.RejectCommentMenuItem;
import com.coremedia.cms.editor.configuration.RegisterRestResource;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ElasticSocialStudioPlugin extends ElasticSocialStudioPluginBase{

    import com.coremedia.elastic.social.studio.model.impl.ArchiveItemImpl;
    import com.coremedia.elastic.social.studio.model.impl.CommentImpl;
    import com.coremedia.elastic.social.studio.model.impl.ModeratedItemImpl;
    import com.coremedia.elastic.social.studio.model.impl.NotesImpl;
    import com.coremedia.elastic.social.studio.model.impl.ReviewImpl;
    import com.coremedia.elastic.social.studio.model.impl.UserImpl;

    import mx.resources.ResourceManager;

    public*/function ElasticSocialStudioPlugin$(config/*:ElasticSocialStudioPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.ElasticSocialStudioPluginBase*/ =AS3.cast(com.coremedia.elastic.social.studio.ElasticSocialStudioPluginBase,{});
    var defaults_$1/*:ElasticSocialStudioPlugin*/ =AS3.cast(ElasticSocialStudioPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_ExtensionsMenuToolbar_30_5_$1/*:com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuToolbar,{});
    var ui_AddItemsPlugin_32_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var container_34_13_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var button_36_17_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_36_17_$1.itemId = "moderationButton";
    AS3.setBindable(button_36_17_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_moderation_tooltip_text'));
    AS3.setBindable(button_36_17_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'moderation')));
    AS3.setBindable(button_36_17_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_moderation')));
    var editor_OpenTabAction_41_21_$1/*:com.coremedia.cms.editor.sdk.actions.OpenTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenTabAction,{});
    AS3.setBindable(editor_OpenTabAction_41_21_$1,"singleton" , true);
    var es_ElasticSocialMainTab_43_25_$1/*:com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab,{});
    AS3.setBindable(editor_OpenTabAction_41_21_$1,"tab" , es_ElasticSocialMainTab_43_25_$1);
    button_36_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenTabAction(editor_OpenTabAction_41_21_$1);
    container_34_13_$1.items = [button_36_17_$1];
    AS3.setBindable(ui_AddItemsPlugin_32_9_$1,"containers" , [container_34_13_$1]);
    var ui_AddItemsPlugin_52_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var container_54_13_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var button_56_17_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_56_17_$1.itemId = "userListButton";
    AS3.setBindable(button_56_17_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_user_management_tooltip_text'));
    AS3.setBindable(button_56_17_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'user_administration')));
    AS3.setBindable(button_56_17_$1,"handler" ,AS3.bind( this,"showUserManagementList"));
    AS3.setBindable(button_56_17_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_user_management')));
    container_54_13_$1.items = [button_56_17_$1];
    AS3.setBindable(ui_AddItemsPlugin_52_9_$1,"containers" , [container_54_13_$1]);
    editor_ExtensionsMenuToolbar_30_5_$1.plugins = [ui_AddItemsPlugin_32_9_$1, ui_AddItemsPlugin_52_9_$1];
    var editor_PreviewContextMenu_67_5_$1/*:com.coremedia.cms.editor.sdk.preview.PreviewContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewContextMenu,{});
    var ui_AddItemsPlugin_69_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var es_ShowInModerationMenuItem_71_13_$1/*:com.coremedia.elastic.social.studio.moderation.ShowInModerationMenuItem*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.ShowInModerationMenuItem,{});
    var es_ApproveCommentMenuItem_72_13_$1/*:com.coremedia.elastic.social.studio.moderation.ApproveCommentMenuItem*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.ApproveCommentMenuItem,{});
    var es_RejectCommentMenuItem_73_13_$1/*:com.coremedia.elastic.social.studio.moderation.RejectCommentMenuItem*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.RejectCommentMenuItem,{});
    AS3.setBindable(ui_AddItemsPlugin_69_9_$1,"items" , [es_ShowInModerationMenuItem_71_13_$1, es_ApproveCommentMenuItem_72_13_$1, es_RejectCommentMenuItem_73_13_$1]);
    editor_PreviewContextMenu_67_5_$1.plugins = [ui_AddItemsPlugin_69_9_$1];
    editor_PreviewContextMenu_67_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    AS3.setBindable(config_$1,"rules" , [editor_ExtensionsMenuToolbar_30_5_$1, editor_PreviewContextMenu_67_5_$1]);
    var editor_RegisterRestResource_81_5_$1/*:com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_81_5_$1,"beanClass" , com.coremedia.elastic.social.studio.model.impl.CommentImpl);
    var editor_RegisterRestResource_82_5_$1/*: com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_82_5_$1,"beanClass" , com.coremedia.elastic.social.studio.model.impl.ReviewImpl);
    var editor_RegisterRestResource_83_5_$1/*: com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_83_5_$1,"beanClass" , com.coremedia.elastic.social.studio.model.impl.ArchiveItemImpl);
    var editor_RegisterRestResource_84_5_$1/*: com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_84_5_$1,"beanClass" , com.coremedia.elastic.social.studio.model.impl.NotesImpl);
    var editor_RegisterRestResource_85_5_$1/*: com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_85_5_$1,"beanClass" , com.coremedia.elastic.social.studio.model.impl.UserImpl);
    var editor_RegisterRestResource_86_5_$1/*: com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_86_5_$1,"beanClass" , com.coremedia.elastic.social.studio.model.impl.ModeratedItemImpl);
    AS3.setBindable(config_$1,"configuration" , [new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_81_5_$1), new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_82_5_$1), new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_83_5_$1), new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_84_5_$1), new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_85_5_$1), new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_86_5_$1)]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$F_W5(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.ElasticSocialStudioPluginBase",
      constructor: ElasticSocialStudioPlugin$,
      super$F_W5: function() {
        com.coremedia.elastic.social.studio.ElasticSocialStudioPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "com.coremedia.cms.editor.configuration.RegisterRestResource",
        "com.coremedia.cms.editor.sdk.actions.OpenTabAction",
        "com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuToolbar",
        "com.coremedia.cms.editor.sdk.preview.PreviewContextMenu",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPluginBase",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.impl.ArchiveItemImpl",
        "com.coremedia.elastic.social.studio.model.impl.CommentImpl",
        "com.coremedia.elastic.social.studio.model.impl.ModeratedItemImpl",
        "com.coremedia.elastic.social.studio.model.impl.NotesImpl",
        "com.coremedia.elastic.social.studio.model.impl.ReviewImpl",
        "com.coremedia.elastic.social.studio.model.impl.UserImpl",
        "com.coremedia.elastic.social.studio.moderation.ApproveCommentMenuItem",
        "com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab",
        "com.coremedia.elastic.social.studio.moderation.RejectCommentMenuItem",
        "com.coremedia.elastic.social.studio.moderation.ShowInModerationMenuItem"
      ]
    };
});
