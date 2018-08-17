Ext.define("com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction", function(CutToClipboardAction) {/*package com.coremedia.cms.editor.sdk.clipboard{
import com.coremedia.cms.editor.sdk.clipboard.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that cuts the configured content to the clipboard
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction
 @see com.coremedia.cms.editor.sdk.config.copyToClipboardAction
 @see com.coremedia.cms.editor.sdk.config.pasteFromClipboardAction

 * /
public class CutToClipboardAction extends CutToClipboardActionBase{

    public static const ACTION_ID:String = "cutToClipboardAction";

    public*/function CutToClipboardAction$(config/*:CutToClipboardAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.clipboard.CutToClipboardActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CutToClipboardActionBase,{});
    var defaults_$1/*:CutToClipboardAction*/ =AS3.cast(CutToClipboardAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$SBp1(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.clipboard.CutToClipboardActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: CutToClipboardAction$,
      super$SBp1: function() {
        com.coremedia.cms.editor.sdk.clipboard.CutToClipboardActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "cutToClipboardAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.clipboard.CutToClipboardActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
