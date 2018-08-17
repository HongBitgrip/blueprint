Ext.define('com.coremedia.ui.theme.tip.QuickTip', {
  override: 'Ext.tip.QuickTip',

  getAlignRegion: function() {
    var me = this,
            activeTarget = me.activeTarget,
            currentTargetDom = me.currentTarget.dom,
            result;

    // If we are anchored, and not configured with an anchorTarget, align to the target element, or whatever its 'data-anchortarget' points to
    if (activeTarget && activeTarget.alignTarget && me.anchor && !me.initialConfig.hasOwnProperty('anchorTarget')) {
      me.currentTarget.attach(Ext.getDom(activeTarget.alignTarget));
    }

    // Anchor to the target when have an align config or an anchor config
    me.anchorToTarget = !!((activeTarget && activeTarget.align) || me.anchor);  // <- fix: activeTarget can be null
    result = me.callSuper();

    // Return currentTarget to correctness for pointer event processing
    me.currentTarget.attach(currentTargetDom);

    return result;
  },

  unregister : function(el) {
    var p = (typeof el === "string" ? el : (el && el.id) ? el.id : null);
    if (p) {
      delete this.targets[p]; // <- fix: a new id was generated, if el was not in the DOM anymore
    }
  }
});