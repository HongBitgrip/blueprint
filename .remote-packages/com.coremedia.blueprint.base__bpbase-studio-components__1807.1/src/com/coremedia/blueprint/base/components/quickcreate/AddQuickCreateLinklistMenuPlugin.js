Ext.define("com.coremedia.blueprint.base.components.quickcreate.AddQuickCreateLinklistMenuPlugin", function(AddQuickCreateLinklistMenuPlugin) {/*package com.coremedia.blueprint.base.components.quickcreate{
import com.coremedia.ui.plugins.NestedRulesPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.toolbar.Separator;
import com.coremedia.blueprint.base.components.quickcreate.QuickCreateLinklistMenu;
import ext.Component;
public class AddQuickCreateLinklistMenuPlugin extends NestedRulesPlugin{

    import com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField;
    private var componentConfig:LinkListPropertyField;

    // called by generated constructor code
    private*/ function __initialize__(config/*:AddQuickCreateLinklistMenuPlugin*/)/*:void*/ {
      this.componentConfig$kDFZ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField,AS3.getBindable(config,"cmp","DUMMY").initialConfig);
    }/*

    public*/function AddQuickCreateLinklistMenuPlugin$(config/*:AddQuickCreateLinklistMenuPlugin = null*/){if(arguments.length<=0)config=null;this.__initialize__$kDFZ(config);
    var config_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var defaults_$1/*:AddQuickCreateLinklistMenuPlugin*/ =AS3.cast(AddQuickCreateLinklistMenuPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_LinkListPropertyFieldToolbar_24_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar,{});
    var ui_AddItemsPlugin_26_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var tbSeparator_28_13_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var bpb$components_QuickCreateLinklistMenu_29_13_$1/*:com.coremedia.blueprint.base.components.quickcreate.QuickCreateLinklistMenu*/ =AS3.cast(com.coremedia.blueprint.base.components.quickcreate.QuickCreateLinklistMenu,{});
    AS3.setBindable(bpb$components_QuickCreateLinklistMenu_29_13_$1,"bindTo" , AS3.getBindable(this.componentConfig$kDFZ,"bindTo","DUMMY"));
    AS3.setBindable(bpb$components_QuickCreateLinklistMenu_29_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(this.componentConfig$kDFZ,"forceReadOnlyValueExpression","DUMMY"));
    AS3.setBindable(bpb$components_QuickCreateLinklistMenu_29_13_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(this.componentConfig$kDFZ,"propertyName","DUMMY")));
    AS3.setBindable(bpb$components_QuickCreateLinklistMenu_29_13_$1,"linkType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(this.componentConfig$kDFZ,"linkType","DUMMY")));
    AS3.setBindable(ui_AddItemsPlugin_26_9_$1,"items" , [tbSeparator_28_13_$1, bpb$components_QuickCreateLinklistMenu_29_13_$1]);
    var component_35_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_35_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.PASTE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_AddItemsPlugin_26_9_$1,"after" , [component_35_13_$1]);
    editor_LinkListPropertyFieldToolbar_24_5_$1.plugins = [ui_AddItemsPlugin_26_9_$1];
    config_$1.rules = [editor_LinkListPropertyFieldToolbar_24_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kDFZ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.NestedRulesPlugin",
      componentConfig$kDFZ: null,
      __initialize__$kDFZ: __initialize__,
      constructor: AddQuickCreateLinklistMenuPlugin$,
      super$kDFZ: function() {
        com.coremedia.ui.plugins.NestedRulesPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.Component",
        "Ext.toolbar.Separator",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.quickcreate.QuickCreateLinklistMenu"]
    };
});
