Ext.define("com.coremedia.cms.editor.sdk.actions.ApprovePublishAction", function(ApprovePublishAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that approves and publishes the configured content.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class ApprovePublishAction extends ApprovePublishActionBase{

    public static const ACTION_ID:String = "approvePublishAction";

    public*/function ApprovePublishAction$(config/*:ApprovePublishAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ApprovePublishActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApprovePublishActionBase,{});
    var defaults_$1/*:ApprovePublishAction*/ =AS3.cast(ApprovePublishAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$4_B3(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ApprovePublishActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ApprovePublishAction$,
      super$4_B3: function() {
        com.coremedia.cms.editor.sdk.actions.ApprovePublishActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "approvePublishAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ApprovePublishActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
