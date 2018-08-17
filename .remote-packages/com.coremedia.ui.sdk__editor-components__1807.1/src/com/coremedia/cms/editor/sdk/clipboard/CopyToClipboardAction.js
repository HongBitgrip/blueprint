Ext.define("com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction", function(CopyToClipboardAction) {/*package com.coremedia.cms.editor.sdk.clipboard{
import com.coremedia.cms.editor.sdk.clipboard.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that copies the configured content to the clipboard.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction
 @see com.coremedia.cms.editor.sdk.config.cutToClipboardAction
 @see com.coremedia.cms.editor.sdk.config.pasteFromClipboardAction

 * /
public class CopyToClipboardAction extends CopyToClipboardActionBase{

    public static const ACTION_ID:String = "copyToClipboardAction";

    public*/function CopyToClipboardAction$(config/*:CopyToClipboardAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardActionBase,{});
    var defaults_$1/*:CopyToClipboardAction*/ =AS3.cast(CopyToClipboardAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$lSjA(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: CopyToClipboardAction$,
      super$lSjA: function() {
        com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "copyToClipboardAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
