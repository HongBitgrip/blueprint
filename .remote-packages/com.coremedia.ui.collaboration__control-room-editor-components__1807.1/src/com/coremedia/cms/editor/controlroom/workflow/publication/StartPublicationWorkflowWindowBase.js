Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindowBase", function(StartPublicationWorkflowWindowBase) {/*package com.coremedia.cms.editor.controlroom.workflow.publication {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.controlroom.workflow.*;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel;
import com.coremedia.cms.editor.sdk.actions.StartWorkflowAction;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.collaboration.controlroom.rest.CapList;
import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;
import com.coremedia.collaboration.controlroom.rest.PublicationSetIssuesService;
import com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.util.ObjectUtils;
import com.coremedia.ui.util.createComponentSelector;

import ext.DateUtil;
import ext.util.DelayedTask;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class StartPublicationWorkflowWindowBase extends StudioDialog {
  private static const*/var CLOSED_PROPERTY_NAME$static/*:String*/ = "closed";/*

  private static const*/var USER_CHOSEN_CONTENTS_PROPERTY_NAME$static/*:String*/ = "userChosenContents";/*
  private static const*/var PROCESS_DEFINITION_NAME_PROPERTY_NAME$static/*:String*/ = "processName";/*
  private static const*/var REMOVE_EDITED_CONTENTS$static/*:String*/ = "publicationWorkflowRemoveEditedContents";/*

  public static const PUBLICATION_SET_PANEL_ITEM_ID:String = "publicationSetPanel";


  private var publicationSetValueExpression:ValueExpression;
  private var subjectValueExpression:ValueExpression;
  private var selectedProcessDefinitionNameValueExpression:ValueExpression;
  private var removeEditedContentValueExpression:ValueExpression;
  private var errorIssuesValueExpression:ValueExpression;
  private var notesValueExpression:ValueExpression;

  private var assignedMembersVE:ValueExpression;
  private var effectiveAssignedMembersVE:ValueExpression;

  private var closed:Boolean;

  private var model:Bean;

  public*/ function StartPublicationWorkflowWindowBase$(config/*:StartPublicationWorkflowWindow = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$WFd$(config);

    if (AS3.getBindable(config,"availableProcessDefinitionNames").length === 0) {
      throw new AS3.Error("No availableProcessDefinitionNames configured for this workflow window.");
    }

    this.getSelectedProcessDefinitionNameValueExpression().addChangeListener(AS3.bind(this,"updateLayout"));
    this.getRemoveEditedContentValueExpression().addChangeListener(AS3.bind(this,"updatePreferences$WFd$"));
    this.getEffectiveAssignedMembersVE().addChangeListener(AS3.bind(this,"getPublicationSetIssues"));

    this.proposeWorkflowSubject$WFd$(AS3.getBindable(config,"defaultWorkflowName"));
    this.determineMyEditedContentDeletion$WFd$();

    var userChosenContents/*:Array*/ = AS3.getBindable(config,"contents") ? AS3.getBindable(config,"contents") : [];
    this.getModel().set(USER_CHOSEN_CONTENTS_PROPERTY_NAME$static, userChosenContents);

    this.on("beforeclose", function ()/*:void*/ {
      this$.cleanup$WFd$();
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
    this.getModel().set(com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.SUBJECT_VARIABLE, workflowName);
  }/*

  private*/ function determineMyEditedContentDeletion()/*:void*/ {
    var preferences/*:Struct*/ = com.coremedia.cms.editor.sdk.editorContext.getPreferences();
    var removeEditedContents/*:Boolean*/ =AS3.as( preferences.get(REMOVE_EDITED_CONTENTS$static),  Boolean);
    if (removeEditedContents === null) {
      removeEditedContents = true;
    }

    this.getModel().set(REMOVE_EDITED_CONTENTS$static, removeEditedContents);
  }/*

  protected*/ function getPublicationSetValueExpression()/*:ValueExpression*/ {
    if (!this.publicationSetValueExpression$WFd$) {
      this.publicationSetValueExpression$WFd$ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.publicationSetValueExpression$WFd$;
  }/*

  internal*/ function startWorkflow()/*:void*/ {
    var startWorkflowActionCfg/*:StartWorkflowAction*/ = AS3.cast(com.coremedia.cms.editor.sdk.actions.StartWorkflowAction,{});
    AS3.setBindable(startWorkflowActionCfg,"processName" , this.getSelectedProcessDefinitionNameValueExpression().getValue());
    AS3.setBindable(startWorkflowActionCfg,"changeSetVariableName" , "changeSet");
    AS3.setBindable(startWorkflowActionCfg,"subjectVariableName" , com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.SUBJECT_VARIABLE);
    AS3.setBindable(startWorkflowActionCfg,"commentVariableName" , com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMMENT_VARIABLE);
    AS3.setBindable(startWorkflowActionCfg,"valueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create(null, com.coremedia.ui.data.beanFactory.getRemoteBean('workflow')));
    AS3.setBindable(startWorkflowActionCfg,"restMethod" , "start");
    AS3.setBindable(startWorkflowActionCfg,"subjectValueExpression" , this.getSubjectValueExpression());
    AS3.setBindable(startWorkflowActionCfg,"commentValueExpression" , this.getNotesValueExpression());
    AS3.setBindable(startWorkflowActionCfg,"contentSet" , this.getPublicationSetValueExpression().getValue());
    AS3.setBindable(startWorkflowActionCfg,"assignedMembers" , this.isAssignableProcess() ? this.getAssignedMembersVE().getValue() : []);
    AS3.setBindable(startWorkflowActionCfg,"callback" , invalidateCurrentContent$static);
    var startWFAction/*:StartWorkflowAction*/ = new com.coremedia.cms.editor.sdk.actions.StartWorkflowAction(startWorkflowActionCfg);

    var userChosenContents/*:Array*/ = this.getModel().get(USER_CHOSEN_CONTENTS_PROPERTY_NAME$static);

    var removeEditedContents/*:Function*/ = this.getRemoveEditedContentValueExpression().getValue();

    if (removeEditedContents && userChosenContents.length > 0) {
      com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance().getEditedContents().removeItems(userChosenContents);
    }

    // Set publication set to null. This prevents deleting it in the cleanup() method.
    // Deletion is taken care of server-side after workflow start.
    // Also, do an early cleanup so that no listeners stop listening before workflow starts.
    this.getPublicationSetValueExpression().setValue(null);
    this.cleanup$WFd$();

    startWFAction.execute();
    this.close();
  }/*

  private static*/ function invalidateCurrentContent$static()/*:void*/ {
    var task/*:DelayedTask*/ = new Ext.util.DelayedTask(function ()/*:void*/ {
      com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.invalidateWorkflowContentLockingForActivePremular();
    });
    task.delay(1000);
  }/*

  protected*/ function getStartButtonDisabledValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      //noinspection JSMismatchedCollectionQueryUpdate
      var userChosenContents/*:Array*/ = this$.getModel().get(USER_CHOSEN_CONTENTS_PROPERTY_NAME$static);
      var assignMembersPanelCmp/*:AssignMembersPanel*/ =AS3.as( this$.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel.xtype).build()),  com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel);

      return !userChosenContents
              || userChosenContents.length === 0
              || !this$.getSubjectValueExpression().getValue()
              || this$.getSubjectValueExpression().getValue() === ""
              || this$.getErrorIssuesExistValueExpression().getValue()
              || this$.getErrorIssuesExistValueExpression().getValue() === undefined
              || this$.getPublicationSetValueExpression().getValue() === undefined
              || (!assignMembersPanelCmp.isOfferMode() && (AS3.as(this$.getAssignedMembersVE().getValue(),  Array)).length === 0);
    });
  }/*

  private*/ function updatePreferences()/*:void*/ {
    var removeEditedContents/*:Function*/ = this.getRemoveEditedContentValueExpression().getValue();
    var preferences/*:Struct*/ = com.coremedia.cms.editor.sdk.editorContext.getPreferences();
    if (removeEditedContents !== preferences.get(REMOVE_EDITED_CONTENTS$static)) {
      preferences.set(REMOVE_EDITED_CONTENTS$static, removeEditedContents);
    }
  }/*

  [ProvideToExtChildren]
  public*/ function getClosed()/*:Boolean*/ {
    return this.closed$WFd$;
  }/*

  public*/ function setClosed(value/*:**/)/*:void*/ {
    var oldValue/*:**/ = this.closed$WFd$;
    this.closed$WFd$ = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, CLOSED_PROPERTY_NAME$static, oldValue, value);
  }/*

  internal*/ function getModel()/*:Bean*/ {
    if (!this.model$WFd$) {
      this.model$WFd$ = com.coremedia.ui.data.beanFactory.createLocalBean({
        'userChosenContents': []
      });
    }
    return this.model$WFd$;
  }/*

  internal*/ function getWorkflowSetPanel()/*:WorkflowSetPanel*/ {
    return AS3.as( this.getComponent(StartPublicationWorkflowWindowBase.PUBLICATION_SET_PANEL_ITEM_ID),  com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel);
  }/*

  public*/ function getPublicationSetIssues(callback/*:Function = null*/, publicationSet/*:CapList = null*/)/*:void*/ {var this$=this;switch(arguments.length){case 0:callback=null;case 1:publicationSet=null;}
    if (!this.getWorkflowSetPanel()) {
      return;
    }
    var assignedMembers/*:Array*/ = this.getEffectiveAssignedMembersVE() ? this.getEffectiveAssignedMembersVE().getValue() : [com.coremedia.cap.common.SESSION.getUser()];
    var processName/*:String*/ = this.getSelectedProcessDefinitionNameValueExpression() ? this.getSelectedProcessDefinitionNameValueExpression().getValue() : null;

    publicationSet = publicationSet ? publicationSet : this.publicationSetValueExpression$WFd$.getValue();
    com.coremedia.collaboration.controlroom.rest.PublicationSetIssuesService.loadPublicationSetIssues(
            publicationSet,
            assignedMembers,
            processName,
            function (publicationSetIssues/*:WorkflowSetIssues*/)/*:void*/ {
              var workflowSetPanel/*:WorkflowSetPanel*/ = this$.getWorkflowSetPanel();
              var workflowSetPanelModel/*:Bean*/ = workflowSetPanel ? workflowSetPanel.getModel() : null;
              if (!workflowSetPanelModel) {
                return;
              }
              if (!com.coremedia.ui.util.ObjectUtils.equal(publicationSetIssues, workflowSetPanelModel.get(workflowSetPanel.getWorkflowSetIssuesPropertyName()))) {
                workflowSetPanelModel.set(workflowSetPanel.getWorkflowSetIssuesPropertyName(), publicationSetIssues);
              }
              (AS3.is(callback,  Function)) && callback(publicationSetIssues);
            });
  }/*

  protected*/ function getErrorIssuesExistValueExpression()/*:ValueExpression*/ {
    if (!this.errorIssuesValueExpression$WFd$) {
      this.errorIssuesValueExpression$WFd$ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.errorIssuesValueExpression$WFd$;
  }/*

  internal*/ function getRemoveEditedContentValueExpression()/*:ValueExpression*/ {
    return this.removeEditedContentValueExpression$WFd$ ||
            (this.removeEditedContentValueExpression$WFd$ = com.coremedia.ui.data.ValueExpressionFactory.create(REMOVE_EDITED_CONTENTS$static, this.getModel()));
  }/*

  protected*/ function getSelectedProcessDefinitionNameValueExpression()/*:ValueExpression*/ {
    return this.selectedProcessDefinitionNameValueExpression$WFd$ ||
            (this.selectedProcessDefinitionNameValueExpression$WFd$ = com.coremedia.ui.data.ValueExpressionFactory.create(PROCESS_DEFINITION_NAME_PROPERTY_NAME$static,
                    this.getModel()));
  }/*

  protected*/ function getSubjectValueExpression()/*:ValueExpression*/ {
    return this.subjectValueExpression$WFd$ ||
            (this.subjectValueExpression$WFd$ = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.SUBJECT_VARIABLE, this.getModel()));
  }/*

  protected*/ function getNotesValueExpression()/*:ValueExpression*/ {
    return this.notesValueExpression$WFd$ ||
            (this.notesValueExpression$WFd$ = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMMENT_VARIABLE, this.getModel()));
  }/*

  protected*/ function isAssignableProcess(processName/*:String = null*/)/*:Boolean*/ {if(arguments.length<=0)processName=null;
    if (processName) {
      return com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.TWO_STEP_PUBLICATION_WORKFLOW_TYPE === processName;
    } else {
      return com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.TWO_STEP_PUBLICATION_WORKFLOW_TYPE === this.getSelectedProcessDefinitionNameValueExpression().getValue();
    }
  }/*

  protected*/ function getAssignedMembersVE()/*:ValueExpression*/ {
    if (!this.assignedMembersVE$WFd$) {
      this.assignedMembersVE$WFd$ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.assignedMembersVE$WFd$;
  }/*

  protected*/ function getEffectiveAssignedMembersVE()/*:ValueExpression*/ {var this$=this;
    if (!this.effectiveAssignedMembersVE$WFd$) {
      this.effectiveAssignedMembersVE$WFd$ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var selectedProcessName/*:String*/ = this$.getSelectedProcessDefinitionNameValueExpression().getValue();
        {
          if (!selectedProcessName) {
            return undefined;
          } else {
            if (selectedProcessName === com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.SIMPLE_PUBLICATION_WORKFLOW_TYPE) {
              return [com.coremedia.cap.common.SESSION.getUser()];
            } else {
              return this$.getAssignedMembersVE().getValue();
            }
          }
        }
      });
    }

    return this.effectiveAssignedMembersVE$WFd$;
  }/*

  private*/ function cleanup()/*:void*/ {
    this.getSelectedProcessDefinitionNameValueExpression().removeChangeListener(AS3.bind(this,"updateLayout"));
    this.getRemoveEditedContentValueExpression().removeChangeListener(AS3.bind(this,"updatePreferences$WFd$"));
    this.getEffectiveAssignedMembersVE().removeChangeListener(AS3.bind(this,"getPublicationSetIssues"));
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      metadata: {getClosed: ["ProvideToExtChildren"]},
      publicationSetValueExpression$WFd$: null,
      subjectValueExpression$WFd$: null,
      selectedProcessDefinitionNameValueExpression$WFd$: null,
      removeEditedContentValueExpression$WFd$: null,
      errorIssuesValueExpression$WFd$: null,
      notesValueExpression$WFd$: null,
      assignedMembersVE$WFd$: null,
      effectiveAssignedMembersVE$WFd$: null,
      closed$WFd$: false,
      model$WFd$: null,
      constructor: StartPublicationWorkflowWindowBase$,
      super$WFd$: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      proposeWorkflowSubject$WFd$: proposeWorkflowSubject,
      determineMyEditedContentDeletion$WFd$: determineMyEditedContentDeletion,
      getPublicationSetValueExpression: getPublicationSetValueExpression,
      startWorkflow: startWorkflow,
      getStartButtonDisabledValueExpression: getStartButtonDisabledValueExpression,
      updatePreferences$WFd$: updatePreferences,
      getClosed: getClosed,
      setClosed: setClosed,
      getModel: getModel,
      getWorkflowSetPanel: getWorkflowSetPanel,
      getPublicationSetIssues: getPublicationSetIssues,
      getErrorIssuesExistValueExpression: getErrorIssuesExistValueExpression,
      getRemoveEditedContentValueExpression: getRemoveEditedContentValueExpression,
      getSelectedProcessDefinitionNameValueExpression: getSelectedProcessDefinitionNameValueExpression,
      getSubjectValueExpression: getSubjectValueExpression,
      getNotesValueExpression: getNotesValueExpression,
      isAssignableProcess: isAssignableProcess,
      getAssignedMembersVE: getAssignedMembersVE,
      getEffectiveAssignedMembersVE: getEffectiveAssignedMembersVE,
      cleanup$WFd$: cleanup,
      statics: {PUBLICATION_SET_PANEL_ITEM_ID: "publicationSetPanel"},
      requires: [
        "AS3.Error",
        "Ext.Date",
        "Ext.util.DelayedTask",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.actions.StartWorkflowAction",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl",
        "com.coremedia.collaboration.controlroom.rest.PublicationSetIssuesService",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.util.ObjectUtils",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel",
        "com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants"
      ]
    };
});
