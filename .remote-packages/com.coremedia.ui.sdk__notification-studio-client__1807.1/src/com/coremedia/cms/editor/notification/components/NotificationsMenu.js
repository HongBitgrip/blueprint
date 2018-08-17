Ext.define("com.coremedia.cms.editor.notification.components.NotificationsMenu", function(NotificationsMenu) {/*package com.coremedia.cms.editor.notification.components{
import com.coremedia.cms.editor.notification.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.ui.plugins.BindComponentsPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.layout.container.VBoxLayout;
import ext.toolbar.Toolbar;
import ext.toolbar.Fill;
import ext.button.Button;

    [ResourceBundle('com.coremedia.cms.editor.notification.Notifications')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 Menu / container holding the user's current notifications.

 @see com.coremedia.cms.editor.notification.model.Notification
 * /
public class NotificationsMenu extends NotificationsMenuBase{

    import com.coremedia.cms.editor.notification.NotificationsManager;
    import com.coremedia.ui.bem.SeparatorBEMEntities;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.MenuSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    import ext.Ext;
    import ext.mixin.AdvancedFocusableContainerMixin;

    public static const xtype:String = "com.coremedia.cms.editor.notification.config.notificationsMenu";

    public static const MARK_ALL_AS_READ_BTN_ITEM_ID:String = "markAllAsReadBtnItemId";

    public*/function NotificationsMenu$(config/*:NotificationsMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.notification.components.NotificationsMenuBase*/ =AS3.cast(com.coremedia.cms.editor.notification.components.NotificationsMenuBase,{});
    var defaults_$1/*:NotificationsMenu*/ =AS3.cast(NotificationsMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.MenuSkin.EMBEDDED.getSkin());
    AS3.setBindable(config_$1,"width" , 400);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.allowFocusingDisabledChildren = false;
    config_$1["handleItemOver"] = Ext.emptyFn;
    config_$1.plain = true;
    config_$1.tabNavigationMode = ext.mixin.AdvancedFocusableContainerMixin.TAB_NAVIGATION_MODE_ONLY;
    var ui_BEMPlugin_44_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_44_5_$1,"block" , com.coremedia.ui.bem.SeparatorBEMEntities.VERTICAL_SEPARATOR_BLOCK);
    AS3.setBindable(ui_BEMPlugin_44_5_$1,"defaultElement" , com.coremedia.ui.bem.SeparatorBEMEntities.VERTICAL_SEPARATOR_ELEMENT_ITEM);
    var ui_BindComponentsPlugin_46_5_$1/*:com.coremedia.ui.plugins.BindComponentsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindComponentsPlugin,{});
    AS3.setBindable(ui_BindComponentsPlugin_46_5_$1,"valueExpression" , AS3.getBindable(config,"notificationsVE"));
    AS3.setBindable(ui_BindComponentsPlugin_46_5_$1,"configBeanParameterName" , "notification");
    AS3.setBindable(ui_BindComponentsPlugin_46_5_$1,"reuseComponents" , false);
    AS3.setBindable(ui_BindComponentsPlugin_46_5_$1,"clearBeforeUpdate" , true);
    var notifications_NotificationWrapper_51_9_$1/*: com.coremedia.cms.editor.notification.components.NotificationWrapper*/ =AS3.cast(com.coremedia.cms.editor.notification.components.NotificationWrapper,{});
    notifications_NotificationWrapper_51_9_$1.buttonHandler = com.coremedia.cms.editor.notification.components.NotificationsMenuBase.notificationButtonHandler;
    notifications_NotificationWrapper_51_9_$1.buttonIconCls =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'approve'));
    AS3.setBindable(ui_BindComponentsPlugin_46_5_$1,"template" , notifications_NotificationWrapper_51_9_$1);
    var ui_BindPropertyPlugin_55_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_55_5_$1.bindTo = AS3.getBindable(config,"notificationsVE");
    ui_BindPropertyPlugin_55_5_$1.componentProperty = "height";
    ui_BindPropertyPlugin_55_5_$1.transformer = com.coremedia.cms.editor.notification.components.NotificationsMenuBase.computeHeight;
    config_$1.plugins = [ui_BEMPlugin_44_5_$1, ui_BindComponentsPlugin_46_5_$1, ui_BindPropertyPlugin_55_5_$1];
    var layout_VBox_60_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_60_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_60_5_$1);
    var toolbar_63_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_63_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.notification.components.NotificationsMenuBase.HEADER_TOOLBAR_ITEM_ID);
    toolbar_63_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.MENU_HEADER.getSkin());
    toolbar_63_5_$1["tabGuard"] = false;
    var tbFill_65_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var button_66_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_66_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    button_66_9_$1.itemId =net.jangaroo.ext.Exml.asString( NotificationsMenu.MARK_ALL_AS_READ_BTN_ITEM_ID);
    AS3.setBindable(button_66_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.notification.Notifications', 'NotificationsMenu_markAllReadBtn_text')));
    AS3.setBindable(button_66_9_$1,"handler" , com.coremedia.cms.editor.notification.components.NotificationsMenuBase.markAllAsRead);
    var ui_BindPropertyPlugin_71_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_71_13_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_71_13_$1.bindTo = com.coremedia.cms.editor.notification.NotificationsManager.getInstance().getUnreadNotificationsVE();
    ui_BindPropertyPlugin_71_13_$1.transformer = function (unreadNotifications/*:Array*/)/*:Boolean*/ {return unreadNotifications === undefined ? true : unreadNotifications.length === 0;};
    button_66_9_$1.plugins = [ui_BindPropertyPlugin_71_13_$1];
    toolbar_63_5_$1.items = [tbFill_65_9_$1, button_66_9_$1];
    config_$1.tbar = toolbar_63_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$cvCC(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.components.NotificationsMenuBase",
      alias: "widget.com.coremedia.cms.editor.notification.config.notificationsMenu",
      constructor: NotificationsMenu$,
      super$cvCC: function() {
        com.coremedia.cms.editor.notification.components.NotificationsMenuBase.prototype.constructor.apply(this, arguments);
      },
      statics: {MARK_ALL_AS_READ_BTN_ITEM_ID: "markAllAsReadBtnItemId"},
      requires: [
        "Ext",
        "Ext.button.Button",
        "Ext.layout.container.VBox",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.notification.Notifications_properties",
        "com.coremedia.cms.editor.notification.components.NotificationsMenuBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.SeparatorBEMEntities",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindComponentsPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.MenuSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "ext.mixin.AdvancedFocusableContainerMixin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.notification.NotificationsManager",
        "com.coremedia.cms.editor.notification.components.NotificationWrapper"
      ]
    };
});
