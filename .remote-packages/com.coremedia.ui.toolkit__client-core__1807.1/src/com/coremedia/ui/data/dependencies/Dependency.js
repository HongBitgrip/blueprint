Ext.define("com.coremedia.ui.data.dependencies.Dependency", function(Dependency) {/*package com.coremedia.ui.data.dependencies {

/**
 * An object representing a certain entity that may change over time.
 * When possible, the entity is uniquely identified by means of a string.
 * /
[PublicApi]
public interface Dependency {
  /**
   * Return a string identifier representing this dependency. If the dependency cannot
   * be identified by an easily constructable string, the value  <code>null</code>
   * may be returned. In that case, the methods <code>addListener</code> and
   * <code>removeListener</code> may be called multiple times.
   *
   * @return a string identifier representing this dependency
   * /
  function getId():String;

  /**
   * Add a listener that is called when this dependency is invalidated.
   * The listener function takes no arguments.
   *
   * @param listener the listener function
   * /
  function addListener(listener:Function):void;

  /**
   * Remove a listener that was previously added to this dependency.
   *
   * @param listener the listener function
   * /
  function removeListener(listener:Function):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
