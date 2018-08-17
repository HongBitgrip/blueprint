Ext.define("com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetBase", function(ProjectsTodosWidgetBase) {/*package com.coremedia.cms.editor.controlroom.project.widget {
public class ProjectsTodosWidgetBase extends AbstractProjectsTodosWidgetBase {

  public*/ function ProjectsTodosWidgetBase$(config/*:ProjectsTodosWidget = null*/) {if(arguments.length<=0)config=null;
    this.super$m4IF(config);
  }/*

  protected static*/ function transformProjects$static(projects/*:Array*/)/*:Boolean*/ {
    return !projects || projects.length === 0;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.widget.AbstractProjectsTodosWidgetBase",
      constructor: ProjectsTodosWidgetBase$,
      super$m4IF: function() {
        com.coremedia.cms.editor.controlroom.project.widget.AbstractProjectsTodosWidgetBase.prototype.constructor.apply(this, arguments);
      },
      statics: {transformProjects: transformProjects$static},
      requires: ["com.coremedia.cms.editor.controlroom.project.widget.AbstractProjectsTodosWidgetBase"]
    };
});
