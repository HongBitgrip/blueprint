Ext.define("com.coremedia.cms.editor.LocalStorageProvider", function(LocalStorageProvider) {/*package com.coremedia.cms.editor {
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.LocalStorageUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.JSON;
import ext.state.Provider;

public class LocalStorageProvider extends Provider {

  internal static const STATE_KEYS:String = '__local_storage_provider_keys';

  internal native function get state():Object;
  internal native function set state(o:Object):void;

  public*/ function LocalStorageProvider$() {
    this.super$5sS7();
    this.readLocalStorage();
  }/*

  internal*/ function readLocalStorage()/*:void*/ {var this$=this;
    var encodedKeys/*:String*/ = com.coremedia.ui.util.LocalStorageUtil.getItem(LocalStorageProvider.STATE_KEYS);
    //noinspection JSMismatchedCollectionQueryUpdate
    var array/*:Array*/ =AS3.as( Ext.JSON.decode(encodedKeys),  Array);
    if(array) {
      array.forEach(function(key/*:String*/)/*:void*/ {
        var item/*:String*/ = com.coremedia.ui.util.LocalStorageUtil.getItem(key);
        com.coremedia.ui.logging.Logger.info("restoring state " + item + " for key " + key);
        this$.state[key] = Ext.JSON.decode(item);
      });
    }
    com.coremedia.ui.logging.Logger.info("restored state " + Ext.JSON.encode(this.state));
  }/*

  override public*/ function clear(name/*:String*/)/*:void*/ {
    if(this.state.hasOwnProperty(name)) {
      Ext.state.Provider.prototype.clear.call(this,name);
      com.coremedia.ui.util.LocalStorageUtil.removeItem(name);
      this.saveKeys();
    }
  }/*

  internal*/ function saveKeys()/*:void*/ {
    var value/*:String*/ = Ext.JSON.encode(com.coremedia.ui.util.ObjectUtils.getPropertyNames(this.state));
    com.coremedia.ui.logging.Logger.info("storing keys " + value);
    com.coremedia.ui.util.LocalStorageUtil.setItem(LocalStorageProvider.STATE_KEYS, value);
  }/*

  override public*/ function set(name/*:String*/, value/*:**/)/*:void*/ {
    var encodedValue/*:String*/ = Ext.JSON.encode(value);
    com.coremedia.ui.util.LocalStorageUtil.setItem(name, encodedValue);
    var mustSaveKeys/*:Boolean*/ = !this.state.hasOwnProperty(name);
    Ext.state.Provider.prototype.set.call(this,name, value);
    com.coremedia.ui.logging.Logger.info("stored state " + encodedValue + " for key " + name);

    if(mustSaveKeys) {
      this.saveKeys();
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.state.Provider",
      constructor: LocalStorageProvider$,
      super$5sS7: function() {
        Ext.state.Provider.prototype.constructor.apply(this, arguments);
      },
      readLocalStorage: readLocalStorage,
      clear: clear,
      saveKeys: saveKeys,
      set: set,
      statics: {STATE_KEYS: '__local_storage_provider_keys'},
      requires: [
        "Ext.JSON",
        "Ext.state.Provider",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.LocalStorageUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
