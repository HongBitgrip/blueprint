Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanel", function(UserToSearchSwitchPanel) {/*package com.coremedia.elastic.social.studio.usermanagement.details{
import com.coremedia.elastic.social.studio.usermanagement.details.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import ext.form.field.DisplayField;
import ext.Component;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.plugins.UpdateEnabledPlugin;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class UserToSearchSwitchPanel extends UserToSearchSwitchPanelBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userToSearchSwitchPanel";

    public static const NEXT_USER_BUTTON_ITEM_ID:String = "nextUser";

    public static const PREVIOUS_USER_BUTTON_ITEM_ID:String = "prevUser";

    public static const SWITCH_TO_LIST_ITEM_ID:String = "switchToList";

    public*/function UserToSearchSwitchPanel$(config/*:UserToSearchSwitchPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanelBase,{});
    var defaults_$1/*:UserToSearchSwitchPanel*/ =AS3.cast(UserToSearchSwitchPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_HBox_32_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_32_5_$1);
    var displayField_35_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_35_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanelBase.USER_NAME_FIELD_ITEM_ID);
    displayField_35_5_$1.htmlEncode = true;
    AS3.setBindable(displayField_35_5_$1,"margin" , "0 6 0 12");
    displayField_35_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD.getSkin());
    var displayField_39_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_39_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanelBase.STATUS_DISPLAY_FIELD);
    var box_41_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    box_41_5_$1.flex = 1.0;
    var ui_IconButton_43_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_43_5_$1.itemId =net.jangaroo.ext.Exml.asString( UserToSearchSwitchPanel.PREVIOUS_USER_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_43_5_$1,"scale" , "small");
    ui_IconButton_43_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_43_5_$1,"handler" ,AS3.bind( this,"showPreviousUser"));
    AS3.setBindable(ui_IconButton_43_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'arrow_left')));
    AS3.setBindable(ui_IconButton_43_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_previous_user_button')));
    AS3.setBindable(ui_IconButton_43_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_previous_user_button'));
    var ui_UpdateEnabledPlugin_51_9_$1/*:com.coremedia.ui.plugins.UpdateEnabledPlugin*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPlugin,{});
    AS3.setBindable(ui_UpdateEnabledPlugin_51_9_$1,"valueExpression" , this.getUserNavigationValueExpression().extendBy(com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanelBase.PREVIOUS_USER_PROPERTY));
    ui_IconButton_43_5_$1.plugins = [ui_UpdateEnabledPlugin_51_9_$1];
    var ui_IconButton_54_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_54_5_$1.itemId =net.jangaroo.ext.Exml.asString( UserToSearchSwitchPanel.NEXT_USER_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_54_5_$1,"scale" , "small");
    ui_IconButton_54_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_54_5_$1,"handler" ,AS3.bind( this,"showNextUser"));
    AS3.setBindable(ui_IconButton_54_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'arrow_right')));
    AS3.setBindable(ui_IconButton_54_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_next_user_button')));
    AS3.setBindable(ui_IconButton_54_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_next_user_button'));
    var ui_UpdateEnabledPlugin_62_9_$1/*: com.coremedia.ui.plugins.UpdateEnabledPlugin*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPlugin,{});
    AS3.setBindable(ui_UpdateEnabledPlugin_62_9_$1,"valueExpression" , this.getUserNavigationValueExpression().extendBy(com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanelBase.NEXT_USER_PROPERTY));
    ui_IconButton_54_5_$1.plugins = [ui_UpdateEnabledPlugin_62_9_$1];
    var ui_IconButton_65_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_65_5_$1.itemId =net.jangaroo.ext.Exml.asString( UserToSearchSwitchPanel.SWITCH_TO_LIST_ITEM_ID);
    AS3.setBindable(ui_IconButton_65_5_$1,"scale" , "small");
    ui_IconButton_65_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_65_5_$1,"handler" ,AS3.bind( this,"switchToSearchList"));
    AS3.setBindable(ui_IconButton_65_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'remove_small')));
    AS3.setBindable(ui_IconButton_65_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_back_to_search')));
    AS3.setBindable(ui_IconButton_65_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_back_to_search'));
    config_$1.items = [displayField_35_5_$1, displayField_39_5_$1, box_41_5_$1, ui_IconButton_43_5_$1, ui_IconButton_54_5_$1, ui_IconButton_65_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Dg9y(config_$1);
  }/*

    [Bindable]
    public var closeUserDetailView:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userToSearchSwitchPanel",
      constructor: UserToSearchSwitchPanel$,
      super$Dg9y: function() {
        com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {closeUserDetailView: null},
      statics: {
        NEXT_USER_BUTTON_ITEM_ID: "nextUser",
        PREVIOUS_USER_BUTTON_ITEM_ID: "prevUser",
        SWITCH_TO_LIST_ITEM_ID: "switchToList"
      },
      requires: [
        "Ext.Component",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanelBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.UpdateEnabledPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
