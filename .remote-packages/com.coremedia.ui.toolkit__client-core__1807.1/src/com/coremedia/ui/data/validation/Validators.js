Ext.define("com.coremedia.ui.data.validation.Validators", function(Validators) {/*package com.coremedia.ui.data.validation {

/**
 * A validator aggregator for entities of the same type.
 * /
public class Validators implements Validator {

  private var validators:Array;

  /**
   * Create a validator that delegates to a list of given validators.
   * The list may not be empty, and all validators must return the same entity class.
   * @param validators the validators to aggregate
   * /
  public*/ function Validators$(/*...validators*/) {var validators=Array.prototype.slice.call(arguments);
    if (!(validators && validators.length > 0)) {
      throw new ArgumentError("Validators must not be empty");
    }

    this.validators$J7Xs = validators;

    for (var i/*:int*/ = 1; i < validators.length; i++) {
      var validator/*:Validator*/ = validators[i];
      if (validator.getEntityClass() !== this.getEntityClass() ) {
        throw new TypeError("Validator " + validator + " called with entity of wrong class " + validator.getEntityClass());
      }
    }
  }/*

  public*/ function getEntityClass()/*:Class*/ {
    return this.validators$J7Xs[0].getEntityClass();
  }/*

  public*/ function validate(entity/*:**/, issues/*:LocalIssues*/)/*:void*/ {
    for/* each*/ (var $1=0;$1</* in*/ this.validators$J7Xs.length;++$1) {var validator/*:Validator*/ =this.validators$J7Xs[$1];
      validator.validate(entity, issues);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.validation.Validator"],
      validators$J7Xs: null,
      constructor: Validators$,
      getEntityClass: getEntityClass,
      validate: validate,
      requires: [
        "ArgumentError",
        "com.coremedia.ui.data.validation.Validator"
      ]
    };
});
