Ext.define("com.coremedia.ui.models.bem.BEMElement", function(BEMElement) {/*package com.coremedia.ui.models.bem {
import com.coremedia.ui.util.BEMUtils;

/**
 * Represents a B.E.M. element
 *
 * More Information:
 *
 * http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/
 * http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
 * http://atendesigngroup.com/blog/component-element-modifier-design-pattern
 * /
public class BEMElement implements BEMEntity {

  private var block:BEMEntity;
  private var identifier:String;

  public*/ function BEMElement$(block/*:BEMEntity*/, identifier/*:String*/) {
    this.block$McZs = block;
    this.identifier$McZs = identifier;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getParent()/*:BEMEntity*/ {
    return this.block$McZs;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getIdentifier()/*:String*/ {
    return this.identifier$McZs;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getCSSClass()/*:String*/ {
    return com.coremedia.ui.util.BEMUtils.getElementClassName(this.block$McZs.getIdentifier(), this.identifier$McZs);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getCSSSelector()/*:String*/ {
    return com.coremedia.ui.util.BEMUtils.getElementSelector(this.block$McZs.getIdentifier(), this.identifier$McZs);
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
      block$McZs: null,
      identifier$McZs: null,
      constructor: BEMElement$,
      getParent: getParent,
      getIdentifier: getIdentifier,
      getCSSClass: getCSSClass,
      getCSSSelector: getCSSSelector,
      toString: toString,
      requires: ["com.coremedia.ui.models.bem.BEMEntity"],
      uses: ["com.coremedia.ui.util.BEMUtils"]
    };
});
