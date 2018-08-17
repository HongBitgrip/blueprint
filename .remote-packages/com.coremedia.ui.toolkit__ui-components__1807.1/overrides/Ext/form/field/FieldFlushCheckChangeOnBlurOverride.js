/**
 * In some cases it is important in which order changes were made (especially if changing a field has a side effect on
 * a different field). This override makes sure that a change event of a field will not occur after a change event of
 * another field when a user performs editing and the configuration checkChangeBuffer is used (e.g. to not trigger too
 * much change events while typing in a textfield). The buffer will now be immediadely flushed when blurring the field.
 */
if (!Ext.ClassManager.isCreated("JooOverrides.Ext.form.field")) {
  Ext.define("JooOverrides.Ext.form.field", {
    override: "Ext.form.field.Base",

    beforeBlur: function () {
      var me = this,
              task = me.checkChangeTask;

      me.callParent(arguments);

      if (task) {
        task.cancel();
        me.checkChange();
      }
    }
  });
}