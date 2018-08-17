Ext.define("com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryAction", function(ShowTabContentInRepositoryAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class ShowTabContentInRepositoryAction extends ShowTabContentInRepositoryActionBase{

    public*/function ShowTabContentInRepositoryAction$(config/*:ShowTabContentInRepositoryAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryActionBase,{});
    var defaults_$1/*:ShowTabContentInRepositoryAction*/ =AS3.cast(ShowTabContentInRepositoryAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$$hsn(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryActionBase",
      constructor: ShowTabContentInRepositoryAction$,
      super$$hsn: function() {
        com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
