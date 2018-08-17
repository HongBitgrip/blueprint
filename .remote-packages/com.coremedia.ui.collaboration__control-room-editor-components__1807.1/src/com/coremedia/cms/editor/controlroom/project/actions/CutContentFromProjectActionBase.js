Ext.define("com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectActionBase", function(CutContentFromProjectActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.sdk.clipboard.Clipboard;

[PublicApi]
public class CutContentFromProjectActionBase extends AbstractProjectContentsAction {

  /**
   * @param config the config object
   * /
  public*/ function CutContentFromProjectActionBase$(config/*:CutContentFromProjectAction = null*/) {if(arguments.length<=0)config=null;
    this.super$$Y$T(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction,com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil.extendConfig(config, 'cutContentFromProject', {handler:AS3.bind( this,"cutContentFromProject$$Y$T")})));
  }/*

  private*/ function cutContentFromProject()/*:void*/ {
    var allContents/*:Array*/ = [];

    this.iterateOverProjectContents(function (project/*:Project*/, contents/*:Array*/)/*:void*/ {
      if (project && contents) {
        project.removeContents(contents);
        contents.forEach(function (content/*:Content*/)/*:void*/ {
          if (allContents.indexOf(content) === -1) {
            allContents.push(content);
          }
        });
      }
    });

    // add to clipboard
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    clipboard.setValue(allContents, com.coremedia.cms.editor.sdk.clipboard.Clipboard.CUTLINK);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsAction",
      metadata: {"": ["PublicApi"]},
      constructor: CutContentFromProjectActionBase$,
      super$$Y$T: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsAction.prototype.constructor.apply(this, arguments);
      },
      cutContentFromProject$$Y$T: cutContentFromProject,
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsAction",
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil",
        "com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction"
      ]
    };
});
