Ext.define("com.coremedia.cms.editor.notification.components.NotificationDetails", function(NotificationDetails) {/*package com.coremedia.cms.editor.notification.components{
import com.coremedia.cms.editor.notification.components.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class NotificationDetails extends NotificationDetailsBase{

    public static const xtype:String = "com.coremedia.cms.editor.notification.config.notificationDetails";

    public*/function NotificationDetails$(config/*:NotificationDetails = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.notification.components.NotificationDetailsBase*/ =AS3.cast(com.coremedia.cms.editor.notification.components.NotificationDetailsBase,{});
    var defaults_$1/*:NotificationDetails*/ =AS3.cast(NotificationDetails,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$VyOy(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.components.NotificationDetailsBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.notification.config.notificationDetails",
      constructor: NotificationDetails$,
      super$VyOy: function() {
        com.coremedia.cms.editor.notification.components.NotificationDetailsBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.notification.components.NotificationDetailsBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
