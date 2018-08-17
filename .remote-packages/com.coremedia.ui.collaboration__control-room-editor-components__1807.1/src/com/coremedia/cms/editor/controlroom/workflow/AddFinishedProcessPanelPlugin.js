Ext.define("com.coremedia.cms.editor.controlroom.workflow.AddFinishedProcessPanelPlugin", function(AddFinishedProcessPanelPlugin) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import com.coremedia.ui.plugins.AddCustomItemsPlugin;
import net.jangaroo.ext.Exml;
public class AddFinishedProcessPanelPlugin extends AddCustomItemsPlugin{

    import ext.Ext;

    public*/function AddFinishedProcessPanelPlugin$(config/*:AddFinishedProcessPanelPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.plugins.AddCustomItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddCustomItemsPlugin,{});
    var defaults_$1/*:AddFinishedProcessPanelPlugin*/ =AS3.cast(AddFinishedProcessPanelPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"property" , "workflowInfoPanels");
    AS3.setBindable(config_$1,"items" , AS3.getBindable(config,"finishedPanel") ? [Ext.apply({
                                     'itemId': AS3.getBindable(config,"processDefinitionName"),
                                     'processDefinitionName': AS3.getBindable(config,"processDefinitionName")
                                   }, AS3.getBindable(config,"finishedPanel"))] : []);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$pJIe(config_$1);
  }/*

    [Bindable]
    public var processDefinitionName:String;


    [Bindable]
    public var finishedPanel:com.coremedia.cms.editor.controlroom.workflow.WorkflowForm;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddCustomItemsPlugin",
      constructor: AddFinishedProcessPanelPlugin$,
      super$pJIe: function() {
        com.coremedia.ui.plugins.AddCustomItemsPlugin.prototype.constructor.apply(this, arguments);
      },
      config: {
        processDefinitionName: null,
        finishedPanel: null
      },
      requires: [
        "Ext",
        "com.coremedia.ui.plugins.AddCustomItemsPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
