Ext.define("com.coremedia.cms.editor.sdk.publication.ApproveAndRetryPlugin", function(ApproveAndRetryPlugin) {/*package com.coremedia.cms.editor.sdk.publication{
import com.coremedia.cms.editor.sdk.publication.*;
import net.jangaroo.ext.Exml;
import ext.button.Button;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 Plugin, that approves all contents that caused a publication to fail
 and retries to publish the set of contents.
 * /
public class ApproveAndRetryPlugin extends ApproveAndRetryPluginBase{

    import com.coremedia.ui.skins.ButtonSkin;

    import mx.resources.ResourceManager;

    public*/function ApproveAndRetryPlugin$(config/*:ApproveAndRetryPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.publication.ApproveAndRetryPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.publication.ApproveAndRetryPluginBase,{});
    var defaults_$1/*:ApproveAndRetryPlugin*/ =AS3.cast(ApproveAndRetryPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var button_23_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_23_5_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'ApproveAllAndRetryAction_text')));
    button_23_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    button_23_5_$1.itemId = "bulkPublishBtn";
    AS3.setBindable(button_23_5_$1,"handler" ,AS3.bind( this,"bulkPublishHandler"));
    AS3.setBindable(config_$1,"items" , [button_23_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Tckr(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.publication.ApproveAndRetryPluginBase",
      constructor: ApproveAndRetryPlugin$,
      super$Tckr: function() {
        com.coremedia.cms.editor.sdk.publication.ApproveAndRetryPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.button.Button",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.publication.ApproveAndRetryPluginBase",
        "com.coremedia.ui.skins.ButtonSkin",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
