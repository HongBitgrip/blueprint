Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowFormBase", function(WorkflowFormBase) {/*package com.coremedia.cms.editor.controlroom.workflow {

import ext.Ext;
import ext.container.Container;

/**
 * The base class of the <code>WorkflowForm</code>.
 * Do not instantiate this class directly. Use <code>WorkflowForm</code> instead.
 *
 * @see WorkflowForm
 * /
[PublicApi]
public class WorkflowFormBase extends Container {

  /**
   * Create a new instance of this class. Do not call directly.
   * Instantiate a subclass of <code>WorkflowForm</code> instead.
   *
   * @param config
   * /
  public*/ function WorkflowFormBase$(config/*:WorkflowForm = null*/) {if(arguments.length<=0)config=null;
    var mergedConfig/*:WorkflowForm*/ = AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowForm,Ext.apply({}, config));
    mergedConfig.items = (AS3.getBindable(config,"prefixItems") ? AS3.getBindable(config,"prefixItems") : []).concat(config.items);
    this.super$zth7(mergedConfig);
  }/*

  /**
   * <p>
   *   Return true if the apply button of the detail workflow panel
   *   should be disabled at this point of time. If the implementation registers
   *   dependencies with the dependency tracker, for example by reading a bean
   *   or a value expression, the method is called again when the dependencies
   *   are invalidated.
   * </p>
   * <p>
   *   By default, this method returns false, indicating that a process can always
   *   be started.
   * </p>
   *
   * @return true if the start button should be disabled
   * /
  public*/ function isApplyButtonDisabled()/*:Boolean*/ {
    return false;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {"": ["PublicApi"]},
      constructor: WorkflowFormBase$,
      super$zth7: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      isApplyButtonDisabled: isApplyButtonDisabled,
      requires: [
        "Ext",
        "Ext.container.Container"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.WorkflowForm"]
    };
});
