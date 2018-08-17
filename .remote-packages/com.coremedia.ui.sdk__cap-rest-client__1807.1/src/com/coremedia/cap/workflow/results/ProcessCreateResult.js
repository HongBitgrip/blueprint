Ext.define("com.coremedia.cap.workflow.results.ProcessCreateResult", function(ProcessCreateResult) {/*package com.coremedia.cap.workflow.results {
import com.coremedia.cap.workflow.Process;
import com.coremedia.ui.data.OperationResult;

/**
 * Callback result object of process creation.
 *
 * @see com.coremedia.cap.workflow.ProcessDefinition#create
 * /
[PublicApi]
public interface ProcessCreateResult extends OperationResult {
  /**
   * Return the new process of null if an error occurs
   * @return the new process of null if an error occurs
   * /
  function get createdProcess():Process;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.OperationResult"],
      requires: ["com.coremedia.ui.data.OperationResult"]
    };
});
