Ext.define("com.coremedia.cms.editor.controlroom.project.ConfigureProjectListViewPluginBase", function(ConfigureProjectListViewPluginBase) {/*package com.coremedia.cms.editor.controlroom.project {

import com.coremedia.cms.editor.controlroom.controlRoomContext;
import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;

import ext.data.field.DataField;

public class ConfigureProjectListViewPluginBase implements EditorPlugin {

  [ArrayElementType("ext.grid.column.Column")]
  private var projectListViewColumns:Array;

  public*/ function ConfigureProjectListViewPluginBase$(config/*:ConfigureProjectListViewPlugin = null*/) {if(arguments.length<=0)config=null;
    this.projectListViewColumns$53dh = AS3.getBindable(config,"projectListViewColumns");
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    if (this.projectListViewColumns$53dh) {
      com.coremedia.cms.editor.controlroom.controlRoomContext.setProjectListViewColumns(this.projectListViewColumns$53dh);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      projectListViewColumns$53dh: null,
      constructor: ConfigureProjectListViewPluginBase$,
      init: init,
      requires: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      uses: ["com.coremedia.cms.editor.controlroom.controlRoomContext"]
    };
});
