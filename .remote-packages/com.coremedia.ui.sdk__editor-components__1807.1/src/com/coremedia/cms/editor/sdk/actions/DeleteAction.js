Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteAction", function(DeleteAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that deletes the configured content.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class DeleteAction extends DeleteActionBase{

    public static const ACTION_ID:String = "deleteAction";

    public*/function DeleteAction$(config/*:DeleteAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.DeleteActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteActionBase,{});
    var defaults_$1/*:DeleteAction*/ =AS3.cast(DeleteAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$qa_i(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.DeleteActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: DeleteAction$,
      super$qa_i: function() {
        com.coremedia.cms.editor.sdk.actions.DeleteActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "deleteAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.DeleteActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
