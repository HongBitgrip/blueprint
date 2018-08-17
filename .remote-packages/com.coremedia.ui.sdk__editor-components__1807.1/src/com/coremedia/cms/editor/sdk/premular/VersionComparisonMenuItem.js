Ext.define("com.coremedia.cms.editor.sdk.premular.VersionComparisonMenuItem", function(VersionComparisonMenuItem) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BindIconClassPlugin;
import com.coremedia.ui.plugins.BindStyleClassPlugin;
public class VersionComparisonMenuItem extends VersionComparisonMenuItemBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.versionComparisonMenuItem";

    public*/function VersionComparisonMenuItem$(config/*:VersionComparisonMenuItem = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.VersionComparisonMenuItemBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.VersionComparisonMenuItemBase,{});
    var defaults_$1/*:VersionComparisonMenuItem*/ =AS3.cast(VersionComparisonMenuItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"openVersionComparison"));
    var ui_BindPropertyPlugin_16_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_16_5_$1.bindTo = this.getVersionInfoValueExpression();
    ui_BindPropertyPlugin_16_5_$1.componentProperty = "text";
    var ui_BindIconClassPlugin_18_5_$1/*:com.coremedia.ui.plugins.BindIconClassPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindIconClassPlugin,{});
    ui_BindIconClassPlugin_18_5_$1.bindTo = this.getIconClsValueExpression();
    var ui_BindStyleClassPlugin_19_5_$1/*:com.coremedia.ui.plugins.BindStyleClassPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindStyleClassPlugin,{});
    ui_BindStyleClassPlugin_19_5_$1.bindTo = this.getIsSelectedValueExpression();
    AS3.setBindable(ui_BindStyleClassPlugin_19_5_$1,"cls" , "selected-version");
    config_$1.plugins = [ui_BindPropertyPlugin_16_5_$1, ui_BindIconClassPlugin_18_5_$1, ui_BindStyleClassPlugin_19_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$35zH(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.VersionComparisonMenuItemBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.versionComparisonMenuItem",
      constructor: VersionComparisonMenuItem$,
      super$35zH: function() {
        com.coremedia.cms.editor.sdk.premular.VersionComparisonMenuItemBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.VersionComparisonMenuItemBase",
        "com.coremedia.ui.plugins.BindIconClassPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindStyleClassPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
