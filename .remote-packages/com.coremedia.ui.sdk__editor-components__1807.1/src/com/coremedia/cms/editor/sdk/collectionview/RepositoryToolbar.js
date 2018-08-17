Ext.define("com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar", function(RepositoryToolbar) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.actions.NewContentAction;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.ActionRef;
import ext.toolbar.Separator;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 The toolbar for the list or thumbnail view in the repository view of the collection view.
 * /
public class RepositoryToolbar extends RepositoryToolbarBase{

    import com.coremedia.cms.editor.sdk.actions.ApproveAction;
    import com.coremedia.cms.editor.sdk.actions.ApprovePublishAction;
    import com.coremedia.cms.editor.sdk.actions.DeleteAction;
    import com.coremedia.cms.editor.sdk.actions.PublishAction;
    import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
    import com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction;
    import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
    import com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction;
    import com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction;
    import com.coremedia.cms.editor.sdk.upload.OpenUploadDialogAction;
    import com.coremedia.cms.editor.sdk.upload.UploadHelper;
    import com.coremedia.ui.context.ComponentContextManager;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ToolbarSkin;

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.repositoryToolbar";

    /**
     * The itemId of the first header spacer.
     * /
    public static const REPOSITORY_TOOLBAR_SPACER_FIRST_ITEM_ID:String = "repositoryToolbarSpacerFirst";

    /**
     * The itemId of the second header spacer.
     * /
    public static const REPOSITORY_TOOLBAR_SPACER_SECOND_ITEM_ID:String = "repositoryToolbarSpacerSecond";

    public static const CUT_BUTTON_ITEM_ID:String = "cutToClipboard";

    public static const COPY_BUTTON_ITEM_ID:String = "copyToClipboard";

    public static const PASTE_BUTTON_ITEM_ID:String = "pasteFromClipboard";

    public static const DELETE_BUTTON_ITEM_ID:String = "delete";

    public static const OPEN_BUTTON_ITEM_ID:String = "open";

    public static const BOOKMARK_BUTTON_ITEM_ID:String = "bookmarkButton";

    public static const APPROVE_BUTTON_ITEM_ID:String = "approve";
    public static const PUBLISH_BUTTON_ITEM_ID:String = "publish";
    public static const WITHDRAW_BUTTON_ITEM_ID:String = "withdraw";
    public static const APPROVE_PUBLISH_BUTTON_ITEM_ID:String = "finish";

    /**
     * The itemId of the third header spacer.
     * /
    public static const REPOSITORY_TOOLBAR_SPACER_THIRD_ITEM_ID:String = "repositoryToolbarSpacerThird";

    /**
     * The itemId of the fourth header spacer.
     * /
    public static const REPOSITORY_TOOLBAR_SPACER_FOURTH_ITEM_ID:String = "repositoryToolbarSpacerFourth";

    /**
     * The itemId of the fifth header spacer.
     * /
    public static const REPOSITORY_TOOLBAR_SPACER_FIFTH_ITEM_ID:String = "repositoryToolbarSpacerFifth";
    private var selectedFolderValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:RepositoryToolbar*/)/*:void*/ {
      this.selectedFolderValueExpression$Z6r0 = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME);
    }/*

    public*/function RepositoryToolbar$(config/*:RepositoryToolbar = null*/){if(arguments.length<=0)config=null;this.__initialize__$Z6r0(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarBase,{});
    var defaults_$1/*:RepositoryToolbar*/ =AS3.cast(RepositoryToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_repositoryToolbar_label'));
    config_$1.enableOverflow = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.LIGHT.getSkin());
    config_$1.flex = 1.0;
    var ui_IconButton_108_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_108_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_newFolder_btn_tooltip'));
    AS3.setBindable(ui_IconButton_108_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_newFolder_btn_tooltip')));
    AS3.setBindable(ui_IconButton_108_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'create_new_folder')));
    ui_IconButton_108_5_$1.itemId = "createFolder";
    var editor_NewContentAction_113_9_$1/*:com.coremedia.cms.editor.sdk.actions.NewContentAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.NewContentAction,{});
    AS3.setBindable(editor_NewContentAction_113_9_$1,"folderValueExpression" , this.selectedFolderValueExpression$Z6r0);
    AS3.setBindable(editor_NewContentAction_113_9_$1,"createdContentValueExpression" , AS3.getBindable(config,"createdContentValueExpression"));
    AS3.setBindable(editor_NewContentAction_113_9_$1,"primaryDisabledExpression" , this.getNewContentActionDisabledExpression());
    AS3.setBindable(editor_NewContentAction_113_9_$1,"contentType" , "Folder_");
    AS3.setBindable(editor_NewContentAction_113_9_$1,"name" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_newFolderName_text')));
    ui_IconButton_108_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.NewContentAction(editor_NewContentAction_113_9_$1);
    var ui_IconButton_120_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_120_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_newDocument_btn_tooltip'));
    AS3.setBindable(ui_IconButton_120_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_newDocument_btn_tooltip')));
    AS3.setBindable(ui_IconButton_120_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'create_content')));
    ui_IconButton_120_5_$1.itemId = "createDocument";
    var ui_BindPropertyPlugin_125_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_125_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_125_9_$1.bindTo = this.getNewContentActionDisabledExpression();
    ui_IconButton_120_5_$1.plugins = [ui_BindPropertyPlugin_125_9_$1];
    var editor_DocTypeMenu_130_9_$1/*: com.coremedia.cms.editor.sdk.collectionview.DocTypeMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.DocTypeMenu,{});
    AS3.setBindable(editor_DocTypeMenu_130_9_$1,"folderValueExpression" , this.selectedFolderValueExpression$Z6r0);
    AS3.setBindable(editor_DocTypeMenu_130_9_$1,"createdContentValueExpression" , AS3.getBindable(config,"createdContentValueExpression"));
    AS3.setBindable(editor_DocTypeMenu_130_9_$1,"layout" , "anchor");
    ui_IconButton_120_5_$1.menu = editor_DocTypeMenu_130_9_$1;
    var ui_IconButton_135_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_135_5_$1.itemId = "openUpload";
    AS3.setBindable(ui_IconButton_135_5_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadFileAction_menu_item_text')));
    AS3.setBindable(ui_IconButton_135_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'upload')));
    AS3.setBindable(ui_IconButton_135_5_$1,"tooltip" , com.coremedia.cms.editor.sdk.upload.UploadHelper.resolveTooltip());
    var actionRef_140_9_$1/*:ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_140_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.upload.OpenUploadDialogAction.ACTION_ID);
    ui_IconButton_135_5_$1.baseAction = actionRef_140_9_$1;
    var tbSeparator_143_5_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_143_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.REPOSITORY_TOOLBAR_SPACER_FIRST_ITEM_ID);
    var ui_IconButton_144_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_144_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.CUT_BUTTON_ITEM_ID);
    var actionRef_146_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_146_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction.ACTION_ID);
    ui_IconButton_144_5_$1.baseAction = actionRef_146_9_$1;
    var ui_IconButton_149_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_149_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.COPY_BUTTON_ITEM_ID);
    var actionRef_151_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_151_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction.ACTION_ID);
    ui_IconButton_149_5_$1.baseAction = actionRef_151_9_$1;
    var ui_IconButton_154_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_154_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.PASTE_BUTTON_ITEM_ID);
    var actionRef_156_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_156_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction.ACTION_ID);
    ui_IconButton_154_5_$1.baseAction = actionRef_156_9_$1;
    var tbSeparator_159_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_159_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.REPOSITORY_TOOLBAR_SPACER_SECOND_ITEM_ID);
    var ui_IconButton_160_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_160_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.OPEN_BUTTON_ITEM_ID);
    var editor_OpenInTabAction_162_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_162_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    editor_OpenInTabAction_162_9_$1.preventHide = true;
    ui_IconButton_160_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_162_9_$1);
    var tbSeparator_165_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_165_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.REPOSITORY_TOOLBAR_SPACER_THIRD_ITEM_ID);
    var ui_IconButton_166_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_166_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.BOOKMARK_BUTTON_ITEM_ID);
    var actionRef_168_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_168_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction.ACTION_ID);
    ui_IconButton_166_5_$1.baseAction = actionRef_168_9_$1;
    var tbSeparator_171_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_172_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_172_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.APPROVE_BUTTON_ITEM_ID);
    var actionRef_174_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_174_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.ApproveAction.ACTION_ID);
    ui_IconButton_172_5_$1.baseAction = actionRef_174_9_$1;
    var ui_IconButton_177_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_177_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.PUBLISH_BUTTON_ITEM_ID);
    var actionRef_179_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_179_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.PublishAction.ACTION_ID);
    ui_IconButton_177_5_$1.baseAction = actionRef_179_9_$1;
    var ui_IconButton_182_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_182_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.APPROVE_PUBLISH_BUTTON_ITEM_ID);
    var actionRef_184_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_184_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.ApprovePublishAction.ACTION_ID);
    ui_IconButton_182_5_$1.baseAction = actionRef_184_9_$1;
    var tbSeparator_187_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_187_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.REPOSITORY_TOOLBAR_SPACER_FOURTH_ITEM_ID);
    var ui_IconButton_188_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_188_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.WITHDRAW_BUTTON_ITEM_ID);
    var actionRef_190_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_190_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.WithdrawAction.ACTION_ID);
    ui_IconButton_188_5_$1.baseAction = actionRef_190_9_$1;
    var tbSeparator_193_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_193_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.REPOSITORY_TOOLBAR_SPACER_FIFTH_ITEM_ID);
    var ui_IconButton_194_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_194_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbar.DELETE_BUTTON_ITEM_ID);
    var actionRef_196_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_196_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.DeleteAction.ACTION_ID);
    ui_IconButton_194_5_$1.baseAction = actionRef_196_9_$1;
    config_$1.items = [ui_IconButton_108_5_$1, ui_IconButton_120_5_$1, ui_IconButton_135_5_$1, tbSeparator_143_5_$1, ui_IconButton_144_5_$1, ui_IconButton_149_5_$1, ui_IconButton_154_5_$1, tbSeparator_159_5_$1, ui_IconButton_160_5_$1, tbSeparator_165_5_$1, ui_IconButton_166_5_$1, tbSeparator_171_5_$1, ui_IconButton_172_5_$1, ui_IconButton_177_5_$1, ui_IconButton_182_5_$1, tbSeparator_187_5_$1, ui_IconButton_188_5_$1, tbSeparator_193_5_$1, ui_IconButton_194_5_$1];
    var layout_HBox_201_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    layout_HBox_201_5_$1["triggerWidth"] = 26;
    AS3.setBindable(config_$1,"layout" , layout_HBox_201_5_$1);
    var ui_HideObsoleteSeparatorsPlugin_204_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_204_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Z6r0(config_$1);
  }/*

    /**
     * value expression for the selected items, either in the list view, or - if the selection there is empty - the
     * selected folder in the tree view.
     * /
    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;

    /**
     * value expression that acts as a model for informing a view of a newly created content object.
     * /
    [Bindable]
    public var createdContentValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.repositoryToolbar",
      selectedFolderValueExpression$Z6r0: null,
      __initialize__$Z6r0: __initialize__,
      constructor: RepositoryToolbar$,
      super$Z6r0: function() {
        com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedItemsValueExpression: null,
        createdContentValueExpression: null
      },
      statics: {
        REPOSITORY_TOOLBAR_SPACER_FIRST_ITEM_ID: "repositoryToolbarSpacerFirst",
        REPOSITORY_TOOLBAR_SPACER_SECOND_ITEM_ID: "repositoryToolbarSpacerSecond",
        CUT_BUTTON_ITEM_ID: "cutToClipboard",
        COPY_BUTTON_ITEM_ID: "copyToClipboard",
        PASTE_BUTTON_ITEM_ID: "pasteFromClipboard",
        DELETE_BUTTON_ITEM_ID: "delete",
        OPEN_BUTTON_ITEM_ID: "open",
        BOOKMARK_BUTTON_ITEM_ID: "bookmarkButton",
        APPROVE_BUTTON_ITEM_ID: "approve",
        PUBLISH_BUTTON_ITEM_ID: "publish",
        WITHDRAW_BUTTON_ITEM_ID: "withdraw",
        APPROVE_PUBLISH_BUTTON_ITEM_ID: "finish",
        REPOSITORY_TOOLBAR_SPACER_THIRD_ITEM_ID: "repositoryToolbarSpacerThird",
        REPOSITORY_TOOLBAR_SPACER_FOURTH_ITEM_ID: "repositoryToolbarSpacerFourth",
        REPOSITORY_TOOLBAR_SPACER_FIFTH_ITEM_ID: "repositoryToolbarSpacerFifth"
      },
      requires: [
        "Ext.layout.container.HBox",
        "Ext.toolbar.Separator",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "ext.ActionRef",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ApproveAction",
        "com.coremedia.cms.editor.sdk.actions.ApprovePublishAction",
        "com.coremedia.cms.editor.sdk.actions.DeleteAction",
        "com.coremedia.cms.editor.sdk.actions.NewContentAction",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.PublishAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction",
        "com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.DocTypeMenu",
        "com.coremedia.cms.editor.sdk.upload.OpenUploadDialogAction",
        "com.coremedia.cms.editor.sdk.upload.UploadHelper"
      ]
    };
});
