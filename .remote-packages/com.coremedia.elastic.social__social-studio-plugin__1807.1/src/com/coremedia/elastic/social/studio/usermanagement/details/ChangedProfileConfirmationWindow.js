Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindow", function(ChangedProfileConfirmationWindow) {/*package com.coremedia.elastic.social.studio.usermanagement.details{
import com.coremedia.elastic.social.studio.usermanagement.details.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.ExtendedDisplayField;
import ext.toolbar.Toolbar;
import ext.form.field.DisplayField;
import ext.toolbar.Fill;
import ext.button.Button;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ChangedProfileConfirmationWindow extends ChangedProfileConfirmationWindowBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.ui.mixins.OverflowBehaviour;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.changedProfileConfirmationWindow";

    public static const APPLY_BUTTON_ITEM_ID:String = "cm-elastic-social-userdetail-confirm-changes-window-apply-button";

    public static const DISCARD_BUTTON_ITEM_ID:String = "cm-elastic-social-userdetail-confirm-changes-window-discard-button";

    public static const BACK_BUTTON_ITEM_ID:String = "cm-elastic-social-userdetail-confirm-changes-window-back-button";

    public static const MESSAGE_FIELD_ITEM_ID:String = "cm-elastic-social-userdetail-confirm-changes-window-message";

    public*/function ChangedProfileConfirmationWindow$(config/*:ChangedProfileConfirmationWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindowBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindowBase,{});
    var defaults_$1/*:ChangedProfileConfirmationWindow*/ =AS3.cast(ChangedProfileConfirmationWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.modal = true;
    config_$1.stateId = "changeProfileConfirmationWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.closeAction = "close";
    config_$1["id"] = com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindowBase.ID;
    config_$1.resizable = false;
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200_LIGHT.getSkin());
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_confirm_changes_title'));
    var ui_ExtendedDisplayField_45_5_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    AS3.setBindable(ui_ExtendedDisplayField_45_5_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.BREAK_WORD);
    ui_ExtendedDisplayField_45_5_$1.itemId =net.jangaroo.ext.Exml.asString( ChangedProfileConfirmationWindow.MESSAGE_FIELD_ITEM_ID);
    AS3.setBindable(ui_ExtendedDisplayField_45_5_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_confirm_changes_message'));
    config_$1.items = [ui_ExtendedDisplayField_45_5_$1];
    var toolbar_51_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var displayField_53_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_53_9_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_mail_hint_short'));
    var tbFill_55_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var button_56_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_56_9_$1.itemId =net.jangaroo.ext.Exml.asString( ChangedProfileConfirmationWindow.APPLY_BUTTON_ITEM_ID);
    button_56_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_56_9_$1,"scale" , "small");
    AS3.setBindable(button_56_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_apply_with_mail')));
    AS3.setBindable(button_56_9_$1,"handler" ,AS3.bind( this,"apply"));
    var button_61_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_61_9_$1.itemId =net.jangaroo.ext.Exml.asString( ChangedProfileConfirmationWindow.DISCARD_BUTTON_ITEM_ID);
    button_61_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_61_9_$1,"scale" , "small");
    AS3.setBindable(button_61_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_discard')));
    AS3.setBindable(button_61_9_$1,"handler" ,AS3.bind( this,"discard"));
    var button_66_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_66_9_$1.itemId =net.jangaroo.ext.Exml.asString( ChangedProfileConfirmationWindow.BACK_BUTTON_ITEM_ID);
    button_66_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_66_9_$1,"scale" , "small");
    AS3.setBindable(button_66_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_back_to_profile')));
    AS3.setBindable(button_66_9_$1,"handler" ,AS3.bind( this,"cancel"));
    toolbar_51_5_$1.items = [displayField_53_9_$1, tbFill_55_9_$1, button_56_9_$1, button_61_9_$1, button_66_9_$1];
    config_$1.fbar = toolbar_51_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kKtW(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindowBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.changedProfileConfirmationWindow",
      constructor: ChangedProfileConfirmationWindow$,
      super$kKtW: function() {
        com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderation: null},
      statics: {
        APPLY_BUTTON_ITEM_ID: "cm-elastic-social-userdetail-confirm-changes-window-apply-button",
        DISCARD_BUTTON_ITEM_ID: "cm-elastic-social-userdetail-confirm-changes-window-discard-button",
        BACK_BUTTON_ITEM_ID: "cm-elastic-social-userdetail-confirm-changes-window-back-button",
        MESSAGE_FIELD_ITEM_ID: "cm-elastic-social-userdetail-confirm-changes-window-message"
      },
      requires: [
        "Ext.button.Button",
        "Ext.form.field.Display",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Toolbar",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.usermanagement.details.ChangedProfileConfirmationWindowBase",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
