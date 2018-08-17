Ext.define("com.coremedia.cms.editor.controlroom.ControlRoomPlugin", function(ControlRoomPlugin) {/*package com.coremedia.cms.editor.controlroom{
import com.coremedia.cms.editor.controlroom.*;
import ext.plugin.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.desktop.EditorMainView;
import com.coremedia.ui.plugins.AddArrayItemsPlugin;
import com.coremedia.cms.editor.controlroom.actions.ToggleControlRoomAction;
import com.coremedia.ui.plugins.NestedRulesPlugin;
import com.coremedia.cms.editor.sdk.desktop.MainNavigationToolbar;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.Component;
import com.coremedia.cms.editor.sdk.desktop.WorkArea;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPlugin;
import com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType;
import com.coremedia.cms.editor.controlroom.project.components.ProjectTab;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu;
import ext.menu.Item;
import com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectAction;
import com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomAction;
import com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar;
import com.coremedia.cms.editor.sdk.desktop.ActionsToolbar;
import com.coremedia.cms.editor.controlroom.workflow.components.GlobalStartPublicationButton;
import ext.toolbar.Separator;
import com.coremedia.cms.editor.todo.TodoStudioPlugin;
import com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin;
import com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm;
import com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm;
import com.coremedia.cms.editor.configuration.CopyResourceBundleProperties;
import com.coremedia.cms.editor.configuration.RegisterRestResource;
import com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPlugin;
import com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetState;
import com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetType;
import com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelPlugin;
import com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut;
import com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin;
import com.coremedia.cms.editor.controlroom.notification.components.ProjectNotificationDetails;
import com.coremedia.cms.editor.controlroom.notification.components.PublicationWorkflowNotificationDetails;
import com.coremedia.cms.editor.controlroom.notification.components.TranslationWorkflowNotificationDetails;

    [ResourceBundle('com.coremedia.cms.editor.ProcessDefinitions')]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.workflow.publication.PublicationProcessDefinitions')]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications')]
    [ResourceBundle('com.coremedia.cms.editor.notification.Notifications')]
    [ResourceBundle('com.coremedia.cms.editor.sdk.shortcuts.Shortcut')]
public class ControlRoomPlugin extends ControlRoomPluginBase{

    import com.coremedia.cms.editor.controlroom.project.rest.Project;
    import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectImpl;
    import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl;
    import com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils;
    import com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants;
    import com.coremedia.cms.editor.sdk.desktop.MainNavigationToolbar;
    import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu;
    import com.coremedia.collaboration.controlroom.rest.CapListImpl;
    import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;

    import mx.resources.ResourceManager;

    public static const CONTROL_ROOM_GLOBAL_PUBLICATION_BUTTON_ID:String = "control-room-global-publication-button";

    /**
     * The item ID of the menu item for showing the project of a tab (if the tab is a ProjectTab) in the control room.
     * /
    public static const SHOW_PROJECT_IN_CONTROL_ROOM_MENU_ITEM_ID:String = "showProjectInControlRoomMenuItemId";

    /**
     * The item ID of the menu item for renaming the project of a tab (if the tab is a ProjectTab) in the control room.
     * /
    public static const RENAME_PROJECT_MENU_ITEM_ID:String = "renameProjectMenuItemId";

    [ExtConfig]
    public var filterWfRequestBatchSize:int;

    public*/function ControlRoomPlugin$(config/*:ControlRoomPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.ControlRoomPluginBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ControlRoomPluginBase,{});
    var defaults_$1/*:ControlRoomPlugin*/ =AS3.cast(ControlRoomPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_EditorMainView_55_5_$1/*:com.coremedia.cms.editor.sdk.desktop.EditorMainView*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.EditorMainView,{});
    var ui_AddArrayItemsPlugin_57_9_$1/*:com.coremedia.ui.plugins.AddArrayItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddArrayItemsPlugin,{});
    AS3.setBindable(ui_AddArrayItemsPlugin_57_9_$1,"arrayProperty" , "actionList");
    var collab_ToggleControlRoomAction_59_13_$1/*:com.coremedia.cms.editor.controlroom.actions.ToggleControlRoomAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ToggleControlRoomAction,{});
    AS3.setBindable(ui_AddArrayItemsPlugin_57_9_$1,"items" , [new com.coremedia.cms.editor.controlroom.actions.ToggleControlRoomAction(collab_ToggleControlRoomAction_59_13_$1)]);
    var ui_NestedRulesPlugin_62_9_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var editor_MainNavigationToolbar_64_13_$1/*:com.coremedia.cms.editor.sdk.desktop.MainNavigationToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.MainNavigationToolbar,{});
    var ui_AddItemsPlugin_66_17_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var collab_ControlRoomButton_68_21_$1/*: com.coremedia.cms.editor.controlroom.ControlRoomButton*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ControlRoomButton,{});
    collab_ControlRoomButton_68_21_$1.itemId = "controlRoomButton";
    AS3.setBindable(ui_AddItemsPlugin_66_17_$1,"items" , [collab_ControlRoomButton_68_21_$1]);
    var component_71_21_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_71_21_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.MainNavigationToolbar.LIBRARY_BUTTON_ITEM_ID);
    AS3.setBindable(ui_AddItemsPlugin_66_17_$1,"after" , [component_71_21_$1]);
    editor_MainNavigationToolbar_64_13_$1.plugins = [ui_AddItemsPlugin_66_17_$1];
    ui_NestedRulesPlugin_62_9_$1.rules = [editor_MainNavigationToolbar_64_13_$1];
    editor_EditorMainView_55_5_$1.plugins = [ui_AddArrayItemsPlugin_57_9_$1, ui_NestedRulesPlugin_62_9_$1];
    var editor_WorkArea_81_5_$1/*:com.coremedia.cms.editor.sdk.desktop.WorkArea*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkArea,{});
    var plugin_AbstractPlugin_83_9_$1/*: ext.plugin.AbstractPlugin*/ =AS3.cast(Ext.plugin.Abstract,{});
    plugin_AbstractPlugin_83_9_$1["init"] =AS3.bind( this,"initPublicationLockingListener");
    var editor_WorkAreaTabTypesPlugin_84_9_$1/*:com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPlugin,{});
    var editor_ComponentBasedEntityWorkAreaTabType_86_13_$1/*:com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType,{});
    AS3.setBindable(editor_ComponentBasedEntityWorkAreaTabType_86_13_$1,"entityProperty" , "project");
    AS3.setBindable(editor_ComponentBasedEntityWorkAreaTabType_86_13_$1,"entityType" , com.coremedia.cms.editor.controlroom.project.rest.Project);
    var collab_ProjectTab_89_17_$1/*:com.coremedia.cms.editor.controlroom.project.components.ProjectTab*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectTab,{});
    AS3.setBindable(editor_ComponentBasedEntityWorkAreaTabType_86_13_$1,"tabComponent" , collab_ProjectTab_89_17_$1);
    AS3.setBindable(editor_WorkAreaTabTypesPlugin_84_9_$1,"tabTypes" , [new com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType(editor_ComponentBasedEntityWorkAreaTabType_86_13_$1)]);
    editor_WorkArea_81_5_$1.plugins = [plugin_AbstractPlugin_83_9_$1, editor_WorkAreaTabTypesPlugin_84_9_$1];
    var editor_WorkAreaTabProxiesContextMenu_97_5_$1/*:com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu,{});
    var ui_AddItemsPlugin_99_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var menuItem_101_13_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_101_13_$1.itemId =net.jangaroo.ext.Exml.asString( ControlRoomPlugin.RENAME_PROJECT_MENU_ITEM_ID);
    var collab_RenameTabProjectAction_103_17_$1/*:com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectAction,{});
    AS3.setBindable(collab_RenameTabProjectAction_103_17_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_renameTabProjectAction_menu_text')));
    menuItem_101_13_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectAction(collab_RenameTabProjectAction_103_17_$1);
    var menuItem_107_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_107_13_$1.itemId =net.jangaroo.ext.Exml.asString( ControlRoomPlugin.SHOW_PROJECT_IN_CONTROL_ROOM_MENU_ITEM_ID);
    var collab_ShowTabProjectInControlRoomAction_109_17_$1/*:com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomAction,{});
    AS3.setBindable(collab_ShowTabProjectInControlRoomAction_109_17_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_showInControlRoom_text')));
    menuItem_107_13_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomAction(collab_ShowTabProjectInControlRoomAction_109_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_99_9_$1,"items" , [menuItem_101_13_$1, menuItem_107_13_$1]);
    var component_115_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_115_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu.RENAME_CONTENT_OF_ACTIVE_TAB_ITEM_ID);
    AS3.setBindable(ui_AddItemsPlugin_99_9_$1,"after" , [component_115_13_$1]);
    editor_WorkAreaTabProxiesContextMenu_97_5_$1.plugins = [ui_AddItemsPlugin_99_9_$1];
    var editor_DocumentFormToolbar_121_5_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar,{});
    var plugin_AbstractPlugin_123_9_$1/*: ext.plugin.AbstractPlugin*/ =AS3.cast(Ext.plugin.Abstract,{});
    plugin_AbstractPlugin_123_9_$1["init"] =AS3.bind( this,"initCheckedOutStatusLabelClickHandling");
    editor_DocumentFormToolbar_121_5_$1.plugins = [plugin_AbstractPlugin_123_9_$1];
    var editor_ActionsToolbar_127_5_$1/*:com.coremedia.cms.editor.sdk.desktop.ActionsToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ActionsToolbar,{});
    var ui_AddItemsPlugin_129_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var collab_GlobalStartPublicationButton_131_13_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.GlobalStartPublicationButton*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.GlobalStartPublicationButton,{});
    collab_GlobalStartPublicationButton_131_13_$1.itemId =net.jangaroo.ext.Exml.asString( ControlRoomPlugin.CONTROL_ROOM_GLOBAL_PUBLICATION_BUTTON_ID);
    AS3.setBindable(collab_GlobalStartPublicationButton_131_13_$1,"disabled" , true);
    var tbSeparator_133_13_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    AS3.setBindable(tbSeparator_133_13_$1,"height" , 1);
    AS3.setBindable(ui_AddItemsPlugin_129_9_$1,"items" , [collab_GlobalStartPublicationButton_131_13_$1, tbSeparator_133_13_$1]);
    var component_136_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_136_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.WITHDRAW_BUTTON_ITEM_ID);
    AS3.setBindable(ui_AddItemsPlugin_129_9_$1,"before" , [component_136_13_$1]);
    editor_ActionsToolbar_127_5_$1.plugins = [ui_AddItemsPlugin_129_9_$1];
    AS3.setBindable(config_$1,"rules" , [editor_EditorMainView_55_5_$1, editor_WorkArea_81_5_$1, editor_WorkAreaTabProxiesContextMenu_97_5_$1, editor_DocumentFormToolbar_121_5_$1, editor_ActionsToolbar_127_5_$1]);
    var todo_TodoStudioPlugin_144_5_$1/*:com.coremedia.cms.editor.todo.TodoStudioPlugin*/ =AS3.cast(com.coremedia.cms.editor.todo.TodoStudioPlugin,{});
    var collab_AddWorkflowPlugin_146_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin,{});
    AS3.setBindable(collab_AddWorkflowPlugin_146_5_$1,"processDefinitionName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.TWO_STEP_PUBLICATION_WORKFLOW_TYPE));
    AS3.setBindable(collab_AddWorkflowPlugin_146_5_$1,"processCategory" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.PUBLICATION_PROCESS_CATEGORY));
    AS3.setBindable(collab_AddWorkflowPlugin_146_5_$1,"listToolbarButtons" , com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.getPublicationToolbarButtons());
    var collab_DefaultPublicationWorkflowDetailForm_150_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm,{});
    AS3.setBindable(collab_AddWorkflowPlugin_146_5_$1,"inboxPanel" , collab_DefaultPublicationWorkflowDetailForm_150_9_$1);
    var collab_DefaultPublicationWorkflowDetailForm_154_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm,{});
    AS3.setBindable(collab_AddWorkflowPlugin_146_5_$1,"pendingPanel" , collab_DefaultPublicationWorkflowDetailForm_154_9_$1);
    var collab_DefaultPublicationWorkflowInfoForm_158_9_$1/*:com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm,{});
    AS3.setBindable(collab_AddWorkflowPlugin_146_5_$1,"finishedPanel" , collab_DefaultPublicationWorkflowInfoForm_158_9_$1);
    var collab_AddWorkflowPlugin_162_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin,{});
    AS3.setBindable(collab_AddWorkflowPlugin_162_5_$1,"processDefinitionName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.SIMPLE_PUBLICATION_WORKFLOW_TYPE));
    AS3.setBindable(collab_AddWorkflowPlugin_162_5_$1,"processCategory" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.PUBLICATION_PROCESS_CATEGORY));
    AS3.setBindable(collab_AddWorkflowPlugin_162_5_$1,"listToolbarButtons" , com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.getPublicationToolbarButtons());
    var collab_DefaultPublicationWorkflowDetailForm_167_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm,{});
    AS3.setBindable(collab_AddWorkflowPlugin_162_5_$1,"inboxPanel" , collab_DefaultPublicationWorkflowDetailForm_167_9_$1);
    var collab_DefaultPublicationWorkflowDetailForm_171_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm,{});
    AS3.setBindable(collab_AddWorkflowPlugin_162_5_$1,"pendingPanel" , collab_DefaultPublicationWorkflowDetailForm_171_9_$1);
    var collab_DefaultPublicationWorkflowInfoForm_175_9_$1/*: com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm,{});
    AS3.setBindable(collab_AddWorkflowPlugin_162_5_$1,"finishedPanel" , collab_DefaultPublicationWorkflowInfoForm_175_9_$1);
    var editor_CopyResourceBundleProperties_179_5_$1/*:com.coremedia.cms.editor.configuration.CopyResourceBundleProperties*/ =AS3.cast(com.coremedia.cms.editor.configuration.CopyResourceBundleProperties,{});
    AS3.setBindable(editor_CopyResourceBundleProperties_179_5_$1,"destination" , mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.ProcessDefinitions'));
    AS3.setBindable(editor_CopyResourceBundleProperties_179_5_$1,"source" , mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.controlroom.workflow.publication.PublicationProcessDefinitions'));
    var editor_RegisterRestResource_183_5_$1/*:com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_183_5_$1,"beanClass" , com.coremedia.collaboration.controlroom.rest.CapListImpl);
    var editor_RegisterRestResource_184_5_$1/*: com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_184_5_$1,"beanClass" , com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl);
    var editor_RegisterRestResource_185_5_$1/*: com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_185_5_$1,"beanClass" , com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectImpl);
    var editor_RegisterRestResource_186_5_$1/*: com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_186_5_$1,"beanClass" , com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl);
    var editor_ConfigureDashboardPlugin_188_5_$1/*:com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPlugin,{});
    var collab_ProjectsTodosWidgetState_190_9_$1/*:com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetState*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetState,{});
    collab_ProjectsTodosWidgetState_190_9_$1.rowspan = 2.0;
    AS3.setBindable(editor_ConfigureDashboardPlugin_188_5_$1,"widgets" , [new com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetState(collab_ProjectsTodosWidgetState_190_9_$1)]);
    var collab_ProjectsTodosWidgetType_193_9_$1/*:com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetType*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetType,{});
    AS3.setBindable(editor_ConfigureDashboardPlugin_188_5_$1,"types" , [new com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetType(collab_ProjectsTodosWidgetType_193_9_$1)]);
    var collab_ControlRoomLibraryPlugin_197_5_$1/*: com.coremedia.cms.editor.controlroom.ControlRoomLibraryPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ControlRoomLibraryPlugin,{});
    var editor_SidePanelPlugin_199_5_$1/*:com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelPlugin,{});
    var collab_ControlRoom_201_9_$1/*: com.coremedia.cms.editor.controlroom.ControlRoom*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ControlRoom,{});
    collab_ControlRoom_201_9_$1["id"] = com.coremedia.cms.editor.controlroom.ControlRoom.CONTROL_ROOM_ID;
    editor_SidePanelPlugin_199_5_$1.components = [collab_ControlRoom_201_9_$1];
    var editor_AddKeyboardShortcut_205_5_$1/*:com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_205_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_toggleControlRoom_key'));
    editor_AddKeyboardShortcut_205_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_toggleControlRoom_description'));
    editor_AddKeyboardShortcut_205_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.actions.ToggleControlRoomAction.ACTION_ID);
    editor_AddKeyboardShortcut_205_5_$1.defaultEventAction = "stopEvent";
    var editor_CopyResourceBundleProperties_211_5_$1/*: com.coremedia.cms.editor.configuration.CopyResourceBundleProperties*/ =AS3.cast(com.coremedia.cms.editor.configuration.CopyResourceBundleProperties,{});
    AS3.setBindable(editor_CopyResourceBundleProperties_211_5_$1,"destination" , mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.notification.Notifications'));
    AS3.setBindable(editor_CopyResourceBundleProperties_211_5_$1,"source" , mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications'));
    var notifications_RegisterNotificationDetailsPlugin_215_5_$1/*:com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin*/ =AS3.cast(com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin,{});
    AS3.setBindable(notifications_RegisterNotificationDetailsPlugin_215_5_$1,"notificationType" , "project");
    var collab_ProjectNotificationDetails_217_9_$1/*:com.coremedia.cms.editor.controlroom.notification.components.ProjectNotificationDetails*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.components.ProjectNotificationDetails,{});
    AS3.setBindable(notifications_RegisterNotificationDetailsPlugin_215_5_$1,"notificationDetailsComponentConfig" , collab_ProjectNotificationDetails_217_9_$1);
    var notifications_RegisterNotificationDetailsPlugin_221_5_$1/*: com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin*/ =AS3.cast(com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin,{});
    AS3.setBindable(notifications_RegisterNotificationDetailsPlugin_221_5_$1,"notificationType" , "publicationWorkflow");
    var collab_PublicationWorkflowNotificationDetails_223_9_$1/*:com.coremedia.cms.editor.controlroom.notification.components.PublicationWorkflowNotificationDetails*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.components.PublicationWorkflowNotificationDetails,{});
    AS3.setBindable(notifications_RegisterNotificationDetailsPlugin_221_5_$1,"notificationDetailsComponentConfig" , collab_PublicationWorkflowNotificationDetails_223_9_$1);
    var notifications_RegisterNotificationDetailsPlugin_227_5_$1/*: com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin*/ =AS3.cast(com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin,{});
    AS3.setBindable(notifications_RegisterNotificationDetailsPlugin_227_5_$1,"notificationType" , "translationWorkflow");
    var collab_TranslationWorkflowNotificationDetails_229_9_$1/*:com.coremedia.cms.editor.controlroom.notification.components.TranslationWorkflowNotificationDetails*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.components.TranslationWorkflowNotificationDetails,{});
    AS3.setBindable(notifications_RegisterNotificationDetailsPlugin_227_5_$1,"notificationDetailsComponentConfig" , collab_TranslationWorkflowNotificationDetails_229_9_$1);
    AS3.setBindable(config_$1,"configuration" , [new com.coremedia.cms.editor.todo.TodoStudioPlugin(todo_TodoStudioPlugin_144_5_$1), new com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin(collab_AddWorkflowPlugin_146_5_$1), new com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin(collab_AddWorkflowPlugin_162_5_$1), new com.coremedia.cms.editor.configuration.CopyResourceBundleProperties(editor_CopyResourceBundleProperties_179_5_$1), new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_183_5_$1), new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_184_5_$1), new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_185_5_$1), new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_186_5_$1), new com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPlugin(editor_ConfigureDashboardPlugin_188_5_$1), new com.coremedia.cms.editor.controlroom.ControlRoomLibraryPlugin(collab_ControlRoomLibraryPlugin_197_5_$1), new com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelPlugin(editor_SidePanelPlugin_199_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_205_5_$1), new com.coremedia.cms.editor.configuration.CopyResourceBundleProperties(editor_CopyResourceBundleProperties_211_5_$1), new com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin(notifications_RegisterNotificationDetailsPlugin_215_5_$1), new com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin(notifications_RegisterNotificationDetailsPlugin_221_5_$1), new com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin(notifications_RegisterNotificationDetailsPlugin_227_5_$1)]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$XSBF(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.ControlRoomPluginBase",
      filterWfRequestBatchSize: 0,
      constructor: ControlRoomPlugin$,
      super$XSBF: function() {
        com.coremedia.cms.editor.controlroom.ControlRoomPluginBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CONTROL_ROOM_GLOBAL_PUBLICATION_BUTTON_ID: "control-room-global-publication-button",
        SHOW_PROJECT_IN_CONTROL_ROOM_MENU_ITEM_ID: "showProjectInControlRoomMenuItemId",
        RENAME_PROJECT_MENU_ITEM_ID: "renameProjectMenuItemId"
      },
      requires: [
        "Ext.Component",
        "Ext.menu.Item",
        "Ext.plugin.Abstract",
        "Ext.toolbar.Separator",
        "com.coremedia.cms.editor.ProcessDefinitions_properties",
        "com.coremedia.cms.editor.configuration.CopyResourceBundleProperties",
        "com.coremedia.cms.editor.configuration.RegisterRestResource",
        "com.coremedia.cms.editor.controlroom.ControlRoomPluginBase",
        "com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications_properties",
        "com.coremedia.cms.editor.controlroom.workflow.publication.PublicationProcessDefinitions_properties",
        "com.coremedia.cms.editor.notification.Notifications_properties",
        "com.coremedia.cms.editor.notification.RegisterNotificationDetailsPlugin",
        "com.coremedia.cms.editor.sdk.dashboard.ConfigureDashboardPlugin",
        "com.coremedia.cms.editor.sdk.desktop.ActionsToolbar",
        "com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.EditorMainView",
        "com.coremedia.cms.editor.sdk.desktop.MainNavigationToolbar",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPlugin",
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelPlugin",
        "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar",
        "com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut",
        "com.coremedia.cms.editor.sdk.shortcuts.Shortcut_properties",
        "com.coremedia.cms.editor.todo.TodoStudioPlugin",
        "com.coremedia.collaboration.controlroom.rest.CapListImpl",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl",
        "com.coremedia.ui.PluginRulesBase",
        "com.coremedia.ui.plugins.AddArrayItemsPlugin",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.ControlRoom",
        "com.coremedia.cms.editor.controlroom.ControlRoomButton",
        "com.coremedia.cms.editor.controlroom.ControlRoomLibraryPlugin",
        "com.coremedia.cms.editor.controlroom.actions.ToggleControlRoomAction",
        "com.coremedia.cms.editor.controlroom.notification.components.ProjectNotificationDetails",
        "com.coremedia.cms.editor.controlroom.notification.components.PublicationWorkflowNotificationDetails",
        "com.coremedia.cms.editor.controlroom.notification.components.TranslationWorkflowNotificationDetails",
        "com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectAction",
        "com.coremedia.cms.editor.controlroom.project.actions.ShowTabProjectInControlRoomAction",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectTab",
        "com.coremedia.cms.editor.controlroom.project.rest.Project",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectImpl",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl",
        "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetState",
        "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetType",
        "com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils",
        "com.coremedia.cms.editor.controlroom.workflow.components.GlobalStartPublicationButton",
        "com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowDetailForm",
        "com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm",
        "com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants"
      ]
    };
});
