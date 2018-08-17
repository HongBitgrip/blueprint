Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction", function(AddStructPropertyAction) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct{
import com.coremedia.cms.editor.sdk.premular.fields.struct.*;
import net.jangaroo.ext.Exml;
public class AddStructPropertyAction extends AddStructPropertyActionBase{

    public*/function AddStructPropertyAction$(config/*:AddStructPropertyAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyActionBase,{});
    var defaults_$1/*:AddStructPropertyAction*/ =AS3.cast(AddStructPropertyAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_JUx(config_$1);
  }/*

    [Bindable]
    public var propertyType:String;


    [Bindable]
    public var isCollection:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyActionBase",
      constructor: AddStructPropertyAction$,
      super$_JUx: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        propertyType: null,
        isCollection: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
