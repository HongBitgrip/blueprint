/**
 * This supports the "is" operator for NodeInterface through duck typing.
 */
Ext.define('JooOverrides.Ext.data.NodeInterface', {
  override: 'Ext.data.NodeInterface',

  statics: {
    __isInstance__: function(object) {
      return object.isNode === true;
    }
  }

});
