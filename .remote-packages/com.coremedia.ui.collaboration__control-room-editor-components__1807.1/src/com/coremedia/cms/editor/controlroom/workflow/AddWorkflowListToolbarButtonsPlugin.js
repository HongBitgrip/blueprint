Ext.define("com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPlugin", function(AddWorkflowListToolbarButtonsPlugin) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
public class AddWorkflowListToolbarButtonsPlugin extends AddWorkflowListToolbarButtonsPluginBase{

    public*/function AddWorkflowListToolbarButtonsPlugin$(config/*:AddWorkflowListToolbarButtonsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPluginBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPluginBase,{});
    var defaults_$1/*:AddWorkflowListToolbarButtonsPlugin*/ =AS3.cast(AddWorkflowListToolbarButtonsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$i7Ya(config_$1);
  }/*

    [Bindable]
    public var processCategory:String;


    [Bindable]
    public var buttons:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPluginBase",
      constructor: AddWorkflowListToolbarButtonsPlugin$,
      super$i7Ya: function() {
        com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        processCategory: null,
        buttons: null
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
