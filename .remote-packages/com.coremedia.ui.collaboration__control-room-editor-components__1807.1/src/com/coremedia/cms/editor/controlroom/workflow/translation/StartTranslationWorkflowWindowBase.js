Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindowBase", function(StartTranslationWorkflowWindowBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames;
import com.coremedia.cms.editor.sdk.util.WorkflowUtils;
import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;

import ext.DateUtil;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class StartTranslationWorkflowWindowBase extends StudioDialog {
  protected static const PROCESS_DEFINITION_NAME_PROPERTY_NAME:String = "processName";
  private static const*/var CLOSED_PROPERTY_NAME$static/*:String*/ = "closed";/*
  internal static const REMOVE_EDITED_CONTENTS:String = "translationWorkflowRemoveEditedContents";

  private var selectedProcessDefinitionNamesValueExpression:ValueExpression;
  private var subjectValueExpression:ValueExpression;
  private var model:Bean;
  private var closed:Boolean;
  private var processStartedCallback:Function;
  private var processCancelledCallback:Function;

  public*/ function StartTranslationWorkflowWindowBase$(config/*:StartTranslationWorkflowWindow = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$o0oV(config);

    this.processStartedCallback$o0oV = AS3.getBindable(config,"processStartedCallback");
    this.processCancelledCallback$o0oV = AS3.getBindable(config,"processCancelledCallback");

    if (AS3.getBindable(config,"availableProcessDefinitionNames").length === 0) {
      throw new AS3.Error("No availableProcessDefinitionNames configured for this workflow window.");
    }

    this.getSelectedProcessDefinitionNamesValueExpression().addChangeListener(AS3.bind(this,"updateLayout"));

    this.proposeWorkflowSubject$o0oV(AS3.getBindable(config,"defaultWorkflowName"));

    this.on("beforeclose", function ()/*:void*/ {
      this$.cleanup();
      this$.setClosed(true);
    });
  }/*

  private*/ function proposeWorkflowSubject(defaultWorkflowName/*:String*/)/*:void*/ {
    var workflowName/*:String*/;
    if (defaultWorkflowName) {
      workflowName = defaultWorkflowName;
    } else {
      var currentDate/*:String*/ = Ext.Date.format(new Date(), this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dateFormat'));
      workflowName = com.coremedia.cap.common.SESSION.getUser().getName() + " " + currentDate;
    }
    this.getModel().set(com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.SUBJECT_VARIABLE, workflowName);
  }/*

  protected*/ function cleanup()/*:void*/ {
    this.getSelectedProcessDefinitionNamesValueExpression().removeChangeListener(AS3.bind(this,"updateLayout"));
  }/*

  [ProvideToExtChildren]
  public*/ function getContents()/*:Array*/ {
    return AS3.getBindable(AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow,this.initialConfig),"contents");
  }/*

  [ProvideToExtChildren]
  public*/ function getClosed()/*:Boolean*/ {
    return this.closed$o0oV;
  }/*

  public*/ function setClosed(value/*:**/)/*:void*/ {
    var oldValue/*:**/ = this.closed$o0oV;
    this.closed$o0oV = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, CLOSED_PROPERTY_NAME$static, oldValue, value);
  }/*

  internal*/ function getSubjectValueExpression()/*:ValueExpression*/ {
    return this.subjectValueExpression$o0oV ||
            (this.subjectValueExpression$o0oV = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.SUBJECT_VARIABLE, this.getModel()));
  }/*

  protected*/ function getSelectedProcessDefinitionNamesValueExpression()/*:ValueExpression*/ {
    return this.selectedProcessDefinitionNamesValueExpression$o0oV ||
            (this.selectedProcessDefinitionNamesValueExpression$o0oV = com.coremedia.ui.data.ValueExpressionFactory.create(StartTranslationWorkflowWindowBase.PROCESS_DEFINITION_NAME_PROPERTY_NAME,
                    this.getModel()));
  }/*

  internal*/ function getModel()/*:Bean*/ {
    if (!this.model$o0oV) {
      this.model$o0oV = com.coremedia.ui.data.beanFactory.createLocalBean();
    }
    return this.model$o0oV;
  }/*

  internal*/ function getStartButtonDisabledValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var activeItem/*:AbstractStartTranslationWorkflowPanel*/ = this$.getActiveItem();
      if (!activeItem) {
        return undefined;
      }

      return activeItem.isStartButtonDisabled() ||
              !this$.getSubjectValueExpression().getValue() || this$.getSubjectValueExpression().getValue() === "";
    });
  }/*

  // visible for testing
  internal*/ function getActiveItem()/*:AbstractStartTranslationWorkflowPanel*/ {
    var switchingContainer/*:SwitchingContainer*/ = AS3.cast(com.coremedia.ui.components.SwitchingContainer,this.getComponent(com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow.SWITCHING_CONTAINER_ITEM_ID));
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(switchingContainer, 'activeItem');
    return AS3.as( switchingContainer.getActiveItem(),  com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanel);
  }/*

  public*/ function startWorkflow()/*:void*/ {var this$=this;
    var activeItem/*:AbstractStartTranslationWorkflowPanel*/ = this.getActiveItem();
    if (!activeItem) {
      this.processCancelledCallback$o0oV && this.processCancelledCallback$o0oV();
      return;
    }

    var processName/*:String*/ = this.getSelectedProcessDefinitionNamesValueExpression().getValue();
    var subject/*:String*/ = this.getSubjectValueExpression().getValue();

    var masterContents/*:Array*/ = activeItem.getMasterContents();
    var removeEditedContents/*:Boolean*/ = activeItem.getRemoveEditedContent();

    activeItem.beforeStartWorkflow(function ()/*:void*/ {
      activeItem.computeProcessVariableMappings(function (variables/*:Array*/)/*:void*/ {
        for (var i/*:int*/ = 0; i < variables.length; i++) {
          var obj/*:Object*/ = variables[i];
          obj[com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.SUBJECT_VARIABLE] = subject;
        }

        com.coremedia.cms.editor.sdk.util.WorkflowUtils.startProcess(processName, variables, this$.processStartedCallback$o0oV || defaultProcessStartedCallback$static);

        if (removeEditedContents && masterContents) {
          com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance().getEditedContents().removeItems(masterContents);
        }

        var preferences/*:Struct*/ = com.coremedia.cms.editor.sdk.editorContext.getPreferences();
        if (removeEditedContents !== preferences.get(StartTranslationWorkflowWindowBase.REMOVE_EDITED_CONTENTS)) {
          preferences.set(StartTranslationWorkflowWindowBase.REMOVE_EDITED_CONTENTS, removeEditedContents);
        }

        this$.close();
      });
    });
  }/*

  public*/ function cancel()/*:void*/ {
    if (AS3.is(this.processCancelledCallback$o0oV,  Function)) {
      this.processCancelledCallback$o0oV();
    }
    this.close();
  }/*

  private static*/ function defaultProcessStartedCallback$static(process/*:Process*/, error/*:Error = null*/)/*:void*/ {if(arguments.length<=1)error=null;
    error && com.coremedia.cms.editor.sdk.util.WorkflowUtils.showStartProcessErrorDialog();
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      metadata: {
        getContents: ["ProvideToExtChildren"],
        getClosed: ["ProvideToExtChildren"]
      },
      selectedProcessDefinitionNamesValueExpression$o0oV: null,
      subjectValueExpression$o0oV: null,
      model$o0oV: null,
      closed$o0oV: false,
      processStartedCallback$o0oV: null,
      processCancelledCallback$o0oV: null,
      constructor: StartTranslationWorkflowWindowBase$,
      super$o0oV: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      proposeWorkflowSubject$o0oV: proposeWorkflowSubject,
      cleanup: cleanup,
      getContents: getContents,
      getClosed: getClosed,
      setClosed: setClosed,
      getSubjectValueExpression: getSubjectValueExpression,
      getSelectedProcessDefinitionNamesValueExpression: getSelectedProcessDefinitionNamesValueExpression,
      getModel: getModel,
      getStartButtonDisabledValueExpression: getStartButtonDisabledValueExpression,
      getActiveItem: getActiveItem,
      startWorkflow: startWorkflow,
      cancel: cancel,
      statics: {
        PROCESS_DEFINITION_NAME_PROPERTY_NAME: "processName",
        REMOVE_EDITED_CONTENTS: "translationWorkflowRemoveEditedContents"
      },
      requires: [
        "AS3.Error",
        "Ext.Date",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames",
        "com.coremedia.cms.editor.sdk.util.WorkflowUtils",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow"
      ]
    };
});
