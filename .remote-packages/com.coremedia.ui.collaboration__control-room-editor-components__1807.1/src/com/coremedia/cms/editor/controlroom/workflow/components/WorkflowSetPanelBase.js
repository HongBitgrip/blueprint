Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanelBase", function(WorkflowSetPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.components {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.collaboration.controlroom.rest.CapList;
import com.coremedia.collaboration.controlroom.rest.CapListRepository;
import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;
import com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.data.validation.Severity;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.grid.GridPanel;

public class WorkflowSetPanelBase extends CollapsiblePanel {


  protected static const WORKFLOW_SET_ISSUES_LOADING_PROPERTY_NAME:String = "workflowSetIssuesLoading";
  protected static const WORKFLOW_SET_PROPERTY_NAME:String = "workflowSet";

  private var model:Bean;
  private var workflowSetIssuesPropertyName:String;

  private var workflowSetValueExpression:ValueExpression;

  public var workflowName:String;

  private var errorIssuesExistValueExpression:ValueExpression;
  private var errorIssuesExistValueExpressionInternal:ValueExpression;

  private var selectedContentsValueExpression:ValueExpression;
  private var extendedContentsValueExpression:ValueExpression;
  private var selectedExtendedContentsValueExpression:ValueExpression;

  private var allWorkflowSetIssuesValueExpression:ValueExpression;
  private var worflowIssuesButtonIssuesValueExpression:ValueExpression;
  private var reloadWorkflowSetIssuesCallCounter:int = 0;

  private var localIssuesValueExpression:ValueExpression;

  private var contentsToTrackForInvalidatingWorkflowIssues:Array =*/function contentsToTrackForInvalidatingWorkflowIssues_(){this.contentsToTrackForInvalidatingWorkflowIssues$UgMN=( []);}/*;

  private var userChosenContentsGridPanel:GridPanel;

  public var getIssuesFunction:Function;

  public*/ function WorkflowSetPanelBase$(config/*:WorkflowSetPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$UgMN(config);contentsToTrackForInvalidatingWorkflowIssues_.call(this);;

    this.errorIssuesExistValueExpression$UgMN = AS3.getBindable(config,"errorIssuesExistValueExpression");
    this.workflowSetValueExpression$UgMN = AS3.getBindable(config,"workflowSetValueExpression");

    this.workflowName = config.workflowName;

    this.selectedContentsValueExpression$UgMN = AS3.getBindable(config,"selectedContentsValueExpression");

    this.selectedContentsValueExpression$UgMN.addChangeListener(AS3.bind(this,"updateWorkflowSet$UgMN"));

    this.updateWorkflowSet$UgMN();

    this.getErrorIssuesExistValueExpressionInternal$UgMN().addChangeListener(AS3.bind(this,"updateErrorIssuesValueExpression$UgMN"));
    this.updateErrorIssuesValueExpression$UgMN();

    this.getAllIssuesValueExpression().addChangeListener(AS3.bind(this,"setupContentIssueListeners$UgMN"));
    this.selectedContentsValueExpression$UgMN.addChangeListener(AS3.bind(this,"setupContentIssueListeners$UgMN"));
    this.setupContentIssueListeners$UgMN();

    this.userChosenContentsGridPanel$UgMN =AS3.as( this.queryById(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel.USER_CHOSEN_CONTENTS_ITEM_ID),  com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel);

  }/*

  public*/ function getWorkflowSetIssuesPropertyName()/*:String*/ {
    if (!this.workflowSetIssuesPropertyName$UgMN) {
      this.workflowSetIssuesPropertyName$UgMN = this.workflowName + "SetIssues";
    }
    return this.workflowSetIssuesPropertyName$UgMN;
  }/*

  public*/ function getModel()/*:Bean*/ {
    if (!this.model$UgMN) {
      this.model$UgMN = com.coremedia.ui.data.beanFactory.createLocalBean({
        'userChosenContents': []
      });
    }
    return this.model$UgMN;
  }/*

  private*/ function getErrorIssuesExistValueExpressionInternal()/*:ValueExpression*/ {var this$=this;
    if (!this.errorIssuesExistValueExpressionInternal$UgMN) {
      this.errorIssuesExistValueExpressionInternal$UgMN = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        var errorIssuesExists/*:Boolean*/ = undefined;
        var issues/*:Array*/ = this$.getAllIssuesValueExpression().getValue();
        if (issues) {
          errorIssuesExists = issues.some(function (issue/*:Issue*/)/*:Boolean*/ {
            return issue.severity === com.coremedia.ui.data.validation.Severity.ERROR;
          });
        }
        return errorIssuesExists;
      });
    }
    return this.errorIssuesExistValueExpressionInternal$UgMN;
  }/*

  private*/ function updateErrorIssuesValueExpression()/*:void*/ {
    this.errorIssuesExistValueExpression$UgMN.setValue(this.getErrorIssuesExistValueExpressionInternal$UgMN().getValue());
  }/*

  protected*/ function getExtendedContentsValueExpressionInternal(workflowSetVE/*:ValueExpression*/)/*:ValueExpression*/ {var this$=this;
    if (!this.extendedContentsValueExpression$UgMN) {
      this.extendedContentsValueExpression$UgMN = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        if (!workflowSetVE.getValue()) {
          return [];
        } else {
          return this$.getExtendedContentsValueExpression().getValue();
        }
      });
    }
    return this.extendedContentsValueExpression$UgMN;
  }/*

  public*/ function getExtendedContentsValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {

      var workflowSetIssues/*:WorkflowSetIssues*/ = this$.getModel().get(this$.getWorkflowSetIssuesPropertyName());
      return com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils.getExtendedContents(workflowSetIssues);
    });
  }/*

  protected*/ function getSelectedExtendedContentsValueExpression()/*:ValueExpression*/ {
    if (!this.selectedExtendedContentsValueExpression$UgMN) {
      this.selectedExtendedContentsValueExpression$UgMN = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }

    return this.selectedExtendedContentsValueExpression$UgMN;
  }/*

  private*/ function updateWorkflowSet()/*:void*/ {var this$=this;
    var workflowSet/*:CapList*/ = this.workflowSetValueExpression$UgMN.getValue();
    // If workflow set already exists, make sure it is loaded before updating it.
    if (workflowSet) {
      workflowSet.load(function ()/*:void*/ {
        this$.doUpdateWorkflowSet$UgMN();
      });
    } else {
      // If workflow set does not yet exist, call update method right away. It will take care of creating the workflow set.
      this.doUpdateWorkflowSet$UgMN();
    }
  }/*

  private*/ function doUpdateWorkflowSet()/*:void*/ {var this$=this;
    var selectedContents/*:Array*/ = this.selectedContentsValueExpression$UgMN.getValue() || [];
    var workflowSetContents/*:Array*/ = this.workflowSetValueExpression$UgMN.getValue() ?
            (AS3.as(this.workflowSetValueExpression$UgMN.getValue(),  com.coremedia.collaboration.controlroom.rest.CapList)).getItems() : undefined;

    if (!com.coremedia.ui.util.ObjectUtils.equal(selectedContents, workflowSetContents)) {
      if (!this.workflowSetValueExpression$UgMN.getValue()) {
        var capListRepository/*:CapListRepository*/ = com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance();
        capListRepository.createWorkflowSet(null, selectedContents, function (capList/*:CapList*/)/*:void*/ {
          this$.workflowSetValueExpression$UgMN.setValue(capList);
          if (!this$.getModel().get(WorkflowSetPanelBase.WORKFLOW_SET_PROPERTY_NAME)) {
            this$.getModel().set(WorkflowSetPanelBase.WORKFLOW_SET_PROPERTY_NAME, this$.workflowSetValueExpression$UgMN.getValue());
          }

          this$.getModel().set(WorkflowSetPanelBase.WORKFLOW_SET_ISSUES_LOADING_PROPERTY_NAME, true);
          this$.getIssuesFunction &&  this$.getIssuesFunction(function (workflowSetIssues/*:WorkflowSetIssues*/)/*:void*/ {
            this$.getModel().set(WorkflowSetPanelBase.WORKFLOW_SET_ISSUES_LOADING_PROPERTY_NAME, false);
          });
        });
      } else {
        this.getModel().set(WorkflowSetPanelBase.WORKFLOW_SET_ISSUES_LOADING_PROPERTY_NAME, true);
        (AS3.as(this.workflowSetValueExpression$UgMN.getValue(),  com.coremedia.collaboration.controlroom.rest.CapList)).setItems(selectedContents, function ()/*:void*/ {
          this$.invalidateWorkflowSetIssues$UgMN();
        });
      }
    }
  }/*

  private*/ function invalidateWorkflowSetIssues()/*:void*/ {var this$=this;
    var workflowSetIssues/*:WorkflowSetIssues*/ = this.getModel().get(this.getWorkflowSetIssuesPropertyName());
    if (workflowSetIssues) {
      this.getIssuesFunction &&  this.getIssuesFunction(function (workflowSetIssues/*:WorkflowSetIssues*/)/*:void*/ {
        this$.getModel().set(WorkflowSetPanelBase.WORKFLOW_SET_ISSUES_LOADING_PROPERTY_NAME, false);
      });
    }
  }/*


  internal*/ function expandOrCollapseDependentContent()/*:Boolean*/ {
    var issues/*:Array*/ = this.getAllIssuesValueExpression().getValue();
    if (issues) {
      for/* each*/(var $1=0;$1</* in*/ issues.length;++$1) {var issue/*:Issue*/ =issues[$1];
        if (issue && issue.code == com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues.INFO_CODE_EXTENDED_WORKFLOW) {
          return false;
        }
      }
    }
    return true;
  }/*

  private*/ function setupContentIssueListeners()/*:void*/ {var this$=this;
    this.contentsToTrackForInvalidatingWorkflowIssues$UgMN.forEach(function (content/*:Content*/)/*:void*/ {
      content.removeValueChangeListener(AS3.bind(this$,"reloadWorkflowSetIssues$UgMN"));
    });

    // Clone to avoid side effects for VE
    this.contentsToTrackForInvalidatingWorkflowIssues$UgMN = (this.selectedContentsValueExpression$UgMN.getValue() || []).concat([]);

    //noinspection JSMismatchedCollectionQueryUpdate
    var issues/*:Array*/ = this.getAllIssuesValueExpression().getValue();
    if (issues) {
      issues.forEach(function (issue/*:Issue*/)/*:void*/ {
        //noinspection JSMismatchedCollectionQueryUpdate
        if (issue.arguments[0]) {
          var contents/*:Array*/ =AS3.as( issue.arguments[0],  Array) || [];
          contents.forEach(function (content/*:Content*/)/*:void*/ {
            if (this$.contentsToTrackForInvalidatingWorkflowIssues$UgMN.indexOf(content) === -1) {
              this$.contentsToTrackForInvalidatingWorkflowIssues$UgMN.push(content);
            }
          });
        }
      });
    }

    this.contentsToTrackForInvalidatingWorkflowIssues$UgMN.forEach(function (content/*:Content*/)/*:void*/ {
      content.addValueChangeListener(AS3.bind(this$,"reloadWorkflowSetIssues$UgMN"));
    });
  }/*

  private*/ function reloadWorkflowSetIssues()/*:void*/ {
    this.reloadWorkflowSetIssuesCallCounter$UgMN++;
    if (this.reloadWorkflowSetIssuesCallCounter$UgMN === 1) {
      this.reloadWorkflowSetIssuesIfCounterUnchanged$UgMN(this.reloadWorkflowSetIssuesCallCounter$UgMN);
    }
  }/*

  private*/ function reloadWorkflowSetIssuesIfCounterUnchanged(counter/*:int*/)/*:void*/ {var this$=this;
    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
      if (counter === this$.reloadWorkflowSetIssuesCallCounter$UgMN) {
        this$.reloadWorkflowSetIssuesCallCounter$UgMN = 0;
        var workflowSetIssues/*:WorkflowSetIssues*/ = this$.getModel().get(this$.getWorkflowSetIssuesPropertyName());
        if (workflowSetIssues) {
          this$.invalidateWorkflowSetIssues$UgMN();
        }
      } else {
        this$.reloadWorkflowSetIssuesIfCounterUnchanged$UgMN(this$.reloadWorkflowSetIssuesCallCounter$UgMN);
      }
    });
  }/*

  internal*/ function getAllIssuesValueExpression()/*:ValueExpression*/ {var this$=this;
    return this.allWorkflowSetIssuesValueExpression$UgMN ||
            (this.allWorkflowSetIssuesValueExpression$UgMN = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
              if (!this$.getModel().get(WorkflowSetPanelBase.WORKFLOW_SET_ISSUES_LOADING_PROPERTY_NAME)) {
                var workflowSetIssues/*:WorkflowSetIssues*/ = this$.getModel().get(this$.getWorkflowSetIssuesPropertyName());
                //noinspection JSMismatchedCollectionQueryUpdate
                var issues/*:Array*/;
                if (workflowSetIssues) {
                  issues = workflowSetIssues.getIssues(false) || [];
                }
                var localIssues/*:Array*/ = this$.localIssuesValueExpression$UgMN ? this$.localIssuesValueExpression$UgMN.getValue() : undefined;

                if (issues === undefined && localIssues == undefined) {
                  return undefined;
                }

                return (issues || []).concat(localIssues || []);

              } else {
                // not yet determined
                return undefined;
              }
            }));
  }/*

  internal*/ function getWorkflowIssuesButtonIssuesValueExpression()/*:ValueExpression*/ {var this$=this;
    return this.worflowIssuesButtonIssuesValueExpression$UgMN ||
            (this.worflowIssuesButtonIssuesValueExpression$UgMN = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
              var allIssues/*:Array*/ = this$.getAllIssuesValueExpression().getValue();
              if (allIssues === undefined) {
                return undefined;
              }

              allIssues = allIssues || [];
              return allIssues.filter(function (issue/*:Issue*/)/*:Boolean*/ {return issue.severity !== com.coremedia.ui.data.validation.Severity.INFO;});
            }));
  }/*



  override protected*/ function onDestroy()/*:void*/ {var this$=this;
    this.contentsToTrackForInvalidatingWorkflowIssues$UgMN.forEach(function (content/*:Content*/)/*:void*/ {
      content.removeValueChangeListener(AS3.bind(this$,"reloadWorkflowSetIssues$UgMN"));
    });
    this.selectedContentsValueExpression$UgMN.removeChangeListener(AS3.bind(this,"updateWorkflowSet$UgMN"));
    this.getAllIssuesValueExpression().removeChangeListener(AS3.bind(this,"setupContentIssueListeners$UgMN"));
    this.selectedContentsValueExpression$UgMN.removeChangeListener(AS3.bind(this,"setupContentIssueListeners$UgMN"));
    this.getErrorIssuesExistValueExpressionInternal$UgMN().removeChangeListener(AS3.bind(this,"updateErrorIssuesValueExpression$UgMN"));
    if (this.workflowSetValueExpression$UgMN.getValue()) {
      this.workflowSetValueExpression$UgMN.getValue().destroy();
    }
    com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
      model$UgMN: null,
      workflowSetIssuesPropertyName$UgMN: null,
      workflowSetValueExpression$UgMN: null,
      workflowName: null,
      errorIssuesExistValueExpression$UgMN: null,
      errorIssuesExistValueExpressionInternal$UgMN: null,
      selectedContentsValueExpression$UgMN: null,
      extendedContentsValueExpression$UgMN: null,
      selectedExtendedContentsValueExpression$UgMN: null,
      allWorkflowSetIssuesValueExpression$UgMN: null,
      worflowIssuesButtonIssuesValueExpression$UgMN: null,
      reloadWorkflowSetIssuesCallCounter$UgMN: 0,
      localIssuesValueExpression$UgMN: null,
      userChosenContentsGridPanel$UgMN: null,
      getIssuesFunction: null,
      constructor: WorkflowSetPanelBase$,
      super$UgMN: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.constructor.apply(this, arguments);
      },
      getWorkflowSetIssuesPropertyName: getWorkflowSetIssuesPropertyName,
      getModel: getModel,
      getErrorIssuesExistValueExpressionInternal$UgMN: getErrorIssuesExistValueExpressionInternal,
      updateErrorIssuesValueExpression$UgMN: updateErrorIssuesValueExpression,
      getExtendedContentsValueExpressionInternal: getExtendedContentsValueExpressionInternal,
      getExtendedContentsValueExpression: getExtendedContentsValueExpression,
      getSelectedExtendedContentsValueExpression: getSelectedExtendedContentsValueExpression,
      updateWorkflowSet$UgMN: updateWorkflowSet,
      doUpdateWorkflowSet$UgMN: doUpdateWorkflowSet,
      invalidateWorkflowSetIssues$UgMN: invalidateWorkflowSetIssues,
      expandOrCollapseDependentContent: expandOrCollapseDependentContent,
      setupContentIssueListeners$UgMN: setupContentIssueListeners,
      reloadWorkflowSetIssues$UgMN: reloadWorkflowSetIssues,
      reloadWorkflowSetIssuesIfCounterUnchanged$UgMN: reloadWorkflowSetIssuesIfCounterUnchanged,
      getAllIssuesValueExpression: getAllIssuesValueExpression,
      getWorkflowIssuesButtonIssuesValueExpression: getWorkflowIssuesButtonIssuesValueExpression,
      onDestroy: onDestroy,
      statics: {
        WORKFLOW_SET_ISSUES_LOADING_PROPERTY_NAME: "workflowSetIssuesLoading",
        WORKFLOW_SET_PROPERTY_NAME: "workflowSet"
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.collaboration.controlroom.rest.CapList",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl",
        "com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel",
        "com.coremedia.cms.editor.controlroom.workflow.publication.ExtendedWorkflowUtils"
      ]
    };
});
