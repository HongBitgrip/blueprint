Ext.define("com.coremedia.cms.editor.sdk.TabManagerImpl", function(TabManagerImpl) {/*package com.coremedia.cms.editor.sdk {

import com.coremedia.cap.content.Content;

/**
 * @see com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPlugin
 * /
[Deprecated(replacement="com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPlugin", since="1.3.5")]
public class TabManagerImpl implements TabManager {
  public*/ function TabManagerImpl$() {
  }/*

  public*/ function openDocument(content/*:Content*/)/*:void*/ {
    this.openDocuments([content]);
  }/*

  public*/ function openDocuments(contents/*:Array*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocuments(contents);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.TabManager"],
      metadata: {"": [
        "Deprecated",
        [
          "replacement",
          "com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPlugin",
          "since",
          "1.3.5"
        ]
      ]},
      constructor: TabManagerImpl$,
      openDocument: openDocument,
      openDocuments: openDocuments,
      requires: ["com.coremedia.cms.editor.sdk.TabManager"],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
