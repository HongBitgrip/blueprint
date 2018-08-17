Ext.define("com.coremedia.ui.util.LayoutUtil", function(LayoutUtil) {/*package com.coremedia.ui.util {
import ext.Component;
import ext.Ext;


public class LayoutUtil {

  /**
   * Explicitly let a function be executed with Ext's layouts being turned on (resumed).
   *
   * This helps to circumvent execution contexts where Ext's layouts are suspended
   * (like EventUtil.invokeLater where layouts are suspended for performance reasons).
   *
   * @param fun the function to execute
   * @param scope the scope to execute the function in
   * @param args optional parameters for the function
   * @return the function return value
   *
   * @see Ext.suspendLayouts
   * @see Ext.resumeLayouts
   * @see EventUtil.invokeLater
   * /
  public static*/ function runWithLayouts$static(fun/*:Function*/, scope/*:* = null, ...args*/)/*:**/ {if(arguments.length<=1)scope=null;var args=Array.prototype.slice.call(arguments,2);
    var layoutsResumed/*:Boolean*/ = false;
    if (Ext.Component["layoutSuspendCount"] > 0) {
      layoutsResumed = true;
      Ext.resumeLayouts();
    }
    try {
      return fun.apply(scope, args);
    } finally {
      if (layoutsResumed) {
        Ext.suspendLayouts();
      }
    }
  }/*

  /**
   * Let a function be executed with Ext's layouts being suspended.
   *
   * @param fun the function to execute
   * @param scope the scope to execute the function in
   * @param args optional parameters for the function
   * @return the function return value
   *
   * @see Ext.suspendLayouts
   * @see Ext.resumeLayouts
   * /
  public static*/ function runWithoutLayouts$static(fun/*:Function*/, scope/*:* = null, ...args*/)/*:**/ {if(arguments.length<=1)scope=null;var args=Array.prototype.slice.call(arguments,2);
    Ext.suspendLayouts();
    try {
      return fun.apply(scope, args);
    } finally {
      Ext.suspendLayouts();
    }
  }/*
}*/function LayoutUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: LayoutUtil$,
      statics: {
        runWithLayouts: runWithLayouts$static,
        runWithoutLayouts: runWithoutLayouts$static
      },
      requires: [
        "Ext",
        "Ext.Component"
      ]
    };
});
