Ext.define("com.coremedia.cms.editor.sdk.premular.Premular", function(Premular) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.PremularBase;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import ext.container.Container;
import ext.layout.container.VBoxLayout;
import com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarReadOnlyContainer;
import com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcher;
import ext.resizer.Splitter;
import com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarContainer;
import ext.toolbar.Toolbar;
import com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButton;
import com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar;
import ext.tab.TabPanel;
import com.coremedia.cms.editor.sdk.plugins.TabExpandPlugin;
import com.coremedia.ui.plugins.DragDropTabPlugin;
import ext.tab.TabBar;
import com.coremedia.cms.editor.sdk.premular.DocumentPanel;
import com.coremedia.ui.layouts.MultiItemSplitter;
import com.coremedia.cms.editor.sdk.preview.PreviewPanel;
import com.coremedia.cms.editor.sdk.preview.PreviewContextMenu;
[PublicApi]
/**
 The premular is a edit panel for a content with a embedded preview.
 It is a context provider defining the following context variable:
 <ul>
 <li><code>CONTENT_VARIABLE_NAME</code></li>
 </ul>
 * /
public class Premular extends PremularBase{

    import com.coremedia.cap.content.ContentObject;
    import com.coremedia.cms.editor.sdk.util.UIBehaviour;
    import com.coremedia.ui.skins.SplitterSkin;
    import com.coremedia.ui.skins.TabBarSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.premular";

    /**
     * The context property name for the content.
     * The context value is a content object.
     * /
    public static const CONTENT_VARIABLE_NAME:String = "content";

    public*/function Premular$(config/*:Premular = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.premular.PremularBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PremularBase,{});
    var defaults_$1/*:Premular*/ =AS3.cast(Premular,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_HBox_70_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_70_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_HBox_70_5_$1);
    var container_75_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_75_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.DOCUMENT_CONTAINER_ITEM_ID);
    container_75_5_$1.flex = 1.0;
    AS3.setBindable(container_75_5_$1,"hidden" , AS3.getBindable(config,"showForm") === false);
    container_75_5_$1["ariaRole"] = "region";
    container_75_5_$1["focusable"] = true;
    container_75_5_$1.defaultFocus = ":focusable";
    container_75_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Premular_form_label'));
    AS3.setBindable(container_75_5_$1,"minWidth" , com.coremedia.cms.editor.sdk.premular.PremularBase.DEFAULT_DOCUMENT_CONTAINER_MIN_WIDTH);
    var layout_VBox_84_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_84_9_$1,"align" , "stretch");
    AS3.setBindable(container_75_5_$1,"layout" , layout_VBox_84_9_$1);
    var container_87_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_87_9_$1.focusableContainer = true;
    var layout_HBox_89_13_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_87_9_$1,"layout" , layout_HBox_89_13_$1);
    var editor_DocumentFormToolbarReadOnlyContainer_92_13_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarReadOnlyContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarReadOnlyContainer,{});
    editor_DocumentFormToolbarReadOnlyContainer_92_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.READ_ONLY_DOCUMENT_FORM_TOOLBAR_CONTAINER_ITEM_ID);
    AS3.setBindable(editor_DocumentFormToolbarReadOnlyContainer_92_13_$1,"hidden" , true);
    editor_DocumentFormToolbarReadOnlyContainer_92_13_$1.flex = 1.0;
    var layout_HBox_96_17_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(editor_DocumentFormToolbarReadOnlyContainer_92_13_$1,"layout" , layout_HBox_96_17_$1);
    var editor_ReadOnlyDocumentFormToolbarDispatcher_99_17_$1/*:com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcher*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcher,{});
    editor_ReadOnlyDocumentFormToolbarDispatcher_99_17_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.READ_ONLY_DOCUMENT_FORM_TOOLBAR_DISPATCHER_ITEM_ID);
    editor_ReadOnlyDocumentFormToolbarDispatcher_99_17_$1.flex = 1.0;
    AS3.setBindable(editor_ReadOnlyDocumentFormToolbarDispatcher_99_17_$1,"premular" , this);
    editor_DocumentFormToolbarReadOnlyContainer_92_13_$1.items = [editor_ReadOnlyDocumentFormToolbarDispatcher_99_17_$1];
    var splitter_106_13_$1/*:ext.resizer.Splitter*/ =AS3.cast(Ext.resizer.Splitter,{});
    AS3.setBindable(splitter_106_13_$1,"width" , "4px");
    AS3.setBindable(splitter_106_13_$1,"disabled" , true);
    AS3.setBindable(splitter_106_13_$1,"hidden" , true);
    splitter_106_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.LIGHT.getSkin());
    splitter_106_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.DOCUMENT_PANEL_HEADER_SPLIT_BAR_ITEM_ID);
    var editor_DocumentFormToolbarContainer_112_13_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarContainer,{});
    editor_DocumentFormToolbarContainer_112_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.DOCUMENT_FORM_TOOLBAR_CONTAINER_ITEM_ID);
    editor_DocumentFormToolbarContainer_112_13_$1.flex = 1.0;
    var layout_HBox_115_17_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(editor_DocumentFormToolbarContainer_112_13_$1,"layout" , layout_HBox_115_17_$1);
    var toolbar_118_17_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_118_17_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.PREMULAR_MODE_TOOLBAR_ITEM_ID);
    toolbar_118_17_$1["tabGuard"] = false;
    toolbar_118_17_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WORKAREA.getSkin());
    var editor_SwitchDifferencingButton_122_21_$1/*:com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButton,{});
    AS3.setBindable(editor_SwitchDifferencingButton_122_21_$1,"premular" , this);
    editor_SwitchDifferencingButton_122_21_$1.maskOnDisable = false;
    editor_SwitchDifferencingButton_122_21_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.SWITCH_DIFFERENCING_BUTTON_ITEM_ID);
    toolbar_118_17_$1.items = [editor_SwitchDifferencingButton_122_21_$1];
    var editor_DocumentFormToolbar_127_17_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar,{});
    editor_DocumentFormToolbar_127_17_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.DOCUMENT_FORM_TOOLBAR_ITEM_ID);
    editor_DocumentFormToolbar_127_17_$1.flex = 1.0;
    editor_DocumentFormToolbar_127_17_$1["tabGuard"] = false;
    editor_DocumentFormToolbar_127_17_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WORKAREA.getSkin());
    AS3.setBindable(editor_DocumentFormToolbar_127_17_$1,"bindTo" , this.getContentBeanValueExpression());
    AS3.setBindable(editor_DocumentFormToolbar_127_17_$1,"propertyFieldRegistry" , this.getDocumentFormPropertyFieldRegistry());
    AS3.setBindable(editor_DocumentFormToolbar_127_17_$1,"premular" , this);
    AS3.setBindable(editor_DocumentFormToolbar_127_17_$1,"collapseHandler" , function()/*:void*/ {this$.collapsePanel(com.coremedia.cms.editor.sdk.premular.PremularBase.DOCUMENT_PANEL_ITEM_ID);});
    editor_DocumentFormToolbarContainer_112_13_$1.items = [toolbar_118_17_$1, editor_DocumentFormToolbar_127_17_$1];
    container_87_9_$1.items = [editor_DocumentFormToolbarReadOnlyContainer_92_13_$1, splitter_106_13_$1, editor_DocumentFormToolbarContainer_112_13_$1];
    var tabPanel_140_9_$1/*:ext.tab.TabPanel*/ =AS3.cast(Ext.tab.Panel,{});
    tabPanel_140_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.TABS_ITEM_ID);
    var editor_TabExpandPlugin_142_13_$1/*:com.coremedia.cms.editor.sdk.plugins.TabExpandPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.TabExpandPlugin,{});
    var ui_DragDropTabPlugin_143_13_$1/*:com.coremedia.ui.plugins.DragDropTabPlugin*/ =AS3.cast(com.coremedia.ui.plugins.DragDropTabPlugin,{});
    AS3.setBindable(ui_DragDropTabPlugin_143_13_$1,"activateOnHoverDDGroups" , com.coremedia.cms.editor.sdk.util.UIBehaviour.ACTIVATE_ON_HOVER_DD_GROUPS);
    AS3.setBindable(ui_DragDropTabPlugin_143_13_$1,"activateOnHoverDelay" , com.coremedia.cms.editor.sdk.util.UIBehaviour.ACTIVATE_ON_HOVER_DELAY);
    tabPanel_140_9_$1.plugins = [editor_TabExpandPlugin_142_13_$1, ui_DragDropTabPlugin_143_13_$1];
    tabPanel_140_9_$1.items = [];
    var tabBar_149_13_$1/*:ext.tab.TabBar*/ =AS3.cast(Ext.tab.Bar,{});
    tabBar_149_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TabBarSkin.WORKAREA_PANEL.getSkin());
    AS3.setBindable(tabPanel_140_9_$1,"tabBar" , tabBar_149_13_$1);
    var container_153_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_153_9_$1.flex = 1.0;
    var layout_HBox_155_13_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_155_13_$1,"align" , "stretch");
    AS3.setBindable(container_153_9_$1,"layout" , layout_HBox_155_13_$1);
    var editor_DocumentPanel_158_13_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentPanel,{});
    editor_DocumentPanel_158_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.READ_ONLY_DOCUMENT_PANEL_ITEM_ID);
    editor_DocumentPanel_158_13_$1.flex = 1.0;
    editor_DocumentPanel_158_13_$1.collapsible = false;
    AS3.setBindable(editor_DocumentPanel_158_13_$1,"readOnly" , true);
    AS3.setBindable(editor_DocumentPanel_158_13_$1,"hidden" , true);
    AS3.setBindable(editor_DocumentPanel_158_13_$1,"premularConfigurationVE" , this.getPremularConfigurationVE(AS3.getBindable(config,"premularConfiguration")));
    AS3.setBindable(editor_DocumentPanel_158_13_$1,"bindTo" , this.getReadOnlyContentValueExpression());
    AS3.setBindable(editor_DocumentPanel_158_13_$1,"diffManager" , this.getDiffManager());
    AS3.setBindable(editor_DocumentPanel_158_13_$1,"propertyFieldRegistry" , this.getReadOnlyPropertyFieldRegistry());
    AS3.setBindable(editor_DocumentPanel_158_13_$1,"focusForwarder" , this.getPremularFocusManager().getReadOnlyDocumentFormFocusForwarder());
    var splitter_169_13_$1/*: ext.resizer.Splitter*/ =AS3.cast(Ext.resizer.Splitter,{});
    AS3.setBindable(splitter_169_13_$1,"width" , "4px");
    AS3.setBindable(splitter_169_13_$1,"disabled" , true);
    AS3.setBindable(splitter_169_13_$1,"hidden" , true);
    splitter_169_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.DARK.getSkin());
    splitter_169_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.DOCUMENT_PANEL_SPLIT_BAR_ITEM_ID);
    var editor_DocumentPanel_175_15_$1/*: com.coremedia.cms.editor.sdk.premular.DocumentPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentPanel,{});
    editor_DocumentPanel_175_15_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.DOCUMENT_PANEL_ITEM_ID);
    editor_DocumentPanel_175_15_$1.flex = 1.0;
    editor_DocumentPanel_175_15_$1.collapsible = false;
    AS3.setBindable(editor_DocumentPanel_175_15_$1,"premularConfigurationVE" , this.getPremularConfigurationVE(AS3.getBindable(config,"premularConfiguration")));
    AS3.setBindable(editor_DocumentPanel_175_15_$1,"bindTo" , this.getContentBeanValueExpression());
    AS3.setBindable(editor_DocumentPanel_175_15_$1,"propertyFieldRegistry" , this.getDocumentFormPropertyFieldRegistry());
    AS3.setBindable(editor_DocumentPanel_175_15_$1,"focusForwarder" , this.getPremularFocusManager().getDocumentFormFocusForwarder());
    container_153_9_$1.items = [editor_DocumentPanel_158_13_$1, splitter_169_13_$1, editor_DocumentPanel_175_15_$1];
    container_75_5_$1.items = [container_87_9_$1, tabPanel_140_9_$1, container_153_9_$1];
    var ui_MultiItemSplitter_188_5_$1/*:com.coremedia.ui.layouts.MultiItemSplitter*/ =AS3.cast(com.coremedia.ui.layouts.MultiItemSplitter,{});
    ui_MultiItemSplitter_188_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.PREVIEW_SPLIT_BAR_ITEM_ID);
    ui_MultiItemSplitter_188_5_$1.stateId = "premular-splitter";
    AS3.setBindable(ui_MultiItemSplitter_188_5_$1,"hidden" , AS3.getBindable(config,"showForm") === false || AS3.getBindable(config,"showPreview") === false);
    ui_MultiItemSplitter_188_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.PREMULAR.getSkin());
    AS3.setBindable(ui_MultiItemSplitter_188_5_$1,"width" , "4px");
    ui_MultiItemSplitter_188_5_$1.collapseOnDblClick = false;
    var editor_PreviewPanel_196_5_$1/*:com.coremedia.cms.editor.sdk.preview.PreviewPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewPanel,{});
    editor_PreviewPanel_196_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.PremularBase.PREVIEW_PANEL_ITEM_ID);
    editor_PreviewPanel_196_5_$1.flex = 1.0;
    AS3.setBindable(editor_PreviewPanel_196_5_$1,"minWidth" , 300.0);
    editor_PreviewPanel_196_5_$1.collapsible = true;
    AS3.setBindable(editor_PreviewPanel_196_5_$1,"collapseHandler" , function()/*:void*/ {this$.collapsePanel(com.coremedia.cms.editor.sdk.premular.PremularBase.PREVIEW_PANEL_ITEM_ID);});
    AS3.setBindable(editor_PreviewPanel_196_5_$1,"bindTo" , this.getContentBeanValueExpression());
    editor_PreviewPanel_196_5_$1.reloadHandler =AS3.bind( this,"refreshContent");
    AS3.setBindable(editor_PreviewPanel_196_5_$1,"focusForwarder" , this.getPremularFocusManager().getPreviewFocusForwarder());
    var editor_PreviewContextMenu_205_9_$1/*:com.coremedia.cms.editor.sdk.preview.PreviewContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewContextMenu,{});
    editor_PreviewPanel_196_5_$1.contextMenu = editor_PreviewContextMenu_205_9_$1;
    config_$1.items = [container_75_5_$1, ui_MultiItemSplitter_188_5_$1, editor_PreviewPanel_196_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fxvK(config_$1);
  }/*

    /**
     * The read only ContentObject (Version or another Content) to be opened in the read-only document form
     * of the side-by-side view. If not set, the side-by-side view is switched off (default).
     *
     * &lt;p>This option can be set as part of the state when opening a tab via WorkAreaTabManager.&lt;/p>
     *
     * @see com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManager#openTab()
     * /
    [Bindable]
    public var readOnlyContentObject:ContentObject;

    /**
     Whether the contained preview panel should be expanded (true, default) or collapsed(false).

     &lt;p>This option can be set as part of the state when opening a tab via WorkAreaTabManager.&lt;/p>

     @see com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManager#openTab()

     * /
    [Bindable]
    public var showPreview:Boolean;


    /**
     Whether the contained form panel should be expanded (true, default) or collapsed(false).

     &lt;p>This option can be set as part of the state when opening a tab via WorkAreaTabManager.&lt;/p>

     @see com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManager#openTab()

     * /
    [Bindable]
    public var showForm:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.PremularBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.premular",
      constructor: Premular$,
      super$fxvK: function() {
        com.coremedia.cms.editor.sdk.premular.PremularBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        readOnlyContentObject: null,
        showPreview: false,
        showForm: false
      },
      statics: {CONTENT_VARIABLE_NAME: "content"},
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.resizer.Splitter",
        "Ext.tab.Bar",
        "Ext.tab.Panel",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.premular.PremularBase",
        "com.coremedia.ui.layouts.MultiItemSplitter",
        "com.coremedia.ui.plugins.DragDropTabPlugin",
        "com.coremedia.ui.skins.SplitterSkin",
        "com.coremedia.ui.skins.TabBarSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.plugins.TabExpandPlugin",
        "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar",
        "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarContainer",
        "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarReadOnlyContainer",
        "com.coremedia.cms.editor.sdk.premular.DocumentPanel",
        "com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcher",
        "com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButton",
        "com.coremedia.cms.editor.sdk.preview.PreviewContextMenu",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanel",
        "com.coremedia.cms.editor.sdk.util.UIBehaviour"
      ]
    };
});
