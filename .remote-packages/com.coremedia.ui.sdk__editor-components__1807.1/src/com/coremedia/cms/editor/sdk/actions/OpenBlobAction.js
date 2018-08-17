Ext.define("com.coremedia.cms.editor.sdk.actions.OpenBlobAction", function(OpenBlobAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class OpenBlobAction extends OpenBlobActionBase{

    public*/function OpenBlobAction$(config/*:OpenBlobAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.OpenBlobActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenBlobActionBase,{});
    var defaults_$1/*:OpenBlobAction*/ =AS3.cast(OpenBlobAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$aXj8(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.OpenBlobActionBase",
      constructor: OpenBlobAction$,
      super$aXj8: function() {
        com.coremedia.cms.editor.sdk.actions.OpenBlobActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.OpenBlobActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
