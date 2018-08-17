Ext.define("com.coremedia.cms.studio.im.ImageMapEditor", function(ImageMapEditor) {/*package com.coremedia.cms.studio.im{
import com.coremedia.cms.studio.im.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.ui.plugins.ResizablePlugin;
import com.coremedia.ui.components.StatefulResizer;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.ui.components.Image;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import ext.toolbar.Separator;
import ext.toolbar.Fill;
import com.coremedia.cms.studio.im.zoom.ZoomButton;
import ext.toolbar.Spacer;
import ext.layout.container.AbsoluteLayout;
import com.coremedia.ui.components.SwitchingContainer;
import ext.form.FieldContainer;
import ext.form.Labelable;
import com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditor;
import ext.form.field.TextField;
import com.coremedia.ui.plugins.BlockEnterPlugin;
import ext.Component;
import ext.form.field.Checkbox;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.form.Label;
import ext.layout.container.CardLayout;

    [ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
    [ResourceBundle('com.coremedia.cms.studio.im.ImageMap')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ImageMapEditor extends ImageMapEditorBase{

    import com.coremedia.ui.data.ValueExpression;

    import ext.Ext;

    public static const xtype:String = "com.coremedia.cms.studio.im.config.imageMapEditor";

    public static const DRAW_SHAPES_BUTTONS_TOGGLE_GROUP:String = "drawShapesButtonsToggleGroup";

    public static const DRAW_RECT_BUTTON_ITEM_ID:String = "drawRectButtonItemId";

    public static const IMAGE_MAP_CANVAS_PANEL_ITEMID:String = "imageMapCanvasPanelItemId";

    public static const IMAGE_MAP_PANEL_BLOCK:String = "cm-ime-panel";

    public*/function ImageMapEditor$(config/*:ImageMapEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.im.ImageMapEditorBase*/ =AS3.cast(com.coremedia.cms.studio.im.ImageMapEditorBase,{});
    var defaults_$1/*:ImageMapEditor*/ =AS3.cast(ImageMapEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "anchor");
    var local_ImageMapPanel_54_5_$1/*: com.coremedia.cms.studio.im.ImageMapPanel*/ =AS3.cast(com.coremedia.cms.studio.im.ImageMapPanel,{});
    local_ImageMapPanel_54_5_$1.itemId =net.jangaroo.ext.Exml.asString( ImageMapEditor.IMAGE_MAP_CANVAS_PANEL_ITEMID);
    local_ImageMapPanel_54_5_$1.anchor = "100%";
    AS3.setBindable(local_ImageMapPanel_54_5_$1,"height" , 420);
    AS3.setBindable(local_ImageMapPanel_54_5_$1,"scrollable" , true);
    var ui_BEMPlugin_59_9_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_59_9_$1,"block" , ImageMapEditor.IMAGE_MAP_PANEL_BLOCK);
    var ui_ResizablePlugin_61_9_$1/*:com.coremedia.ui.plugins.ResizablePlugin*/ =AS3.cast(com.coremedia.ui.plugins.ResizablePlugin,{});
    AS3.setBindable(ui_ResizablePlugin_61_9_$1,"fitComponent" , true);
    var ui_StatefulResizer_63_13_$1/*:com.coremedia.ui.components.StatefulResizer*/ =AS3.cast(com.coremedia.ui.components.StatefulResizer,{});
    ui_StatefulResizer_63_13_$1.minHeight = 300;
    ui_StatefulResizer_63_13_$1.handles = "s";
    ui_StatefulResizer_63_13_$1.pinned = true;
    ui_StatefulResizer_63_13_$1.dynamic = false;
    ui_ResizablePlugin_61_9_$1.resizableConfig = ui_StatefulResizer_63_13_$1;
    var editor_PropertyFieldPlugin_69_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_69_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"structPropertyName") + '.image-map'));
    var editor_ShowIssuesPlugin_70_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_70_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_70_9_$1,"hideMessage" , true);
    AS3.setBindable(editor_ShowIssuesPlugin_70_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"structPropertyName") + '.image-map'));
    local_ImageMapPanel_54_5_$1.plugins = [ui_BEMPlugin_59_9_$1, ui_ResizablePlugin_61_9_$1, editor_PropertyFieldPlugin_69_9_$1, editor_ShowIssuesPlugin_70_9_$1];
    var ui_Image_75_9_$1/*:com.coremedia.ui.components.Image*/ =AS3.cast(com.coremedia.ui.components.Image,{});
    ui_Image_75_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.im.ImageMapEditorBase.IMAGE_ITEM_ID);
    ui_Image_75_9_$1.hideMode = "visibility";
    AS3.setBindable(ui_Image_75_9_$1,"x" , 0.0);
    AS3.setBindable(ui_Image_75_9_$1,"y" , 0.0);
    AS3.setBindable(ui_Image_75_9_$1,"src" ,net.jangaroo.ext.Exml.asString( Ext.BLANK_IMAGE_URL));
    var ui_BindPropertyPlugin_81_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_81_13_$1.bindTo = AS3.getBindable(config,"imageBlobValueExpression").extendBy('uri');
    ui_BindPropertyPlugin_81_13_$1.componentProperty = "src";
    ui_Image_75_9_$1.plugins = [ui_BindPropertyPlugin_81_13_$1];
    local_ImageMapPanel_54_5_$1.items = [ui_Image_75_9_$1];
    var toolbar_87_9_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var ui_IconButton_89_13_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_89_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.im.ImageMapEditorBase.DELETE_BUTTON_ITEMID);
    AS3.setBindable(ui_IconButton_89_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'remove')));
    AS3.setBindable(ui_IconButton_89_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_deleteArea_text'));
    AS3.setBindable(ui_IconButton_89_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_deleteArea_text')));
    AS3.setBindable(ui_IconButton_89_13_$1,"disabled" , true);
    AS3.setBindable(ui_IconButton_89_13_$1,"handler" ,AS3.bind( this,"removeSelectedArea"));
    var editor_BindDisablePlugin_96_17_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_96_17_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindDisablePlugin_96_17_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    ui_IconButton_89_13_$1.plugins = [editor_BindDisablePlugin_96_17_$1];
    var ui_IconButton_100_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_100_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.im.ImageMapEditorBase.OPEN_BUTTON_ITEMID);
    AS3.setBindable(ui_IconButton_100_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'pencil')));
    AS3.setBindable(ui_IconButton_100_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_openInTab_text'));
    AS3.setBindable(ui_IconButton_100_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_openInTab_text')));
    AS3.setBindable(ui_IconButton_100_13_$1,"disabled" , true);
    AS3.setBindable(ui_IconButton_100_13_$1,"handler" ,AS3.bind( this,"openSelectedAreaLink"));
    var tbSeparator_106_13_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_107_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_107_13_$1.itemId =net.jangaroo.ext.Exml.asString( ImageMapEditor.DRAW_RECT_BUTTON_ITEM_ID);
    ui_IconButton_107_13_$1.enableToggle = true;
    ui_IconButton_107_13_$1.toggleGroup =net.jangaroo.ext.Exml.asString( ImageMapEditor.DRAW_SHAPES_BUTTONS_TOGGLE_GROUP);
    AS3.setBindable(ui_IconButton_107_13_$1,"pressed" , true);
    AS3.setBindable(ui_IconButton_107_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'add_hotzone')));
    AS3.setBindable(ui_IconButton_107_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_addRect_text'));
    AS3.setBindable(ui_IconButton_107_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_addRect_text')));
    ui_IconButton_107_13_$1.toggleHandler =AS3.bind( this,"toggleShape");
    var editor_BindDisablePlugin_116_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_116_17_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindDisablePlugin_116_17_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    ui_IconButton_107_13_$1.plugins = [editor_BindDisablePlugin_116_17_$1];
    var tbFill_120_13_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var im_ZoomButton_121_13_$1/*:com.coremedia.cms.studio.im.zoom.ZoomButton*/ =AS3.cast(com.coremedia.cms.studio.im.zoom.ZoomButton,{});
    im_ZoomButton_121_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.im.ImageMapEditorBase.ZOOM_BUTTON_ITEM_ID);
    AS3.setBindable(im_ZoomButton_121_13_$1,"zoomValueExpression" , this.getZoomValueExpression());
    var tbSpacer_123_13_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_123_13_$1,"width" , 3);
    var ui_IconButton_124_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_124_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.im.ImageMapEditorBase.FIT_TO_WIDTH_BUTTON_ITEMID);
    AS3.setBindable(ui_IconButton_124_13_$1,"pressed" , true);
    ui_IconButton_124_13_$1.enableToggle = true;
    AS3.setBindable(ui_IconButton_124_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_fullWidth_icon')));
    AS3.setBindable(ui_IconButton_124_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_fitToWidth_text'));
    AS3.setBindable(ui_IconButton_124_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_fitToWidth_text')));
    AS3.setBindable(ui_IconButton_124_13_$1,"handler" ,AS3.bind( this,"fitToWidth"));
    toolbar_87_9_$1.items = [ui_IconButton_89_13_$1, ui_IconButton_100_13_$1, tbSeparator_106_13_$1, ui_IconButton_107_13_$1, tbFill_120_13_$1, im_ZoomButton_121_13_$1, tbSpacer_123_13_$1, ui_IconButton_124_13_$1];
    local_ImageMapPanel_54_5_$1.tbar = toolbar_87_9_$1;
    var layout_Absolute_136_9_$1/*:ext.layout.container.AbsoluteLayout*/ =AS3.cast(Ext.layout.container.Absolute,{});
    AS3.setBindable(local_ImageMapPanel_54_5_$1,"layout" , layout_Absolute_136_9_$1);
    var ui_SwitchingContainer_139_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    AS3.setBindable(ui_SwitchingContainer_139_5_$1,"activeItemValueExpression" , this.getActiveAreaPropertiesItemExpression());
    var fieldContainer_141_9_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    fieldContainer_141_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.im.ImageMapEditorBase.AREA_DETAILS_ITEMID);
    AS3.setBindable(fieldContainer_141_9_$1,"layout" , "anchor");
    fieldContainer_141_9_$1.labelSeparator = "";
    fieldContainer_141_9_$1.labelAlign = "top";
    var labelable_146_13_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_146_13_$1.labelSeparator = "";
    labelable_146_13_$1.labelAlign = "top";
    fieldContainer_141_9_$1["defaultType"] = labelable_146_13_$1['xtype'];
    delete labelable_146_13_$1['xtype'];
    delete labelable_146_13_$1['xclass'];
    fieldContainer_141_9_$1.defaults = labelable_146_13_$1;
    var editor_SingleLinkEditor_150_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditor*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditor,{});
    editor_SingleLinkEditor_150_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.im.ImageMapEditorBase.TARGET_LINK_ITEM_ID);
    AS3.setBindable(editor_SingleLinkEditor_150_13_$1,"linkContentType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"areaContentType")));
    AS3.setBindable(editor_SingleLinkEditor_150_13_$1,"bindTo" , this.getSelectedAreaContentExpression());
    AS3.setBindable(editor_SingleLinkEditor_150_13_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_linkedContent_fieldLabel')));
    var editor_ShowIssuesPlugin_155_17_$1/*: com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_155_17_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_155_17_$1,"hideMessage" , false);
    AS3.setBindable(editor_ShowIssuesPlugin_155_17_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"structPropertyName") + '.image-map'));
    editor_SingleLinkEditor_150_13_$1.plugins = [editor_ShowIssuesPlugin_155_17_$1];
    editor_SingleLinkEditor_150_13_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var textField_160_13_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_160_13_$1.anchor = "100%";
    AS3.setBindable(textField_160_13_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_alt_fieldLabel')));
    var ui_BindPropertyPlugin_163_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_163_17_$1.bindTo = this.getSelectedAreaExpression().extendBy(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ALT);
    ui_BindPropertyPlugin_163_17_$1.bidirectional = true;
    ui_BindPropertyPlugin_163_17_$1.ifUndefined = "";
    var ui_BlockEnterPlugin_166_17_$1/*:com.coremedia.ui.plugins.BlockEnterPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BlockEnterPlugin,{});
    textField_160_13_$1.plugins = [ui_BindPropertyPlugin_163_17_$1, ui_BlockEnterPlugin_166_17_$1];
    var component_169_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(component_169_13_$1,"height" , 5);
    var checkbox_170_13_$1/*:ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    AS3.setBindable(checkbox_170_13_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_inline_overlay_fieldLabel')));
    AS3.setBindable(checkbox_170_13_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_inline_overlay_boxLabel')));
    checkbox_170_13_$1.handler =AS3.bind( this,"updateTheme");
    var ui_BindPropertyPlugin_175_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_175_17_$1.bindTo = this.getSelectedAreaOrDummyValueExpression().extendBy(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_DISPLAY_AS_INLINE_OVERLAY);
    ui_BindPropertyPlugin_175_17_$1.bidirectional = true;
    ui_BindPropertyPlugin_175_17_$1.ifUndefined = "false";
    checkbox_170_13_$1.plugins = [ui_BindPropertyPlugin_175_17_$1];
    var ui_LocalComboBox_181_13_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    AS3.setBindable(ui_LocalComboBox_181_13_$1,"store" , com.coremedia.cms.studio.im.ImageMapEditorBase.getComboStore());
    ui_LocalComboBox_181_13_$1.anchor = "100%";
    AS3.setBindable(ui_LocalComboBox_181_13_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_181_13_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_inline_overlay_text_color_fieldLabel')));
    var ui_BindPropertyPlugin_186_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_186_17_$1.bindTo = this.getSelectedAreaExpression().extendBy(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_INLINE_OVERLAY_THEME);
    ui_BindPropertyPlugin_186_17_$1.componentEvent = "select";
    ui_BindPropertyPlugin_186_17_$1.bidirectional = true;
    ui_BindPropertyPlugin_186_17_$1.ifUndefined = "";
    var ui_BindVisibilityPlugin_191_17_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_191_17_$1.bindTo = this.getSelectedAreaInlineOverlayValueExpression();
    ui_LocalComboBox_181_13_$1.plugins = [ui_BindPropertyPlugin_186_17_$1, ui_BindVisibilityPlugin_191_17_$1];
    ui_LocalComboBox_181_13_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    fieldContainer_141_9_$1.items = [editor_SingleLinkEditor_150_13_$1, textField_160_13_$1, component_169_13_$1, checkbox_170_13_$1, ui_LocalComboBox_181_13_$1];
    var label_196_9_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    label_196_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.im.ImageMapEditorBase.INFO_TEXT_ITEMID);
    AS3.setBindable(label_196_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_emptySelection_text')));
    ui_SwitchingContainer_139_5_$1.items = [fieldContainer_141_9_$1, label_196_9_$1];
    var layout_Card_200_9_$1/*:ext.layout.container.CardLayout*/ =AS3.cast(Ext.layout.container.Card,{});
    layout_Card_200_9_$1.deferredRender = true;
    AS3.setBindable(ui_SwitchingContainer_139_5_$1,"layout" , layout_Card_200_9_$1);
    config_$1.items = [local_ImageMapPanel_54_5_$1, ui_SwitchingContainer_139_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$QcwR(config_$1);
  }/*

    /**
     * ValueExpression whose value controls if image maps cannot be edited even thought the current user is able to
     * checkout the document (or has already checked out) the content bound by 'bindTo'.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     Name of the content property holding the struct used to store the image map configuration.
     * /
    [Bindable]
    public var structPropertyName:String;


    /**
     Content type of the hot zone area link.
     * /
    [Bindable]
    public var areaContentType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.im.ImageMapEditorBase",
      alias: "widget.com.coremedia.cms.studio.im.config.imageMapEditor",
      constructor: ImageMapEditor$,
      super$QcwR: function() {
        com.coremedia.cms.studio.im.ImageMapEditorBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        forceReadOnlyValueExpression: null,
        structPropertyName: null,
        areaContentType: null
      },
      statics: {
        DRAW_SHAPES_BUTTONS_TOGGLE_GROUP: "drawShapesButtonsToggleGroup",
        DRAW_RECT_BUTTON_ITEM_ID: "drawRectButtonItemId",
        IMAGE_MAP_CANVAS_PANEL_ITEMID: "imageMapCanvasPanelItemId",
        IMAGE_MAP_PANEL_BLOCK: "cm-ime-panel"
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.form.FieldContainer",
        "Ext.form.Label",
        "Ext.form.Labelable",
        "Ext.form.field.Checkbox",
        "Ext.form.field.Text",
        "Ext.layout.container.Absolute",
        "Ext.layout.container.Card",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Separator",
        "Ext.toolbar.Spacer",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditor",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin",
        "com.coremedia.cms.studio.im.ImageMapEditorBase",
        "com.coremedia.cms.studio.im.ImageMap_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.Image",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.components.StatefulResizer",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.BlockEnterPlugin",
        "com.coremedia.ui.plugins.ResizablePlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.studio.im.ImageMapEditorConstants",
        "com.coremedia.cms.studio.im.ImageMapPanel",
        "com.coremedia.cms.studio.im.zoom.ZoomButton"
      ]
    };
});
