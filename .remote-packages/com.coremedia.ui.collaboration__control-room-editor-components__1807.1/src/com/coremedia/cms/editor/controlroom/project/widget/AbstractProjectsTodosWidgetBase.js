Ext.define("com.coremedia.cms.editor.controlroom.project.widget.AbstractProjectsTodosWidgetBase", function(AbstractProjectsTodosWidgetBase) {/*package com.coremedia.cms.editor.controlroom.project.widget {
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.controlroom.project.ProjectHelper;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl;
import com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.todo.TodoHelper;
import com.coremedia.cms.editor.todo.rest.impl.TodoRepositoryImpl;
import com.coremedia.ui.components.StatefulContainer;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class AbstractProjectsTodosWidgetBase extends StatefulContainer {

  private var userVE:ValueExpression;
  private var projectsVE:ValueExpression;
  private var widgetTitleVE:ValueExpression;
  private var selectedProjectVE:ValueExpression;
  private var assignedToUserVE:ValueExpression;

  public*/ function AbstractProjectsTodosWidgetBase$(config/*:StatefulContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$DiyD(config);
  }/*

  override protected*/ function initComponent()/*:void*/ {
    com.coremedia.ui.components.StatefulContainer.prototype.initComponent.call(this);
    this.getWidgetTitleVE().addChangeListener(AS3.bind(this,"updateWidgetTitle$DiyD"));
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    this.getWidgetTitleVE().removeChangeListener(AS3.bind(this,"updateWidgetTitle$DiyD"));
    com.coremedia.ui.components.StatefulContainer.prototype.destroy.call(this,params);
  }/*

  private*/ function updateWidgetTitle()/*:void*/ {
    var wrapper/*:WidgetWrapper*/ =AS3.as( this.findParentByType(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper.xtype),  com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper);
    wrapper.updateWidgetWrapper();
  }/*

  protected*/ function getProjectsVE()/*:ValueExpression*/ {var this$=this;
    if (!this.projectsVE$DiyD) {
      this.projectsVE$DiyD = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var projects/*:Array*/ = [];
        var projectsOfSessionUser/*:Array*/ = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl.getInstance().getProjectsOfSessionUser();
        if (!projectsOfSessionUser) {
          return undefined;
        }
        var projectId/*:String*/ = this$.getSelectedProjectExpression().getValue();
        if (projectId) {
          // only use selected project
          var project/*:Project*/ = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl.getInstance().getProject(projectId);
          if (project && com.coremedia.ui.data.RemoteBeanUtil.isAccessible(project)) {
            if (projectsOfSessionUser.indexOf(project) === -1) {
              this$.removeSelectedProject$DiyD();
              return undefined;
            }

            //noinspection JSMismatchedCollectionQueryUpdate
            var todos/*:Array*/ = project.getTodos();
            if (!todos) {
              return undefined;
            }
            if (com.coremedia.cms.editor.todo.TodoHelper.filterOpenTodos(todos, this$.getUserVE().getValue()).length > 0) {
              projects = [project];
            }
          } else {
            if (project.getState() === com.coremedia.ui.data.BeanState.NON_EXISTENT) {
              this$.removeSelectedProject$DiyD();
            }
            return undefined;
          }
        } else {
          var assignedToUser/*:Boolean*/ =AS3.as( this$.getAssignedToUserExpression().getValue(),  Boolean);
          if (assignedToUser !== false) { //NOSONAR
            projects = com.coremedia.cms.editor.todo.rest.impl.TodoRepositoryImpl.getInstance().getTargetsWithOpenTodosForSessionUser();
          } else {
            projects = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl.getInstance().getProjectsWithOpenTodosForSessionUser();
          }
        }

        if (projects && projects.length > 1) {
          projects.sort(com.coremedia.cms.editor.controlroom.project.ProjectHelper.compareProjects);
        }
        // Create clone via concat([])
        return projects && projects.concat([]);
      });
    }
    return this.projectsVE$DiyD;
  }/*

  private*/ function removeSelectedProject()/*:void*/ {
    this.getModel().set("projectId", "");
  }/*

  protected*/ function getWidgetTitleVE()/*:ValueExpression*/ {var this$=this;
    if (!this.widgetTitleVE$DiyD) {
      this.widgetTitleVE$DiyD = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var projects/*:Array*/ = this$.getProjectsVE().getValue();
        if (projects && projects.length === 1) {
          var project/*:Project*/ =AS3.as( projects[0],  com.coremedia.cms.editor.controlroom.project.rest.Project);
          if (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(project)) {
            return project.getName();
          }
        }
        return "";
      });
    }
    return this.widgetTitleVE$DiyD;
  }/*

  protected*/ function getUserVE()/*:ValueExpression*/ {var this$=this;
    if (!this.userVE$DiyD) {
      this.userVE$DiyD = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:User*/ {
        var assignedToUser/*:Boolean*/ =AS3.as( this$.getAssignedToUserExpression().getValue(),  Boolean);
        if (assignedToUser !== false) { //NOSONAR
          return com.coremedia.cms.editor.sdk.editorContext.getSession().getUser();
        } else {
          return undefined;
        }
      });
    }
    return this.userVE$DiyD;
  }/*

  protected*/ function getSelectedProjectExpression()/*:ValueExpression*/ {
    if (!this.selectedProjectVE$DiyD) {
      this.selectedProjectVE$DiyD = com.coremedia.ui.data.ValueExpressionFactory.create("projectId", this.getModel());
    }
    return this.selectedProjectVE$DiyD;
  }/*

  protected*/ function getAssignedToUserExpression()/*:ValueExpression*/ {
    if (!this.assignedToUserVE$DiyD) {
      this.assignedToUserVE$DiyD = com.coremedia.ui.data.ValueExpressionFactory.create("assignedToUser", this.getModel());
    }
    return this.assignedToUserVE$DiyD;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulContainer",
      userVE$DiyD: null,
      projectsVE$DiyD: null,
      widgetTitleVE$DiyD: null,
      selectedProjectVE$DiyD: null,
      assignedToUserVE$DiyD: null,
      constructor: AbstractProjectsTodosWidgetBase$,
      super$DiyD: function() {
        com.coremedia.ui.components.StatefulContainer.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      destroy: destroy,
      updateWidgetTitle$DiyD: updateWidgetTitle,
      getProjectsVE: getProjectsVE,
      removeSelectedProject$DiyD: removeSelectedProject,
      getWidgetTitleVE: getWidgetTitleVE,
      getUserVE: getUserVE,
      getSelectedProjectExpression: getSelectedProjectExpression,
      getAssignedToUserExpression: getAssignedToUserExpression,
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.todo.TodoHelper",
        "com.coremedia.cms.editor.todo.rest.impl.TodoRepositoryImpl",
        "com.coremedia.ui.components.StatefulContainer",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.ProjectHelper",
        "com.coremedia.cms.editor.controlroom.project.rest.Project",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl"
      ]
    };
});
