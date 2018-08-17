Ext.define("com.coremedia.ui.models.bem.BEMDecoratorBuilder", function(BEMDecoratorBuilder) {/*package com.coremedia.ui.models.bem {

/**
 * Builder for a {@link BEMDecorator} to improve readability of code.
 * /
public class BEMDecoratorBuilder {

  private var block:SelectorWithIdentifier;

  [ArrayElementType("com.coremedia.ui.models.bem.SelectorWithIdentifier")]
  private var elements:Array;

  [ArrayElementType("com.coremedia.ui.models.bem.SelectorWithIdentifier")]
  private var modifiers:Array;

  public*/ function BEMDecoratorBuilder$(blockSelector/*:String*/, blockIdentifier/*:String*/) {
    this.block$VFOc = new com.coremedia.ui.models.bem.SelectorWithIdentifier(blockSelector, blockIdentifier);
    this.elements$VFOc = [];
    this.modifiers$VFOc = [];
  }/*

  public*/ function addElement(elementSelector/*:String*/, elementIdentifier/*:String*/)/*:void*/ {
    this.elements$VFOc.push(new com.coremedia.ui.models.bem.SelectorWithIdentifier(elementSelector, elementIdentifier));
  }/*

  public*/ function addModifier(modifierSelector/*:String*/, modifierIdentifier/*:String*/)/*:void*/ {
    this.modifiers$VFOc.push(new com.coremedia.ui.models.bem.SelectorWithIdentifier(modifierSelector, modifierIdentifier));
  }/*

  public*/ function addDirectModifier(modifierSelector/*:String*/, modifierIdentifier/*:String*/)/*:void*/ {
    this.modifiers$VFOc.push(new com.coremedia.ui.models.bem.SelectorWithIdentifier(modifierSelector, modifierIdentifier, true));
  }/*

  public*/ function build()/*:BEMDecorator*/ {
    return new com.coremedia.ui.models.bem.BEMDecorator(this.block$VFOc, this.elements$VFOc, this.modifiers$VFOc);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      block$VFOc: null,
      elements$VFOc: null,
      modifiers$VFOc: null,
      constructor: BEMDecoratorBuilder$,
      addElement: addElement,
      addModifier: addModifier,
      addDirectModifier: addDirectModifier,
      build: build,
      uses: [
        "com.coremedia.ui.models.bem.BEMDecorator",
        "com.coremedia.ui.models.bem.SelectorWithIdentifier"
      ]
    };
});
