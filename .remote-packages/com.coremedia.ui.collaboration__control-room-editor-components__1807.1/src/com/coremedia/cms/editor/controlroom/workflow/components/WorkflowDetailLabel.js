Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel", function(WorkflowDetailLabel) {/*package com.coremedia.cms.editor.controlroom.workflow.components{
import ext.form.field.DisplayField;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
public class WorkflowDetailLabel extends DisplayField{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.workflowDetailLabel";

    public*/function WorkflowDetailLabel$(config/*:WorkflowDetailLabel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    var defaults_$1/*:WorkflowDetailLabel*/ =AS3.cast(WorkflowDetailLabel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"fieldLabel","DUMMY")));
    config_$1.htmlEncode = true;
    var ui_BindPropertyPlugin_25_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_25_5_$1.componentProperty = "value";
    ui_BindPropertyPlugin_25_5_$1.bindTo = AS3.getBindable(config,"textValueExpression");
    ui_BindPropertyPlugin_25_5_$1.transformer = AS3.getBindable(config,"transformer");
    config_$1.plugins = [ui_BindPropertyPlugin_25_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$qyE$(config_$1);
  }/*

    [Bindable]
    public var textValueExpression:ValueExpression;

    [Bindable]
    public var transformer:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.Display",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.workflowDetailLabel",
      constructor: WorkflowDetailLabel$,
      super$qyE$: function() {
        Ext.form.field.Display.prototype.constructor.apply(this, arguments);
      },
      config: {
        textValueExpression: null,
        transformer: null
      },
      requires: [
        "Ext.form.field.Display",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
