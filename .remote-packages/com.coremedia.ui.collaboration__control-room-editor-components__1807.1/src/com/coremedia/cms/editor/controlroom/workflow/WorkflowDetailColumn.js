Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn", function(WorkflowDetailColumn) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.sdk.columns.grid.IconColumn;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
/**
 A column object that displays a hint that you can switch to a detail view.
 * /
public class WorkflowDetailColumn extends IconColumn{

    import com.coremedia.ui.bem.IconWithTextBEMEntities;

    public*/function WorkflowDetailColumn$(config/*:WorkflowDetailColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.IconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.IconColumn,{});
    var defaults_$1/*:WorkflowDetailColumn*/ =AS3.cast(WorkflowDetailColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.stateId = "workflowDetailButton";
    AS3.setBindable(config_$1,"width" , 23);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'collapsing_arrow_right')));
    AS3.setBindable(config_$1,"toolTipText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailColumn_tooltip_text')));
    AS3.setBindable(config_$1,"iconText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailColumn_tooltip_text')));
    AS3.setBindable(config_$1,"modifier" , com.coremedia.ui.bem.IconWithTextBEMEntities.MODIFIER_DISCLOSING);
    config_$1.tpl = com.coremedia.cms.editor.sdk.columns.grid.IconColumnBase.getXButtonTemplate();
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ixCP(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
      constructor: WorkflowDetailColumn$,
      super$ixCP: function() {
        com.coremedia.cms.editor.sdk.columns.grid.IconColumn.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.IconColumnBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.IconWithTextBEMEntities",
        "net.jangaroo.ext.Exml"
      ]
    };
});
