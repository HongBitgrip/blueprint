Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindow", function(AttachmentDetailWindow) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment{
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.*;
import net.jangaroo.ext.Exml;
import ext.toolbar.Toolbar;
import ext.toolbar.Spacer;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.toolbar.Fill;
import com.coremedia.ui.components.IconButton;
import ext.layout.container.VBoxLayout;
import ext.container.Container;
import ext.layout.container.HBoxLayout;
import ext.button.Button;
import com.coremedia.ui.plugins.UpdateEnabledPlugin;
import com.coremedia.ui.components.Image;
import ext.layout.container.FitLayout;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class AttachmentDetailWindow extends AttachmentDetailWindowBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.ui.data.Blob;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.PanelSkin;

    import ext.util.Format;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.attachmentDetailWindow";

    public static const IMAGE_ITEM_ID:String = "image";

    public*/function AttachmentDetailWindow$(config/*:AttachmentDetailWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase,{});
    var defaults_$1/*:AttachmentDetailWindow*/ =AS3.cast(AttachmentDetailWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.stateId = "attachmentDetailsWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"width" , 750);
    AS3.setBindable(config_$1,"height" , 700);
    config_$1.draggable = true;
    config_$1.resizable = false;
    config_$1.modal = true;
    config_$1["id"] = com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase.ID;
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'attachment_window_title'));
    config_$1.constrainHeader = true;
    var toolbar_50_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var tbSpacer_52_9_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_52_9_$1,"width" , "6px");
    var displayField_53_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_53_9_$1.labelWidth = 65.0;
    displayField_53_9_$1.itemId = "fileNameLabel";
    AS3.setBindable(displayField_53_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'attachment_window_file_name')));
    var ui_BindPropertyPlugin_57_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_57_13_$1.bindTo = this.getCurrentAttachmentBlobValueExpression().extendBy(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase.BLOB_FILE_NAME_PROPERTY);
    ui_BindPropertyPlugin_57_13_$1.transformer = function(text/*:String*/)/*:String*/ {return Ext.util.Format.htmlEncode(text);};
    displayField_53_9_$1.plugins = [ui_BindPropertyPlugin_57_13_$1];
    var tbSpacer_61_9_$1/*: ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_61_9_$1,"width" , "6px");
    var displayField_62_9_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    var ui_BindPropertyPlugin_64_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_64_13_$1.bindTo = this.getCurrentAttachmentBlobValueExpression().extendBy(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase.BLOB_FILE_SIZE_PROPERTY);
    ui_BindPropertyPlugin_64_13_$1.transformer = function(size/*:Number*/)/*:String*/ {return '(' + Math.round(size / 1024) + ' KB)';};
    displayField_62_9_$1.plugins = [ui_BindPropertyPlugin_64_13_$1];
    var tbFill_68_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var ui_IconButton_69_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_69_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'open_in_browser')));
    AS3.setBindable(ui_IconButton_69_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'attachment_window_fullscreen_button_icon_tooltip')));
    AS3.setBindable(ui_IconButton_69_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'attachment_window_fullscreen_button_icon_tooltip'));
    AS3.setBindable(ui_IconButton_69_9_$1,"handler" ,AS3.bind( this,"openImageInNewBrowserTab"));
    toolbar_50_5_$1.items = [tbSpacer_52_9_$1, displayField_53_9_$1, tbSpacer_61_9_$1, displayField_62_9_$1, tbFill_68_9_$1, ui_IconButton_69_9_$1];
    config_$1.tbar = toolbar_50_5_$1;
    var layout_VBox_78_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_78_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_78_5_$1);
    var container_83_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var layout_HBox_85_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_85_9_$1,"align" , "stretch");
    AS3.setBindable(container_83_5_$1,"layout" , layout_HBox_85_9_$1);
    var button_88_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_88_9_$1,"handler" ,AS3.bind( this,"showPreviousAttachment"));
    AS3.setBindable(button_88_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'arrow_left')));
    button_88_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase.ATTACHMENT_NAV_PREVIOUS_BUTTON_ITEM_ID);
    var ui_UpdateEnabledPlugin_92_13_$1/*:com.coremedia.ui.plugins.UpdateEnabledPlugin*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPlugin,{});
    AS3.setBindable(ui_UpdateEnabledPlugin_92_13_$1,"valueExpression" , this.getNavigationButtonValueExpression().extendBy(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase.ENABLE_PREVIOUS_ATTACHMENT_NAVIGATION_BUTTON));
    button_88_9_$1.plugins = [ui_UpdateEnabledPlugin_92_13_$1];
    var container_95_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_95_9_$1.flex = 1.0;
    AS3.setBindable(container_95_9_$1,"height" , 445);
    AS3.setBindable(container_95_9_$1,"width" , 690);
    var ui_Image_99_13_$1/*:com.coremedia.ui.components.Image*/ =AS3.cast(com.coremedia.ui.components.Image,{});
    ui_Image_99_13_$1.itemId =net.jangaroo.ext.Exml.asString( AttachmentDetailWindow.IMAGE_ITEM_ID);
    var ui_BindPropertyPlugin_101_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_101_17_$1.bindTo = this.getCurrentAttachmentBlobValueExpression().extendBy(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase.BLOB_URI_PROPERTY);
    ui_BindPropertyPlugin_101_17_$1.componentProperty = "src";
    ui_Image_99_13_$1.plugins = [ui_BindPropertyPlugin_101_17_$1];
    container_95_9_$1.items = [ui_Image_99_13_$1];
    var layout_Fit_107_13_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(container_95_9_$1,"layout" , layout_Fit_107_13_$1);
    var button_110_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_110_9_$1,"handler" ,AS3.bind( this,"showNextAttachment"));
    AS3.setBindable(button_110_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'arrow_right')));
    button_110_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase.ATTACHMENT_NAV_NEXT_BUTTON_ITEM_ID);
    var ui_UpdateEnabledPlugin_114_13_$1/*: com.coremedia.ui.plugins.UpdateEnabledPlugin*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPlugin,{});
    AS3.setBindable(ui_UpdateEnabledPlugin_114_13_$1,"valueExpression" , this.getNavigationButtonValueExpression().extendBy(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase.ENABLE_NEXT_ATTACHMENT_NAVIGATION_BUTTON));
    button_110_9_$1.plugins = [ui_UpdateEnabledPlugin_114_13_$1];
    container_83_5_$1.items = [button_88_9_$1, container_95_9_$1, button_110_9_$1];
    var es_AttachmentPanel_120_5_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel,{});
    es_AttachmentPanel_120_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase.ATTACHMENT_SLIDER_ITEM_ID);
    es_AttachmentPanel_120_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.GRID_200.getSkin());
    AS3.setBindable(es_AttachmentPanel_120_5_$1,"attachmentClickHandler" ,AS3.bind( this,"updateAttachment"));
    AS3.setBindable(es_AttachmentPanel_120_5_$1,"attachments" , AS3.getBindable(config,"attachments"));
    config_$1.items = [container_83_5_$1, es_AttachmentPanel_120_5_$1];
    var toolbar_127_5_$1/*: ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var button_129_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_129_9_$1.itemId = "cancelBtn";
    button_129_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_129_9_$1,"scale" , "small");
    AS3.setBindable(button_129_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_close')));
    AS3.setBindable(button_129_9_$1,"handler" ,AS3.bind( this,"close"));
    toolbar_127_5_$1.items = [button_129_9_$1];
    config_$1.fbar = toolbar_127_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$1I38(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;

    [Bindable]
    public var blob:Blob;

    [Bindable]
    public var attachments:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.attachmentDetailWindow",
      constructor: AttachmentDetailWindow$,
      super$1I38: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        moderation: null,
        blob: null,
        attachments: null
      },
      statics: {IMAGE_ITEM_ID: "image"},
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.Fit",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Spacer",
        "Ext.toolbar.Toolbar",
        "Ext.util.Format",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentDetailWindowBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.Image",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.UpdateEnabledPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel"]
    };
});
