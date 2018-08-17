Ext.define("com.coremedia.ui.ckeditor.dialogs.Dialog_cmtable", function(Dialog_cmtable) {/*package com.coremedia.ui.ckeditor.dialogs{
import com.coremedia.ui.ckeditor.dialogs.*;
import net.jangaroo.ext.Exml;
import ext.form.FormPanel;
import ext.form.field.NumberField;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;

    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
public class Dialog_cmtable extends Dialog_cmtableBase{

    public static const xtype:String = "com.coremedia.ui.config.dialog_cmtable";

    public static const ROWS_ITEM_ID:String = "rows";
    public static const COLUMNS_ITEM_ID:String = "columns";

    public*/function Dialog_cmtable$(config/*:Dialog_cmtable = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.ckeditor.dialogs.Dialog_cmtableBase*/ =AS3.cast(com.coremedia.ui.ckeditor.dialogs.Dialog_cmtableBase,{});
    var defaults_$1/*:Dialog_cmtable*/ =AS3.cast(Dialog_cmtable,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmtable_title_text'));
    AS3.setBindable(config_$1,"width" , 260);
    config_$1.resizable = false;
    config_$1.defaultFocus =net.jangaroo.ext.Exml.asString( Dialog_cmtable.ROWS_ITEM_ID);
    AS3.setBindable(config_$1,"confirmButtonLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'dialog_defaultSubmitButton_text')));
    AS3.setBindable(config_$1,"discardButtonLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'dialog_defaultDiscardButton_text')));
    var form_27_5_$1/*:ext.form.FormPanel*/ =AS3.cast(Ext.form.Panel,{});
    form_27_5_$1.modelValidation = true;
    var numberField_29_9_$1/*:ext.form.field.NumberField*/ =AS3.cast(Ext.form.field.Number,{});
    numberField_29_9_$1.itemId =net.jangaroo.ext.Exml.asString( Dialog_cmtable.ROWS_ITEM_ID);
    numberField_29_9_$1.name = "txtRows";
    numberField_29_9_$1.selectOnFocus = true;
    AS3.setBindable(numberField_29_9_$1,"minValue" , 1.0);
    AS3.setBindable(numberField_29_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'rows')));
    numberField_29_9_$1.anchor = "100%";
    var numberField_35_9_$1/*: ext.form.field.NumberField*/ =AS3.cast(Ext.form.field.Number,{});
    numberField_35_9_$1.itemId =net.jangaroo.ext.Exml.asString( Dialog_cmtable.COLUMNS_ITEM_ID);
    numberField_35_9_$1.name = "txtCols";
    numberField_35_9_$1.selectOnFocus = true;
    AS3.setBindable(numberField_35_9_$1,"minValue" , 1.0);
    AS3.setBindable(numberField_35_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'columns')));
    numberField_35_9_$1.anchor = "100%";
    form_27_5_$1.items = [numberField_29_9_$1, numberField_35_9_$1];
    var ui_VerticalSpacingPlugin_43_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    form_27_5_$1.plugins = [ui_VerticalSpacingPlugin_43_9_$1];
    config_$1.items = [form_27_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$L6i5(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.dialogs.Dialog_cmtableBase",
      alias: "widget.com.coremedia.ui.config.dialog_cmtable",
      constructor: Dialog_cmtable$,
      super$L6i5: function() {
        com.coremedia.ui.ckeditor.dialogs.Dialog_cmtableBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ROWS_ITEM_ID: "rows",
        COLUMNS_ITEM_ID: "columns"
      },
      requires: [
        "Ext.form.Panel",
        "Ext.form.field.Number",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.ckeditor.dialogs.Dialog_cmtableBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.ui.plugins.VerticalSpacingPlugin"]
    };
});
