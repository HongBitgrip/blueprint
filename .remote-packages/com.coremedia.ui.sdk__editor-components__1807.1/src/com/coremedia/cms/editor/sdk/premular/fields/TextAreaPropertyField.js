Ext.define("com.coremedia.cms.editor.sdk.premular.fields.TextAreaPropertyField", function(TextAreaPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.ui.components.AdvancedFieldContainer;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.ui.components.ResizableTextArea;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.ui.plugins.BindBlobPropertyPlugin;
import ext.layout.container.AnchorLayout;
import ext.form.Labelable;
[PublicApi]
/**
 A text area field that binds to a string property being edited inside
 of a document form. Specify the propertyName property for selecting
 the string property. This Property Field is designed to apply on a
 RichText Property.
 * /
public class TextAreaPropertyField extends AdvancedFieldContainer{

    import com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.textAreaPropertyField";

    public static const TEXT_AREA_PROPERTY_FIELD_ITEM_ID:String = "textAreaPropertyField";

    public*/function TextAreaPropertyField$(config/*:TextAreaPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.AdvancedFieldContainer*/ =AS3.cast(com.coremedia.ui.components.AdvancedFieldContainer,{});
    var defaults_$1/*:TextAreaPropertyField*/ =AS3.cast(TextAreaPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.labelAlign = "top";
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(TextAreaPropertyField.TEXT_AREA_PROPERTY_FIELD_ITEM_ID).build()));
    var editor_SetPropertyLabelPlugin_71_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_71_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_71_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_71_5_$1];
    var ui_ResizableTextArea_75_5_$1/*:com.coremedia.ui.components.ResizableTextArea*/ =AS3.cast(com.coremedia.ui.components.ResizableTextArea,{});
    ui_ResizableTextArea_75_5_$1.name =net.jangaroo.ext.Exml.asString( 'properties.' + AS3.getBindable(config,"propertyName"));
    ui_ResizableTextArea_75_5_$1.itemId =net.jangaroo.ext.Exml.asString( TextAreaPropertyField.TEXT_AREA_PROPERTY_FIELD_ITEM_ID);
    AS3.setBindable(ui_ResizableTextArea_75_5_$1,"height" , 100);
    ui_ResizableTextArea_75_5_$1.anchor = "100%";
    ui_ResizableTextArea_75_5_$1.hideLabel = true;
    ui_ResizableTextArea_75_5_$1.checkChangeBuffer = AS3.getBindable(config,"changeBuffer");
    var editor_SetPropertyEmptyTextPlugin_82_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_82_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_82_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_BindReadOnlyPlugin_84_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_84_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindReadOnlyPlugin_84_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    var editor_PropertyFieldPlugin_86_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_86_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_87_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_87_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_87_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_87_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var ui_BindBlobPropertyPlugin_90_9_$1/*:com.coremedia.ui.plugins.BindBlobPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindBlobPropertyPlugin,{});
    ui_BindBlobPropertyPlugin_90_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    AS3.setBindable(ui_BindBlobPropertyPlugin_90_9_$1,"transformer" , AS3.getBindable(config,"transformer") || com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer.convertToPlainText);
    AS3.setBindable(ui_BindBlobPropertyPlugin_90_9_$1,"reverseTransformer" , AS3.getBindable(config,"reverseTransformer") || com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer.convertToMarkup);
    ui_ResizableTextArea_75_5_$1.plugins = [editor_SetPropertyEmptyTextPlugin_82_9_$1, editor_BindReadOnlyPlugin_84_9_$1, editor_PropertyFieldPlugin_86_9_$1, editor_ShowIssuesPlugin_87_9_$1, ui_BindBlobPropertyPlugin_90_9_$1];
    ui_ResizableTextArea_75_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [ui_ResizableTextArea_75_5_$1];
    var layout_Anchor_97_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_97_5_$1);
    var labelable_100_5_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_100_5_$1.labelSeparator = "";
    config_$1["defaultType"] = labelable_100_5_$1['xtype'];
    delete labelable_100_5_$1['xtype'];
    delete labelable_100_5_$1['xclass'];
    config_$1.defaults = labelable_100_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8uHO(config_$1);
  }/*

    /**
     * A property path expression leading to the Bean whose property is edited.
     * This property editor assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;


    /**
     The number of milliseconds to wait for more changes to the field's
     value before sending the change event. The default value is 50.
     * /
    [Bindable]
    public var changeBuffer:Number;


    /**
     An optional transformer that transforms the contents before displaying them.
     The transformer is passed CoreMedia RichText which may be transformed in any way
     * /
    [Bindable]
    public var transformer:Function;


    /**
     An optional transformer that transforms the contents before persisting them.
     The transformer is passed a String that may be transformed, but must be compatible to CoreMedia RichText,
     and will be enclosed in a p tag.
     * /
    [Bindable]
    public var reverseTransformer:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.textAreaPropertyField",
      constructor: TextAreaPropertyField$,
      super$8uHO: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        hideIssues: false,
        changeBuffer: NaN,
        transformer: null,
        reverseTransformer: null
      },
      statics: {TEXT_AREA_PROPERTY_FIELD_ITEM_ID: "textAreaPropertyField"},
      requires: [
        "Ext.form.Labelable",
        "Ext.layout.container.Anchor",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.components.ResizableTextArea",
        "com.coremedia.ui.plugins.BindBlobPropertyPlugin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
