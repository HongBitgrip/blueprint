Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewBase", function(CollectionViewBase) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.collectionview.search.SearchArea;
import com.coremedia.cms.editor.sdk.collectionview.sort.CollectionViewSortStateManager;
import com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider;
import com.coremedia.cms.editor.sdk.collectionview.tree.CompoundTreeModel;
import com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeBase;
import com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel;
import com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.upload.UploadSettings;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.models.TreeModel;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.LocalStorageUtil;
import com.coremedia.ui.util.ObjectUtils;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.Ext;
import ext.StringUtil;
import ext.container.Container;
import ext.data.Store;
import ext.dom.Element;
import ext.panel.Panel;
import ext.tree.TreePanel;

/**
 * Fires after the selected folder was set.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>oldSelectedFolder:Object</code> the old selected folder
 *   </li>
 *   <li>
 *     <code>newSelectedFolder:Object</code> the new selected folder
 *   </li>
 * </ul>
 * /
[Event(name="selectedFolder")] // NOSONAR - no type

/*** /
[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class CollectionViewBase extends Container implements ICollectionView {
  private static const*/var CREATED_CONTENT_PROPERTY$static/*:String*/ = 'newContent';/*
  private static const*/var OPEN_PATH_PROPERTY$static/*:String*/ = 'openPath';/*
  private static const*/var DEFAULT_REPOSITORY_TREE_WIDTH$static/*:Number*/ = 203;/*

  internal static const PATH_INFO_LABEL:String = 'pathInfoLabel';
  internal static const TOTAL_HITS_LABEL:String = 'totalHitsLabel';
  internal static const FOLDER_ITEMS:String = 'folderChildrenCount';

  private static const*/var TREE_SECONDARY_SELECTION_CLASS$static/*:String*/ = "cm-list-selection-nonempty";/*

  private var searchResult:SearchResult;

  private var newContent:Content;
  private var openPath:Object;
  private var selectedFolder:Object;
  private var selectedRepositoryItems:Array;
  private var selectedItems:Array;
  private var selectedSearchItems:Array;
  private var selectedFolderWhenEnteringRepositoryMode:Object = null;
  private var atLeastOneSearchOccurred:Boolean = false;

  private var searchResultValueExpression:ValueExpression;
  private var searchResultValueHitsExpression:ValueExpression;
  private var collectionViewModel:CollectionViewModel;

  private var newContentActionDisabledExpression:ValueExpression;
  private var selectedFolderValueExpression:ValueExpression;
  private var selectedRepositoryItemsValueExpression:ValueExpression;
  private var selectedItemsValueExpression:ValueExpression;
  private var selectedSearchItemsValueExpression:ValueExpression;
  private var selectedSingleSearchItemValueExpression:ValueExpression;
  private var createdContentValueExpression:ValueExpression;
  private var openPathValueExpression:ValueExpression;
  private var uploadDisabledValueExpression:ValueExpression;

  private var folderContentContainer:FolderContentContainer;

  private var activeToolbarExpression:ValueExpression;
  private var activeSearchToolbarExpression:ValueExpression;
  private var activeListViewExpression:ValueExpression;
  private var activeSearchListViewExpression:ValueExpression;

  /**
   * @param config the config object
   * /
  public*/ function CollectionViewBase$(config/*:CollectionView = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$kd55(config);

    this.getCollectionViewModel().getMainStateBean().addPropertyChangeListener(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY,AS3.bind( this,"modeChanged$kd55"));
    this.getCollectionViewModel().addListener(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.UPDATE_EVENT,AS3.bind( this,"search$kd55"));

    if (AS3.getBindable(config,"state")) {
      this.getCollectionViewModel().getMainStateBean().updateProperties(AS3.getBindable(config,"state"));
    }

    // clear the list view selection if the user clicks into the tree panel
    var treePanel/*:TreePanel*/ =AS3.as( this.queryById(com.coremedia.cms.editor.sdk.collectionview.CollectionView.TREE_ITEM_ID),  Ext.tree.Panel);
    this.mon(treePanel, "beforeclick",AS3.bind( this,"clearRepositoryListSelection$kd55"));
    this.mon(treePanel, "containerclick",AS3.bind( this,"clearRepositoryListSelection$kd55"));

    // update tree selection css if the list selection changes
    this.getSelectedRepositoryItemsValueExpression().addChangeListener(AS3.bind(this,"updateTreeSelectionCss$kd55"));

    this.folderContentContainer$kd55 =AS3.as( this.queryById("repository-panel"),  com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer);

    this.getSelectedItemsValueExpression().addChangeListener(function (ve/*:ValueExpression*/)/*:void*/ {
      this$.setSelectedItems(ve.getValue());
    });

  }/*

  private*/ function updateTreeSelectionCss(ve/*:ValueExpression*/)/*:void*/ {
    var element/*:Element*/ = this.getEl();
    if (element) {
      var listSelection/*:Array*/ = ve.getValue();
      if (listSelection && listSelection.length > 0) {
        element.addCls(TREE_SECONDARY_SELECTION_CLASS$static);
      } else {
        element.removeCls(TREE_SECONDARY_SELECTION_CLASS$static);
      }
    }
  }/*

  /**
   * @private
   * /
  [ProvideToExtChildren]
  public*/ function getLibraryTreeModel()/*:TreeModel*/ {
    return getLibraryTreeModelInternal$static();
  }/*

  private static*/ function getLibraryTreeModelInternal$static()/*:CompoundTreeModel*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal,com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager()).getLibraryTreeModel();
  }/*

  /**
   * @private
   * /
  [ProvideToExtChildren]
  public*/ function getCollectionViewModel()/*:CollectionViewModel*/ {var this$=this;
    if (!this.collectionViewModel$kd55) {
      this.collectionViewModel$kd55 = AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getCollectionViewModel();
      //synchronize the collection view model's folder property with selectedFolder property
      this.setSelectedFolder(this.collectionViewModel$kd55.getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.FOLDER_PROPERTY));
      this.collectionViewModel$kd55.getMainStateBean().addPropertyChangeListener(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.FOLDER_PROPERTY,
              function (event/*:PropertyChangeEvent*/)/*:void*/ {
                this$.setSelectedFolder(event.newValue);
              }
      );
    }
    return this.collectionViewModel$kd55;
  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * @private
   * /
  public*/ function setCollectionViewModel(collectionViewModel/*:CollectionViewModel*/)/*:void*/ {
    var oldCollectionViewModel/*:CollectionViewModel*/ = this.collectionViewModel$kd55;
    this.collectionViewModel$kd55 = collectionViewModel;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.MODEL_VARIABLE_NAME, oldCollectionViewModel, this.collectionViewModel$kd55);
  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * Is used for value expressions
   * @return  the search result
   * @private
   * /
  [ProvideToExtChildren]
  public*/ function getSearchResult()/*:SearchResult*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SEARCHRESULT_VARIABLE_NAME);
    return this.searchResult$kd55;
  }/*

  /**
   * @private
   * /
  public*/ function setSearchResult(newSearchResult/*:SearchResult*/)/*:void*/ {
    var oldSearchResult/*:Bean*/ = this.searchResult$kd55;
    this.searchResult$kd55 = newSearchResult;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SEARCHRESULT_VARIABLE_NAME, oldSearchResult, this.searchResult$kd55);
  }/*

  public*/ function getSearchResultValueExpression()/*:ValueExpression*/ {
    if (!this.searchResultValueExpression$kd55) {
      this.searchResultValueExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.collectionview.CollectionView.SEARCHRESULT_VARIABLE_NAME, this);
    }
    return this.searchResultValueExpression$kd55;
  }/*

  /**
   * Return a value expression pointing to the hits of the search result.
   * Excludes deleted contents from the found hits
   * if the state DELETED_FILTER_PROPERTY is set to false or the state IN_PRODUCTION_FILTER_PROPERTY is set to true
   * @return
   * /
  public*/ function getSearchResultHitsValueExpression()/*:ValueExpression*/ {
    if (!this.searchResultValueHitsExpression$kd55) {
      this.searchResultValueHitsExpression$kd55 = this.getSearchResultValueExpression().extendBy(com.coremedia.cap.content.search.SearchParameters.HITS);
    }
    return this.searchResultValueHitsExpression$kd55;
  }/*

  // create a model for informing a view of a newly created content object.
  public*/ function getCreatedContentValueExpression()/*:ValueExpression*/ {
    if (!this.createdContentValueExpression$kd55) {
      this.createdContentValueExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.create(CREATED_CONTENT_PROPERTY$static, this);
    }
    return this.createdContentValueExpression$kd55;
  }/*

  public*/ function getNewContentActionDisabledExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.newContentActionDisabledExpression$kd55) {
      this.newContentActionDisabledExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
                var folder/*:Content*/ =AS3.as( this$.getSelectedFolderValueExpression().getValue(),  com.coremedia.cap.content.Content);
                return !folder ||
                        folder.getState() === com.coremedia.ui.data.BeanState.UNKNOWN ||
                        folder.isDestroyed() ||
                        folder.isDeleted() || !com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getDocumentTypes().some(function (documentType/*:ContentType*/)/*:Boolean*/ {
                          return !documentType.isAbstract() && folder.getRepository().getAccessControl().mayCreate(folder, documentType);
                        });
              }
      );
    }
    return this.newContentActionDisabledExpression$kd55;
  }/*

  public*/ function getSelectedFolderValueExpression()/*:ValueExpression*/ {
    if (!this.selectedFolderValueExpression$kd55) {
      this.selectedFolderValueExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME, this);
    }
    return this.selectedFolderValueExpression$kd55;
  }/*

  public*/ function getUploadDisabledValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.uploadDisabledValueExpression$kd55) {
      this.uploadDisabledValueExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        var mode/*:String*/ = this$.getCurrentMode();
        if(mode !== com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.REPOSITORY_MODE) {
          return true;
        }

        var selectedFolder/*:Object*/ = this$.getSelectedFolderValueExpression().getValue();
        if (selectedFolder) {
          var extension/*:CollectionViewExtension*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getExtension(selectedFolder);
          if (extension === undefined) {
            return undefined;
          }

          if (extension) {
            var uploadDisabled/*:Boolean*/ = extension.isUploadDisabledFor(selectedFolder);
            if (uploadDisabled === undefined) {
              return undefined;
            }

            return uploadDisabled;
          }
        }

        return true;
      });
    }
    return this.uploadDisabledValueExpression$kd55;
  }/*


  public*/ function getSelectedRepositoryItemsValueExpression()/*:ValueExpression*/ {
    if (!this.selectedRepositoryItemsValueExpression$kd55) {
      this.selectedRepositoryItemsValueExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_REPOSITORY_ITEMS_VARIABLE_NAME, this);
    }
    return this.selectedRepositoryItemsValueExpression$kd55;
  }/*

  public*/ function getSelectedItemsValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.selectedItemsValueExpression$kd55) {
      this.selectedItemsValueExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
                var listItems/*:Array*/ = this$.getSelectedRepositoryItemsValueExpression().getValue();
                if (listItems && listItems.length > 0) {
                  return listItems;
                }
                var folderValue/*:**/ = this$.getSelectedFolderValueExpression().getValue();
                return folderValue === undefined ? undefined : com.coremedia.ui.util.ArrayUtils.asArray(folderValue);
              }
      );
    }
    return this.selectedItemsValueExpression$kd55;
  }/*

  internal*/ function getActiveRepositoryToolbarExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.activeToolbarExpression$kd55) {
      this.activeToolbarExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue('repositoryToolbar');
      this.getSelectedFolderValueExpression().addChangeListener(function (ve/*:ValueExpression*/)/*:void*/ {
        var selection/*:Object*/ = ve.getValue();
        com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(selection,
                function (extension/*:CollectionViewExtension*/)/*:void*/ {
                  var toolbarItemId/*:String*/ = extension && extension.getRepositoryToolbarItemId();
                  this$.activeToolbarExpression$kd55.setValue(toolbarItemId ? toolbarItemId : 'repositoryToolbar');
                });
      });
    }
    return this.activeToolbarExpression$kd55;
  }/*

  internal*/ function getActiveSearchToolbarViewExpression()/*:ValueExpression*/ {
    if (!this.activeSearchToolbarExpression$kd55) {
      this.activeSearchToolbarExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue('repositorySearchToolbarContainer');
    }
    return this.activeSearchToolbarExpression$kd55;
  }/*

  internal*/ function getActiveFolderContentContainerExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.activeListViewExpression$kd55) {
      this.activeListViewExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue('repository-panel');
      this.getSelectedFolderValueExpression().addChangeListener(function (ve/*:ValueExpression*/)/*:void*/ {
        var selection/*:Object*/ = ve.getValue();
        com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(selection,
                function (extension/*:CollectionViewExtension*/)/*:void*/ {
                  var itemId/*:String*/ = extension && extension.getFolderContainerItemId();
                  this$.activeListViewExpression$kd55.setValue(itemId ? itemId : 'repository-panel');
                });
      });
    }
    return this.activeListViewExpression$kd55;
  }/*

  internal*/ function getActiveSearchListExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.activeSearchListViewExpression$kd55) {
      this.activeSearchListViewExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue('search-panel');
      this.getSelectedFolderValueExpression().addChangeListener(function (ve/*:ValueExpression*/)/*:void*/ {
        var selection/*:Object*/ = ve.getValue();
        com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(selection,
                function (extension/*:CollectionViewExtension*/)/*:void*/ {
                  var itemId/*:String*/ = extension && extension.getSearchViewItemId();
                  this$.activeSearchListViewExpression$kd55.setValue(itemId ? itemId : 'search-panel');
                });
      });
    }
    return this.activeSearchListViewExpression$kd55;
  }/*

  /**
   * Create a value expression which returns multiple selected items in the search views.
   * @return
   * /
  public*/ function getSelectedSearchItemsValueExpression()/*:ValueExpression*/ {
    if (!this.selectedSearchItemsValueExpression$kd55) {
      this.selectedSearchItemsValueExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_SEARCH_ITEMS_VARIABLE_NAME, this);
    }
    return this.selectedSearchItemsValueExpression$kd55;
  }/*

  private*/ function getSelectedSingleSearchItemValueExpression()/*:ValueExpression*/ {
    if (!this.selectedSingleSearchItemValueExpression$kd55) {
      this.selectedSingleSearchItemValueExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.createSingleItemValueExpression(this.getSelectedSearchItemsValueExpression());
    }
    return this.selectedSingleSearchItemValueExpression$kd55;
  }/*

  internal*/ function getOpenPathValueExpression()/*:ValueExpression*/ {
    if (!this.openPathValueExpression$kd55) {
      this.openPathValueExpression$kd55 = com.coremedia.ui.data.ValueExpressionFactory.create(OPEN_PATH_PROPERTY$static, this);
    }
    return this.openPathValueExpression$kd55;
  }/*

  private*/ function search()/*:void*/ {var this$=this;
    // if the search mode in the cms repository...
    if (this.collectionViewModel$kd55.getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY) === com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_MODE) {
      // ... prepare search parameters and obtain a new search result bean, which will be loaded eventually.

      /*
       * Reset the search result first!!!
       * Mandatory, otherwise models are mixed up when the ui is changed before the new data is applied.
       * The issue raises in the search mode for breadcrumbs when a Catalog is selected
       * and the content root is selected afterwards.
       */
      this.setSearchResult(null);

      //find the matching extension
      var selection/*:Object*/ = this.getSelectedFolderValueExpression().getValue();
      com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(selection,
              function (extension/*:CollectionViewExtension*/)/*:void*/ {
                if (extension) {
                  var sortState/*:String*/ = this$.collectionViewModel$kd55.getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.ORDER_BY_PROPERTY);
                  var sortStateManager/*:CollectionViewSortStateManager*/ = this$.getSortStateManager();
                  if (sortStateManager) {
                    sortStateManager.setCurrentSortCriteria(sortState);
                  }

                  this$.doSearch$kd55(extension);
                }
              });
    }
  }/*

  /**
   * Executes the actual search depending on the active extension.
   * /
  private*/ function doSearch(extension/*:CollectionViewExtension*/)/*:void*/ {var this$=this;
    this.collectionViewModel$kd55.getSearchParameters(function (searchParameters/*:SearchParameters*/)/*:void*/ {
      if (searchParameters) {
        extension.search(searchParameters, function (newSearchResult/*:SearchResult*/)/*:void*/ {
          this$.setSearchResult(newSearchResult);
        });
      } else {
        this$.setSearchResult(null);
      }
    });
  }/*

  // Used by tests!
  //noinspection JSUnusedGlobalSymbols
  /**
   * @private
   * /
  public*/ function getCurrentMode()/*:String*/ {
    return this.collectionViewModel$kd55.getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY);
  }/*

  // Used by tests!
  //noinspection JSUnusedGlobalSymbols
  /**
   * @private
   * /
  public*/ function getCurrentView()/*:String*/ {
    return this.collectionViewModel$kd55.getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.VIEW_PROPERTY);
  }/*

  private*/ function modeChanged(pce/*:PropertyChangeEvent*/)/*:void*/ {var this$=this;
    if (pce.newValue === com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.REPOSITORY_MODE) {
      this.selectedFolderWhenEnteringRepositoryMode$kd55 = this.selectedFolder$kd55;
      //in the tree view we cannot handle the multiple selection yet
      var selectedSearchItems/*:Array*/ = this.getSelectedSearchItems();
      if (selectedSearchItems && (selectedSearchItems.length > 0)) {
        var selectedSearchItem/*:Object*/ = selectedSearchItems[selectedSearchItems.length - 1];
        com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Object*/ {
          return this$.getTreeNodeFor$kd55(selectedSearchItem);
        }).loadValue(function (folder/*:Object*/)/*:void*/ {
          this$.setOpenPath(folder);

          /*
           * Since the extension can replace repository lists, we have to take
           * care that the folder selection has been finished. Only then we can be sure
           * that the correct list is displayed. So we invoke the repository list selection afterwards.
           */
          com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
            //lets wait until the current folder selection matches the expected value
            if (this$.getSelectedFolderValueExpression().getValue() !== folder) {
              return undefined;
            }
            return true;
          }).loadValue(function (selectionUpdated/*:Boolean*/)/*:void*/ {
            /*
             * Finally set the list selection. The current list selection
             * of the CollectionView may have been resetted by another list view
             * that is currently not active.
             */
            this$.setSelectedRepositoryItems(selectedSearchItems);
          });
        });
      }
      else {
        if (this.selectedFolder$kd55) {
          this.setOpenPath(this.selectedFolder$kd55);
        }
      }
      this.setSelectedRepositoryItems(selectedSearchItems);
    } else {
      if (pce.oldValue === com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.REPOSITORY_MODE) {
        // The following is to relieve the BindListPlugin and the BindSelectionPlugin of some work.
        // If the selected folder was not changed during repository view and none of the
        // selected repository items is included in the latest search results, then the
        // selected items for the search view are set to null (because no new search will
        // be triggered and thus no selection will be possible anyway).
        if (!this.selectedFolder$kd55 ||
                this.selectedFolderWhenEnteringRepositoryMode$kd55 === this.selectedFolder$kd55) {
          if (this.currentSearchHitsIncludeAtLeastOneSelectedRepositoryItem$kd55() || this.atLeastOneSearchOccurred$kd55 === false) {
            this.setSelectedSearchItems(this.getSelectedRepositoryItems());
          } else {
            this.setSelectedSearchItems(null);
          }
        } else {
          this.setSelectedSearchItems(this.getSelectedRepositoryItems());
        }
        this.atLeastOneSearchOccurred$kd55 = true;
      }
    }
  }/*

  private*/ function currentSearchHitsIncludeAtLeastOneSelectedRepositoryItem()/*:Boolean*/ {
    var searchResultHits/*:Array*/ = this.getSearchResultHitsValueExpression().getValue();

    if (!searchResultHits) {
      return false;
    }

    for/* each*/ (var $1=0;$1</* in*/ this.selectedRepositoryItems$kd55.length;++$1) {var selectedItem/*:Content*/ =this.selectedRepositoryItems$kd55[$1];
      if (searchResultHits.indexOf(selectedItem) !== -1) {
        return true;
      }
    }
    return false;
  }/*

  /**
   * @private
   * /
  [ProvideToExtChildren]
  public*/ function getSelectedFolder()/*:Object*/ {
    return this.selectedFolder$kd55;
  }/*

  /**
   * @private
   * /
  public*/ function setSelectedFolder(folder/*:Object*/)/*:void*/ {
    var oldValue/*:Object*/ = this.selectedFolder$kd55;

    this.selectedFolder$kd55 = folder;

    if (!com.coremedia.ui.util.ObjectUtils.equal(oldValue, this.selectedFolder$kd55)) {
      //synchronize the collection view model's folder property with selectedFolder property
      this.getCollectionViewModel().getMainStateBean().set(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.FOLDER_PROPERTY, this.selectedFolder$kd55);

      //MFA: I am applying the selected folder to the collection view model first before firing the event
      //Why was the event previously fired before the model was changed?
      com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME, oldValue, this.selectedFolder$kd55);
    }
  }/*

  /**
   * @private
   * /
  [ProvideToExtChildren]
  public*/ function getSelectedRepositoryItems()/*:Array*/ {
    return this.selectedRepositoryItems$kd55;
  }/*

  /**
   * @private
   * /
  public*/ function setSelectedRepositoryItems(value/*:Array*/)/*:void*/ {
    if (!value) {
      value = [];
    }
    var oldValue/*:Array*/ = this.selectedRepositoryItems$kd55;
    this.selectedRepositoryItems$kd55 = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_REPOSITORY_ITEMS_VARIABLE_NAME, oldValue, value);
  }/*

  /**
   * @private
   * /
  [ProvideToExtChildren]
  public*/ function getSelectedItems()/*:Array*/ {
    return this.selectedItems$kd55;
  }/*

  /**
   * @private
   * /
  public*/ function setSelectedItems(value/*:Array*/)/*:void*/ {
    if (!value) {
      value = [];
    }
    var oldValue/*:Array*/ = this.selectedItems$kd55;
    this.selectedItems$kd55 = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_ITEMS_VARIABLE_NAME, oldValue, value);
  }/*

  /**
   * @private
   * /
  public*/ function setSelectedSearchItems(value/*:Array*/)/*:void*/ {
    if (!value) {
      value = [];
    }
    var oldValue/*:Array*/ = this.selectedSearchItems$kd55;
    this.selectedSearchItems$kd55 = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_SEARCH_ITEMS_VARIABLE_NAME, oldValue, value);
  }/*

  /**
   * @private
   * /
  [ProvideToExtChildren]
  public*/ function getSelectedSearchItems()/*:Array*/ {
    return this.selectedSearchItems$kd55;
  }/*

  /**
   * This is called via reflection from the NewContentAction
   *
   * @private
   * /
  public*/ function getNewContent()/*:Content*/ {
    return this.newContent$kd55;
  }/*

  /**
   * This is called via reflection from the NewContentAction
   *
   * @private
   * /
  public*/ function setNewContent(value/*:Content*/)/*:void*/ {
    var oldValue/*:Content*/ = this.newContent$kd55;
    this.newContent$kd55 = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, CREATED_CONTENT_PROPERTY$static, oldValue, value);
  }/*

  /**
   * Called via reflection
   *
   * @private
   * /
  public*/ function getOpenPath()/*:Object*/ {
    return this.openPath$kd55;
  }/*

  public*/ function setOpenPath(value/*:Object*/, treeId/*:String = null*/)/*:void*/ {if(arguments.length<=1)treeId=null;
    if (value) {
      this.recalculateSelectedRepositoryItems$kd55(value, treeId);
    }
    var oldValue/*:Object*/ = this.openPath$kd55;
    this.openPath$kd55 = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, OPEN_PATH_PROPERTY$static, oldValue, value);
  }/*

  /**
   * @param folder the parameter has the role of a folder,
   * can be an actual repository folder or a parent that acts like a folder.
   * /
  private*/ function recalculateSelectedRepositoryItems(folder/*:Object*/, treeId/*:String*/)/*:void*/ {var this$=this;
    var newSelectedRepositoryItems/*:Array*/ = [];
    if (AS3.is(this.selectedRepositoryItems$kd55,  Array)) {
      this.selectedRepositoryItems$kd55.forEach(function (item/*:Object*/)/*:void*/ {
        var parent/*:Object*/ = this$.getTreeNodeFor$kd55(item, treeId);
        if (com.coremedia.ui.util.ObjectUtils.equal(parent, folder)) {
          newSelectedRepositoryItems.push(item);
        }
      });
      this.setSelectedRepositoryItems(newSelectedRepositoryItems);
    }
  }/*

  private*/ function clearRepositoryListSelection()/*:void*/ {
    this.setSelectedRepositoryItems([]);
  }/*

  private*/ function getSearchArea()/*:SearchArea*/ {
    return AS3.as( this.queryById(com.coremedia.cms.editor.sdk.collectionview.CollectionView.SEARCH_AREA_ITEM_ID),  com.coremedia.cms.editor.sdk.collectionview.search.SearchArea);
  }/*

  private*/ function getTreeNodeFor(item/*:Object*/, treeId/*:String = null*/)/*:Object*/ {if(arguments.length<=1)treeId=null;
    var idPath/*:Array*/ = null;

    // make sure the content's path is loaded before the content is handed over to the tree model
    var content/*:Content*/ =AS3.as( item,  com.coremedia.cap.content.Content);
    if (content) {
      if (content.getPath() === undefined) {
        return undefined;
      }
    }

    //if the tree id is set, the content should be shown for a specific tree model
    if (treeId) {
      var treeModel/*:TreeModel*/ = getLibraryTreeModelInternal$static().getTreeModelForId(treeId);
      idPath = treeModel.getIdPathFromModel(item);
    }
    else {
      idPath = getLibraryTreeModelInternal$static().getIdPathFromModel(item);
    }

    //idPath is null when neither the item itself and nor one of its parents is part of the tree
    if (idPath === null) {
      return null;
    }

    //idPath is not loaded yet
    if (idPath === undefined) {
      return undefined;
    }
    if (idPath && idPath.length > 0) {
      var parentId/*:String*/ = idPath[idPath.length - 1];
      var parent/*:Object*/ = getLibraryTreeModelInternal$static().getNodeModel(parentId);
      return parent;
    }
    return undefined;
  }/*

  /**
   * Shows content in the repository view. If the content is a folder then
   * it is shown and selected in the tree view. If the content is not a folder
   * (but for example a document), then the parent folder is shown and
   * selected in the tree view and the content itself is shown and selected
   * in the tree view list.
   *
   * @param selection
   * /
  public*/ function showInRepositoryMode(selection/*:Object*/, treeId/*:String = null*/)/*:void*/ {var this$=this;if(arguments.length<=1)treeId=null;
    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Object*/ {
      return this$.getTreeNodeFor$kd55(selection, treeId);
    }).loadValue(function (parent/*:Object*/)/*:void*/ {
      //handles those selection that are not part of the tree, forces a de-selection
      if (parent == null) {
        this$.setSelectedRepositoryItems(null);
      }

      if (com.coremedia.ui.util.ObjectUtils.equal(selection, parent)) {
        this$.setOpenPath(selection, treeId);
      }
      else {
        if (this$.getSelectedFolderValueExpression().getValue() === parent) {
          this$.setSelectedRepositoryItems([selection]);
        } else {
          var selectContent/*:Function*/ = function ()/*:void*/ {
            if (this$.getSelectedFolderValueExpression().getValue() === parent) {
              this$.getSelectedFolderValueExpression().removeChangeListener(selectContent);
              this$.setSelectedRepositoryItems([selection]);
            }
          };
          this$.getSelectedFolderValueExpression().addChangeListener(selectContent);
        }
        this$.setOpenPath(parent, treeId);
      }
    });
  }/*

  protected*/ function folderItemsTextVisibleVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var view/*:String*/ = this$.getCollectionViewModel().getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY);
      return view === com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.REPOSITORY_MODE;
    });
  }/*

 protected*/ function totalHitsLabelVisibleVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var view/*:String*/ = this$.getCollectionViewModel().getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY);
      return view === com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_MODE;
    });
  }/*

 protected*/ function pathInfoLabelVisibleVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var pathInfo/*:String*/ = this$.calculatePathInfo$kd55();
      var pathInfoVisible/*:Boolean*/ = ! !pathInfo;
      return pathInfo !== undefined && pathInfoVisible;
    });
  }/*

  internal*/ function getPathInfoExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculatePathInfo$kd55"));
  }/*

  private*/ function calculatePathInfo()/*:String*/ {
    var view/*:String*/ = this.getCollectionViewModel().getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY);
    if (view === com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_MODE) {
      var selection/*:Object*/ = this.getSelectedSingleSearchItemValueExpression$kd55().getValue();
      var extension/*:CollectionViewExtension*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getExtension(selection);
      if (extension === undefined) {
        return undefined;
      }

      if (extension) {
        var selectionPath/*:String*/ = extension.getPathInfo(selection);
        if (selectionPath) {
          return selectionPath;
        }
      }
    }

    return "";
  }/*

  internal*/ function getFolderChildrenCountVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {

      var view/*:String*/ = this$.getCollectionViewModel().getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY);

      var result/*:String*/ = " ";

      // For now, folder children count is only computed for actual folders (content).
      // Other CollectionView extensions, where the 'selectedFolderValueExpression'
      // delivers something different from a content, are not covered.
      var selectedFolder/*:Content*/ =AS3.as( this$.selectedFolderValueExpression$kd55.getValue(),  com.coremedia.cap.content.Content);

      if (view === com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.REPOSITORY_MODE
              && selectedFolder
              && com.coremedia.ui.data.RemoteBeanUtil.isAccessible(selectedFolder)) {
        //noinspection JSMismatchedCollectionQueryUpdate
        var folderChildren/*:Array*/ = selectedFolder.getChildren();
        if(AS3.is(folderChildren,  Array) && folderChildren.length > 49){
          var itemCountTemplate/*:String*/ = this$.resourceManager.getString('com.coremedia.cms.editor.Editor', "CollectionView_number_of_items_in_selected_folder");
          result = Ext.String.format(itemCountTemplate, folderChildren.length);
        }
      }
      return result;
    });
  }/*

  internal*/ function getTotalHitsExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateTotalHits$kd55"));
  }/*

  private*/ function getToolbarContainer()/*:SwitchingContainer*/ {
    return AS3.as( this.queryById('toolbarSwitchingContainer'),  com.coremedia.ui.components.SwitchingContainer);
  }/*

  private*/ function getFolderContentSwitchingContainer()/*:SwitchingContainer*/ {
    return AS3.as( this.queryById('listViewSwitchingContainer'),  com.coremedia.ui.components.SwitchingContainer);
  }/*

  private*/ function getSearchListSwitchingContainer()/*:SwitchingContainer*/ {
    return AS3.as( this.queryById('searchSwitchingContainer'),  com.coremedia.ui.components.SwitchingContainer);
  }/*

  private*/ function calculateTotalHits()/*:String*/ {
    var totalHits/*:String*/;
    var view/*:String*/ = this.getCollectionViewModel().getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY);
    if (view === com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_MODE) {
      var searchResult/*:SearchResult*/ = this.getSearchResult();
      if (searchResult) {
        var total/*:uint*/ = searchResult.getTotal();
        if (total !== undefined) {
          var bundle/*:Object*/ = this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.editor.Editor').content;
          var searchResultLength/*:uint*/ = searchResult.getHits().length;
          var pattern/*:String*/ = total == 1 ?
                  bundle.CollectionView_one_hit_text :
                  total <= searchResultLength ?
                          bundle.CollectionView_many_hits_text :
                          bundle.CollectionView_partial_hits_text;
          totalHits = Ext.String.format(pattern, total, searchResultLength);
        }
      }
    }
    return totalHits;
  }/*

  internal static*/ function getLibraryTreeWidth$static()/*:Number*/ {
    var width/*:Number*/ = Number(com.coremedia.ui.util.LocalStorageUtil.getItem(com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeBase.WIDTH_STORAGE_KEY));
    if (!width) {
      width = DEFAULT_REPOSITORY_TREE_WIDTH$static;
    }
    return width;
  }/*

  /**
   * @private
   * /
  public*/ function getActiveStoreOfFolderContentContainer()/*:Store*/ {
    return this.folderContentContainer$kd55 && this.folderContentContainer$kd55.getActiveStore();
  }/*

  /**
   * @private
   * /
  public*/ function getSearchListContainer(itemId/*:String*/)/*:Container*/ {
    var container/*:Container*/ = this.getSearchListSwitchingContainer$kd55();
    return AS3.as( container.down(com.coremedia.ui.util.createComponentSelector().itemId(itemId).build()),  Ext.container.Container);
  }/*

  /**
   * @private
   * /
  public*/ function getActiveSearchListContainer()/*:Container*/ {
    var itemId/*:String*/ = this.getActiveSearchListExpression().getValue();
    var container/*:Container*/ = this.getSearchListSwitchingContainer$kd55();
    return AS3.as( container.down(com.coremedia.ui.util.createComponentSelector().itemId(itemId).build()),  Ext.container.Container);
  }/*

  /**
   * Find out if this Container is a currently active toolbar.
   * Comparison includes view modes ({@link CollectionViewModel.REPOSITORY_MODE} or {@link CollectionViewModel.SEARCH_MODE})
   * and extensions.
   *
   * @param toolbarContainer a container which should be checked if its the active toolbar.
   * @return true if the container is the active toolbar, otherwise false
   * @private
   * /
  public*/ function isActiveToolbar(toolbarContainer/*:Container*/)/*:Boolean*/ {
    var viewMode/*:String*/ = this.collectionViewModel$kd55.getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY);

    if (viewMode === com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.REPOSITORY_MODE) {
      var activeRepoToolbarItemId/*:String*/ = this.getActiveRepositoryToolbarExpression().getValue();
      return activeRepoToolbarItemId === toolbarContainer.getItemId();
    }

    var activeSearchToolbarItemId/*:String*/ = this.getActiveSearchToolbarViewExpression().getValue();
    return activeSearchToolbarItemId === toolbarContainer.getItemId();
  }/*

  /**
   * @private
   * /
  public*/ function getSortStateManager()/*:CollectionViewSortStateManager*/ {
    var viewMode/*:String*/ = this.getCollectionViewModel().getMainStateBean().get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY);
    if (viewMode === com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.REPOSITORY_MODE) {
      var activeFolderContentContainer/*:SortStateManagerProvider*/ =AS3.as( this.getFolderContentSwitchingContainer$kd55(),  com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider);
      return activeFolderContentContainer.getSortStateManager();
    }

    var activeSearchListContainer/*:SortStateManagerProvider*/ =AS3.as( this.getSearchListSwitchingContainer$kd55(),  com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider);
    return activeSearchListContainer.getSortStateManager();
  }/*

  protected*/ function fileDropHandler(files/*:Array*/, settings/*:UploadSettings*/)/*:void*/ {
    var selectedFolder/*:Object*/ = this.getSelectedFolderValueExpression().getValue();
    if (selectedFolder) {
      var extension/*:CollectionViewExtension*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getExtension(selectedFolder);
      if(!extension.isUploadDisabledFor(selectedFolder)) {
        extension.upload(files, selectedFolder, settings);
      }
    }
  }/*

  public static*/ function onFileDragOver$static()/*:void*/ {
    enableDropStyle$static(true);
  }/*

  public static*/ function onFileDragEnd$static()/*:void*/ {
    enableDropStyle$static(false);
  }/*

  private static*/ function enableDropStyle$static(enable/*:Boolean*/)/*:void*/ {
    var cv/*:CollectionView*/ =AS3.as( Ext.getCmp(com.coremedia.cms.editor.sdk.collectionview.CollectionView.COLLECTION_VIEW_ID),  com.coremedia.cms.editor.sdk.collectionview.CollectionView);
    var parentWindow/*:Component*/ = cv.findParentByType(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow.xtype);
    var parentPanel/*:Panel*/ =AS3.as( cv.findParentByType(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel.xtype),  Ext.panel.Panel);

    if (parentWindow) {
      if (enable) {
        //TODO
        parentWindow.setStyle('box-shadow', '0 0 0 100000px rgba(0,0,0,.66)');
      }
      else {
        parentWindow.setStyle('box-shadow', 'none');
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      mixins: ["com.coremedia.cms.editor.sdk.collectionview.ICollectionView"],
      metadata: {
        "": [
          "Event",
          [
            "name",
            "selectedFolder"
          ],
          "PublicApi"
        ],
        getLibraryTreeModel: ["ProvideToExtChildren"],
        getCollectionViewModel: ["ProvideToExtChildren"],
        getSearchResult: ["ProvideToExtChildren"],
        getSelectedFolder: ["ProvideToExtChildren"],
        getSelectedRepositoryItems: ["ProvideToExtChildren"],
        getSelectedItems: ["ProvideToExtChildren"],
        getSelectedSearchItems: ["ProvideToExtChildren"]
      },
      searchResult$kd55: null,
      newContent$kd55: null,
      openPath$kd55: null,
      selectedFolder$kd55: null,
      selectedRepositoryItems$kd55: null,
      selectedItems$kd55: null,
      selectedSearchItems$kd55: null,
      selectedFolderWhenEnteringRepositoryMode$kd55: null,
      atLeastOneSearchOccurred$kd55: false,
      searchResultValueExpression$kd55: null,
      searchResultValueHitsExpression$kd55: null,
      collectionViewModel$kd55: null,
      newContentActionDisabledExpression$kd55: null,
      selectedFolderValueExpression$kd55: null,
      selectedRepositoryItemsValueExpression$kd55: null,
      selectedItemsValueExpression$kd55: null,
      selectedSearchItemsValueExpression$kd55: null,
      selectedSingleSearchItemValueExpression$kd55: null,
      createdContentValueExpression$kd55: null,
      openPathValueExpression$kd55: null,
      uploadDisabledValueExpression$kd55: null,
      folderContentContainer$kd55: null,
      activeToolbarExpression$kd55: null,
      activeSearchToolbarExpression$kd55: null,
      activeListViewExpression$kd55: null,
      activeSearchListViewExpression$kd55: null,
      constructor: CollectionViewBase$,
      super$kd55: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      updateTreeSelectionCss$kd55: updateTreeSelectionCss,
      getLibraryTreeModel: getLibraryTreeModel,
      getCollectionViewModel: getCollectionViewModel,
      setCollectionViewModel: setCollectionViewModel,
      getSearchResult: getSearchResult,
      setSearchResult: setSearchResult,
      getSearchResultValueExpression: getSearchResultValueExpression,
      getSearchResultHitsValueExpression: getSearchResultHitsValueExpression,
      getCreatedContentValueExpression: getCreatedContentValueExpression,
      getNewContentActionDisabledExpression: getNewContentActionDisabledExpression,
      getSelectedFolderValueExpression: getSelectedFolderValueExpression,
      getUploadDisabledValueExpression: getUploadDisabledValueExpression,
      getSelectedRepositoryItemsValueExpression: getSelectedRepositoryItemsValueExpression,
      getSelectedItemsValueExpression: getSelectedItemsValueExpression,
      getActiveRepositoryToolbarExpression: getActiveRepositoryToolbarExpression,
      getActiveSearchToolbarViewExpression: getActiveSearchToolbarViewExpression,
      getActiveFolderContentContainerExpression: getActiveFolderContentContainerExpression,
      getActiveSearchListExpression: getActiveSearchListExpression,
      getSelectedSearchItemsValueExpression: getSelectedSearchItemsValueExpression,
      getSelectedSingleSearchItemValueExpression$kd55: getSelectedSingleSearchItemValueExpression,
      getOpenPathValueExpression: getOpenPathValueExpression,
      search$kd55: search,
      doSearch$kd55: doSearch,
      getCurrentMode: getCurrentMode,
      getCurrentView: getCurrentView,
      modeChanged$kd55: modeChanged,
      currentSearchHitsIncludeAtLeastOneSelectedRepositoryItem$kd55: currentSearchHitsIncludeAtLeastOneSelectedRepositoryItem,
      getSelectedFolder: getSelectedFolder,
      setSelectedFolder: setSelectedFolder,
      getSelectedRepositoryItems: getSelectedRepositoryItems,
      setSelectedRepositoryItems: setSelectedRepositoryItems,
      getSelectedItems: getSelectedItems,
      setSelectedItems: setSelectedItems,
      setSelectedSearchItems: setSelectedSearchItems,
      getSelectedSearchItems: getSelectedSearchItems,
      getNewContent: getNewContent,
      setNewContent: setNewContent,
      getOpenPath: getOpenPath,
      setOpenPath: setOpenPath,
      recalculateSelectedRepositoryItems$kd55: recalculateSelectedRepositoryItems,
      clearRepositoryListSelection$kd55: clearRepositoryListSelection,
      getSearchArea$kd55: getSearchArea,
      getTreeNodeFor$kd55: getTreeNodeFor,
      showInRepositoryMode: showInRepositoryMode,
      folderItemsTextVisibleVE: folderItemsTextVisibleVE,
      totalHitsLabelVisibleVE: totalHitsLabelVisibleVE,
      pathInfoLabelVisibleVE: pathInfoLabelVisibleVE,
      getPathInfoExpression: getPathInfoExpression,
      calculatePathInfo$kd55: calculatePathInfo,
      getFolderChildrenCountVE: getFolderChildrenCountVE,
      getTotalHitsExpression: getTotalHitsExpression,
      getToolbarContainer$kd55: getToolbarContainer,
      getFolderContentSwitchingContainer$kd55: getFolderContentSwitchingContainer,
      getSearchListSwitchingContainer$kd55: getSearchListSwitchingContainer,
      calculateTotalHits$kd55: calculateTotalHits,
      getActiveStoreOfFolderContentContainer: getActiveStoreOfFolderContentContainer,
      getSearchListContainer: getSearchListContainer,
      getActiveSearchListContainer: getActiveSearchListContainer,
      isActiveToolbar: isActiveToolbar,
      getSortStateManager: getSortStateManager,
      fileDropHandler: fileDropHandler,
      statics: {
        PATH_INFO_LABEL: 'pathInfoLabel',
        TOTAL_HITS_LABEL: 'totalHitsLabel',
        FOLDER_ITEMS: 'folderChildrenCount',
        getLibraryTreeWidth: getLibraryTreeWidth$static,
        onFileDragOver: onFileDragOver$static,
        onFileDragEnd: onFileDragEnd$static
      },
      requires: [
        "Ext",
        "Ext.String",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "Ext.tree.Panel",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.search.SearchParameters",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.ICollectionView",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.LocalStorageUtil",
        "com.coremedia.ui.util.ObjectUtils",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchArea",
        "com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider",
        "com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeBase",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
