Ext.define("com.coremedia.cms.editor.controlroom.project.actions.RenameProjectActionBase", function(RenameProjectActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {

import com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil;
import com.coremedia.cms.editor.controlroom.project.ProjectHelper;

public class RenameProjectActionBase extends AbstractProjectAction {

  public*/ function RenameProjectActionBase$(config/*:RenameProjectAction = null*/) {if(arguments.length<=0)config=null;
    this.super$AXXW(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RenameProjectAction,com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil.extendConfig(config, 'renameProject', {handler:AS3.bind( this,"renameProject$AXXW")})));
  }/*

  private*/ function renameProject()/*:void*/ {
    com.coremedia.cms.editor.controlroom.project.ProjectHelper.renameProjectInMyProjects(this.getProject(), false);
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
      constructor: RenameProjectActionBase$,
      super$AXXW: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction.prototype.constructor.apply(this, arguments);
      },
      renameProject$AXXW: renameProject,
      checkDisabled: checkDisabled,
      checkHidden: checkHidden,
      requires: ["com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction"],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil",
        "com.coremedia.cms.editor.controlroom.project.ProjectHelper",
        "com.coremedia.cms.editor.controlroom.project.actions.RenameProjectAction"
      ]
    };
});
