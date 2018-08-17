Ext.define("com.coremedia.ui.mixins.HighlightableMixin", function(HighlightableMixin) {/*package com.coremedia.ui.mixins {

import ext.Component;
import ext.Mixin;
import ext.mixin.Observable;

/**
 * Default implementation of {@link IHighlightableMixin}.
 * /
public class HighlightableMixin extends Mixin implements IHighlightableMixin {

  /**
   * @event highlightedChanged
   * Fires when the highlighted property changes
   * /

  public static const HIGHLIGHTED_CLS:String = "cm-highlighted";

  private var _highlighted:Boolean;

  /** @inheritDoc * /
  [Bindable]
  public*/ function get$highlighted()/*:Boolean*/ {
    return this._highlighted$MUHh || false;
  }/*

  /** @private * /
  [Bindable]
  public*/ function set$highlighted(newHighlighted/*:Boolean*/)/*:void*/ {
    var oldHighlighted/*:Boolean*/ = this._highlighted$MUHh;

    if (newHighlighted !== oldHighlighted) {
      this._highlighted$MUHh = newHighlighted;

      var cmp/*:Component*/ =AS3.as( this,  Ext.Component);
      if (cmp) {
        if (oldHighlighted) {
          cmp.removeCls(HighlightableMixin.HIGHLIGHTED_CLS);
        }
        if (newHighlighted) {
          cmp.addCls(HighlightableMixin.HIGHLIGHTED_CLS);
        }
      }

      var observable/*:Observable*/ =AS3.as( this,  Ext.mixin.Observable);
      if (observable) {
        observable.fireEvent("highlightedChanged", observable, newHighlighted, oldHighlighted);
      }
    }
  }/*
}*/function HighlightableMixin$() {this.super$MUHh();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Mixin",
      _highlighted$MUHh: false,
      getHighlighted: get$highlighted,
      setHighlighted: set$highlighted,
      super$MUHh: function() {
        Ext.Mixin.prototype.constructor.apply(this, arguments);
      },
      constructor: HighlightableMixin$,
      config: {highlighted: undefined},
      statics: {HIGHLIGHTED_CLS: "cm-highlighted"},
      requires: [
        "Ext.Component",
        "Ext.Mixin",
        "Ext.mixin.Observable"
      ]
    };
});
