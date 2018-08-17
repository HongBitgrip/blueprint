Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel", function(AttachmentPanel) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment{
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.*;
import net.jangaroo.ext.Exml;
import ext.toolbar.Toolbar;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
public class AttachmentPanel extends AttachmentPanelBase{

    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.attachmentPanel";

    public*/function AttachmentPanel$(config/*:AttachmentPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanelBase,{});
    var defaults_$1/*:AttachmentPanel*/ =AS3.cast(AttachmentPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var toolbar_27_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_27_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanelBase.DETAIL_ATTACHMENT_TOOLBAR_ITEM_ID);
    toolbar_27_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FIELD.getSkin());
    var layout_HBox_30_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_30_9_$1,"overflowHandler" , "scroller");
    AS3.setBindable(toolbar_27_5_$1,"layout" , layout_HBox_30_9_$1);
    var ui_HorizontalSpacingPlugin_33_9_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    toolbar_27_5_$1.plugins = [ui_HorizontalSpacingPlugin_33_9_$1];
    config_$1.items = [toolbar_27_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$F7Qz(config_$1);
  }/*

    [Bindable]
    public var contributionAdministration:AbstractContributionAdministration;

    [Bindable]
    public var attachmentClickHandler:Function;

    [Bindable]
    public var attachments:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.attachmentPanel",
      constructor: AttachmentPanel$,
      super$F7Qz: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contributionAdministration: null,
        attachmentClickHandler: null,
        attachments: null
      },
      requires: [
        "Ext.layout.container.HBox",
        "Ext.toolbar.Toolbar",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanelBase",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
