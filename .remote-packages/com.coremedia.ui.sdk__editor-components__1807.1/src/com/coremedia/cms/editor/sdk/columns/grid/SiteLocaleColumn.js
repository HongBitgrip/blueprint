Ext.define("com.coremedia.cms.editor.sdk.columns.grid.SiteLocaleColumn", function(SiteLocaleColumn) {/*package com.coremedia.cms.editor.sdk.columns.grid{
import ext.grid.column.Column;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.columns.grid.GridColumns')]
/**

 A column object that displays the site locale of a content.
 This column expects that a corresponding <code>siteLocale</code> field is defined.

 * /
public class SiteLocaleColumn extends Column{

    public*/function SiteLocaleColumn$(config/*:SiteLocaleColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    var defaults_$1/*:SiteLocaleColumn*/ =AS3.cast(SiteLocaleColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'siteLocale_header'));
    config_$1.stateId = "siteLocale";
    AS3.setBindable(config_$1,"width" , 120);
    config_$1.dataIndex = "siteLocale";
    config_$1["sortField"] = "siteLocale";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$iRXq(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Column",
      metadata: {"": ["PublicApi"]},
      constructor: SiteLocaleColumn$,
      super$iRXq: function() {
        Ext.grid.column.Column.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.grid.column.Column",
        "com.coremedia.cms.editor.sdk.columns.grid.GridColumns_properties",
        "net.jangaroo.ext.Exml"
      ]
    };
});
