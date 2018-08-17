Ext.define("com.coremedia.ui.mixins.TextAlignMixin", function(TextAlignMixin) {/*package com.coremedia.ui.mixins {

import com.coremedia.ui.models.bem.BEMBlock;

import ext.Component;
import ext.Mixin;

//noinspection JSUnusedGlobalSymbols
/**
 * Default implementation of {@link ITextAlignMixin}.
 *
 * Adds configurable text align to the class this mixin is mixed into.
 * /
public class TextAlignMixin extends Mixin implements ITextAlignMixin {

  public static const BLOCK:BEMBlock =*/function BLOCK$static_(){TextAlignMixin.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-text-align"));}/*;

  private var _textAlign:TextAlign;

  /** @inheritDoc * /
  [Bindable]
  public*/ function get$textAlign()/*:TextAlign*/ {
    return this._textAlign$yd3X;
  }/*

  /** @private * /
  [Bindable]
  public*/ function set$textAlign(textAlign/*:TextAlign*/)/*:void*/ {
    this.updateTextAlign$yd3X(this._textAlign$yd3X, this._textAlign$yd3X = textAlign || com.coremedia.ui.mixins.TextAlign.LEFT);
  }/*

  private*/ function updateTextAlign(oldTextAlign/*:TextAlign*/, newTextAlign/*:TextAlign*/)/*:void*/ {
    var cmp/*:Component*/ =AS3.as( this,  Ext.Component);
    if (cmp) {
      var modifierToRemove/*:String*/ = TextAlignMixin.BLOCK.createModifier(oldTextAlign && oldTextAlign.id).getCSSClass();
      modifierToRemove && cmp.removeCls(modifierToRemove);

      var modifierToAdd/*:String*/ = TextAlignMixin.BLOCK.createModifier(newTextAlign && newTextAlign.id).getCSSClass();
      modifierToAdd && cmp.addCls(modifierToAdd);
    }
  }/*
}*/function TextAlignMixin$() {this.super$yd3X();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Mixin",
      _textAlign$yd3X: null,
      getTextAlign: get$textAlign,
      setTextAlign: set$textAlign,
      updateTextAlign$yd3X: updateTextAlign,
      super$yd3X: function() {
        Ext.Mixin.prototype.constructor.apply(this, arguments);
      },
      constructor: TextAlignMixin$,
      config: {textAlign: undefined},
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
        "com.coremedia.ui.mixins.TextAlign",
        "com.coremedia.ui.models.bem.BEMBlock"
      ]
    };
});
