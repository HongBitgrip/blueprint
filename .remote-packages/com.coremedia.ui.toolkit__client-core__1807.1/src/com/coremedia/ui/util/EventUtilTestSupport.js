Ext.define("com.coremedia.ui.util.EventUtilTestSupport", function(EventUtilTestSupport) {/*package com.coremedia.ui.util {

public class EventUtilTestSupport {
  /**
   * Removes all pending invocations from the event queue.
   * Use for testing purposes only.
   *
   * @see EventUtil
   * /
  public static*/ function clearEventQueue$static()/*:void*/ {
    com.coremedia.ui.util.EventUtil.clearEventQueue0();
  }/*

  /**
   * Execute all pending invocations.
   * Use for testing purposes only.
   *
   * @see EventUtil
   * /
  public static*/ function invokePending$static()/*:void*/ {
    com.coremedia.ui.util.EventUtil.invokePending();
  }/*

  public static*/ function onRequestQueueEmpty$static(callback/*:Function*/)/*:void*/ {
    // hand through EventUtil.setCallWhenEmpty(), but avoid "sync or async callback" anti-pattern:
    if (com.coremedia.ui.util.EventUtil.isQueueEmpty()) {
      com.coremedia.ui.util.EventUtil.invokeLater(callback);
    } else {
      com.coremedia.ui.util.EventUtil.setCallWhenEmpty(callback);
    }
  }/*
}*/function EventUtilTestSupport$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: EventUtilTestSupport$,
      statics: {
        clearEventQueue: clearEventQueue$static,
        invokePending: invokePending$static,
        onRequestQueueEmpty: onRequestQueueEmpty$static
      },
      uses: ["com.coremedia.ui.util.EventUtil"]
    };
});
