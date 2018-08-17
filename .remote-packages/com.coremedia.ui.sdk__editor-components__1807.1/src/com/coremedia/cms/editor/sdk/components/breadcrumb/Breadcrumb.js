Ext.define("com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb", function(Breadcrumb) {/*package com.coremedia.cms.editor.sdk.components.breadcrumb{
import com.coremedia.cms.editor.sdk.components.breadcrumb.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindComponentsPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
public class Breadcrumb extends BreadcrumbBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.models.bem.BEMBlock;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.breadcrumb";

    public static const BREADCRUMB_BLOCK:BEMBlock =*/function BREADCRUMB_BLOCK$static_(){Breadcrumb.BREADCRUMB_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-breadcrumb"));}/*;

    public*/function Breadcrumb$(config/*:Breadcrumb = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbBase,{});
    var defaults_$1/*:Breadcrumb*/ =AS3.cast(Breadcrumb,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_breadcrumb_toolbar_text'));
    var ui_BindComponentsPlugin_63_5_$1/*:com.coremedia.ui.plugins.BindComponentsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindComponentsPlugin,{});
    AS3.setBindable(ui_BindComponentsPlugin_63_5_$1,"valueExpression" , this.getPathValueExpression(AS3.getBindable(config,"selectedNodeValueExpression")));
    AS3.setBindable(ui_BindComponentsPlugin_63_5_$1,"configBeanParameterName" , "breadcrumbElementId");
    var editor_BreadcrumbElement_66_9_$1/*: com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElement*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElement,{});
    AS3.setBindable(editor_BreadcrumbElement_66_9_$1,"treeModel" , AS3.getBindable(config,"treeModel"));
    AS3.setBindable(editor_BreadcrumbElement_66_9_$1,"selectedNodeValueExpression" , AS3.getBindable(config,"selectedNodeValueExpression"));
    editor_BreadcrumbElement_66_9_$1.hideIfRootNode = AS3.getBindable(config,"hideRootNode");
    AS3.setBindable(editor_BreadcrumbElement_66_9_$1,"hideText" , AS3.getBindable(config,"hideElementTexts"));
    AS3.setBindable(editor_BreadcrumbElement_66_9_$1,"hideIcon" , AS3.getBindable(config,"hideElementIcons"));
    AS3.setBindable(editor_BreadcrumbElement_66_9_$1,"disableElementStrategy" , AS3.getBindable(config,"disableElementStrategy"));
    AS3.setBindable(editor_BreadcrumbElement_66_9_$1,"disableNavigation" , AS3.getBindable(config,"disableNavigation"));
    AS3.setBindable(ui_BindComponentsPlugin_63_5_$1,"template" , editor_BreadcrumbElement_66_9_$1);
    var ui_BEMPlugin_75_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_75_5_$1,"block" , Breadcrumb.BREADCRUMB_BLOCK);
    config_$1.plugins = [ui_BindComponentsPlugin_63_5_$1, ui_BEMPlugin_75_5_$1];
    config_$1.items = [];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$t0sG(config_$1);
  }/*

    /**
     * Value expression describing the selected node.
     * /
    [Bindable]
    public var selectedNodeValueExpression:ValueExpression;

    /**
     Value expression that decides over the display of the root node of the tree model in the Breadcrumb.
     * /
    [Bindable]
    public var hideRootNode:Boolean;


    /**
     If set to true this config option disables the navigation down the tree.
     * /
    [Bindable]
    public var disableNavigation:Boolean;


    /**
     Moves breadcrumb element texts to tooltips if set to true (default is false). This setting does
     not move the texts of breadcrumb menu items.
     * /
    [Bindable]
    public var hideElementTexts:Boolean;


    /**
     Disable breadcrumb element icons. This setting does not disable icons for breadcrumb menu items.
     * /
    [Bindable]
    public var hideElementIcons:Boolean;


    /**
     Strategy function to decide whether a breadcrumb Element shall be disabled or not. Function gets handed in
     breadcrumb element id / tree node id and tree model as parameter
     * /
    [Bindable]
    public var disableElementStrategy:Function;


    /**
     Hide component when there are no breadcrumb elements to display.
     * /
    [Bindable]
    public var hideOnEmpty:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.breadcrumb",
      constructor: Breadcrumb$,
      super$t0sG: function() {
        com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedNodeValueExpression: null,
        hideRootNode: false,
        disableNavigation: false,
        hideElementTexts: false,
        hideElementIcons: false,
        disableElementStrategy: null,
        hideOnEmpty: false
      },
      statics: {
        BREADCRUMB_BLOCK: undefined,
        __initStatics__: function() {
          BREADCRUMB_BLOCK$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbBase",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindComponentsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElement"]
    };
});
