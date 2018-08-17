Ext.define("com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDragDropModel", function(WorkflowPanelDragDropModel) {/*package com.coremedia.cms.editor.controlroom.workflow.dd {

import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.cms.editor.controlroom.ControlRoom;
import com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction;
import com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel;
import com.coremedia.cms.editor.sdk.util.WorkflowUtils;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;

import ext.Action;
import ext.Component;
import ext.Ext;
import ext.dd.DragSource;

public class WorkflowPanelDragDropModel implements DragDropModel {

  private var component:Component;
  private var canStartPublicationWorkflow:ValueExpression;
  private var canStartTranslationWorkflow:ValueExpression;
  private var contents:ValueExpression;

  public*/ function WorkflowPanelDragDropModel$(component/*:Component*/) {
    this.component$34ey = component;
    this.contents$34ey = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    this.canStartPublicationWorkflow$34ey = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"canStartPublicationWorkflows$34ey"));
    this.canStartTranslationWorkflow$34ey = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"canStartTranslationWorkflows$34ey"));
  }/*

  public*/ function allowDefaultAction(source/*:DragSource*/, elementIds/*:Array*/, targetElementId/*:String*/)/*:Boolean*/ {
    var remoteBeansForNodes/*:Array*/ = com.coremedia.ui.util.BeanCollectionDropZoneHelper.getRemoteBeansForNodes(elementIds);
    var contentsForNodes/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(remoteBeansForNodes);
    // if any dragged items are filtered out, do not allow drop
    if (remoteBeansForNodes.length !== contentsForNodes.length) {
      return false;
    }
    if (contentsForNodes.length <= 0) {
      return false;
    }

    this.contents$34ey.setValue(contentsForNodes);

    if (this.component$34ey.disabled) {
      return false;
    }

    if (this.isPublicationWorkflowPanel$34ey() && !this.canStartPublicationWorkflow$34ey.getValue()) {
      return false;
    }

    return !(this.isTranslationWorkflowPanel$34ey() && !this.canStartTranslationWorkflow$34ey.getValue());
  }/*

  public*/ function allowAlternativeAction(source/*:DragSource*/, elementIds/*:Array*/, targetElementId/*:String*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function performDefaultAction(droppedNodeIds/*:Array*/, targetPanelId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    if (this.isPublicationWorkflowPanel$34ey()) {
      this.startPublicationWorkflow$34ey();
    }
    if (this.isTranslationWorkflowPanel$34ey()) {
      this.startTranslationWorkflow$34ey();
    }
  }/*

  public*/ function performAlternativeAction(droppedNodeIds/*:Array*/, targetPanelId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    // not allowed
  }/*

  public*/ function getModelItemId()/*:String*/ {
    return this.getWorkflowPanelId$34ey();
  }/*

  private*/ function startPublicationWorkflow()/*:void*/ {
    var showStartPublicationWorkflowWindowAction/*:ShowStartPublicationWorkflowWindowAction*/ =
            Ext.create(com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction, {contents: this.contents$34ey.getValue()});
    showStartPublicationWorkflowWindowAction.execute();
  }/*

  private*/ function startTranslationWorkflow()/*:void*/ {var this$=this;
    var pullAction/*:StartPullTranslationWorkflowAction*/ = AS3.cast(com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction,{});
    AS3.setBindable(pullAction,"contents" , this.contents$34ey.getValue());
    var translationAction/*:Action*/ = new com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction(pullAction);

    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:**/ {
      var pullEnabled/*:Boolean*/ = AS3.cast(com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction,translationAction).isEnabledFor(this$.contents$34ey.getValue());
      if (pullEnabled === undefined) {
        return undefined;
      }

      if (pullEnabled) {
        this$.component$34ey.disable();
        AS3.cast(com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction,translationAction).registerFinallyCallback(function ()/*:void*/ {
          this$.component$34ey.enable();
        });
      } else {
        var showAction/*:ShowStartTranslationWorkflowWindowAction*/ = AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction,{});
        AS3.setBindable(showAction,"contents" , this$.contents$34ey.getValue());
        translationAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction(showAction);
      }

      translationAction.execute();

      return null;
    }).loadValue(Ext.emptyFn);
  }/*

  /**
   * Get the id of the workflow panel this drag drop model is bound to.
   *
   * @return the (item) ID of the workflow panel
   * /
  private*/ function getWorkflowPanelId()/*:String*/ {
    return AS3.is( this.component$34ey,  com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel) ?
            this.component$34ey.getItemId() :
            this.component$34ey.findParentByType(com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel.xtype).getItemId();
  }/*

  private*/ function isTranslationWorkflowPanel()/*:Boolean*/ {
    return this.getWorkflowPanelId$34ey() === com.coremedia.cms.editor.controlroom.ControlRoom.TRANSLATION_WORKFLOW_PANEL_ID;
  }/*

  private*/ function isPublicationWorkflowPanel()/*:Boolean*/ {
    return this.getWorkflowPanelId$34ey() === com.coremedia.cms.editor.controlroom.ControlRoom.PUBLICATION_WORKFLOW_PANEL_ID;
  }/*

  /**
   * Check if
   * <ul>
   *   <li> session user has permissions to start publication of the {@link WorkflowPanelDragDropModel.contents} </li>
   *   <li> workflow server supports the configured publication workflows </li>
   * </ul>
   * /
  private*/ function canStartPublicationWorkflows()/*:Boolean*/ {
    var showStartPublicationWorkflowWindowAction/*:ShowStartPublicationWorkflowWindowAction*/ =
            Ext.create(com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction, {contents: this.contents$34ey.getValue()});

    return (!showStartPublicationWorkflowWindowAction.isDisabled()
            && canStartWorkflows$static(showStartPublicationWorkflowWindowAction.initialConfig.processDefinitionNames));
  }/*

  /**
   * Check if
   * <ul>
   *   <li> session user has permissions to start translation of the {@link WorkflowPanelDragDropModel.contents} </li>
   *   <li> workflow server supports the configured translation workflows </li>
   * </ul>
   * /
  private*/ function canStartTranslationWorkflows()/*:Boolean*/ {
    var showStartTranslationWorkflowWindowAction/*:ShowStartTranslationWorkflowWindowAction*/ =
            Ext.create(com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction, {contents: this.contents$34ey.getValue()});

    return (!showStartTranslationWorkflowWindowAction.isDisabled()
            && canStartWorkflows$static(showStartTranslationWorkflowWindowAction.initialConfig.processDefinitionNames));
  }/*

  private static*/ function canStartWorkflows$static(configuredWorkflows/*:Array*/)/*:Boolean*/ {
    var enabledWorkflows/*:Array*/ = com.coremedia.cms.editor.sdk.util.WorkflowUtils.getAvailableProcessDefNames(configuredWorkflows);
    return !(enabledWorkflows === undefined || enabledWorkflows.length === 0);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.models.DragDropModel"],
      component$34ey: null,
      canStartPublicationWorkflow$34ey: null,
      canStartTranslationWorkflow$34ey: null,
      contents$34ey: null,
      constructor: WorkflowPanelDragDropModel$,
      allowDefaultAction: allowDefaultAction,
      allowAlternativeAction: allowAlternativeAction,
      performDefaultAction: performDefaultAction,
      performAlternativeAction: performAlternativeAction,
      getModelItemId: getModelItemId,
      startPublicationWorkflow$34ey: startPublicationWorkflow,
      startTranslationWorkflow$34ey: startTranslationWorkflow,
      getWorkflowPanelId$34ey: getWorkflowPanelId,
      isTranslationWorkflowPanel$34ey: isTranslationWorkflowPanel,
      isPublicationWorkflowPanel$34ey: isPublicationWorkflowPanel,
      canStartPublicationWorkflows$34ey: canStartPublicationWorkflows,
      canStartTranslationWorkflows$34ey: canStartTranslationWorkflows,
      requires: [
        "Ext",
        "com.coremedia.cap.content.ContentProxyHelper",
        "com.coremedia.cms.editor.sdk.util.WorkflowUtils",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.models.DragDropModel",
        "com.coremedia.ui.util.BeanCollectionDropZoneHelper"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.ControlRoom",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction",
        "com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel"
      ]
    };
});
