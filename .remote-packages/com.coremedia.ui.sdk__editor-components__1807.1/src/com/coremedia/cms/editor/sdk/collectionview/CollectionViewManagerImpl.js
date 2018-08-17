Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerImpl", function(CollectionViewManagerImpl) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.configuration.TreeFilter;
import com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorter;
import com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl;
import com.coremedia.cms.editor.sdk.collectionview.tree.CompoundChildTreeModel;
import com.coremedia.cms.editor.sdk.collectionview.tree.CompoundTreeModel;
import com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeDragDropModel;
import com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeModel;
import com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.models.TreeModel;

import ext.util.Observable;

public class CollectionViewManagerImpl extends Observable implements CollectionViewManagerInternal {

  // the place where we store the dnd model inside the tree model object:
  private static const*/var DRAG_DROP_MODEL_PROPERTY$static/*:String*/ = "$CollectionViewManagerImpl_dragDropModel";/*

  private var libraryTreeModel:CompoundTreeModel =*/function libraryTreeModel_(){this.libraryTreeModel$ul9v=( new com.coremedia.cms.editor.sdk.collectionview.tree.CompoundTreeModel());}/*;
  private var repositoryListSorter:RepositoryListSorterImpl;
  private var repositoryTreeModel:RepositoryTreeModel;

  public*/ function CollectionViewManagerImpl$() {this.super$ul9v();libraryTreeModel_.call(this);
    var extension/*:CollectionViewExtension*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getRepositoryCollectionViewExtension();
    this.repositoryListSorter$ul9v = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl,extension.getRepositoryListSorter());
    this.repositoryTreeModel$ul9v = new com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeModel();
    this.addTreeModel(this.repositoryTreeModel$ul9v, new com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeDragDropModel(this.repositoryTreeModel$ul9v));
  }/*

  public*/ function addTreeFilter(treeFilter/*:TreeFilter*/)/*:void*/ {
    this.libraryTreeModel$ul9v.addTreeFilter(treeFilter);
  }/*

  public*/ function getFolderChildren(folder/*:Content*/)/*:Array*/ {
    var extension/*:CollectionViewExtension*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getExtension(folder);
    if(extension === undefined) {
      return undefined;
    }

    var listSorter/*:RepositoryListSorter*/ = extension && extension.getRepositoryListSorter();

    // not content
    if(!listSorter) {
      return [];
    }

    //first, get all children...
    var children/*:Array*/ = listSorter.getChildren(folder);
    if(children === undefined) {
      return undefined;
    }

    //...then filter them.
    children = listSorter.filter(folder, children);
    if(children === undefined) {
      return undefined;
    }

    //finally apply the current sorting.
    return listSorter.sort(folder, children);
  }/*

  public*/ function addTreeModel(treeModel/*:CompoundChildTreeModel*/, dragDropModel/*:DragDropModel = undefined*/)/*:void*/ {
    this.getLibraryTreeModel().addTreeModel(treeModel);
    treeModel[DRAG_DROP_MODEL_PROPERTY$static] = dragDropModel;
  }/*


  public*/ function getActiveTreeModel()/*:TreeModel*/ {
    var selection/*:Object*/ = this.getCollectionView().getSelectedFolderValueExpression().getValue();
    if(selection) {
      return this.getLibraryTreeModel().getTreeModelForModel(selection);
    }
    return null;
  }/*

  public*/ function getDragDropModel(nodeId/*:String*/)/*:DragDropModel*/ {
    var treeModel/*:TreeModel*/ = this.getLibraryTreeModel().getTreeModel(nodeId);
    //maybe no tree relation is found if a document of the repository list is selected
    if(treeModel) {
      return treeModel[DRAG_DROP_MODEL_PROPERTY$static];
    }
    return null;
  }/*

  public*/ function addRepositoryTreeRoot(content/*:Content*/, iconCls/*:String = null*/)/*:void*/ {if(arguments.length<=1)iconCls=null;
    this.repositoryTreeModel$ul9v.addExtraRootModel(content);
    if (iconCls) {
      this.repositoryTreeModel$ul9v.setIconCls(content, iconCls);
    }
    this.repositoryListSorter$ul9v.hideChild(content);
  }/*

  public*/ function getCollectionViewContainer()/*:CollectionViewContainer*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer,com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager.getOrCreateComponent(com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer.ID));
  }/*

  public*/ function getCollectionView()/*:CollectionView*/ {
    return AS3.as( this.getCollectionViewContainer().getComponent(com.coremedia.cms.editor.sdk.collectionview.CollectionView.COLLECTION_VIEW_ID),  com.coremedia.cms.editor.sdk.collectionview.CollectionView);
  }/*

  public*/ function showInRepository(content/*:Content*/, view/*:String = null*/, treeId/*:String = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:view=null;case 2:treeId=null;}
    this.openRepositoryInternal$ul9v(null, view);
    this.getCollectionView().showInRepositoryMode(content, treeId);
  }/*

  public*/ function getLibraryTreeModel()/*:CompoundTreeModel*/ {
    return this.libraryTreeModel$ul9v;
  }/*

  public*/ function openSearch(state/*:SearchState = null*/, reset/*:Boolean = true*/, view/*:String = null*/)/*:void*/ {switch(arguments.length){case 0:state=null;case 1:reset=true;case 2:view=null;}
    this.getCollectionViewContainer().show();

    var collectionViewModel/*:CollectionViewModel*/ = this.getCollectionView().getCollectionViewModel();

    collectionViewModel.setSearchState(reset, view, state);

    // A new search might not be forced by merely setting parameters.
    // Especially, an update of the text field is not propagated, because
    // search-as-you-type turned out to be undesirable. Force the search now.
    collectionViewModel.triggerSearch();
  }/*

  public*/ function openSearchForType(type/*:String*/, view/*:String = null*/, baseFolder/*:Content = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:view=null;case 2:baseFolder=null;}
    var searchState/*:SearchState*/ = new com.coremedia.cms.editor.sdk.collectionview.SearchState();
    searchState.contentType = type;

    //the base folder must not be a real folder, the node of another tree model can be applied here too
    searchState.folder = baseFolder;

    if (!view) {
      if (com.coremedia.cms.editor.sdk.editorContext.getImageBlobProperty(type)) {
        view = com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.THUMBNAILS_VIEW;
      } else {
        view = com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW;
      }
    }
    this.openSearch(searchState, true, view);
  }/*

  public*/ function openRepository(state/*:RepositoryState = null*/, reset/*:Boolean = true*/, view/*:String = null*/)/*:void*/ {switch(arguments.length){case 0:state=null;case 1:reset=true;case 2:view=null;}
    var folder/*:Content*/;
    if (state && state.folder) {
      folder = state.folder;
    } else {
      if (reset) {
        folder = getInitialFolder$static();
      } else {
        var mainStateBean/*:Bean*/ = this.getCollectionView().getCollectionViewModel().getMainStateBean();
        folder = mainStateBean.get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.FOLDER_PROPERTY);
      }
    }

    this.openRepositoryInternal$ul9v(folder, view);
    this.getCollectionView().setOpenPath(folder);
  }/*

  private static*/ function getInitialFolder$static()/*:Content*/ {
    var content/*:Content*/;
    var preferredSite/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    if (preferredSite) {
      content = preferredSite.getSiteRootFolder();
    } else {
      content = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot();
    }
    return content;
  }/*

  private*/ function openRepositoryInternal(folder/*:Content*/, view/*:String*/)/*:void*/ {
    var mainStateBean/*:Bean*/ = this.getCollectionView().getCollectionViewModel().getMainStateBean();

    var state/*:Object*/ = {};
    state[com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY] = com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.REPOSITORY_MODE;
    state[com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.VIEW_PROPERTY] = view || mainStateBean.get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.VIEW_PROPERTY);

    if (folder) {
      state[com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.FOLDER_PROPERTY] = folder;
    }

    mainStateBean.updateProperties(state);

    this.getCollectionViewContainer().show();
  }/*

  /**
   * Opens the collection view with the given collection view model main state bean state.
   * @param state the given collection view model main state bean state
   * /
  public*/ function openWithMainState(state/*:Object = null*/)/*:void*/ {if(arguments.length<=0)state=null;
    this.getCollectionViewContainer().show();

    if (state) {
      var mainStateBean/*:Bean*/ = this.getCollectionView().getCollectionViewModel().getMainStateBean();
      mainStateBean.updateProperties(state);
    }
  }/*

  /**
   * Opens the collection view with the given collection view model state.
   * @param state the given collection view model state
   * /
  public*/ function openWithAllState(state/*:Object = null*/)/*:void*/ {if(arguments.length<=0)state=null;
    this.getCollectionViewContainer().show();

    var collectionViewModel/*:CollectionViewModel*/ = this.getCollectionView().getCollectionViewModel();
    collectionViewModel.updateState(state);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      mixins: ["com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal"],
      repositoryListSorter$ul9v: null,
      repositoryTreeModel$ul9v: null,
      constructor: CollectionViewManagerImpl$,
      super$ul9v: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      addTreeFilter: addTreeFilter,
      getFolderChildren: getFolderChildren,
      addTreeModel: addTreeModel,
      getActiveTreeModel: getActiveTreeModel,
      getDragDropModel: getDragDropModel,
      addRepositoryTreeRoot: addRepositoryTreeRoot,
      getCollectionViewContainer: getCollectionViewContainer,
      getCollectionView: getCollectionView,
      showInRepository: showInRepository,
      getLibraryTreeModel: getLibraryTreeModel,
      openSearch: openSearch,
      openSearchForType: openSearchForType,
      openRepository: openRepository,
      openRepositoryInternal$ul9v: openRepositoryInternal,
      openWithMainState: openWithMainState,
      openWithAllState: openWithAllState,
      requires: [
        "Ext.util.Observable",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.SearchState",
        "com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl",
        "com.coremedia.cms.editor.sdk.collectionview.tree.CompoundTreeModel",
        "com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeDragDropModel",
        "com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeModel",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
