Ext.define("com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowActionBase", function(ShowStartWorkflowWindowActionBase) {/*package com.coremedia.cms.editor.controlroom.actions {

import com.coremedia.cms.editor.sdk.actions.ContentAction;
import com.coremedia.cms.editor.sdk.util.WorkflowUtils;
import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;
import com.coremedia.ui.data.ValueExpression;

import ext.window.Window;

public class ShowStartWorkflowWindowActionBase extends ContentAction {

  private var workflowNameValueExpression:ValueExpression;

  public*/ function ShowStartWorkflowWindowActionBase$(config/*:ShowStartWorkflowWindowAction = null*/) {if(arguments.length<=0)config=null;
    this.super$7usE(AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction,com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil.extendConfig(config, AS3.getBindable(config,"actionName"),
            {
              handler:AS3.bind( this,"showStartWorkflowWindow$7usE"),
              hidden: AS3.getBindable(config,"processDefinitionNames").length === 0
            })));
    this.workflowNameValueExpression$7usE = AS3.getBindable(config,"workflowNameValueExpression");
  }/*

  private*/ function showStartWorkflowWindow()/*:void*/ {
    var workflowName/*:String*/ = this.workflowNameValueExpression$7usE && this.workflowNameValueExpression$7usE.getValue();
    var window/*:Window*/ = this.createWorkflowWindow(workflowName,
            com.coremedia.cms.editor.sdk.util.WorkflowUtils.getAvailableProcessDefNames(this.initialConfig.processDefinitionNames));
    window.show();
  }/*

  protected*/ function createWorkflowWindow(defaultWorkflowName/*:String*/, availableProcessDefinitionNames/*:Array*/)/*:Window*/ {
    throw AS3.cast(AS3.Error,'needs to be implemented in subclass');
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    switch (this.mayStartWorkflow()) {
      case undefined: return undefined;
      case false: return true;
    }
    return com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.calculateHidden.call(this);
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.calculateDisabled.call(this) || !com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance();
  }/*

  protected*/ function mayStartWorkflow()/*:Boolean*/ {
    var availableProcessDefinitionNames/*:Array*/ = com.coremedia.cms.editor.sdk.util.WorkflowUtils.getAvailableProcessDefNames(this.initialConfig.processDefinitionNames);
    if (availableProcessDefinitionNames === undefined) {
      return undefined;
    }

    return availableProcessDefinitionNames.length !== 0;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      workflowNameValueExpression$7usE: null,
      constructor: ShowStartWorkflowWindowActionBase$,
      super$7usE: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      showStartWorkflowWindow$7usE: showStartWorkflowWindow,
      createWorkflowWindow: createWorkflowWindow,
      calculateHidden: calculateHidden,
      calculateDisabled: calculateDisabled,
      mayStartWorkflow: mayStartWorkflow,
      requires: [
        "AS3.Error",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.cms.editor.sdk.util.WorkflowUtils",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction"
      ]
    };
});
