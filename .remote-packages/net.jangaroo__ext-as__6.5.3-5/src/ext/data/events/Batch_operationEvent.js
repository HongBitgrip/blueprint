Ext.define("ext.data.events.Batch_operationEvent", function(Batch_operationEvent) {/*package ext.data.events {
import ext.data.Batch;

import net.jangaroo.ext.FlExtEvent;

public class Batch_operationEvent extends FlExtEvent {
  /**
   * Fired when all operations of this batch have been completed
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.Batch.html#event-complete Original Ext JS documentation of 'complete'
   * @see ext.data.Batch
   * @eventType onComplete
   * /
  public static const COMPLETE:String = "onComplete";
  /**
   * Fired when a operation encountered an exception
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.Batch.html#event-exception Original Ext JS documentation of 'exception'
   * @see ext.data.Batch
   * @eventType onException
   * /
  public static const EXCEPTION:String = "onException";
  /**
   * Fired when each operation of the batch completes
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.Batch.html#event-operationcomplete Original Ext JS documentation of 'operationcomplete'
   * @see ext.data.Batch
   * @eventType onOperationComplete
   * /
  public static const OPERATION_COMPLETE:String = "onOperationComplete";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Batch_operationEvent.__PARAMETER_SEQUENCE__=( ["batch", "operation", "eOpts"]);}/*;

  public*/ function Batch_operationEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$g83M(type, arguments);
  }/*

  /**
   * The batch object
   * /
  public native function get batch():Batch;

  /**
   * The last operation that was executed
   * /
  public native function get operation():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Batch_operationEvent$,
      super$g83M: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COMPLETE: "onComplete",
        EXCEPTION: "onException",
        OPERATION_COMPLETE: "onOperationComplete",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
