Ext.define('com.coremedia.ui.theme.form.FieldContainer', {
    override: 'Ext.form.FieldContainer',
    // classic toolkit sets the default padding to 5px. In order for scss variable $form-label-vertical-spacing to take
    // effect, labelPad has to be set to null.
    // As overriding mixins doesn't work properly as it is load order dependend overriding Ext.form.FieldContainer instead.
    labelPad: null
});