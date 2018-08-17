Ext.define("com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel", function(ProcessListPanel) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.toolbar.Toolbar;
import com.coremedia.ui.store.DataField;
import ext.view.TableView;
import ext.selection.RowSelectionModel;
public class ProcessListPanel extends ProcessListPanelBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.TableViewSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.processListPanel";

    public static const SELECTED_ITEMS_VARIABLE_NAME:String = "selectedItems";

    public*/function ProcessListPanel$(config/*:ProcessListPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessListPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessListPanelBase,{});
    var defaults_$1/*:ProcessListPanel*/ =AS3.cast(ProcessListPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"hideHeaders" , true);
    AS3.setBindable(config_$1,"border" , false);
    config_$1.bodyBorder = false;
    config_$1.bindTo = AS3.getBindable(config,"processListValueExpression");
    config_$1.lazy = true;
    config_$1.initialViewLimit = 20;
    config_$1.viewLimitIncrement = 20;
    var ui_BindSelectionPlugin_32_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    var ui_ValueExpression_34_9_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_34_9_$1,"context" , this);
    AS3.setBindable(ui_ValueExpression_34_9_$1,"expression" ,net.jangaroo.ext.Exml.asString( ProcessListPanel.SELECTED_ITEMS_VARIABLE_NAME));
    AS3.setBindable(ui_BindSelectionPlugin_32_5_$1,"selectedValues" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_34_9_$1));
    config_$1.plugins = [ui_BindSelectionPlugin_32_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var toolbar_41_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_41_5_$1.itemId = "toolbar";
    config_$1.tbar = toolbar_41_5_$1;
    var ui_DataField_45_5_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_45_5_$1.name = "processName";
    ui_DataField_45_5_$1.mapping = "properties.subject";
    var ui_DataField_47_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_47_5_$1.name = "processDefinitionName";
    ui_DataField_47_5_$1.mapping = "definition.name";
    AS3.setBindable(config_$1,"defaultFields" , [ui_DataField_45_5_$1, ui_DataField_47_5_$1]);
    var collab_ProcessIconColumn_52_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn,{});
    var collab_WorkflowNameColumn_53_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn,{});
    collab_WorkflowNameColumn_53_5_$1.flex = 1.0;
    var collab_WorkflowDetailColumn_54_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn,{});
    AS3.setBindable(config_$1,"defaultColumns" , [collab_ProcessIconColumn_52_5_$1, collab_WorkflowNameColumn_53_5_$1, collab_WorkflowDetailColumn_54_5_$1]);
    var gridView_58_5_$1/*:ext.view.TableView*/ =AS3.cast(Ext.view.Table,{});
    gridView_58_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TableViewSkin.LIGHT.getSkin());
    gridView_58_5_$1.stripeRows = true;
    config_$1["viewConfig"] = gridView_58_5_$1;
    var selection_RowModel_62_5_$1/*:ext.selection.RowSelectionModel*/ =AS3.cast(Ext.selection.RowModel,{});
    selection_RowModel_62_5_$1.mode = "SINGLE";
    config_$1.selModel = new Ext.selection.RowModel(selection_RowModel_62_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$KjAA(config_$1);
  }/*

    [Bindable]
    public var processListValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.ProcessListPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.processListPanel",
      constructor: ProcessListPanel$,
      super$KjAA: function() {
        com.coremedia.cms.editor.controlroom.workflow.ProcessListPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {processListValueExpression: null},
      statics: {SELECTED_ITEMS_VARIABLE_NAME: "selectedItems"},
      requires: [
        "Ext.selection.RowModel",
        "Ext.toolbar.Toolbar",
        "Ext.view.Table",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessListPanelBase",
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
