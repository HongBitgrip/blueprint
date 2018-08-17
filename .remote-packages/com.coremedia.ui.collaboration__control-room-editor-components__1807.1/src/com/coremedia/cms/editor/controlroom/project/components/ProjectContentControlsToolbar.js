Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentControlsToolbar", function(ProjectContentControlsToolbar) {/*package com.coremedia.cms.editor.controlroom.project.components{
import ext.toolbar.Toolbar;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import ext.toolbar.Separator;
import com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectContentControlsToolbar extends Toolbar{

    import com.coremedia.cms.editor.controlroom.project.model.ProjectContents;
    import com.coremedia.cms.editor.controlroom.project.rest.Project;
    import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectContentControlsToolbar";

    public static const REMOVE_CONTENT_ITEM_ID:String = "removeContentItemId";

    public static const OPEN_CONTENT_IN_TAB_ITEM_ID:String = "openContentInTabItemId";

    public static const CUT_CONTENT_TO_CLIPBOARD_ITEM_ID:String = "cutContentToClipboardItemId";

    public static const COPY_CONTENT_TO_CLIPBOARD_ITEM_ID:String = "copyContentToClipboardItemId";

    public static const PASTE_CONTENT_FROM_CLIPBOARD_ITEM_ID:String = "pasteContentFromClipboardItemId";

    public static const START_PUBLICATION_WORKFLOW_ITEM_ID:String = "startPublicationWorkflowItemId";

    public static const START_PUSH_TRANSLATION_WORKFLOW_ITEM_ID:String = "startPushTranslationWorkflowItemId";

    public static const START_PULL_TRANSLATION_WORKFLOW_ITEM_ID:String = "startPullTranslationWorkflowItemId";
    private var selectedItemsOrAllItemsVE:ValueExpression;
    private var projectContentsListVE:ValueExpression;
    private var workflowNameVE:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:ProjectContentControlsToolbar*/)/*:void*/ {
      this.selectedItemsOrAllItemsVE$YvIU = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var selectedItems/*:Array*/ = AS3.getBindable(config,"selectedItemsValueExpression").getValue();
        return selectedItems.length > 0 ? selectedItems : AS3.getBindable(config,"project").getContents();
      });
      this.projectContentsListVE$YvIU = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        return [new com.coremedia.cms.editor.controlroom.project.model.ProjectContents(AS3.getBindable(config,"project"), AS3.getBindable(config,"selectedItemsValueExpression").getValue())];
      });
      this.workflowNameVE$YvIU = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.NAME, AS3.getBindable(config,"project"));
    }/*

    public*/function ProjectContentControlsToolbar$(config/*:ProjectContentControlsToolbar = null*/){if(arguments.length<=0)config=null;this.__initialize__$YvIU(config);
    var config_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var defaults_$1/*:ProjectContentControlsToolbar*/ =AS3.cast(ProjectContentControlsToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FIELD.getSkin());
    var ui_IconButton_65_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_65_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentControlsToolbar.REMOVE_CONTENT_ITEM_ID);
    var collab_RemoveContentFromProjectAction_67_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction,{});
    AS3.setBindable(collab_RemoveContentFromProjectAction_67_9_$1,"projectContentsListVE" , this.projectContentsListVE$YvIU);
    ui_IconButton_65_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction(collab_RemoveContentFromProjectAction_67_9_$1);
    var ui_IconButton_70_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_70_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentControlsToolbar.OPEN_CONTENT_IN_TAB_ITEM_ID);
    var editor_OpenInTabAction_72_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_72_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    ui_IconButton_70_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_72_9_$1);
    var tbSeparator_75_5_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_76_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_76_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentControlsToolbar.CUT_CONTENT_TO_CLIPBOARD_ITEM_ID);
    var collab_CutContentFromProjectAction_78_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction,{});
    AS3.setBindable(collab_CutContentFromProjectAction_78_9_$1,"projectContentsListVE" , this.projectContentsListVE$YvIU);
    ui_IconButton_76_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction(collab_CutContentFromProjectAction_78_9_$1);
    var ui_IconButton_81_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_81_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentControlsToolbar.COPY_CONTENT_TO_CLIPBOARD_ITEM_ID);
    var editor_CopyToClipboardAction_83_9_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_83_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    ui_IconButton_81_5_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_83_9_$1);
    var ui_IconButton_86_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_86_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentControlsToolbar.PASTE_CONTENT_FROM_CLIPBOARD_ITEM_ID);
    var collab_PasteFromClipboardToProjectAction_88_9_$1/*:com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction,{});
    AS3.setBindable(collab_PasteFromClipboardToProjectAction_88_9_$1,"projects" , [AS3.getBindable(config,"project")]);
    AS3.setBindable(collab_PasteFromClipboardToProjectAction_88_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    ui_IconButton_86_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction(collab_PasteFromClipboardToProjectAction_88_9_$1);
    var tbSeparator_92_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_93_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_93_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_start_publication_tooltip'));
    AS3.setBindable(ui_IconButton_93_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_showStartPublicationWorkflowWindow_icon')));
    ui_IconButton_93_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentControlsToolbar.START_PUBLICATION_WORKFLOW_ITEM_ID);
    var collab_ShowStartPublicationWorkflowWindowAction_98_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_98_9_$1,"contentValueExpression" , this.selectedItemsOrAllItemsVE$YvIU);
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_98_9_$1,"workflowNameValueExpression" , this.workflowNameVE$YvIU);
    ui_IconButton_93_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction(collab_ShowStartPublicationWorkflowWindowAction_98_9_$1);
    var ui_IconButton_102_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_102_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_start_translation_tooltip'));
    AS3.setBindable(ui_IconButton_102_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_showStartTranslationWorkflowWindow_icon')));
    ui_IconButton_102_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentControlsToolbar.START_PUSH_TRANSLATION_WORKFLOW_ITEM_ID);
    var collab_ShowStartTranslationWorkflowWindowAction_107_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_107_9_$1,"contentValueExpression" , this.selectedItemsOrAllItemsVE$YvIU);
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_107_9_$1,"workflowNameValueExpression" , this.workflowNameVE$YvIU);
    ui_IconButton_102_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction(collab_ShowStartTranslationWorkflowWindowAction_107_9_$1);
    var collab_StartPullTranslationButton_112_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton,{});
    collab_StartPullTranslationButton_112_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentControlsToolbar.START_PULL_TRANSLATION_WORKFLOW_ITEM_ID);
    AS3.setBindable(collab_StartPullTranslationButton_112_5_$1,"contentValueExpression" , this.selectedItemsOrAllItemsVE$YvIU);
    config_$1.items = [ui_IconButton_65_5_$1, ui_IconButton_70_5_$1, tbSeparator_75_5_$1, ui_IconButton_76_5_$1, ui_IconButton_81_5_$1, ui_IconButton_86_5_$1, tbSeparator_92_5_$1, ui_IconButton_93_5_$1, ui_IconButton_102_5_$1, collab_StartPullTranslationButton_112_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$YvIU(config_$1);
  }/*

    [Bindable]
    public var project:Project;

    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectContentControlsToolbar",
      selectedItemsOrAllItemsVE$YvIU: null,
      projectContentsListVE$YvIU: null,
      workflowNameVE$YvIU: null,
      __initialize__$YvIU: __initialize__,
      constructor: ProjectContentControlsToolbar$,
      super$YvIU: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      config: {
        project: null,
        selectedItemsValueExpression: null
      },
      statics: {
        REMOVE_CONTENT_ITEM_ID: "removeContentItemId",
        OPEN_CONTENT_IN_TAB_ITEM_ID: "openContentInTabItemId",
        CUT_CONTENT_TO_CLIPBOARD_ITEM_ID: "cutContentToClipboardItemId",
        COPY_CONTENT_TO_CLIPBOARD_ITEM_ID: "copyContentToClipboardItemId",
        PASTE_CONTENT_FROM_CLIPBOARD_ITEM_ID: "pasteContentFromClipboardItemId",
        START_PUBLICATION_WORKFLOW_ITEM_ID: "startPublicationWorkflowItemId",
        START_PUSH_TRANSLATION_WORKFLOW_ITEM_ID: "startPushTranslationWorkflowItemId",
        START_PULL_TRANSLATION_WORKFLOW_ITEM_ID: "startPullTranslationWorkflowItemId"
      },
      requires: [
        "Ext.toolbar.Separator",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction",
        "com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction",
        "com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction",
        "com.coremedia.cms.editor.controlroom.project.model.ProjectContents",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames",
        "com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton"
      ]
    };
});
