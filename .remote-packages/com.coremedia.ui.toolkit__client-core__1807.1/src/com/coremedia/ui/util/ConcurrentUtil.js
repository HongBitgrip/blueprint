Ext.define("com.coremedia.ui.util.ConcurrentUtil", function(ConcurrentUtil) {/*package com.coremedia.ui.util {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

/**
 * Static utility methods for concurrent execution.
 * /
public class ConcurrentUtil {

  /**
   * <p>
   * Execute the given handler when the predicate evaluates to true.
   * </p>
   * <p>
   * Before concurrent call is triggered the predicate is checked immediately and handler called immediately as
   * well if the predicate is true.
   * </p>
   *
   * @param predicate Boolean function to evaluate; values used in the function must be dependency tracked
   * @param handler handler to call if the predicate evaluates to true
   * @param timeoutMS timeout in milliseconds when to give up (silently)
   * @param timeoutHandler handler to call upon timeout
   * /
  public static*/ function executeWhen$static(predicate/*:Function*/, handler/*:Function*/, timeoutMS/*:Number = 30000*/, timeoutHandler/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:timeoutMS=30000;case 3:timeoutHandler=null;}
    function expired()/*:void*/ {
      expression.removeChangeListener(listener);
      timeoutHandler && timeoutHandler();
    }

    function listener()/*:void*/ {
      if (expression.getValue()) {
        expression.removeChangeListener(listener);
        window.clearTimeout(timeout);
        handler();
      }
    }

    var timeout/*:Object*/ = window.setTimeout(expired, timeoutMS);
    var expression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(predicate);
    expression.addChangeListener(listener);
    listener();
  }

  function ConcurrentUtil$() {
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ConcurrentUtil$,
      statics: {executeWhen: executeWhen$static},
      uses: ["com.coremedia.ui.data.ValueExpressionFactory"]
    };
});
