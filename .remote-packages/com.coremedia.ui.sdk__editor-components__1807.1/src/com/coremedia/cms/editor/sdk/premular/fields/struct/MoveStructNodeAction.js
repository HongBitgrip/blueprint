Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction", function(MoveStructNodeAction) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct{
import com.coremedia.cms.editor.sdk.premular.fields.struct.*;
import net.jangaroo.ext.Exml;
public class MoveStructNodeAction extends MoveStructNodeActionBase{

    public*/function MoveStructNodeAction$(config/*:MoveStructNodeAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeActionBase,{});
    var defaults_$1/*:MoveStructNodeAction*/ =AS3.cast(MoveStructNodeAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Spha(config_$1);
  }/*

    /** "Up" or "Down" * /
    [Bindable]
    public var direction:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeActionBase",
      constructor: MoveStructNodeAction$,
      super$Spha: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {direction: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
