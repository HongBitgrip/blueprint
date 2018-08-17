Ext.define("com.coremedia.cms.editor.controlroom.project.rest.ProjectRepository", function(ProjectRepository) {/*package com.coremedia.cms.editor.controlroom.project.rest {
import com.coremedia.ui.data.RemoteBean;

/**
 * A repository of projects
 * /
public interface ProjectRepository extends RemoteBean {

  /**
   * Creates a new {@link Project} with the given properties
   *
   * @param name The name for the new {@link Project}
   * @param contents An array of {@link com.coremedia.cap.content.Content} for the new {@link Project}
   * @param callback will be triggered when the {@link Project} has been created,
   *        the first param is the new {@link Project}
   * /
  function createProject(name:String, contents:Array, callback:Function = null):void;

  /**
   * Returns the project with the given id if it exists.
   *
   * @param id the id of the project
   * @return the project with the given id if it exists, otherwise null
   * /
  function getProject(id:String):Project;

  /**
   * Returns the projects of the current session user.
   *
   * @return an array of Projects the current session user is a member of.
   * /
  function getProjectsOfSessionUser():Array;


  /**
   * Returns the projects of the current session user with open To-dos.
   *
   * @return an array of Projects the current session user is a member of with open To-dos.
   * /
  function getProjectsWithOpenTodosForSessionUser():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
