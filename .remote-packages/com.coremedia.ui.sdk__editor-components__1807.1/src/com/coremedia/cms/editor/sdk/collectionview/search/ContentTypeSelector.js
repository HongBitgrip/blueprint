Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector", function(ContentTypeSelector) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import ext.util.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.data.JsonStore;
import ext.data.field.DataField;
import ext.view.BoundListView;
[PublicApi]
public class ContentTypeSelector extends ContentTypeSelectorBase{

    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.contentTypeSelector";

    public*/function ContentTypeSelector$(config/*:ContentTypeSelector = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase,{});
    var defaults_$1/*:ContentTypeSelector*/ =AS3.cast(ContentTypeSelector,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"width" , 100);
    config_$1.itemId = "contentTypeSelector";
    config_$1.valueField = "name";
    AS3.setBindable(config_$1,"displayField" , "label");
    config_$1.tpl = com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase.getTemplate();
    config_$1.allowBlank = false;
    var ui_BindPropertyPlugin_26_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_26_5_$1.bindTo = AS3.getBindable(config,"contentTypeValueExpression");
    ui_BindPropertyPlugin_26_5_$1.bidirectional = true;
    ui_BindPropertyPlugin_26_5_$1.componentEvent = "select";
    config_$1.plugins = [ui_BindPropertyPlugin_26_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var store_Json_31_5_$1/*:ext.data.JsonStore*/ =AS3.cast(Ext.data.JsonStore,{});
    AS3.setBindable(store_Json_31_5_$1,"data" , AS3.getBindable(config,"entries"));
    var util_Sorter_33_9_$1/*: ext.util.Sorter*/ =AS3.cast(Ext.util.Sorter,{});
    AS3.setBindable(util_Sorter_33_9_$1,"property" , "label");
    AS3.setBindable(util_Sorter_33_9_$1,"direction" , "ASC");
    AS3.setBindable(store_Json_31_5_$1,"sorters" , [new Ext.util.Sorter(util_Sorter_33_9_$1)]);
    var data_AutoField_37_9_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_37_9_$1.name = "name";
    var data_AutoField_38_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_38_9_$1.name = "icon";
    var data_AutoField_39_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_39_9_$1.name = "label";
    data_AutoField_39_9_$1.sortType = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal.documentTypeNameSortType;
    AS3.setBindable(store_Json_31_5_$1,"fields" , [data_AutoField_37_9_$1, data_AutoField_38_9_$1, data_AutoField_39_9_$1]);
    AS3.setBindable(config_$1,"store" , new Ext.data.JsonStore(store_Json_31_5_$1));
    var boundList_45_5_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    AS3.setBindable(boundList_45_5_$1,"minWidth" , com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase.computeMaxNameWidth(AS3.getBindable(config,"entries")));
    config_$1.listConfig = boundList_45_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Pbiz(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.contentTypeSelector",
      constructor: ContentTypeSelector$,
      super$Pbiz: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.data.JsonStore",
        "Ext.data.field.Field",
        "Ext.util.Sorter",
        "Ext.view.BoundList",
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal"]
    };
});
