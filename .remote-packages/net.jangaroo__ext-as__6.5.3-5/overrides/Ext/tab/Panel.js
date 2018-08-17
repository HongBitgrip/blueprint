Ext.define('JooOverrides.Ext.tab.Panel', {
  override: 'Ext.tab.Panel',

  // Fixes missing null check
  enable: function () {
    var me = this,
            activeTab = me.activeTab !== null ? (me.activeTab || 0) : null,
            wasDisabled = me.disabled;

    me.callSuper(arguments);

    // Fix here: 'activeTab' was not checked, so 'activeTab.isComponent' could crash.
    if (wasDisabled && activeTab) {
      activeTab = activeTab.isComponent ? activeTab : me.getComponent(activeTab);

      if (activeTab) {
        me.getTabBar().setActiveTab(activeTab.tab);
      }
    }
    return me;
  },

  // allow custom tab bar classes, actual changes to old implementation are marked with comments
  applyTabBar: function (tabBar) {
    var me = this,
            // if we are rendering the tabbar into the panel header, use same alignment
            // as header position, and ignore tabPosition.
            dock = (me.tabBarHeaderPosition != null) ? me.getHeaderPosition() : me.getTabPosition();

    // ############## 1) replaced "new Ext.tab.Bar" with "Ext.create" ##################
    return Ext.create(Ext.apply({
      xclass: "Ext.tab.Bar", // ############## 2) added xclass ##################
      ui: me.ui,
      dock: dock,
      tabRotation: me.getTabRotation(),
      vertical: (dock === 'left' || dock === 'right'),
      plain: me.plain,
      tabStretchMax: me.getTabStretchMax(),
      tabPanel: me
    }, tabBar));
  }
});
