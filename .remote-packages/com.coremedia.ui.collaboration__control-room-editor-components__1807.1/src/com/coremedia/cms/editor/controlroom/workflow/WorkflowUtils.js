Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils", function(WorkflowUtils) {/*package com.coremedia.cms.editor.controlroom.workflow {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.user.User;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.WorkflowContentService;
import com.coremedia.cap.workflow.WorkflowRepository;
import com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartPublicationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartTranslationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.Premular;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.util.EncodingUtil;

import ext.StringUtil;
import ext.window.MessageBoxWindow;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class WorkflowUtils {

  public static const START_TRANSLATION_WORKFLOW_ITEM_ID:String = "startTranslationWorkflowItemId";
  public static const START_PUBLICATION_WORKFLOW_ITEM_ID:String = "startPublicationWorkflowItemId";

  public static*/ function invalidateWorkflowContentLockingForActivePremular$static()/*:void*/ {
    var workflowRepository/*:WorkflowRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository();
    if(workflowRepository) {
      var premular/*:Premular*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkArea() ?AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea().getActiveTab(),  com.coremedia.cms.editor.sdk.premular.Premular) : null;
      if (premular) {
        var content/*:Content*/ = premular.getContent();
        if (content) {
          var workflowContentService/*:WorkflowContentService*/ = workflowRepository.getWorkflowContentService();
          workflowContentService.invalidateLocking(content);
        }
      }
    }
  }/*

  public static*/ function askAbortWorkflow$static(process/*:Process*/, callback/*:Function*/)/*:void*/ {
    process.load(function ()/*:void*/ {
      var workflowName/*:String*/ = com.coremedia.ui.util.EncodingUtil.encodeForHTML(process.getProperties().get("subject"));
      com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AbortWorkflow_confirm_title'),
              Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AbortWorkflow_confirm_message'), workflowName),
              Ext.window.MessageBox.ERROR,
              {
                ok: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AbortWorkflow_yes_button'),
                cancel: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AbortWorkflow_no_button')
              },
              function (btn/*:String*/)/*:void*/ {
                if ("ok" === btn) {
                  callback(true);
                } else {
                  callback(false);
                }
              }, false);
    });
  }/*

  public static*/ function mayAbortWorkflow$static(process/*:Process*/)/*:Boolean*/ {
    if (!process || process.isCompleted()) {
      return false;
    }
    var owner/*:User*/ = process.getOwner();
    var user/*:User*/ = com.coremedia.cap.common.SESSION.getUser();
    return owner === user || user.isAdministrative();
  }/*

  public static*/ function showWorkflowAbortedMessage$static(processName/*:String*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AbortWorkflow_warning_title'),
            Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AbortWorkflow_warning_message'), processName));
  }/*

  public static*/ function getPublicationToolbarButtons$static()/*:Array*/ {
    var actionCfg/*:ShowEmptyStartPublicationWorkflowWindowAction*/ = AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartPublicationWorkflowWindowAction,{});
    AS3.setBindable(actionCfg,"processDefinitionNames" , [
      com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.SIMPLE_PUBLICATION_WORKFLOW_TYPE,
      com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.TWO_STEP_PUBLICATION_WORKFLOW_TYPE
    ]);

    var iconButtonCfg/*:IconButton*/ = AS3.cast(com.coremedia.ui.components.IconButton,{});
    iconButtonCfg.itemId = WorkflowUtils.START_PUBLICATION_WORKFLOW_ITEM_ID;
    AS3.setBindable(iconButtonCfg,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_start_publication_tooltip'));
    AS3.setBindable(iconButtonCfg,"iconCls" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_showStartPublicationWorkflowWindow_icon'));
    iconButtonCfg.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartPublicationWorkflowWindowAction(actionCfg);

    return [iconButtonCfg];
  }/*

  public static*/ function getTranslationToolbarButtons$static()/*:Array*/ {
    var buttonCfg/*:IconButton*/ = AS3.cast(com.coremedia.ui.components.IconButton,{});
    buttonCfg.itemId = WorkflowUtils.START_TRANSLATION_WORKFLOW_ITEM_ID;
    AS3.setBindable(buttonCfg,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_start_translation_tooltip'));
    AS3.setBindable(buttonCfg,"iconCls" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_showStartTranslationWorkflowWindow_icon'));
    buttonCfg.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartTranslationWorkflowWindowAction();
    return [buttonCfg];
  }/*
}*/function WorkflowUtils$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: WorkflowUtils$,
      statics: {
        START_TRANSLATION_WORKFLOW_ITEM_ID: "startTranslationWorkflowItemId",
        START_PUBLICATION_WORKFLOW_ITEM_ID: "startPublicationWorkflowItemId",
        invalidateWorkflowContentLockingForActivePremular: invalidateWorkflowContentLockingForActivePremular$static,
        askAbortWorkflow: askAbortWorkflow$static,
        mayAbortWorkflow: mayAbortWorkflow$static,
        showWorkflowAbortedMessage: showWorkflowAbortedMessage$static,
        getPublicationToolbarButtons: getPublicationToolbarButtons$static,
        getTranslationToolbarButtons: getTranslationToolbarButtons$static
      },
      requires: [
        "Ext.String",
        "Ext.window.MessageBox",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.Premular",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartPublicationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartTranslationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants"
      ]
    };
});
