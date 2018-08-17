Ext.define("com.coremedia.ui.ckeditor.dialogs.Dialog_cmlink", function(Dialog_cmlink) {/*package com.coremedia.ui.ckeditor.dialogs{
import com.coremedia.ui.ckeditor.dialogs.*;
import net.jangaroo.ext.Exml;
import ext.form.FormPanel;
import ext.form.field.TextField;
import com.coremedia.ui.ckeditor.LinkTypeCombo;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;

    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
public class Dialog_cmlink extends Dialog_cmlinkBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.ui.config.dialog_cmlink";

    /**
     * The itemID of the form in this dialog.
     * /
    public static const FORM_ITEM_ID:String = "form";

    /**
     * The itemID of the url textfield.
     * /
    public static const URL_TEXTFIELD_ITEM_ID:String = "url";

    /**
     * The itemID of the target textfield.
     * /
    public static const TARGET_TEXTFIELD_ITEM_ID:String = "target";

    public*/function Dialog_cmlink$(config/*:Dialog_cmlink = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.ckeditor.dialogs.Dialog_cmlinkBase*/ =AS3.cast(com.coremedia.ui.ckeditor.dialogs.Dialog_cmlinkBase,{});
    var defaults_$1/*:Dialog_cmlink*/ =AS3.cast(Dialog_cmlink,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmlink_dialogTitle'));
    AS3.setBindable(config_$1,"width" , 400);
    config_$1.resizable = false;
    AS3.setBindable(config_$1,"initData" , com.coremedia.ui.ckeditor.dialogs.Dialog_cmlinkBase.getTargetType(AS3.getBindable(config,"targetTypeValueExpression")));
    config_$1.defaultFocus =net.jangaroo.ext.Exml.asString( Dialog_cmlink.URL_TEXTFIELD_ITEM_ID);
    var form_48_5_$1/*:ext.form.FormPanel*/ =AS3.cast(Ext.form.Panel,{});
    form_48_5_$1.itemId =net.jangaroo.ext.Exml.asString( Dialog_cmlink.FORM_ITEM_ID);
    var textField_50_9_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_50_9_$1.name = "url.url";
    AS3.setBindable(textField_50_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'url')));
    textField_50_9_$1.allowBlank = false;
    textField_50_9_$1.itemId =net.jangaroo.ext.Exml.asString( Dialog_cmlink.URL_TEXTFIELD_ITEM_ID);
    textField_50_9_$1.selectOnFocus = true;
    textField_50_9_$1.vtype = "validURL";
    textField_50_9_$1.anchor = "100%";
    var ui_LinkTypeCombo_57_9_$1/*:com.coremedia.ui.ckeditor.LinkTypeCombo*/ =AS3.cast(com.coremedia.ui.ckeditor.LinkTypeCombo,{});
    ui_LinkTypeCombo_57_9_$1.name = "target.type";
    AS3.setBindable(ui_LinkTypeCombo_57_9_$1,"listeners" , { 'select':AS3.bind( this,"linkTypeSelected") });
    AS3.setBindable(ui_LinkTypeCombo_57_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'targetType')));
    ui_LinkTypeCombo_57_9_$1.anchor = "100%";
    var textField_61_9_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_61_9_$1.name = "target.name";
    textField_61_9_$1.itemId =net.jangaroo.ext.Exml.asString( Dialog_cmlink.TARGET_TEXTFIELD_ITEM_ID);
    AS3.setBindable(textField_61_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'target')));
    textField_61_9_$1.anchor = "100%";
    form_48_5_$1.items = [textField_50_9_$1, ui_LinkTypeCombo_57_9_$1, textField_61_9_$1];
    var ui_VerticalSpacingPlugin_67_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    form_48_5_$1.plugins = [ui_VerticalSpacingPlugin_67_9_$1];
    config_$1.items = [form_48_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$83tZ(config_$1);
  }/*

    /**
     * The ValueExpression that carries the target type for the link type combo. If not set, the
     * default type ist "new" to open the link in a new window.
     * /
    [Bindable]
    public var targetTypeValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.dialogs.Dialog_cmlinkBase",
      alias: "widget.com.coremedia.ui.config.dialog_cmlink",
      constructor: Dialog_cmlink$,
      super$83tZ: function() {
        com.coremedia.ui.ckeditor.dialogs.Dialog_cmlinkBase.prototype.constructor.apply(this, arguments);
      },
      config: {targetTypeValueExpression: null},
      statics: {
        FORM_ITEM_ID: "form",
        URL_TEXTFIELD_ITEM_ID: "url",
        TARGET_TEXTFIELD_ITEM_ID: "target"
      },
      requires: [
        "Ext.form.Panel",
        "Ext.form.field.Text",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.ckeditor.dialogs.Dialog_cmlinkBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.ui.ckeditor.LinkTypeCombo",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin"
      ]
    };
});
