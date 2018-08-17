Ext.define("com.coremedia.cms.editor.sdk.foldercombo.FolderCombo", function(FolderCombo) {/*package com.coremedia.cms.editor.sdk.foldercombo{
import com.coremedia.cms.editor.sdk.foldercombo.*;
import net.jangaroo.ext.Exml;
import ext.view.BoundListView;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;

    [ResourceBundle('com.coremedia.cms.editor.sdk.foldercombo.FolderCombo')]
public class FolderCombo extends FolderComboBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.folderCombo";

    public*/function FolderCombo$(config/*:FolderCombo = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.foldercombo.FolderComboBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.foldercombo.FolderComboBase,{});
    var defaults_$1/*:FolderCombo*/ =AS3.cast(FolderCombo,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId = "newContentPathCombo";
    config_$1.forceSelection = false;
    AS3.setBindable(config_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.foldercombo.FolderCombo', 'FolderCombo_emptyText')));
    AS3.setBindable(config_$1,"displayField" , "id");
    config_$1.valueField = "id";
    var boundList_56_5_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    AS3.setBindable(boundList_56_5_$1,"displayField" , "displayName");
    config_$1.listConfig = boundList_56_5_$1;
    var ui_BindPropertyPlugin_60_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_60_5_$1.bidirectional = true;
    ui_BindPropertyPlugin_60_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    var ui_BindListPlugin_62_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_62_5_$1,"bindTo" , this.getAvailablePathsExpression());
    var ui_DataField_65_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_65_9_$1.name = "id";
    ui_DataField_65_9_$1.encode = false;
    ui_DataField_65_9_$1.mapping = "";
    var ui_DataField_69_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_69_9_$1.name = "displayName";
    ui_DataField_69_9_$1.encode = true;
    ui_DataField_69_9_$1.mapping = "";
    AS3.setBindable(ui_BindListPlugin_62_5_$1,"fields" , [ui_DataField_65_9_$1, ui_DataField_69_9_$1]);
    config_$1.plugins = [ui_BindPropertyPlugin_60_5_$1, ui_BindListPlugin_62_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$01NO(config_$1);
  }/*

    /**
     * An expression evaluating to an array of folders (as path strings). If specified,
     * this will take precedence over the folders config option. This is useful when the list of folders to be offered
     * must be loaded asynchronously
     * /
    [Bindable]
    public var folderPathsExpression:ValueExpression;

    /**
     * If the content type cfg is not set, the type is read from this value expression.
     * /
    [Bindable]
    public var contentTypeExpression:ValueExpression;

    /**
     * The value expression that contains the selected folder.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /** A list of folders (as path strings) that will be offered by default in the path
   selection dropdown. The paths support the relative paths that will be concatenated with
   the active site root path.
     * /
    [Bindable]
    public var folders:Array;


    /** The name of the document type to create, e.g. CMArticle * /
    [Bindable]
    public var contentType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.foldercombo.FolderComboBase",
      alias: "widget.com.coremedia.cms.editor.sdk.folderCombo",
      constructor: FolderCombo$,
      super$01NO: function() {
        com.coremedia.cms.editor.sdk.foldercombo.FolderComboBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        folderPathsExpression: null,
        contentTypeExpression: null,
        bindTo: null,
        folders: null,
        contentType: null
      },
      requires: [
        "Ext.view.BoundList",
        "com.coremedia.cms.editor.sdk.foldercombo.FolderComboBase",
        "com.coremedia.cms.editor.sdk.foldercombo.FolderCombo_properties",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
