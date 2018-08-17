Ext.define("com.coremedia.ui.components.ExtendableGrid", function(ExtendableGrid) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import ext.selection.RowSelectionModel;
public class ExtendableGrid extends ExtendableGridBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.ui.config.extendableGrid";

    public*/function ExtendableGrid$(config/*:ExtendableGrid = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.ExtendableGridBase*/ =AS3.cast(com.coremedia.ui.components.ExtendableGridBase,{});
    var defaults_$1/*:ExtendableGrid*/ =AS3.cast(ExtendableGrid,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BindListPlugin_63_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_63_5_$1,"bindTo" , config.bindTo);
    AS3.setBindable(ui_BindListPlugin_63_5_$1,"fields" , this.makeFields(config));
    AS3.setBindable(ui_BindListPlugin_63_5_$1,"lazy" , config.lazy);
    AS3.setBindable(ui_BindListPlugin_63_5_$1,"initialViewLimit" , config.lazy ? (config.initialViewLimit || 50) : undefined);
    AS3.setBindable(ui_BindListPlugin_63_5_$1,"viewLimitIncrement" , config.lazy ? (config.viewLimitIncrement || 50) : undefined);
    config_$1.plugins = [ui_BindListPlugin_63_5_$1];
    var selection_RowModel_70_5_$1/*:ext.selection.RowSelectionModel*/ =AS3.cast(Ext.selection.RowModel,{});
    selection_RowModel_70_5_$1.mode = "MULTI";
    config_$1.selModel = new Ext.selection.RowModel(selection_RowModel_70_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$oggk(config_$1);
  }/*

    /**
     * The ValueExpression that evaluates to the rows of the grid.
     * /
    [ExtConfig]
    public var bindTo:ValueExpression;

    /**
     * Determines whether the items of this grid panel should be loaded lazily.
     * /
    [ExtConfig]
    public var lazy:Boolean;

    /**
     * The initial limit for the number of beans for which to create records in the store.
     * This avoids big and sluggish DOM rendering.
     * When the user scrolls to the end of the list, the view limit is automatically incremented by the
     * value given in config option <code>viewLimitIncrement</code>.
     * /
    [ExtConfig]
    public var initialViewLimit:int;

    /**
     * The maximum number of additional records to create every time the user scrolls to the end of
     * the list.
     * /
    [ExtConfig]
    public var viewLimitIncrement:int;

    /**
     A list of field to be present in all instances. Set this field in
     direct subclasses.
     * /
    [Bindable]
    public var defaultFields:Array;


    /**
     A list of fields to be added to the default fields. Set this field in
     indirect subclasses.
     * /
    [Bindable]
    public var extraFields:Array;


    /** Column definitions to use if no columns are configured at the editor context * /
    [Bindable]
    public var defaultColumns:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.ExtendableGridBase",
      alias: "widget.com.coremedia.ui.config.extendableGrid",
      constructor: ExtendableGrid$,
      super$oggk: function() {
        com.coremedia.ui.components.ExtendableGridBase.prototype.constructor.apply(this, arguments);
      },
      bindTo: null,
      lazy: false,
      initialViewLimit: 0,
      viewLimitIncrement: 0,
      config: {
        defaultFields: null,
        extraFields: null,
        defaultColumns: null
      },
      requires: [
        "Ext.selection.RowModel",
        "com.coremedia.ui.components.ExtendableGridBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.ui.plugins.BindListPlugin"]
    };
});
