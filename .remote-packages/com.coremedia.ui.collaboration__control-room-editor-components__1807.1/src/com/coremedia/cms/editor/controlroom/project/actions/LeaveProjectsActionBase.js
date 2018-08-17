Ext.define("com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsActionBase", function(LeaveProjectsActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil;

public class LeaveProjectsActionBase extends RemoveProjectMemberAction {

  public*/ function LeaveProjectsActionBase$(config/*:LeaveProjectsAction = null*/) {if(arguments.length<=0)config=null;
    this.super$LHys(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction,com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil.extendConfig(config, 'leaveProjects', {member: com.coremedia.cap.common.SESSION.getUser()})));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberAction",
      constructor: LeaveProjectsActionBase$,
      super$LHys: function() {
        com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberAction.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.controlroom.project.actions.RemoveProjectMemberAction"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil",
        "com.coremedia.cms.editor.controlroom.project.actions.LeaveProjectsAction"
      ]
    };
});
