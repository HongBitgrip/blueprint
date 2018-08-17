// Automatically show warning and error tooltips on:
// (1) focus
// (2) value change if it causes warnings/errors.

Ext.define("com.coremedia.ui.overrides.AutomaticWarnErrorTooltipOverride", {
  override: "Ext.tip.ToolTip",

  setTarget: function (target) {
    var me = this,
            listeners;

    if (me.targetListeners) {
      me.targetListeners.destroy();
    }

    if (target) {
      me.target = target = Ext.get(target.el || target);
      listeners = {
        mouseover: 'onTargetOver',
        focusmove: 'onTargetFocus',
        mouseout: 'onTargetOut',
        mousemove: 'onMouseMove',
        tap: 'onTargetTap',
        scope: me,
        destroyable: true
      };

      me.targetListeners = target.on(listeners);
    } else {
      me.target = null;
    }
  },

  onTargetFocus: function (event) {
    if (event.target) {
      var targetEl = Ext.get(event.target);
      if (targetEl) {

        var targetCmp;

        // Search for parent element that is associated with a component.
        while (targetEl && !targetCmp) {
          targetCmp = targetEl.component;
          targetEl = targetEl.up();
        }

        // We exclusively deal with validation via the com.coremedia.ui.mixins.ValidationStateMixin
        if (targetCmp && AS3.is(targetCmp, com.coremedia.ui.mixins.ValidationStateMixin)) {

          // Store XY as they need to be reset later on because the event is processed multiple times
          // --> Maybe better clone the event object? Afraid thats not possible in general because of reference cycles.
          var eventX = Ext.get(event.target).getBox().x - 10;
          var eventY = Ext.get(event.target).getBox().y + Ext.get(event.target).getBox().height - 10;

          // Show warnings and errors initially
          this.showErrorWarnTooltip(targetCmp, event, eventX, eventY);

          // Now we listen for events of the com.coremedia.ui.mixins.ValidationStateMixin to also show warnings and errors
          targetCmp.on("validationStateChanged", this.showErrorWarnTooltip, this, {args: [targetCmp, event, eventX, eventY]});
          targetCmp.on("validationMessageChanged", this.showErrorWarnTooltip, this, {args: [targetCmp, event, eventX, eventY]});

          // On blur, remove the listeners and hide tooltip
          targetCmp.on("blur", function () {
            targetCmp.un("validationStateChanged", this.showErrorWarnTooltip, this, {args: [targetCmp, event, eventX, eventY]});
            targetCmp.un("validationMessageChanged", this.showErrorWarnTooltip, this, {args: [targetCmp, event, eventX, eventY]});

            this.hideTooltipForComponent(targetCmp);
          }, this, {single: true})
        }
      }
    }
  },

  showErrorWarnTooltip: function (targetCmp, event, eventX, eventY) {

    // We use the 'focus' event for the onTargetOver() method.
    // This is of course not totally great.
    // We need to manipulate it a bit to show the tooltip in the right position.
    event.point = null;
    event.pageX = eventX;
    event.pageY = eventY;

    var validationState = targetCmp.getValidationState();

    if (validationState === com.coremedia.ui.mixins.ValidationState.WARNING
            || validationState === com.coremedia.ui.mixins.ValidationState.ERROR) {

      // If warnings or errors --> show tooltip via the onTargetOver() method.
      this.onTargetOver(event);
    } else {
      // Otherwise, hide the tooltip.
      this.hideTooltipForComponent(targetCmp)
    }
  },

  hideTooltipForComponent: function (cmp) {
    // Hide the active tooltip iff it was triggered by the given component.

    var activeFloating = Ext.WindowManager.getActive();
    if (activeFloating
            && AS3.is(activeFloating, Ext.tip.ToolTip)
            && activeFloating.triggerElement
            && Ext.get(activeFloating.triggerElement).component === cmp) {
      activeFloating.hide();
    }
  }
});