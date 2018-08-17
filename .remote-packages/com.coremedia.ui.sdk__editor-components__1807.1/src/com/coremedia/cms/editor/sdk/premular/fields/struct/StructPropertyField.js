Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField", function(StructPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel;
import com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGrid;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import ext.layout.container.FitLayout;
[PublicApi]
/**
 A tree that binds to a struct property being edited inside
 of a document form. Specify the propertyName property for selecting
 the struct property.
 * /
public class StructPropertyField extends Container{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.structPropertyField";

    public*/function StructPropertyField$(config/*:StructPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:StructPropertyField*/ =AS3.cast(StructPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_PropertyFieldLabel_51_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel,{});
    editor_PropertyFieldLabel_51_5_$1.hideLabel = AS3.getBindable(config,"hideLabel");
    AS3.setBindable(editor_PropertyFieldLabel_51_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_PropertyFieldLabel_51_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_StructEditorTreeGrid_55_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGrid*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGrid,{});
    editor_StructEditorTreeGrid_55_5_$1.itemId = "structPropertyField";
    AS3.setBindable(editor_StructEditorTreeGrid_55_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_StructEditorTreeGrid_55_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    editor_StructEditorTreeGrid_55_5_$1.enableColumnHide = false;
    AS3.setBindable(editor_StructEditorTreeGrid_55_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_StructEditorTreeGrid_55_5_$1.rootVisible = true;
    var editor_PropertyFieldPlugin_62_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_62_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_63_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_63_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_63_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_63_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    editor_StructEditorTreeGrid_55_5_$1.plugins = [editor_PropertyFieldPlugin_62_9_$1, editor_ShowIssuesPlugin_63_9_$1];
    editor_StructEditorTreeGrid_55_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [editor_PropertyFieldLabel_51_5_$1, editor_StructEditorTreeGrid_55_5_$1];
    var layout_Fit_71_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_71_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$KqKg(config_$1);
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

    [Bindable]
    /**
     * Set to true to hide the property label.
     *
     * @default false
     * /
    public var hideLabel:Boolean;

    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.structPropertyField",
      constructor: StructPropertyField$,
      super$KqKg: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        hideLabel: false,
        propertyName: null,
        hideIssues: false
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.Fit",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGrid",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
