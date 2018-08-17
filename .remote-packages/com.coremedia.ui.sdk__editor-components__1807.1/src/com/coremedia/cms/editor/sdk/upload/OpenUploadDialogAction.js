Ext.define("com.coremedia.cms.editor.sdk.upload.OpenUploadDialogAction", function(OpenUploadDialogAction) {/*package com.coremedia.cms.editor.sdk.upload{
import com.coremedia.cms.editor.sdk.upload.*;
import net.jangaroo.ext.Exml;
public class OpenUploadDialogAction extends OpenUploadDialogActionBase{

    public static const ACTION_ID:String = "openUploadDialogAction";

    public*/function OpenUploadDialogAction$(config/*:OpenUploadDialogAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.upload.OpenUploadDialogActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.upload.OpenUploadDialogActionBase,{});
    var defaults_$1/*:OpenUploadDialogAction*/ =AS3.cast(OpenUploadDialogAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ZskS(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.upload.OpenUploadDialogActionBase",
      constructor: OpenUploadDialogAction$,
      super$ZskS: function() {
        com.coremedia.cms.editor.sdk.upload.OpenUploadDialogActionBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "openUploadDialogAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.upload.OpenUploadDialogActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
