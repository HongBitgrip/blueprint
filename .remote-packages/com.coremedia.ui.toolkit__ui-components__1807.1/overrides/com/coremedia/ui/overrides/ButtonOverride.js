(function () {

  Ext.define("com.coremedia.ui.overrides.ButtonOverride", {
    override: "Ext.button.Button",

    initComponent: function() {
      var me = this;
      me.callParent(arguments);
      me.enableToggle && me.addCls("cm-button-toggle-enabled");
    },

    afterRender: function() {
      var me = this;

      me.callParent(arguments);
      var scaleCls = com.coremedia.ui.util.IconUtils.calculateIconScaleCls(me.iconCls, me.scale);
      scaleCls && me.btnIconEl.addCls(scaleCls);
    },

    setScale: function(scale) {
      var me = this,
              oldScale = me.scale;

      me.callParent(arguments);

      var iconEl = me.btnIconEl;
      if (iconEl && oldScale !== me.scale) {
        var oldScaleCls = com.coremedia.ui.util.IconUtils.calculateIconScaleCls(me.iconCls, oldScale);
        var scaleCls = com.coremedia.ui.util.IconUtils.calculateIconScaleCls(me.iconCls, me.scale);

        oldScaleCls && iconEl.removeCls(oldScaleCls);
        scaleCls && iconEl.addCls(scaleCls);
      }
    },

    setIconCls: function(iconCls) {
      var me = this,
              oldIconCls = me.iconCls;

      me.callParent(arguments);

      var iconEl = me.btnIconEl;
      if (iconEl && oldIconCls !== me.iconCls) {
        var oldScaleCls = com.coremedia.ui.util.IconUtils.calculateIconScaleCls(oldIconCls, me.scale);
        var scaleCls = com.coremedia.ui.util.IconUtils.calculateIconScaleCls(me.iconCls, me.scale);

        oldScaleCls && iconEl.removeCls(oldScaleCls);
        scaleCls && iconEl.addCls(scaleCls);
      }
    },
    uses: ["com.coremedia.ui.util.IconUtils"]
  });
})();
