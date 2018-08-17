Ext.define("com.coremedia.ui.util.IReusableComponentsService", function(IReusableComponentsService) {/*package com.coremedia.ui.util {
import ext.Component;

/**
 * A service for component reuse. Components are registered and requested via a specific
 * reusability key.
 *
 * /
public interface IReusableComponentsService {
  /**
   * Sets the limit for the amount of reusable components associated with a reusability key
   *
   * @param key the reusability key.
   * @param limit the reusability limit.
   * /
  function setReusabilityLimit(key:String, limit:int):void;

  /**
   * Determines whether reusability is currently enabled for a reusability key.
   *
   * Returns false if no limit or a a limit of 0 is set for this key.
   *
   * @param key the reusability key.
   * @return
   * /
  function isReusabilityEnabled(key:String):Boolean;

  /**
   * Registers a component for reuse under a reusability key. This is only possible
   * if a reusability limit grester then 0 was set previously.
   *
   * @param key the reusability key.
   * @param comp the component to register.
   * @return true if the component could be registered, false otherwise.
   * /
  function registerComponentForReuse(key:String, comp:Component):Boolean;

  /**
   * Request a component for reuse for a specific reusability key.
   *
   * If multiple components for reuse are present, the most eligible one will be determined as follows:
   * (1) Return the component that is currently not used and that has not been used for the longest amount of time,
   * (2) return the component that is currently used and has been used for the longest amount of time.
   * In the second case, the component is removed from its current context.
   *
   * Requesting a component also refreshes it in the context of the reusable components service.
   *
   * @see IReusableComponentsService#reusableComponentActivated()
   *
   * @param key the reusability key.
   * @return a component for reuse if possible, null otherwise.
   * /
  function requestComponentForReuse(key:String):Component;

  /**
   * Checks whether the limit of reusable components for a reusability key is reached.
   *
   * @param key the reusability key.
   * @return true it the limit is reached, false otherwise.
   * /
  function limitForReusableComponentsReached(key:String):Boolean;

  /**
   * Checks whether a component is currently registered for reuse under a reusability key.
   *
   * @param key the reusability key.
   * @param comp the component.
   * @return true if the component is registered, false otherwise.
   * /
  function isReusableComponent(key:String, comp:Component):Boolean;

  /**
   * Removes a component from its current context (parent container) without destroying it.
   *
   * @param comp the componen to remove.
   * @param resetViewModels flag to determine whether the view models of the removed component and all its (recursive) children should be reset.
   * /
  function removeReusableComponentCleanly(comp:Component, resetViewModels:Boolean = false):void;

  /**
   * Activates / refreshes a reusable component explicitly in the context of the reusability serves. It will
   * be flagged as being used recently, which will have an effect on determining the most eligible reused
   * component when one is requested.
   *
   * @see IReusableComponentsService#requestComponentForReuse()
   *
   * @param key
   * @param comp
   * /
  function reusableComponentActivated(key:String, comp:Component):void;

  /**
   * Resets the service completely, destroys all registered components that are currently unused
   * and sets reusability to 0.
   * /
  function reset():void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
