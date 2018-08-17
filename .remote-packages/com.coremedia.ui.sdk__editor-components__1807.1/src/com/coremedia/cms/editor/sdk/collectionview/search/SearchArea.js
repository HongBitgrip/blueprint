Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SearchArea", function(SearchArea) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import net.jangaroo.ext.Exml;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.plugins.UpdateEnabledPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.container.Container;
import com.coremedia.ui.plugins.BEMMixin;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.cms.editor.sdk.actions.CollectionViewModelAction;
import com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/* using focusable="true" here as focus delegation from parent containers (e.g. windows) doesn't work otherwise. * /
public class SearchArea extends SearchAreaBase{

    import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
    import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
    import com.coremedia.cms.editor.sdk.editorContext;
    import com.coremedia.ui.bem.GroupBEMEntities;
    import com.coremedia.ui.context.ComponentContextManager;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.TextfieldSkin;
    import com.coremedia.ui.skins.ToolbarSkin;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.searchArea";

    /**
     * The itemId of the container of the toggle button and breadcrumb
     * /
    public static const BREADCRUMB_CONTAINER_ITEM_ID:String = "breadcrumbContainer";

    /**
     * The itemId of the container of switch mode buttons
     * /
    public static const SWITCH_BUTTON_CONTAINER_ITEM_ID:String = "switchButtonContainer";

    /**
     * The itemId of the switch to repository button
     * /
    public static const SWITCH_TO_REPOSITORY_BUTTON_ITEM_ID:String = "switchToRepository";
    private var selectedFolderValueExpression:com.coremedia.ui.data.ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:SearchArea*/)/*:void*/ {
      this.selectedFolderValueExpression$CTyA = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME);
    }/*

    public*/function SearchArea$(config/*:SearchArea = null*/){if(arguments.length<=0)config=null;this.__initialize__$CTyA(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase,{});
    var defaults_$1/*:SearchArea*/ =AS3.cast(SearchArea,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "anchor");
    config_$1["focusable"] = true;
    config_$1.defaultFocus =net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase.SEARCH_FIELD_ITEM_ID).build());
    var toolbar_59_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_59_5_$1.itemId = "searchBarPanel";
    toolbar_59_5_$1["ariaRole"] = null;
    toolbar_59_5_$1["focusableContainer"] = false;
    toolbar_59_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_header_toolbar'));
    toolbar_59_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WINDOW_HEADER.getSkin());
    var ui_IconButton_65_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_65_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_historyBack_btn_tooltip'));
    ui_IconButton_65_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_historyBack_btn_tooltip'));
    ui_IconButton_65_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INVERTED.getSkin());
    AS3.setBindable(ui_IconButton_65_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'backward')));
    AS3.setBindable(ui_IconButton_65_9_$1,"disabled" , true);
    ui_IconButton_65_9_$1.itemId = "back";
    AS3.setBindable(ui_IconButton_65_9_$1,"scale" , "medium");
    AS3.setBindable(ui_IconButton_65_9_$1,"handler" ,AS3.bind( this,"back"));
    var ui_UpdateEnabledPlugin_74_13_$1/*:com.coremedia.ui.plugins.UpdateEnabledPlugin*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPlugin,{});
    var ui_ValueExpression_76_17_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_76_17_$1,"expression" , "collectionViewModel.history.historyBean.enableBack");
    AS3.setBindable(ui_ValueExpression_76_17_$1,"context" , this);
    AS3.setBindable(ui_UpdateEnabledPlugin_74_13_$1,"valueExpression" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_76_17_$1));
    ui_IconButton_65_9_$1.plugins = [ui_UpdateEnabledPlugin_74_13_$1];
    var ui_IconButton_82_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_82_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_historyForward_btn_tooltip'));
    ui_IconButton_82_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_historyForward_btn_tooltip'));
    ui_IconButton_82_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INVERTED.getSkin());
    AS3.setBindable(ui_IconButton_82_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'forward')));
    AS3.setBindable(ui_IconButton_82_9_$1,"disabled" , true);
    ui_IconButton_82_9_$1.itemId = "forward";
    AS3.setBindable(ui_IconButton_82_9_$1,"scale" , "medium");
    AS3.setBindable(ui_IconButton_82_9_$1,"handler" ,AS3.bind( this,"forward"));
    var ui_UpdateEnabledPlugin_91_13_$1/*: com.coremedia.ui.plugins.UpdateEnabledPlugin*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPlugin,{});
    var ui_ValueExpression_93_17_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_93_17_$1,"expression" , "collectionViewModel.history.historyBean.enableForward");
    AS3.setBindable(ui_ValueExpression_93_17_$1,"context" , this);
    AS3.setBindable(ui_UpdateEnabledPlugin_91_13_$1,"valueExpression" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_93_17_$1));
    ui_IconButton_82_9_$1.plugins = [ui_UpdateEnabledPlugin_91_13_$1];
    var container_99_9_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_99_9_$1.flex = 1.0;
    var editor_ContentTypeSelector_101_13_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector,{});
    editor_ContentTypeSelector_101_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase.TYPE_BOX_COMBO_ITEM_ID);
    editor_ContentTypeSelector_101_13_$1.flex = 0.3;
    AS3.setBindable(editor_ContentTypeSelector_101_13_$1,"minWidth" , 100.0);
    AS3.setBindable(editor_ContentTypeSelector_101_13_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_content_type_selector_empty_text')));
    editor_ContentTypeSelector_101_13_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_contenttypeselector_tooltip'));
    AS3.setBindable(editor_ContentTypeSelector_101_13_$1,"entries" , com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase.getAvailableContentTypeEntries());
    AS3.setBindable(editor_ContentTypeSelector_101_13_$1,"contentTypeValueExpression" , this.getContentTypeValueExpression(AS3.getBindable(config,"collectionViewModel")));
    editor_ContentTypeSelector_101_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TextfieldSkin.WINDOW_HEADER.getSkin());
    var ui_BEMMixin_110_17_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_110_17_$1,"bemElement" , com.coremedia.ui.bem.GroupBEMEntities.ELEMENT_LEFT);

    delete ui_BEMMixin_110_17_$1['xtype'];
    delete ui_BEMMixin_110_17_$1['xclass'];
    net.jangaroo.ext.Exml.apply(editor_ContentTypeSelector_101_13_$1, ui_BEMMixin_110_17_$1);
    var editor_SearchField_113_13_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.SearchField*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SearchField,{});
    editor_SearchField_113_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase.SEARCH_FIELD_ITEM_ID);
    editor_SearchField_113_13_$1.flex = 0.7;
    AS3.setBindable(editor_SearchField_113_13_$1,"collectionViewModel" , AS3.getBindable(config,"collectionViewModel"));
    editor_SearchField_113_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TextfieldSkin.WINDOW_HEADER.getSkin());
    var ui_BEMMixin_118_17_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_118_17_$1,"bemElement" , com.coremedia.ui.bem.GroupBEMEntities.ELEMENT_RIGHT);

    delete ui_BEMMixin_118_17_$1['xtype'];
    delete ui_BEMMixin_118_17_$1['xclass'];
    net.jangaroo.ext.Exml.apply(editor_SearchField_113_13_$1, ui_BEMMixin_118_17_$1);
    container_99_9_$1.items = [editor_ContentTypeSelector_101_13_$1, editor_SearchField_113_13_$1];
    var layout_HBox_123_13_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_99_9_$1,"layout" , layout_HBox_123_13_$1);
    var ui_BEMPlugin_126_13_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_126_13_$1,"block" , com.coremedia.ui.bem.GroupBEMEntities.BLOCK);
    container_99_9_$1.plugins = [ui_BEMPlugin_126_13_$1];
    var ui_IconButton_129_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_129_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_search_btn_tooltip'));
    ui_IconButton_129_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_search_btn_tooltip'));
    ui_IconButton_129_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INVERTED.getSkin());
    AS3.setBindable(ui_IconButton_129_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'search')));
    AS3.setBindable(ui_IconButton_129_9_$1,"scale" , "small");
    ui_IconButton_129_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase.SEARCH_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_129_9_$1,"handler" ,AS3.bind( this,"search"));
    toolbar_59_5_$1.items = [ui_IconButton_65_9_$1, ui_IconButton_82_9_$1, container_99_9_$1, ui_IconButton_129_9_$1];
    var container_138_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_138_5_$1.itemId =net.jangaroo.ext.Exml.asString( SearchArea.BREADCRUMB_CONTAINER_ITEM_ID);
    var layout_HBox_140_9_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_140_9_$1,"align" , "stretch");
    AS3.setBindable(container_138_5_$1,"layout" , layout_HBox_140_9_$1);
    var toolbar_143_9_$1/*: ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_143_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_searchArea_mode_toolbar_label'));
    var container_145_13_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_145_13_$1.itemId =net.jangaroo.ext.Exml.asString( SearchArea.SWITCH_BUTTON_CONTAINER_ITEM_ID);
    container_145_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GROUP.getSkin());
    AS3.setBindable(container_145_13_$1,"layout" , "hbox");
    var ui_IconButton_149_17_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_149_17_$1.itemId =net.jangaroo.ext.Exml.asString( SearchArea.SWITCH_TO_REPOSITORY_BUTTON_ITEM_ID);
    ui_IconButton_149_17_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR_GROUPED.getSkin());
    AS3.setBindable(ui_IconButton_149_17_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'tree_view')));
    AS3.setBindable(ui_IconButton_149_17_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_repositoryMode_btn_tooltip')));
    AS3.setBindable(ui_IconButton_149_17_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_repositoryMode_btn_tooltip'));
    AS3.setBindable(ui_IconButton_149_17_$1,"pressed" , true);
    ui_IconButton_149_17_$1.toggleGroup =net.jangaroo.ext.Exml.asString( SearchArea.SWITCH_BUTTON_CONTAINER_ITEM_ID + '-toggle-group');
    ui_IconButton_149_17_$1.enableToggle = true;
    ui_IconButton_149_17_$1.allowDepress = false;
    var editor_CollectionViewModelAction_159_21_$1/*:com.coremedia.cms.editor.sdk.actions.CollectionViewModelAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.CollectionViewModelAction,{});
    AS3.setBindable(editor_CollectionViewModelAction_159_21_$1,"property" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY));
    AS3.setBindable(editor_CollectionViewModelAction_159_21_$1,"value" , com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.REPOSITORY_MODE);
    ui_IconButton_149_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.CollectionViewModelAction(editor_CollectionViewModelAction_159_21_$1);
    var ui_IconButton_163_17_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_163_17_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase.SWITCH_TO_SEARCH_BUTTON_ITEM_ID);
    ui_IconButton_163_17_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR_GROUPED.getSkin());
    AS3.setBindable(ui_IconButton_163_17_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'search')));
    AS3.setBindable(ui_IconButton_163_17_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_searchMode_btn_tooltip')));
    AS3.setBindable(ui_IconButton_163_17_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_searchMode_btn_tooltip'));
    ui_IconButton_163_17_$1.toggleGroup =net.jangaroo.ext.Exml.asString( SearchArea.SWITCH_BUTTON_CONTAINER_ITEM_ID + '-toggle-group');
    ui_IconButton_163_17_$1.enableToggle = true;
    ui_IconButton_163_17_$1.allowDepress = false;
    var editor_CollectionViewModelAction_172_21_$1/*: com.coremedia.cms.editor.sdk.actions.CollectionViewModelAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.CollectionViewModelAction,{});
    AS3.setBindable(editor_CollectionViewModelAction_172_21_$1,"property" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.MODE_PROPERTY));
    AS3.setBindable(editor_CollectionViewModelAction_172_21_$1,"value" , com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_MODE);
    ui_IconButton_163_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.CollectionViewModelAction(editor_CollectionViewModelAction_172_21_$1);
    container_145_13_$1.items = [ui_IconButton_149_17_$1, ui_IconButton_163_17_$1];
    toolbar_143_9_$1.items = [container_145_13_$1];
    var editor_Breadcrumb_180_9_$1/*:com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb,{});
    editor_Breadcrumb_180_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase.BREADCRUMB_ITEM_ID);
    editor_Breadcrumb_180_9_$1.flex = 1.0;
    editor_Breadcrumb_180_9_$1.padding = 0;
    editor_Breadcrumb_180_9_$1.defaultButtonUI =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    editor_Breadcrumb_180_9_$1.enableOverflow = true;
    AS3.setBindable(editor_Breadcrumb_180_9_$1,"treeModel" , com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager()['getLibraryTreeModel']());
    AS3.setBindable(editor_Breadcrumb_180_9_$1,"selectedNodeValueExpression" , this.selectedFolderValueExpression$CTyA);
    AS3.setBindable(editor_Breadcrumb_180_9_$1,"hideRootNode" , true);
    AS3.setBindable(editor_Breadcrumb_180_9_$1,"hideElementIcons" , true);
    container_138_5_$1.items = [toolbar_143_9_$1, editor_Breadcrumb_180_9_$1];
    config_$1.items = [toolbar_59_5_$1, container_138_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$CTyA(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.searchArea",
      selectedFolderValueExpression$CTyA: null,
      __initialize__$CTyA: __initialize__,
      constructor: SearchArea$,
      super$CTyA: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BREADCRUMB_CONTAINER_ITEM_ID: "breadcrumbContainer",
        SWITCH_BUTTON_CONTAINER_ITEM_ID: "switchButtonContainer",
        SWITCH_TO_REPOSITORY_BUTTON_ITEM_ID: "switchToRepository"
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchAreaBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.GroupBEMEntities",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.UpdateEnabledPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.TextfieldSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.CollectionViewModelAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector",
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchField",
        "com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
