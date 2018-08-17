Ext.define("com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarBase", function(RepositoryToolbarBase) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.toolbar.Toolbar;

[PublicApi]
public class RepositoryToolbarBase extends Toolbar {
  private var newContentActionDisabledDelegate:ValueExpression;

  /**
   * @param config the config object
   * /
  public*/ function RepositoryToolbarBase$(config/*:Toolbar = null*/) {if(arguments.length<=0)config=null;
    this.super$CqWn(config);
  }/*


  override protected*/ function afterRender()/*:void*/ {var this$=this;
    Ext.toolbar.Toolbar.prototype.afterRender.call(this);

    var collectionView/*:CollectionView*/ = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionView,this.findParentByType(com.coremedia.cms.editor.sdk.collectionview.CollectionView));
    var masterValueExpression/*:ValueExpression*/ = collectionView.getNewContentActionDisabledExpression();
    function updateLocalFromMaster()/*:void*/ {
      var masterValue/*:**/ = masterValueExpression.getValue();
      if (masterValue !== undefined) {
        this$.getNewContentActionDisabledExpression().setValue(masterValue);
      }
    }
    masterValueExpression.addChangeListener(updateLocalFromMaster);
    updateLocalFromMaster();
  }/*

  protected*/ function getNewContentActionDisabledExpression()/*:ValueExpression*/ {
    if(!this.newContentActionDisabledDelegate$CqWn) {
      this.newContentActionDisabledDelegate$CqWn = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.newContentActionDisabledDelegate$CqWn;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      metadata: {"": ["PublicApi"]},
      newContentActionDisabledDelegate$CqWn: null,
      constructor: RepositoryToolbarBase$,
      super$CqWn: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      getNewContentActionDisabledExpression: getNewContentActionDisabledExpression,
      requires: [
        "Ext.toolbar.Toolbar",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.CollectionView"]
    };
});
