Ext.define("com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl", function(ProjectRepositoryImpl) {/*package com.coremedia.cms.editor.controlroom.project.rest.impl {
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.controlroom.project.rest.ProjectRepository;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.IdUtil;

import ext.JSON;

[RestResource(uriTemplate="projects")]
public class ProjectRepositoryImpl extends RemoteBeanImpl implements ProjectRepository {

  //noinspection JSFieldCanBeLocal
  private const CREATE_URI_SEGMENT:String = "create";

  //noinspection JSFieldCanBeLocal
  private const USER_PROJECTS_URI_SEGMENT:String = "userprojects";
  //noinspection JSFieldCanBeLocal
  private const PROJECTS_WITH_OPEN_TODOS_URI_SEGMENT:String = "opentodos";

  private static*/ var instance$static/*:ProjectRepository*/ = null;/*

  public static*/ function getInstance$static()/*:ProjectRepository*/ {
    if (!instance$static) {
      instance$static = AS3.cast(com.coremedia.cms.editor.controlroom.project.rest.ProjectRepository,com.coremedia.ui.data.beanFactory.getRemoteBean("projects"));
    }
    return instance$static;
  }

  function ProjectRepositoryImpl$(path/*:String*/) {
    this.super$wBJU(path);
  }/*

  public*/ function createProject(name/*:String*/, contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=2)callback=null;
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + this.CREATE_URI_SEGMENT$wBJU, "POST", true);
    rsm.request({
              name: name,
              contents: contents
            },
            function success(rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var project/*:Project*/ =AS3.as( com.coremedia.ui.data.impl.BeanFactoryImpl.resolveBeans(Ext.JSON.decode(rsmr.response.responseText)),  com.coremedia.cms.editor.controlroom.project.rest.Project);
              callback && callback(project);
            },
            function failure(rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              callback && callback(rsmr.getError());
            }
    );
  }/*

  public*/ function getProject(id/*:String*/)/*:Project*/ {
    return AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(com.coremedia.ui.util.IdUtil.formatProjectBean(id)),  com.coremedia.cms.editor.controlroom.project.rest.Project);
  }/*

  public*/ function getProjectsOfSessionUser()/*:Array*/ {
    var projectsBean/*:RemoteBean*/ = com.coremedia.ui.data.beanFactory.getRemoteBean(this.getUriPath() + "/" +
    com.coremedia.cms.editor.sdk.editorContext.getSession().getUser().get('numericId') + "/" + this.USER_PROJECTS_URI_SEGMENT$wBJU);
    if (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(projectsBean)) {
      return projectsBean.get("items");
    } else {
      projectsBean.load();
      return undefined;
    }
  }/*


  public*/ function getProjectsWithOpenTodosForSessionUser()/*:Array*/ {
    var projectRepositoryBean/*:RemoteBean*/ = com.coremedia.ui.data.beanFactory.getRemoteBean(this.getUriPath() + "/" +
    com.coremedia.cms.editor.sdk.editorContext.getSession().getUser().get('numericId') + "/" + this.PROJECTS_WITH_OPEN_TODOS_URI_SEGMENT$wBJU);
    if (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(projectRepositoryBean)) {
      return projectRepositoryBean.get("items");
    } else {
      projectRepositoryBean.load();
      return undefined;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cms.editor.controlroom.project.rest.ProjectRepository"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "projects"
        ]
      ]},
      CREATE_URI_SEGMENT$wBJU: "create",
      USER_PROJECTS_URI_SEGMENT$wBJU: "userprojects",
      PROJECTS_WITH_OPEN_TODOS_URI_SEGMENT$wBJU: "opentodos",
      constructor: ProjectRepositoryImpl$,
      super$wBJU: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      createProject: createProject,
      getProject: getProject,
      getProjectsOfSessionUser: getProjectsOfSessionUser,
      getProjectsWithOpenTodosForSessionUser: getProjectsWithOpenTodosForSessionUser,
      statics: {getInstance: getInstance$static},
      requires: [
        "Ext.JSON",
        "com.coremedia.cms.editor.controlroom.project.rest.ProjectRepository",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.util.IdUtil"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.rest.Project"]
    };
});
