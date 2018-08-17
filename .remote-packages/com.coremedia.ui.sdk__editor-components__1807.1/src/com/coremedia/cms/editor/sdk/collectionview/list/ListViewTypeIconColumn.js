Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn", function(ListViewTypeIconColumn) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A column object that displays the content type of a content as an
 icon in the context of a collection list view,
 optionally accompanied by the type's name.
 This column expects that the field typeCls defines a style class
 representing the content type. Additionally, a field
 type must also be present, providing the type's name.
 * /
public class ListViewTypeIconColumn extends TypeIconColumn{

    public*/function ListViewTypeIconColumn$(config/*:ListViewTypeIconColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn,{});
    var defaults_$1/*:ListViewTypeIconColumn*/ =AS3.cast(ListViewTypeIconColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"width" , 75);
    config_$1.resizable = true;
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_columnHeader_type') || this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'type_header'));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$MyIB(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn",
      metadata: {"": ["PublicApi"]},
      constructor: ListViewTypeIconColumn$,
      super$MyIB: function() {
        com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn",
        "net.jangaroo.ext.Exml"
      ]
    };
});
