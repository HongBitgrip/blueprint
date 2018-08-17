Ext.define("com.coremedia.cms.editor.controlroom.workflow.TaskListPanel", function(TaskListPanel) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.toolbar.Toolbar;
import com.coremedia.ui.store.DataField;
import ext.view.TableView;
import ext.selection.RowSelectionModel;
public class TaskListPanel extends TaskListPanelBase{

    import com.coremedia.ui.skins.TableViewSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.taskListPanel";

    public static const SELECTED_ITEMS_VARIABLE_NAME:String = "selectedItems";

    public*/function TaskListPanel$(config/*:TaskListPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.TaskListPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.TaskListPanelBase,{});
    var defaults_$1/*:TaskListPanel*/ =AS3.cast(TaskListPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'TabbedWorkflowPanel_inbox_text') + ' '  + this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_suffix'));
    AS3.setBindable(config_$1,"hideHeaders" , true);
    AS3.setBindable(config_$1,"border" , false);
    config_$1.bodyBorder = false;
    config_$1.bindTo = AS3.getBindable(config,"taskListValueExpression");
    config_$1.lazy = true;
    config_$1.initialViewLimit = 20;
    config_$1.viewLimitIncrement = 20;
    var ui_BindSelectionPlugin_30_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    var ui_ValueExpression_32_9_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_32_9_$1,"context" , this);
    AS3.setBindable(ui_ValueExpression_32_9_$1,"expression" ,net.jangaroo.ext.Exml.asString( TaskListPanel.SELECTED_ITEMS_VARIABLE_NAME));
    AS3.setBindable(ui_BindSelectionPlugin_30_5_$1,"selectedValues" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_32_9_$1));
    config_$1.plugins = [ui_BindSelectionPlugin_30_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var toolbar_39_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_39_5_$1.itemId = "toolbar";
    config_$1.tbar = toolbar_39_5_$1;
    var ui_DataField_43_5_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_43_5_$1.name = "taskDefinitionName";
    ui_DataField_43_5_$1.mapping = "definition.name";
    var ui_DataField_45_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_45_5_$1.name = "processName";
    ui_DataField_45_5_$1.mapping = "containingProcess.properties.subject";
    var ui_DataField_47_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_47_5_$1.name = "processDefinitionName";
    ui_DataField_47_5_$1.mapping = "containingProcess.definition.name";
    var ui_DataField_49_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_49_5_$1.name = "accepted";
    ui_DataField_49_5_$1.mapping = "definition.name";
    ui_DataField_49_5_$1["convert"] =AS3.bind( this,"convertAccepted");
    var ui_DataField_52_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_52_5_$1.name = "escalated";
    var ui_DataField_53_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_53_5_$1.name = "withWarning";
    ui_DataField_53_5_$1.mapping = "warnings";
    ui_DataField_53_5_$1["convert"] =AS3.bind( this,"convertWarnings");
    AS3.setBindable(config_$1,"defaultFields" , [ui_DataField_43_5_$1, ui_DataField_45_5_$1, ui_DataField_47_5_$1, ui_DataField_49_5_$1, ui_DataField_52_5_$1, ui_DataField_53_5_$1]);
    var collab_ProcessIconColumn_59_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn,{});
    var collab_WorkflowNameColumn_60_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn,{});
    collab_WorkflowNameColumn_60_5_$1.flex = 1.0;
    var collab_WorkflowDetailColumn_61_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn,{});
    AS3.setBindable(config_$1,"defaultColumns" , [collab_ProcessIconColumn_59_5_$1, collab_WorkflowNameColumn_60_5_$1, collab_WorkflowDetailColumn_61_5_$1]);
    var gridView_65_5_$1/*:ext.view.TableView*/ =AS3.cast(Ext.view.Table,{});
    gridView_65_5_$1.stripeRows = true;
    gridView_65_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TableViewSkin.LIGHT.getSkin());
    config_$1["viewConfig"] = gridView_65_5_$1;
    var selection_RowModel_70_5_$1/*:ext.selection.RowSelectionModel*/ =AS3.cast(Ext.selection.RowModel,{});
    selection_RowModel_70_5_$1.mode = "SINGLE";
    config_$1.selModel = new Ext.selection.RowModel(selection_RowModel_70_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$RAYk(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.TaskListPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.taskListPanel",
      constructor: TaskListPanel$,
      super$RAYk: function() {
        com.coremedia.cms.editor.controlroom.workflow.TaskListPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {SELECTED_ITEMS_VARIABLE_NAME: "selectedItems"},
      requires: [
        "Ext.selection.RowModel",
        "Ext.toolbar.Toolbar",
        "Ext.view.Table",
        "com.coremedia.cms.editor.controlroom.workflow.TaskListPanelBase",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.skins.TableViewSkin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn"
      ]
    };
});
