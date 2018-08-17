Ext.define("com.coremedia.personalization.ui.plugin.ContentSelector", function(ContentSelector) {/*package com.coremedia.personalization.ui.plugin{
import com.coremedia.personalization.ui.plugin.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
/**
 A slightly extended ComboBox that is used to make a selection among a set of content objects. Content objects are collected from several locations within the repository and the set of objects is updated periodically to reflect any changes in the repository. In addition, each path can be associated with a suffix label, which is appended in the drop-down list to all names of documents retrieved from the path. In addition to the default ComboBox behavior, this class offers management of repository locations (*Paths methods) and provides the retrieval and display logic.
 * /
public class ContentSelector extends ContentSelectorBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.contentSelector";

    public*/function ContentSelector$(config/*:ContentSelector = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.plugin.ContentSelectorBase*/ =AS3.cast(com.coremedia.personalization.ui.plugin.ContentSelectorBase,{});
    var defaults_$1/*:ContentSelector*/ =AS3.cast(ContentSelector,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BindListPlugin_36_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_36_5_$1,"bindTo" , this.getBindTo(config));
    AS3.setBindable(ui_BindListPlugin_36_5_$1,"sortField" , "suffixedName");
    var ui_DataField_38_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_38_9_$1.name = "name";
    var ui_DataField_39_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_39_9_$1.name = "id";
    var ui_DataField_40_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_40_9_$1.name = "suffixedName";
    ui_DataField_40_9_$1.mapping = "name";
    ui_DataField_40_9_$1["convert"] =AS3.bind( this,"addSuffixToName");
    ui_DataField_40_9_$1.sortType =AS3.bind( this,"suffixedNameSortType");
    AS3.setBindable(ui_BindListPlugin_36_5_$1,"fields" , [ui_DataField_38_9_$1, ui_DataField_39_9_$1, ui_DataField_40_9_$1]);
    config_$1.plugins = [ui_BindListPlugin_36_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Ju3t(config_$1);
  }/*

    /**
     optional list of repository paths ('/' separated folder names) from which to load content objects
     * /
    [Bindable]
    public var paths:Array;


    /**
     name of the document type used to represent test-contexts in the CMS
     * /
    [Bindable]
    public var docType:String;


    /**
     time interval between requests to the repository. These requests are required to check whether the set of visible test-context documents has changed and are sent periodically by this component.
     * /
    [Bindable]
    public var pollingInterval:int;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.plugin.ContentSelectorBase",
      alias: "widget.com.coremedia.personalization.ui.config.contentSelector",
      constructor: ContentSelector$,
      super$Ju3t: function() {
        com.coremedia.personalization.ui.plugin.ContentSelectorBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        paths: null,
        docType: null,
        pollingInterval: 0
      },
      requires: [
        "com.coremedia.personalization.ui.plugin.ContentSelectorBase",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
