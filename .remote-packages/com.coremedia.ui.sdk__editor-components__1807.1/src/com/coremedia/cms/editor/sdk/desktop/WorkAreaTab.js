Ext.define("com.coremedia.cms.editor.sdk.desktop.WorkAreaTab", function(WorkAreaTab) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
[PublicApi]
public class WorkAreaTab extends WorkAreaTabBase{

    import com.coremedia.ui.components.ExtendedTab;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.workAreaTab";

    [Bindable]
    public var entity:Object;
    private static const*/var TAB_CONFIG$static/*:ExtendedTab*/;/* =*/function TAB_CONFIG$static_(){TAB_CONFIG$static=( AS3.cast(com.coremedia.ui.components.ExtendedTab,{
      minWidth: 90
    }));};/*

    public*/function WorkAreaTab$(config/*:WorkAreaTab = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBase,{});
    var defaults_$1/*:WorkAreaTab*/ =AS3.cast(WorkAreaTab,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemsLazyUntilEvent = "beforerender";
    AS3.setBindable(config_$1,"closable" , true);
    config_$1["tabConfig"] = TAB_CONFIG$static;
    var ui_BindPropertyPlugin_30_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_30_5_$1.componentProperty = "title";
    ui_BindPropertyPlugin_30_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateTitle"));
    ui_BindPropertyPlugin_30_5_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    ui_BindPropertyPlugin_30_5_$1.ifUndefined = com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBase.TITLE_BUSY_INDICATOR;
    var ui_BindPropertyPlugin_34_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_34_5_$1.componentProperty = "iconCls";
    ui_BindPropertyPlugin_34_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateIcon"));
    config_$1.plugins = [ui_BindPropertyPlugin_30_5_$1, ui_BindPropertyPlugin_34_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$PjRB(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.workAreaTab",
      constructor: WorkAreaTab$,
      super$PjRB: function() {
        com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBase.prototype.constructor.apply(this, arguments);
      },
      config: {entity: null},
      statics: {
        TAB_CONFIG: undefined,
        __initStatics__: function() {
          TAB_CONFIG$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBase",
        "com.coremedia.ui.components.ExtendedTab",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ]
    };
});
