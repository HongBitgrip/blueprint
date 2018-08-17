Ext.define("com.coremedia.cms.editor.controlroom.notification.components.TranslationWorkflowNotificationDetails", function(TranslationWorkflowNotificationDetails) {/*package com.coremedia.cms.editor.controlroom.notification.components{
import com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationAction;
public class TranslationWorkflowNotificationDetails extends WorkflowNotificationDetails{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.translationWorkflowNotificationDetails";

    public*/function TranslationWorkflowNotificationDetails$(config/*:TranslationWorkflowNotificationDetails = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails,{});
    var defaults_$1/*:TranslationWorkflowNotificationDetails*/ =AS3.cast(TranslationWorkflowNotificationDetails,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var collab_ShowTranslationWorkflowForNotificationAction_15_5_$1/*:com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationAction,{});
    config_$1.baseAction = new com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationAction(collab_ShowTranslationWorkflowForNotificationAction_15_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hcUO(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.translationWorkflowNotificationDetails",
      constructor: TranslationWorkflowNotificationDetails$,
      super$hcUO: function() {
        com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationAction"]
    };
});
