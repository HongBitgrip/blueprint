Ext.define("com.coremedia.ui.components.CustomEditorGrid", function(CustomEditorGrid) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.CellEditPlugin;
import ext.selection.RowSelectionModel;
import ext.view.TableView;
import ext.grid.plugin.GridViewDragDropPlugin;
public class CustomEditorGrid extends CustomEditorGridBase{

    import com.coremedia.ui.skins.TableViewSkin;

    import ext.view.ViewDragZone;

    public static const xtype:String = "com.coremedia.ui.config.customEditorGrid";

    [Bindable]
    [ExtConfig]
    public var dragZoneCfg:ViewDragZone;

    public*/function CustomEditorGrid$(config/*:CustomEditorGrid = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.CustomEditorGridBase*/ =AS3.cast(com.coremedia.ui.components.CustomEditorGridBase,{});
    var defaults_$1/*:CustomEditorGrid*/ =AS3.cast(CustomEditorGrid,{});
    AS3.setBindable(defaults_$1,"viewUi" , com.coremedia.ui.skins.TableViewSkin.LIGHT.getSkin());
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_CellEditPlugin_31_5_$1/*:com.coremedia.ui.plugins.CellEditPlugin*/ =AS3.cast(com.coremedia.ui.plugins.CellEditPlugin,{});
    ui_CellEditPlugin_31_5_$1.clicksToEdit = 1.0;
    config_$1.plugins = [ui_CellEditPlugin_31_5_$1];
    var selection_RowModel_34_5_$1/*:ext.selection.RowSelectionModel*/ =AS3.cast(Ext.selection.RowModel,{});
    selection_RowModel_34_5_$1.mode = "MULTI";
    config_$1.selModel = new Ext.selection.RowModel(selection_RowModel_34_5_$1);
    var gridView_37_5_$1/*:ext.view.TableView*/ =AS3.cast(Ext.view.Table,{});
    gridView_37_5_$1.stripeRows = true;
    gridView_37_5_$1.trackOver = true;
    gridView_37_5_$1.loadMask = true;
    gridView_37_5_$1.deferEmptyText = false;
    gridView_37_5_$1.ui =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"viewUi"));
    AS3.setBindable(gridView_37_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( config.emptyText));
    var plugin_GridViewDragDrop_44_9_$1/*:ext.grid.plugin.GridViewDragDropPlugin*/ =AS3.cast(Ext.grid.plugin.DragDrop,{});
    plugin_GridViewDragDrop_44_9_$1.copy = true;
    plugin_GridViewDragDrop_44_9_$1.enableDrop = false;
    plugin_GridViewDragDrop_44_9_$1.ddGroup =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"ddGroup"));
    plugin_GridViewDragDrop_44_9_$1.pluginId =net.jangaroo.ext.Exml.asString( com.coremedia.ui.components.CustomEditorGridBase.DRAG_DROP_PLUGIN_ID);
    plugin_GridViewDragDrop_44_9_$1.containerScroll = true;
    plugin_GridViewDragDrop_44_9_$1.dragZone = AS3.getBindable(config,"dragZoneCfg") || {};
    gridView_37_5_$1.plugins = [plugin_GridViewDragDrop_44_9_$1];
    config_$1["viewConfig"] = gridView_37_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BLbu(config_$1);
  }/*

    /**
     The named drag drop group to which this grid belong to
     * /
    [Bindable]
    public var ddGroup:String;

    [Bindable]
    public var viewUi:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.CustomEditorGridBase",
      alias: "widget.com.coremedia.ui.config.customEditorGrid",
      constructor: CustomEditorGrid$,
      super$BLbu: function() {
        com.coremedia.ui.components.CustomEditorGridBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        dragZoneCfg: null,
        ddGroup: null,
        viewUi: null
      },
      requires: [
        "Ext.grid.plugin.DragDrop",
        "Ext.selection.RowModel",
        "Ext.view.Table",
        "com.coremedia.ui.components.CustomEditorGridBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.ui.plugins.CellEditPlugin",
        "com.coremedia.ui.skins.TableViewSkin"
      ]
    };
});
