Ext.define("com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper", function(InboxDetailPanelWrapper) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.SwitchingContainer;
import ext.toolbar.Spacer;
import ext.button.Button;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import ext.form.Label;
import com.coremedia.ui.components.MenuIconButton;
import ext.menu.Menu;
import ext.menu.Item;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 A wrapper for a publication or translation workflow detail panel with a
 back-to-workflow-list toolbar button at the top and some buttons (accept, apply, cancel)
 at the end. The detail panel is inserted in the base class.
 * /
public class InboxDetailPanelWrapper extends InboxDetailPanelWrapperBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;

    import ext.util.Format;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.inboxDetailPanelWrapper";

    public static const SWITCHING_CONTAINER_ITEM_ID:String = "switchingContainerItemId";

    public static const CHANGE_SET_ITEM_ID:String = "changeSetItemId";

    public static const STATE_PANEL_ITEM_ID:String = "statePanel";

    public static const ACCEPT_BUTTON_ITEM_ID:String = "acceptButtonItemId";

    public static const APPLY_BUTTON_ITEM_ID:String = "applyButtonItemId";

    public static const CANCEL_BUTTON_ITEM_ID:String = "cancelButtonItemId";

    public static const BACK_BUTTON_ITEM_ID:String = "backButtonItemId";

    public static const SUBJECT_LABEL_ITEM_ID:String = "subjectLabelItemId";

    public static const SUBJECT_PROPERTY_PATH:String = "containingProcess.properties.subject";

    public static const TYPE_PROPERTY_PATH:String = "containingProcess.definition.name";

    public*/function InboxDetailPanelWrapper$(config/*:InboxDetailPanelWrapper = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapperBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapperBase,{});
    var defaults_$1/*:InboxDetailPanelWrapper*/ =AS3.cast(InboxDetailPanelWrapper,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "fit");
    var ui_SwitchingContainer_59_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_59_5_$1.itemId =net.jangaroo.ext.Exml.asString( InboxDetailPanelWrapper.SWITCHING_CONTAINER_ITEM_ID);
    AS3.setBindable(ui_SwitchingContainer_59_5_$1,"activeItemValueExpression" , AS3.getBindable(config,"taskValueExpression").extendBy(InboxDetailPanelWrapper.TYPE_PROPERTY_PATH));
    var collab_WorkflowForm_63_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowForm*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowForm,{});
    AS3.setBindable(collab_WorkflowForm_63_9_$1,"bindToTask" , AS3.getBindable(config,"taskValueExpression"));
    AS3.setBindable(collab_WorkflowForm_63_9_$1,"bindTo" , AS3.getBindable(config,"taskValueExpression").extendBy('containingProcess'));
    AS3.setBindable(collab_WorkflowForm_63_9_$1,"forceReadOnlyValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getReadOnly")));
    var collab_TaskWarningPanel_67_13_$1/*: com.coremedia.cms.editor.controlroom.workflow.TaskWarningPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.TaskWarningPanel,{});
    AS3.setBindable(collab_TaskWarningPanel_67_13_$1,"taskValueExpression" , AS3.getBindable(config,"taskValueExpression"));
    collab_TaskWarningPanel_67_13_$1.itemId = "taskWarningPanel";
    AS3.setBindable(collab_WorkflowForm_63_9_$1,"prefixItems" , [collab_TaskWarningPanel_67_13_$1]);
    ui_SwitchingContainer_59_5_$1["defaultType"] = collab_WorkflowForm_63_9_$1['xtype'];
    delete collab_WorkflowForm_63_9_$1['xtype'];
    delete collab_WorkflowForm_63_9_$1['xclass'];
    ui_SwitchingContainer_59_5_$1.defaults = collab_WorkflowForm_63_9_$1;
    config_$1.items = [ui_SwitchingContainer_59_5_$1];
    var tbSpacer_76_5_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_76_5_$1,"height" , 26);
    AS3.setBindable(tbSpacer_76_5_$1,"width" , 0);
    var button_78_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_78_5_$1.itemId =net.jangaroo.ext.Exml.asString( InboxDetailPanelWrapper.ACCEPT_BUTTON_ITEM_ID);
    button_78_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_78_5_$1,"scale" , "small");
    AS3.setBindable(button_78_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanelWrapper_acceptButton_label')));
    AS3.setBindable(button_78_5_$1,"handler" ,AS3.bind( this,"acceptWorkflow"));
    var ui_BindVisibilityPlugin_84_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_84_9_$1.bindTo = this.getOfferedStateValueExpression();
    button_78_5_$1.plugins = [ui_BindVisibilityPlugin_84_9_$1];
    var button_87_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_87_5_$1.itemId =net.jangaroo.ext.Exml.asString( InboxDetailPanelWrapper.APPLY_BUTTON_ITEM_ID);
    button_87_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_87_5_$1,"scale" , "small");
    AS3.setBindable(button_87_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanelWrapper_applyButton_label')));
    AS3.setBindable(button_87_5_$1,"handler" ,AS3.bind( this,"completeTask"));
    var ui_BindVisibilityPlugin_93_9_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_93_9_$1.bindTo = this.getAcceptedStateValueExpression();
    var ui_BindPropertyPlugin_94_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_94_9_$1.bindTo = this.getApplyButtonDisabledValueExpression();
    ui_BindPropertyPlugin_94_9_$1.componentProperty = "disabled";
    button_87_5_$1.plugins = [ui_BindVisibilityPlugin_93_9_$1, ui_BindPropertyPlugin_94_9_$1];
    var button_98_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_98_5_$1.itemId =net.jangaroo.ext.Exml.asString( InboxDetailPanelWrapper.CANCEL_BUTTON_ITEM_ID);
    button_98_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_98_5_$1,"scale" , "small");
    AS3.setBindable(button_98_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanelWrapper_cancelButton_label')));
    AS3.setBindable(button_98_5_$1,"handler" ,AS3.bind( this,"cancelTask"));
    var ui_BindVisibilityPlugin_104_9_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_104_9_$1.bindTo = this.getMayCancelValueExpression();
    button_98_5_$1.plugins = [ui_BindVisibilityPlugin_104_9_$1];
    config_$1.buttons = [tbSpacer_76_5_$1, button_78_5_$1, button_87_5_$1, button_98_5_$1];
    var toolbar_110_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    AS3.setBindable(toolbar_110_5_$1,"height" , 29);
    var ui_IconButton_112_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_112_9_$1.itemId =net.jangaroo.ext.Exml.asString( InboxDetailPanelWrapper.BACK_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_112_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'collapsing_arrow_left')));
    AS3.setBindable(ui_IconButton_112_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_back_to_list_tooltip'));
    AS3.setBindable(ui_IconButton_112_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_back_to_list_tooltip')));
    AS3.setBindable(ui_IconButton_112_9_$1,"handler" , AS3.getBindable(config,"backToListHandler"));
    var label_117_9_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    label_117_9_$1.itemId =net.jangaroo.ext.Exml.asString( InboxDetailPanelWrapper.SUBJECT_LABEL_ITEM_ID);
    var ui_BindPropertyPlugin_119_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_119_13_$1.componentProperty = "text";
    ui_BindPropertyPlugin_119_13_$1.transformer = function(value){return Ext.util.Format.ellipsis(value, 45, false);};
    ui_BindPropertyPlugin_119_13_$1.bindTo = AS3.getBindable(config,"taskValueExpression").extendBy(InboxDetailPanelWrapper.SUBJECT_PROPERTY_PATH);
    label_117_9_$1.plugins = [ui_BindPropertyPlugin_119_13_$1];
    var tbSpacer_125_9_$1/*: ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    tbSpacer_125_9_$1.flex = 1.0;
    var ui_MenuIconButton_127_9_$1/*:com.coremedia.ui.components.MenuIconButton*/ =AS3.cast(com.coremedia.ui.components.MenuIconButton,{});
    ui_MenuIconButton_127_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    AS3.setBindable(ui_MenuIconButton_127_9_$1,"arrowVisible" , false);
    AS3.setBindable(ui_MenuIconButton_127_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons','arrow_down')));
    AS3.setBindable(ui_MenuIconButton_127_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_show_actions_tooltip')));
    AS3.setBindable(ui_MenuIconButton_127_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_show_actions_tooltip'));
    var ui_BindVisibilityPlugin_133_13_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_133_13_$1.bindTo = this.getMayAbortValueExpression();
    ui_MenuIconButton_127_9_$1.plugins = [ui_BindVisibilityPlugin_133_13_$1];
    var menu_136_13_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var menuItem_138_17_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    AS3.setBindable(menuItem_138_17_$1,"handler" ,AS3.bind( this,"abortWorkflow"));
    AS3.setBindable(menuItem_138_17_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowInfoWindow_abortButton_label')));
    AS3.setBindable(menuItem_138_17_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'abort_workflow')));
    menu_136_13_$1.items = [menuItem_138_17_$1];
    ui_MenuIconButton_127_9_$1.menu = menu_136_13_$1;
    toolbar_110_5_$1.items = [ui_IconButton_112_9_$1, label_117_9_$1, tbSpacer_125_9_$1, ui_MenuIconButton_127_9_$1];
    config_$1.tbar = toolbar_110_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$499p(config_$1);
  }/*

    [Bindable]
    public var taskValueExpression:ValueExpression;

    [Bindable]
    public var backToListHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapperBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.inboxDetailPanelWrapper",
      constructor: InboxDetailPanelWrapper$,
      super$499p: function() {
        com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapperBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        taskValueExpression: null,
        backToListHandler: null
      },
      statics: {
        SWITCHING_CONTAINER_ITEM_ID: "switchingContainerItemId",
        CHANGE_SET_ITEM_ID: "changeSetItemId",
        STATE_PANEL_ITEM_ID: "statePanel",
        ACCEPT_BUTTON_ITEM_ID: "acceptButtonItemId",
        APPLY_BUTTON_ITEM_ID: "applyButtonItemId",
        CANCEL_BUTTON_ITEM_ID: "cancelButtonItemId",
        BACK_BUTTON_ITEM_ID: "backButtonItemId",
        SUBJECT_LABEL_ITEM_ID: "subjectLabelItemId",
        SUBJECT_PROPERTY_PATH: "containingProcess.properties.subject",
        TYPE_PROPERTY_PATH: "containingProcess.definition.name"
      },
      requires: [
        "Ext.button.Button",
        "Ext.form.Label",
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.toolbar.Spacer",
        "Ext.toolbar.Toolbar",
        "Ext.util.Format",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapperBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.MenuIconButton",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.TaskWarningPanel",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowForm"
      ]
    };
});
