Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartSynchronizationWorkflowPanel", function(DefaultStartSynchronizationWorkflowPanel) {/*package com.coremedia.cms.editor.controlroom.workflow.translation{
import com.coremedia.cms.editor.controlroom.workflow.translation.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.cms.editor.sdk.sites.TargetSitesTree;
import ext.panel.Panel;
import com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
/**
 The default panel for starting synchronization workflows.
 It allows the user to select the set of sites for which a synchronization
 is to be created. It generates one workflow for each target site.
 This panel shows the contents to synchronize and forwards them to the process variable
 <code>contents</code> of each generated process.
 * /
public class DefaultStartSynchronizationWorkflowPanel extends DefaultStartSynchronizationWorkflowPanelBase{

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.defaultStartSynchronizationWorkflowPanel";

    public static const TARGET_SITES_ITEM_ID:String = "targetSites";

    public*/function DefaultStartSynchronizationWorkflowPanel$(config/*:DefaultStartSynchronizationWorkflowPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartSynchronizationWorkflowPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartSynchronizationWorkflowPanelBase,{});
    var defaults_$1/*:DefaultStartSynchronizationWorkflowPanel*/ =AS3.cast(DefaultStartSynchronizationWorkflowPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var collab_WorkflowSetPanel_35_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel,{});
    collab_WorkflowSetPanel_35_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanelBase.TRANSLATION_SET_PANEL_ITEM_ID);
    collab_WorkflowSetPanel_35_5_$1.workflowName = "synchronization";
    AS3.setBindable(collab_WorkflowSetPanel_35_5_$1,"expandFolders" , true);
    AS3.setBindable(collab_WorkflowSetPanel_35_5_$1,"selectedContentsValueExpression" , this.getUserChosenContentsValueExpression());
    AS3.setBindable(collab_WorkflowSetPanel_35_5_$1,"workflowSetValueExpression" , this.getTranslationSetValueExpression());
    AS3.setBindable(collab_WorkflowSetPanel_35_5_$1,"errorIssuesExistValueExpression" , this.getErrorIssuesExistValueExpression());
    collab_WorkflowSetPanel_35_5_$1.getIssuesFunction =AS3.bind( this,"getTranslationSetIssues");
    collab_WorkflowSetPanel_35_5_$1.stateId = "startTranslationWindow_workflowSetPanel";
    collab_WorkflowSetPanel_35_5_$1.emptyText =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'StartTranslationWorkflowPanel_empty_text'));
    collab_WorkflowSetPanel_35_5_$1.quickTipText =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartTranslationWorkflowWindow_extendedChangeSet_help_text'));
    AS3.setBindable(collab_WorkflowSetPanel_35_5_$1,"stateful" , true);
    collab_WorkflowSetPanel_35_5_$1.stateEvents = ['collapse','expand'];
    collab_WorkflowSetPanel_35_5_$1["getState"] = function()/*:Object*/ {return {collapsed : this.collapsed};};
    var collab_WorkflowNotesPanel_49_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel,{});
    AS3.setBindable(collab_WorkflowNotesPanel_49_5_$1,"notesValueExpression" , this.getNotesValueExpression());
    AS3.setBindable(collab_WorkflowNotesPanel_49_5_$1,"collapseNoText" , false);
    collab_WorkflowNotesPanel_49_5_$1.stateId = "startTranslationWindow_notesPanel";
    AS3.setBindable(collab_WorkflowNotesPanel_49_5_$1,"stateful" , true);
    collab_WorkflowNotesPanel_49_5_$1.stateEvents = ['collapse','expand'];
    collab_WorkflowNotesPanel_49_5_$1["getState"] = function()/*:Object*/ {return {collapsed : this.collapsed};};
    var editor_CollapsiblePanel_56_5_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    AS3.setBindable(editor_CollapsiblePanel_56_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_sites_label'));
    AS3.setBindable(editor_CollapsiblePanel_56_5_$1,"layout" , "fit");
    AS3.setBindable(editor_CollapsiblePanel_56_5_$1,"minHeight" , 200.0);
    var editor_TargetSitesTree_61_9_$1/*:com.coremedia.cms.editor.sdk.sites.TargetSitesTree*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.TargetSitesTree,{});
    editor_TargetSitesTree_61_9_$1.itemId =net.jangaroo.ext.Exml.asString( DefaultStartSynchronizationWorkflowPanel.TARGET_SITES_ITEM_ID);
    AS3.setBindable(editor_TargetSitesTree_61_9_$1,"maxHeight" , 160.0);
    editor_TargetSitesTree_61_9_$1.disableSelection = true;
    editor_TargetSitesTree_61_9_$1.rootIdValueExpression = this.getRootSiteIdValueExpression();
    editor_CollapsiblePanel_56_5_$1.items = [editor_TargetSitesTree_61_9_$1];
    var panel_67_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    var collab_RemoveEditedContentsCheckbox_69_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox,{});
    AS3.setBindable(collab_RemoveEditedContentsCheckbox_69_9_$1,"removeEditedContentsValueExpression" , this.getRemoveEditedContentValueExpression());
    panel_67_5_$1.items = [collab_RemoveEditedContentsCheckbox_69_9_$1];
    config_$1.items = [collab_WorkflowSetPanel_35_5_$1, collab_WorkflowNotesPanel_49_5_$1, editor_CollapsiblePanel_56_5_$1, panel_67_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Bj_M(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartSynchronizationWorkflowPanelBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.controlroom.config.defaultStartSynchronizationWorkflowPanel",
      constructor: DefaultStartSynchronizationWorkflowPanel$,
      super$Bj_M: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartSynchronizationWorkflowPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {TARGET_SITES_ITEM_ID: "targetSites"},
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartSynchronizationWorkflowPanelBase",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.cms.editor.sdk.sites.TargetSitesTree",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanelBase"
      ]
    };
});
