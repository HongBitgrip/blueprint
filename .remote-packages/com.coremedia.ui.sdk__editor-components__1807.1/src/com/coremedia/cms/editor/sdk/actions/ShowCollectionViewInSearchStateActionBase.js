Ext.define("com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateActionBase", function(ShowCollectionViewInSearchStateActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.editorContext;

import ext.Ext;

import mx.resources.ResourceManager;

/**
 * This action is intended to be used from within EXML, only.
 *
 * @see com.coremedia.cms.editor.sdk.config.showCollectionViewActionInSearchState
 * /
[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
public class ShowCollectionViewInSearchStateActionBase extends StateAction {

  /**
   * @param config the configuration object
   * /
  public*/ function ShowCollectionViewInSearchStateActionBase$(config/*:ShowCollectionViewInSearchStateAction = null*/) {if(arguments.length<=0)config=null;
    var extendedConfig/*:Object*/ = Ext.apply({
      text: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_showSearch_text')
    }, config);

    this.super$Y8$0(AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction,extendedConfig));

    this.setHandler(AS3.bind(this,"showCollectionViewInSearchState$Y8$0"), this);
  }/*

  private*/ function showCollectionViewInSearchState()/*:void*/ {
    AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal,com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager()).openWithAllState(this.getState());
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.StateAction",
      metadata: {"": ["PublicApi"]},
      constructor: ShowCollectionViewInSearchStateActionBase$,
      super$Y8$0: function() {
        com.coremedia.cms.editor.sdk.actions.StateAction.prototype.constructor.apply(this, arguments);
      },
      showCollectionViewInSearchState$Y8$0: showCollectionViewInSearchState,
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.actions.StateAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
