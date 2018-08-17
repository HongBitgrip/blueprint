Ext.define("com.coremedia.personalization.ui.ConditionsField", function(ConditionsField) {/*package com.coremedia.personalization.ui{
import com.coremedia.personalization.ui.editors.ConditionsEditorBase;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.ui.plugins.BindBlobPropertyPlugin;
import ext.panel.Panel;
import ext.form.field.DisplayField;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
/**
 A property editor used for editing document properties containing condition expressions as defined in the
 CMSelectionRules grammar.
 * /
public class ConditionsField extends ConditionsEditorBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.personalization.ui.config.conditionsField";

    public*/function ConditionsField$(config/*:ConditionsField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.personalization.ui.editors.ConditionsEditorBase*/ =AS3.cast(com.coremedia.personalization.ui.editors.ConditionsEditorBase,{});
    var defaults_$1/*:ConditionsField*/ =AS3.cast(ConditionsField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"conditionItems" , AS3.getBindable(config,"conditionItems"));
    var editor_SetPropertyLabelPlugin_44_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_44_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyLabelPlugin_44_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_BindDisablePlugin_46_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_46_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    var ui_BindBlobPropertyPlugin_47_5_$1/*:com.coremedia.ui.plugins.BindBlobPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindBlobPropertyPlugin,{});
    ui_BindBlobPropertyPlugin_47_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_44_5_$1, editor_BindDisablePlugin_46_5_$1, ui_BindBlobPropertyPlugin_47_5_$1];
    var panel_50_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_50_5_$1.itemId = "loadingInfo";
    AS3.setBindable(panel_50_5_$1,"layout" , "anchor");
    panel_50_5_$1.hideMode = "display";
    var displayField_54_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_54_9_$1,"value" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_loadingInfo'));
    panel_50_5_$1.items = [displayField_54_9_$1];
    config_$1.items = [panel_50_5_$1];
    var layout_Anchor_60_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    layout_Anchor_60_5_$1.anchor = "100%";
    AS3.setBindable(config_$1,"layout" , layout_Anchor_60_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$MtVe(config_$1);
  }/*

    /**
     * a property path expression leading to the Bean whose property is edited.
     * This property editor assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /**
     Definitions of the different conditions types and their mapping to context properties.
     * /
    [Bindable]
    public var conditionItems:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.editors.ConditionsEditorBase",
      alias: "widget.com.coremedia.personalization.ui.config.conditionsField",
      constructor: ConditionsField$,
      super$MtVe: function() {
        com.coremedia.personalization.ui.editors.ConditionsEditorBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyName: null,
        conditionItems: null
      },
      requires: [
        "Ext.form.field.Display",
        "Ext.layout.container.Anchor",
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.editors.ConditionsEditorBase",
        "com.coremedia.ui.plugins.BindBlobPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
