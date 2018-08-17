Ext.define("com.coremedia.ui.util.ExecuteEventually", function(ExecuteEventually) {/*package com.coremedia.ui.util {

/**
 * A synchronisation object that executes a given function as soon as it has
 * received more proceed calls than delay calls.
 * /
public class ExecuteEventually {
  private var afterHandle:Function;
  private var pending:Number = 1;

  /**
   * Create an execute eventually synchronization object.
   * The handler function is executed after the object has received more
   * release calls than acquire calls.
   * It is executed at most once.
   *
   * @param afterHandle the handler function
   * /
  public*/ function ExecuteEventually$(afterHandle/*:Function*/) {
    this.afterHandle$zAA0 = afterHandle;
  }/*

  /**
   * Return true if a non-null handler function was provided to the constructor
   * and has not been called so far.
   * /
  public*/ function isDelaying()/*:Boolean*/ {
    return ! !this.afterHandle$zAA0;
  }/*

  /**
   * Delay the execution of the handler. After calling this method, the method
   * proceed() must be called one additional time before the handler function is executed.
   * As long as the handler function has not been called,
   * this method returns the proceed function.
   * If the handler function has been called or the handler function was null initially,
   * this method returns null.
   * This allows the result of this method to be used as a callback.
   *
   * @see #proceed()
   * /
  public*/ function delay()/*:Function*/ {
    this.pending$zAA0++;
    // Do not refactor the following if into an elvis operator:
    // Jangaroo would not bind the method reference correctly.
    if (this.afterHandle$zAA0) {
      return AS3.bind( this,"proceed");
    } else {
      return null;
    }
  }/*

  /**
   * Proceed towards the execution of the handler. As soon as this method
   * has been called more often than the delay method, execute the handler.
   *
   * @see #delay()
   * /
  public*/ function proceed()/*:void*/ {
    this.pending$zAA0--;
    if (this.pending$zAA0 === 0 && this.afterHandle$zAA0) {
      // Never call afterHandle twice, even if the callback operated on this object.
      var originalAfterHandle/*:Function*/ = this.afterHandle$zAA0;
      this.afterHandle$zAA0 = null;
      originalAfterHandle();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      afterHandle$zAA0: null,
      pending$zAA0: 1,
      constructor: ExecuteEventually$,
      isDelaying: isDelaying,
      delay: delay,
      proceed: proceed
    };
});
