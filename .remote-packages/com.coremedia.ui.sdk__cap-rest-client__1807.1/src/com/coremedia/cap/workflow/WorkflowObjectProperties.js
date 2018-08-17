Ext.define("com.coremedia.cap.workflow.WorkflowObjectProperties", function(WorkflowObjectProperties) {/*package com.coremedia.cap.workflow {
import com.coremedia.ui.data.Bean;

/**
 * A Bean to represent a workflow object's properties.
 * /
[PublicApi]
public interface WorkflowObjectProperties extends Bean {

  /**
   * Returns the associated workflow object.
   *
   * @return the workflow object
   * /
  function getWorkflowObject():WorkflowObject;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
