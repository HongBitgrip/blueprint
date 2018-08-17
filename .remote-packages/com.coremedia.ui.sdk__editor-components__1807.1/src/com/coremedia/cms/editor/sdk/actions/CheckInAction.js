Ext.define("com.coremedia.cms.editor.sdk.actions.CheckInAction", function(CheckInAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that checks-in the configured content.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class CheckInAction extends CheckInActionBase{

    public static const ACTION_ID:String = "checkInAction";

    public*/function CheckInAction$(config/*:CheckInAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.CheckInActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.CheckInActionBase,{});
    var defaults_$1/*:CheckInAction*/ =AS3.cast(CheckInAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$jVfO(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.CheckInActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: CheckInAction$,
      super$jVfO: function() {
        com.coremedia.cms.editor.sdk.actions.CheckInActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "checkInAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.CheckInActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
