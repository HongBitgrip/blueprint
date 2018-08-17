Ext.define("ext.dom.events.Element_e_tEvent", function(Element_e_tEvent) {/*package ext.dom.events {
import ext.event.Event;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class Element_e_tEvent extends FlExtEvent {
  /**
   * Fires when an object/image is stopped from loading before completely loaded.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-abort Original Ext JS documentation of 'abort'
   * @see ext.dom.Element
   * @eventType onAbort
   * /
  public static const ABORT:String = "onAbort";
  /**
   * Fires when an element loses focus either via the pointing device or by tabbing navigation.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-blur Original Ext JS documentation of 'blur'
   * @see ext.dom.Element
   * @eventType onBlur
   * /
  public static const BLUR:String = "onBlur";
  /**
   * Fires when a control loses the input focus and its value has been modified since gaining focus.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-change Original Ext JS documentation of 'change'
   * @see ext.dom.Element
   * @eventType onChange
   * /
  public static const CHANGE:String = "onChange";
  /**
   * Fires when a mouse click is detected within the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-click Original Ext JS documentation of 'click'
   * @see ext.dom.Element
   * @eventType onClick
   * /
  public static const CLICK:String = "onClick";
  /**
   * Fires when a right click is detected within the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-contextmenu Original Ext JS documentation of 'contextmenu'
   * @see ext.dom.Element
   * @eventType onContextMenu
   * /
  public static const CONTEXT_MENU:String = "onContextMenu";
  /**
   * Fires when a mouse double click is detected within the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-dblclick Original Ext JS documentation of 'dblclick'
   * @see ext.dom.Element
   * @eventType onDblclick
   * /
  public static const DBLCLICK:String = "onDblclick";
  /**
   * Where supported. Fires when an element is activated, for instance, through a mouse click or a keypress.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-DOMActivate Original Ext JS documentation of 'DOMActivate'
   * @see ext.dom.Element
   * @eventType onDOMActivate
   * /
  public static const DOM_ACTIVATE:String = "onDOMActivate";
  /**
   * Where supported. Fires when an attribute has been modified.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-DOMAttrModified Original Ext JS documentation of 'DOMAttrModified'
   * @see ext.dom.Element
   * @eventType onDOMAttrModified
   * /
  public static const DOM_ATTR_MODIFIED:String = "onDOMAttrModified";
  /**
   * Where supported. Fires when the character data has been modified.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-DOMCharacterDataModified Original Ext JS documentation of 'DOMCharacterDataModified'
   * @see ext.dom.Element
   * @eventType onDOMCharacterDataModified
   * /
  public static const DOM_CHARACTER_DATA_MODIFIED:String = "onDOMCharacterDataModified";
  /**
   * Where supported. Similar to HTML focus event, but can be applied to any focusable element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-DOMFocusIn Original Ext JS documentation of 'DOMFocusIn'
   * @see ext.dom.Element
   * @eventType onDOMFocusIn
   * /
  public static const DOM_FOCUS_IN:String = "onDOMFocusIn";
  /**
   * Where supported. Similar to HTML blur event, but can be applied to any focusable element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-DOMFocusOut Original Ext JS documentation of 'DOMFocusOut'
   * @see ext.dom.Element
   * @eventType onDOMFocusOut
   * /
  public static const DOM_FOCUS_OUT:String = "onDOMFocusOut";
  /**
   * Where supported. Fires when a node has been added as a child of another node.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-DOMNodeInserted Original Ext JS documentation of 'DOMNodeInserted'
   * @see ext.dom.Element
   * @eventType onDOMNodeInserted
   * /
  public static const DOM_NODE_INSERTED:String = "onDOMNodeInserted";
  /**
   * Where supported. Fires when a node is being inserted into a document.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-DOMNodeInsertedIntoDocument Original Ext JS documentation of 'DOMNodeInsertedIntoDocument'
   * @see ext.dom.Element
   * @eventType onDOMNodeInsertedIntoDocument
   * /
  public static const DOM_NODE_INSERTED_INTO_DOCUMENT:String = "onDOMNodeInsertedIntoDocument";
  /**
   * Where supported. Fires when a descendant node of the element is removed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-DOMNodeRemoved Original Ext JS documentation of 'DOMNodeRemoved'
   * @see ext.dom.Element
   * @eventType onDOMNodeRemoved
   * /
  public static const DOM_NODE_REMOVED:String = "onDOMNodeRemoved";
  /**
   * Where supported. Fires when a node is being removed from a document.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-DOMNodeRemovedFromDocument Original Ext JS documentation of 'DOMNodeRemovedFromDocument'
   * @see ext.dom.Element
   * @eventType onDOMNodeRemovedFromDocument
   * /
  public static const DOM_NODE_REMOVED_FROM_DOCUMENT:String = "onDOMNodeRemovedFromDocument";
  /**
   * Where supported. Fires when the subtree is modified.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-DOMSubtreeModified Original Ext JS documentation of 'DOMSubtreeModified'
   * @see ext.dom.Element
   * @eventType onDOMSubtreeModified
   * /
  public static const DOM_SUBTREE_MODIFIED:String = "onDOMSubtreeModified";
  /**
   * Fires when an object/image/frame cannot be loaded properly.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-error Original Ext JS documentation of 'error'
   * @see ext.dom.Element
   * @eventType onError
   * /
  public static const ERROR:String = "onError";
  /**
   * Fires when an element receives focus either via the pointing device or by tab navigation.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-focus Original Ext JS documentation of 'focus'
   * @see ext.dom.Element
   * @eventType onFocus
   * /
  public static const FOCUS:String = "onFocus";
  /**
   * Fires when focus is moved <i>within</i> an element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-focusmove Original Ext JS documentation of 'focusmove'
   * @see ext.dom.Element
   * @eventType onFocusMove
   * /
  public static const FOCUS_MOVE:String = "onFocusMove";
  /**
   * Fires when a keypress is detected within the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-keypress Original Ext JS documentation of 'keypress'
   * @see ext.dom.Element
   * @eventType onKeypress
   * /
  public static const KEYPRESS:String = "onKeypress";
  /**
   * Fires when a keydown is detected within the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-keydown Original Ext JS documentation of 'keydown'
   * @see ext.dom.Element
   * @eventType onKeyDown
   * /
  public static const KEY_DOWN:String = "onKeyDown";
  /**
   * Fires when a keyup is detected within the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-keyup Original Ext JS documentation of 'keyup'
   * @see ext.dom.Element
   * @eventType onKeyUp
   * /
  public static const KEY_UP:String = "onKeyUp";
  /**
   * Fires when the user agent finishes loading all content within the element. Only supported by window, frames,
   * objects and images.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-load Original Ext JS documentation of 'load'
   * @see ext.dom.Element
   * @eventType onLoad
   * /
  public static const LOAD:String = "onLoad";
  /**
   * Fires when a mousedown is detected within the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-mousedown Original Ext JS documentation of 'mousedown'
   * @see ext.dom.Element
   * @eventType onMouseDown
   * /
  public static const MOUSE_DOWN:String = "onMouseDown";
  /**
   * Fires when the mouse enters the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-mouseenter Original Ext JS documentation of 'mouseenter'
   * @see ext.dom.Element
   * @eventType onMouseEnter
   * /
  public static const MOUSE_ENTER:String = "onMouseEnter";
  /**
   * Fires when the mouse leaves the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-mouseleave Original Ext JS documentation of 'mouseleave'
   * @see ext.dom.Element
   * @eventType onMouseLeave
   * /
  public static const MOUSE_LEAVE:String = "onMouseLeave";
  /**
   * Fires when a mousemove is detected with the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-mousemove Original Ext JS documentation of 'mousemove'
   * @see ext.dom.Element
   * @eventType onMouseMove
   * /
  public static const MOUSE_MOVE:String = "onMouseMove";
  /**
   * Fires when a mouseout is detected with the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-mouseout Original Ext JS documentation of 'mouseout'
   * @see ext.dom.Element
   * @eventType onMouseOut
   * /
  public static const MOUSE_OUT:String = "onMouseOut";
  /**
   * Fires when a mouseover is detected within the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-mouseover Original Ext JS documentation of 'mouseover'
   * @see ext.dom.Element
   * @eventType onMouseOver
   * /
  public static const MOUSE_OVER:String = "onMouseOver";
  /**
   * Fires when a mouseup is detected within the element.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-mouseup Original Ext JS documentation of 'mouseup'
   * @see ext.dom.Element
   * @eventType onMouseUp
   * /
  public static const MOUSE_UP:String = "onMouseUp";
  /**
   * Fires when a form is reset.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-reset Original Ext JS documentation of 'reset'
   * @see ext.dom.Element
   * @eventType onReset
   * /
  public static const RESET:String = "onReset";
  /**
   * Fires when a document view is scrolled.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-scroll Original Ext JS documentation of 'scroll'
   * @see ext.dom.Element
   * @eventType onScroll
   * /
  public static const SCROLL:String = "onScroll";
  /**
   * Fires when a user selects some text in a text field, including input and textarea.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-select Original Ext JS documentation of 'select'
   * @see ext.dom.Element
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  /**
   * Fires when a form is submitted.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-submit Original Ext JS documentation of 'submit'
   * @see ext.dom.Element
   * @eventType onSubmit
   * /
  public static const SUBMIT:String = "onSubmit";
  /**
   * Fires when the user agent removes all content from a window or frame. For elements, it fires when the target
   * element or any of its content has been removed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-unload Original Ext JS documentation of 'unload'
   * @see ext.dom.Element
   * @eventType onUnload
   * /
  public static const UNLOAD:String = "onUnload";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Element_e_tEvent.__PARAMETER_SEQUENCE__=( ["e", "t", "eOpts"]);}/*;

  public*/ function Element_e_tEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$4sBV(type, arguments);
  }/*

  /**
   * The →<code>ext.event.Event</code> encapsulating the DOM event.
   * @see ext.event.Event
   * /
  public native function get e():Event;

  /**
   * The target of the event.
   * /
  public native function get t():HTMLElement;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Element_e_tEvent$,
      super$4sBV: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ABORT: "onAbort",
        BLUR: "onBlur",
        CHANGE: "onChange",
        CLICK: "onClick",
        CONTEXT_MENU: "onContextMenu",
        DBLCLICK: "onDblclick",
        DOM_ACTIVATE: "onDOMActivate",
        DOM_ATTR_MODIFIED: "onDOMAttrModified",
        DOM_CHARACTER_DATA_MODIFIED: "onDOMCharacterDataModified",
        DOM_FOCUS_IN: "onDOMFocusIn",
        DOM_FOCUS_OUT: "onDOMFocusOut",
        DOM_NODE_INSERTED: "onDOMNodeInserted",
        DOM_NODE_INSERTED_INTO_DOCUMENT: "onDOMNodeInsertedIntoDocument",
        DOM_NODE_REMOVED: "onDOMNodeRemoved",
        DOM_NODE_REMOVED_FROM_DOCUMENT: "onDOMNodeRemovedFromDocument",
        DOM_SUBTREE_MODIFIED: "onDOMSubtreeModified",
        ERROR: "onError",
        FOCUS: "onFocus",
        FOCUS_MOVE: "onFocusMove",
        KEYPRESS: "onKeypress",
        KEY_DOWN: "onKeyDown",
        KEY_UP: "onKeyUp",
        LOAD: "onLoad",
        MOUSE_DOWN: "onMouseDown",
        MOUSE_ENTER: "onMouseEnter",
        MOUSE_LEAVE: "onMouseLeave",
        MOUSE_MOVE: "onMouseMove",
        MOUSE_OUT: "onMouseOut",
        MOUSE_OVER: "onMouseOver",
        MOUSE_UP: "onMouseUp",
        RESET: "onReset",
        SCROLL: "onScroll",
        SELECT: "onSelect",
        SUBMIT: "onSubmit",
        UNLOAD: "onUnload",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
