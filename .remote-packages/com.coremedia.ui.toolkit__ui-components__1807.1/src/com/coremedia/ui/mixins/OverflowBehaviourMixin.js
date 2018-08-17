Ext.define("com.coremedia.ui.mixins.OverflowBehaviourMixin", function(OverflowBehaviourMixin) {/*package com.coremedia.ui.mixins {

import com.coremedia.ui.models.bem.BEMBlock;

import ext.Component;
import ext.Mixin;

//noinspection JSUnusedGlobalSymbols
/**
 * Default implementation of {@link IOverflowBehaviourMixin}.
 *
 * Adds configurable overflow behaviour to the class this mixin is mixed into.
 * /
public class OverflowBehaviourMixin extends Mixin implements IOverflowBehaviourMixin {

  public static const BLOCK:BEMBlock =*/function BLOCK$static_(){OverflowBehaviourMixin.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-overflow-behavior"));}/*;

  private var _overflowBehaviour:OverflowBehaviour;

  /** @inheritDoc * /
  [Bindable]
  public*/ function get$overflowBehaviour()/*:OverflowBehaviour*/ {
    return this._overflowBehaviour$Dl6_;
  }/*

  /** @private * /
  [Bindable]
  public*/ function set$overflowBehaviour(newOverflowBehaviour/*:OverflowBehaviour*/)/*:void*/ {
    this.updateScale$Dl6_(this._overflowBehaviour$Dl6_, this._overflowBehaviour$Dl6_ = newOverflowBehaviour || com.coremedia.ui.mixins.OverflowBehaviour.BREAK_ALL);
  }/*

  private*/ function updateScale(oldBehaviour/*:OverflowBehaviour*/, newBehaviour/*:OverflowBehaviour*/)/*:void*/ {
    var cmp/*:Component*/ =AS3.as( this,  Ext.Component);
    if (cmp) {
      var modifierToRemove/*:String*/ = OverflowBehaviourMixin.BLOCK.createModifier(oldBehaviour && oldBehaviour.id).getCSSClass();
      modifierToRemove && cmp.removeCls(modifierToRemove);

      var modifierToAdd/*:String*/ = OverflowBehaviourMixin.BLOCK.createModifier(newBehaviour && newBehaviour.id).getCSSClass();
      modifierToAdd && cmp.addCls(modifierToAdd);
    }
  }/*
}*/function OverflowBehaviourMixin$() {this.super$Dl6_();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Mixin",
      _overflowBehaviour$Dl6_: null,
      getOverflowBehaviour: get$overflowBehaviour,
      setOverflowBehaviour: set$overflowBehaviour,
      updateScale$Dl6_: updateScale,
      super$Dl6_: function() {
        Ext.Mixin.prototype.constructor.apply(this, arguments);
      },
      constructor: OverflowBehaviourMixin$,
      config: {overflowBehaviour: undefined},
      statics: {
        BLOCK: undefined,
        __initStatics__: function() {
          BLOCK$static_();
        }
      },
      requires: [
        "Ext.Component",
        "Ext.Mixin"
      ],
      uses: [
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.models.bem.BEMBlock"
      ]
    };
});
