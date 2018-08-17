Ext.define("com.coremedia.cms.editor.controlroom.project.actions.CreateProjectActionBase", function(CreateProjectActionBase) {/*package com.coremedia.cms.editor.controlroom.project.actions {

import com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil;
import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl;
import com.coremedia.cms.editor.sdk.actions.ContentAction;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class CreateProjectActionBase extends ContentAction {

  private var mode:String;
  private var tooltipMouseOffset:Array;
  private var afterCreateHandler:Function;

  private var originalCalculateDisabled:Function;

  public*/ function CreateProjectActionBase$(config/*:CreateProjectAction = null*/) {if(arguments.length<=0)config=null;
    this.mode$LA9Y = AS3.getBindable(config,"mode") || "empty";
    this.afterCreateHandler$LA9Y = AS3.getBindable(config,"afterCreateHandler");
    this.tooltipMouseOffset$LA9Y = AS3.getBindable(config,"tooltipMouseOffset") || undefined;

    // override
    this.originalCalculateDisabled$LA9Y = this["calculateDisabled"];
    this['calculateDisabled'] =AS3.bind( this,"overriddenCalculateDisabled$LA9Y");

    this.super$LA9Y(AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction,com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil.extendConfig(config, 'createProject_' + this.mode$LA9Y, {handler:AS3.bind( this,"createProject$LA9Y")}, this.tooltipMouseOffset$LA9Y)));
  }/*

  private*/ function overriddenCalculateDisabled()/*:Boolean*/ {
    if (this.mode$LA9Y === "empty") {
      return false;
    }

    return this.originalCalculateDisabled$LA9Y();
  }/*

  private*/ function createProject()/*:void*/ {
    var contents/*:Array*/;
    switch (this.mode$LA9Y) {
      case "selected" :
        contents = this.getContents();
        break;
      case "empty" :
      default:
        contents = [];
        break;
    }

    if (this.isDisabledFor(contents)) {
      return;
    }

    com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl.getInstance().createProject(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_createProject_new_name_text'), contents, this.afterCreateHandler$LA9Y);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      mode$LA9Y: null,
      tooltipMouseOffset$LA9Y: null,
      afterCreateHandler$LA9Y: null,
      originalCalculateDisabled$LA9Y: null,
      constructor: CreateProjectActionBase$,
      super$LA9Y: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      overriddenCalculateDisabled$LA9Y: overriddenCalculateDisabled,
      createProject$LA9Y: createProject,
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ControlRoomConfigUtil",
        "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl"
      ]
    };
});
