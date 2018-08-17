Ext.define("com.coremedia.cms.editor.notification.components.NotificationToast", function(NotificationToast) {/*package com.coremedia.cms.editor.notification.components{
import com.coremedia.ui.components.AnimatedNotification;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.notification.components.NotificationWrapper;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.layout.container.FitLayout;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 A fleeting toast displaying the given notification.

 @see com.coremedia.cms.editor.notification.model.Notification
 * /
public class NotificationToast extends AnimatedNotification{

    import com.coremedia.cms.editor.notification.model.Notification;
    import com.coremedia.ui.skins.TipSkin;

    public static const xtype:String = "com.coremedia.cms.editor.notification.config.notificationToast";

    public*/function NotificationToast$(config/*:NotificationToast = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.AnimatedNotification*/ =AS3.cast(com.coremedia.ui.components.AnimatedNotification,{});
    var defaults_$1/*:NotificationToast*/ =AS3.cast(NotificationToast,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"position" , "lt");
    AS3.setBindable(config_$1,"yOffset" , 4.0);
    AS3.setBindable(config_$1,"xOffset" , 37.0);
    AS3.setBindable(config_$1,"target" , "actions-toolbar");
    AS3.setBindable(config_$1,"isMouseAware" , true);
    config_$1.hideAnchor = true;
    AS3.setBindable(config_$1,"minHeight" , 60.0);
    AS3.setBindable(config_$1,"width" , 400);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TipSkin.EMBEDDING.getSkin());
    var notifications_NotificationWrapper_42_5_$1/*:com.coremedia.cms.editor.notification.components.NotificationWrapper*/ =AS3.cast(com.coremedia.cms.editor.notification.components.NotificationWrapper,{});
    AS3.setBindable(notifications_NotificationWrapper_42_5_$1,"notification" , AS3.getBindable(config,"notification"));
    notifications_NotificationWrapper_42_5_$1.buttonHandler =AS3.bind( this,"destroy");
    notifications_NotificationWrapper_42_5_$1.buttonIconCls =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'remove'));
    var ui_BEMPlugin_46_9_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_46_9_$1,"block" , "cm-notification-wrapper");
    AS3.setBindable(ui_BEMPlugin_46_9_$1,"modifier" , "toast");
    notifications_NotificationWrapper_42_5_$1.plugins = [ui_BEMPlugin_46_9_$1];
    notifications_NotificationWrapper_42_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [notifications_NotificationWrapper_42_5_$1];
    var layout_Fit_53_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_53_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zY2X(config_$1);
  }/*

    /**
     * The notification as the underlying model.
     * /
    [Bindable]
    public var notification:Notification;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AnimatedNotification",
      alias: "widget.com.coremedia.cms.editor.notification.config.notificationToast",
      constructor: NotificationToast$,
      super$zY2X: function() {
        com.coremedia.ui.components.AnimatedNotification.prototype.constructor.apply(this, arguments);
      },
      config: {notification: null},
      requires: [
        "Ext.layout.container.Fit",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.AnimatedNotification",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.skins.TipSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.notification.components.NotificationWrapper"]
    };
});
