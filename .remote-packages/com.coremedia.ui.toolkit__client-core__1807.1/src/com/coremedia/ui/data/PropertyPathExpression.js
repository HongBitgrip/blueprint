Ext.define("com.coremedia.ui.data.PropertyPathExpression", function(PropertyPathExpression) {/*package com.coremedia.ui.data {

import com.coremedia.ui.data.error.NotExistsError;
import com.coremedia.ui.data.error.NotReadableError;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.Ext;
import ext.util.Observable;

/**
 * Fires when the value of this property path expression changes.
 * /
[Event(name="propertypathvaluechanged")] // NOSONAR - no type

/**
 * An implementation of ValueExpression that can evaluate a sequence of property names, a so-called
 * property path, starting from a given Bean.
 * Use <code>ValueExpressionFactory.create()</code> for creating property path expressions.
 *
 * @see #PropertyPathExpression
 * @see ValueExpressionFactory#create()
 * /
[PublicApi]
public class PropertyPathExpression extends AbstractValueExpression {

  private static const*/var UNREADABLE$static/*:**/ = 'com.coremedia.ui.data.PropertyPathExpression#UNREADABLE';/* // A value which should not appear on any property path

  private static const*/var CHANGED_EVENT$static/*:String*/ = "propertypathvaluechanged";/*

  private var bean:Object;
  private var propertyPathArcs:Array;
  private var propertyPathBeansWithListener:Array;
  /**
   * The observable at which change listeners are registered.
   * As long as this object is set, the current value
   * of this expression is cached in the field value.
   * /
  private var observable:Observable;

  private var dirty:Boolean = false;
  private var value:*;

  /**
   * flag indicating whether or not #addChangeListener will trigger loading of remote beans
   * /
  private var lazy:Boolean;

  /**
   * Create a new PropertyPathExpression from the given Bean and optional property path.
   * If the property path is empty, the expression always evaluates to the Bean itself.
   * @param bean the Bean starting from which this expression evaluates the property path (Defaults to the <code>applicationContext</code> bean)
   * @param propertyPath the property path that this expression evaluates, starting at its Bean,
   *   either as a dot-separated String ("a.b.c") or as an Array of property names (["a", "b", "c"])
   *   which may contain dots
   *
   * @see com.coremedia.ui.data.#applicationContext
   * /
  public*/ function PropertyPathExpression$(bean/*:Object*/, propertyPath/*:* = ''*/) {this.super$X$MI();if(arguments.length<=1)propertyPath='';
    this.bean$X$MI = bean || com.coremedia.ui.data.applicationContext;
    this.propertyPathArcs$X$MI = propertyPath instanceof Array ? propertyPath.concat() : propertyPath ? String(propertyPath).split('.') : [];
  }/*

  /**
   * The parent value expression which is computed by removing the last property path arc, or null if not applicable.
   * /
  public override*/ function getParent()/*:ValueExpression*/ {
    return this.propertyPathArcs$X$MI.length == 0 ? null : new PropertyPathExpression(this.bean$X$MI, this.propertyPathArcs$X$MI.slice(0, -1));
  }/*

  /**
   * Return the Bean starting from which this expression evaluates the property path.
   * @return Object the Bean starting from which this expression evaluates the property path
   *
   * @see #getPropertyPath
   * @private
   * /
  public*/ function getBean()/*:Object*/ {
    return this.bean$X$MI;
  }/*

  /**
   * Return the property path that this expression evaluates, starting at its Bean.
   * @return String the property path that this expression evaluates, starting at its Bean
   *
   * @see #getBean
   * @private
   * /
  public*/ function getPropertyPath()/*:String*/ {
    return this.propertyPathArcs$X$MI.join(".");
  }/*

  [ArrayElementType("String")]
  /**
   * Return the property path arcs that this expression evaluates, starting at its Bean.
   * @return the property path arcs as an Array of Strings
   *
   * @see #getBean
   * @private
   * /
  public*/ function getPropertyPathArcs()/*:Array*/ {
    return this.propertyPathArcs$X$MI.concat();
  }/*

  /** @private * /
  override protected*/ function doExtendBy(properties/*:Array*/)/*:ValueExpression*/ {
    return new PropertyPathExpression(this.bean$X$MI, this.propertyPathArcs$X$MI.concat(properties));
  }/*

  /**
   * tell the PPE whether or not to trigger loading of remote beans (fixing STUDIO-425)
   * @private
   * /
  public*/ function setLazy(b/*:Boolean = true*/)/*:void*/ {if(arguments.length<=0)b=true;
    this.lazy$X$MI = b;
  }/*

  private*/ function forEachPropertyPathBean(forEachBeanCallback/*:Function = null*/)/*:**/ {if(arguments.length<=0)forEachBeanCallback=null;
    var value/*:**/ = this.bean$X$MI;
    for (var i/*:int*/ = 0; i < this.propertyPathArcs$X$MI.length; ++i) {
      if (value === undefined || value === null) {
        // remaining calls will be executed as soon as the value becomes available!
        return undefined; // STUDIO-625: always use undefined for a not-yet-ready result!
      }
      var property/*:String*/ = String(this.propertyPathArcs$X$MI[i]);
      if (forEachBeanCallback && typeof value === "object") {
        if (forEachBeanCallback(AS3.as(value,  Object), property, i) === false) {
          break;
        }
      }

      if(this.lazy$X$MI &&AS3.is( value,  com.coremedia.ui.data.RemoteBean)){
        var remoteBean/*:RemoteBean*/ =AS3.as( value,  com.coremedia.ui.data.RemoteBean);
        if(!remoteBean.isLoaded()){
          // don't trigger loading of remote bean by retrieving its property value
          // the listener is attached and we'll receive a value if something else triggers loading of the bean
          return undefined;
        }
      }
      value = com.coremedia.ui.util.ObjectUtils.getProperty(value, property);
    }
    return value;
  }/*

  private*/ function maybeInstallListenerChain()/*:void*/ {
    if (!this.observable$X$MI) {
      this.propertyPathBeansWithListener$X$MI = [];
      try {
        this.value$X$MI = this.forEachPropertyPathBean$X$MI(AS3.bind(this,"addPropertyChangeListener$X$MI"));
      } catch(e){if(AS3.is(e,com.coremedia.ui.data.error.NotReadableError)) {
        // Ok, so something is not readable. We still want the listener in case it gets readable later.
        this.value$X$MI = UNREADABLE$static;
      } else if(AS3.is(e,com.coremedia.ui.data.error.NotExistsError)) {
        // TODO: this might not be quite right, I guess. do we need another state?
        this.value$X$MI = undefined;
      } else if(AS3.is(e,AS3.Error)) {
        // this is really bad, but we should consider this as unreadable anyway
        AS3.trace("[ERROR]",e);
        this.value$X$MI = UNREADABLE$static;
      }else throw e;}
      this.observable$X$MI = new Ext.util.Observable();
    }
  }/*

  /**
   * @inheritDoc
   * /
  public override*/ function addChangeListener(propertyPathChangeListener/*:Function*/)/*:void*/ {
    this.maybeInstallListenerChain$X$MI();
    this.observable$X$MI.addListener(CHANGED_EVENT$static, propertyPathChangeListener);
  }/*

  private*/ function addPropertyChangeListener(bean/*:Object*/, property/*:String*/)/*:void*/ {
    this.propertyPathBeansWithListener$X$MI.push(bean);
    PropertyPathExpression.addListener(bean, property,AS3.bind( this,"somePropertyChanged$X$MI"));
  }/*

  private*/ function maybeUninstallListenerChain()/*:void*/ {
    if (this.observable$X$MI && !this.observable$X$MI.hasListener(CHANGED_EVENT$static)) {
      // it was the last listener? Then remove my listener from all Beans:
      //trace("*** property path " + this + ": last change listener removed, detaching.");
      this.removeAllListeners();
      this.observable$X$MI = null;
    }
  }/*

  /** @private * /
  public*/ function removeAllListeners()/*:void*/ {
    for (var i/*:uint*/ = 0; i < this.propertyPathBeansWithListener$X$MI.length; ++i) {
      var bean/*:**/ = this.propertyPathBeansWithListener$X$MI[i];
      var property/*:String*/ = String(this.propertyPathArcs$X$MI[i]);
      PropertyPathExpression.removeListenerIfPossible(bean, property,AS3.bind( this,"somePropertyChanged$X$MI"));
    }
    this.propertyPathBeansWithListener$X$MI = [];
  }/*

  /**
   * @inheritDoc
   * /
  public override*/ function removeChangeListener(propertyPathChangeListener/*:Function*/)/*:void*/ {
    //trace("*** property path " + this + ": removing change listener.");
    if (this.observable$X$MI) {
      this.observable$X$MI.removeListener(CHANGED_EVENT$static, propertyPathChangeListener);
      this.maybeUninstallListenerChain$X$MI();
    }
  }/*

  private*/ function somePropertyChanged(event/*:PropertyChangeEvent*/)/*:void*/ {
    if (!this.observable$X$MI) {
      // CMS-3192: Although property change listeners are already detached, events may still arrive when they are fired
      // in the same loop.
      // There is no need to removeAllListeners() again, and it is HARMFUL to re-attach listeners in this state,
      // so just bail out!
      return;
    }
    this.removeAllListeners();
    // todo write test: changes of several beans on path. as event dispatch is synchronous, that should work even if several readability changes occur
    var oldValue/*:**/ = this.value$X$MI;
    // now, compute value and attach listeners at all Bean properties on the path:
    try {
      this.value$X$MI = this.forEachPropertyPathBean$X$MI(AS3.bind(this,"addPropertyChangeListener$X$MI"));
    } catch(e){if(AS3.is(e,com.coremedia.ui.data.error.NotReadableError)) {
      this.value$X$MI = UNREADABLE$static;
    } else if(AS3.is(e,com.coremedia.ui.data.error.NotExistsError)) {
      // TODO: this might not be quite right, I guess. do we need another state?
      this.value$X$MI = undefined;
    } else if(AS3.is(e,AS3.Error)) {
      AS3.trace("[ERROR]",e);
      this.value$X$MI = UNREADABLE$static;
    }else throw e;}

    //todo is it really necessary to deep compare old and new value? Don't we know whether the change
    // event originated from the last bean/observable in the chain? Shouldn't that be sufficient to know that we have to fire?!
    if (!com.coremedia.ui.util.ObjectUtils.equal(oldValue, this.value$X$MI) || event.oldState !== event.newState) {
      //trace("*** propertyPath " + this + " changed: " + [event.getBean(), event.getProperty(), event.getOldValue(), event.getNewValue(), event.oldState, event.newState].join(" | "));
      if (!this.dirty$X$MI) {
        this.dirty$X$MI = true;
        com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"fireChangedEventEvent$X$MI"));
      }
    }
  }/*

  private*/ function fireChangedEventEvent()/*:void*/ {
    this.dirty$X$MI = false;
    if (this.observable$X$MI) {
      this.observable$X$MI.fireEvent(CHANGED_EVENT$static, this);
    }
  }/*

  private*/ function internalGetValue()/*:**/ {
    if (this.observable$X$MI) {
      return this.value$X$MI;
    } else {
      try {
        return this.forEachPropertyPathBean$X$MI();
      } catch(e){if(AS3.is(e,com.coremedia.ui.data.error.NotReadableError)) {
        return UNREADABLE$static;
      } else if(AS3.is(e,com.coremedia.ui.data.error.NotExistsError)) {
        // TODO: this might not be quite right, I guess. do we need another state?
        return undefined;
      } else {
        // this is really bad, but we should consider this as unreadable anyway
        AS3.trace("[ERROR]",e);
        return UNREADABLE$static;
      }}
    }
  }/*

  /**
   * Add a listener to an object, if the object is a bean or an observable.
   *
   * @param object the object to which to remove the listener
   * @param property the property with which the listener will be registered
   * @param listener the listener
   * @private
   * /
  internal static*/ function addListener$static(object/*:Object*/, property/*:String*/, listener/*:Function*/)/*:void*/ {
    if (AS3.is(object,  com.coremedia.ui.data.Bean)) {
      (AS3.as(object,  com.coremedia.ui.data.Bean)).addPropertyChangeListener(property, listener);
    } else if (AS3.is(object,  Ext.util.Observable)) {
      (AS3.as(object,  Ext.util.Observable)).addListener(property, listener);
    }
  }/*

  /**
   * Remove a listener from an object, if the object is a bean or an observable.
   *
   * @param object the object from which to remove the listener
   * @param property the property on which the listener was registered
   * @param listener the listener
   * @private
   * /
  internal static*/ function removeListenerIfPossible$static(object/*:Object*/, property/*:String*/, listener/*:Function*/)/*:void*/ {
    if (AS3.is(object,  com.coremedia.ui.data.Bean)) {
      (AS3.as(object,  com.coremedia.ui.data.Bean)).removePropertyChangeListener(property, listener);
    } else if (AS3.is(object,  Ext.util.Observable)) {
      (AS3.as(object,  Ext.util.Observable)).removeListener(property, listener);
    }
  }/*

  /** @private * /
  protected override*/ function getValueNoDependencies()/*:**/ {
    var value/*:**/ = this.internalGetValue$X$MI();
    return value !== UNREADABLE$static ? value : undefined;
  }/*

  /** @private * /
  protected override*/ function isReadableNoDependencies()/*:Boolean*/ {
    return this.internalGetValue$X$MI() !== UNREADABLE$static;
  }/*

  /**
   * @inheritDoc
   * /
  public override*/ function setValue(value/*:**/)/*:Boolean*/ {
    var lastIndex/*:int*/ = this.propertyPathArcs$X$MI.length - 1;
    var object/*:**/ = this.forEachPropertyPathBean$X$MI(function(object/*:Object*/, property/*:String*/, index/*:int*/)/*:Boolean*/ {
      if (index < lastIndex) {
        var nextValue/*:**/ = com.coremedia.ui.util.ObjectUtils.getProperty(object, property);
        if (!Ext.isObject(nextValue)) {
          if (AS3.is(object,  com.coremedia.ui.data.Bean)) {
            // A bean might be willing to instantiate subobjects dynamically .
            (AS3.as(object,  com.coremedia.ui.data.Bean)).instantiate(property);
          }
        }
        return true;
      }
      return false;
    });
    var property/*:String*/ = String(this.propertyPathArcs$X$MI[lastIndex]);
    if (typeof object != 'object') {
      throw new AS3.Error("Cannot set property '" + property +
                          "'of non-object value '" + object +
                          "' at path '" + this.propertyPathArcs$X$MI.slice(0, lastIndex).join('.') + "'.");
    }
    return com.coremedia.ui.util.ObjectUtils.setProperty(AS3.as(object,  Object), property, value);
  }/*

  /** @private * /
  protected override*/ function isLoadedNoDependencies()/*:Boolean*/ {
    var result/*:Boolean*/ = true;
    // Check whether all bean are loaded.
    this.forEachPropertyPathBean$X$MI(function(value/*:**/)/*:Boolean*/ {
      if (AS3.is(value,  com.coremedia.ui.data.RemoteBean)) {
        // Only remote beans are checked.
        var remoteBean/*:RemoteBean*/ =AS3.as( value,  com.coremedia.ui.data.RemoteBean);
        if (!remoteBean.isLoaded()) {
          // The bean is not loaded.
          result = false;
          // Stop tracking the property path. The result is known.
          return false;
        }
        if (remoteBean.getState().readable === false) {
          // although the Bean cannot be read or does not exists, the result for isLoaded() is "true" because the state is known!
          result = true;
          return false;
        }
      }
      // Next path element, please.
      return true;
    });
    return result;
  }/*


  /** @private * /
  public*/ function toString()/*:String*/ {
    return (AS3.is(this.bean$X$MI,  com.coremedia.ui.data.RemoteBean) ?
            "GET " + (AS3.as(this.bean$X$MI,  com.coremedia.ui.data.RemoteBean)).getUriPath() + "." :
                    this.bean$X$MI === com.coremedia.ui.data.applicationContext ?
                            "" :
                    this.bean$X$MI.toString() + ".")
            + this.getPropertyPath();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.AbstractValueExpression",
      metadata: {"": [
        "Event",
        [
          "name",
          "propertypathvaluechanged"
        ],
        "PublicApi"
      ]},
      bean$X$MI: null,
      propertyPathArcs$X$MI: null,
      propertyPathBeansWithListener$X$MI: null,
      observable$X$MI: null,
      dirty$X$MI: false,
      value$X$MI: undefined,
      lazy$X$MI: false,
      constructor: PropertyPathExpression$,
      super$X$MI: function() {
        com.coremedia.ui.data.AbstractValueExpression.prototype.constructor.apply(this, arguments);
      },
      getParent: getParent,
      getBean: getBean,
      getPropertyPath: getPropertyPath,
      getPropertyPathArcs: getPropertyPathArcs,
      doExtendBy: doExtendBy,
      setLazy: setLazy,
      forEachPropertyPathBean$X$MI: forEachPropertyPathBean,
      maybeInstallListenerChain$X$MI: maybeInstallListenerChain,
      addChangeListener: addChangeListener,
      addPropertyChangeListener$X$MI: addPropertyChangeListener,
      maybeUninstallListenerChain$X$MI: maybeUninstallListenerChain,
      removeAllListeners: removeAllListeners,
      removeChangeListener: removeChangeListener,
      somePropertyChanged$X$MI: somePropertyChanged,
      fireChangedEventEvent$X$MI: fireChangedEventEvent,
      internalGetValue$X$MI: internalGetValue,
      getValueNoDependencies: getValueNoDependencies,
      isReadableNoDependencies: isReadableNoDependencies,
      setValue: setValue,
      isLoadedNoDependencies: isLoadedNoDependencies,
      toString: toString,
      statics: {
        addListener: addListener$static,
        removeListenerIfPossible: removeListenerIfPossible$static
      },
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext",
        "Ext.util.Observable",
        "com.coremedia.ui.data.AbstractValueExpression"
      ],
      uses: [
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.applicationContext",
        "com.coremedia.ui.data.error.NotExistsError",
        "com.coremedia.ui.data.error.NotReadableError",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
