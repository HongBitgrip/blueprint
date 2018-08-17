Ext.define("com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy", function(WorkAreaTabProxy) {/*package com.coremedia.cms.editor.sdk.desktop.reusability{
import com.coremedia.cms.editor.sdk.desktop.reusability.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
[PublicApi]
public class WorkAreaTabProxy extends WorkAreaTabProxyBase{

    import com.coremedia.cms.editor.sdk.desktop.*;
    import com.coremedia.ui.components.ExtendedTab;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.workAreaTabProxy";
    private static const*/var TAB_CONFIG$static/*:ExtendedTab*/;/* =*/function TAB_CONFIG$static_(){TAB_CONFIG$static=( AS3.cast(com.coremedia.ui.components.ExtendedTab,{
      minWidth: 90
    }));};/*

    public*/function WorkAreaTabProxy$(config/*:WorkAreaTabProxy = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxyBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxyBase,{});
    var defaults_$1/*:WorkAreaTabProxy*/ =AS3.cast(WorkAreaTabProxy,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemsLazyUntilEvent = "beforerender";
    AS3.setBindable(config_$1,"closable" , true);
    config_$1["tabConfig"] = TAB_CONFIG$static;
    var ui_BindPropertyPlugin_27_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_27_5_$1.componentProperty = "title";
    ui_BindPropertyPlugin_27_5_$1.bindTo = this.getTitleVE();
    ui_BindPropertyPlugin_27_5_$1.transformer = com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxyBase.encodeForHtml;
    var ui_BindPropertyPlugin_30_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_30_5_$1.componentProperty = "iconCls";
    ui_BindPropertyPlugin_30_5_$1.bindTo = this.getIconClsVE();
    config_$1.plugins = [ui_BindPropertyPlugin_27_5_$1, ui_BindPropertyPlugin_30_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Mhcu(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxyBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.workAreaTabProxy",
      constructor: WorkAreaTabProxy$,
      super$Mhcu: function() {
        com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxyBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TAB_CONFIG: undefined,
        __initStatics__: function() {
          TAB_CONFIG$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxyBase",
        "com.coremedia.ui.components.ExtendedTab",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
