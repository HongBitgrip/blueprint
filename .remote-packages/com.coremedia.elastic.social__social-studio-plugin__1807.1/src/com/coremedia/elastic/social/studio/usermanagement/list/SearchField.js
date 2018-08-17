Ext.define("com.coremedia.elastic.social.studio.usermanagement.list.SearchField", function(SearchField) {/*package com.coremedia.elastic.social.studio.usermanagement.list{
import com.coremedia.elastic.social.studio.usermanagement.list.*;
import net.jangaroo.ext.Exml;
import ext.data.JsonStore;
import ext.data.field.DataField;
import ext.data.field.NumberDataField;
import ext.view.BoundListView;
public class SearchField extends SearchFieldBase{

    import com.coremedia.cap.content.search.SearchSuggestionsParameters;
    import com.coremedia.elastic.social.studio.model.Moderation;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.searchField";

    public*/function SearchField$(config/*:SearchField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldBase,{});
    var defaults_$1/*:SearchField*/ =AS3.cast(SearchField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var store_Json_27_5_$1/*:ext.data.JsonStore*/ =AS3.cast(Ext.data.JsonStore,{});
    AS3.setBindable(store_Json_27_5_$1,"autoDestroy" , true);
    AS3.setBindable(store_Json_27_5_$1,"autoLoad" , true);
    AS3.setBindable(store_Json_27_5_$1,"proxy" , this.getSearchSuggestionsDataProxy(AS3.getBindable(config,"moderation")));
    var data_AutoField_31_9_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_31_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_VALUE);
    var data_NumberField_32_9_$1/*:ext.data.field.NumberDataField*/ =AS3.cast(Ext.data.field.Number,{});
    data_NumberField_32_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_COUNT);
    AS3.setBindable(store_Json_27_5_$1,"fields" , [data_AutoField_31_9_$1, data_NumberField_32_9_$1]);
    AS3.setBindable(config_$1,"store" , new Ext.data.JsonStore(store_Json_27_5_$1));
    var boundList_38_5_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    boundList_38_5_$1.loadingText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_search_bar_loading_text'));
    boundList_38_5_$1.itemTpl = com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldBase.autoSuggestResultTpl;
    boundList_38_5_$1.itemSelector = "div";
    boundList_38_5_$1["navigationModel"] = AS3.cast(com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldKeyNav,{});
    config_$1.listConfig = boundList_38_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2kAS(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;

    public var suggestionSegment:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.searchField",
      constructor: SearchField$,
      super$2kAS: function() {
        com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldBase.prototype.constructor.apply(this, arguments);
      },
      suggestionSegment: null,
      config: {moderation: null},
      requires: [
        "Ext.data.JsonStore",
        "Ext.data.field.Field",
        "Ext.data.field.Number",
        "Ext.view.BoundList",
        "com.coremedia.cap.content.search.SearchSuggestionsParameters",
        "com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldKeyNav"]
    };
});
