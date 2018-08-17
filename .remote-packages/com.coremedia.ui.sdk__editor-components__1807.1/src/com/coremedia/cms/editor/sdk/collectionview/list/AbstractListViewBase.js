Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase", function(AbstractListViewBase) {/*package com.coremedia.cms.editor.sdk.collectionview.list {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cms.editor.sdk.actions.CanEditContentName;
import com.coremedia.cms.editor.sdk.columns.grid.NameColumn;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.components.CustomEditorGrid;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.store.BeanRecord;

import ext.data.Store;
import ext.event.Event;
import ext.grid.column.Column;
import ext.grid.plugin.CellEditingPlugin;
import ext.grid.plugin.GridViewDragDropPlugin;

import js.HTMLElement;

/**
 * The base class for content based list views. It allows editing of content
 * names and opens selected content on a new tab when the Enter key is pressed.
 * /
public class AbstractListViewBase extends CustomEditorGrid implements CanEditContentName {

  private var ddPlugin:GridViewDragDropPlugin;

  [Bindable]
  public var defaultColumns:Array;

  /**
   * A value expression that specifies where to set the multiply selected items. This is mandatory.
   * /
  public var selectedItemsValueExpression:ValueExpression;

  /**
   * Create a list view object.
   *
   * @param config the configuration object
   * /
  public*/ function AbstractListViewBase$(config/*:AbstractListView = null*/) {if(arguments.length<=0)config=null;
    this.super$KB0L(config);
  }/*

  /**
   * ============================= Cell Editing ========================================
   * /

  override protected*/ function allowEdit(bean/*:Bean*/)/*:Boolean*/ {
    var content/*:Content*/ =AS3.as( bean,  com.coremedia.cap.content.Content);
    return content && content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.WRITE);
  }/*

  public*/ function editContentName(content/*:Content*/)/*:void*/ {
    var row/*:HTMLElement*/ = this.getView().getRow(AbstractListViewBase.findBeanRecordIndex(this.getStore(), content));
    var column/*:Column*/ = this.getColumns().filter(function (col/*:Column*/)/*:Boolean*/ {return AS3.is( col,  com.coremedia.cms.editor.sdk.columns.grid.NameColumn);})[0];
    this.forceStartEditing(row, column);
  }/*

  /**
   * ============================= Handle Key Down/Up ========================================
   * /

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.ui.components.CustomEditorGrid.prototype.afterRender.call(this);
    this.el.on("keydown",AS3.bind( this,"handleKeyDown"));
    this.el.on("keyup",AS3.bind( this,"handleKeyUp"));
  }/*

  private*/ function getCellEditingPlugin()/*:CellEditingPlugin*/ {
    return AS3.cast(Ext.grid.plugin.CellEditing,this.getPlugin("cellEditing"));
  }/*

  protected*/ function handleKeyDown(e/*:Event*/)/*:void*/ {
    if (e.getKey() === Ext.event.Event.ENTER && !this.getCellEditingPlugin$KB0L().editing) {
      var contents/*:Array*/ = this.selectedItemsValueExpression.getValue();
      if (contents) {
       if (contents.length === 1 && AS3.cast(com.coremedia.cap.content.Content,contents[0]).isFolder()) {
         com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().showInRepository(contents[0]);
       } else {
         com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocuments(this.selectedItemsValueExpression.getValue());
       }
      }
    }
  }/*

  protected*/ function handleKeyUp(e/*:Event*/)/*:void*/ {
    // nothing here
  }/*

  /**
   * ============================= Column Model ========================================
   * /

  protected static*/ function createColumnModel$static(columns/*:Array*/, config/*:AbstractListView*/)/*:Array*/ {
    if (columns && columns.length > 0) {
      // Make a copy of the column configuration. Otherwise Ext will change the array entries.
      // this fixes STUDIO-842!!!
      columns = columns.concat();
    } else {
      // Default columns are forgotten, not updated.
      // Otherwise, it would be difficult to configure the order.
      columns = AS3.getBindable(config,"defaultColumns");
    }

    return columns;
  }/*

  /**
   * ============================= Static Helper Method ========================================
   * /
  
  /**
   * Find index of BeanRecord with given bean in the given store.
   * /
  protected static*/ function findBeanRecordIndex$static(store/*:Store*/, bean/*:Bean*/)/*:Number*/ {
    if (bean) {
      return store.findBy(function (record/*:BeanRecord*/)/*:Boolean*/ {
        return record.getBean() === bean;
      });
    }
    return -1;
  }/*
  
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.CustomEditorGrid",
      mixins: ["com.coremedia.cms.editor.sdk.actions.CanEditContentName"],
      ddPlugin$KB0L: null,
      selectedItemsValueExpression: null,
      constructor: AbstractListViewBase$,
      super$KB0L: function() {
        com.coremedia.ui.components.CustomEditorGrid.prototype.constructor.apply(this, arguments);
      },
      allowEdit: allowEdit,
      editContentName: editContentName,
      afterRender: afterRender,
      getCellEditingPlugin$KB0L: getCellEditingPlugin,
      handleKeyDown: handleKeyDown,
      handleKeyUp: handleKeyUp,
      config: {defaultColumns: null},
      statics: {
        createColumnModel: createColumnModel$static,
        findBeanRecordIndex: findBeanRecordIndex$static
      },
      requires: [
        "Ext.event.Event",
        "Ext.grid.plugin.CellEditing",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cms.editor.sdk.actions.CanEditContentName",
        "com.coremedia.ui.components.CustomEditorGrid"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.columns.grid.NameColumn",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
