Ext.define("com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetails", function(WorkflowNotificationDetails) {/*package com.coremedia.cms.editor.controlroom.notification.components{
import com.coremedia.cms.editor.controlroom.notification.components.*;
import net.jangaroo.ext.Exml;
public class WorkflowNotificationDetails extends WorkflowNotificationDetailsBase{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.workflowNotificationDetails";

    public*/function WorkflowNotificationDetails$(config/*:WorkflowNotificationDetails = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetailsBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetailsBase,{});
    var defaults_$1/*:WorkflowNotificationDetails*/ =AS3.cast(WorkflowNotificationDetails,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$RYp7(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetailsBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.workflowNotificationDetails",
      constructor: WorkflowNotificationDetails$,
      super$RYp7: function() {
        com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetailsBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetailsBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
