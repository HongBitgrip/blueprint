Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarContainer", function(DocumentFormToolbarContainer) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
public class DocumentFormToolbarContainer extends DocumentFormToolbarContainerBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.documentFormToolbarContainer";

    public*/function DocumentFormToolbarContainer$(config/*:DocumentFormToolbarContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarContainerBase,{});
    var defaults_$1/*:DocumentFormToolbarContainer*/ =AS3.cast(DocumentFormToolbarContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Nra7(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarContainerBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.documentFormToolbarContainer",
      constructor: DocumentFormToolbarContainer$,
      super$Nra7: function() {
        com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarContainerBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarContainerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
