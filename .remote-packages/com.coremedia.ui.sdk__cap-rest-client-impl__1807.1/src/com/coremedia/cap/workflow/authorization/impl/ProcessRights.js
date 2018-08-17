Ext.define("com.coremedia.cap.workflow.authorization.impl.ProcessRights", function(ProcessRights) {/*package com.coremedia.cap.workflow.authorization.impl {
[RestResource(uriTemplate="workflow/process/{id:[0-9]+}/rights;for=user_{user:[0-9]+}")]
/**
 * An internal bean representing the rights on a process.
 * /
public class ProcessRights extends WorkflowObjectRights {
  public*/ function ProcessRights$(uri/*:String*/) {
    this.super$zHAA(uri);
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
          "workflow/process/{id:[0-9]+}/rights;for=user_{user:[0-9]+}"
        ]
      ]},
      constructor: ProcessRights$,
      super$zHAA: function() {
        com.coremedia.cap.workflow.authorization.impl.WorkflowObjectRights.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cap.workflow.authorization.impl.WorkflowObjectRights"]
    };
});
