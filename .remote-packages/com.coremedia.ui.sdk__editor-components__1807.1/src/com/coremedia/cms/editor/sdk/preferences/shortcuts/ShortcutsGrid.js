Ext.define("com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGrid", function(ShortcutsGrid) {/*package com.coremedia.cms.editor.sdk.preferences.shortcuts{
import com.coremedia.cms.editor.sdk.preferences.shortcuts.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
import ext.grid.column.Column;
import ext.view.TableView;
public class ShortcutsGrid extends ShortcutsGridBase{

    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.shortcutsGrid";

    public static const COMMAND_COLUMN:String = 'shortcutCommand';
    public static const DESCRIPTION_COLUMN:String = 'shortcutDescription';

    public*/function ShortcutsGrid$(config/*:ShortcutsGrid = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGridBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGridBase,{});
    var defaults_$1/*:ShortcutsGrid*/ =AS3.cast(ShortcutsGrid,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"hideHeaders" , true);
    AS3.setBindable(config_$1,"scrollable" , false);
    config_$1.forceFit = true;
    config_$1.disableSelection = true;
    var ui_BindListPlugin_27_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_27_5_$1,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGridBase.getShortCuts()));
    var ui_DataField_29_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_29_9_$1.name =net.jangaroo.ext.Exml.asString( ShortcutsGrid.DESCRIPTION_COLUMN);
    var ui_DataField_30_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_30_9_$1.name =net.jangaroo.ext.Exml.asString( ShortcutsGrid.COMMAND_COLUMN);
    AS3.setBindable(ui_BindListPlugin_27_5_$1,"fields" , [ui_DataField_29_9_$1, ui_DataField_30_9_$1]);
    config_$1.plugins = [ui_BindListPlugin_27_5_$1];
    var shortcutDescription_36_5_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    AS3.setBindable(shortcutDescription_36_5_$1,"width" , 270);
    shortcutDescription_36_5_$1.sortable = false;
    shortcutDescription_36_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( ShortcutsGrid.DESCRIPTION_COLUMN);
    AS3.setBindable(this,"shortcutDescription" , new Ext.grid.column.Column(shortcutDescription_36_5_$1));
    var shortcutCommand_40_5_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    AS3.setBindable(shortcutCommand_40_5_$1,"width" , 250);
    shortcutCommand_40_5_$1.fixed = false;
    shortcutCommand_40_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( ShortcutsGrid.COMMAND_COLUMN);
    shortcutCommand_40_5_$1.renderer = com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGridBase.shortcutCommandColRenderer;
    AS3.setBindable(this,"shortcutCommand" , new Ext.grid.column.Column(shortcutCommand_40_5_$1));
    config_$1.columns = [AS3.getBindable(this,"shortcutDescription"), AS3.getBindable(this,"shortcutCommand")];
    var gridView_48_5_$1/*:ext.view.TableView*/ =AS3.cast(Ext.view.Table,{});
    gridView_48_5_$1.stripeRows = true;
    config_$1["viewConfig"] = gridView_48_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$1s$2(config_$1);
  }/*

    [Bindable]
    public var shortcutDescription:ext.grid.column.Column;

    [Bindable]
    public var shortcutCommand:ext.grid.column.Column;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGridBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.shortcutsGrid",
      constructor: ShortcutsGrid$,
      super$1s$2: function() {
        com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGridBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        shortcutDescription: null,
        shortcutCommand: null
      },
      statics: {
        COMMAND_COLUMN: 'shortcutCommand',
        DESCRIPTION_COLUMN: 'shortcutDescription'
      },
      requires: [
        "Ext.grid.column.Column",
        "Ext.view.Table",
        "com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGridBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
