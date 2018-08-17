Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanelBase", function(LinkListGridPanelBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.cms.editor.sdk.util.AnnotatedLinkListHelper;
import com.coremedia.cms.editor.sdk.util.IAnnotatedLinkListProvider;
import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;
import com.coremedia.cms.editor.sdk.util.StoreUtil;
import com.coremedia.ui.bem.LinkListBEMEntities;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.IHighlightableMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.mixins.ValidationStateMixin;
import com.coremedia.ui.plugins.AnnotatedLinkListPlugin;
import com.coremedia.ui.util.ThumbnailImage;
import com.coremedia.ui.util.ThumbnailImage;

import ext.ArrayUtil;
import ext.Component;
import ext.data.Store;
import ext.grid.GridPanel;
import ext.grid.column.Column;
import ext.selection.SelectionModel;
import ext.view.AbstractView;
import ext.view.TableView;

/**
 * The application logic for editor that edits link lists.
 * Links can be limited to documents of a given type.
 * /
public class LinkListGridPanelBase extends GridPanel implements IValidationStateMixin, IHighlightableMixin {

  public static const DROP_AREA_ITEM_ID:String = "dropArea";
  public static const DATA_FIELD_IS_ANNOTATED:String = "isAnnotated";

  private var selectedPositionsVE:ValueExpression;
  private var selectedVE:ValueExpression;

  [Bindable]
  public var linkListWrapper:ILinkListWrapper;

  [Bindable]
  public var readOnlyValueExpression:ValueExpression;

  /**
   * A ValueExpression whose value is set to the array of indexes of selected items.
   * The array is empty if nothing is selected. The change of the value doesn't update the selection of the grid.
   * /
  [Bindable]
  public var selectedPositionsExpression:ValueExpression;

  /**
   * A ValueExpression whose value is set to the array of selected items.
   * The array is empty if nothing is selected.
   * The selection is updated by changing the value of this expression.
   * /
  [Bindable]
  public var selectedValuesExpression:ValueExpression;

  [ExtConfig(create=false)]
  public var dropArea:Component;

  [Bindable]
  public var embedded:Boolean;

  [ExtConfig]
  public var hideValidation:Boolean;

  /**
   * Specifies if linklist items may be replaced on insert (default is false).
   * /
  [Bindable]
  public var replaceOnDrop:Boolean;

  /**
   * The row widget
   * /
  [Bindable]
  public var rowWidget:Object;

  [Bindable]
  public var rowWidgetsAnnotatedPredicates:Array;

  private var modifierVE:ValueExpression;

  private var _hideDropArea:Boolean;
  private var isInitialized:Boolean;
  private var lastModifiedColumn:Column;

  public*/ function LinkListGridPanelBase$(config/*:LinkListGridPanelBase = null*/) {if(arguments.length<=0)config=null;
    ariaCheck$static(config);

    var annotatedLinkListProvider/*:IAnnotatedLinkListProvider*/ =AS3.as( AS3.getBindable(config,"linkListWrapper"),  com.coremedia.cms.editor.sdk.util.IAnnotatedLinkListProvider);
    if (annotatedLinkListProvider && AS3.getBindable(config,"rowWidget")) {
      var annotatedLinkListPluginCfg/*:AnnotatedLinkListPlugin*/ = AS3.cast(com.coremedia.ui.plugins.AnnotatedLinkListPlugin,{});
      annotatedLinkListPluginCfg.widget = AS3.getBindable(config,"rowWidget");
      AS3.setBindable(annotatedLinkListPluginCfg,"isAnnotatedDataField" , LinkListGridPanelBase.DATA_FIELD_IS_ANNOTATED);
      var annotatedLinkListVE/*:ValueExpression*/ = annotatedLinkListProvider.getAnnotatedLinkListVE();
      AS3.setBindable(annotatedLinkListPluginCfg,"structListVE" , annotatedLinkListVE);
      config.plugins = config.plugins || [];
      config.plugins.push(annotatedLinkListPluginCfg);
      AS3.setBindable(config,"rowWidgetsAnnotatedPredicates" , AS3.getBindable(config,"rowWidgetsAnnotatedPredicates") || [com.coremedia.cms.editor.sdk.util.AnnotatedLinkListHelper.rowWidgetsAnnotatedBasedOnType]);
    }

    this.super$GORa(config);

    AS3.setBindable(this,"hideDropArea" , AS3.getBindable(config,"hideDropArea"));

    this.initValidationStateMixin();

    AS3.getBindable(this,"linkListWrapper").getVE().addChangeListener(AS3.bind(this,"updateModifiers$GORa"));
    AS3.getBindable(this,"linkListWrapper").getVE().addChangeListener(AS3.bind(this,"updateDropZone$GORa"));
    this.updateModifiers$GORa();

    this.on("render",AS3.bind( this,"onRender"));
    this.on("validationStateChanged",AS3.bind( this,"onValidationChanged$GORa"));
    this.on("validationMessageChanged",AS3.bind( this,"onValidationChanged$GORa"));
    this.onValidationChanged$GORa();
    com.coremedia.ui.util.ThumbnailImage.registerDataViewAnimationHandlers(this.getView());
  }/*

  protected*/ function isAnnotated(value/*:**/, bean/*:Bean*/, rowIndex/*:Number*/)/*:Boolean*/ {var this$=this;
    var annotatedLinkListProvider/*:IAnnotatedLinkListProvider*/ = (AS3.as(AS3.getBindable(this,"linkListWrapper"),  com.coremedia.cms.editor.sdk.util.IAnnotatedLinkListProvider));
    //Be aware of the some loop!
    return annotatedLinkListProvider && AS3.getBindable(this,"rowWidgetsAnnotatedPredicates") && AS3.getBindable(this,"rowWidgetsAnnotatedPredicates").some(function (isAnnotatedFn/*:Function*/)/*:Boolean*/ {
      if (AS3.getBindable(this$,"rowWidgetsAnnotatedPredicates").length > 1 && isAnnotatedFn === com.coremedia.cms.editor.sdk.util.AnnotatedLinkListHelper.rowWidgetsAnnotatedBasedOnType) {
        return false;
      }
      return isAnnotatedFn(annotatedLinkListProvider, rowIndex);
    });
  }/*

  /**
   * Checks the aria configuration for this component
   * @param config
   * /
  private static*/ function ariaCheck$static(config/*:LinkListGridPanelBase*/)/*:void*/ {
    if (!config.ariaLabel) {
      config.ariaLabel = AS3.getBindable(config,"title","DUMMY");
    }
    //we don't log a warning here since the AriaLabelPlugin may have been applied to this grid
  }/*

  override protected*/ function initComponent()/*:void*/ {var this$=this;
    Ext.grid.Panel.prototype.initComponent.call(this);

    if (!this.hideValidation) {
      this.on("columnschanged", function ()/*:void*/ {
        this$.updateFirstVisibleColumn$GORa();
      });
      this.updateFirstVisibleColumn$GORa();
    }

    this.isInitialized$GORa = true;
    this.initDropArea$GORa();
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    AS3.getBindable(this,"linkListWrapper").getVE().removeChangeListener(AS3.bind(this,"updateModifiers$GORa"));
    AS3.getBindable(this,"linkListWrapper").getVE().removeChangeListener(AS3.bind(this,"updateDropZone$GORa"));
    AS3.getBindable(this,"linkListWrapper").destroy();
    Ext.grid.Panel.prototype.onDestroy.call(this);
  }/*

  private*/ function updateFirstVisibleColumn()/*:void*/ {
    // If the LinkList shows a validation border we need to make sure the border will not lap over any visible column.
    // So we indend the columns of the link list by a small amount. As the indention must not be visible when selecting
    // a grid row or cell the first visible column must be enlarged by a small amount while moving its content to the
    // right. Technically we add a padding-left to achieve this (@see LinkListBEMEntities.scss).
    // While this does not cause any problems when the column has a flex value, the calculation for columns having
    // a fixed value gets problematic, so we need to increase its width to the value of the added padding.
    var firstVisibleColumn/*:Column*/ = this.getFirstVisibleColumn$GORa();
    if (firstVisibleColumn !== this.lastModifiedColumn$GORa) {
      // always revert any changes regardless of flex or not (the columnschange event could also have been fired by
      // changing the flex property)
      if (this.lastModifiedColumn$GORa) {
        updateColumnWidth$static(this.lastModifiedColumn$GORa, false);
        this.lastModifiedColumn$GORa = null;
      }

      if (!firstVisibleColumn.flex) {
        updateColumnWidth$static(firstVisibleColumn, true);
        this.lastModifiedColumn$GORa = firstVisibleColumn;
      }
    }
  }/*

  private static*/ function updateColumnWidth$static(column/*:Column*/, add/*:Boolean = false*/)/*:void*/ {if(arguments.length<=1)add=false;
    var valueToAdd/*:Number*/ = (add ? 1 : -1) * com.coremedia.ui.bem.LinkListBEMEntities.VALIDATION_SPACING_ADDED;
    // Column#setWidth seems to be buggy as it accesses the getEl although it is not rendered yet
    // in addition to this Column#getWidth will not return the width of the cells but of the header
    // consequently if the header is not visible it will return 0 although setWidth to a non-zero value had an effect
    // on the cell width
    if (column.rendered) {
      column.setWidth(column["width"] + valueToAdd);
    } else {
      // if the component is not rendered yet, we can change the width configuration
      column["width"] = column["width"] + valueToAdd;
    }
  }/*

  private*/ function getFirstVisibleColumn()/*:Column*/ {
    var result/*:Column*/ = null;
    this.columns.some(function (column/*:Column*/)/*:Boolean*/ {
      if (!column.hidden) {
        result = column;
        return true;
      }
    });
    return result;
  }/*

  protected*/ function getFocusableChild()/*:Component*/ {
    if (!this.isEmpty$GORa()) {
      return this.getView();
    }
    if (!AS3.getBindable(this,"hideDropArea") && !this.isFull$GORa()) {
      return this.dropArea;
    }
    return null;
  }/*

  override public*/ function isFocusable(deep/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<=0)deep=false;
    return Ext.grid.Panel.prototype.isFocusable.call(this,deep) && this.getFocusableChild() !== null;
  }/*

  override public*/ function focus(selectText/*:* = undefined*/, delay/*:* = undefined*/, callback/*:Function = null*/, scope/*:Function = null*/)/*:Component*/ {switch(Math.max(arguments.length,2)){case 2:callback=null;case 3:scope=null;}
    var focusableChild/*:Component*/ = this.getFocusableChild();
    focusableChild && focusableChild.focus(selectText, delay, callback, scope);
  }/*

  /**
   * If true, hides the drop zone for the link list grid.
   * /
  [Bindable]
  public*/ function get$hideDropArea()/*:Boolean*/ {
    return this._hideDropArea$GORa;
  }/*

  [Bindable]
  public*/ function set$hideDropArea(newHideDropArea/*:Boolean*/)/*:void*/ {
    this._hideDropArea$GORa = newHideDropArea;

    this.initDropArea$GORa();
    this.updateModifiers$GORa();
  }/*

  private*/ function initDropArea()/*:void*/ {
    if (this.isInitialized$GORa && !AS3.getBindable(this,"hideDropArea") && !this.dropArea.isInstance) {
      AS3.setBindable(this.dropArea,"dock" , "bottom");
      this.dropArea.itemId = LinkListGridPanelBase.DROP_AREA_ITEM_ID;
      this.dropArea =AS3.as( this.addDocked(this.dropArea)[0],  Ext.Component);
    }
  }/*

  protected*/ function getModifierVE()/*:ValueExpression*/ {
    if (!this.modifierVE$GORa) {
      this.modifierVE$GORa = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.modifierVE$GORa;
  }/*

  private*/ function isEmpty()/*:Boolean*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var links/*:Array*/ = AS3.getBindable(this,"linkListWrapper").getLinks();
    return links !== undefined && links.length === 0;
  }/*

  private*/ function isFull()/*:Boolean*/ {
    return AS3.getBindable(this,"linkListWrapper").getFreeCapacity() === 0;
  }/*

  private*/ function updateDropZone()/*:void*/ {
    if (!AS3.getBindable(this,"hideDropArea")) {
      if (this.isFull$GORa()) {
        this.dropArea.hide();
      }
      else {
        this.dropArea.show();
      }
    }
  }/*

  private*/ function updateModifiers()/*:void*/ {
    var newModifiers/*:Array*/ = [];


    if (this.isEmpty$GORa()) {
      newModifiers.push(com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_EMPTY);
    }

    if (AS3.getBindable(this,"hideDropArea") || this.isFull$GORa()) {
      newModifiers.push(com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_NO_TAIL);
    }

    if (AS3.getBindable(this,"embedded")) {
      newModifiers.push(com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_EMBEDDED);
    }

    if (this.hideValidation) {
      newModifiers.push(com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_NO_VALIDATION);
    }

    var oldModifiers/*:Array*/ =AS3.as( this.modifierVE$GORa.getValue(),  Array);
    this.modifierVE$GORa.setValue(newModifiers);

    if (!Ext.Array.equals(oldModifiers, newModifiers)) {
      this.updateLayout();
    }
  }/*

  /**
   * Return a value expression evaluating to an array of selected positions (indexes) in the link list.
   * @return a value expression evaluating to an array of selected position
   * /
  protected*/ function getSelectedPositionsVE()/*:ValueExpression*/ {
    if (!this.selectedPositionsVE$GORa) {
      this.selectedPositionsVE$GORa = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }
    return this.selectedPositionsVE$GORa;
  }/*

  /**
   * Return a value expression evaluating to an array of selected values (elements) in the link list.
   * @return a value expression evaluating to an array of selected values
   * /
  protected*/ function getSelectedVE()/*:ValueExpression*/ {
    if (!this.selectedVE$GORa) {
      this.selectedVE$GORa = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }
    return this.selectedVE$GORa;
  }/*

  protected*/ function handleDropAreaDrop(contents/*:Array*/, sourceView/*:AbstractView*/)/*:void*/ {
    var store/*:Store*/ =AS3.as( this.getStore(),  Ext.data.Store);
    var view/*:TableView*/ = this.getView();
    var selectionModel/*:SelectionModel*/ = this.getSelectionModel();

    if (view === sourceView) {
      var links/*:Array*/ = AS3.getBindable(this,"linkListWrapper").getLinks() || [];
      var fromIndexes/*:Array*/ = contents.map(function (content/*:Bean*/)/*:int*/ {
        return links.indexOf(content);
      });
      AS3.getBindable(this,"linkListWrapper").moveLinksToIndex(fromIndexes, links.length - 1);
    } else if (AS3.getBindable(this,"linkListWrapper").acceptsLinks(contents)) {
      AS3.getBindable(this,"linkListWrapper").addLinks(contents);
    }

    var beanRecords/*:Array*/ = com.coremedia.cms.editor.sdk.util.StoreUtil.asBeanRecords(contents, store);
    selectionModel.select(beanRecords);
  }/*

  private*/ function onValidationChanged()/*:void*/ {
    var viewValidation/*:ValidationStateMixin*/ =AS3.as( AS3.getBindable(this,"view","DUMMY"),  com.coremedia.ui.mixins.ValidationStateMixin);
    if (viewValidation) {
      AS3.setBindable(viewValidation,"validationState" , AS3.getBindable(this,"validationState"));
      AS3.setBindable(viewValidation,"validationMessage" , AS3.getBindable(this,"validationMessage"));
    }

    var dropAreaValidation/*:ValidationStateMixin*/ =AS3.as( this.dropArea,  com.coremedia.ui.mixins.ValidationStateMixin);
    if (dropAreaValidation) {
      AS3.setBindable(dropAreaValidation,"validationState" , AS3.getBindable(this,"validationState"));
      AS3.setBindable(dropAreaValidation,"validationMessage" , AS3.getBindable(this,"validationMessage"));
    }
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;

  /** @private * /
  [Bindable]
  public native function set highlighted(newHighlighted:Boolean):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get highlighted():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.Panel",
      mixins: [
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.mixins.HighlightableMixin"
      ],
      selectedPositionsVE$GORa: null,
      selectedVE$GORa: null,
      dropArea: null,
      hideValidation: false,
      modifierVE$GORa: null,
      _hideDropArea$GORa: false,
      isInitialized$GORa: false,
      lastModifiedColumn$GORa: null,
      constructor: LinkListGridPanelBase$,
      super$GORa: function() {
        Ext.grid.Panel.prototype.constructor.apply(this, arguments);
      },
      isAnnotated: isAnnotated,
      initComponent: initComponent,
      onDestroy: onDestroy,
      updateFirstVisibleColumn$GORa: updateFirstVisibleColumn,
      getFirstVisibleColumn$GORa: getFirstVisibleColumn,
      getFocusableChild: getFocusableChild,
      isFocusable: isFocusable,
      focus: focus,
      getHideDropArea: get$hideDropArea,
      setHideDropArea: set$hideDropArea,
      initDropArea$GORa: initDropArea,
      getModifierVE: getModifierVE,
      isEmpty$GORa: isEmpty,
      isFull$GORa: isFull,
      updateDropZone$GORa: updateDropZone,
      updateModifiers$GORa: updateModifiers,
      getSelectedPositionsVE: getSelectedPositionsVE,
      getSelectedVE: getSelectedVE,
      handleDropAreaDrop: handleDropAreaDrop,
      onValidationChanged$GORa: onValidationChanged,
      config: {
        linkListWrapper: null,
        readOnlyValueExpression: null,
        selectedPositionsExpression: null,
        selectedValuesExpression: null,
        embedded: false,
        replaceOnDrop: false,
        rowWidget: null,
        rowWidgetsAnnotatedPredicates: null,
        hideDropArea: undefined
      },
      statics: {
        DROP_AREA_ITEM_ID: "dropArea",
        DATA_FIELD_IS_ANNOTATED: "isAnnotated"
      },
      requires: [
        "Ext.Array",
        "Ext.Component",
        "Ext.data.Store",
        "Ext.grid.Panel",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.plugins.AnnotatedLinkListPlugin",
        "com.coremedia.ui.util.ThumbnailImage"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.util.AnnotatedLinkListHelper",
        "com.coremedia.cms.editor.sdk.util.IAnnotatedLinkListProvider",
        "com.coremedia.cms.editor.sdk.util.StoreUtil"
      ]
    };
});
