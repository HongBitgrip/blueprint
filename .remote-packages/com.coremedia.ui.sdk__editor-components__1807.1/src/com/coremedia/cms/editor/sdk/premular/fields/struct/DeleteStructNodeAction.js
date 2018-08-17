Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeAction", function(DeleteStructNodeAction) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct{
import com.coremedia.cms.editor.sdk.premular.fields.struct.*;
import net.jangaroo.ext.Exml;
public class DeleteStructNodeAction extends DeleteStructNodeActionBase{

    public*/function DeleteStructNodeAction$(config/*:DeleteStructNodeAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeActionBase,{});
    var defaults_$1/*:DeleteStructNodeAction*/ =AS3.cast(DeleteStructNodeAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2Wy_(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeActionBase",
      constructor: DeleteStructNodeAction$,
      super$2Wy_: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
