Ext.define("com.coremedia.cms.editor.sdk.actions.CutSelectedLinksAction", function(CutSelectedLinksAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;

    [Deprecated(since="1710.1", replacement="com.coremedia.cms.editor.sdk.actions.LinkListCutAction")]
    [PublicApi]
/**
 An <code>contentUpdateAction</code> that cuts the selected items from the given LinkList property to the clipboard
 See <code>contentAction</code> for how to configure the content.
 See <code>contentUpdateAction</code> for how to configure the the read-only status of the action.
 @see com.coremedia.cms.editor.sdk.config.contentAction
 @see com.coremedia.cms.editor.sdk.config.contentUpdateAction
 @see com.coremedia.cms.editor.sdk.config.pasteLinkAction
 @see com.coremedia.cms.editor.sdk.config.deleteSelectedLinksAction
 @see com.coremedia.cms.editor.sdk.actions.LinkListCutAction

 * /
public class CutSelectedLinksAction extends CutSelectedLinksActionBase{

    import com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction;
    import com.coremedia.ui.data.ValueExpression;

    public static const ACTION_ID:String =*/function ACTION_ID$static_(){CutSelectedLinksAction.ACTION_ID=( com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction.ACTION_ID);}/*;

    public*/function CutSelectedLinksAction$(config/*:CutSelectedLinksAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.CutSelectedLinksActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.CutSelectedLinksActionBase,{});
    var defaults_$1/*:CutSelectedLinksAction*/ =AS3.cast(CutSelectedLinksAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$TGuz(config_$1);
  }/*

    /**
     * DEPRECATED: Use the selectedPositionsVariableName config instead.
     * A value expression holding the positions of the selected items in the LinkList.
     * /
    [Bindable]
    public var selectedPositionsExpression:ValueExpression;

    /**
     The name of the selected positions variable to be injected to the selected positions property.
     The context value should be an array of numbers.
     * /
    [Bindable]
    public var selectedPositionsVariableName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.CutSelectedLinksActionBase",
      metadata: {"": [
        "Deprecated",
        [
          "since",
          "1710.1",
          "replacement",
          "com.coremedia.cms.editor.sdk.actions.LinkListCutAction"
        ],
        "PublicApi"
      ]},
      constructor: CutSelectedLinksAction$,
      super$TGuz: function() {
        com.coremedia.cms.editor.sdk.actions.CutSelectedLinksActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedPositionsExpression: null,
        selectedPositionsVariableName: null
      },
      statics: {
        ACTION_ID: undefined,
        __initStatics__: function() {
          ACTION_ID$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.CutSelectedLinksActionBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction"]
    };
});
