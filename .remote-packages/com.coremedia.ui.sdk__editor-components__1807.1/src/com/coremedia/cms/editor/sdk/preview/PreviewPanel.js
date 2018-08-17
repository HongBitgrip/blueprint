Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewPanel", function(PreviewPanel) {/*package com.coremedia.cms.editor.sdk.preview{
import com.coremedia.cms.editor.sdk.preview.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.SwitchingContainer;
import ext.container.Container;
import ext.form.field.DisplayField;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**

 A panel that shows a CAE-rendered preview of a document. In a standard Studio environment the preview panel component
 of the current workarea tab can be obtained as follows.
 <pre>
 var activeTab:Panel = editorContext.getWorkArea().getActiveTab();
 if (premular.xtype === activeTab.xtype) {
         var previewPnl:PreviewPanel = activeTab.findByType(previewPanel.xtype)[0] as PreviewPanel;
       }</pre>

 * /
public class PreviewPanel extends PreviewPanelBase{

    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    import ext.panel.Panel;
    import ext.toolbar.Toolbar;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.previewPanel";

    /**
     * A function to be used as "applyTo" of an addItemsPlugin that wants to tweak the toolbar of this PreviewPanel.
     * /
    public static const FIND_TOOLBAR:Function =*/function FIND_TOOLBAR$static_(){PreviewPanel.FIND_TOOLBAR=(
            function (thePreviewPanel/*:Panel*/)/*:Toolbar*/ {
              return thePreviewPanel.getTopToolbar();
            });}/*;

    public var reloadHandler:Function;

    public*/function PreviewPanel$(config/*:PreviewPanel = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preview.PreviewPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewPanelBase,{});
    var defaults_$1/*:PreviewPanel*/ =AS3.cast(PreviewPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["ariaRole"] = "region";
    config_$1["focusable"] = true;
    config_$1.defaultFocus = ":focusable";
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewPanel_label'));
    AS3.setBindable(config_$1,"layout" , "fit");
    config_$1.hideCollapseTool = true;
    config_$1.header = false;
    var ui_SwitchingContainer_96_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    AS3.setBindable(ui_SwitchingContainer_96_5_$1,"activeItemValueExpression" , this.getActivePreviewPanelValueExpression());
    var editor_InnerPreviewPanel_99_9_$1/*: com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel,{});
    editor_InnerPreviewPanel_99_9_$1.itemId = "innerPreviewPanel";
    AS3.setBindable(editor_InnerPreviewPanel_99_9_$1,"hideDeviceSlider" , AS3.getBindable(config,"hideDeviceSlider"));
    AS3.setBindable(editor_InnerPreviewPanel_99_9_$1,"metadataService" , this.getMetadataService());
    var container_102_9_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_102_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.NO_PREVIEW_ITEM_ID);
    container_102_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.DARK_200);
    var displayField_105_13_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_105_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.ITALIC.getSkin());
    AS3.setBindable(displayField_105_13_$1,"value" , AS3.getBindable(config,"noPreviewAvailableMessage") || this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewPanel_emptyPreview'));
    container_102_9_$1.items = [displayField_105_13_$1];
    ui_SwitchingContainer_96_5_$1.items = [editor_InnerPreviewPanel_99_9_$1, container_102_9_$1];
    config_$1.items = [ui_SwitchingContainer_96_5_$1];
    var editor_PreviewPanelToolbar_113_5_$1/*: com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar,{});
    AS3.setBindable(editor_PreviewPanelToolbar_113_5_$1,"collapseHandler" , AS3.getBindable(config,"collapseHandler"));
    AS3.setBindable(editor_PreviewPanelToolbar_113_5_$1,"hidden" , AS3.getBindable(config,"hideToolbar"));
    editor_PreviewPanelToolbar_113_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WORKAREA.getSkin());
    AS3.setBindable(editor_PreviewPanelToolbar_113_5_$1,"reloadHandler" , function()/*:void*/ { this$.reloadFrame(); if(config.reloadHandler) {config.reloadHandler();} });
    var ui_ValueExpression_118_9_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_118_9_$1,"expression" , "previewUrl");
    AS3.setBindable(ui_ValueExpression_118_9_$1,"context" , this);
    AS3.setBindable(editor_PreviewPanelToolbar_113_5_$1,"urlValueExpression" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_118_9_$1));
    config_$1.tbar = editor_PreviewPanelToolbar_113_5_$1;
    var editor_BookmarkAction_124_5_$1/*:com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction,{});
    AS3.setBindable(editor_BookmarkAction_124_5_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(config_$1,"actionList" , [new com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction(editor_BookmarkAction_124_5_$1)]);
    config_$1["actionList$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$aMOS(config_$1);
  }/*

    /** The function that will be called on collapse * /
    [Bindable]
    public var collapseHandler:Function;


    /** The function that will be called on reload * /


    /** The number of milliseconds that the PreviewPanel waits for more property changes before reloading the preview.
   Defaults to 1000 ms (1 s).  * /
    [Bindable]
    public var reloadAfterChangesDelay:Number;


    /**
     The message to display if no preview is available.
     * /
    [Bindable]
    public var noPreviewAvailableMessage:String;


    /**
     The preferred device type for displaying content in the preview panel.
     If the configured preferredDevice type is not supported, it is ignored.
     * /
    [Bindable]
    public var preferredDevice:String;


    /**
     Determines whether user interactions with the preview panel (e.g. right-clicks, feedback on hover)
     shall be disabled.
     * /
    [Bindable]
    public var disableUserInteraction:Boolean;


    /*
       Allows to hide the toolbar
     * /
    [Bindable]
    public var hideToolbar:Boolean;


    /*
       Allows to hide the preview device slider
     * /
    [Bindable]
    public var hideDeviceSlider:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.PreviewPanelBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.previewPanel",
      reloadHandler: null,
      constructor: PreviewPanel$,
      super$aMOS: function() {
        com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        collapseHandler: null,
        reloadAfterChangesDelay: NaN,
        noPreviewAvailableMessage: null,
        preferredDevice: null,
        disableUserInteraction: false,
        hideToolbar: false,
        hideDeviceSlider: false
      },
      statics: {
        FIND_TOOLBAR: undefined,
        __initStatics__: function() {
          FIND_TOOLBAR$static_();
        }
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelBase",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction",
        "com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar"
      ]
    };
});
