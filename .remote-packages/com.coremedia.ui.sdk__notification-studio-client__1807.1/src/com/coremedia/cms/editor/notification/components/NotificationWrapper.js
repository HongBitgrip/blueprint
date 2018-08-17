Ext.define("com.coremedia.cms.editor.notification.components.NotificationWrapper", function(NotificationWrapper) {/*package com.coremedia.cms.editor.notification.components{
import com.coremedia.cms.editor.notification.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.Component;
import com.coremedia.ui.plugins.BEMMixin;
import ext.container.Container;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.components.IconButton;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.notification.Notifications')]
/**
 A wrapper component for displaying various information associated with the given
 notification. It displays the notification's state (read/unread), notification-specific details
 and a customizable button (for example for marking the notification as read).

 @see com.coremedia.cms.editor.notification.model.Notification
 @see DefaultNotificationDetails
 * /
public class NotificationWrapper extends NotificationWrapperBase{

    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.notification.config.notificationWrapper";

    public static const STATE_INDICATOR_ITEM_ID:String = "stateIndicatorItemId";

    public static const DETAILS_ITEM_ID:String = "detailsItemId";

    //used in NotificationWrapper.java
    //noinspection JSUnusedGlobalSymbols
    public static const ICON_ITEM_ID:String = "iconItemId";

    public static const BTN_ITEM_ID:String = "btnItemId";

    public*/function NotificationWrapper$(config/*:NotificationWrapper = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.notification.components.NotificationWrapperBase*/ =AS3.cast(com.coremedia.cms.editor.notification.components.NotificationWrapperBase,{});
    var defaults_$1/*:NotificationWrapper*/ =AS3.cast(NotificationWrapper,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.defaultFocus = ":focusable";
    var ui_BEMPlugin_43_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_43_5_$1,"block" , "cm-notification-wrapper");
    AS3.setBindable(ui_BEMPlugin_43_5_$1,"modifier" , this.getModifiersVE());
    var ui_BindPropertyPlugin_45_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_45_5_$1.componentProperty = "UI";
    ui_BindPropertyPlugin_45_5_$1.bindTo = this.computeNotificationUIVE();
    config_$1.plugins = [ui_BEMPlugin_43_5_$1, ui_BindPropertyPlugin_45_5_$1];
    var box_51_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    box_51_5_$1.itemId =net.jangaroo.ext.Exml.asString( NotificationWrapper.STATE_INDICATOR_ITEM_ID);
    AS3.setBindable(box_51_5_$1,"width" , 6);
    var ui_BEMMixin_54_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_54_9_$1,"bemElement" , "state-indicator");

    delete ui_BEMMixin_54_9_$1['xtype'];
    delete ui_BEMMixin_54_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(box_51_5_$1, ui_BEMMixin_54_9_$1);
    var ui_BindPropertyPlugin_57_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_57_9_$1.componentProperty = "UI";
    ui_BindPropertyPlugin_57_9_$1.bindTo = this.computeStateIndicatorUIVE();
    box_51_5_$1.plugins = [ui_BindPropertyPlugin_57_9_$1];
    var container_62_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_62_5_$1.itemId =net.jangaroo.ext.Exml.asString( NotificationWrapper.DETAILS_ITEM_ID);
    container_62_5_$1["focusable"] = true;
    container_62_5_$1.tabIndex = -1.0;
    container_62_5_$1.flex = 1.0;
    var ui_BEMMixin_67_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_67_9_$1,"bemElement" , "details");

    delete ui_BEMMixin_67_9_$1['xtype'];
    delete ui_BEMMixin_67_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(container_62_5_$1, ui_BEMMixin_67_9_$1);
    var layout_VBox_70_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_70_9_$1,"align" , "stretch");
    AS3.setBindable(container_62_5_$1,"layout" , layout_VBox_70_9_$1);
    var ui_IconButton_74_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_74_5_$1.itemId =net.jangaroo.ext.Exml.asString( NotificationWrapper.BTN_ITEM_ID);
    AS3.setBindable(ui_IconButton_74_5_$1,"scale" , "small");
    AS3.setBindable(ui_IconButton_74_5_$1,"width" , 60);
    ui_IconButton_74_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE_HIGHLIGHT.getSkin());
    AS3.setBindable(ui_IconButton_74_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.notification.Notifications', 'Notification_readBtn_text')));
    AS3.setBindable(ui_IconButton_74_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.notification.Notifications', 'Notification_readBtn_tooltip'));
    AS3.setBindable(ui_IconButton_74_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( config.buttonIconCls));
    var ui_BEMMixin_82_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_82_9_$1,"bemElement" , "btn");

    delete ui_BEMMixin_82_9_$1['xtype'];
    delete ui_BEMMixin_82_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(ui_IconButton_74_5_$1, ui_BEMMixin_82_9_$1);
    var ui_BindPropertyPlugin_85_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_85_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create('state', AS3.getBindable(config,"notification"));
    ui_BindPropertyPlugin_85_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_85_9_$1.transformer = function (value/*:String*/)/*:Boolean*/ {return value === 'READ';};
    ui_IconButton_74_5_$1.plugins = [ui_BindPropertyPlugin_85_9_$1];
    config_$1.items = [box_51_5_$1, container_62_5_$1, ui_IconButton_74_5_$1];
    var layout_HBox_94_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_94_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_HBox_94_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$m5YD(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.components.NotificationWrapperBase",
      alias: "widget.com.coremedia.cms.editor.notification.config.notificationWrapper",
      constructor: NotificationWrapper$,
      super$m5YD: function() {
        com.coremedia.cms.editor.notification.components.NotificationWrapperBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        STATE_INDICATOR_ITEM_ID: "stateIndicatorItemId",
        DETAILS_ITEM_ID: "detailsItemId",
        ICON_ITEM_ID: "iconItemId",
        BTN_ITEM_ID: "btnItemId"
      },
      requires: [
        "Ext.Component",
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.notification.Notifications_properties",
        "com.coremedia.cms.editor.notification.components.NotificationWrapperBase",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
