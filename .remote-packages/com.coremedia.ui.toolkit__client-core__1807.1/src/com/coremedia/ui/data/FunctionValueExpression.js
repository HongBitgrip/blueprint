Ext.define("com.coremedia.ui.data.FunctionValueExpression", function(FunctionValueExpression) {/*package com.coremedia.ui.data {

import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.error.NotExistsError;
import com.coremedia.ui.data.error.NotReadableError;
import com.coremedia.ui.util.ErrorUtil;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.util.Observable;

/**
 * A function value expression determines its value by executing a given function.
 * Arguments may be passed to the function. While no listener is attached
 * to this function, the value is freshly computed whenever the expression is accessed.
 * While a listener is attached to this expression, the current value is cached
 * and listeners are attached to all objects on which the value computation depends.
 * If one of those objects fires an event,, the cache value is discarded. Furthermore,
 * a change event for the function value expression is eventually sent if the expression
 * value turns out to have changed.
 *
 * @see DependencyTracker
 * /
public class FunctionValueExpression extends AbstractValueExpression {
  /**
   * The name of the change event under which listeners are
   * registered at the internal observable.
   * /
  private static const*/var CHANGED_EVENT$static/*:String*/ = "changed";/*
  /**
   * A special object that, if stored as the current value, indicates that the value
   * is known to be unreadable.
   * /
  private static const*/var UNREADABLE$static/*:Object*/;/* =*/function UNREADABLE$static_(){UNREADABLE$static=( {});};/*

  /**
   * The function to execute.
   * /
  private var fun:Function;
  /**
   * The argument to pass to the function.
   * /
  private var args:Array;

  /**
   * An object for storing change listeners on this expression.
   * If no listeners are currently registered, this field is null.
   * /
  private var observable:Observable;
  /**
   * The current value of this value expression.
   * If no listeners are currently registered, this field is undefined.
   * /
  private var value:*;
  /**
   * A dependency tracker that manages the dependencies of the currently computed values.
   * It is stored so that the listener registrations that it made can be removed when the
   * last listener of this expression is removed.
   * /
  private var dependencyTracker:DependencyTracker;
  /**
   * True, if the currently stored value might be outdated. This flag is set when the tracker
   * receives a relevant event. It is cleared when the value is recomputed.
   *
   * @see #value
   * /
  private var valueDirty:Boolean;
  /**
   * True, if the value has changed since the last event was sent.
   * This flag is set whenever the cached value is recomputed and
   * is observed to have changed. This makes sure that a change event
   * is sent even if the value is recomputed between the change of one of
   * the tracked objects and the time of the schedule asynchronous
   * recomputation.
   * /
  private var valueChanged:Boolean;
  /**
   * True, if an asynchronous recomputation of the cached value has been
   * triggered, but not performed yet. In this case, no new asynchronous
   * recomputations should be triggered. This helps to recompute
   * the value only once after many tracked objects have changed.
   * /
  private var willCheckValueChanged:Boolean;

  /**
   * Create a new function value expression computed by invoking the given function
   * with the given arguments.
   *
   * @param fun the function
   * @param args the arguments
   * /
  public*/ function FunctionValueExpression$(fun/*:Function*/, args/*:Array = null*/) {this.super$nJmn();if(arguments.length<=1)args=null;
    this.fun$nJmn = fun;
    this.args$nJmn = args || [];
  }/*

  /**
   * Compute the current value of this expression without looking at the cached value.
   * Return the UNREADABLE object if a NotReadableError is thrown.
   *
   * @return the current value
   *
   * @see NotReadableError
   * @see #UNREADABLE
   * /
  private*/ function compute()/*:**/ {
    try {
      // Jangaroo knows the correct 'this' for methods.
      // Inline functions are simply called without specifying a 'this'.
      var result/*:**/ = this.fun$nJmn.apply(null, this.args$nJmn);
      // The function may return a value holder.
      // If it does so, the actual value must be retrieved from the value holder.
      if(AS3.is(result,  com.coremedia.ui.data.ValueHolder)) {
        result = AS3.cast(com.coremedia.ui.data.ValueHolder,result).getValue();
      }
      return result;
    } catch(e){if(AS3.is (e,com.coremedia.ui.data.error.NotReadableError)) {
      // An unreadable value is indicated by a special object.
      AS3.trace("[WARN]", e);
      return UNREADABLE$static;
    } else if(AS3.is (e,com.coremedia.ui.data.error.NotExistsError)) {
      // TODO: this might not be quite right, I guess. do we need another state?
      return undefined;
    } else {
      // This is really bad, but we should consider this as unreadable anyway
      AS3.trace("[ERROR]", com.coremedia.ui.util.ErrorUtil.errorToMessage(e));
      return UNREADABLE$static;
    }}
  }/*

  /** @private * /
  protected override*/ function doExtendBy(properties/*:Array*/)/*:ValueExpression*/ {var this$=this;
    var beanPropertyPath/*:Array*/ = properties.slice(0, -1);
    var lastProperty/*:**/ = properties[properties.length - 1];
    return new FunctionValueExpression(function()/*:ValueHolder*/ {
      var value/*:**/ = this$.getValue();
      if (value === undefined) {
        return undefined;
      }
      var bean/*:Object*/;
      if (beanPropertyPath.length === 0) {
        bean = value;
      } else {
        bean = new com.coremedia.ui.data.PropertyPathExpression(value, beanPropertyPath).getValue();
      }
      if (bean === undefined || bean == null) {
        return undefined;
      }
      return new com.coremedia.ui.data.BeanPropertyValueHolder(bean, lastProperty);
    });
  }/*

  public override*/ function getParent()/*:ValueExpression*/ {
    // Function value expression do not have a parent.
    return null;
  }/*

  public override*/ function addChangeListener(valueChangeListener/*:Function*/)/*:void*/ {
    // If no listeners have been registered so far, ...
    if (!this.observable$nJmn) {
      // ... we must set up the observable to keep track of the listeners ...
      this.observable$nJmn = new Ext.util.Observable();
      // ... and we must compute the initial value so that we only send events
      // if the value changes from now on.
      this.computeAndTrack$nJmn();
      // We have just computed the initial value. Only report change events
      // if the value changes again.
      this.valueChanged$nJmn = false;
    }
    // Always keep track of the listener.
    this.observable$nJmn.addListener(CHANGED_EVENT$static, valueChangeListener);
  }/*

  /**
   * A function to be called if one of the dependencies of this value expression has been invalidated.
   * /
  private*/ function invalidated()/*:void*/ {
    // The dependency tracker has fired. It can be discarded.
    this.dependencyTracker$nJmn = null;
    // The cached value might no longer be up to date.
    this.valueDirty$nJmn = true;
    // If we have not already requested a recomputation of the cached value, ...
    if (!this.willCheckValueChanged$nJmn) {
      // .. we do so now.
      this.willCheckValueChanged$nJmn = true;
      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"checkValueChanged$nJmn"));
    }
  }/*

  /**
   * Recompute the cached value and send a change event if the value has
   * changed since the last change event or the registration of the first listener.
   * /
  private*/ function checkValueChanged()/*:void*/ {
    // Update the cached value, possible setting the valueChanged flag.
    this.updateValue$nJmn();

    // We have checked for a value change now. All invalidations that happen
    // after this point will trigger a new asynchronous check. Invalidations that
    // happened during updateValue() have already triggered a synchronous
    // recomputation.
    this.willCheckValueChanged$nJmn = false;

    // If the value has changed, ...
    if (this.valueChanged$nJmn) {
      // ... we sent one event, but we clear the flag indicating a changed value first.
      // The listeners might make changes that result in further changes, so that
      // clearing the flag after the call to the listeners would be too late, losing events.
      this.valueChanged$nJmn = false;
      if (this.observable$nJmn) {
        this.observable$nJmn.fireEvent(/*FunctionValueExpression.*/CHANGED_EVENT$static, this);
      }
    }
  }/*

  /**
   * Make sure the cache value is up to date. Only trigger a recomputation,
   * if the current value is marked as dirty.
   * /
  private*/ function updateValue()/*:void*/ {
    if (this.valueDirty$nJmn) {
      this.computeAndTrack$nJmn();
    }
  }/*

  /**
   * Compute and store the current value, removing the dirty mark (if any)
   * on this expression. If the value has changed from the currently stored value,
   * raise the valueChanged flag.
   * This method must be called when no dependency tracker is registered,
   * either during initialization of the cached value or after an invalidation was
   * reported.
   * /
  private*/ function computeAndTrack()/*:void*/ {
    // After this method is left, the value will not be dirty.
    this.valueDirty$nJmn = false;
    // Remember the old value.
    var oldValue/*:**/ = this.value$nJmn;
    // It is allowed (although unusual) for the function to cause invalidations.
    // Try a few times to reach a fix point.
    for (var i/*:uint*/ = 0; i < 100; i++) {
      // There is no current tracker. Create and activate a new tracker
      // for the upcoming computation.
      this.dependencyTracker$nJmn = new com.coremedia.ui.data.dependencies.DependencyTracker(AS3.bind(this,"invalidated$nJmn"));
      // Make sure to stop dependency tracking even in the case of an internal exception.
      try {
        this.value$nJmn = this.compute$nJmn();
      } finally {
        this.dependencyTracker$nJmn.stop();
      }

      // If the tracker has been invalidated, ...
      if (this.dependencyTracker$nJmn.isInvalidated()) {
        // .. forget about it, ...
        this.dependencyTracker$nJmn = null;
      } else {
        // ... but otherwise the value is final and we can determine whether it has changed.
        if (!com.coremedia.ui.util.ObjectUtils.equal(oldValue, this.value$nJmn)) {
          this.valueChanged$nJmn = true;
        }
        // The dependency tracker lives on and will report invalidations to its callback method.
        return;
      }
      // The previous evaluation resulted in an invalidation before the function returned.
    }
    // Give up.
    this.value$nJmn = UNREADABLE$static;
    if (oldValue !== UNREADABLE$static) {
      this.valueChanged$nJmn = true;
    }
    throw new AS3.Error("function value expression keeps invalidating itself: " + this.fun$nJmn + "(" + this.args$nJmn + ")");
  }/*

  public override*/ function removeChangeListener(valueChangeListener/*:Function*/)/*:void*/ {
    // If there are any registered listener, ...
    if (this.observable$nJmn) {
      // .. remove the given listener.
      this.observable$nJmn.removeListener(CHANGED_EVENT$static, valueChangeListener);
      // If the listener was the last listener, ...
      if (!this.observable$nJmn.hasListener(CHANGED_EVENT$static)) {
        // Make sure that no listeners of tracked objects
        // point to the dependency tracker and thus to this object.
        // If they did, it would lead to a memory leak.
        if (this.dependencyTracker$nJmn) {
          this.dependencyTracker$nJmn.discard();
          this.dependencyTracker$nJmn = null;
        }
        // The value won't be accessed any longer. Conserve space.
        this.value$nJmn = undefined;
        // An invalidation might already be scheduled. By removing the dirty flag, we can ensure that the value is not accidentally recomputed.
        this.valueDirty$nJmn = false;
        // The observable contains no more listeners. Conserve space.
        this.observable$nJmn = null;
      }
    }
  }/*

  /**
   * Update the cached value and return it.
   *
   * @return the current value
   * /
  private*/ function getUpdatedValue()/*:**/ {
    this.updateValue$nJmn();
    return this.value$nJmn;
  }/*

  /** @private * /
  protected override*/ function getValueNoDependencies()/*:**/ {
    // Depending on whether listeners are registered, retrieve the cache value or compute the current value.
    var result/*:**/ = this.observable$nJmn ? this.getUpdatedValue$nJmn() : this.compute$nJmn();
    // Hide the marker object for unreadable values.
    return result === UNREADABLE$static ? undefined : result;
  }/*

  /** @private * /
  protected override*/ function isReadableNoDependencies()/*:Boolean*/ {
    // Depending on whether listeners are registered, retrieve the cache value or compute the current value.
    var result/*:**/ = this.observable$nJmn ? this.getUpdatedValue$nJmn() : this.compute$nJmn();
    // Determine whether the value is unreadable.
    return result !== UNREADABLE$static;
  }/*

  public override*/ function setValue(value/*:**/)/*:Boolean*/ {
    // Always execute the function. Never rely on a cached value.
    // Setting a value is simply too critical an operation.
    // When calling the function Jangaroo knows the correct 'this' for methods.
    var valueHolder/*:ValueHolder*/ =AS3.as( this.fun$nJmn.apply(null, this.args$nJmn),  com.coremedia.ui.data.ValueHolder);
    // We can only set the value if a value holder was returned.
    if (!valueHolder) {
      throw new AS3.Error("FunctionValueExpression is not settable");
    }
    return valueHolder.setValue(value);
  }/*

  /** @private * /
  protected override*/ function isLoadedNoDependencies()/*:Boolean*/ {
    // We always treat undefined as not loaded. This is the general convention and
    // we do not have the option to treat bean accesses specially.
    return this.getValueNoDependencies() !== undefined;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.AbstractValueExpression",
      fun$nJmn: null,
      args$nJmn: null,
      observable$nJmn: null,
      value$nJmn: undefined,
      dependencyTracker$nJmn: null,
      valueDirty$nJmn: false,
      valueChanged$nJmn: false,
      willCheckValueChanged$nJmn: false,
      constructor: FunctionValueExpression$,
      super$nJmn: function() {
        com.coremedia.ui.data.AbstractValueExpression.prototype.constructor.apply(this, arguments);
      },
      compute$nJmn: compute,
      doExtendBy: doExtendBy,
      getParent: getParent,
      addChangeListener: addChangeListener,
      invalidated$nJmn: invalidated,
      checkValueChanged$nJmn: checkValueChanged,
      updateValue$nJmn: updateValue,
      computeAndTrack$nJmn: computeAndTrack,
      removeChangeListener: removeChangeListener,
      getUpdatedValue$nJmn: getUpdatedValue,
      getValueNoDependencies: getValueNoDependencies,
      isReadableNoDependencies: isReadableNoDependencies,
      setValue: setValue,
      isLoadedNoDependencies: isLoadedNoDependencies,
      statics: {
        UNREADABLE: undefined,
        __initStatics__: function() {
          UNREADABLE$static_();
        }
      },
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext.util.Observable",
        "com.coremedia.ui.data.AbstractValueExpression"
      ],
      uses: [
        "com.coremedia.ui.data.BeanPropertyValueHolder",
        "com.coremedia.ui.data.PropertyPathExpression",
        "com.coremedia.ui.data.ValueHolder",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.error.NotExistsError",
        "com.coremedia.ui.data.error.NotReadableError",
        "com.coremedia.ui.util.ErrorUtil",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
