Ext.define("com.coremedia.cms.editor.todo.TodoHelper", function(TodoHelper) {/*package com.coremedia.cms.editor.todo {
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.todo.model.Todo;
import com.coremedia.cms.editor.todo.rest.impl.TodoImpl;

public class TodoHelper {*/

  function TodoHelper$() {
    // this is an utility class
  }/*

  /**
   * Return only To-Dos in progress.
   * If a user is available, return only To-Dos for which the user is the assignee.
   *
   * @param todos
   * @param user
   * @return
   * /
  public static*/ function filterOpenTodos$static(todos/*:Array*/, user/*:User*/)/*:Array*/ {
    return todos.filter(function (todo/*:Todo*/)/*:Boolean*/ {
      if (todo.getTodoState() !== com.coremedia.cms.editor.todo.rest.impl.TodoImpl.IN_PROGRESS_STATE) {
        return false;
      }
      if (user) {
        var assignees/*:Array*/ = todo.getAssignees();
        return assignees && assignees.indexOf(user) > -1;
      }
      return true;
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TodoHelper$,
      statics: {filterOpenTodos: filterOpenTodos$static},
      uses: ["com.coremedia.cms.editor.todo.rest.impl.TodoImpl"]
    };
});
