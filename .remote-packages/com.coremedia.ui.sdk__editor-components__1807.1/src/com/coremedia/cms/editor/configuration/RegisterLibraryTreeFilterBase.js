Ext.define("com.coremedia.cms.editor.configuration.RegisterLibraryTreeFilterBase", function(RegisterLibraryTreeFilterBase) {/*package com.coremedia.cms.editor.configuration {
import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;

/**
 * Register a filter method to check if the given model should be displayed in the library.
 * The plugin can be used to filter specific folder or document types from the library tree.
 * /
public class RegisterLibraryTreeFilterBase implements EditorPlugin {

  private var config:RegisterLibraryTreeFilter;

  public*/ function RegisterLibraryTreeFilterBase$(config/*:RegisterLibraryTreeFilter = null*/) {if(arguments.length<=0)config=null;
    this.config$pYr1 = config;
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    var collectionViewManagerInternal/*:CollectionViewManagerInternal*/ =
            (AS3.as((editorContext.getCollectionViewManager()),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal));
    collectionViewManagerInternal.addTreeFilter(AS3.getBindable(this.config$pYr1,"filter"));
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      config$pYr1: null,
      constructor: RegisterLibraryTreeFilterBase$,
      init: init,
      requires: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal"]
    };
});
