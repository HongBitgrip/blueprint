Ext.define("com.coremedia.cms.editor.sdk.columns.grid.TypeColumn", function(TypeColumn) {/*package com.coremedia.cms.editor.sdk.columns.grid{
import ext.grid.column.Column;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.columns.grid.GridColumns')]
/**
 A column object that displays the name of the content type of a content.
 This column expects that a type field is defined, providing
 the content type name.
 * /
public class TypeColumn extends Column{

    public*/function TypeColumn$(config/*:TypeColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    var defaults_$1/*:TypeColumn*/ =AS3.cast(TypeColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'type_header'));
    config_$1.stateId = "type";
    AS3.setBindable(config_$1,"width" , 75);
    config_$1.fixed = true;
    config_$1.dataIndex = "type";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_88j(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Column",
      metadata: {"": ["PublicApi"]},
      constructor: TypeColumn$,
      super$_88j: function() {
        Ext.grid.column.Column.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.grid.column.Column",
        "com.coremedia.cms.editor.sdk.columns.grid.GridColumns_properties",
        "net.jangaroo.ext.Exml"
      ]
    };
});
