Ext.define("com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomActionBase", function(ShowTabProjectInControlRoomActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {

import com.coremedia.cms.editor.controlroom.project.ProjectHelper;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.ui.util.EventUtil;

/**
 * An action to show the target project in the control room.
 * /
public class ShowTabProjectInControlRoomActionBase extends AbstractTabContextMenuProjectAction {
  public*/ function ShowTabProjectInControlRoomActionBase$(config/*:ShowTabProjectInControlRoomAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"showProject$xnDt"));
    this.super$xnDt(config);
  }/*

  private*/ function showProject()/*:void*/ {
    var project/*:Project*/ = this.getProject();
    if (project) {
      com.coremedia.ui.util.EventUtil.invokeLater(com.coremedia.cms.editor.controlroom.project.ProjectHelper.selectProjectsInMyProjects, project);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectAction",
      constructor: ShowTabProjectInControlRoomActionBase$,
      super$xnDt: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectAction.prototype.constructor.apply(this, arguments);
      },
      showProject$xnDt: showProject,
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectAction",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.ProjectHelper"]
    };
});
