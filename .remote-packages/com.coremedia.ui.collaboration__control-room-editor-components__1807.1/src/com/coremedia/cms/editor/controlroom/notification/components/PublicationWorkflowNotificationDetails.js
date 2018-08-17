Ext.define("com.coremedia.cms.editor.controlroom.notification.components.PublicationWorkflowNotificationDetails", function(PublicationWorkflowNotificationDetails) {/*package com.coremedia.cms.editor.controlroom.notification.components{
import com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationAction;
public class PublicationWorkflowNotificationDetails extends WorkflowNotificationDetails{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.publicationWorkflowNotificationDetails";

    public*/function PublicationWorkflowNotificationDetails$(config/*:PublicationWorkflowNotificationDetails = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails,{});
    var defaults_$1/*:PublicationWorkflowNotificationDetails*/ =AS3.cast(PublicationWorkflowNotificationDetails,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var collab_ShowPublicationWorkflowForNotificationAction_15_5_$1/*:com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationAction,{});
    config_$1.baseAction = new com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationAction(collab_ShowPublicationWorkflowForNotificationAction_15_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$5UCz(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.publicationWorkflowNotificationDetails",
      constructor: PublicationWorkflowNotificationDetails$,
      super$5UCz: function() {
        com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationAction"]
    };
});
