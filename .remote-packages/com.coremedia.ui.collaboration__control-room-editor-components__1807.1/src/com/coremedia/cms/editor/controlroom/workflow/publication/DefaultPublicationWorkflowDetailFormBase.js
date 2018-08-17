Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailFormBase", function(DefaultPublicationWorkflowDetailFormBase) {/*package com.coremedia.cms.editor.controlroom.workflow.publication {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.user.Member;
import com.coremedia.cap.user.User;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.ProcessPropertyNames;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cms.editor.controlroom.workflow.*;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel;
import com.coremedia.collaboration.controlroom.rest.CapList;
import com.coremedia.collaboration.controlroom.rest.PublicationSetIssuesService;
import com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ObjectUtils;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class DefaultPublicationWorkflowDetailFormBase extends WorkflowForm {

  public static const PUBLICATION_SET_PANEL_ITEM_ID:String = "publicationDetailSetPanel";

  private var selectedContentsValueExpression:ValueExpression;
  private var selectedContentsVersionsValueExpression:ValueExpression;
  private var changeSetContentsValueExpression:ValueExpression;
  private var publicationSetValueExpression:ValueExpression;

  private var errorIssuesValueExpression:ValueExpression;
  private var nextStateValueExpression:ValueExpression;
  private var notesValueExpression:ValueExpression;
  private var assignedMembersVE:ValueExpression;
  private var assignedMembersPanelVisibleVE:ValueExpression;
  private var assignedMembersFromProcessVE:ValueExpression;

  private var assignedMembersInitialized:Boolean = false;
  private var processNameValueExpression:ValueExpression;

  public*/ function DefaultPublicationWorkflowDetailFormBase$(config/*:DefaultPublicationWorkflowDetailForm = null*/) {if(arguments.length<=0)config=null;
    this.super$7De5(config);
    this.processDefinitionName = config.processDefinitionName;
    this.getChangeSetContentsValueExpression$7De5().addChangeListener(AS3.bind(this,"updateSelectedContents$7De5"));
    this.getSelectedContentsAndVersionsValueExpression$7De5().addChangeListener(AS3.bind(this,"updateChangeSet$7De5"));
    this.getSelectedContentsValueExpression().setValue(this.getChangeSetContentsValueExpression$7De5().getValue());
    this.getAssignedMembersFromProcessVE$7De5().addChangeListener(AS3.bind(this,"updateAssignedMembersForProcess$7De5"));
    this.getAssignedMembersVE().addChangeListener(AS3.bind(this,"getPublicationSetIssues"));
    this.getRetrieveIssuesForSessionUserVE().addChangeListener(AS3.bind(this,"getPublicationSetIssues"));

    AS3.getBindable(this,"bindToTask") && AS3.getBindable(this,"bindToTask").addChangeListener(AS3.bind(this,"updateAssignedMembersForTask$7De5"));
    (AS3.getBindable(this,"bindTo") && !AS3.getBindable(this,"bindToTask")) && AS3.getBindable(this,"bindTo").addChangeListener(AS3.bind(this,"updateAssignedMembersForProcess$7De5"));

    this.registerProcessTaskOperationExitFunctions();
  }/*

  internal*/ function getWorkflowSetPanel()/*:WorkflowSetPanel*/ {
    return AS3.as( this.getComponent(DefaultPublicationWorkflowDetailFormBase.PUBLICATION_SET_PANEL_ITEM_ID),  com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel);
  }/*

  internal*/ function getProcessNameVE()/*:ValueExpression*/ {
    if (!this.processNameValueExpression$7De5) {
      this.processNameValueExpression$7De5 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(this.processDefinitionName);
    }
    return this.processNameValueExpression$7De5;
  }/*

  public*/ function getPublicationSetIssues(callback/*:Function = null*/, publicationSet/*:CapList = null*/)/*:void*/ {var this$=this;switch(arguments.length){case 0:callback=null;case 1:publicationSet=null;}
    if (!this.getWorkflowSetPanel()) {
      return;
    }
    var assignedMembers/*:Array*/ = this.getAssignedMembersVE() ? this.getAssignedMembersVE().getValue() : [com.coremedia.cap.common.SESSION.getUser()];
    if (this.getRetrieveIssuesForSessionUserVE() && this.getRetrieveIssuesForSessionUserVE().getValue()) {
      assignedMembers = [com.coremedia.cap.common.SESSION.getUser()];
    }

    var processName/*:String*/ = this.getProcessNameVE() ? this.getProcessNameVE().getValue() : null;

    publicationSet = publicationSet ? publicationSet : this.publicationSetValueExpression$7De5.getValue();
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

  private*/ function getSelectedContentsAndVersionsValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.selectedContentsVersionsValueExpression$7De5) {
      this.selectedContentsVersionsValueExpression$7De5 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var contents/*:Array*/ =AS3.as( this$.getSelectedContentsValueExpression().getValue(),  Array);
        var contentsAndVersions/*:Array*/ = [];
        if (contents) {
          contents.forEach(function (content/*:Content*/)/*:void*/ {
            if (contentsAndVersions) {
              contentsAndVersions.push(content);
            }

            if (content.getState().readable) {
              var version/*:Version*/ = content.getCheckedOutVersion();
              if (!version) {
                version = content.getCheckedInVersion();
              }
              if (version && contentsAndVersions) {
                contentsAndVersions.push(version);
              } else {
                contentsAndVersions = undefined;
              }
            }

          });
        }
        return contentsAndVersions;
      });
    }
    return this.selectedContentsVersionsValueExpression$7De5;
  }/*

  private*/ function getAssignedMembersFromProcessVE()/*:ValueExpression*/ {var this$=this;
    if (!this.assignedMembersFromProcessVE$7De5) {
      this.assignedMembersFromProcessVE$7De5 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var process/*:Process*/ = AS3.getBindable(this$,"bindTo") && AS3.getBindable(this$,"bindTo").getValue();
        var assignedUsersFromProcess/*:Array*/ = [];
        if (process) {
          process.load(function ()/*:void*/ {
            var assignedUsers/*:Array*/ = process.getProperties().get("assignedUsers") || [];
            var assignedGroups/*:Array*/ = process.getProperties().get("assignedGroups") || [];
            assignedUsersFromProcess = assignedUsers.concat(assignedGroups);
          });
        }
        return assignedUsersFromProcess;
      });
    }
    return this.assignedMembersFromProcessVE$7De5;
  }/*

  private*/ function updateChangeSet()/*:void*/ {
    var contentsAndVersions/*:Array*/ =AS3.as( this.getSelectedContentsAndVersionsValueExpression$7De5().getValue(),  Array);

    if (AS3.getBindable(this,"bindToTask")) {
      var task/*:Task*/ =AS3.as( AS3.getBindable(this,"bindToTask").getValue(),  com.coremedia.cap.workflow.Task);
      if (contentsAndVersions && task) {
        task.load(function ()/*:void*/ {
          if (task.getPerformer() === com.coremedia.cap.common.SESSION.getUser()
                  && task.isRunning()) {
            var process/*:Process*/ = task.getContainingProcess();
            process.load(function ()/*:void*/ {
              var oldVersions/*:Array*/ = process.getProperties().get(com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.CHANGESET_VARIABLE);
              if (oldVersions != contentsAndVersions) {
                process.getProperties().set(com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.CHANGESET_VARIABLE, contentsAndVersions);
              }
            });
          }
        });
      }
    }
  }/*

  private*/ function getChangeSetContentsValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.changeSetContentsValueExpression$7De5) {
      this.changeSetContentsValueExpression$7De5 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var contents/*:Array*/ = [];
        var changeSet/*:Array*/ = this$.initialConfig.bindTo.extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES,
                com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.CHANGESET_VARIABLE).getValue();
        if (changeSet) {
          changeSet.forEach(function (changeSetItem/*:**/)/*:void*/ {
            var content/*:Content*/;

            if (AS3.is(changeSetItem,  com.coremedia.cap.content.Content)) {
              content =AS3.as( changeSetItem,  com.coremedia.cap.content.Content);
            } else {
              // version
              // retrieve content for version via URI (instead of get('content')) path to circumvent unreadability
              content = com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils.getContentForVersionByUriPath(changeSetItem);
            }

            if (content && contents) {
              if (contents.indexOf(content) === -1) {
                contents.push(content);
              }
            } else {
              contents = undefined;
            }
          });
        } else {
          contents = undefined;
        }
        return contents;
      });
    }
    return this.changeSetContentsValueExpression$7De5;
  }/*

  private*/ function updateSelectedContents()/*:void*/ {
    var contents/*:Array*/ =AS3.as( this.getChangeSetContentsValueExpression$7De5().getValue(),  Array);
    if (contents) {
      this.getSelectedContentsValueExpression().setValue(contents);
    }
  }/*

  protected*/ function getAssignedMembersVE()/*:ValueExpression*/ {
    if (!this.assignedMembersVE$7De5) {
      this.assignedMembersVE$7De5 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.assignedMembersVE$7De5;
  }/*

  protected*/ function getAssignMembersPanelVisibleVE()/*:ValueExpression*/ {var this$=this;
    if (!this.assignedMembersPanelVisibleVE$7De5) {
      this.assignedMembersPanelVisibleVE$7De5 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        var isPanelVisible/*:Boolean*/ = true;
        var task/*:Task*/ = AS3.getBindable(this$,"bindToTask") && AS3.getBindable(this$,"bindToTask").getValue();
        if (task) {
          task.load(function ()/*:void*/ {
            if (task.getDefinition().getName() !== com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMPOSE_TASK_NAME) {
              isPanelVisible = false;
            }
          });
        }
        return isPanelVisible;
      });
    }
    return this.assignedMembersPanelVisibleVE$7De5;
  }/*

  private*/ function updateAssignedMembersForTask()/*:void*/ {var this$=this;
    var task/*:Task*/ = AS3.getBindable(this,"bindToTask") && AS3.getBindable(this,"bindToTask").getValue();
    var sessionUser/*:User*/ = com.coremedia.cap.common.SESSION.getUser();
    if (task) {
      task.load(function ()/*:void*/ {
        var containingProcess/*:Process*/ = task.getContainingProcess();
        containingProcess.load(function ()/*:void*/ {
          if (task.getDefinition().getName() === com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.APPROVE_TASK_NAME
                  && task.isAccepted()
                  && task.getPerformer() === sessionUser) {
            this$.getAssignedMembersVE().setValue([sessionUser]);
          } else if (task.getDefinition().getName() === com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.APPROVE_TASK_NAME
                  || task.getDefinition().getName() === com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMPOSE_TASK_NAME) {
            var assignedUsers/*:Array*/ = containingProcess.getProperties().get("assignedUsers") || [];
            var assignedGroups/*:Array*/ = containingProcess.getProperties().get("assignedGroups") || [];
            this$.getAssignedMembersVE().setValue(assignedUsers.concat(assignedGroups));
          }
          if (!this$.assignedMembersInitialized$7De5) {
            this$.getAssignedMembersVE().addChangeListener(AS3.bind(this$,"updateProcess$7De5"));
            this$.assignedMembersInitialized$7De5 = true;
          }
        });
      });
    }
  }/*

  private*/ function updateAssignedMembersForProcess()/*:void*/ {
    this.getAssignedMembersVE().setValue(this.getAssignedMembersFromProcessVE$7De5().getValue());
  }/*

  private*/ function updateProcess()/*:void*/ {var this$=this;
    if (this.getAssignedMembersVE().getValue()) {
      var task/*:Task*/ = AS3.getBindable(this,"bindToTask") && AS3.getBindable(this,"bindToTask").getValue();
      if (task) {
        task.load(function ()/*:void*/ {
          var containingProcess/*:Process*/ = task.getContainingProcess();
          containingProcess.load(function ()/*:void*/ {
            var members/*:Array*/ = this$.getAssignedMembersVE().getValue();
            if (members) {
              containingProcess.getProperties().set("assignedUsers", this$.filterUsers$7De5(members));
              containingProcess.getProperties().set("assignedGroups", this$.filterGroups$7De5(members));
            }
          });
        });
      }
    }
  }/*

  private*/ function filterGroups(members/*:Array*/)/*:Array*/ {
    var groups/*:Array*/ = [];
    members.forEach(function (member/*:Member*/)/*:Array*/ {
      if (member.isGroup()) {
        groups.push(member);
      }
    });
    return groups;
  }/*

  private*/ function filterUsers(members/*:Array*/)/*:Array*/ {
    var users/*:Array*/ = [];
    members.forEach(function (member/*:Member*/)/*:Array*/ {
      if (member.isUser()) {
        users.push(member);
      }
    });
    return users;
  }/*

  public*/ function getSelectedContentsValueExpression()/*:ValueExpression*/ {
    if (!this.selectedContentsValueExpression$7De5) {
      this.selectedContentsValueExpression$7De5 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.selectedContentsValueExpression$7De5;
  }/*

  public*/ function getPublicationSetValueExpression()/*:ValueExpression*/ {
    if (!this.publicationSetValueExpression$7De5) {
      this.publicationSetValueExpression$7De5 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.publicationSetValueExpression$7De5;
  }/*

  protected*/ function getErrorIssuesExistValueExpression()/*:ValueExpression*/ {
    if (!this.errorIssuesValueExpression$7De5) {
      this.errorIssuesValueExpression$7De5 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.errorIssuesValueExpression$7De5;
  }/*

  public*/ function getNextStateValueExpression()/*:ValueExpression*/ {
    if (!this.nextStateValueExpression$7De5) {
      this.nextStateValueExpression$7De5 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.nextStateValueExpression$7De5;
  }/*

  public*/ function getNotesValueExpression(bindTo/*:ValueExpression*/)/*:ValueExpression*/ {
    if (!this.notesValueExpression$7De5) {
      this.notesValueExpression$7De5 = bindTo.extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES, com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMMENT_VARIABLE);
    }
    return this.notesValueExpression$7De5;
  }/*

  override public*/ function isApplyButtonDisabled()/*:Boolean*/ {
    // If next step is 'Compose' then it is OK to have error issues.
    // The composer has to deal with them.
    // If the errorIssuesExistVE's value is undefined, then the issues are being loaded. Treat this as if an error issue existed.
    return com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMPOSE_TASK_NAME !== this.getNextStateValueExpression().getValue()
            && (this.getErrorIssuesExistValueExpression().getValue() || this.getErrorIssuesExistValueExpression().getValue() === undefined);
  }/*

  protected*/ function getStatePanelTitleValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
      var task/*:Task*/ = AS3.getBindable(this$,"bindToTask") ?AS3.as( AS3.getBindable(this$,"bindToTask").getValue(),  com.coremedia.cap.workflow.Task) : null;
      return task && task.isAccepted() && task.getPerformer() === com.coremedia.cap.common.SESSION.getUser()
              ? this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanelWrapper_next_state_label')
              : this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanelWrapper_states_label');
    });
  }/*

  protected*/ function getRetrieveIssuesForSessionUserVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      //Approve Task + accepted -> Check issues for session user instead of assignees
      var task/*:Task*/ = AS3.getBindable(this$,"bindToTask") ?AS3.as( AS3.getBindable(this$,"bindToTask").getValue(),  com.coremedia.cap.workflow.Task) : null;
      return ! !(task && task.isAccepted() && task.getPerformer() === com.coremedia.cap.common.SESSION.getUser()
              && com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.APPROVE_TASK_NAME === task.getDefinition().getName());
    });
  }/*

  public*/ function registerProcessTaskOperationExitFunctions()/*:void*/ {
    var inboxDetailPanelWrapperCmp/*:InboxDetailPanelWrapper*/ =AS3.as( this.findParentByType(com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper.xtype),  com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper);
    if (inboxDetailPanelWrapperCmp) {
      var exitFunctions/*:Object*/ = {};
      exitFunctions[com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.TWO_STEP_PUBLICATION_WORKFLOW_TYPE] = {
        Approve: {
          complete: {
            before: [com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils.setProcessApprovedState, com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils.checkInSelectedAndExtendedContentsAndUpdateChangeSet],
            callback: [com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils.notifyWorkflowFinished]
          },
          cancel: {
            before: [com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils.checkInSelectedContentsAndUpdateChangeSet]
          }
        },
        Compose: {
          complete: {
            before: [com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils.checkInSelectedAndExtendedContentsAndUpdateChangeSet]
          },
          cancel: {
            before: [com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils.checkInSelectedContentsAndUpdateChangeSet]
          }
        }
      };

      inboxDetailPanelWrapperCmp.registerProcessTaskOperationExitFunctions(exitFunctions);
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.getChangeSetContentsValueExpression$7De5().removeChangeListener(AS3.bind(this,"updateSelectedContents$7De5"));
    this.getSelectedContentsAndVersionsValueExpression$7De5().removeChangeListener(AS3.bind(this,"updateChangeSet$7De5"));
    this.getAssignedMembersVE().removeChangeListener(AS3.bind(this,"updateProcess$7De5"));
    this.getAssignedMembersVE().removeChangeListener(AS3.bind(this,"getPublicationSetIssues"));
    AS3.getBindable(this,"bindToTask") && AS3.getBindable(this,"bindToTask").removeChangeListener(AS3.bind(this,"updateAssignedMembersForTask$7De5"));
    (AS3.getBindable(this,"bindTo") && !AS3.getBindable(this,"bindToTask")) && AS3.getBindable(this,"bindTo").removeChangeListener(AS3.bind(this,"updateAssignedMembersForProcess$7De5"));
    this.getRetrieveIssuesForSessionUserVE().removeChangeListener(AS3.bind(this,"getPublicationSetIssues"));
    com.coremedia.cms.editor.controlroom.workflow.WorkflowForm.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.WorkflowForm",
      selectedContentsValueExpression$7De5: null,
      selectedContentsVersionsValueExpression$7De5: null,
      changeSetContentsValueExpression$7De5: null,
      publicationSetValueExpression$7De5: null,
      errorIssuesValueExpression$7De5: null,
      nextStateValueExpression$7De5: null,
      notesValueExpression$7De5: null,
      assignedMembersVE$7De5: null,
      assignedMembersPanelVisibleVE$7De5: null,
      assignedMembersFromProcessVE$7De5: null,
      assignedMembersInitialized$7De5: false,
      processNameValueExpression$7De5: null,
      constructor: DefaultPublicationWorkflowDetailFormBase$,
      super$7De5: function() {
        com.coremedia.cms.editor.controlroom.workflow.WorkflowForm.prototype.constructor.apply(this, arguments);
      },
      getWorkflowSetPanel: getWorkflowSetPanel,
      getProcessNameVE: getProcessNameVE,
      getPublicationSetIssues: getPublicationSetIssues,
      getSelectedContentsAndVersionsValueExpression$7De5: getSelectedContentsAndVersionsValueExpression,
      getAssignedMembersFromProcessVE$7De5: getAssignedMembersFromProcessVE,
      updateChangeSet$7De5: updateChangeSet,
      getChangeSetContentsValueExpression$7De5: getChangeSetContentsValueExpression,
      updateSelectedContents$7De5: updateSelectedContents,
      getAssignedMembersVE: getAssignedMembersVE,
      getAssignMembersPanelVisibleVE: getAssignMembersPanelVisibleVE,
      updateAssignedMembersForTask$7De5: updateAssignedMembersForTask,
      updateAssignedMembersForProcess$7De5: updateAssignedMembersForProcess,
      updateProcess$7De5: updateProcess,
      filterGroups$7De5: filterGroups,
      filterUsers$7De5: filterUsers,
      getSelectedContentsValueExpression: getSelectedContentsValueExpression,
      getPublicationSetValueExpression: getPublicationSetValueExpression,
      getErrorIssuesExistValueExpression: getErrorIssuesExistValueExpression,
      getNextStateValueExpression: getNextStateValueExpression,
      getNotesValueExpression: getNotesValueExpression,
      isApplyButtonDisabled: isApplyButtonDisabled,
      getStatePanelTitleValueExpression: getStatePanelTitleValueExpression,
      getRetrieveIssuesForSessionUserVE: getRetrieveIssuesForSessionUserVE,
      registerProcessTaskOperationExitFunctions: registerProcessTaskOperationExitFunctions,
      beforeDestroy: beforeDestroy,
      statics: {PUBLICATION_SET_PANEL_ITEM_ID: "publicationDetailSetPanel"},
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cap.workflow.Task",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowForm",
        "com.coremedia.collaboration.controlroom.rest.PublicationSetIssuesService",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel",
        "com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils",
        "com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants"
      ]
    };
});
