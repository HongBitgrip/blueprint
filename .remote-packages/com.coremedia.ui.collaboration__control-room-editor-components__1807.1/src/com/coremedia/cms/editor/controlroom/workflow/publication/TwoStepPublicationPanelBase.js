Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanelBase", function(TwoStepPublicationPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.publication {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.workflow.Task;
import com.coremedia.icons.CoreIcons_properties;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.panel.Panel;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class TwoStepPublicationPanelBase extends Panel {

  /**
   * The current workflow process task or undefined.
   * /
  [Bindable]
  public var taskValueExpression:ValueExpression;

  /**
   * The task definition name to assume when no taskValueExpression is given.
   * /
  [Bindable]
  public var defaultCurrentTaskName:String;

  protected var nextStateValueExpressionExternal:ValueExpression;

  private var computedNextStateValueExpression:ValueExpression;
  private var nextStateValueExpression:ValueExpression;

  // compute radio button labels
  protected var composeLabelValueExpression:ValueExpression;
  protected var approveLabelValueExpression:ValueExpression;
  protected var publishLabelValueExpression:ValueExpression;

  // compute arrow direction between compose and approve task
  protected var composeApproveArrowValueExpression:ValueExpression;

  // compute disabled state of radio buttons
  protected var composeDisabledValueExpression:ValueExpression;
  protected var approveDisabledValueExpression:ValueExpression;
  protected var publishDisabledValueExpression:ValueExpression;

  public*/ function TwoStepPublicationPanelBase$(config/*:TwoStepPublicationPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$o4ii(config);

    AS3.setBindable(this,"taskValueExpression" , AS3.getBindable(config,"taskValueExpression"));
    this.nextStateValueExpressionExternal = AS3.getBindable(config,"nextStateValueExpression");

    this.getComputedNextStateValueExpression$o4ii().addChangeListener(AS3.bind(this,"updateNextState$o4ii"));
    this.updateNextState$o4ii(this.getComputedNextStateValueExpression$o4ii());

    this.getNextStateValueExpression().addChangeListener(AS3.bind(this,"updateNextState$o4ii"));
  }/*

  protected*/ function getComposeLabelValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.composeLabelValueExpression) {
      this.composeLabelValueExpression = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        if (this$.isComposeTask()) {
          return this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Workflow_StudioTwoStepPublication_start_current');
        } else {
          return this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Workflow_StudioTwoStepPublication_revision');
        }
      });
    }
    return this.composeLabelValueExpression;
  }/*

  protected*/ function getApproveLabelValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.approveLabelValueExpression) {
      this.approveLabelValueExpression = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        if (this$.isComposeTask()) {
          return this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Workflow_StudioTwoStepPublication_pending');
        } else {
          return this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Workflow_StudioTwoStepPublication_pending_current');
        }
      });
    }
    return this.approveLabelValueExpression;
  }/*

  protected*/ function getPublishLabelValueExpression()/*:ValueExpression*/ {
    if (!this.publishLabelValueExpression) {
      this.publishLabelValueExpression = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Workflow_StudioTwoStepPublication_end'));
    }
    return this.publishLabelValueExpression;
  }/*

  protected*/ function getComposeApproveArrowValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.composeApproveArrowValueExpression) {
      this.composeApproveArrowValueExpression = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        if (this$.isComposeTask()) {
          return com.coremedia.icons.CoreIcons_properties.INSTANCE.prioritize_down; // arrow down
        } else {
          return com.coremedia.icons.CoreIcons_properties.INSTANCE.prioritize_up; // arrow up
        }
      });
    }
    return this.composeApproveArrowValueExpression;
  }/*

  protected*/ function getComposeDisabledValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.composeDisabledValueExpression) {
      this.composeDisabledValueExpression = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        // disabled if the current user is not approving
        return !this$.isMyRunningApproveTask();
      });
    }
    return this.composeDisabledValueExpression;
  }/*

  protected*/ function getApproveDisabledValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.approveDisabledValueExpression) {
      this.approveDisabledValueExpression = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        // disabled if the current user is not composing
        return !this$.isMyRunningComposeTask();
      });
    }
    return this.approveDisabledValueExpression;
  }/*

  protected*/ function getPublishDisabledValueExpression()/*:ValueExpression*/ {
    if (!this.publishDisabledValueExpression) {
      this.publishDisabledValueExpression = this.composeDisabledValueExpression;
    }
    return this.publishDisabledValueExpression;
  }/*

  private*/ function getCurrentTaskDefinitionName()/*:String*/ {
    if (!AS3.getBindable(this,"taskValueExpression")) {
      return AS3.getBindable(this,"defaultCurrentTaskName");
    }

    var task/*:Task*/ = this.getTask$o4ii();

    if (!task) {
      return null;
    }

    return task.getDefinition().getName();
  }/*

  protected*/ function isComposeTask()/*:Boolean*/ {
    return this.getCurrentTaskDefinitionName$o4ii() === com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMPOSE_TASK_NAME;
  }/*

  protected*/ function isMyRunningComposeTask()/*:Boolean*/ {
    if (this.getCurrentTaskDefinitionName$o4ii() !== com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMPOSE_TASK_NAME) {
      return false;
    }

    var task/*:Task*/ = this.getTask$o4ii();
    if (!task) {
      // If called in a panel that does not provide a task,
      // assume that the task is running.
      return true;
    }

    return task.isRunning() && task.getPerformer() === com.coremedia.cap.common.SESSION.getUser();
  }/*

  protected*/ function isMyRunningApproveTask()/*:Boolean*/ {
    if (this.getCurrentTaskDefinitionName$o4ii() !== com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.APPROVE_TASK_NAME) {
      return false;
    }

    var task/*:Task*/ = this.getTask$o4ii();

    if (!task) {
      // If called in a panel that does not provide a task,
      // assume that the task is not running.
      return false;
    }

    return task.isRunning() && task.getPerformer() === com.coremedia.cap.common.SESSION.getUser();
  }/*

  private*/ function getTask()/*:Task*/ {
    if (AS3.getBindable(this,"taskValueExpression")) {
      return (AS3.as(AS3.getBindable(this,"taskValueExpression").getValue(),  com.coremedia.cap.workflow.Task));
    } else {
      return null;
    }
  }/*

  private*/ function getComputedNextStateValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.computedNextStateValueExpression$o4ii) {
      this.computedNextStateValueExpression$o4ii = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        if (this$.isMyRunningApproveTask()) {
          return com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.PUBLISH_TASK_NAME;
        } else {
          return com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.APPROVE_TASK_NAME;
        }
      });
    }
    return this.computedNextStateValueExpression$o4ii;
  }/*

  private*/ function updateNextState(nextStateValueExpression/*:ValueExpression*/)/*:void*/ {
    this.getNextStateValueExpression().setValue(nextStateValueExpression.getValue());
    var state/*:String*/ = this.getNextStateValueExpression().getValue();
    if (this.nextStateValueExpressionExternal) {
      this.nextStateValueExpressionExternal.setValue(state);
    }
  }/*

  protected*/ function getNextStateValueExpression()/*:ValueExpression*/ {
    if (!this.nextStateValueExpression$o4ii) {
      this.nextStateValueExpression$o4ii = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.APPROVE_TASK_NAME);
    }
    return this.nextStateValueExpression$o4ii;
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.getComputedNextStateValueExpression$o4ii().removeChangeListener(AS3.bind(this,"updateNextState$o4ii"));
    this.getNextStateValueExpression().removeChangeListener(AS3.bind(this,"updateNextState$o4ii"));
    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      nextStateValueExpressionExternal: null,
      computedNextStateValueExpression$o4ii: null,
      nextStateValueExpression$o4ii: null,
      composeLabelValueExpression: null,
      approveLabelValueExpression: null,
      publishLabelValueExpression: null,
      composeApproveArrowValueExpression: null,
      composeDisabledValueExpression: null,
      approveDisabledValueExpression: null,
      publishDisabledValueExpression: null,
      constructor: TwoStepPublicationPanelBase$,
      super$o4ii: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getComposeLabelValueExpression: getComposeLabelValueExpression,
      getApproveLabelValueExpression: getApproveLabelValueExpression,
      getPublishLabelValueExpression: getPublishLabelValueExpression,
      getComposeApproveArrowValueExpression: getComposeApproveArrowValueExpression,
      getComposeDisabledValueExpression: getComposeDisabledValueExpression,
      getApproveDisabledValueExpression: getApproveDisabledValueExpression,
      getPublishDisabledValueExpression: getPublishDisabledValueExpression,
      getCurrentTaskDefinitionName$o4ii: getCurrentTaskDefinitionName,
      isComposeTask: isComposeTask,
      isMyRunningComposeTask: isMyRunningComposeTask,
      isMyRunningApproveTask: isMyRunningApproveTask,
      getTask$o4ii: getTask,
      getComputedNextStateValueExpression$o4ii: getComputedNextStateValueExpression,
      updateNextState$o4ii: updateNextState,
      getNextStateValueExpression: getNextStateValueExpression,
      beforeDestroy: beforeDestroy,
      config: {
        taskValueExpression: null,
        defaultCurrentTaskName: null
      },
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.workflow.Task",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants"]
    };
});
