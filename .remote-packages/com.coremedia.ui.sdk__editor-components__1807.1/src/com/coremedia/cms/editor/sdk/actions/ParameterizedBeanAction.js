Ext.define("com.coremedia.cms.editor.sdk.actions.ParameterizedBeanAction", function(ParameterizedBeanAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class ParameterizedBeanAction extends ParameterizedBeanActionBase{

    public*/function ParameterizedBeanAction$(config/*:ParameterizedBeanAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ParameterizedBeanActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ParameterizedBeanActionBase,{});
    var defaults_$1/*:ParameterizedBeanAction*/ =AS3.cast(ParameterizedBeanAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$igxK(config_$1);
  }/*

    /**
     A suffix to append to the request URL.
     * /
    [Bindable]
    public var restMethod:String;


    /**
     A boolean variable which defines if the request parameters should be marshaled
     as remote beans with their ids. The resulting request object
     can then be transferred as the payload of a REST call.
     * /
    [Bindable]
    public var writeJson:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ParameterizedBeanActionBase",
      constructor: ParameterizedBeanAction$,
      super$igxK: function() {
        com.coremedia.cms.editor.sdk.actions.ParameterizedBeanActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        restMethod: null,
        writeJson: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ParameterizedBeanActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
