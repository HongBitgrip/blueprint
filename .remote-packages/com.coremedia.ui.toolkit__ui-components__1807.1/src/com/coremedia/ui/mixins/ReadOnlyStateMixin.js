Ext.define("com.coremedia.ui.mixins.ReadOnlyStateMixin", function(ReadOnlyStateMixin) {/*package com.coremedia.ui.mixins {

import ext.Component;
import ext.Mixin;
import ext.mixin.Observable;

/**
 * Default implementation of {@link IReadOnlyStateMixin}.
 * /
public class ReadOnlyStateMixin extends Mixin implements IReadOnlyStateMixin {

  /**
   * @event readOnlyChanged
   * Fires when the readOnly property changes
   * /

  public static const READ_ONLY_CLS:String = "cm-read-only";

  private var _readOnly:Boolean;

  /** @inheritDoc * /
  [Bindable]
  public*/ function get$readOnly()/*:Boolean*/ {
    return this._readOnly$aHtA || false;
  }/*

  /** @private * /
  [Bindable]
  public*/ function set$readOnly(newReadOnly/*:Boolean*/)/*:void*/ {
    var oldReadOnly/*:Boolean*/ = this._readOnly$aHtA;

    if (newReadOnly !== oldReadOnly) {
      this._readOnly$aHtA = newReadOnly;

      var cmp/*:Component*/ =AS3.as( this,  Ext.Component);
      if (cmp) {
        if (oldReadOnly) {
          cmp.removeCls(ReadOnlyStateMixin.READ_ONLY_CLS);
        }
        if (newReadOnly) {
          cmp.addCls(ReadOnlyStateMixin.READ_ONLY_CLS);
        }
      }

      var observable/*:Observable*/ =AS3.as( this,  Ext.mixin.Observable);
      if (observable) {
        observable.fireEvent("readOnlyChanged", observable, newReadOnly, oldReadOnly);
      }
    }
  }/*
}*/function ReadOnlyStateMixin$() {this.super$aHtA();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Mixin",
      _readOnly$aHtA: false,
      getReadOnly: get$readOnly,
      setReadOnly: set$readOnly,
      super$aHtA: function() {
        Ext.Mixin.prototype.constructor.apply(this, arguments);
      },
      constructor: ReadOnlyStateMixin$,
      config: {readOnly: undefined},
      statics: {READ_ONLY_CLS: "cm-read-only"},
      requires: [
        "Ext.Component",
        "Ext.Mixin",
        "Ext.mixin.Observable"
      ]
    };
});
