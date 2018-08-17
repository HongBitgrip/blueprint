Ext.define("com.coremedia.cms.editor.sdk.actions.UndeleteAction", function(UndeleteAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that restores the configured content from trash.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class UndeleteAction extends UndeleteActionBase{

    public static const ACTION_ID:String = "undeleteAction";

    public*/function UndeleteAction$(config/*:UndeleteAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.UndeleteActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.UndeleteActionBase,{});
    var defaults_$1/*:UndeleteAction*/ =AS3.cast(UndeleteAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$IF85(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.UndeleteActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: UndeleteAction$,
      super$IF85: function() {
        com.coremedia.cms.editor.sdk.actions.UndeleteActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "undeleteAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.UndeleteActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
