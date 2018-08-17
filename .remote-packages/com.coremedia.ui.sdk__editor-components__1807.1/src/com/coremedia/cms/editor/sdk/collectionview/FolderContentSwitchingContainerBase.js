Ext.define("com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainerBase", function(FolderContentSwitchingContainerBase) {/*package com.coremedia.cms.editor.sdk.collectionview {
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.data.Bean;

import ext.Component;

[PublicApi]
public class FolderContentSwitchingContainerBase extends SortableSwitchingContainerBase {

  public*/ function FolderContentSwitchingContainerBase$(config/*:SwitchingContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$b3OU(config);
  }/*

  /**
   * Calculates if the given component with the given view is currently the active folder content container
   * that is selected in the collection view. The calculation is used e.g. to suppress content creation event
   * for components that are currently not active.
   * @param component the child component to check
   * @param view the view the component is responsible for: thumbnail or list
   * @return true if the view is the one the user currently sees.
   * @private
   * /
  public*/ function isActiveView(component/*:Component*/, view/*:String*/)/*:Boolean*/ {
    var cmManger/*:CollectionViewManagerInternal*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager(),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal);
    var mainStateBean/*:Bean*/ = cmManger.getCollectionView().getCollectionViewModel().getMainStateBean();
    if(mainStateBean.get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.VIEW_PROPERTY) === view) {
      var parentId/*:String*/ = component.getItemId();
      var selectedFolderContainer/*:String*/ = this.getActiveItemValue();
      return parentId === selectedFolderContainer;
    }
    return false;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase",
      metadata: {"": ["PublicApi"]},
      constructor: FolderContentSwitchingContainerBase$,
      super$b3OU: function() {
        com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase.prototype.constructor.apply(this, arguments);
      },
      isActiveView: isActiveView,
      requires: ["com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase"],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
