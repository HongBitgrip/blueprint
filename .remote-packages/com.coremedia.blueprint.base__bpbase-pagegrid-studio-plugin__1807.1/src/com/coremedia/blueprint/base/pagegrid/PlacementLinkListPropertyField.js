Ext.define("com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyField", function(PlacementLinkListPropertyField) {/*package com.coremedia.blueprint.base.pagegrid{
import com.coremedia.blueprint.base.pagegrid.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.AddItemsPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidget;
import ext.layout.container.VBoxLayout;


/*Well, we would have used a switching container, but it breaks the layout* /
public class PlacementLinkListPropertyField extends PlacementLinkListPropertyFieldBase{

    public static const xtype:String = "com.coremedia.blueprint.base.pagegrid.config.placementLinkListPropertyField";

    public*/function PlacementLinkListPropertyField$(config/*:PlacementLinkListPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyFieldBase*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyFieldBase,{});
    var defaults_$1/*:PlacementLinkListPropertyField*/ =AS3.cast(PlacementLinkListPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_AddItemsPlugin_58_5_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    AS3.setBindable(ui_AddItemsPlugin_58_5_$1,"onlyIf" ,AS3.bind( this,"isFallbackConfigured"));
    var editor_LinkListPropertyField_60_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField,{});
    editor_LinkListPropertyField_60_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyFieldBase.FALLBACK_CONTAINER);
    AS3.setBindable(editor_LinkListPropertyField_60_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( config.fallbackPropertyName));
    AS3.setBindable(editor_LinkListPropertyField_60_9_$1,"propertyFieldName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"fallbackPropertyFieldName")));
    AS3.setBindable(editor_LinkListPropertyField_60_9_$1,"linkListWrapper" , this.getFallbackStructContentLinkListWrapper(config));
    var ui_BindVisibilityPlugin_65_13_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_65_13_$1.bindTo = this.getActiveItemValueExpression(config, com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyFieldBase.FALLBACK_CONTAINER);
    editor_LinkListPropertyField_60_9_$1.plugins = [ui_BindVisibilityPlugin_65_13_$1];
    editor_LinkListPropertyField_60_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_PropertyFieldAnnotatedLinkListWidget_68_13_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidget*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidget,{});
    AS3.setBindable(editor_PropertyFieldAnnotatedLinkListWidget_68_13_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_PropertyFieldAnnotatedLinkListWidget_68_13_$1,"propertyNameWithoutIndex" ,net.jangaroo.ext.Exml.asString( config.fallbackPropertyName + "." + com.coremedia.blueprint.base.pagegrid.PageGridConstants.PLACEMENT_EXTENDED_ITEMS_PROPERTY));
    AS3.setBindable(editor_PropertyFieldAnnotatedLinkListWidget_68_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_PropertyFieldAnnotatedLinkListWidget_68_13_$1.items = AS3.getBindable(config,"rowWidgetItems");
    AS3.setBindable(editor_LinkListPropertyField_60_9_$1,"rowWidget" , editor_PropertyFieldAnnotatedLinkListWidget_68_13_$1);
    AS3.setBindable(ui_AddItemsPlugin_58_5_$1,"items" , [editor_LinkListPropertyField_60_9_$1]);
    config_$1.plugins = [ui_AddItemsPlugin_58_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_LinkListPropertyField_78_5_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField,{});
    editor_LinkListPropertyField_78_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyFieldBase.DEFAULT_CONTAINER);
    AS3.setBindable(editor_LinkListPropertyField_78_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_LinkListPropertyField_78_5_$1,"propertyFieldName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyFieldName")));
    AS3.setBindable(editor_LinkListPropertyField_78_5_$1,"linkListWrapper" , this.getStructContentLinkListWrapper(config));
    var ui_BindVisibilityPlugin_83_9_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_83_9_$1.bindTo = this.getActiveItemValueExpression(config, com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyFieldBase.DEFAULT_CONTAINER);
    editor_LinkListPropertyField_78_5_$1.plugins = [ui_BindVisibilityPlugin_83_9_$1];
    editor_LinkListPropertyField_78_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_PropertyFieldAnnotatedLinkListWidget_86_9_$1/*: com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidget*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidget,{});
    AS3.setBindable(editor_PropertyFieldAnnotatedLinkListWidget_86_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_PropertyFieldAnnotatedLinkListWidget_86_9_$1,"propertyNameWithoutIndex" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName") + "." + com.coremedia.blueprint.base.pagegrid.PageGridConstants.PLACEMENT_EXTENDED_ITEMS_PROPERTY));
    AS3.setBindable(editor_PropertyFieldAnnotatedLinkListWidget_86_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_PropertyFieldAnnotatedLinkListWidget_86_9_$1.items = AS3.getBindable(config,"rowWidgetItems");
    AS3.setBindable(editor_LinkListPropertyField_78_5_$1,"rowWidget" , editor_PropertyFieldAnnotatedLinkListWidget_86_9_$1);
    config_$1.items = [editor_LinkListPropertyField_78_5_$1];
    var layout_VBox_94_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_94_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_94_5_$1);
    var editor_LinkListPropertyField_97_5_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField,{});
    editor_LinkListPropertyField_97_5_$1.hideLabel = true;
    editor_LinkListPropertyField_97_5_$1.labelAlign = "top";
    AS3.setBindable(editor_LinkListPropertyField_97_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_LinkListPropertyField_97_5_$1,"linkType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"linkType")));
    AS3.setBindable(editor_LinkListPropertyField_97_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_LinkListPropertyField_97_5_$1,"columns" , AS3.getBindable(config,"columns"));
    AS3.setBindable(editor_LinkListPropertyField_97_5_$1,"fields" , AS3.getBindable(config,"fields"));
    config_$1["defaultType"] = editor_LinkListPropertyField_97_5_$1['xtype'];
    delete editor_LinkListPropertyField_97_5_$1['xtype'];
    delete editor_LinkListPropertyField_97_5_$1['xclass'];
    config_$1.defaults = editor_LinkListPropertyField_97_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$c7pL(config_$1);
  }/*

    /**
     * Items to add to the row widget.
     * /
    [Bindable]
    public var rowWidgetItems:Array;

    /**
     The name under which to register this property field.
     Defaults to propertyName.
     * /
    [Bindable]
    public var propertyFieldName:String;


    /**
     The name under which to register this property field.
     Defaults to propertyName.
     * /
    [Bindable]
    public var fallbackPropertyFieldName:String;


    /**
     The columns shown in the link list grid view. Elements of the
     array are instances of Column. Unless additional fields are defined
     in the fields property, the columns may only refer to the data fields
     name, status, type, and typeCls.

     @see ext.grid.column.Column
     * /
    [Bindable]
    public var columns:Array;


    /**
     The data fields to be added to the store underlying the link list grid view.
     Elements of the array are instances of datafield.

     @see ext.config.datafield
     * /
    [Bindable]
    public var fields:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyFieldBase",
      alias: "widget.com.coremedia.blueprint.base.pagegrid.config.placementLinkListPropertyField",
      constructor: PlacementLinkListPropertyField$,
      super$c7pL: function() {
        com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        rowWidgetItems: null,
        propertyFieldName: null,
        fallbackPropertyFieldName: null,
        columns: null,
        fields: null
      },
      requires: [
        "Ext.layout.container.VBox",
        "com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyFieldBase",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidget",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.pagegrid.PageGridConstants"]
    };
});
