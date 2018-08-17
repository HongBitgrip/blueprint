Ext.define("com.coremedia.elastic.social.studio.actions.ApproveUserAction", function(ApproveUserAction) {/*package com.coremedia.elastic.social.studio.actions{
import com.coremedia.elastic.social.studio.actions.*;
import net.jangaroo.ext.Exml;
public class ApproveUserAction extends ApproveUserActionBase{

    public*/function ApproveUserAction$(config/*:ApproveUserAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.actions.ApproveUserActionBase*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.ApproveUserActionBase,{});
    var defaults_$1/*:ApproveUserAction*/ =AS3.cast(ApproveUserAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$du7t(config_$1);
  }/*

    /**

     A callback that is called for each property of the user details that
     is determined to be invalid. The callback has the signature
     &lt;code>function (propertyName:String, message)&lt;/code>

     * /
    [Bindable]
    public var invalidPropertyCallback:Function;


    /**

     A callback that is called after all changes previously made to the user details
     have been discarded.

     * /
    [Bindable]
    public var changesDiscardedCallback:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.actions.ApproveUserActionBase",
      constructor: ApproveUserAction$,
      super$du7t: function() {
        com.coremedia.elastic.social.studio.actions.ApproveUserActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        invalidPropertyCallback: null,
        changesDiscardedCallback: null
      },
      requires: [
        "com.coremedia.elastic.social.studio.actions.ApproveUserActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
