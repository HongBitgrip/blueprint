Ext.define("com.coremedia.cms.editor.sdk.actions.DisapproveAction", function(DisapproveAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that disapproves the configured content.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class DisapproveAction extends DisapproveActionBase{

    public*/function DisapproveAction$(config/*:DisapproveAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.DisapproveActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DisapproveActionBase,{});
    var defaults_$1/*:DisapproveAction*/ =AS3.cast(DisapproveAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$at20(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.DisapproveActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: DisapproveAction$,
      super$at20: function() {
        com.coremedia.cms.editor.sdk.actions.DisapproveActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.DisapproveActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
