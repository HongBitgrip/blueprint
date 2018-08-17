Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchAction", function(DeleteSavedSearchAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class DeleteSavedSearchAction extends DeleteSavedSearchActionBase{

    public*/function DeleteSavedSearchAction$(config/*:DeleteSavedSearchAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchActionBase,{});
    var defaults_$1/*:DeleteSavedSearchAction*/ =AS3.cast(DeleteSavedSearchAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kUhl(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchActionBase",
      constructor: DeleteSavedSearchAction$,
      super$kUhl: function() {
        com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
