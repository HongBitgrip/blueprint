Ext.define("com.coremedia.ui.util.LocalStorageUtil", function(LocalStorageUtil) {/*package com.coremedia.ui.util {

import js.IStorage;

public class LocalStorageUtil {

  public static*/ function getItem$static( key/*:String*/ )/*:String*/ {
    var storage/*:IStorage*/ = LocalStorageUtil.getStorageObject();

    var value/*:String*/;
    if (storage !== null && storage) {
      value = storage.getItem(key);
    }
    return value;
  }/*

  public static*/ function setItem$static( key/*:String*/, value/*:String*/ )/*:void*/ {
    var storage/*:IStorage*/ = LocalStorageUtil.getStorageObject();
    if (storage !== null && storage) {
      try {
        storage.removeItem( key );
        storage.setItem(key, value);
      } catch(e/*:**/) {
        // Some browsers (Safari) throw QUOTA_EXCEEDED_ERR when in private mode.
        // We better catch and ignore all errors.
        AS3.trace("[INFO]", "Could not write items to local storage. The current browser might be in private mode.");
      }
    }
  }/*

  public static*/ function removeItem$static( key/*:String*/ )/*:void*/ {
    var storage/*:IStorage*/ = LocalStorageUtil.getStorageObject();
    if (storage !== null && storage) {
      try {
        storage.removeItem(key);
      } catch (e/*:**/) {
        // Some browsers (Safari) throw QUOTA_EXCEEDED_ERR when in private mode.
        // We better catch and ignore all errors.
        AS3.trace("[INFO]", "Could not write items to local storage. The current browser might be in private mode.");
      }
    }
  }/*

  public static*/ function clear$static()/*:void*/ {
    var storage/*:IStorage*/ = LocalStorageUtil.getStorageObject();
    if (storage !== null && storage) {
      try {
        storage.clear();
      } catch (e/*:**/) {
        // Some browsers (Safari) throw QUOTA_EXCEEDED_ERR when in private mode.
        // We better catch and ignore all errors.
        AS3.trace("[INFO]", "Could not write items to local storage. The current browser might be in private mode.");
      }
    }
  }/*

  public static*/ function getStorageObject$static()/*:IStorage*/ {
    var storage/*:IStorage*/;
    if (['localStorage'] in window && window['localStorage'] !== null) {
      storage= window['localStorage'];
    } else{
      AS3.trace("[WARN]", "LocalStorage is not supported by the current browser. Some features might be disabled.");
    }
    return storage;
  }/*

}*/function LocalStorageUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: LocalStorageUtil$,
      statics: {
        getItem: getItem$static,
        setItem: setItem$static,
        removeItem: removeItem$static,
        clear: clear$static,
        getStorageObject: getStorageObject$static
      },
      requires: ["AS3.trace"]
    };
});
