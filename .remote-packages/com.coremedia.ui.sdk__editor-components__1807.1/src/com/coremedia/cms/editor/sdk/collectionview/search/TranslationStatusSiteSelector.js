Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelector", function(TranslationStatusSiteSelector) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.LocalComboBox;
import ext.data.JsonStore;
import com.coremedia.ui.store.DataField;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class TranslationStatusSiteSelector extends TranslationStatusSiteSelectorBase{

    import ext.data.SortTypes;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.translationStatusSiteSelector";

    public*/function TranslationStatusSiteSelector$(config/*:TranslationStatusSiteSelector = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelectorBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelectorBase,{});
    var defaults_$1/*:TranslationStatusSiteSelector*/ =AS3.cast(TranslationStatusSiteSelector,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_LocalComboBox_21_5_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_21_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelectorBase.ROOT_SITES_COMBO_BOX_ITEM_ID);
    AS3.setBindable(ui_LocalComboBox_21_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_TranslationStatus_site_text')));
    AS3.setBindable(ui_LocalComboBox_21_5_$1,"displayField" , "name");
    ui_LocalComboBox_21_5_$1.valueField = "id";
    AS3.setBindable(ui_LocalComboBox_21_5_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_21_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_TranslationStatus_noSite_text')));
    var store_Json_28_9_$1/*:ext.data.JsonStore*/ =AS3.cast(Ext.data.JsonStore,{});
    var ui_DataField_30_13_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_30_13_$1.name = "name";
    ui_DataField_30_13_$1.sortType =AS3.bind( Ext.data.SortTypes,"asUCString");
    ui_DataField_30_13_$1.encode = false;
    var ui_DataField_33_13_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_33_13_$1.name = "id";
    ui_DataField_33_13_$1.encode = false;
    AS3.setBindable(store_Json_28_9_$1,"fields" , [ui_DataField_30_13_$1, ui_DataField_33_13_$1]);
    AS3.setBindable(ui_LocalComboBox_21_5_$1,"store" , new Ext.data.JsonStore(store_Json_28_9_$1));
    ui_LocalComboBox_21_5_$1.plugins = [];
    ui_LocalComboBox_21_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var ui_LocalComboBox_42_5_$1/*: com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_42_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelectorBase.DERIVED_SITES_COMBO_BOX_ITEM_ID);
    AS3.setBindable(ui_LocalComboBox_42_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_TranslationStatus_locale_text')));
    AS3.setBindable(ui_LocalComboBox_42_5_$1,"displayField" , "localeDisplayName");
    ui_LocalComboBox_42_5_$1.valueField = "id";
    AS3.setBindable(ui_LocalComboBox_42_5_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_42_5_$1,"hidden" , true);
    var store_Json_49_9_$1/*: ext.data.JsonStore*/ =AS3.cast(Ext.data.JsonStore,{});
    var ui_DataField_51_13_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_51_13_$1.name = "localeDisplayName";
    ui_DataField_51_13_$1.encode = false;
    var ui_DataField_53_13_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_53_13_$1.name = "id";
    ui_DataField_53_13_$1.encode = false;
    AS3.setBindable(store_Json_49_9_$1,"fields" , [ui_DataField_51_13_$1, ui_DataField_53_13_$1]);
    AS3.setBindable(ui_LocalComboBox_42_5_$1,"store" , new Ext.data.JsonStore(store_Json_49_9_$1));
    ui_LocalComboBox_42_5_$1.plugins = [];
    ui_LocalComboBox_42_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [ui_LocalComboBox_21_5_$1, ui_LocalComboBox_42_5_$1];
    var ui_LocalComboBox_63_5_$1/*: com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_63_5_$1.anchor = "100%";
    ui_LocalComboBox_63_5_$1.labelAlign = "top";
    ui_LocalComboBox_63_5_$1.labelSeparator = "";
    config_$1["defaultType"] = ui_LocalComboBox_63_5_$1['xtype'];
    delete ui_LocalComboBox_63_5_$1['xtype'];
    delete ui_LocalComboBox_63_5_$1['xclass'];
    config_$1.defaults = ui_LocalComboBox_63_5_$1;
    var layout_Anchor_68_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_68_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$FzSK(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelectorBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.translationStatusSiteSelector",
      constructor: TranslationStatusSiteSelector$,
      super$FzSK: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelectorBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.data.JsonStore",
        "Ext.data.SortTypes",
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelectorBase",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
