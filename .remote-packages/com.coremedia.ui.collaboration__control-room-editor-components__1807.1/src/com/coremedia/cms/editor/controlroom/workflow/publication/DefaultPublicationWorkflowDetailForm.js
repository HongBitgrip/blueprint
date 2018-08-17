Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm", function(DefaultPublicationWorkflowDetailForm) {/*package com.coremedia.cms.editor.controlroom.workflow.publication{
import com.coremedia.cms.editor.controlroom.workflow.publication.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel;
import com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel;
import com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
/**
 A panel showing the details of a selected studio-two-step-publication workflow.
 * /
public class DefaultPublicationWorkflowDetailForm extends DefaultPublicationWorkflowDetailFormBase{

    import com.coremedia.cap.common.CapTypePropertyNames;
    import com.coremedia.cap.workflow.ProcessPropertyNames;
    import com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.defaultPublicationWorkflowDetailForm";

    public static const STATE_PANEL_ITEM_ID:String = "statePanel";

    public static const TWO_STEP_PUBLICATION_STATE_PANEL_ITEM_ID:String = "twoStepPublicationStatePanel";

    public static const ASSIGN_MEMBERS_PANEL_ITEM_ID:String = "assignMembersPanelItemId";

    public*/function DefaultPublicationWorkflowDetailForm$(config/*:DefaultPublicationWorkflowDetailForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailFormBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailFormBase,{});
    var defaults_$1/*:DefaultPublicationWorkflowDetailForm*/ =AS3.cast(DefaultPublicationWorkflowDetailForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_PropertyFieldGroup_36_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup,{});
    editor_PropertyFieldGroup_36_5_$1.header = false;
    editor_PropertyFieldGroup_36_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_workflowType_label'));
    editor_PropertyFieldGroup_36_5_$1.itemId = "propertyFieldGroup";
    var collab_WorkflowDetailLabel_40_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel,{});
    AS3.setBindable(collab_WorkflowDetailLabel_40_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_workflowType_label')));
    collab_WorkflowDetailLabel_40_9_$1.labelSeparator = ":";
    AS3.setBindable(collab_WorkflowDetailLabel_40_9_$1,"textValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
                                        var processDefinitionName/*:String*/ = AS3.getBindable(config,"bindTo").extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.DEFINITION, com.coremedia.cap.common.CapTypePropertyNames.NAME).getValue();
                                        return com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils.getProcessDefinitionDisplayName(processDefinitionName);
                                      }));
    var collab_OwnerWorkflowDetailLabel_47_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel,{});
    collab_OwnerWorkflowDetailLabel_47_9_$1.labelSeparator = ":";
    editor_PropertyFieldGroup_36_5_$1.items = [collab_WorkflowDetailLabel_40_9_$1, collab_OwnerWorkflowDetailLabel_47_9_$1];
    var collab_WorkflowSetPanel_52_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel,{});
    collab_WorkflowSetPanel_52_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailFormBase.PUBLICATION_SET_PANEL_ITEM_ID);
    AS3.setBindable(collab_WorkflowSetPanel_52_5_$1,"selectedContentsValueExpression" , this.getSelectedContentsValueExpression());
    AS3.setBindable(collab_WorkflowSetPanel_52_5_$1,"workflowSetValueExpression" , this.getPublicationSetValueExpression());
    collab_WorkflowSetPanel_52_5_$1.getIssuesFunction =AS3.bind( this,"getPublicationSetIssues");
    AS3.setBindable(collab_WorkflowSetPanel_52_5_$1,"errorIssuesExistValueExpression" , this.getErrorIssuesExistValueExpression());
    AS3.setBindable(collab_WorkflowSetPanel_52_5_$1,"hideIssuesButton" , !AS3.getBindable(config,"bindToTask"));
    var collab_AssignMembersPanel_60_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel,{});
    collab_AssignMembersPanel_60_5_$1.itemId =net.jangaroo.ext.Exml.asString( DefaultPublicationWorkflowDetailForm.ASSIGN_MEMBERS_PANEL_ITEM_ID);
    AS3.setBindable(collab_AssignMembersPanel_60_5_$1,"assignedMembersValueExpression" , this.getAssignedMembersVE());
    var ui_BindVisibilityPlugin_63_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_63_9_$1.bindTo = this.getAssignMembersPanelVisibleVE();
    collab_AssignMembersPanel_60_5_$1.plugins = [ui_BindVisibilityPlugin_63_9_$1];
    var collab_WorkflowNotesPanel_67_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel,{});
    AS3.setBindable(collab_WorkflowNotesPanel_67_5_$1,"collapseNoText" , true);
    AS3.setBindable(collab_WorkflowNotesPanel_67_5_$1,"notesValueExpression" , this.getNotesValueExpression(AS3.getBindable(config,"bindTo")));
    var editor_CollapsiblePanel_70_5_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    editor_CollapsiblePanel_70_5_$1.itemId =net.jangaroo.ext.Exml.asString( DefaultPublicationWorkflowDetailForm.STATE_PANEL_ITEM_ID);
    editor_CollapsiblePanel_70_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanelWrapper_states_label'));
    AS3.setBindable(editor_CollapsiblePanel_70_5_$1,"minHeight" , 140.0);
    var ui_BindPropertyPlugin_74_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_74_9_$1.componentProperty = "title";
    ui_BindPropertyPlugin_74_9_$1.bindTo = this.getStatePanelTitleValueExpression();
    editor_CollapsiblePanel_70_5_$1.plugins = [ui_BindPropertyPlugin_74_9_$1];
    editor_CollapsiblePanel_70_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var collab_TwoStepPublicationPanel_78_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanel,{});
    collab_TwoStepPublicationPanel_78_9_$1.itemId =net.jangaroo.ext.Exml.asString( DefaultPublicationWorkflowDetailForm.TWO_STEP_PUBLICATION_STATE_PANEL_ITEM_ID);
    AS3.setBindable(collab_TwoStepPublicationPanel_78_9_$1,"taskValueExpression" , AS3.getBindable(config,"bindToTask"));
    AS3.setBindable(collab_TwoStepPublicationPanel_78_9_$1,"defaultCurrentTaskName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.APPROVE_TASK_NAME));
    AS3.setBindable(collab_TwoStepPublicationPanel_78_9_$1,"nextStateValueExpression" , this.getNextStateValueExpression());
    editor_CollapsiblePanel_70_5_$1.items = [collab_TwoStepPublicationPanel_78_9_$1];
    config_$1.items = [editor_PropertyFieldGroup_36_5_$1, collab_WorkflowSetPanel_52_5_$1, collab_AssignMembersPanel_60_5_$1, collab_WorkflowNotesPanel_67_5_$1, editor_CollapsiblePanel_70_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$40aK(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailFormBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.defaultPublicationWorkflowDetailForm",
      constructor: DefaultPublicationWorkflowDetailForm$,
      super$40aK: function() {
        com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailFormBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        STATE_PANEL_ITEM_ID: "statePanel",
        TWO_STEP_PUBLICATION_STATE_PANEL_ITEM_ID: "twoStepPublicationStatePanel",
        ASSIGN_MEMBERS_PANEL_ITEM_ID: "assignMembersPanelItemId"
      },
      requires: [
        "com.coremedia.cap.common.CapTypePropertyNames",
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailFormBase",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanel",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel",
        "com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants",
        "com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel"
      ]
    };
});
