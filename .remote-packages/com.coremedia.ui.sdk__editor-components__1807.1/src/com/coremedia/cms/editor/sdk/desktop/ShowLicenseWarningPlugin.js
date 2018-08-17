Ext.define("com.coremedia.cms.editor.sdk.desktop.ShowLicenseWarningPlugin", function(ShowLicenseWarningPlugin) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.configuration.StudioPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.desktop.StartTabWarnings;
import com.coremedia.ui.plugins.AddItemsPlugin;
import com.coremedia.cms.editor.sdk.desktop.LicenseWarning;
[PublicApi]
/**
 Add a panel to the start tab which can warn a Studio user that a certain feature is not licensed.
 * /
public class ShowLicenseWarningPlugin extends StudioPlugin{

    public*/function ShowLicenseWarningPlugin$(config/*:ShowLicenseWarningPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.configuration.StudioPlugin*/ =AS3.cast(com.coremedia.cms.editor.configuration.StudioPlugin,{});
    var defaults_$1/*:ShowLicenseWarningPlugin*/ =AS3.cast(ShowLicenseWarningPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_StartTabWarnings_19_5_$1/*:com.coremedia.cms.editor.sdk.desktop.StartTabWarnings*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.StartTabWarnings,{});
    var ui_AddItemsPlugin_21_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var editor_LicenseWarning_23_13_$1/*:com.coremedia.cms.editor.sdk.desktop.LicenseWarning*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.LicenseWarning,{});
    AS3.setBindable(ui_AddItemsPlugin_21_9_$1,"items" , [editor_LicenseWarning_23_13_$1]);
    editor_StartTabWarnings_19_5_$1.plugins = [ui_AddItemsPlugin_21_9_$1];
    AS3.setBindable(config_$1,"rules" , [editor_StartTabWarnings_19_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$h9xt(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      metadata: {"": ["PublicApi"]},
      constructor: ShowLicenseWarningPlugin$,
      super$h9xt: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.LicenseWarning",
        "com.coremedia.cms.editor.sdk.desktop.StartTabWarnings"
      ]
    };
});
