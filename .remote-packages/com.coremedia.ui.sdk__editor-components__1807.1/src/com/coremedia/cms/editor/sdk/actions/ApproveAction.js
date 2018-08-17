Ext.define("com.coremedia.cms.editor.sdk.actions.ApproveAction", function(ApproveAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that approves the configured content.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class ApproveAction extends ApproveActionBase{

    public static const ACTION_ID:String = "approveAction";

    public*/function ApproveAction$(config/*:ApproveAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ApproveActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApproveActionBase,{});
    var defaults_$1/*:ApproveAction*/ =AS3.cast(ApproveAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$xF5O(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ApproveActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ApproveAction$,
      super$xF5O: function() {
        com.coremedia.cms.editor.sdk.actions.ApproveActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "approveAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ApproveActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
