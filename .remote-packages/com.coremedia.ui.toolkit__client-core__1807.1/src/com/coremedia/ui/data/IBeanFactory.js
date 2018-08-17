Ext.define("com.coremedia.ui.data.IBeanFactory", function(IBeanFactory) {/*package com.coremedia.ui.data {

/**
 * Factory class for local and remote beans.
 *
 * @see Bean
 * @see RemoteBean
 * /
[PublicApi]
public interface IBeanFactory {

  /**
   * Get the RemoteBean for the given path, which is a new proxy for the server-side Bean at the URI
   * <code>coremediaRemoteServiceUri + path</code>.
   * Note that the URI is only requested when a property of the RemoteBean is requested.
   * @param path must be relative to the remote service URI.
   * @return RemoteBean the RemoteBean for the given path.
   *
   * @see coremediaRemoteServiceUri
   * /
  function getRemoteBean(path:String):RemoteBean;

  /**
   * Create a local bean from the given properties object.
   *
   * @param properties a template object for the new bean (may be null).
   * @return a bean with the given properties.
   * /
  function createLocalBean(properties:Object = null):Bean;

  /**
   * Convenience function for creating a number of local beans from an array
   * of template objects.
   *
   * @param objects a non_null array of template objects.
   * @return a non_null array of beans in the same order as the template objects.
   * /
  function createLocalBeans(objects:Array):Array;

  /**
   * Remove the given bean from the bean cache. The caller is sure that the
   * bean is no longer referenced.
   *
   * @param bean the bean to dispose
   * /
  function dispose(bean:RemoteBean):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
