Ext.define("com.coremedia.cap.workflow.authorization.impl.TaskRights", function(TaskRights) {/*package com.coremedia.cap.workflow.authorization.impl {
[RestResource(uriTemplate="workflow/task/{process:[0-9]+}/{id:[0-9]+}/rights;for=user_{user:[0-9]+}")]
/**
 * An internal bean representing the rights on a task.
 * /
public class TaskRights extends WorkflowObjectRights {
  public*/ function TaskRights$(uri/*:String*/) {
    this.super$IV3O(uri);
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
          "workflow/task/{process:[0-9]+}/{id:[0-9]+}/rights;for=user_{user:[0-9]+}"
        ]
      ]},
      constructor: TaskRights$,
      super$IV3O: function() {
        com.coremedia.cap.workflow.authorization.impl.WorkflowObjectRights.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cap.workflow.authorization.impl.WorkflowObjectRights"]
    };
});
