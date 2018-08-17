Ext.define("com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn", function(FreshnessColumn) {/*package com.coremedia.cms.editor.sdk.columns.grid{
import ext.grid.column.DateColumn;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.cms.editor.sdk.columns.grid.GridColumns')]
/**

 A column object that displays the freshness of a content.
 If this column is not hidden it expects that a corresponding <code>freshness</code> field is defined.
 When this column is used in the search list of the collection view it can be configured to be sortable.
 The necessary <code>sortField</code> is already configured to <code>freshness</code>.
 @see configureListViewPlugin

 * /
public class FreshnessColumn extends DateColumn{

    public*/function FreshnessColumn$(config/*:FreshnessColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.grid.column.DateColumn*/ =AS3.cast(Ext.grid.column.Date,{});
    var defaults_$1/*:FreshnessColumn*/ =AS3.cast(FreshnessColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'freshness_header'));
    config_$1.stateId = "freshness";
    config_$1.format =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dateFormat'));
    config_$1.dataIndex = "freshness";
    config_$1["sortField"] = "freshness";
    AS3.setBindable(config_$1,"width" , 120);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$JrDU(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Date",
      metadata: {"": ["PublicApi"]},
      constructor: FreshnessColumn$,
      super$JrDU: function() {
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
