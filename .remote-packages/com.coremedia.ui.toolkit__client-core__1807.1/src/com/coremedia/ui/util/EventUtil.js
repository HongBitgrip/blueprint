Ext.define("com.coremedia.ui.util.EventUtil", function(EventUtil) {/*package com.coremedia.ui.util {
import ext.Ext;

/**
 * Helper class with static functions for executing code asynchronously, especially helpful when dealing with
 * asynchronous callbacks or events.
 * /
[PublicApi]
public class EventUtil {

  private static const*/var TIMEOUT_INTERVAL$static/*:int*/ = 10;/*
  private static const*/var MAX_WAIT$static/*:int*/ = 250;/*

  private static*/ var running$static/*:Boolean*/ = false;/*
  private static*/ var layoutSuspended$static/*:Boolean*/ = false;/*

  private static*/ var deque$static/*:Deque*/;/* =*/function deque$static_(){deque$static=( new com.coremedia.ui.util.Deque());};/*
  private static*/ var callWhenEmpty$static/*:Function*/=null;/*
  private static*/ var maxWaitUntil$static/*:Number*/ = 0;/*

  // Statistics
  private static*/ var maxQueueSize$static/*:int*/ = 0;/*

  private static*/ function now$static()/* :Number*/ {
    return new Date().getTime();
  }/*

  /**
   * Add a function to the execution block invoked after the current block. Use this instead of window.setTimeout()
   * to prevent the browser executing too many blocks.
   *
   * To increase performance, all functions from an execution block will be executed with Ext's layouts being suspended.
   * If a function needs to be executed with layouts being resumed,this needs to be taken care of externally,
   * e.g. by wrapping it in a LayoutUtil.runWithLayouts before passing it to EventUtil.invokeLater.
   *
   * @param func the function to execute later
   * @param passThroughParameters optional parameters for the function to invoke
   *
   * @see js.Window.setTimeout
   * @see Ext.suspendLayouts
   * @see LayoutUtil.runWithLayouts
   * /
  public static*/ function invokeLater$static(func/*:Function, ... passThroughParameters*/)/*:void*/ {var passThroughParameters=Array.prototype.slice.call(arguments,1);
    if (EventUtil.isQueueEmpty() && !running$static) {
      maxWaitUntil$static = now$static() + MAX_WAIT$static;
      window.setTimeout(EventUtil.invokePending, TIMEOUT_INTERVAL$static);
    }
    deque$static.insertLast({func:func,passThroughParameters:passThroughParameters});
    // Update statistics, recording the busiest time.
    maxQueueSize$static = Math.max(maxQueueSize$static, deque$static.size());
  }/*

  /**
   * @return whether or not the tasks queue is empty
   * /
  internal static*/ function isQueueEmpty$static()/*:Boolean*/ {
    return deque$static.isEmpty();
  }/*

  /**
   * @private
   * /
  public static*/ function getQueueSize$static()/*:int*/ {
    return deque$static.size();
  }/*

  /**
   * @private
   * /
  public static*/ function getMaxQueueSize$static()/*:int*/ {
    return maxQueueSize$static;
  }/*

  /**
   * The given function is called once as soon as the event queue is empty, i.e. all functions scheduled using
   * <code>invokeLater()</code> have been executed.
   * @param callback the function to call as soon as the event queue is empty
   * /
  internal static*/ function setCallWhenEmpty$static(callback/*:Function*/)/*:void*/ {
    if (EventUtil.isQueueEmpty() && !running$static) {
      callback();
    } else {
      callWhenEmpty$static = callback;
    }
  }/*

  internal static*/ function clearEventQueue0$static()/*:void*/ {
    deque$static = new com.coremedia.ui.util.Deque();
  }/*

  internal static*/ function invokePending$static()/*:void*/ {
    var time/*:Number*/;

    try {
      ensureLayoutSuspended$static();

      running$static = true;
      while (!deque$static.isEmpty()) {

        // This loop might run forever if queue entries successively call EventUtil.invokeLater()
        // themselves. Thus, we break the loop if thr maximum wait time is reached.
        time = now$static();
        if (time > maxWaitUntil$static) {
          break;
        }

        // Immediately remove the entry from the queue, so that it is not retried
        // even if an error is thrown.
        var queueEntry/*:**/ = deque$static.removeFirst();
        var success/*:Boolean*/ = false;
        try {
          // Execute the entry.
          executeQueueEntry$static(queueEntry);
          // Entry has been processed without errors.
          success = true;
        } finally {
          if (!success) {
            running$static = false;

            // The entry could not be processed. The last execution caused an
            // exception, which is suspended during this finally clause.
            // The thread will exit without making another loop.
            if (!deque$static.isEmpty()) {
              // Make sure this method is called again soon.
              window.setTimeout(EventUtil.invokePending, 0);
            }
          }
        }
      }

      // No errors. The queue is empty.
      running$static = false;
    } finally {
      // The layout should be delayed if we expect that new updates come up
      // soon as the result of pending requests. However, the UI should be layouted
      // from time to time to give the user a sense of progress.
      time = now$static();
      if (com.coremedia.ui.util.RequestCounter.requestsPending() && time < maxWaitUntil$static) {
        // Delay layout a little longer.
        window.setTimeout(EventUtil.invokePending, TIMEOUT_INTERVAL$static);
      } else {
        ensureLayoutResumed$static();

        // If the queue is not empty, the above while loop was broken due to max wait time.
        // Thus, we have to call invokePending() to process the rest of the queue.
        if (!deque$static.isEmpty()) {
          maxWaitUntil$static = now$static() + MAX_WAIT$static;
          window.setTimeout(EventUtil.invokePending, TIMEOUT_INTERVAL$static);
        }
      }
    }

    // When we are really done, invoke the callback callWhenEmpty.
    if (callWhenEmpty$static) {
      var callWhenEmptyCopy/*:Function*/ = callWhenEmpty$static;
      callWhenEmpty$static = null;
      callWhenEmptyCopy();
    }
  }/*

  private static*/ function ensureLayoutSuspended$static()/*:void*/ {
    if (!layoutSuspended$static) {
      layoutSuspended$static = true;
      Ext.suspendLayouts();
    }
  }/*

  private static*/ function ensureLayoutResumed$static()/*:void*/ {
    if (layoutSuspended$static) {
      // also flush pending layouts
      Ext.resumeLayouts(true);
      layoutSuspended$static = false;
    }
  }/*

  private static*/ function executeQueueEntry$static(queueEntry/*:**/)/*:void*/ {
    if (!queueEntry.passThroughParameters) {
      queueEntry.func();
    } else {
      (AS3.as(queueEntry.func,  Function)).apply(null, queueEntry.passThroughParameters);
    }
  }/*
}*/function EventUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: EventUtil$,
      statics: {
        deque: undefined,
        invokeLater: invokeLater$static,
        isQueueEmpty: isQueueEmpty$static,
        getQueueSize: getQueueSize$static,
        getMaxQueueSize: getMaxQueueSize$static,
        setCallWhenEmpty: setCallWhenEmpty$static,
        clearEventQueue0: clearEventQueue0$static,
        invokePending: invokePending$static,
        __initStatics__: function() {
          deque$static_();
        }
      },
      requires: ["Ext"],
      uses: [
        "com.coremedia.ui.util.Deque",
        "com.coremedia.ui.util.RequestCounter"
      ]
    };
});
