Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanel", function(UserDetailsPanel) {/*package com.coremedia.elastic.social.studio.usermanagement.details{
import com.coremedia.elastic.social.studio.usermanagement.details.*;
import net.jangaroo.ext.Exml;
import ext.toolbar.Toolbar;
import ext.container.Container;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.ui.components.ExtendedDisplayField;
import ext.button.Button;
import ext.toolbar.Fill;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class UserDetailsPanel extends UserDetailsPanelBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.mixins.OverflowBehaviour;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userDetailsPanel";

    public*/function UserDetailsPanel$(config/*:UserDetailsPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase,{});
    var defaults_$1/*:UserDetailsPanel*/ =AS3.cast(UserDetailsPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    var toolbar_39_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_39_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.HEADER.getSkin());
    var es_UserToSearchSwitchPanel_41_9_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanel,{});
    es_UserToSearchSwitchPanel_41_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase.SWITCH_ITEM_ID);
    AS3.setBindable(es_UserToSearchSwitchPanel_41_9_$1,"userAdministration" , AS3.getBindable(config,"moderation").getUserAdministration());
    AS3.setBindable(es_UserToSearchSwitchPanel_41_9_$1,"closeUserDetailView" , AS3.getBindable(config,"closeUserDetailView"));
    AS3.setBindable(es_UserToSearchSwitchPanel_41_9_$1,"applyChanges" ,AS3.bind( this,"applyChangesIfNeeded"));
    es_UserToSearchSwitchPanel_41_9_$1.flex = 1.0;
    toolbar_39_5_$1.items = [es_UserToSearchSwitchPanel_41_9_$1];
    config_$1.tbar = toolbar_39_5_$1;
    var container_51_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var es_UserDetailsDataPanel_53_9_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanel,{});
    es_UserDetailsDataPanel_53_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase.USER_DETAILS_DATA_ITEM_ID);
    AS3.setBindable(es_UserDetailsDataPanel_53_9_$1,"moderation" , AS3.getBindable(config,"moderation"));
    es_UserDetailsDataPanel_53_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.CARD_200.getSkin());
    var es_UserMetaDataPanel_56_9_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanel,{});
    es_UserMetaDataPanel_56_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase.USER_META_DATA_ITEM_ID);
    AS3.setBindable(es_UserMetaDataPanel_56_9_$1,"userAdministration" , AS3.getBindable(config,"moderation").getUserAdministration());
    es_UserMetaDataPanel_56_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.CARD_200.getSkin());
    var es_UserRestrictionPanel_59_9_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanel,{});
    es_UserRestrictionPanel_59_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase.USER_RESTRICTIONS_ITEM_ID);
    AS3.setBindable(es_UserRestrictionPanel_59_9_$1,"userAdministration" , AS3.getBindable(config,"moderation").getUserAdministration());
    AS3.setBindable(es_UserRestrictionPanel_59_9_$1,"resendRegistrationConfirmation" ,AS3.bind( this,"resendRegistrationConfirmation"));
    es_UserRestrictionPanel_59_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.CARD_200.getSkin());
    container_51_5_$1.items = [es_UserDetailsDataPanel_53_9_$1, es_UserMetaDataPanel_56_9_$1, es_UserRestrictionPanel_59_9_$1];
    var ui_VerticalSpacingPlugin_65_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_65_9_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    container_51_5_$1.plugins = [ui_VerticalSpacingPlugin_65_9_$1];
    container_51_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var container_68_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var es_UserWarningContainer_70_9_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainer*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainer,{});
    es_UserWarningContainer_70_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase.STATE_MESSAGES_CONTAINER_ITEM_ID);
    var ui_ExtendedDisplayField_71_9_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    ui_ExtendedDisplayField_71_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase.RESEND_REGISTRATION_MESSAGE_DISPLAY_FIELD_ITEM_ID);
    AS3.setBindable(ui_ExtendedDisplayField_71_9_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.BREAK_WORD);
    AS3.setBindable(ui_ExtendedDisplayField_71_9_$1,"hidden" , true);
    container_68_5_$1.items = [es_UserWarningContainer_70_9_$1, ui_ExtendedDisplayField_71_9_$1];
    config_$1.items = [container_51_5_$1, container_68_5_$1];
    var toolbar_79_5_$1/*: ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_79_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FOOTER.getSkin());
    toolbar_79_5_$1["focusableContainer"] = false;
    AS3.setBindable(toolbar_79_5_$1,"dock" , "bottom");
    var button_83_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_83_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase.OPEN_EMAIL_WINDOW_BUTTON_ITEM_ID);
    button_83_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_83_9_$1,"handler" ,AS3.bind( this,"openEmailEditor"));
    AS3.setBindable(button_83_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'pencil')));
    AS3.setBindable(button_83_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'mail')));
    var tbFill_88_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var button_89_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_89_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase.DELETE_BUTTON_ITEM_ID);
    button_89_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_89_9_$1,"scale" , "small");
    AS3.setBindable(button_89_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_delete_with_mail')));
    AS3.setBindable(button_89_9_$1,"handler" ,AS3.bind( this,"anonymizeUser"));
    var button_94_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_94_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase.USER_DETAILS_APPROVE_BTN_ITEM_ID);
    button_94_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_94_9_$1,"scale" , "small");
    AS3.setBindable(button_94_9_$1,"width" , 70);
    AS3.setBindable(button_94_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_apply')));
    AS3.setBindable(button_94_9_$1,"handler" ,AS3.bind( this,"applyChanges"));
    AS3.setBindable(button_94_9_$1,"disabled" , true);
    var button_101_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_101_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_101_9_$1,"scale" , "small");
    AS3.setBindable(button_101_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_cancel')));
    AS3.setBindable(button_101_9_$1,"handler" ,AS3.bind( this,"cancel"));
    toolbar_79_5_$1.items = [button_83_9_$1, tbFill_88_9_$1, button_89_9_$1, button_94_9_$1, button_101_9_$1];
    config_$1.dockedItems = [toolbar_79_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$PAnp(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;

    [Bindable]
    public var switchToSearchList:Function;


    [Bindable]
    public var closeUserDetailView:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userDetailsPanel",
      constructor: UserDetailsPanel$,
      super$PAnp: function() {
        com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        moderation: null,
        switchToSearchList: null,
        closeUserDetailView: null
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Toolbar",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsPanelBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanel",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanel",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanel",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserToSearchSwitchPanel",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainer"
      ]
    };
});
