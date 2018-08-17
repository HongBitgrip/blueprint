Ext.define("com.coremedia.cms.editor.sdk.columns.grid.ScoreColumn", function(ScoreColumn) {/*package com.coremedia.cms.editor.sdk.columns.grid{
import ext.grid.column.Column;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.columns.grid.GridColumns')]
/**

 A column object that displays the score of a content.
 This column expects that a field with the name <code>score</code> is defined.

 * /
public class ScoreColumn extends Column{

    public*/function ScoreColumn$(config/*:ScoreColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    var defaults_$1/*:ScoreColumn*/ =AS3.cast(ScoreColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'score_header'));
    AS3.setBindable(config_$1,"width" , 120);
    config_$1.stateId = "score";
    config_$1.fixed = true;
    config_$1.dataIndex = "score";
    config_$1["sortField"] = "score";
    config_$1["sortDirection"] = "desc";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$io4h(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Column",
      metadata: {"": ["PublicApi"]},
      constructor: ScoreColumn$,
      super$io4h: function() {
        Ext.grid.column.Column.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.grid.column.Column",
        "com.coremedia.cms.editor.sdk.columns.grid.GridColumns_properties",
        "net.jangaroo.ext.Exml"
      ]
    };
});
