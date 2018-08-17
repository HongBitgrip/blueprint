Ext.define("com.coremedia.cms.editor.sdk.columns.grid.StatusColumn", function(StatusColumn) {/*package com.coremedia.cms.editor.sdk.columns.grid{
import com.coremedia.cms.editor.sdk.columns.grid.IconColumn;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.columns.grid.GridColumns')]
/**
 A column object that displays the lifecycle status of a content as an icon.
 This column expects that a status field is defined, providing
 the content's status.
 * /
public class StatusColumn extends IconColumn{

    import com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil;
    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;

    import ext.Ext;

    import ext.data.Model;
    import ext.data.Store;

    public*/function StatusColumn$(config/*:StatusColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.IconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.IconColumn,{});
    var defaults_$1/*:StatusColumn*/ =AS3.cast(StatusColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'status_header'));
    AS3.setBindable(config_$1,"align" , "center");
    AS3.setBindable(config_$1,"width" , 32);
    config_$1.fixed = true;
    config_$1.stateId = "status";
    config_$1.dataIndex = "status";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$j8sb(config_$1);
  }/*

    /** @private * /
    protected override*/ function calculateIconCls(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      return com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForStatus(AS3.as(value,  String));
    }/*

    /** @private * /
    protected override*/ function calculateToolTipText(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      var data/*:**/ = Ext.apply({}, record.data, record.getAssociatedData());
      return com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.localizeDetailedLifecycleStatus(AS3.as(value,  String), data.editor);
    }/*

    /** @private * /
    protected override*/ function calculateIconText(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      var data/*:**/ = Ext.apply({}, record.data, record.getAssociatedData());
      return com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.localizeDetailedLifecycleStatus(AS3.as(value,  String), data.editor);
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
      metadata: {"": ["PublicApi"]},
      constructor: StatusColumn$,
      super$j8sb: function() {
        com.coremedia.cms.editor.sdk.columns.grid.IconColumn.prototype.constructor.apply(this, arguments);
      },
      calculateIconCls: calculateIconCls,
      calculateToolTipText: calculateToolTipText,
      calculateIconText: calculateIconText,
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.columns.grid.GridColumns_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
