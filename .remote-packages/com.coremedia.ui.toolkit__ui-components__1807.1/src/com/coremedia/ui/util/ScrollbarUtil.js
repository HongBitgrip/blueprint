Ext.define("com.coremedia.ui.util.ScrollbarUtil", function(ScrollbarUtil) {/*package com.coremedia.ui.util {
import ext.Ext;
import ext.dom.Element;

public class ScrollbarUtil {
  /**
   * The width of scrollbars, in pixels.
   * /
  public static const SCROLLBAR_THICKNESS:Number =*/function SCROLLBAR_THICKNESS$static_(){ScrollbarUtil.SCROLLBAR_THICKNESS=( measureScrollbarWidth$static());}/*;

  private static*/ function measureScrollbarWidth$static()/*:Number*/ {
    var scrollDiv/*:Element*/ = Ext.fly(window.document.body).createChild({
      tag:'div',
      style: 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -100px;'
    });

    var result/*:Number*/ = scrollDiv.dom.offsetWidth - scrollDiv.dom.clientWidth;
    scrollDiv.remove();
    return result;
  }/*
}*/function ScrollbarUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ScrollbarUtil$,
      statics: {
        SCROLLBAR_THICKNESS: undefined,
        __initStatics__: function() {
          SCROLLBAR_THICKNESS$static_();
        }
      },
      requires: ["Ext"]
    };
});
