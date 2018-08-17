Ext.define("com.coremedia.cms.editor.sdk.premular.fields.SpinnerPropertyField", function(SpinnerPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.ui.components.AdvancedFieldContainer;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.ui.components.StatefulNumberField;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BlockEnterPlugin;
import ext.layout.container.FitLayout;
[PublicApi]
public class SpinnerPropertyField extends AdvancedFieldContainer{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.spinnerPropertyField";

    public static const SPINNER_PROPERTY_FIELD:String = "spinnerPropertyField";

    public static const MAX_VALUE:int = 2147483647;

    public static const MIN_VALUE:int = -2147483648;

    public*/function SpinnerPropertyField$(config/*:SpinnerPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.AdvancedFieldContainer*/ =AS3.cast(com.coremedia.ui.components.AdvancedFieldContainer,{});
    var defaults_$1/*:SpinnerPropertyField*/ =AS3.cast(SpinnerPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(SpinnerPropertyField.SPINNER_PROPERTY_FIELD).build()));
    var editor_SetPropertyLabelPlugin_64_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_64_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_64_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_64_5_$1];
    var ui_StatefulNumberField_68_5_$1/*:com.coremedia.ui.components.StatefulNumberField*/ =AS3.cast(com.coremedia.ui.components.StatefulNumberField,{});
    ui_StatefulNumberField_68_5_$1.name =net.jangaroo.ext.Exml.asString( 'properties.' + AS3.getBindable(config,"propertyName"));
    ui_StatefulNumberField_68_5_$1.itemId =net.jangaroo.ext.Exml.asString( SpinnerPropertyField.SPINNER_PROPERTY_FIELD);
    AS3.setBindable(ui_StatefulNumberField_68_5_$1,"minWidth" , AS3.getBindable(config,"fieldWidth"));
    AS3.setBindable(ui_StatefulNumberField_68_5_$1,"maxWidth" , AS3.getBindable(config,"fieldWidth"));
    ui_StatefulNumberField_68_5_$1.allowBlank = true;
    ui_StatefulNumberField_68_5_$1.allowDecimals = false;
    AS3.setBindable(ui_StatefulNumberField_68_5_$1,"spinUpEnabled" , true);
    AS3.setBindable(ui_StatefulNumberField_68_5_$1,"spinDownEnabled" , true);
    ui_StatefulNumberField_68_5_$1.hideLabel = true;
    AS3.setBindable(ui_StatefulNumberField_68_5_$1,"minValue" , (AS3.getBindable(config,"minValue") || AS3.getBindable(config,"minValue") === 0) ? AS3.getBindable(config,"minValue") : SpinnerPropertyField.MIN_VALUE);
    AS3.setBindable(ui_StatefulNumberField_68_5_$1,"maxValue" , (AS3.getBindable(config,"maxValue") || AS3.getBindable(config,"maxValue") === 0) ? AS3.getBindable(config,"maxValue") : SpinnerPropertyField.MAX_VALUE);
    var editor_SetPropertyEmptyTextPlugin_80_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_80_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_80_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_BindReadOnlyPlugin_82_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    editor_BindReadOnlyPlugin_82_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindReadOnlyPlugin_82_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    var editor_PropertyFieldPlugin_84_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_84_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_85_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_85_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_85_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_85_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var ui_BindPropertyPlugin_88_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_88_9_$1.ifUndefined = "";
    ui_BindPropertyPlugin_88_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_88_9_$1.disableStrictConsistency = config.disableStrictConsistency;
    ui_BindPropertyPlugin_88_9_$1.reverseTransformer = function(value/*:**/)/*:**/ {return (value || (value === 0)) ? value : null;};
    ui_BindPropertyPlugin_88_9_$1.bidirectional = true;
    var ui_BindPropertyPlugin_93_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_93_9_$1.ifUndefined = "";
    ui_BindPropertyPlugin_93_9_$1.componentEvent = "spin";
    ui_BindPropertyPlugin_93_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_93_9_$1.disableStrictConsistency = config.disableStrictConsistency;
    ui_BindPropertyPlugin_93_9_$1.reverseTransformer = function(value/*:**/)/*:**/ {return (value || (value === 0)) ? value : AS3.getBindable(config,"minValue");};
    ui_BindPropertyPlugin_93_9_$1.bidirectional = true;
    var ui_BlockEnterPlugin_99_9_$1/*:com.coremedia.ui.plugins.BlockEnterPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BlockEnterPlugin,{});
    ui_StatefulNumberField_68_5_$1.plugins = [editor_SetPropertyEmptyTextPlugin_80_9_$1, editor_BindReadOnlyPlugin_82_9_$1, editor_PropertyFieldPlugin_84_9_$1, editor_ShowIssuesPlugin_85_9_$1, ui_BindPropertyPlugin_88_9_$1, ui_BindPropertyPlugin_93_9_$1, ui_BlockEnterPlugin_99_9_$1];
    ui_StatefulNumberField_68_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [ui_StatefulNumberField_68_5_$1];
    var layout_Fit_104_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_104_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$eYz$(config_$1);
  }/*

    /**
     * a property path expression leading to the Bean whose property is edited.
     * This property editor assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * Forwarded to BindPropertyPlugins inside this form.
     *
     * @see BindPropertyPlugin.disableStrictConsistency
     * /
    [Config]
    public var disableStrictConsistency:Boolean;

    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;


    /** the minimum number value of this field * /
    [Bindable]
    public var minValue:int;


    /** the maximum number value of this field * /
    [Bindable]
    public var maxValue:int;


    /* the width of inner component (without the label) * /
    [Bindable]
    public var fieldWidth:int;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      metadata: {
        "": ["PublicApi"],
        disableStrictConsistency: ["Config"]
      },
      alias: "widget.com.coremedia.cms.editor.sdk.config.spinnerPropertyField",
      constructor: SpinnerPropertyField$,
      super$eYz$: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      disableStrictConsistency: false,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        hideIssues: false,
        minValue: 0,
        maxValue: 0,
        fieldWidth: 0
      },
      statics: {
        SPINNER_PROPERTY_FIELD: "spinnerPropertyField",
        MAX_VALUE: 2147483647,
        MIN_VALUE: -2147483648
      },
      requires: [
        "Ext.layout.container.Fit",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.components.StatefulNumberField",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
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
