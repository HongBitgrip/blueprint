Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteBlobAction", function(DeleteBlobAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
/**
 An ext.Action that deletes the given BLOB, i.e. sets it to null.
 * /
public class DeleteBlobAction extends DeleteBlobActionBase{

    public*/function DeleteBlobAction$(config/*:DeleteBlobAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.DeleteBlobActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteBlobActionBase,{});
    var defaults_$1/*:DeleteBlobAction*/ =AS3.cast(DeleteBlobAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fjQf(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.DeleteBlobActionBase",
      constructor: DeleteBlobAction$,
      super$fjQf: function() {
        com.coremedia.cms.editor.sdk.actions.DeleteBlobActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.DeleteBlobActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
