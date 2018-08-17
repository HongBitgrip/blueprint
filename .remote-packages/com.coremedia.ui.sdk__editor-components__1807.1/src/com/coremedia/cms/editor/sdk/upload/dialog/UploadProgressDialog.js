Ext.define("com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialog", function(UploadProgressDialog) {/*package com.coremedia.cms.editor.sdk.upload.dialog{
import com.coremedia.cms.editor.sdk.upload.dialog.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.form.field.DisplayField;
import ext.form.FieldContainer;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.cms.editor.sdk.premular.DocumentPath;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.toolbar.Fill;

    [ResourceBundle('com.coremedia.cms.editor.sdk.upload.Upload')]
public class UploadProgressDialog extends UploadProgressDialogBase{

    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.DisplayFieldSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.blueprint.studio.config.upload.uploadProgressDialog";
    public static const PROGRESS_LIST:String = 'upload-progress-list';

    public*/function UploadProgressDialog$(config/*:UploadProgressDialog = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialogBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialogBase,{});
    var defaults_$1/*:UploadProgressDialog*/ =AS3.cast(UploadProgressDialog,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadProgressDialog_title'));
    config_$1.modal = config.modal || false;
    AS3.setBindable(config_$1,"width" , 450);
    AS3.setBindable(config_$1,"minWidth" , 450.0);
    AS3.setBindable(config_$1,"minHeight" , 155.0);
    AS3.setBindable(config_$1,"closable" , true);
    config_$1.resizable = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    config_$1.constrainHeader = true;
    var layout_VBox_35_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_35_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_35_5_$1);
    var displayField_38_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_38_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD);
    displayField_38_5_$1.padding = "0 0 6 0";
    AS3.setBindable(displayField_38_5_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadProgressDialog_header_msg'));
    var fieldContainer_41_5_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    fieldContainer_41_5_$1.itemId =net.jangaroo.ext.Exml.asString( UploadProgressDialog.PROGRESS_LIST);
    AS3.setBindable(fieldContainer_41_5_$1,"scrollable" , "y");
    AS3.setBindable(fieldContainer_41_5_$1,"maxHeight" , 500.0);
    fieldContainer_41_5_$1.bubbleEvents = ['add', 'remove'];
    var layout_VBox_46_9_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_46_9_$1,"align" , "stretch");
    AS3.setBindable(fieldContainer_41_5_$1,"layout" , layout_VBox_46_9_$1);
    fieldContainer_41_5_$1.items = [];
    var ui_VerticalSpacingPlugin_52_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    fieldContainer_41_5_$1.plugins = [ui_VerticalSpacingPlugin_52_9_$1];
    config_$1.items = [displayField_38_5_$1, fieldContainer_41_5_$1];
    var toolbar_57_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var editor_DocumentPath_59_9_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentPath*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentPath,{});
    editor_DocumentPath_59_9_$1.hideLabel = true;
    AS3.setBindable(editor_DocumentPath_59_9_$1,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"folder")));
    var ui_BindVisibilityPlugin_62_13_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_62_13_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"folder"));
    editor_DocumentPath_59_9_$1.plugins = [ui_BindVisibilityPlugin_62_13_$1];
    editor_DocumentPath_59_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var tbFill_65_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    toolbar_57_5_$1.items = [editor_DocumentPath_59_9_$1, tbFill_65_9_$1];
    config_$1.fbar = toolbar_57_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$CSN9(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialogBase",
      alias: "widget.com.coremedia.blueprint.studio.config.upload.uploadProgressDialog",
      constructor: UploadProgressDialog$,
      super$CSN9: function() {
        com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialogBase.prototype.constructor.apply(this, arguments);
      },
      statics: {PROGRESS_LIST: 'upload-progress-list'},
      requires: [
        "Ext.form.FieldContainer",
        "Ext.form.field.Display",
        "Ext.layout.container.VBox",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.upload.Upload_properties",
        "com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressDialogBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.DocumentPath"]
    };
});
