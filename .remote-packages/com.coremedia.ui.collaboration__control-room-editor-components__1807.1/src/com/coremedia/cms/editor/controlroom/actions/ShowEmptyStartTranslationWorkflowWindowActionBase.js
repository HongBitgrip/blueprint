Ext.define("com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartTranslationWorkflowWindowActionBase", function(ShowEmptyStartTranslationWorkflowWindowActionBase) {/*package com.coremedia.cms.editor.controlroom.actions {
import com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.WorkflowUtils;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Action;
import ext.Ext;
import ext.window.Window;

public class ShowEmptyStartTranslationWorkflowWindowActionBase extends Action {

  private var hiddenExpression:ValueExpression;

  public*/ function ShowEmptyStartTranslationWorkflowWindowActionBase$(config/*:ShowEmptyStartTranslationWorkflowWindowAction = null*/) {if(arguments.length<=0)config=null;
    this.super$jeE8(AS3.cast(Ext.Action,Ext.apply(config,
            {
              handler: showStartWorkflowWindow$static
            })));

    this.hiddenExpression$jeE8 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateHidden"));
    this.hiddenExpression$jeE8.addChangeListener(AS3.bind(this,"updateHiddenStatus$jeE8"));
    this.updateHiddenStatus$jeE8();
  }/*

  private*/ function updateHiddenStatus()/*:void*/ {
    if (this.hiddenExpression$jeE8.getValue()) {
      this.hide();
    } else {
      this.show();
    }
  }/*

  private static*/ function getTranslationProcessDefinitions$static()/*:Array*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getTranslationProcessDefinitions();
  }/*

  private static*/ function showStartWorkflowWindow$static()/*:void*/ {
    var window/*:Window*/ = new com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow(AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow,{
      contents: [],
      defaultWorkflowName: undefined,
      availableProcessDefinitionNames: com.coremedia.cms.editor.sdk.util.WorkflowUtils.getAvailableProcessDefNames(getTranslationProcessDefinitions$static())
    }));
    window.show();
  }/*

  public*/ function calculateHidden()/*:Boolean*/ {
    if (this.initialConfig.processDefinitionNames && this.initialConfig.processDefinitionNames.length === 0) {
      return true;
    }

    var availableProcessDefinitionNames/*:Array*/ = com.coremedia.cms.editor.sdk.util.WorkflowUtils.getAvailableProcessDefNames(getTranslationProcessDefinitions$static());
    return availableProcessDefinitionNames === undefined || availableProcessDefinitionNames.length === 0;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      hiddenExpression$jeE8: null,
      constructor: ShowEmptyStartTranslationWorkflowWindowActionBase$,
      super$jeE8: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      updateHiddenStatus$jeE8: updateHiddenStatus,
      calculateHidden: calculateHidden,
      requires: [
        "Ext",
        "Ext.Action",
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.WorkflowUtils",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow"]
    };
});
