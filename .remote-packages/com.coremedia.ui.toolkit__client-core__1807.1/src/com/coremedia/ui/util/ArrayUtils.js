Ext.define("com.coremedia.ui.util.ArrayUtils", function(ArrayUtils) {/*package com.coremedia.ui.util {

import ext.Ext;

/**
 * Array utility functions that complement Ext's.
 * /
[PublicApi]
public class ArrayUtils {

  /**
   * This utility function helps dealing with Ext Component properties that may or may not contain
   * an Array. It converts the given property of the given object into an Array according to the
   * following rules:
   * <ul>
   * <li>If the property is undefined, set it to an empty Array.</li>
   * <li>If the property value is an Array, do nothing.</li>
   * <li>Else, set the property a new single-element Array consisting of the old property value.</li>
   * </ul>
   * @param obj the obj that contains the property.
   * @param property the name of the property to convert to an Array.
   * @return Array the new property value.
   * /
  public static*/ function ensureArray$static(obj/*:Object*/, property/*:String*/)/*:Array*/ {
    return obj[property] = ArrayUtils.asArray(obj[property]);
  }/*

  /**
   * It returns an Array for the given value according to the following rules:
   * <ul>
   * <li>If value is "falsy", return an empty Array.</li>
   * <li>If value is an Array, return the value.</li>
   * <li>Else, return a single-element Array consisting of value.</li>
   * </ul>
   * @param value the value to convert to an Array.
   * @return Array the array derived from value.
   * /
  public static*/ function asArray$static(value/*:**/)/*:Array*/ {
    if (!value) {
      return [];
    } else if (Ext.isArray(value)) {
      return value;
    } else {
      return [value];
    }
  }/*

  /**
   * Flatten all potentially nested argument arrays and objects into a single array.
   * For example, 1,[2,3],[[4]] would be flattened into [1,2,3,4].
   *
   * @param values
   * @return the arrays to flatten or objects to insert into the result.
   * /
  public static*/ function flatten$static(/*... values*/)/*:Array*/ {var values=Array.prototype.slice.call(arguments);
    var result/*:Array*/ = [];
    for (var i/*:uint*/ = 0; i < values.length; i++) {
      flattenInto$static(values[i], result);
    }
    return result;
  }/*

  private static*/ function flattenInto$static(source/*:Array*/, target/*:Array*/)/*:void*/ {
    for (var i/*:uint*/ = 0; i < source.length; i++) {
      if (Ext.isArray(source[i])) {
        flattenInto$static(AS3.as(source[i],  Array), target);
      } else {
        target.push(source[i]);
      }
    }
  }/*

  /**
   * Sort the given array according to criteria specified using one or more functions.
   *
   * @param array the array to sort
   * @param funs an array of functions that map array elements to strings, which are used as sort criteria with descending priority
   * @return true, if all criteria were computable (not undefined)
   * /
  public static*/ function sortByAspects$static(array/*:Array, ... funs*/)/*:Boolean*/ {var funs=Array.prototype.slice.call(arguments,1);
    var allComputable/*:Boolean*/ = true;
    array.sort(function(o1/*:**/, o2/*:**/)/*:int*/ {
      for (var i/*:int*/ = 0; i < funs.length; i++) {
        var fun/*:Function*/ = funs[i];
        var c1/*:String*/ = fun(o1);
        var c2/*:String*/ = fun(o2);

        if (c1 === undefined || c2 === undefined) {
          allComputable = false;
        }

        // Avoid special cases.
        c1 = c1 || "";
        c2 = c2 || "";

        // Compare ignoring case first.
        var result/*:int*/ = c1.toLocaleLowerCase().localeCompare(c2.toLocaleLowerCase());
        if (result) {
          return result;
        }

        // Then consider case, too.
        result = c1.localeCompare(c2);
        if (result) {
          return result;
        }
      }
      return 0;
    });
    return allComputable;
  }/*

  /**
   *
   * @param array
   * @return true if array is null, undefined or its length is 0
   * /
  public static*/ function isEmpty$static(array/*:Array*/)/*:Boolean*/ {
    return !array || array.length === 0;
  }/*

  /**
   * Creates a copy of the given array that only contains each item once.
   * Duplicates are removed from the end of the array, thus the order of
   * elements is determined by the elements found first in the array.
   *
   * @param array an array possibly containing duplicates; must not be null or undefined
   * @return a copy of the given array without duplicates
   * /
  public static*/ function unique$static(array/*:Array*/)/*:Array*/ {
    var result/*:Array*/ = [];

    array.forEach(function (item/*:**/)/*:void*/ {
      if (result.indexOf(item) === -1) {
        result.push(item);
      }
    });

    return result;
  }/*

  public static*/ function containsWithEquals$static(array/*:Array*/, element/*:WithEquals*/)/*:Boolean*/ {
    if (!(AS3.is(element,  com.coremedia.ui.util.WithEquals))) {
      return false;
    }

    return array.some(function (item/*:WithEquals*/)/*:Boolean*/ {
      return element.equals(item);
    });
  }/*

  /**
   * Reduces the values of an array to a String by transforming the array entries and appending a delimiter.
   * @param array the array to reduce
   * @param fn the transform function
   * @param delimiter the delimiter
   * @return reduced string
   * /
  public static*/ function reduce$static(array/*:Array*/, fn/*:Function*/, delimiter/*:String*/)/*:String*/ {
    return array["reduce"](fn, delimiter);
  }/*

}*/function ArrayUtils$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: ArrayUtils$,
      statics: {
        ensureArray: ensureArray$static,
        asArray: asArray$static,
        flatten: flatten$static,
        sortByAspects: sortByAspects$static,
        isEmpty: isEmpty$static,
        unique: unique$static,
        containsWithEquals: containsWithEquals$static,
        reduce: reduce$static
      },
      requires: ["Ext"],
      uses: ["com.coremedia.ui.util.WithEquals"]
    };
});
