Ext.define("com.coremedia.blueprint.studio.NotificationsStudioPlugin", function(NotificationsStudioPlugin) {/*package com.coremedia.blueprint.studio{
import com.coremedia.cms.editor.configuration.StudioPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.notification.NotificationsStudioPlugin;
public class NotificationsStudioPlugin extends StudioPlugin{

    public static const xtype:String = "com.coremedia.blueprint.studio.config.notification.notificationsStudioPlugin";

    public*/function NotificationsStudioPlugin$(config/*:NotificationsStudioPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.configuration.StudioPlugin*/ =AS3.cast(com.coremedia.cms.editor.configuration.StudioPlugin,{});
    var defaults_$1/*:NotificationsStudioPlugin*/ =AS3.cast(NotificationsStudioPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var notifications_NotificationsStudioPlugin_16_5_$1/*:com.coremedia.cms.editor.notification.NotificationsStudioPlugin*/ =AS3.cast(com.coremedia.cms.editor.notification.NotificationsStudioPlugin,{});
    AS3.setBindable(config_$1,"configuration" , [new com.coremedia.cms.editor.notification.NotificationsStudioPlugin(notifications_NotificationsStudioPlugin_16_5_$1)]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ZsUg(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      alias: "widget.com.coremedia.blueprint.studio.config.notification.notificationsStudioPlugin",
      constructor: NotificationsStudioPlugin$,
      super$ZsUg: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "com.coremedia.cms.editor.notification.NotificationsStudioPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
