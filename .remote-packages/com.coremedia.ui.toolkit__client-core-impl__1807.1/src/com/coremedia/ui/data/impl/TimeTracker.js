Ext.define("com.coremedia.ui.data.impl.TimeTracker", function(TimeTracker) {/*package com.coremedia.ui.data.impl {

public class TimeTracker {
  private static const*/var timestamps$static/*:Object*/;/* =*/function timestamps$static_(){timestamps$static=( {});};/*

  public static*/ function advanceTimestamps$static(newTimestamps/*:Object*/)/*:void*/ {
    for (var key/*:String*/ in newTimestamps) {
      var newTimestamp/*:**/ = newTimestamps[key];
      if (AS3.is(newTimestamp,  Number)) {
        var oldTimestamp/*:Number*/ = timestamps$static[key];
        if (!oldTimestamp || newTimestamp > oldTimestamp) {
          timestamps$static[key] = newTimestamp;
        }
      }
    }
  }/*

  public static*/ function getTimestamp$static(key/*:String*/)/*:Number*/ {
    return timestamps$static[key];
  }/*
}*/function TimeTracker$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TimeTracker$,
      statics: {
        timestamps: undefined,
        advanceTimestamps: advanceTimestamps$static,
        getTimestamp: getTimestamp$static,
        __initStatics__: function() {
          timestamps$static_();
        }
      }
    };
});
