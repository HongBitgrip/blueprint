Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeActionBase", function(OpenInTreeActionBase) {/*package com.coremedia.cms.editor.sdk.collectionview.tree {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.*;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.TreeModel;

public class OpenInTreeActionBase extends DependencyTrackedAction {
  private var selectedFolderValueExpression: ValueExpression;
  private var libraryTreeModel:TreeModel;
  private var selectedItemsValueExpressin:ValueExpression;

  public*/ function OpenInTreeActionBase$(config/*:OpenInTreeAction = null*/) {if(arguments.length<=0)config=null;
    this.super$9HLJ(AS3.cast(com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'openInTree', {handler:AS3.bind( this,"open$9HLJ")})));
    this.selectedFolderValueExpression$9HLJ = AS3.getBindable(config,"selectedFolderValueExpression");
    if (AS3.getBindable(config,"selectedItemsValueExpression"))  {
      //If contents are configured...
      //...then take that
      this.selectedItemsValueExpressin$9HLJ = AS3.getBindable(config,"selectedItemsValueExpression");
    } else {
      //...otherwise create a content value expression
      this.selectedItemsValueExpressin$9HLJ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }
  }/*

  [InjectFromExtParent]
  public*/ function setLibraryTreeModel(libraryTreeModel/*:TreeModel*/)/*:void*/ {
    this.libraryTreeModel$9HLJ = libraryTreeModel;
  }/*

  [InjectFromExtParent]
  public*/ function setSelectedRepositoryItems(items/*:Array*/)/*:void*/ {
    this.selectedItemsValueExpressin$9HLJ.setValue(items);
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    var visible/*:Boolean*/ = this.calculateVisible$9HLJ();
    if(visible === undefined) {
      return undefined;
    }
    return !visible;
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    var visible/*:Boolean*/ = this.calculateVisible$9HLJ();
    if(visible === undefined) {
      return undefined;
    }
    return !visible || this.selectedItemsValueExpressin$9HLJ.getValue().some(function(bean/*:RemoteBean*/)/*:Boolean*/ {
              // Disable the action if one of the items is not readable
              return !com.coremedia.ui.data.RemoteBeanUtil.isAccessible(bean);
            });
  }/*

  private*/ function calculateVisible()/*:Boolean*/ {
    var items/*:Array*/ = this.selectedItemsValueExpressin$9HLJ.getValue();
    if(!items || items.length === 0) {
      return false;
    }
    var item/*:**/ = items[0]; //may not be content, but a another remote bean!!!
    if(AS3.is(item,  com.coremedia.cap.content.Content)) {
      if(item.isFolder()) {
        return true;
      }

      if(!this.belongsToActiveTreeModel$9HLJ(item)) {
        return false;
      }

      var collectionViewExtender/*:CollectionViewExtender*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender();
      var collectionViewExtension/*:CollectionViewExtension*/ = collectionViewExtender.getExtension(item);
      if (collectionViewExtension === undefined) {
        return undefined;
      }
      if (!collectionViewExtension) {
        return null;
      }

      return this.isPartOfTree$9HLJ(item) && collectionViewExtension.getContentTreeRelation().isFolderNode(item);
    }

    //use the tree model for other RemoteBeans: if a path is available, we deal with a "folder", so the action is visible
    var nodeId/*:String*/ = this.libraryTreeModel$9HLJ.getNodeId(item);
    if(nodeId) {
      var idPath/*:Array*/ = this.libraryTreeModel$9HLJ.getIdPath(nodeId);
      return idPath && idPath.length > 0 && idPath[idPath.length - 1] == nodeId;
    }
    return false;
  }/*

  /**
   * Checks if the active selection belongs to the active tree model. When there is a model selected
   * in the list view of the library that is a node of another tree relation too (e.g. show catalog content in library)
   * and the user is currently in the content tree, then a double click on that node would result in a selection
   * of "All Content" in the tree or (if the corresponding catalog belongs to the active site) the selection would
   * jump into the catalog.
   * We are trying to avoid this behaviour here by checking if the user is currently working on the content tree.
   * When the selection belongs to another tree, this action is disabled/hidden, so the double click behaviour is prevented.
   * @param item the current selection
   * /
  private*/ function belongsToActiveTreeModel(item/*:Object*/)/*:Boolean*/ {
    var cmManager/*:CollectionViewManagerInternal*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager(),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal);
    var activeTreeModel/*:TreeModel*/ = cmManager.getActiveTreeModel();
    var treeModel/*:TreeModel*/ = cmManager.getLibraryTreeModel().getTreeModelForModel(item);
    return treeModel && activeTreeModel && treeModel.getRootId() === activeTreeModel.getRootId();
  }/*

  private*/ function isPartOfTree(item/*:Object*/)/*:Boolean*/ {
    var nodeId/*:String*/ = this.libraryTreeModel$9HLJ.getNodeId(item);
    return ! !nodeId;
  }/*

  private*/ function open(contents/*:**/)/*:void*/ {
    if (!this.calculateDisabled()) {
      this.selectedFolderValueExpression$9HLJ.setValue(this.selectedItemsValueExpressin$9HLJ.getValue()[0]);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      metadata: {
        setLibraryTreeModel: ["InjectFromExtParent"],
        setSelectedRepositoryItems: ["InjectFromExtParent"]
      },
      selectedFolderValueExpression$9HLJ: null,
      libraryTreeModel$9HLJ: null,
      selectedItemsValueExpressin$9HLJ: null,
      constructor: OpenInTreeActionBase$,
      super$9HLJ: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      setLibraryTreeModel: setLibraryTreeModel,
      setSelectedRepositoryItems: setSelectedRepositoryItems,
      calculateHidden: calculateHidden,
      calculateDisabled: calculateDisabled,
      calculateVisible$9HLJ: calculateVisible,
      belongsToActiveTreeModel$9HLJ: belongsToActiveTreeModel,
      isPartOfTree$9HLJ: isPartOfTree,
      open$9HLJ: open,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeAction",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
