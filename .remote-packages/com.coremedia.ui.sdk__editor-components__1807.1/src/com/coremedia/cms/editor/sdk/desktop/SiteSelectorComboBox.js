Ext.define("com.coremedia.cms.editor.sdk.desktop.SiteSelectorComboBox", function(SiteSelectorComboBox) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class SiteSelectorComboBox extends SiteSelectorComboBoxBase{

    import com.coremedia.ui.data.ValueExpressionFactory;

    import ext.data.SortTypes;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.siteSelectorComboBox";

    public*/function SiteSelectorComboBox$(config/*:SiteSelectorComboBox = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.SiteSelectorComboBoxBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.SiteSelectorComboBoxBase,{});
    var defaults_$1/*:SiteSelectorComboBox*/ =AS3.cast(SiteSelectorComboBox,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'HeaderToolbar_siteSelector_empty_text')));
    config_$1.valueField = "id";
    AS3.setBindable(config_$1,"displayField" , "name");
    AS3.setBindable(config_$1,"encodeItems" , true);
    config_$1.anyMatch = true;
    AS3.setBindable(config_$1,"valueNotFoundText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'HeaderToolbar_siteSelector_none_text')));
    var ui_BindListPlugin_30_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_30_5_$1,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getSitesStore")));
    AS3.setBindable(ui_BindListPlugin_30_5_$1,"sortField" , "name");
    var ui_DataField_33_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_33_9_$1.name = "id";
    ui_DataField_33_9_$1.encode = false;
    var ui_DataField_35_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_35_9_$1.name = "name";
    ui_DataField_35_9_$1.sortType =AS3.bind( Ext.data.SortTypes,"asUCString");
    ui_DataField_35_9_$1.encode = false;
    AS3.setBindable(ui_BindListPlugin_30_5_$1,"fields" , [ui_DataField_33_9_$1, ui_DataField_35_9_$1]);
    config_$1.plugins = [ui_BindListPlugin_30_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zABl(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.SiteSelectorComboBoxBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.siteSelectorComboBox",
      constructor: SiteSelectorComboBox$,
      super$zABl: function() {
        com.coremedia.cms.editor.sdk.desktop.SiteSelectorComboBoxBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.data.SortTypes",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.desktop.SiteSelectorComboBoxBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
