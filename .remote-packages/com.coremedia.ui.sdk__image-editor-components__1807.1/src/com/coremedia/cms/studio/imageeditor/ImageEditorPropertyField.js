Ext.define("com.coremedia.cms.studio.imageeditor.ImageEditorPropertyField", function(ImageEditorPropertyField) {/*package com.coremedia.cms.studio.imageeditor{
import com.coremedia.cms.studio.imageeditor.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.plugins.Binding;
import ext.panel.Panel;
import ext.layout.container.BorderLayout;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.ui.plugins.ResizablePlugin;
import com.coremedia.ui.components.StatefulResizer;
import ext.tab.TabPanel;
import ext.tab.TabBar;
import com.coremedia.ui.plugins.BindActiveTabPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.cms.studio.imageeditor.history.UndoRedoButton;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.actions.DeleteBlobAction;
import ext.toolbar.Separator;
import com.coremedia.cms.editor.sdk.actions.OpenBlobAction;
import com.coremedia.cms.studio.imageeditor.actions.FlipImageAction;
import com.coremedia.ui.actions.DependencyTrackedToggleAction;
import com.coremedia.cms.studio.imageeditor.actions.EnlargeAllAction;
import com.coremedia.ui.components.StatefulPanel;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.cms.editor.sdk.components.html5.Html5Upload;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import ext.container.Container;
import com.coremedia.cms.editor.sdk.premular.fields.BooleanPropertyField;
import ext.layout.container.HBoxLayout;
public class ImageEditorPropertyField extends ImageEditorPropertyFieldBase{

    import com.coremedia.cms.studio.imageeditor.actions.FlipImageActionBase;
    import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
    import com.coremedia.cms.studio.imageeditor.util.ConversionUtil;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.data.beanFactory;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.TabBarSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.imageEditorPropertyField";

    /**
     * This is the base CSS class for the image editor.
     * /
    public static const IMAGE_EDITOR_PROPERTY_FIELD:String = "cm-image-editor-property-field";


    /**
     * This is the CSS class for the stage of the image editor.
     * /
    //public static const IMAGE_EDITOR_STAGE_PANEL:String = "image-editor-stage-panel";

    /**
     * This is the CSS class for the stage of the image editor.
     * /
    //public static const IMAGE_EDITOR_STAGE_PANEL_CROPS_ENABLED_MODIFIER:String = BEMUtils.getModifierClassName(IMAGE_EDITOR_STAGE_PANEL, "crops-enabled");

    /**
     * This is the CSS class for the stage inner panel of the image editor to give the editor more space.
     * /
    public static const IMAGE_EDITOR_STAGE_INNER_PANEL:String = "image-editor-stage-inner-panel";

    /**
     * This is the custom CSS class for the image editor.
     * /
    public static const IMAGE_EDITOR_RESIZABLE:String = "image-editor-resizable";
    private var BUNDLE:Object;
    private var activeTabValueExpression:ValueExpression;
    private var readOnlyValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:ImageEditorPropertyField*/)/*:void*/ {
      this.BUNDLE$n9YW = this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.studio.imageeditor.ImageEditor').content;
      this.imageEditorViewModel = this.imageEditorViewModel = com.coremedia.ui.data.beanFactory.createLocalBean();
      this.activeTabValueExpression$n9YW = com.coremedia.ui.data.ValueExpressionFactory.createFromValue('overview');
      this.undoHistory = new com.coremedia.cms.studio.imageeditor.history.UndoHistory(this.imageEditorViewModel);
      this.readOnlyValueExpression$n9YW = this.createReadOnlyValueExpression(config, this.undoHistory);
    }/*

    public*/function ImageEditorPropertyField$(config/*:ImageEditorPropertyField = null*/){if(arguments.length<=0)config=null;this.__initialize__$n9YW(config);
    var config_$1/*: com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase,{});
    var defaults_$1/*:ImageEditorPropertyField*/ =AS3.cast(ImageEditorPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.cls =net.jangaroo.ext.Exml.asString( ImageEditorPropertyField.IMAGE_EDITOR_PROPERTY_FIELD);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.CARD.getSkin());
    var layout_VBox_94_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_94_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_94_5_$1);
    var ui_Binding_98_5_$1/*:com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_98_5_$1,"destination" , "imageEditorViewModel.disableCropping");
    AS3.setBindable(ui_Binding_98_5_$1,"ifUndefined" , false);
    AS3.setBindable(ui_Binding_98_5_$1,"source" , "imageSettings.disableCropping");
    var ui_Binding_101_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_101_5_$1,"destination" , "imageEditorViewModel.orientation");
    AS3.setBindable(ui_Binding_101_5_$1,"ifUndefined" , 0);
    AS3.setBindable(ui_Binding_101_5_$1,"source" , "imageSettings.rotation.crude");
    AS3.setBindable(ui_Binding_101_5_$1,"twoWay" , true);
    AS3.setBindable(ui_Binding_101_5_$1,"transformer" , parseInt);
    AS3.setBindable(ui_Binding_101_5_$1,"reverseTransformer" , com.coremedia.cms.studio.imageeditor.util.ConversionUtil.anyToString);
    var ui_Binding_107_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_107_5_$1,"destination" , "imageEditorViewModel.straighten");
    AS3.setBindable(ui_Binding_107_5_$1,"ifUndefined" , 0);
    AS3.setBindable(ui_Binding_107_5_$1,"source" , "imageSettings.rotation.fine");
    AS3.setBindable(ui_Binding_107_5_$1,"twoWay" , true);
    AS3.setBindable(ui_Binding_107_5_$1,"transformer" , parseInt);
    AS3.setBindable(ui_Binding_107_5_$1,"reverseTransformer" , com.coremedia.cms.studio.imageeditor.util.ConversionUtil.anyToString);
    var ui_Binding_113_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_113_5_$1,"destination" , "imageEditorViewModel.flipHorizontally");
    AS3.setBindable(ui_Binding_113_5_$1,"ifUndefined" , false);
    AS3.setBindable(ui_Binding_113_5_$1,"source" , "imageSettings.reflection.h");
    AS3.setBindable(ui_Binding_113_5_$1,"twoWay" , true);
    AS3.setBindable(ui_Binding_113_5_$1,"transformer" , com.coremedia.cms.studio.imageeditor.util.ConversionUtil.stringToBoolean);
    AS3.setBindable(ui_Binding_113_5_$1,"reverseTransformer" , com.coremedia.cms.studio.imageeditor.util.ConversionUtil.anyToString);
    var ui_Binding_119_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_119_5_$1,"destination" , "imageEditorViewModel.flipVertically");
    AS3.setBindable(ui_Binding_119_5_$1,"ifUndefined" , false);
    AS3.setBindable(ui_Binding_119_5_$1,"source" , "imageSettings.reflection.v");
    AS3.setBindable(ui_Binding_119_5_$1,"twoWay" , true);
    AS3.setBindable(ui_Binding_119_5_$1,"transformer" , com.coremedia.cms.studio.imageeditor.util.ConversionUtil.stringToBoolean);
    AS3.setBindable(ui_Binding_119_5_$1,"reverseTransformer" , com.coremedia.cms.studio.imageeditor.util.ConversionUtil.anyToString);
    var ui_Binding_125_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_125_5_$1,"destination" , "imageEditorViewModel.brightness");
    AS3.setBindable(ui_Binding_125_5_$1,"ifUndefined" , 0);
    AS3.setBindable(ui_Binding_125_5_$1,"source" , "imageSettings.coloring.brightness");
    AS3.setBindable(ui_Binding_125_5_$1,"twoWay" , true);
    AS3.setBindable(ui_Binding_125_5_$1,"transformer" , com.coremedia.cms.studio.imageeditor.util.ConversionUtil.stringToNumber);
    AS3.setBindable(ui_Binding_125_5_$1,"reverseTransformer" , com.coremedia.cms.studio.imageeditor.util.ConversionUtil.anyToString);
    var ui_Binding_131_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_131_5_$1,"destination" , "imageEditorViewModel.contrast");
    AS3.setBindable(ui_Binding_131_5_$1,"ifUndefined" , 0);
    AS3.setBindable(ui_Binding_131_5_$1,"source" , "imageSettings.coloring.contrast");
    AS3.setBindable(ui_Binding_131_5_$1,"twoWay" , true);
    AS3.setBindable(ui_Binding_131_5_$1,"transformer" , com.coremedia.cms.studio.imageeditor.ColorTransformationUtil.transformContrast);
    AS3.setBindable(ui_Binding_131_5_$1,"reverseTransformer" , com.coremedia.cms.studio.imageeditor.ColorTransformationUtil.reverseTransformContrast);
    var ui_Binding_139_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_139_5_$1,"destination" , "imageEditorViewModel.focusArea");
    AS3.setBindable(ui_Binding_139_5_$1,"source" , "imageSettings.focusArea");
    AS3.setBindable(ui_Binding_139_5_$1,"ifUndefined" , com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.transformFocusArea(undefined));
    AS3.setBindable(ui_Binding_139_5_$1,"transformer" , com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.transformFocusArea);
    var ui_Binding_143_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_143_5_$1,"destination" , "imageEditorViewModel.focusPoint");
    AS3.setBindable(ui_Binding_143_5_$1,"source" , "imageSettings.focusPoint");
    AS3.setBindable(ui_Binding_143_5_$1,"ifUndefined" , this.transformFocusPointStruct(undefined));
    AS3.setBindable(ui_Binding_143_5_$1,"transformer" ,AS3.bind( this,"transformFocusPointStruct"));
    config_$1.plugins = [ui_Binding_98_5_$1, ui_Binding_101_5_$1, ui_Binding_107_5_$1, ui_Binding_113_5_$1, ui_Binding_119_5_$1, ui_Binding_125_5_$1, ui_Binding_131_5_$1, ui_Binding_139_5_$1, ui_Binding_143_5_$1];
    var panel_150_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    AS3.setBindable(panel_150_5_$1,"height" , 400);
    var layout_Border_152_9_$1/*:ext.layout.container.BorderLayout*/ =AS3.cast(Ext.layout.container.Border,{});
    AS3.setBindable(panel_150_5_$1,"layout" , layout_Border_152_9_$1);
    var editor_SetPropertyLabelPlugin_155_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_155_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyLabelPlugin_155_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var ui_ResizablePlugin_157_9_$1/*:com.coremedia.ui.plugins.ResizablePlugin*/ =AS3.cast(com.coremedia.ui.plugins.ResizablePlugin,{});
    var ui_StatefulResizer_159_13_$1/*:com.coremedia.ui.components.StatefulResizer*/ =AS3.cast(com.coremedia.ui.components.StatefulResizer,{});
    ui_StatefulResizer_159_13_$1.minHeight = 30;
    ui_StatefulResizer_159_13_$1.handles = "s";
    ui_StatefulResizer_159_13_$1.pinned = true;
    ui_StatefulResizer_159_13_$1.dynamic = false;
    ui_ResizablePlugin_157_9_$1.resizableConfig = ui_StatefulResizer_159_13_$1;
    panel_150_5_$1.plugins = [editor_SetPropertyLabelPlugin_155_9_$1, ui_ResizablePlugin_157_9_$1];
    var tabPanel_167_9_$1/*:ext.tab.TabPanel*/ =AS3.cast(Ext.tab.Panel,{});
    tabPanel_167_9_$1.itemId = "overviewVariants";
    AS3.setBindable(tabPanel_167_9_$1,"region" , "north");
    tabPanel_167_9_$1.deferredRender = false;
    AS3.setBindable(tabPanel_167_9_$1,"activeItem" , "overview");
    var tabBar_172_13_$1/*:ext.tab.TabBar*/ =AS3.cast(Ext.tab.Bar,{});
    tabBar_172_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TabBarSkin.WORKAREA_LIGHT.getSkin());
    AS3.setBindable(tabPanel_167_9_$1,"tabBar" , tabBar_172_13_$1);
    var ui_BindActiveTabPlugin_175_13_$1/*:com.coremedia.ui.plugins.BindActiveTabPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindActiveTabPlugin,{});
    ui_BindActiveTabPlugin_175_13_$1.bindTo = this.activeTabValueExpression$n9YW;
    tabPanel_167_9_$1.plugins = [ui_BindActiveTabPlugin_175_13_$1];
    var ie_VariantTab_178_13_$1/*: com.coremedia.cms.studio.imageeditor.VariantTab*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.VariantTab,{});
    AS3.setBindable(ie_VariantTab_178_13_$1,"readOnlyValueExpression" , this.readOnlyValueExpression$n9YW);
    AS3.setBindable(ie_VariantTab_178_13_$1,"undoHistory" , this.undoHistory);
    AS3.setBindable(ie_VariantTab_178_13_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(ie_VariantTab_178_13_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    ie_VariantTab_178_13_$1.imageEditorViewModel = this.imageEditorViewModel;
    tabPanel_167_9_$1["defaultType"] = ie_VariantTab_178_13_$1['xtype'];
    delete ie_VariantTab_178_13_$1['xtype'];
    delete ie_VariantTab_178_13_$1['xclass'];
    tabPanel_167_9_$1.defaults = ie_VariantTab_178_13_$1;
    var ie_VariantTab_185_13_$1/*: com.coremedia.cms.studio.imageeditor.VariantTab*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.VariantTab,{});
    ie_VariantTab_185_13_$1.itemId = "overview";
    AS3.setBindable(ie_VariantTab_185_13_$1,"title" , this.BUNDLE$n9YW.IEC_overview_title);
    AS3.setBindable(ie_VariantTab_185_13_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var toolbar_189_17_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_189_17_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.LIGHT.getSkin());
    var ie_UndoRedoButton_191_21_$1/*:com.coremedia.cms.studio.imageeditor.history.UndoRedoButton*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.history.UndoRedoButton,{});
    ie_UndoRedoButton_191_21_$1.itemId = "undo";
    ie_UndoRedoButton_191_21_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    AS3.setBindable(ie_UndoRedoButton_191_21_$1,"tooltip" , this.BUNDLE$n9YW.IEC_action_undo_toolTip);
    ie_UndoRedoButton_191_21_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_undo_toolTip);
    AS3.setBindable(ie_UndoRedoButton_191_21_$1,"undoHistory" , this.undoHistory);
    AS3.setBindable(ie_UndoRedoButton_191_21_$1,"isRedo" , false);
    AS3.setBindable(ie_UndoRedoButton_191_21_$1,"disableValueExpression" , this.getDisableExpression(config));
    var ie_UndoRedoButton_198_21_$1/*: com.coremedia.cms.studio.imageeditor.history.UndoRedoButton*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.history.UndoRedoButton,{});
    ie_UndoRedoButton_198_21_$1.itemId = "redo";
    ie_UndoRedoButton_198_21_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    AS3.setBindable(ie_UndoRedoButton_198_21_$1,"tooltip" , this.BUNDLE$n9YW.IEC_action_redo_toolTip);
    ie_UndoRedoButton_198_21_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_redo_toolTip);
    AS3.setBindable(ie_UndoRedoButton_198_21_$1,"undoHistory" , this.undoHistory);
    AS3.setBindable(ie_UndoRedoButton_198_21_$1,"isRedo" , true);
    AS3.setBindable(ie_UndoRedoButton_198_21_$1,"disableValueExpression" , this.getDisableExpression(config));
    var ui_IconButton_205_21_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_205_21_$1.itemId = "deleteBlob";
    var editor_DeleteBlobAction_207_25_$1/*:com.coremedia.cms.editor.sdk.actions.DeleteBlobAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteBlobAction,{});
    AS3.setBindable(editor_DeleteBlobAction_207_25_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_deleteblob_iconCls));
    editor_DeleteBlobAction_207_25_$1["tooltip"] = this.BUNDLE$n9YW.IEC_action_deleteblob_toolTip;
    AS3.setBindable(editor_DeleteBlobAction_207_25_$1,"blobValueExpression" , this.getBlobValueExpression(config));
    AS3.setBindable(editor_DeleteBlobAction_207_25_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_DeleteBlobAction_207_25_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    ui_IconButton_205_21_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.DeleteBlobAction(editor_DeleteBlobAction_207_25_$1);
    var tbSeparator_214_21_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_215_21_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_215_21_$1.itemId = "openBlob";
    var editor_OpenBlobAction_217_25_$1/*:com.coremedia.cms.editor.sdk.actions.OpenBlobAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenBlobAction,{});
    AS3.setBindable(editor_OpenBlobAction_217_25_$1,"blobValueExpression" , this.getBlobValueExpression(config));
    ui_IconButton_215_21_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenBlobAction(editor_OpenBlobAction_217_25_$1);
    var tbSeparator_220_21_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ie_RotationMenuButton_221_21_$1/*: com.coremedia.cms.studio.imageeditor.RotationMenuButton*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.RotationMenuButton,{});
    ie_RotationMenuButton_221_21_$1.itemId = "rotationMenu";
    AS3.setBindable(ie_RotationMenuButton_221_21_$1,"imageEditorViewModel" , this.imageEditorViewModel);
    AS3.setBindable(ie_RotationMenuButton_221_21_$1,"disabledValueExpression" , this.getDisableExpression(config));
    AS3.setBindable(ie_RotationMenuButton_221_21_$1,"undoHistory" , this.undoHistory);
    AS3.setBindable(ie_RotationMenuButton_221_21_$1,"orientedImageDimensionsValueExpression" , this.getCommonTransformsImageDimensionsValueExpression(config));
    AS3.setBindable(ie_RotationMenuButton_221_21_$1,"statusValueExpression" , this.getDisableStatusExpression(this.getDisableExpression(config)));
    AS3.setBindable(ie_RotationMenuButton_221_21_$1,"variantsValueExpression" , this.getVariantsValueExpression());
    var ui_IconButton_228_21_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_228_21_$1.itemId = "fliph";
    ui_IconButton_228_21_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_fliph_toolTip);
    var ie_FlipImageAction_230_25_$1/*:com.coremedia.cms.studio.imageeditor.actions.FlipImageAction*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.FlipImageAction,{});
    AS3.setBindable(ie_FlipImageAction_230_25_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_fliph_iconCls));
    ie_FlipImageAction_230_25_$1["tooltip"] = this.BUNDLE$n9YW.IEC_action_fliph_toolTip;
    AS3.setBindable(ie_FlipImageAction_230_25_$1,"statusExpression" , this.getDisableStatusExpression(this.getDisableExpression(config)));
    AS3.setBindable(ie_FlipImageAction_230_25_$1,"variantsValueExpression" , this.getVariantsValueExpression());
    AS3.setBindable(ie_FlipImageAction_230_25_$1,"flipDirection" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.imageeditor.actions.FlipImageActionBase.FLIP_HORIZONTALLY));
    AS3.setBindable(ie_FlipImageAction_230_25_$1,"undoHistory" , this.undoHistory);
    AS3.setBindable(ie_FlipImageAction_230_25_$1,"imageEditorViewModel" , this.imageEditorViewModel);
    ui_IconButton_228_21_$1.baseAction = new com.coremedia.cms.studio.imageeditor.actions.FlipImageAction(ie_FlipImageAction_230_25_$1);
    var ui_IconButton_239_21_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_239_21_$1.itemId = "flipv";
    ui_IconButton_239_21_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_flipv_toolTip);
    var ie_FlipImageAction_241_25_$1/*: com.coremedia.cms.studio.imageeditor.actions.FlipImageAction*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.FlipImageAction,{});
    AS3.setBindable(ie_FlipImageAction_241_25_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_flipv_iconCls));
    ie_FlipImageAction_241_25_$1["tooltip"] = this.BUNDLE$n9YW.IEC_action_flipv_toolTip;
    AS3.setBindable(ie_FlipImageAction_241_25_$1,"statusExpression" , this.getDisableStatusExpression(this.getDisableExpression(config)));
    AS3.setBindable(ie_FlipImageAction_241_25_$1,"variantsValueExpression" , this.getVariantsValueExpression());
    AS3.setBindable(ie_FlipImageAction_241_25_$1,"flipDirection" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.imageeditor.actions.FlipImageActionBase.FLIP_VERTICALLY));
    AS3.setBindable(ie_FlipImageAction_241_25_$1,"undoHistory" , this.undoHistory);
    AS3.setBindable(ie_FlipImageAction_241_25_$1,"imageEditorViewModel" , this.imageEditorViewModel);
    ui_IconButton_239_21_$1.baseAction = new com.coremedia.cms.studio.imageeditor.actions.FlipImageAction(ie_FlipImageAction_241_25_$1);
    var tbSeparator_250_21_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ie_ColorTransformationMenuButton_251_21_$1/*: com.coremedia.cms.studio.imageeditor.ColorTransformationMenuButton*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ColorTransformationMenuButton,{});
    ie_ColorTransformationMenuButton_251_21_$1.itemId = "colorMenu";
    AS3.setBindable(ie_ColorTransformationMenuButton_251_21_$1,"disabledValueExpression" , this.getDisableExpression(config));
    AS3.setBindable(ie_ColorTransformationMenuButton_251_21_$1,"undoHistory" , this.undoHistory);
    var tbSeparator_254_21_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_255_21_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_255_21_$1.itemId = "viewcrops";
    ui_IconButton_255_21_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_viewcrops_off_toolTip);
    ui_IconButton_255_21_$1.enableToggle = true;
    var ui_DependencyTrackedToggleAction_257_25_$1/*:com.coremedia.ui.actions.DependencyTrackedToggleAction*/ =AS3.cast(com.coremedia.ui.actions.DependencyTrackedToggleAction,{});
    AS3.setBindable(ui_DependencyTrackedToggleAction_257_25_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_viewcrops_off_iconCls));
    ui_DependencyTrackedToggleAction_257_25_$1["tooltip"] = this.BUNDLE$n9YW.IEC_action_viewcrops_off_toolTip;
    AS3.setBindable(ui_DependencyTrackedToggleAction_257_25_$1,"statusExpression" , this.getDisableStatusExpression(this.getDisableExpression(config)));
    AS3.setBindable(ui_DependencyTrackedToggleAction_257_25_$1,"tooltipPressed" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_viewcrops_on_toolTip));
    AS3.setBindable(ui_DependencyTrackedToggleAction_257_25_$1,"pressedValueExpression" , this.getShowCropsValueExpression());
    ui_IconButton_255_21_$1.baseAction = new com.coremedia.ui.actions.DependencyTrackedToggleAction(ui_DependencyTrackedToggleAction_257_25_$1);
    var ui_IconButton_264_21_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_264_21_$1.itemId = "enlargeAll";
    ui_IconButton_264_21_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_enlarge_all_crops_off_toolTip);
    AS3.setBindable(ui_IconButton_264_21_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_enlarge_all_crops_iconCls));
    ui_IconButton_264_21_$1.enableToggle = true;
    var ie_EnlargeAllAction_269_25_$1/*:com.coremedia.cms.studio.imageeditor.actions.EnlargeAllAction*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.EnlargeAllAction,{});
    ie_EnlargeAllAction_269_25_$1["tooltip"] = this.BUNDLE$n9YW.IEC_action_enlarge_all_crops_off_toolTip;
    AS3.setBindable(ie_EnlargeAllAction_269_25_$1,"tooltipPressed" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_action_enlarge_all_crops_on_toolTip));
    AS3.setBindable(ie_EnlargeAllAction_269_25_$1,"pressedValueExpression" , this.createEnlargeAllCropsPressedValueExpression());
    AS3.setBindable(ie_EnlargeAllAction_269_25_$1,"statusExpression" , this.getDisableStatusExpression(this.getDisableExpression(config)));
    AS3.setBindable(ie_EnlargeAllAction_269_25_$1,"imageDimensionsValueExpression" , this.getCommonTransformsImageDimensionsValueExpression(config));
    AS3.setBindable(ie_EnlargeAllAction_269_25_$1,"variantBoxedImageDimensionsValueExpressions" , this.getVariantBoxedImageDimensionsValueExpressions(config));
    AS3.setBindable(ie_EnlargeAllAction_269_25_$1,"imageEditorViewModel" , this.imageEditorViewModel);
    AS3.setBindable(ie_EnlargeAllAction_269_25_$1,"variantsValueExpression" , this.getVariantsValueExpression());
    AS3.setBindable(ie_EnlargeAllAction_269_25_$1,"undoHistory" , this.undoHistory);
    ui_IconButton_264_21_$1.baseAction = new com.coremedia.cms.studio.imageeditor.actions.EnlargeAllAction(ie_EnlargeAllAction_269_25_$1);
    var ie_ResetImageMenuButton_281_21_$1/*: com.coremedia.cms.studio.imageeditor.ResetImageMenuButton*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ResetImageMenuButton,{});
    ie_ResetImageMenuButton_281_21_$1.itemId = "resetImageMenu";
    AS3.setBindable(ie_ResetImageMenuButton_281_21_$1,"imageEditorViewModel" , this.imageEditorViewModel);
    AS3.setBindable(ie_ResetImageMenuButton_281_21_$1,"undoHistory" , this.undoHistory);
    AS3.setBindable(ie_ResetImageMenuButton_281_21_$1,"disabledValueExpression" , this.getDisableExpression(config));
    AS3.setBindable(ie_ResetImageMenuButton_281_21_$1,"variantsValueExpression" , this.getVariantsValueExpression());
    toolbar_189_17_$1.items = [ie_UndoRedoButton_191_21_$1, ie_UndoRedoButton_198_21_$1, ui_IconButton_205_21_$1, tbSeparator_214_21_$1, ui_IconButton_215_21_$1, tbSeparator_220_21_$1, ie_RotationMenuButton_221_21_$1, ui_IconButton_228_21_$1, ui_IconButton_239_21_$1, tbSeparator_250_21_$1, ie_ColorTransformationMenuButton_251_21_$1, tbSeparator_254_21_$1, ui_IconButton_255_21_$1, ui_IconButton_264_21_$1, ie_ResetImageMenuButton_281_21_$1];
    ie_VariantTab_185_13_$1.tbar = toolbar_189_17_$1;
    tabPanel_167_9_$1.items = [ie_VariantTab_185_13_$1];
    var ui_StatefulPanel_292_9_$1/*:com.coremedia.ui.components.StatefulPanel*/ =AS3.cast(com.coremedia.ui.components.StatefulPanel,{});
    ui_StatefulPanel_292_9_$1.itemId = "stage";
    AS3.setBindable(ui_StatefulPanel_292_9_$1,"region" , "center");
    ui_StatefulPanel_292_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.GRID_200.getSkin());
    AS3.setBindable(ui_StatefulPanel_292_9_$1,"layout" , "fit");
    var ui_SwitchingContainer_297_13_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    AS3.setBindable(ui_SwitchingContainer_297_13_$1,"activeItemValueExpression" , this.getBlobValueExpression(config));
    AS3.setBindable(ui_SwitchingContainer_297_13_$1,"transformer" , com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.isBlobEmpty);
    var ie_ImageEditorStage_300_17_$1/*: com.coremedia.cms.studio.imageeditor.ImageEditorStage*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ImageEditorStage,{});
    ie_ImageEditorStage_300_17_$1.itemId = "iestage";
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"imageUriValueExpression" , this.createLocalImageUriValueExpression(config));
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"imageDimensionsValueExpression" , this.getCommonTransformsImageDimensionsValueExpression(config));
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"variantBoxedImageDimensionsValueExpressions" , this.getVariantBoxedImageDimensionsValueExpressions(config));
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"variantsValueExpression" , this.getVariantsValueExpression());
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"activeTabValueExpression" , this.activeTabValueExpression$n9YW);
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"imageSettingsValueExpression" , this.getImageSettingsValueExpression(config));
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"imageEditorViewModel" , this.imageEditorViewModel);
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"readOnlyValueExpression" , this.readOnlyValueExpression$n9YW);
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"undoHistory" , this.undoHistory);
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"commonTransformationsValueExpression" , this.getCommonTransformationsValueExpression());
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"showCropsValueExpression" , this.getShowCropsValueExpression());
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"imageSettingsWritableValueExpression" , this.getImageSettingsWritableValueExpression(config));
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(ie_ImageEditorStage_300_17_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var editor_Html5Upload_317_17_$1/*:com.coremedia.cms.editor.sdk.components.html5.Html5Upload*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.html5.Html5Upload,{});
    editor_Html5Upload_317_17_$1.itemId = "empty";
    editor_Html5Upload_317_17_$1.cls = "upload-image-container";
    AS3.setBindable(editor_Html5Upload_317_17_$1,"bindTo" , AS3.getBindable(config,"bindTo").extendBy('properties'));
    AS3.setBindable(editor_Html5Upload_317_17_$1,"targetProperty" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_Html5Upload_317_17_$1,"buttonText" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_upload_button_text));
    AS3.setBindable(editor_Html5Upload_317_17_$1,"helpText" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$n9YW.IEC_upload_help_text));
    var editor_BindDisablePlugin_324_21_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_324_21_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_324_21_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_Html5Upload_317_17_$1.plugins = [editor_BindDisablePlugin_324_21_$1];
    ui_SwitchingContainer_297_13_$1.items = [ie_ImageEditorStage_300_17_$1, editor_Html5Upload_317_17_$1];
    ui_StatefulPanel_292_9_$1.items = [ui_SwitchingContainer_297_13_$1];
    var editor_ShowIssuesPlugin_332_13_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_332_13_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_332_13_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    ui_StatefulPanel_292_9_$1.plugins = [editor_ShowIssuesPlugin_332_13_$1];
    panel_150_5_$1.items = [tabPanel_167_9_$1, ui_StatefulPanel_292_9_$1];
    var container_338_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_338_5_$1,"region" , "south");
    var ie_ImageDimensionsDisplay_340_9_$1/*: com.coremedia.cms.studio.imageeditor.ImageDimensionsDisplay*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ImageDimensionsDisplay,{});
    ie_ImageDimensionsDisplay_340_9_$1.flex = 1.0;
    AS3.setBindable(ie_ImageDimensionsDisplay_340_9_$1,"model" , this.imageEditorViewModel);
    AS3.setBindable(ie_ImageDimensionsDisplay_340_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(ie_ImageDimensionsDisplay_340_9_$1,"propertyName" , "data");
    var container_345_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_345_9_$1.flex = 1.0;
    container_345_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GRID_200.getSkin());
    var editor_BooleanPropertyField_348_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.BooleanPropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.BooleanPropertyField,{});
    editor_BooleanPropertyField_348_13_$1.itemId = "disableCroppingCheckbox";
    AS3.setBindable(editor_BooleanPropertyField_348_13_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    editor_BooleanPropertyField_348_13_$1.labelAlign = "top";
    editor_BooleanPropertyField_348_13_$1.labelSeparator = "";
    AS3.setBindable(editor_BooleanPropertyField_348_13_$1,"propertyName" , "localSettings.disableCropping");
    AS3.setBindable(editor_BooleanPropertyField_348_13_$1,"dontTransformToInteger" , true);
    AS3.setBindable(editor_BooleanPropertyField_348_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    container_345_9_$1.items = [editor_BooleanPropertyField_348_13_$1];
    container_338_5_$1.items = [ie_ImageDimensionsDisplay_340_9_$1, container_345_9_$1];
    var layout_HBox_360_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_360_9_$1,"align" , "stretch");
    AS3.setBindable(container_338_5_$1,"layout" , layout_HBox_360_9_$1);
    config_$1.items = [panel_150_5_$1, container_338_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$n9YW(config_$1);
  }/*

    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     The name of the BLOB property containing image data.
     * /
    [Bindable]
    public var propertyName:String;


    /**
     The name of the Struct property containing image transformation data.
     * /
    [Bindable]
    public var imageSettingsPropertyName:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.imageEditorPropertyField",
      BUNDLE$n9YW: null,
      activeTabValueExpression$n9YW: null,
      readOnlyValueExpression$n9YW: null,
      __initialize__$n9YW: __initialize__,
      constructor: ImageEditorPropertyField$,
      super$n9YW: function() {
        com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        imageSettingsPropertyName: null,
        hideIssues: false
      },
      statics: {
        IMAGE_EDITOR_PROPERTY_FIELD: "cm-image-editor-property-field",
        IMAGE_EDITOR_STAGE_INNER_PANEL: "image-editor-stage-inner-panel",
        IMAGE_EDITOR_RESIZABLE: "image-editor-resizable"
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.Border",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.panel.Panel",
        "Ext.tab.Bar",
        "Ext.tab.Panel",
        "Ext.toolbar.Separator",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.actions.DeleteBlobAction",
        "com.coremedia.cms.editor.sdk.actions.OpenBlobAction",
        "com.coremedia.cms.editor.sdk.components.html5.Html5Upload",
        "com.coremedia.cms.editor.sdk.premular.fields.BooleanPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin",
        "com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase",
        "com.coremedia.ui.actions.DependencyTrackedToggleAction",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.StatefulPanel",
        "com.coremedia.ui.components.StatefulResizer",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.plugins.BindActiveTabPlugin",
        "com.coremedia.ui.plugins.Binding",
        "com.coremedia.ui.plugins.ResizablePlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.TabBarSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.ColorTransformationMenuButton",
        "com.coremedia.cms.studio.imageeditor.ColorTransformationUtil",
        "com.coremedia.cms.studio.imageeditor.ImageDimensionsDisplay",
        "com.coremedia.cms.studio.imageeditor.ImageEditorStage",
        "com.coremedia.cms.studio.imageeditor.ResetImageMenuButton",
        "com.coremedia.cms.studio.imageeditor.RotationMenuButton",
        "com.coremedia.cms.studio.imageeditor.VariantTab",
        "com.coremedia.cms.studio.imageeditor.actions.EnlargeAllAction",
        "com.coremedia.cms.studio.imageeditor.actions.FlipImageAction",
        "com.coremedia.cms.studio.imageeditor.actions.FlipImageActionBase",
        "com.coremedia.cms.studio.imageeditor.history.UndoHistory",
        "com.coremedia.cms.studio.imageeditor.history.UndoRedoButton",
        "com.coremedia.cms.studio.imageeditor.util.ConversionUtil"
      ]
    };
});
