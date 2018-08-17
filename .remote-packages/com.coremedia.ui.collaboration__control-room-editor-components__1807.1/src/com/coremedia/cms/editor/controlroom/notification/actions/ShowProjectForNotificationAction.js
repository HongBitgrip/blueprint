Ext.define("com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationAction", function(ShowProjectForNotificationAction) {/*package com.coremedia.cms.editor.controlroom.notification.actions{
import com.coremedia.cms.editor.controlroom.notification.actions.*;
import net.jangaroo.ext.Exml;
public class ShowProjectForNotificationAction extends ShowProjectForNotificationActionBase{

    public*/function ShowProjectForNotificationAction$(config/*:ShowProjectForNotificationAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationActionBase,{});
    var defaults_$1/*:ShowProjectForNotificationAction*/ =AS3.cast(ShowProjectForNotificationAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$J006(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationActionBase",
      constructor: ShowProjectForNotificationAction$,
      super$J006: function() {
        com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
