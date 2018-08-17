Ext.define("com.coremedia.ui.util.AsyncComputation", function(AsyncComputation) {/*package com.coremedia.ui.util {

import com.coremedia.ui.data.dependencies.*;

import ext.util.Observable;

/**
 * A utility class for triggering an asynchronous computation under
 * user control, providing access to its result.
 * Dependencies are established so that the result can be accessed from within a function value expresion.
 * The asynchronous computation must be provided as a function.
 * @see com.coremedia.ui.data.FunctionValueExpression
 * @see DependencyTracker
 * /
[PublicApi]
public class AsyncComputation extends Observable {
  private const VALUE_EVENT_NAME:String = "value";

  private var compute:Function;
  private var args:Array;

  private var computeAtLatest:Number = NaN;
  private var computeAtEarliest:Number = NaN;

  private var timeout:Object;
  private var computing:Boolean = false;

  private var value:*;

  /**
   * Creates a new AsyncComputation.
   * The provided compute function must accept a callback function as first parameter.
   * It is mandatory that the result of the asynchronous computation is passed to this callback
   * function to signal that the asynchronous computation has finished.
   * The result may be null.
   * @param compute The function performing the asynchronous computation.
   * /
  public*/ function AsyncComputation$(compute/*:Function*/) {this.super$UP0J();
    this.compute$UP0J = compute;
  }/*

  /**
   * The invocation of this function triggers the async computation.
   * @param delay The number of milliseconds to delay the computation.
   * @param mayPostpone True to allow the internals of this class to reschedule this delayed async computation to a later time on the next invocations of this function.
   * @param args optional arguments to be passed to the compute function.
   * /
  public*/ function trigger(delay/*:Number*/, mayPostpone/*:Boolean, ... args*/)/*:void*/ {var args=Array.prototype.slice.call(arguments,2);
    this.args$UP0J = args;

    var now/*:Number*/ = new Date().getMilliseconds();
    var proposedComputeAt/*:Number*/ = now + delay;
    if (mayPostpone) {
      if (isNaN(this.computeAtEarliest$UP0J) || proposedComputeAt > this.computeAtEarliest$UP0J) {
        this.computeAtEarliest$UP0J = proposedComputeAt;
      }
    } else {
      if (isNaN(this.computeAtLatest$UP0J) || proposedComputeAt < this.computeAtLatest$UP0J) {
        this.computeAtLatest$UP0J = proposedComputeAt;
      }
    }

    this.checkCompute$UP0J();
  }/*

  private*/ function checkCompute()/*:void*/ {
    if (this.computing$UP0J) {
      // Do not start a second computation while the first is underway.
      // After the computation is finished, another check will be made.
      return;
    }

    // Start computation at the earliest allowed time, unless the latest
    // allowed time is even earlier. (Yep.)
    var computeAt/*:Number*/ = this.computeAtEarliest$UP0J;
    if (isNaN(this.computeAtEarliest$UP0J) || this.computeAtLatest$UP0J < this.computeAtEarliest$UP0J) {
      computeAt = this.computeAtLatest$UP0J;
    }
    if (isNaN(computeAt)) {
      return;
    }

    // If a computation is already scheduled, cancel it. We are starting over.
    this.clearTimeout$UP0J();

    var delay/*:Number*/ = computeAt - new Date().getMilliseconds();
    if (delay < 0) {
      this.computeNow$UP0J();
    } else {
      this.timeout$UP0J = window.setTimeout(AS3.bind(this,"computeNow$UP0J"), delay);
    }
  }/*

  private*/ function clearTimeout()/*:void*/ {
    if (this.timeout$UP0J) {
      window.clearTimeout(this.timeout$UP0J);
    }
  }/*

  private*/ function computeNow()/*:void*/ {
    // Block new computations.
    this.computing$UP0J = true;

    // Forget about previous computation requests.
    this.computeAtEarliest$UP0J = NaN;
    this.computeAtLatest$UP0J = NaN;

    // Make the call.
    var fullArgs/*:Array*/ = [AS3.bind(this,"computeCallback$UP0J")].concat(this.args$UP0J);
    this.compute$UP0J.apply(null, fullArgs);
  }/*

  private*/ function computeCallback(value/*:**/)/*:void*/ {
    // Become idle again.
    this.computing$UP0J = false;

    // Remember the result, if there is a result.
    if (value !== undefined) {
      this.setValue$UP0J(value);
    }

    // Check whether a new computation has been requested in the meantime.
    this.checkCompute$UP0J();
  }/*

  private*/ function setValue(value/*:**/)/*:void*/ {
    this.value$UP0J = value;
    this.fireEvent(this.VALUE_EVENT_NAME$UP0J);
  }/*

  /**
   * Return the current value of this computation and register a dependency on this observable.
   * The currently active tracker will report an invalidation if the value changes.
   * @see DependencyTracker#dependOnObservable
   * @return the value of the computation.
   * /
  public*/ function getValue()/*:**/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, this.VALUE_EVENT_NAME$UP0J);
    return this.value$UP0J;
  }/*

  /**
   * Cancel the async computation.
   * The invocation of this function has only an effect on delayed computations that
   * hasn't started yet.
   * /
  public*/ function dispose()/*:void*/ {
    this.clearTimeout$UP0J();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      metadata: {"": ["PublicApi"]},
      VALUE_EVENT_NAME$UP0J: "value",
      compute$UP0J: null,
      args$UP0J: null,
      computeAtLatest$UP0J: NaN,
      computeAtEarliest$UP0J: NaN,
      timeout$UP0J: null,
      computing$UP0J: false,
      value$UP0J: undefined,
      constructor: AsyncComputation$,
      super$UP0J: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      trigger: trigger,
      checkCompute$UP0J: checkCompute,
      clearTimeout$UP0J: clearTimeout,
      computeNow$UP0J: computeNow,
      computeCallback$UP0J: computeCallback,
      setValue$UP0J: setValue,
      getValue: getValue,
      dispose: dispose,
      requires: ["Ext.util.Observable"],
      uses: ["com.coremedia.ui.data.dependencies.DependencyTracker"]
    };
});
