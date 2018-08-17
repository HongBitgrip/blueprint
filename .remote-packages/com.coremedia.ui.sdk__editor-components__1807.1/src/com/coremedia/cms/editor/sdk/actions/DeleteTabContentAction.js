Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteTabContentAction", function(DeleteTabContentAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class DeleteTabContentAction extends DeleteTabContentActionBase{

    public*/function DeleteTabContentAction$(config/*:DeleteTabContentAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.DeleteTabContentActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteTabContentActionBase,{});
    var defaults_$1/*:DeleteTabContentAction*/ =AS3.cast(DeleteTabContentAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9C1m(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.DeleteTabContentActionBase",
      constructor: DeleteTabContentAction$,
      super$9C1m: function() {
        com.coremedia.cms.editor.sdk.actions.DeleteTabContentActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.DeleteTabContentActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
