Ext.define("com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationAction", function(ShowPublicationWorkflowForNotificationAction) {/*package com.coremedia.cms.editor.controlroom.notification.actions{
import com.coremedia.cms.editor.controlroom.notification.actions.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ShowPublicationWorkflowForNotificationAction extends ShowPublicationWorkflowForNotificationActionBase{

    public*/function ShowPublicationWorkflowForNotificationAction$(config/*:ShowPublicationWorkflowForNotificationAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationActionBase,{});
    var defaults_$1/*:ShowPublicationWorkflowForNotificationAction*/ =AS3.cast(ShowPublicationWorkflowForNotificationAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$WppK(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationActionBase",
      constructor: ShowPublicationWorkflowForNotificationAction$,
      super$WppK: function() {
        com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
