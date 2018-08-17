Ext.define("com.coremedia.cms.editor.sdk.collectionview.thumbnail.SearchThumbnails", function(SearchThumbnails) {/*package com.coremedia.cms.editor.sdk.collectionview.thumbnail{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.panel.Panel;
import ext.panel.PanelHeader;
import com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataView;
import com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPlugin;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class SearchThumbnails extends Container{

    import com.coremedia.cap.content.search.SearchParameters;
    import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
    import com.coremedia.ui.context.ComponentContextManager;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.searchThumbnails";

    /**
     * The itemId of the thumb data view panel.
     * /
    public static const THUMB_DATA_VIEW_PANEL_ITEM_ID:String = "thumbdataviewscroller";
    private var selectedItemsValueExpression:ValueExpression;
    private var searchResultHitsValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__()/*:void*/ {
      this.selectedItemsValueExpression$qCu2 = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_SEARCH_ITEMS_VARIABLE_NAME);
      this.searchResultHitsValueExpression$qCu2 = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SEARCHRESULT_VARIABLE_NAME).extendBy(com.coremedia.cap.content.search.SearchParameters.HITS);
    }/*

    public*/function SearchThumbnails$(config/*:SearchThumbnails = null*/){if(arguments.length<=0)config=null;this.__initialize__$qCu2();
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:SearchThumbnails*/ =AS3.cast(SearchThumbnails,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "border");
    var ui_BEMPlugin_39_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_39_5_$1,"block" , "thumb-view-container");
    AS3.setBindable(ui_BEMPlugin_39_5_$1,"modifier" , "library");
    config_$1.plugins = [ui_BEMPlugin_39_5_$1];
    var panel_43_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_43_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchThumbnails.THUMB_DATA_VIEW_PANEL_ITEM_ID);
    panel_43_5_$1.bodyBorder = false;
    AS3.setBindable(panel_43_5_$1,"scrollable" , true);
    panel_43_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.EMBEDDED.getSkin());
    AS3.setBindable(panel_43_5_$1,"region" , "center");
    AS3.setBindable(panel_43_5_$1,"layout" , "anchor");
    var header_50_9_$1/*:ext.panel.PanelHeader*/ =AS3.cast(Ext.panel.Header,{});
    AS3.setBindable(header_50_9_$1,"height" , "24px");
    panel_43_5_$1.header = header_50_9_$1;
    var editor_ThumbDataView_53_9_$1/*:com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataView*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataView,{});
    editor_ThumbDataView_53_9_$1.itemId = "thumbdataview";
    editor_ThumbDataView_53_9_$1.dragDDGroup = "ContentDD";
    AS3.setBindable(editor_ThumbDataView_53_9_$1,"bindTo" , this.searchResultHitsValueExpression$qCu2);
    AS3.setBindable(editor_ThumbDataView_53_9_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_emptySearch_text')));
    AS3.setBindable(editor_ThumbDataView_53_9_$1,"selectedItemsValueExpression" , this.selectedItemsValueExpression$qCu2);
    AS3.setBindable(editor_ThumbDataView_53_9_$1,"initialViewLimit" , 50);
    AS3.setBindable(editor_ThumbDataView_53_9_$1,"viewLimitIncrement" , 100);
    var editor_HandleEmptySearchResultPlugin_61_13_$1/*:com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPlugin,{});
    var ui_ContextMenuPlugin_62_13_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var editor_CollectionSearchContextMenu_64_17_$1/*:com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu,{});
    editor_CollectionSearchContextMenu_64_17_$1.selectedItemsValueExpression = this.selectedItemsValueExpression$qCu2;
    AS3.setBindable(ui_ContextMenuPlugin_62_13_$1,"contextMenu" , editor_CollectionSearchContextMenu_64_17_$1);
    editor_ThumbDataView_53_9_$1.plugins = [editor_HandleEmptySearchResultPlugin_61_13_$1, ui_ContextMenuPlugin_62_13_$1];
    editor_ThumbDataView_53_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    panel_43_5_$1.items = [editor_ThumbDataView_53_9_$1];
    config_$1.items = [panel_43_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$qCu2(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.cms.editor.sdk.config.searchThumbnails",
      selectedItemsValueExpression$qCu2: null,
      searchResultHitsValueExpression$qCu2: null,
      __initialize__$qCu2: __initialize__,
      constructor: SearchThumbnails$,
      super$qCu2: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      statics: {THUMB_DATA_VIEW_PANEL_ITEM_ID: "thumbdataviewscroller"},
      requires: [
        "Ext.container.Container",
        "Ext.panel.Header",
        "Ext.panel.Panel",
        "com.coremedia.cap.content.search.SearchParameters",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPlugin",
        "com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataView"
      ]
    };
});
