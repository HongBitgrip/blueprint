Ext.define("com.coremedia.blueprint.base.pagegrid.PageGridPropertyField", function(PageGridPropertyField) {/*package com.coremedia.blueprint.base.pagegrid{
import com.coremedia.blueprint.base.pagegrid.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel;
import ext.container.Container;
import com.coremedia.ui.plugins.BindItemsPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.layout.container.VBoxLayout;

    [PublicApi]
    [ResourceBundle('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField')]
public class PageGridPropertyField extends PageGridPropertyFieldBase{

    import com.coremedia.blueprint.base.tree.cmNavigationTreeRelation;
    import com.coremedia.ui.data.TreeRelation;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;

    public static const xtype:String = "com.coremedia.blueprint.base.pagegrid.config.pageGridPropertyField";

    public static const LAYOUT_SELECTOR_ITEM_ID:String = "layoutSelector";

    public static const PLACEMENTS_CONTAINER_ITEM_ID:String = "placementsContainer";

    private static const*/var PLACEMENT_CONTAINER_CLASS_BLOCK$static/*:BEMBlock*/;/* =*/function PLACEMENT_CONTAINER_CLASS_BLOCK$static_(){PLACEMENT_CONTAINER_CLASS_BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-placements-container"));};/*
    private static const*/var PLACEMENT_CONTAINER_CLASS_FIELD_ITEM$static/*:BEMElement*/;/* =*/function PLACEMENT_CONTAINER_CLASS_FIELD_ITEM$static_(){PLACEMENT_CONTAINER_CLASS_FIELD_ITEM$static=( PLACEMENT_CONTAINER_CLASS_BLOCK$static.createElement("field"));};/*

    public*/function PageGridPropertyField$(config/*:PageGridPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.pagegrid.PageGridPropertyFieldBase*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.PageGridPropertyFieldBase,{});
    var defaults_$1/*:PageGridPropertyField*/ =AS3.cast(PageGridPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_SetPropertyLabelPlugin_108_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_108_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyLabelPlugin_108_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_PropertyFieldPlugin_110_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_110_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_108_5_$1, editor_PropertyFieldPlugin_110_5_$1];
    var editor_PropertyFieldLabel_113_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel,{});
    AS3.setBindable(editor_PropertyFieldLabel_113_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_PropertyFieldLabel_113_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    editor_PropertyFieldLabel_113_5_$1.hideLabel = AS3.getBindable(config,"hideLabel");
    AS3.setBindable(editor_PropertyFieldLabel_113_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'PageLayout_title')));
    var pm_PageGridLayoutSelector_118_5_$1/*: com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelector*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelector,{});
    pm_PageGridLayoutSelector_118_5_$1.itemId =net.jangaroo.ext.Exml.asString( PageGridPropertyField.LAYOUT_SELECTOR_ITEM_ID);
    AS3.setBindable(pm_PageGridLayoutSelector_118_5_$1,"layoutPaths" , AS3.getBindable(config,"layoutPaths"));
    AS3.setBindable(pm_PageGridLayoutSelector_118_5_$1,"structPropertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(pm_PageGridLayoutSelector_118_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.pagegrid.PageGridUtil.getLayoutPropertyPath(AS3.getBindable(config,"propertyName"))));
    AS3.setBindable(pm_PageGridLayoutSelector_118_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(pm_PageGridLayoutSelector_118_5_$1,"fallbackForNullValueExpression" , com.coremedia.blueprint.base.pagegrid.PageGridUtil.createDefaultLayoutValueExpression(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"propertyName")));
    AS3.setBindable(pm_PageGridLayoutSelector_118_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    var container_125_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_125_5_$1.itemId =net.jangaroo.ext.Exml.asString( PageGridPropertyField.PLACEMENTS_CONTAINER_ITEM_ID);
    var ui_BindItemsPlugin_127_9_$1/*:com.coremedia.ui.plugins.BindItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindItemsPlugin,{});
    AS3.setBindable(ui_BindItemsPlugin_127_9_$1,"valueExpression" , this.createPlacementsConfigListValueExpression());
    AS3.setBindable(ui_BindItemsPlugin_127_9_$1,"reuseComponents" , true);
    var ui_BEMPlugin_129_9_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_129_9_$1,"block" , PLACEMENT_CONTAINER_CLASS_BLOCK$static);
    AS3.setBindable(ui_BEMPlugin_129_9_$1,"defaultElement" , PLACEMENT_CONTAINER_CLASS_FIELD_ITEM$static);
    container_125_5_$1.plugins = [ui_BindItemsPlugin_127_9_$1, ui_BEMPlugin_129_9_$1];
    var pm_PlacementField_133_9_$1/*: com.coremedia.blueprint.base.pagegrid.PlacementField*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.PlacementField,{});
    AS3.setBindable(pm_PlacementField_133_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(pm_PlacementField_133_9_$1,"showLocal" , AS3.getBindable(config,"showLocal"));
    AS3.setBindable(pm_PlacementField_133_9_$1,"structPropertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(pm_PlacementField_133_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(pm_PlacementField_133_9_$1,"pageTreeRelation" , AS3.getBindable(config,"pageTreeRelation") || com.coremedia.blueprint.base.tree.cmNavigationTreeRelation);
    AS3.setBindable(pm_PlacementField_133_9_$1,"columns" , AS3.getBindable(config,"columns"));
    AS3.setBindable(pm_PlacementField_133_9_$1,"fields" , AS3.getBindable(config,"fields"));
    AS3.setBindable(pm_PlacementField_133_9_$1,"linkType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"placementLinkType")));
    AS3.setBindable(pm_PlacementField_133_9_$1,"rowWidgetItems" , AS3.getBindable(config,"placementRowWidgetItems"));
    container_125_5_$1["defaultType"] = pm_PlacementField_133_9_$1['xtype'];
    delete pm_PlacementField_133_9_$1['xtype'];
    delete pm_PlacementField_133_9_$1['xclass'];
    container_125_5_$1.defaults = pm_PlacementField_133_9_$1;
    var layout_VBox_144_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_144_9_$1,"align" , "stretch");
    AS3.setBindable(container_125_5_$1,"layout" , layout_VBox_144_9_$1);
    config_$1.items = [editor_PropertyFieldLabel_113_5_$1, pm_PageGridLayoutSelector_118_5_$1, container_125_5_$1];
    var layout_VBox_150_5_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_150_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_150_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$j9cZ(config_$1);
  }/*

    [Bindable]
    /**
     * Set to true to hide the property label.
     *
     * @default false
     * /
    public var hideLabel:Boolean;

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

    /**
     * The page tree relation to use for inheritance of section from parent pages
     * and locking of child pages.
     * Defaults to the Blueprint's navigation tree relation, based on CMNavigation.children.
     * /
    [Bindable]
    public var pageTreeRelation:TreeRelation;

    /**
     * Items to add to the row widgets of the placement fields.
     * /
    [Bindable]
    public var placementRowWidgetItems:Array;

    /** the struct property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /** the fallback struct property of the Bean to bind in this field * /
    [Bindable]
    public var fallbackPropertyName:String;


    /**
     Set true to display the inheritance information even if bindTo is considered to be the source of the local pagegrid. Default: false.
     * /
    [Bindable]
    public var showLocal:Boolean;


    /**
     An array of strings that specify absolute or site-relative paths to folders in the
     repository where to look for page layouts (CMSettings documents).
     * /
    [Bindable]
    public var layoutPaths:Array;


    /**
     The data fields to be added to the stores underlying the link list grid views
     of the individual placement section.
     Elements of the array are instances of datafield.

     @see ext.config.datafield
     * /
    [Bindable]
    public var fields:Array;


    /**
     The columns shown in the link list grid views of the placement sections.
     Elements of the array are instances of Column. Unless additional fields are defined
     in the fields property, the columns may only refer to the data fields
     name, status, type, and typeCls.

     @see ext.grid.column.Column
     * /
    [Bindable]
    public var columns:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.pagegrid.PageGridPropertyFieldBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.blueprint.base.pagegrid.config.pageGridPropertyField",
      constructor: PageGridPropertyField$,
      super$j9cZ: function() {
        com.coremedia.blueprint.base.pagegrid.PageGridPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        hideLabel: false,
        bindTo: null,
        forceReadOnlyValueExpression: null,
        pageTreeRelation: null,
        placementRowWidgetItems: null,
        propertyName: null,
        fallbackPropertyName: null,
        showLocal: false,
        layoutPaths: null,
        fields: null,
        columns: null
      },
      statics: {
        LAYOUT_SELECTOR_ITEM_ID: "layoutSelector",
        PLACEMENTS_CONTAINER_ITEM_ID: "placementsContainer",
        PLACEMENT_CONTAINER_CLASS_BLOCK: undefined,
        PLACEMENT_CONTAINER_CLASS_FIELD_ITEM: undefined,
        __initStatics__: function() {
          PLACEMENT_CONTAINER_CLASS_BLOCK$static_();
          PLACEMENT_CONTAINER_CLASS_FIELD_ITEM$static_();
        }
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.VBox",
        "com.coremedia.blueprint.base.pagegrid.PageGridPropertyFieldBase",
        "com.coremedia.blueprint.base.pagegrid.PageGridPropertyField_properties",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindItemsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelector",
        "com.coremedia.blueprint.base.pagegrid.PageGridUtil",
        "com.coremedia.blueprint.base.pagegrid.PlacementField",
        "com.coremedia.blueprint.base.tree.cmNavigationTreeRelation"
      ]
    };
});
