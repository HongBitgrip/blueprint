Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn", function(WorkflowNameColumn) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;


/* dataIndex set to name, but actually not needed* /
public class WorkflowNameColumn extends WorkflowNameColumnBase{

    public*/function WorkflowNameColumn$(config/*:WorkflowNameColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumnBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumnBase,{});
    var defaults_$1/*:WorkflowNameColumn*/ =AS3.cast(WorkflowNameColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.stateId = "workflowName";
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'name_header'));
    config_$1.dataIndex = "name";
    config_$1.tpl = this.getXTemplate();
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$SDvJ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumnBase",
      constructor: WorkflowNameColumn$,
      super$SDvJ: function() {
        com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumnBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumnBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
