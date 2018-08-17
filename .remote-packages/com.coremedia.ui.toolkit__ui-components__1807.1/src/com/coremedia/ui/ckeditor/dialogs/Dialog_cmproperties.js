Ext.define("com.coremedia.ui.ckeditor.dialogs.Dialog_cmproperties", function(Dialog_cmproperties) {/*package com.coremedia.ui.ckeditor.dialogs{
import com.coremedia.ui.ckeditor.dialogs.*;
import net.jangaroo.ext.Exml;
import ext.form.FormPanel;
import ext.form.RadioGroup;
import ext.form.field.Radio;
import ext.Component;

    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
public class Dialog_cmproperties extends Dialog_cmpropertiesBase{

    public static const xtype:String = "com.coremedia.ui.config.dialog_cmproperties";

    /**
     * The itemID of the form in this dialog.
     * /
    public static const FORM_ITEM_ID:String = "form";

    /**
     * The itemId of the float-left radio button
     * /
    public static const RADIO_FLOAT_LEFT_ITEM_ID:String = "floatLeft";

    /**
     * The itemId of the float-right radio button
     * /
    public static const RADIO_FLOAT_RIGHT_ITEM_ID:String = "floatRight";

    /**
     * The itemId of the float-none radio button
     * /
    public static const RADIO_FLOAT_NONE_ITEM_ID:String = "floatNone";

    /**
     * The itemId of the "page default" radio button
     * /
    public static const RADIO_DEFAULT_ITEM_ID:String = "floatDefault";

    public*/function Dialog_cmproperties$(config/*:Dialog_cmproperties = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.ckeditor.dialogs.Dialog_cmpropertiesBase*/ =AS3.cast(com.coremedia.ui.ckeditor.dialogs.Dialog_cmpropertiesBase,{});
    var defaults_$1/*:Dialog_cmproperties*/ =AS3.cast(Dialog_cmproperties,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmproperties_dialogTitle'));
    AS3.setBindable(config_$1,"width" , 260);
    config_$1.resizable = false;
    var form_46_5_$1/*:ext.form.FormPanel*/ =AS3.cast(Ext.form.Panel,{});
    form_46_5_$1.itemId =net.jangaroo.ext.Exml.asString( Dialog_cmproperties.FORM_ITEM_ID);
    AS3.setBindable(form_46_5_$1,"layout" , "anchor");
    form_46_5_$1.anchor = "100%";
    var radioGroup_50_9_$1/*:ext.form.RadioGroup*/ =AS3.cast(Ext.form.RadioGroup,{});
    radioGroup_50_9_$1.allowBlank = false;
    AS3.setBindable(radioGroup_50_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmproperties_image_text')));
    radioGroup_50_9_$1.labelAlign = "top";
    radioGroup_50_9_$1.labelSeparator = "";
    radioGroup_50_9_$1.columns = 1;
    radioGroup_50_9_$1.name = "style";
    var radio_57_13_$1/*:ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    AS3.setBindable(radio_57_13_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmproperties_boxLabel_left')));
    radio_57_13_$1.itemId =net.jangaroo.ext.Exml.asString( Dialog_cmproperties.RADIO_FLOAT_LEFT_ITEM_ID);
    radio_57_13_$1.name = "style";
    radio_57_13_$1.inputValue = "float--left";
    var radio_61_13_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    AS3.setBindable(radio_61_13_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmproperties_boxLabel_right')));
    radio_61_13_$1.itemId =net.jangaroo.ext.Exml.asString( Dialog_cmproperties.RADIO_FLOAT_RIGHT_ITEM_ID);
    radio_61_13_$1.name = "style";
    radio_61_13_$1.inputValue = "float--right";
    var radio_65_13_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    AS3.setBindable(radio_65_13_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmproperties_boxLabel_center')));
    radio_65_13_$1.itemId =net.jangaroo.ext.Exml.asString( Dialog_cmproperties.RADIO_FLOAT_NONE_ITEM_ID);
    radio_65_13_$1.name = "style";
    radio_65_13_$1.inputValue = "float--none";
    var component_69_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    var radio_70_13_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    AS3.setBindable(radio_70_13_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmproperties_boxLabel_default')));
    radio_70_13_$1.itemId =net.jangaroo.ext.Exml.asString( Dialog_cmproperties.RADIO_DEFAULT_ITEM_ID);
    radio_70_13_$1.name = "style";
    radio_70_13_$1.inputValue = "";
    radio_70_13_$1.checked = true;
    radioGroup_50_9_$1.items = [radio_57_13_$1, radio_61_13_$1, radio_65_13_$1, component_69_13_$1, radio_70_13_$1];
    form_46_5_$1.items = [radioGroup_50_9_$1];
    config_$1.items = [form_46_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$AKXS(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.dialogs.Dialog_cmpropertiesBase",
      alias: "widget.com.coremedia.ui.config.dialog_cmproperties",
      constructor: Dialog_cmproperties$,
      super$AKXS: function() {
        com.coremedia.ui.ckeditor.dialogs.Dialog_cmpropertiesBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        FORM_ITEM_ID: "form",
        RADIO_FLOAT_LEFT_ITEM_ID: "floatLeft",
        RADIO_FLOAT_RIGHT_ITEM_ID: "floatRight",
        RADIO_FLOAT_NONE_ITEM_ID: "floatNone",
        RADIO_DEFAULT_ITEM_ID: "floatDefault"
      },
      requires: [
        "Ext.Component",
        "Ext.form.Panel",
        "Ext.form.RadioGroup",
        "Ext.form.field.Radio",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.ckeditor.dialogs.Dialog_cmpropertiesBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
