Ext.define("com.coremedia.cms.editor.todo.components.TodoDueDateContainerBase", function(TodoDueDateContainerBase) {/*package com.coremedia.cms.editor.todo.components {

import com.coremedia.cms.editor.todo.model.Todo;
import com.coremedia.cms.editor.todo.model.TodoPropertyNames;
import com.coremedia.cms.editor.todo.rest.impl.TodoImpl;
import com.coremedia.ui.components.StatefulDateField;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.impl.IssueImpl;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.data.validation.Severity;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.ArrayUtils;

import ext.container.Container;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.todo.Todo')]
public class TodoDueDateContainerBase extends Container {

  /**
   * The Todo assigned to this component.
   * /
  [Bindable]
  public var todo:Todo;

  [Bindable]
  public var isEditorModeVE:ValueExpression;

  [Bindable]
  public var isDueDateFieldActiveVE:ValueExpression;

  /**
   * (optional) attaches additional modifiers to days in date picker.
   * /
  [Bindable]
  public var datePickerModifiersForDay:Function;

  /**
   * A function to validate the To-do's due date. It is required to have the signature
   * function (date:Date):Issue
   * /
  [Bindable]
  public var issueBuilder:Function;

  private var dueDateField:StatefulDateField;

  private var modifiersVE:ValueExpression;
  private var dueDateVE:ValueExpression;
  private var dueDateIssuesVE:ValueExpression;

  public*/ function TodoDueDateContainerBase$(config/*:TodoDueDateContainer = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$wjzC(config);

    this.dueDateField$wjzC =AS3.as( this.queryById(com.coremedia.cms.editor.todo.components.TodoDueDateContainer.DUE_DATE_FIELD_ITEM_ID),  com.coremedia.ui.components.StatefulDateField);

    this.mon(this.dueDateField$wjzC, "afterrender", function ()/*:void*/ {
      this$.getDueDateIssuesVE().addChangeListener(AS3.bind(this$,"changeIssueText$wjzC"));
      this$.changeIssueText$wjzC();

      this$.mon(this$.dueDateField$wjzC, "focusenter", function ()/*:void*/ {
        AS3.getBindable(this$,"isDueDateFieldActiveVE").setValue(true);
      });

      this$.mon(this$.dueDateField$wjzC, "focusleave", function ()/*:void*/ {
        AS3.getBindable(this$,"isDueDateFieldActiveVE").setValue(false);
      });

      this$.mon(this$.dueDateField$wjzC, "select", function (dateField/*:StatefulDateField*/, date/*:Date*/)/*:void*/ {
        AS3.getBindable(this$,"todo").setDueDate(date);
      });
    });
  }/*

  protected*/ function getModifiersVE()/*:ValueExpression*/ {var this$=this;
    if (!this.modifiersVE$wjzC) {
      this.modifiersVE$wjzC = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var modifiers/*:Array*/ = [];
        if (AS3.getBindable(this$,"isEditorModeVE").getValue()) {
          modifiers.push("editor-mode");
        }
        if (AS3.getBindable(this$,"isDueDateFieldActiveVE").getValue()) {
          modifiers.push("focus");
        }
        return modifiers;
      });
    }
    return this.modifiersVE$wjzC;
  }/*

  protected*/ function getDueDateValidationStateVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:ValidationState*/ {
      //noinspection JSMismatchedCollectionQueryUpdate
      var issues/*:Array*/ =AS3.as( this$.getDueDateIssuesVE().getValue(),  Array) || [];
      if (issues.length > 0) {
        var issue/*:IssueImpl*/ =AS3.as( issues[0],  com.coremedia.ui.data.impl.IssueImpl);
        return issue.severity === com.coremedia.ui.data.validation.Severity.ERROR ? com.coremedia.ui.mixins.ValidationState.ERROR : null;
      }
      return null;
    });
  }/*

  protected*/ function getDueDateFieldValidationStateVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:ValidationState*/ {
      //noinspection JSMismatchedCollectionQueryUpdate
      var issues/*:Array*/ =AS3.as( this$.getDueDateIssuesVE().getValue(),  Array) || [];
      if (issues.length > 0) {
        var issue/*:IssueImpl*/ =AS3.as( issues[0],  com.coremedia.ui.data.impl.IssueImpl);
        if (issue.severity === com.coremedia.ui.data.validation.Severity.ERROR) {
          return com.coremedia.ui.mixins.ValidationState.ERROR;
        }
        if (issue.severity === com.coremedia.ui.data.validation.Severity.WARN) {
          return com.coremedia.ui.mixins.ValidationState.WARNING;
        }
      }
      return null;
    });
  }/*

  protected*/ function getDueDateIssuesVE()/*:ValueExpression*/ {var this$=this;
    var me/*:TodoDueDateContainerBase*/ = this;
    if (!this.dueDateIssuesVE$wjzC) {
      this.dueDateIssuesVE$wjzC = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        if (AS3.getBindable(this$,"todo").getTodoState() === com.coremedia.cms.editor.todo.rest.impl.TodoImpl.DONE) {
          return [];
        }
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(me, "afterrender");
        if (this$.dueDateField$wjzC) {
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this$.dueDateField$wjzC, "afterrender");
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this$.dueDateField$wjzC, "validitychange");
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this$.dueDateField$wjzC, "change");
          var value/*:Date*/ =AS3.as( this$.dueDateField$wjzC.getValue(),  Date);
          return value && AS3.getBindable(this$,"issueBuilder") ? AS3.getBindable(this$,"issueBuilder")(value) : null;
        }
        return undefined;
      });
    }

    return this.dueDateIssuesVE$wjzC;
  }/*

  protected*/ function getDueDateValueExpression(todoBean/*:Todo*/)/*:ValueExpression*/ {
    if (!this.dueDateVE$wjzC) {
      this.dueDateVE$wjzC = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.todo.model.TodoPropertyNames.DUE_DATE, todoBean);
    }
    return this.dueDateVE$wjzC;
  }/*

  protected static*/ function getEmptyTextValueExpression$static()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromValue(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.todo.Todo', 'Todo_dueDate_emptyText'));
  }/*

  private*/ function changeIssueText()/*:void*/ {
    var issues/*:Array*/ =AS3.as( this.getDueDateIssuesVE().getValue(),  Array) || [];

    if (issues.length === 0) {
      AS3.setBindable(this.dueDateField$wjzC,"validationMessage" , null);
      return;
    }

    var issuesHtml/*:String*/ =
            com.coremedia.ui.util.ArrayUtils.reduce(issues, function (previous/*:String*/, currentIssue/*:Issue*/)/*:String*/ {
              var separator/*:String*/ = issues.indexOf(currentIssue) === 0 ? "" : "<br><br>";
              return previous + separator + currentIssue.code;
            }, "");

    AS3.setBindable(this.dueDateField$wjzC,"validationMessage" , issuesHtml);
  }/*

  protected*/ function resetDueDate()/*:void*/ {
    AS3.getBindable(this,"todo") && AS3.getBindable(this,"todo").setDueDate(null);
    this.dueDateField$wjzC && this.dueDateField$wjzC.reset();
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    this.getDueDateIssuesVE().removeChangeListener(AS3.bind(this,"changeIssueText$wjzC"));
    Ext.container.Container.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      dueDateField$wjzC: null,
      modifiersVE$wjzC: null,
      dueDateVE$wjzC: null,
      dueDateIssuesVE$wjzC: null,
      constructor: TodoDueDateContainerBase$,
      super$wjzC: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getModifiersVE: getModifiersVE,
      getDueDateValidationStateVE: getDueDateValidationStateVE,
      getDueDateFieldValidationStateVE: getDueDateFieldValidationStateVE,
      getDueDateIssuesVE: getDueDateIssuesVE,
      getDueDateValueExpression: getDueDateValueExpression,
      changeIssueText$wjzC: changeIssueText,
      resetDueDate: resetDueDate,
      onDestroy: onDestroy,
      config: {
        todo: null,
        isEditorModeVE: null,
        isDueDateFieldActiveVE: null,
        datePickerModifiersForDay: null,
        issueBuilder: null
      },
      statics: {getEmptyTextValueExpression: getEmptyTextValueExpression$static},
      requires: [
        "Ext.container.Container",
        "com.coremedia.cms.editor.todo.Todo_properties",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.impl.IssueImpl",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.util.ArrayUtils",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.todo.components.TodoDueDateContainer",
        "com.coremedia.cms.editor.todo.model.TodoPropertyNames",
        "com.coremedia.cms.editor.todo.rest.impl.TodoImpl"
      ]
    };
});
