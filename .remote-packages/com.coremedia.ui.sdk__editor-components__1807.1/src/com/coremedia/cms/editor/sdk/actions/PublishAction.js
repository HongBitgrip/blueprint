Ext.define("com.coremedia.cms.editor.sdk.actions.PublishAction", function(PublishAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that publishes the configured content.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class PublishAction extends PublishActionBase{

    public static const ACTION_ID:String = "publishAction";

    public*/function PublishAction$(config/*:PublishAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.PublishActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.PublishActionBase,{});
    var defaults_$1/*:PublishAction*/ =AS3.cast(PublishAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$JB6Q(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.PublishActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: PublishAction$,
      super$JB6Q: function() {
        com.coremedia.cms.editor.sdk.actions.PublishActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "publishAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.PublishActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
