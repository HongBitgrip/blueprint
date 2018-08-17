Ext.define("com.coremedia.cms.editor.controlroom.notification.components.WorkflowNotificationDetailsBase", function(WorkflowNotificationDetailsBase) {/*package com.coremedia.cms.editor.controlroom.notification.components {

import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.WorkflowObjectProperties;
import com.coremedia.cms.editor.notification.components.DefaultNotificationDetails;
import com.coremedia.cms.editor.notification.components.TextParametersPreProcessor;
import com.coremedia.ui.data.BeanState;

public class WorkflowNotificationDetailsBase extends DefaultNotificationDetails implements TextParametersPreProcessor {

  public*/ function WorkflowNotificationDetailsBase$(config/*:WorkflowNotificationDetails = null*/) {if(arguments.length<=0)config=null;
    this.super$Y_mu(config);
  }/*

  public*/ function preProcessTextParameters(params/*:Array*/)/*:Array*/ {
    var process/*:Process*/ =AS3.as( params[1],  com.coremedia.cap.workflow.Process);
    var workflowName/*:String*/ =AS3.as( params[2],  String);
    if (process) {
      process.load(function (process/*:Process*/)/*:void*/ {
        var state/*:BeanState*/ = process.getState();
        if (!(state === com.coremedia.ui.data.BeanState.NON_EXISTENT || state === com.coremedia.ui.data.BeanState.UNREADABLE)) {
          var workflowObjectProperties/*:WorkflowObjectProperties*/ = process.getProperties();
          if (workflowObjectProperties) {
            workflowName = workflowObjectProperties.get("subject");
          }
        }
      });
    }
    return [workflowName];
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.components.DefaultNotificationDetails",
      mixins: ["com.coremedia.cms.editor.notification.components.TextParametersPreProcessor"],
      constructor: WorkflowNotificationDetailsBase$,
      super$Y_mu: function() {
        com.coremedia.cms.editor.notification.components.DefaultNotificationDetails.prototype.constructor.apply(this, arguments);
      },
      preProcessTextParameters: preProcessTextParameters,
      requires: [
        "com.coremedia.cap.workflow.Process",
        "com.coremedia.cms.editor.notification.components.DefaultNotificationDetails",
        "com.coremedia.cms.editor.notification.components.TextParametersPreProcessor",
        "com.coremedia.ui.data.BeanState"
      ]
    };
});
