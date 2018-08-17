Ext.define("com.coremedia.elastic.social.studio.actions.RejectUserAction", function(RejectUserAction) {/*package com.coremedia.elastic.social.studio.actions{
import com.coremedia.elastic.social.studio.actions.*;
import net.jangaroo.ext.Exml;
public class RejectUserAction extends RejectUserActionBase{

    public*/function RejectUserAction$(config/*:RejectUserAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.actions.RejectUserActionBase*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.RejectUserActionBase,{});
    var defaults_$1/*:RejectUserAction*/ =AS3.cast(RejectUserAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$U5ZN(config_$1);
  }/*

    /**

     If changes to the details of an existing user are rejected, the user details
     are restored to the previously approved state. However, validation
     might determine some of the properties to be invalid.
     A callback is called for each such invalid property.
     The callback has the signature
     &lt;code>function (propertyName:String, message)&lt;/code>

     * /
    [Bindable]
    public var invalidPropertyCallback:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.actions.RejectUserActionBase",
      constructor: RejectUserAction$,
      super$U5ZN: function() {
        com.coremedia.elastic.social.studio.actions.RejectUserActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {invalidPropertyCallback: null},
      requires: [
        "com.coremedia.elastic.social.studio.actions.RejectUserActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
