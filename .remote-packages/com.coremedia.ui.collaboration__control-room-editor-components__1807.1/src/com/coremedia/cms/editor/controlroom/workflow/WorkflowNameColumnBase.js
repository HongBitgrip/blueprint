Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumnBase", function(WorkflowNameColumnBase) {/*package com.coremedia.cms.editor.controlroom.workflow {

import ext.XTemplate;
import ext.grid.column.TemplateColumn;

public class WorkflowNameColumnBase extends TemplateColumn {

  public*/ function WorkflowNameColumnBase$(config/*:WorkflowNameColumn = null*/) {if(arguments.length<=0)config=null;
    this.super$WlV4(config);
  }/*

  protected*/ function getXTemplate()/*:XTemplate*/ {
    return new Ext.XTemplate('{[this.renderWorkflowListColumn(values)]}', {
      renderWorkflowListColumn:AS3.bind( this,"renderWorkflowListColumn$WlV4")
    });
  }/*

  private*/ function renderWorkflowListColumn(attributes/*:Object*/)/*:String*/ {
    if (attributes.processDefinitionName && attributes.taskDefinitionName) {
      var taskDefinitionDisplayName/*:String*/ = com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils.getTaskDefinitionDisplayName(attributes.processDefinitionName, attributes.taskDefinitionName);
      return attributes.processName + " (" + taskDefinitionDisplayName + ")";
    } else {
      return attributes.processName;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Template",
      constructor: WorkflowNameColumnBase$,
      super$WlV4: function() {
        Ext.grid.column.Template.prototype.constructor.apply(this, arguments);
      },
      getXTemplate: getXTemplate,
      renderWorkflowListColumn$WlV4: renderWorkflowListColumn,
      requires: [
        "Ext.XTemplate",
        "Ext.grid.column.Template"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils"]
    };
});
