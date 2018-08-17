Ext.define("com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuItem", function(BreadcrumbElementMenuItem) {/*package com.coremedia.cms.editor.sdk.components.breadcrumb{
import com.coremedia.cms.editor.sdk.components.breadcrumb.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.AddQuickTipPlugin;
public class BreadcrumbElementMenuItem extends BreadcrumbElementMenuItemBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.EncodingUtil;

    import ext.util.Format;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.breadcrumbElementMenuItem";

    public*/function BreadcrumbElementMenuItem$(config/*:BreadcrumbElementMenuItem = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuItemBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuItemBase,{});
    var defaults_$1/*:BreadcrumbElementMenuItem*/ =AS3.cast(BreadcrumbElementMenuItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["ariaRole"] = "option";
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"model").iconCls));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.EncodingUtil.encodeForHTML(Ext.util.Format.ellipsis(AS3.getBindable(config,"model").text, 23, false))));
    var ui_AddQuickTipPlugin_31_5_$1/*:com.coremedia.ui.plugins.AddQuickTipPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddQuickTipPlugin,{});
    AS3.setBindable(ui_AddQuickTipPlugin_31_5_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.EncodingUtil.encodeForHTML(AS3.getBindable(config,"model").text)));
    config_$1.plugins = [ui_AddQuickTipPlugin_31_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ejn_(config_$1);
  }/*

    /**
     * Currently selected node of the bean tree model.
     * /
    [Bindable]
    public var selectedNodeValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuItemBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.breadcrumbElementMenuItem",
      constructor: BreadcrumbElementMenuItem$,
      super$ejn_: function() {
        com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuItemBase.prototype.constructor.apply(this, arguments);
      },
      config: {selectedNodeValueExpression: null},
      requires: [
        "Ext.util.Format",
        "com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuItemBase",
        "com.coremedia.ui.plugins.AddQuickTipPlugin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ]
    };
});
