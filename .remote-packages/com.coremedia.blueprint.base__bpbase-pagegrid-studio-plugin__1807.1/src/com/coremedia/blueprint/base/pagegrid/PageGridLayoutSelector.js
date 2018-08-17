Ext.define("com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelector", function(PageGridLayoutSelector) {/*package com.coremedia.blueprint.base.pagegrid{
import com.coremedia.blueprint.base.pagegrid.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.store.DataField;
import ext.data.field.DataField;

    [ResourceBundle('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField')]
public class PageGridLayoutSelector extends PageGridLayoutSelectorBase{

    import com.coremedia.blueprint.base.components.sites.SitesLocalizationUtil;

    public static const xtype:String = "com.coremedia.blueprint.base.pagegrid.config.pageGridLayoutSelector";

    public*/function PageGridLayoutSelector$(config/*:PageGridLayoutSelector = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase,{});
    var defaults_$1/*:PageGridLayoutSelector*/ =AS3.cast(PageGridLayoutSelector,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"offeredContentsValueExpression" , com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase.createAvailableLayoutsValueExpression(config));
    AS3.setBindable(config_$1,"displayField" ,net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase.DISPLAY_FIELD_NAME));
    AS3.setBindable(config_$1,"sortField" , "localizedName");
    config_$1.hideLabel = true;
    AS3.setBindable(config_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'PageLayout_error_noLayout_text')));
    AS3.setBindable(config_$1,"qtip" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.pagegrid.PageGridPropertyField', 'PageLayout_tooltip')));
    AS3.setBindable(config_$1,"comboBoxTemplate" , com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase.COMBO_BOX_TEMPLATE);
    AS3.setBindable(config_$1,"displayTemplate" , com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase.DISPLAY_TEMPLATE);
    var ui_DataField_48_5_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_48_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase.DISPLAY_FIELD_NAME);
    ui_DataField_48_5_$1.encode = false;
    ui_DataField_48_5_$1.mapping = "";
    ui_DataField_48_5_$1["convert"] = com.coremedia.blueprint.base.pagegrid.LayoutLocalizationUtil.localizeText;
    var ui_DataField_52_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_52_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase.TITLE_FIELD_NAME);
    ui_DataField_52_5_$1.mapping = "";
    ui_DataField_52_5_$1["convert"] = com.coremedia.blueprint.base.pagegrid.LayoutLocalizationUtil.localizeText;
    var data_AutoField_55_5_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_55_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase.DESCRIPTION_FIELD_NAME);
    data_AutoField_55_5_$1.mapping = "";
    data_AutoField_55_5_$1["convert"] = com.coremedia.blueprint.base.pagegrid.LayoutLocalizationUtil.localizeDescription;
    var ui_DataField_58_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_58_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase.THUMBNAIL_FIELD_NAME);
    ui_DataField_58_5_$1.encode = false;
    ui_DataField_58_5_$1.mapping = "";
    ui_DataField_58_5_$1["convert"] =AS3.bind( this,"renderLayoutPreviewIcon");
    var data_AutoField_62_5_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_62_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase.SITE_FIELD_NAME);
    data_AutoField_62_5_$1.mapping = "";
    data_AutoField_62_5_$1["convert"] = com.coremedia.blueprint.base.components.sites.SitesLocalizationUtil.localizeSiteInfo;
    AS3.setBindable(config_$1,"fields" , [ui_DataField_48_5_$1, ui_DataField_52_5_$1, data_AutoField_55_5_$1, ui_DataField_58_5_$1, data_AutoField_62_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Uqzh(config_$1);
  }/*

    /**
     An array of strings that specify absolute or site-relative paths to folders in the
     repository where to look for page layouts (CMSettings documents).
     * /
    [Bindable]
    public var layoutPaths:Array;


    /**
     The name of the default layout document, located in any of the layouts folders.
     * /
    [Bindable]
    public var layoutDefaultName:String;


    /**
     The name of the property storing the page grid struct
     * /
    [Bindable]
    public var structPropertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase",
      alias: "widget.com.coremedia.blueprint.base.pagegrid.config.pageGridLayoutSelector",
      constructor: PageGridLayoutSelector$,
      super$Uqzh: function() {
        com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        layoutPaths: null,
        layoutDefaultName: null,
        structPropertyName: null
      },
      requires: [
        "Ext.data.field.Field",
        "com.coremedia.blueprint.base.components.sites.SitesLocalizationUtil",
        "com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase",
        "com.coremedia.blueprint.base.pagegrid.PageGridPropertyField_properties",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.pagegrid.LayoutLocalizationUtil"]
    };
});
