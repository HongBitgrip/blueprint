/**
 * When using a loadMask the updateMaskState property removes aria-describedby attributes that were already set.
 * This override only removes the attribute if the loadMask did modify it with its own value.
 */
Ext.define('com.coremedia.ui.overrides.FocusableUpdateMaskStateOverride', {
  override: 'Ext.Component',

  privates: {
    updateMaskState: function (state, mask) {
      var me = this,
              ariaEl = me.ariaEl.dom,
              value;

      if (state) {
        me.disableTabbing();
        me.setMasked(true);

        if (ariaEl) {
          ariaEl.setAttribute('aria-busy', 'true');

          // It is possible that ariaEl already has aria-describedby attribute;
          // in that case we need to save it to restore later.
          value = ariaEl.getAttribute('aria-describedby');

          if (value) {
            me._savedAriaDescribedBy = value;
          }

          ariaEl.setAttribute('aria-describedby', mask.ariaEl.id);
        }
      }
      else {
        me.enableTabbing();
        me.setMasked(false);

        if (ariaEl) {
          ariaEl.removeAttribute('aria-busy');

          value = ariaEl.getAttribute('aria-describedby');

          // --- START: THIS IS THE ACTUAL CHANGE ---
          // only remove the aria-describedby if we did actually write it
          if (value === mask.ariaEl.id) {
            if (me._savedAriaDescribedBy) {
              ariaEl.setAttribute('aria-describedby', me._savedAriaDescribedBy);
              delete me._savedAriaDescribedBy;
            } else {
              ariaEl.removeAttribute('aria-describedby');
            }
          }
          // --- END: THIS IS THE ACTUAL CHANGE ---
        }
      }
    }
  }
});
