Ext.define("com.coremedia.ui.data.dependencies.DependencyTracker", function(DependencyTracker) {/*package com.coremedia.ui.data.dependencies {

import ext.Component;
import ext.form.field.BaseField;
import ext.mixin.IObservable;

/**
 * An object that tracks dependencies on mutable object that are accessed between its
 * creation and the call of its <code>stop()</code> method. In most cases, you do not
 * have to construct a dependency tracker yourself, but you delegate the handling of dependencies
 * to a value expression created through <code>ValueExpressionFactory.createFromFunction</code>.
 * <p>The static functions of this class may be used to register dependencies
 * for the currently running tracker, if any.
 * </p>
 * /
[PublicApi]
public class DependencyTracker {
  /**
   * A global stack of trackers.
   * The last tracker in this array is the tracker currently receiving dependencies.
   * By providing a stack of trackers, we can support dependencies on objects
   * that are themselves tracking dependencies when accessed.
   * /
  private static*/ var trackers$static/*:Array*/;/* =*/function trackers$static_(){trackers$static=( []);};/*

  /**
   * A map from dependency id to dependency object for all dependencies
   * detected by this tracker so far. Providing a map makes it easy to determine
   * whether a dependency has already been registered, avoiding repeated
   * registration of listeners.
   * Once one dependency is invalidated, this object discarded.
   *
   * @see Dependency#getId
   * /
  private var dependencies:Object =*/function dependencies_(){this.dependencies$YrTe=( {});}/*;
  /**
   * A list of dependencies that do not provide ids. This array is traversed when
   * unregistered listeners.
   * /
  private var unkeyedDependencies:Array =*/function unkeyedDependencies_(){this.unkeyedDependencies$YrTe=( []);}/*;
  /**
   * The function to be called when a dependency registered with this tracker is invalidated.
   * As soon as the callback is invoked once, this field is cleared.
   * /
  private var callback:Function;
  /**
   * Whether this tracker has been stopped.
   *
   * @see #stop
   * /
  private var isStopped:Boolean = false;

  /**
   * Create a new dependency tracker and start collecting dependencies.
   * In a try-block after the call to this constructor, read operations should be performed.
   * In a closing finally block, the <code>stop()</code> method of the created
   * tracker should be called.
   * <p>The argument callback is called once after the first dependency has been
   * invalidated. The callback function takes no arguments.
   * If a dependency is invalidated while tracking is still in progress,
   * the callback is <b>not</b> invoked. You should check the method
   * <code>isInvalidated()</code> immediately after calling <code>stop()</code>
   * to detect this condition. This may help to avoid infinite loops.
   * </p>
   * <p>
   * If another tracker is active at the time of calling this constructor, it is suspended
   * until the <code>stop()</code> function is called on the created tracker.
   * </p>
   *
   * @param callback the method to be called when a dependency is invalidated after the tracker is stopped
   * /
  public*/ function DependencyTracker$(callback/*:Function*/) {dependencies_.call(this);unkeyedDependencies_.call(this);
    this.callback$YrTe = callback;
    trackers$static.push(this);
  }/*

  /**
   * Stop tracking dependencies. Dependencies registered after a call to this method
   * can no longer cause the callback function of this tracker to fire. If another dependency
   * tracker had been active before this tracker was created, that tracker will again start
   * to track dependencies. If a registered dependency is invalidated after this method returns,
   * the callback function is invoked.
   * /
  public*/ function stop()/*:void*/ {
    var object/*:Object*/ = trackers$static.pop();
    if (object !== this) {
      trackers$static = [];
      throw new AS3.Error("creations and stop() calls on trackers do not match");
    }
    this.isStopped$YrTe = true;
  }/*

  /**
   * Return true, if a dependency tracker is currently collecting dependencies.
   * You may call this method before registering a dependency, if the construction
   * of the dependency object would be expensive.
   *
   * @return true, if a dependency tracker is currently active
   * /
  public static*/ function isTracking$static()/*:Boolean*/ {
    return trackers$static.length > 0;
  }/*

  /**
   * Register a dependency for the current tracker. If no tracker is active, this call is ignored.
   *
   * @param dependency the dependency to register
   * /
  public static*/ function dependOn$static(dependency/*:Dependency*/)/*:void*/ {
    // If at least one tracker is active, ...
    if (trackers$static.length > 0) {
      // ... forward the dependency to the tracker that was created last.
      var tracker/*:DependencyTracker*/ = trackers$static[trackers$static.length - 1];
      tracker.addDependency$YrTe(dependency);
    }
  }/*

  /**
   * Register a dependency on an observable object with a given event name.
   * The currently active tracker, if any, will report an invalidation of dependencies
   * as soon as the given observable fires an event with the given name.
   *
   * @param observable the observable
   * @param eventName the name of the event to listen to
   * /
  public static*/ function dependOnObservable$static(observable/*:IObservable*/, eventName/*:String*/)/*:void*/ {
    var component/*:Component*/ =AS3.as( observable,  Ext.Component);
    if (component) {
      // If possible, use a component dependency, because a component can provide a unique key, ...
      DependencyTracker.dependOn(new com.coremedia.ui.data.dependencies.ComponentDependency(component,  eventName));
    } else {
      // ... but if that is not possible, a very simple dependency will also do the trick.
      DependencyTracker.dependOn(new com.coremedia.ui.data.dependencies.ObservableDependency(observable,  eventName));
    }
  }/*

  /**
   * Register a dependency on the value stored in the given input field.
   * This is a convenience function for the common case of depending on
   * user-provided values. The event name used for listening is
   * 'change' as specified for input fields.
   *
   * @param field the field
   * /
  public static*/ function dependOnFieldValue$static(field/*:BaseField*/)/*:void*/ {
    DependencyTracker.dependOn(new com.coremedia.ui.data.dependencies.ComponentDependency(field, "change"));
  }/*

  /**
   * Add the given dependency to this tracker, if it has not been registered already..
   *
   * @param dependency the dependency
   * /
  private*/ function addDependency(dependency/*:Dependency*/)/*:void*/ {
    // Only add dependencies while the tracker has not been invalidated.
    // Invalidation should not happen while adding dependencies, but we must
    // expect everything from customer code.
    if (this.callback$YrTe) {
      var key/*:String*/ = dependency.getId();
      if (key) {
        // The dependency provides a key. Only add a listener if that has not already been done.
        if (!this.dependencies$YrTe[key]) {
          this.dependencies$YrTe[key] = dependency;
          dependency.addListener(AS3.bind(this,"invalidate$YrTe"));
        }
      } else {
        // Without an id, we must always register a listener and
        // make sure to keep track of the dependency for later removal.
        this.unkeyedDependencies$YrTe.push(dependency);
        dependency.addListener(AS3.bind(this,"invalidate$YrTe"));
      }
    }
  }/*

  /**
   * Invalidate this tracker. Called as an event listener from dependencies.
   * /
  private*/ function invalidate()/*:void*/ {
    var theCallback/*:Function*/ = this.callback$YrTe;
    // Unless this dependency has been invalidated before, ...
    if (theCallback) {
      // ... make sure that all listeners on tracked objects are removed and ...
      this.discard();
      // ... inform the callback that was saved before discarding this object, ...
      if (this.isStopped$YrTe) {
        // ... but only if we have stopped tracking.
        theCallback();
      }
    }
  }/*

  /**
   * Return true if at least one of the dependencies registered with this tracker
   * has been invalidated.
   *
   * @return true if at least one dependency has been invalidated
   * /
  public*/ function isInvalidated()/*:Boolean*/ {
    return this.callback$YrTe === null;
  }/*

  /**
   * Discard this tracker, removing listeners from all dependencies.
   * A listener is automatically discarded when it is invalidated.
   * It is safe to discard a dependency tracker multiple times.
   * /
  public*/ function discard()/*:void*/ {
    if (this.callback$YrTe) {
      // Remove all listeners from the dependency and fire this dependency's listener.
      for(var key/*:String*/ in this.dependencies$YrTe){
        var dependency/*:Dependency*/ = this.dependencies$YrTe[key];
        try {
          dependency.removeListener(AS3.bind(this,"invalidate$YrTe"));
        } catch (e/*:**/) {
          AS3.trace("[ERROR]","DependencyTracker: Could not remove dependency " + key + "; reason: " + e +
                  "; skipping, might leak listeners");
        }
      }
      for (var i/*:uint*/ =0; i < this.unkeyedDependencies$YrTe.length; i++) {
        var unkeyedDependency/*:Dependency*/ = this.unkeyedDependencies$YrTe[i];
        try {
          unkeyedDependency.removeListener(AS3.bind(this,"invalidate$YrTe"));
        } catch(e){if(AS3.is (e,AS3.Error)) {
          AS3.trace("[ERROR]","DependencyTracker: Could not remove unkeyed dependency " + unkeyedDependency +
                  "; reason: " + e + "; skipping, might leak listeners");
        }else throw e;}
      }
      // Just in case, make this now useless object lightweight.
      this.dependencies$YrTe = null;
      this.unkeyedDependencies$YrTe = null;
      // Set the callback to null so that it cannot be called again.
      this.callback$YrTe = null;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      callback$YrTe: null,
      isStopped$YrTe: false,
      constructor: DependencyTracker$,
      stop: stop,
      addDependency$YrTe: addDependency,
      invalidate$YrTe: invalidate,
      isInvalidated: isInvalidated,
      discard: discard,
      statics: {
        trackers: undefined,
        isTracking: isTracking$static,
        dependOn: dependOn$static,
        dependOnObservable: dependOnObservable$static,
        dependOnFieldValue: dependOnFieldValue$static,
        __initStatics__: function() {
          trackers$static_();
        }
      },
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext.Component"
      ],
      uses: [
        "com.coremedia.ui.data.dependencies.ComponentDependency",
        "com.coremedia.ui.data.dependencies.ObservableDependency"
      ]
    };
});
