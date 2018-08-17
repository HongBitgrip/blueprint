Ext.define("com.coremedia.ui.mixins.AnnotatedLinkListWidgetMixin", function(AnnotatedLinkListWidgetMixin) {/*package com.coremedia.ui.mixins {
import com.coremedia.ui.data.ValueExpression;

import ext.Component;
import ext.Mixin;
import ext.data.Store;
import ext.grid.GridPanel;
import ext.view.DataView;

//noinspection JSUnusedGlobalSymbols
public class AnnotatedLinkListWidgetMixin extends Mixin implements IAnnotatedLinkListWidgetMixin {

  public static const ROW_WIDGETS_REFRESH_EVENT:String = "refreshEvent";

  private var _listVE:ValueExpression;
  private var _annotationsVE:ValueExpression;

  /** @inheritDoc * /
  [Bindable]
  public*/ function get$listVE()/*:ValueExpression*/ {
    return this._listVE$Vejb;
  }/*

  /** @inheritDoc * /
  [Bindable]
  public*/ function set$listVE(listVE/*:ValueExpression*/)/*:void*/ {
    this._listVE$Vejb = listVE;
  }/*

  /** @inheritDoc * /
  [Bindable]
  public*/ function get$recordIndex()/*:Number*/ {
    var rowContext/*:Object*/ = this.getRowContext$Vejb();
    if (rowContext && rowContext.record && rowContext.ownerGrid && rowContext.ownerGrid.store) {
      var store/*:Store*/ = rowContext.ownerGrid.store;
      return store.indexOf(rowContext.record);
    }
    return undefined;
  }/*

  /** @inheritDoc * /
  public*/ function initAnnotatedLinkListWidgetMixin(annotationsVE/*:ValueExpression*/)/*:void*/ {var this$=this;
    this._annotationsVE$Vejb = annotationsVE;
    var cmp/*:Component*/ =AS3.as( this,  Ext.Component);
    if (cmp && AS3.getBindable(this,"listVE") && this._annotationsVE$Vejb) {

      var ownerGrid/*:GridPanel*/ =AS3.as( cmp.findParentByType(Ext.grid.Panel),  Ext.grid.Panel);
      if (ownerGrid) {
        cmp.mon(ownerGrid, AnnotatedLinkListWidgetMixin.ROW_WIDGETS_REFRESH_EVENT,AS3.bind( this,"updateSettingsVE$Vejb"));

        var dataView/*:DataView*/ = ownerGrid.getView();
        cmp.mon(dataView, "expandbody",AS3.bind( this,"updateSettingsVE$Vejb"));
        cmp.mon(dataView, "collapsebody",AS3.bind( this,"updateSettingsVE$Vejb"));
        cmp.mon(dataView, "resize", function ()/*:void*/ {
          cmp.setWidth("100%");
          cmp.updateLayout();
        });
      }

      AS3.getBindable(this,"listVE").addChangeListener(AS3.bind(this,"updateSettingsVE$Vejb"));

      cmp.on("destroy", function ()/*:void*/ {
        AS3.getBindable(this$,"listVE") && AS3.getBindable(this$,"listVE").removeChangeListener(AS3.bind(this$,"updateSettingsVE$Vejb"));
      });
    }
  }/*

  private*/ function getRowContext()/*:Object*/ {
    // TODO: check for more elegant (API?) way
    return this["_rowContext"];
  }/*

  private*/ function isAttached()/*:Boolean*/ {
    // TODO: check for more elegant (API?) way
    return !(this["isDetached"]);
  }/*

  private*/ function updateSettingsVE()/*:void*/ {
    var cmp/*:Component*/ =AS3.as( this,   Ext.Component);
    if (cmp && cmp.rendered) {
      if (AS3.getBindable(this,"recordIndex") !== undefined) {
        if (AS3.getBindable(this,"recordIndex") > -1 && this.isAttached$Vejb()) {
          this._annotationsVE$Vejb.setValue(AS3.getBindable(this,"listVE").extendBy(AS3.getBindable(this,"recordIndex") + "").getValue());
        } else {
          this._annotationsVE$Vejb.setValue(null);
        }
      }
    }
  }/*
}*/function AnnotatedLinkListWidgetMixin$() {this.super$Vejb();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Mixin",
      _listVE$Vejb: null,
      _annotationsVE$Vejb: null,
      getListVE: get$listVE,
      setListVE: set$listVE,
      getRecordIndex: get$recordIndex,
      initAnnotatedLinkListWidgetMixin: initAnnotatedLinkListWidgetMixin,
      getRowContext$Vejb: getRowContext,
      isAttached$Vejb: isAttached,
      updateSettingsVE$Vejb: updateSettingsVE,
      super$Vejb: function() {
        Ext.Mixin.prototype.constructor.apply(this, arguments);
      },
      constructor: AnnotatedLinkListWidgetMixin$,
      config: {
        listVE: undefined,
        recordIndex: undefined
      },
      statics: {ROW_WIDGETS_REFRESH_EVENT: "refreshEvent"},
      requires: [
        "Ext.Component",
        "Ext.Mixin",
        "Ext.grid.Panel"
      ]
    };
});
