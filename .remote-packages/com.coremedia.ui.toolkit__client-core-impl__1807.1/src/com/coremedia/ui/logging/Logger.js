Ext.define("com.coremedia.ui.logging.Logger", function(Logger) {/*package com.coremedia.ui.logging {
import com.coremedia.ui.util.UrlUtil;
import com.coremedia.ui.util.WindowUtil;

/**
 * A very simple logging facility controlled by hash parameter 'loglevel' with values debug|info|warn|error
 *
 * This class is very private API, so don't use it.
 * /
public class Logger {

  private static const*/var LEVELS$static/*:Array*/;/* =*/function LEVELS$static_(){LEVELS$static=( ['debug','info','warn','error']);};/*

  public static var DISABLED_LEVELS : Array;
  private static*/ var debugLogger$static/*:Function*/=null;/*
  private static*/ var infoLogger$static/*:Function*/=null;/*
  private static*/ var warnLogger$static/*:Function*/=null;/*
  private static*/ var errorLogger$static/*:Function*/=null;function static$0(){

  {
    com.coremedia.ui.util.WindowUtil.addHashChangeListener(initLogger$static);
    initLogger$static();
  }}/*

  private static*/ function initLogger$static()/*:void*/ {
    var logLevel/*:String*/ = com.coremedia.ui.util.UrlUtil.getHashParam('loglevel');
    // set the default to error
    if (!logLevel) {
      logLevel = 'error';
    }
    var index/*:int*/ = LEVELS$static.indexOf(logLevel);
    Logger.DISABLED_LEVELS = -1 < index ? LEVELS$static.slice(0,index) : LEVELS$static;
    debugLogger$static = getLogger$static('debug',"[LOG]");
    infoLogger$static = getLogger$static('info',"[INFO]");
    warnLogger$static = getLogger$static('warn',"[WARN]");
    errorLogger$static = getLogger$static('error',"[ERROR]");
  }/*

  private static*/ function getLogger$static(level/*:String*/,fallback/*:String*/)/*:Function*/ {
    if(Logger.DISABLED_LEVELS.indexOf(level) < 0){
      if(window.console && window.console[level]) {
        // chrome needs an extra wrapper
        return function(msg/*:String*/)/*:void*/ {
          window.console[level](msg);
        };
      }
      return function(msg/*:String*/){
        AS3.trace(fallback, msg);
      };
    }
    return null;
  }/*

  public static*/ function debug$static(msg/*:String*/)/*:void*/ {
    debugLogger$static && debugLogger$static(msg);
  }/*

  public static*/ function info$static(msg/*:String*/)/*:void*/ {
    infoLogger$static && infoLogger$static(msg);
  }/*

  public static*/ function warn$static(msg/*:String*/)/*:void*/ {
    warnLogger$static && warnLogger$static(msg);
  }/*

  public static*/ function error$static(msg/*:String*/)/*:void*/ {
    errorLogger$static && errorLogger$static(msg);
  }/*

  public static*/ function isDebugEnabled$static()/*:Boolean*/ {
    return null !== debugLogger$static;
  }/*

  public static*/ function isInfoEnabled$static()/*:Boolean*/ {
    return null !== infoLogger$static;
  }/*

  public static*/ function isWarnEnabled$static()/*:Boolean*/ {
    return null !== warnLogger$static;
  }/*

  public static*/ function isErrorEnabled$static()/*:Boolean*/ {
    return null !== errorLogger$static;
  }/*

}*/function Logger$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: Logger$,
      statics: {
        LEVELS: undefined,
        DISABLED_LEVELS: null,
        debug: debug$static,
        info: info$static,
        warn: warn$static,
        error: error$static,
        isDebugEnabled: isDebugEnabled$static,
        isInfoEnabled: isInfoEnabled$static,
        isWarnEnabled: isWarnEnabled$static,
        isErrorEnabled: isErrorEnabled$static,
        __initStatics__: function() {
          LEVELS$static_();
          static$0();
        }
      },
      requires: [
        "AS3.trace",
        "com.coremedia.ui.util.UrlUtil",
        "com.coremedia.ui.util.WindowUtil"
      ]
    };
});
