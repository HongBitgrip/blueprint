Ext.define("com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteActionBase", function(ShowCollectionViewInCurrentSiteActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;

/**
 * This action is intended to be used from within EXML, only.
 *
 * @see com.coremedia.cms.editor.sdk.config.showCollectionViewInSiteAction
 * /
[PublicApi]
public class ShowCollectionViewInCurrentSiteActionBase extends ShowCollectionViewAction {

  /**
   * @param config the configuration object
   * /
  public*/ function ShowCollectionViewInCurrentSiteActionBase$(config/*:ShowCollectionViewInCurrentSiteAction = null*/) {if(arguments.length<=0)config=null;
    this.super$x$EN(config);
  }/*

  /**
   * @private
   * /
  override protected*/ function showCollectionView()/*:void*/ {
    this.updateState$x$EN();
    com.coremedia.cms.editor.sdk.actions.ShowCollectionViewAction.prototype.showCollectionView.call(this);
  }/*

  private*/ function updateState()/*:void*/ {
    if (this.initialConfig.bindTo) {
      var content/*:Content*/ =AS3.as( this.initialConfig.bindTo.getValue(),  com.coremedia.cap.content.Content);
      if (content) {
        var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(content);
        if (site) {
          this.state.folder = site.getSiteRootFolder();
        }
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewAction",
      metadata: {"": ["PublicApi"]},
      constructor: ShowCollectionViewInCurrentSiteActionBase$,
      super$x$EN: function() {
        com.coremedia.cms.editor.sdk.actions.ShowCollectionViewAction.prototype.constructor.apply(this, arguments);
      },
      showCollectionView: showCollectionView,
      updateState$x$EN: updateState,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewAction"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
