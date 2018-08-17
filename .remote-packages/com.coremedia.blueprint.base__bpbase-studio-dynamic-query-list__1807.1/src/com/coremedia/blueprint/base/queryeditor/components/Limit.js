Ext.define("com.coremedia.blueprint.base.queryeditor.components.Limit", function(Limit) {/*package com.coremedia.blueprint.base.queryeditor.components{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import ext.form.Label;
import com.coremedia.ui.components.StatefulNumberField;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BlockEnterPlugin;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditor')]
public class Limit extends Container{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.blueprint.base.queryeditor.config.limit";

    public*/function Limit$(config/*:Limit = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:Limit*/ =AS3.cast(Limit,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var label_40_5_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_40_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_text_how_many')));
    var ui_StatefulNumberField_41_5_$1/*:com.coremedia.ui.components.StatefulNumberField*/ =AS3.cast(com.coremedia.ui.components.StatefulNumberField,{});
    ui_StatefulNumberField_41_5_$1.name =net.jangaroo.ext.Exml.asString( 'properties.' + AS3.getBindable(config,"queryPropertyName") + '.' + AS3.getBindable(config,"propertyName"));
    ui_StatefulNumberField_41_5_$1.itemId = "limitNumberField";
    AS3.setBindable(ui_StatefulNumberField_41_5_$1,"minWidth" , 200.0);
    AS3.setBindable(ui_StatefulNumberField_41_5_$1,"maxWidth" , 200.0);
    ui_StatefulNumberField_41_5_$1.allowDecimals = false;
    AS3.setBindable(ui_StatefulNumberField_41_5_$1,"spinUpEnabled" , true);
    AS3.setBindable(ui_StatefulNumberField_41_5_$1,"spinDownEnabled" , true);
    ui_StatefulNumberField_41_5_$1.hideLabel = true;
    AS3.setBindable(ui_StatefulNumberField_41_5_$1,"minValue" , parseInt(this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_limit_min_value')));
    var editor_SetPropertyEmptyTextPlugin_51_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_51_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_51_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"queryPropertyName") + '.' + AS3.getBindable(config,"propertyName")));
    var editor_BindReadOnlyPlugin_53_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    editor_BindReadOnlyPlugin_53_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindReadOnlyPlugin_53_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    var editor_PropertyFieldPlugin_55_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_55_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"queryPropertyName") + '.' + AS3.getBindable(config,"propertyName")));
    var ui_BindPropertyPlugin_56_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_56_9_$1.ifUndefined = "";
    ui_BindPropertyPlugin_56_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"queryPropertyName") + '.' + AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_56_9_$1.reverseTransformer = function(value/*:**/)/*:**/ {return (value || (value === 0)) ? value : null;};
    ui_BindPropertyPlugin_56_9_$1.bidirectional = true;
    var ui_BindPropertyPlugin_60_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_60_9_$1.ifUndefined = "";
    ui_BindPropertyPlugin_60_9_$1.componentEvent = "spin";
    ui_BindPropertyPlugin_60_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"queryPropertyName") + '.' + AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_60_9_$1.reverseTransformer = function(value/*:**/)/*:**/ {return (value || (value === 0)) ? value : null;};
    ui_BindPropertyPlugin_60_9_$1.bidirectional = true;
    var ui_BlockEnterPlugin_65_9_$1/*:com.coremedia.ui.plugins.BlockEnterPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BlockEnterPlugin,{});
    ui_StatefulNumberField_41_5_$1.plugins = [editor_SetPropertyEmptyTextPlugin_51_9_$1, editor_BindReadOnlyPlugin_53_9_$1, editor_PropertyFieldPlugin_55_9_$1, ui_BindPropertyPlugin_56_9_$1, ui_BindPropertyPlugin_60_9_$1, ui_BlockEnterPlugin_65_9_$1];
    ui_StatefulNumberField_41_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [label_40_5_$1, ui_StatefulNumberField_41_5_$1];
    var layout_VBox_70_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(config_$1,"layout" , layout_VBox_70_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Uwj8(config_$1);
  }/*

    /**
     * Content bean value expression
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /** Content bean property containing the struct that defines the query. * /
    [Bindable]
    public var queryPropertyName:String;


    /** Content bean property containing the limit. * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.blueprint.base.queryeditor.config.limit",
      constructor: Limit$,
      super$Uwj8: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        queryPropertyName: null,
        propertyName: null
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.Label",
        "Ext.layout.container.VBox",
        "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin",
        "com.coremedia.ui.components.StatefulNumberField",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BlockEnterPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
