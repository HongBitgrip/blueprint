Ext.define("com.coremedia.cms.editor.sdk.actions.MoveUserItemAction", function(MoveUserItemAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class MoveUserItemAction extends MoveUserItemActionBase{

    public*/function MoveUserItemAction$(config/*:MoveUserItemAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.MoveUserItemActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveUserItemActionBase,{});
    var defaults_$1/*:MoveUserItemAction*/ =AS3.cast(MoveUserItemAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$xmSm(config_$1);
  }/*

    /**
     Specifies where the search folder shall be moved to. Possible
     values are 'toTop', 'up', 'down', 'toBottom' or a string
     wrapping an integer value.
     * /
    [Bindable]
    public var targetPosition:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.MoveUserItemActionBase",
      constructor: MoveUserItemAction$,
      super$xmSm: function() {
        com.coremedia.cms.editor.sdk.actions.MoveUserItemActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {targetPosition: null},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.MoveUserItemActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
