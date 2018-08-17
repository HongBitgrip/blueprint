/**
 * Fixes two things:
 * - When the title is attached to another container, remove the classes representing the container again that were
 *   introduced with the native onAdded method
 * - When changing the ui if the component, the correct css classes will be applied to the DOM. (applied the same way
 *   as the setUI fix for Buttons was provided by Sencha)
 */
Ext.define('JooOverrides.Ext.panel.Title', {
  override: 'Ext.panel.Title',

  updateChildElsUICls: function (add) {
    var me = this,
            ui = me.ui,
            state = add ? 'addCls' : 'removeCls',
            elClsMap = {
              'textEl': '_textCls',
              'iconEl': '_baseIconCls',
              'iconWrapEl': '_iconWrapCls'
            },
            key, el, mapCls, cls;

    for(key in elClsMap) {
      el = me[key];
      mapCls = elClsMap[key];
      cls = me[mapCls];
      if(el && cls) {
        el[state](cls + '-' + ui);
      }
    }
  },

  onRemoved: function (destroying) {
    var me = this,
        container = me.ownerCt;

    me.callParent([destroying]);

    // makes only sense if the component is not destroyed anyway
    if (!destroying && container) {
      var suffix = me._titleSuffix,
          baseCls = container.baseCls;

      me.removeCls([
        baseCls + suffix,
        baseCls + suffix + '-' + container.ui
      ]);
    }
  },

  privates: {
    addUIToElement: function() {
      var me = this;
      me.callParent(arguments);
      me.updateChildElsUICls(true);
    },

    removeUIFromElement: function() {
      var me = this;
      me.updateChildElsUICls(false);
      me.callParent(arguments);
    }
  }
});
