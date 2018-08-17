Ext.define("com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchActionBase", function(ShowCollectionViewToSaveSearchActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.desktop.SaveSearchFolderHint;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.util.EventUtil;

import ext.Ext;
import ext.button.Button;
import ext.container.Container;
import ext.dom.Element;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
public class ShowCollectionViewToSaveSearchActionBase extends ShowCollectionViewAction {
  public*/ function ShowCollectionViewToSaveSearchActionBase$(config/*:ShowCollectionViewToSaveSearchAction = null*/) {if(arguments.length<=0)config=null;
    this.super$qz3o(AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchAction,Ext.apply({}, com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'addSearch'))));

    this.setHandler(AS3.bind(this,"showCollectionViewToSaveSearch$qz3o"), this);
  }/*

  // Shows collection view in search mode without any specific state.
  // Also show hint window indicating where search folders can be saved.
  private*/ function showCollectionViewToSaveSearch()/*:void*/ {var this$=this;
    var collectionViewManager/*:CollectionViewManagerInternal*/ =
            AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal,com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager());
    var collectionViewContainer/*:Container*/ = collectionViewManager.getCollectionViewContainer();

    var saveSearchButton/*:Button*/ =AS3.as( collectionViewContainer.queryById("saveSearch"),  Ext.button.Button);
    if (!saveSearchButton) {
      collectionViewContainer.mon(collectionViewContainer, "afterlayout", function ()/*:void*/ {
        this$.showCollectionViewToSaveSearch$qz3o();
      }, null, {single: true});
      this.showCollectionView();
      return;
    }

    var collectionView/*:CollectionView*/ = collectionViewManager.getCollectionView();
    var collectionViewModel/*:CollectionViewModel*/ = collectionView.getCollectionViewModel();
    var cvmMainState/*:Bean*/ = collectionViewModel.getMainStateBean();
    // Collection view is visible but is not in search mode. So show
    // in search mode.
    if (cvmMainState.get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY) != com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_MODE) {
      cvmMainState.addPropertyChangeListener(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY, function retry()/*:void*/ {
        this$.showCollectionViewToSaveSearch$qz3o();
        cvmMainState.removePropertyChangeListener(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY, retry);
      });
      this.showCollectionView();
      return;
    }

    // Save search button not rendered: Until now, collection was never
    // in search mode. Show collection view (automatically in search mode)
    // and wait for 'afterrender' event of save search button
    if (!saveSearchButton.getEl()) {
      saveSearchButton.mon(saveSearchButton, "afterrender", function ()/*:void*/ {
        this$.showCollectionViewToSaveSearch$qz3o();
      }, null, {single: true});
      this.showCollectionView();
      return;
    }

    // Collection view is not visible (but was before, also in search mode
    // as the save search button is rendered). Show collection view.
    if (!collectionViewContainer.isVisible(true)) {
      collectionViewContainer.on("show", function ()/*:void*/ {
        // At this point, the collectionViewContainer is shown, but the event
        // may have to bubble up the component hierarchy so that the
        // side panel or the containing window is also shown. Wait a little
        // longer.
        com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this$,"showCollectionViewToSaveSearch$qz3o"));
      }, null, {single: true});
      this.showCollectionView();
      return;
    }

    // Finally, reset collection view and show the hint window. Use
    // invokeLater() because otherwise notification is shown slightly off-site
    // for the first time after the save search button is rendered.
    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
      // Resetting collection view
      collectionView.setSelectedSearchItems([]);
      collectionViewModel.resetSearchFilters();
      cvmMainState.set(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.FOLDER_PROPERTY, com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot());

      // Showing hint
      var hintConfig/*:SaveSearchFolderHint*/ = AS3.cast(com.coremedia.cms.editor.sdk.desktop.SaveSearchFolderHint,{});
      AS3.setBindable(hintConfig,"target" , AS3.cast(Ext.dom.Element,saveSearchButton.getEl()).dom.id);
      AS3.setBindable(hintConfig,"text" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_addSearch_hint_text'));
      var hint/*:SaveSearchFolderHint*/ = new com.coremedia.cms.editor.sdk.desktop.SaveSearchFolderHint(hintConfig);
      hint.show();

      // When clicking on the collection view, the notification should
      // immediately disappear instead of fading out slowly.
      collectionViewContainer.mon(collectionViewContainer.getEl(), "mousedown", function ()/*:void*/ {
        if (hint && hint.isVisible(true)) {
          hint.goAway(true);
        }
      }, null, {single: true});
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewAction",
      constructor: ShowCollectionViewToSaveSearchActionBase$,
      super$qz3o: function() {
        com.coremedia.cms.editor.sdk.actions.ShowCollectionViewAction.prototype.constructor.apply(this, arguments);
      },
      showCollectionViewToSaveSearch$qz3o: showCollectionViewToSaveSearch,
      requires: [
        "Ext",
        "Ext.button.Button",
        "Ext.dom.Element",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewAction",
        "com.coremedia.ui.util.EventUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.desktop.SaveSearchFolderHint",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
