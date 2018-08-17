Ext.define("com.coremedia.cap.workflow.impl.WorkflowObjectPropertiesImpl", function(WorkflowObjectPropertiesImpl) {/*package com.coremedia.cap.workflow.impl {
import com.coremedia.cap.workflow.*;
import com.coremedia.ui.data.impl.SubBean;

public class WorkflowObjectPropertiesImpl extends SubBean implements WorkflowObjectProperties {

  public*/ function WorkflowObjectPropertiesImpl$(parent/*:WorkflowObjectImpl*/, basePath/*:String*/) {
    this.super$Glq2(parent, basePath);
  }/*

  public*/ function getWorkflowObject()/*:WorkflowObject*/ {
    return AS3.as( this.getParentBean(),  com.coremedia.cap.workflow.WorkflowObject);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.SubBean",
      mixins: ["com.coremedia.cap.workflow.WorkflowObjectProperties"],
      constructor: WorkflowObjectPropertiesImpl$,
      super$Glq2: function() {
        com.coremedia.ui.data.impl.SubBean.prototype.constructor.apply(this, arguments);
      },
      getWorkflowObject: getWorkflowObject,
      requires: [
        "com.coremedia.cap.workflow.WorkflowObject",
        "com.coremedia.cap.workflow.WorkflowObjectProperties",
        "com.coremedia.ui.data.impl.SubBean"
      ]
    };
});
