Ext.define("com.coremedia.ui.util.FunctionUtil", function(FunctionUtil) {/*package com.coremedia.ui.util {
public class FunctionUtil {
  /**
   * Return a function that behaves exactly like the given delegate function,
   * but that can be destroyed by a call to blowFuse.
   * This is useful for stopping memory leaks that involve callback
   * functions. Once the fuse is blown, it no longer references the delegate.
   *
   * @param delegate the delegate function
   *
   * @see #blowFuse
   * /
  public static*/ function makeFuse$static(delegate/*:Function*/)/*:Function*/ {
    // Delegate the actual creation of the function to a scope
    // in which the delegate is not directly visible.
    var fuse/*:Function*/ = newFuse$static();

    fuse['delegate'] = delegate;
    fuse['fuseBlower'] = function fuseBlower()/*:void*/ {
      // Destroy the reference to the original function.
      delete fuse['delegate'];
      // Destroy the reference to the fuse blower.
      delete fuse['fuseBlower'];
    };

    return fuse;
  }/*

  private static*/ function newFuse$static()/*:Function*/ {
    return function fuse()/*:**/ {arguments=Array.prototype.slice.call(arguments);
      fuse['delegate'].apply(this, arguments);
    };
  }/*

  /**
   * Blow the given fuse function which was created with makeFuse.
   *
   * @param fuse the fuse function
   * /
  public static*/ function blowFuse$static(fuse/*:Function*/)/*:void*/ {AS3.is(
    // Ignore the call when a non-fuse is passed.
    fuse,  Function) && fuse['fuseBlower'] && fuse['fuseBlower']();
  }/*
}*/function FunctionUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: FunctionUtil$,
      statics: {
        makeFuse: makeFuse$static,
        blowFuse: blowFuse$static
      }
    };
});
