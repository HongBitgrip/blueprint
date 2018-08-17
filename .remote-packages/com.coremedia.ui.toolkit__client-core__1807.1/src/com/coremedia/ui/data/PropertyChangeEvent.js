Ext.define("com.coremedia.ui.data.PropertyChangeEvent", function(PropertyChangeEvent) {/*package com.coremedia.ui.data {

/**
 * An event fired when a property of a Bean changes.
 * @see com.coremedia.ui.data.Bean
 * @see com.coremedia.ui.data.Bean#set()
 * /
[PublicApi]
public interface PropertyChangeEvent {
  /**
   * Return the Bean whose property or state has been changed.
   * @return the Bean whose property or state has been changed
   * /
  function get bean():Object;

  /**
   * Return the name of the property that has been changed.
   * @return the name of the property that has been changed
   * /
  function get property():String;

  /**
   * Return the old value of the property that has been changed.
   * @return the old value of the property that has been changed
   * /
  function get oldValue():*;

  /**
   * Return the new value of the property that has been changed.
   * @return the new value of the property that has been changed
   * /
  function get newValue():*;

  /**
   * The old state of the Bean that has been changed.
   * /
  function get oldState():BeanState;

  /**
   * The new state of the Bean that has been changed.
   * /
  function get newState():BeanState;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
