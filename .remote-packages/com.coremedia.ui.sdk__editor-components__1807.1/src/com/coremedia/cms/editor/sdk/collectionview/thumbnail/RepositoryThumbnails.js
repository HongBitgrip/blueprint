Ext.define("com.coremedia.cms.editor.sdk.collectionview.thumbnail.RepositoryThumbnails", function(RepositoryThumbnails) {/*package com.coremedia.cms.editor.sdk.collectionview.thumbnail{
import com.coremedia.cms.editor.sdk.collectionview.thumbnail.*;
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.panel.Panel;
import ext.panel.PanelHeader;
import com.coremedia.ui.plugins.ContextMenuPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class RepositoryThumbnails extends RepositoryThumbnailsBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.repositoryThumbnails";

    /**
     * The itemId of the thumb data view panel.
     * /
    public static const THUMB_DATA_VIEW_PANEL_ITEM_ID:String = "thumbdataviewscroller";

    public*/function RepositoryThumbnails$(config/*:RepositoryThumbnails = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.thumbnail.RepositoryThumbnailsBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.thumbnail.RepositoryThumbnailsBase,{});
    var defaults_$1/*:RepositoryThumbnails*/ =AS3.cast(RepositoryThumbnails,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "border");
    var ui_BEMPlugin_49_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_49_5_$1,"block" , "thumb-view-container");
    AS3.setBindable(ui_BEMPlugin_49_5_$1,"modifier" , "library");
    config_$1.plugins = [ui_BEMPlugin_49_5_$1];
    var panel_53_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_53_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryThumbnails.THUMB_DATA_VIEW_PANEL_ITEM_ID);
    panel_53_5_$1.bodyBorder = false;
    AS3.setBindable(panel_53_5_$1,"scrollable" , true);
    AS3.setBindable(panel_53_5_$1,"region" , "center");
    panel_53_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.EMBEDDED.getSkin());
    AS3.setBindable(panel_53_5_$1,"layout" , "anchor");
    var object_60_9_$1/*:Object*/ = {};
    object_60_9_$1.afterrender =AS3.bind( this,"disableBrowserContextMenu");
    AS3.setBindable(panel_53_5_$1,"listeners" , object_60_9_$1);
    var header_63_9_$1/*:ext.panel.PanelHeader*/ =AS3.cast(Ext.panel.Header,{});
    AS3.setBindable(header_63_9_$1,"height" , "24px");
    panel_53_5_$1.header = header_63_9_$1;
    var editor_ThumbDataView_66_9_$1/*: com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataView*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataView,{});
    editor_ThumbDataView_66_9_$1.itemId = "thumbdataview";
    editor_ThumbDataView_66_9_$1.dragDDGroup = "ContentDD";
    AS3.setBindable(editor_ThumbDataView_66_9_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( '<div class="collection-view-empty-text">' + this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_emptyFolder_text') + '</div>'));
    AS3.setBindable(editor_ThumbDataView_66_9_$1,"selectedItemsValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    AS3.setBindable(editor_ThumbDataView_66_9_$1,"createdContentValueExpression" , AS3.getBindable(config,"createdContentValueExpression"));
    AS3.setBindable(editor_ThumbDataView_66_9_$1,"bindTo" , this.getContentsValueExpression());
    var ui_ContextMenuPlugin_73_13_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var editor_CollectionRepositoryContextMenu_75_17_$1/*: com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu,{});
    editor_CollectionRepositoryContextMenu_75_17_$1.selectedItemsValueExpression = AS3.getBindable(config,"selectedItemsValueExpression");
    AS3.setBindable(editor_CollectionRepositoryContextMenu_75_17_$1,"selectedFolderValueExpression" , this.getSelectedFolderExpression());
    AS3.setBindable(ui_ContextMenuPlugin_73_13_$1,"contextMenu" , editor_CollectionRepositoryContextMenu_75_17_$1);
    editor_ThumbDataView_66_9_$1.plugins = [ui_ContextMenuPlugin_73_13_$1];
    editor_ThumbDataView_66_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    panel_53_5_$1.items = [editor_ThumbDataView_66_9_$1];
    config_$1.items = [panel_53_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$5a_a(config_$1);
  }/*

    /**
     * A model for informing the about newly created content.
     * /
    [Bindable]
    public var createdContentValueExpression:ValueExpression;

    /**
     * A value expression that specifies where to set the multiply selected items
     * /
    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;

    /**
     the collectionViewModel from the collection view.
     * /
    [Bindable]
    public var collectionViewModel:com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.thumbnail.RepositoryThumbnailsBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.repositoryThumbnails",
      constructor: RepositoryThumbnails$,
      super$5a_a: function() {
        com.coremedia.cms.editor.sdk.collectionview.thumbnail.RepositoryThumbnailsBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        createdContentValueExpression: null,
        selectedItemsValueExpression: null,
        collectionViewModel: null
      },
      statics: {THUMB_DATA_VIEW_PANEL_ITEM_ID: "thumbdataviewscroller"},
      requires: [
        "Ext.panel.Header",
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.thumbnail.RepositoryThumbnailsBase",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu",
        "com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataView"
      ]
    };
});
