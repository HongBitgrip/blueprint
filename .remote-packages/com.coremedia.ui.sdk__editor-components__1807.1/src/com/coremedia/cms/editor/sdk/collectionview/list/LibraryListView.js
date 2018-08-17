Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.LibraryListView", function(LibraryListView) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.collectionview.list.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.plugins.PersistColumnConfigurationPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
public class LibraryListView extends LibraryListViewBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.libraryListView";

    public*/function LibraryListView$(config/*:LibraryListView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.LibraryListViewBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.LibraryListViewBase,{});
    var defaults_$1/*:LibraryListView*/ =AS3.cast(LibraryListView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"ddGroup" , "ContentDD");
    AS3.setBindable(config_$1,"border" , false);
    config_$1.bufferedRenderer = false;
    var editor_PersistColumnConfigurationPlugin_25_5_$1/*:com.coremedia.cms.editor.sdk.plugins.PersistColumnConfigurationPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.PersistColumnConfigurationPlugin,{});
    AS3.setBindable(editor_PersistColumnConfigurationPlugin_25_5_$1,"storeId" , "library-list-view");
    var ui_BEMPlugin_26_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_26_5_$1,"block" , "collection-view-grid");
    AS3.setBindable(ui_BEMPlugin_26_5_$1,"modifier" , "library");
    config_$1.plugins = [editor_PersistColumnConfigurationPlugin_25_5_$1, ui_BEMPlugin_26_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.PREPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mFtV(config_$1);
  }/*

    /** The property on which the mainstate bean synchronizes
   the order by statement in a search query for the list view  * /
    [Bindable]
    public var orderByPropertyInCollectionViewModel:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.list.LibraryListViewBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.libraryListView",
      constructor: LibraryListView$,
      super$mFtV: function() {
        com.coremedia.cms.editor.sdk.collectionview.list.LibraryListViewBase.prototype.constructor.apply(this, arguments);
      },
      config: {orderByPropertyInCollectionViewModel: null},
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.list.LibraryListViewBase",
        "com.coremedia.ui.plugins.BEMPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.plugins.PersistColumnConfigurationPlugin"]
    };
});
