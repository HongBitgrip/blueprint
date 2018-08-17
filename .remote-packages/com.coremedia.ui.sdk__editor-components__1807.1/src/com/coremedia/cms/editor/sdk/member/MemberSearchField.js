Ext.define("com.coremedia.cms.editor.sdk.member.MemberSearchField", function(MemberSearchField) {/*package com.coremedia.cms.editor.sdk.member{
import com.coremedia.cms.editor.sdk.member.*;
import net.jangaroo.ext.Exml;
import ext.data.JsonStore;
import ext.data.proxy.AjaxProxy;
import ext.data.field.DataField;
import ext.view.BoundListView;
import com.coremedia.cms.editor.sdk.plugins.AriaLabelPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A search field for repository members. Depending on a query, users as well as groups
 are included in the search result.
 * /
public class MemberSearchField extends MemberSearchFieldBase{

    import com.coremedia.cms.editor.sdk.editorContext;
    import com.coremedia.ui.util.EncodingUtil;

    import ext.data.Model;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.memberSearchField";

    public static const DEFAULT_MAX_USERS:Number = 10.0;

    public static const DEFAULT_MAX_GROUPS:Number = 10.0;

    public static const DEFAULT_MIN_CHARS:Number = 3.0;

    public static const DEFAULT_STARTS_WITH:Boolean = true;

    public static const DEFAULT_DOMAIN:String =*/function DEFAULT_DOMAIN$static_(){MemberSearchField.DEFAULT_DOMAIN=( com.coremedia.cms.editor.sdk.editorContext.getSession().getUser().getDomain());}/*;

    public*/function MemberSearchField$(config/*:MemberSearchField = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.member.MemberSearchFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.member.MemberSearchFieldBase,{});
    var defaults_$1/*:MemberSearchField*/ =AS3.cast(MemberSearchField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"displayField" , "name");
    AS3.setBindable(config_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MemberSearchField_emptyText')));
    config_$1.enableKeyEvents = true;
    config_$1.forceSelection = false;
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( config.hideLabel ? AS3.getBindable(config,"fieldLabel","DUMMY") : undefined);
    AS3.setBindable(config_$1,"hideTrigger" , true);
    config_$1.minChars = config.minChars > 0 ? config.minChars : MemberSearchField.DEFAULT_MIN_CHARS;
    config_$1.queryMode = "remote";
    config_$1.queryDelay = 300.0;
    config_$1.queryParam = "matchName";
    config_$1.selectOnFocus = true;
    config_$1.valueField = "uriPath";
    config_$1["lastQuery"] = "";
    var store_Json_78_5_$1/*:ext.data.JsonStore*/ =AS3.cast(Ext.data.JsonStore,{});
    AS3.setBindable(store_Json_78_5_$1,"autoDestroy" , true);
    var proxy_Ajax_80_9_$1/*:ext.data.proxy.AjaxProxy*/ =AS3.cast(Ext.data.proxy.Ajax,{});
    AS3.setBindable(proxy_Ajax_80_9_$1,"url" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.member.MemberSearchFieldBase.computeUrl()));
    AS3.setBindable(proxy_Ajax_80_9_$1,"extraParams" , {
            domain : (AS3.getBindable(config,"domain") != null ? AS3.getBindable(config,"domain") : MemberSearchField.DEFAULT_DOMAIN),
            maxUsers : (AS3.getBindable(config,"maxUsers") > 0 ? AS3.getBindable(config,"maxUsers") : MemberSearchField.DEFAULT_MAX_USERS),
            maxGroups : (AS3.getBindable(config,"maxGroups") > 0 ? AS3.getBindable(config,"maxGroups") : MemberSearchField.DEFAULT_MAX_GROUPS),
            startsWith: (AS3.getBindable(config,"startsWith") != null ? AS3.getBindable(config,"startsWith") : MemberSearchField.DEFAULT_STARTS_WITH)
            });
    AS3.setBindable(store_Json_78_5_$1,"proxy" , proxy_Ajax_80_9_$1);
    var data_AutoField_91_9_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_91_9_$1.name = "name";
    data_AutoField_91_9_$1["convert"] = function(value/*:String*/, model/*:Model*/)/*:String*/ {
                                   if (model.data.uriPath.indexOf('group/') === 0) {
                                     value += ' ' + this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SelectedMemberElement_group_suffix');
                                   }
                                   return com.coremedia.ui.util.EncodingUtil.encodeForHTML(value);
                                 };
    var data_AutoField_99_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_99_9_$1.name = "uriPath";
    AS3.setBindable(store_Json_78_5_$1,"fields" , [data_AutoField_91_9_$1, data_AutoField_99_9_$1]);
    AS3.setBindable(config_$1,"store" , new Ext.data.JsonStore(store_Json_78_5_$1));
    var boundList_105_5_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    boundList_105_5_$1.loadingText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MemberSearchField_loading_text'));
    config_$1.listConfig = boundList_105_5_$1;
    var editor_AriaLabelPlugin_108_5_$1/*:com.coremedia.cms.editor.sdk.plugins.AriaLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.AriaLabelPlugin,{});
    AS3.setBindable(editor_AriaLabelPlugin_108_5_$1,"parentProperty" , "emptyText");
    config_$1.plugins = [editor_AriaLabelPlugin_108_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zkm_(config_$1);
  }/*

    /**
     Determines how many users shall be included at most in search results.
     Defaults to DEFAULT_MAX_USERS.
     * /
    [Bindable]
    public var maxUsers:Number;


    /**
     Determines how many groups shall be included at most in search results.
     Defaults to DEFAULT_MAX_GROUPS.
     * /
    [Bindable]
    public var maxGroups:Number;


    /**
     Determines whether the search results have to start with the search query.
     Defaults to DEFAULT_STARTS_WITH.
     * /
    [Bindable]
    public var startsWith:Boolean;


    /**
     Determines the domain to search in.
     Defaults to DEFAULT_DOMAIN.
     * /
    [Bindable]
    public var domain:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.member.MemberSearchFieldBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.memberSearchField",
      constructor: MemberSearchField$,
      super$zkm_: function() {
        com.coremedia.cms.editor.sdk.member.MemberSearchFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        maxUsers: NaN,
        maxGroups: NaN,
        startsWith: false,
        domain: null
      },
      statics: {
        DEFAULT_MAX_USERS: 10.0,
        DEFAULT_MAX_GROUPS: 10.0,
        DEFAULT_MIN_CHARS: 3.0,
        DEFAULT_STARTS_WITH: true,
        DEFAULT_DOMAIN: undefined,
        __initStatics__: function() {
          DEFAULT_DOMAIN$static_();
        }
      },
      requires: [
        "Ext.data.JsonStore",
        "Ext.data.field.Field",
        "Ext.data.proxy.Ajax",
        "Ext.view.BoundList",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.member.MemberSearchFieldBase",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.plugins.AriaLabelPlugin"
      ]
    };
});
