Ext.define("com.coremedia.ui.util.Queues", function(Queues) {/*package com.coremedia.ui.util {

/**
 * Utility class for checking whether the invokeLater queue and the request queue
 * are empty. Use for tests.
 * /
public class Queues {
  public static*/ function allEmpty$static()/*:Boolean*/ {
    return Queues.requestQueueEmpty() && Queues.eventQueueEmpty();
  }/*

  public static*/ function requestQueueEmpty$static()/*:Boolean*/ {
    return !com.coremedia.ui.util.RequestCounter.requestsPending();
  }/*

  public static*/ function eventQueueEmpty$static()/*:Boolean*/ {
    return com.coremedia.ui.util.EventUtil.isQueueEmpty();
  }/*
}*/function Queues$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: Queues$,
      statics: {
        allEmpty: allEmpty$static,
        requestQueueEmpty: requestQueueEmpty$static,
        eventQueueEmpty: eventQueueEmpty$static
      },
      uses: [
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.RequestCounter"
      ]
    };
});
