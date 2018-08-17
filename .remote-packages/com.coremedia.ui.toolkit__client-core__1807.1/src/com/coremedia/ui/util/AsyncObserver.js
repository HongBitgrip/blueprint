Ext.define("com.coremedia.ui.util.AsyncObserver", function(AsyncObserver) {/*package com.coremedia.ui.util {

import ext.data.Connection;
import ext.util.Observable;

import js.XMLHttpRequest;

/**
 * Wait until the <code>EventUtil.invokeLater()</code> queue is empty and all Ajax requests
 * invoked through <code>ext.data.Connection</code> have completed.
 *
 * <p><code>start()</code> starts listening for Ajax requests.
 * After the function to observe has been executed synchronously, use <code>complete()</code>
 * to continue after</p>
 * <ul>
 *   <li>all Ext JS Ajax requests have completed, and</li>
 *   <li>the <code>EventUtil.invokeLater()</code> queue is empty.</li>
 * </ul>
 * <p>You can let AsyncObserver continue to observe Ajax calls and invoke <code>complete()</code>
 * several times. When you are done, call <code>stop()</code> to avoid overhead on subsequent
 * Ajax calls.</p>
 *
 * Example:
 * <pre>
 * AsyncObserver.start();
 * doSomethingThatTriggersAsynchronousAction();
 * AjaxObserver.complete(function():void {
 *   trace("Checkpoint: Asynchronous action 1 has completed!");
 *   doSomethingElseThatTriggersAsynchronousAction();
 *   AjaxObserver.complete(function():void {
 *     AjaxObserver.stop();
 *     trace("All asynchronous action has completed!");
 *   });
 * });
 * </pre>
 *
 * @see EventUtil#invokeLater()
 * @see ext.data.Connection
 * /
[PublicApi]
public class AsyncObserver {
  /**
   * Bypass tracking.
   * @private
   * /
  public static const SKIP_ASYNC_OBSERVER_OPTION:String = "skipAsyncObserver";

  private static*/ var pendingRequestCnt$static/*:int*/ = 0;/*
  private static*/ var completedCallbacks$static/*:Array*/;/* =*/function completedCallbacks$static_(){completedCallbacks$static=( []);};function static$0(){

  {
    Ext.util.Observable.observe(Ext.data.Connection);
  }}/*

  /**
   * Start observing asynchronous action immediately.
   * Note that you must ensure that no Ajax request is underway when calling this method.
   *
   * @deprecated Manually starting and stopping request tracking is discouraged.
   * /
  public static*/ function start$static()/*:void*/ {
    // take advantage of class-level observability:
    AS3.cast(Ext.util.Observable,Ext.data.Connection).addListener('beforerequest', onBeforeRequest$static);
    AS3.cast(Ext.util.Observable,Ext.data.Connection).addListener('requestcomplete', onRequestComplete$static);
    AS3.cast(Ext.util.Observable,Ext.data.Connection).addListener('requestexception', onRequestComplete$static);
  }/*

  /**
   * Start waiting for all asynchronous action to complete. This includes
   * operations queued via EventUtil.invokeLater() as well as pending requests.
   *
   * @param callback the function to call when all asynchronous action has completed.
   *
   * @see AsyncObserver
   * @see EventUtil
   * /
  public static*/ function complete$static(callback/*:Function*/)/*:void*/ {
    completedCallbacks$static.push({
      callback: callback,
      waitForRequests: true
    });
    checkCompleted$static();
  }/*

  /**
   * Start waiting for asynchronous action to complete. Compared to AsyncObserver.complete()
   * this only includes operations queued via EventUtil.invokeLater(). Pending requests
   * are not taken into account.
   *
   * @param callback the function to call when all asynchronous action has completed.
   *
   * @see AsyncObserver
   * @see EventUtil
   * /
  public static*/ function completeEvents$static(callback/*:Function*/)/*:void*/ {
    completedCallbacks$static.push({
      callback: callback,
      waitForRequests: false
    });
    checkCompleted$static();
  }/*

  //noinspection JSUnusedLocalSymbols
  private static*/ function onBeforeRequest$static(connection/*:Connection*/, options/*:Object*/)/*:void*/ {
    if (!isExcluded$static(options)) {
      ++pendingRequestCnt$static;
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  private static*/ function onRequestComplete$static(connection/*:Connection*/, response/*:XMLHttpRequest*/, options/*:Object*/)/*:void*/ {
    if (!isExcluded$static(options)) {
      --pendingRequestCnt$static;
      checkCompleted$static();
    }
  }/*

  private static*/ function isExcluded$static(options/*:Object*/)/*:Boolean*/ {
    return options && options[AsyncObserver.SKIP_ASYNC_OBSERVER_OPTION];
  }/*

  private static*/ function checkCompleted$static()/*:void*/ {
    if (completedCallbacks$static.length) {
      if (com.coremedia.ui.util.EventUtil.isQueueEmpty()) {

        var callbackIndex/*:int*/ = -1;

        for (var i/*:int*/ = 0; i < completedCallbacks$static.length; i++) {
          var entry/*:Object*/ = completedCallbacks$static[i];
          if (entry.waitForRequests === false || (pendingRequestCnt$static === 0)) {
            callbackIndex = i;
            break;
          }
        }

        if (callbackIndex >= 0) {
          var completedCallback/*:Function*/ = completedCallbacks$static.splice(callbackIndex, 1).pop().callback;
          com.coremedia.ui.util.EventUtil.invokeLater(completedCallback);
          if (completedCallbacks$static.length > 0) {
            com.coremedia.ui.util.EventUtil.setCallWhenEmpty(checkCompleted$static);
          }
        }
      } else {
        // schedule to call another check after anything executed through the "invokeLater" queue
        com.coremedia.ui.util.EventUtil.setCallWhenEmpty(checkCompleted$static);
      }
    }
  }/*

  /**
   * Stop observing asynchronous action.
   * Should be called from the call function of <code>complete</code>.
   *
   * @see #complete()
   * @see AsyncObserver
   *
   * @deprecated Manually starting and stopping request tracking is discouraged.
   * /
  public static*/ function stop$static()/*:void*/ {
    AS3.cast(Ext.util.Observable,Ext.data.Connection).removeListener('beforerequest', onBeforeRequest$static);
    AS3.cast(Ext.util.Observable,Ext.data.Connection).removeListener('requestcomplete', onRequestComplete$static);
    AS3.cast(Ext.util.Observable,Ext.data.Connection).removeListener('requestexception', onRequestComplete$static);
  }/*

}*/function AsyncObserver$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: AsyncObserver$,
      statics: {
        SKIP_ASYNC_OBSERVER_OPTION: "skipAsyncObserver",
        completedCallbacks: undefined,
        start: start$static,
        complete: complete$static,
        completeEvents: completeEvents$static,
        stop: stop$static,
        __initStatics__: function() {
          completedCallbacks$static_();
          static$0();
        }
      },
      requires: [
        "Ext.data.Connection",
        "Ext.util.Observable"
      ],
      uses: ["com.coremedia.ui.util.EventUtil"]
    };
});
