Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.ListViewLifecycleStatusColumn", function(ListViewLifecycleStatusColumn) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import ext.grid.column.TemplateColumn;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [Deprecated(since="2.0.3", replacement="com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn")]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A column for the grid view of the collection window, showing the
 lifecycle status of a document. In order to use this column, you must add a
 field lifecycleStatus that contains the lifecycle status of the displayed content.
 * /
public class ListViewLifecycleStatusColumn extends TemplateColumn{

    import ext.Ext;
    import ext.Template;

    public*/function ListViewLifecycleStatusColumn$(config/*:ListViewLifecycleStatusColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.grid.column.TemplateColumn*/ =AS3.cast(Ext.grid.column.Template,{});
    var defaults_$1/*:ListViewLifecycleStatusColumn*/ =AS3.cast(ListViewLifecycleStatusColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_columnHeader_lifecycleStatus'));
    AS3.setBindable(config_$1,"width" , 46);
    config_$1.dataIndex = "lifecycleStatus";
    config_$1.tpl = 


    new Ext.Template(
    '<img width="16" height="16" class="status-{lifecycleStatus}" src='+Ext.BLANK_IMAGE_URL+'>'
    );
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$b6km(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Template",
      metadata: {"": [
        "PublicApi",
        "Deprecated",
        [
          "since",
          "2.0.3",
          "replacement",
          "com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn"
        ]
      ]},
      constructor: ListViewLifecycleStatusColumn$,
      super$b6km: function() {
        Ext.grid.column.Template.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext",
        "Ext.Template",
        "Ext.grid.column.Template",
        "com.coremedia.cms.editor.Editor_properties",
        "net.jangaroo.ext.Exml"
      ]
    };
});
