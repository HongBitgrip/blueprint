Ext.define("com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBox", function(AvailableLocalesComboBox) {/*package com.coremedia.cms.editor.sdk.translate{
import com.coremedia.cms.editor.sdk.translate.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
/**
 Combo box to select a locale from a list of available locales.
 The list of available locales is taken from the global locale settings document.
 * /
public class AvailableLocalesComboBox extends AvailableLocalesComboBoxBase{

    import com.coremedia.ui.data.ValueExpression;

    import ext.data.SortTypes;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.availableLocalesComboBox";

    public*/function AvailableLocalesComboBox$(config/*:AvailableLocalesComboBox = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBoxBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBoxBase,{});
    var defaults_$1/*:AvailableLocalesComboBox*/ =AS3.cast(AvailableLocalesComboBox,{});
    AS3.setBindable(defaults_$1,"addEmptyItem" , false);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.allowBlank = false;
    config_$1.anyMatch = true;
    config_$1.valueField = "id";
    AS3.setBindable(config_$1,"displayField" , "displayName");
    AS3.setBindable(config_$1,"encodeItems" , true);
    var ui_BindPropertyPlugin_42_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_42_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy(AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_42_5_$1.bidirectional = true;
    var ui_BindListPlugin_44_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_44_5_$1,"bindTo" , this.getLocalesExpression(AS3.getBindable(config,"addEmptyItem")));
    AS3.setBindable(ui_BindListPlugin_44_5_$1,"sortField" , "displayName");
    var ui_DataField_47_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_47_9_$1.name = "id";
    var ui_DataField_48_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_48_9_$1.name = "displayName";
    ui_DataField_48_9_$1.sortType =AS3.bind( Ext.data.SortTypes,"asUCString");
    ui_DataField_48_9_$1.encode = false;
    AS3.setBindable(ui_BindListPlugin_44_5_$1,"fields" , [ui_DataField_47_9_$1, ui_DataField_48_9_$1]);
    config_$1.plugins = [ui_BindPropertyPlugin_42_5_$1, ui_BindListPlugin_44_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$das7(config_$1);
  }/*

    /**
     * An expression evaluating to the bean being edited.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /** The property of the Bean to bind in this field. * /
    [Bindable]
    public var propertyName:String;


    /** Add empty item to the selection list. * /
    [Bindable]
    public var addEmptyItem:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBoxBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.availableLocalesComboBox",
      constructor: AvailableLocalesComboBox$,
      super$das7: function() {
        com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBoxBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyName: null,
        addEmptyItem: false
      },
      requires: [
        "Ext.data.SortTypes",
        "com.coremedia.cms.editor.sdk.translate.AvailableLocalesComboBoxBase",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
