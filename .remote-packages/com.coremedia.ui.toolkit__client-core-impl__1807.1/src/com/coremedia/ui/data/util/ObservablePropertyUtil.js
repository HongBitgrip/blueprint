Ext.define("com.coremedia.ui.data.util.ObservablePropertyUtil", function(ObservablePropertyUtil) {/*package com.coremedia.ui.data.util {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.*;

import ext.mixin.Observable;

public class ObservablePropertyUtil {

  public static*/ function createPropertyChangeEventsFor$static(observable/*:Observable*/, property/*:String*/)/*:void*/ {
    var valueExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:**/ {
      return com.coremedia.ui.util.ObjectUtils.getProperty(observable, property);
    });
    var oldValue/*:**/ = valueExpression.getValue();
    function getterResultChanged()/*:void*/ {
      var newValue/*:**/ = valueExpression.getValue();
      com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(observable, property, oldValue, newValue);
      oldValue = newValue;
    }
    valueExpression.addChangeListener(getterResultChanged);
    if (observable.events["destroy"]) { // if observable supports "destroy" event, e.g. Components:
      observable.addListener("destroy", function()/*:void*/ {
        // clean up value expression listener on observable's death:
        valueExpression.removeChangeListener(getterResultChanged);
      });
    }
  }/*

}*/function ObservablePropertyUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ObservablePropertyUtil$,
      statics: {createPropertyChangeEventsFor: createPropertyChangeEventsFor$static},
      requires: [
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: ["com.coremedia.ui.data.util.PropertyChangeEventUtil"]
    };
});
