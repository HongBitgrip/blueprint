Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowLanguageColumn", function(WorkflowLanguageColumn) {/*package com.coremedia.cms.editor.controlroom.workflow{
import ext.grid.column.Column;
import net.jangaroo.ext.Exml;
public class WorkflowLanguageColumn extends Column{

    public*/function WorkflowLanguageColumn$(config/*:WorkflowLanguageColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    var defaults_$1/*:WorkflowLanguageColumn*/ =AS3.cast(WorkflowLanguageColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.stateId = "workflowLanguage";
    config_$1.dataIndex = "language";
    AS3.setBindable(config_$1,"width" , 140);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$YD1W(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Column",
      constructor: WorkflowLanguageColumn$,
      super$YD1W: function() {
        Ext.grid.column.Column.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.grid.column.Column",
        "net.jangaroo.ext.Exml"
      ]
    };
});
