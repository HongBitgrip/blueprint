Ext.define("com.coremedia.joounit.Mockery", function(Mockery) {/*package com.coremedia.joounit {
import ext.Ext;

public class Mockery {

  /**
   * Create a new object that contains the same fields as the first argument
   * of this method and that also implements (in the sense of <code>is</code>)
   * all given interfaces.
   *
   * @param object the object containing the desired fields or other Ext.define() parameters
   * @param interfaces the interfaces to implement
   * @return the mocked object implementing the interfaces
   * /
  public static*/ function mock$static(object/*:Object, ...interfaces*/)/*:Object*/ {var interfaces=Array.prototype.slice.call(arguments,1);
    return new (Ext.define(null, Ext.apply({
      mixins: interfaces ? interfaces.map(AS3.bind(Ext,"getClassName")) : []
    }, object)))();
  }/*

}*/function Mockery$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: Mockery$,
      statics: {mock: mock$static},
      requires: ["Ext"]
    };
});
