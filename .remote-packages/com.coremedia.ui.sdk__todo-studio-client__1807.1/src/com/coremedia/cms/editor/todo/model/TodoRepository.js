Ext.define("com.coremedia.cms.editor.todo.model.TodoRepository", function(TodoRepository) {/*package com.coremedia.cms.editor.todo.model {
import com.coremedia.ui.data.RemoteBean;

public interface TodoRepository extends RemoteBean {

  /**
   * Creates a new {@Link com.coremedia.cms.editor.todo.model.Todo} with the given properties
   *
   * @param target The target for the To-Do
   * @param description The description of the To-Do
   * @param callback will be triggered when the To-Do has been created,
   *        the first param is the new {@Link com.coremedia.cms.editor.todo.model.Todo}
   * /
  function createTodo(target:Object, description:String = null, callback:Function = null):void;

  /**
   * Get all targets with open {@Link com.coremedia.cms.editor.todo.model.Todo}s for the session user.
   *
   * @param callback
   * @return all targets with open todos of the session user
   * /
  function getTargetsWithOpenTodosForSessionUser(callback:Function = null):Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
