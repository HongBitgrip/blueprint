Ext.define("com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindow", function(CreateFromPicturesWindow) {/*package com.coremedia.blueprint.base.components.pictures{
import com.coremedia.blueprint.base.components.pictures.*;
import ext.Action;
import net.jangaroo.ext.Exml;
import ext.form.Labelable;
import ext.layout.container.AnchorLayout;
import ext.form.field.TextField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.plugins.BlockEnterPlugin;
import com.coremedia.cms.editor.sdk.foldercombo.FolderCombo;
import ext.form.FieldContainer;
import ext.layout.container.FitLayout;
import ext.view.DataView;
import com.coremedia.ui.plugins.BindListPlugin;
import ext.data.field.DataField;
import com.coremedia.ui.store.DataField;
/**
 A window for entering the name for a new document created from the picture(s)
 that were previously selected in the library.
 When the ok button is pressed, the window is closed and the new document is created.
 * /
public class CreateFromPicturesWindow extends CreateFromPicturesWindowBase{

    import com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase;
    import com.coremedia.cms.editor.sdk.util.PathFormatter;
    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.createFromPicturesWindow";
    private var folderFormatted:String;
    private var model:Bean;

    // called by generated constructor code
    private*/ function __initialize__(config/*:CreateFromPicturesWindow*/)/*:void*/ {
      this.folderFormatted$tv_u = com.coremedia.cms.editor.sdk.util.PathFormatter.formatSitePath(AS3.getBindable(config,"targetFolder"));
      this.model$tv_u = this.getModel(config);
    }/*

    public*/function CreateFromPicturesWindow$(config/*:CreateFromPicturesWindow = null*/){if(arguments.length<=0)config=null;this.__initialize__$tv_u(config);
    var config_$1/*: com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindowBase*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindowBase,{});
    var defaults_$1/*:CreateFromPicturesWindow*/ =AS3.cast(CreateFromPicturesWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.modal = true;
    AS3.setBindable(config_$1,"width" , 645);
    config_$1.stateId = "createFromPicturesWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.resizable = true;
    config_$1.resizeHandles = "s";
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    var labelable_61_5_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_61_5_$1.labelSeparator = "";
    labelable_61_5_$1.labelAlign = "top";
    config_$1["defaultType"] = labelable_61_5_$1['xtype'];
    delete labelable_61_5_$1['xtype'];
    delete labelable_61_5_$1['xclass'];
    config_$1.defaults = labelable_61_5_$1;
    var layout_Anchor_65_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_65_5_$1);
    var textField_68_5_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    AS3.setBindable(textField_68_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"textFieldLabel")));
    textField_68_5_$1.itemId = "documentName";
    AS3.setBindable(textField_68_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"textFieldEmptyText")));
    textField_68_5_$1.validator =AS3.bind( this,"validateName");
    textField_68_5_$1.anchor = "100%";
    var ui_BindPropertyPlugin_74_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_74_9_$1.bidirectional = true;
    var ui_ValueExpression_76_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_76_13_$1,"context" , this.model$tv_u);
    AS3.setBindable(ui_ValueExpression_76_13_$1,"expression" , "name");
    ui_BindPropertyPlugin_74_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_76_13_$1);
    var ui_BlockEnterPlugin_80_9_$1/*:com.coremedia.ui.plugins.BlockEnterPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BlockEnterPlugin,{});
    textField_68_5_$1.plugins = [ui_BindPropertyPlugin_74_9_$1, ui_BlockEnterPlugin_80_9_$1];
    var editor_FolderCombo_83_5_$1/*:com.coremedia.cms.editor.sdk.foldercombo.FolderCombo*/ =AS3.cast(com.coremedia.cms.editor.sdk.foldercombo.FolderCombo,{});
    AS3.setBindable(editor_FolderCombo_83_5_$1,"folders" , this.folderFormatted$tv_u ? [this.folderFormatted$tv_u] : []);
    AS3.setBindable(editor_FolderCombo_83_5_$1,"contentType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"contentTypeName")));
    editor_FolderCombo_83_5_$1.validator =AS3.bind( this,"validateFolder");
    editor_FolderCombo_83_5_$1.anchor = "100%";
    var ui_ValueExpression_88_9_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_88_9_$1,"context" , this.model$tv_u);
    AS3.setBindable(ui_ValueExpression_88_9_$1,"expression" , "folder");
    AS3.setBindable(editor_FolderCombo_83_5_$1,"bindTo" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_88_9_$1));
    var fieldContainer_92_5_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    AS3.setBindable(fieldContainer_92_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"dataviewLabel")));
    fieldContainer_92_5_$1.anchor = "100%";
    var layout_Fit_95_9_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(fieldContainer_92_5_$1,"layout" , layout_Fit_95_9_$1);
    var dataView_98_9_$1/*:ext.view.DataView*/ =AS3.cast(Ext.view.View,{});
    dataView_98_9_$1.itemId =net.jangaroo.ext.Exml.asString( this.ITEM_ID_IMAGE_VIEW);
    dataView_98_9_$1.itemSelector =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.LIST_BLOCK.getCSSSelector());
    AS3.setBindable(dataView_98_9_$1,"minHeight" , 100.0);
    var ui_BindListPlugin_102_13_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    var data_AutoField_104_17_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_104_17_$1.name = "name";
    var ui_DataField_105_17_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_105_17_$1.name = "thumbnailImage";
    ui_DataField_105_17_$1.mapping = "";
    ui_DataField_105_17_$1["convert"] = com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.computeThumbnailImage;
    ui_DataField_105_17_$1.ifUnreadable = null;
    ui_DataField_105_17_$1.allowNull = true;
    AS3.setBindable(ui_BindListPlugin_102_13_$1,"fields" , [data_AutoField_104_17_$1, ui_DataField_105_17_$1]);
    var ui_ValueExpression_112_17_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_112_17_$1,"context" , this.model$tv_u);
    AS3.setBindable(ui_ValueExpression_112_17_$1,"expression" , "pictures");
    AS3.setBindable(ui_BindListPlugin_102_13_$1,"bindTo" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_112_17_$1));
    dataView_98_9_$1.plugins = [ui_BindListPlugin_102_13_$1];
    dataView_98_9_$1.tpl = 
            ['<div class="' + com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.LIST_BLOCK + ' ' + com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.LIST_MODIFIER_FRAME + '">',
            '<tpl for=".">',
            '<div class="' + com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.LIST_ELEMENT_ITEM + ' ' + com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.THUMBNAIL_BLOCK + ' ' + com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.THUMBNAIL_MODIFIER_NO_SELECTION + '">',
            '{[values.thumbnailImage.render("' + com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.THUMBNAIL_IMAGE_MODIFIER_COLLECTION_VIEW.getCSSClass() + '")]}',
            '<p class="' + com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.THUMBNAIL_ELEMENT_TEXT + ' " data-qtip="{name}">{name} </p>',
            '</div>',
            '</tpl>',
            '</div>'];
    fieldContainer_92_5_$1.items = [dataView_98_9_$1];
    config_$1.items = [textField_68_5_$1, editor_FolderCombo_83_5_$1, fieldContainer_92_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$tv_u(config_$1);
  }/*

    [Bindable]
    public var selectedPictures:Array;


    [Bindable]
    public var targetFolder:String;


    [Bindable]
    public var preferredName:String;


    [Bindable]
    public var textFieldLabel:String;


    [Bindable]
    public var textFieldEmptyText:String;


    [Bindable]
    public var contentTypeName:String;


    [Bindable]
    public var dataviewLabel:String;


    [Bindable]
    public var okAction:ext.Action;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindowBase",
      alias: "widget.com.coremedia.blueprint.base.components.config.createFromPicturesWindow",
      folderFormatted$tv_u: null,
      model$tv_u: null,
      __initialize__$tv_u: __initialize__,
      constructor: CreateFromPicturesWindow$,
      super$tv_u: function() {
        com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedPictures: null,
        targetFolder: null,
        preferredName: null,
        textFieldLabel: null,
        textFieldEmptyText: null,
        contentTypeName: null,
        dataviewLabel: null,
        okAction: null
      },
      requires: [
        "Ext.data.field.Field",
        "Ext.form.FieldContainer",
        "Ext.form.Labelable",
        "Ext.form.field.Text",
        "Ext.layout.container.Anchor",
        "Ext.layout.container.Fit",
        "Ext.view.View",
        "com.coremedia.blueprint.base.components.pictures.CreateFromPicturesWindowBase",
        "com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase",
        "com.coremedia.cms.editor.sdk.foldercombo.FolderCombo",
        "com.coremedia.cms.editor.sdk.util.PathFormatter",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BlockEnterPlugin",
        "com.coremedia.ui.skins.WindowSkin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
