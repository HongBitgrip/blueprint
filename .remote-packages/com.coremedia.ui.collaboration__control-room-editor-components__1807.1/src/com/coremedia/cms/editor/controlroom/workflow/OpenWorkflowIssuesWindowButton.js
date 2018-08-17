Ext.define("com.coremedia.cms.editor.controlroom.workflow.OpenWorkflowIssuesWindowButton", function(OpenWorkflowIssuesWindowButton) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.actions.OpenDialogAction;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class OpenWorkflowIssuesWindowButton extends OpenWorkflowIssuesWindowButtonBase{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.openWorkflowIssuesWindowButton";

    public*/function OpenWorkflowIssuesWindowButton$(config/*:OpenWorkflowIssuesWindowButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.OpenWorkflowIssuesWindowButtonBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.OpenWorkflowIssuesWindowButtonBase,{});
    var defaults_$1/*:OpenWorkflowIssuesWindowButton*/ =AS3.cast(OpenWorkflowIssuesWindowButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'OpenWorkflowIssuesWindow_btn_text'));
    config_$1.hasIssuesText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'OpenWorkflowIssuesWindow_btn_errorMessage'));
    config_$1.hasNoIssuesText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'OpenWorkflowIssuesWindow_btn_tooltip'));
    var ui_OpenDialogAction_24_5_$1/*:com.coremedia.ui.actions.OpenDialogAction*/ =AS3.cast(com.coremedia.ui.actions.OpenDialogAction,{});
    AS3.setBindable(ui_OpenDialogAction_24_5_$1,"toggleDialog" , true);
    AS3.setBindable(ui_OpenDialogAction_24_5_$1,"useActionAsAnimationTarget" , true);
    var collab_WorkflowIssuesWindow_27_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindow*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindow,{});
    AS3.setBindable(collab_WorkflowIssuesWindow_27_9_$1,"issuesVE" , AS3.getBindable(config,"issuesVE","DUMMY"));
    AS3.setBindable(collab_WorkflowIssuesWindow_27_9_$1,"cmOwnerCt" , this);
    AS3.setBindable(ui_OpenDialogAction_24_5_$1,"dialog" , collab_WorkflowIssuesWindow_27_9_$1);
    config_$1.baseAction = new com.coremedia.ui.actions.OpenDialogAction(ui_OpenDialogAction_24_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ngeO(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.OpenWorkflowIssuesWindowButtonBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.openWorkflowIssuesWindowButton",
      constructor: OpenWorkflowIssuesWindowButton$,
      super$ngeO: function() {
        com.coremedia.cms.editor.controlroom.workflow.OpenWorkflowIssuesWindowButtonBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.OpenWorkflowIssuesWindowButtonBase",
        "com.coremedia.ui.actions.OpenDialogAction",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesWindow"]
    };
});
