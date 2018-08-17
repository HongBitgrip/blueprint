Ext.define("com.coremedia.ui.util.ObservableUtil", function(ObservableUtil) {/*package com.coremedia.ui.util {
import ext.mixin.Observable;

public class ObservableUtil {
  /**
   * Make sure that the given object is ready to accept listeners.
   * Note that Observable objects are not normally ready before the
   * base class constructor has run.
   *
   * @param instance the Observable to initialize
   * @param config the config object providing listeners and Observable configuration
   * /
  public static*/ function init$static(instance/*:Observable*/, config/*:Object*/)/*:void*/ {
    instance['mixins'].observable.constructor.call(instance, config);
  }/*
}*/function ObservableUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ObservableUtil$,
      statics: {init: init$static}
    };
});
