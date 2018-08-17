// Fixes CMS-6385
Ext.define("com.coremedia.ui.overrides.ZIndexManagerTopVisibleOverride", {
  override: "Ext.ZIndexManager",

  /**
   * @private
   * Called whenever the zIndexStack is sorted.
   * That happens in reaction to the activeCounter time being set, or the alwaysOnTop config being set.
   */
  onCollectionSort: function() {
    var me = this,
            oldFront = me.front,
            zIndex = me.zseed,
            a = me.zIndexStack.getRange(),
            len = a.length,
            i, comp, topModal, topFocusable, topMost,
            doFocus = !oldFront || oldFront.isVisible();

    me.sortCount++;
    for (i = 0; i < len; i++) {
      comp = a[i];

      if (comp.destroying || comp.destroyed) {
        continue;
      }

      // Setting the zIndex of a Component returns the topmost zIndex consumed by
      // that Component.
      // If it's just a plain floating Component such as a BoundList, then the
      // return value is the passed value plus 10, ready for the next item.
      // If a floating *Container* has its zIndex set, it re-orders its managed
      // floating children, starting from that new base, and returns a value 10000 above
      // the highest zIndex which it allocates.
      zIndex = comp.setZIndex(zIndex);

      // Only register a new topmost to activate if we find one that is visible
      // Unfiltered panels with hidden:true can end up here during an animated hide process 
      // When the hidden flag is set, and the ghost show operation kicks the ZIndexManager's sort.

      // ############## HERE COMES THE FIX ##################
      // sorry for having the complete method overriden for this one line.
      // Prevent tooltips from being considered when computing topmost visible component.
      // It messes up determining the relevant topmost component (because of having the flag 'alwaysOnTop' set).

      if (!comp.hidden && !AS3.is(comp, Ext.tip.ToolTip)) {
        topMost = comp;

        // Track topmost visible modal so we can place the modal mask just below it.
        // Any prior focusable ones just became not focusable - they'll be below our mask. 
        if (comp.modal) {
          topModal = comp;
          topFocusable = null;
        }

        // Track topmost focusable floater which is above all modals. 
        // Unfocusable things like tooltips and toasts may be above it 
        // but they do not matter, the topmost *focusable* must be focused. 
        if (doFocus && (comp.isFocusable(true) &&
                        (comp.modal || comp.focusOnToFront))) {
          topFocusable = comp;
        }
      }
    }

    // Sort resulted in a different topmost focusable. 
    if (topFocusable && topFocusable !== oldFront && !topFocusable.preventFocusOnActivate) {
      topFocusable.onFocusTopmost();
    }

    // If we encountered a modal in our reassigment, ensure our modal mask is just below it.
    if (topModal) {
      // If it's the same topmost, then just ensure the
      // correct z-index and size of mask.
      if (topModal === me.topModal) {
        me.syncModalMask(topModal);
      }
      // If it's a new top, we must re-show the mask because of tabbability resets.
      else {
        me.showModalMask(topModal);
      }
    } else {
      me.hideModalMask();
    }

    // Inform components of change in to of stack. 
    if (topMost !== me.topMost) {
      if (me.topMost) {
        // This one has been bumped from top. 
        me.topMost.onZIndexChange(false);
      }
      if (topMost) {
        // This one is now at the top. 
        topMost.onZIndexChange(true);
      }
    }

    // Cache the top of the stack 
    me.front = topFocusable;
    me.topModal = topModal;
    me.topMost = topMost;

    return zIndex;
  }
});
