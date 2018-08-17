Ext.define("com.coremedia.cms.editor.notification.actions.NotificationAction", function(NotificationAction) {/*package com.coremedia.cms.editor.notification.actions{
import com.coremedia.cms.editor.notification.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class NotificationAction extends NotificationActionBase{

    public*/function NotificationAction$(config/*:NotificationAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.notification.actions.NotificationActionBase*/ =AS3.cast(com.coremedia.cms.editor.notification.actions.NotificationActionBase,{});
    var defaults_$1/*:NotificationAction*/ =AS3.cast(NotificationAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$FnYF(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.actions.NotificationActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: NotificationAction$,
      super$FnYF: function() {
        com.coremedia.cms.editor.notification.actions.NotificationActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.notification.actions.NotificationActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
