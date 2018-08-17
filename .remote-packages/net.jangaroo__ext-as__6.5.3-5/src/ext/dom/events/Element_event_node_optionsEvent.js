Ext.define("ext.dom.events.Element_event_node_optionsEvent", function(Element_event_node_optionsEvent) {/*package ext.dom.events {
import ext.event.Event;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class Element_event_node_optionsEvent extends FlExtEvent {
  /**
   * Fires when there is a double tap.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-doubletap Original Ext JS documentation of 'doubletap'
   * @see ext.dom.Element
   * @eventType onDoubleTap
   * /
  public static const DOUBLE_TAP:String = "onDoubleTap";
  /**
   * Fires when you touch and hold still for more than 1 second.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-longpress Original Ext JS documentation of 'longpress'
   * @see ext.dom.Element
   * @eventType onLongPress
   * /
  public static const LONG_PRESS:String = "onLongPress";
  /**
   * Fires continuously when there is pinching (the touch must move for this to be fired).
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-pinch Original Ext JS documentation of 'pinch'
   * @see ext.dom.Element
   * @eventType onPinch
   * /
  public static const PINCH:String = "onPinch";
  /**
   * Fires when a pinch has ended.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-pinchend Original Ext JS documentation of 'pinchend'
   * @see ext.dom.Element
   * @eventType onPinchEnd
   * /
  public static const PINCH_END:String = "onPinchEnd";
  /**
   * Fired once when a pinch has started.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-pinchstart Original Ext JS documentation of 'pinchstart'
   * @see ext.dom.Element
   * @eventType onPinchStart
   * /
  public static const PINCH_START:String = "onPinchStart";
  /**
   * Fires continuously when there is rotation (the touch must move for this to be fired).
   * When listening to this, ensure you know about the →<code>ext.event.Event.angle</code> and →<code>ext.event.Event.rotation</code>
   * properties in the <code>event</code> object.
   * @see ext.event.Event#angle
   * @see ext.event.Event#rotation
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-rotate Original Ext JS documentation of 'rotate'
   * @see ext.dom.Element
   * @eventType onRotate
   * /
  public static const ROTATE:String = "onRotate";
  /**
   * Fires when a rotation event has ended.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-rotateend Original Ext JS documentation of 'rotateend'
   * @see ext.dom.Element
   * @eventType onRotateEnd
   * /
  public static const ROTATE_END:String = "onRotateEnd";
  /**
   * Fired once when a rotation has started.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-rotatestart Original Ext JS documentation of 'rotatestart'
   * @see ext.dom.Element
   * @eventType onRotateStart
   * /
  public static const ROTATE_START:String = "onRotateStart";
  /**
   * Fires when there is a single tap.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-singletap Original Ext JS documentation of 'singletap'
   * @see ext.dom.Element
   * @eventType onSingleTap
   * /
  public static const SINGLE_TAP:String = "onSingleTap";
  /**
   * Fires when there is a swipe
   * When listening to this, ensure you know about the →<code>ext.event.Event.direction</code> property in the <code>event</code> object.
   * @see ext.event.Event#direction
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-swipe Original Ext JS documentation of 'swipe'
   * @see ext.dom.Element
   * @eventType onSwipe
   * /
  public static const SWIPE:String = "onSwipe";
  /**
   * Fires when you touch and hold still for more than 1 second.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-taphold Original Ext JS documentation of 'taphold'
   * @see ext.dom.Element
   * @eventType onTapHold
   * /
  public static const TAP_HOLD:String = "onTapHold";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Element_event_node_optionsEvent.__PARAMETER_SEQUENCE__=( ["event", "node", "options", "eOpts"]);}/*;

  public*/ function Element_event_node_optionsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$$zer(type, arguments);
  }/*

  /**
   * The →<code>ext.event.Event</code> event encapsulating the DOM event.
   * @see ext.event.Event
   * /
  public native function get event():Event;

  /**
   * The target of the event.
   * /
  public native function get node():HTMLElement;

  /**
   * The options object passed to Ext.mixin.Observable.addListener.
   * /
  public native function get options():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Element_event_node_optionsEvent$,
      super$$zer: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DOUBLE_TAP: "onDoubleTap",
        LONG_PRESS: "onLongPress",
        PINCH: "onPinch",
        PINCH_END: "onPinchEnd",
        PINCH_START: "onPinchStart",
        ROTATE: "onRotate",
        ROTATE_END: "onRotateEnd",
        ROTATE_START: "onRotateStart",
        SINGLE_TAP: "onSingleTap",
        SWIPE: "onSwipe",
        TAP_HOLD: "onTapHold",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
