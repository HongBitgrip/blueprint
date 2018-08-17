Ext.define("com.coremedia.cms.editor.notification.NotificationsStudioPlugin", function(NotificationsStudioPlugin) {/*package com.coremedia.cms.editor.notification{
import com.coremedia.cms.editor.notification.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.desktop.HeaderToolbar;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.container.Container;
import com.coremedia.cms.editor.notification.components.NotificationsButton;
import ext.Component;
import com.coremedia.cms.editor.configuration.RegisterRestResource;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.notification.Notifications')]
/**
 A plugin that enables Studio Notifications for the current Studio. If enabled
 notifications for the current user are accessible via the NotificationsManager.
 In addition, a NotificationsButton in the Studio's HeaderToolbar provides
 a drop down menu with the user's current notifications.

 @see com.coremedia.cms.editor.notification.model.Notification
 * /
public class NotificationsStudioPlugin extends NotificationsStudioPluginBase{

    import com.coremedia.cms.editor.notification.rest.impl.NotificationImpl;
    import com.coremedia.cms.editor.sdk.desktop.HeaderToolbar;

    import mx.resources.ResourceManager;

    public*/function NotificationsStudioPlugin$(config/*:NotificationsStudioPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.notification.NotificationsStudioPluginBase*/ =AS3.cast(com.coremedia.cms.editor.notification.NotificationsStudioPluginBase,{});
    var defaults_$1/*:NotificationsStudioPlugin*/ =AS3.cast(NotificationsStudioPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_HeaderToolbar_43_5_$1/*:com.coremedia.cms.editor.sdk.desktop.HeaderToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.HeaderToolbar,{});
    var ui_AddItemsPlugin_45_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var container_47_13_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_47_13_$1.defaultFocus = ":focusable";
    container_47_13_$1["ariaRole"] = "region";
    container_47_13_$1.ariaLabel =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.notification.Notifications', 'NotificationsRegion_label'));
    var notifications_NotificationsButton_52_17_$1/*:com.coremedia.cms.editor.notification.components.NotificationsButton*/ =AS3.cast(com.coremedia.cms.editor.notification.components.NotificationsButton,{});
    notifications_NotificationsButton_52_17_$1["ariaRole"] = "menuitem";
    container_47_13_$1.items = [notifications_NotificationsButton_52_17_$1];
    AS3.setBindable(ui_AddItemsPlugin_45_9_$1,"items" , [container_47_13_$1]);
    var component_57_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_57_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.HeaderToolbar.USER_MENU_BUTTON_ITEM_ID);
    AS3.setBindable(ui_AddItemsPlugin_45_9_$1,"before" , [component_57_13_$1]);
    editor_HeaderToolbar_43_5_$1.plugins = [ui_AddItemsPlugin_45_9_$1];
    AS3.setBindable(config_$1,"rules" , [editor_HeaderToolbar_43_5_$1]);
    var editor_RegisterRestResource_65_5_$1/*:com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_65_5_$1,"beanClass" , com.coremedia.cms.editor.notification.rest.impl.NotificationImpl);
    AS3.setBindable(config_$1,"configuration" , [new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_65_5_$1)]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$pmaK(config_$1);
  }/*

    /**
     Lists additional resource bundles where properties for notification text localizations
     and notification icon CSS classes can be found.
     * /
    [Bindable]
    public var resourceBundles:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.NotificationsStudioPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: NotificationsStudioPlugin$,
      super$pmaK: function() {
        com.coremedia.cms.editor.notification.NotificationsStudioPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {resourceBundles: null},
      requires: [
        "Ext.Component",
        "Ext.container.Container",
        "com.coremedia.cms.editor.configuration.RegisterRestResource",
        "com.coremedia.cms.editor.notification.NotificationsStudioPluginBase",
        "com.coremedia.cms.editor.notification.Notifications_properties",
        "com.coremedia.cms.editor.sdk.desktop.HeaderToolbar",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.notification.components.NotificationsButton",
        "com.coremedia.cms.editor.notification.rest.impl.NotificationImpl"
      ]
    };
});
