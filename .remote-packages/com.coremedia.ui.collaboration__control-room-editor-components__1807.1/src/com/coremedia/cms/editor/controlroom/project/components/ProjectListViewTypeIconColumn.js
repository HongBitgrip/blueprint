Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectListViewTypeIconColumn", function(ProjectListViewTypeIconColumn) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn;
import net.jangaroo.ext.Exml;
public class ProjectListViewTypeIconColumn extends ListViewTypeIconColumn{

    import com.coremedia.cap.content.ContentType;
    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;

    import ext.data.Model;
    import ext.data.Store;

    public*/function ProjectListViewTypeIconColumn$(config/*:ProjectListViewTypeIconColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn,{});
    var defaults_$1/*:ProjectListViewTypeIconColumn*/ =AS3.cast(ProjectListViewTypeIconColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$JPc_(config_$1);
  }/*

    /** @private * /
    override protected*/ function calculateIconCls(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      if (AS3.is(value,  com.coremedia.cap.content.ContentType)) {
        return com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(value);
      } else {
        return value;
      }
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn",
      constructor: ProjectListViewTypeIconColumn$,
      super$JPc_: function() {
        com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn.prototype.constructor.apply(this, arguments);
      },
      calculateIconCls: calculateIconCls,
      requires: [
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "net.jangaroo.ext.Exml"
      ]
    };
});
