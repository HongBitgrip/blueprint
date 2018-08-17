Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.SearchList", function(SearchList) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.collectionview.list.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu;
import com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPlugin;
import com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class SearchList extends SearchListBase{

    import com.coremedia.cap.content.search.SearchParameters;
    import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
    import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
    import com.coremedia.ui.context.ComponentContextManager;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.searchList";
    private var searchResultHitsValueExpression:ValueExpression;
    private var mySelectedItemsValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__()/*:void*/ {
      this.searchResultHitsValueExpression$_FOb = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SEARCHRESULT_VARIABLE_NAME).extendBy(com.coremedia.cap.content.search.SearchParameters.HITS);
      this.mySelectedItemsValueExpression$_FOb = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_SEARCH_ITEMS_VARIABLE_NAME);
    }/*

    public*/function SearchList$(config/*:SearchList = null*/){if(arguments.length<=0)config=null;this.__initialize__$_FOb();
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.SearchListBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.SearchListBase,{});
    var defaults_$1/*:SearchList*/ =AS3.cast(SearchList,{});
    AS3.setBindable(defaults_$1,"instanceName" , "defaultCollectionViewList");
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.selectedItemsValueExpression = this.mySelectedItemsValueExpression$_FOb;
    AS3.setBindable(config_$1,"orderByPropertyInCollectionViewModel" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.ORDER_BY_PROPERTY));
    config_$1.emptyText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_emptySearch_text'));
    config_$1.header = false;
    var editor_ListViewBindListPlugin_47_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPlugin,{});
    AS3.setBindable(editor_ListViewBindListPlugin_47_5_$1,"bindTo" , this.searchResultHitsValueExpression$_FOb);
    AS3.setBindable(editor_ListViewBindListPlugin_47_5_$1,"initialViewLimit" , 50);
    AS3.setBindable(editor_ListViewBindListPlugin_47_5_$1,"viewLimitIncrement" , 100);
    var ui_ContextMenuPlugin_50_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var editor_CollectionSearchContextMenu_52_9_$1/*:com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu,{});
    editor_CollectionSearchContextMenu_52_9_$1.selectedItemsValueExpression = this.mySelectedItemsValueExpression$_FOb;
    AS3.setBindable(ui_ContextMenuPlugin_50_5_$1,"contextMenu" , editor_CollectionSearchContextMenu_52_9_$1);
    var editor_HandleEmptySearchResultPlugin_55_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPlugin,{});
    config_$1.plugins = [editor_ListViewBindListPlugin_47_5_$1, ui_ContextMenuPlugin_50_5_$1, editor_HandleEmptySearchResultPlugin_55_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.PREPEND;
    var editor_ListViewTypeIconColumn_59_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn,{});
    AS3.setBindable(editor_ListViewTypeIconColumn_59_5_$1,"showTypeName" , true);
    editor_ListViewTypeIconColumn_59_5_$1.sortable = true;
    editor_ListViewTypeIconColumn_59_5_$1["sortField"] = "type";
    var editor_ListViewNameColumn_62_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn,{});
    editor_ListViewNameColumn_62_5_$1.sortable = true;
    var editor_ListViewCreationDateColumn_63_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn,{});
    editor_ListViewCreationDateColumn_63_5_$1.sortable = true;
    var editor_FreshnessColumn_64_5_$1/*:com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn,{});
    AS3.setBindable(editor_FreshnessColumn_64_5_$1,"hidden" , true);
    editor_FreshnessColumn_64_5_$1.sortable = true;
    var editor_ListViewStatusColumn_66_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn,{});
    editor_ListViewStatusColumn_66_5_$1.sortable = true;
    AS3.setBindable(config_$1,"defaultColumns" , [editor_ListViewTypeIconColumn_59_5_$1, editor_ListViewNameColumn_62_5_$1, editor_ListViewCreationDateColumn_63_5_$1, editor_FreshnessColumn_64_5_$1, editor_ListViewStatusColumn_66_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_FOb(config_$1);
  }/*

    /**

     The name of the instances of the repository and search list which has to be configured by the plugin.

     * /
    [Bindable]
    public var instanceName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.list.SearchListBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.searchList",
      searchResultHitsValueExpression$_FOb: null,
      mySelectedItemsValueExpression$_FOb: null,
      __initialize__$_FOb: __initialize__,
      constructor: SearchList$,
      super$_FOb: function() {
        com.coremedia.cms.editor.sdk.collectionview.list.SearchListBase.prototype.constructor.apply(this, arguments);
      },
      config: {instanceName: null},
      requires: [
        "com.coremedia.cap.content.search.SearchParameters",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.list.SearchListBase",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPlugin",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPlugin",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn"
      ]
    };
});
