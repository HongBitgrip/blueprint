Ext.define("com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElement", function(BreadcrumbElement) {/*package com.coremedia.cms.editor.sdk.components.breadcrumb{
import com.coremedia.cms.editor.sdk.components.breadcrumb.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
public class BreadcrumbElement extends BreadcrumbElementBase{

    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.AriaUtils;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.breadcrumbElement";

    public*/function BreadcrumbElement$(config/*:BreadcrumbElement = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementBase,{});
    var defaults_$1/*:BreadcrumbElement*/ =AS3.cast(BreadcrumbElement,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"clickBreadcrumbElementHandler"));
    config_$1.menuAlign = "tl-br?";
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.AriaUtils.DUMMY_TEXT);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.BREADCRUMB.getSkin());
    AS3.setBindable(config_$1,"disabled" , AS3.getBindable(config,"disableElementStrategy") ? (AS3.getBindable(config,"disableElementStrategy"))(config.breadcrumbElementId, AS3.getBindable(config,"treeModel")) : false);
    var ui_BindPropertyPlugin_51_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_51_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeText"), AS3.getBindable(config,"hideText"));
    ui_BindPropertyPlugin_51_5_$1.componentProperty =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"hideText") ? 'tooltip' : 'text');
    ui_BindPropertyPlugin_51_5_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    var ui_BindPropertyPlugin_54_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_54_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeText"), true);
    ui_BindPropertyPlugin_54_5_$1.componentProperty = "tooltip";
    ui_BindPropertyPlugin_54_5_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    var ui_BindPropertyPlugin_57_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_57_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeAriaLabel"), true);
    ui_BindPropertyPlugin_57_5_$1.componentProperty = "ariaLabel";
    ui_BindPropertyPlugin_57_5_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    var ui_BindPropertyPlugin_60_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_60_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeIconCls"), AS3.getBindable(config,"hideIcon"));
    ui_BindPropertyPlugin_60_5_$1.componentProperty = "iconCls";
    ui_BindPropertyPlugin_60_5_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    var ui_BindPropertyPlugin_63_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_63_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"addRootCss"), AS3.getBindable(config,"addRootCssClass"));
    ui_BindPropertyPlugin_63_5_$1.componentProperty = "cls";
    ui_BindPropertyPlugin_63_5_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    config_$1.plugins = [ui_BindPropertyPlugin_51_5_$1, ui_BindPropertyPlugin_54_5_$1, ui_BindPropertyPlugin_57_5_$1, ui_BindPropertyPlugin_60_5_$1, ui_BindPropertyPlugin_63_5_$1];
    var editor_BreadcrumbElementMenu_68_5_$1/*: com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenu,{});
    AS3.setBindable(editor_BreadcrumbElementMenu_68_5_$1,"breadcrumbElementId" ,net.jangaroo.ext.Exml.asString( config.breadcrumbElementId));
    AS3.setBindable(editor_BreadcrumbElementMenu_68_5_$1,"treeModel" , AS3.getBindable(config,"treeModel"));
    AS3.setBindable(editor_BreadcrumbElementMenu_68_5_$1,"selectedNodeValueExpression" , AS3.getBindable(config,"selectedNodeValueExpression"));
    config_$1.menu = editor_BreadcrumbElementMenu_68_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$i4TC(config_$1);
  }/*

    /**
     Strategy function to decide whether the Element shall be disabled or not. Function gets handed in
     breadcrumb element id / tree node id and tree model as parameter
     * /
    [Bindable]
    public var disableElementStrategy:Function;


    /**
     Moves breadcrumb element texts to tooltips if set to true (default is false). This setting does
     not move the texts of breadcrumb menu items.
     * /
    [Bindable]
    public var hideText:Boolean;


    /**
     Disable breadcrumb element icons. This setting does not disable icons for breadcrumb menu items.
     * /
    [Bindable]
    public var hideIcon:Boolean;


    /**
     Adds a special CSS class to enable custom styling only for the root button element.
     * /
    [Bindable]
    public var addRootCssClass:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.breadcrumbElement",
      constructor: BreadcrumbElement$,
      super$i4TC: function() {
        com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        disableElementStrategy: null,
        hideText: false,
        hideIcon: false,
        addRootCssClass: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.AriaUtils",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenu"]
    };
});
