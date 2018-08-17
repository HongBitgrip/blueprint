Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.ListViewSiteLocaleColumn", function(ListViewSiteLocaleColumn) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.columns.grid.SiteLocaleColumn;
import net.jangaroo.ext.Exml;
public class ListViewSiteLocaleColumn extends SiteLocaleColumn{

    public*/function ListViewSiteLocaleColumn$(config/*:ListViewSiteLocaleColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.SiteLocaleColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.SiteLocaleColumn,{});
    var defaults_$1/*:ListViewSiteLocaleColumn*/ =AS3.cast(ListViewSiteLocaleColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"width" , 80);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$L2Sv(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.SiteLocaleColumn",
      constructor: ListViewSiteLocaleColumn$,
      super$L2Sv: function() {
        com.coremedia.cms.editor.sdk.columns.grid.SiteLocaleColumn.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.columns.grid.SiteLocaleColumn",
        "net.jangaroo.ext.Exml"
      ]
    };
});
