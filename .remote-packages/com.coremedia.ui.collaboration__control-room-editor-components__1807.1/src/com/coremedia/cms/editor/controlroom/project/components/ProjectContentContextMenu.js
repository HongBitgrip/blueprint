Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentContextMenu", function(ProjectContentContextMenu) {/*package com.coremedia.cms.editor.controlroom.project.components{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction;
import com.coremedia.cms.editor.sdk.actions.RenameContentItemAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction;
import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
import com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction;
public class ProjectContentContextMenu extends Menu{

    import com.coremedia.cms.editor.controlroom.project.model.ProjectContents;
    import com.coremedia.cms.editor.controlroom.project.rest.Project;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectContentContextMenu";

    public static const OPEN_IN_TAB_ITEM_ID:String = "openProjectContentInTabMenuItemId";

    public static const SHOW_IN_LIBRARY_ITEM_ID:String = "showProjectContentInLibraryMenuItemId";

    public static const CUT_CONTENT_TO_CLIPBOARD_ITEM_ID:String = "cutContentToClipboardMenuItemId";

    public static const COPY_CONTENT_TO_CLIPBOARD_ITEM_ID:String = "copyContentToClipboardMenuItemId";

    public static const PASTE_CONTENT_FROM_CLIPBOARD_ITEM_ID:String = "pasteContentFromClipboardMenuItemId";

    public static const RENAME_CONTENT_ITEM_ITEM_ID:String = "renameContentMenuItemId";

    public static const START_PUBLICATION_WORKFLOW_ITEM_ID:String = "startPublicationWorkflowMenuItemId";

    public static const START_PUSH_TRANSLATION_WORKFLOW_ITEM_ID:String = "startPushTranslationWorkflowMenuItemId";

    public static const START_PULL_TRANSLATION_WORKFLOW_ITEM_ID:String = "startPullTranslationWorkflowMenuItemId";

    public static const WITHDRAW_ITEM_ID:String = "withdrawContentMenuItemId";

    public static const REMOVE_CONTENT_ITEM_ID:String = "removeContentMenuItemId";
    private var projectContentsListVE:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:ProjectContentContextMenu*/)/*:void*/ {
      this.projectContentsListVE$x2Jd = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        return [new com.coremedia.cms.editor.controlroom.project.model.ProjectContents(AS3.getBindable(config,"project"), AS3.getBindable(config,"selectedItemsValueExpression").getValue())];
      });
    }/*

    public*/function ProjectContentContextMenu$(config/*:ProjectContentContextMenu = null*/){if(arguments.length<=0)config=null;this.__initialize__$x2Jd(config);
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:ProjectContentContextMenu*/ =AS3.cast(ProjectContentContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var ui_HideObsoleteSeparatorsPlugin_60_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_60_5_$1];
    var menuItem_64_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_64_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContextMenu.OPEN_IN_TAB_ITEM_ID);
    var editor_OpenInTabAction_66_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_66_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_64_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_66_9_$1);
    var menuItem_70_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_70_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContextMenu.SHOW_IN_LIBRARY_ITEM_ID);
    var editor_ShowInRepositoryAction_72_9_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_72_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_70_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_72_9_$1);
    var menuSeparator_76_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_78_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_78_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContextMenu.CUT_CONTENT_TO_CLIPBOARD_ITEM_ID);
    var collab_CutContentFromProjectAction_80_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction,{});
    AS3.setBindable(collab_CutContentFromProjectAction_80_9_$1,"projectContentsListVE" , this.projectContentsListVE$x2Jd);
    menuItem_78_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction(collab_CutContentFromProjectAction_80_9_$1);
    var menuItem_84_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_84_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContextMenu.COPY_CONTENT_TO_CLIPBOARD_ITEM_ID);
    var editor_CopyToClipboardAction_86_9_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_86_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_84_5_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_86_9_$1);
    var menuItem_90_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_90_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContextMenu.PASTE_CONTENT_FROM_CLIPBOARD_ITEM_ID);
    var collab_PasteFromClipboardToProjectAction_92_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction,{});
    AS3.setBindable(collab_PasteFromClipboardToProjectAction_92_9_$1,"projects" , [AS3.getBindable(config,"project")]);
    AS3.setBindable(collab_PasteFromClipboardToProjectAction_92_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_90_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction(collab_PasteFromClipboardToProjectAction_92_9_$1);
    var menuSeparator_97_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_99_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_99_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContextMenu.RENAME_CONTENT_ITEM_ITEM_ID);
    var editor_RenameContentItemAction_101_9_$1/*:com.coremedia.cms.editor.sdk.actions.RenameContentItemAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RenameContentItemAction,{});
    AS3.setBindable(editor_RenameContentItemAction_101_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_99_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.RenameContentItemAction(editor_RenameContentItemAction_101_9_$1);
    var menuSeparator_105_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_107_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_107_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContextMenu.START_PUBLICATION_WORKFLOW_ITEM_ID);
    var collab_ShowStartPublicationWorkflowWindowAction_109_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_109_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_107_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction(collab_ShowStartPublicationWorkflowWindowAction_109_9_$1);
    var menuItem_114_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_114_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContextMenu.START_PUSH_TRANSLATION_WORKFLOW_ITEM_ID);
    var collab_ShowStartTranslationWorkflowWindowAction_116_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_116_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_114_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction(collab_ShowStartTranslationWorkflowWindowAction_116_9_$1);
    var menuItem_121_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_121_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContextMenu.START_PULL_TRANSLATION_WORKFLOW_ITEM_ID);
    var collab_StartPullTranslationWorkflowAction_123_9_$1/*:com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction,{});
    AS3.setBindable(collab_StartPullTranslationWorkflowAction_123_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_121_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction(collab_StartPullTranslationWorkflowAction_123_9_$1);
    var menuSeparator_127_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_129_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_129_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContextMenu.WITHDRAW_ITEM_ID);
    var editor_WithdrawAction_131_9_$1/*:com.coremedia.cms.editor.sdk.actions.WithdrawAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.WithdrawAction,{});
    AS3.setBindable(editor_WithdrawAction_131_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_129_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.WithdrawAction(editor_WithdrawAction_131_9_$1);
    var menuItem_135_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_135_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContextMenu.REMOVE_CONTENT_ITEM_ID);
    var collab_RemoveContentFromProjectAction_137_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction,{});
    AS3.setBindable(collab_RemoveContentFromProjectAction_137_9_$1,"projectContentsListVE" , this.projectContentsListVE$x2Jd);
    menuItem_135_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction(collab_RemoveContentFromProjectAction_137_9_$1);
    config_$1.items = [menuItem_64_5_$1, menuItem_70_5_$1, menuSeparator_76_5_$1, menuItem_78_5_$1, menuItem_84_5_$1, menuItem_90_5_$1, menuSeparator_97_5_$1, menuItem_99_5_$1, menuSeparator_105_5_$1, menuItem_107_5_$1, menuItem_114_5_$1, menuItem_121_5_$1, menuSeparator_127_5_$1, menuItem_129_5_$1, menuItem_135_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$x2Jd(config_$1);
  }/*

    [Bindable]
    public var project:Project;

    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectContentContextMenu",
      projectContentsListVE$x2Jd: null,
      __initialize__$x2Jd: __initialize__,
      constructor: ProjectContentContextMenu$,
      super$x2Jd: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {
        project: null,
        selectedItemsValueExpression: null
      },
      statics: {
        OPEN_IN_TAB_ITEM_ID: "openProjectContentInTabMenuItemId",
        SHOW_IN_LIBRARY_ITEM_ID: "showProjectContentInLibraryMenuItemId",
        CUT_CONTENT_TO_CLIPBOARD_ITEM_ID: "cutContentToClipboardMenuItemId",
        COPY_CONTENT_TO_CLIPBOARD_ITEM_ID: "copyContentToClipboardMenuItemId",
        PASTE_CONTENT_FROM_CLIPBOARD_ITEM_ID: "pasteContentFromClipboardMenuItemId",
        RENAME_CONTENT_ITEM_ITEM_ID: "renameContentMenuItemId",
        START_PUBLICATION_WORKFLOW_ITEM_ID: "startPublicationWorkflowMenuItemId",
        START_PUSH_TRANSLATION_WORKFLOW_ITEM_ID: "startPushTranslationWorkflowMenuItemId",
        START_PULL_TRANSLATION_WORKFLOW_ITEM_ID: "startPullTranslationWorkflowMenuItemId",
        WITHDRAW_ITEM_ID: "withdrawContentMenuItemId",
        REMOVE_CONTENT_ITEM_ID: "removeContentMenuItemId"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.RenameContentItemAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction",
        "com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction",
        "com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction",
        "com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction",
        "com.coremedia.cms.editor.controlroom.project.model.ProjectContents"
      ]
    };
});
