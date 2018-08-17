Ext.define("com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditorBase", function(ProjectsTodosWidgetEditorBase) {/*package com.coremedia.cms.editor.controlroom.project.widget {

import com.coremedia.cms.editor.controlroom.project.ProjectHelper;
import com.coremedia.cms.editor.controlroom.project.rest.ProjectRepository;
import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectsTodosWidgetEditorBase extends AbstractProjectsTodosWidgetBase {

  private var projectsOfUserVE:ValueExpression;

  protected static const MY_PROJECTS:String = "my";
  protected static const ALL_PROJECTS:String = "all";

  public*/ function ProjectsTodosWidgetEditorBase$(config/*:ProjectsTodosWidgetEditor = null*/) {if(arguments.length<=0)config=null;
    this.super$GvKS(config);
  }/*

  protected*/ function getProjectsOfUserValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.projectsOfUserVE$GvKS) {
      var projectRepository/*:ProjectRepository*/ = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl.getInstance();
      this.projectsOfUserVE$GvKS = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Array*/ {
        var result/*:Array*/ = [{id:"",name:this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Projects_Todos_Widget_project_selection_default')}];
        var projectsOfSessionUser/*:Array*/ = projectRepository.getProjectsOfSessionUser();
        if (projectsOfSessionUser && projectsOfSessionUser.length > 0) {
          var sortedProjectsOfSessionUser/*:Array*/ = projectsOfSessionUser.sort(com.coremedia.cms.editor.controlroom.project.ProjectHelper.compareProjects);
          result = result.concat(sortedProjectsOfSessionUser);
        }
        return result;
      });
    }
    return this.projectsOfUserVE$GvKS;
  }/*

  protected static*/ function transformAssignedUser$static(value/*:String*/)/*:Boolean*/ {
    return value === undefined || value === ProjectsTodosWidgetEditorBase.MY_PROJECTS;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.widget.AbstractProjectsTodosWidgetBase",
      projectsOfUserVE$GvKS: null,
      constructor: ProjectsTodosWidgetEditorBase$,
      super$GvKS: function() {
        com.coremedia.cms.editor.controlroom.project.widget.AbstractProjectsTodosWidgetBase.prototype.constructor.apply(this, arguments);
      },
      getProjectsOfUserValueExpression: getProjectsOfUserValueExpression,
      statics: {
        MY_PROJECTS: "my",
        ALL_PROJECTS: "all",
        transformAssignedUser: transformAssignedUser$static
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.widget.AbstractProjectsTodosWidgetBase",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.ProjectHelper",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl"
      ]
    };
});
