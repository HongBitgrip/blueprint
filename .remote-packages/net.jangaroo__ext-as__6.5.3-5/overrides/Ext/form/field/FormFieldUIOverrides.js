/**
 * Contains overrides to fix dynamically switching of the 'ui' properties by overridding the setUI methods of all
 * necessary classes in the hierarchy:
 * - ext.form.Labelable
 * - ext.form.field.Base
 *
 * As Labelable is a mixin, the override had to be done in the class(es) using the mixin, which are
 * - ext.form.field.Base
 * - ext.form.FieldContainer
 *
 * While this fixes the underlying classes, almost every field extending ext.form.field.Base needs an additional fix
 * to set the correct css classes for the DOM it creates. As we currently only have a usage of setUI for display fields,
 * this is the only field that is completely fixed for now. Fixes for other fields should be added here and can be based
 * on the existing fixes for the underlying classes.
 */
(function () {

  var labelableSetUI = function (labelable, oldUi, newUi) {
    if (labelable.rendered && oldUi !== newUi) {
      var labelEl = labelable.labelEl;
      var labelInnerEl = labelEl.select("." + labelable.labelInnerCls);
      var bodyEl = labelable.bodyEl;

      bodyEl.removeCls(labelable.fieldBodyCls + "-" + oldUi);
      bodyEl.removeCls(labelable.baseBodyCls + "-" + oldUi);
      labelInnerEl.removeCls(labelable.labelInnerCls + "-" + oldUi);
      labelEl.removeCls(labelable.labelCls + "-" + oldUi);
      labelable.removeCls(labelable.formItemCls + "-" + oldUi);

      labelable.addCls(labelable.formItemCls + "-" + newUi);
      labelEl.addCls(labelable.labelCls + "-" + newUi);
      labelInnerEl.addCls(labelable.labelInnerCls + "-" + newUi);
      bodyEl.addCls(labelable.baseBodyCls + "-" + newUi);
      bodyEl.addCls(labelable.fieldBodyCls + "-" + newUi);
    }
  };

  Ext.define("JooOverrides.Ext.form.FieldContainer", {
    override: "Ext.form.FieldContainer",

    setUI: function (ui) {
      var me = this,
              oldUi = me.ui;

      me.callParent(arguments);

      // for labelable (we cannot override mixins directly, so the usage needs to handle it
      labelableSetUI(me, oldUi, me.ui);
    }
  });

  Ext.define("JooOverrides.Ext.form.field.Base", {
    override: "Ext.form.field.Base",

    setUI: function (ui) {
      var me = this,
              oldUi = me.ui,
              typeCls = Ext.baseCSSPrefix + 'form-' + (me.isTextInput ? 'text' : me.inputType),
              inputEl = me.inputEl,
              invalidCls = me.invalidCls;

      me.callParent(arguments);

      // for labelable (we cannot override mixins directly, so the usage needs to handle it
      labelableSetUI(me, oldUi, me.ui);

      // for Base
      if (me.rendered && oldUi !== me.ui) {
        if (oldUi) {
          inputEl.removeCls(typeCls + "-" + oldUi);

          if (me.hasActiveError()) {
            inputEl.removeCls(invalidCls + '-' + oldUi);
          }
        }

        if (me.ui) {
          inputEl.addCls(typeCls + "-" + me.ui);

          if (me.hasActiveError()) {
            inputEl.addCls(invalidCls + '-' + me.ui);
          }
        }
      }
    }
  });

  Ext.define("JooOverrides.Ext.form.field.Display", {
    override: "Ext.form.field.Display",

    setUI: function (ui) {
      var me = this,
              oldUi = me.ui;

      me.callParent(arguments);

      if (me.rendered && oldUi !== me.ui) {
        if (oldUi) {
          me.inputEl.removeCls(me.fieldCls + "-" + oldUi);
        }

        if (me.ui) {
          me.inputEl.addCls(me.fieldCls + "-" + me.ui);
        }
      }
    }
  });

})();