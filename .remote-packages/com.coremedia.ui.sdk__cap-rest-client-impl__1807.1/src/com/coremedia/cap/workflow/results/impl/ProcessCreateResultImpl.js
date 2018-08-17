Ext.define("com.coremedia.cap.workflow.results.impl.ProcessCreateResultImpl", function(ProcessCreateResultImpl) {/*package com.coremedia.cap.workflow.results.impl {
import com.coremedia.cap.common.impl.OperationResultImpl;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.results.ProcessCreateResult;
import com.coremedia.ui.data.error.RemoteError;

public class ProcessCreateResultImpl extends OperationResultImpl implements ProcessCreateResult {
  public*/ function ProcessCreateResultImpl$(error/*:RemoteError*/, successful/*:Boolean*/, createdProcess/*:Process*/) {
    this.super$JLfF(error, successful);
    this['createdProcess'] = createdProcess;
  }/*

  public native function get createdProcess():Process;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.impl.OperationResultImpl",
      mixins: ["com.coremedia.cap.workflow.results.ProcessCreateResult"],
      constructor: ProcessCreateResultImpl$,
      super$JLfF: function() {
        com.coremedia.cap.common.impl.OperationResultImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.common.impl.OperationResultImpl",
        "com.coremedia.cap.workflow.results.ProcessCreateResult"
      ]
    };
});
