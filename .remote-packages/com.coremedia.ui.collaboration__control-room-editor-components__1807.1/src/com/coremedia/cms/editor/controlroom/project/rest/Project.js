Ext.define("com.coremedia.cms.editor.controlroom.project.rest.Project", function(Project) {/*package com.coremedia.cms.editor.controlroom.project.rest {
import com.coremedia.ui.data.RemoteBean;

/**
 * A project has an id, a name, one or more members and a due date.
 * /
public interface Project extends RemoteBean {

  /**
   * Returns the id of the project.
   *
   * @return the id of the project
   * /
  function getId():String;

  /**
   * Returns the name of the project.
   *
   * @return the name of the project
   * /
  function getName():String;

  /**
   * Sets the name of the project.
   *
   * @param name the new name
   * /
  function setName(name: String):void;

  /**
   * Returns the description of the project.
   *
   * @return the description of the project
   * /
  function getDescription():String;

  /**
   * Sets the description of the project.
   *
   * @param description the description to set
   * /
  function setDescription(description:String):void;

  /**
   * Returns the creationDate of the project.
   *
   * @return the creationDate of the project.
   * /
  function getStartDate():Date;

  /**
   * Returns the dueDate of the project.
   *
   * @return the dueDate of the project.
   * /
  function getDueDate():Date;

  /**
   * Sets the dueDate of the project.
   *
   * @param dueDate the new dueDate
   * /
  function setDueDate(dueDate:Date):void;

  /**
   * Returns the contents of the project.
   *
   * Calling this method might return 'undefined' even if contents
   * for the project exist. An asynchronous call to load the contents
   * is triggered so that a later call to this method will
   * return the contents.
   *
   * Consequently, it is recommended to use this method primarily in the
   * context of a FunctionValueExpression
   *
   * In case the function shall be used in non value expressions a callback can be provided. If a callback is provided
   * getContents always returns undefined. The callback will be invoked as soon as the contents are loaded.
   *
   * @param callback the callback to be triggered if contents are loaded. The first parameter will be the contents Array.
   * @return the contents of the project if they are already loaded and no callback is defined, undefined otherwise
   *
   * @see FunctionValueExpression
   * /
  function getContents(callback:Function = null):Array;

  /**
   * Sets the contents of the project.
   *
   * @param contents the contents to set
   * @param success callback function success(project:Project):void
   * @param failure callback function failure(error:RemoteError):void
   * /
  function setContents(contents:Array, success:Function = null, failure:Function = null):void;

  /**
   * Adds contents to this project.
   *
   * @param contents the contents to add
   * @param success callback function success(project:Project):void
   * @param failure callback function failure(error:RemoteError):void
   * /
  function addContents(contents:Array, success:Function = null, failure:Function = null):void;

  /**
   * Removes contents from this project.
   *
   * @param contents the contents to remove
   * @param success callback function success(project:Project):void
   * @param failure callback function failure(error:RemoteError):void
   * /
  function removeContents(contents:Array, success:Function = null, failure:Function = null):void;

  /**
   * Returns the members of the project.
   *
   * Calling this method might return 'undefined' even if members
   * for the project exist. An asynchronous call to load the members
   * is triggered so that a later call to this method will
   * return the members.
   *
   * Consequently, it is recommended to use this method primarily in the
   * context of a FunctionValueExpression
   *
   * In case function shall be used in non value expressions a callback can be provided. If a callback is provided
   * getMembers always returns undefined. The callback will be invoked as soon as the members are loaded.
   *
   * @param callback the callback to be triggered if members are loaded. The first parameter will be the members Array.
   * @return the members of the project if they are already loaded and no callback is defined, undefined otherwise
   *
   * @see FunctionValueExpression
   * /
  function getMembers(callback:Function = null):Array;

  /**
   * Sets the members of the project.
   *
   * @param members the members to set
   * @param success callback function
   * @param failure
   * /
  function setMembers(members:Array, success:Function = null, failure:Function = null):void;

  /**
   * Adds the given members to the project.
   *
   * @param members the members to add to the project
   * @param success callback function success(project:Project):void
   * @param failure callback function failure(error:RemoteError):void
   * /
  function addMembers(members:Array, success:Function = null, failure:Function = null):void;

  /**
   * Removes the given members from the project.
   *
   * @param members the members to remove from the project
   * @param success callback function success(project:Project):void
   * @param failure callback function failure(error:RemoteError):void
   * /
  function removeMembers(members:Array, success:Function = null, failure:Function = null):void;

  /**
   * Returns the todos of the project.
   *
   * Calling this method might return 'undefined' even if todos
   * for the project exist. An asynchronous call to load the todos
   * is triggered so that a later call to this method will
   * return the todos.
   *
   * Consequently, it is recommended to use this method primarily in the
   * context of a FunctionValueExpression
   *
   * In case function shall be used in non value expressions a callback can be provided. If a callback is provided
   * getTodos always returns undefined. The callback will be invoked as soon as the todos are loaded.
   *
   * @param callback the callback to be triggered if todos are loaded. The first parameter will be the todos Array.
   * @return the todos of the project if they are already loaded and no callback is defined, undefined otherwise
   *
   * @see FunctionValueExpression
   * /
  function getTodos(callback:Function = null):Array;

  /**
   * Sets the todos of the project.
   *
   * @param todos the new To-Dos
   * @param success callback function success(response:Object):void
   * @param failure callback function failure(error:RemoteError):void
   * /
  function setTodos(todos:Array, success:Function = null, failure:Function = null):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
