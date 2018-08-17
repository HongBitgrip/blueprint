Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanelBase", function(ProjectTodosPanelBase) {/*package com.coremedia.cms.editor.controlroom.project.components {

import com.coremedia.cms.editor.sdk.util.TimeUtil;
import com.coremedia.cms.editor.todo.components.TodoPanel;
import com.coremedia.cms.editor.todo.components.TodoPanelBase;
import com.coremedia.cms.editor.todo.model.Todo;
import com.coremedia.cms.editor.todo.rest.impl.TodoRepositoryImpl;
import com.coremedia.ui.components.DraggableItem;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.impl.IssueImpl;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.data.validation.Severity;
import com.coremedia.ui.util.ConcurrentUtil;

import ext.Component;

import ext.DateUtil;
import ext.StringUtil;
import ext.button.Button;
import ext.container.Container;
import ext.form.field.TextArea;
import ext.util.DelayedTask;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ProjectTodosPanelBase extends ProjectSubPanel {

  [Bindable]
  public var selectedDateVE:ValueExpression;

  [Bindable]
  [ExtConfig(create=false)]
  public var filterBtnCfg:Button;

  private static const*/var DUE_DATE_VALIDATION_WARNING$static/*:Issue*/;/* =*/function DUE_DATE_VALIDATION_WARNING$static_(){DUE_DATE_VALIDATION_WARNING$static=( new com.coremedia.ui.data.impl.IssueImpl({
    severity: com.coremedia.ui.data.validation.Severity.WARN,
    code: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_Todo_due_after_project_due_date_warning_text')
  }));};/*

  private static const*/var DUE_DATE_VALIDATION_ERROR$static/*:Issue*/;/* =*/function DUE_DATE_VALIDATION_ERROR$static_(){DUE_DATE_VALIDATION_ERROR$static=( new com.coremedia.ui.data.impl.IssueImpl({
    severity: com.coremedia.ui.data.validation.Severity.ERROR,
    code: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_Todo_due_date_overdue_error_text')
  }));};/*

  private var reenableTitleCollapse:Boolean;
  private var todosVE:ValueExpression;
  private var projectMembersVE:ValueExpression;
  private var isNoFilterActiveVE:ValueExpression;
  private var titleVE:ValueExpression;

  private var todosCt:Container;

  public*/ function ProjectTodosPanelBase$(config/*:ProjectTodosPanel = null*/) {if(arguments.length<=0)config=null;
    // in case we have a special filterBtn we need to handle titleCollapse ourself
    if (AS3.getBindable(config,"filterBtnCfg")) {
      this.reenableTitleCollapse$SLpw = config.titleCollapse;
      config.titleCollapse = false;
    }
    this.super$SLpw(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {var this$=this;
    com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel.prototype.afterRender.call(this);

    this.todosCt$SLpw =AS3.as( this.queryById(com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanel.TODOS_CT_ITEM_ID),  Ext.container.Container);

    // add special filter button to header component
    if (AS3.getBindable(this,"filterBtnCfg")) {
      this.getHeader().add(AS3.getBindable(this,"filterBtnCfg"));
      if (this.reenableTitleCollapse$SLpw) {
        // on apply the click handle to the title (in contrast to the name of the configuration, ExtJS adds the handler
        // to the whole header component, so other tools will also trigger collapse/uncollapse.
        this.getHeader().getTitle().el.on("click", function ()/*:void*/ {
          if (this$.collapsible) {
            AS3.getBindable(this$,"collapsed","DUMMY") ? this$.expand() : this$.collapse();
          }
        });
        this.applyTitleCollapseStyle();
      }
    }
  }/*

  protected*/ function getTodosVE()/*:ValueExpression*/ {var this$=this;
    if (!this.todosVE$SLpw) {
      this.todosVE$SLpw = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this$,"project"))) {
          return undefined;
        }
        var todos/*:Array*/ = AS3.getBindable(this$,"project").getTodos();
        if (!todos) {
          return undefined;
        }
        if (this$.getIsNoFilterActiveVE().getValue()) {
          return todos;
        } else {
          var selectedDate/*:Date*/ =AS3.as( AS3.getBindable(this$,"selectedDateVE").getValue(),  Date);
          var normalizedSelectedDate/*:Date*/ = com.coremedia.cms.editor.sdk.util.TimeUtil.getDayAtMidnight(selectedDate);
          var result/*:Array*/ = [];
          todos.forEach(function (todo/*:Todo*/)/*:void*/ {
            if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(todo)) {
              return;
            }
            var todoDueDate/*:Date*/ =AS3.as( todo.getDueDate(),  Date);
            if (todoDueDate && com.coremedia.cms.editor.sdk.util.TimeUtil.compareDates(normalizedSelectedDate, com.coremedia.cms.editor.sdk.util.TimeUtil.getDayAtMidnight(todoDueDate)) === 0) {
              result.push(todo);
            }
          });
          return result;
        }
      });
    }
    return this.todosVE$SLpw;
  }/*

  protected*/ function getProjectMembersVE()/*:ValueExpression*/ {var this$=this;
    if (!this.projectMembersVE$SLpw) {
      this.projectMembersVE$SLpw = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        return AS3.getBindable(this$,"project").getMembers();
      });
    }
    return this.projectMembersVE$SLpw;
  }/*

  protected*/ function handleEditorModeSwitch(isEditorMode/*:Boolean*/)/*:void*/ {
    // rearrange open assignees menu on switch to display mode
    if (!isEditorMode) {
      this.todosCt$SLpw.itemCollection.each(function (item/*:DraggableItem*/)/*:void*/ {
        var todoPanel/*:TodoPanel*/ =AS3.as( item.getInnerCt(),  com.coremedia.cms.editor.todo.components.TodoPanel);
        if (todoPanel) {
          var assigneeButton/*:Button*/ =AS3.as( todoPanel.queryById(com.coremedia.cms.editor.todo.components.TodoPanel.ASSIGNEE_BUTTON_ITEM_ID),  Ext.button.Button);
          if (assigneeButton && AS3.getBindable(assigneeButton,"menu","DUMMY").isVisible(true)) {
            var delayedAssigneeButtonShowMenu/*:DelayedTask*/ = new Ext.util.DelayedTask(AS3.bind(assigneeButton,"showMenu"));
            delayedAssigneeButtonShowMenu.delay(com.coremedia.cms.editor.todo.components.TodoPanelBase.MODE_SWITCH_DELAY);
          }
        }
      });
    }
  }/*

  protected*/ function dropHandler(dropIndex/*:Number*/, dragItem/*:Component*/)/*:Boolean*/ {
    var draggableItem/*:DraggableItem*/ =AS3.as( dragItem,  com.coremedia.ui.components.DraggableItem);
    var dragTodoPanel/*:TodoPanel*/ =AS3.as( draggableItem.getInnerCt(),  com.coremedia.cms.editor.todo.components.TodoPanel);
    if (dragTodoPanel) {
      // only handle drops coming from the same panel
      if (this.todosCt$SLpw.itemCollection.indexOf(dragItem) !== -1) {
        var dragTodo/*:Todo*/ = AS3.getBindable(dragTodoPanel,"todo","DUMMY");
        var todos/*:Array*/ = AS3.getBindable(this,"project").getTodos();
        var todosWithoutDragTodo/*:Array*/ = todos.filter(function (todo/*:Todo*/)/*:Boolean*/ {
          return todo !== dragTodo;
        });
        var newTodos/*:Array*/ = todosWithoutDragTodo.slice(0, dropIndex)
                .concat([dragTodo])
                .concat(todosWithoutDragTodo.slice(dropIndex));
        AS3.getBindable(this,"project").setTodos(newTodos);
        return true;
      }
    }

    return false;
  }/*


  protected*/ function dueDateIssueBuilder(date/*:Date*/)/*:Array*/ {
    var dueDateIsssues/*:Array*/ = [];

    if (this.isInvalidDueDate$SLpw(date)) {
      dueDateIsssues.push(DUE_DATE_VALIDATION_WARNING$static);
    }

    if (isOverdueDueDate$static(date)) {
      dueDateIsssues.push(DUE_DATE_VALIDATION_ERROR$static);
    }

    return dueDateIsssues;
  }/*

  private static*/ function isOverdueDueDate$static(date/*:Date*/)/*:Boolean*/ {
    var now/*:Date*/ = new Date();
    // not considering time here
    now.setHours(0, 0, 0, 0);
    return date < now;
  }/*

  private*/ function isInvalidDueDate(date/*:Date*/)/*:Boolean*/ {
    var projectDueDate/*:Date*/ = AS3.getBindable(this,"project").getDueDate();
    return ! !(date && projectDueDate && date > projectDueDate);
  }/*

  protected*/ function getIsNoFilterActiveVE()/*:ValueExpression*/{var this$=this;
    if (!this.isNoFilterActiveVE$SLpw) {
      this.isNoFilterActiveVE$SLpw = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        return !(AS3.is(AS3.getBindable(this$,"selectedDateVE").getValue(),  Date));
      });
    }
    return this.isNoFilterActiveVE$SLpw;

  }/*

  protected*/ function getTitleVE()/*:ValueExpression*/ {var this$=this;
    if (!this.titleVE$SLpw) {
      this.titleVE$SLpw = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var date/*:Date*/ =AS3.as( AS3.getBindable(this$,"selectedDateVE").getValue(),  Date);
        if (!date) {
          return this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_todos_title');
        }
        var formattedDate/*:String*/ = Ext.Date.format(date, this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'shortDateFormat'));
        return Ext.String.format(this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_todos_title_filtered_by_due_date'), formattedDate);
      });
    }
    return this.titleVE$SLpw;
  }/*

  protected*/ function getAdditionalDueDatePickerModifiers(date/*:Date*/)/*:Array*/ {
    var minDate/*:Date*/ =AS3.as( AS3.getBindable(this,"project").getStartDate(),  Date);
    minDate = minDate && com.coremedia.cms.editor.sdk.util.TimeUtil.getDayAtMidnight(minDate);
    var maxDate/*:Date*/ =AS3.as( AS3.getBindable(this,"project").getDueDate(),  Date);
    maxDate = maxDate && com.coremedia.cms.editor.sdk.util.TimeUtil.getDayAtMidnight(maxDate);

    var modifiers/*:Array*/ = [];
    if (minDate && date < minDate) {
      modifiers.push("before-project-start");
    }
    if (maxDate && maxDate < date) {
      modifiers.push("after-project-end");
    }
    return modifiers;
  }/*

  protected*/ function removeDateSelection()/*:void*/ {
    AS3.getBindable(this,"selectedDateVE").setValue(undefined);
  }/*

  protected*/ function newTodo()/*:void*/ {
    com.coremedia.cms.editor.todo.rest.impl.TodoRepositoryImpl.getInstance().createTodo(AS3.getBindable(this,"project"), "",AS3.bind( this,"handleTodoCreated"));
  }/*

  protected*/ function handleTodoCreated(todo/*:Todo*/)/*:void*/ {var this$=this;
    var panel/*:TodoPanel*/;
    com.coremedia.ui.util.ConcurrentUtil.executeWhen(
            function ()/*:Boolean*/ {
              com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this$.todosCt$SLpw, "add");
              panel = this$.findTodoPanel$SLpw(todo);
              return ! !panel;
            },
            function ()/*:void*/ {
              this$.openEditorForTodoPanel$SLpw(panel);
            });
  }/*

  private*/ function findTodoPanel(todo/*:Todo*/)/*:TodoPanel*/ {
    var result/*:TodoPanel*/ = null;
    this.todosCt$SLpw && this.todosCt$SLpw.itemCollection.each(function (item/*:DraggableItem*/)/*:void*/ {
      var panel/*:TodoPanel*/ =AS3.as( item.getInnerCt(),  com.coremedia.cms.editor.todo.components.TodoPanel);
      if (panel && AS3.getBindable(panel,"todo","DUMMY") === todo) {
        result = panel;
      }
    });
    return result;
  }/*

  private*/ function openEditorForTodoPanel(panel/*:TodoPanel*/)/*:void*/ {
    panel.switchToEditorMode();
    var textArea/*:TextArea*/ =AS3.as( panel.queryById(com.coremedia.cms.editor.todo.components.TodoPanel.TEXT_INPUT_ITEM_ID),  Ext.form.field.TextArea);

    if (!textArea) {
      return;
    }

    com.coremedia.ui.util.ConcurrentUtil.executeWhen(
            function ()/*:Boolean*/ {
              com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(textArea, "afterrender");
              return textArea.rendered;
            },
            function ()/*:void*/ {
              textArea.focus(true);
              panel.getEl().dom.scrollIntoView();
            });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel",
      reenableTitleCollapse$SLpw: false,
      todosVE$SLpw: null,
      projectMembersVE$SLpw: null,
      isNoFilterActiveVE$SLpw: null,
      titleVE$SLpw: null,
      todosCt$SLpw: null,
      constructor: ProjectTodosPanelBase$,
      super$SLpw: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      getTodosVE: getTodosVE,
      getProjectMembersVE: getProjectMembersVE,
      handleEditorModeSwitch: handleEditorModeSwitch,
      dropHandler: dropHandler,
      dueDateIssueBuilder: dueDateIssueBuilder,
      isInvalidDueDate$SLpw: isInvalidDueDate,
      getIsNoFilterActiveVE: getIsNoFilterActiveVE,
      getTitleVE: getTitleVE,
      getAdditionalDueDatePickerModifiers: getAdditionalDueDatePickerModifiers,
      removeDateSelection: removeDateSelection,
      newTodo: newTodo,
      handleTodoCreated: handleTodoCreated,
      findTodoPanel$SLpw: findTodoPanel,
      openEditorForTodoPanel$SLpw: openEditorForTodoPanel,
      config: {
        selectedDateVE: null,
        filterBtnCfg: null
      },
      statics: {
        DUE_DATE_VALIDATION_WARNING: undefined,
        DUE_DATE_VALIDATION_ERROR: undefined,
        __initStatics__: function() {
          DUE_DATE_VALIDATION_WARNING$static_();
          DUE_DATE_VALIDATION_ERROR$static_();
        }
      },
      requires: [
        "Ext.Date",
        "Ext.String",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.TextArea",
        "Ext.util.DelayedTask",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel",
        "com.coremedia.cms.editor.sdk.util.TimeUtil",
        "com.coremedia.cms.editor.todo.components.TodoPanel",
        "com.coremedia.cms.editor.todo.components.TodoPanelBase",
        "com.coremedia.cms.editor.todo.rest.impl.TodoRepositoryImpl",
        "com.coremedia.ui.components.DraggableItem",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.impl.IssueImpl",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.util.ConcurrentUtil",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanel"]
    };
});
