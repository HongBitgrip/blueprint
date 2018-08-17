Ext.define("com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog", function(UploadDialog) {/*package com.coremedia.cms.editor.sdk.upload.dialog{
import com.coremedia.cms.editor.sdk.upload.dialog.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import com.coremedia.cms.editor.sdk.foldercombo.FolderCombo;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.container.Container;
import ext.button.Button;
import com.coremedia.cms.editor.sdk.components.html5.BrowsePlugin;
import ext.form.field.DisplayField;
import com.coremedia.cms.editor.sdk.upload.FileDropPlugin;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.toolbar.Toolbar;
import ext.form.field.Checkbox;
import ext.toolbar.Fill;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.cms.editor.sdk.upload.Upload')]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class UploadDialog extends UploadDialogBase{

    import com.coremedia.cms.editor.sdk.upload.FileWrapper;
    import com.coremedia.cms.editor.sdk.upload.UploadSettings;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.blueprint.studio.config.upload.uploadDialog";
    public static const FOLDER_COMBOBOX:String = 'upload-folder-combo';
    public static const DROP_BOX:String = 'upload-dropBox';
    public static const DROP_LABEL:String = 'upload-drop-label';
    public static const OPEN_IN_TAB_CHECKBOX:String = 'openInTabCheckbox';
    public static const UPLOAD_LIST:String = 'upload-list';

    /**
     * A constant for the file name
     * /
    public static const OPEN_IN_TAB_PROPERTY:String =*/function OPEN_IN_TAB_PROPERTY$static_(){UploadDialog.OPEN_IN_TAB_PROPERTY=( com.coremedia.cms.editor.sdk.upload.UploadSettings.OPEN_IN_TAB_PROPERTY);}/*;

    public*/function UploadDialog$(config/*:UploadDialog = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.upload.dialog.UploadDialogBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.upload.dialog.UploadDialogBase,{});
    var defaults_$1/*:UploadDialog*/ =AS3.cast(UploadDialog,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadFileAction_menu_item_text'));
    config_$1["id"] = "fileUploadDialog";
    AS3.setBindable(config_$1,"width" , com.coremedia.cms.editor.sdk.upload.dialog.UploadDialogBase.UPLOAD_WINDOW_WIDTH);
    config_$1.stateId = "uploadDialogState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"height" , com.coremedia.cms.editor.sdk.upload.dialog.UploadDialogBase.UPLOAD_WINDOW_HEIGHT);
    AS3.setBindable(config_$1,"minHeight" , com.coremedia.cms.editor.sdk.upload.dialog.UploadDialogBase.UPLOAD_WINDOW_HEIGHT);
    config_$1.resizable = true;
    config_$1.resizeHandles = "s";
    AS3.setBindable(config_$1,"scrollable" , "y");
    config_$1.modal = true;
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    var layout_VBox_54_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_54_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_54_5_$1);
    var editor_FolderCombo_57_5_$1/*:com.coremedia.cms.editor.sdk.foldercombo.FolderCombo*/ =AS3.cast(com.coremedia.cms.editor.sdk.foldercombo.FolderCombo,{});
    AS3.setBindable(editor_FolderCombo_57_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_folder_combo_title')));
    AS3.setBindable(editor_FolderCombo_57_5_$1,"folderPathsExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getFolders")));
    editor_FolderCombo_57_5_$1["id"] = UploadDialog.FOLDER_COMBOBOX;
    editor_FolderCombo_57_5_$1.labelAlign = "top";
    editor_FolderCombo_57_5_$1.allowBlank = false;
    AS3.setBindable(editor_FolderCombo_57_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_folder_combo_emptyText')));
    AS3.setBindable(editor_FolderCombo_57_5_$1,"contentType" ,net.jangaroo.ext.Exml.asString( this.getDefaultContentType(config)));
    AS3.setBindable(editor_FolderCombo_57_5_$1,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.upload.FileWrapper.UPLOAD_FOLDER_PROPERTY, AS3.getBindable(config,"file")));
    var ui_BindVisibilityPlugin_67_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_67_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"content"));
    editor_FolderCombo_57_5_$1.plugins = [ui_BindVisibilityPlugin_67_9_$1];
    editor_FolderCombo_57_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var container_70_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_70_5_$1.flex = 1.0;
    container_70_5_$1["id"] = UploadDialog.DROP_BOX;
    AS3.setBindable(container_70_5_$1,"minHeight" , 80.0);
    container_70_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.FRAME_GRID_200.getSkin());
    var layout_VBox_75_9_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_75_9_$1,"align" , "center");
    AS3.setBindable(layout_VBox_75_9_$1,"pack" , "center");
    AS3.setBindable(container_70_5_$1,"layout" , layout_VBox_75_9_$1);
    var button_79_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_79_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_drop_button_text')));
    AS3.setBindable(button_79_9_$1,"handler" ,AS3.bind( this,"uploadButtonHandler"));
    AS3.setBindable(button_79_9_$1,"scale" , "small");
    button_79_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INLINE.getSkin());
    var editor_BrowsePlugin_84_13_$1/*:com.coremedia.cms.editor.sdk.components.html5.BrowsePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.html5.BrowsePlugin,{});
    AS3.setBindable(editor_BrowsePlugin_84_13_$1,"enableFileDrop" , true);
    AS3.setBindable(editor_BrowsePlugin_84_13_$1,"multiple" , true);
    AS3.setBindable(editor_BrowsePlugin_84_13_$1,"dropEl" , this.el);
    button_79_9_$1.plugins = [editor_BrowsePlugin_84_13_$1];
    var displayField_89_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_89_9_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_drop_text'));
    displayField_89_9_$1["id"] = UploadDialog.DROP_LABEL;
    displayField_89_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.EMBEDDED.getSkin());
    container_70_5_$1.items = [button_79_9_$1, displayField_89_9_$1];
    var editor_FileDropPlugin_94_9_$1/*:com.coremedia.cms.editor.sdk.upload.FileDropPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.upload.FileDropPlugin,{});
    AS3.setBindable(editor_FileDropPlugin_94_9_$1,"dropHandler" ,AS3.bind( this,"handleDrop"));
    AS3.setBindable(editor_FileDropPlugin_94_9_$1,"customFileWrapperFactoryMethod" , AS3.getBindable(config,"customFileWrapperFactoryMethod"));
    container_70_5_$1.plugins = [editor_FileDropPlugin_94_9_$1];
    var container_97_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_97_5_$1["id"] = UploadDialog.UPLOAD_LIST;
    container_97_5_$1.items = [];
    var ui_VerticalSpacingPlugin_102_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_102_9_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    container_97_5_$1.plugins = [ui_VerticalSpacingPlugin_102_9_$1];
    config_$1.items = [editor_FolderCombo_57_5_$1, container_70_5_$1, container_97_5_$1];
    var ui_VerticalSpacingPlugin_107_5_$1/*: com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_107_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_VerticalSpacingPlugin_107_5_$1];
    var toolbar_110_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_110_5_$1["focusableContainer"] = false;
    var checkbox_112_9_$1/*:ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_112_9_$1.checked = true;
    checkbox_112_9_$1["id"] = UploadDialog.OPEN_IN_TAB_CHECKBOX;
    AS3.setBindable(checkbox_112_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_open_in_tab')));
    checkbox_112_9_$1.handler =AS3.bind( this,"openInTabHandler");
    var ui_BindVisibilityPlugin_117_13_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_117_13_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"content"));
    checkbox_112_9_$1.plugins = [ui_BindVisibilityPlugin_117_13_$1];
    checkbox_112_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var tbFill_120_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var button_121_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_121_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_121_9_$1,"scale" , "small");
    AS3.setBindable(button_121_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_button_label')));
    AS3.setBindable(button_121_9_$1,"handler" ,AS3.bind( this,"okPressed"));
    var ui_BindPropertyPlugin_126_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_126_13_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_126_13_$1.bindTo = this.getUploadButtonDisabledExpression();
    button_121_9_$1.plugins = [ui_BindPropertyPlugin_126_13_$1];
    var button_130_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_130_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_130_9_$1,"scale" , "small");
    AS3.setBindable(button_130_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')));
    AS3.setBindable(button_130_9_$1,"handler" ,AS3.bind( this,"close"));
    toolbar_110_5_$1.items = [checkbox_112_9_$1, tbFill_120_9_$1, button_121_9_$1, button_130_9_$1];
    config_$1.fbar = toolbar_110_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$yc4y(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.upload.dialog.UploadDialogBase",
      alias: "widget.com.coremedia.blueprint.studio.config.upload.uploadDialog",
      constructor: UploadDialog$,
      super$yc4y: function() {
        com.coremedia.cms.editor.sdk.upload.dialog.UploadDialogBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        FOLDER_COMBOBOX: 'upload-folder-combo',
        DROP_BOX: 'upload-dropBox',
        DROP_LABEL: 'upload-drop-label',
        OPEN_IN_TAB_CHECKBOX: 'openInTabCheckbox',
        UPLOAD_LIST: 'upload-list',
        OPEN_IN_TAB_PROPERTY: undefined,
        __initStatics__: function() {
          OPEN_IN_TAB_PROPERTY$static_();
        }
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Checkbox",
        "Ext.form.field.Display",
        "Ext.layout.container.VBox",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.upload.Upload_properties",
        "com.coremedia.cms.editor.sdk.upload.dialog.UploadDialogBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.components.html5.BrowsePlugin",
        "com.coremedia.cms.editor.sdk.foldercombo.FolderCombo",
        "com.coremedia.cms.editor.sdk.upload.FileDropPlugin",
        "com.coremedia.cms.editor.sdk.upload.FileWrapper",
        "com.coremedia.cms.editor.sdk.upload.UploadSettings"
      ]
    };
});
