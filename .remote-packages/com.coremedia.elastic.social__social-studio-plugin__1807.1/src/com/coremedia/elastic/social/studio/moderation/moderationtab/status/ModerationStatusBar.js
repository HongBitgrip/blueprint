Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBar", function(ModerationStatusBar) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.status{
import com.coremedia.elastic.social.studio.moderation.moderationtab.status.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BEMMixin;
import ext.button.Button;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ModerationStatusBar extends ModerationStatusBarBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.moderationStatusBar";

    public*/function ModerationStatusBar$(config/*:ModerationStatusBar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBarBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBarBase,{});
    var defaults_$1/*:ModerationStatusBar*/ =AS3.cast(ModerationStatusBar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FOOTER.getSkin());
    var ui_BEMPlugin_28_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_28_5_$1,"block" , "cm-elastic-social-layout-statusbar");
    config_$1.plugins = [ui_BEMPlugin_28_5_$1];
    var displayField_31_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_31_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBarBase.MESSAGE_ID);
    AS3.setBindable(displayField_31_5_$1,"html" , "\\");
    var ui_BEMMixin_34_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_34_9_$1,"bemElement" , "message");

    delete ui_BEMMixin_34_9_$1['xtype'];
    delete ui_BEMMixin_34_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(displayField_31_5_$1, ui_BEMMixin_34_9_$1);
    var button_37_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_37_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBarBase.MODERATION_STATISTICS_BUTTON_ID);
    button_37_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_37_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_statistics_window_tooltip'));
    AS3.setBindable(button_37_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_statistics_window_button_text')));
    AS3.setBindable(button_37_5_$1,"handler" ,AS3.bind( this,"openStatistics"));
    var ui_BEMMixin_43_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_43_9_$1,"bemElement" , "statistics");

    delete ui_BEMMixin_43_9_$1['xtype'];
    delete ui_BEMMixin_43_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(button_37_5_$1, ui_BEMMixin_43_9_$1);
    config_$1.items = [displayField_31_5_$1, button_37_5_$1];
    var layout_HBox_48_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_48_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_HBox_48_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7yF0(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBarBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.moderationStatusBar",
      constructor: ModerationStatusBar$,
      super$7yF0: function() {
        com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBarBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderation: null},
      requires: [
        "Ext.button.Button",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBarBase",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
