Ext.define("com.coremedia.ui.util.RequestCounter", function(RequestCounter) {/*package com.coremedia.ui.util {
public class RequestCounter {
  /**
   * Number of concurrent requests that can likely be processed
   * by the browser. Most current browsers support 6 requests against
   * a single backend, modern IEs support a few more.
   * /
  private static*/ var requestThreshold$static/*:int*/;/* =*/function requestThreshold$static_(){requestThreshold$static=( Number(com.coremedia.ui.util.UrlUtil.getHashParam("maxRequests")) || 6);};/*

  private static*/ var networkProblemCount$static/*:int*/ = 0;/*

  private static*/ var openRequestCount$static/*:int*/ = 0;/*
  private static*/ var openBackgroundRequestCount$static/*:int*/ = 0;/*

  private static*/ var onRequestRecommendedCallbacks$static/*:Array*/;/* =*/function onRequestRecommendedCallbacks$static_(){onRequestRecommendedCallbacks$static=( []);};/*

  /**
   * @return whether there are requests pending, not counting background requests
   * /
  public static*/ function requestsPending$static()/*:Boolean*/ {
    return openRequestCount$static > 0;
  }/*

  /**
   * Whether remote requests are recommended at this point of time.
   *
   * @return true if no network problems are known and
   * either the total number of requests is below the request threshold or
   * only background requests are pending
   * /
  public static*/ function isRequestRecommended$static()/*:Boolean*/ {
    return networkProblemCount$static === 0 &&
            (requestThreshold$static > openRequestCount$static + openBackgroundRequestCount$static || openRequestCount$static === 0);
  }/*

  /**
   * Call the given methods once requests are again recommended.
   * Only call while isRequestRecommended() is returning false.
   *
   * @param callback the function to call eventually
   * /
  public static*/ function whenRequestRecommended$static(callback/*:Function*/)/*:void*/ {
    onRequestRecommendedCallbacks$static.push(callback);
  }/*

  private static*/ function recommendRequests$static()/*:void*/ {
    while (onRequestRecommendedCallbacks$static.length > 0 && RequestCounter.isRequestRecommended()) {
      try {
        AS3.cast(Function,onRequestRecommendedCallbacks$static.pop()).call(null);
      } catch (e/*:**/) {
        AS3.trace("[ERROR] RequestCounter: error while recommending request: ", com.coremedia.ui.util.ErrorUtil.errorToMessage(e));
      }
    }
  }/*

  /**
   * Tell the counter that you have detected a network problem.
   * /
  public static*/ function networkProblemDetected$static()/*:void*/ {
    networkProblemCount$static++;
  }/*

  /**
   * Tell the counter that you have resolved a network problem.
   * /
  public static*/ function networkProblemResolved$static()/*:void*/ {
    networkProblemCount$static--;

    recommendRequests$static();
  }/*

  /**
   * Tell the counter that you have opened a request.
   * /
  public static*/ function openRequest$static(isBackground/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)isBackground=false;
    if (isBackground) {
      openBackgroundRequestCount$static++;
    } else {
      openRequestCount$static++;
    }
  }/*

  /**
   * Tell the counter that you have closed a request.
   * /
  public static*/ function closeRequest$static(isBackground/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)isBackground=false;
    if (isBackground) {
      openBackgroundRequestCount$static--;
      if (openBackgroundRequestCount$static < 0) {
        AS3.trace("[ERROR] RequestCounter: number of open background requests became negative: " + openRequestCount$static);
      }
    } else {
      openRequestCount$static--;
      if (openRequestCount$static < 0) {
        AS3.trace("[ERROR] RequestCounter: number of open requests became negative: " + openRequestCount$static);
      }
    }

    recommendRequests$static();
  }/*

  /**
   * Reset the counter. For testing purposes.
   * /
  public static*/ function reset$static()/*:void*/ {
    networkProblemCount$static = 0;
    openRequestCount$static = 0;
    openBackgroundRequestCount$static = 0;
    onRequestRecommendedCallbacks$static = [];
  }/*
}*/function RequestCounter$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: RequestCounter$,
      statics: {
        requestThreshold: undefined,
        onRequestRecommendedCallbacks: undefined,
        requestsPending: requestsPending$static,
        isRequestRecommended: isRequestRecommended$static,
        whenRequestRecommended: whenRequestRecommended$static,
        networkProblemDetected: networkProblemDetected$static,
        networkProblemResolved: networkProblemResolved$static,
        openRequest: openRequest$static,
        closeRequest: closeRequest$static,
        reset: reset$static,
        __initStatics__: function() {
          requestThreshold$static_();
          onRequestRecommendedCallbacks$static_();
        }
      },
      requires: ["AS3.trace"],
      uses: [
        "com.coremedia.ui.util.ErrorUtil",
        "com.coremedia.ui.util.UrlUtil"
      ]
    };
});
