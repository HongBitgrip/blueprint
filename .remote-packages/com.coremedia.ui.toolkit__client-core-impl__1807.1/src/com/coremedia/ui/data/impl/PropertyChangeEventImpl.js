Ext.define("com.coremedia.ui.data.impl.PropertyChangeEventImpl", function(PropertyChangeEventImpl) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.PropertyChangeEvent;

public class PropertyChangeEventImpl implements PropertyChangeEvent {

  public*/ function PropertyChangeEventImpl$(bean/*:Object*/, property/*:String*/, oldValue/*:**/, newValue/*:**/, oldState/*:BeanState = null*/, newState/*:BeanState = null*/) {switch(Math.max(arguments.length,4)){case 4:oldState=null;case 5:newState=null;}
    this['bean'] = bean;
    this['property'] = property;
    this['oldValue'] = oldValue;
    this['newValue'] = newValue;
    this['oldState'] = !oldState ? com.coremedia.ui.data.BeanState.READABLE : oldState;
    this['newState'] = !newState ? com.coremedia.ui.data.BeanState.READABLE : newState;
  }/*

  public native function get bean():Object;

  public native function get property():String;

  public native function get oldValue():*;

  public native function get newValue():*;

  public native function get oldState():BeanState;

  public native function get newState():BeanState;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.PropertyChangeEvent"],
      constructor: PropertyChangeEventImpl$,
      requires: [
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.PropertyChangeEvent"
      ]
    };
});
