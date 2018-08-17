Ext.define("com.coremedia.cms.editor.sdk.columns.grid.NameColumn", function(NameColumn) {/*package com.coremedia.cms.editor.sdk.columns.grid{
import ext.grid.column.Column;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.columns.grid.GridColumns')]
/**

 A column object that displays the name of a content.
 This column expects that a corresponding <code>name</code> field is defined.
 If a <code>nameClass</code> field is defined, it is added as CSS class to the td element of the grid cell.

 * /

/* annoying miscalculate width bug in ExtJS * /
public class NameColumn extends Column{

    public static const DATA_INDEX:String = "name";

    public*/function NameColumn$(config/*:NameColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    var defaults_$1/*:NameColumn*/ =AS3.cast(NameColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'name_header'));
    config_$1.stateId = "name";
    config_$1.dataIndex =net.jangaroo.ext.Exml.asString( NameColumn.DATA_INDEX);
    AS3.setBindable(config_$1,"align" , "left");
    config_$1.renderer = com.coremedia.cms.editor.sdk.columns.grid.StyleClassAddingRenderer.makeRenderer('nameClass');
    config_$1["sortField"] = "name";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$CUo_(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Column",
      metadata: {"": ["PublicApi"]},
      constructor: NameColumn$,
      super$CUo_: function() {
        Ext.grid.column.Column.prototype.constructor.apply(this, arguments);
      },
      statics: {DATA_INDEX: "name"},
      requires: [
        "Ext.grid.column.Column",
        "com.coremedia.cms.editor.sdk.columns.grid.GridColumns_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.columns.grid.StyleClassAddingRenderer"]
    };
});
