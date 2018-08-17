Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils", function(ExtendedWorkflowUtils) {/*package com.coremedia.cms.editor.controlroom.workflow.publication {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.impl.OperationResultImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.impl.BulkCheckInMethod;
import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.CheckInResultCodes;
import com.coremedia.cap.content.results.CheckInResultItem;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel;
import com.coremedia.cms.editor.controlroom.workflow.WorkflowFinishedNotification;
import com.coremedia.collaboration.controlroom.rest.CapList;
import com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues;
import com.coremedia.collaboration.controlroom.rest.PublicationSetIssuesService;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ExecuteEventually;

import ext.container.Container;
import ext.tab.TabBar;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ExtendedWorkflowUtils {

  private static*/ function getExtendedContentsValueExpression$static(publicationSet/*:CapList*/, assignedMembers/*:Array*/, callback/*:Function*/)/*:void*/ {
    com.coremedia.collaboration.controlroom.rest.PublicationSetIssuesService.loadPublicationSetIssues(
            publicationSet,
            assignedMembers,
            null,
            function (publicationSetIssues/*:WorkflowSetIssues*/)/*:Array*/ {
              publicationSetIssues && callback && callback(ExtendedWorkflowUtils.getExtendedContents(publicationSetIssues));
            });
  }/*

  /**
   * Retrieve the extended workflow set resources from the corresponding
   * WorkflowSetIssue.
   *
   * @param workflowSetIssues the WorkflowSetIssue holding the extended workflow set resources
   * @return the extended workflow set resources
   * /
  public static*/ function getExtendedContents$static(publicationSetIssues/*:WorkflowSetIssues*/)/*:Array*/ {
    if (publicationSetIssues) {
      var issues/*:Vector.<Issue>*/ = publicationSetIssues.getIssues(false);
      if (issues) {
        for (var i/*:int*/ = 0; i < issues.length; i++) {
          var issue/*:Issue*/ = issues[i];
          if (issue.code === com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues.INFO_CODE_EXTENDED_WORKFLOW) {
            return issue.arguments[0];
          }
        }
      }
    }
    return [];
  }/*

  public static*/ function checkInSelectedContentsAndUpdateChangeSet$static(task/*:Task*/, workflowDetailPanel/*:Container*/, callback/*:Function*/)/*:void*/ {
    ExtendedWorkflowUtils.checkInAndUpdateChangeSet(task, workflowDetailPanel, false, callback);
  }/*

  public static*/ function checkInSelectedAndExtendedContentsAndUpdateChangeSet$static(task/*:Task*/, workflowDetailPanel/*:Container*/, callback/*:Function*/)/*:void*/ {
    ExtendedWorkflowUtils.checkInAndUpdateChangeSet(task, workflowDetailPanel, true, callback);
  }/*

  public static*/ function checkInAndUpdateChangeSet$static(task/*:Task*/, workflowDetailPanel/*:Container*/, includeExtendedContents/*:Boolean*/, callback/*:Function*/)/*:void*/ {
    if (task) {
      task.load(function ()/*:void*/ {
        var process/*:Process*/ = task.getContainingProcess();
        process.load(function ()/*:void*/ {

          var contents/*:Array*/ = [];

          var publicationSet/*:CapList*/;
          var publicationWorkflowDetailForm/*:DefaultPublicationWorkflowDetailForm*/ =AS3.as( workflowDetailPanel,  com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm);
          if (publicationWorkflowDetailForm) {
            var publicationSetValueExpression/*:ValueExpression*/ = publicationWorkflowDetailForm.getPublicationSetValueExpression();
            publicationSetValueExpression.loadValue(function ()/*:void*/ {
              publicationSet = publicationSetValueExpression.getValue();
              if (publicationSet) {
                publicationSet.load(function ()/*:void*/ {
                  contents = contents.concat(publicationSet.getItems());
                  if (includeExtendedContents) {
                    getExtendedContentsValueExpression$static(publicationSet, [com.coremedia.cap.common.SESSION.getUser()], function (extendedContents/*:Array*/)/*:void*/ {
                      contents = contents.concat(extendedContents);
                      doCheckInAndUpdateChangeSet$static(contents, process, callback, task, publicationSet);
                    });
                  } else {
                    doCheckInAndUpdateChangeSet$static(contents, process, callback, task, publicationSet);
                  }
                });
              }
            });
          }
        });
      });
    }
  }/*

  public static*/ function setProcessApprovedState$static(task/*:Task*/, workflowDetailPanel/*:Container*/, callback/*:Function*/)/*:void*/ {
    if (task) {
      task.load(function ()/*:void*/ {
        var process/*:Process*/ = task.getContainingProcess();
        process.load(function ()/*:void*/ {
          var publicationWorkflowDetailForm/*:DefaultPublicationWorkflowDetailForm*/ =AS3.as( workflowDetailPanel,  com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm);
          if (publicationWorkflowDetailForm) {
            if (publicationWorkflowDetailForm.getNextStateValueExpression().getValue() === com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMPOSE_TASK_NAME) {
              process.getProperties().set("approved", false);
              callback();
            } else if (publicationWorkflowDetailForm.getNextStateValueExpression().getValue() === com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.PUBLISH_TASK_NAME) {
              process.getProperties().set("approved", true);
              callback();
            }
          }
        });
      });
    }
  }/*

  private static*/ function doCheckInAndUpdateChangeSet$static(contents/*:Array*/, process/*:Process*/, callback/*:Function*/, task/*:Task*/, publicationSet/*:CapList*/)/*:void*/ {
    filterReadableContents$static(contents, function (readableContents/*:Array*/)/*:void*/ {
      // Only do something if there are actually contents to check in
      if (readableContents.length > 0) {
        var changeSet/*:Array*/ = process.getProperties().get("changeSet");
        // Only alter part of the change set that is readable, leave everything else untouched
        changeSet = removeContentsAndTheirVersionsFromChangeSet$static(changeSet, readableContents);
        var bulkCheckIn/*:BulkCheckInMethod*/ = new com.coremedia.cap.content.impl.BulkCheckInMethod(com.coremedia.cap.common.SESSION.getConnection().getContentRepository(), readableContents, function (bulkOperationResult/*:BulkOperationResult*/)/*:void*/ {
          var errorOccured/*:Boolean*/ = false;
          bulkOperationResult.results.forEach(function (checkInResultItem/*:CheckInResultItem*/)/*:void*/ {
            if (checkInResultItem.resultCode === com.coremedia.cap.content.results.CheckInResultCodes.DOCUMENT_ALREADY_CHECKED_IN
                    || checkInResultItem.resultCode === com.coremedia.cap.content.results.CheckInResultCodes.DOCUMENT_CHECKED_IN) {
              changeSet.push(checkInResultItem.content);
              changeSet.push(checkInResultItem.version);
            } else if (checkInResultItem.resultCode === com.coremedia.cap.content.results.CheckInResultCodes.FOLDER_CANNOT_CHECK_IN) {
              changeSet.push(checkInResultItem.content);
            } else {
              errorOccured = true;
            }
          });

          if (!errorOccured) {
            if (equalLists$static(changeSet, process.getProperties().get("changeSet"))) {
              callback();
            } else {
              function waitForChangeSetUpdated()/*:void*/ {
                task.getContainingProcess().invalidate(function ()/*:void*/ {

                  // Wait until both change set and publication set are in the state that we desire.
                  // If not, re-set the change set. This is necessary as asynchronous stuff concerning
                  // WorkflowSetPanels' selectedContentsValueExpression (and the dependent
                  // logic in PublicationWorkflowDetailPanel) might interfere
                  // and alter the change set 'concurrently'.
                  if (equalLists$static(process.getProperties().get("changeSet"), changeSet)
                          && equalLists$static(contents, publicationSet.getItems())) {
                    callback();
                  } else {
                    process.getProperties().set("changeSet", changeSet);
                    com.coremedia.ui.util.EventUtil.invokeLater(waitForChangeSetUpdated);
                  }
                });
              }

              waitForChangeSetUpdated();
              process.getProperties().set("changeSet", changeSet);
            }
          }
        });
        bulkCheckIn.execute();
      } else {
        callback();
      }
    });
  }/*

  private static*/ function filterReadableContents$static(contents/*:Array*/, callback/*:Function*/)/*:void*/ {
    var readableContents/*:Array*/ = [];

    var execEvt/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(function ()/*:void*/ {
      callback(readableContents);
    });

    contents.forEach(function (content/*:Content*/)/*:void*/ {
      execEvt.delay();
      content.load(function ()/*:void*/ {
        if (content.getState().readable) {
          readableContents.push(content);
        }
        execEvt.proceed();
      });
    });
    execEvt.proceed();
  }/*

  private static*/ function removeContentsAndTheirVersionsFromChangeSet$static(changeSet/*:Array*/, contents/*:Array*/)/*:Array*/ {
    var newChangeSet/*:Array*/ = [];

    changeSet.forEach(function (changeSetItem/*:**/)/*:void*/ {
      if (AS3.is(changeSetItem,  com.coremedia.cap.content.Content)) {
        if (contents.indexOf(changeSetItem) === -1) {
          newChangeSet.push(changeSetItem);
        }
      } else if (AS3.is(changeSetItem,  com.coremedia.cap.content.Version)) {
        var content/*:Content*/ = ExtendedWorkflowUtils.getContentForVersionByUriPath(AS3.as(changeSetItem,  com.coremedia.cap.content.Version));
        if (contents.indexOf(content) === -1) {
          newChangeSet.push(changeSetItem);
        }
      }
    });

    return newChangeSet;
  }/*

  public static*/ function getContentForVersionByUriPath$static(version/*:Version*/)/*:Content*/ {
    var versionUriPath/*:String*/ = version.getUriPath();
    var versionUriPathArcs/*:Array*/ = versionUriPath.split("/");
    var contentUriPath/*:String*/ = versionUriPathArcs[0] + "/" + versionUriPathArcs[1];
    return (AS3.as(com.coremedia.ui.data.beanFactory.getRemoteBean(contentUriPath),  com.coremedia.cap.content.Content));
  }/*

  private static*/ function equalLists$static(list1/*:Array*/, list2/*:Array*/)/*:Boolean*/ {
    if (list1.length !== list2.length) {
      return false;
    }
    for (var i/*:int*/ = 0; i < list1.length; i++) {
      if (list2.indexOf(list1[i]) === -1) {
        return false;
      }
    }
    return true;
  }/*

  public static*/ function notifyWorkflowFinished$static(task/*:Task*/, workflowDetailPanel/*:Container*/, operationResult/*:OperationResultImpl*/)/*:void*/ {
    task.load(function ()/*:void*/ {
      var process/*:Process*/ = task.getContainingProcess();
      process.load(function ()/*:void*/ {
        if (operationResult.successful
                && process.getDefinition().getName() === com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.TWO_STEP_PUBLICATION_WORKFLOW_TYPE
                && process.getProperties().get("approved")) {
          var notificationConfig/*:WorkflowFinishedNotification*/ = AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowFinishedNotification,{});
          AS3.setBindable(notificationConfig,"text" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanelWrapper_workflow_completed'));
          AS3.setBindable(notificationConfig,"position" , "rb");
          AS3.setBindable(notificationConfig,"target" , ExtendedWorkflowUtils.getCompletedNotificationTarget(workflowDetailPanel));
          var notification/*:WorkflowFinishedNotification*/ = new com.coremedia.cms.editor.controlroom.workflow.WorkflowFinishedNotification(notificationConfig);
          notification.show();
        }
      });
    });
  }/*

  public static*/ function getCompletedNotificationTarget$static(workflowDetailPanel/*:Container*/)/*:String*/ {
    var tabPanel/*:TabbedWorkflowPanel*/ =AS3.as( workflowDetailPanel.findParentByType(com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel.xtype, true),  com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel);
    var tabBar/*:TabBar*/ = tabPanel.getTabBar();
    return tabBar.getComponent(2).getId();
  }/*
}*/function ExtendedWorkflowUtils$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ExtendedWorkflowUtils$,
      statics: {
        getExtendedContents: getExtendedContents$static,
        checkInSelectedContentsAndUpdateChangeSet: checkInSelectedContentsAndUpdateChangeSet$static,
        checkInSelectedAndExtendedContentsAndUpdateChangeSet: checkInSelectedAndExtendedContentsAndUpdateChangeSet$static,
        checkInAndUpdateChangeSet: checkInAndUpdateChangeSet$static,
        setProcessApprovedState: setProcessApprovedState$static,
        getContentForVersionByUriPath: getContentForVersionByUriPath$static,
        notifyWorkflowFinished: notifyWorkflowFinished$static,
        getCompletedNotificationTarget: getCompletedNotificationTarget$static
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.Version",
        "com.coremedia.cap.content.impl.BulkCheckInMethod",
        "com.coremedia.cap.content.results.CheckInResultCodes",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.collaboration.controlroom.rest.PublicationSetIssuesService",
        "com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ExecuteEventually",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowFinishedNotification",
        "com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm",
        "com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants"
      ]
    };
});
