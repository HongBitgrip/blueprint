/**
 * MessageBox adjustments
 *
 * - align the footer toolbar to the right
 * - mark all "yes" and "ok" buttons as primary buttons
 * - mark all other buttons as secondary buttons
 */
Ext.define('com.coremedia.ui.overrides.MessageBoxOverride', {
  override: 'Ext.window.MessageBox',

  initComponent: function () {
    this.callParent(arguments);

    var fbar = this.query("> toolbar[dock='bottom']")[0];

    fbar &&  fbar.layout && fbar.layout.setPack("end");
  },

  makeButton: function (btnIdx) {
    var btn = this.callParent(arguments);

    if (btn) {
      if (["ok", "yes"].indexOf(this.buttonIds[btnIdx]) > -1) {
        btn.setUI(com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
      } else {
        btn.setUI(com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
      }
    }

    return btn;
  },

  uses: [
    "com.coremedia.ui.skins.ButtonSkin"
  ]

});
