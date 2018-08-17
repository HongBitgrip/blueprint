Ext.define("com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase", function(PropertiesWithDefaultsAdapterBase) {/*package com.coremedia.ui.data {

/**
 * Convenience adapter to create an {@link ValueExpressionsToPropertiesAdapter} by providing a {@link ValueExpression}
 * and list of property names and their default values.
 *
 * The value expressions will derive from the given {@link ValueExpression} calling {@link ValueExpression#extendBy}
 * using the property names.
 * /
public class PropertiesWithDefaultsAdapterBase extends ValueExpressionsToPropertiesAdapter {

  private var ve:ValueExpression;

  /**
   * @param ve The value expression to derive from
   * @param args (optional) list of property name (String) followed by default value. Number of arguments must be even.
   * /
  public*/ function PropertiesWithDefaultsAdapterBase$(ve/*:ValueExpression, ...args*/) {var args=Array.prototype.slice.call(arguments,1);
    this.super$NN$r(computeMappings$static(args, ve));
    this.ve$NN$r = ve;
  }/*

  private static*/ function computeMappings$static(args/*:**/, ve/*:ValueExpression*/)/*:Object*/ {
    var mapping/*:Object*/ = {};
    if (args.length % 2 !== 0) {
      throw new AS3.Error("Illegal number of arguments provided");
    }
    for (var i/*:Number*/ = 0; i < args.length; i = i + 2) {
      var propertyName/*:String*/ =AS3.as( args[i],  String);
      var defaultValue/*:**/ = args[i + 1];
      if (!propertyName) {
        throw new AS3.Error("Expected non-empty String as argument at index " + (i + 1));
      }

      var pVE/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(
              ve.extendBy(propertyName),
              null,
              null,
              defaultValue
      );
      mapping[propertyName] = pVE;
    }
    return mapping;
  }/*

  /**
   * Returns the {@link ValueExpression} the properties of the adapter were derived from.
   * @return the {@link ValueExpression} the properties of the adapter were derived from.
   * /
  public*/ function getVE()/*:ValueExpression*/ {
    return this.ve$NN$r;
  }/*

  public*/ function toString()/*:String*/ {
    var value/*:**/ = this.getVE().getValue();
    return value ? value.toString() : this.toString();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.ValueExpressionsToPropertiesAdapter",
      ve$NN$r: null,
      constructor: PropertiesWithDefaultsAdapterBase$,
      super$NN$r: function() {
        com.coremedia.ui.data.ValueExpressionsToPropertiesAdapter.prototype.constructor.apply(this, arguments);
      },
      getVE: getVE,
      toString: toString,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.data.ValueExpressionsToPropertiesAdapter"
      ],
      uses: ["com.coremedia.ui.data.ValueExpressionFactory"]
    };
});
