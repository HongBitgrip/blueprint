Ext.define("com.coremedia.cms.editor.notification.RegisterNotificationDetailsPluginBase", function(RegisterNotificationDetailsPluginBase) {/*package com.coremedia.cms.editor.notification {
import com.coremedia.cms.editor.configuration.StudioPlugin;
import com.coremedia.ui.i18n.ResourceBundle;

import ext.Component;

import mx.resources.IResourceBundle;

import mx.resources.ResourceManager;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.notification.Notifications')]
public class RegisterNotificationDetailsPluginBase extends StudioPlugin {

  public*/ function RegisterNotificationDetailsPluginBase$(config/*:RegisterNotificationDetailsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$cO7R(config);

    addAdditionalResourceBundles$static(AS3.getBindable(config,"resourceBundles"));

    registerDetailsComponentConfig$static(AS3.getBindable(config,"notificationType"), AS3.getBindable(config,"notificationDetailsComponentConfig"));
  }/*

  private static*/ function registerDetailsComponentConfig$static(notificationType/*:String*/, notificationDetailsComponentConfig/*:Component*/)/*:void*/ {
    if (notificationType && notificationDetailsComponentConfig) {
      com.coremedia.cms.editor.notification.NotificationsManager.getInstance().registerNotificationDetailsComponentConfig(notificationType,
              notificationDetailsComponentConfig);
    }
  }/*

  private static*/ function addAdditionalResourceBundles$static(resourceBundles/*:Array*/)/*:void*/ {
    if (resourceBundles &&AS3.is( resourceBundles,  Array)) {
      resourceBundles.forEach(function (bundle/*:IResourceBundle*/)/*:void*/ {
        com.coremedia.ui.i18n.ResourceBundle.overrideProperties(mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.notification.Notifications'), bundle);
      });
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      metadata: {"": ["PublicApi"]},
      constructor: RegisterNotificationDetailsPluginBase$,
      super$cO7R: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "com.coremedia.cms.editor.notification.Notifications_properties",
        "com.coremedia.ui.i18n.ResourceBundle",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.notification.NotificationsManager"]
    };
});
