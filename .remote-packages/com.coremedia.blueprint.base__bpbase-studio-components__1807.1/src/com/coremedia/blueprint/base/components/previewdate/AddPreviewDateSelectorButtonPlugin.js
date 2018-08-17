Ext.define("com.coremedia.blueprint.base.components.previewdate.AddPreviewDateSelectorButtonPlugin", function(AddPreviewDateSelectorButtonPlugin) {/*package com.coremedia.blueprint.base.components.previewdate{
import com.coremedia.ui.plugins.NestedRulesPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.toolbar.Separator;
import com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButton;
public class AddPreviewDateSelectorButtonPlugin extends NestedRulesPlugin{

    import com.coremedia.cms.editor.sdk.preview.PreviewPanel;

    /**
     * The itemId of the first preview panel toolbar separator.
     * /
    public static const PREVIEW_TOOLBAR_SEP_FIRST_ITEM_ID:String = "previewToolbarSepFirst";

    /**
     * The itemId of the second preview panel toolbar separator.
     * /
    public static const PREVIEW_TOOLBAR_SEP_SECOND_ITEM_ID:String = "previewToolbarSepSecond";

    public*/function AddPreviewDateSelectorButtonPlugin$(config/*:AddPreviewDateSelectorButtonPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var defaults_$1/*:AddPreviewDateSelectorButtonPlugin*/ =AS3.cast(AddPreviewDateSelectorButtonPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_PreviewPanelToolbar_28_5_$1/*:com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar,{});
    var ui_AddItemsPlugin_30_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var tbSeparator_32_13_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    AS3.setBindable(tbSeparator_32_13_$1,"hidden" , true);
    tbSeparator_32_13_$1.itemId =net.jangaroo.ext.Exml.asString( AddPreviewDateSelectorButtonPlugin.PREVIEW_TOOLBAR_SEP_FIRST_ITEM_ID);
    var bpb$components_PreviewDateSelectorButton_33_13_$1/*:com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButton*/ =AS3.cast(com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButton,{});
    bpb$components_PreviewDateSelectorButton_33_13_$1.itemId = "previewDateSelectorButton";
    AS3.setBindable(bpb$components_PreviewDateSelectorButton_33_13_$1,"previewPanel" , AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewPanel,AS3.getBindable(config,"cmp","DUMMY")));
    var tbSeparator_35_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    AS3.setBindable(tbSeparator_35_13_$1,"hidden" , true);
    tbSeparator_35_13_$1.itemId =net.jangaroo.ext.Exml.asString( AddPreviewDateSelectorButtonPlugin.PREVIEW_TOOLBAR_SEP_SECOND_ITEM_ID);
    AS3.setBindable(ui_AddItemsPlugin_30_9_$1,"items" , [tbSeparator_32_13_$1, bpb$components_PreviewDateSelectorButton_33_13_$1, tbSeparator_35_13_$1]);
    editor_PreviewPanelToolbar_28_5_$1.plugins = [ui_AddItemsPlugin_30_9_$1];
    config_$1.rules = [editor_PreviewPanelToolbar_28_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ngLT(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.NestedRulesPlugin",
      constructor: AddPreviewDateSelectorButtonPlugin$,
      super$ngLT: function() {
        com.coremedia.ui.plugins.NestedRulesPlugin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PREVIEW_TOOLBAR_SEP_FIRST_ITEM_ID: "previewToolbarSepFirst",
        PREVIEW_TOOLBAR_SEP_SECOND_ITEM_ID: "previewToolbarSepSecond"
      },
      requires: [
        "Ext.toolbar.Separator",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanel",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButton"]
    };
});
