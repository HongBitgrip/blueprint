Ext.define("com.coremedia.cms.editor.sdk.actions.WithdrawAction", function(WithdrawAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that withdraws the configured content.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class WithdrawAction extends WithdrawActionBase{

    public static const ACTION_ID:String = "withdrawAction";

    public*/function WithdrawAction$(config/*:WithdrawAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.WithdrawActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.WithdrawActionBase,{});
    var defaults_$1/*:WithdrawAction*/ =AS3.cast(WithdrawAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$vSCB(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.WithdrawActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: WithdrawAction$,
      super$vSCB: function() {
        com.coremedia.cms.editor.sdk.actions.WithdrawActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "withdrawAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.WithdrawActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
