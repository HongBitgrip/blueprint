Ext.define("ext.button.events.Button_newGlyph_oldGlyphEvent", function(Button_newGlyph_oldGlyphEvent) {/*package ext.button.events {
import ext.button.Button;

import net.jangaroo.ext.FlExtEvent;

public class Button_newGlyph_oldGlyphEvent extends FlExtEvent {
  /**
   * Fired when the button's glyph is changed by the →<code>setGlyph</code> method.
   * @see ext.button.Button#setGlyph
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-glyphchange Original Ext JS documentation of 'glyphchange'
   * @see ext.button.Button
   * @eventType onGlyphChange
   * /
  public static const GLYPH_CHANGE:String = "onGlyphChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Button_newGlyph_oldGlyphEvent.__PARAMETER_SEQUENCE__=( ["source", "newGlyph", "oldGlyph", "eOpts"]);}/*;

  public*/ function Button_newGlyph_oldGlyphEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$KuKf(type, arguments);
  }/*

  public native function get newGlyph():*;

  public native function get oldGlyph():*;

  public native function get source():Button;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Button_newGlyph_oldGlyphEvent$,
      super$KuKf: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        GLYPH_CHANGE: "onGlyphChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
