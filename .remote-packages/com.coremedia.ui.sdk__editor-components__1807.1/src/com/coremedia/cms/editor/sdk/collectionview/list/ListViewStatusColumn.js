Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn", function(ListViewStatusColumn) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.columns.grid.StatusColumn;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A column object that displays the lifecycle status of a content in the context of a collection list view.
 This column expects that a corresponding status field is defined.
 * /
public class ListViewStatusColumn extends StatusColumn{

    public*/function ListViewStatusColumn$(config/*:ListViewStatusColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.StatusColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.StatusColumn,{});
    var defaults_$1/*:ListViewStatusColumn*/ =AS3.cast(ListViewStatusColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_columnHeader_status') || this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'status_header'));
    AS3.setBindable(config_$1,"width" , 46);
    config_$1.resizable = true;
    config_$1.fixed = false;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$VoRg(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.StatusColumn",
      metadata: {"": ["PublicApi"]},
      constructor: ListViewStatusColumn$,
      super$VoRg: function() {
        com.coremedia.cms.editor.sdk.columns.grid.StatusColumn.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.StatusColumn",
        "net.jangaroo.ext.Exml"
      ]
    };
});
