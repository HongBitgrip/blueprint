Ext.define("com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowActionBase", function(ShowStartPublicationWorkflowWindowActionBase) {/*package com.coremedia.cms.editor.controlroom.actions {

import com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindow;
import com.coremedia.cms.editor.sdk.util.WorkflowUtils;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.window.Window;

public class ShowStartPublicationWorkflowWindowActionBase extends ShowStartWorkflowWindowAction {

  private var userMayStartWorkflow:ValueExpression;

  public*/ function ShowStartPublicationWorkflowWindowActionBase$(config/*:ShowStartPublicationWorkflowWindowAction = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$Jadg(config);

    AS3.setBindable(this,"processDefinitionNames" , AS3.getBindable(config,"processDefinitionNames"));

    this.userMayStartWorkflow$Jadg = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var availableProcessDefNames/*:Array*/ = com.coremedia.cms.editor.sdk.util.WorkflowUtils.getAvailableProcessDefNames(AS3.getBindable(this$,"processDefinitionNames"));
      return availableProcessDefNames && availableProcessDefNames.length > 0;
    });

  }/*

  override protected*/ function createWorkflowWindow(defaultWorkflowName/*:String*/,
                                                   availableProcessDefinitionNames/*:Array*/)/*:Window*/ {
    var window/*:Window*/ = new com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindow(AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindow,{
      contents: this.getContents(),
      defaultWorkflowName: defaultWorkflowName,
      availableProcessDefinitionNames: availableProcessDefinitionNames
    }));
    return window;
  }/*

  override protected*/ function mayStartWorkflow()/*:Boolean*/ {
    return this.userMayStartWorkflow$Jadg.getValue() && com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction.prototype.mayStartWorkflow.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction",
      userMayStartWorkflow$Jadg: null,
      constructor: ShowStartPublicationWorkflowWindowActionBase$,
      super$Jadg: function() {
        com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction.prototype.constructor.apply(this, arguments);
      },
      createWorkflowWindow: createWorkflowWindow,
      mayStartWorkflow: mayStartWorkflow,
      requires: [
        "com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction",
        "com.coremedia.cms.editor.sdk.util.WorkflowUtils",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindow"]
    };
});
