Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn", function(ListViewCreationDateColumn) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.columns.grid.CreationDateColumn;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**

 A column object that displays the creation date of a content in the context of a collection list view.
 This column expects that a field with the name <code>creationDate</code> is defined.
 When this column is used in the search list it can be configured to be sortable.
 The necessary <code>sortField</code> is already configured to <code>creationdate</code>.
 @see configureListViewPlugin

 * /
public class ListViewCreationDateColumn extends CreationDateColumn{

    public*/function ListViewCreationDateColumn$(config/*:ListViewCreationDateColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.CreationDateColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.CreationDateColumn,{});
    var defaults_$1/*:ListViewCreationDateColumn*/ =AS3.cast(ListViewCreationDateColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_columnHeader_creationDate') || this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'creationDate_header'));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ai1b(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.CreationDateColumn",
      metadata: {"": ["PublicApi"]},
      constructor: ListViewCreationDateColumn$,
      super$ai1b: function() {
        com.coremedia.cms.editor.sdk.columns.grid.CreationDateColumn.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.CreationDateColumn",
        "net.jangaroo.ext.Exml"
      ]
    };
});
