Ext.define("com.coremedia.blueprint.base.components.viewtypes.ViewtypePropertyField", function(ViewtypePropertyField) {/*package com.coremedia.blueprint.base.components.viewtypes{
import com.coremedia.blueprint.base.components.viewtypes.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.store.DataField;
import ext.data.field.DataField;

    [Resource('com.coremedia.blueprint.base.components.viewtypes.Viewtypes')]
public class ViewtypePropertyField extends ViewTypePropertyFieldBase{

    import com.coremedia.blueprint.base.components.sites.SitesLocalizationUtil;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.viewtypePropertyField";

    public*/function ViewtypePropertyField$(config/*:ViewtypePropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase*/ =AS3.cast(com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase,{});
    var defaults_$1/*:ViewtypePropertyField*/ =AS3.cast(ViewtypePropertyField,{});
    AS3.setBindable(defaults_$1,"viewtypesFolderPaths" , com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase.DEFAULT_PATHS);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"propertyName" , "viewtype");
    AS3.setBindable(config_$1,"displayField" ,net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase.DISPLAY_FIELD_NAME));
    AS3.setBindable(config_$1,"comboBoxTemplate" , com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase.COMBO_BOX_TEMPLATE);
    AS3.setBindable(config_$1,"displayTemplate" , com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase.DISPLAY_TEMPLATE);
    AS3.setBindable(config_$1,"offeredContentsValueExpression" , this.getAvailableViewTypesExpression(config,['Document_','Content_','CMHasContexts']));
    AS3.setBindable(config_$1,"emptyCls" , "cm-view-type-selector-default-value");
    AS3.setBindable(config_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.viewtypes.Viewtypes', '_text')));
    var ui_BindVisibilityPlugin_49_5_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_49_5_$1.bindTo = this.getVisibleVE(config);
    config_$1.plugins = [ui_BindVisibilityPlugin_49_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var ui_DataField_52_5_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_52_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase.DISPLAY_FIELD_NAME);
    ui_DataField_52_5_$1.encode = false;
    ui_DataField_52_5_$1.mapping = "";
    ui_DataField_52_5_$1["convert"] = com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil.localizeText;
    var data_AutoField_56_5_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_56_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase.TITLE_FIELD_NAME);
    data_AutoField_56_5_$1.mapping = "";
    data_AutoField_56_5_$1["convert"] = com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil.localizeText;
    var data_AutoField_59_5_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_59_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase.DESCRIPTION_FIELD_NAME);
    data_AutoField_59_5_$1.mapping = "";
    data_AutoField_59_5_$1["convert"] = com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil.localizeDescription;
    var data_AutoField_62_5_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_62_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase.SITE_FIELD_NAME);
    data_AutoField_62_5_$1.mapping = "";
    data_AutoField_62_5_$1["convert"] = com.coremedia.blueprint.base.components.sites.SitesLocalizationUtil.localizeSiteInfo;
    var data_AutoField_65_5_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_65_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase.THUMBNAIL_URI_FIELD_NAME);
    data_AutoField_65_5_$1.mapping = "";
    data_AutoField_65_5_$1["convert"] = com.coremedia.blueprint.base.components.viewtypes.ViewtypeUtil.getThumbnailUri;
    var data_AutoField_68_5_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_68_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase.THUMBNAIL_TOOLTIP_FIELD_NAME);
    data_AutoField_68_5_$1.mapping = "";
    data_AutoField_68_5_$1["convert"] = com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil.getThumbnailTooltip;
    AS3.setBindable(config_$1,"fields" , [ui_DataField_52_5_$1, data_AutoField_56_5_$1, data_AutoField_59_5_$1, data_AutoField_62_5_$1, data_AutoField_65_5_$1, data_AutoField_68_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Fxc0(config_$1);
  }/*

    /**
     An array of strings that specify absolute or site-relative paths to folders in the
     repository where to look for viewtypes (CMViewtype documents).
     * /
    [Bindable]
    public var viewtypesFolderPaths:Array;


    /**
     An array of strings that specify absolute or site-relative paths to folders in the
     repository where to look for viewtypes (CMViewtype documents, without concatenating
     the current document type hierarchy).
     * /
    [Bindable]
    public var paths:Array;


    /**
     Optional handler to locate ViewTypes.
     * /
    [Bindable]
    public var handler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase",
      metadata: {"": [
        "Resource",
        [
          "",
          "com.coremedia.blueprint.base.components.viewtypes.Viewtypes"
        ]
      ]},
      alias: "widget.com.coremedia.blueprint.base.components.config.viewtypePropertyField",
      constructor: ViewtypePropertyField$,
      super$Fxc0: function() {
        com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        viewtypesFolderPaths: null,
        paths: null,
        handler: null
      },
      requires: [
        "Ext.data.field.Field",
        "com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.blueprint.base.components.sites.SitesLocalizationUtil",
        "com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil",
        "com.coremedia.blueprint.base.components.viewtypes.ViewtypeUtil"
      ]
    };
});
