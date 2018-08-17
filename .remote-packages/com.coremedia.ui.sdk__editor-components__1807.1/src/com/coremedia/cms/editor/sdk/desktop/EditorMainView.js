Ext.define("com.coremedia.cms.editor.sdk.desktop.EditorMainView", function(EditorMainView) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import com.coremedia.cms.editor.sdk.desktop.reusability.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.layout.container.HBoxLayout;
import ext.layout.container.VBoxLayout;
import ext.panel.Panel;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.ui.layouts.MultiItemSplitter;
import com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction;
import com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction;
import com.coremedia.cms.editor.sdk.actions.CheckInAction;
import com.coremedia.cms.editor.sdk.actions.RevertAction;
import com.coremedia.cms.editor.sdk.actions.ApproveAction;
import com.coremedia.cms.editor.sdk.actions.PublishAction;
import com.coremedia.cms.editor.sdk.actions.ApprovePublishAction;
import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import com.coremedia.cms.editor.sdk.util.ContentExportAction;
import com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction;
public class EditorMainView extends EditorMainViewBase{

    import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
    import com.coremedia.cms.editor.sdk.util.UIBehaviour;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.SplitterSkin;
    import com.coremedia.ui.skins.TabBarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.editorMainView";

    /**
     * the component id of the single instance of this component
     * /
    public static const ID:String = "main";

    /**
     * The id of the header toolbar.
     * /
    public static const HEADER_TOOLBAR_ID:String = "header-toolbar";

    public static const TOP_CONTAINER_ITEM_ID:String = "topContainer";

    public static const FAVORITES_TOOLBAR_BORDER_ID:String = "favorites-toolbar-border";
    public static const ACTIONS_TOOLBAR_BORDER_ID:String = "actions-toolbar-border";

    public static const SIDE_PANEL_WEST_ID:String = "side-panel-west";
    public static const SIDE_PANEL_EAST_ID:String = "side-panel-east";

    /**
     * Dark gradient background CSS class for toolbars, menus and more.
     * /
    public static const DARK_GRADIENT_BACKGROUND_CSS_CLASS:String = "gray-background-60";

    public static const MAIN_PANEL_BLOCK:String = "cm-main-view-panel";
    public static const SIDE_PANEL_WEST_ELEMENT:String = "west";
    public static const SIDE_PANEL_EAST_ELEMENT:String = "east";
    private var contentValueExpression:ValueExpression;

    public*/function EditorMainView$(config/*:EditorMainView = null*/){if(arguments.length<=0)config=null;this.__initialize__$hkot(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.EditorMainViewBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.EditorMainViewBase,{});
    var defaults_$1/*:EditorMainView*/ =AS3.cast(EditorMainView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["ariaRole"] = null;
    config_$1.cls = "cm-main-view";
    config_$1["id"] = EditorMainView.ID;
    var container_64_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    config_$1["defaultType"] = container_64_5_$1['xtype'];
    delete container_64_5_$1['xtype'];
    delete container_64_5_$1['xclass'];
    config_$1.defaults = container_64_5_$1;
    var container_68_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_68_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.VIVID.getSkin());
    var container_70_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var editor_MainNavigationToolbar_72_13_$1/*: com.coremedia.cms.editor.sdk.desktop.MainNavigationToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.MainNavigationToolbar,{});
    container_70_9_$1.items = [editor_MainNavigationToolbar_72_13_$1];
    var container_75_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_75_9_$1["id"] = EditorMainView.TOP_CONTAINER_ITEM_ID;
    container_75_9_$1.flex = 1.0;
    var reusability_WorkAreaTabProxiesTabPanel_78_13_$1/*: com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel,{});
    var editor_HeaderToolbar_79_13_$1/*: com.coremedia.cms.editor.sdk.desktop.HeaderToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.HeaderToolbar,{});
    editor_HeaderToolbar_79_13_$1["id"] = EditorMainView.HEADER_TOOLBAR_ID;
    container_75_9_$1.items = [reusability_WorkAreaTabProxiesTabPanel_78_13_$1, editor_HeaderToolbar_79_13_$1];
    var layout_HBox_82_13_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_82_13_$1,"align" , "middle");
    AS3.setBindable(layout_HBox_82_13_$1,"pack" , "end");
    AS3.setBindable(container_75_9_$1,"layout" , layout_HBox_82_13_$1);
    container_68_5_$1.items = [container_70_9_$1, container_75_9_$1];
    var layout_HBox_88_9_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_88_9_$1,"align" , "stretch");
    AS3.setBindable(container_68_5_$1,"layout" , layout_HBox_88_9_$1);
    var container_91_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_91_5_$1.flex = 1.0;
    var container_93_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_93_9_$1,"width" , 100);
    container_93_9_$1["ariaRole"] = "region";
    container_93_9_$1.defaultFocus = ":focusable";
    container_93_9_$1["focusable"] = true;
    container_93_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'FavoritesToolbarRegion_label'));
    var editor_FavoritesToolbar_99_13_$1/*: com.coremedia.cms.editor.sdk.desktop.FavoritesToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.FavoritesToolbar,{});
    editor_FavoritesToolbar_99_13_$1.itemId = "favorites-toolbar";
    editor_FavoritesToolbar_99_13_$1.flex = 1.0;
    container_93_9_$1.items = [editor_FavoritesToolbar_99_13_$1];
    var layout_VBox_103_13_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_103_13_$1,"align" , "stretch");
    AS3.setBindable(container_93_9_$1,"layout" , layout_VBox_103_13_$1);
    var container_106_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_106_9_$1,"width" , 2);
    container_106_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.LIGHT.getSkin());
    container_106_9_$1["id"] = EditorMainView.FAVORITES_TOOLBAR_BORDER_ID;
    var panel_109_9_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_109_9_$1.flex = 1.0;
    var ui_BEMPlugin_111_13_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_111_13_$1,"block" , EditorMainView.MAIN_PANEL_BLOCK);
    panel_109_9_$1.plugins = [ui_BEMPlugin_111_13_$1];
    var editor_SidePanel_114_13_$1/*:com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel,{});
    editor_SidePanel_114_13_$1["id"] = EditorMainView.SIDE_PANEL_WEST_ID;
    editor_SidePanel_114_13_$1.flex = 1.0;
    AS3.setBindable(editor_SidePanel_114_13_$1,"dropZone" , "favorites-toolbar-border");
    var ui_BEMMixin_118_17_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_118_17_$1,"bemElement" , EditorMainView.SIDE_PANEL_WEST_ELEMENT);

    delete ui_BEMMixin_118_17_$1['xtype'];
    delete ui_BEMMixin_118_17_$1['xclass'];
    net.jangaroo.ext.Exml.apply(editor_SidePanel_114_13_$1, ui_BEMMixin_118_17_$1);
    var ui_MultiItemSplitter_121_13_$1/*:com.coremedia.ui.layouts.MultiItemSplitter*/ =AS3.cast(com.coremedia.ui.layouts.MultiItemSplitter,{});
    ui_MultiItemSplitter_121_13_$1.stateId = "main-view-splitter-1";
    AS3.setBindable(ui_MultiItemSplitter_121_13_$1,"width" , 4);
    ui_MultiItemSplitter_121_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.PREMULAR.getSkin());
    ui_MultiItemSplitter_121_13_$1.hideOnPrevCompHidden = true;
    ui_MultiItemSplitter_121_13_$1.collapseOnDblClick = false;
    var editor_WorkArea_126_13_$1/*: com.coremedia.cms.editor.sdk.desktop.WorkArea*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkArea,{});
    AS3.setBindable(editor_WorkArea_126_13_$1,"minWidth" , 400.0);
    editor_WorkArea_126_13_$1.flex = 2.0;
    var ui_MultiItemSplitter_128_13_$1/*: com.coremedia.ui.layouts.MultiItemSplitter*/ =AS3.cast(com.coremedia.ui.layouts.MultiItemSplitter,{});
    ui_MultiItemSplitter_128_13_$1.stateId = "main-view-splitter-2";
    AS3.setBindable(ui_MultiItemSplitter_128_13_$1,"width" , 4);
    ui_MultiItemSplitter_128_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.PREMULAR.getSkin());
    ui_MultiItemSplitter_128_13_$1.hideOnNextCompHidden = true;
    ui_MultiItemSplitter_128_13_$1.collapseOnDblClick = false;
    var editor_SidePanel_133_13_$1/*: com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel,{});
    editor_SidePanel_133_13_$1["id"] = EditorMainView.SIDE_PANEL_EAST_ID;
    editor_SidePanel_133_13_$1.flex = 1.0;
    AS3.setBindable(editor_SidePanel_133_13_$1,"dropZone" , "actions-toolbar-border");
    var ui_BEMMixin_137_17_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_137_17_$1,"bemElement" , EditorMainView.SIDE_PANEL_EAST_ELEMENT);

    delete ui_BEMMixin_137_17_$1['xtype'];
    delete ui_BEMMixin_137_17_$1['xclass'];
    net.jangaroo.ext.Exml.apply(editor_SidePanel_133_13_$1, ui_BEMMixin_137_17_$1);
    var container_140_13_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_140_13_$1,"width" , 2);
    container_140_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.LIGHT.getSkin());
    container_140_13_$1["id"] = EditorMainView.ACTIONS_TOOLBAR_BORDER_ID;
    var container_143_13_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_143_13_$1,"width" , 40);
    container_143_13_$1["ariaRole"] = "region";
    container_143_13_$1.defaultFocus = ":focusable";
    container_143_13_$1["focusable"] = true;
    container_143_13_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ActionsToolbarRegion_label'));
    var editor_ActionsToolbar_149_17_$1/*: com.coremedia.cms.editor.sdk.desktop.ActionsToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ActionsToolbar,{});
    editor_ActionsToolbar_149_17_$1.flex = 1.0;
    container_143_13_$1.items = [editor_ActionsToolbar_149_17_$1];
    var layout_VBox_152_17_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_152_17_$1,"align" , "stretch");
    AS3.setBindable(container_143_13_$1,"layout" , layout_VBox_152_17_$1);
    panel_109_9_$1.items = [editor_SidePanel_114_13_$1, ui_MultiItemSplitter_121_13_$1, editor_WorkArea_126_13_$1, ui_MultiItemSplitter_128_13_$1, editor_SidePanel_133_13_$1, container_140_13_$1, container_143_13_$1];
    var layout_HBox_157_13_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_157_13_$1,"align" , "stretch");
    AS3.setBindable(panel_109_9_$1,"layout" , layout_HBox_157_13_$1);
    container_91_5_$1.items = [container_93_9_$1, container_106_9_$1, panel_109_9_$1];
    var layout_HBox_162_9_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_162_9_$1,"align" , "stretch");
    AS3.setBindable(container_91_5_$1,"layout" , layout_HBox_162_9_$1);
    config_$1.items = [container_68_5_$1, container_91_5_$1];
    var layout_VBox_168_5_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_168_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_168_5_$1);
    var editor_ToggleDashboardAction_171_5_$1/*:com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction,{});
    var editor_ToggleCollectionViewAction_172_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction,{});
    var editor_CheckInAction_173_5_$1/*:com.coremedia.cms.editor.sdk.actions.CheckInAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.CheckInAction,{});
    AS3.setBindable(editor_CheckInAction_173_5_$1,"contentValueExpression" , this.contentValueExpression$hkot);
    var editor_RevertAction_174_5_$1/*:com.coremedia.cms.editor.sdk.actions.RevertAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RevertAction,{});
    AS3.setBindable(editor_RevertAction_174_5_$1,"contentValueExpression" , this.contentValueExpression$hkot);
    var editor_ApproveAction_175_5_$1/*:com.coremedia.cms.editor.sdk.actions.ApproveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApproveAction,{});
    AS3.setBindable(editor_ApproveAction_175_5_$1,"contentValueExpression" , this.contentValueExpression$hkot);
    var editor_PublishAction_176_5_$1/*:com.coremedia.cms.editor.sdk.actions.PublishAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.PublishAction,{});
    AS3.setBindable(editor_PublishAction_176_5_$1,"contentValueExpression" , this.contentValueExpression$hkot);
    var editor_ApprovePublishAction_177_5_$1/*:com.coremedia.cms.editor.sdk.actions.ApprovePublishAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApprovePublishAction,{});
    AS3.setBindable(editor_ApprovePublishAction_177_5_$1,"contentValueExpression" , this.contentValueExpression$hkot);
    var editor_WithdrawAction_178_5_$1/*:com.coremedia.cms.editor.sdk.actions.WithdrawAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.WithdrawAction,{});
    AS3.setBindable(editor_WithdrawAction_178_5_$1,"contentValueExpression" , this.contentValueExpression$hkot);
    var editor_ShowInRepositoryAction_179_5_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_179_5_$1,"contentValueExpression" , this.contentValueExpression$hkot);
    AS3.setBindable(editor_ShowInRepositoryAction_179_5_$1,"treeModelId" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.TREE_MODEL_ID));
    var editor_ContentExportAction_181_5_$1/*:com.coremedia.cms.editor.sdk.util.ContentExportAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.ContentExportAction,{});
    AS3.setBindable(editor_ContentExportAction_181_5_$1,"contentValueExpression" , this.contentValueExpression$hkot);
    var editor_BookmarkAction_182_5_$1/*:com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction,{});
    AS3.setBindable(editor_BookmarkAction_182_5_$1,"contentValueExpression" , this.contentValueExpression$hkot);
    AS3.setBindable(config_$1,"actionList" , [new com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction(editor_ToggleDashboardAction_171_5_$1), new com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction(editor_ToggleCollectionViewAction_172_5_$1), new com.coremedia.cms.editor.sdk.actions.CheckInAction(editor_CheckInAction_173_5_$1), new com.coremedia.cms.editor.sdk.actions.RevertAction(editor_RevertAction_174_5_$1), new com.coremedia.cms.editor.sdk.actions.ApproveAction(editor_ApproveAction_175_5_$1), new com.coremedia.cms.editor.sdk.actions.PublishAction(editor_PublishAction_176_5_$1), new com.coremedia.cms.editor.sdk.actions.ApprovePublishAction(editor_ApprovePublishAction_177_5_$1), new com.coremedia.cms.editor.sdk.actions.WithdrawAction(editor_WithdrawAction_178_5_$1), new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_179_5_$1), new com.coremedia.cms.editor.sdk.util.ContentExportAction(editor_ContentExportAction_181_5_$1), new com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction(editor_BookmarkAction_182_5_$1)]);
    config_$1["actionList$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hkot(config_$1);
  }/*

    // called by generated constructor code
    //noinspection JSUnusedLocalSymbols
    private*/ function __initialize__(config/*:EditorMainView*/)/*:void*/ {
      this.contentValueExpression$hkot = com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION;
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.EditorMainViewBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.editorMainView",
      contentValueExpression$hkot: null,
      constructor: EditorMainView$,
      super$hkot: function() {
        com.coremedia.cms.editor.sdk.desktop.EditorMainViewBase.prototype.constructor.apply(this, arguments);
      },
      __initialize__$hkot: __initialize__,
      statics: {
        ID: "main",
        HEADER_TOOLBAR_ID: "header-toolbar",
        TOP_CONTAINER_ITEM_ID: "topContainer",
        FAVORITES_TOOLBAR_BORDER_ID: "favorites-toolbar-border",
        ACTIONS_TOOLBAR_BORDER_ID: "actions-toolbar-border",
        SIDE_PANEL_WEST_ID: "side-panel-west",
        SIDE_PANEL_EAST_ID: "side-panel-east",
        DARK_GRADIENT_BACKGROUND_CSS_CLASS: "gray-background-60",
        MAIN_PANEL_BLOCK: "cm-main-view-panel",
        SIDE_PANEL_WEST_ELEMENT: "west",
        SIDE_PANEL_EAST_ELEMENT: "east"
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.sdk.desktop.EditorMainViewBase",
        "com.coremedia.ui.layouts.MultiItemSplitter",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.SplitterSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ApproveAction",
        "com.coremedia.cms.editor.sdk.actions.ApprovePublishAction",
        "com.coremedia.cms.editor.sdk.actions.CheckInAction",
        "com.coremedia.cms.editor.sdk.actions.PublishAction",
        "com.coremedia.cms.editor.sdk.actions.RevertAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction",
        "com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction",
        "com.coremedia.cms.editor.sdk.desktop.ActionsToolbar",
        "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbar",
        "com.coremedia.cms.editor.sdk.desktop.HeaderToolbar",
        "com.coremedia.cms.editor.sdk.desktop.MainNavigationToolbar",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel",
        "com.coremedia.cms.editor.sdk.util.ContentExportAction"
      ]
    };
});
