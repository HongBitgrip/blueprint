Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPluginBase", function(ListViewBindListPluginBase) {/*package com.coremedia.cms.editor.sdk.collectionview.list {

import com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.plugins.BindListPlugin;

import ext.Ext;

/**
 * A variant of the bind list plugin that adds data fields configured in
 * editorContext.getListViewDataFields() to the given fields. The fields
 * in the config object should be considered standard fields that are
 * always present.
 *
 * @see com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPlugin
 * /
public class ListViewBindListPluginBase extends BindListPlugin {
  /**
   * Create a ListViewBindListPlugin object
   *
   * @param config the configuration object
   * /
  public*/ function ListViewBindListPluginBase$(config/*:ListViewBindListPlugin = null*/) {if(arguments.length<=0)config=null;
    var copiedConfig/*:ListViewBindListPlugin*/ = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPlugin,Ext.apply({}, config));
    AS3.setBindable(copiedConfig,"fields" , AS3.getBindable(config,"fields","DUMMY").concat(com.coremedia.cms.editor.sdk.editorContext.getListViewDataFields()));
    this.super$$CK1(copiedConfig);
  }/*

  /** @private * /
  protected override*/ function afterSetupStore()/*:void*/ {
    var list/*:LibraryListView*/ =AS3.as( this.component,  com.coremedia.cms.editor.sdk.collectionview.list.LibraryListView);

    // Should always be the true but better be safe than sorry.
    if (list && (AS3.is(list,  com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider))) {
      // Patch sort function. The default implementation shall never be used.
      list.getStore().sort = function (dataIndex/*:String*/, dir/*:String*/)/*:void*/ {
        (AS3.as(list,  com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider)).getSortStateManager().sortByDataIndex(dataIndex, true, dir);
      };
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindListPlugin",
      constructor: ListViewBindListPluginBase$,
      super$$CK1: function() {
        com.coremedia.ui.plugins.BindListPlugin.prototype.constructor.apply(this, arguments);
      },
      afterSetupStore: afterSetupStore,
      requires: [
        "Ext",
        "com.coremedia.ui.plugins.BindListPlugin"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.list.LibraryListView",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPlugin",
        "com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
