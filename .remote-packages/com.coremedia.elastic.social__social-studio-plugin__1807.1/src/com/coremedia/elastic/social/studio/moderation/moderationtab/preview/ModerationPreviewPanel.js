Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.preview.ModerationPreviewPanel", function(ModerationPreviewPanel) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.preview{
import com.coremedia.elastic.social.studio.moderation.moderationtab.preview.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.preview.PreviewContextMenu;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ModerationPreviewPanel extends ModerationPreviewPanelBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.moderationPreviewPanel";

    public static const PREVIEW_ITEM_ID:String = "cm-moderation-preview";

    public*/function ModerationPreviewPanel$(config/*:ModerationPreviewPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.moderationtab.preview.ModerationPreviewPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.preview.ModerationPreviewPanelBase,{});
    var defaults_$1/*:ModerationPreviewPanel*/ =AS3.cast(ModerationPreviewPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined));
    AS3.setBindable(config_$1,"noPreviewAvailableMessage" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'preview_noPreviewAvailable_message_text')));
    AS3.setBindable(config_$1,"preferredDevice" , "desktopMode");
    AS3.setBindable(config_$1,"hideToolbar" , true);
    AS3.setBindable(config_$1,"hideDeviceSlider" , true);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( ModerationPreviewPanel.PREVIEW_ITEM_ID);
    var editor_PreviewContextMenu_34_5_$1/*:com.coremedia.cms.editor.sdk.preview.PreviewContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewContextMenu,{});
    config_$1.contextMenu = editor_PreviewContextMenu_34_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$4dE9(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.moderationtab.preview.ModerationPreviewPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.moderationPreviewPanel",
      constructor: ModerationPreviewPanel$,
      super$4dE9: function() {
        com.coremedia.elastic.social.studio.moderation.moderationtab.preview.ModerationPreviewPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderation: null},
      statics: {PREVIEW_ITEM_ID: "cm-moderation-preview"},
      requires: [
        "com.coremedia.cms.editor.sdk.preview.PreviewContextMenu",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.preview.ModerationPreviewPanelBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ]
    };
});
