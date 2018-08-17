Ext.define("com.coremedia.ui.data.util.PropertyChangeEventUtil", function(PropertyChangeEventUtil) {/*package com.coremedia.ui.data.util {

import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.impl.PropertyChangeEventImpl;

import ext.mixin.IObservable;

/**
 * Helper class with static functions to fire and create PropertyChangePlugins for Observables.
 * /
[PublicApi]
public class PropertyChangeEventUtil {

  /**
   * Helper method to create and fire a PropertyChangeEvent on an Observable object.
   * The PropertyChangeEvent is only constructed if there are any listeners
   * for the given Observable and property.
   *
   * @param bean      the Observable that is to fire the new PropertyChangeEvent
   * @param property  property of the new PropertyChangeEvent
   * @param oldValue  old value of the new PropertyChangeEvent
   * @param newValue  new value of the new PropertyChangeEvent
   * @param oldState  old state of the new PropertyChangeEvent
   * @param newState  new state of the new PropertyChangeEvent
   *
   * @return  the result of Observable#fireEvent() or <code>true</code> if there is no listener for
   *          the given property.
   *
   * @see Observable#fireEvent()
   * /
  public static*/ function fireEvent$static(bean/*:IObservable*/, property/*:String*/, oldValue/*:**/, newValue/*:**/, oldState/*:BeanState = null*/, newState/*:BeanState = null*/)/*:Boolean*/ {switch(Math.max(arguments.length,4)){case 4:oldState=null;case 5:newState=null;}
    // prevent event object creation if there is no listener!
    if (bean.hasListeners && bean.hasListener(property)) {
      return bean.fireEvent(property,
        PropertyChangeEventUtil.createEvent(bean, property, oldValue, newValue, oldState, newState));
    }
    return true;
  }/*

  /**
   * Creates a PropertyChangeEvent.
   *
   * @param bean      the Bean of the PropertyChangeEvent
   * @param property  property of the new PropertyChangeEvent
   * @param oldValue  old value of the new PropertyChangeEvent
   * @param newValue  new value of the new PropertyChangeEvent
   * @param oldState  old state of the new PropertyChangeEvent
   * @param newState  new state of the new PropertyChangeEvent
   *
   * @return the created PropertyChangeEvent
   * /
  public static*/ function createEvent$static(bean/*:Object*/, property/*:String*/, oldValue/*:**/, newValue/*:**/, oldState/*:BeanState = null*/, newState/*:BeanState = null*/)/*:PropertyChangeEvent*/ {switch(Math.max(arguments.length,4)){case 4:oldState=null;case 5:newState=null;}
    return new com.coremedia.ui.data.impl.PropertyChangeEventImpl(bean, property, oldValue, newValue,
      oldState || com.coremedia.ui.data.BeanState.READABLE, newState || com.coremedia.ui.data.BeanState.READABLE);
  }/*
}*/function PropertyChangeEventUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: PropertyChangeEventUtil$,
      statics: {
        fireEvent: fireEvent$static,
        createEvent: createEvent$static
      },
      requires: ["com.coremedia.ui.data.BeanState"],
      uses: ["com.coremedia.ui.data.impl.PropertyChangeEventImpl"]
    };
});
