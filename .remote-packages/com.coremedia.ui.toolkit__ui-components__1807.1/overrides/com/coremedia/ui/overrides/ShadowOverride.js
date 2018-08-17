Ext.define('com.coremedia.ui.overrides.ShadowOverride', {
  override: 'Ext.dom.Shadow',

  beforeShow: function() {
    var me = this,
            style = me.el.dom.style,
            shim = me.shim;

    if (Ext.supports.CSS3BoxShadow) {
      // TODO: it would be nice to have a configurable color value instead of a hard coded one here:
      style[me.boxShadowProperty] = '0 0 ' + (me.offset + 2) + 'px 2px rgba(0,0,0, 0.5)';
    } else {
      style.filter = "progid:DXImageTransform.Microsoft.alpha(opacity=" + me.opacity + ") progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (me.offset) + ")";
    }

    // if we are showing a shadow, and we already have a visible shim, we need to
    // realign the shim to ensure that it includes the size of target and shadow els
    if (shim) {
      shim.realign();
    }
  }
});
