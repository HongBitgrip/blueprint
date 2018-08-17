Ext.define("com.coremedia.cms.editor.sdk.collectionview.SearchToolbar", function(SearchToolbar) {/*package com.coremedia.cms.editor.sdk.collectionview{
import ext.toolbar.Toolbar;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowAction;
import ext.toolbar.Separator;
import ext.ActionRef;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
[PublicApi]
/**
 The toolbar for the list or thumbnail view in the search view of the collection view.
 * /
public class SearchToolbar extends Toolbar{

    import com.coremedia.cms.editor.sdk.actions.ApproveAction;
    import com.coremedia.cms.editor.sdk.actions.ApprovePublishAction;
    import com.coremedia.cms.editor.sdk.actions.DeleteAction;
    import com.coremedia.cms.editor.sdk.actions.PublishAction;
    import com.coremedia.cms.editor.sdk.actions.UndeleteAction;
    import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
    import com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction;
    import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.searchToolbar";

    /**
     * The itemId of the first header spacer.
     * /
    public static const SEARCH_TOOLBAR_SPACER_FIRST_ITEM_ID:String = "searchToolbarSpacerFirst";

    /**
     * The itemId of the second header spacer.
     * /
    public static const SEARCH_TOOLBAR_SPACER_SECOND_ITEM_ID:String = "searchToolbarSpacerSecond";

    /**
     * The itemId of the third header spacer.
     * /
    public static const SEARCH_TOOLBAR_SPACER_THIRD_ITEM_ID:String = "searchToolbarSpacerThird";

    /**
     * The itemId of the fourth header spacer.
     * /
    public static const SEARCH_TOOLBAR_SPACER_FOURTH_ITEM_ID:String = "repositoryToolbarSpacerFourth";

    /**
     * The itemId of the fifth header spacer.
     * /
    public static const SEARCH_TOOLBAR_SPACER_FIFTH_ITEM_ID:String = "searchToolbarSpacerFifth";

    public static const COPY_BUTTON_ITEM_ID:String = "copyToClipboard";
    public static const BOOKMARK_BUTTON_ITEM_ID:String = "bookmarkButton";
    public static const APPROVE_BUTTON_ITEM_ID:String = "approve";
    public static const PUBLISH_BUTTON_ITEM_ID:String = "publish";
    public static const WITHDRAW_BUTTON_ITEM_ID:String = "withdraw";
    public static const DELETE_BUTTON_ITEM_ID:String = "delete";

    public*/function SearchToolbar$(config/*:SearchToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var defaults_$1/*:SearchToolbar*/ =AS3.cast(SearchToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.enableOverflow = true;
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_searchToolbar_label'));
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.LIGHT.getSkin());
    config_$1.flex = 1.0;
    var ui_IconButton_71_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_71_5_$1.itemId = "saveSearch";
    var editor_OpenSaveSearchWindowAction_73_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowAction,{});
    ui_IconButton_71_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowAction(editor_OpenSaveSearchWindowAction_73_9_$1);
    var tbSeparator_76_5_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_76_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbar.SEARCH_TOOLBAR_SPACER_FIRST_ITEM_ID);
    var ui_IconButton_77_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_77_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbar.COPY_BUTTON_ITEM_ID);
    var actionRef_79_9_$1/*:ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_79_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction.ACTION_ID);
    ui_IconButton_77_5_$1.baseAction = actionRef_79_9_$1;
    var tbSeparator_82_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_82_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbar.SEARCH_TOOLBAR_SPACER_SECOND_ITEM_ID);
    var ui_IconButton_83_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_83_5_$1.itemId = "open";
    var editor_OpenInTabAction_85_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_85_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    ui_IconButton_83_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_85_9_$1);
    var tbSeparator_88_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_88_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbar.SEARCH_TOOLBAR_SPACER_THIRD_ITEM_ID);
    var ui_IconButton_89_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_89_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbar.BOOKMARK_BUTTON_ITEM_ID);
    var actionRef_91_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_91_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction.ACTION_ID);
    ui_IconButton_89_5_$1.baseAction = actionRef_91_9_$1;
    var tbSeparator_94_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_95_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_95_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbar.APPROVE_BUTTON_ITEM_ID);
    var actionRef_97_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_97_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.ApproveAction.ACTION_ID);
    ui_IconButton_95_5_$1.baseAction = actionRef_97_9_$1;
    var ui_IconButton_100_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_100_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbar.PUBLISH_BUTTON_ITEM_ID);
    var actionRef_102_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_102_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.PublishAction.ACTION_ID);
    ui_IconButton_100_5_$1.baseAction = actionRef_102_9_$1;
    var ui_IconButton_105_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_105_5_$1.itemId = "finish";
    var actionRef_107_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_107_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.ApprovePublishAction.ACTION_ID);
    ui_IconButton_105_5_$1.baseAction = actionRef_107_9_$1;
    var tbSeparator_110_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_110_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbar.SEARCH_TOOLBAR_SPACER_FOURTH_ITEM_ID);
    var ui_IconButton_111_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_111_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbar.WITHDRAW_BUTTON_ITEM_ID);
    var actionRef_113_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_113_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.WithdrawAction.ACTION_ID);
    ui_IconButton_111_5_$1.baseAction = actionRef_113_9_$1;
    var tbSeparator_116_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_116_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbar.SEARCH_TOOLBAR_SPACER_FIFTH_ITEM_ID);
    var ui_IconButton_117_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_117_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbar.DELETE_BUTTON_ITEM_ID);
    var actionRef_119_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_119_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.DeleteAction.ACTION_ID);
    ui_IconButton_117_5_$1.baseAction = actionRef_119_9_$1;
    var ui_IconButton_122_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_122_5_$1.itemId = "undelete";
    var actionRef_124_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_124_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.UndeleteAction.ACTION_ID);
    ui_IconButton_122_5_$1.baseAction = actionRef_124_9_$1;
    config_$1.items = [ui_IconButton_71_5_$1, tbSeparator_76_5_$1, ui_IconButton_77_5_$1, tbSeparator_82_5_$1, ui_IconButton_83_5_$1, tbSeparator_88_5_$1, ui_IconButton_89_5_$1, tbSeparator_94_5_$1, ui_IconButton_95_5_$1, ui_IconButton_100_5_$1, ui_IconButton_105_5_$1, tbSeparator_110_5_$1, ui_IconButton_111_5_$1, tbSeparator_116_5_$1, ui_IconButton_117_5_$1, ui_IconButton_122_5_$1];
    var layout_HBox_129_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    layout_HBox_129_5_$1["triggerWidth"] = 26;
    AS3.setBindable(config_$1,"layout" , layout_HBox_129_5_$1);
    var ui_HideObsoleteSeparatorsPlugin_132_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_132_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$jQoY(config_$1);
  }/*

    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.searchToolbar",
      constructor: SearchToolbar$,
      super$jQoY: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      config: {selectedItemsValueExpression: null},
      statics: {
        SEARCH_TOOLBAR_SPACER_FIRST_ITEM_ID: "searchToolbarSpacerFirst",
        SEARCH_TOOLBAR_SPACER_SECOND_ITEM_ID: "searchToolbarSpacerSecond",
        SEARCH_TOOLBAR_SPACER_THIRD_ITEM_ID: "searchToolbarSpacerThird",
        SEARCH_TOOLBAR_SPACER_FOURTH_ITEM_ID: "repositoryToolbarSpacerFourth",
        SEARCH_TOOLBAR_SPACER_FIFTH_ITEM_ID: "searchToolbarSpacerFifth",
        COPY_BUTTON_ITEM_ID: "copyToClipboard",
        BOOKMARK_BUTTON_ITEM_ID: "bookmarkButton",
        APPROVE_BUTTON_ITEM_ID: "approve",
        PUBLISH_BUTTON_ITEM_ID: "publish",
        WITHDRAW_BUTTON_ITEM_ID: "withdraw",
        DELETE_BUTTON_ITEM_ID: "delete"
      },
      requires: [
        "Ext.layout.container.HBox",
        "Ext.toolbar.Separator",
        "Ext.toolbar.Toolbar",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "ext.ActionRef",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ApproveAction",
        "com.coremedia.cms.editor.sdk.actions.ApprovePublishAction",
        "com.coremedia.cms.editor.sdk.actions.DeleteAction",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowAction",
        "com.coremedia.cms.editor.sdk.actions.PublishAction",
        "com.coremedia.cms.editor.sdk.actions.UndeleteAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction"
      ]
    };
});
