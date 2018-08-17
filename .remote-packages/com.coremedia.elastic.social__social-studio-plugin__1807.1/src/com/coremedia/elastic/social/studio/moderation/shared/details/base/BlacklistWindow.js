Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistWindow", function(BlacklistWindow) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base{
import com.coremedia.elastic.social.studio.moderation.shared.details.base.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import ext.form.field.DisplayField;
import ext.form.field.TextField;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class BlacklistWindow extends BlackListWindowBase{

    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.blacklistWindow";

    public*/function BlacklistWindow$(config/*:BlacklistWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.base.BlackListWindowBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.BlackListWindowBase,{});
    var defaults_$1/*:BlacklistWindow*/ =AS3.cast(BlacklistWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.stateId = "blacklistWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"width" , 255);
    config_$1.header = false;
    AS3.setBindable(config_$1,"closable" , false);
    config_$1.resizable = false;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200_LIGHT.getSkin());
    var layout_HBox_33_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_33_5_$1);
    var displayField_36_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_36_5_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'blacklist_block_label'));
    var textField_38_5_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_38_5_$1.flex = 1.0;
    textField_38_5_$1.enableKeyEvents = true;
    textField_38_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.BlackListWindowBase.EDITOR_TEXT_FIELD_ID);
    var ui_IconButton_41_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_41_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'plus')));
    AS3.setBindable(ui_IconButton_41_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'blacklist_add_button_tooltip')));
    ui_IconButton_41_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.BlackListWindowBase.UPDATE_BUTTON_ID);
    AS3.setBindable(ui_IconButton_41_5_$1,"handler" ,AS3.bind( this,"updateBlacklistEntry"));
    config_$1.items = [displayField_36_5_$1, textField_38_5_$1, ui_IconButton_41_5_$1];
    var ui_HorizontalSpacingPlugin_47_5_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    config_$1.plugins = [ui_HorizontalSpacingPlugin_47_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$RVy3(config_$1);
  }/*

    [Bindable]
    public var richtextAreaId:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.base.BlackListWindowBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.blacklistWindow",
      constructor: BlacklistWindow$,
      super$RVy3: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.base.BlackListWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {richtextAreaId: null},
      requires: [
        "Ext.form.field.Display",
        "Ext.form.field.Text",
        "Ext.layout.container.HBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.BlackListWindowBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
