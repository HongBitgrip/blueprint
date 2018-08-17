Ext.define("com.coremedia.cap.content.impl.ContentRequestQueues", function(ContentRequestQueues) {/*package com.coremedia.cap.content.impl {

import com.coremedia.ui.data.impl.RequestQueue;

/**
 * Manage all request queues for content. One request queue is stored per numeric content id.
 * /
public class ContentRequestQueues {
  // Could we use a sparse array? Maybe. I do not know how those
  // perform, memory-wise. Speed is not an issue here.
  private static*/ var queues$static/*:Object*/;/* =*/function queues$static_(){queues$static=( {});};/*

  public static*/ function getRequestQueue$static(id/*:int*/)/*:RequestQueue*/ {
    var queue/*:RequestQueue*/ = queues$static[id];
    if (!queue) {
      queue = new com.coremedia.ui.data.impl.RequestQueue();
      queues$static[id] = queue;
    }
    return queue;
  }/*

  /**
   * Forget about all request queues. For tests only. Make sure
   * to also clear the event queue.
   *
   * @see com.coremedia.ui.util.EventUtil#clearEventQueue0
   * /
  public static*/ function deleteAll$static()/*:void*/ {
    queues$static = {};
  }/*
}*/function ContentRequestQueues$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentRequestQueues$,
      statics: {
        queues: undefined,
        getRequestQueue: getRequestQueue$static,
        deleteAll: deleteAll$static,
        __initStatics__: function() {
          queues$static_();
        }
      },
      requires: ["com.coremedia.ui.data.impl.RequestQueue"]
    };
});
