Ext.define("com.coremedia.cms.editor.sdk.collectionview.SwitchViewButtonsContainer", function(SwitchViewButtonsContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.actions.SwitchViewAction;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class SwitchViewButtonsContainer extends Container{

    import com.coremedia.cms.editor.sdk.EditorContextImpl;
    import com.coremedia.cms.editor.sdk.editorContext;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;

    import ext.Ext;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.switchViewButtonsContainer";
    private var collectionViewModel:CollectionViewModel;
    private var uniqueId:String;

    // called by generated constructor code
    private*/ function __initialize__(config/*:SwitchViewButtonsContainer*/)/*:void*/ {
      this.collectionViewModel$BsoA = AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getCollectionViewModel();
      this.uniqueId$BsoA = Ext.id();
    }/*

    public*/function SwitchViewButtonsContainer$(config/*:SwitchViewButtonsContainer = null*/){if(arguments.length<=0)config=null;this.__initialize__$BsoA(config);
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:SwitchViewButtonsContainer*/ =AS3.cast(SwitchViewButtonsContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId = "switchButtonsContainer";
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GROUP.getSkin());
    var ui_IconButton_40_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_40_5_$1.itemId = "list";
    ui_IconButton_40_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR_GROUPED.getSkin());
    ui_IconButton_40_5_$1.scope = AS3.getBindable(config,"scope");
    AS3.setBindable(ui_IconButton_40_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'list_view')));
    AS3.setBindable(ui_IconButton_40_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_listView_btn_tooltip'));
    AS3.setBindable(ui_IconButton_40_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_listView_btn_tooltip')));
    AS3.setBindable(ui_IconButton_40_5_$1,"pressed" , true);
    ui_IconButton_40_5_$1.toggleGroup =net.jangaroo.ext.Exml.asString( this.uniqueId$BsoA + '-switchButtonsContainer-toggle-group');
    ui_IconButton_40_5_$1.enableToggle = true;
    ui_IconButton_40_5_$1.allowDepress = false;
    var editor_SwitchViewAction_51_9_$1/*:com.coremedia.cms.editor.sdk.actions.SwitchViewAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.SwitchViewAction,{});
    AS3.setBindable(editor_SwitchViewAction_51_9_$1,"view" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW));
    AS3.setBindable(editor_SwitchViewAction_51_9_$1,"collectionViewModel" , this.collectionViewModel$BsoA);
    ui_IconButton_40_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.SwitchViewAction(editor_SwitchViewAction_51_9_$1);
    var ui_IconButton_55_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_55_5_$1.itemId = "thumb";
    ui_IconButton_55_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR_GROUPED.getSkin());
    ui_IconButton_55_5_$1.scope = AS3.getBindable(config,"scope");
    AS3.setBindable(ui_IconButton_55_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'thumbnail_view')));
    AS3.setBindable(ui_IconButton_55_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_thumbnailView_btn_tooltip'));
    AS3.setBindable(ui_IconButton_55_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_thumbnailView_btn_tooltip')));
    ui_IconButton_55_5_$1.toggleGroup =net.jangaroo.ext.Exml.asString( this.uniqueId$BsoA + '-switchButtonsContainer-toggle-group');
    ui_IconButton_55_5_$1.enableToggle = true;
    ui_IconButton_55_5_$1.allowDepress = false;
    var editor_SwitchViewAction_65_9_$1/*: com.coremedia.cms.editor.sdk.actions.SwitchViewAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.SwitchViewAction,{});
    AS3.setBindable(editor_SwitchViewAction_65_9_$1,"view" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.THUMBNAILS_VIEW));
    AS3.setBindable(editor_SwitchViewAction_65_9_$1,"collectionViewModel" , this.collectionViewModel$BsoA);
    ui_IconButton_55_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.SwitchViewAction(editor_SwitchViewAction_65_9_$1);
    config_$1.items = [ui_IconButton_40_5_$1, ui_IconButton_55_5_$1];
    var layout_HBox_71_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_71_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BsoA(config_$1);
  }/*

    [Bindable]
    public var scope:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.cms.editor.sdk.config.switchViewButtonsContainer",
      collectionViewModel$BsoA: null,
      uniqueId$BsoA: null,
      __initialize__$BsoA: __initialize__,
      constructor: SwitchViewButtonsContainer$,
      super$BsoA: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {scope: null},
      requires: [
        "Ext",
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.actions.SwitchViewAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
