Ext.define("com.coremedia.cms.editor.controlroom.EditedContentGridPanelContextMenu", function(EditedContentGridPanelContextMenu) {/*package com.coremedia.cms.editor.controlroom{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction;
import com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction;
import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
public class EditedContentGridPanelContextMenu extends Menu{

    import com.coremedia.cms.editor.sdk.components.ContentGridPanel;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.editedContentGridPanelContextMenu";

    public*/function EditedContentGridPanelContextMenu$(config/*:EditedContentGridPanelContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:EditedContentGridPanelContextMenu*/ =AS3.cast(EditedContentGridPanelContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var ui_HideObsoleteSeparatorsPlugin_21_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_21_5_$1];
    var menuItem_24_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_OpenInTabAction_26_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_26_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_24_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_26_9_$1);
    var menuItem_30_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_ShowInRepositoryAction_32_9_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_32_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_30_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_32_9_$1);
    var menuSeparator_36_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_38_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_CopyToClipboardAction_40_9_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_40_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_38_5_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_40_9_$1);
    var menuItem_44_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_44_5_$1["id"] = "deleteMenuItem";
    var collab_DeleteEditedContentsAction_46_9_$1/*:com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction,{});
    AS3.setBindable(collab_DeleteEditedContentsAction_46_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    AS3.setBindable(collab_DeleteEditedContentsAction_46_9_$1,"mode" , "selected");
    menuItem_44_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction(collab_DeleteEditedContentsAction_46_9_$1);
    var menuItem_51_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_51_5_$1["id"] = "deleteMenuItemAll";
    var collab_DeleteEditedContentsAction_53_9_$1/*: com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction,{});
    AS3.setBindable(collab_DeleteEditedContentsAction_53_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.ALL_ITEMS_VARIABLE_NAME));
    AS3.setBindable(collab_DeleteEditedContentsAction_53_9_$1,"mode" , "all");
    menuItem_51_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction(collab_DeleteEditedContentsAction_53_9_$1);
    var menuSeparator_58_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_60_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_60_5_$1.itemId = "createProjectSelected";
    var collab_CreateProjectFromMyEditedContentsAction_62_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction,{});
    AS3.setBindable(collab_CreateProjectFromMyEditedContentsAction_62_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    AS3.setBindable(collab_CreateProjectFromMyEditedContentsAction_62_9_$1,"mode" , "selected");
    menuItem_60_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction(collab_CreateProjectFromMyEditedContentsAction_62_9_$1);
    var menuSeparator_68_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_70_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_70_5_$1.itemId = "showStartPublicationWorkflowWindow";
    var collab_ShowStartPublicationWorkflowWindowAction_72_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_72_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_70_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction(collab_ShowStartPublicationWorkflowWindowAction_72_9_$1);
    var menuItem_77_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_77_5_$1.itemId = "showStartTranslationWorkflowWindow";
    var collab_ShowStartTranslationWorkflowWindowAction_79_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_79_9_$1,"contentVariableName" , "selectedItems");
    menuItem_77_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction(collab_ShowStartTranslationWorkflowWindowAction_79_9_$1);
    var menuSeparator_83_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_85_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_WithdrawAction_87_9_$1/*:com.coremedia.cms.editor.sdk.actions.WithdrawAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.WithdrawAction,{});
    AS3.setBindable(editor_WithdrawAction_87_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_85_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.WithdrawAction(editor_WithdrawAction_87_9_$1);
    config_$1.items = [menuItem_24_5_$1, menuItem_30_5_$1, menuSeparator_36_5_$1, menuItem_38_5_$1, menuItem_44_5_$1, menuItem_51_5_$1, menuSeparator_58_5_$1, menuItem_60_5_$1, menuSeparator_68_5_$1, menuItem_70_5_$1, menuItem_77_5_$1, menuSeparator_83_5_$1, menuItem_85_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$3An4(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.editedContentGridPanelContextMenu",
      constructor: EditedContentGridPanelContextMenu$,
      super$3An4: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.cms.editor.sdk.components.ContentGridPanel",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction"
      ]
    };
});
