Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarReadOnlyContainer", function(DocumentFormToolbarReadOnlyContainer) {/*package com.coremedia.cms.editor.sdk.premular{
import ext.container.Container;
import net.jangaroo.ext.Exml;
public class DocumentFormToolbarReadOnlyContainer extends Container{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.documentFormReadOnlyToolbarContainer";

    public*/function DocumentFormToolbarReadOnlyContainer$(config/*:DocumentFormToolbarReadOnlyContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:DocumentFormToolbarReadOnlyContainer*/ =AS3.cast(DocumentFormToolbarReadOnlyContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$nEx5(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.cms.editor.sdk.config.documentFormReadOnlyToolbarContainer",
      constructor: DocumentFormToolbarReadOnlyContainer$,
      super$nEx5: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.container.Container",
        "net.jangaroo.ext.Exml"
      ]
    };
});
