Ext.define("com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer", function(FolderContentContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList;
import com.coremedia.cms.editor.sdk.collectionview.thumbnail.RepositoryThumbnails;
import ext.layout.container.CardLayout;
public class FolderContentContainer extends FolderContentContainerBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.folderContentContainer";

    public*/function FolderContentContainer$(config/*:FolderContentContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.FolderContentContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.FolderContentContainerBase,{});
    var defaults_$1/*:FolderContentContainer*/ =AS3.cast(FolderContentContainer,{});
    AS3.setBindable(defaults_$1,"instanceName" , "defaultCollectionViewList");
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"activeItemValueExpression" , com.coremedia.cms.editor.sdk.collectionview.FolderContentContainerBase.getActiveItemValueExpression());
    var editor_RepositoryList_31_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList,{});
    editor_RepositoryList_31_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW);
    AS3.setBindable(editor_RepositoryList_31_5_$1,"createdContentValueExpression" , AS3.getBindable(config,"createdContentValueExpression"));
    editor_RepositoryList_31_5_$1.selectedItemsValueExpression = AS3.getBindable(config,"selectedRepositoryItemsValueExpression");
    AS3.setBindable(editor_RepositoryList_31_5_$1,"instanceName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"instanceName")));
    var editor_RepositoryThumbnails_35_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.thumbnail.RepositoryThumbnails*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.thumbnail.RepositoryThumbnails,{});
    editor_RepositoryThumbnails_35_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.THUMBNAILS_VIEW);
    AS3.setBindable(editor_RepositoryThumbnails_35_5_$1,"createdContentValueExpression" , AS3.getBindable(config,"createdContentValueExpression"));
    AS3.setBindable(editor_RepositoryThumbnails_35_5_$1,"selectedItemsValueExpression" , AS3.getBindable(config,"selectedRepositoryItemsValueExpression"));
    config_$1.items = [editor_RepositoryList_31_5_$1, editor_RepositoryThumbnails_35_5_$1];
    var layout_Card_40_5_$1/*:ext.layout.container.CardLayout*/ =AS3.cast(Ext.layout.container.Card,{});
    layout_Card_40_5_$1.deferredRender = true;
    AS3.setBindable(config_$1,"layout" , layout_Card_40_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mDM7(config_$1);
  }/*

    [Bindable]
    public var selectedRepositoryItemsValueExpression:ValueExpression;

    /**

     The name of the instances of the repository and search list which has to be configured by the plugin.

     * /
    [Bindable]
    public var instanceName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.FolderContentContainerBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.folderContentContainer",
      constructor: FolderContentContainer$,
      super$mDM7: function() {
        com.coremedia.cms.editor.sdk.collectionview.FolderContentContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedRepositoryItemsValueExpression: null,
        instanceName: null
      },
      requires: [
        "Ext.layout.container.Card",
        "com.coremedia.cms.editor.sdk.collectionview.FolderContentContainerBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.list.RepositoryList",
        "com.coremedia.cms.editor.sdk.collectionview.thumbnail.RepositoryThumbnails"
      ]
    };
});
