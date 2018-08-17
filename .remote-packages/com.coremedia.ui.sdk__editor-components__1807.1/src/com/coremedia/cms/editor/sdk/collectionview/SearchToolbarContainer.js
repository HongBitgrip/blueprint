Ext.define("com.coremedia.cms.editor.sdk.collectionview.SearchToolbarContainer", function(SearchToolbarContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.toolbar.Toolbar;
import ext.layout.container.HBoxLayout;
[PublicApi]
public class SearchToolbarContainer extends SearchToolbarContainerBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.searchToolbarContainer";

    public static const TOOLBAR_ITEM_ID:String = "repositorySearchToolbar";

    public*/function SearchToolbarContainer$(config/*:SearchToolbarContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.SearchToolbarContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchToolbarContainerBase,{});
    var defaults_$1/*:SearchToolbarContainer*/ =AS3.cast(SearchToolbarContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId = "searchToolbar";
    var editor_SearchToolbarSwitchingContainer_34_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.SearchToolbarSwitchingContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchToolbarSwitchingContainer,{});
    editor_SearchToolbarSwitchingContainer_34_5_$1.itemId = "searchToolbarSwitchingContainer";
    AS3.setBindable(editor_SearchToolbarSwitchingContainer_34_5_$1,"width" , "100%");
    AS3.setBindable(editor_SearchToolbarSwitchingContainer_34_5_$1,"activeItemValueExpression" , AS3.getBindable(config,"activeSearchToolbarExpression"));
    var container_38_9_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_38_9_$1.itemId = "repositorySearchToolbarContainer";
    var editor_SearchToolbar_40_13_$1/*: com.coremedia.cms.editor.sdk.collectionview.SearchToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchToolbar,{});
    AS3.setBindable(editor_SearchToolbar_40_13_$1,"margin" , "1 0 0");
    editor_SearchToolbar_40_13_$1.itemId =net.jangaroo.ext.Exml.asString( SearchToolbarContainer.TOOLBAR_ITEM_ID);
    AS3.setBindable(editor_SearchToolbar_40_13_$1,"selectedItemsValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    editor_SearchToolbar_40_13_$1.defaultButtonUI =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    var toolbar_44_13_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_44_13_$1.itemId = "switchViewButtonsToolbar";
    toolbar_44_13_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_switchView_toolbar_label'));
    toolbar_44_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.LIGHT.getSkin());
    var editor_SwitchViewButtonsContainer_48_17_$1/*: com.coremedia.cms.editor.sdk.collectionview.SwitchViewButtonsContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SwitchViewButtonsContainer,{});
    toolbar_44_13_$1.items = [editor_SwitchViewButtonsContainer_48_17_$1];
    container_38_9_$1.items = [editor_SearchToolbar_40_13_$1, toolbar_44_13_$1];
    var layout_HBox_53_13_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_38_9_$1,"layout" , layout_HBox_53_13_$1);
    editor_SearchToolbarSwitchingContainer_34_5_$1.items = [container_38_9_$1];
    config_$1.items = [editor_SearchToolbarSwitchingContainer_34_5_$1];
    var layout_HBox_60_5_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_60_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$MDN$(config_$1);
  }/*

    /**
     * The value expression contains the item id of the active toolbar.
     * /
    [Bindable]
    public var activeSearchToolbarExpression:ValueExpression;

    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.SearchToolbarContainerBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.searchToolbarContainer",
      constructor: SearchToolbarContainer$,
      super$MDN$: function() {
        com.coremedia.cms.editor.sdk.collectionview.SearchToolbarContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        activeSearchToolbarExpression: null,
        selectedItemsValueExpression: null
      },
      statics: {TOOLBAR_ITEM_ID: "repositorySearchToolbar"},
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.collectionview.SearchToolbarContainerBase",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.SearchToolbar",
        "com.coremedia.cms.editor.sdk.collectionview.SearchToolbarSwitchingContainer",
        "com.coremedia.cms.editor.sdk.collectionview.SwitchViewButtonsContainer"
      ]
    };
});
