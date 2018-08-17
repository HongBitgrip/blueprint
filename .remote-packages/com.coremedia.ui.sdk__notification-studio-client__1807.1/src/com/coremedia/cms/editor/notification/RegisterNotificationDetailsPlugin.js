Ext.define("com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin", function(RegisterNotificationDetailsPlugin) {/*package com.coremedia.cms.editor.notification{
import com.coremedia.cms.editor.notification.*;
import ext.Component;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A plugin to register a custom display component (more specifically, its component config)
 for a specific notification type. This component is then used instead of the
 DefaultNotificationDetails

 @see com.coremedia.cms.editor.notification.model.Notification
 @see com.coremedia.cms.editor.notification.components.DefaultNotificationDetails
 * /
public class RegisterNotificationDetailsPlugin extends RegisterNotificationDetailsPluginBase{

    public*/function RegisterNotificationDetailsPlugin$(config/*:RegisterNotificationDetailsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.notification.RegisterNotificationDetailsPluginBase*/ =AS3.cast(com.coremedia.cms.editor.notification.RegisterNotificationDetailsPluginBase,{});
    var defaults_$1/*:RegisterNotificationDetailsPlugin*/ =AS3.cast(RegisterNotificationDetailsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bWlg(config_$1);
  }/*

    /**
     The notification type for which details are registered.
     * /
    [Bindable]
    public var notificationType:String;


    /**
     A custom component config for a displaying the details of notifications of the given type.
     * /
    [Bindable]
    public var notificationDetailsComponentConfig:ext.Component;


    /**
     Additional resource bundles where properties for notification text localizations
     and notification icon CSS classes can be found.
     * /
    [Bindable]
    public var resourceBundles:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.RegisterNotificationDetailsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: RegisterNotificationDetailsPlugin$,
      super$bWlg: function() {
        com.coremedia.cms.editor.notification.RegisterNotificationDetailsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        notificationType: null,
        notificationDetailsComponentConfig: null,
        resourceBundles: null
      },
      requires: [
        "com.coremedia.cms.editor.notification.RegisterNotificationDetailsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
