Ext.define("com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn", function(ProcessIconColumn) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.sdk.columns.grid.IconColumn;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ProcessIconColumn extends IconColumn{

    import ext.Ext;
    import ext.data.Model;
    import ext.data.Store;

    public*/function ProcessIconColumn$(config/*:ProcessIconColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.IconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.IconColumn,{});
    var defaults_$1/*:ProcessIconColumn*/ =AS3.cast(ProcessIconColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.stateId = "processIcon";
    config_$1.dataIndex = "processDefinitionName";
    AS3.setBindable(config_$1,"width" , 25);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$F1Sh(config_$1);
  }/*

    /** @private * /
    override protected*/ function calculateIconCls(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      var data/*:**/ = Ext.apply({}, record.data, record.getAssociatedData());

      var iconCls/*:String*/ = this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'workflow');
      if (data) {
        if (data.accepted) {
          iconCls = this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'pencil');
        } else if (data.escalated) {
          iconCls = this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'warning');
        } else if (data.withWarning) {
          iconCls = this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'warning');
        }
      }
      return iconCls;
    }/*

    /** @private * /
    override protected*/ function calculateToolTipText(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      return com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils.getProcessDefinitionDisplayName(value);
    }/*

    override protected*/ function calculateIconText(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      return com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils.getProcessDefinitionDisplayName(value);
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
      constructor: ProcessIconColumn$,
      super$F1Sh: function() {
        com.coremedia.cms.editor.sdk.columns.grid.IconColumn.prototype.constructor.apply(this, arguments);
      },
      calculateIconCls: calculateIconCls,
      calculateToolTipText: calculateToolTipText,
      calculateIconText: calculateIconText,
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
        "com.coremedia.icons.CoreIcons_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils"]
    };
});
