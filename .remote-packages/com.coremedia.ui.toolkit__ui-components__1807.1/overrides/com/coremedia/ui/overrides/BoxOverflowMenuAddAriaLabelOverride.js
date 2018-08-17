//noinspection JSUnusedGlobalSymbols
Ext.define('com.coremedia.ui.overrides.BoxOverflowMenuAddAriaLabelOverride', {

  override: 'Ext.layout.container.boxOverflow.Menu',

  // We don't define a prefix in menu overflow.
  getSuffixConfig: function() {
    var me = this,
            layout = me.layout,
            owner = layout.owner,
            oid = owner.id;

    /**
     * @private
     * @property {Ext.menu.Menu} menu
     * The expand menu - holds items for every item that cannot be shown
     * because the container is currently not large enough.
     */
    me.menu = new Ext.menu.Menu({
      listeners: {
        scope: me,
        beforeshow: me.beforeMenuShow
      }
    });

    /**
     * @private
     * @property {Ext.button.Button} menuTrigger
     * The expand button which triggers the overflow menu to be shown
     */
    me.menuTrigger = new Ext.button.Button({
      // added ariaLabel
      ariaLabel: mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.UI', 'BoxOverflowButton_aria_label'),
      id: oid + '-menu-trigger',
      cls: me.menuCls + '-after ' + Ext.baseCSSPrefix + 'toolbar-item',
      plain: owner.usePlainButtons,
      ownerCt: owner, // To enable the Menu to ascertain a valid zIndexManager owner in the same tree
      ownerLayout: layout,
      iconCls: Ext.baseCSSPrefix + me.getOwnerType(owner) + '-more-icon',
      ui: owner.defaultButtonUI || 'default',
      menu: me.menu,
      // Menu will be empty when we're showing it because we populate items after
      showEmptyMenu: true,
      getSplitCls: function() { return '';}
    });

    return me.menuTrigger.getRenderTree();
  }

});
