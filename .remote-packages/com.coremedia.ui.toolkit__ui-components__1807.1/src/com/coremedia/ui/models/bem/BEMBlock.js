Ext.define("com.coremedia.ui.models.bem.BEMBlock", function(BEMBlock) {/*package com.coremedia.ui.models.bem {
import com.coremedia.ui.util.BEMUtils;

/**
 * Represents a B.E.M. block
 *
 * More Information:
 *
 * http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/
 * http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
 * http://atendesigngroup.com/blog/component-element-modifier-design-pattern
 * /
public class BEMBlock implements BEMEntity {

  private var identifier:String;

  public*/ function BEMBlock$(identifier/*:String*/) {
    this.identifier$RKK7 = identifier;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getParent()/*:BEMEntity*/ {
    return null;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getIdentifier()/*:String*/ {
    return this.identifier$RKK7;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getCSSClass()/*:String*/ {
    return com.coremedia.ui.util.BEMUtils.getBlockClassName(this.identifier$RKK7);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getCSSSelector()/*:String*/ {
    return com.coremedia.ui.util.BEMUtils.getBlockSelector(this.identifier$RKK7);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function createElement(identifier/*:String*/)/*:BEMElement*/ {
    return new com.coremedia.ui.models.bem.BEMElement(this, identifier);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function createModifier(identifier/*:String*/)/*:BEMModifier*/ {
    return new com.coremedia.ui.models.bem.BEMModifier(this, identifier);
  }/*

  /**
   * For convenience this has the same result as {@link #getCSSClass}.
   *
   * @return the String representation of the block
   * /
  public*/ function toString()/*:String*/ {
    return this.getCSSClass();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.models.bem.BEMEntity"],
      identifier$RKK7: null,
      constructor: BEMBlock$,
      getParent: getParent,
      getIdentifier: getIdentifier,
      getCSSClass: getCSSClass,
      getCSSSelector: getCSSSelector,
      createElement: createElement,
      createModifier: createModifier,
      toString: toString,
      requires: ["com.coremedia.ui.models.bem.BEMEntity"],
      uses: [
        "com.coremedia.ui.models.bem.BEMElement",
        "com.coremedia.ui.models.bem.BEMModifier",
        "com.coremedia.ui.util.BEMUtils"
      ]
    };
});
