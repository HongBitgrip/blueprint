Ext.define("com.coremedia.ui.data.RemoteBeanUtil", function(RemoteBeanUtil) {/*package com.coremedia.ui.data {

import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.ExecuteEventually;

/**
 * Utility methods for managing the asynchronous lifecycle of remote beans.
 * /
[PublicApi]
public class RemoteBeanUtil {
  /**
   * Flush all given beans, then call the given callback.
   *
   * @param callback the callback
   * @param beans the remote beans to flush or arrays of beans to flush
   *
   * @see RemoteBean
   * /
  public static*/ function flushAll$static(callback/*:Function, ... beans*/)/*:void*/ {var beans=Array.prototype.slice.call(arguments,1);
    var latch/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(callback);
    var beanArray/*:Array*/ = com.coremedia.ui.util.ArrayUtils.flatten(beans);
    for (var i/*:uint*/ = 0; i < beanArray.length; i++) {
      if (beanArray[i]) {
        AS3.cast(com.coremedia.ui.data.RemoteBean,beanArray[i]).flush(latch.delay());
      }
    }
    latch.proceed();
  }/*

  /**
   * Invalidate all given beans, then call the given callback.
   *
   * @param callback the callback; ignored if not set
   * @param beans the remote beans to invalidate or arrays of beans to invalidate
   *
   * @see RemoteBean
   * /
  public static*/ function invalidateAll$static(callback/*:Function, ... beans*/)/*:void*/ {var beans=Array.prototype.slice.call(arguments,1);
    var latch/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(callback);
    var beanArray/*:Array*/ = com.coremedia.ui.util.ArrayUtils.flatten(beans);
    for (var i/*:uint*/ = 0; i < beanArray.length; i++) {
      AS3.cast(com.coremedia.ui.data.RemoteBean,beanArray[i]).invalidate(latch.delay());
    }
    latch.proceed();
  }/*

  /**
   * Load all given beans, then call the given callback.
   *
   * @param callback the callback
   * @param beans the remote beans to load or arrays of beans to load
   *
   * @see RemoteBean
   * /
  public static*/ function loadAll$static(callback/*:Function, ... beans*/)/*:void*/ {var beans=Array.prototype.slice.call(arguments,1);
    var latch/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(callback);
    var beanArray/*:Array*/ = com.coremedia.ui.util.ArrayUtils.flatten(beans).filter(function(bean/*:**/)/*:Boolean*/ {return AS3.is( bean,  com.coremedia.ui.data.RemoteBean);});
    for (var i/*:uint*/ = 0; i < beanArray.length; i++) {
      AS3.cast(com.coremedia.ui.data.RemoteBean,beanArray[i]).load(latch.delay());
    }
    latch.proceed();
  }/*

  /**
   * Determine whether a <code>RemoteBean</code>
   * is accessible now.
   * A bean is considered accessible if it exists and
   * is readable and all properties have been loaded.
   * The remote bean is considered accessible even if it has been invalidated
   * after having been loaded.
   * This method registers a dependency with the dependency tracker.
   * If the remote bean might be readable and has not been loaded,
   * a load is triggered.
   * In such cases, undefined is returned to indicate that
   * accessibility cannot yet be determined.
   * If null is passed as the single argument, false is returned.
   *
   * @param bean the remote bean
   * @return true if the remote bean is accessible
   * /
  public static*/ function isAccessible$static(bean/*:RemoteBean*/)/*:Boolean*/ {
    if (!bean) {
      return false;
    }

    var state/*:BeanState*/ = bean.getState();
    if (state.readable === undefined || state.readable && !bean.isLoaded()) {
      bean.load();
      return undefined;
    }

    return state.readable;
  }/*

  /**
   * Return all accessible remote bean from the given array.
   * Return undefined if the accessibility of at least one
   * remote bean cannot yet be determined.
   *
   * @param remoteBeans the remote beans
   * @return the filtered beans
   *
   * @see #isAccessible
   * /
  public static*/ function filterAccessible$static(remoteBeans/*:Array*/)/*:Array*/ {
    if (!remoteBeans) {
      return remoteBeans;
    }

    var returnUndefined/*:Boolean*/ = false;
    var result/*:Array*/ = remoteBeans.filter(function (object/*:Object*/)/*:Boolean*/ {
      var remoteBean/*:RemoteBean*/ =AS3.as( object,  com.coremedia.ui.data.RemoteBean);
      var accessible/*:Boolean*/ = RemoteBeanUtil.isAccessible(remoteBean);

      if (accessible === undefined) {
        returnUndefined = true;
        return false;
      }
      return accessible;
    });

    return returnUndefined ? undefined : result;
  }/*
}*/function RemoteBeanUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: RemoteBeanUtil$,
      statics: {
        flushAll: flushAll$static,
        invalidateAll: invalidateAll$static,
        loadAll: loadAll$static,
        isAccessible: isAccessible$static,
        filterAccessible: filterAccessible$static
      },
      uses: [
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.ExecuteEventually"
      ]
    };
});
