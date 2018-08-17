Ext.define("com.coremedia.blueprint.base.pagegrid.PlacementFieldViewtypeSelector", function(PlacementFieldViewtypeSelector) {/*package com.coremedia.blueprint.base.pagegrid{
import com.coremedia.blueprint.base.pagegrid.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.plugins.AddQuickTipPlugin;
import com.coremedia.ui.plugins.BindListPlugin;
import ext.data.field.DataField;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BEMPlugin;

    [ResourceBundle('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField')]
public class PlacementFieldViewtypeSelector extends PlacementFieldViewtypeSelectorBase{

    import com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.models.bem.BEMBlock;

    public static const xtype:String = "com.coremedia.blueprint.base.pagegrid.config.placementFieldViewtypeSelector";

    private static const*/var DEFAULT_VIEW_TYPE_BLOCK$static/*:BEMBlock*/;/* =*/function DEFAULT_VIEW_TYPE_BLOCK$static_(){DEFAULT_VIEW_TYPE_BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-placement-field-default-viewtype"));};/*

    private static const*/var TPL$static/*:Array*/;/* =*/function TPL$static_(){TPL$static=( [
      '<tpl for=".">',
      '  <div class="' + com.coremedia.ui.components.LocalComboBox.COMBO_BOX_TPL_ITEM_CLASS + '<tpl if="!bean"> ' + DEFAULT_VIEW_TYPE_BLOCK$static + '</tpl>">',
      '    {localizedName}',
      '  </div>',
      '</tpl>'
    ]);};/*

    public*/function PlacementFieldViewtypeSelector$(config/*:PlacementFieldViewtypeSelector = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.pagegrid.PlacementFieldViewtypeSelectorBase*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.PlacementFieldViewtypeSelectorBase,{});
    var defaults_$1/*:PlacementFieldViewtypeSelector*/ =AS3.cast(PlacementFieldViewtypeSelector,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"displayField" , "localizedNameUnencoded");
    config_$1.valueField = "bean";
    AS3.setBindable(config_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.viewtypes.Viewtypes', '_text')));
    config_$1.flex = 1.0;
    config_$1.tpl = TPL$static;
    var ui_BindVisibilityPlugin_57_5_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_57_5_$1.bindTo = this.getAvailableViewTypesVE(config);
    AS3.setBindable(ui_BindVisibilityPlugin_57_5_$1,"transformer" , function(items/*:Array*/)/*:Boolean*/ {return items && items.length > 1;});
    var ui_AddQuickTipPlugin_59_5_$1/*:com.coremedia.ui.plugins.AddQuickTipPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddQuickTipPlugin,{});
    AS3.setBindable(ui_AddQuickTipPlugin_59_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'Placements_viewtype_tooltip')));
    var ui_BindListPlugin_61_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_61_5_$1,"bindTo" , this.getAvailableViewTypesVE(config));
    var data_AutoField_63_9_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_63_9_$1.name = "bean";
    data_AutoField_63_9_$1.mapping = "";
    var ui_DataField_67_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_67_9_$1.name = "localizedNameUnencoded";
    ui_DataField_67_9_$1.encode = false;
    ui_DataField_67_9_$1.mapping = "";
    ui_DataField_67_9_$1["convert"] = com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil.localizeText;
    var ui_DataField_71_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_71_9_$1.name = "localizedName";
    ui_DataField_71_9_$1.mapping = "";
    ui_DataField_71_9_$1["convert"] = com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil.localizeText;
    AS3.setBindable(ui_BindListPlugin_61_5_$1,"fields" , [data_AutoField_63_9_$1, ui_DataField_67_9_$1, ui_DataField_71_9_$1]);
    var ui_BindPropertyPlugin_76_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_76_5_$1.bindTo = this.getViewtypeVE(config);
    ui_BindPropertyPlugin_76_5_$1.bidirectional = true;
    var ui_BEMPlugin_78_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_78_5_$1,"block" , "cm-placement-field-viewtype-selector");
    config_$1.plugins = [ui_BindVisibilityPlugin_57_5_$1, ui_AddQuickTipPlugin_59_5_$1, ui_BindListPlugin_61_5_$1, ui_BindPropertyPlugin_76_5_$1, ui_BEMPlugin_78_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$AKC0(config_$1);
  }/*

    /**
     * Value expression evaluating to the placement struct.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * A value expression evaluating to a reference content to use to compute offered viewtypes.
     * /
    [Bindable]
    public var referenceContentValueExpression:ValueExpression;

    /**
     The viewtype property path.
     * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.pagegrid.PlacementFieldViewtypeSelectorBase",
      alias: "widget.com.coremedia.blueprint.base.pagegrid.config.placementFieldViewtypeSelector",
      constructor: PlacementFieldViewtypeSelector$,
      super$AKC0: function() {
        com.coremedia.blueprint.base.pagegrid.PlacementFieldViewtypeSelectorBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        referenceContentValueExpression: null,
        propertyName: null
      },
      statics: {
        DEFAULT_VIEW_TYPE_BLOCK: undefined,
        TPL: undefined,
        __initStatics__: function() {
          DEFAULT_VIEW_TYPE_BLOCK$static_();
          TPL$static_();
        }
      },
      requires: [
        "Ext.data.field.Field",
        "com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil",
        "com.coremedia.blueprint.base.pagegrid.PageGridPropertyField_properties",
        "com.coremedia.blueprint.base.pagegrid.PlacementFieldViewtypeSelectorBase",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.AddQuickTipPlugin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
