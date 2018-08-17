Ext.define("com.coremedia.cms.editor.sdk.premular.fields.MasterVersionPropertyField", function(MasterVersionPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.components.StatefulNumberField;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.ui.plugins.BlockEnterPlugin;
public class MasterVersionPropertyField extends MasterVersionPropertyFieldBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.masterVersionPropertyField";

    public*/function MasterVersionPropertyField$(config/*:MasterVersionPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.MasterVersionPropertyFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.MasterVersionPropertyFieldBase,{});
    var defaults_$1/*:MasterVersionPropertyField*/ =AS3.cast(MasterVersionPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "form");
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(com.coremedia.cms.editor.sdk.premular.fields.MasterVersionPropertyFieldBase.NUMBER_FIELD_ITEM_ID).build()));
    var editor_SetPropertyLabelPlugin_42_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_42_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_42_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_42_5_$1];
    var displayField_47_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    var ui_BindVisibilityPlugin_49_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_49_9_$1.bindTo = this.getNumberFieldValueVE();
    var ui_BindPropertyPlugin_51_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_51_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_51_9_$1.boundValueChanged =AS3.bind( this,"labelBoundValueChanged");
    displayField_47_5_$1.plugins = [ui_BindVisibilityPlugin_49_9_$1, ui_BindPropertyPlugin_51_9_$1];
    var ui_StatefulNumberField_56_5_$1/*:com.coremedia.ui.components.StatefulNumberField*/ =AS3.cast(com.coremedia.ui.components.StatefulNumberField,{});
    ui_StatefulNumberField_56_5_$1.name =net.jangaroo.ext.Exml.asString( 'properties.' + AS3.getBindable(config,"propertyName"));
    ui_StatefulNumberField_56_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.MasterVersionPropertyFieldBase.NUMBER_FIELD_ITEM_ID);
    ui_StatefulNumberField_56_5_$1.anchor = "100%";
    ui_StatefulNumberField_56_5_$1.allowBlank = true;
    ui_StatefulNumberField_56_5_$1.allowDecimals = false;
    ui_StatefulNumberField_56_5_$1.hideLabel = true;
    var editor_SetPropertyEmptyTextPlugin_63_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_63_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_63_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_BindReadOnlyPlugin_65_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_65_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindReadOnlyPlugin_65_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    var editor_PropertyFieldPlugin_67_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_67_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_68_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_68_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_68_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_68_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var ui_BindPropertyPlugin_71_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_71_9_$1.ifUndefined = "";
    ui_BindPropertyPlugin_71_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_71_9_$1.disableStrictConsistency = config.disableStrictConsistency;
    ui_BindPropertyPlugin_71_9_$1.reverseTransformer =AS3.bind( this,"numberFieldReverseTransformer");
    ui_BindPropertyPlugin_71_9_$1.bidirectional = true;
    var ui_BlockEnterPlugin_76_9_$1/*:com.coremedia.ui.plugins.BlockEnterPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BlockEnterPlugin,{});
    ui_StatefulNumberField_56_5_$1.plugins = [editor_SetPropertyEmptyTextPlugin_63_9_$1, editor_BindReadOnlyPlugin_65_9_$1, editor_PropertyFieldPlugin_67_9_$1, editor_ShowIssuesPlugin_68_9_$1, ui_BindPropertyPlugin_71_9_$1, ui_BlockEnterPlugin_76_9_$1];
    config_$1.items = [displayField_47_5_$1, ui_StatefulNumberField_56_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BmfY(config_$1);
  }/*

    [Bindable]
    public var bindTo:ValueExpression;

    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * Forwarded to BindPropertyPlugins inside this form.
     *
     * @see BindPropertyPlugin.disableStrictConsistency
     * /
    [Config]
    public var disableStrictConsistency:Boolean;

    [Bindable]
    public var propertyName:String;


    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.MasterVersionPropertyFieldBase",
      metadata: {disableStrictConsistency: ["Config"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.masterVersionPropertyField",
      constructor: MasterVersionPropertyField$,
      super$BmfY: function() {
        com.coremedia.cms.editor.sdk.premular.fields.MasterVersionPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      disableStrictConsistency: false,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        hideIssues: false
      },
      requires: [
        "Ext.form.field.Display",
        "com.coremedia.cms.editor.sdk.premular.fields.MasterVersionPropertyFieldBase",
        "com.coremedia.ui.components.StatefulNumberField",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.BlockEnterPlugin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
