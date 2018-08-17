Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionView", function(CollectionView) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.*;
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.collectionview.search.SearchArea;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanel;
import com.coremedia.cms.editor.sdk.collectionview.list.SearchList;
import com.coremedia.cms.editor.sdk.collectionview.thumbnail.SearchThumbnails;
import ext.layout.container.CardLayout;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout;
import com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTree;
import ext.panel.PanelHeader;
import ext.toolbar.Toolbar;
import ext.toolbar.TextItem;
import com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction;
import com.coremedia.cms.editor.sdk.upload.FileDropPlugin;
[PublicApi]
/**

 The collection view of the Studio. Its target component implements the interface ICollectionView,
 which can be used by plugins plugging into <code>&lt;editor:collectionView&gt;</code>.

 @see com.coremedia.cms.editor.sdk.collectionview.ICollectionView

 * /
/* using focusable="true" here as focus delegation from parent containers (e.g. windows) doesn't work otherwise. * /
public class CollectionView extends CollectionViewBase{

    import com.coremedia.ui.context.ComponentContextManager;
    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.util.EncodingUtil;
    import com.coremedia.ui.util.ObservableUtil;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.collectionView";

    /**
     * The context property name for the collection view model
     * /
    public static const MODEL_VARIABLE_NAME:String = "collectionViewModel";

    /**
     * The context property name for the search result
     * /
    public static const SEARCHRESULT_VARIABLE_NAME:String = "searchResult";

    /**
     * The context property name for the currently selected folder in the collection tree or breadcrumb.
     * /
    public static const SELECTED_FOLDER_VARIABLE_NAME:String = "selectedFolder";

    /**
     * The context property name for the currently selected items in the repository view.
     * /
    public static const SELECTED_REPOSITORY_ITEMS_VARIABLE_NAME:String = "selectedRepositoryItems";

    /**
     * The context property name for the currently selected items, either in the repository view, or, if that selection is empty, the selected folder in the tree or breadcrumb.
     * /
    public static const SELECTED_ITEMS_VARIABLE_NAME:String = "selectedItems";

    /**
     * The context property for the currently selected items in the search view.
     * The context value is an array of contents.
     * /
    public static const SELECTED_SEARCH_ITEMS_VARIABLE_NAME:String = "selectedSearchItems";

    /**
     * The item id of the switching container consisting of cms repository and cms search container
     * /
    public static const COLLECTION_MODES_CONTAINER_ITEM_ID:String = "collections-panel";

    /**
     * The item id of the switching container consisting of cms repository and cms search container
     * /
    public static const SEARCH_AREA_ITEM_ID:String = "search-area";

    /**
     * The item id of the switching container consisting of the library tree
     * /
    public static const TREE_ITEM_ID:String = "library-tree";

    /**
     * The context property name for the footer info of the collection view.
     * /
    public static const FOOTER_INFO_ITEM_ID:String = "collection-view-footer-info";

    /**
     * This is the CSS class of the surrounding container for filters in search view mode.
     * /
    public static const FILTER_ITEMS_CONTAINER:String = "filter-items-container";

    /**
     * This is the CSS class of the surrounding container for the tree in repository view mode.
     * /
    public static const REPOSITORY_ITEMS_CONTAINER:String = "repository-items-container";

    /**
     * This is the CSS class of the surrounding container for the tree in repository view mode.
     * /
    public static const REPOSITORY_LIST_ITEM_ID:String = "repository-panel";

    public static const COLLECTION_VIEW_ID:String = "collection-view";

    public static var LIBRARY_UPLOAD_OPEN_IN_TAB_DEFAULT:Boolean = false;

    public static const COLLECTION_VIEW_FOOTER_TEXT:BEMBlock =*/function COLLECTION_VIEW_FOOTER_TEXT$static_(){CollectionView.COLLECTION_VIEW_FOOTER_TEXT=( new com.coremedia.ui.models.bem.BEMBlock("cm-collection-view-footer-item"));}/*;

    private*/ function __initialize__(config/*:CollectionView*/)/*:void*/ {
      com.coremedia.ui.util.ObservableUtil.init(this, config);
    }/*

    public*/function CollectionView$(config/*:CollectionView = null*/){if(arguments.length<=0)config=null;this.__initialize__$cq1K(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase,{});
    var defaults_$1/*:CollectionView*/ =AS3.cast(CollectionView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["ariaRole"] = "region";
    config_$1["focusable"] = true;
    config_$1.defaultFocus =net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(CollectionView.SEARCH_AREA_ITEM_ID).build());
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_label'));
    config_$1["id"] = CollectionView.COLLECTION_VIEW_ID;
    var editor_SearchArea_124_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.search.SearchArea*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchArea,{});
    AS3.setBindable(editor_SearchArea_124_5_$1,"region" , "north");
    editor_SearchArea_124_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionView.SEARCH_AREA_ITEM_ID);
    AS3.setBindable(editor_SearchArea_124_5_$1,"collectionViewModel" , this.getCollectionViewModel());
    var ui_SwitchingContainer_127_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_127_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionView.COLLECTION_MODES_CONTAINER_ITEM_ID);
    AS3.setBindable(ui_SwitchingContainer_127_5_$1,"layoutOnCardChange" , true);
    AS3.setBindable(ui_SwitchingContainer_127_5_$1,"region" , "center");
    var editor_CollectionViewSearchContainer_131_9_$1/*: com.coremedia.cms.editor.sdk.collectionview.CollectionViewSearchContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionViewSearchContainer,{});
    AS3.setBindable(editor_CollectionViewSearchContainer_131_9_$1,"selectedItemsValueExpression" , this.getSelectedSearchItemsValueExpression());
    AS3.setBindable(editor_CollectionViewSearchContainer_131_9_$1,"selectedFolderValueExpression" , this.getSelectedFolderValueExpression());
    var editor_SearchToolbarContainer_134_13_$1/*: com.coremedia.cms.editor.sdk.collectionview.SearchToolbarContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchToolbarContainer,{});
    AS3.setBindable(editor_SearchToolbarContainer_134_13_$1,"region" , "north");
    AS3.setBindable(editor_SearchToolbarContainer_134_13_$1,"selectedItemsValueExpression" , this.getSelectedSearchItemsValueExpression());
    AS3.setBindable(editor_SearchToolbarContainer_134_13_$1,"activeSearchToolbarExpression" , this.getActiveSearchToolbarViewExpression());
    var editor_SearchFiltersPanel_137_13_$1/*:com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanel,{});
    var editor_SearchSwitchingContainer_138_13_$1/*: com.coremedia.cms.editor.sdk.collectionview.SearchSwitchingContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchSwitchingContainer,{});
    AS3.setBindable(editor_SearchSwitchingContainer_138_13_$1,"region" , "center");
    editor_SearchSwitchingContainer_138_13_$1.itemId = "searchSwitchingContainer";
    AS3.setBindable(editor_SearchSwitchingContainer_138_13_$1,"activeItemValueExpression" , this.getActiveSearchListExpression());
    var editor_SearchContainer_142_17_$1/*: com.coremedia.cms.editor.sdk.collectionview.SearchContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchContainer,{});
    editor_SearchContainer_142_17_$1.itemId = "search-panel";
    var editor_SearchList_144_21_$1/*:com.coremedia.cms.editor.sdk.collectionview.list.SearchList*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.SearchList,{});
    editor_SearchList_144_21_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW);
    var editor_SearchThumbnails_145_21_$1/*:com.coremedia.cms.editor.sdk.collectionview.thumbnail.SearchThumbnails*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.thumbnail.SearchThumbnails,{});
    editor_SearchThumbnails_145_21_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.THUMBNAILS_VIEW);
    editor_SearchContainer_142_17_$1.items = [editor_SearchList_144_21_$1, editor_SearchThumbnails_145_21_$1];
    var layout_Card_148_21_$1/*:ext.layout.container.CardLayout*/ =AS3.cast(Ext.layout.container.Card,{});
    layout_Card_148_21_$1.deferredRender = true;
    AS3.setBindable(editor_SearchContainer_142_17_$1,"layout" , layout_Card_148_21_$1);
    var ui_ValueExpression_151_21_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_151_21_$1,"expression" , "view");
    AS3.setBindable(ui_ValueExpression_151_21_$1,"context" , this.getCollectionViewModel().getMainStateBean());
    AS3.setBindable(editor_SearchContainer_142_17_$1,"activeItemValueExpression" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_151_21_$1));
    editor_SearchSwitchingContainer_138_13_$1.lazyItems = [editor_SearchContainer_142_17_$1];
    editor_CollectionViewSearchContainer_131_9_$1.items = [editor_SearchToolbarContainer_134_13_$1, editor_SearchFiltersPanel_137_13_$1, editor_SearchSwitchingContainer_138_13_$1];
    var editor_ExtendedBorderLayout_159_13_$1/*:com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout*/ =AS3.cast(com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout,{});
    AS3.setBindable(editor_ExtendedBorderLayout_159_13_$1,"showCollapsedTitles" , ['west']);
    AS3.setBindable(editor_CollectionViewSearchContainer_131_9_$1,"layout" , editor_ExtendedBorderLayout_159_13_$1);
    var editor_CollectionViewRepositoryContainer_162_9_$1/*: com.coremedia.cms.editor.sdk.collectionview.CollectionViewRepositoryContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionViewRepositoryContainer,{});
    AS3.setBindable(editor_CollectionViewRepositoryContainer_162_9_$1,"selectedItemsValueExpression" , this.getSelectedItemsValueExpression());
    AS3.setBindable(editor_CollectionViewRepositoryContainer_162_9_$1,"selectedFolderValueExpression" , this.getSelectedFolderValueExpression());
    var editor_RepositoryToolbarSwitchingContainer_165_13_$1/*: com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarSwitchingContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarSwitchingContainer,{});
    AS3.setBindable(editor_RepositoryToolbarSwitchingContainer_165_13_$1,"region" , "north");
    editor_RepositoryToolbarSwitchingContainer_165_13_$1.itemId = "toolbarSwitchingContainer";
    AS3.setBindable(editor_RepositoryToolbarSwitchingContainer_165_13_$1,"activeItemValueExpression" , this.getActiveRepositoryToolbarExpression());
    var editor_RepositoryToolbarContainer_169_17_$1/*: com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarContainer,{});
    editor_RepositoryToolbarContainer_169_17_$1.itemId = "repositoryToolbar";
    AS3.setBindable(editor_RepositoryToolbarContainer_169_17_$1,"selectedItemsValueExpression" , this.getSelectedItemsValueExpression());
    AS3.setBindable(editor_RepositoryToolbarContainer_169_17_$1,"createdContentValueExpression" , this.getCreatedContentValueExpression());
    editor_RepositoryToolbarSwitchingContainer_165_13_$1.lazyItems = [editor_RepositoryToolbarContainer_169_17_$1];
    var editor_LibraryTree_174_13_$1/*:com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTree*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTree,{});
    AS3.setBindable(editor_LibraryTree_174_13_$1,"region" , "west");
    editor_LibraryTree_174_13_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionView.TREE_ITEM_ID);
    AS3.setBindable(editor_LibraryTree_174_13_$1,"width" , com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase.getLibraryTreeWidth());
    editor_LibraryTree_174_13_$1["minSize"] = 203;
    editor_LibraryTree_174_13_$1["maxSize"] = 500;
    editor_LibraryTree_174_13_$1["floatable"] = false;
    editor_LibraryTree_174_13_$1["split"] = {width: '3px', collapsible: false};
    AS3.setBindable(editor_LibraryTree_174_13_$1,"openPathValueExpression" , this.getOpenPathValueExpression());
    AS3.setBindable(editor_LibraryTree_174_13_$1,"createdContentValueExpression" , this.getCreatedContentValueExpression());
    AS3.setBindable(editor_LibraryTree_174_13_$1,"containerComponent" , this);
    editor_LibraryTree_174_13_$1.bodyBorder = false;
    editor_LibraryTree_174_13_$1.collapsible = true;
    editor_LibraryTree_174_13_$1.titleCollapse = true;
    editor_LibraryTree_174_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.EMBEDDED.getSkin());
    editor_LibraryTree_174_13_$1.useArrows = true;
    editor_LibraryTree_174_13_$1.lines = true;
    var plugins_BEMPlugin_191_17_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(plugins_BEMPlugin_191_17_$1,"block" , "x-autowidth-table");
    editor_LibraryTree_174_13_$1.plugins = [plugins_BEMPlugin_191_17_$1];
    editor_LibraryTree_174_13_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var header_194_17_$1/*:ext.panel.PanelHeader*/ =AS3.cast(Ext.panel.Header,{});
    header_194_17_$1["focusableContainer"] = false;
    editor_LibraryTree_174_13_$1.header = header_194_17_$1;
    var editor_FolderContentSwitchingContainer_197_13_$1/*: com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer,{});
    AS3.setBindable(editor_FolderContentSwitchingContainer_197_13_$1,"region" , "center");
    editor_FolderContentSwitchingContainer_197_13_$1.itemId = "listViewSwitchingContainer";
    AS3.setBindable(editor_FolderContentSwitchingContainer_197_13_$1,"activeItemValueExpression" , this.getActiveFolderContentContainerExpression());
    var editor_FolderContentContainer_201_17_$1/*: com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer,{});
    editor_FolderContentContainer_201_17_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionView.REPOSITORY_LIST_ITEM_ID);
    AS3.setBindable(editor_FolderContentContainer_201_17_$1,"createdContentValueExpression" , this.getCreatedContentValueExpression());
    AS3.setBindable(editor_FolderContentContainer_201_17_$1,"selectedRepositoryItemsValueExpression" , this.getSelectedRepositoryItemsValueExpression());
    editor_FolderContentSwitchingContainer_197_13_$1.lazyItems = [editor_FolderContentContainer_201_17_$1];
    editor_CollectionViewRepositoryContainer_162_9_$1.items = [editor_RepositoryToolbarSwitchingContainer_165_13_$1, editor_LibraryTree_174_13_$1, editor_FolderContentSwitchingContainer_197_13_$1];
    var editor_ExtendedBorderLayout_210_13_$1/*: com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout*/ =AS3.cast(com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout,{});
    AS3.setBindable(editor_ExtendedBorderLayout_210_13_$1,"showCollapsedTitles" , ['west']);
    AS3.setBindable(editor_CollectionViewRepositoryContainer_162_9_$1,"layout" , editor_ExtendedBorderLayout_210_13_$1);
    ui_SwitchingContainer_127_5_$1.items = [editor_CollectionViewSearchContainer_131_9_$1, editor_CollectionViewRepositoryContainer_162_9_$1];
    var layout_Card_215_9_$1/*: ext.layout.container.CardLayout*/ =AS3.cast(Ext.layout.container.Card,{});
    layout_Card_215_9_$1.deferredRender = true;
    AS3.setBindable(ui_SwitchingContainer_127_5_$1,"layout" , layout_Card_215_9_$1);
    var ui_ValueExpression_218_9_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_218_9_$1,"expression" , "mode");
    AS3.setBindable(ui_ValueExpression_218_9_$1,"context" , this.getCollectionViewModel().getMainStateBean());
    AS3.setBindable(ui_SwitchingContainer_127_5_$1,"activeItemValueExpression" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_218_9_$1));
    var toolbar_223_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_223_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionView.FOOTER_INFO_ITEM_ID);
    AS3.setBindable(toolbar_223_5_$1,"region" , "south");
    AS3.setBindable(toolbar_223_5_$1,"height" , 24);
    var tbText_227_9_$1/*:ext.toolbar.TextItem*/ =AS3.cast(Ext.toolbar.TextItem,{});
    tbText_227_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase.PATH_INFO_LABEL);
    var ui_BindPropertyPlugin_229_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_229_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_229_13_$1.componentProperty = "text";
    ui_BindPropertyPlugin_229_13_$1.bindTo = this.getPathInfoExpression();
    ui_BindPropertyPlugin_229_13_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    var ui_BindVisibilityPlugin_233_13_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_233_13_$1.bindTo = this.pathInfoLabelVisibleVE();
    var ui_BEMPlugin_234_13_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_234_13_$1,"block" , CollectionView.COLLECTION_VIEW_FOOTER_TEXT);
    tbText_227_9_$1.plugins = [ui_BindPropertyPlugin_229_13_$1, ui_BindVisibilityPlugin_233_13_$1, ui_BEMPlugin_234_13_$1];
    var tbText_237_9_$1/*: ext.toolbar.TextItem*/ =AS3.cast(Ext.toolbar.TextItem,{});
    tbText_237_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase.FOLDER_ITEMS);
    var ui_BindPropertyPlugin_239_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_239_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_239_13_$1.componentProperty = "text";
    ui_BindPropertyPlugin_239_13_$1.bindTo = this.getFolderChildrenCountVE();
    var ui_BindVisibilityPlugin_242_13_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_242_13_$1.bindTo = this.folderItemsTextVisibleVE();
    var ui_BEMPlugin_243_13_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_243_13_$1,"block" , CollectionView.COLLECTION_VIEW_FOOTER_TEXT);
    tbText_237_9_$1.plugins = [ui_BindPropertyPlugin_239_13_$1, ui_BindVisibilityPlugin_242_13_$1, ui_BEMPlugin_243_13_$1];
    var tbText_246_9_$1/*: ext.toolbar.TextItem*/ =AS3.cast(Ext.toolbar.TextItem,{});
    tbText_246_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase.TOTAL_HITS_LABEL);
    var ui_BindPropertyPlugin_248_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_248_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_248_13_$1.componentProperty = "text";
    ui_BindPropertyPlugin_248_13_$1.bindTo = this.getTotalHitsExpression();
    var ui_BindVisibilityPlugin_251_13_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_251_13_$1.bindTo = this.totalHitsLabelVisibleVE();
    var ui_BEMPlugin_252_13_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_252_13_$1,"block" , CollectionView.COLLECTION_VIEW_FOOTER_TEXT);
    AS3.setBindable(ui_BEMPlugin_252_13_$1,"modifier" , "right");
    tbText_246_9_$1.plugins = [ui_BindPropertyPlugin_248_13_$1, ui_BindVisibilityPlugin_251_13_$1, ui_BEMPlugin_252_13_$1];
    toolbar_223_5_$1.items = [tbText_227_9_$1, tbText_237_9_$1, tbText_246_9_$1];
    config_$1.items = [editor_SearchArea_124_5_$1, ui_SwitchingContainer_127_5_$1, toolbar_223_5_$1];
    var editor_ExtendedBorderLayout_260_5_$1/*: com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout*/ =AS3.cast(com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout,{});
    AS3.setBindable(editor_ExtendedBorderLayout_260_5_$1,"showCollapsedTitles" , ['west']);
    AS3.setBindable(config_$1,"layout" , editor_ExtendedBorderLayout_260_5_$1);
    var editor_ToggleFloatingWindowAction_264_5_$1/*:com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction,{});
    AS3.setBindable(editor_ToggleFloatingWindowAction_264_5_$1,"component" , this);
    AS3.setBindable(config_$1,"actionList" , [new com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction(editor_ToggleFloatingWindowAction_264_5_$1)]);
    config_$1["actionList$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_FileDropPlugin_268_5_$1/*:com.coremedia.cms.editor.sdk.upload.FileDropPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.upload.FileDropPlugin,{});
    AS3.setBindable(editor_FileDropPlugin_268_5_$1,"folderValueExpression" , com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    AS3.setBindable(editor_FileDropPlugin_268_5_$1,"onDragEndHandler" , com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase.onFileDragEnd);
    AS3.setBindable(editor_FileDropPlugin_268_5_$1,"onDragOverHandler" , com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase.onFileDragOver);
    AS3.setBindable(editor_FileDropPlugin_268_5_$1,"dropHandler" ,AS3.bind( this,"fileDropHandler"));
    AS3.setBindable(editor_FileDropPlugin_268_5_$1,"uploadDisabledExpression" , this.getUploadDisabledValueExpression());
    config_$1.plugins = [editor_FileDropPlugin_268_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$cq1K(config_$1);
  }/*

    /**
     The initial State of the view.
     * /
    [Bindable]
    public var state:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.collectionView",
      __initialize__$cq1K: __initialize__,
      constructor: CollectionView$,
      super$cq1K: function() {
        com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase.prototype.constructor.apply(this, arguments);
      },
      config: {state: null},
      statics: {
        MODEL_VARIABLE_NAME: "collectionViewModel",
        SEARCHRESULT_VARIABLE_NAME: "searchResult",
        SELECTED_FOLDER_VARIABLE_NAME: "selectedFolder",
        SELECTED_REPOSITORY_ITEMS_VARIABLE_NAME: "selectedRepositoryItems",
        SELECTED_ITEMS_VARIABLE_NAME: "selectedItems",
        SELECTED_SEARCH_ITEMS_VARIABLE_NAME: "selectedSearchItems",
        COLLECTION_MODES_CONTAINER_ITEM_ID: "collections-panel",
        SEARCH_AREA_ITEM_ID: "search-area",
        TREE_ITEM_ID: "library-tree",
        FOOTER_INFO_ITEM_ID: "collection-view-footer-info",
        FILTER_ITEMS_CONTAINER: "filter-items-container",
        REPOSITORY_ITEMS_CONTAINER: "repository-items-container",
        REPOSITORY_LIST_ITEM_ID: "repository-panel",
        COLLECTION_VIEW_ID: "collection-view",
        LIBRARY_UPLOAD_OPEN_IN_TAB_DEFAULT: false,
        COLLECTION_VIEW_FOOTER_TEXT: undefined,
        __initStatics__: function() {
          COLLECTION_VIEW_FOOTER_TEXT$static_();
        }
      },
      requires: [
        "Ext.layout.container.Card",
        "Ext.panel.Header",
        "Ext.toolbar.TextItem",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.ObservableUtil",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewRepositoryContainer",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewSearchContainer",
        "com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer",
        "com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer",
        "com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarContainer",
        "com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarSwitchingContainer",
        "com.coremedia.cms.editor.sdk.collectionview.SearchContainer",
        "com.coremedia.cms.editor.sdk.collectionview.SearchSwitchingContainer",
        "com.coremedia.cms.editor.sdk.collectionview.SearchToolbarContainer",
        "com.coremedia.cms.editor.sdk.collectionview.list.SearchList",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchArea",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanel",
        "com.coremedia.cms.editor.sdk.collectionview.thumbnail.SearchThumbnails",
        "com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTree",
        "com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout",
        "com.coremedia.cms.editor.sdk.upload.FileDropPlugin"
      ]
    };
});
