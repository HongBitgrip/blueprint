Ext.define("ext.panel.events.Panel_newGlyph_oldGlyphEvent", function(Panel_newGlyph_oldGlyphEvent) {/*package ext.panel.events {
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_newGlyph_oldGlyphEvent extends FlExtEvent {
  /**
   * Fired when the Panel glyph has been changed by the →<code>setGlyph</code> method.
   * @see ext.panel.Panel#setGlyph
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-glyphchange Original Ext JS documentation of 'glyphchange'
   * @see ext.panel.Panel
   * @eventType onGlyphChange
   * /
  public static const GLYPH_CHANGE:String = "onGlyphChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_newGlyph_oldGlyphEvent.__PARAMETER_SEQUENCE__=( ["source", "newGlyph", "oldGlyph", "eOpts"]);}/*;

  public*/ function Panel_newGlyph_oldGlyphEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$zZsx(type, arguments);
  }/*

  public native function get newGlyph():*;

  public native function get oldGlyph():*;

  public native function get source():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_newGlyph_oldGlyphEvent$,
      super$zZsx: function() {
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
