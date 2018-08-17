Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanel", function(WorkflowNotesPanel) {/*package com.coremedia.cms.editor.controlroom.workflow.components{
import com.coremedia.cms.editor.controlroom.workflow.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.ResizableTextArea;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import ext.layout.container.AnchorLayout;
import ext.form.Labelable;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class WorkflowNotesPanel extends WorkflowNotesPanelBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.workflowNotesPanel";

    public static const WORKFLOW_NOTES_PANEL_ITEM_ID:String = "workflowNotesPanelId";

    public*/function WorkflowNotesPanel$(config/*:WorkflowNotesPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanelBase,{});
    var defaults_$1/*:WorkflowNotesPanel*/ =AS3.cast(WorkflowNotesPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( WorkflowNotesPanel.WORKFLOW_NOTES_PANEL_ITEM_ID);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowNotesPanel_label'));
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowNotesPanel_label'));
    AS3.setBindable(config_$1,"collapsed" , false);
    var ui_ResizableTextArea_42_5_$1/*:com.coremedia.ui.components.ResizableTextArea*/ =AS3.cast(com.coremedia.ui.components.ResizableTextArea,{});
    AS3.setBindable(ui_ResizableTextArea_42_5_$1,"height" , 100);
    ui_ResizableTextArea_42_5_$1.anchor = "100%";
    ui_ResizableTextArea_42_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowNotesPanel_textArea_label'));
    AS3.setBindable(ui_ResizableTextArea_42_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowNotesPanel_textArea_label')));
    ui_ResizableTextArea_42_5_$1.hideLabel = true;
    var ui_BindPropertyPlugin_48_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_48_9_$1.bindTo = AS3.getBindable(config,"notesValueExpression");
    ui_BindPropertyPlugin_48_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_48_9_$1.skipIfUndefined = true;
    var editor_BindReadOnlyPlugin_51_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_51_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression") || com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false));
    ui_ResizableTextArea_42_5_$1.plugins = [ui_BindPropertyPlugin_48_9_$1, editor_BindReadOnlyPlugin_51_9_$1];
    ui_ResizableTextArea_42_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [ui_ResizableTextArea_42_5_$1];
    var layout_Anchor_57_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_57_5_$1);
    var labelable_60_5_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_60_5_$1.labelSeparator = "";
    labelable_60_5_$1.labelAlign = "top";
    config_$1["defaultType"] = labelable_60_5_$1['xtype'];
    delete labelable_60_5_$1['xtype'];
    delete labelable_60_5_$1['xclass'];
    config_$1.defaults = labelable_60_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$W5Md(config_$1);
  }/*

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     An optional boolean. Collapse this panel at render time, if set to true and this panel contains no text
     and expand this panel if non-empty text exists.
     * /
    [Bindable]
    public var collapseNoText:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.workflowNotesPanel",
      constructor: WorkflowNotesPanel$,
      super$W5Md: function() {
        com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        forceReadOnlyValueExpression: null,
        collapseNoText: false
      },
      statics: {WORKFLOW_NOTES_PANEL_ITEM_ID: "workflowNotesPanelId"},
      requires: [
        "Ext.form.Labelable",
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanelBase",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.ui.components.ResizableTextArea",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
