Ext.define("com.coremedia.cms.editor.sdk.actions.PasteLinkAction", function(PasteLinkAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;

    [Deprecated(since="1710.1", replacement="com.coremedia.cms.editor.sdk.actions.LinkListPasteAction")]
    [PublicApi]
/**
 An <code>contentUpdateAction</code> that pastes the contents from the clipboard to the given LinkList property.
 See <code>contentAction</code> for how to configure the content.
 See <code>contentUpdateAction</code> for how to configure the the read-only status of the action.
 @see com.coremedia.cms.editor.sdk.config.contentAction
 @see com.coremedia.cms.editor.sdk.config.contentUpdateAction
 @see com.coremedia.cms.editor.sdk.config.cutSelectedLinksAction
 @see com.coremedia.cms.editor.sdk.config.deleteSelectedLinksAction
 @see com.coremedia.cms.editor.sdk.actions.LinkListPasteAction

 * /
public class PasteLinkAction extends PasteLinkActionBase{

    import com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction;

    public static const ACTION_ID:String =*/function ACTION_ID$static_(){PasteLinkAction.ACTION_ID=( com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction.ACTION_ID);}/*;

    public*/function PasteLinkAction$(config/*:PasteLinkAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.PasteLinkActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.PasteLinkActionBase,{});
    var defaults_$1/*:PasteLinkAction*/ =AS3.cast(PasteLinkAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mZtu(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.PasteLinkActionBase",
      metadata: {"": [
        "Deprecated",
        [
          "since",
          "1710.1",
          "replacement",
          "com.coremedia.cms.editor.sdk.actions.LinkListPasteAction"
        ],
        "PublicApi"
      ]},
      constructor: PasteLinkAction$,
      super$mZtu: function() {
        com.coremedia.cms.editor.sdk.actions.PasteLinkActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ACTION_ID: undefined,
        __initStatics__: function() {
          ACTION_ID$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.PasteLinkActionBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction"]
    };
});
