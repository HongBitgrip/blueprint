(function() {
  /**
   * If a mixin is overridden it may happen that classes using the mixin are already initialized.
   * This means that the override is not applied to these classes.
   * Call this method to reapply overridden mixin methods to existing instances of classes using the mixin.
   *
   * @param {Ext.Class} overriddenMixin the overridden mixin class
   * @param {Array<String>} patchedMethods an array containg all method names to patch
   */
  function applyOverriddenMixinMethods(overriddenMixin, patchedMethods) {
    var mixinId =
      overriddenMixin.prototype && overriddenMixin.prototype.mixinId;
    if (!mixinId) {
      throw new Error("Provided class does not override a mixin!");
    }

    // find and patch all classes that already have the mixin we extend:
    Ext.Object.each(Ext.ClassManager["classes"], function(name, cls) {
      var clsProto = cls && cls.prototype;
      if (
        clsProto &&
        clsProto.mixins &&
        clsProto.mixins.hasOwnProperty(mixinId)
      ) {
        patchedMethods.forEach(function(patchedMethod) {
          // Overwrite the original method with our mixin method:
          clsProto[patchedMethod] = overriddenMixin.prototype[patchedMethod];
        });
      }
    });
  }

  Ext.define(
    "com.coremedia.ui.overrides.LabelableOverride",
    {
      override: "Ext.form.Labelable",

      require: [
        "com.coremedia.ui.components.StatefulQuickTip",
        "com.coremedia.ui.mixins.ValidationState"
      ],

      /**
       * Setting the fieldLabel property will cause the label to be visible if the component is already rendered
       * even if "hideLabel" config was set to TRUE.
       * This behavior can lead to timing issues in case the label is set after the component is rendered e.g. by
       * plugins. This fix will cause the hideLabel property to always be taken into account regardless of the
       * rendering state of the component.
       */
      setFieldLabel: function() {
        var me = this,
          hideLabel = me.hideLabel;

        if (me.rendered && me.hideLabel) {
          // multiple layout updates will be triggered, prevent performance loss
          Ext.suspendLayouts();
          try {
            me.callParent(arguments);
            // make sure that the label is hidden again by calling the (private) setter for hideLabel twice
            me.setHideLabel(!hideLabel);
            me.setHideLabel(hideLabel);
          } finally {
            // resume layouts and perform a flush
            Ext.resumeLayouts(true);
          }
        } else {
          me.callParent(arguments);
        }
      },

      statics: {
        initTip: function() {
          var tip = this.tip,
            cfg,
            copy;

          if (tip) {
            return;
          }

          cfg = {
            id: "ext-form-error-tip",
            //<debug>
            // tell the spec runner to ignore this element when checking if the dom is clean
            sticky: true,
            //</debug>
            validationState: com.coremedia.ui.mixins.ValidationState.ERROR
          };

          // On Touch devices, tapping the target shows the qtip
          if (Ext.supports.Touch) {
            cfg.dismissDelay = 0;
            cfg.anchor = "top";
            cfg.showDelay = 0;
            cfg.listeners = {
              beforeshow: function() {
                this.minWidth = Ext.fly(this.anchorTarget).getWidth();
              }
            };
          }
          tip = this.tip = Ext.create(
            "com.coremedia.ui.components.StatefulQuickTip",
            cfg
          );
          copy = Ext.apply({}, tip.tagConfig);
          copy.attribute = "errorqtip";
          tip.setTagConfig(copy);
        }
      }
    },
    function(createdCls) {
      applyOverriddenMixinMethods(createdCls, ["setFieldLabel"]);
    }
  );
})();
