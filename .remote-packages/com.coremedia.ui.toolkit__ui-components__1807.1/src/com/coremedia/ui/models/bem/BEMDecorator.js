Ext.define("com.coremedia.ui.models.bem.BEMDecorator", function(BEMDecorator) {/*package com.coremedia.ui.models.bem {

/**
 * Holds a BEM definition containing of block, elements and modifiers of type {@link SelectorWithIdentifier} to
 * decorate an existing DOM based on selectors.
 * /
public class BEMDecorator {

  private var block:SelectorWithIdentifier;

  [ArrayElementType("com.coremedia.ui.models.bem.SelectorWithIdentifier")]
  private var elements:Array;

  [ArrayElementType("com.coremedia.ui.models.bem.SelectorWithIdentifier")]
  private var modifiers:Array;

  public*/ function BEMDecorator$(block/*:SelectorWithIdentifier*/, elements/*:Array = null*/, modifiers/*:Array = null*/) {switch(Math.max(arguments.length,1)){case 1:elements=null;case 2:modifiers=null;}
    this.block$HUkr = block;
    this.elements$HUkr = elements || [];
    this.modifiers$HUkr = modifiers || [];
  }/*

  public*/ function getBlock()/*:SelectorWithIdentifier*/ {
    return this.block$HUkr;
  }/*

  public*/ function getElements()/*:Array*/ {
    return this.elements$HUkr;
  }/*

  public*/ function getModifiers()/*:Array*/ {
    return this.modifiers$HUkr;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      block$HUkr: null,
      elements$HUkr: null,
      modifiers$HUkr: null,
      constructor: BEMDecorator$,
      getBlock: getBlock,
      getElements: getElements,
      getModifiers: getModifiers
    };
});
