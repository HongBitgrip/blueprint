Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGrid", function(StructEditorTreeGrid) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct{
import com.coremedia.cms.editor.sdk.premular.fields.struct.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.grid.plugin.CellEditingPlugin;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.ui.components.StatefulTreeView;
import ext.tree.plugin.TreeViewDragDropPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import ext.form.field.TextField;
import ext.form.field.NumberField;
import com.coremedia.ui.components.FloatingToolbar;
import com.coremedia.ui.components.IconButton;
import ext.toolbar.Separator;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import ext.tree.TreeColumn;
import ext.grid.column.TemplateColumn;

    [ResourceBundle('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField')]
public class StructEditorTreeGrid extends StructEditorTreeGridBase{

    import com.coremedia.cap.common.CapPropertyDescriptorType;
    import com.coremedia.cms.editor.sdk.premular.DocumentTabPanel;
    import com.coremedia.ui.bem.LinkListBEMEntities;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.structEditorTreeGrid";

    public*/function StructEditorTreeGrid$(config/*:StructEditorTreeGrid = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridBase,{});
    var defaults_$1/*:StructEditorTreeGrid*/ =AS3.cast(StructEditorTreeGrid,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.useArrows = true;
    config_$1.rowLines = true;
    config_$1["enableHdMenu"] = false;
    config_$1.cls =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridBase.CM_STRUCT_EDITOR_TREE_GRID_BLOCK);
    var local_StructTreeStore_30_5_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeStore*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeStore,{});
    AS3.setBindable(local_StructTreeStore_30_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(local_StructTreeStore_30_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(config_$1,"store" , new com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeStore(local_StructTreeStore_30_5_$1));
    var ui_BEMPlugin_35_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_35_5_$1,"block" , com.coremedia.ui.bem.LinkListBEMEntities.BLOCK);
    AS3.setBindable(ui_BEMPlugin_35_5_$1,"bodyElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_LIST);
    AS3.setBindable(ui_BEMPlugin_35_5_$1,"modifier" , com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_WITH_HEADER);
    var plugin_CellEditing_38_5_$1/*:ext.grid.plugin.CellEditingPlugin*/ =AS3.cast(Ext.grid.plugin.CellEditing,{});
    plugin_CellEditing_38_5_$1.clicksToEdit = 1.0;
    plugin_CellEditing_38_5_$1.pluginId = "cellEditing";
    var ui_ContextMenuPlugin_40_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var local_StructEditorContextMenu_42_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorContextMenu,{});
    AS3.setBindable(local_StructEditorContextMenu_42_9_$1,"selectedNodeExpression" , this.getSelectedNodeExpression());
    AS3.setBindable(local_StructEditorContextMenu_42_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(ui_ContextMenuPlugin_40_5_$1,"contextMenu" , local_StructEditorContextMenu_42_9_$1);
    config_$1.plugins = [ui_BEMPlugin_35_5_$1, plugin_CellEditing_38_5_$1, ui_ContextMenuPlugin_40_5_$1];
    var ui_StatefulTreeView_49_5_$1/*:com.coremedia.ui.components.StatefulTreeView*/ =AS3.cast(com.coremedia.ui.components.StatefulTreeView,{});
    var plugin_TreeViewDragDrop_51_9_$1/*:ext.tree.plugin.TreeViewDragDropPlugin*/ =AS3.cast(Ext.tree.plugin.TreeViewDragDrop,{});
    plugin_TreeViewDragDrop_51_9_$1.ddGroup = "ContentDD";
    plugin_TreeViewDragDrop_51_9_$1.enableDrag = false;
    var editor_BindReadOnlyPlugin_53_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_53_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindReadOnlyPlugin_53_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    ui_StatefulTreeView_49_5_$1.plugins = [plugin_TreeViewDragDrop_51_9_$1, editor_BindReadOnlyPlugin_53_9_$1];
    config_$1["viewConfig"] = ui_StatefulTreeView_49_5_$1;
    var textField_60_5_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_60_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.STRING);
    textField_60_5_$1.selectOnFocus = true;
    var numberField_62_5_$1/*:ext.form.field.NumberField*/ =AS3.cast(Ext.form.field.Number,{});
    numberField_62_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER);
    numberField_62_5_$1.selectOnFocus = true;
    numberField_62_5_$1.allowDecimals = false;
    AS3.setBindable(numberField_62_5_$1,"minValue" , AS3.int_.MIN_VALUE);
    AS3.setBindable(numberField_62_5_$1,"maxValue" , AS3.int_.MAX_VALUE);
    AS3.setBindable(config_$1,"editors" , [textField_60_5_$1, numberField_62_5_$1]);
    var ui_FloatingToolbar_70_5_$1/*:com.coremedia.ui.components.FloatingToolbar*/ =AS3.cast(com.coremedia.ui.components.FloatingToolbar,{});
    var ui_IconButton_72_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_72_9_$1.itemId = "deleteStructNode";
    var editor_DeleteStructNodeAction_74_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeAction,{});
    AS3.setBindable(editor_DeleteStructNodeAction_74_13_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_DeleteStructNodeAction_74_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_DeleteStructNodeAction_74_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_DeleteStructNodeAction_74_13_$1,"selectedNodeExpression" , this.getSelectedNodeExpression());
    ui_IconButton_72_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeAction(editor_DeleteStructNodeAction_74_13_$1);
    var tbSeparator_80_9_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var editor_AddStructPropertyButton_81_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyButton,{});
    editor_AddStructPropertyButton_81_9_$1.itemId = "addStructProperty";
    AS3.setBindable(editor_AddStructPropertyButton_81_9_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_AddStructPropertyButton_81_9_$1,"selectedNodeExpression" , this.getSelectedNodeExpression());
    AS3.setBindable(editor_AddStructPropertyButton_81_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    var ui_IconButton_85_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_85_9_$1.itemId = "addStructListItem";
    var editor_AddStructListItemAction_87_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemAction,{});
    AS3.setBindable(editor_AddStructListItemAction_87_13_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_AddStructListItemAction_87_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructListItemAction_87_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructListItemAction_87_13_$1,"selectedNodeExpression" , this.getSelectedNodeExpression());
    ui_IconButton_85_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemAction(editor_AddStructListItemAction_87_13_$1);
    var tbSeparator_93_9_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_94_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_94_9_$1.itemId = "moveStructNodeUp";
    var editor_MoveStructNodeAction_96_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction,{});
    AS3.setBindable(editor_MoveStructNodeAction_96_13_$1,"direction" , "Up");
    AS3.setBindable(editor_MoveStructNodeAction_96_13_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_MoveStructNodeAction_96_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_MoveStructNodeAction_96_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_MoveStructNodeAction_96_13_$1,"selectedNodeExpression" , this.getSelectedNodeExpression());
    ui_IconButton_94_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction(editor_MoveStructNodeAction_96_13_$1);
    var ui_IconButton_103_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_103_9_$1.itemId = "moveStructNodeDown";
    var editor_MoveStructNodeAction_105_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction,{});
    AS3.setBindable(editor_MoveStructNodeAction_105_13_$1,"direction" , "Down");
    AS3.setBindable(editor_MoveStructNodeAction_105_13_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_MoveStructNodeAction_105_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_MoveStructNodeAction_105_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_MoveStructNodeAction_105_13_$1,"selectedNodeExpression" , this.getSelectedNodeExpression());
    ui_IconButton_103_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction(editor_MoveStructNodeAction_105_13_$1);
    var tbSeparator_112_9_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_113_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_113_9_$1.itemId = "cutStructNode";
    var local_CutStructNodeAction_115_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.CutStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.CutStructNodeAction,{});
    AS3.setBindable(local_CutStructNodeAction_115_13_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(local_CutStructNodeAction_115_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(local_CutStructNodeAction_115_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(local_CutStructNodeAction_115_13_$1,"selectedNodeExpression" , this.getSelectedNodeExpression());
    ui_IconButton_113_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.CutStructNodeAction(local_CutStructNodeAction_115_13_$1);
    var ui_IconButton_121_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_121_9_$1.itemId = "copyStructNode";
    var local_CopyStructNodeAction_123_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.CopyStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.CopyStructNodeAction,{});
    AS3.setBindable(local_CopyStructNodeAction_123_13_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(local_CopyStructNodeAction_123_13_$1,"selectedNodeExpression" , this.getSelectedNodeExpression());
    ui_IconButton_121_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.CopyStructNodeAction(local_CopyStructNodeAction_123_13_$1);
    var ui_IconButton_127_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_127_9_$1.itemId = "pasteToStructNode";
    var local_PasteToStructNodeAction_129_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.PasteToStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.PasteToStructNodeAction,{});
    AS3.setBindable(local_PasteToStructNodeAction_129_13_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(local_PasteToStructNodeAction_129_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(local_PasteToStructNodeAction_129_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(local_PasteToStructNodeAction_129_13_$1,"selectedNodeExpression" , this.getSelectedNodeExpression());
    ui_IconButton_127_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.PasteToStructNodeAction(local_PasteToStructNodeAction_129_13_$1);
    var ui_IconButton_135_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_135_9_$1.itemId = "duplicateStructNode";
    var editor_DuplicateStructNodeAction_137_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.DuplicateStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.DuplicateStructNodeAction,{});
    AS3.setBindable(editor_DuplicateStructNodeAction_137_13_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_DuplicateStructNodeAction_137_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_DuplicateStructNodeAction_137_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_DuplicateStructNodeAction_137_13_$1,"selectedNodeExpression" , this.getSelectedNodeExpression());
    ui_IconButton_135_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.DuplicateStructNodeAction(editor_DuplicateStructNodeAction_137_13_$1);
    var tbSeparator_143_9_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_144_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_144_9_$1.itemId = "openInTab";
    var editor_OpenInTabAction_146_13_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_146_13_$1,"contentVariableName" , "linkedContent");
    ui_IconButton_144_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_146_13_$1);
    ui_FloatingToolbar_70_5_$1.items = [ui_IconButton_72_9_$1, tbSeparator_80_9_$1, editor_AddStructPropertyButton_81_9_$1, ui_IconButton_85_9_$1, tbSeparator_93_9_$1, ui_IconButton_94_9_$1, ui_IconButton_103_9_$1, tbSeparator_112_9_$1, ui_IconButton_113_9_$1, ui_IconButton_121_9_$1, ui_IconButton_127_9_$1, ui_IconButton_135_9_$1, tbSeparator_143_9_$1, ui_IconButton_144_9_$1];
    config_$1.tbar = ui_FloatingToolbar_70_5_$1;
    var treeColumn_153_5_$1/*:ext.tree.TreeColumn*/ =AS3.cast(Ext.tree.Column,{});
    treeColumn_153_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'property_text'));
    treeColumn_153_5_$1.flex = 1.2;
    AS3.setBindable(treeColumn_153_5_$1,"align" , "left");
    treeColumn_153_5_$1.dataIndex = "text";
    treeColumn_153_5_$1.renderer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    treeColumn_153_5_$1.sortable = false;
    var textField_160_9_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_160_9_$1.selectOnFocus = true;
    AS3.setBindable(treeColumn_153_5_$1,"editor" , textField_160_9_$1);
    var templateColumn_163_5_$1/*:ext.grid.column.TemplateColumn*/ =AS3.cast(Ext.grid.column.Template,{});
    templateColumn_163_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'property_value_text'));
    templateColumn_163_5_$1.dataIndex = "value";
    templateColumn_163_5_$1.sortable = false;
    AS3.setBindable(templateColumn_163_5_$1,"align" ,net.jangaroo.ext.Exml.asString( undefined));
    templateColumn_163_5_$1.flex = 1.2;
    templateColumn_163_5_$1.tpl = com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridBase.getValueTemplate();
    var textField_170_9_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_170_9_$1.selectOnFocus = true;
    AS3.setBindable(templateColumn_163_5_$1,"editor" , textField_170_9_$1);
    var templateColumn_173_5_$1/*: ext.grid.column.TemplateColumn*/ =AS3.cast(Ext.grid.column.Template,{});
    templateColumn_173_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField', 'property_type_text'));
    templateColumn_173_5_$1.flex = 0.6;
    AS3.setBindable(templateColumn_173_5_$1,"align" , "left");
    templateColumn_173_5_$1.dataIndex = "linkType";
    templateColumn_173_5_$1.sortable = false;
    AS3.setBindable(templateColumn_173_5_$1,"editor" , new com.coremedia.cms.editor.sdk.premular.fields.struct.LinkTypeSelector());
    templateColumn_173_5_$1.tpl = com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridBase.getTypeTemplate();
    config_$1.columns = [treeColumn_153_5_$1, templateColumn_163_5_$1, templateColumn_173_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$sSWi(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.structEditorTreeGrid",
      constructor: StructEditorTreeGrid$,
      super$sSWi: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "AS3.int_",
        "Ext.form.field.Number",
        "Ext.form.field.Text",
        "Ext.grid.column.Template",
        "Ext.grid.plugin.CellEditing",
        "Ext.toolbar.Separator",
        "Ext.tree.Column",
        "Ext.tree.plugin.TreeViewDragDrop",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorTreeGridBase",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructPropertyField_properties",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.components.FloatingToolbar",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.StatefulTreeView",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyButton",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.CopyStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.CutStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.DuplicateStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.LinkTypeSelector",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.PasteToStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorContextMenu",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructTreeStore"
      ]
    };
});
