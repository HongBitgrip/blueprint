Ext.define("com.coremedia.cms.editor.notification.NotificationsStudioPluginBase", function(NotificationsStudioPluginBase) {/*package com.coremedia.cms.editor.notification {
import com.coremedia.cms.editor.configuration.StudioPlugin;
import com.coremedia.ui.i18n.ResourceBundle;

import mx.resources.IResourceBundle;

import mx.resources.ResourceManager;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.notification.Notifications')]
public class NotificationsStudioPluginBase extends StudioPlugin {
  
  public*/ function NotificationsStudioPluginBase$(config/*:NotificationsStudioPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$Mze5(config);

    addAdditionalResourceBundles$static(AS3.getBindable(config,"resourceBundles"));

    com.coremedia.cms.editor.notification.NotificationsManager.getInstance().startNotificationTracking();
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
      constructor: NotificationsStudioPluginBase$,
      super$Mze5: function() {
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
