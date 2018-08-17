Ext.define("com.coremedia.personalization.ui.persona.helper.PersonaImplicitInterestHelper", function(PersonaImplicitInterestHelper) {/*package com.coremedia.personalization.ui.persona.helper {

/**
 * This is a helper class, that lets you get the implicit interest values out of the found implicit interest names.
 * /
public class PersonaImplicitInterestHelper {

  private var nameArray:Array;
  private var valueArray:Array;

  /**
   * This is a helper class, that lets you get the implicit interest values out of the found implicit interest names.
   * @param nameArray all found implicit interest names as Array
   * @param valueArray all found implicit interest values as Array
   * /
  public*/ function PersonaImplicitInterestHelper$(nameArray/*:Array*/, valueArray/*:Array*/) {
    this.nameArray$vf45 = nameArray;
    this.valueArray$vf45 = valueArray;
  }/*

  /**
   * Returns the implicit value for the given implicit name.
   * @param name the name of the implicit interest
   * @return the implicit interest value. Usually, a implicit interest is provided with a name and a value
   * (e.g. "sports"=50). But the current UI allows to create implicit interests without any value (e.g. "sports").
   * Therefore the valueArray would be empty (undefined).  If the valueArray, or the matching value for the provided
   * name is undefined, this method will return the default
   * value (100).
   * /
  public*/ function getValueForName(name/*:String*/)/*:Number*/ {
    var defaultValue/*:Number*/ = 100;
    if (!this.valueArray$vf45) {
      return defaultValue;
    }
    else {
      var value/*:Number*/ = this.valueArray$vf45[this.nameArray$vf45.indexOf(name)];
      return  value ? value : defaultValue;
    }
  }/*

  /**
   * Returns an array of all available implicit interest names.
   * @return Array: implicit interest names
   * /
  public*/ function getNameArray()/*:Array*/ {
    return this.nameArray$vf45;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      nameArray$vf45: null,
      valueArray$vf45: null,
      constructor: PersonaImplicitInterestHelper$,
      getValueForName: getValueForName,
      getNameArray: getNameArray
    };
});
