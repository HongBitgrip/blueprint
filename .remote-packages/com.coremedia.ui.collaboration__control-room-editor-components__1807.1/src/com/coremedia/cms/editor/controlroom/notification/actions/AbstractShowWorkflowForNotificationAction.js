Ext.define("com.coremedia.cms.editor.controlroom.notification.actions.AbstractShowWorkflowForNotificationAction", function(AbstractShowWorkflowForNotificationAction) {/*package com.coremedia.cms.editor.controlroom.notification.actions{
import com.coremedia.cms.editor.controlroom.notification.actions.*;
import net.jangaroo.ext.Exml;
public class AbstractShowWorkflowForNotificationAction extends AbstractShowWorkflowForNotificationActionBase{

    public*/function AbstractShowWorkflowForNotificationAction$(config/*:AbstractShowWorkflowForNotificationAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.notification.actions.AbstractShowWorkflowForNotificationActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.actions.AbstractShowWorkflowForNotificationActionBase,{});
    var defaults_$1/*:AbstractShowWorkflowForNotificationAction*/ =AS3.cast(AbstractShowWorkflowForNotificationAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$iQNK(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.notification.actions.AbstractShowWorkflowForNotificationActionBase",
      constructor: AbstractShowWorkflowForNotificationAction$,
      super$iQNK: function() {
        com.coremedia.cms.editor.controlroom.notification.actions.AbstractShowWorkflowForNotificationActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.notification.actions.AbstractShowWorkflowForNotificationActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
