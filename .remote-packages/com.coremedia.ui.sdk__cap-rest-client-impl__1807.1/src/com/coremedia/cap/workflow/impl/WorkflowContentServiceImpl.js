Ext.define("com.coremedia.cap.workflow.impl.WorkflowContentServiceImpl", function(WorkflowContentServiceImpl) {/*package com.coremedia.cap.workflow.impl {
import com.coremedia.cap.common.IdHelper;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cap.workflow.WorkflowContentService;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.ExecuteEventually;

public class WorkflowContentServiceImpl implements WorkflowContentService {
  public*/ function WorkflowContentServiceImpl$() {/*
    super()*/;
  }/*

  public*/ function getLockingProcesses(content/*:Content*/)/*:Array*/ {
    var processRemote/*:RemoteBean*/ = getLockingProcessesRemoteBean$static(content);
    if (processRemote) {
      var processes/*:Array*/ =AS3.as(  processRemote.get("items"),  Array);
      if (processes) {
        processes = processes.filter(function (process/*:ProcessImpl*/)/*:Boolean*/ {
          return (process.getState().exists !== false);
        });
        return processes;
      }
    }
    return [];
  }/*

  public*/ function isLockedForUser(content/*:Content*/)/*:Boolean*/ {
    var processArray/*:Array*/ = this.getLockingProcesses(content);
    var isLockedForUser/*:Boolean*/ = false;
    if (processArray && processArray.length > 0 && isContentIncluded$static(processArray, content)) {
      isLockedForUser = true;
      var runningTaskUnlocksContent/*:Boolean*/ = false;
      processArray.forEach(function (process/*:Process*/)/*:void*/ {
        if (process && process.getTasks()) {
          isLockedForUser = !process.isCompleted();
          if (isLockedForUser) {
            var unlockingTaskNamesString/*:String*/ = process.getProperties().get("contentNotLockedForPerformerOfTasks");
            if (unlockingTaskNamesString) {
              unlockingTaskNamesString = unlockingTaskNamesString.replace(/ /g, "");
              var unlockingTaskNames/*:Array*/ = unlockingTaskNamesString.split(",");
              unlockingTaskNames.forEach(function (taskName/*:String*/)/*:void*/ {
                var task/*:Task*/ = process.getTask(taskName);
                if (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(task)
                        && com.coremedia.cap.common.SESSION.getUser() === task.getPerformer()
                        && task.isRunning()) {
                  runningTaskUnlocksContent = true;
                }
              });
            }
          }
        }
      });
    }

    if (runningTaskUnlocksContent) {
      return false;
    } else {
      return isLockedForUser;
    }
  }/*

  private static*/ function isContentIncluded$static(processes/*:Array*/, content/*:Content*/)/*:Boolean*/ {
    for(var n/*:int*/ =0;n < processes.length;n++) {
      var process/*:Process*/ = AS3.cast(com.coremedia.cap.workflow.Process,processes[n]);
      if (process.getProperties())  {
        var changeSet/*:Array*/ = process.getProperties().get("changeSet");
        if (changeSet) {
          for(var i/*:int*/ =0;i < changeSet.length;i++) {
            var changeSetItem/*:Object*/ = changeSet[i];
            var contentInProcess/*:Content*/;
            if (AS3.is(changeSetItem,  com.coremedia.cap.content.Content)) {
              // content
              contentInProcess =AS3.as( changeSetItem,  com.coremedia.cap.content.Content);
            } else {
              var versionInProcess/*:Version*/ =AS3.as( changeSetItem,  com.coremedia.cap.content.Version);
              if (versionInProcess) {
                contentInProcess = versionInProcess.getContainingContent();
              }
            }
            if (contentInProcess && contentInProcess === content) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }/*

  public*/ function invalidateLocking(content/*:Content*/, callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=1)callback=null;
    var lockingProcessesRemoteBean/*:RemoteBean*/ = getLockingProcessesRemoteBean$static(content);
    if (lockingProcessesRemoteBean) {
      if (callback) {
        lockingProcessesRemoteBean.invalidate(function ()/*:void*/ {
          var execEvt/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(callback);
          var processes/*:Array*/ = this$.getLockingProcesses(content);
          processes.forEach(function (process/*:ProcessImpl*/)/*:void*/ {
            process.load(execEvt.delay());
          });
          execEvt.proceed();
        });
      } else {
        lockingProcessesRemoteBean.invalidate();
      }
    }
  }/*

  private static*/ function getLockingProcessesRemoteBean$static(content/*:Content*/)/*:RemoteBean*/ {
      return com.coremedia.ui.data.beanFactory.getRemoteBean("workflowContentService/" + com.coremedia.cap.common.IdHelper.parseContentId(content) + "/lockingProcesses");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.workflow.WorkflowContentService"],
      constructor: WorkflowContentServiceImpl$,
      getLockingProcesses: getLockingProcesses,
      isLockedForUser: isLockedForUser,
      invalidateLocking: invalidateLocking,
      requires: [
        "com.coremedia.cap.common.IdHelper",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.Version",
        "com.coremedia.cap.workflow.Process",
        "com.coremedia.cap.workflow.WorkflowContentService",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.ExecuteEventually"
      ]
    };
});
