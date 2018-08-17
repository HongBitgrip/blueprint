Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel", function(UserChosenContentGridPanel) {/*package com.coremedia.cms.editor.controlroom.workflow.components{
import com.coremedia.cms.editor.controlroom.workflow.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.cms.editor.sdk.actions.OpenPremularAction;
import ext.toolbar.Separator;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import ext.toolbar.Fill;
import com.coremedia.cms.editor.controlroom.workflow.OpenWorkflowIssuesWindowButton;
import ext.menu.Menu;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.sdk.actions.CheckInAction;
import com.coremedia.cms.editor.sdk.actions.RevertAction;
import com.coremedia.cms.editor.sdk.actions.ApproveAction;

    [ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
public class UserChosenContentGridPanel extends UserChosenContentGridPanelBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.userChosenContentGridPanel";

    public static const SELECTED_ITEMS_VARIABLE_NAME:String = "selectedItems";

    public static const CONTENT_GRID_PANEL_ITEM_ID:String = "contentGridPanel";

    public static const DELETE_BUTTON_ITEM_ID:String = "delete";

    public static const OPEN_BUTTON_ITEM_ID:String = "openInTab";

    public static const COPY_BUTTON_ITEM_ID:String = "copy";

    public static const PASTE_BUTTON_ITEM_ID:String = "paste";

    public static const LINK_LIST_SEP_FIRST_ITEM_ID:String = "GridPanelSepFirst";

    public*/function UserChosenContentGridPanel$(config/*:UserChosenContentGridPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanelBase,{});
    var defaults_$1/*:UserChosenContentGridPanel*/ =AS3.cast(UserChosenContentGridPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.collapsible = false;
    AS3.setBindable(config_$1,"scrollable" , true);
    var ui_BindSelectionPlugin_63_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_63_5_$1,"selectedValues" , this.getSelectedValuesValueExpression());
    var editor_BindReadOnlyPlugin_64_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_64_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    config_$1.plugins = [ui_BindSelectionPlugin_63_5_$1, editor_BindReadOnlyPlugin_64_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var toolbar_67_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_67_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FIELD.getSkin());
    var ui_IconButton_69_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_69_9_$1.itemId =net.jangaroo.ext.Exml.asString( UserChosenContentGridPanel.DELETE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_69_9_$1,"handler" ,AS3.bind( this,"deleteContents"));
    AS3.setBindable(ui_IconButton_69_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_deleteSelectedLinks_text')));
    AS3.setBindable(ui_IconButton_69_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_deleteSelectedLinks_icon')));
    AS3.setBindable(ui_IconButton_69_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_deleteSelectedLinks_tooltip'));
    var ui_BindPropertyPlugin_75_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_75_13_$1.bindTo = this.getDeleteButtonDisabledValueExpression(AS3.getBindable(config,"forceReadOnlyValueExpression"));
    ui_BindPropertyPlugin_75_13_$1.componentProperty = "disabled";
    var ui_BindVisibilityPlugin_78_13_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_78_13_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"contentEditable") !== false);
    ui_IconButton_69_9_$1.plugins = [ui_BindPropertyPlugin_75_13_$1, ui_BindVisibilityPlugin_78_13_$1];
    var ui_IconButton_82_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_82_9_$1.itemId =net.jangaroo.ext.Exml.asString( UserChosenContentGridPanel.OPEN_BUTTON_ITEM_ID);
    var editor_OpenPremularAction_84_13_$1/*:com.coremedia.cms.editor.sdk.actions.OpenPremularAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenPremularAction,{});
    AS3.setBindable(editor_OpenPremularAction_84_13_$1,"premularConfigurationsValueExpression" , this.getPremularConfigurationsValueExpression());
    ui_IconButton_82_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenPremularAction(editor_OpenPremularAction_84_13_$1);
    var tbSeparator_88_9_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_88_9_$1.itemId =net.jangaroo.ext.Exml.asString( UserChosenContentGridPanel.LINK_LIST_SEP_FIRST_ITEM_ID);
    var ui_IconButton_89_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_89_9_$1.itemId =net.jangaroo.ext.Exml.asString( UserChosenContentGridPanel.COPY_BUTTON_ITEM_ID);
    var editor_CopyToClipboardAction_91_13_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_91_13_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( UserChosenContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    ui_IconButton_89_9_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_91_13_$1);
    var ui_IconButton_94_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_94_9_$1.itemId =net.jangaroo.ext.Exml.asString( UserChosenContentGridPanel.PASTE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_94_9_$1,"handler" ,AS3.bind( this,"pasteContents"));
    AS3.setBindable(ui_IconButton_94_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_pasteFromClipboard_icon')));
    AS3.setBindable(ui_IconButton_94_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_pasteFromClipboard_text')));
    AS3.setBindable(ui_IconButton_94_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_pasteFromClipboard_tooltip'));
    var ui_BindPropertyPlugin_100_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_100_13_$1.bindTo = this.getPasteButtonDisabledValueExpression(AS3.getBindable(config,"forceReadOnlyValueExpression"));
    ui_BindPropertyPlugin_100_13_$1.componentProperty = "disabled";
    var ui_BindVisibilityPlugin_103_13_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_103_13_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"contentEditable") !== false);
    ui_IconButton_94_9_$1.plugins = [ui_BindPropertyPlugin_100_13_$1, ui_BindVisibilityPlugin_103_13_$1];
    var tbFill_108_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var collab_OpenWorkflowIssuesWindowButton_109_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.OpenWorkflowIssuesWindowButton*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.OpenWorkflowIssuesWindowButton,{});
    AS3.setBindable(collab_OpenWorkflowIssuesWindowButton_109_9_$1,"hidden" , AS3.getBindable(config,"hideIssuesButton"));
    AS3.setBindable(collab_OpenWorkflowIssuesWindowButton_109_9_$1,"issuesVE" , AS3.getBindable(config,"issuesValueExpression"));
    toolbar_67_5_$1.items = [ui_IconButton_69_9_$1, ui_IconButton_82_9_$1, tbSeparator_88_9_$1, ui_IconButton_89_9_$1, ui_IconButton_94_9_$1, tbFill_108_9_$1, collab_OpenWorkflowIssuesWindowButton_109_9_$1];
    config_$1.tbar = toolbar_67_5_$1;
    var menu_116_5_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_116_5_$1.plain = true;
    var menuItem_118_9_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_OpenPremularAction_120_13_$1/*: com.coremedia.cms.editor.sdk.actions.OpenPremularAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenPremularAction,{});
    AS3.setBindable(editor_OpenPremularAction_120_13_$1,"premularConfigurationsValueExpression" , this.getPremularConfigurationsValueExpression());
    menuItem_118_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenPremularAction(editor_OpenPremularAction_120_13_$1);
    var menuItem_125_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_ShowInRepositoryAction_127_13_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_127_13_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( UserChosenContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_125_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_127_13_$1);
    var menuSeparator_131_9_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_133_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_CopyToClipboardAction_135_13_$1/*: com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_135_13_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( UserChosenContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_133_9_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_135_13_$1);
    var menuSeparator_139_9_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_141_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_CheckInAction_143_13_$1/*:com.coremedia.cms.editor.sdk.actions.CheckInAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.CheckInAction,{});
    AS3.setBindable(editor_CheckInAction_143_13_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( UserChosenContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_141_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.CheckInAction(editor_CheckInAction_143_13_$1);
    var menuItem_147_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_RevertAction_149_13_$1/*:com.coremedia.cms.editor.sdk.actions.RevertAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RevertAction,{});
    AS3.setBindable(editor_RevertAction_149_13_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( UserChosenContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_147_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.RevertAction(editor_RevertAction_149_13_$1);
    var menuItem_153_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_ApproveAction_155_13_$1/*:com.coremedia.cms.editor.sdk.actions.ApproveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApproveAction,{});
    AS3.setBindable(editor_ApproveAction_155_13_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( UserChosenContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_153_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ApproveAction(editor_ApproveAction_155_13_$1);
    menu_116_5_$1.items = [menuItem_118_9_$1, menuItem_125_9_$1, menuSeparator_131_9_$1, menuItem_133_9_$1, menuSeparator_139_9_$1, menuItem_141_9_$1, menuItem_147_9_$1, menuItem_153_9_$1];
    AS3.setBindable(config_$1,"contextMenu" , menu_116_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$JQBd(config_$1);
  }/*

    [Bindable]
    public var issuesValueExpression:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * A value expression evaluating to the Array of com.coremedia.cms.editor.sdk.premular.PremularConfigurations that
     * provide context how a selected content should be opened.
     *
     * @see com.coremedia.cms.editor.sdk.premular.PremularConfiguration
     * /
    [Bindable]
    public var premularConfigurationsValueExpression:ValueExpression;

    [Bindable]
    public var hideIssuesButton:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.userChosenContentGridPanel",
      constructor: UserChosenContentGridPanel$,
      super$JQBd: function() {
        com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        issuesValueExpression: null,
        forceReadOnlyValueExpression: null,
        premularConfigurationsValueExpression: null,
        hideIssuesButton: false
      },
      statics: {
        SELECTED_ITEMS_VARIABLE_NAME: "selectedItems",
        CONTENT_GRID_PANEL_ITEM_ID: "contentGridPanel",
        DELETE_BUTTON_ITEM_ID: "delete",
        OPEN_BUTTON_ITEM_ID: "openInTab",
        COPY_BUTTON_ITEM_ID: "copy",
        PASTE_BUTTON_ITEM_ID: "paste",
        LINK_LIST_SEP_FIRST_ITEM_ID: "GridPanelSepFirst"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Separator",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanelBase",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.actions.ApproveAction",
        "com.coremedia.cms.editor.sdk.actions.CheckInAction",
        "com.coremedia.cms.editor.sdk.actions.OpenPremularAction",
        "com.coremedia.cms.editor.sdk.actions.RevertAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.OpenWorkflowIssuesWindowButton"]
    };
});
