Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeBase", function(LibraryTreeBase) {/*package com.coremedia.cms.editor.sdk.collectionview.tree {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.CanEditContentName;
import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.FlushResult;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.models.TreeModel;
import com.coremedia.ui.util.LocalStorageUtil;

import ext.Component;
import ext.Ext;
import ext.XTemplate;
import ext.data.Model;
import ext.data.NodeInterface;
import ext.data.TreeModel;
import ext.dom.Element;
import ext.event.Event;
import ext.grid.CellContext;
import ext.grid.column.Column;
import ext.grid.plugin.CellEditingPlugin;
import ext.grid.plugin.GridEditingPlugin;
import ext.mixin.IIdentifiable;
import ext.panel.Panel;
import ext.tree.TreePanel;
import ext.tree.TreeView;
import ext.view.DataView;

import js.HTMLElement;

public class LibraryTreeBase extends TreePanel implements CanEditContentName {

  public static const WIDTH_STORAGE_KEY:String = "repositoryTree.width";

  private var lastSelectionChange:Date;

  /**
   * @param config the config object
   * /
  public*/ function LibraryTreeBase$(config/*:LibraryTree = null*/) {if(arguments.length<=0)config=null;
    config = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTree,Ext.apply({}, config));
    this.super$Fz0B(config);
    this.mon(AS3.getBindable(config,"containerComponent"), 'beforehide',AS3.bind( this,"completeEdit$Fz0B"));
    this.on('resize', storeWidth$static);
    this.on('beforeitemdblclick',AS3.bind( this,"beforeNodeDoubleClick"));
    this.on('selectionchange',AS3.bind( this,"selectionChange$Fz0B"));
  }/*


  override protected*/ function afterRender()/*:void*/ {
    Ext.tree.Panel.prototype.afterRender.call(this);
    // fixes CMS-6111: the studio viewport moves up if an
    // item within the Library gets focused
    var treeView/*:TreeView*/ =AS3.as( this.getView(),  Ext.tree.View);
    if (treeView) {
      treeView.getEl().dom['focus'] = Ext.emptyFn;
    }
  }/*


  internal static*/ function getDefaultSelection$static()/*:Content*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot();
  }/*

  //noinspection JSMethodCanBeStatic,JSUnusedLocalSymbols
  /**
   * The double click listener checks if the given model can be opened in a tab.
   * If the model can not be edited in a Premular or is already opened, the default behaviour applies
   * by returning true.
   * @param view
   * @param node the selected tree node
   * @param item
   * @param index
   * @param event the click event
   * @return true if the default behaviour (expand/collapse) should apply.
   * /
  public*/ function beforeNodeDoubleClick(view/*:DataView*/, node/*:IIdentifiable*/, item/*:Element*/, index/*:int*/, event/*:Event*/)/*:Boolean*/ {
    var compoundTreeModel/*:com.coremedia.ui.models.TreeModel*/ = getLibraryTreeModel$static();
    var model/*:Object*/ = compoundTreeModel.getNodeModel(node.getId());
    var tab/*:Panel*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().findTabForEntity(model);
    if (tab) {
      com.coremedia.cms.editor.sdk.editorContext.getWorkArea().setActiveTab(tab);
      return false;
    }

    //add open tab behaviour for document tree nodes
    if (AS3.is(model,  com.coremedia.cap.content.Content)) {
      var content/*:Content*/ =AS3.as( model,  com.coremedia.cap.content.Content);
      if (content.isDocument()) {
        com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(content);
        return false;
      }
    }

    return true;
  }/*

  private static*/ function getLibraryTreeModel$static()/*:com.coremedia.ui.models.TreeModel*/ {
    return com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager()['getLibraryTreeModel']();
  }/*

  protected*/ function getSelectedFolderExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME);
  }/*

  private*/ function selectionChange()/*:void*/ {
    this.lastSelectionChange$Fz0B = new Date();
  }/*

  //noinspection JSUnusedLocalSymbols
  internal*/ function beforeNameEdit(editing/*:GridEditingPlugin*/, context/*:Object*/)/*:Boolean*/ {
    editing.cancelEdit();

    var node/*:ext.data.TreeModel*/ = context.record;
    var libraryTreeModel/*:com.coremedia.ui.models.TreeModel*/ = getLibraryTreeModel$static();
    var model/*:Object*/ = libraryTreeModel.getNodeModel(node.getId());
    var startEdit/*:Boolean*/ = libraryTreeModel.isEditable(model) &&
            this.getSelectionModel().isSelected(node) && ! !this.lastSelectionChange$Fz0B &&
            (new Date().getTime() - this.lastSelectionChange$Fz0B.getTime()) > 1000;
    return startEdit;
  }/*

  //noinspection JSUnusedLocalSymbols
  internal*/ function validateNameEdit(editing/*:GridEditingPlugin*/, context/*:Object*/)/*:Boolean*/ {
    var node/*:ext.data.TreeModel*/ = context.record;
    var libraryTreeModel/*:com.coremedia.ui.models.TreeModel*/ = getLibraryTreeModel$static();
    var model/*:Object*/ = libraryTreeModel.getNodeModel(node.getId());

    var newName/*:String*/ = trimSpaces$static(context.value);
    var oldName/*:String*/ =AS3.as( node.get('text'),  String);
    if (newName !== oldName) {
      libraryTreeModel.rename(model, newName, oldName,
              function renamed(flushResult/*:FlushResult*/)/*:void*/ {
                if (!flushResult || !flushResult.successful) {
                  node.set('text', oldName);
                } else {
                  node.set('text', newName);
                }
              });
    }
    return true;
  }/*

  private*/ function completeEdit()/*:void*/ {
    this.getStore().sync();
  }/*

  private static*/ function trimSpaces$static(str/*:String*/)/*:String*/ {
    while (str.charCodeAt(0) === 32) {
      str = str.substring(1, str.length);
    }
    while (str.charCodeAt(str.length - 1) === 32) {
      str = str.substring(0, str.length - 1);
    }
    return str;
  }/*

  //noinspection JSUnusedLocalSymbols
  private static*/ function storeWidth$static(cmp/*:Component*/, width/*:Number*/)/*:void*/ {
    com.coremedia.ui.util.LocalStorageUtil.setItem(LibraryTreeBase.WIDTH_STORAGE_KEY, String(width));
  }/*

  //noinspection JSUnusedLocalSymbols
  public*/ function editContentName(content/*:Content*/)/*:void*/ {
    var selectedRecord/*:Model*/ = this.getSelection()[0];
    var selectionIndex/*:Number*/ = this.getStore().indexOf(selectedRecord);
    var row/*:HTMLElement*/ = this.getView().getRow(selectionIndex);
    var column/*:Column*/ = this.getColumns()[0];
    var cellContext/*:CellContext*/ = new Ext.grid.CellContext(this.getView());
    cellContext.setPosition(row, column);
    AS3.cast(Ext.grid.plugin.CellEditing,this["editingPlugin"]).startEditByPosition(cellContext);
  }/*


  ////////////////////////////////////////////////////
  // ARIA Support Template Fix
  ////////////////////////////////////////////////////

  // Ext TreeGrid is not accessible:
  // Some Aria attributes are attached to <tr> nodes but it is the <td> nodes that are focused
  // by the TreeNavigationModel. Fixing TreeNavigationModel is more problematic than
  // fixing the templates so that is what we do here.
  //
  // TODO: This is not a satisfactory fix and works only in this case where we have a treegrid with just one column. Check in future ExtJs versions whether they have done a better job in making their treegrid accessible.

  //noinspection JSUnusedGlobalSymbols
  protected static const CELL_TPL:XTemplate =*/function CELL_TPL$static_(){LibraryTreeBase.CELL_TPL=( new Ext.XTemplate(
          '{%',
          'this.addAriaAttrs(values);',
          '%}',
          '<td class="{tdCls}" {tdAttr} {cellAttr:attributes} {ariaAttrs:attributes} tabIndex="-1"',
          ' style="width:{column.cellWidth}px;<tpl if="tdStyle">{tdStyle}</tpl>"',
          '<tpl if="column.cellFocusable === false">',
          ' role="presentation"',
          '<tpl else>',
          ' role="{cellRole}" tabindex="-1"',
          '</tpl>',
          '  data-columnid="{[values.column.getItemId()]}">',
          '<div {unselectableAttr} class="' + Ext.baseCSSPrefix + 'grid-cell-inner {innerCls}" ',
          'style="text-align:{align};<tpl if="style">{style}</tpl>" ',
          '{cellInnerAttr:attributes}>{value}</div>',
          '</td>',
          {
            priority: 0,
            addAriaAttrs: function (values/*:Object*/)/*:void*/ {
              // Adding aria attributes to <td> nodes
              var record/*:NodeInterface*/ = values.record;

              values.ariaAttrs = {};

              values.ariaAttrs['aria-level'] = record.getDepth();
              values.ariaAttrs['aria-expanded'] = record.isExpanded();
            }
          }
  ));}/*;

  /**
   * Precondition to prevent the execution of the baseAction on double-click for folders.
   * @return Boolean
   * /
  protected*/ function dblClickPrecondition()/*:Boolean*/ {
    var selectedFolderExpression/*:ValueExpression*/ = this.getSelectedFolderExpression();
    var value/*:**/ = selectedFolderExpression.getValue();
    return !(value && (AS3.is(value,  com.coremedia.cap.content.Content)) && (AS3.as(value,  com.coremedia.cap.content.Content)).isFolder());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tree.Panel",
      mixins: ["com.coremedia.cms.editor.sdk.actions.CanEditContentName"],
      lastSelectionChange$Fz0B: null,
      constructor: LibraryTreeBase$,
      super$Fz0B: function() {
        Ext.tree.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      beforeNodeDoubleClick: beforeNodeDoubleClick,
      getSelectedFolderExpression: getSelectedFolderExpression,
      selectionChange$Fz0B: selectionChange,
      beforeNameEdit: beforeNameEdit,
      validateNameEdit: validateNameEdit,
      completeEdit$Fz0B: completeEdit,
      editContentName: editContentName,
      dblClickPrecondition: dblClickPrecondition,
      statics: {
        WIDTH_STORAGE_KEY: "repositoryTree.width",
        getDefaultSelection: getDefaultSelection$static,
        CELL_TPL: undefined,
        __initStatics__: function() {
          CELL_TPL$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.XTemplate",
        "Ext.grid.CellContext",
        "Ext.grid.plugin.CellEditing",
        "Ext.tree.Panel",
        "Ext.tree.View",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.actions.CanEditContentName",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.util.LocalStorageUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTree",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
