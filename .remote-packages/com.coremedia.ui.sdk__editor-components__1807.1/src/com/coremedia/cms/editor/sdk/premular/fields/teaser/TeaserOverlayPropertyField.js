Ext.define("com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyField", function(TeaserOverlayPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields.teaser{
import com.coremedia.cms.editor.sdk.premular.fields.teaser.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.ui.plugins.Binding;
import ext.panel.Panel;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.cms.editor.sdk.premular.fields.TextAreaPropertyField;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.TextAreaPropertyFieldDelegatePlugin;
import com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea;
import com.coremedia.ui.plugins.WriteBeforeFlushPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.ui.plugins.BindBlobPropertyPlugin;
import com.coremedia.ui.plugins.ResizablePlugin;
import com.coremedia.ui.components.StatefulResizer;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.ui.components.FloatingToolbar;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.toolbar.Spacer;
import ext.toolbar.Separator;
import com.coremedia.ui.components.MenuIconButton;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import ext.layout.container.TableLayout;
import ext.form.RadioGroup;
import ext.form.field.Radio;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.slider.SliderField;
import ext.Component;
import ext.menu.Menu;
import com.coremedia.ui.ckeditor.RichTextMenuCheckItem;
import com.coremedia.ui.ckeditor.RichTextAction;
import ext.menu.Separator;
import ext.menu.Item;
import com.coremedia.ui.ckeditor.RichTextActionToggleButton;
import com.coremedia.ui.components.IconButton;
import ext.layout.container.VBoxLayout;

    [PublicApi]
    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
    [ResourceBundle('com.coremedia.cms.editor.TeaserOverlay')]
/**
 A rich text field that binds to an XML property being edited inside
 of a document form. Specify the propertyName property for selecting
 the XML property.
 The buttons of the toolbar can be accessed via the item ids.
 * /
public class TeaserOverlayPropertyField extends TeaserOverlayPropertyFieldBase{

    import com.coremedia.cap.content.Content;
    import com.coremedia.cms.editor.sdk.util.TeaserOverlayManager;
    import com.coremedia.cms.editor.sdk.util.TeaserOverlayStyleDescriptor;
    import com.coremedia.ui.ckeditor.RichTextAction;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.CheckboxSkin;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.TeaserOverlayPropertyField";

    /**
     * The itemId of the teaser overlay richtext area
     * /
    public static const TEASER_OVERLAY_RICHTEXT_ITEM_ID:String = "teaserOverlayArea";

    /**
     * The itemId of the plaintext delegated text area
     * /
    public static const TEASER_TEXTAREA_ITEM_ID:String = "teaserText";

    /**
     * The itemid of the switching container surrounding the teaser overlay rich text and the teaser rich text.
     * /
    public static const SWITCHING_CONTAINER_ITEM_ID:String = "switchingContainer";

    /**
     * The itemId of the position radio group.
     * /
    public static const POSITION_RATIO_GROUP_ITEM_ID:String = "positionRadioGroup";

    /**
     * The itemId of the first toolbar separator.
     * /
    public static const RTE_SEP_FIRST_ITEM_ID:String = "sepFirst";

    /**
     * The itemId of the first toolbar separator.
     * /
    public static const RTE_SEP_SECOND_ITEM_ID:String = "sepSecond";

    /**
     * The itemId of the first toolbar separator.
     * /
    public static const RTE_SEP_THIRD_ITEM_ID:String = "sepThird";

    /**
     * The itemId of the first toolbar separator.
     * /
    public static const RTE_SEP_FOURTH_ITEM_ID:String = "sepFourth";

    /**
     * The itemId of the paragraph format group button. Currently the group consists of heading format menus.
     * /
    public static const PARAGRAPH_FORMAT_GROUP_ITEM_ID:String = "paragraphFormatGroup";

    /**
     * The itemId of the heading 1 paragraph format menu.
     * /
    public static const PARAGRAPH_HEADING1_ITEM_ID:String = "paragraphFormatHeading1";

    /**
     * The itemId of the heading 2 paragraph format menu.
     * /
    public static const PARAGRAPH_HEADING2_ITEM_ID:String = "paragraphFormatHeading2";

    /**
     * The itemId of the heading 3 paragraph format menu.
     * /
    public static const PARAGRAPH_HEADING3_ITEM_ID:String = "paragraphFormatHeading3";

    /**
     * The itemId of the remove paragraph format menu.
     * /
    public static const PARAGRAPH_FORMAT_REMOVE_ITEM_ID:String = "paragraphFormatRemove";

    /**
     * The itemId of the paragraph format group button. Currently the group consists of heading format menus.
     * /
    public static const POSITION_GROUP_ITEM_ID:String = "positionGroup";

    /**
     * The itemId of the bold button.
     * /
    public static const BOLD_BUTTON_ITEM_ID:String = "bold";

    /**
     * The itemId of the italic button.
     * /
    public static const ITALIC_BUTTON_ITEM_ID:String = "italic";

    /**
     * The itemId of the text align group button.
     * /
    public static const TEXT_ALIGN_GROUP_ITEM_ID:String = "textAlignGroup";

    /**
     * The itemId of the left text align menu.
     * /
    public static const TEXT_ALIGN_LEFT_ITEM_ID:String = "textAlignLeft";

    /**
     * The itemId of the center text align menu.
     * /
    public static const TEXT_ALIGN_CENTER_ITEM_ID:String = "textAlignCenter";

    /**
     * The itemId of the right text align menu.
     * /
    public static const TEXT_ALIGN_RIGHT_ITEM_ID:String = "textAlignRight";

    /**
     * The itemId of the justified text align menu.
     * /
    public static const TEXT_ALIGN_JUSTIFIED_ITEM_ID:String = "textAlignJustified";

    /**
     * The itemId of the remove text align menu.
     * /
    public static const TEXT_ALIGN_REMOVE_ITEM_ID:String = "textAlignRemove";

    /**
     * The itemId of the image properties button.
     * /
    public static const IMAGE_PROPERTIES_ITEM_ID:String = "imageProperties";

    private static const*/var POSITION_CHOOSER_BLOCK$static/*:BEMBlock*/;/* =*/function POSITION_CHOOSER_BLOCK$static_(){POSITION_CHOOSER_BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-position-chooser"));};/*
    private static const*/var POSITION_CHOOSER_ELEMENT_GROUP$static/*:BEMElement*/;/* =*/function POSITION_CHOOSER_ELEMENT_GROUP$static_(){POSITION_CHOOSER_ELEMENT_GROUP$static=( POSITION_CHOOSER_BLOCK$static.createElement("group"));};/*
    private static const*/var POSITION_CHOOSER_ELEMENT_TL$static/*:BEMElement*/;/* =*/function POSITION_CHOOSER_ELEMENT_TL$static_(){POSITION_CHOOSER_ELEMENT_TL$static=( POSITION_CHOOSER_BLOCK$static.createElement("tl"));};/*
    private static const*/var POSITION_CHOOSER_ELEMENT_TC$static/*:BEMElement*/;/* =*/function POSITION_CHOOSER_ELEMENT_TC$static_(){POSITION_CHOOSER_ELEMENT_TC$static=( POSITION_CHOOSER_BLOCK$static.createElement("tc"));};/*
    private static const*/var POSITION_CHOOSER_ELEMENT_TR$static/*:BEMElement*/;/* =*/function POSITION_CHOOSER_ELEMENT_TR$static_(){POSITION_CHOOSER_ELEMENT_TR$static=( POSITION_CHOOSER_BLOCK$static.createElement("tr"));};/*
    private static const*/var POSITION_CHOOSER_ELEMENT_ML$static/*:BEMElement*/;/* =*/function POSITION_CHOOSER_ELEMENT_ML$static_(){POSITION_CHOOSER_ELEMENT_ML$static=( POSITION_CHOOSER_BLOCK$static.createElement("ml"));};/*
    private static const*/var POSITION_CHOOSER_ELEMENT_MC$static/*:BEMElement*/;/* =*/function POSITION_CHOOSER_ELEMENT_MC$static_(){POSITION_CHOOSER_ELEMENT_MC$static=( POSITION_CHOOSER_BLOCK$static.createElement("mc"));};/*
    private static const*/var POSITION_CHOOSER_ELEMENT_MR$static/*:BEMElement*/;/* =*/function POSITION_CHOOSER_ELEMENT_MR$static_(){POSITION_CHOOSER_ELEMENT_MR$static=( POSITION_CHOOSER_BLOCK$static.createElement("mr"));};/*
    private static const*/var POSITION_CHOOSER_ELEMENT_BL$static/*:BEMElement*/;/* =*/function POSITION_CHOOSER_ELEMENT_BL$static_(){POSITION_CHOOSER_ELEMENT_BL$static=( POSITION_CHOOSER_BLOCK$static.createElement("bl"));};/*
    private static const*/var POSITION_CHOOSER_ELEMENT_BC$static/*:BEMElement*/;/* =*/function POSITION_CHOOSER_ELEMENT_BC$static_(){POSITION_CHOOSER_ELEMENT_BC$static=( POSITION_CHOOSER_BLOCK$static.createElement("bc"));};/*
    private static const*/var POSITION_CHOOSER_ELEMENT_BR$static/*:BEMElement*/;/* =*/function POSITION_CHOOSER_ELEMENT_BR$static_(){POSITION_CHOOSER_ELEMENT_BR$static=( POSITION_CHOOSER_BLOCK$static.createElement("br"));};/*

    private var switchingContainer:SwitchingContainer;

    public*/function TeaserOverlayPropertyField$(config/*:TeaserOverlayPropertyField = null*/){if(arguments.length<=0)config=null;this.__initialize__$hOYm(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase,{});
    var defaults_$1/*:TeaserOverlayPropertyField*/ =AS3.cast(TeaserOverlayPropertyField,{});
    AS3.setBindable(defaults_$1,"changeBuffer" , 1000);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_SetPropertyLabelPlugin_205_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_205_5_$1.bindTo = config.bindTo;
    editor_SetPropertyLabelPlugin_205_5_$1.propertyName =net.jangaroo.ext.Exml.asString( config.propertyName);
    var editor_BindReadOnlyPlugin_207_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    editor_BindReadOnlyPlugin_207_5_$1.bindTo = config.bindTo;
    AS3.setBindable(editor_BindReadOnlyPlugin_207_5_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    var ui_Binding_209_5_$1/*:com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_209_5_$1,"source" , "teaserOverlaySettings.style");
    AS3.setBindable(ui_Binding_209_5_$1,"destination" , "teaserOverlayViewModel.style");
    AS3.setBindable(ui_Binding_209_5_$1,"twoWay" , true);
    var ui_Binding_212_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_212_5_$1,"source" , "teaserOverlaySettings.style");
    AS3.setBindable(ui_Binding_212_5_$1,"destination" , "teaserOverlaySettings.enabled");
    AS3.setBindable(ui_Binding_212_5_$1,"twoWay" , false);
    AS3.setBindable(ui_Binding_212_5_$1,"transformer" , com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase.isNoStyleSelected);
    var ui_Binding_216_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_216_5_$1,"source" , "teaserOverlaySettings.enabled");
    AS3.setBindable(ui_Binding_216_5_$1,"destination" , "teaserOverlayViewModel.richtextButtonsDisabled");
    AS3.setBindable(ui_Binding_216_5_$1,"twoWay" , false);
    AS3.setBindable(ui_Binding_216_5_$1,"transformer" , function(enabled/*:String*/)/*:Boolean*/{return !enabled;});
    var ui_Binding_220_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_220_5_$1,"source" , this.getIconClsVE());
    AS3.setBindable(ui_Binding_220_5_$1,"destination" , "teaserOverlayViewModel.iconCls");
    AS3.setBindable(ui_Binding_220_5_$1,"twoWay" , false);
    var ui_Binding_223_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_223_5_$1,"source" , this.getRadioPositionVE());
    AS3.setBindable(ui_Binding_223_5_$1,"destination" , "teaserOverlayViewModel.radioPosition");
    AS3.setBindable(ui_Binding_223_5_$1,"twoWay" , false);
    var ui_Binding_228_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_228_5_$1,"source" , "teaserOverlaySettings.positionX");
    AS3.setBindable(ui_Binding_228_5_$1,"destination" , "teaserOverlayViewModel.sliderPositionX");
    AS3.setBindable(ui_Binding_228_5_$1,"twoWay" , true);
    var ui_Binding_231_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_231_5_$1,"source" , "teaserOverlaySettings.positionY");
    AS3.setBindable(ui_Binding_231_5_$1,"destination" , "teaserOverlayViewModel.sliderPositionY");
    AS3.setBindable(ui_Binding_231_5_$1,"twoWay" , true);
    var ui_Binding_234_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_234_5_$1,"source" , "teaserOverlaySettings.width");
    AS3.setBindable(ui_Binding_234_5_$1,"destination" , "teaserOverlayViewModel.sliderWidth");
    AS3.setBindable(ui_Binding_234_5_$1,"twoWay" , true);
    config_$1.plugins = [editor_SetPropertyLabelPlugin_205_5_$1, editor_BindReadOnlyPlugin_207_5_$1, ui_Binding_209_5_$1, ui_Binding_212_5_$1, ui_Binding_216_5_$1, ui_Binding_220_5_$1, ui_Binding_223_5_$1, ui_Binding_228_5_$1, ui_Binding_231_5_$1, ui_Binding_234_5_$1];
    var panel_239_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_239_5_$1.manageHeight = false;
    panel_239_5_$1.defaultFocus =net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(TeaserOverlayPropertyField.SWITCHING_CONTAINER_ITEM_ID).build());
    var ui_SwitchingContainer_242_9_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_242_9_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.SWITCHING_CONTAINER_ITEM_ID);
    AS3.setBindable(ui_SwitchingContainer_242_9_$1,"layoutOnCardChange" , true);
    AS3.setBindable(ui_SwitchingContainer_242_9_$1,"activeItemValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel.STYLE_PROPERTY_NAME, AS3.getBindable(this,"teaserOverlayViewModel")));
    AS3.setBindable(ui_SwitchingContainer_242_9_$1,"transformer" , com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase.getActiveContainer);
    ui_SwitchingContainer_242_9_$1.defaultFocus = ":first";
    var fx_Object_248_13_$1/*:Object*/ =Object({});
    fx_Object_248_13_$1.bindTo = config.bindTo;
    ui_SwitchingContainer_242_9_$1["defaultType"] = fx_Object_248_13_$1['xtype'];
    delete fx_Object_248_13_$1['xtype'];
    delete fx_Object_248_13_$1['xclass'];
    ui_SwitchingContainer_242_9_$1.defaults = fx_Object_248_13_$1;
    var editor_TextAreaPropertyField_251_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.TextAreaPropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.TextAreaPropertyField,{});
    AS3.setBindable(editor_TextAreaPropertyField_251_13_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( config.propertyName));
    editor_TextAreaPropertyField_251_13_$1.hideLabel = true;
    editor_TextAreaPropertyField_251_13_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.TEASER_TEXTAREA_ITEM_ID);
    AS3.setBindable(editor_TextAreaPropertyField_251_13_$1,"changeBuffer" , 1000.0);
    AS3.setBindable(editor_TextAreaPropertyField_251_13_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    var editor_TextAreaPropertyFieldDelegatePlugin_257_17_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.TextAreaPropertyFieldDelegatePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.TextAreaPropertyFieldDelegatePlugin,{});
    AS3.setBindable(editor_TextAreaPropertyFieldDelegatePlugin_257_17_$1,"delegatePropertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"delegatePropertyName")));
    editor_TextAreaPropertyField_251_13_$1.plugins = [editor_TextAreaPropertyFieldDelegatePlugin_257_17_$1];
    editor_TextAreaPropertyField_251_13_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_CoreMediaRichTextArea_260_13_$1/*:com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea,{});
    editor_CoreMediaRichTextArea_260_13_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.TEASER_OVERLAY_RICHTEXT_ITEM_ID);
    AS3.setBindable(editor_CoreMediaRichTextArea_260_13_$1,"listeners" , {'keydown': com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase.handleKeys});
    AS3.setBindable(editor_CoreMediaRichTextArea_260_13_$1,"height" , AS3.getBindable(config,"initialHeight"));
    AS3.setBindable(editor_CoreMediaRichTextArea_260_13_$1,"changeBuffer" , AS3.getBindable(config,"changeBuffer"));
    editor_CoreMediaRichTextArea_260_13_$1.ariaLabelledBy =AS3.bind( this,"getLabelId");
    var editor_BindReadOnlyPlugin_266_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_266_17_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    editor_BindReadOnlyPlugin_266_17_$1.bindTo = config.bindTo;
    var ui_WriteBeforeFlushPlugin_268_17_$1/*:com.coremedia.ui.plugins.WriteBeforeFlushPlugin*/ =AS3.cast(com.coremedia.ui.plugins.WriteBeforeFlushPlugin,{});
    AS3.setBindable(ui_WriteBeforeFlushPlugin_268_17_$1,"valueExpression" , config.bindTo);
    var editor_PropertyFieldPlugin_269_17_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_269_17_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( config.propertyName));
    var ui_BindBlobPropertyPlugin_271_17_$1/*:com.coremedia.ui.plugins.BindBlobPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindBlobPropertyPlugin,{});
    ui_BindBlobPropertyPlugin_271_17_$1.bindTo = this.getRichTextValueExpression();
    var ui_ResizablePlugin_272_17_$1/*:com.coremedia.ui.plugins.ResizablePlugin*/ =AS3.cast(com.coremedia.ui.plugins.ResizablePlugin,{});
    AS3.setBindable(ui_ResizablePlugin_272_17_$1,"fitComponent" , true);
    var ui_StatefulResizer_274_21_$1/*:com.coremedia.ui.components.StatefulResizer*/ =AS3.cast(com.coremedia.ui.components.StatefulResizer,{});
    ui_StatefulResizer_274_21_$1.minHeight = 30;
    ui_StatefulResizer_274_21_$1.handles = "s";
    ui_StatefulResizer_274_21_$1.pinned = true;
    ui_StatefulResizer_274_21_$1.dynamic = false;
    AS3.setBindable(ui_StatefulResizer_274_21_$1,"embed" , false);
    AS3.setBindable(ui_StatefulResizer_274_21_$1,"horizontalResize" , false);
    ui_ResizablePlugin_272_17_$1.resizableConfig = ui_StatefulResizer_274_21_$1;
    var editor_SetPropertyEmptyTextPlugin_282_17_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_282_17_$1.bindTo = config.bindTo;
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_282_17_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( config.propertyName));
    editor_CoreMediaRichTextArea_260_13_$1.plugins = [editor_BindReadOnlyPlugin_266_17_$1, ui_WriteBeforeFlushPlugin_268_17_$1, editor_PropertyFieldPlugin_269_17_$1, ui_BindBlobPropertyPlugin_271_17_$1, ui_ResizablePlugin_272_17_$1, editor_SetPropertyEmptyTextPlugin_282_17_$1];
    editor_CoreMediaRichTextArea_260_13_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    ui_SwitchingContainer_242_9_$1.items = [editor_TextAreaPropertyField_251_13_$1, editor_CoreMediaRichTextArea_260_13_$1];
    panel_239_5_$1.items = [ui_SwitchingContainer_242_9_$1];
    var ui_FloatingToolbar_291_9_$1/*:com.coremedia.ui.components.FloatingToolbar*/ =AS3.cast(com.coremedia.ui.components.FloatingToolbar,{});
    ui_FloatingToolbar_291_9_$1.enableOverflow = true;
    ui_FloatingToolbar_291_9_$1.defaultButtonUI =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    ui_FloatingToolbar_291_9_$1.excludeInputFields = true;
    var ui_BindVisibilityPlugin_295_13_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_295_13_$1.bindTo = this.getStylesVE(config.bindTo, AS3.getBindable(config,"styleDescriptorFolderPaths"));
    AS3.setBindable(ui_BindVisibilityPlugin_295_13_$1,"transformer" , function(result/*:Array*/)/*:Boolean*/ {return result.length > 0;});
    ui_FloatingToolbar_291_9_$1.plugins = [ui_BindVisibilityPlugin_295_13_$1];
    var local_TeaserOverlayStyleSelector_299_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelector*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelector,{});
    AS3.setBindable(local_TeaserOverlayStyleSelector_299_13_$1,"bindTo" , config.bindTo);
    AS3.setBindable(local_TeaserOverlayStyleSelector_299_13_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    AS3.setBindable(local_TeaserOverlayStyleSelector_299_13_$1,"stylesVE" , this.getStylesVE(config.bindTo, AS3.getBindable(config,"styleDescriptorFolderPaths")));
    var ui_BindPropertyPlugin_303_17_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_303_17_$1.bindTo = this.getOverlayStyleValueExpression();
    ui_BindPropertyPlugin_303_17_$1.bidirectional = true;
    ui_BindPropertyPlugin_303_17_$1.skipIfUndefined = true;
    ui_BindPropertyPlugin_303_17_$1.transformer = function(content/*:Content*/)/*:TeaserOverlayStyleDescriptor*/ { return com.coremedia.cms.editor.sdk.util.TeaserOverlayManager.getInstance().createStyleDescriptorFromContent(content); };
    ui_BindPropertyPlugin_303_17_$1.reverseTransformer = function(descriptor/*:TeaserOverlayStyleDescriptor*/)/*:Content*/ { return com.coremedia.cms.editor.sdk.util.TeaserOverlayManager.getInstance().getContentFromStyleDescriptor(descriptor); };
    ui_BindPropertyPlugin_303_17_$1.componentEvent = "change";
    local_TeaserOverlayStyleSelector_299_13_$1.plugins = [ui_BindPropertyPlugin_303_17_$1];
    local_TeaserOverlayStyleSelector_299_13_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var tbSpacer_312_13_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_312_13_$1,"width" , 6);
    var tbSeparator_313_13_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_313_13_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.RTE_SEP_FIRST_ITEM_ID);
    var ui_MenuIconButton_315_13_$1/*:com.coremedia.ui.components.MenuIconButton*/ =AS3.cast(com.coremedia.ui.components.MenuIconButton,{});
    ui_MenuIconButton_315_13_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.POSITION_GROUP_ITEM_ID);
    AS3.setBindable(ui_MenuIconButton_315_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'text_on_image_mm')));
    AS3.setBindable(ui_MenuIconButton_315_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_position_tooltip'));
    AS3.setBindable(ui_MenuIconButton_315_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_position_text')));
    var editor_BindDisablePlugin_320_17_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_320_17_$1,"forceReadOnlyValueExpression" , this.getRichTextButtonsDisabledVE());
    editor_BindDisablePlugin_320_17_$1.bindTo = config.bindTo;
    var ui_BindPropertyPlugin_323_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_323_17_$1.componentProperty = "iconCls";
    ui_BindPropertyPlugin_323_17_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel.ICON_CLS_PROPERTY_NAME, AS3.getBindable(this,"teaserOverlayViewModel"));
    ui_MenuIconButton_315_13_$1.plugins = [editor_BindDisablePlugin_320_17_$1, ui_BindPropertyPlugin_323_17_$1];
    var local_TeaserOverlayPositionMenu_327_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPositionMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPositionMenu,{});
    AS3.setBindable(local_TeaserOverlayPositionMenu_327_17_$1,"minWidth" , 0.0);
    local_TeaserOverlayPositionMenu_327_17_$1.itemId = "positionContainer";
    local_TeaserOverlayPositionMenu_327_17_$1.plain = true;
    var layout_Table_331_21_$1/*:ext.layout.container.TableLayout*/ =AS3.cast(Ext.layout.container.Table,{});
    layout_Table_331_21_$1.columns = 2.0;
    AS3.setBindable(local_TeaserOverlayPositionMenu_327_17_$1,"layout" , layout_Table_331_21_$1);
    var radioGroup_334_21_$1/*:ext.form.RadioGroup*/ =AS3.cast(Ext.form.RadioGroup,{});
    radioGroup_334_21_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.POSITION_RATIO_GROUP_ITEM_ID);
    radioGroup_334_21_$1.name =net.jangaroo.ext.Exml.asString( this.getPositionRadioGroupName());
    radioGroup_334_21_$1.columns = 3;
    radioGroup_334_21_$1.hideLabel = true;
    radioGroup_334_21_$1["groupCls"] = POSITION_CHOOSER_ELEMENT_GROUP$static.getCSSClass();
    var radio_340_25_$1/*:ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_340_25_$1.itemId = "radio-1";
    radio_340_25_$1.inputValue = "1";
    radio_340_25_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_position_tl'));
    AS3.setBindable(radio_340_25_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( getPositionIconHTML$static(POSITION_CHOOSER_ELEMENT_TL$static)));
    var radio_344_25_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_344_25_$1.itemId = "radio-2";
    radio_344_25_$1.inputValue = "2";
    radio_344_25_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_position_tc'));
    AS3.setBindable(radio_344_25_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( getPositionIconHTML$static(POSITION_CHOOSER_ELEMENT_TC$static)));
    var radio_348_25_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_348_25_$1.itemId = "radio-3";
    radio_348_25_$1.inputValue = "3";
    radio_348_25_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_position_tr'));
    AS3.setBindable(radio_348_25_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( getPositionIconHTML$static(POSITION_CHOOSER_ELEMENT_TR$static)));
    var radio_352_25_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_352_25_$1.itemId = "radio-4";
    radio_352_25_$1.inputValue = "4";
    radio_352_25_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_position_ml'));
    AS3.setBindable(radio_352_25_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( getPositionIconHTML$static(POSITION_CHOOSER_ELEMENT_ML$static)));
    var radio_356_25_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_356_25_$1.itemId = "radio-5";
    radio_356_25_$1.inputValue = "5";
    radio_356_25_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_position_mc'));
    AS3.setBindable(radio_356_25_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( getPositionIconHTML$static(POSITION_CHOOSER_ELEMENT_MC$static)));
    var radio_360_25_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_360_25_$1.itemId = "radio-6";
    radio_360_25_$1.inputValue = "6";
    radio_360_25_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_position_mr'));
    AS3.setBindable(radio_360_25_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( getPositionIconHTML$static(POSITION_CHOOSER_ELEMENT_MR$static)));
    var radio_364_25_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_364_25_$1.itemId = "radio-7";
    radio_364_25_$1.inputValue = "7";
    radio_364_25_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_position_bl'));
    AS3.setBindable(radio_364_25_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( getPositionIconHTML$static(POSITION_CHOOSER_ELEMENT_BL$static)));
    var radio_368_25_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_368_25_$1.itemId = "radio-8";
    radio_368_25_$1.inputValue = "8";
    radio_368_25_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_position_bc'));
    AS3.setBindable(radio_368_25_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( getPositionIconHTML$static(POSITION_CHOOSER_ELEMENT_BC$static)));
    var radio_372_25_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_372_25_$1.itemId = "radio-9";
    radio_372_25_$1.inputValue = "9";
    radio_372_25_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_position_br'));
    AS3.setBindable(radio_372_25_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( getPositionIconHTML$static(POSITION_CHOOSER_ELEMENT_BR$static)));
    radioGroup_334_21_$1.items = [radio_340_25_$1, radio_344_25_$1, radio_348_25_$1, radio_352_25_$1, radio_356_25_$1, radio_360_25_$1, radio_364_25_$1, radio_368_25_$1, radio_372_25_$1];
    var radio_378_25_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_378_25_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.CheckboxSkin.NO_BOX.getSkin());
    radio_378_25_$1.hideLabel = true;
    AS3.setBindable(radio_378_25_$1,"boxLabel" , "");
    radioGroup_334_21_$1["defaultType"] = radio_378_25_$1['xtype'];
    delete radio_378_25_$1['xtype'];
    delete radio_378_25_$1['xclass'];
    radioGroup_334_21_$1.defaults = radio_378_25_$1;
    var ui_BEMPlugin_383_25_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_383_25_$1,"block" , POSITION_CHOOSER_BLOCK$static);
    var ui_BindPropertyPlugin_384_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_384_25_$1.componentProperty = "value";
    ui_BindPropertyPlugin_384_25_$1.skipIfConsistent = false;
    ui_BindPropertyPlugin_384_25_$1.bindTo = this.getPositionValueExpression(AS3.getBindable(this,"teaserOverlayViewModel"));
    ui_BindPropertyPlugin_384_25_$1.bidirectional = true;
    ui_BindPropertyPlugin_384_25_$1.reverseTransformer =AS3.bind( this,"toExpressionValue");
    ui_BindPropertyPlugin_384_25_$1.transformer =AS3.bind( this,"toInputValue");
    radioGroup_334_21_$1.plugins = [ui_BEMPlugin_383_25_$1, ui_BindPropertyPlugin_384_25_$1];
    var sliderField_392_21_$1/*:ext.slider.SliderField*/ =AS3.cast(Ext.slider.Single,{});
    sliderField_392_21_$1.itemId = "positionYSlider";
    AS3.setBindable(sliderField_392_21_$1,"listeners" , {dragStart:AS3.bind(this,"onActivate"),dragEnd:AS3.bind(this,"onDeactivate")});
    AS3.setBindable(sliderField_392_21_$1,"height" , 112);
    AS3.setBindable(sliderField_392_21_$1,"margin" , "0 0 0 4");
    sliderField_392_21_$1.vertical = true;
    AS3.setBindable(sliderField_392_21_$1,"minValue" , -50.0);
    AS3.setBindable(sliderField_392_21_$1,"maxValue" , 50.0);
    sliderField_392_21_$1.decimalPrecision = 0;
    sliderField_392_21_$1.tipText = com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase.tooltipTransformer;
    sliderField_392_21_$1.increment = 1.0;
    var ui_BindPropertyPlugin_403_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_403_25_$1.componentProperty = "value";
    ui_BindPropertyPlugin_403_25_$1.skipIfConsistent = false;
    ui_BindPropertyPlugin_403_25_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel.SLIDER_POSITION_Y, AS3.getBindable(this,"teaserOverlayViewModel"));
    ui_BindPropertyPlugin_403_25_$1.transformer = com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase.positionYTransformer;
    ui_BindPropertyPlugin_403_25_$1.reverseTransformer = com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase.positionYReverseTransformer;
    ui_BindPropertyPlugin_403_25_$1.bidirectional = true;
    sliderField_392_21_$1.plugins = [ui_BindPropertyPlugin_403_25_$1];
    var sliderField_411_21_$1/*: ext.slider.SliderField*/ =AS3.cast(Ext.slider.Single,{});
    sliderField_411_21_$1.itemId = "positionXSlider";
    AS3.setBindable(sliderField_411_21_$1,"width" , 112);
    AS3.setBindable(sliderField_411_21_$1,"listeners" , {dragStart:AS3.bind(this,"onActivate"),dragEnd:AS3.bind(this,"onDeactivate")});
    AS3.setBindable(sliderField_411_21_$1,"minValue" , -50.0);
    AS3.setBindable(sliderField_411_21_$1,"maxValue" , 50.0);
    sliderField_411_21_$1.decimalPrecision = 0;
    sliderField_411_21_$1.increment = 1.0;
    var ui_BindPropertyPlugin_419_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_419_25_$1.componentProperty = "value";
    ui_BindPropertyPlugin_419_25_$1.skipIfConsistent = false;
    ui_BindPropertyPlugin_419_25_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel.SLIDER_POSITION_X, AS3.getBindable(this,"teaserOverlayViewModel"));
    ui_BindPropertyPlugin_419_25_$1.bidirectional = true;
    sliderField_411_21_$1.plugins = [ui_BindPropertyPlugin_419_25_$1];
    var box_425_21_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    var sliderField_426_21_$1/*: ext.slider.SliderField*/ =AS3.cast(Ext.slider.Single,{});
    sliderField_426_21_$1.itemId = "widthSlider";
    AS3.setBindable(sliderField_426_21_$1,"margin" , "6 0 0 0");
    sliderField_426_21_$1["colspan"] = 2;
    AS3.setBindable(sliderField_426_21_$1,"width" , 124);
    AS3.setBindable(sliderField_426_21_$1,"minValue" , 0.0);
    AS3.setBindable(sliderField_426_21_$1,"maxValue" , 100.0);
    sliderField_426_21_$1.decimalPrecision = 0;
    sliderField_426_21_$1.increment = 1.0;
    sliderField_426_21_$1.labelSeparator = "";
    AS3.setBindable(sliderField_426_21_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_width_label')));
    sliderField_426_21_$1.labelAlign = "top";
    var ui_BindPropertyPlugin_438_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_438_25_$1.componentProperty = "value";
    ui_BindPropertyPlugin_438_25_$1.skipIfConsistent = false;
    ui_BindPropertyPlugin_438_25_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel.SLIDER_WIDTH, AS3.getBindable(this,"teaserOverlayViewModel"));
    ui_BindPropertyPlugin_438_25_$1.bidirectional = true;
    sliderField_426_21_$1.plugins = [ui_BindPropertyPlugin_438_25_$1];
    local_TeaserOverlayPositionMenu_327_17_$1.items = [radioGroup_334_21_$1, sliderField_392_21_$1, sliderField_411_21_$1, box_425_21_$1, sliderField_426_21_$1];
    ui_MenuIconButton_315_13_$1.menu = local_TeaserOverlayPositionMenu_327_17_$1;
    var tbSeparator_448_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_448_13_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.RTE_SEP_SECOND_ITEM_ID);
    var ui_MenuIconButton_451_13_$1/*: com.coremedia.ui.components.MenuIconButton*/ =AS3.cast(com.coremedia.ui.components.MenuIconButton,{});
    ui_MenuIconButton_451_13_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.PARAGRAPH_FORMAT_GROUP_ITEM_ID);
    AS3.setBindable(ui_MenuIconButton_451_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'paragraph_style')));
    AS3.setBindable(ui_MenuIconButton_451_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'format_group_tooltip'));
    AS3.setBindable(ui_MenuIconButton_451_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'format_group_text')));
    var editor_BindDisablePlugin_456_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_456_17_$1,"forceReadOnlyValueExpression" , this.getRichTextButtonsDisabledVE());
    editor_BindDisablePlugin_456_17_$1.bindTo = config.bindTo;
    ui_MenuIconButton_451_13_$1.plugins = [editor_BindDisablePlugin_456_17_$1];
    var menu_461_17_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var ui_RichTextMenuCheckItem_464_21_$1/*:com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_464_21_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.PARAGRAPH_HEADING1_ITEM_ID);
    ui_RichTextMenuCheckItem_464_21_$1.group = "p";
    var ui_RichTextAction_467_25_$1/*:com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_467_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_PARAGRAPH_HEADING1));
    ui_RichTextMenuCheckItem_464_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_467_25_$1);
    var ui_RichTextMenuCheckItem_470_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_470_21_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.PARAGRAPH_HEADING2_ITEM_ID);
    ui_RichTextMenuCheckItem_470_21_$1.group = "p";
    var ui_RichTextAction_473_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_473_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_PARAGRAPH_HEADING2));
    ui_RichTextMenuCheckItem_470_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_473_25_$1);
    var ui_RichTextMenuCheckItem_476_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_476_21_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.PARAGRAPH_HEADING3_ITEM_ID);
    ui_RichTextMenuCheckItem_476_21_$1.group = "p";
    var ui_RichTextAction_479_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_479_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_PARAGRAPH_HEADING3));
    ui_RichTextMenuCheckItem_476_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_479_25_$1);
    var menuSeparator_482_21_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_483_21_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_483_21_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.PARAGRAPH_FORMAT_REMOVE_ITEM_ID);
    var ui_RichTextAction_485_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_485_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_PARAGRAPH_REMOVE));
    menuItem_483_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_485_25_$1);
    menu_461_17_$1.items = [ui_RichTextMenuCheckItem_464_21_$1, ui_RichTextMenuCheckItem_470_21_$1, ui_RichTextMenuCheckItem_476_21_$1, menuSeparator_482_21_$1, menuItem_483_21_$1];
    ui_MenuIconButton_451_13_$1.menu = menu_461_17_$1;
    var tbSeparator_492_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_492_13_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.RTE_SEP_THIRD_ITEM_ID);
    var ui_RichTextActionToggleButton_494_13_$1/*:com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_494_13_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.BOLD_BUTTON_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_494_13_$1,"forceDisabledValueExpression" , this.getRichTextButtonsDisabledVE());
    AS3.setBindable(ui_RichTextActionToggleButton_494_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_BOLD));
    var editor_BindDisablePlugin_498_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_498_17_$1,"forceReadOnlyValueExpression" , this.getRichTextButtonsDisabledVE());
    editor_BindDisablePlugin_498_17_$1.bindTo = config.bindTo;
    ui_RichTextActionToggleButton_494_13_$1.plugins = [editor_BindDisablePlugin_498_17_$1];
    var ui_RichTextActionToggleButton_503_13_$1/*: com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_503_13_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.ITALIC_BUTTON_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_503_13_$1,"forceDisabledValueExpression" , this.getRichTextButtonsDisabledVE());
    AS3.setBindable(ui_RichTextActionToggleButton_503_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ITALIC));
    var editor_BindDisablePlugin_507_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_507_17_$1,"forceReadOnlyValueExpression" , this.getRichTextButtonsDisabledVE());
    editor_BindDisablePlugin_507_17_$1.bindTo = config.bindTo;
    ui_RichTextActionToggleButton_503_13_$1.plugins = [editor_BindDisablePlugin_507_17_$1];
    var tbSeparator_512_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_512_13_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.RTE_SEP_FOURTH_ITEM_ID);
    var ui_IconButton_513_13_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_513_13_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.TEXT_ALIGN_GROUP_ITEM_ID);
    AS3.setBindable(ui_IconButton_513_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'text_alignment')));
    AS3.setBindable(ui_IconButton_513_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'alignment_group_tooltip'));
    AS3.setBindable(ui_IconButton_513_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'alignment_group_text')));
    var editor_BindDisablePlugin_518_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_518_17_$1,"forceReadOnlyValueExpression" , this.getRichTextButtonsDisabledVE());
    editor_BindDisablePlugin_518_17_$1.bindTo = config.bindTo;
    ui_IconButton_513_13_$1.plugins = [editor_BindDisablePlugin_518_17_$1];
    var menu_523_17_$1/*: ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var ui_RichTextMenuCheckItem_526_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_526_21_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.TEXT_ALIGN_LEFT_ITEM_ID);
    ui_RichTextMenuCheckItem_526_21_$1.group = "align";
    var ui_RichTextAction_529_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_529_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ALIGN_LEFT));
    ui_RichTextMenuCheckItem_526_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_529_25_$1);
    var ui_RichTextMenuCheckItem_532_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_532_21_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.TEXT_ALIGN_CENTER_ITEM_ID);
    ui_RichTextMenuCheckItem_532_21_$1.group = "align";
    var ui_RichTextAction_535_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_535_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ALIGN_CENTER));
    ui_RichTextMenuCheckItem_532_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_535_25_$1);
    var ui_RichTextMenuCheckItem_538_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_538_21_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.TEXT_ALIGN_RIGHT_ITEM_ID);
    ui_RichTextMenuCheckItem_538_21_$1.group = "align";
    var ui_RichTextAction_541_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_541_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ALIGN_RIGHT));
    ui_RichTextMenuCheckItem_538_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_541_25_$1);
    var ui_RichTextMenuCheckItem_544_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_544_21_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.TEXT_ALIGN_JUSTIFIED_ITEM_ID);
    ui_RichTextMenuCheckItem_544_21_$1.group = "align";
    var ui_RichTextAction_547_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_547_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ALIGN_JUSTIFIED));
    ui_RichTextMenuCheckItem_544_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_547_25_$1);
    var menuSeparator_550_21_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_551_21_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_551_21_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyField.TEXT_ALIGN_REMOVE_ITEM_ID);
    var ui_RichTextAction_553_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_553_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ALIGN_REMOVE));
    menuItem_551_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_553_25_$1);
    menu_523_17_$1.items = [ui_RichTextMenuCheckItem_526_21_$1, ui_RichTextMenuCheckItem_532_21_$1, ui_RichTextMenuCheckItem_538_21_$1, ui_RichTextMenuCheckItem_544_21_$1, menuSeparator_550_21_$1, menuItem_551_21_$1];
    ui_IconButton_513_13_$1.menu = menu_523_17_$1;
    ui_FloatingToolbar_291_9_$1.items = [local_TeaserOverlayStyleSelector_299_13_$1, tbSpacer_312_13_$1, tbSeparator_313_13_$1, ui_MenuIconButton_315_13_$1, tbSeparator_448_13_$1, ui_MenuIconButton_451_13_$1, tbSeparator_492_13_$1, ui_RichTextActionToggleButton_494_13_$1, ui_RichTextActionToggleButton_503_13_$1, tbSeparator_512_13_$1, ui_IconButton_513_13_$1];
    panel_239_5_$1.tbar = ui_FloatingToolbar_291_9_$1;
    config_$1.items = [panel_239_5_$1];
    var layout_VBox_566_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_566_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_566_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hOYm(config_$1);
  }/*

    // called by generated constructor code
    private*/ function __initialize__(config/*:TeaserOverlayPropertyField*/)/*:void*/ {
      // Enable getId() method used in getRadioGroupName()
      this['initialConfig'] = config || {};
    }/*

    private static*/ function getPositionIconHTML$static(element/*:BEMElement*/)/*:String*/ {
      return '<div class="' + element.getCSSClass() + '"></div>';
    }/*

    override protected*/ function afterRender()/*:void*/ {
      com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase.prototype.afterRender.call(this);
      this.switchingContainer$hOYm =AS3.as( this.queryById(TeaserOverlayPropertyField.SWITCHING_CONTAINER_ITEM_ID),  com.coremedia.ui.components.SwitchingContainer);
      this.switchingContainer$hOYm.on("activeItem",AS3.bind( this,"onActiveEditorChanged$hOYm"));
      this.onActiveEditorChanged$hOYm();
    }/*

    private*/ function onActiveEditorChanged()/*:void*/ {
      // sync fieldLabel with active editor
      var activeItem/*:Component*/ = this.switchingContainer$hOYm.getActiveItem();
      AS3.setBindable(this,"defaultField" , activeItem ? com.coremedia.ui.util.createComponentSelector().id(activeItem.getItemId()).build() : null);
    }/*


    /** The initial height of the rich text editor textfield in pixels * /
    [Bindable]
    public var initialHeight:int;


    /** The number of milliseconds to wait for more changes to the field's value before sending the change event. * /
    [Bindable]
    public var changeBuffer:int;

    /**
     The name of the property that this component works on.
     * /
    [Bindable]
    public var delegatePropertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.TeaserOverlayPropertyField",
      switchingContainer$hOYm: null,
      constructor: TeaserOverlayPropertyField$,
      super$hOYm: function() {
        com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      __initialize__$hOYm: __initialize__,
      afterRender: afterRender,
      onActiveEditorChanged$hOYm: onActiveEditorChanged,
      config: {
        initialHeight: 0,
        changeBuffer: 0,
        delegatePropertyName: null
      },
      statics: {
        TEASER_OVERLAY_RICHTEXT_ITEM_ID: "teaserOverlayArea",
        TEASER_TEXTAREA_ITEM_ID: "teaserText",
        SWITCHING_CONTAINER_ITEM_ID: "switchingContainer",
        POSITION_RATIO_GROUP_ITEM_ID: "positionRadioGroup",
        RTE_SEP_FIRST_ITEM_ID: "sepFirst",
        RTE_SEP_SECOND_ITEM_ID: "sepSecond",
        RTE_SEP_THIRD_ITEM_ID: "sepThird",
        RTE_SEP_FOURTH_ITEM_ID: "sepFourth",
        PARAGRAPH_FORMAT_GROUP_ITEM_ID: "paragraphFormatGroup",
        PARAGRAPH_HEADING1_ITEM_ID: "paragraphFormatHeading1",
        PARAGRAPH_HEADING2_ITEM_ID: "paragraphFormatHeading2",
        PARAGRAPH_HEADING3_ITEM_ID: "paragraphFormatHeading3",
        PARAGRAPH_FORMAT_REMOVE_ITEM_ID: "paragraphFormatRemove",
        POSITION_GROUP_ITEM_ID: "positionGroup",
        BOLD_BUTTON_ITEM_ID: "bold",
        ITALIC_BUTTON_ITEM_ID: "italic",
        TEXT_ALIGN_GROUP_ITEM_ID: "textAlignGroup",
        TEXT_ALIGN_LEFT_ITEM_ID: "textAlignLeft",
        TEXT_ALIGN_CENTER_ITEM_ID: "textAlignCenter",
        TEXT_ALIGN_RIGHT_ITEM_ID: "textAlignRight",
        TEXT_ALIGN_JUSTIFIED_ITEM_ID: "textAlignJustified",
        TEXT_ALIGN_REMOVE_ITEM_ID: "textAlignRemove",
        IMAGE_PROPERTIES_ITEM_ID: "imageProperties",
        POSITION_CHOOSER_BLOCK: undefined,
        POSITION_CHOOSER_ELEMENT_GROUP: undefined,
        POSITION_CHOOSER_ELEMENT_TL: undefined,
        POSITION_CHOOSER_ELEMENT_TC: undefined,
        POSITION_CHOOSER_ELEMENT_TR: undefined,
        POSITION_CHOOSER_ELEMENT_ML: undefined,
        POSITION_CHOOSER_ELEMENT_MC: undefined,
        POSITION_CHOOSER_ELEMENT_MR: undefined,
        POSITION_CHOOSER_ELEMENT_BL: undefined,
        POSITION_CHOOSER_ELEMENT_BC: undefined,
        POSITION_CHOOSER_ELEMENT_BR: undefined,
        __initStatics__: function() {
          POSITION_CHOOSER_BLOCK$static_();
          POSITION_CHOOSER_ELEMENT_GROUP$static_();
          POSITION_CHOOSER_ELEMENT_TL$static_();
          POSITION_CHOOSER_ELEMENT_TC$static_();
          POSITION_CHOOSER_ELEMENT_TR$static_();
          POSITION_CHOOSER_ELEMENT_ML$static_();
          POSITION_CHOOSER_ELEMENT_MC$static_();
          POSITION_CHOOSER_ELEMENT_MR$static_();
          POSITION_CHOOSER_ELEMENT_BL$static_();
          POSITION_CHOOSER_ELEMENT_BC$static_();
          POSITION_CHOOSER_ELEMENT_BR$static_();
        }
      },
      requires: [
        "Ext.Component",
        "Ext.form.RadioGroup",
        "Ext.form.field.Radio",
        "Ext.layout.container.Table",
        "Ext.layout.container.VBox",
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "Ext.panel.Panel",
        "Ext.slider.Single",
        "Ext.toolbar.Separator",
        "Ext.toolbar.Spacer",
        "com.coremedia.cms.editor.TeaserOverlay_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.ckeditor.RichTextAction",
        "com.coremedia.ui.ckeditor.RichTextActionToggleButton",
        "com.coremedia.ui.ckeditor.RichTextMenuCheckItem",
        "com.coremedia.ui.components.FloatingToolbar",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.MenuIconButton",
        "com.coremedia.ui.components.StatefulResizer",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindBlobPropertyPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.Binding",
        "com.coremedia.ui.plugins.ResizablePlugin",
        "com.coremedia.ui.plugins.WriteBeforeFlushPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.CheckboxSkin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase",
        "com.coremedia.cms.editor.sdk.premular.fields.TextAreaPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.TextAreaPropertyFieldDelegatePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPositionMenu",
        "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelector",
        "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel",
        "com.coremedia.cms.editor.sdk.util.TeaserOverlayManager"
      ]
    };
});
