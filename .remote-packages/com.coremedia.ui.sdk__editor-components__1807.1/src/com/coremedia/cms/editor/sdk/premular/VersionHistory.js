Ext.define("com.coremedia.cms.editor.sdk.premular.VersionHistory", function(VersionHistory) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.SwitchingContainer;
import ext.container.Container;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonAction;
import com.coremedia.cms.editor.sdk.actions.RestoreVersionAction;
import ext.grid.GridPanel;
import com.coremedia.ui.components.StatefulTableView;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import ext.menu.Menu;
import ext.menu.Item;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import ext.grid.column.DateColumn;
import ext.grid.column.Column;
import ext.grid.column.NumberColumn;
import com.coremedia.cms.editor.sdk.columns.grid.StatusColumn;
import ext.selection.RowSelectionModel;
import ext.form.field.DisplayField;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A container showing the version history of a document.
 * /
public class VersionHistory extends VersionHistoryBase{

    import com.coremedia.ui.bem.LinkListBEMEntities;
    import com.coremedia.ui.plugins.ContextMenuPlugin;
    import com.coremedia.ui.skins.ToolbarSkin;

    import ext.container.Container;
    import ext.menu.Menu;
    import ext.toolbar.Toolbar;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.versionHistory";

    public static const ITEM_ID_VERSION_HISTORY:String = "cmVersionHistory";

    /**
     * A function to be used as "applyTo" of an addItemsPlugin that wants to tweak the toolbar of this VersionHistory.
     * /
    public static const FIND_TOOLBAR:Function =*/function FIND_TOOLBAR$static_(){VersionHistory.FIND_TOOLBAR=(
            function (versionHistory/*:Container*/)/*:Toolbar*/ {
              return AS3.cast(Ext.toolbar.Toolbar,versionHistory.getComponent('versionHistoryToolbar'));
            });}/*;

    /**
     * A function to be used as "applyTo" of an addItemsPlugin that wants to tweak the context menu of this VersionHistory.
     * /
    public static const FIND_CONTEXT_MENU:Function =*/function FIND_CONTEXT_MENU$static_(){VersionHistory.FIND_CONTEXT_MENU=(
            function (versionHistory/*:Container*/)/*:Menu*/ {
              return com.coremedia.ui.plugins.ContextMenuPlugin.findMenu(AS3.cast(Ext.container.Container,versionHistory.queryById('versionHistory')));
            });}/*;

    /**
     * The itemId of the open version comparison button or menu item.
     * /
    public static const OPEN_VERSION_COMPARISON_ITEM_ID:String = "openVersionComparison";

    /**
     * The itemId of the restore version button or menu item.
     * /
    public static const RESTORE_VERSION_ITEM_ID:String = "restoreVersion";

    public static const VERSIONS_CONTAINER_ITEM_ID:String = "versionsContainer";
    public static const EMPTY_VERSIONS_CONTAINER_ITEM_ID:String = "emptyVersionsContainer";

    public*/function VersionHistory$(config/*:VersionHistory = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.VersionHistoryBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.VersionHistoryBase,{});
    var defaults_$1/*:VersionHistory*/ =AS3.cast(VersionHistory,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_text'));
    config_$1.itemId =net.jangaroo.ext.Exml.asString( VersionHistory.ITEM_ID_VERSION_HISTORY);
    var editor_PropertyFieldPlugin_65_5_$1/*: com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_65_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( VersionHistory.xtype));
    config_$1.plugins = [editor_PropertyFieldPlugin_65_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var ui_SwitchingContainer_69_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_69_5_$1.itemId = "switchingContainer";
    AS3.setBindable(ui_SwitchingContainer_69_5_$1,"activeItemValueExpression" , this.getActiveHistoryContainerExpression());
    var container_72_9_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_72_9_$1.itemId =net.jangaroo.ext.Exml.asString( VersionHistory.VERSIONS_CONTAINER_ITEM_ID);
    var toolbar_74_13_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_74_13_$1.itemId = "versionHistoryToolbar";
    toolbar_74_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FIELD.getSkin());
    var ui_IconButton_77_17_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_77_17_$1.itemId =net.jangaroo.ext.Exml.asString( VersionHistory.OPEN_VERSION_COMPARISON_ITEM_ID);
    var editor_OpenVersionComparisonAction_79_21_$1/*:com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonAction,{});
    AS3.setBindable(editor_OpenVersionComparisonAction_79_21_$1,"versionValueExpression" , this.selectedSingleValueExpression);
    ui_IconButton_77_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonAction(editor_OpenVersionComparisonAction_79_21_$1);
    var ui_IconButton_82_17_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_82_17_$1.itemId =net.jangaroo.ext.Exml.asString( VersionHistory.RESTORE_VERSION_ITEM_ID);
    var editor_RestoreVersionAction_84_21_$1/*:com.coremedia.cms.editor.sdk.actions.RestoreVersionAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RestoreVersionAction,{});
    AS3.setBindable(editor_RestoreVersionAction_84_21_$1,"valueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_RestoreVersionAction_84_21_$1,"versionValueExpression" , this.selectedSingleValueExpression);
    AS3.setBindable(editor_RestoreVersionAction_84_21_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    ui_IconButton_82_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.RestoreVersionAction(editor_RestoreVersionAction_84_21_$1);
    toolbar_74_13_$1.items = [ui_IconButton_77_17_$1, ui_IconButton_82_17_$1];
    var gridPanel_91_13_$1/*:ext.grid.GridPanel*/ =AS3.cast(Ext.grid.Panel,{});
    gridPanel_91_13_$1.itemId = "versionHistory";
    AS3.setBindable(gridPanel_91_13_$1,"maxHeight" , 200.0);
    AS3.setBindable(gridPanel_91_13_$1,"scrollable" , true);
    gridPanel_91_13_$1.sortableColumns = false;
    var ui_StatefulTableView_96_17_$1/*:com.coremedia.ui.components.StatefulTableView*/ =AS3.cast(com.coremedia.ui.components.StatefulTableView,{});
    ui_StatefulTableView_96_17_$1.stripeRows = false;
    var editor_BindReadOnlyPlugin_98_21_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    editor_BindReadOnlyPlugin_98_21_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindReadOnlyPlugin_98_21_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    ui_StatefulTableView_96_17_$1.plugins = [editor_BindReadOnlyPlugin_98_21_$1];
    gridPanel_91_13_$1["viewConfig"] = ui_StatefulTableView_96_17_$1;
    var ui_BEMPlugin_104_17_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_104_17_$1,"block" , com.coremedia.ui.bem.LinkListBEMEntities.BLOCK);
    AS3.setBindable(ui_BEMPlugin_104_17_$1,"bodyElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_LIST);
    AS3.setBindable(ui_BEMPlugin_104_17_$1,"modifier" , com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_WITH_HEADER);
    var ui_BindListPlugin_107_17_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_107_17_$1,"bindTo" , AS3.getBindable(config,"bindTo").extendBy('versionHistory.items'));
    AS3.setBindable(ui_BindListPlugin_107_17_$1,"transformer" , function(array/*:Array*/)/*:Array*/ { return array.concat().reverse();});
    AS3.setBindable(ui_BindListPlugin_107_17_$1,"lazy" , true);
    AS3.setBindable(ui_BindListPlugin_107_17_$1,"initialViewLimit" , 10);
    AS3.setBindable(ui_BindListPlugin_107_17_$1,"viewLimitIncrement" , 10);
    var ui_DataField_113_21_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_113_21_$1.name = "latestApprovedVersion";
    var ui_DataField_114_21_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_114_21_$1.name = "latestPublishedVersion";
    var ui_DataField_115_21_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_115_21_$1.name = "latestVersion";
    var ui_DataField_116_21_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_116_21_$1.name = "editionDate";
    var ui_DataField_117_21_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_117_21_$1.name = "editor";
    ui_DataField_117_21_$1.mapping = "editor.name";
    var ui_DataField_119_21_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_119_21_$1.name = "versionNumber";
    var ui_DataField_120_21_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_120_21_$1.name = "publisher";
    var ui_DataField_121_21_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_121_21_$1.name = "lifecycleStatusDescription";
    ui_DataField_121_21_$1.mapping = "lifecycleStatus";
    ui_DataField_121_21_$1.convert =AS3.bind( this,"lifecycleStatusDescription");
    var ui_DataField_124_21_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_124_21_$1.name = "status";
    ui_DataField_124_21_$1.mapping = "lifecycleStatus";
    ui_DataField_124_21_$1.convert =AS3.bind( this,"lifecycleStatus");
    AS3.setBindable(ui_BindListPlugin_107_17_$1,"fields" , [ui_DataField_113_21_$1, ui_DataField_114_21_$1, ui_DataField_115_21_$1, ui_DataField_116_21_$1, ui_DataField_117_21_$1, ui_DataField_119_21_$1, ui_DataField_120_21_$1, ui_DataField_121_21_$1, ui_DataField_124_21_$1]);
    var ui_ContextMenuPlugin_129_17_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var menu_131_21_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_131_21_$1.plain = true;
    var menuItem_133_25_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_133_25_$1.itemId =net.jangaroo.ext.Exml.asString( VersionHistory.OPEN_VERSION_COMPARISON_ITEM_ID);
    var editor_OpenVersionComparisonAction_135_29_$1/*: com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonAction,{});
    AS3.setBindable(editor_OpenVersionComparisonAction_135_29_$1,"versionValueExpression" , this.selectedSingleValueExpression);
    menuItem_133_25_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonAction(editor_OpenVersionComparisonAction_135_29_$1);
    var menuItem_139_25_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_139_25_$1.itemId =net.jangaroo.ext.Exml.asString( VersionHistory.RESTORE_VERSION_ITEM_ID);
    var editor_RestoreVersionAction_141_29_$1/*: com.coremedia.cms.editor.sdk.actions.RestoreVersionAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RestoreVersionAction,{});
    AS3.setBindable(editor_RestoreVersionAction_141_29_$1,"valueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_RestoreVersionAction_141_29_$1,"versionValueExpression" , this.selectedSingleValueExpression);
    AS3.setBindable(editor_RestoreVersionAction_141_29_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    menuItem_139_25_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.RestoreVersionAction(editor_RestoreVersionAction_141_29_$1);
    menu_131_21_$1.items = [menuItem_133_25_$1, menuItem_139_25_$1];
    AS3.setBindable(ui_ContextMenuPlugin_129_17_$1,"contextMenu" , menu_131_21_$1);
    var ui_BindSelectionPlugin_150_17_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_150_17_$1,"selectedValues" , this.selectedValuesExpression);
    gridPanel_91_13_$1.plugins = [ui_BEMPlugin_104_17_$1, ui_BindListPlugin_107_17_$1, ui_ContextMenuPlugin_129_17_$1, ui_BindSelectionPlugin_150_17_$1];
    var dateColumn_153_17_$1/*:ext.grid.column.DateColumn*/ =AS3.cast(Ext.grid.column.Date,{});
    dateColumn_153_17_$1.dataIndex = "editionDate";
    dateColumn_153_17_$1.sortable = false;
    dateColumn_153_17_$1.menuDisabled = true;
    dateColumn_153_17_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_date_text'));
    dateColumn_153_17_$1.format =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dateFormat'));
    dateColumn_153_17_$1.flex = 0.23;
    var gridColumn_159_17_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_159_17_$1.dataIndex = "editor";
    gridColumn_159_17_$1.sortable = false;
    gridColumn_159_17_$1.menuDisabled = true;
    gridColumn_159_17_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_editor_text'));
    gridColumn_159_17_$1.flex = 0.27;
    var numberColumn_164_17_$1/*:ext.grid.column.NumberColumn*/ =AS3.cast(Ext.grid.column.Number,{});
    numberColumn_164_17_$1.dataIndex = "versionNumber";
    numberColumn_164_17_$1.format = "0";
    numberColumn_164_17_$1.sortable = false;
    numberColumn_164_17_$1.menuDisabled = true;
    AS3.setBindable(numberColumn_164_17_$1,"align" , "center");
    numberColumn_164_17_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_version_text'));
    numberColumn_164_17_$1.flex = 0.125;
    var gridColumn_170_17_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_170_17_$1.dataIndex = "lifecycleStatusDescription";
    gridColumn_170_17_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_state_text'));
    gridColumn_170_17_$1.sortable = false;
    gridColumn_170_17_$1.menuDisabled = false;
    gridColumn_170_17_$1.flex = 0.25;
    var editor_StatusColumn_176_17_$1/*:com.coremedia.cms.editor.sdk.columns.grid.StatusColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.StatusColumn,{});
    editor_StatusColumn_176_17_$1.header = "&nbsp;";
    AS3.setBindable(editor_StatusColumn_176_17_$1,"align" , "center");
    editor_StatusColumn_176_17_$1.sortable = false;
    editor_StatusColumn_176_17_$1.menuDisabled = true;
    gridPanel_91_13_$1.columns = [dateColumn_153_17_$1, gridColumn_159_17_$1, numberColumn_164_17_$1, gridColumn_170_17_$1, editor_StatusColumn_176_17_$1];
    var selection_RowModel_182_17_$1/*:ext.selection.RowSelectionModel*/ =AS3.cast(Ext.selection.RowModel,{});
    selection_RowModel_182_17_$1.mode = "SINGLE";
    gridPanel_91_13_$1.selModel = new Ext.selection.RowModel(selection_RowModel_182_17_$1);
    container_72_9_$1.items = [toolbar_74_13_$1, gridPanel_91_13_$1];
    var displayField_187_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_187_9_$1.itemId =net.jangaroo.ext.Exml.asString( VersionHistory.EMPTY_VERSIONS_CONTAINER_ITEM_ID);
    AS3.setBindable(displayField_187_9_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_emptyText'));
    ui_SwitchingContainer_69_5_$1.items = [container_72_9_$1, displayField_187_9_$1];
    config_$1.items = [ui_SwitchingContainer_69_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bmi_(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.VersionHistoryBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.versionHistory",
      constructor: VersionHistory$,
      super$bmi_: function() {
        com.coremedia.cms.editor.sdk.premular.VersionHistoryBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ITEM_ID_VERSION_HISTORY: "cmVersionHistory",
        FIND_TOOLBAR: undefined,
        FIND_CONTEXT_MENU: undefined,
        OPEN_VERSION_COMPARISON_ITEM_ID: "openVersionComparison",
        RESTORE_VERSION_ITEM_ID: "restoreVersion",
        VERSIONS_CONTAINER_ITEM_ID: "versionsContainer",
        EMPTY_VERSIONS_CONTAINER_ITEM_ID: "emptyVersionsContainer",
        __initStatics__: function() {
          FIND_TOOLBAR$static_();
          FIND_CONTEXT_MENU$static_();
        }
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.grid.Panel",
        "Ext.grid.column.Column",
        "Ext.grid.column.Date",
        "Ext.grid.column.Number",
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.selection.RowModel",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.VersionHistoryBase",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.StatefulTableView",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonAction",
        "com.coremedia.cms.editor.sdk.actions.RestoreVersionAction",
        "com.coremedia.cms.editor.sdk.columns.grid.StatusColumn",
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin"
      ]
    };
});
