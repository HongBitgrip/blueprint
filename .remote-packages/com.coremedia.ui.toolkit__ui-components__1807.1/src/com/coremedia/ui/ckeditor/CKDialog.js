Ext.define("com.coremedia.ui.ckeditor.CKDialog", function(CKDialog) {/*package com.coremedia.ui.ckeditor{
import com.coremedia.ui.ckeditor.*;
import net.jangaroo.ext.Exml;
import ext.button.Button;

    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
/**
 The common superclass for CKEditor based modal dialogs.
 * /
public class CKDialog extends CKDialogBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.ui.config.ckDialog";

    /**
     * The itemId of the dialog.
     * /
    public static const DIALOG_ITEM_ID:String = "ckDialog";

    /**
     * The itemId of the okay button.
     * /
    public static const OK_BUTTON_ITEM_ID:String = "okBtn";

    /**
     * The itemId of the cancel button.
     * /
    public static const CANCEL_BUTTON_ITEM_ID:String = "cancelBtn";

    public*/function CKDialog$(config/*:CKDialog = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.ckeditor.CKDialogBase*/ =AS3.cast(com.coremedia.ui.ckeditor.CKDialogBase,{});
    var defaults_$1/*:CKDialog*/ =AS3.cast(CKDialog,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( CKDialog.DIALOG_ITEM_ID);
    config_$1.closeAction = "hide";
    config_$1.modal = true;
    config_$1.referenceHolder = true;
    config_$1.defaultButton =net.jangaroo.ext.Exml.asString( CKDialog.OK_BUTTON_ITEM_ID);
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    var button_60_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_60_5_$1.itemId =net.jangaroo.ext.Exml.asString( CKDialog.OK_BUTTON_ITEM_ID);
    button_60_5_$1.reference =net.jangaroo.ext.Exml.asString( CKDialog.OK_BUTTON_ITEM_ID);
    button_60_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_60_5_$1,"scale" , "small");
    AS3.setBindable(button_60_5_$1,"text" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"confirmButtonLabel") ? AS3.getBindable(config,"confirmButtonLabel") : this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'dialog_defaultSubmitButton_text')));
    AS3.setBindable(button_60_5_$1,"handler" ,AS3.bind(  this,"okHandler"));
    var button_66_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_66_5_$1.itemId =net.jangaroo.ext.Exml.asString( CKDialog.CANCEL_BUTTON_ITEM_ID);
    button_66_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_66_5_$1,"scale" , "small");
    AS3.setBindable(button_66_5_$1,"text" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"discardButtonLabel") ? AS3.getBindable(config,"discardButtonLabel") : this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'dialog_defaultDiscardButton_text')));
    AS3.setBindable(button_66_5_$1,"handler" ,AS3.bind( this,"cancelHandler"));
    config_$1.fbar = [button_60_5_$1, button_66_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$4usb(config_$1);
  }/*

    /**
     The label string used for the OK button.
     * /
    [Bindable]
    public var confirmButtonLabel:String;


    /**
     The label string used for the Cancel button.
     * /
    [Bindable]
    public var discardButtonLabel:String;


    /** initial values for dialog fields * /
    [Bindable]
    public var initData:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.CKDialogBase",
      alias: "widget.com.coremedia.ui.config.ckDialog",
      constructor: CKDialog$,
      super$4usb: function() {
        com.coremedia.ui.ckeditor.CKDialogBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        confirmButtonLabel: null,
        discardButtonLabel: null,
        initData: null
      },
      statics: {
        DIALOG_ITEM_ID: "ckDialog",
        OK_BUTTON_ITEM_ID: "okBtn",
        CANCEL_BUTTON_ITEM_ID: "cancelBtn"
      },
      requires: [
        "Ext.button.Button",
        "com.coremedia.ui.ckeditor.CKDialogBase",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin"
      ]
    };
});
