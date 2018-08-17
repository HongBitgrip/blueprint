Ext.define("ext.data.reader.events.DataReader_response_errorEvent", function(DataReader_response_errorEvent) {/*package ext.data.reader.events {
import ext.data.ResultSet;
import ext.data.reader.DataReader;

import js.XMLHttpRequest;

import net.jangaroo.ext.FlExtEvent;

public class DataReader_response_errorEvent extends FlExtEvent {
  /**
   * Fires when the reader receives improperly encoded data from the server
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.reader.Reader.html#event-exception Original Ext JS documentation of 'exception'
   * @see ext.data.reader.DataReader
   * @eventType onException
   * /
  public static const EXCEPTION:String = "onException";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DataReader_response_errorEvent.__PARAMETER_SEQUENCE__=( ["reader", "response", "error", "eOpts"]);}/*;

  public*/ function DataReader_response_errorEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$BGNV(type, arguments);
  }/*

  /**
   * The error object
   * /
  public native function get error():ResultSet;

  /**
   * A reference to this reader
   * /
  public native function get reader():DataReader;

  /**
   * The XMLHttpRequest response object
   * /
  public native function get response():XMLHttpRequest;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DataReader_response_errorEvent$,
      super$BGNV: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        EXCEPTION: "onException",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
