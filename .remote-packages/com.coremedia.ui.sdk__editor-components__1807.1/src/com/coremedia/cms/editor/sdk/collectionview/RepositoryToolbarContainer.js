Ext.define("com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarContainer", function(RepositoryToolbarContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
import ext.toolbar.Toolbar;
import ext.layout.container.HBoxLayout;
[PublicApi]
public class RepositoryToolbarContainer extends RepositoryToolbarContainerBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.repositoryToolbarContainer";

    public static const TOOLBAR_ITEM_ID:String = "repositoryToolbar";

    public*/function RepositoryToolbarContainer$(config/*:RepositoryToolbarContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarContainerBase,{});
    var defaults_$1/*:RepositoryToolbarContainer*/ =AS3.cast(RepositoryToolbarContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId = "repositoryToolbar";
    var editor_RepositoryToolbar_37_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar,{});
    AS3.setBindable(editor_RepositoryToolbar_37_5_$1,"margin" , "1 0 0");
    editor_RepositoryToolbar_37_5_$1.itemId =net.jangaroo.ext.Exml.asString( RepositoryToolbarContainer.TOOLBAR_ITEM_ID);
    editor_RepositoryToolbar_37_5_$1.defaultButtonUI =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    AS3.setBindable(editor_RepositoryToolbar_37_5_$1,"selectedItemsValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    AS3.setBindable(editor_RepositoryToolbar_37_5_$1,"createdContentValueExpression" , AS3.getBindable(config,"createdContentValueExpression"));
    var toolbar_42_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_42_5_$1.itemId = "switchViewButtonsToolbar";
    toolbar_42_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_switchView_toolbar_label'));
    toolbar_42_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.LIGHT.getSkin());
    var editor_SwitchViewButtonsContainer_46_9_$1/*: com.coremedia.cms.editor.sdk.collectionview.SwitchViewButtonsContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SwitchViewButtonsContainer,{});
    toolbar_42_5_$1.items = [editor_SwitchViewButtonsContainer_46_9_$1];
    config_$1.items = [editor_RepositoryToolbar_37_5_$1, toolbar_42_5_$1];
    var layout_HBox_51_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_51_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$RUSX(config_$1);
  }/*

    /**
     * value expression for the selected items, either in the list view, or - if the selection there is empty - the
     * selected folder in the tree view.
     * /
    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;

    /**
     * value expression that acts as a model for informing a view of a newly created content object.
     * /
    [Bindable]
    public var createdContentValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarContainerBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.repositoryToolbarContainer",
      constructor: RepositoryToolbarContainer$,
      super$RUSX: function() {
        com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedItemsValueExpression: null,
        createdContentValueExpression: null
      },
      statics: {TOOLBAR_ITEM_ID: "repositoryToolbar"},
      requires: [
        "Ext.layout.container.HBox",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarContainerBase",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar",
        "com.coremedia.cms.editor.sdk.collectionview.SwitchViewButtonsContainer"
      ]
    };
});
