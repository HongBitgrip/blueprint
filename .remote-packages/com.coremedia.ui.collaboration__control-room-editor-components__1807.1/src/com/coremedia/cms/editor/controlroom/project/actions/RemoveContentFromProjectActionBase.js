Ext.define("com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectActionBase", function(RemoveContentFromProjectActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {
import com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil;
import com.coremedia.cms.editor.controlroom.project.rest.Project;

public class RemoveContentFromProjectActionBase extends AbstractProjectContentsAction {


  public*/ function RemoveContentFromProjectActionBase$(config/*:RemoveContentFromProjectAction = null*/) {if(arguments.length<=0)config=null;
    this.super$gTAZ(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction,com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil.extendConfig(config, 'removeContentFromProject', {handler:AS3.bind( this,"removeContentFromProject$gTAZ")})));
  }/*

  private*/ function removeContentFromProject()/*:void*/ {
    this.iterateOverProjectContents(remove$static);
  }/*

  private static*/ function remove$static(project/*:Project*/, contents/*:Array*/)/*:void*/ {
    project.removeContents(contents);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsAction",
      constructor: RemoveContentFromProjectActionBase$,
      super$gTAZ: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsAction.prototype.constructor.apply(this, arguments);
      },
      removeContentFromProject$gTAZ: removeContentFromProject,
      requires: ["com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsAction"],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil",
        "com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction"
      ]
    };
});
