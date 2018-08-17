Ext.define("com.coremedia.cms.editor.controlroom.EditedContentGridPanel", function(EditedContentGridPanel) {/*package com.coremedia.cms.editor.controlroom{
import com.coremedia.cms.editor.controlroom.*;
import net.jangaroo.ext.Exml;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction;
import ext.toolbar.Spacer;
import com.coremedia.ui.components.MenuIconButton;
import com.coremedia.ui.plugins.BindVisibilityPlugin;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class EditedContentGridPanel extends EditedContentGridPanelBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.editedContentGridPanel";

    public*/function EditedContentGridPanel$(config/*:EditedContentGridPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.EditedContentGridPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.EditedContentGridPanelBase,{});
    var defaults_$1/*:EditedContentGridPanel*/ =AS3.cast(EditedContentGridPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoom_MyEditedContent_title'));
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoom_MyEditedContent_title') + ' ' + this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_suffix'));
    AS3.setBindable(config_$1,"bindTo" , this.getMyEditedContentsInReverseOrderExpression());
    AS3.setBindable(config_$1,"lazy" , true);
    config_$1.defaultFocus = ":focusable";
    AS3.setBindable(config_$1,"hideEmptyText" , true);
    var toolbar_32_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_32_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoom_MyEditedContentToolbar_label'));
    var ui_IconButton_34_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_34_9_$1.itemId = "createProjectToolbar";
    var collab_CreateProjectFromMyEditedContentsAction_36_13_$1/*:com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction,{});
    AS3.setBindable(collab_CreateProjectFromMyEditedContentsAction_36_13_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.ALL_OR_SELECTED_ITEMS_VARIABLE_NAME));
    AS3.setBindable(collab_CreateProjectFromMyEditedContentsAction_36_13_$1,"mode" , "selected");
    ui_IconButton_34_9_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction(collab_CreateProjectFromMyEditedContentsAction_36_13_$1);
    var ui_IconButton_40_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_40_9_$1.itemId = "startPublicationToolbar";
    AS3.setBindable(ui_IconButton_40_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_start_publication_tooltip')));
    AS3.setBindable(ui_IconButton_40_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_start_publication_tooltip'));
    var collab_ShowStartPublicationWorkflowWindowAction_44_13_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_44_13_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.ALL_OR_SELECTED_ITEMS_VARIABLE_NAME));
    ui_IconButton_40_9_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction(collab_ShowStartPublicationWorkflowWindowAction_44_13_$1);
    var ui_IconButton_48_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_48_9_$1.itemId = "startTranslationToolbar";
    AS3.setBindable(ui_IconButton_48_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_start_translation_tooltip')));
    AS3.setBindable(ui_IconButton_48_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_start_translation_tooltip'));
    var collab_ShowStartTranslationWorkflowWindowAction_52_13_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_52_13_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.ALL_OR_SELECTED_ITEMS_VARIABLE_NAME));
    ui_IconButton_48_9_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction(collab_ShowStartTranslationWorkflowWindowAction_52_13_$1);
    var tbSpacer_56_9_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    tbSpacer_56_9_$1.flex = 1.0;
    var ui_MenuIconButton_57_9_$1/*:com.coremedia.ui.components.MenuIconButton*/ =AS3.cast(com.coremedia.ui.components.MenuIconButton,{});
    ui_MenuIconButton_57_9_$1.itemId = "editedContentToolsButtonItemId";
    AS3.setBindable(ui_MenuIconButton_57_9_$1,"arrowVisible" , false);
    AS3.setBindable(ui_MenuIconButton_57_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_show_filter_options_tooltip')));
    AS3.setBindable(ui_MenuIconButton_57_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons','arrow_down')));
    ui_MenuIconButton_57_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    var ui_BindVisibilityPlugin_63_13_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_63_13_$1.bindTo = this.getMenuIconButtonVisibleVE();
    ui_MenuIconButton_57_9_$1.plugins = [ui_BindVisibilityPlugin_63_13_$1];
    var collab_EditedContentToolsMenu_66_13_$1/*: com.coremedia.cms.editor.controlroom.EditedContentToolsMenu*/ =AS3.cast(com.coremedia.cms.editor.controlroom.EditedContentToolsMenu,{});
    ui_MenuIconButton_57_9_$1.menu = collab_EditedContentToolsMenu_66_13_$1;
    toolbar_32_5_$1.items = [ui_IconButton_34_9_$1, ui_IconButton_40_9_$1, ui_IconButton_48_9_$1, tbSpacer_56_9_$1, ui_MenuIconButton_57_9_$1];
    config_$1.tbar = toolbar_32_5_$1;
    var collab_EditedContentGridPanelContextMenu_73_5_$1/*: com.coremedia.cms.editor.controlroom.EditedContentGridPanelContextMenu*/ =AS3.cast(com.coremedia.cms.editor.controlroom.EditedContentGridPanelContextMenu,{});
    AS3.setBindable(config_$1,"contextMenu" , collab_EditedContentGridPanelContextMenu_73_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$EY4A(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.EditedContentGridPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.editedContentGridPanel",
      constructor: EditedContentGridPanel$,
      super$EY4A: function() {
        com.coremedia.cms.editor.controlroom.EditedContentGridPanelBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.toolbar.Spacer",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.EditedContentGridPanelBase",
        "com.coremedia.cms.editor.sdk.components.ContentGridPanel",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.MenuIconButton",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.EditedContentGridPanelContextMenu",
        "com.coremedia.cms.editor.controlroom.EditedContentToolsMenu",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction"
      ]
    };
});
