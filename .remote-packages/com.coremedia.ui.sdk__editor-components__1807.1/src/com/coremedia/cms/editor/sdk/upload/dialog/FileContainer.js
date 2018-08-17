Ext.define("com.coremedia.cms.editor.sdk.upload.dialog.FileContainer", function(FileContainer) {/*package com.coremedia.cms.editor.sdk.upload.dialog{
import com.coremedia.cms.editor.sdk.upload.dialog.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import ext.container.Container;
import ext.layout.container.CenterLayout;
import ext.layout.container.ColumnLayout;
import ext.form.field.TextField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.form.field.DisplayField;
import ext.button.Button;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;

    [ResourceBundle('com.coremedia.cms.editor.sdk.upload.Upload')]
public class FileContainer extends FileContainerBase{

    import com.coremedia.cms.editor.sdk.upload.FileWrapper;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;

    public static const xtype:String = "com.coremedia.blueprint.studio.config.upload.fileContainer";
    public static const PREVIEW_ITEM_ID:String = "preview";
    public static const FILE_NAME_ITEM_ID:String = "filename";

    /**
     * A constant for the file name
     * /
    public static const NAME_PROPERTY:String =*/function NAME_PROPERTY$static_(){FileContainer.NAME_PROPERTY=( com.coremedia.cms.editor.sdk.upload.FileWrapper.NAME_PROPERTY);}/*;

    /**
     * A constant for the mime type
     * /
    public static const MIME_TYPE_PROPERTY:String =*/function MIME_TYPE_PROPERTY$static_(){FileContainer.MIME_TYPE_PROPERTY=( com.coremedia.cms.editor.sdk.upload.FileWrapper.MIME_TYPE_PROPERTY);}/*;

    /**
     * A constant for the extension type
     * /
    public static const FILE_TYPE_PROPERTY:String =*/function FILE_TYPE_PROPERTY$static_(){FileContainer.FILE_TYPE_PROPERTY=( com.coremedia.cms.editor.sdk.upload.FileWrapper.FILE_TYPE_PROPERTY);}/*;

    public*/function FileContainer$(config/*:FileContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.upload.dialog.FileContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.upload.dialog.FileContainerBase,{});
    var defaults_$1/*:FileContainer*/ =AS3.cast(FileContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_HBox_48_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_48_5_$1);
    var container_51_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_51_5_$1.itemId =net.jangaroo.ext.Exml.asString( FileContainer.PREVIEW_ITEM_ID);
    container_51_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.FRAME.getSkin());
    AS3.setBindable(container_51_5_$1,"width" , com.coremedia.cms.editor.sdk.upload.dialog.FileContainerBase.PREVIEW_WIDTH);
    AS3.setBindable(container_51_5_$1,"height" , com.coremedia.cms.editor.sdk.upload.dialog.FileContainerBase.PREVIEW_HEIGHT);
    container_51_5_$1.items = [];
    var layout_Center_58_9_$1/*:ext.layout.container.CenterLayout*/ =AS3.cast(Ext.layout.container.Center,{});
    AS3.setBindable(container_51_5_$1,"layout" , layout_Center_58_9_$1);
    var container_61_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_61_5_$1.flex = 1.0;
    var layout_Column_63_9_$1/*:ext.layout.container.ColumnLayout*/ =AS3.cast(Ext.layout.container.Column,{});
    AS3.setBindable(container_61_5_$1,"layout" , layout_Column_63_9_$1);
    var textField_66_9_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_66_9_$1.allowBlank = false;
    textField_66_9_$1.columnWidth = 1.0;
    textField_66_9_$1.labelAlign = "top";
    AS3.setBindable(textField_66_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_document_name')));
    textField_66_9_$1.itemId =net.jangaroo.ext.Exml.asString( FileContainer.FILE_NAME_ITEM_ID);
    var ui_BindPropertyPlugin_72_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_72_13_$1.bidirectional = true;
    var ui_ValueExpression_74_17_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_74_17_$1,"context" , AS3.getBindable(config,"file"));
    AS3.setBindable(ui_ValueExpression_74_17_$1,"expression" ,net.jangaroo.ext.Exml.asString( FileContainer.NAME_PROPERTY));
    ui_BindPropertyPlugin_72_13_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_74_17_$1);
    textField_66_9_$1.plugins = [ui_BindPropertyPlugin_72_13_$1];
    var displayField_80_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_80_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_content_type_text')));
    displayField_80_9_$1.columnWidth = 0.6;
    displayField_80_9_$1.labelWidth = 40.0;
    var ui_BindPropertyPlugin_84_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_84_13_$1.componentProperty = "value";
    var ui_ValueExpression_86_17_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_86_17_$1,"context" , AS3.getBindable(config,"file"));
    AS3.setBindable(ui_ValueExpression_86_17_$1,"expression" ,net.jangaroo.ext.Exml.asString( FileContainer.FILE_TYPE_PROPERTY));
    ui_BindPropertyPlugin_84_13_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_86_17_$1);
    displayField_80_9_$1.plugins = [ui_BindPropertyPlugin_84_13_$1];
    var button_92_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_92_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    button_92_9_$1.columnWidth = 0.4;
    AS3.setBindable(button_92_9_$1,"textAlign" , "right");
    AS3.setBindable(button_92_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_remove_document')));
    AS3.setBindable(button_92_9_$1,"handler" ,AS3.bind( this,"callRemoveHandler"));
    container_61_5_$1.items = [textField_66_9_$1, displayField_80_9_$1, button_92_9_$1];
    config_$1.items = [container_51_5_$1, container_61_5_$1];
    var ui_HorizontalSpacingPlugin_101_5_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    config_$1.plugins = [ui_HorizontalSpacingPlugin_101_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$90Oo(config_$1);
  }/*

    /**
     * The selected content if dialog opened from library or null
     * /
    [Bindable]
    public var file:FileWrapper;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.upload.dialog.FileContainerBase",
      alias: "widget.com.coremedia.blueprint.studio.config.upload.fileContainer",
      constructor: FileContainer$,
      super$90Oo: function() {
        com.coremedia.cms.editor.sdk.upload.dialog.FileContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {file: null},
      statics: {
        PREVIEW_ITEM_ID: "preview",
        FILE_NAME_ITEM_ID: "filename",
        NAME_PROPERTY: undefined,
        MIME_TYPE_PROPERTY: undefined,
        FILE_TYPE_PROPERTY: undefined,
        __initStatics__: function() {
          NAME_PROPERTY$static_();
          MIME_TYPE_PROPERTY$static_();
          FILE_TYPE_PROPERTY$static_();
        }
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.form.field.Text",
        "Ext.layout.container.Center",
        "Ext.layout.container.Column",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.sdk.upload.Upload_properties",
        "com.coremedia.cms.editor.sdk.upload.dialog.FileContainerBase",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.upload.FileWrapper"]
    };
});
