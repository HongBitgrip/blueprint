Ext.define("com.coremedia.cms.editor.sdk.columns.grid.CreationDateColumn", function(CreationDateColumn) {/*package com.coremedia.cms.editor.sdk.columns.grid{
import ext.grid.column.DateColumn;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.cms.editor.sdk.columns.grid.GridColumns')]
/**

 A column object that displays the creation date of a content.
 This column expects that a field with the name <code>creationDate</code> is defined.

 * /
public class CreationDateColumn extends DateColumn{

    public*/function CreationDateColumn$(config/*:CreationDateColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.grid.column.DateColumn*/ =AS3.cast(Ext.grid.column.Date,{});
    var defaults_$1/*:CreationDateColumn*/ =AS3.cast(CreationDateColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'creationDate_header'));
    AS3.setBindable(config_$1,"width" , 120);
    config_$1.stateId = "creationDate";
    config_$1.format =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dateFormat'));
    config_$1.dataIndex = "creationDate";
    config_$1["sortField"] = "creationdate";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$qExW(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Date",
      metadata: {"": ["PublicApi"]},
      constructor: CreationDateColumn$,
      super$qExW: function() {
        Ext.grid.column.Date.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.grid.column.Date",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.GridColumns_properties",
        "net.jangaroo.ext.Exml"
      ]
    };
});
