Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanelBase", function(ProjectMembersPanelBase) {/*package com.coremedia.cms.editor.controlroom.project.components {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.Member;
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberAction;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectMembersPanelBase extends ProjectSubPanel {

  private var projectUsersVE:ValueExpression;

  public*/ function ProjectMembersPanelBase$(config/*:ProjectMembersPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$Tr7E(config);
  }/*

  protected static*/ function getUserNameOrMe$static(member/*:Member*/)/*:String*/ {
    if (member === com.coremedia.cap.common.SESSION.getUser()) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_users_me');
    } else {
      return member.getName();
    }
  }/*

  protected*/ function removeProjectMember(member/*:Member*/)/*:void*/ {
    // project members can only be users so nothing to handle if member is not a user
    var user/*:User*/ =AS3.as( member,  com.coremedia.cap.user.User);
    if (!user) {
      return;
    }
    var config/*:RemoveProjectMemberAction*/ = AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberAction,{});
    AS3.setBindable(config,"projects" , [AS3.getBindable(this,"project")]);
    AS3.setBindable(config,"member" , user);
    var action/*:RemoveProjectMemberAction*/ = new com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberAction(config);
    action.execute();
  }/*

  protected*/ function getProjectMembersVE()/*:ValueExpression*/ {var this$=this;
    if (!this.projectUsersVE$Tr7E) {
      this.projectUsersVE$Tr7E = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {

        if (!com.coremedia.ui.data.RemoteBeanUtil.isAccessible(AS3.getBindable(this$,"project"))) {
          return undefined;
        }
        var members/*:Array*/ = AS3.getBindable(this$,"project").getMembers() || [];

        // Wait until all member names are determined before sorting.
        for (var i/*:int*/ = 0; i < members.length; i++) {
          var memberName/*:String*/ = members[i].getName();
          if (!memberName) {
            return undefined;
          }
        }

        // Sort members alphabetically but put session user on top.
        var sortedMembers/*:Array*/ = members.sort(function compare(member1/*:Member*/, member2/*:Member*/)/*:int*/ {
          var sessionUser/*:User*/ = com.coremedia.cap.common.SESSION.getUser();
          if (member1 === sessionUser) {
            return -1;
          } else if (member2 === sessionUser) {
            return 1;
          } else {
            var member1Name/*:String*/ = member1.getName();
            var member2Name/*:String*/ = member2.getName();
            if (member1Name < member2Name) return -1;
            if (member1Name > member2Name) return 1;
            return 0;
          }
        });

        return sortedMembers;
      });
    }
    return this.projectUsersVE$Tr7E;
  }/*

  protected static*/ function isMemberReadOnly$static(member/*:Member*/)/*:Boolean*/ {
    return (member === com.coremedia.cap.common.SESSION.getUser());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel",
      projectUsersVE$Tr7E: null,
      constructor: ProjectMembersPanelBase$,
      super$Tr7E: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel.prototype.constructor.apply(this, arguments);
      },
      removeProjectMember: removeProjectMember,
      getProjectMembersVE: getProjectMembersVE,
      statics: {
        getUserNameOrMe: getUserNameOrMe$static,
        isMemberReadOnly: isMemberReadOnly$static
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.user.User",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberAction"]
    };
});
