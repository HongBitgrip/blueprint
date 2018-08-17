Ext.define("com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectActionBase", function(AbstractProjectActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {

import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import net.jangaroo.ext.Exml;

/**
 * An abstract DependencyTrackedAction that holds a list of {@link Project}s.
 *
 * @see com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction
 * /
public class AbstractProjectActionBase extends DependencyTrackedAction {

  private var projectsVE:ValueExpression;

  /**
   * Create an AbstractProjectAction.
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction
   * @see com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction
   * /
  public*/ function AbstractProjectActionBase$(config/*:AbstractProjectAction = null*/) {if(arguments.length<=0)config=null;
    this.projectsVE$liHy = AS3.getBindable(config,"projectsVE");
    AS3.getBindable(config,"projects") && this.setProjects(AS3.getBindable(config,"projects"));
    this.super$liHy(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction,net.jangaroo.ext.Exml.apply({}, config)));
  }/*

  public*/ function setProjects(projects/*:Array*/)/*:void*/ {
    this.getProjectsVE$liHy().setValue(projects);
  }/*

  public*/ function getProjects()/*:Array*/ {
    return this.getProjectsVE$liHy().getValue();
  }/*

  public*/ function getProject()/*:Project*/ {
    var projects/*:Array*/ = this.getProjects();
    if (projects && projects.length === 1) {
      return projects[0];
    }
    return null;
  }/*

  private*/ function getProjectsVE()/*:ValueExpression*/ {
    if (!this.projectsVE$liHy) {
      this.projectsVE$liHy = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.projectsVE$liHy;
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    this.loadProjects$liHy();
    return this.checkDisabled();
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    this.loadProjects$liHy();
    return this.checkHidden();
  }/*

  public*/ function checkDisabled()/*:Boolean*/ {
    throw new AS3.Error("must be overridden in subclasses");
  }/*

  public*/ function checkHidden()/*:Boolean*/ {
    return false;
  }/*

  private*/ function loadProjects()/*:void*/ {
    // Just to add tracking dependency
    // getValue() must always provide an Array of Project
    this.getProjectsVE$liHy().getValue().forEach(function (project/*: Project*/)/*:void*/ {
      project.load();
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      projectsVE$liHy: null,
      constructor: AbstractProjectActionBase$,
      super$liHy: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      setProjects: setProjects,
      getProjects: getProjects,
      getProject: getProject,
      getProjectsVE$liHy: getProjectsVE,
      calculateDisabled: calculateDisabled,
      calculateHidden: calculateHidden,
      checkDisabled: checkDisabled,
      checkHidden: checkHidden,
      loadProjects$liHy: loadProjects,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction"]
    };
});
