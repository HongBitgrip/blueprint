/**
 * Override to fix componentLayout wrong calculation of height when labelAlign='top'
 *
 * See post forum:
 * {@link https://www.sencha.com/forum/showthread.php?311212-Fieldcontainer-incorrectly-displays-in-toolbar-with-label-aligned-top}
 *
 * Fixed in Ext 6.2.0
 */
Ext.define('JooOverrides.Ext.layout.component.field.FieldContainer', {
  override: 'Ext.layout.component.field.FieldContainer',
  compatibility: [
    '6.0.0',
    '6.0.1',
    '6.0.2'
  ],

  /* Begin Definitions */

  calculateOwnerHeightFromContentHeight: function(ownerContext, contentHeight) {
    var h = this.callSuper([ownerContext, contentHeight]);
    return h + this.getHeightAdjustment();
  },

  calculateOwnerWidthFromContentWidth: function(ownerContext, contentWidth) {
    var w = this.callSuper([ownerContext, contentWidth]);
    return w + this.getWidthAdjustment();
  },

  measureContentHeight: function(ownerContext) {
    // since we are measuring the outer el, we have to wait for whatever is in our
    // container to be flushed to the DOM... especially for things like box layouts
    // that size the innerCt since that is all that will contribute to our size!
    return ownerContext.hasDomProp('containerLayoutDone') ? this.callSuper([ownerContext]) : NaN;
  },

  measureContentWidth: function(ownerContext) {
    // see measureContentHeight
    return ownerContext.hasDomProp('containerLayoutDone') ? this.callSuper([ownerContext]) : NaN;
  },

  publishInnerHeight: function(ownerContext, height) {
    height -= this.getHeightAdjustment();
    ownerContext.containerElContext.setHeight(height);
  },


  publishInnerWidth: function(ownerContext, width) {
    width -= this.getWidthAdjustment();
    ownerContext.containerElContext.setWidth(width);
  },

  privates: {
    getHeightAdjustment: function() {
      var owner = this.owner,
              h = 0;

      if (owner.labelAlign === 'top' && owner.hasVisibleLabel()) {
        h += owner.labelEl.getHeight();
      }

      if (owner.msgTarget === 'under' && owner.hasActiveError()) {
        h += owner.errorWrapEl.getHeight();
      }

      return h + owner.bodyEl.getPadding('tb');
    },

    getWidthAdjustment: function() {
      var owner = this.owner,
              w = 0;

      if (owner.labelAlign !== 'top' && owner.hasVisibleLabel()) {
        w += (owner.labelWidth + (owner.labelPad || 0));
      }

      if (owner.msgTarget === 'side' && owner.hasActiveError()) {
        w += owner.errorWrapEl.getWidth();
      }

      return w + owner.bodyEl.getPadding('lr');
    }
  }
});
