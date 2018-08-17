Ext.define("com.coremedia.ui.exml.ValueExpressionBase", function(ValueExpressionBase) {/*package com.coremedia.ui.exml {
import com.coremedia.ui.data.PropertyPathExpression;

/**
 * Helper class to create a PropertyPathExpression from the EXML element <code>&lt;ui:valueExpression/&gt;</code>.
 * Do not use this class directly.
 * /
[PublicApi]
public class ValueExpressionBase extends PropertyPathExpression {

  public*/ function ValueExpressionBase$(config/*:ValueExpression = null*/) {if(arguments.length<=0)config=null;
    this.super$M_U2(AS3.getBindable(config,"context"), AS3.getBindable(config,"expression"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.PropertyPathExpression",
      metadata: {"": ["PublicApi"]},
      constructor: ValueExpressionBase$,
      super$M_U2: function() {
        com.coremedia.ui.data.PropertyPathExpression.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.ui.data.PropertyPathExpression"]
    };
});
