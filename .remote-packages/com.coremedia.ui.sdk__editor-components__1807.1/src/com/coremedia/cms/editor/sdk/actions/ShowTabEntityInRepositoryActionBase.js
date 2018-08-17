Ext.define("com.coremedia.cms.editor.sdk.actions.ShowTabEntityInRepositoryActionBase", function(ShowTabEntityInRepositoryActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBase;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.actions.AbstractTabContextMenuAction;

/**
 * An action to show the workareatab's entity in the library.
 * /
public class ShowTabEntityInRepositoryActionBase extends AbstractTabContextMenuAction {

  private var entityType:Class;
  private var handleEntity:Function;

  public*/ function ShowTabEntityInRepositoryActionBase$(config/*:ShowTabEntityInRepositoryAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"_handler$Sep6"));
    this.entityType$Sep6 = AS3.getBindable(config,"entityType");
    this.handleEntity$Sep6 = AS3.getBindable(config,"handleEntity") || ShowTabEntityInRepositoryActionBase.handleEntity;
    this.super$Sep6(config);
  }/*

  private*/ function _handler()/*:void*/ {
    var contextClickedTab/*:WorkAreaTabBase*/ =AS3.as( this.getContextClickedTab(),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBase);
    if(contextClickedTab) {
      var entity/*:Object*/ = contextClickedTab.getEntity();
      this.handleEntity$Sep6(entity);
    }
  }/*

  protected static*/ function handleEntity$static(entity/*:Object*/)/*:void*/ {
    var cvManager/*:CollectionViewManagerInternal*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager(),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal));
    cvManager.getCollectionView().showInRepositoryMode(entity);
  }/*

  override protected*/ function checkDisabled()/*:Boolean*/ {
    return false;
  }/*

  override protected*/ function checkHidden()/*:Boolean*/ {
    var tab/*:WorkAreaTabBase*/ =AS3.as( this.getContextClickedTab(),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBase);
    if (tab) {
      return !(AS3.is(tab.getEntity(),  this.entityType$Sep6));
    }
    return undefined;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.AbstractTabContextMenuAction",
      entityType$Sep6: null,
      handleEntity$Sep6: null,
      constructor: ShowTabEntityInRepositoryActionBase$,
      super$Sep6: function() {
        com.coremedia.ui.actions.AbstractTabContextMenuAction.prototype.constructor.apply(this, arguments);
      },
      _handler$Sep6: _handler,
      checkDisabled: checkDisabled,
      checkHidden: checkHidden,
      statics: {handleEntity: handleEntity$static},
      requires: ["com.coremedia.ui.actions.AbstractTabContextMenuAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBase",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
