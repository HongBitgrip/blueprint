Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanelBase", function(ProjectCalendarPanelBase) {/*package com.coremedia.cms.editor.controlroom.project.components {
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames;
import com.coremedia.cms.editor.sdk.util.TimeUtil;
import com.coremedia.cms.editor.todo.model.Todo;
import com.coremedia.cms.editor.todo.rest.impl.TodoImpl;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class ProjectCalendarPanelBase extends ProjectSubPanel {

  [Bindable]
  public var selectedDateVE:ValueExpression;

  private static const*/var BEFORE_PROJECT_START_MODIFIER$static/*:String*/ = "before-project-start";/*
  private static const*/var AFTER_PROJECT_END_MODIFIER$static/*:String*/ = "after-project-end";/*
  private static const*/var HAS_OPEN_TODOS_MODIFIER$static/*:String*/ = "has-open-todos";/*
  private static const*/var HAS_OVERDUE_TODOS_MODIFIER$static/*:String*/ = "has-overdue-todos";/*
  private static const*/var HAS_FINISHED_TODOS_MODIFIER$static/*:String*/ = "has-finished-todos";/*

  private var projectStartDateVE:ValueExpression;
  private var projectDueDateVE:ValueExpression;
  private var todoByDate:ValueExpression;
  private var activeFooterVE:ValueExpression;

  public*/ function ProjectCalendarPanelBase$(config/*:ProjectCalendarPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$H5_b(config);
  }/*

  override protected*/ function initComponent()/*:void*/ {
    com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel.prototype.initComponent.call(this);
  }/*

  protected*/ function getProjectStartDateVE(project/*:Project*/)/*:ValueExpression*/ {
    if (!this.projectStartDateVE$H5_b) {
      this.projectStartDateVE$H5_b = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.START_DATE, project);
    }
    return this.projectStartDateVE$H5_b;
  }/*

  protected*/ function getProjectDueDateVE(project/*:Project*/)/*:ValueExpression*/ {
    project = project || AS3.getBindable(this,"project");
    if (!this.projectDueDateVE$H5_b) {
      this.projectDueDateVE$H5_b = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Date*/ {
        if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(project)) {
          return undefined;
        }

        var dueDate/*:Date*/ = project.getDueDate();
        if (dueDate) {
          // Date class is mutable
          dueDate = com.coremedia.cms.editor.sdk.util.TimeUtil.getDayAtMidnight(dueDate);
        }
        return dueDate;
      });
    }
    return this.projectDueDateVE$H5_b;
  }/*

  protected*/ function calculateModifiersForDate(date/*:Date*/)/*:Array*/ {
    var minDate/*:Date*/ = this.getProjectStartDateVE(AS3.getBindable(this,"project")).getValue();
    minDate = minDate && com.coremedia.cms.editor.sdk.util.TimeUtil.getDayAtMidnight(minDate);
    var maxDate/*:Date*/ = this.getProjectDueDateVE(AS3.getBindable(this,"project")).getValue();
    maxDate = maxDate && com.coremedia.cms.editor.sdk.util.TimeUtil.getDayAtMidnight(maxDate);

    var modifiers/*:Array*/ = [];

    if (minDate && date < minDate) {
      modifiers.push(BEFORE_PROJECT_START_MODIFIER$static);
    }
    if (maxDate && maxDate < date) {
      modifiers.push(AFTER_PROJECT_END_MODIFIER$static);
    }

    var todoByDate/*:**/ = this.getTodoByDateVE$H5_b().getValue() || {};
    if (todoByDate.hasOwnProperty(date)) {
      var affectedTodos/*:Array*/ = todoByDate[date] || [];
      if (affectedTodos.length > 0) {
        var now/*:Date*/ = new Date();

        var hasOverdueTodos/*:Boolean*/ = affectedTodos.some(function (todo/*:Todo*/)/*:Boolean*/ {
          // time irrelevant here
          now.setHours(0,0,0,0);
          return todo.getDueDate() < now;
        });

        var hasTodosInProgress/*:Boolean*/ = affectedTodos.some(function (todo/*:Todo*/)/*:Boolean*/ {
          return todo.getTodoState() === com.coremedia.cms.editor.todo.rest.impl.TodoImpl.IN_PROGRESS_STATE;
        });

        if (hasTodosInProgress && hasOverdueTodos) {
          modifiers.push(HAS_OVERDUE_TODOS_MODIFIER$static);
        } else if (hasTodosInProgress) {
          modifiers.push(HAS_OPEN_TODOS_MODIFIER$static);
        } else {
          modifiers.push(HAS_FINISHED_TODOS_MODIFIER$static);
        }
      }
    }

    return modifiers;
  }/*

  internal*/ function removeDateSelection()/*:void*/ {
    AS3.getBindable(this,"selectedDateVE").setValue(undefined);
  }/*

  private*/ function getTodoByDateVE()/*:ValueExpression*/ {var this$=this;
    if (!this.todoByDate$H5_b) {
      this.todoByDate$H5_b = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this$,"project"))) {
          return undefined;
        }
        if (!AS3.getBindable(this$,"project").getTodos()) {
          return undefined;
        }

        var todoByDate/*:**/ = {};
        AS3.getBindable(this$,"project").getTodos().forEach(function (todo/*:Todo*/)/*:void*/ {
          var dateWithTime/*:Date*/ = todo.getDueDate();
          if (dateWithTime) {
            var date/*:Date*/ = com.coremedia.cms.editor.sdk.util.TimeUtil.getDayAtMidnight(dateWithTime);
            if (!todoByDate[date]) {
              todoByDate[date] = [];
            }
            todoByDate[date].push(todo);
          }
        });
        return todoByDate;
      });
    }
    return this.todoByDate$H5_b;
  }/*

  protected*/ function getActiveFooterVE()/*:ValueExpression*/ {var this$=this;
    if (!this.activeFooterVE$H5_b) {
      this.activeFooterVE$H5_b = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        if (AS3.getBindable(this$,"selectedDateVE") && AS3.getBindable(this$,"selectedDateVE").getValue()) {
          return com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanel.SHOW_ALL_TODOS_BTN_ITEM_ID;
        }
        return com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanel.DATE_HELP_TEXT_ITEM_ID;
      });
    }
    return this.activeFooterVE$H5_b;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel",
      projectStartDateVE$H5_b: null,
      projectDueDateVE$H5_b: null,
      todoByDate$H5_b: null,
      activeFooterVE$H5_b: null,
      constructor: ProjectCalendarPanelBase$,
      super$H5_b: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      getProjectStartDateVE: getProjectStartDateVE,
      getProjectDueDateVE: getProjectDueDateVE,
      calculateModifiersForDate: calculateModifiersForDate,
      removeDateSelection: removeDateSelection,
      getTodoByDateVE$H5_b: getTodoByDateVE,
      getActiveFooterVE: getActiveFooterVE,
      config: {selectedDateVE: null},
      requires: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel",
        "com.coremedia.cms.editor.sdk.util.TimeUtil",
        "com.coremedia.cms.editor.todo.rest.impl.TodoImpl",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanel",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames"
      ]
    };
});
