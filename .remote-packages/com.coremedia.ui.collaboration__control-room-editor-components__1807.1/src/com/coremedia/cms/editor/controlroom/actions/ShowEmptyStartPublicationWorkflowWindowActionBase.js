Ext.define("com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartPublicationWorkflowWindowActionBase", function(ShowEmptyStartPublicationWorkflowWindowActionBase) {/*package com.coremedia.cms.editor.controlroom.actions {
import com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindow;
import com.coremedia.cms.editor.sdk.util.WorkflowUtils;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Action;
import ext.Ext;
import ext.window.Window;

public class ShowEmptyStartPublicationWorkflowWindowActionBase extends Action {

  private var hiddenExpression:ValueExpression;

  public*/ function ShowEmptyStartPublicationWorkflowWindowActionBase$(config/*:ShowEmptyStartPublicationWorkflowWindowAction = null*/) {if(arguments.length<=0)config=null;
    this.super$0383(AS3.cast(Ext.Action,Ext.apply(config,
            {
              handler:AS3.bind( this,"showStartWorkflowWindow$0383")
            })));

    this.hiddenExpression$0383 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateHidden$0383"));
    this.hiddenExpression$0383.addChangeListener(AS3.bind(this,"updateHiddenStatus$0383"));
    this.updateHiddenStatus$0383();
  }/*

  private*/ function updateHiddenStatus()/*:void*/ {
    if (this.hiddenExpression$0383.getValue()) {
      this.hide();
    } else {
      this.show();
    }
  }/*

  private*/ function showStartWorkflowWindow()/*:void*/ {
    var window/*:Window*/ = new com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindow(AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindow,{
      contents: [],
      defaultWorkflowName: undefined,
      availableProcessDefinitionNames: com.coremedia.cms.editor.sdk.util.WorkflowUtils.getAvailableProcessDefNames(this.initialConfig.processDefinitionNames)
    }));
    window.show();
  }/*

  private*/ function calculateHidden()/*:Boolean*/ {
    if (this.initialConfig.processDefinitionNames && this.initialConfig.processDefinitionNames.length === 0) {
      return true;
    }
    var availableProcessDefinitionNames/*:Array*/ = com.coremedia.cms.editor.sdk.util.WorkflowUtils.getAvailableProcessDefNames(this.initialConfig.processDefinitionNames);
    return availableProcessDefinitionNames === undefined || availableProcessDefinitionNames.length === 0;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      hiddenExpression$0383: null,
      constructor: ShowEmptyStartPublicationWorkflowWindowActionBase$,
      super$0383: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      updateHiddenStatus$0383: updateHiddenStatus,
      showStartWorkflowWindow$0383: showStartWorkflowWindow,
      calculateHidden$0383: calculateHidden,
      requires: [
        "Ext",
        "Ext.Action",
        "com.coremedia.cms.editor.sdk.util.WorkflowUtils",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindow"]
    };
});
