Ext.define("com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction", function(CreateProjectAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
/**

 A <code>contentAction</code> that creates a project from contents.

 * /
public class CreateProjectAction extends CreateProjectActionBase{

    public*/function CreateProjectAction$(config/*:CreateProjectAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.CreateProjectActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.CreateProjectActionBase,{});
    var defaults_$1/*:CreateProjectAction*/ =AS3.cast(CreateProjectAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Z8Vn(config_$1);
  }/*

    [Bindable]
    public var mode:String;

    [Bindable]
    public var afterCreateHandler:Function;

    [Bindable]
    public var tooltipMouseOffset:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectActionBase",
      constructor: CreateProjectAction$,
      super$Z8Vn: function() {
        com.coremedia.cms.editor.controlroom.project.actions.CreateProjectActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        mode: null,
        afterCreateHandler: null,
        tooltipMouseOffset: null
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
