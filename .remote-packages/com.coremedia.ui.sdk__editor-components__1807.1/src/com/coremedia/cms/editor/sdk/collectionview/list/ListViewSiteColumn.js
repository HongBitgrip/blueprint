Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.ListViewSiteColumn", function(ListViewSiteColumn) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.columns.grid.SiteNameColumn;
import net.jangaroo.ext.Exml;
public class ListViewSiteColumn extends SiteNameColumn{

    public*/function ListViewSiteColumn$(config/*:ListViewSiteColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.SiteNameColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.SiteNameColumn,{});
    var defaults_$1/*:ListViewSiteColumn*/ =AS3.cast(ListViewSiteColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$flh$(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.SiteNameColumn",
      constructor: ListViewSiteColumn$,
      super$flh$: function() {
        com.coremedia.cms.editor.sdk.columns.grid.SiteNameColumn.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.columns.grid.SiteNameColumn",
        "net.jangaroo.ext.Exml"
      ]
    };
});
