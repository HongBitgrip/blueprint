Ext.define("com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectImpl", function(ProjectImpl) {/*package com.coremedia.cms.editor.controlroom.project.rest.impl {
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

[RestResource(uriTemplate="project/{id:[^/]+}")]
public class ProjectImpl extends RemoteBeanImpl implements Project {

  private const MEMBERS_URI_SEGMENT:String = "members";
  private const ADD_MEMBERS_URI_SEGMENT:String =*/function ADD_MEMBERS_URI_SEGMENT_(){this.ADD_MEMBERS_URI_SEGMENT$wRDq=( this.MEMBERS_URI_SEGMENT$wRDq + "/add");}/*;
  private const REMOVE_MEMBERS_URI_SEGMENT:String =*/function REMOVE_MEMBERS_URI_SEGMENT_(){this.REMOVE_MEMBERS_URI_SEGMENT$wRDq=( this.MEMBERS_URI_SEGMENT$wRDq + "/remove");}/*;

  private const CONTENTS_URI_SEGMENT:String = "contents";
  private const ADD_CONTENTS_URI_SEGMENT:String =*/function ADD_CONTENTS_URI_SEGMENT_(){this.ADD_CONTENTS_URI_SEGMENT$wRDq=( this.CONTENTS_URI_SEGMENT$wRDq + "/add");}/*;
  private const REMOVE_CONTENTS_URI_SEGMENT:String =*/function REMOVE_CONTENTS_URI_SEGMENT_(){this.REMOVE_CONTENTS_URI_SEGMENT$wRDq=( this.CONTENTS_URI_SEGMENT$wRDq + "/remove");}/*;

  //noinspection JSFieldCanBeLocal
  private const TODOS_URI_SEGMENT:String = "todos";

  public*/ function ProjectImpl$(path/*:String*/) {
    this.super$wRDq(path);ADD_MEMBERS_URI_SEGMENT_.call(this);REMOVE_MEMBERS_URI_SEGMENT_.call(this);ADD_CONTENTS_URI_SEGMENT_.call(this);REMOVE_CONTENTS_URI_SEGMENT_.call(this);;
  }/*

  override public*/ function getId()/*:String*/ {
    return this.get(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.ID);
  }/*

  public*/ function getName()/*:String*/ {
    return this.get(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.NAME);
  }/*

  public*/ function setName(name/*:String*/)/*:void*/ {
    this.set(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.NAME, name);
  }/*

  public*/ function getDescription()/*:String*/ {
    return this.get(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.DESCRIPTION);
  }/*

  public*/ function setDescription(description/*:String*/)/*:void*/ {
    this.set(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.DESCRIPTION, description);
  }/*

  public*/ function getStartDate()/*:Date*/ {
    return this.get(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.START_DATE);
  }/*

  public*/ function getDueDate()/*:Date*/ {
    return this.get(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.DUE_DATE);
  }/*

  public*/ function setDueDate(dueDate/*:Date*/)/*:void*/ {
    this.set(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.DUE_DATE, dueDate);
  }/*

  public*/ function getContents(callback/*:Function = null*/)/*:Array*/ {var this$=this;if(arguments.length<=0)callback=null;
    var contentsBean/*:RemoteBean*/ = com.coremedia.ui.data.beanFactory.getRemoteBean(this.getUriPath() + "/" + this.CONTENTS_URI_SEGMENT$wRDq);
    if (callback || !contentsBean.isLoaded()) {
      contentsBean.load(function ()/*:void*/ {
        if (callback) {
          callback(this$.getContents());
        }
      });
      return undefined;
    }
    return com.coremedia.ui.data.RemoteBeanUtil.isAccessible(contentsBean) ? contentsBean.get("items") : [];
  }/*

  public*/ function setContents(contents/*:Array*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + this.ADD_CONTENTS_URI_SEGMENT$wRDq, "PUT", true);
    rsm.request({
              contents: contents || []
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              success && success(rsmr.getResponseJSON());
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              failure && failure(rsmr.getError());
            });
  }/*

  public*/ function addContents(contents/*:Array*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + this.ADD_CONTENTS_URI_SEGMENT$wRDq, "PUT", true);
    rsm.request({
              contents: contents || []
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              success && success(rsmr.getResponseJSON());
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              failure && failure(rsmr.getError());
            });
  }/*

  public*/ function removeContents(contents/*:Array*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + this.REMOVE_CONTENTS_URI_SEGMENT$wRDq, "PUT", true);
    rsm.request({
              contents: contents || []
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              success && success(rsmr.getResponseJSON());
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              failure && failure(rsmr.getError());
            });
  }/*

  public*/ function getMembers(callback/*:Function = null*/)/*:Array*/ {var this$=this;if(arguments.length<=0)callback=null;
    var usersBean/*:RemoteBean*/ = com.coremedia.ui.data.beanFactory.getRemoteBean(this.getUriPath() + "/" + this.MEMBERS_URI_SEGMENT$wRDq);
    if (callback || !usersBean.isLoaded()) {
      usersBean.load(function ()/*:void*/ {
        if (callback) {
          callback(this$.getMembers());
        }
      });
      return undefined;
    }
    return com.coremedia.ui.data.RemoteBeanUtil.isAccessible(usersBean) ? usersBean.get("items") : [];
  }/*

  public*/ function setMembers(members/*:Array*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + this.MEMBERS_URI_SEGMENT$wRDq, "PUT", true);
    rsm.request({
              members: members
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              success && success(rsmr.getResponseJSON());
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              failure && failure(rsmr.getError());
            });
  }/*

  public*/ function addMembers(members/*:Array*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + this.ADD_MEMBERS_URI_SEGMENT$wRDq, "PUT", true);
    rsm.request({
              members: members
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              success && success(rsmr.getResponseJSON());
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              failure && failure(rsmr.getError());
            });
  }/*

  public*/ function removeMembers(members/*:Array*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + this.REMOVE_MEMBERS_URI_SEGMENT$wRDq, "PUT", true);
    rsm.request({
              members: members
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              success && success(rsmr.getResponseJSON());
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              failure && failure(rsmr.getError());
            });
  }/*

  public*/ function getTodos(callback/*:Function = null*/)/*:Array*/ {var this$=this;if(arguments.length<=0)callback=null;
    var todosBean/*:RemoteBean*/ = com.coremedia.ui.data.beanFactory.getRemoteBean(this.getUriPath() + "/" + this.TODOS_URI_SEGMENT$wRDq);
    if (callback || !todosBean.isLoaded()) {
      todosBean.load(function ()/*:void*/ {
        if (callback) {
          callback(this$.getTodos());
        }
      });
      return undefined;
    }
    return com.coremedia.ui.data.RemoteBeanUtil.isAccessible(todosBean) ? todosBean.get("items") : [];
  }/*

  public*/ function setTodos(todos/*:Array*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/" + this.TODOS_URI_SEGMENT$wRDq, "PUT", true);
    rsm.request({
              todos: todos
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              success && success(rsmr.getResponseJSON());
            },
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              failure && failure(rsmr.getError());
            });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cms.editor.controlroom.project.rest.Project"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "project/{id:[^/]+}"
        ]
      ]},
      MEMBERS_URI_SEGMENT$wRDq: "members",
      CONTENTS_URI_SEGMENT$wRDq: "contents",
      TODOS_URI_SEGMENT$wRDq: "todos",
      constructor: ProjectImpl$,
      super$wRDq: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getId: getId,
      getName: getName,
      setName: setName,
      getDescription: getDescription,
      setDescription: setDescription,
      getStartDate: getStartDate,
      getDueDate: getDueDate,
      setDueDate: setDueDate,
      getContents: getContents,
      setContents: setContents,
      addContents: addContents,
      removeContents: removeContents,
      getMembers: getMembers,
      setMembers: setMembers,
      addMembers: addMembers,
      removeMembers: removeMembers,
      getTodos: getTodos,
      setTodos: setTodos,
      requires: [
        "com.coremedia.cms.editor.controlroom.project.rest.Project",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames"]
    };
});
