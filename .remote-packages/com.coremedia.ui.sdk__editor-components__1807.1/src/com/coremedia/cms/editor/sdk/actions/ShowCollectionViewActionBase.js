Ext.define("com.coremedia.cms.editor.sdk.actions.ShowCollectionViewActionBase", function(ShowCollectionViewActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManager;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.collectionview.SearchState;
import com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase;
import com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.util.ObjectUtils;

import ext.Action;

/**
 * This action is intended to be used from within EXML, only.
 *
 * @see com.coremedia.cms.editor.sdk.actions.ShowCollectionViewAction
 * /
[PublicApi]
public class ShowCollectionViewActionBase extends Action {
  /** @private * /
  protected var state:SearchState;
  private var reset:Boolean;
  private var view:String;

  /**
   * @param config the configuration object
   * /
  public*/ function ShowCollectionViewActionBase$(config/*:ShowCollectionViewAction = null*/) {if(arguments.length<=0)config=null;
    this.super$UBRo(config);

    this.state = new com.coremedia.cms.editor.sdk.collectionview.SearchState(AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchState,com.coremedia.ui.util.ObjectUtils.extractNonNullProperties(config,
            // TODO: jangaroo bug: constant access not detected without the extra brackets
            (com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_MODE_PROPERTY_NAMES).
                    concat(com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase.PROPERTY_NAMES).
                    concat(com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase.PROPERTY_NAMES).
                    concat("filters"))));

    this.reset$UBRo = !AS3.getBindable(config,"preserveFilter");
    this.view$UBRo = AS3.getBindable(config,"view") || com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW;

    this.setHandler(AS3.bind(this,"showCollectionView"), this);
  }/*

  /**
   * @private
   * /
  protected*/ function showCollectionView()/*:void*/ {
    var collectionViewManager/*:CollectionViewManager*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager();
    collectionViewManager.openSearch(this.state, this.reset$UBRo, this.view$UBRo);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {"": ["PublicApi"]},
      state: null,
      reset$UBRo: false,
      view$UBRo: null,
      constructor: ShowCollectionViewActionBase$,
      super$UBRo: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      showCollectionView: showCollectionView,
      requires: [
        "Ext.Action",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.SearchState",
        "com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase",
        "com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
