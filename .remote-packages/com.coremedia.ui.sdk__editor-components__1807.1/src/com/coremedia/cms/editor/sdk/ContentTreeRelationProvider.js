Ext.define("com.coremedia.cms.editor.sdk.ContentTreeRelationProvider", function(ContentTreeRelationProvider) {/*package com.coremedia.cms.editor.sdk {
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;

public class ContentTreeRelationProvider {
  /**
   * Returns the ContentTreeRelation of the active extension.
   * This method is dependency tracked and may return null when there is no active selection.
   * /
  public static*/ function getContentTreeRelation$static()/*:ContentTreeRelation*/ {
    var selection/*:Object*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).getCollectionViewModel().getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.FOLDER_PROPERTY);
    if (selection) {
      var collectionViewExtender/*:CollectionViewExtender*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender();
      var collectionViewExtension/*:CollectionViewExtension*/ = collectionViewExtender.getExtension(selection);
      if (collectionViewExtension === undefined) {
        return undefined;
      }
      if (!collectionViewExtension) {
        return null;
      }

      return collectionViewExtension.getContentTreeRelation();
    }
    throw new AS3.Error("No folder selection found in library that can be used to determine the tree relation");
  }/*
}*/function ContentTreeRelationProvider$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentTreeRelationProvider$,
      statics: {getContentTreeRelation: getContentTreeRelation$static},
      requires: ["AS3.Error"],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
