Ext.define('com.coremedia.ui.theme.form.field.Base', {
    override: 'Ext.form.field.Base',
    // classic toolkit sets the default padding to 5px. In order for scss variable $form-label-vertical-spacing to take
    // effect, labelPad has to be set to null.
    // As overriding mixins doesn't work properly as it is load order dependend overriding Ext.form.field.Base instead.
    labelPad: null,

    markInvalid: function(errors) {
        // Save the message and fire the 'invalid' event
        var me = this,
                ariaDom = me.ariaEl.dom,
                oldMsg = me.getActiveError(),
                active;

        me.setActiveErrors(Ext.Array.from(errors));
        active = me.getActiveError();
        if (oldMsg !== active) {
            me.setError(active);
            me.fireEvent('validitychange', me, true);

            if (!me.ariaStaticRoles[me.ariaRole] && ariaDom) {
                ariaDom.setAttribute('aria-invalid', true);
            }
        }
    },

    clearInvalid: function() {
        // Clear the message and fire the 'valid' event
        var me = this,
                ariaDom = me.ariaEl.dom,
                hadError = me.hasActiveError();

        delete me.hadErrorOnDisable;

        me.unsetActiveError();

        if (hadError) {
            me.setError('');
            me.fireEvent('validitychange', me, false);

            if (!me.ariaStaticRoles[me.ariaRole] && ariaDom) {
                ariaDom.setAttribute('aria-invalid', false);
            }
        }
    }
});