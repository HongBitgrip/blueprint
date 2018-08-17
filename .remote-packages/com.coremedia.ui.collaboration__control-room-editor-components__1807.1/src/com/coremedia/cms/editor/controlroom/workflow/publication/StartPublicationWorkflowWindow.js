Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindow", function(StartPublicationWorkflowWindow) {/*package com.coremedia.cms.editor.controlroom.workflow.publication{
import com.coremedia.cms.editor.controlroom.workflow.publication.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameField;
import com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooser;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel;
import com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox;
import ext.button.Button;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class StartPublicationWorkflowWindow extends StartPublicationWorkflowWindowBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.startPublicationWorkflowWindow";

    public static const START_PUBLICATION_WINDOW_ITEM_ID:String = "startPublicationWindow";

    public static const ASSIGN_MEMBERS_PANEL_ITEM_ID:String = "assignMembersPanelItemId";

    public static const STATE_PANEL_ITEM_ID:String = "statePanel";

    public static const SWITCHING_STATE_PANEL_ITEM_ID:String = "switchingStatePanel";

    public static const START_BUTTON_ITEM_ID:String = "startButton";

    public static const CANCEL_BUTTON_ITEM_ID:String = "cancelButton";

    public*/function StartPublicationWorkflowWindow$(config/*:StartPublicationWorkflowWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindowBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindowBase,{});
    var defaults_$1/*:StartPublicationWorkflowWindow*/ =AS3.cast(StartPublicationWorkflowWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartPublicationWorkflowWindow_title'));
    AS3.setBindable(config_$1,"width" , 430);
    AS3.setBindable(config_$1,"height" , 760);
    AS3.setBindable(config_$1,"minWidth" , 300.0);
    AS3.setBindable(config_$1,"minHeight" , 400.0);
    config_$1.constrainHeader = true;
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.stateId =net.jangaroo.ext.Exml.asString( StartPublicationWorkflowWindow.START_PUBLICATION_WINDOW_ITEM_ID);
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.stateEvents = ['resize'];
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200_DARK.getSkin());
    config_$1.bodyPadding = 12;
    var editor_CollapsiblePanel_67_5_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    AS3.setBindable(editor_CollapsiblePanel_67_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_workflowNameTextField_label'));
    editor_CollapsiblePanel_67_5_$1.stateId = "startPublicationWindow_namePanel";
    AS3.setBindable(editor_CollapsiblePanel_67_5_$1,"stateful" , true);
    editor_CollapsiblePanel_67_5_$1.stateEvents = ['collapse','expand'];
    editor_CollapsiblePanel_67_5_$1["getState"] = function()/*:Object*/ {return {collapsed : this.collapsed};};
    var collab_WorkflowNameField_74_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameField*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameField,{});
    AS3.setBindable(collab_WorkflowNameField_74_9_$1,"workflowNameExpression" , this.getSubjectValueExpression());
    collab_WorkflowNameField_74_9_$1.anchor = "100%";
    var collab_ProcessDefinitionChooser_76_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooser*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooser,{});
    AS3.setBindable(collab_ProcessDefinitionChooser_76_9_$1,"availableProcessDefinitions" , AS3.getBindable(config,"availableProcessDefinitionNames"));
    AS3.setBindable(collab_ProcessDefinitionChooser_76_9_$1,"selectedProcessDefinitionExpression" , this.getSelectedProcessDefinitionNameValueExpression());
    collab_ProcessDefinitionChooser_76_9_$1.stateId = "publicationWorkflowChooser";
    collab_ProcessDefinitionChooser_76_9_$1.anchor = "100%";
    editor_CollapsiblePanel_67_5_$1.items = [collab_WorkflowNameField_74_9_$1, collab_ProcessDefinitionChooser_76_9_$1];
    var ui_VerticalSpacingPlugin_82_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    editor_CollapsiblePanel_67_5_$1.plugins = [ui_VerticalSpacingPlugin_82_9_$1];
    var collab_WorkflowSetPanel_86_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel,{});
    collab_WorkflowSetPanel_86_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindowBase.PUBLICATION_SET_PANEL_ITEM_ID);
    collab_WorkflowSetPanel_86_5_$1.workflowName = "publication";
    AS3.setBindable(collab_WorkflowSetPanel_86_5_$1,"selectedContentsValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create('userChosenContents', this.getModel()));
    AS3.setBindable(collab_WorkflowSetPanel_86_5_$1,"workflowSetValueExpression" , this.getPublicationSetValueExpression());
    AS3.setBindable(collab_WorkflowSetPanel_86_5_$1,"errorIssuesExistValueExpression" , this.getErrorIssuesExistValueExpression());
    AS3.setBindable(collab_WorkflowSetPanel_86_5_$1,"processNameValueExpression" , this.getSelectedProcessDefinitionNameValueExpression());
    collab_WorkflowSetPanel_86_5_$1.getIssuesFunction =AS3.bind( this,"getPublicationSetIssues");
    collab_WorkflowSetPanel_86_5_$1.stateId = "startPublicationWindow_workflowSetPanel";
    collab_WorkflowSetPanel_86_5_$1.emptyText =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'StartPublicationWorkflowPanel_empty_text'));
    collab_WorkflowSetPanel_86_5_$1.quickTipText =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartPublicationWorkflowWindow_extendedChangeSet_help_text'));
    AS3.setBindable(collab_WorkflowSetPanel_86_5_$1,"stateful" , true);
    collab_WorkflowSetPanel_86_5_$1.stateEvents = ['collapse','expand'];
    collab_WorkflowSetPanel_86_5_$1["getState"] = function()/*:Object*/ {return {collapsed : this.collapsed};};
    var collab_AssignMembersPanel_100_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel,{});
    AS3.setBindable(collab_AssignMembersPanel_100_5_$1,"assignedMembersValueExpression" , this.getAssignedMembersVE());
    collab_AssignMembersPanel_100_5_$1.itemId =net.jangaroo.ext.Exml.asString( StartPublicationWorkflowWindow.ASSIGN_MEMBERS_PANEL_ITEM_ID);
    collab_AssignMembersPanel_100_5_$1.stateId = "startPublicationWindow_assignMembersPanel";
    AS3.setBindable(collab_AssignMembersPanel_100_5_$1,"stateful" , true);
    collab_AssignMembersPanel_100_5_$1.stateEvents = ['collapse','expand'];
    collab_AssignMembersPanel_100_5_$1["getState"] = function()/*:Object*/ {return {collapsed : this.collapsed};};
    var ui_BindVisibilityPlugin_107_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_107_9_$1.bindTo = this.getSelectedProcessDefinitionNameValueExpression();
    AS3.setBindable(ui_BindVisibilityPlugin_107_9_$1,"transformer" ,AS3.bind( this,"isAssignableProcess"));
    collab_AssignMembersPanel_100_5_$1.plugins = [ui_BindVisibilityPlugin_107_9_$1];
    var collab_WorkflowNotesPanel_111_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel,{});
    AS3.setBindable(collab_WorkflowNotesPanel_111_5_$1,"collapseNoText" , false);
    AS3.setBindable(collab_WorkflowNotesPanel_111_5_$1,"notesValueExpression" , this.getNotesValueExpression());
    collab_WorkflowNotesPanel_111_5_$1.stateId = "startPublicationWindow_notesPanel";
    AS3.setBindable(collab_WorkflowNotesPanel_111_5_$1,"stateful" , true);
    collab_WorkflowNotesPanel_111_5_$1.stateEvents = ['collapse','expand'];
    collab_WorkflowNotesPanel_111_5_$1["getState"] = function()/*:Object*/ {return {collapsed : this.collapsed};};
    var editor_CollapsiblePanel_117_5_$1/*: com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    editor_CollapsiblePanel_117_5_$1.itemId =net.jangaroo.ext.Exml.asString( StartPublicationWorkflowWindow.STATE_PANEL_ITEM_ID);
    AS3.setBindable(editor_CollapsiblePanel_117_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_states_label'));
    AS3.setBindable(editor_CollapsiblePanel_117_5_$1,"minHeight" , 140.0);
    AS3.setBindable(editor_CollapsiblePanel_117_5_$1,"collapsed" , true);
    editor_CollapsiblePanel_117_5_$1.stateId = "startPublicationWindow_statePanel";
    AS3.setBindable(editor_CollapsiblePanel_117_5_$1,"stateful" , true);
    editor_CollapsiblePanel_117_5_$1.stateEvents = ['collapse','expand'];
    editor_CollapsiblePanel_117_5_$1["getState"] = function()/*:Object*/ {return {collapsed : this.collapsed};};
    var ui_SwitchingContainer_126_9_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_126_9_$1.itemId =net.jangaroo.ext.Exml.asString( StartPublicationWorkflowWindow.SWITCHING_STATE_PANEL_ITEM_ID);
    AS3.setBindable(ui_SwitchingContainer_126_9_$1,"activeItemValueExpression" , this.getSelectedProcessDefinitionNameValueExpression());
    var collab_SimplePublicationPanel_130_13_$1/*: com.coremedia.cms.editor.controlroom.workflow.publication.SimplePublicationPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.SimplePublicationPanel,{});
    collab_SimplePublicationPanel_130_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.SIMPLE_PUBLICATION_WORKFLOW_TYPE);
    var collab_TwoStepPublicationPanel_131_13_$1/*: com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanel,{});
    collab_TwoStepPublicationPanel_131_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.TWO_STEP_PUBLICATION_WORKFLOW_TYPE);
    AS3.setBindable(collab_TwoStepPublicationPanel_131_13_$1,"defaultCurrentTaskName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMPOSE_TASK_NAME));
    ui_SwitchingContainer_126_9_$1.items = [collab_SimplePublicationPanel_130_13_$1, collab_TwoStepPublicationPanel_131_13_$1];
    editor_CollapsiblePanel_117_5_$1.items = [ui_SwitchingContainer_126_9_$1];
    var collab_RemoveEditedContentsCheckbox_137_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox,{});
    AS3.setBindable(collab_RemoveEditedContentsCheckbox_137_5_$1,"removeEditedContentsValueExpression" , this.getRemoveEditedContentValueExpression());
    config_$1.items = [editor_CollapsiblePanel_67_5_$1, collab_WorkflowSetPanel_86_5_$1, collab_AssignMembersPanel_100_5_$1, collab_WorkflowNotesPanel_111_5_$1, editor_CollapsiblePanel_117_5_$1, collab_RemoveEditedContentsCheckbox_137_5_$1];
    var button_141_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_141_5_$1.itemId =net.jangaroo.ext.Exml.asString( StartPublicationWorkflowWindow.START_BUTTON_ITEM_ID);
    button_141_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_141_5_$1,"scale" , "small");
    AS3.setBindable(button_141_5_$1,"text" , "Start");
    AS3.setBindable(button_141_5_$1,"handler" ,AS3.bind( this,"startWorkflow"));
    var ui_BindPropertyPlugin_147_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_147_9_$1.bindTo = this.getStartButtonDisabledValueExpression();
    ui_BindPropertyPlugin_147_9_$1.componentProperty = "disabled";
    button_141_5_$1.plugins = [ui_BindPropertyPlugin_147_9_$1];
    var button_151_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_151_5_$1.itemId =net.jangaroo.ext.Exml.asString( StartPublicationWorkflowWindow.CANCEL_BUTTON_ITEM_ID);
    button_151_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_151_5_$1,"scale" , "small");
    AS3.setBindable(button_151_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')));
    AS3.setBindable(button_151_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_141_5_$1, button_151_5_$1];
    var layout_Anchor_158_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_158_5_$1);
    var ui_VerticalSpacingPlugin_161_5_$1/*: com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_161_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    AS3.setBindable(ui_VerticalSpacingPlugin_161_5_$1,"includeDocked" , false);
    config_$1.plugins = [ui_VerticalSpacingPlugin_161_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9pOE(config_$1);
  }/*

    /**
     The content items to be published, chosen by the user.
     * /
    [Bindable]
    public var contents:Array;


    /**
     The names of the available process definitions.
     * /
    [Bindable]
    public var availableProcessDefinitionNames:Array;


    [Bindable]
    public var defaultWorkflowName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindowBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.startPublicationWorkflowWindow",
      constructor: StartPublicationWorkflowWindow$,
      super$9pOE: function() {
        com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contents: null,
        availableProcessDefinitionNames: null,
        defaultWorkflowName: null
      },
      statics: {
        START_PUBLICATION_WINDOW_ITEM_ID: "startPublicationWindow",
        ASSIGN_MEMBERS_PANEL_ITEM_ID: "assignMembersPanelItemId",
        STATE_PANEL_ITEM_ID: "statePanel",
        SWITCHING_STATE_PANEL_ITEM_ID: "switchingStatePanel",
        START_BUTTON_ITEM_ID: "startButton",
        CANCEL_BUTTON_ITEM_ID: "cancelButton"
      },
      requires: [
        "Ext.button.Button",
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.publication.StartPublicationWorkflowWindowBase",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooser",
        "com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNameField",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel",
        "com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants",
        "com.coremedia.cms.editor.controlroom.workflow.publication.SimplePublicationPanel",
        "com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanel"
      ]
    };
});
