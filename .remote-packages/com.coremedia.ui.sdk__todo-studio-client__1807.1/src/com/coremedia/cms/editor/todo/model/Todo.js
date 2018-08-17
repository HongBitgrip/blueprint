Ext.define("com.coremedia.cms.editor.todo.model.Todo", function(Todo) {/*package com.coremedia.cms.editor.todo.model {
import com.coremedia.ui.data.RemoteBean;

public interface Todo extends RemoteBean {

  function getTarget():Object;

  function getDescription():String;
  function setDescription(description:String):void;

  function getTodoState():String;
  function setTodoState(state:String):void;

  function getDueDate():Date;
  function setDueDate(dueDate:Date):void;

  function deleteMe(callback:Function = null):void;

  /**
   * Returns the assignees of this To-Do.
   *
   * Calling this method might return 'undefined' even if assignees
   * for the project exist. An asynchronous call to load the assignees
   * is triggered so that a later call to this method will
   * return the assignees.
   *
   * Consequently, it is recommended to use this method primarily in the
   * context of a FunctionValueExpression
   *
   * In case function shall be used in non value expressions a callback can be provided. If a callback is provided
   * getAssignees always returns undefined. The callback will be invoked as soon as the assignees are loaded.
   *
   * @param callback the callback to be triggered if assignees are loaded. The first parameter will be the assignees Array.
   * @return the assignees of the project if they are already loaded, undefined otherwise
   *
   * @see FunctionValueExpression
   * /
  function getAssignees(callback:Function = null):Array;

  /**
   * Sets the given assignees for the To-Do.
   *
   * @param assignees the assignees to set for the To-Do
   * /
  function setAssignees(assignees:Array):void;

  /**
   * Adds the given assignees to the To-Do.
   *
   * @param assignees the assignees to add to the To-Do
   * /
  function addAssignees(assignees:Array):void;

  /**
   * Removes the given assignees from the To-Do.
   *
   * @param assignees the assignees to remove from the To-Do
   * /
  function removeAssignees(assignees:Array):void;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
