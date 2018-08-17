Ext.define("com.coremedia.blueprint.base.components.quickcreate.QuickCreateToolbarButtonBase", function(QuickCreateToolbarButtonBase) {/*package com.coremedia.blueprint.base.components.quickcreate {
import com.coremedia.cms.editor.sdk.util.LinkListUtil;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class QuickCreateToolbarButtonBase extends IconButton {

  public*/ function QuickCreateToolbarButtonBase$(config/*:QuickCreateToolbarButton = null*/) {if(arguments.length<=0)config=null;
    this.super$vjNc(config);
  }/*

  /**
   * Returns value expression for if the capacity is free or can not be calculated.
   * /
  protected*/ function forceReadOnly(config/*:QuickCreateToolbarButton*/)/*:ValueExpression*/{
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var forceReadOnlyExpression/*:ValueExpression*/ = AS3.getBindable(config,"forceReadOnlyValueExpression");
      if(forceReadOnlyExpression && forceReadOnlyExpression.getValue()) {
        return true;
      }
      if(!AS3.getBindable(config,"bindTo") || !AS3.getBindable(config,"propertyName")) {
        return false;
      }

      var freeCapacity/*:int*/ = com.coremedia.cms.editor.sdk.util.LinkListUtil.getFreeCapacity(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"propertyName"));
      return freeCapacity === 0;
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      constructor: QuickCreateToolbarButtonBase$,
      super$vjNc: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      forceReadOnly: forceReadOnly,
      requires: [
        "com.coremedia.cms.editor.sdk.util.LinkListUtil",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
