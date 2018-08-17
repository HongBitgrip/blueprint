Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList", function(RepositoryList) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.collectionview.list.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu;
import com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class RepositoryList extends RepositoryListBase{

    import com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase;
    import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.repositoryList";

    public*/function RepositoryList$(config/*:RepositoryList = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.RepositoryListBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.RepositoryListBase,{});
    var defaults_$1/*:RepositoryList*/ =AS3.cast(RepositoryList,{});
    AS3.setBindable(defaults_$1,"instanceName" , "defaultCollectionViewList");
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"orderByPropertyInCollectionViewModel" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.ORDER_BY_PROPERTY_REPOSITORY_LIST));
    config_$1.emptyText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_emptyFolder_text'));
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_repositorylist_text'));
    config_$1.header = false;
    var editor_ListViewBindListPlugin_38_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPlugin,{});
    AS3.setBindable(editor_ListViewBindListPlugin_38_5_$1,"bindTo" , this.getContentsValueExpression());
    var ui_ContextMenuPlugin_39_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var editor_CollectionRepositoryContextMenu_41_9_$1/*:com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu,{});
    editor_CollectionRepositoryContextMenu_41_9_$1.selectedItemsValueExpression = config.selectedItemsValueExpression;
    AS3.setBindable(editor_CollectionRepositoryContextMenu_41_9_$1,"selectedFolderValueExpression" , this.getSelectedFolderExpression());
    AS3.setBindable(ui_ContextMenuPlugin_39_5_$1,"contextMenu" , editor_CollectionRepositoryContextMenu_41_9_$1);
    config_$1.plugins = [editor_ListViewBindListPlugin_38_5_$1, ui_ContextMenuPlugin_39_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.PREPEND;
    var editor_ListViewTypeIconColumn_49_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn,{});
    AS3.setBindable(editor_ListViewTypeIconColumn_49_5_$1,"showTypeName" , true);
    editor_ListViewTypeIconColumn_49_5_$1.sortable = true;
    editor_ListViewTypeIconColumn_49_5_$1["sortField"] = "type";
    var editor_ListViewNameColumn_52_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn,{});
    editor_ListViewNameColumn_52_5_$1.sortable = true;
    editor_ListViewNameColumn_52_5_$1["defaultSortColumn"] = true;
    editor_ListViewNameColumn_52_5_$1["defaultSortDirection"] = "asc";
    var editor_ListViewCreationDateColumn_55_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn,{});
    editor_ListViewCreationDateColumn_55_5_$1.sortable = true;
    var editor_FreshnessColumn_56_5_$1/*:com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn,{});
    AS3.setBindable(editor_FreshnessColumn_56_5_$1,"hidden" , true);
    editor_FreshnessColumn_56_5_$1.sortable = true;
    var editor_ListViewStatusColumn_58_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn,{});
    editor_ListViewStatusColumn_58_5_$1.sortable = true;
    AS3.setBindable(config_$1,"defaultColumns" , [editor_ListViewTypeIconColumn_49_5_$1, editor_ListViewNameColumn_52_5_$1, editor_ListViewCreationDateColumn_55_5_$1, editor_FreshnessColumn_56_5_$1, editor_ListViewStatusColumn_58_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$cTD7(config_$1);
  }/*

    /**

     The name of the instances of the repository and search list which has to be configured by the plugin.

     * /
    [Bindable]
    public var instanceName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.list.RepositoryListBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.repositoryList",
      constructor: RepositoryList$,
      super$cTD7: function() {
        com.coremedia.cms.editor.sdk.collectionview.list.RepositoryListBase.prototype.constructor.apply(this, arguments);
      },
      config: {instanceName: null},
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.list.RepositoryListBase",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPlugin",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeIconColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn"
      ]
    };
});
