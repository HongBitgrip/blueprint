Ext.define("com.coremedia.ui.util.createComponentSelector", function(createComponentSelector) {/*package com.coremedia.ui.util {

/**
 * Convenience factory function to create an <code>IComponentSelector</code> instance
 * which is used as a selector for the <code>ext.ComponentQuery</code> in Ext JS 6.
 *
 * @see ext.ComponentQuery
 * @see com.coremedia.ui.util.IComponentSelector
 * /
[PublicApi]
public*/ function createComponentSelector()/*:IComponentSelector*/ {
  return new com.coremedia.ui.util.ComponentSelector();
}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      __factory__: function() {
        return createComponentSelector;
      },
      requires: ["com.coremedia.ui.util.ComponentSelector"]
    };
});
