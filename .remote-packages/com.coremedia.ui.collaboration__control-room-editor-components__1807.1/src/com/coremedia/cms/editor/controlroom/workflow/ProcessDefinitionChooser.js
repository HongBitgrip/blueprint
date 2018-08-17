Ext.define("com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooser", function(ProcessDefinitionChooser) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
/* editable=true would be more consistent with other parts of the Studio, but would require some changes of the state persistence logic * /
public class ProcessDefinitionChooser extends ProcessDefinitionChooserBase{

    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.processDefinitionChooser";

    public*/function ProcessDefinitionChooser$(config/*:ProcessDefinitionChooser = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooserBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooserBase,{});
    var defaults_$1/*:ProcessDefinitionChooser*/ =AS3.cast(ProcessDefinitionChooser,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_workflowTypeField_label')));
    config_$1.allowBlank = false;
    config_$1.valueField = "id";
    AS3.setBindable(config_$1,"displayField" , "displayName");
    AS3.setBindable(config_$1,"encodeItems" , true);
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"editable" , false);
    AS3.setBindable(config_$1,"ariaAttributes" , {'aria-required':'false'});
    config_$1.stateEvents = ['select'];
    var ui_BindListPlugin_31_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_31_5_$1,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"createStoreData"), AS3.getBindable(config,"availableProcessDefinitions")));
    var ui_DataField_34_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_34_9_$1.name = "id";
    var ui_DataField_35_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_35_9_$1.name = "displayName";
    ui_DataField_35_9_$1.encode = false;
    AS3.setBindable(ui_BindListPlugin_31_5_$1,"fields" , [ui_DataField_34_9_$1, ui_DataField_35_9_$1]);
    var ui_BindPropertyPlugin_39_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_39_5_$1.bindTo = AS3.getBindable(config,"selectedProcessDefinitionExpression");
    ui_BindPropertyPlugin_39_5_$1.componentEvent = "change";
    ui_BindPropertyPlugin_39_5_$1.ifUndefined = "";
    ui_BindPropertyPlugin_39_5_$1.bidirectional = true;
    config_$1.plugins = [ui_BindListPlugin_31_5_$1, ui_BindPropertyPlugin_39_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$18xi(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooserBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.processDefinitionChooser",
      constructor: ProcessDefinitionChooser$,
      super$18xi: function() {
        com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooserBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooserBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
