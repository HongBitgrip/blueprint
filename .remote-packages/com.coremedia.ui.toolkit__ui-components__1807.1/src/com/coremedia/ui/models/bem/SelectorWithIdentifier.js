Ext.define("com.coremedia.ui.models.bem.SelectorWithIdentifier", function(SelectorWithIdentifier) {/*package com.coremedia.ui.models.bem {

/**
 * Holds a combination of CSS-selector and identifier.
 * /
public class SelectorWithIdentifier {

  private var selector:String;
  private var identifier:String;
  private var direct:Boolean;

  public*/ function SelectorWithIdentifier$(selector/*:String*/, identifier/*:String*/, direct/*:Boolean = false*/) {if(arguments.length<=2)direct=false;
    this.selector$6iko = selector;
    this.identifier$6iko = identifier;
    this.direct$6iko = direct;
  }/*

  public*/ function getSelector()/*:String*/ {
    return this.selector$6iko;
  }/*

  public*/ function getIdentifier()/*:String*/ {
    return this.identifier$6iko;
  }/*

  public*/ function isDirectSelector()/*:Boolean*/ {
    return this.direct$6iko;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      selector$6iko: null,
      identifier$6iko: null,
      direct$6iko: false,
      constructor: SelectorWithIdentifier$,
      getSelector: getSelector,
      getIdentifier: getIdentifier,
      isDirectSelector: isDirectSelector
    };
});
