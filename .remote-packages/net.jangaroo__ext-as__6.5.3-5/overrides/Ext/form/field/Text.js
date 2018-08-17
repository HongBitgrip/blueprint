// TODO: can be removed as soon as EXTJS-15982 is fixed.
Ext.define('JooOverrides.Ext.form.field.Text', {
  override: 'Ext.form.field.Text',

  updateChildElsUICls: function(add) {
    var me = this,
            ui = me.ui,
            state = add ? 'addCls' : 'removeCls',
            elClsMap = {
              'triggerWrap': 'triggerWrapCls',
              'inputWrap': 'inputWrapCls',
              'inputEl': 'inputElCls'
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

  privates: {
    addUIToElement: function() {
      var me = this;
      me.callParent(arguments);
      me.updateChildElsUICls(true);
    },

    removeUIFromElement: function() {
      var me = this;
      me.callParent(arguments);
      me.updateChildElsUICls(false);
    }
  }
});