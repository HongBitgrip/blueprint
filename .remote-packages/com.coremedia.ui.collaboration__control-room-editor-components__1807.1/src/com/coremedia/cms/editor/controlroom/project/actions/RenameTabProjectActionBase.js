Ext.define("com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectActionBase", function(RenameTabProjectActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;

import ext.util.Format;

import mx.resources.ResourceManager;

/**
 * An action to rename the target project in a pop-up dialog.
 * /
[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class RenameTabProjectActionBase extends AbstractTabContextMenuProjectAction {
  public*/ function RenameTabProjectActionBase$(config/*:RenameTabProjectAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"doRename$vj3B"));
    this.super$vj3B(config);
  }/*

  private*/ function doRename()/*:void*/ {
    var project/*:Project*/ = this.getProject();
    if (!project) {
      return;
    }
    var title/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_renameTabProjectAction_title_text');
    var message/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_renameTabProjectAction_message_text');
    var callback/*:Function*/ = function (btn/*:String*/, newName/*:String*/)/*:void*/ {
      if (btn === 'ok' && newName && Ext.util.Format.trim(newName).length !== 0) {
        project.setName(newName);
      }
    };
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.prompt(title, message, callback, project.getName());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectAction",
      constructor: RenameTabProjectActionBase$,
      super$vj3B: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectAction.prototype.constructor.apply(this, arguments);
      },
      doRename$vj3B: doRename,
      requires: [
        "Ext.util.Format",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectAction",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "mx.resources.ResourceManager"
      ]
    };
});
