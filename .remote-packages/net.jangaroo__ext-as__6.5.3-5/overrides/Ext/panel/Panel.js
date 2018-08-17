/**
 * This adds Ext JS 3.4 Legacy API to <code>Ext.panel.Panel</code>.
 */
Ext.define('JooOverrides.Ext.panel.Panel', {
  override: 'Ext.panel.Panel',

  /**
   * Returns the {@link Ext.toolbar.Toolbar toolbar} from the top section of the panel.
   * @deprecated Use <code>getDockedItems(...)</code>, <code>down(...)</code> or <code>query(...)</code> with selector <code>'toolbar[dock="top"]'</code> instead.
   * @return {Ext.toolbar.Toolbar} The toolbar
   */
  getTopToolbar: function () {
    return this.getDockedItems('toolbar[dock="top"]')[0] || null;
  },

  /**
   * Returns the {@link Ext.toolbar.Toolbar toolbar} from the bottom section of the panel.
   * @deprecated Use <code>getDockedItems(...)</code>, <code>down(...)</code> or <code>query(...)</code> with selector <code>'toolbar[dock="bottom"][ui!="footer"]'</code> instead. Use selector <code>'toolbar[dock="bottom"]'</code> for not filtering out footer toolbars. Adapt <code>ui</code> parameter if your footer UI style has a different name.
   * @return {Ext.toolbar.Toolbar} The toolbar
   */
  getBottomToolbar: function () {
    return this.getDockedItems('toolbar[dock="bottom"][ui!="footer"]')[0] || null;
  },

  /**
   * Returns the {@link Ext.toolbar.Toolbar toolbar} from the footer section of the panel.
   * @deprecated Use <code>getDockedItems(...)</code>, <code>down(...)</code> or <code>query(...)</code> with selector <code>'toolbar[dock="bottom"][ui="footer"]'</code> instead. Adapt <code>ui</code> parameter if your footer UI style has a different name.
   * @return {Ext.toolbar.Toolbar} The toolbar
   */
  getFooterToolbar: function () {
    return this.getDockedItems('toolbar[dock="bottom"][ui="footer"]')[0] || null;
  }
}, function () {
  Ext.Config.get("collapsed"); // declare Panel's collapsed config to avoid warning logged by AS3.js
  Ext.Config.get("closable"); // declare Panel's closable config to avoid warning logged by AS3.js
});
