Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel", function(WorkflowSetPanel) {/*package com.coremedia.cms.editor.controlroom.workflow.components{
import com.coremedia.cms.editor.controlroom.workflow.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.cms.editor.sdk.components.ContentGridPanel;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import ext.menu.Menu;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.cms.editor.sdk.actions.CheckInAction;
import com.coremedia.cms.editor.sdk.actions.RevertAction;
import com.coremedia.cms.editor.sdk.actions.ApproveAction;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.toolbar.Toolbar;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.components.StatefulQuickTip;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class WorkflowSetPanel extends WorkflowSetPanelBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.workflowSetPanel";

    public static const USER_CHOSEN_CONTENTS_ITEM_ID:String = "userChosenContentsItemId";

    public static const EXTENDED_CONTENTS_ITEM_ID:String = "extendedContentsItemId";

    public static const EXTENDED_CONTENTS_COLLAPSIBLE_ITEM_ID:String = "extendedContentsCollapsibleItemId";

    public static const SELECTED_ITEMS_VARIABLE_NAME:String = "selectedItems";

    public*/function WorkflowSetPanel$(config/*:WorkflowSetPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanelBase,{});
    var defaults_$1/*:WorkflowSetPanel*/ =AS3.cast(WorkflowSetPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"minHeight" , 300.0);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_contentItems_label'));
    var collab_UserChosenContentGridPanel_85_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel,{});
    collab_UserChosenContentGridPanel_85_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkflowSetPanel.USER_CHOSEN_CONTENTS_ITEM_ID);
    collab_UserChosenContentGridPanel_85_5_$1.flex = 3.0;
    AS3.setBindable(collab_UserChosenContentGridPanel_85_5_$1,"maxHeight" , 250.0);
    AS3.setBindable(collab_UserChosenContentGridPanel_85_5_$1,"expandFolders" , AS3.getBindable(config,"expandFolders"));
    AS3.setBindable(collab_UserChosenContentGridPanel_85_5_$1,"bindTo" , AS3.getBindable(config,"selectedContentsValueExpression"));
    AS3.setBindable(collab_UserChosenContentGridPanel_85_5_$1,"hideIssuesButton" , AS3.getBindable(config,"hideIssuesButton"));
    AS3.setBindable(collab_UserChosenContentGridPanel_85_5_$1,"issuesValueExpression" , this.getWorkflowIssuesButtonIssuesValueExpression());
    AS3.setBindable(collab_UserChosenContentGridPanel_85_5_$1,"readOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(collab_UserChosenContentGridPanel_85_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    collab_UserChosenContentGridPanel_85_5_$1.emptyText =net.jangaroo.ext.Exml.asString( config.emptyText);
    AS3.setBindable(collab_UserChosenContentGridPanel_85_5_$1,"lazy" , true);
    AS3.setBindable(collab_UserChosenContentGridPanel_85_5_$1,"initialViewLimit" , 30);
    AS3.setBindable(collab_UserChosenContentGridPanel_85_5_$1,"viewLimitIncrement" , 30);
    var editor_CollapsiblePanel_98_5_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    AS3.setBindable(editor_CollapsiblePanel_98_5_$1,"collapsed" , true);
    editor_CollapsiblePanel_98_5_$1.flex = 4.0;
    editor_CollapsiblePanel_98_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkflowSetPanel.EXTENDED_CONTENTS_COLLAPSIBLE_ITEM_ID);
    AS3.setBindable(editor_CollapsiblePanel_98_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_extendedChangeSetField_label'));
    editor_CollapsiblePanel_98_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_extendedChangeSetField_label'));
    var editor_ContentGridPanel_104_9_$1/*:com.coremedia.cms.editor.sdk.components.ContentGridPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.ContentGridPanel,{});
    editor_ContentGridPanel_104_9_$1.itemId =net.jangaroo.ext.Exml.asString( WorkflowSetPanel.EXTENDED_CONTENTS_ITEM_ID);
    editor_ContentGridPanel_104_9_$1.flex = 1.0;
    AS3.setBindable(editor_ContentGridPanel_104_9_$1,"scrollable" , true);
    AS3.setBindable(editor_ContentGridPanel_104_9_$1,"maxHeight" , 250.0);
    AS3.setBindable(editor_ContentGridPanel_104_9_$1,"hideEmptyText" , true);
    AS3.setBindable(editor_ContentGridPanel_104_9_$1,"bindTo" , this.getExtendedContentsValueExpressionInternal(AS3.getBindable(config,"workflowSetValueExpression")));
    AS3.setBindable(editor_ContentGridPanel_104_9_$1,"lazy" , true);
    AS3.setBindable(editor_ContentGridPanel_104_9_$1,"initialViewLimit" , 30);
    AS3.setBindable(editor_ContentGridPanel_104_9_$1,"viewLimitIncrement" , 30);
    var editor_BindReadOnlyPlugin_114_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_114_13_$1,"forceReadOnlyValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(true));
    editor_BindReadOnlyPlugin_114_13_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    var ui_BindSelectionPlugin_116_13_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_116_13_$1,"selectedValues" , this.getSelectedExtendedContentsValueExpression());
    editor_ContentGridPanel_104_9_$1.plugins = [editor_BindReadOnlyPlugin_114_13_$1, ui_BindSelectionPlugin_116_13_$1];
    editor_ContentGridPanel_104_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var menu_120_13_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_120_13_$1.plain = true;
    var menuItem_122_17_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_OpenInTabAction_124_21_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_124_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( WorkflowSetPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_122_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_124_21_$1);
    var menuItem_128_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_ShowInRepositoryAction_130_21_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_130_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( WorkflowSetPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_128_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_130_21_$1);
    var menuSeparator_134_17_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_136_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_CopyToClipboardAction_138_21_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_138_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( WorkflowSetPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_136_17_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_138_21_$1);
    var menuSeparator_142_17_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_144_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_CheckInAction_146_21_$1/*:com.coremedia.cms.editor.sdk.actions.CheckInAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.CheckInAction,{});
    AS3.setBindable(editor_CheckInAction_146_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( WorkflowSetPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_144_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.CheckInAction(editor_CheckInAction_146_21_$1);
    var menuItem_150_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_RevertAction_152_21_$1/*:com.coremedia.cms.editor.sdk.actions.RevertAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RevertAction,{});
    AS3.setBindable(editor_RevertAction_152_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( WorkflowSetPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_150_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.RevertAction(editor_RevertAction_152_21_$1);
    var menuItem_156_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_ApproveAction_158_21_$1/*:com.coremedia.cms.editor.sdk.actions.ApproveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApproveAction,{});
    AS3.setBindable(editor_ApproveAction_158_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( WorkflowSetPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_156_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ApproveAction(editor_ApproveAction_158_21_$1);
    menu_120_13_$1.items = [menuItem_122_17_$1, menuItem_128_17_$1, menuSeparator_134_17_$1, menuItem_136_17_$1, menuSeparator_142_17_$1, menuItem_144_17_$1, menuItem_150_17_$1, menuItem_156_17_$1];
    AS3.setBindable(editor_ContentGridPanel_104_9_$1,"contextMenu" , menu_120_13_$1);
    editor_CollapsiblePanel_98_5_$1.items = [editor_ContentGridPanel_104_9_$1];
    var ui_BindPropertyPlugin_167_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_167_9_$1.bindTo = this.getAllIssuesValueExpression();
    ui_BindPropertyPlugin_167_9_$1.ifUndefined = "true";
    ui_BindPropertyPlugin_167_9_$1.componentProperty = "collapsed";
    ui_BindPropertyPlugin_167_9_$1.transformer =AS3.bind( this,"expandOrCollapseDependentContent");
    editor_CollapsiblePanel_98_5_$1.plugins = [ui_BindPropertyPlugin_167_9_$1];
    var toolbar_173_9_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    AS3.setBindable(toolbar_173_9_$1,"dock" , "bottom");
    toolbar_173_9_$1["focusableContainer"] = false;
    toolbar_173_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.EMBEDDED_FOOTER.getSkin());
    var layout_HBox_177_13_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_177_13_$1,"pack" , "end");
    AS3.setBindable(toolbar_173_9_$1,"layout" , layout_HBox_177_13_$1);
    var ui_IconDisplayField_180_13_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_180_13_$1.itemId = "helpIcon";
    AS3.setBindable(ui_IconDisplayField_180_13_$1,"iconPosition" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.components.IconDisplayField.ICON_POSITION_AFTER_VALUE));
    AS3.setBindable(ui_IconDisplayField_180_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    var ui_StatefulQuickTip_184_17_$1/*:com.coremedia.ui.components.StatefulQuickTip*/ =AS3.cast(com.coremedia.ui.components.StatefulQuickTip,{});
    ui_StatefulQuickTip_184_17_$1.text = config.quickTipText;
    AS3.setBindable(ui_StatefulQuickTip_184_17_$1,"width" , 200);
    AS3.setBindable(ui_IconDisplayField_180_13_$1,"tooltip" , ui_StatefulQuickTip_184_17_$1);
    toolbar_173_9_$1.items = [ui_IconDisplayField_180_13_$1];
    editor_CollapsiblePanel_98_5_$1.dockedItems = [toolbar_173_9_$1];
    var layout_VBox_193_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_193_9_$1,"align" , "stretch");
    AS3.setBindable(editor_CollapsiblePanel_98_5_$1,"layout" , layout_VBox_193_9_$1);
    config_$1.items = [collab_UserChosenContentGridPanel_85_5_$1, editor_CollapsiblePanel_98_5_$1];
    var layout_VBox_199_5_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_199_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_199_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Dcsc(config_$1);
  }/*

    /**
     * The content items to be published, chosen by the user.
     * /
    [Bindable]
    public var selectedContentsValueExpression:ValueExpression;

    /**
     * ValueExpression for the workflow set (consisting of user-chosen contents and possibly extended contents)
     * /
    [Bindable]
    public var workflowSetValueExpression:ValueExpression;

    /**
     * ValueExpression for the name of the workflow process that is the context for the workflow set.
     * /
    [Bindable]
    public var processNameValueExpression:ValueExpression;

    /**
     * Boolean ValueExpression to indicate if error issues exist.
     * /
    [Bindable]
    public var errorIssuesExistValueExpression:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * The empty text, displayed in the content panel when an empty workflow is started.
     * /
    public var emptyText:String;

    /**
     * The quicktip text, displayed below the expanded dependent content panel.
     * /
    public var quickTipText:String;

    [Bindable]
    public var expandFolders:Boolean = false;

    /** whether to hide the issues button next to the user chosen content * /
    [Bindable]
    public var hideIssuesButton:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.workflowSetPanel",
      constructor: WorkflowSetPanel$,
      super$Dcsc: function() {
        com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanelBase.prototype.constructor.apply(this, arguments);
      },
      emptyText: null,
      quickTipText: null,
      config: {
        selectedContentsValueExpression: null,
        workflowSetValueExpression: null,
        processNameValueExpression: null,
        errorIssuesExistValueExpression: null,
        forceReadOnlyValueExpression: null,
        expandFolders: false,
        hideIssuesButton: false
      },
      statics: {
        USER_CHOSEN_CONTENTS_ITEM_ID: "userChosenContentsItemId",
        EXTENDED_CONTENTS_ITEM_ID: "extendedContentsItemId",
        EXTENDED_CONTENTS_COLLAPSIBLE_ITEM_ID: "extendedContentsCollapsibleItemId",
        SELECTED_ITEMS_VARIABLE_NAME: "selectedItems"
      },
      requires: [
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanelBase",
        "com.coremedia.cms.editor.sdk.actions.ApproveAction",
        "com.coremedia.cms.editor.sdk.actions.CheckInAction",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.RevertAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.cms.editor.sdk.components.ContentGridPanel",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.StatefulQuickTip",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanel"]
    };
});
