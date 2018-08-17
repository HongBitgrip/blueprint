Ext.define("com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogActionBase", function(ShowAddProjectMemberDialogActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {
import com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil;
import com.coremedia.cms.editor.controlroom.project.components.AddProjectMemberDialog;
import com.coremedia.cms.editor.controlroom.project.rest.Project;

public class ShowAddProjectMemberDialogActionBase extends AbstractProjectAction {

  public*/ function ShowAddProjectMemberDialogActionBase$(config/*:ShowAddProjectMemberDialogAction = null*/) {if(arguments.length<=0)config=null;
    this.super$oJ_W(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogAction,com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil.extendConfig(config, 'showAddProjectMemberDialogAction', {handler:AS3.bind( this,"showDialog$oJ_W")})));
  }/*

  private*/ function showDialog()/*:void*/ {
    var project/*:Project*/ = this.getProject();
    if (project) {
      var addProjectMemberDialogCfg/*:AddProjectMemberDialog*/ = AS3.cast(com.coremedia.cms.editor.controlroom.project.components.AddProjectMemberDialog,{});
      AS3.setBindable(addProjectMemberDialogCfg,"project" , project);
      var dialog/*:AddProjectMemberDialog*/ = new com.coremedia.cms.editor.controlroom.project.components.AddProjectMemberDialog(addProjectMemberDialogCfg);
      dialog.show();
    }
  }/*

  override public*/ function checkDisabled()/*:Boolean*/ {
    return this.getProject() === null;
  }/*

  override public*/ function checkHidden()/*:Boolean*/ {
    return this.checkDisabled();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction",
      constructor: ShowAddProjectMemberDialogActionBase$,
      super$oJ_W: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction.prototype.constructor.apply(this, arguments);
      },
      showDialog$oJ_W: showDialog,
      checkDisabled: checkDisabled,
      checkHidden: checkHidden,
      requires: ["com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction"],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil",
        "com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogAction",
        "com.coremedia.cms.editor.controlroom.project.components.AddProjectMemberDialog"
      ]
    };
});
