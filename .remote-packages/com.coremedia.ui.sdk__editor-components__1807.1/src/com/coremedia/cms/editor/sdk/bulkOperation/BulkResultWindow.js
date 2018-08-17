Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindow", function(BulkResultWindow) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.bulkOperation.*;
import net.jangaroo.ext.Exml;
import ext.button.Button;
import ext.layout.container.AnchorLayout;
public class BulkResultWindow extends BulkResultWindowBase{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.bulkResultWindow";

    /**
     * The itemID for the error panel.
     * /
    public static const ERRORS_PANEL_ITEM_ID:String = "errorsPanel";

    /**
     * The itemId of the ok button.
     * /
    public static const OK_BUTTON_ITEM_ID:String = "okBtn";

    public*/function BulkResultWindow$(config/*:BulkResultWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindowBase,{});
    var defaults_$1/*:BulkResultWindow*/ =AS3.cast(BulkResultWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , AS3.getBindable(config,"resourceBundle")['bulkResult_error_window_title']);
    config_$1.stateId = "bulkResultWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"width" , 600);
    AS3.setBindable(config_$1,"height" , this.computeHeight(AS3.getBindable(config,"bulkResultItems")));
    config_$1.resizable = true;
    config_$1.constrainHeader = true;
    AS3.setBindable(config_$1,"scrollable" , true);
    var editor_BulkResultPanel_52_5_$1/*: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanel,{});
    editor_BulkResultPanel_52_5_$1.itemId =net.jangaroo.ext.Exml.asString( BulkResultWindow.ERRORS_PANEL_ITEM_ID);
    AS3.setBindable(editor_BulkResultPanel_52_5_$1,"bulkResultItems" , AS3.getBindable(config,"bulkResultItems"));
    AS3.setBindable(editor_BulkResultPanel_52_5_$1,"sectionSpecs" , AS3.getBindable(config,"errorCodes"));
    AS3.setBindable(editor_BulkResultPanel_52_5_$1,"resourceBundle" , AS3.getBindable(config,"resourceBundle"));
    AS3.setBindable(editor_BulkResultPanel_52_5_$1,"resourcePrefix" , "bulkResult");
    AS3.setBindable(editor_BulkResultPanel_52_5_$1,"showPublisherMenuItems" , false);
    config_$1.items = [editor_BulkResultPanel_52_5_$1];
    var button_60_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_60_5_$1.itemId =net.jangaroo.ext.Exml.asString( BulkResultWindow.OK_BUTTON_ITEM_ID);
    button_60_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_60_5_$1,"scale" , "small");
    AS3.setBindable(button_60_5_$1,"text" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"resourceBundle")['bulkResult_error_btn_OK']));
    AS3.setBindable(button_60_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_60_5_$1];
    var layout_Anchor_67_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_67_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$lciI(config_$1);
  }/*

    /**
     a list of bulk error and information messages.
     * /
    [Bindable]
    public var bulkResultItems:Array;


    /**
     a list of error codes for the current operation
     * /
    [Bindable]
    public var errorCodes:Array;


    /**
     the resource bundle for the current operation.
     * /
    [Bindable]
    public var resourceBundle:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.bulkResultWindow",
      constructor: BulkResultWindow$,
      super$lciI: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bulkResultItems: null,
        errorCodes: null,
        resourceBundle: null
      },
      statics: {
        ERRORS_PANEL_ITEM_ID: "errorsPanel",
        OK_BUTTON_ITEM_ID: "okBtn"
      },
      requires: [
        "Ext.button.Button",
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultWindowBase",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanel"]
    };
});
