Ext.define("com.coremedia.cms.editor.notification.components.NotificationsButton", function(NotificationsButton) {/*package com.coremedia.cms.editor.notification.components{
import com.coremedia.cms.editor.notification.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BadgePlugin;
import com.coremedia.ui.plugins.BEMPlugin;
/**
 Button providing a drop-down NotificationsMenu with the user's current notifications.

 @see com.coremedia.cms.editor.notification.model.Notification
 @see NotificationsMenu
 * /
public class NotificationsButton extends NotificationsButtonBase{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const COMPONENT_ID:String = "notificationsButton";
    public static const xtype:String = "com.coremedia.cms.editor.notification.config.notificationsButton";

    public*/function NotificationsButton$(config/*:NotificationsButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.notification.components.NotificationsButtonBase*/ =AS3.cast(com.coremedia.cms.editor.notification.components.NotificationsButtonBase,{});
    var defaults_$1/*:NotificationsButton*/ =AS3.cast(NotificationsButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId = "notificationsBtnItemId";
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons','inbox')));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.notification.Notifications', 'NotificationsButton_text')));
    config_$1["id"] = NotificationsButton.COMPONENT_ID;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.MAIN_NAVIGATION.getSkin());
    AS3.setBindable(config_$1,"arrowVisible" , false);
    var ui_BindPropertyPlugin_33_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_33_5_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_33_5_$1.bindTo = this.getNotificationsVE();
    ui_BindPropertyPlugin_33_5_$1.transformer = function (notifications/*:Array*/)/*:Boolean*/ {return notifications.length === 0;};
    var ui_BadgePlugin_36_5_$1/*:com.coremedia.ui.plugins.BadgePlugin*/ =AS3.cast(com.coremedia.ui.plugins.BadgePlugin,{});
    ui_BadgePlugin_36_5_$1.bindTo = this.getUnreadNotificationsVE();
    ui_BadgePlugin_36_5_$1.maxValue = 99.0;
    ui_BadgePlugin_36_5_$1.inverted = true;
    ui_BadgePlugin_36_5_$1.x = -2.0;
    ui_BadgePlugin_36_5_$1.y = 3.0;
    var ui_BEMPlugin_41_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_41_5_$1,"block" , "cm-notifications-button");
    config_$1.plugins = [ui_BindPropertyPlugin_33_5_$1, ui_BadgePlugin_36_5_$1, ui_BEMPlugin_41_5_$1];
    var notifications_NotificationsMenu_45_5_$1/*: com.coremedia.cms.editor.notification.components.NotificationsMenu*/ =AS3.cast(com.coremedia.cms.editor.notification.components.NotificationsMenu,{});
    AS3.setBindable(notifications_NotificationsMenu_45_5_$1,"notificationsVE" , this.getNotificationsVE());
    config_$1.menu = notifications_NotificationsMenu_45_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8UsV(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.components.NotificationsButtonBase",
      alias: "widget.com.coremedia.cms.editor.notification.config.notificationsButton",
      constructor: NotificationsButton$,
      super$8UsV: function() {
        com.coremedia.cms.editor.notification.components.NotificationsButtonBase.prototype.constructor.apply(this, arguments);
      },
      statics: {COMPONENT_ID: "notificationsButton"},
      requires: [
        "com.coremedia.cms.editor.notification.components.NotificationsButtonBase",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BadgePlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.notification.components.NotificationsMenu"]
    };
});
