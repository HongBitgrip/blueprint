Ext.define("com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyField", function(BlobPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import ext.layout.container.AutoLayout;
import ext.panel.Panel;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.actions.DeleteBlobAction;
import com.coremedia.cms.editor.sdk.actions.OpenBlobAction;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.ui.components.ExtendedContainer;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.plugins.BindPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.components.Image;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.components.html5.Html5Upload;
import ext.container.Container;
import ext.form.field.DisplayField;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 An blob editing component that binds to a blob property being edited inside
 of a document form. Specify the propertyName property for selecting
 the blob property.
 The Preview of the blob is determined by the contenttype of the blob. All kind of images will be shown in a small
 preview
 all other contenttypes just show an icon for the contenttype.
 * /
public class BlobPropertyField extends BlobPropertyFieldBase{

    import com.coremedia.cms.editor.sdk.premular.DocumentTabPanel;
    import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMModifier;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.IconDisplayFieldSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.blobPropertyField";

    private static const*/var CONTAINER_WIDTH_HEIGHT$static/*:int*/ = 128;/*
    // container adds 1px border to every side
    private static const*/var IMAGE_WIDTH_HEIGHT$static/*:int*/;/* =*/function IMAGE_WIDTH_HEIGHT$static_(){IMAGE_WIDTH_HEIGHT$static=( CONTAINER_WIDTH_HEIGHT$static - 2);};/*

    private static const*/var BLOB_BLOCK$static/*:BEMBlock*/;/* =*/function BLOB_BLOCK$static_(){BLOB_BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-blob-property-field-blob"));};/*
    private static const*/var BLOB_MODIFIER_IMAGE$static/*:BEMModifier*/;/* =*/function BLOB_MODIFIER_IMAGE$static_(){BLOB_MODIFIER_IMAGE$static=( BLOB_BLOCK$static.createModifier("image"));};/*
    private var propertiesValueExpression:ValueExpression;
    private var propertyValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:BlobPropertyField*/)/*:void*/ {
      this.propertiesValueExpression$$eDr = AS3.getBindable(config,"bindTo").extendBy('properties');
      this.propertyValueExpression$$eDr = this.propertiesValueExpression$$eDr.extendBy(AS3.getBindable(config,"propertyName"));
    }/*

    public*/function BlobPropertyField$(config/*:BlobPropertyField = null*/){if(arguments.length<=0)config=null;this.__initialize__$$eDr(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyFieldBase,{});
    var defaults_$1/*:BlobPropertyField*/ =AS3.cast(BlobPropertyField,{});
    AS3.setBindable(defaults_$1,"containerLayout" , "form");
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BindPropertyPlugin_105_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_105_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('type.name');
    ui_BindPropertyPlugin_105_5_$1.componentProperty = "fieldLabel";
    ui_BindPropertyPlugin_105_5_$1.transformer = function(value/*:String*/)/*:String*/ {return com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getLocalizedLabel(value, AS3.getBindable(config,"propertyName"));};
    var editor_PropertyFieldPlugin_108_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_108_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    config_$1.plugins = [ui_BindPropertyPlugin_105_5_$1, editor_PropertyFieldPlugin_108_5_$1];
    var layout_Auto_112_5_$1/*:ext.layout.container.AutoLayout*/ =AS3.cast(Ext.layout.container.Auto,{});
    AS3.setBindable(config_$1,"layout" , layout_Auto_112_5_$1);
    var panel_115_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    var ui_HorizontalSpacingPlugin_117_9_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    AS3.setBindable(ui_HorizontalSpacingPlugin_117_9_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_MODIFIER_200);
    panel_115_5_$1.plugins = [ui_HorizontalSpacingPlugin_117_9_$1];
    var toolbar_120_9_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_120_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.HEADER_GRID_100.getSkin());
    var ui_IconButton_122_13_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_122_13_$1.itemId = "deleteBlob";
    var editor_DeleteBlobAction_124_17_$1/*:com.coremedia.cms.editor.sdk.actions.DeleteBlobAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteBlobAction,{});
    AS3.setBindable(editor_DeleteBlobAction_124_17_$1,"blobValueExpression" , this.propertyValueExpression$$eDr);
    AS3.setBindable(editor_DeleteBlobAction_124_17_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_DeleteBlobAction_124_17_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    ui_IconButton_122_13_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.DeleteBlobAction(editor_DeleteBlobAction_124_17_$1);
    var ui_IconButton_130_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_130_13_$1.itemId = "openBlob";
    var editor_OpenBlobAction_132_17_$1/*:com.coremedia.cms.editor.sdk.actions.OpenBlobAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenBlobAction,{});
    AS3.setBindable(editor_OpenBlobAction_132_17_$1,"blobValueExpression" , this.propertyValueExpression$$eDr);
    ui_IconButton_130_13_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenBlobAction(editor_OpenBlobAction_132_17_$1);
    toolbar_120_9_$1.items = [ui_IconButton_122_13_$1, ui_IconButton_130_13_$1];
    panel_115_5_$1.tbar = toolbar_120_9_$1;
    var ui_SwitchingContainer_140_9_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    AS3.setBindable(ui_SwitchingContainer_140_9_$1,"activeItemValueExpression" , this.propertyValueExpression$$eDr);
    ui_SwitchingContainer_140_9_$1.maskOnDisable = false;
    AS3.setBindable(ui_SwitchingContainer_140_9_$1,"transformer" ,AS3.bind( this,"getIdFromMimeType"));
    var editor_BindDisablePlugin_144_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_144_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_144_13_$1.bindTo = AS3.getBindable(config,"bindTo");
    ui_SwitchingContainer_140_9_$1.plugins = [editor_BindDisablePlugin_144_13_$1];
    var ui_ExtendedContainer_148_13_$1/*:com.coremedia.ui.components.ExtendedContainer*/ =AS3.cast(com.coremedia.ui.components.ExtendedContainer,{});
    ui_ExtendedContainer_148_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyFieldBase.BLOB_CONTAINER_ITEM_ID);
    ui_ExtendedContainer_148_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.FRAME.getSkin());
    AS3.setBindable(ui_ExtendedContainer_148_13_$1,"height" , CONTAINER_WIDTH_HEIGHT$static);
    AS3.setBindable(ui_ExtendedContainer_148_13_$1,"width" , CONTAINER_WIDTH_HEIGHT$static);
    var ui_IconDisplayField_153_17_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_153_17_$1,"scale" , "large");
    ui_IconDisplayField_153_17_$1.hideLabel = true;
    ui_IconDisplayField_153_17_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.DOUBLE.getSkin());
    var ui_BindPlugin_157_21_$1/*:com.coremedia.ui.plugins.BindPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPlugin,{});
    ui_BindPlugin_157_21_$1.bindTo = this.propertyValueExpression$$eDr;
    ui_BindPlugin_157_21_$1.boundValueChanged =AS3.bind( this,"updateIconClass");
    ui_IconDisplayField_153_17_$1.plugins = [ui_BindPlugin_157_21_$1];
    ui_ExtendedContainer_148_13_$1.items = [ui_IconDisplayField_153_17_$1];
    var editor_ShowIssuesPlugin_164_17_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_164_17_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_164_17_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_164_17_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var ui_BEMPlugin_167_17_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_167_17_$1,"block" , BLOB_BLOCK$static);
    ui_ExtendedContainer_148_13_$1.plugins = [editor_ShowIssuesPlugin_164_17_$1, ui_BEMPlugin_167_17_$1];
    var layout_HBox_170_17_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_170_17_$1,"pack" , "center");
    AS3.setBindable(layout_HBox_170_17_$1,"align" , "middle");
    AS3.setBindable(ui_ExtendedContainer_148_13_$1,"layout" , layout_HBox_170_17_$1);
    var ui_ExtendedContainer_174_13_$1/*: com.coremedia.ui.components.ExtendedContainer*/ =AS3.cast(com.coremedia.ui.components.ExtendedContainer,{});
    ui_ExtendedContainer_174_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyFieldBase.IMAGE_CONTAINER_ITEM_ID);
    ui_ExtendedContainer_174_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.FRAME.getSkin());
    AS3.setBindable(ui_ExtendedContainer_174_13_$1,"width" , CONTAINER_WIDTH_HEIGHT$static);
    AS3.setBindable(ui_ExtendedContainer_174_13_$1,"height" , CONTAINER_WIDTH_HEIGHT$static);
    var ui_Image_180_17_$1/*:com.coremedia.ui.components.Image*/ =AS3.cast(com.coremedia.ui.components.Image,{});
    AS3.setBindable(ui_Image_180_17_$1,"width" , IMAGE_WIDTH_HEIGHT$static);
    AS3.setBindable(ui_Image_180_17_$1,"height" , IMAGE_WIDTH_HEIGHT$static);
    var editor_SetPropertyLabelPlugin_183_21_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_183_21_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_183_21_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    var ui_BindPropertyPlugin_185_21_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_185_21_$1.componentProperty = "src";
    ui_BindPropertyPlugin_185_21_$1.bindTo = this.propertyValueExpression$$eDr.extendBy('uri');
    ui_BindPropertyPlugin_185_21_$1.transformer = this.getBlobImageTransformer(IMAGE_WIDTH_HEIGHT$static, IMAGE_WIDTH_HEIGHT$static);
    ui_Image_180_17_$1.plugins = [editor_SetPropertyLabelPlugin_183_21_$1, ui_BindPropertyPlugin_185_21_$1];
    ui_ExtendedContainer_174_13_$1.items = [ui_Image_180_17_$1];
    var editor_ShowIssuesPlugin_192_17_$1/*: com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_192_17_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_192_17_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_192_17_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var ui_BEMPlugin_195_17_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_195_17_$1,"block" , BLOB_BLOCK$static);
    ui_ExtendedContainer_174_13_$1.plugins = [editor_ShowIssuesPlugin_192_17_$1, ui_BEMPlugin_195_17_$1];
    var editor_Html5Upload_198_13_$1/*:com.coremedia.cms.editor.sdk.components.html5.Html5Upload*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.html5.Html5Upload,{});
    editor_Html5Upload_198_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyFieldBase.EMPTY_CONTAINER_ITEM_ID);
    AS3.setBindable(editor_Html5Upload_198_13_$1,"width" , CONTAINER_WIDTH_HEIGHT$static);
    AS3.setBindable(editor_Html5Upload_198_13_$1,"height" , CONTAINER_WIDTH_HEIGHT$static);
    AS3.setBindable(editor_Html5Upload_198_13_$1,"bindTo" , this.propertiesValueExpression$$eDr);
    AS3.setBindable(editor_Html5Upload_198_13_$1,"targetProperty" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_Html5Upload_198_13_$1,"buttonText" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getBlobUploadButtonText(AS3.getBindable(config,"contentType"), AS3.getBindable(config,"buttonText"))));
    AS3.setBindable(editor_Html5Upload_198_13_$1,"helpText" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getBlobHelpText(AS3.getBindable(config,"contentType"), AS3.getBindable(config,"helpText"))));
    var editor_BindDisablePlugin_206_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_206_17_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_206_17_$1.bindTo = AS3.getBindable(config,"bindTo");
    var editor_ShowIssuesPlugin_208_17_$1/*: com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_208_17_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_208_17_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_208_17_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var ui_BEMPlugin_211_17_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_211_17_$1,"block" , BLOB_BLOCK$static);
    editor_Html5Upload_198_13_$1.plugins = [editor_BindDisablePlugin_206_17_$1, editor_ShowIssuesPlugin_208_17_$1, ui_BEMPlugin_211_17_$1];
    ui_SwitchingContainer_140_9_$1.items = [ui_ExtendedContainer_148_13_$1, ui_ExtendedContainer_174_13_$1, editor_Html5Upload_198_13_$1];
    var container_217_9_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_217_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyFieldBase.BLOB_DETAILS_ITEM_ID);
    var displayField_219_13_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_219_13_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Blob_size_text')));
    var ui_BindPropertyPlugin_221_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_221_17_$1.componentProperty = "value";
    ui_BindPropertyPlugin_221_17_$1.transformer = AS3.getBindable(config,"sizeLabelTransformer") || com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getHumanReadableBlobSize;
    ui_BindPropertyPlugin_221_17_$1.bindTo = this.propertyValueExpression$$eDr;
    displayField_219_13_$1.plugins = [ui_BindPropertyPlugin_221_17_$1];
    var displayField_226_13_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_226_13_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Blob_contentType_text')));
    var ui_BindPropertyPlugin_228_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_228_17_$1.componentProperty = "value";
    ui_BindPropertyPlugin_228_17_$1.transformer = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getBlobContentType;
    ui_BindPropertyPlugin_228_17_$1.bindTo = this.propertyValueExpression$$eDr;
    displayField_226_13_$1.plugins = [ui_BindPropertyPlugin_228_17_$1];
    container_217_9_$1.items = [displayField_219_13_$1, displayField_226_13_$1];
    panel_115_5_$1.items = [ui_SwitchingContainer_140_9_$1, container_217_9_$1];
    var layout_HBox_237_9_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(panel_115_5_$1,"layout" , layout_HBox_237_9_$1);
    config_$1.items = [panel_115_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$$eDr(config_$1);modifiersValueExpression_.call(this);;
  }/*

    /**
     * A property path expression leading to the Bean whose property is edited.
     * This property editor assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    [Bindable]
    public var modifiersValueExpression:ValueExpression =*/function modifiersValueExpression_(){this.modifiersValueExpression=( com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]));}/*;

    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /** The content type of the blob, if not set, everything can be uploaded. * /
    [Bindable]
    public var contentType:String;


    /** The text for the upload button. If not provided it will be derived from the content type. * /
    [Bindable]
    public var buttonText:String;


    /** The help text shown below the upload button. If not provided it will be derived from the content type. * /
    [Bindable]
    public var helpText:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;


    /**
     An optional class used as iconCls if the blob is not an image or showImageThumbnail is set to false
     * /
    [Bindable]
    public var blobIconCls:String;


    /** Custom transformer function to render the label for the blob size. Use this if you want to
   display the blob size in a custom format. The function will be called with the Blob as its sole parameter. If
   unused, PropertyEditorUtil#getHumanReadableBlobSize will be used.
   @see com.coremedia.cms.editor.sdk.util.PropertyEditorUtil#getHumanReadableBlobSize()
   @see com.coremedia.ui.data.Blob
     * /
    [Bindable]
    public var sizeLabelTransformer:Function;


    /**
     A configurable Layout for this BlobPropertyField.
     * /
    [Bindable]
    public var containerLayout:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyFieldBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.blobPropertyField",
      propertiesValueExpression$$eDr: null,
      propertyValueExpression$$eDr: null,
      __initialize__$$eDr: __initialize__,
      constructor: BlobPropertyField$,
      super$$eDr: function() {
        com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        modifiersValueExpression: undefined,
        propertyName: null,
        contentType: null,
        buttonText: null,
        helpText: null,
        hideIssues: false,
        blobIconCls: null,
        sizeLabelTransformer: null,
        containerLayout: null
      },
      statics: {
        IMAGE_WIDTH_HEIGHT: undefined,
        BLOB_BLOCK: undefined,
        BLOB_MODIFIER_IMAGE: undefined,
        __initStatics__: function() {
          IMAGE_WIDTH_HEIGHT$static_();
          BLOB_BLOCK$static_();
          BLOB_MODIFIER_IMAGE$static_();
        }
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.Auto",
        "Ext.layout.container.HBox",
        "Ext.panel.Panel",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.BlobPropertyFieldBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.ExtendedContainer",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.Image",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.IconDisplayFieldSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.DeleteBlobAction",
        "com.coremedia.cms.editor.sdk.actions.OpenBlobAction",
        "com.coremedia.cms.editor.sdk.components.html5.Html5Upload",
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
