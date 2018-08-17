Ext.define("com.coremedia.cms.editor.controlroom.project.actions.ShowProjectActionBase", function(ShowProjectActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {

import com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil;
import com.coremedia.cms.editor.controlroom.project.ProjectHelper;

public class ShowProjectActionBase extends AbstractProjectAction {

  public*/ function ShowProjectActionBase$(config/*:ShowProjectAction = null*/) {if(arguments.length<=0)config=null;
    this.super$B6e1(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction,com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil.extendConfig(config, 'showProject', {handler:AS3.bind( this,"showProject$B6e1")})));
  }/*

  private*/ function showProject()/*:void*/ {
    com.coremedia.cms.editor.controlroom.project.ProjectHelper.openProjectInTab(this.getProject());
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
      constructor: ShowProjectActionBase$,
      super$B6e1: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction.prototype.constructor.apply(this, arguments);
      },
      showProject$B6e1: showProject,
      checkDisabled: checkDisabled,
      checkHidden: checkHidden,
      requires: ["com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction"],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil",
        "com.coremedia.cms.editor.controlroom.project.ProjectHelper",
        "com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction"
      ]
    };
});
