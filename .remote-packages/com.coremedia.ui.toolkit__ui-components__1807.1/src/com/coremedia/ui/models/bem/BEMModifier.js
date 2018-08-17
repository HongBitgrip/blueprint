Ext.define("com.coremedia.ui.models.bem.BEMModifier", function(BEMModifier) {/*package com.coremedia.ui.models.bem {
import com.coremedia.ui.util.BEMUtils;

/**
 * Represents a B.E.M. modifier
 *
 * More Information:
 *
 * http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/
 * http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
 * http://atendesigngroup.com/blog/component-element-modifier-design-pattern
 * /
public class BEMModifier implements BEMEntity {

  private var block:BEMEntity;
  private var identifier:String;

  public*/ function BEMModifier$(block/*:BEMEntity*/, identifier/*:String*/) {
    this.block$mVWT = block;
    this.identifier$mVWT = identifier;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getParent()/*:BEMEntity*/ {
    return this.block$mVWT;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getIdentifier()/*:String*/ {
    return this.identifier$mVWT;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getCSSClass()/*:String*/ {
    return com.coremedia.ui.util.BEMUtils.getModifierClassName(this.block$mVWT.getIdentifier(), this.identifier$mVWT);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getCSSSelector()/*:String*/ {
    return com.coremedia.ui.util.BEMUtils.getModifierSelector(this.block$mVWT.getIdentifier(), this.identifier$mVWT);
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
      block$mVWT: null,
      identifier$mVWT: null,
      constructor: BEMModifier$,
      getParent: getParent,
      getIdentifier: getIdentifier,
      getCSSClass: getCSSClass,
      getCSSSelector: getCSSSelector,
      toString: toString,
      requires: ["com.coremedia.ui.models.bem.BEMEntity"],
      uses: ["com.coremedia.ui.util.BEMUtils"]
    };
});
