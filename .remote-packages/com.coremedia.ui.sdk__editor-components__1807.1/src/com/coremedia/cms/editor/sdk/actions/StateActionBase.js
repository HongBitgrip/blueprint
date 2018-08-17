Ext.define("com.coremedia.cms.editor.sdk.actions.StateActionBase", function(StateActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import ext.Action;

[PublicApi]
public class StateActionBase extends Action {

  private var state:Object;

  public*/ function StateActionBase$(config/*:StateAction = null*/) {if(arguments.length<=0)config=null;
    this.super$JpND(config);

    this.state$JpND = AS3.getBindable(config,"state");
    if (!this.state$JpND) {
      this.setDisabled(true);
    }
  }/*

  /**
   * @private
   * /
  [InjectFromExtParent(variableNameConfig='stateVariableName')]
  public*/ function setState(value/*:Object*/)/*:void*/ {
    this.state$JpND = value;
    if (this.state$JpND) {
      this.setDisabled(false);
    } else {
      this.setDisabled(true);
    }
  }/*

  /**
   * @private
   * /
  protected*/ function getState()/*:Object*/ {
    return this.state$JpND;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {
        "": ["PublicApi"],
        setState: [
          "InjectFromExtParent",
          [
            "variableNameConfig",
            "stateVariableName"
          ]
        ]
      },
      state$JpND: null,
      constructor: StateActionBase$,
      super$JpND: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      setState: setState,
      getState: getState,
      requires: ["Ext.Action"]
    };
});
