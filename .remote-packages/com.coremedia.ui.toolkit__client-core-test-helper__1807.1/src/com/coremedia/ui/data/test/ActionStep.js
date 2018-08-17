Ext.define("com.coremedia.ui.data.test.ActionStep", function(ActionStep) {/*package com.coremedia.ui.data.test {
public class ActionStep extends Step{
  public*/ function ActionStep$(msg/*: String*/, callback/*:Function*/, passThrough/*:* =undefined*/) {
    this.super$Ltb_(msg, function()/*:Boolean*/{return true;}, callback, passThrough);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.test.Step",
      constructor: ActionStep$,
      super$Ltb_: function() {
        com.coremedia.ui.data.test.Step.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.ui.data.test.Step"]
    };
});
