Ext.define("com.coremedia.cms.editor.sdk.actions.ShowInRepositoryActionBase", function(ShowInRepositoryActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.actions.ValueExpressionAction;
import com.coremedia.ui.data.RemoteBeanUtil;

[PublicApi]
public class ShowInRepositoryActionBase extends ContentAction implements ValueExpressionAction {

  private var view:String;
  private var treeModelId:String;

  /**
   * @param config the config object
   * /
  public*/ function ShowInRepositoryActionBase$(config/*:ShowInRepositoryAction = undefined*/) {
    this.super$j1tU(AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig({
      handler:AS3.bind( this,"showInRepository$j1tU")
    }, 'showInTree', config)));
    this.view$j1tU = AS3.getBindable(config,"view");
    this.treeModelId$j1tU = AS3.getBindable(config,"treeModelId");
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    return contents.some(function(content/*:Content*/)/*:Boolean*/ {
      // disable the action when one of the contents is
      // not-readable (possibly destroyed) or
      // deleted
      return !com.coremedia.ui.data.RemoteBeanUtil.isAccessible(content) || content.isDeleted();
    });
  }/*


  override protected*/ function calculateDisabled()/*:Boolean*/ {
    if (this.getContents().length !== 1) {
      return true;
    }
    return com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.calculateDisabled.call(this);
  }/*

  private*/ function showInRepository()/*:void*/ {
    var content/*:Content*/ = this.getContents()[0];
    var contentTypeName/*:String*/ = content.getType().getName();

    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getContentTreeRelation(contentTypeName).
            showInTree(this.getContents(), this.view$j1tU, this.treeModelId$j1tU);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      mixins: ["com.coremedia.ui.actions.ValueExpressionAction"],
      metadata: {"": ["PublicApi"]},
      view$j1tU: null,
      treeModelId$j1tU: null,
      constructor: ShowInRepositoryActionBase$,
      super$j1tU: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      calculateDisabled: calculateDisabled,
      showInRepository$j1tU: showInRepository,
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.ui.actions.ValueExpressionAction",
        "com.coremedia.ui.data.RemoteBeanUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
