Ext.define("com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction", function(ToggleFloatingWindowAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class ToggleFloatingWindowAction extends ToggleFloatingWindowActionBase{

    import ext.container.Container;

    public static const ACTION_ID:String = "toggleFloatingWindowAction";

    [Bindable]
    public var component:Container;


    public*/function ToggleFloatingWindowAction$(config/*:ToggleFloatingWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowActionBase,{});
    var defaults_$1/*:ToggleFloatingWindowAction*/ =AS3.cast(ToggleFloatingWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$SkUB(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ToggleFloatingWindowAction$,
      super$SkUB: function() {
        com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {component: null},
      statics: {ACTION_ID: "toggleFloatingWindowAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
