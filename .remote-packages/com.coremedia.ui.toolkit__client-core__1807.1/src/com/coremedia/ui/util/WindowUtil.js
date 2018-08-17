Ext.define("com.coremedia.ui.util.WindowUtil", function(WindowUtil) {/*package com.coremedia.ui.util {
import ext.Ext;
import ext.ObjectUtil;

import joo.debug;

import net.jangaroo.net.URIUtils;

use namespace Ext;

/**
 * Common utility methods to deal with the global <code>window</code> instance.
 * /
public class WindowUtil {

  /**
   * Reset <code>onbeforeunload</code> handler and reload location.
   * /
  public static*/ function forceReload$static()/*:void*/ {
    WindowUtil.disableUnloadWarning();
    WindowUtil.reload();
  }/*

  public static*/ function reload$static()/*:void*/ {
    window.location.reload(! !joo.debug); // force reload in debug mode
  }/*

  public static*/ function disableUnloadWarning$static()/*:void*/ {
  // remove any "the browser will be closed" warning function
    if (window.onbeforeunload) {
      window.onbeforeunload = null;
    }
  }/*

  /**
   * Either set <code>onhashchange</code> listener or create sequence
   * @param listener
   * /
  public static*/ function addHashChangeListener$static(listener/*:Function*/)/*:void*/ {
    if(window.onhashchange){
      window.onhashchange = Ext['Function'].createSequence(window.onhashchange, listener);
    } else {
      window.onhashchange = listener;
    }
  }/*

  /**
   * Register the given handler only if <code>joo.debug</code> is not set and
   * hash parameter <code>testMode</code> is not set or equals <code>false</code>
   * @param handler
   * /
  public static*/ function registerBeforeUnloadHandlerIfPossible$static(handler/*:Function*/)/*:void*/ {
    if (!joo.debug && !com.coremedia.ui.util.testMode) {
      window.onbeforeunload = handler;
    }
  }/*

  /**
   * Returns the hash params of the current window location as an object.
   * @return an object containing the current hash parameters
   * @see Ext.urlDecode
   * /
  public static*/ function getHashParamsAsObject$static()/*:Object*/ {
    return Ext.Object.fromQueryString(net.jangaroo.net.URIUtils.parse(window.location.href).fragment || "");
  }/*

}*/function WindowUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: WindowUtil$,
      statics: {
        forceReload: forceReload$static,
        reload: reload$static,
        disableUnloadWarning: disableUnloadWarning$static,
        addHashChangeListener: addHashChangeListener$static,
        registerBeforeUnloadHandlerIfPossible: registerBeforeUnloadHandlerIfPossible$static,
        getHashParamsAsObject: getHashParamsAsObject$static
      },
      requires: [
        "Ext",
        "Ext.Object",
        "net.jangaroo.net.URIUtils"
      ],
      uses: ["com.coremedia.ui.util.testMode"]
    };
});
