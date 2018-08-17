Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeColumn", function(ListViewTypeColumn) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.columns.grid.TypeColumn;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A column object that displays the name of the content type
 of a content in the context of a collection list view.
 This column expects that a type field is defined, providing
 the content type name.
 * /
public class ListViewTypeColumn extends TypeColumn{

    public*/function ListViewTypeColumn$(config/*:ListViewTypeColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.TypeColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.TypeColumn,{});
    var defaults_$1/*:ListViewTypeColumn*/ =AS3.cast(ListViewTypeColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_columnHeader_type') || this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'type_header'));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$igYo(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.TypeColumn",
      metadata: {"": ["PublicApi"]},
      constructor: ListViewTypeColumn$,
      super$igYo: function() {
        com.coremedia.cms.editor.sdk.columns.grid.TypeColumn.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.TypeColumn",
        "net.jangaroo.ext.Exml"
      ]
    };
});
