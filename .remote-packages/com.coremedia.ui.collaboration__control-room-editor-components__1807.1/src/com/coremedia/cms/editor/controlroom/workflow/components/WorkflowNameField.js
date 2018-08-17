Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameField", function(WorkflowNameField) {/*package com.coremedia.cms.editor.controlroom.workflow.components{
import com.coremedia.cms.editor.controlroom.workflow.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class WorkflowNameField extends WorkflowNameFieldBase{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.workflowNameField";

    public*/function WorkflowNameField$(config/*:WorkflowNameField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameFieldBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameFieldBase,{});
    var defaults_$1/*:WorkflowNameField*/ =AS3.cast(WorkflowNameField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.selectOnFocus = true;
    config_$1.hideLabel = true;
    AS3.setBindable(config_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_workflowNameTextField_emptyText')));
    var ui_BindPropertyPlugin_23_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_23_5_$1.bindTo = AS3.getBindable(config,"workflowNameExpression");
    ui_BindPropertyPlugin_23_5_$1.componentProperty = "value";
    ui_BindPropertyPlugin_23_5_$1.bidirectional = true;
    config_$1.plugins = [ui_BindPropertyPlugin_23_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$nyxB(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameFieldBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.workflowNameField",
      constructor: WorkflowNameField$,
      super$nyxB: function() {
        com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameFieldBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameFieldBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
