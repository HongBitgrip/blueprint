Ext.define("com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationAction", function(ShowTranslationWorkflowForNotificationAction) {/*package com.coremedia.cms.editor.controlroom.notification.actions{
import com.coremedia.cms.editor.controlroom.notification.actions.*;
import net.jangaroo.ext.Exml;
public class ShowTranslationWorkflowForNotificationAction extends ShowTranslationWorkflowForNotificationActionBase{

    public*/function ShowTranslationWorkflowForNotificationAction$(config/*:ShowTranslationWorkflowForNotificationAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationActionBase,{});
    var defaults_$1/*:ShowTranslationWorkflowForNotificationAction*/ =AS3.cast(ShowTranslationWorkflowForNotificationAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$31Pl(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationActionBase",
      constructor: ShowTranslationWorkflowForNotificationAction$,
      super$31Pl: function() {
        com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
