Ext.define("com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor", function(ConditionEditor) {/*package com.coremedia.blueprint.base.queryeditor.conditions{
import com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase;
import net.jangaroo.ext.Exml;
import ext.panel.Tool;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
/**
 A ConditionEditor renders a close icon in the header on the far right.
 * /
public class ConditionEditor extends ConditionEditorBase{

    public static const xtype:String = "com.coremedia.blueprint.base.queryeditor.config.conditionEditor";

    public*/function ConditionEditor$(config/*:ConditionEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase,{});
    var defaults_$1/*:ConditionEditor*/ =AS3.cast(ConditionEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var tool_20_5_$1/*:ext.panel.Tool*/ =AS3.cast(Ext.panel.Tool,{});
    AS3.setBindable(tool_20_5_$1,"type" , "close");
    tool_20_5_$1.handler =AS3.bind( this,"removeCondition");
    var editor_BindDisablePlugin_22_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_22_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindDisablePlugin_22_9_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    tool_20_5_$1.plugins = [editor_BindDisablePlugin_22_9_$1];
    tool_20_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.tools = [tool_20_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$QJrN(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase",
      alias: "widget.com.coremedia.blueprint.base.queryeditor.config.conditionEditor",
      constructor: ConditionEditor$,
      super$QJrN: function() {
        com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.panel.Tool",
        "com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
