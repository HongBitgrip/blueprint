Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemAction", function(AddStructListItemAction) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct{
import com.coremedia.cms.editor.sdk.premular.fields.struct.*;
import net.jangaroo.ext.Exml;
public class AddStructListItemAction extends AddStructListItemActionBase{

    public*/function AddStructListItemAction$(config/*:AddStructListItemAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemActionBase,{});
    var defaults_$1/*:AddStructListItemAction*/ =AS3.cast(AddStructListItemAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$n4st(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemActionBase",
      constructor: AddStructListItemAction$,
      super$n4st: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructListItemActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
