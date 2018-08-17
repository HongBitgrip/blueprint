Ext.define("com.coremedia.cms.editor.sdk.premular.fields.AvailableLocalesPropertyField", function(AvailableLocalesPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.ui.components.AdvancedFieldContainer;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBox;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
[PublicApi]
/**
 Property editor for locale property fields. The list of selectable locales is taken from a
 global locale settings document.
 * /
public class AvailableLocalesPropertyField extends AdvancedFieldContainer{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.availableLocalesPropertyField";

    public static const AVAILABLE_LOCALES_COMBO_BOX_ITEM_ID:String = "availableLocalesComboBoxItemId";

    public*/function AvailableLocalesPropertyField$(config/*:AvailableLocalesPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.AdvancedFieldContainer*/ =AS3.cast(com.coremedia.ui.components.AdvancedFieldContainer,{});
    var defaults_$1/*:AvailableLocalesPropertyField*/ =AS3.cast(AvailableLocalesPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "anchor");
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(AvailableLocalesPropertyField.AVAILABLE_LOCALES_COMBO_BOX_ITEM_ID).build()));
    var editor_SetPropertyLabelPlugin_52_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_52_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_52_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_52_5_$1];
    var editor_AvailableLocalesComboBox_56_5_$1/*:com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBox*/ =AS3.cast(com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBox,{});
    editor_AvailableLocalesComboBox_56_5_$1.itemId =net.jangaroo.ext.Exml.asString( AvailableLocalesPropertyField.AVAILABLE_LOCALES_COMBO_BOX_ITEM_ID);
    AS3.setBindable(editor_AvailableLocalesComboBox_56_5_$1,"bindTo" , AS3.getBindable(config,"bindTo").extendBy('properties'));
    AS3.setBindable(editor_AvailableLocalesComboBox_56_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_AvailableLocalesComboBox_56_5_$1,"addEmptyItem" , AS3.getBindable(config,"addEmptyItem") === undefined || AS3.getBindable(config,"addEmptyItem"));
    editor_AvailableLocalesComboBox_56_5_$1.anchor = "100%";
    var editor_PropertyFieldPlugin_62_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_62_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_63_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_63_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_63_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_63_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var editor_BindDisablePlugin_66_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_66_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindDisablePlugin_66_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_AvailableLocalesComboBox_56_5_$1.plugins = [editor_PropertyFieldPlugin_62_9_$1, editor_ShowIssuesPlugin_63_9_$1, editor_BindDisablePlugin_66_9_$1];
    editor_AvailableLocalesComboBox_56_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [editor_AvailableLocalesComboBox_56_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$EImY(config_$1);
  }/*

    /**
     * An expression evaluating to the content bean being edited.
     *
     * This property editor assumes that the bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /** The property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;


    /** Add empty item to the selection list (default: true). * /
    [Bindable]
    public var addEmptyItem:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.availableLocalesPropertyField",
      constructor: AvailableLocalesPropertyField$,
      super$EImY: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        hideIssues: false,
        addEmptyItem: false
      },
      statics: {AVAILABLE_LOCALES_COMBO_BOX_ITEM_ID: "availableLocalesComboBoxItemId"},
      requires: [
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBox",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
