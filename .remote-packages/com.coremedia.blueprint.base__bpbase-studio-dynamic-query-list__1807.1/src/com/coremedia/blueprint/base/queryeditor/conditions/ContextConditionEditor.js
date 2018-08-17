Ext.define("com.coremedia.blueprint.base.queryeditor.conditions.ContextConditionEditor", function(ContextConditionEditor) {/*package com.coremedia.blueprint.base.queryeditor.conditions{
import com.coremedia.blueprint.base.queryeditor.conditions.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField;
import ext.layout.container.FitLayout;

    [ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditor')]
public class ContextConditionEditor extends ContextConditionEditorBase{

    public static const xtype:String = "com.coremedia.blueprint.base.queryeditor.config.contextConditionEditor";

    public*/function ContextConditionEditor$(config/*:ContextConditionEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.queryeditor.conditions.ContextConditionEditorBase*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.conditions.ContextConditionEditorBase,{});
    var defaults_$1/*:ContextConditionEditor*/ =AS3.cast(ContextConditionEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_LinkListPropertyField_23_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField,{});
    AS3.setBindable(editor_LinkListPropertyField_23_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_LinkListPropertyField_23_5_$1,"linkType" ,net.jangaroo.ext.Exml.asString( config.contentType));
    editor_LinkListPropertyField_23_5_$1.labelAlign = "top";
    editor_LinkListPropertyField_23_5_$1.anchor = "100%";
    AS3.setBindable(editor_LinkListPropertyField_23_5_$1,"showThumbnails" , false);
    AS3.setBindable(editor_LinkListPropertyField_23_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( this.resolvePropertyName(config.propertyName)));
    AS3.setBindable(editor_LinkListPropertyField_23_5_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    config_$1.items = [editor_LinkListPropertyField_23_5_$1];
    var layout_Fit_32_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_32_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$FEhg(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.queryeditor.conditions.ContextConditionEditorBase",
      alias: "widget.com.coremedia.blueprint.base.queryeditor.config.contextConditionEditor",
      constructor: ContextConditionEditor$,
      super$FEhg: function() {
        com.coremedia.blueprint.base.queryeditor.conditions.ContextConditionEditorBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.layout.container.Fit",
        "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
        "com.coremedia.blueprint.base.queryeditor.conditions.ContextConditionEditorBase",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
