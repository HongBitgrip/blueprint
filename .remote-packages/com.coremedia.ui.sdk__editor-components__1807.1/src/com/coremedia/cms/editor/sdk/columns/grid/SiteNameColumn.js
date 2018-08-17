Ext.define("com.coremedia.cms.editor.sdk.columns.grid.SiteNameColumn", function(SiteNameColumn) {/*package com.coremedia.cms.editor.sdk.columns.grid{
import ext.grid.column.Column;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.columns.grid.GridColumns')]
/**

 A column object that displays the site name of a content.
 This column expects that a corresponding <code>siteName</code> field is defined.

 * /
public class SiteNameColumn extends Column{

    public*/function SiteNameColumn$(config/*:SiteNameColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    var defaults_$1/*:SiteNameColumn*/ =AS3.cast(SiteNameColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'siteName_header'));
    config_$1.stateId = "siteName";
    AS3.setBindable(config_$1,"width" , 80);
    config_$1.dataIndex = "siteName";
    config_$1["sortField"] = "siteName";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bhJb(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Column",
      metadata: {"": ["PublicApi"]},
      constructor: SiteNameColumn$,
      super$bhJb: function() {
        Ext.grid.column.Column.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.grid.column.Column",
        "com.coremedia.cms.editor.sdk.columns.grid.GridColumns_properties",
        "net.jangaroo.ext.Exml"
      ]
    };
});
