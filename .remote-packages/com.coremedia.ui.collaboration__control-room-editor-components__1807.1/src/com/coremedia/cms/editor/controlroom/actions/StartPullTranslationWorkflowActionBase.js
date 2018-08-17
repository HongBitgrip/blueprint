Ext.define("com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowActionBase", function(StartPullTranslationWorkflowActionBase) {/*package com.coremedia.cms.editor.controlroom.actions {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cms.editor.controlroom.controlRoomContext;
import com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.actions.ContentAction;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames;
import com.coremedia.cms.editor.sdk.util.WorkflowUtils;
import com.coremedia.cms.editor.sdk.util.contentUtil;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ConcurrentUtil;

import ext.Component;
import ext.ComponentManager;
import ext.DateUtil;
import ext.Ext;
import ext.window.Window;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class StartPullTranslationWorkflowActionBase extends ContentAction {

  private var tooltipExpression:ValueExpression;
  private var finallyCallbacks:Array =*/function finallyCallbacks_(){this.finallyCallbacks$ZZOz=( []);}/*;

  public*/ function StartPullTranslationWorkflowActionBase$(config/*:StartPullTranslationWorkflowAction = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$ZZOz(AS3.cast(com.coremedia.cms.editor.sdk.actions.ContentAction,Ext.apply({
      iconCls: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_startPullTranslationWorkflow_icon'),
      text: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_startPullTranslationWorkflow_text'),
      tooltip: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_startPullTranslationWorkflow_tooltip'),
      handler:AS3.bind( this,"startWorkflow$ZZOz")
    }, config)));finallyCallbacks_.call(this);;

    this.tooltipExpression$ZZOz = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:String*/ {
      return StartPullTranslationWorkflowActionBase.getDisableReasonFor(this$.getContents());
    });
  }/*

  override protected*/ function onFirstComponentAdded()/*:void*/ {
    com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.onFirstComponentAdded.call(this);
    this.tooltipExpression$ZZOz.addChangeListener(AS3.bind(this,"updateTooltip$ZZOz"));
  }/*

  override protected*/ function onLastComponentRemoved()/*:void*/ {
    com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.onLastComponentRemoved.call(this);
    this.tooltipExpression$ZZOz.removeChangeListener(AS3.bind(this,"updateTooltip$ZZOz"));
  }/*

  public*/ function registerFinallyCallback(callback/*:Function*/)/*:void*/ {
    this.finallyCallbacks$ZZOz.push(callback);
  }/*

  private*/ function executeFinallyCallbacks()/*:void*/ {
    for (var i/*:int*/ = 0; i < this.finallyCallbacks$ZZOz.length; i++) {
      var callback/*:Function*/ = this.finallyCallbacks$ZZOz[i];
      callback();
    }
    this.finallyCallbacks$ZZOz = [];
  }/*

  private*/ function startWorkflow()/*:void*/ {var this$=this;
    this.resolveMasterContentObjects$ZZOz(function(masterContentObjects/*:Array*/)/*:void*/ {
      var variables/*:Object*/ = {};
      variables[com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.SUBJECT_VARIABLE] = get$workflowSubject$static();
      variables[com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.MASTER_CONTENT_OBJECTS_VARIABLE] = masterContentObjects;
      variables[com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.TARGET_SITE_ID_VARIABLE] = get$preferredSiteId$static();
      variables[com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.AUTO_SELF_ASSIGNED_VARIABLE] = true;

      var translationConfiguration/*:**/ = com.coremedia.cms.editor.sdk.editorContext.getConfiguration()['translation'];
      if (translationConfiguration.showPullTranslationStartWindow) {
        this$.showWorkflowWindow$ZZOz();
      } else {
        com.coremedia.cms.editor.sdk.util.WorkflowUtils.startProcess(get$firstAvailableTranslationProcessDefinitionNames$static(), variables,AS3.bind( this$,"pullTranslationStarted$ZZOz"));
      }
    });
  }/*

  private*/ function showWorkflowWindow()/*:void*/ {
    var startTranslationWorkflowWindowCfg/*:StartTranslationWorkflowWindow*/ = AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow,{});
    AS3.setBindable(startTranslationWorkflowWindowCfg,"contents" , this.getContents());
    AS3.setBindable(startTranslationWorkflowWindowCfg,"availableProcessDefinitionNames" , get$availableTranslationProcessDefinitionNames$static());
    AS3.setBindable(startTranslationWorkflowWindowCfg,"pullTranslation" , true);
    AS3.setBindable(startTranslationWorkflowWindowCfg,"processStartedCallback" ,AS3.bind( this,"pullTranslationStarted$ZZOz"));
    AS3.setBindable(startTranslationWorkflowWindowCfg,"processCancelledCallback" ,AS3.bind( this,"executeFinallyCallbacks$ZZOz"));
    var w/*:Window*/ = AS3.cast(Ext.window.Window,Ext.ComponentManager.create(startTranslationWorkflowWindowCfg));
    w.show();
  }/*

  private*/ function pullTranslationStarted(process/*:Process*/, error/*:Error = null*/)/*:void*/ {var this$=this;if(arguments.length<=1)error=null;
    if (error) {
      com.coremedia.cms.editor.sdk.util.WorkflowUtils.showStartProcessErrorDialog();
      this.executeFinallyCallbacks$ZZOz();
      return;
    }

    process.load(function()/*:void*/ {
      function isAcceptedOrEscalated()/*:Boolean*/ {
        // Needs to touch all tasks to trigger dependency tracking.
        var escalatedTasks/*:Array*/ = process.getTasks().filter(function (task/*:Task*/)/*:Boolean*/ {
          return task.isEscalated();
        });
        return task.isAccepted() || escalatedTasks.length > 0;
      }
      function cleanupAndPossiblyShow()/*:void*/ {
        if (task.isAccepted()) {
          showTask$static(task);
        }
        this$.executeFinallyCallbacks$ZZOz();
      }
      function handleTimeout()/*:void*/ {
        com.coremedia.ui.logging.Logger.warn("Task " + translateSelfTaskName + " (" + task + ") not auto-accepted within 30s. State: " + (task ? task.getTaskState() : "(unknown)"));
        this$.executeFinallyCallbacks$ZZOz();
      }

      var translateSelfTaskName/*:String*/ = "TranslateSelf";
      var task/*:Task*/ = process.getTask(translateSelfTaskName);
      com.coremedia.ui.util.ConcurrentUtil.executeWhen(isAcceptedOrEscalated, cleanupAndPossiblyShow, 30000, handleTimeout);
    });
  }/*

  private static*/ function showTask$static(task/*:Task*/)/*:void*/ {
    if (task) {
      com.coremedia.cms.editor.controlroom.controlRoomContext.getTranslationWfPanel(true).switchToTaskInInbox(task);
    }
  }/*

  /**
   * Resolve the contents to versions and call the callback with these as argument.
   * @param callback callback to call
   * /
  private*/ function resolveMasterContentObjects(callback/*:Function*/)/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.util.contentUtil.expandFolders(function (documents/*:Array*/)/*:void*/ {
      if (documents.length === 0) {
        this$.executeFinallyCallbacks$ZZOz();
        return;
      }

      com.coremedia.ui.data.RemoteBeanUtil.loadAll(function ()/*:void*/ {
        var masterVersions/*:Array*/ = documents
          // Pull Translation will always use the latest checked in version.
                .map(function (content/*:Content*/)/*:Version*/ {
                  return content.isCheckedIn() ?
                          content.getCheckedInVersion() :
                          content.getCheckedOutVersion();
                })
          // Ignore contents with only working versions. This is a fallback for folders where you might
          // implicitly get these contents. Explicitly selected contents which have only a working version
          // results in the action to be disabled.
                .filter(function (version/*:Version*/)/*:Boolean*/ {
                  return version !== null;
                });
        callback(masterVersions);
      }, documents);
    }, this.getContents());
  }/*

  private static*/ function  get$preferredSiteId$static()/*:String*/ {
    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    return sitesService.getPreferredSiteId();
  }/*

  private static*/ function  get$workflowSubject$static()/*:String*/ {
    var currentDate/*:String*/ = Ext.Date.format(new Date(), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dateFormat'));
    return com.coremedia.cap.common.SESSION.getUser().getName() + " " + currentDate;
  }/*

  private static*/ function  get$translationProcessDefinitionNames$static()/*:Array*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getTranslationProcessDefinitions();
  }/*

  private static*/ function  get$availableTranslationProcessDefinitionNames$static()/*:Array*/ {
    return com.coremedia.cms.editor.sdk.util.WorkflowUtils.getAvailableProcessDefNames(get$translationProcessDefinitionNames$static());
  }/*

  private static*/ function  get$firstAvailableTranslationProcessDefinitionNames$static()/*:String*/ {
    return String(get$availableTranslationProcessDefinitionNames$static()[0]);
  }/*

  public*/ function isEnabledFor(contents/*:Array*/)/*:Boolean*/ {
    var hidden/*:Boolean*/ = this.calculateHidden();
    var disabled/*:Boolean*/ = this.isDisabledFor(contents);

    if (hidden === undefined || disabled === undefined) {
      return undefined;
    }

    return !hidden && !disabled;
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    switch (mayStartWorkflow$static()) {
      case undefined: return undefined;
      case false: return true;
    }
    return com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.calculateHidden.call(this);
  }/*

  private static*/ function mayStartWorkflow$static()/*:Boolean*/ {
    var availableNames/*:Array*/ = get$availableTranslationProcessDefinitionNames$static();
    if (availableNames === undefined) {
      return undefined;
    }

    var hasAvailableWorkflows/*:Boolean*/ = availableNames && availableNames.length !== 0;

    if (hasAvailableWorkflows) {
      var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
      var preferredSite/*:Site*/ = sitesService.getPreferredSite();
      return preferredSite && preferredSite.isManagedByCurrentUser() && ! !preferredSite.getMasterSite() &&
              preferredSite.isLanguageTranslationTargetSite() &&
              preferredSite.getMasterSite().getSiteRootFolder().getState().readable;
    }

    return false;
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    return ! !StartPullTranslationWorkflowActionBase.getDisableReasonFor(contents);
  }/*

  /**
   * Provide the (first) reason, why the button is disabled or <code>null</code> if there is no reason to disable the
   * button.
   *
   * @param contents contents to evaluate the reason for
   * @return either a reason, or <code>null</code> if there is no reason
   * /
  protected static*/ function getDisableReasonFor$static(contents/*:Array*/)/*:String*/ {
    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();

    // Check if current user is allowed to start workflow already handle by isHiddenFor

    // For disabled state actually already handled in ContentAction. Nevertheless we require
    // this when calculating the tooltip.
    if (!contents || contents.length === 0) {
      return "noContents";
    }

    var preferredSite/*:Site*/ = sitesService.getPreferredSite();
    if (!preferredSite) {
      return "noPreferredSite";
    }

    var masterSite/*:Site*/ = preferredSite.getMasterSite();

    for/* each*/ (var $1=0;$1</* in*/ contents.length;++$1) {var content/*:Content*/ =contents[$1];
      // only Working Version
      if (content.isCheckedOut() && !content.getCheckedOutVersion()) {
        return "containsWorkingVersionOnlyContents";
      }
      var currentSite/*:Site*/ = sitesService.getSiteFor(content);

      if (masterSite !== currentSite) {
        return "contentsNotInMasterOfPreferred";
      }
    }

    return null;
  }/*

  /**
   * Updates the tooltip to show the first relevant reason why the button is disabled. If the disabled reason is
   * empty it falls back to the default tooltip set in component configuration.
   *
   * @param ve ValueExpression to determine the disabled tooltip
   * /
  private*/ function updateTooltip(ve/*:ValueExpression*/)/*:void*/ {
    var disableReason/*:String*/ = ve.getValue();
    var newTooltip/*:String*/ = this.initialConfig['tooltip'];
    if (disableReason) {
      newTooltip = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_startPullTranslationWorkflow_' + disableReason + '_disabled_tooltip');
    }
    this.each(function (component/*:Component*/)/*:void*/ {
      if (component &&AS3.is( component['setTooltip'],  Function)) {
        // Most likely only true for buttons; but who knows
        component['setTooltip'](newTooltip);
      }
    });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      tooltipExpression$ZZOz: null,
      constructor: StartPullTranslationWorkflowActionBase$,
      super$ZZOz: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      onFirstComponentAdded: onFirstComponentAdded,
      onLastComponentRemoved: onLastComponentRemoved,
      registerFinallyCallback: registerFinallyCallback,
      executeFinallyCallbacks$ZZOz: executeFinallyCallbacks,
      startWorkflow$ZZOz: startWorkflow,
      showWorkflowWindow$ZZOz: showWorkflowWindow,
      pullTranslationStarted$ZZOz: pullTranslationStarted,
      resolveMasterContentObjects$ZZOz: resolveMasterContentObjects,
      isEnabledFor: isEnabledFor,
      calculateHidden: calculateHidden,
      isDisabledFor: isDisabledFor,
      updateTooltip$ZZOz: updateTooltip,
      statics: {getDisableReasonFor: getDisableReasonFor$static},
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.Date",
        "Ext.window.Window",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames",
        "com.coremedia.cms.editor.sdk.util.WorkflowUtils",
        "com.coremedia.cms.editor.sdk.util.contentUtil",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ConcurrentUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.controlRoomContext",
        "com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow"
      ]
    };
});
