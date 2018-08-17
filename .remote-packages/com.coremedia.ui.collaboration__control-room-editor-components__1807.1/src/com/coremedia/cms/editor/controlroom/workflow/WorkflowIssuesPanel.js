Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanel", function(WorkflowIssuesPanel) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
public class WorkflowIssuesPanel extends WorkflowIssuesPanelBase{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.workflowIssuesPanel";

    public*/function WorkflowIssuesPanel$(config/*:WorkflowIssuesPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanelBase,{});
    var defaults_$1/*:WorkflowIssuesPanel*/ =AS3.cast(WorkflowIssuesPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"issuesTemplate" , com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanelBase.getWorkflowIssuesTemplate());
    AS3.setBindable(config_$1,"itemSelector" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ELEMENT_ITEM.getCSSSelector()));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$tcKO(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.workflowIssuesPanel",
      constructor: WorkflowIssuesPanel$,
      super$tcKO: function() {
        com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanelBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanelBase",
        "com.coremedia.cms.editor.sdk.premular.IssuesPanelBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
