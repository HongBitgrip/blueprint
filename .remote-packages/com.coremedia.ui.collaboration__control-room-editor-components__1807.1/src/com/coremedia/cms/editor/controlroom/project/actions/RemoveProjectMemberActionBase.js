Ext.define("com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberActionBase", function(RemoveProjectMemberActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.cms.editor.todo.model.Todo;
import com.coremedia.cms.editor.todo.rest.impl.TodoImpl;
import com.coremedia.ui.data.RemoteBeanUtil;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class RemoveProjectMemberActionBase extends AbstractProjectAction {

  private var member:User;

  public*/ function RemoveProjectMemberActionBase$(config/*:RemoveProjectMemberAction = null*/) {if(arguments.length<=0)config=null;
    this.member$hMVK = AS3.getBindable(config,"member");
    this.super$hMVK(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberAction,com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil.extendConfig(config, 'removeProjectMember', {handler:AS3.bind( this,"triggerAction")})));
  }/*

  protected*/ function triggerAction()/*:void*/ {
      this.confirmedRemoveProjectMember$hMVK();
  }/*

  /**
   * Assumes all RemoteBeans are loaded.
   *
   * @return TRUE if member is assigned to at least one open To-Do, otherwise FALSE
   * /
  private*/ function isMemberAssignedToOpenTodo(project/*:Project*/)/*:Boolean*/ {var this$=this;
    return !project.getTodos().every(function (todo/*:Todo*/)/*:Boolean*/ {
      return todo.getTodoState() === com.coremedia.cms.editor.todo.rest.impl.TodoImpl.DONE || todo.getAssignees().indexOf(this$.member$hMVK) === -1;
    });
  }/*

  /**
   * Assumes all RemoteBeans are loaded.
   *
   * @return TRUE if member is the only member of a least one project otherwise FALSE
   * /
  private*/ function isMemberOnlyMemberOfAProject(project/*:Project*/)/*:Boolean*/ {var this$=this;
    // every project has a member that is not the member to be removed
    return project.getMembers().filter(function (memb/*:User*/)/*:Boolean*/ {
        return memb !== this$.member$hMVK;
      }).length === 0;
  }/*

  private*/ function confirmedRemoveProjectMember()/*:void*/ {var this$=this;
    var projects/*:Array*/ = this.getProjects().concat([]);
    function loop()/*:void*/ {
      var project/*:Project*/ = projects.pop();

      if (!project) {
        return;
      }

      if (this$.isMemberOnlyMemberOfAProject$hMVK(project)) {
        this$.removeAfterDeletionConfirmation$hMVK(project, loop);
      } else {
        if (this$.isMemberAssignedToOpenTodo$hMVK(project)) {
          this$.removeAfterTodoConfirmation$hMVK(project, loop);
        } else {
          this$.doRemoveMember$hMVK(project);
          loop();
        }
      }
    }

    loop();
  }/*

  private*/ function removeAfterTodoConfirmation(project/*:Project*/, callback/*:Function*/)/*:void*/ {var this$=this;
    var message/*:String*/;
    var buttonText/*:String*/;
    if (this.member$hMVK !== com.coremedia.cap.common.SESSION.getUser()) {
      message = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_removeProjectMember_openTodos_confirm_message');
      message = Ext.String.format(message, project.getName(), this.member$hMVK.getName());
      buttonText = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_removeProjectMember_openTodos_confirm_buttonText');
    } else {
      message = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_removeProjectMember_openTodos_confirm_messageSelf');
      message = Ext.String.format(message, project.getName());
      buttonText = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_removeProjectMember_openTodos_confirm_buttonTextSelf');
    }
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_removeProjectMember_openTodos_confirm_title'),
            message,
            buttonText,
            function (btn/*:String*/)/*:void*/ {
              if ("ok" === btn) {
                this$.doRemoveMember$hMVK(project);
              }
              callback();
            }
    );
  }/*

  private*/ function removeAfterDeletionConfirmation(project/*:Project*/, callback/*:Function*/)/*:void*/ {var this$=this;
    var message/*:String*/;
    var buttonText/*:String*/;
    if (this.member$hMVK !== com.coremedia.cap.common.SESSION.getUser()) {
      message = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_removeProjectMember_projectDeletion_confirm_message');
      message = Ext.String.format(message, project.getName(), this.member$hMVK.getName());
      buttonText = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_removeProjectMember_projectDeletion_confirm_buttonText');
    } else {
      message = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_removeProjectMember_projectDeletion_confirm_messageSelf');
      message = Ext.String.format(message, project.getName());
      buttonText = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_removeProjectMember_projectDeletion_confirm_buttonTextSelf');
    }
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_removeProjectMember_projectDeletion_confirm_title'),
            message,
            buttonText,
            function (btn/*:String*/)/*:void*/ {
              if ("ok" === btn) {
                this$.doRemoveMember$hMVK(project);
              }
              callback();
            }
    );
  }/*

  /**
   * Performs the actual removal
   * /
  private*/ function doRemoveMember(project/*:Project*/)/*:void*/ {
    project.removeMembers([this.member$hMVK]);
  }/*


  override public*/ function checkDisabled()/*:Boolean*/ {
    if (this.checkHidden()) {
      return true;
    }
    var userProjects/*:Array*/ = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl.getInstance().getProjectsOfSessionUser();
    var isInUserProjects/*:Boolean*/ = userProjects && this.getProjects().every(function(project/*:Project*/)/*:Boolean*/ {
              return userProjects.indexOf(project) > -1;
            });

    if (!isInUserProjects) {
      return true;
    }

    // all remote beans to work with need to be loaded
    return !this.allRemoteBeansLoaded$hMVK();
  }/*

  override public*/ function checkHidden()/*:Boolean*/ {
    return (this.getProjects() || []).length === 0;
  }/*

  private*/ function allRemoteBeansLoaded()/*:Boolean*/ {
    return this.memberLoaded$hMVK() && this.allProjectsLoaded$hMVK();
  }/*

  private*/ function memberLoaded()/*:Boolean*/ {
    return com.coremedia.ui.data.RemoteBeanUtil.isAccessible(this.member$hMVK);

  }/*

  private*/ function allProjectsLoaded()/*:Boolean*/ {
    return this.getProjects().every(function (project/*:Project*/)/*:Boolean*/ {
      if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(project)) {
        return false;
      }
      var members/*:Array*/ = project.getMembers();
      if (!members) {
        return false;
      }
      var allMembersLoaded/*:Boolean*/ = members.every(function (member/*:User*/)/*:Boolean*/ {
        return ! !com.coremedia.ui.data.RemoteBeanUtil.isAccessible(member);
      });
      if (!allMembersLoaded) {
        return false;
      }
      var todos/*:Array*/ = project.getTodos();
      if (!todos) {
        return false;
      }
      var allAssigneesLoaded/*:Boolean*/ = todos.every(function (todo/*:Todo*/)/*:Boolean*/ {
        if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(todo)) {
          return false;
        }
        return todo.getAssignees() !== undefined;
      });
      return allAssigneesLoaded;
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction",
      member$hMVK: null,
      constructor: RemoveProjectMemberActionBase$,
      super$hMVK: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction.prototype.constructor.apply(this, arguments);
      },
      triggerAction: triggerAction,
      isMemberAssignedToOpenTodo$hMVK: isMemberAssignedToOpenTodo,
      isMemberOnlyMemberOfAProject$hMVK: isMemberOnlyMemberOfAProject,
      confirmedRemoveProjectMember$hMVK: confirmedRemoveProjectMember,
      removeAfterTodoConfirmation$hMVK: removeAfterTodoConfirmation,
      removeAfterDeletionConfirmation$hMVK: removeAfterDeletionConfirmation,
      doRemoveMember$hMVK: doRemoveMember,
      checkDisabled: checkDisabled,
      checkHidden: checkHidden,
      allRemoteBeansLoaded$hMVK: allRemoteBeansLoaded,
      memberLoaded$hMVK: memberLoaded,
      allProjectsLoaded$hMVK: allProjectsLoaded,
      requires: [
        "Ext.String",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.cms.editor.todo.rest.impl.TodoImpl",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil",
        "com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberAction",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl"
      ]
    };
});
