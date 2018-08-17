Ext.define("com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction", function(PasteFromClipboardAction) {/*package com.coremedia.cms.editor.sdk.clipboard{
import com.coremedia.cms.editor.sdk.clipboard.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that pastes contents from the clipboard to the configured content
 See <code>contentAction</code> for how to configure the content.
 If the configured content is not available then the configured selected folder will be the target.
 @see com.coremedia.cms.editor.sdk.config.contentAction
 @see com.coremedia.cms.editor.sdk.config.copyToClipboardAction
 @see com.coremedia.cms.editor.sdk.config.cutSelectedLinksAction

 * /
public class PasteFromClipboardAction extends PasteFromClipboardActionBase{

    public static const ACTION_ID:String = "pasteFromClipboardAction";
    import com.coremedia.ui.data.ValueExpression;

    public*/function PasteFromClipboardAction$(config/*:PasteFromClipboardAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardActionBase,{});
    var defaults_$1/*:PasteFromClipboardAction*/ =AS3.cast(PasteFromClipboardAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mVz1(config_$1);
  }/*

    /**
     * DEPRECATED. Use the selectedFolderVariableName config parameter instead.
     * value expression describing the bean that should hold the selected folder object.
     * /
    [Bindable]
    public var selectedFolderValueExpression:ValueExpression;

    /**
     The name of the context variable to be injected to the selectedFolder property.
     The context value should be a folder object.
     * /
    [Bindable]
    public var selectedFolderVariableName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: PasteFromClipboardAction$,
      super$mVz1: function() {
        com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedFolderValueExpression: null,
        selectedFolderVariableName: null
      },
      statics: {ACTION_ID: "pasteFromClipboardAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
