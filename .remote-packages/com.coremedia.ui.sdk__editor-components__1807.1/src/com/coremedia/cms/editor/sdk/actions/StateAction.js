Ext.define("com.coremedia.cms.editor.sdk.actions.StateAction", function(StateAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Abstract state action.
 Concrete state action classes for adding or deleting state items extend this action class.
 Configure the state using one of the following config parameters:
 <ul>
 <li><code>state</code>: Configure the state directly.</li>
 <li><code>stateVariableName</code>: Inject the state as context parameter.</li>
 </ul>


 * /
public class StateAction extends StateActionBase{

    public*/function StateAction$(config/*:StateAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.StateActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.StateActionBase,{});
    var defaults_$1/*:StateAction*/ =AS3.cast(StateAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$5uZS(config_$1);
  }/*

    /**
     The state for this action.
     * /
    [Bindable]
    public var state:Object;


    /**
     The name of the state variable to be injected to the state property.
     The context value should be an state object.
     * /
    [Bindable]
    public var stateVariableName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.StateActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: StateAction$,
      super$5uZS: function() {
        com.coremedia.cms.editor.sdk.actions.StateActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        state: null,
        stateVariableName: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.StateActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
