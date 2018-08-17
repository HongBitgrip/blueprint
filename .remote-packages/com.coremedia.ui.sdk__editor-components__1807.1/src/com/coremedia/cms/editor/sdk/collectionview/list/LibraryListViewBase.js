Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.LibraryListViewBase", function(LibraryListViewBase) {/*package com.coremedia.cms.editor.sdk.collectionview.list {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerImpl;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer;
import com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer;
import com.coremedia.cms.editor.sdk.collectionview.sort.CollectionViewSortStateManager;
import com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider;
import com.coremedia.cms.editor.sdk.columns.grid.NameColumn;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.EventUtil;

import ext.Ext;
import ext.StringUtil;
import ext.container.Container;
import ext.data.Store;
import ext.event.Event;
import ext.grid.GridPanel;
import ext.grid.column.Column;
import ext.grid.plugin.CellEditingPlugin;
import ext.grid.plugin.GridViewDragDropPlugin;
import ext.selection.RowSelectionModel;

import js.HTMLElement;

/**
 * The base class for content based list views of the library window.
 * This class takes care of some special event handling
 * and it manages globally available value expressions.
 * Expects RowSelectionModel and store with BeanRecords.
 * /
public class LibraryListViewBase extends AbstractListView implements SortStateManagerProvider {

  private static const*/var NAME_FIELD$static/*:String*/ = "name";/*

  private static const*/var FLIP_KEY$static/*:Number*/;/* =*/function FLIP_KEY$static_(){FLIP_KEY$static=( Ext.event.Event.ALT);};/*

  private var flipKeyPressed:Boolean = false;

  // Remember beans that wait for editing or selecting
  private var waitEditingCreated:Bean;
  //model of the collection view which will be injected
  private var collectionViewModel:CollectionViewModel;
  private var collectionViewSortStateManager:CollectionViewSortStateManager;

  private var orderByPropertyInCollectionViewModel:String;

  /**
   * A model for informing the list view of a newly created content object.
   * /
  [Bindable]
  public var createdContentValueExpression:ValueExpression;

  /**
   * Create a list view object of the library window.
   *
   * @param config the configuration object
   * /
  public*/ function LibraryListViewBase$(config/*:LibraryListView = null*/) {if(arguments.length<=0)config=null;
    this.super$O75G(config);
    this.orderByPropertyInCollectionViewModel$O75G = AS3.getBindable(config,"orderByPropertyInCollectionViewModel");
    this.mon(this.selModel, "selectionchange",AS3.bind( this,"handleSelectionModelSelectionChange$O75G"));
    this.mon(this.getStore(), "update",AS3.bind( this,"handleStoreUpdate$O75G"));

    if (AS3.getBindable(config,"createdContentValueExpression")) {
      AS3.getBindable(config,"createdContentValueExpression").addChangeListener(AS3.bind(this,"contentCreated$O75G"));
    }

    //rename hook to delegate the actual renaming to the tree relation
    this.on('validateedit',AS3.bind( this,"onRename$O75G"));

    // Flick through collection
    this.on("rowclick",AS3.bind( this,"handleRowClick$O75G"));
    config.selectedItemsValueExpression.addChangeListener(AS3.bind(this,"handleSelectionValueExpressionChange$O75G"));

    var cvm/*:CollectionViewModel*/ = this.getCollectionViewModel();
    if (cvm) {
      this.collectionViewSortStateManager$O75G = new com.coremedia.cms.editor.sdk.collectionview.sort.CollectionViewSortStateManager(cvm, this.getColumns(), this.orderByPropertyInCollectionViewModel$O75G);
    }

    this.bindStoreAndView$O75G();
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView.prototype.afterRender.call(this);

    // Disable scroll to avoid autoscroll during drag operations when on viewport's borders.
    // This may cause the Studio to move out of the viewport's boundaries
    // if the library window itself transcends these boundaries.
    var gridViewDragDropPlugin/*:GridViewDragDropPlugin*/ =AS3.as( this.getView().getPlugin(com.coremedia.ui.components.CustomEditorGridBase.DRAG_DROP_PLUGIN_ID),  Ext.grid.plugin.DragDrop);
    gridViewDragDropPlugin.dragZone.scroll = false;
  }/*

  //noinspection JSUnusedLocalSymbols
  /**
   * Hook to intercept the actual renaming.
   * Since we provide different tree relations, we have to delegate the rename call
   * to the corresponding tree relation to ensure that the content and other depending contents are updated.
   *
   * To determine the corresponding extension we must use the folder selection, not the actual list selection.
   * E.g. for catalogs a content item can be shown in two different trees, therefore we must use the "folder" selection.
   * /
  private*/ function onRename(grid/*:GridPanel*/, event/*:**/)/*:void*/ {
    var cv/*:CollectionView*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager(),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerImpl)).getCollectionView();
    var folderSelection/*:Object*/ = cv.getSelectedFolderValueExpression().getValue();

    var newName/*:String*/ = event.value;
    var content/*:Content*/ =AS3.as( (AS3.as(event.record,  com.coremedia.ui.store.BeanRecord)).getBean(),  com.coremedia.cap.content.Content);

    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(folderSelection, function (extension/*:CollectionViewExtension*/)/*:void*/ {
      var oldName/*:String*/ = content.getName();
      if(oldName !== Ext.String.trim(newName)) {
        extension && extension.getContentTreeRelation().rename(content, newName);
      }
    });

    // We have already taken care of processing the edited value.
    AS3.cast(Ext.grid.plugin.CellEditing,this['editingPlugin']).cancelEdit();
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView.prototype.onDestroy.call(this);
    if (AS3.getBindable(this,"createdContentValueExpression")) {
      AS3.getBindable(this,"createdContentValueExpression").removeChangeListener(AS3.bind(this,"contentCreated$O75G"));
    }
    this.selectedItemsValueExpression.removeChangeListener(AS3.bind(this,"handleSelectionValueExpressionChange$O75G"));
  }/*

  /**
   * ============================= FLICK THROUGH ========================================
   * /

  [InjectFromExtParent]
  public*/ function setCollectionViewModel(collectionViewModel/*:CollectionViewModel*/)/*:void*/ {
    this.collectionViewModel$O75G = collectionViewModel;
    this.collectionViewSortStateManager$O75G = new com.coremedia.cms.editor.sdk.collectionview.sort.CollectionViewSortStateManager(this.getCollectionViewModel(), this.getColumns(), this.orderByPropertyInCollectionViewModel$O75G);
    this.bindStoreAndView$O75G();
  }/*

  protected*/ function getCollectionViewModel()/*:CollectionViewModel*/ {
    return this.collectionViewModel$O75G;
  }/*

  private*/ function contentCreated()/*:void*/ {var this$=this;
    if (this.isActiveView$O75G()) {
      var content/*:Content*/ = AS3.getBindable(this,"createdContentValueExpression").getValue();
      if (content) {
        //set the created content to the selected item later
        com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
          // Variable 'content' might hold a single Content item or an array of contents.
          this$.selectedItemsValueExpression.setValue([].concat(content));

          var rowNumber/*:Number*/ = com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase.findBeanRecordIndex(this$.getStore(), content);
          var row/*:**/ = this$.getView().getRow(rowNumber);
          if(row) {
            row.scrollIntoView();
          }
        });
      }
    }
  }/*

  /**
   * Ensures that a method is only executed for the active collection view extension.
   * /
  private*/ function isActiveView()/*:Boolean*/ {
    var myParent/*:Container*/ = this.findParentByType(com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer.xtype);
    var parent/*:FolderContentSwitchingContainer*/ =AS3.as( this.findParentByType(com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer.xtype),  com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer);
    return parent && parent.isActiveView(myParent, com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW);
  }/*

  /**
   * The selection change handler should only be applied for the active view,
   * otherwise the direct edit mode won't be activated.
   * There may be other instances of this class, e.g. content catalog or assets.
   * /
  private*/ function handleSelectionModelSelectionChange()/*:void*/ {
    if(this.isActiveView$O75G()) {
      var selectedItems/*:Array*/ = this.getSelectedItemsFromSelectionModel$O75G();
      var createdContent/*:Content*/ = AS3.getBindable(this,"createdContentValueExpression") ? AS3.getBindable(this,"createdContentValueExpression").getValue() : null;
      if (selectedItems && createdContent && selectedItems.length === 1 && selectedItems[0] === createdContent) {
        AS3.getBindable(this,"createdContentValueExpression").setValue(null);
        var rowNumber/*:Number*/ = com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase.findBeanRecordIndex(this.getStore(), createdContent);
        //start editing immediately when the record has been initialized
        if (this.getStore().getAt(rowNumber).get(NAME_FIELD$static)) {
          this.editRowAfterCreate$O75G(rowNumber);
        } else {
          this.waitEditingCreated$O75G = createdContent;
        }
      }
    }
  }/*

  private*/ function getSelectedItemsFromSelectionModel()/*:Array*/ {
    var result/*:Array*/ = [];
    //noinspection JSMismatchedCollectionQueryUpdate
    var selectedRecords/*:Array*/ = AS3.cast(Ext.selection.RowModel,this.selModel).getSelection();
    selectedRecords.forEach(function (record/*:BeanRecord*/)/*:void*/ {
      result.push(record.getBean());
    });
    return result;
  }/*

  private*/ function editRowAfterCreate(rowNumber/*:Number*/)/*:void*/ {var this$=this;
    if (rowNumber !== -1) {
      this.waitEditingCreated$O75G = null;
      com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
        var row/*:HTMLElement*/ = this$.getView().getRow(rowNumber);
        var column/*:Column*/ = this$.getColumns().filter(function (col/*:Column*/)/*:Boolean*/ {
          return AS3.is( col,  com.coremedia.cms.editor.sdk.columns.grid.NameColumn);
        })[0];
        // This method is only called for created content. Rights checks should not be necessary.
        row && column && this$.forceStartEditing(row, column);
      });
    }
  }/*

  private*/ function handleStoreUpdate(store/*:Store*/, record/*:BeanRecord*/)/*:void*/ {
    // Check if the bean of the updated record is waiting for editing
    if (this.waitEditingCreated$O75G && this.waitEditingCreated$O75G === record.getBean() && record.get(NAME_FIELD$static)) {
      // Record initialized completely
      this.editRowAfterCreate$O75G(store.indexOf(record));
    }
  }/*

  private*/ function handleSelectionValueExpressionChange()/*:void*/ {
    if (this.flipKeyPressed$O75G) {
      //noinspection JSMismatchedCollectionQueryUpdate
      var selectedItems/*:Array*/ =AS3.as( this.selectedItemsValueExpression.getValue(),  Array);
      if (selectedItems && selectedItems.length === 1) {
        var selectedContent/*:**/ =AS3.as( this.selectedItemsValueExpression.getValue()[0],  com.coremedia.cap.content.Content);
        if (selectedContent && selectedContent.isDocument()) {
          com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocumentInActiveTab(selectedContent);
        }
      }
    }
  }/*

  //TODO does not work properly, so the ALT modus stays :(

  override protected*/ function handleKeyDown(e/*:Event*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView.prototype.handleKeyDown.call(this,e);
    if (e.getKey() === FLIP_KEY$static) {
      this.flipKeyPressed$O75G = true;
    }
  }/*

  override protected*/ function handleKeyUp(e/*:Event*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView.prototype.handleKeyUp.call(this,e);
    if (e.getKey() === FLIP_KEY$static) {
      this.flipKeyPressed$O75G = false;
    }
  }/*

  /**
   * Only implemented to force the reset of the flipKey, since
   * the keyUp event is not recognized properly.
   * /
  private*/ function handleRowClick()/*:void*/ {
    this.flipKeyPressed$O75G = false;
  }/*


  /*
   * ========= SORTING ===================
   * /

  private*/ function refreshColumnHeader()/*:void*/ {
    var parent/*:Container*/ = this.findParentByType(com.coremedia.ui.components.SwitchingContainer.xtype);
    if(parent.isVisible(true)) {
      Ext.suspendLayouts();
      this.updateSortCssStyles$O75G();
      Ext.resumeLayouts();
    }
  }/*

  /**
   * <p>
   * Updates the CSS styles of the header to display the sort-order-indicator according to the model.
   * This approach breaks Ext6 API and relies on private Ext6 API but during the migration from Ext3
   * to Ext6 this was the best approach we could get without reimplementing the remote search approach
   * to match Ext6 requirements.
   * </p><p>
   * This implementation requires that you override the method <code>setSortState</code> of the relevant
   * header container as otherwise <code>Ext.grid.plugin.BufferedRenderer</code> will trigger a refresh
   * of the sort state icons by calling <code>Ext.grid.header.Container.setSortState</code>. This is a result
   * of not dealing with Sorters applied to the columns.
   * </p>
   * /
  private*/ function updateSortCssStyles()/*:void*/ {
    var columns/*:Array*/ = this.getColumns();
    var columnSortDirection/*:String*/ = this.getSortStateManager().getSortDirectionFromModel();
    var sortColumn/*:Column*/ = this.getSortStateManager().getSortColumnFromModel();
    for/* each*/ (var $1=0;$1</* in*/ columns.length;++$1) {var column/*:Column*/ =columns[$1];
      var ascSortCls/*:String*/ = column['ascSortCls']; // TODO: Ext6-Private-API
      var descSortCls/*:String*/ = column['descSortCls']; // TODO: Ext6-Private-API

      if (column !== sortColumn) {
        column.removeCls(ascSortCls).removeCls(descSortCls);
      } else {
        switch (columnSortDirection) {
          case "asc":
            column.addCls(ascSortCls).removeCls(descSortCls);
            break;
          case "desc":
            column.removeCls(ascSortCls).addCls(descSortCls);
            break;
          default:
            column.removeCls(ascSortCls).removeCls(descSortCls);
        }
      }
    }
  }/*

  private*/ function bindStoreAndView()/*:void*/ {
    if (this.getCollectionViewModel() && this.orderByPropertyInCollectionViewModel$O75G) {
      // setSortState will clear the onSort state of column headers.
      // Thus ignoring calls to setSortState here. See CMS-6229 and CMS-6249 for details.
      // TODO: Ext6 Private API
      this.getView()['headerCt'].setSortState = function ()/*:void*/ { /* do nothing */
      };
      this.mon(this.getView(), 'refresh',AS3.bind( this,"refreshColumnHeader$O75G"));

      var mainStateBean/*:Bean*/ = this.getCollectionViewModel().getMainStateBean();
      mainStateBean.addPropertyChangeListener(this.orderByPropertyInCollectionViewModel$O75G,AS3.bind( this,"refreshColumnHeader$O75G"));
    }
  }/*

  public*/ function getSortStateManager()/*:CollectionViewSortStateManager*/ {
    return this.collectionViewSortStateManager$O75G;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView",
      mixins: ["com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider"],
      metadata: {setCollectionViewModel: ["InjectFromExtParent"]},
      flipKeyPressed$O75G: false,
      waitEditingCreated$O75G: null,
      collectionViewModel$O75G: null,
      collectionViewSortStateManager$O75G: null,
      orderByPropertyInCollectionViewModel$O75G: null,
      constructor: LibraryListViewBase$,
      super$O75G: function() {
        com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      onRename$O75G: onRename,
      onDestroy: onDestroy,
      setCollectionViewModel: setCollectionViewModel,
      getCollectionViewModel: getCollectionViewModel,
      contentCreated$O75G: contentCreated,
      isActiveView$O75G: isActiveView,
      handleSelectionModelSelectionChange$O75G: handleSelectionModelSelectionChange,
      getSelectedItemsFromSelectionModel$O75G: getSelectedItemsFromSelectionModel,
      editRowAfterCreate$O75G: editRowAfterCreate,
      handleStoreUpdate$O75G: handleStoreUpdate,
      handleSelectionValueExpressionChange$O75G: handleSelectionValueExpressionChange,
      handleKeyDown: handleKeyDown,
      handleKeyUp: handleKeyUp,
      handleRowClick$O75G: handleRowClick,
      refreshColumnHeader$O75G: refreshColumnHeader,
      updateSortCssStyles$O75G: updateSortCssStyles,
      bindStoreAndView$O75G: bindStoreAndView,
      getSortStateManager: getSortStateManager,
      config: {createdContentValueExpression: null},
      statics: {
        FLIP_KEY: undefined,
        __initStatics__: function() {
          FLIP_KEY$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.String",
        "Ext.event.Event",
        "Ext.grid.plugin.CellEditing",
        "Ext.grid.plugin.DragDrop",
        "Ext.selection.RowModel",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView",
        "com.coremedia.cms.editor.sdk.collectionview.sort.SortStateManagerProvider",
        "com.coremedia.ui.components.CustomEditorGridBase",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.store.BeanRecord",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerImpl",
        "com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer",
        "com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer",
        "com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase",
        "com.coremedia.cms.editor.sdk.collectionview.sort.CollectionViewSortStateManager",
        "com.coremedia.cms.editor.sdk.columns.grid.NameColumn",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
