Ext.define("com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea", function(FavoritesToolbarUserItemsArea) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.DraggableItemsPlugin;
import com.coremedia.ui.plugins.BindComponentsPlugin;
import ext.button.Button;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 The user items area of the favorites toolbar of the Studio.
 It is a context provider defining the following context variable:
 <ul>
 <li><code>CURRENT_SEARCH_STATE_VARIABLE_NAME</code></li>
 </ul>
 * /
public class FavoritesToolbarUserItemsArea extends FavoritesToolbarUserItemsAreaBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    import ext.container.Container;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.favoritesToolbarUserItemsArea";

    /**
     * The name of the default items array property.
     * /
    public static const DEFAULT_ITEMS:String = "defaultItems";

    /**
     * The context property name for the current search state, which the user selects by right-click.
     * The context value is a state object.
     * /
    public static const CURRENT_SEARCH_STATE_VARIABLE_NAME:String = "currentSearchState";

    public*/function FavoritesToolbarUserItemsArea$(config/*:FavoritesToolbarUserItemsArea = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsAreaBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsAreaBase,{});
    var defaults_$1/*:FavoritesToolbarUserItemsArea*/ =AS3.cast(FavoritesToolbarUserItemsArea,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.PLAIN.getSkin());
    var object_45_5_$1/*:Object*/ = {};
    object_45_5_$1.render = function(cont/*:Container*/)/*:void*/ {
                          com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils.initHandling(cont, config.contextMenu, FavoritesToolbarUserItemsArea.CURRENT_SEARCH_STATE_VARIABLE_NAME);
                          };
    AS3.setBindable(config_$1,"listeners" , object_45_5_$1);
    var ui_DraggableItemsPlugin_52_5_$1/*:com.coremedia.ui.plugins.DraggableItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.DraggableItemsPlugin,{});
    AS3.setBindable(ui_DraggableItemsPlugin_52_5_$1,"dropHandler" , com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils.dropHandler);
    AS3.setBindable(ui_DraggableItemsPlugin_52_5_$1,"ddGroup" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils.USER_ITEMS_DD_GROUP));
    AS3.setBindable(ui_DraggableItemsPlugin_52_5_$1,"itemSelector" , "a.x-toolbar-item");
    AS3.setBindable(ui_DraggableItemsPlugin_52_5_$1,"hideGhostWrapper" , true);
    AS3.setBindable(ui_DraggableItemsPlugin_52_5_$1,"sourcePlaceholderBuilder" , com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils.buildSourcePlaceholder);
    AS3.setBindable(ui_DraggableItemsPlugin_52_5_$1,"targetPlaceholderBuilder" , com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils.buildTargetPlaceholder);
    AS3.setBindable(ui_DraggableItemsPlugin_52_5_$1,"ghostBuilder" , com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils.buildDragGhost);
    AS3.setBindable(ui_DraggableItemsPlugin_52_5_$1,"repairHighlightingColor" , "ignore");
    var ui_BindComponentsPlugin_60_5_$1/*:com.coremedia.ui.plugins.BindComponentsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindComponentsPlugin,{});
    AS3.setBindable(ui_BindComponentsPlugin_60_5_$1,"valueExpression" , com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils.getUserItemsValueExpression());
    AS3.setBindable(ui_BindComponentsPlugin_60_5_$1,"configBeanParameterName" , "state");
    AS3.setBindable(ui_BindComponentsPlugin_60_5_$1,"clearBeforeUpdate" , true);
    AS3.setBindable(ui_BindComponentsPlugin_60_5_$1,"reuseComponents" , false);
    AS3.setBindable(ui_BindComponentsPlugin_60_5_$1,"preserveScroll" , true);
    AS3.setBindable(ui_BindComponentsPlugin_60_5_$1,"getKey" , com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils.getUserItemName);
    var editor_FavoritesToolbarUserItem_67_9_$1/*: com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItem*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItem,{});
    editor_FavoritesToolbarUserItem_67_9_$1.ellipsis = 18.0;
    AS3.setBindable(ui_BindComponentsPlugin_60_5_$1,"template" , editor_FavoritesToolbarUserItem_67_9_$1);
    config_$1.plugins = [ui_DraggableItemsPlugin_52_5_$1, ui_BindComponentsPlugin_60_5_$1];
    var button_72_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_72_5_$1,"scale" , "medium");
    AS3.setBindable(button_72_5_$1,"width" , 94);
    AS3.setBindable(button_72_5_$1,"iconAlign" , "top");
    button_72_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.HIGHLIGHT.getSkin());
    AS3.setBindable(button_72_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'FavoritesToolbar_userItems_btn_icon')));
    config_$1["defaultType"] = button_72_5_$1['xtype'];
    delete button_72_5_$1['xtype'];
    delete button_72_5_$1['xclass'];
    config_$1.defaults = button_72_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$XRHo(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsAreaBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.favoritesToolbarUserItemsArea",
      constructor: FavoritesToolbarUserItemsArea$,
      super$XRHo: function() {
        com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsAreaBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DEFAULT_ITEMS: "defaultItems",
        CURRENT_SEARCH_STATE_VARIABLE_NAME: "currentSearchState"
      },
      requires: [
        "Ext.button.Button",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsAreaBase",
        "com.coremedia.ui.plugins.BindComponentsPlugin",
        "com.coremedia.ui.plugins.DraggableItemsPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItem",
        "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUtils"
      ]
    };
});
