Ext.define("com.coremedia.blueprint.base.components.previewhighlighting.AddPlacementHighlightButtonPlugin", function(AddPlacementHighlightButtonPlugin) {/*package com.coremedia.blueprint.base.components.previewhighlighting{
import com.coremedia.ui.plugins.AddItemsPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton;
import ext.Component;
public class AddPlacementHighlightButtonPlugin extends AddItemsPlugin{

    import com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase;
    import com.coremedia.ui.skins.ButtonSkin;

    public*/function AddPlacementHighlightButtonPlugin$(config/*:AddPlacementHighlightButtonPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var defaults_$1/*:AddPlacementHighlightButtonPlugin*/ =AS3.cast(AddPlacementHighlightButtonPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"recursive" , true);
    var bp$components_PlacementHighlightButton_19_5_$1/*:com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton*/ =AS3.cast(com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton,{});
    bp$components_PlacementHighlightButton_19_5_$1.itemId = "placementHighlightButton";
    bp$components_PlacementHighlightButton_19_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR_DARK.getSkin());
    AS3.setBindable(config_$1,"items" , [bp$components_PlacementHighlightButton_19_5_$1]);
    var component_23_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_23_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase.DEVICE_TYPE_SLIDER_SPACER_ITEM_ID);
    AS3.setBindable(config_$1,"before" , [component_23_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2Kfn(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddItemsPlugin",
      constructor: AddPlacementHighlightButtonPlugin$,
      super$2Kfn: function() {
        com.coremedia.ui.plugins.AddItemsPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.Component",
        "com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton"]
    };
});
