Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanel", function(DefaultStartTranslationWorkflowPanel) {/*package com.coremedia.cms.editor.controlroom.workflow.translation{
import com.coremedia.cms.editor.controlroom.workflow.translation.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.panel.Panel;
import com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
/**
 The default panel for starting translation workflows.
 It allows the user to select the set of sites for which a translation
 is to be created. It generates one workflow for each target site.
 This panel shows the contents to translate and forwards them to the process variable
 <code>contents</code> of each generated process.
 It stores the id of the master site in
 the process variable <code>masterSite</code>.
 It stores the id of the target site in
 the process variable <code>targetSiteId</code> as appropriate for each workflow.
 * /
public class DefaultStartTranslationWorkflowPanel extends DefaultStartTranslationWorkflowPanelBase{

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.defaultStartTranslationWorkflowPanel";
    public static const TARGET_SITES_GRID_PANEL_ITEM_ID:String = "targetSites";
    public static const SELECTED_ITEMS_VARIABLE_NAME:String = "selectedItems";

    public*/function DefaultStartTranslationWorkflowPanel$(config/*:DefaultStartTranslationWorkflowPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanelBase,{});
    var defaults_$1/*:DefaultStartTranslationWorkflowPanel*/ =AS3.cast(DefaultStartTranslationWorkflowPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var collab_WorkflowSetPanel_39_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel,{});
    collab_WorkflowSetPanel_39_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanelBase.TRANSLATION_SET_PANEL_ITEM_ID);
    collab_WorkflowSetPanel_39_5_$1.workflowName = "translation";
    AS3.setBindable(collab_WorkflowSetPanel_39_5_$1,"expandFolders" , true);
    AS3.setBindable(collab_WorkflowSetPanel_39_5_$1,"selectedContentsValueExpression" , this.getUserChosenContentsValueExpression());
    AS3.setBindable(collab_WorkflowSetPanel_39_5_$1,"workflowSetValueExpression" , this.getTranslationSetValueExpression());
    AS3.setBindable(collab_WorkflowSetPanel_39_5_$1,"errorIssuesExistValueExpression" , this.getErrorIssuesExistValueExpression());
    collab_WorkflowSetPanel_39_5_$1.getIssuesFunction =AS3.bind( this,"getTranslationSetIssues");
    collab_WorkflowSetPanel_39_5_$1.stateId = "startTranslationWindow_workflowSetPanel";
    collab_WorkflowSetPanel_39_5_$1.emptyText =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'StartTranslationWorkflowPanel_empty_text'));
    collab_WorkflowSetPanel_39_5_$1.quickTipText =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartTranslationWorkflowWindow_extendedChangeSet_help_text'));
    AS3.setBindable(collab_WorkflowSetPanel_39_5_$1,"stateful" , true);
    collab_WorkflowSetPanel_39_5_$1.stateEvents = ['collapse','expand'];
    collab_WorkflowSetPanel_39_5_$1["getState"] = function()/*:Object*/ {return {collapsed : this.collapsed};};
    var collab_WorkflowNotesPanel_53_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel,{});
    AS3.setBindable(collab_WorkflowNotesPanel_53_5_$1,"notesValueExpression" , this.getNotesValueExpression());
    AS3.setBindable(collab_WorkflowNotesPanel_53_5_$1,"collapseNoText" , false);
    collab_WorkflowNotesPanel_53_5_$1.stateId = "startTranslationWindow_notesPanel";
    AS3.setBindable(collab_WorkflowNotesPanel_53_5_$1,"stateful" , true);
    collab_WorkflowNotesPanel_53_5_$1.stateEvents = ['collapse','expand'];
    collab_WorkflowNotesPanel_53_5_$1["getState"] = function()/*:Object*/ {return {collapsed : this.collapsed};};
    var editor_CollapsiblePanel_60_5_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    AS3.setBindable(editor_CollapsiblePanel_60_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_sites_label'));
    AS3.setBindable(editor_CollapsiblePanel_60_5_$1,"layout" , "anchor");
    editor_CollapsiblePanel_60_5_$1.flex = 1.0;
    AS3.setBindable(editor_CollapsiblePanel_60_5_$1,"minHeight" , 200.0);
    var collab_TargetSitesGridPanel_66_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.TargetSitesGridPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.TargetSitesGridPanel,{});
    collab_TargetSitesGridPanel_66_9_$1.itemId =net.jangaroo.ext.Exml.asString( DefaultStartTranslationWorkflowPanel.TARGET_SITES_GRID_PANEL_ITEM_ID);
    AS3.setBindable(collab_TargetSitesGridPanel_66_9_$1,"sitesValueExpression" , this.getSitesValueExpression());
    AS3.setBindable(collab_TargetSitesGridPanel_66_9_$1,"selectedSitesValueExpression" , this.getSelectedSitesValueExpression());
    collab_TargetSitesGridPanel_66_9_$1.anchor = "100% 100%";
    AS3.setBindable(collab_TargetSitesGridPanel_66_9_$1,"title" , ".");
    var ui_BindPropertyPlugin_72_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_72_13_$1.componentProperty = "title";
    ui_BindPropertyPlugin_72_13_$1.bindTo = this.getMasterSiteLabelText();
    collab_TargetSitesGridPanel_66_9_$1.plugins = [ui_BindPropertyPlugin_72_13_$1];
    collab_TargetSitesGridPanel_66_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    editor_CollapsiblePanel_60_5_$1.items = [collab_TargetSitesGridPanel_66_9_$1];
    var panel_78_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    var collab_RemoveEditedContentsCheckbox_80_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox,{});
    AS3.setBindable(collab_RemoveEditedContentsCheckbox_80_9_$1,"removeEditedContentsValueExpression" , this.getRemoveEditedContentValueExpression());
    panel_78_5_$1.items = [collab_RemoveEditedContentsCheckbox_80_9_$1];
    config_$1.items = [collab_WorkflowSetPanel_39_5_$1, collab_WorkflowNotesPanel_53_5_$1, editor_CollapsiblePanel_60_5_$1, panel_78_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$$fjb(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanelBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.controlroom.config.defaultStartTranslationWorkflowPanel",
      constructor: DefaultStartTranslationWorkflowPanel$,
      super$$fjb: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TARGET_SITES_GRID_PANEL_ITEM_ID: "targetSites",
        SELECTED_ITEMS_VARIABLE_NAME: "selectedItems"
      },
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanelBase",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.TargetSitesGridPanel"
      ]
    };
});
