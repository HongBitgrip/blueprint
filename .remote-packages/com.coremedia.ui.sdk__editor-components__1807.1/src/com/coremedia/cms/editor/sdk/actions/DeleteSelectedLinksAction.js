Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteSelectedLinksAction", function(DeleteSelectedLinksAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;

    [Deprecated(since="1710.1", replacement="com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction")]
    [PublicApi]
/**

 An <code>contentUpdateAction</code> that removes the selected items from the given LinkList or String property.
 When the property is a String Property then it is assumed to be a comma-separated list of items.
 See <code>contentAction</code> for how to configure the content.
 See <code>contentUpdateAction</code> for how to configure the the read-only status of the action.
 @see com.coremedia.cms.editor.sdk.config.contentAction
 @see com.coremedia.cms.editor.sdk.config.contentUpdateAction
 @see com.coremedia.cms.editor.sdk.config.pasteLinkAction
 @see com.coremedia.cms.editor.sdk.config.cutSelectedLinksAction

 * /
public class DeleteSelectedLinksAction extends DeleteSelectedLinksActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const ACTION_ID:String =*/function ACTION_ID$static_(){DeleteSelectedLinksAction.ACTION_ID=( com.coremedia.cms.editor.sdk.actions.DeleteAction.ACTION_ID);}/*;

    public*/function DeleteSelectedLinksAction$(config/*:DeleteSelectedLinksAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.DeleteSelectedLinksActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteSelectedLinksActionBase,{});
    var defaults_$1/*:DeleteSelectedLinksAction*/ =AS3.cast(DeleteSelectedLinksAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$l9$_(config_$1);
  }/*

    /**
     * DEPRECATED: Use the selectedPositionsVariableName config instead.
     * A value expression holding the positions of the selected items in the LinkList.
     * /
    [Bindable]
    public var selectedPositionsExpression:ValueExpression;

    /**
     The name of the selected positions variable to be injected to the selected positions property.
     The context value should be an array of numbers
     * /
    [Bindable]
    public var selectedPositionsVariableName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.DeleteSelectedLinksActionBase",
      metadata: {"": [
        "Deprecated",
        [
          "since",
          "1710.1",
          "replacement",
          "com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction"
        ],
        "PublicApi"
      ]},
      constructor: DeleteSelectedLinksAction$,
      super$l9$_: function() {
        com.coremedia.cms.editor.sdk.actions.DeleteSelectedLinksActionBase.prototype.constructor.apply(this, arguments);
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
        "com.coremedia.cms.editor.sdk.actions.DeleteSelectedLinksActionBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.actions.DeleteAction"]
    };
});
