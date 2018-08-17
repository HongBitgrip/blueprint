Ext.define("com.coremedia.ui.skins.BaseSkin", function(BaseSkin) {/*package com.coremedia.ui.skins {
import com.coremedia.ui.util.Enum;

/**
 * Declares all usable skins defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class BaseSkin extends Enum {

  private var skin:String;
  private var skinGroup:String;
  private var description:String;
  private var className:String;*/

  function BaseSkin$(skin/*:String*/, skinGroup/*:String*/, description/*:String*/, enumName/*:String*/) {this.super$vJeA();
    this.skin$vJeA = skin;
    this.skinGroup$vJeA = skinGroup;
    this.className$vJeA = enumName;
    this.description$vJeA = description;
  }/*

  public*/ function getSkin()/*:String*/ {
    return this.skin$vJeA;
  }/*

  public*/ function getSkinGroup()/*:String*/ {
    return this.skinGroup$vJeA;
  }/*

  public*/ function getDescription()/*:String*/ {
    if (!this.description$vJeA) {
      return 'No description provided.';
    }
    return this.description$vJeA;
  }/*

  public*/ function getClassName()/*:String*/ {
    return this.className$vJeA;
  }/*

  override public*/ function toString()/*:String*/ {
    return this.getSkin();
  }/*

  /**
   * This method is necessary so that the SkinCategoryPanel.mxml can use
   * the Array of BaseSkins as return value of the ValueExpression function.
   *
   * @return String The skin
   * /
  public*/ function getId()/*:String*/ {
    return this.getSkinGroup() + '-' + this.getSkin();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.util.Enum",
      metadata: {"": ["PublicApi"]},
      skin$vJeA: null,
      skinGroup$vJeA: null,
      description$vJeA: null,
      className$vJeA: null,
      constructor: BaseSkin$,
      super$vJeA: function() {
        com.coremedia.ui.util.Enum.prototype.constructor.apply(this, arguments);
      },
      getSkin: getSkin,
      getSkinGroup: getSkinGroup,
      getDescription: getDescription,
      getClassName: getClassName,
      toString: toString,
      getId: getId,
      requires: ["com.coremedia.ui.util.Enum"]
    };
});
