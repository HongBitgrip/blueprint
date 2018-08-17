Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SearchField", function(SearchField) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.data.JsonStore;
import ext.data.field.DataField;
import ext.data.field.NumberDataField;
import ext.view.BoundListView;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class SearchField extends SearchFieldBase{

    import com.coremedia.cap.content.search.SearchSuggestionsParameters;
    import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.searchField";

    public*/function SearchField$(config/*:SearchField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.SearchFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchFieldBase,{});
    var defaults_$1/*:SearchField*/ =AS3.cast(SearchField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchField_empty_text')));
    config_$1.flex = 1.0;
    config_$1.selectOnTab = false;
    config_$1.autoSelect = true;
    config_$1.enableKeyEvents = false;
    config_$1.queryMode = "remote";
    config_$1["lastQuery"] = "";
    AS3.setBindable(config_$1,"hideTrigger" , true);
    config_$1.triggerAction = "query";
    config_$1.minChars = 3.0;
    config_$1.queryDelay = 500.0;
    config_$1.queryParam = "query";
    config_$1.selectOnFocus = true;
    AS3.setBindable(config_$1,"displayField" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_VALUE));
    var ui_BindPropertyPlugin_42_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_42_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_TEXT_PROPERTY, AS3.getBindable(config,"collectionViewModel").getMainStateBean());
    ui_BindPropertyPlugin_42_5_$1.reverseTransformer = function(value/*:**/)/*:String*/ {return value || '';};
    config_$1.plugins = [ui_BindPropertyPlugin_42_5_$1];
    var store_Json_46_5_$1/*:ext.data.JsonStore*/ =AS3.cast(Ext.data.JsonStore,{});
    AS3.setBindable(store_Json_46_5_$1,"autoDestroy" , true);
    AS3.setBindable(store_Json_46_5_$1,"proxy" , this.getSearchSuggestionsDataProxy());
    var data_AutoField_49_9_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_49_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_VALUE);
    var data_NumberField_50_9_$1/*:ext.data.field.NumberDataField*/ =AS3.cast(Ext.data.field.Number,{});
    data_NumberField_50_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_COUNT);
    AS3.setBindable(store_Json_46_5_$1,"fields" , [data_AutoField_49_9_$1, data_NumberField_50_9_$1]);
    AS3.setBindable(config_$1,"store" , new Ext.data.JsonStore(store_Json_46_5_$1));
    var boundList_56_5_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    boundList_56_5_$1.loadingText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchField_loading_text'));
    boundList_56_5_$1.itemTpl = com.coremedia.cms.editor.sdk.collectionview.search.SearchFieldBase.autoSuggestResultTpl;
    boundList_56_5_$1.itemSelector = "div";
    boundList_56_5_$1["navigationModel"] = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchFieldKeyNav,{});
    config_$1.listConfig = boundList_56_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$J68T(config_$1);
  }/*

    [Bindable]
    public var collectionViewModel:com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.SearchFieldBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.searchField",
      constructor: SearchField$,
      super$J68T: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.SearchFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {collectionViewModel: null},
      requires: [
        "Ext.data.JsonStore",
        "Ext.data.field.Field",
        "Ext.data.field.Number",
        "Ext.view.BoundList",
        "com.coremedia.cap.content.search.SearchSuggestionsParameters",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFieldBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFieldKeyNav"
      ]
    };
});
