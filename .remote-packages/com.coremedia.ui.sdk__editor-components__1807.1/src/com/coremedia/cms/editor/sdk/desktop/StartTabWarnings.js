Ext.define("com.coremedia.cms.editor.sdk.desktop.StartTabWarnings", function(StartTabWarnings) {/*package com.coremedia.cms.editor.sdk.desktop{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.desktop.LicenseWarning;
[PublicApi]
/**
 A container for potential warnings, e.g. a missing perso license
 * /
public class StartTabWarnings extends Container{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.startTabWarnings";

    public*/function StartTabWarnings$(config/*:StartTabWarnings = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:StartTabWarnings*/ =AS3.cast(StartTabWarnings,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_LicenseWarning_19_5_$1/*:com.coremedia.cms.editor.sdk.desktop.LicenseWarning*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.LicenseWarning,{});
    config_$1.items = [editor_LicenseWarning_19_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$cKvs(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.startTabWarnings",
      constructor: StartTabWarnings$,
      super$cKvs: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.container.Container",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.desktop.LicenseWarning"]
    };
});
