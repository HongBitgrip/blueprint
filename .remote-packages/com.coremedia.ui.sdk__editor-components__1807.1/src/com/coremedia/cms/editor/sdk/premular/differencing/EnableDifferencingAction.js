Ext.define("com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingAction", function(EnableDifferencingAction) {/*package com.coremedia.cms.editor.sdk.premular.differencing{
import com.coremedia.cms.editor.sdk.premular.differencing.*;
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
/**
 An action that triggers enabling of the differences computation for a given premular.
 * /
public class EnableDifferencingAction extends EnableDifferencingActionBase{

    public*/function EnableDifferencingAction$(config/*:EnableDifferencingAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingActionBase,{});
    var defaults_$1/*:EnableDifferencingAction*/ =AS3.cast(EnableDifferencingAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$sOY5(config_$1);
  }/*

    /** the premular where the differences computation should be controlled * /
    [Bindable]
    public var premular:com.coremedia.cms.editor.sdk.premular.Premular;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingActionBase",
      constructor: EnableDifferencingAction$,
      super$sOY5: function() {
        com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {premular: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
