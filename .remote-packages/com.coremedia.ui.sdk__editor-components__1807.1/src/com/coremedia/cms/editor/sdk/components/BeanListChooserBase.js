Ext.define("com.coremedia.cms.editor.sdk.components.BeanListChooserBase", function(BeanListChooserBase) {/*package com.coremedia.cms.editor.sdk.components {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.util.createComponentSelector;

import ext.panel.Panel;

public class BeanListChooserBase extends Panel implements IValidationStateMixin {

  internal var innerSelectedBeansValueExpression:ValueExpression;
  internal var outerSelectBeansValueExpression:ValueExpression;

  private static*/ var EMPTY_SELECTION$static/*:Array*/;/* =*/function EMPTY_SELECTION$static_(){EMPTY_SELECTION$static=( []);};/*
  private static*/ var EMPTY_SELECTION_CLASS$static/*:String*/ = "no-selection-item";/*

  /**
   * Optional parameter to specify a list entry that represents the empty selection. The item is expected
   * to be a member of the given beanList.
   *
   * The properties of the empty selection bean have to match the ones referenced in a custom template / custom fields.
   * /
  [Bindable]
  public var emptySelection:Bean;

  public*/ function BeanListChooserBase$(config/*:BeanListChooserBase = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$hhHW(config);
    this.getInnerSelectedBeansValueExpression().addChangeListener(function ()/*:void*/ {
      this$.getOuterSelectedBeansValueExpression().setValue(this$.convertInnerToOuterSelection(this$.getInnerSelectedBeansValueExpression().getValue()));
      this$.fireEvent("selectedBeansChanged");
    });
    this.initValidationStateMixin();
  }/*

  internal*/ function getInnerSelectedBeansValueExpression()/*:ValueExpression*/ {
    if (!this.innerSelectedBeansValueExpression) {
      this.innerSelectedBeansValueExpression = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.innerSelectedBeansValueExpression;
  }/*

  internal*/ function getOuterSelectedBeansValueExpression()/*:ValueExpression*/ {
    if (!this.outerSelectBeansValueExpression) {
      this.outerSelectBeansValueExpression = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.outerSelectBeansValueExpression;
  }/*

  public*/ function getInnerSelectedBeans()/*:Array*/ {
    return this.getInnerSelectedBeansValueExpression().getValue();
  }/*

  public*/ function setInnerSelectedBeans(items/*:Array*/)/*:void*/ {
    this.getInnerSelectedBeansValueExpression().setValue(items);
  }/*

  public*/ function getOuterSelectedBeans()/*:Array*/ {
    return this.getOuterSelectedBeansValueExpression().getValue();
  }/*

  public*/ function setOuterSelectedBeans(items/*:Array*/)/*:void*/ {
    items = items || [];
    this.getOuterSelectedBeansValueExpression().setValue(items);
    this.getInnerSelectedBeansValueExpression().setValue(this.convertOuterToInnerSelection(this.getOuterSelectedBeansValueExpression().getValue()));
  }/*

  internal*/ function convertOuterToInnerSelection(selection/*:Array*/)/*:Array*/ {
    if (selection.length === 0 && AS3.getBindable(this,"emptySelection")) {
      return [AS3.getBindable(this,"emptySelection")];
    }
    return selection;
  }/*

  internal*/ function convertInnerToOuterSelection(selection/*:Array*/)/*:Array*/ {
    // An element was deselected via ctrl-key. Make sure that the inner selection
    // is updated to hold the empty selection bean if available.
    if (selection.length === 0 && AS3.getBindable(this,"emptySelection")) {
      this.innerSelectedBeansValueExpression.setValue([AS3.getBindable(this,"emptySelection")]);
      return EMPTY_SELECTION$static;
    }
    if (selection.length === 1 && AS3.getBindable(this,"emptySelection") && selection[0] === AS3.getBindable(this,"emptySelection")) {
      return EMPTY_SELECTION$static;
    }
    return selection;
  }/*


  override protected*/ function onDisable()/*:void*/ {
    var dataview/*:BeanListChooserDataView*/ = this.getDataview$hhHW();
    dataview.disable();
  }/*

  override protected*/ function onEnable()/*:void*/ {
    var dataview/*:BeanListChooserDataView*/ = this.getDataview$hhHW();
    dataview.enable();
    Ext.panel.Panel.prototype.enable.call(this);
  }/*

  private*/ function getDataview()/*:BeanListChooserDataView*/ {
    return AS3.as( this.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.sdk.components.BeanListChooserDataView.xtype).build()),  com.coremedia.cms.editor.sdk.components.BeanListChooserDataView);
  }/*

  internal*/ function addEmptySelectionDataField(dataFields/*:Array*/, emptySelection/*:Bean*/)/*:Array*/ {
    if (emptySelection) {
      var myEmptySelection/*:Bean*/ = emptySelection;
      var emptySelectionItemClass/*:DataField*/ = new com.coremedia.ui.store.DataField(AS3.cast(com.coremedia.ui.store.DataField,{
        name: "emptySelectionItemClass",
        mapping: "name",
        convert: function(name/*:String*/, c/*:Bean*/)/*:String*/ {
          if (c === myEmptySelection) {
            return EMPTY_SELECTION_CLASS$static;
          }
          return "";
        }
      }));
      return dataFields.concat(emptySelectionItemClass);
    } else {
      return dataFields;
    }
  }/*


  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      innerSelectedBeansValueExpression: null,
      outerSelectBeansValueExpression: null,
      constructor: BeanListChooserBase$,
      super$hhHW: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getInnerSelectedBeansValueExpression: getInnerSelectedBeansValueExpression,
      getOuterSelectedBeansValueExpression: getOuterSelectedBeansValueExpression,
      getInnerSelectedBeans: getInnerSelectedBeans,
      setInnerSelectedBeans: setInnerSelectedBeans,
      getOuterSelectedBeans: getOuterSelectedBeans,
      setOuterSelectedBeans: setOuterSelectedBeans,
      convertOuterToInnerSelection: convertOuterToInnerSelection,
      convertInnerToOuterSelection: convertInnerToOuterSelection,
      onDisable: onDisable,
      onEnable: onEnable,
      getDataview$hhHW: getDataview,
      addEmptySelectionDataField: addEmptySelectionDataField,
      config: {emptySelection: null},
      statics: {
        EMPTY_SELECTION: undefined,
        __initStatics__: function() {
          EMPTY_SELECTION$static_();
        }
      },
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.store.DataField",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.BeanListChooserDataView"]
    };
});
