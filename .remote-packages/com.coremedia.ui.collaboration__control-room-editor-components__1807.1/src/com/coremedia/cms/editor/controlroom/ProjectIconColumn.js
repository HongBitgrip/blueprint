Ext.define("com.coremedia.cms.editor.controlroom.ProjectIconColumn", function(ProjectIconColumn) {/*package com.coremedia.cms.editor.controlroom{
import com.coremedia.cms.editor.sdk.columns.grid.IconColumn;
import net.jangaroo.ext.Exml;
public class ProjectIconColumn extends IconColumn{

    import ext.data.Model;
    import ext.data.Store;

    public*/function ProjectIconColumn$(config/*:ProjectIconColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.IconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.IconColumn,{});
    var defaults_$1/*:ProjectIconColumn*/ =AS3.cast(ProjectIconColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'project')));
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'icon_header'));
    config_$1.dataIndex = "name";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$InxC(config_$1);
  }/*

    override protected*/ function calculateIconText(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      return this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_toolbar_project');
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
      constructor: ProjectIconColumn$,
      super$InxC: function() {
        com.coremedia.cms.editor.sdk.columns.grid.IconColumn.prototype.constructor.apply(this, arguments);
      },
      calculateIconText: calculateIconText,
      requires: [
        "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
        "net.jangaroo.ext.Exml"
      ]
    };
});
