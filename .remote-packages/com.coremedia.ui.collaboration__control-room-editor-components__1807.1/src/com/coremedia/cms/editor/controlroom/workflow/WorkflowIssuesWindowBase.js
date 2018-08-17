Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindowBase", function(WorkflowIssuesWindowBase) {/*package com.coremedia.cms.editor.controlroom.workflow {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.premular.IssuesPanel;
import com.coremedia.cms.editor.sdk.validation.ValidationUtil;
import com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.data.validation.Severity;

import ext.Component;
import ext.Ext;
import ext.data.JsonStore;
import ext.data.Store;

[ResourceBundle('com.coremedia.cms.editor.sdk.publication.Publisher')]
[ResourceBundle('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors')]
public class WorkflowIssuesWindowBase extends StudioDialog {

  [Bindable]
  public var issuesVE:ValueExpression;

  [Bindable]
  public var cmOwnerCt:Component;

  private var warnIssueModelsExpression:ValueExpression;
  private var errorIssueModelsExpression:ValueExpression;

  private var warnIssuesStore:Store;
  private var errorIssuesStore:Store;

  private var errorsPanel:IssuesPanel;
  private var warningsPanel:IssuesPanel;

  private var renderedWorkflowIssuesVE:ValueExpression;

  public*/ function WorkflowIssuesWindowBase$(config/*:WorkflowIssuesWindow = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$Lr1D(config);

    this.warningsPanel$Lr1D =AS3.as( this.queryById(com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindow.WARNING_ISSUES_PANEL_ITEM_ID),  com.coremedia.cms.editor.sdk.premular.IssuesPanel);
    this.errorsPanel$Lr1D =AS3.as( this.queryById(com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindow.ERROR_ISSUES_PANEL_ITEM_ID),  com.coremedia.cms.editor.sdk.premular.IssuesPanel);

    this.mon(this.getWarnIssuesStore(), "load",AS3.bind( this,"issuesChanged$Lr1D"));
    this.mon(this.getErrorIssuesStore(), "load",AS3.bind( this,"issuesChanged$Lr1D"));

    this.on('afterrender', function ()/*:void*/ {
      if (AS3.getBindable(this$,"cmOwnerCt")) {
        var pos/*:Array*/ = AS3.getBindable(this$,"cmOwnerCt").getEl().getXY();
        this$.setPosition(pos[0] + AS3.getBindable(this$,"cmOwnerCt").getEl().getWidth(), pos[1]);
      }
    }, null, {single: true});

    this.getRenderedWorkflowIssuesVE$Lr1D().addChangeListener(AS3.bind(this,"refreshIssuePanels$Lr1D"));
  }/*

  private*/ function refreshIssuePanels()/*:void*/ {
    this.errorsPanel$Lr1D.getView().refresh();
    this.warningsPanel$Lr1D.getView().refresh();
  }/*

  private*/ function issuesChanged()/*:void*/ {
    this.updateLayout();
  }/*

  [InjectFromExtParent]
  public*/ function setClosed(closed/*:Boolean*/)/*:void*/ {
    if (closed) {
      this.close();
    }
  }/*

  private*/ function getFilteredIssues(predicate/*:Function*/)/*:Array*/ {
    return this.getIssues().filter(predicate);
  }/*

  /**
   * Retrieve the issues to be displayed in this window. By default, the bindTo expression
   * is evaluated and the contained content (if any) is asked for all its issues.
   *
   * @return the issues
   * /
  protected*/ function getIssues()/*:Array*/ {
    return AS3.getBindable(this,"issuesVE").getValue() || [];
  }/*

  private static*/ function toModel$static(issue/*:Issue*/)/*:WorkflowIssueModel*/ {
    var model/*:WorkflowIssueModel*/ = new com.coremedia.cms.editor.controlroom.workflow.WorkflowIssueModel();

    model.code = issue.code;

    if (model.code === com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues.CODE_ASSIGNEES_NOT_AUTHORIZED) {
      // Authorization issues need special preparation of the model
      handleAuthorizationIssue$static(issue, model);
    } else {
      // Generic preparation of the model
      var issueArguments/*:Array*/ =AS3.as( issue.arguments,  Array);
      if (issueArguments) {
        if (AS3.is(issueArguments[0],  Array) &&AS3.is( issueArguments[0][0],  com.coremedia.cap.content.Content)) {
          model.contents =AS3.as( issue.arguments[0],  Array);
        } else if (AS3.is(issueArguments[0],  AS3.int_)) {
          model.contents = issue.arguments[0];
        } else if (AS3.is(issueArguments[0],  String)) {
          model.message = issueArguments[0];
        }
      }
    }

    return model;
  }/*

  private static*/ function handleAuthorizationIssue$static(issue/*:Issue*/, model/*:WorkflowIssueModel*/)/*:void*/ {
    // Arguments of issue are 3 arrays:
    // 0: list of non-authorized contents if only one user was assigned, empty array otherwise
    // 1: non-authorized users
    model.contents = issue.arguments[0];
    model.users = issue.arguments[1];
    if (model.contents.length > 0) {
      // contents array not empty -> just 1 user was assigned
      if (model.users[0] === com.coremedia.cap.common.SESSION.getUser()) {
        // Forbidden assignee is session user (mostly the case for direct publication)
        // --> show contents with authorization issues
        model.code = "documentNoRights";
        model.users = [];
      } else {
        // Assignee is somebody else
        model.code = "assigneeNotAuthorized";
        model.contents = [];
      }
    } else {
      // contents array is empty --> either:
      // 1. 1 user assigned WITH content rights but WITHOUT required workflow server roles
      // 2. more than 1 users assigned, some of who don't have the required rights
      if (model.users.length === 1) {
        model.code = "assigneeNotAuthorized";
      } else {
        if (issue.severity !== com.coremedia.ui.data.validation.Severity.ERROR) {
          model.code = "someAssigneesNotAuthorized";
        }
      }
    }
  }/*

  private*/ function getIssueModels(predicate/*:Function*/)/*:Array*/ {
    var models/*:Array*/ = this.getFilteredIssues$Lr1D(predicate).map(toModel$static);
    models.sort(compareModels$static);
    for (var i/*:int*/ = 0; i < models.length; i++) {
      models[i].id = '' + i;
    }
    return models;
  }/*

  private static*/ function compareModels$static(model1/*:WorkflowIssueModel*/, model2/*:WorkflowIssueModel*/)/*:Number*/ {
    // Sort by code
    if (model1.code < model2.code) {
      return -1;
    }
    if (model1.code > model2.code) {
      return 1;
    }
    return 0;
  }/*

  /**
   * Return an array of all issue models for issues at level warn.
   * @return the models
   * /
  protected*/ function getWarnIssueModels()/*:Array*/ {
    return this.getIssueModels$Lr1D(com.coremedia.cms.editor.sdk.validation.ValidationUtil.isWarnIssue);
  }/*

  /**
   *  Return an array of all issue models for issues at level error.
   * @return the models
   * /
  protected*/ function getErrorIssueModels()/*:Array*/ {
    return this.getIssueModels$Lr1D(com.coremedia.cms.editor.sdk.validation.ValidationUtil.isErrorIssue);
  }/*

  protected*/ function getWarnIssueModelsExpression()/*:ValueExpression*/ {
    if (!this.warnIssueModelsExpression$Lr1D) {
      this.warnIssueModelsExpression$Lr1D = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getWarnIssueModels"));
    }
    return this.warnIssueModelsExpression$Lr1D;
  }/*

  protected*/ function getErrorIssueModelsExpression()/*:ValueExpression*/ {
    if (!this.errorIssueModelsExpression$Lr1D) {
      this.errorIssueModelsExpression$Lr1D = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getErrorIssueModels"));
    }
    return this.errorIssueModelsExpression$Lr1D;
  }/*

  protected*/ function getWarnIssuesStore()/*:Store*/ {
    if (!this.warnIssuesStore$Lr1D) {
      this.warnIssuesStore$Lr1D = getIssuesStore$static();
    }
    return this.warnIssuesStore$Lr1D;
  }/*

  protected*/ function getErrorIssuesStore()/*:Store*/ {
    if (!this.errorIssuesStore$Lr1D) {
      this.errorIssuesStore$Lr1D = getIssuesStore$static();
    }
    return this.errorIssuesStore$Lr1D;
  }/*


  private static*/ function getIssuesStore$static()/*:Store*/ {
    return Ext.create(Ext.data.JsonStore, {
      idProperty: 'id',
      fields: ['id', 'code', 'message', 'contents', 'users']
    });
  }/*

  private*/ function getRenderedWorkflowIssuesVE()/*:ValueExpression*/ {var this$=this;
    if (!this.renderedWorkflowIssuesVE$Lr1D) {
      this.renderedWorkflowIssuesVE$Lr1D = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var issuesArray/*:Array*/ = AS3.getBindable(this$,"issuesVE").getValue() || [];
        return com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanelBase.renderWorkflowIssues(issuesArray.map(toModel$static));
      });
    }

    return this.renderedWorkflowIssuesVE$Lr1D;
  }/*


  override protected*/ function beforeDestroy()/*:void*/ {
    this.getRenderedWorkflowIssuesVE$Lr1D().removeChangeListener(AS3.bind(this,"refreshIssuePanels$Lr1D"));

    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      metadata: {setClosed: ["InjectFromExtParent"]},
      warnIssueModelsExpression$Lr1D: null,
      errorIssueModelsExpression$Lr1D: null,
      warnIssuesStore$Lr1D: null,
      errorIssuesStore$Lr1D: null,
      errorsPanel$Lr1D: null,
      warningsPanel$Lr1D: null,
      renderedWorkflowIssuesVE$Lr1D: null,
      constructor: WorkflowIssuesWindowBase$,
      super$Lr1D: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      refreshIssuePanels$Lr1D: refreshIssuePanels,
      issuesChanged$Lr1D: issuesChanged,
      setClosed: setClosed,
      getFilteredIssues$Lr1D: getFilteredIssues,
      getIssues: getIssues,
      getIssueModels$Lr1D: getIssueModels,
      getWarnIssueModels: getWarnIssueModels,
      getErrorIssueModels: getErrorIssueModels,
      getWarnIssueModelsExpression: getWarnIssueModelsExpression,
      getErrorIssueModelsExpression: getErrorIssueModelsExpression,
      getWarnIssuesStore: getWarnIssuesStore,
      getErrorIssuesStore: getErrorIssuesStore,
      getRenderedWorkflowIssuesVE$Lr1D: getRenderedWorkflowIssuesVE,
      beforeDestroy: beforeDestroy,
      config: {
        issuesVE: null,
        cmOwnerCt: null
      },
      requires: [
        "AS3.int_",
        "Ext",
        "Ext.data.JsonStore",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.controlroom.actions.ContentSetErrors_properties",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.cms.editor.sdk.premular.IssuesPanel",
        "com.coremedia.cms.editor.sdk.publication.Publisher_properties",
        "com.coremedia.cms.editor.sdk.validation.ValidationUtil",
        "com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.validation.Severity"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowIssueModel",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanelBase",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindow"
      ]
    };
});
