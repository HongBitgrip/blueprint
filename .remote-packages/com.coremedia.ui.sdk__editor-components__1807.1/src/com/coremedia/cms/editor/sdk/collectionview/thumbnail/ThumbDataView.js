Ext.define("com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataView", function(ThumbDataView) {/*package com.coremedia.cms.editor.sdk.collectionview.thumbnail{
import com.coremedia.cms.editor.sdk.collectionview.thumbnail.*;
import ext.data.field.BooleanField;
import ext.data.field.DataField;
import com.coremedia.ui.store.DataField;
import ext.data.field.DateDataField;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
public class ThumbDataView extends ThumbDataViewBase{

    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;

    import ext.LoadMask;

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.thumbDataView";

    public*/function ThumbDataView$(config/*:ThumbDataView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase,{});
    var defaults_$1/*:ThumbDataView*/ =AS3.cast(ThumbDataView,{});
    var data_BooleanField_58_7_$1/*:ext.data.field.BooleanField*/ =AS3.cast(Ext.data.field.Boolean,{});
    data_BooleanField_58_7_$1.name = "loaded";
    data_BooleanField_58_7_$1.mapping = "name";
    data_BooleanField_58_7_$1["convert"] = com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.isLoaded;
    var data_AutoField_61_7_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_61_7_$1.name = "readOnlyModifierCls";
    data_AutoField_61_7_$1.mapping = "name";
    data_AutoField_61_7_$1["convert"] = com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.getReadOnlyModifierCls;
    var data_AutoField_64_7_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_64_7_$1.name = "name";
    var data_AutoField_65_7_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_65_7_$1.name = "shortName";
    data_AutoField_65_7_$1.mapping = "name";
    var data_AutoField_67_7_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_67_7_$1.name = "type";
    data_AutoField_67_7_$1.mapping = "type.name";
    var ui_DataField_70_7_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_70_7_$1.name = "typeCls";
    ui_DataField_70_7_$1.mapping = "type";
    ui_DataField_70_7_$1.ifError = "";
    ui_DataField_70_7_$1.ifUnreadable = mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'no_rights');
    ui_DataField_70_7_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType;
    var data_AutoField_75_7_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_75_7_$1.name = "docTypeClass";
    data_AutoField_75_7_$1.mapping = "type.name";
    data_AutoField_75_7_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentTypeName;
    var data_AutoField_78_7_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_78_7_$1.name = "typeName";
    data_AutoField_78_7_$1.mapping = "type.name";
    data_AutoField_78_7_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getLabelForContentTypeName;
    var ui_DataField_81_7_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_81_7_$1.name = "thumbnailImage";
    ui_DataField_81_7_$1.mapping = "";
    ui_DataField_81_7_$1["convert"] = com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.computeThumbnailImage;
    ui_DataField_81_7_$1.ifUnreadable = null;
    ui_DataField_81_7_$1.allowNull = true;
    var data_AutoField_86_7_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_86_7_$1.name = "contentId";
    data_AutoField_86_7_$1.mapping = "uriPath";
    var data_DateField_89_7_$1/*:ext.data.field.DateDataField*/ =AS3.cast(Ext.data.field.Date,{});
    data_DateField_89_7_$1.name = "modDate";
    data_DateField_89_7_$1.mapping = "modificationDate";
    data_DateField_89_7_$1.dateFormat = "d.m.Y - G:i";
    AS3.setBindable(defaults_$1,"fields" , [data_BooleanField_58_7_$1, data_AutoField_61_7_$1, data_AutoField_64_7_$1, data_AutoField_65_7_$1, data_AutoField_67_7_$1, ui_DataField_70_7_$1, data_AutoField_75_7_$1, data_AutoField_78_7_$1, ui_DataField_81_7_$1, data_AutoField_86_7_$1, data_DateField_89_7_$1]);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_thumnail_dataview'));
    config_$1.multiSelect = true;
    config_$1.itemSelector =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.LIST_ELEMENT_ITEM.getCSSSelector());
    config_$1.deferEmptyText = false;
    config_$1.loadingText =net.jangaroo.ext.Exml.asString( Ext.LoadMask['prototype']['msg']);
    AS3.setBindable(config_$1,"height" , "100%");
    var ui_BindListPlugin_98_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_98_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(ui_BindListPlugin_98_5_$1,"lazy" , true);
    AS3.setBindable(ui_BindListPlugin_98_5_$1,"initialViewLimit" , AS3.getBindable(config,"initialViewLimit"));
    AS3.setBindable(ui_BindListPlugin_98_5_$1,"viewLimitIncrement" , AS3.getBindable(config,"viewLimitIncrement"));
    AS3.setBindable(ui_BindListPlugin_98_5_$1,"fields" , AS3.getBindable(config,"fields"));
    var ui_BindSelectionPlugin_103_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_103_5_$1,"selectedValues" , AS3.getBindable(config,"selectedItemsValueExpression"));
    var ui_BEMPlugin_104_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_104_5_$1,"block" , com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.LIST_BLOCK);
    AS3.setBindable(ui_BEMPlugin_104_5_$1,"modifier" , this.getModifierVE(config));
    config_$1.plugins = [ui_BindListPlugin_98_5_$1, ui_BindSelectionPlugin_103_5_$1, ui_BEMPlugin_104_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2QqI(config_$1);
  }/*

    /**

     The initial limit for the number of search results for to show initially.
     This avoids big and sluggish DOM rendering of empty rows or divs.
     When the user scrolls to the end of the list, the view limit is automatically incremented by the
     value given in config option &lt;code>viewLimitIncrement&lt;/code>.
     Default is to not limit the view.

     * /
    [Bindable]
    public var initialViewLimit:int;


    /**

     The maximum number of additional search results to show every time the user scrolls to the end of
     the list. Default is 100.
     @see #initialViewLimit

     * /
    [Bindable]
    public var viewLimitIncrement:int;


    /**
     Set to false if items' name can/should not be edited. Default is true
     * /
    [Bindable]
    public var editable:Boolean;


    /**
     The fields to hand on to the JsonStore that is automatically created.
     * /
    [Bindable]
    public var fields:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.thumbDataView",
      constructor: ThumbDataView$,
      super$2QqI: function() {
        com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        initialViewLimit: 0,
        viewLimitIncrement: 0,
        editable: false,
        fields: null
      },
      requires: [
        "Ext.LoadMask",
        "Ext.data.field.Boolean",
        "Ext.data.field.Date",
        "Ext.data.field.Field",
        "com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.store.DataField",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"]
    };
});
