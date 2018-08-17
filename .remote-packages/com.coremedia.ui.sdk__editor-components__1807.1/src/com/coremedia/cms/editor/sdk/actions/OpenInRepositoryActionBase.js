Ext.define("com.coremedia.cms.editor.sdk.actions.OpenInRepositoryActionBase", function(OpenInRepositoryActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.actions.ValueExpressionAction;
import com.coremedia.ui.data.Bean;

[PublicApi]
public class OpenInRepositoryActionBase extends ContentAction implements ValueExpressionAction {

  /**
   * @param config the config object
   * /
  public*/ function OpenInRepositoryActionBase$(config/*:OpenInRepositoryAction = undefined*/) {

    this.super$0q5h(AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInRepositoryAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig({
      handler:AS3.bind( this,"openInRepository$0q5h")
    }, "showInFolder", config)));
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    /*
    * Never disable. We want wo show every file in directory tree. Even folders.
    * If not overridden, action will be disabled for folders
     */
    return false;
  }/*

  private*/ function openInRepository()/*:void*/ {
    this.getCollectionViewState$0q5h().set(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY, com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.REPOSITORY_MODE);
  }/*

  private*/ function getCollectionViewState()/*:Bean*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getCollectionViewModel().getMainStateBean();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      mixins: ["com.coremedia.ui.actions.ValueExpressionAction"],
      metadata: {"": ["PublicApi"]},
      constructor: OpenInRepositoryActionBase$,
      super$0q5h: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      calculateDisabled: calculateDisabled,
      openInRepository$0q5h: openInRepository,
      getCollectionViewState$0q5h: getCollectionViewState,
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.ui.actions.ValueExpressionAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.OpenInRepositoryAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
