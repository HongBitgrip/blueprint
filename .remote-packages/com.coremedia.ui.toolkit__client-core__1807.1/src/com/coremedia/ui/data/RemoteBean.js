Ext.define("com.coremedia.ui.data.RemoteBean", function(RemoteBean) {/*package com.coremedia.ui.data {
/**
 * A RemoteBean is a Bean that is loaded from and saved to a remote location (via XHR).
 * <p>A RemoteBean has a source URI that refers to its remote location. Since all RemoteBeans are located
 * under a common remote service base URL, the relevant part of the source URI is the <code>uriPath</code>,
 * which is the URI relativized against the remote service base URL.</p>
 * <p>The main difference in behavior between a local Bean and a RemoteBean is that RemoteBeans are loaded
 * asynchronously. All properties of a RemoteBean are <code>undefined</code> on first access, but accessing
 * a property triggers loading the RemoteBean. When data arrives, it is filled into the corresponding properties,
 * triggering property change events. To make sure a RemoteBean has been loaded, use <code>load</code> and access
 * properties in the handed-in callback function.</p>
 * <p>Once a RemoteBean has been loaded, property data is cached. To force reloading, use <code>invalidate()</code>.</p>
 * <p>When properties of a RemoteBean are changed, the update is saved back to the remote location.
 * While this is an asynchronous operation, too, changes are reflected locally immediately. If saving the changes
 * fails, the local values are reset to the current remote state (reloaded).</p>
 * /
[PublicApi]
public interface RemoteBean extends Bean {

  /**
   * Return the URI of this RemoteBean. The URI is used to retrieve the RemoteBean from the server and to send
   * changed properties back to the server.
   * @return String the URI of this RemoteBean.
   * /
  function getUri():String;

  /**
   * Return the service path of this RemoteBean's URI, which is the URI (<code>getUri()</code>) relativized to the
   * remote service URI.
   * The path is usually shorter than the URI but still unique, thus more appropriate to be used as a key.
   * @return String the path of this RemoteBean.
   * /
  function getUriPath():String;

  /**
   * <p>Return the absolute URI of this RemoteBean.</p>
   * <p>Be careful using this URI since it also includes the server name and port
   * which will lead to errors when running behind a proxy!</p>
   *
   * @return String the absolute URI of this RemoteBean
   * /
  function getAbsoluteUri():String;

  /**
   * Loads all properties of this RemoteBean if not already loaded.
   * If the bean was already loaded, the callback is called immediately,
   * or otherwise it is called after the bean has been loaded.
   * If no callback is provided, just make sure that the bean is loaded eventually.
   *
   * @param callback the function to call when all remote properties are locally available.
   *   Method signature: <code>function(bean:RemoteBean):void</code>
   * /
  function load(callback:Function = null):void;

  /**
   * Flushes all properties that have been set before and calls the callback.
   * The error handling in case of an error can be overridden by changing the state of the RemoteError.
   * If no callback is passed, the method just makes sure that previous and upcoming changes are
   * not mixed in a single remote call.
   *
   * @param callback the function to call when all properties have been written to the server.
   *   Method signature: <code>function(result:FlushResult):void</code>
   *
   * @see FlushResult
   * @see RemoteError
   * /
  function flush(callback:Function = null):void;

  /**
   * Return whether this bean is loaded, that is, whether its state and
   * (if state is "readable") properties are available.
   * After a bean has been loaded once, it continues to report true through
   * this method even after it has been invalidated and before it is reloaded.
   *
   * This method does not cause the bean to be loaded.
   * Call <code>load()</code> if necessary.
   * This method registers a dependency with the dependency tracker.
   *
   * @return whether this bean is loaded
   * /
  function isLoaded():Boolean;

  /*
   * Return this RemoteBean's JSON representation, which is
   * <pre>
   * { "$Ref" : "<i>getUri()</i>" }
   * </pre>
   * To get a JSON of the local property values, use <code>ObjectUtils.toJson(bean.toObject())</code>.
   * @return String this RemoteBean's JSON representation.
   *
   * @see #toObject()
   * @see com.coremedia.ui.data.BeanFactory
   * /

  // TODO: Jangaroo compiler and ASDoc do not allow overriding in interfaces!
  // override function toJson():String;


  /**
   * Invalidates the content of this RemoteBean, which leads to a reload of all properties.
   * Like <code>load</code>, the callback function is invoked with this RemoteBean as soon as property
   * data has arrived and has been stored in the corresponding properties.
   *
   * @param callback the function to call when all remote properties have been reloaded.
   *   Method signature: <code>function(result:RemoteBean):void</code>
   *
   * @see #load()
   * @see #getState()
   * /
  function invalidate(callback:Function = null):void;

  /**
   * register for an event before this bean is flushed
   * @param beforeFlush the callback function for the event, receiving a single argument of type BeforeFlushEvent
   * @see BeforeFlushEvent
   * /
  function addBeforeFlushListener(beforeFlush: Function):void;

  /**
   * remove the before flush listener from the list of listeners
   * @param beforeFlush
   * /
  function removeBeforeFlushListener(beforeFlush:Function):void;
}

}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
