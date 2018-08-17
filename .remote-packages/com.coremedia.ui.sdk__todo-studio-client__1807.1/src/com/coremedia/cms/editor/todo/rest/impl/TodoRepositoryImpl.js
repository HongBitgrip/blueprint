Ext.define("com.coremedia.cms.editor.todo.rest.impl.TodoRepositoryImpl", function(TodoRepositoryImpl) {/*package com.coremedia.cms.editor.todo.rest.impl {
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.todo.model.Todo;
import com.coremedia.cms.editor.todo.model.TodoRepository;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

import ext.JSON;

[RestResource(uriTemplate="todos")]
public class TodoRepositoryImpl extends RemoteBeanImpl implements TodoRepository {

  private static*/ var instance$static/*:TodoRepository*/=null;/*

  private static const*/var CREATE_URI_SEGMENT$static/*:String*/ = "create";/*
  private static const*/var OPEN_TODO_TARGETS_PATH$static/*:String*/ = "opentodotargets";/*

  public static*/ function getInstance$static()/*:TodoRepository*/ {
    if (!instance$static) {
      instance$static = AS3.cast(com.coremedia.cms.editor.todo.model.TodoRepository,com.coremedia.ui.data.beanFactory.getRemoteBean("todos"));
    }
    return instance$static;
  }

  function TodoRepositoryImpl$(path/*:String*/) {
    this.super$7Zic(path);
  }/*

  public*/ function createTodo(target/*:Object*/, description/*:String = null*/, callback/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:description=null;case 2:callback=null;}
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + CREATE_URI_SEGMENT$static, "POST", true);
    rsm.request({
              target: target,
              description: description
            },
            function success(rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var todo/*:Todo*/ =AS3.as( com.coremedia.ui.data.impl.BeanFactoryImpl.resolveBeans(Ext.JSON.decode(rsmr.response.responseText)),  com.coremedia.cms.editor.todo.model.Todo);
              callback && callback(todo);
            },
            function failure(rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              callback && callback(rsmr.getError());
            }
    );
  }/*

  public*/ function getTargetsWithOpenTodosForSessionUser(callback/*:Function = null*/)/*:Array*/ {var this$=this;if(arguments.length<=0)callback=null;

    var todosBean/*:RemoteBean*/ = com.coremedia.ui.data.beanFactory.getRemoteBean(this.getUriPath() + "/" +
    com.coremedia.cms.editor.sdk.editorContext.getSession().getUser().get('numericId') + "/" + OPEN_TODO_TARGETS_PATH$static);
    if (callback || !todosBean.isLoaded()) {
      todosBean.load(function ()/*:void*/ {
        if (callback) {
          callback(this$.getTargetsWithOpenTodosForSessionUser());
        }
      });
      return undefined;
    }
    return com.coremedia.ui.data.RemoteBeanUtil.isAccessible(todosBean) ? todosBean.get("items") : [];
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cms.editor.todo.model.TodoRepository"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "todos"
        ]
      ]},
      constructor: TodoRepositoryImpl$,
      super$7Zic: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      createTodo: createTodo,
      getTargetsWithOpenTodosForSessionUser: getTargetsWithOpenTodosForSessionUser,
      statics: {getInstance: getInstance$static},
      requires: [
        "Ext.JSON",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.todo.model.TodoRepository",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: ["com.coremedia.cms.editor.todo.model.Todo"]
    };
});
