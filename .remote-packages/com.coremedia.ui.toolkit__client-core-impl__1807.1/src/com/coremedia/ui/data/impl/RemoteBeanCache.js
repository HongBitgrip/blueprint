Ext.define("com.coremedia.ui.data.impl.RemoteBeanCache", function(RemoteBeanCache) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.*;
import com.coremedia.ui.logging.Logger;

import ext.Ext;
import ext.util.Observable;

/**
 * A cache for remote beans.
 * Use this class to obtain cached remote beans.
 * /
public class RemoteBeanCache {

  private static*/ var beanCache$static/* : Object*/;/* =*/function beanCache$static_(){beanCache$static=( {});};/*

  /**
   * Get the RemoteBean for the given path, which is a new proxy for the server-side Bean at the URI
   * REMOTE_SERVICE_URI + path.
   * Note that the URI is only requested when a property of the RemoteBean is requested.
   * @param path must be relative to the remote service URI.
   * @return RemoteBean the RemoteBean for the given path.
   * /
  public static*/ function getRemoteBean$static(path/*:String*/)/*:RemoteBean*/ {
    return AS3.as( beanCache$static[path],  com.coremedia.ui.data.RemoteBean);
  }/*

  /**
   * Register a remote bean for the given path.
   *
   * @param path must be relative to the remote service URI
   * @param bean the RemoteBean for the given path
   * /
  public static*/ function registerRemoteBean$static(path/*:String*/, bean/*:RemoteBean*/)/*:void*/ {
    beanCache$static[path] = bean;
  }/*

  /**
   * Compute an object mapping remote bean class names to CacheLevel objects.
   * Each cache level object reports the cache usage caused by a single remote
   * bean class.
   *
   * @return the object
   *
   * @see CacheLevel
   * /
  public static*/ function getLevels$static()/*:Object*/ {
    var result/*:Object*/ = {};
    for (var path/*:String*/ in beanCache$static) {
      try {
        var remoteBean/*:RemoteBean*/ = (AS3.as(beanCache$static[path],  com.coremedia.ui.data.RemoteBean));
        var className/*:String*/ = Ext.getClassName(remoteBean);
        var level/*:CacheLevel*/ = result[className];
        if (!level) {
          result[className] = level = new com.coremedia.ui.data.impl.CacheLevel();
        }
        level.total++;
        if (remoteBean.isLoaded()) {
          level.loaded++;
        }
        if (hasAnyListener$static(remoteBean)) {
          level.listened++;
        }
      } catch(e/*:**/) {
        com.coremedia.ui.logging.Logger.debug("error while determining type of cache entry: " + e.message + "; ignoring");
      }
    }
    return result;
  }/*

  private static*/ function hasAnyListener$static(remoteBean/*:RemoteBean*/)/*:Boolean*/ {
    // All remote beans should be observable, but who knows.
    var observable/*:Observable*/ =AS3.as( remoteBean,  Ext.util.Observable);
    if (!observable) {
      return false;
    }
    // Of course, observable.events is not public API, but it is good enough for a monitoring tool.
    for (var eventName/*:String*/ in observable.events) {
      if (observable.hasListener(eventName)) {
        return true;
      }
    }
    return false;
  }/*

  public static*/ function peek$static(path/*:String*/)/*:RemoteBean*/ {
    return AS3.as( beanCache$static[path],  com.coremedia.ui.data.RemoteBean);
  }/*

  /**
   * Find all cached remote beans whose path matches the given URI template.
   *
   * @param uriTemplate URI template to test the beans' paths
   * @return an array of RemoteBeans whose path match the given regular expression
   * /
  public static*/ function search$static(uriTemplate/*:URITemplate*/)/*:Array*/ {
    var foundBeans/*:Array*/ = [];
    for (var path/*:String*/ in beanCache$static) {
      if (uriTemplate.matches(path)) {
        foundBeans.push(beanCache$static[path]);
      }
    }
    return foundBeans;
  }/*

  /**
   * Invalidate all known RemoteBeans.
   * /
  public static*/ function invalidateAll$static()/*:void*/ {
    for (var path/*:String*/ in beanCache$static) {
      var remoteBean/*:RemoteBean*/ = (AS3.as(beanCache$static[path],  com.coremedia.ui.data.RemoteBean));
      remoteBean.invalidate();
    }
  }/*

  public static*/ function disposeAll$static()/*:void*/ {
    // TODO: what about pending changes etc.?
    beanCache$static = {};
  }/*

  public static*/ function dispose$static(path/*:String*/)/*:void*/ {
    delete beanCache$static[path];
  }/*
}*/function RemoteBeanCache$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: RemoteBeanCache$,
      statics: {
        beanCache: undefined,
        getRemoteBean: getRemoteBean$static,
        registerRemoteBean: registerRemoteBean$static,
        getLevels: getLevels$static,
        peek: peek$static,
        search: search$static,
        invalidateAll: invalidateAll$static,
        disposeAll: disposeAll$static,
        dispose: dispose$static,
        __initStatics__: function() {
          beanCache$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.util.Observable",
        "com.coremedia.ui.data.RemoteBean"
      ],
      uses: [
        "com.coremedia.ui.data.impl.CacheLevel",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
