Ext.define("com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldAction", function(ShowMetadataIconDisplayFieldAction) {/*package com.coremedia.cms.editor.sdk.actions.metadata{
import com.coremedia.cms.editor.sdk.actions.metadata.*;
import net.jangaroo.ext.Exml;
public class ShowMetadataIconDisplayFieldAction extends ShowMetadataIconDisplayFieldActionBase{

    public*/function ShowMetadataIconDisplayFieldAction$(config/*:ShowMetadataIconDisplayFieldAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldActionBase,{});
    var defaults_$1/*:ShowMetadataIconDisplayFieldAction*/ =AS3.cast(ShowMetadataIconDisplayFieldAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$iqo7(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldActionBase",
      constructor: ShowMetadataIconDisplayFieldAction$,
      super$iqo7: function() {
        com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
