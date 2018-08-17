Ext.define("com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenu", function(BreadcrumbElementMenu) {/*package com.coremedia.cms.editor.sdk.components.breadcrumb{
import com.coremedia.cms.editor.sdk.components.breadcrumb.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindComponentsPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
public class BreadcrumbElementMenu extends BreadcrumbElementMenuBase{

    import com.coremedia.ui.models.bem.BEMBlock;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.breadcrumbElementMenu";

    public*/function BreadcrumbElementMenu$(config/*:BreadcrumbElementMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuBase,{});
    var defaults_$1/*:BreadcrumbElementMenu*/ =AS3.cast(BreadcrumbElementMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["ariaRole"] = "listbox";
    var object_31_5_$1/*:Object*/ = {};
    object_31_5_$1.hide =AS3.bind( this,"onHideInternal");
    AS3.setBindable(config_$1,"listeners" , object_31_5_$1);
    var ui_BindComponentsPlugin_34_5_$1/*:com.coremedia.ui.plugins.BindComponentsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindComponentsPlugin,{});
    AS3.setBindable(ui_BindComponentsPlugin_34_5_$1,"valueExpression" , this.getMenuItemModels(AS3.getBindable(config,"treeModel"), AS3.getBindable(config,"breadcrumbElementId"), AS3.getBindable(config,"selectedNodeValueExpression")));
    AS3.setBindable(ui_BindComponentsPlugin_34_5_$1,"configBeanParameterName" , "model");
    AS3.setBindable(ui_BindComponentsPlugin_34_5_$1,"clearBeforeUpdate" , true);
    AS3.setBindable(ui_BindComponentsPlugin_34_5_$1,"getKey" , com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuBase.getMenuItemModelKey);
    var editor_BreadcrumbElementMenuItem_40_9_$1/*: com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuItem*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuItem,{});
    AS3.setBindable(editor_BreadcrumbElementMenuItem_40_9_$1,"handler" ,AS3.bind( this,"clickBreadcrumbElementMenuItemHandler"));
    AS3.setBindable(ui_BindComponentsPlugin_34_5_$1,"template" , editor_BreadcrumbElementMenuItem_40_9_$1);
    var ui_BEMPlugin_43_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_43_5_$1,"block" , BreadcrumbElementMenu.BREADCRUMB_ELEMENT_MENU_BLOCK);
    config_$1.plugins = [ui_BindComponentsPlugin_34_5_$1, ui_BEMPlugin_43_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Y4hB(config_$1);
  }/*

    public static const BREADCRUMB_ELEMENT_MENU_BLOCK:BEMBlock =*/function BREADCRUMB_ELEMENT_MENU_BLOCK$static_(){BreadcrumbElementMenu.BREADCRUMB_ELEMENT_MENU_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-breadcrumb-menu"));}/*;

    internal var alignOffset:Array;

    /**
     Id for this breadcrumb element.
     * /
    [Bindable]
    public var breadcrumbElementId:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.breadcrumbElementMenu",
      constructor: BreadcrumbElementMenu$,
      super$Y4hB: function() {
        com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuBase.prototype.constructor.apply(this, arguments);
      },
      alignOffset: null,
      config: {breadcrumbElementId: null},
      statics: {
        BREADCRUMB_ELEMENT_MENU_BLOCK: undefined,
        __initStatics__: function() {
          BREADCRUMB_ELEMENT_MENU_BLOCK$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuBase",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindComponentsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElementMenuItem"]
    };
});
