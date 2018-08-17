Ext.define("com.coremedia.ui.data.test.Step", function(Step) {/*package com.coremedia.ui.data.test {
import ext.Ext;

public class Step {

  public var msg:String;
  public var condition:Function;
  public var callback:Function;
  public var passThrough:*;

  public*/ function Step$(msg/*: String*/, condition/* :Function*/, callback/* :Function = undefined*/, passThrough/*:* =undefined*/) {
    this.msg = msg;
    this.condition = condition;
    this.callback = callback || Ext.emptyFn;
    this.passThrough = passThrough;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      msg: null,
      condition: null,
      callback: null,
      passThrough: undefined,
      constructor: Step$,
      requires: ["Ext"]
    };
});
