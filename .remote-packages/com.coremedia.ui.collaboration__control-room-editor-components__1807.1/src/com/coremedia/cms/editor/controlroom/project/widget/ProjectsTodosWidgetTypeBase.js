Ext.define("com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetTypeBase", function(ProjectsTodosWidgetTypeBase) {/*package com.coremedia.cms.editor.controlroom.project.widget {
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl;
import com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.util.EncodingUtil;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectsTodosWidgetTypeBase extends ComponentBasedWidgetType {

  public*/ function ProjectsTodosWidgetTypeBase$(config/*:ComponentBasedWidgetType = null*/) {if(arguments.length<=0)config=null;
    this.super$IGlf(config);
  }/*

  override public*/ function getTitle(state/*:Object*/)/*:String*/ {
    var title/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Projects_Todos_Widget_name');

    if (state.projectId) {
      var project/*:Project*/ = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl.getInstance().getProject(state.projectId);
      if (project && com.coremedia.ui.data.RemoteBeanUtil.isAccessible(project)) {
        var encProjectName/*:**/ = com.coremedia.ui.util.EncodingUtil.encodeForHTML(project.getName());
        if (state.assignedToUser) {
          var myProjectsTitle/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Projects_Todos_Widget_name_with_project');
          title = Ext.String.format(myProjectsTitle, encProjectName);
        } else {
          var allProjectsTitle/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Projects_Todos_Widget_name_with_project_for_all');
          title = Ext.String.format(allProjectsTitle, encProjectName);
        }
      }
    } else if (!state.assignedToUser) {
      title = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Projects_Todos_Widget_name_all');
    }

    return title;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
      constructor: ProjectsTodosWidgetTypeBase$,
      super$IGlf: function() {
        com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType.prototype.constructor.apply(this, arguments);
      },
      getTitle: getTitle,
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl"]
    };
});
