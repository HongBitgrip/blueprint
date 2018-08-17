Ext.define("com.coremedia.cap.workflow.authorization.impl.ProcessDefinitionRights", function(ProcessDefinitionRights) {/*package com.coremedia.cap.workflow.authorization.impl {
[RestResource(uriTemplate="workflow/processdefinition/{id:[0-9]+}/rights;for=user_{user:[0-9]+}")]
/**
 * An internal bean representing the rights on a process definition
 * /
public class ProcessDefinitionRights extends WorkflowObjectRights {
  public*/ function ProcessDefinitionRights$(uri/*:String*/) {
    this.super$WQNz(uri);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.workflow.authorization.impl.WorkflowObjectRights",
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "workflow/processdefinition/{id:[0-9]+}/rights;for=user_{user:[0-9]+}"
        ]
      ]},
      constructor: ProcessDefinitionRights$,
      super$WQNz: function() {
        com.coremedia.cap.workflow.authorization.impl.WorkflowObjectRights.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cap.workflow.authorization.impl.WorkflowObjectRights"]
    };
});
