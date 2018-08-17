Ext.define("com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetProjectBase", function(ProjectsTodosWidgetProjectBase) {/*package com.coremedia.cms.editor.controlroom.project.widget {
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.controlroom.project.ProjectHelper;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.TimeUtil;
import com.coremedia.cms.editor.todo.TodoHelper;
import com.coremedia.cms.editor.todo.model.Todo;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.EventUtil;

import ext.container.Container;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectsTodosWidgetProjectBase extends Container {

  [Bindable]
  public var project:Project;

  private var afterUpdateCallback:Function;

  private var projectNameVE:ValueExpression;
  private var projectDueDateVE:ValueExpression;
  private var todoListVE:ValueExpression;
  private var projectDueDateValidationStateVE:ValueExpression;

  public*/ function ProjectsTodosWidgetProjectBase$(config/*:ProjectsTodosWidgetProject = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"project" , AS3.getBindable(config,"project"));
    this.afterUpdateCallback$yG8C = AS3.getBindable(config,"afterUpdateCallback");
    this.super$yG8C(config);
  }/*

  protected override*/ function initComponent()/*:void*/ {var this$=this;
    Ext.container.Container.prototype.initComponent.call(this);
    this.on("afterrender", function ()/*:void*/ {
      this$.mon(this$.getEl(), "click",AS3.bind( this$,"delayedOpenProjectTab"));
    });
    this.getTodoListVE().addChangeListener(AS3.bind(this,"todoListChangeListener$yG8C"));
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    this.getTodoListVE().removeChangeListener(AS3.bind(this,"todoListChangeListener$yG8C"));
    Ext.container.Container.prototype.destroy.call(this,params);
  }/*

  protected*/ function getProjectNameVE()/*:ValueExpression*/ {var this$=this;
    if (!this.projectNameVE$yG8C) {
      this.projectNameVE$yG8C = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this$,"project"))) {
          return undefined;
        }
        return AS3.getBindable(this$,"project").getName();
      });
    }
    return this.projectNameVE$yG8C;
  }/*

  protected*/ function getProjectDueDateVE()/*:ValueExpression*/ {var this$=this;
    if (!this.projectDueDateVE$yG8C) {
      this.projectDueDateVE$yG8C = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        if (!AS3.getBindable(this$,"project") || !com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this$,"project"))) {
          return undefined;
        }
        return com.coremedia.cms.editor.sdk.util.TimeUtil.getRelativeDateString(AS3.getBindable(this$,"project").getDueDate());
      });
    }
    return this.projectDueDateVE$yG8C;
  }/*

  protected*/ function getProjectDueDateValidationStateVE()/*:ValueExpression*/ {var this$=this;
    if (!this.projectDueDateValidationStateVE$yG8C) {
      this.projectDueDateValidationStateVE$yG8C = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:ValidationState*/ {
        var dueDate/*:Date*/ = AS3.getBindable(this$,"project").getDueDate();
        if (dueDate && com.coremedia.cms.editor.sdk.util.TimeUtil.isBeforeToday(dueDate)) {
          return com.coremedia.ui.mixins.ValidationState.ERROR;
        }
        return undefined;
      });
    }
    return this.projectDueDateValidationStateVE$yG8C;
  }/*

  protected*/ function getTodoListVE()/*:ValueExpression*/ {var this$=this;
    if (!this.todoListVE$yG8C) {
      this.todoListVE$yG8C = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        // we need the dependency on the VE
        var user/*:User*/ = this$.getConfiguredUser$yG8C();
        if (!AS3.getBindable(this$,"project") || !com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this$,"project"))) {
          return undefined;
        }
        var todoList/*:Array*/ = AS3.getBindable(this$,"project").getTodos();
        if (!todoList) {
          return undefined;
        }

        return com.coremedia.cms.editor.todo.TodoHelper.filterOpenTodos(todoList, user);
      });
    }
    return this.todoListVE$yG8C;
  }/*

  protected*/ function getAssigneesInfo(ignore/*:String*/, todo/*:Todo*/)/*:String*/ {
    var assignees/*:Array*/ = todo.getAssignees();
    var assigneesInfo/*:String*/ = undefined;
    if (!this.getConfiguredUser$yG8C()) {
      // we only want to display the user name if no user is configured for the widget
      var sessionUser/*:User*/ = com.coremedia.cms.editor.sdk.editorContext.getSession().getUser();
      if (assignees && assignees.length > 0) {
        if (assignees.indexOf(sessionUser) !== -1) {
          // the current user is assigned
          assigneesInfo = this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_users_me');
        } else {
          // we currently only have one assignee that is not the current Studio user
          var assignee/*:User*/ =AS3.as( assignees[0],  com.coremedia.cap.user.User);
          assigneesInfo = assignee.getName();
        }
      }
    }

    return assigneesInfo;
  }/*

  private*/ function getConfiguredUser()/*:User*/ {
    var user/*:User*/ = undefined;
    if (this.initialConfig.userVE && this.initialConfig.userVE.getValue()) {
      user = this.initialConfig.userVE.getValue();
    }
    return user;
  }/*

  protected static*/ function getFirstLine$static(text/*:String*/)/*:String*/ {
    return text.replace(/\r/g, '').replace(/\n.*/g, '');
  }/*

  private*/ function todoListChangeListener()/*:void*/ {
    if (this.afterUpdateCallback$yG8C) {
      com.coremedia.ui.util.EventUtil.invokeLater(this.afterUpdateCallback$yG8C);
    }
  }/*

  protected*/ function delayedOpenProjectTab()/*:void*/ {var this$=this;
    // needs to be delayed because the dashboard tab area tries to scroll the tab strip into view when clicked
    // this is not possible if a tab is activated because the dashboard will be destroyed
    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
      com.coremedia.cms.editor.controlroom.project.ProjectHelper.openProjectInTab(AS3.getBindable(this$,"project"));
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      afterUpdateCallback$yG8C: null,
      projectNameVE$yG8C: null,
      projectDueDateVE$yG8C: null,
      todoListVE$yG8C: null,
      projectDueDateValidationStateVE$yG8C: null,
      constructor: ProjectsTodosWidgetProjectBase$,
      super$yG8C: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      destroy: destroy,
      getProjectNameVE: getProjectNameVE,
      getProjectDueDateVE: getProjectDueDateVE,
      getProjectDueDateValidationStateVE: getProjectDueDateValidationStateVE,
      getTodoListVE: getTodoListVE,
      getAssigneesInfo: getAssigneesInfo,
      getConfiguredUser$yG8C: getConfiguredUser,
      todoListChangeListener$yG8C: todoListChangeListener,
      delayedOpenProjectTab: delayedOpenProjectTab,
      config: {project: null},
      statics: {getFirstLine: getFirstLine$static},
      requires: [
        "Ext.container.Container",
        "com.coremedia.cap.user.User",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.TimeUtil",
        "com.coremedia.cms.editor.todo.TodoHelper",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.ProjectHelper"]
    };
});
