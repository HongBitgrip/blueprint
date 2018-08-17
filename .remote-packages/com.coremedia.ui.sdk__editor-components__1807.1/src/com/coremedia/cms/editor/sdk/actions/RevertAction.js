Ext.define("com.coremedia.cms.editor.sdk.actions.RevertAction", function(RevertAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that reverts the configured content.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class RevertAction extends RevertActionBase{

    public static const ACTION_ID:String = "revertAction";

    public*/function RevertAction$(config/*:RevertAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.RevertActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RevertActionBase,{});
    var defaults_$1/*:RevertAction*/ =AS3.cast(RevertAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8kKb(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.RevertActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: RevertAction$,
      super$8kKb: function() {
        com.coremedia.cms.editor.sdk.actions.RevertActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "revertAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.RevertActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
