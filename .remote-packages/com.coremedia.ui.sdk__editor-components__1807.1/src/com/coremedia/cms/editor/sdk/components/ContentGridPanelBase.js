Ext.define("com.coremedia.cms.editor.sdk.components.ContentGridPanelBase", function(ContentGridPanelBase) {/*package com.coremedia.cms.editor.sdk.components {
import com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;

public class ContentGridPanelBase extends LinkListGridPanel {

  private var selectedItems:Array;
  private var allItems:Array;
  private var allOrSelectedItems:Array;

  [Bindable]
  public var bindTo:ValueExpression;

  public*/ function ContentGridPanelBase$(config/*:ContentGridPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$cCEK(config);

    AS3.getBindable(this,"bindTo").addChangeListener(AS3.bind(this,"updateAllItems$cCEK"));
    this.updateAllItems$cCEK();
  }/*

  private*/ function updateAllItems()/*:void*/ {
    this.setAllItems(AS3.getBindable(this,"bindTo").getValue());
  }/*

  [ProvideToExtChildren]
  public*/ function getSelectedItems()/*:Array*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME);
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, com.coremedia.cms.editor.sdk.components.ContentGridPanel.ALL_OR_SELECTED_ITEMS_VARIABLE_NAME);
    return this.selectedItems$cCEK || [];
  }/*

  public*/ function setSelectedItems(value/*:Array*/)/*:void*/ {
    var oldValue/*:Array*/ = this.selectedItems$cCEK;
    this.selectedItems$cCEK = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME, oldValue, value);
    this.updateAllOrSelected$cCEK();
  }/*

  [ProvideToExtChildren]
  public*/ function getAllItems()/*:Array*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, com.coremedia.cms.editor.sdk.components.ContentGridPanel.ALL_ITEMS_VARIABLE_NAME);
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, com.coremedia.cms.editor.sdk.components.ContentGridPanel.ALL_OR_SELECTED_ITEMS_VARIABLE_NAME);
    return this.allItems$cCEK || [];
  }/*

  public*/ function setAllItems(value/*:Array*/)/*:void*/ {
    var oldValue/*:Array*/ = this.allItems$cCEK;
    this.allItems$cCEK = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.components.ContentGridPanel.ALL_ITEMS_VARIABLE_NAME, oldValue, value);
    this.updateAllOrSelected$cCEK();
  }/*

  private*/ function updateAllOrSelected()/*:void*/ {
    if (this.selectedItems$cCEK && this.selectedItems$cCEK.length > 0) {
      this.setAllOrSelectedItems(this.selectedItems$cCEK);
    } else {
      this.setAllOrSelectedItems(this.allItems$cCEK);
    }
  }/*

  [ProvideToExtChildren]
  public*/ function getAllOrSelectedItems()/*:Array*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, com.coremedia.cms.editor.sdk.components.ContentGridPanel.ALL_OR_SELECTED_ITEMS_VARIABLE_NAME);
    return this.allOrSelectedItems$cCEK || [];
  }/*

  public*/ function setAllOrSelectedItems(value/*:Array*/)/*:void*/ {
    var oldValue/*:Array*/ = this.allOrSelectedItems$cCEK;
    this.allOrSelectedItems$cCEK = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.components.ContentGridPanel.ALL_OR_SELECTED_ITEMS_VARIABLE_NAME, oldValue, value);
  }/*


  override protected*/ function beforeDestroy()/*:void*/ {
    AS3.getBindable(this,"bindTo").removeChangeListener(AS3.bind(this,"updateAllItems$cCEK"));

    com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel",
      metadata: {
        getSelectedItems: ["ProvideToExtChildren"],
        getAllItems: ["ProvideToExtChildren"],
        getAllOrSelectedItems: ["ProvideToExtChildren"]
      },
      selectedItems$cCEK: null,
      allItems$cCEK: null,
      allOrSelectedItems$cCEK: null,
      constructor: ContentGridPanelBase$,
      super$cCEK: function() {
        com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel.prototype.constructor.apply(this, arguments);
      },
      updateAllItems$cCEK: updateAllItems,
      getSelectedItems: getSelectedItems,
      setSelectedItems: setSelectedItems,
      getAllItems: getAllItems,
      setAllItems: setAllItems,
      updateAllOrSelected$cCEK: updateAllOrSelected,
      getAllOrSelectedItems: getAllOrSelectedItems,
      setAllOrSelectedItems: setAllOrSelectedItems,
      beforeDestroy: beforeDestroy,
      config: {bindTo: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.ContentGridPanel"]
    };
});
