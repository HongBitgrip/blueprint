Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersPanelBase", function(SearchFiltersPanelBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.layout.container.ContainerLayout;

import ext.panel.Panel;

public class SearchFiltersPanelBase extends Panel {
  private var selectedFolderExpression:ValueExpression;
  private var visibilityExpression:ValueExpression;

  private var scrollX:Number;
  private var scrollY:Number;

  public*/ function SearchFiltersPanelBase$(config/*:SearchFiltersPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$NkGt(config);

    if (!AS3.getBindable(config,"alwaysVisible")) {
      this.selectedFolderExpression$NkGt = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this,
              com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME);
      this.selectedFolderExpression$NkGt.addChangeListener(AS3.bind(this,"folderSelectionChanged$NkGt"));
    }
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);
    this.folderSelectionChanged$NkGt(this.selectedFolderExpression$NkGt);
  }/*

  override protected*/ function beforeLayout()/*:void*/ {
    this.scrollX$NkGt = this.getScrollX();
    this.scrollY$NkGt = this.getScrollY();

    Ext.panel.Panel.prototype.beforeLayout.call(this);
  }/*

  override protected*/ function afterLayout(layout/*:ContainerLayout*/)/*:void*/ {
    Ext.panel.Panel.prototype.afterLayout.call(this,layout);

    this.scrollTo(this.scrollX$NkGt, this.scrollY$NkGt, false);
  }/*

  protected*/ function getVisibilityExpression()/*:ValueExpression*/ {
    if (!this.visibilityExpression$NkGt) {
      this.visibilityExpression$NkGt = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(true);
    }
    return this.visibilityExpression$NkGt;
  }/*

  /**
   * Fired if a selection change in the repository tree has occurred.
   * /
  private*/ function folderSelectionChanged(ve/*:ValueExpression*/)/*:void*/ {var this$=this;
    if (ve) {
      var selection/*:Object*/ = ve.getValue();
      com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(selection,
              function (extension/*:CollectionViewExtension*/)/*:void*/ {
                var searchFilters/*:Array*/ = [];
                if (extension) {
                  searchFilters = extension.getEnabledSearchFilterIds();
                }
                this$.getVisibilityExpression().setValue((searchFilters !== null && searchFilters.length > 0));
                //expression does not work, so this line fixes it
                this$.setVisible((searchFilters !== null && searchFilters.length > 0));
              });
    }
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.selectedFolderExpression$NkGt && this.selectedFolderExpression$NkGt.removeChangeListener(AS3.bind(this,"folderSelectionChanged$NkGt"));
    Ext.panel.Panel.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      selectedFolderExpression$NkGt: null,
      visibilityExpression$NkGt: null,
      scrollX$NkGt: NaN,
      scrollY$NkGt: NaN,
      constructor: SearchFiltersPanelBase$,
      super$NkGt: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      beforeLayout: beforeLayout,
      afterLayout: afterLayout,
      getVisibilityExpression: getVisibilityExpression,
      folderSelectionChanged$NkGt: folderSelectionChanged,
      onDestroy: onDestroy,
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
