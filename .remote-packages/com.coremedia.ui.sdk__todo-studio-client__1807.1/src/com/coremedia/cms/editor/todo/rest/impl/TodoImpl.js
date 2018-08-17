Ext.define("com.coremedia.cms.editor.todo.rest.impl.TodoImpl", function(TodoImpl) {/*package com.coremedia.cms.editor.todo.rest.impl {
import com.coremedia.cms.editor.todo.model.Todo;
import com.coremedia.cms.editor.todo.model.TodoPropertyNames;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;

[RestResource(uriTemplate="todo/{id:[^/]+}")]
public class TodoImpl extends RemoteBeanImpl implements Todo {

  public static const IN_PROGRESS_STATE:String = "IN_PROGRESS";
  public static const DONE:String = "DONE";

  private static const*/var ASSIGNEES_URI_SEGMENT$static/*:String*/ = "assignees";/*
  private static const*/var ADD_ASSIGNEES_URI_SEGMENT$static/*:String*/;/* =*/function ADD_ASSIGNEES_URI_SEGMENT$static_(){ADD_ASSIGNEES_URI_SEGMENT$static=( ASSIGNEES_URI_SEGMENT$static + "/add");};/*
  private static const*/var REMOVE_ASSIGNEES_URI_SEGMENT$static/*:String*/;/* =*/function REMOVE_ASSIGNEES_URI_SEGMENT$static_(){REMOVE_ASSIGNEES_URI_SEGMENT$static=( ASSIGNEES_URI_SEGMENT$static + "/remove");};/*

  public*/ function TodoImpl$(path/*:String*/) {
    this.super$tFEy(path);
  }/*

  public*/ function getTarget()/*:Object*/ {
    return this.get(com.coremedia.cms.editor.todo.model.TodoPropertyNames.TARGET);
  }/*

  public*/ function getDescription()/*:String*/ {
    return this.get(com.coremedia.cms.editor.todo.model.TodoPropertyNames.DESCRIPTION);
  }/*

  public*/ function setDescription(description/*:String*/)/*:void*/ {
    this.set(com.coremedia.cms.editor.todo.model.TodoPropertyNames.DESCRIPTION, description);
  }/*

  public*/ function getTodoState()/*:String*/ {
    return this.get(com.coremedia.cms.editor.todo.model.TodoPropertyNames.STATE);
  }/*

  public*/ function setTodoState(state/*:String*/)/*:void*/ {
    this.set(com.coremedia.cms.editor.todo.model.TodoPropertyNames.STATE, state);
  }/*

  public*/ function getDueDate()/*:Date*/ {
    return this.get(com.coremedia.cms.editor.todo.model.TodoPropertyNames.DUE_DATE);
  }/*

  public*/ function setDueDate(dueDate/*:Date*/)/*:void*/ {
    this.set(com.coremedia.cms.editor.todo.model.TodoPropertyNames.DUE_DATE, dueDate);
  }/*

  public*/ function deleteMe(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath(), 'DELETE');
    rsm.request(null, callback, callback);
  }/*

  public*/ function getAssignees(callback/*:Function = null*/)/*:Array*/ {var this$=this;if(arguments.length<=0)callback=null;
    var usersBean/*:RemoteBean*/ = com.coremedia.ui.data.beanFactory.getRemoteBean(this.getUriPath() + "/" + ASSIGNEES_URI_SEGMENT$static);
    if (callback || !usersBean.isLoaded()) {
      usersBean.load(function (usersBean/*:RemoteBean*/)/*:void*/ {
        if (callback) {
          callback(this$.getAssignees());
        }
      });
      return undefined;
    }
    return com.coremedia.ui.data.RemoteBeanUtil.isAccessible(usersBean) ? usersBean.get("items") : [];
  }/*

  public*/ function setAssignees(assignees/*:Array*/)/*:void*/ {
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + ASSIGNEES_URI_SEGMENT$static, "PUT", true);
    rsm.request({
      assignees: assignees
    });
  }/*

  public*/ function addAssignees(assignees/*:Array*/)/*:void*/ {
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + ADD_ASSIGNEES_URI_SEGMENT$static, "PUT", true);
    rsm.request({
      assignees: assignees
    });
  }/*

  public*/ function removeAssignees(assignees/*:Array*/)/*:void*/ {
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + REMOVE_ASSIGNEES_URI_SEGMENT$static, "PUT", true);
    rsm.request({
      assignees: assignees
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cms.editor.todo.model.Todo"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "todo/{id:[^/]+}"
        ]
      ]},
      constructor: TodoImpl$,
      super$tFEy: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getTarget: getTarget,
      getDescription: getDescription,
      setDescription: setDescription,
      getTodoState: getTodoState,
      setTodoState: setTodoState,
      getDueDate: getDueDate,
      setDueDate: setDueDate,
      deleteMe: deleteMe,
      getAssignees: getAssignees,
      setAssignees: setAssignees,
      addAssignees: addAssignees,
      removeAssignees: removeAssignees,
      statics: {
        IN_PROGRESS_STATE: "IN_PROGRESS",
        DONE: "DONE",
        ADD_ASSIGNEES_URI_SEGMENT: undefined,
        REMOVE_ASSIGNEES_URI_SEGMENT: undefined,
        __initStatics__: function() {
          ADD_ASSIGNEES_URI_SEGMENT$static_();
          REMOVE_ASSIGNEES_URI_SEGMENT$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.todo.model.Todo",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: ["com.coremedia.cms.editor.todo.model.TodoPropertyNames"]
    };
});
