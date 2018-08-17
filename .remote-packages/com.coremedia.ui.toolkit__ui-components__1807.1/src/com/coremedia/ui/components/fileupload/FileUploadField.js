Ext.define("com.coremedia.ui.components.fileupload.FileUploadField", function(FileUploadField) {/*package com.coremedia.ui.components.fileupload{
import com.coremedia.ui.components.fileupload.*;
import ext.button.Button;
import net.jangaroo.ext.Exml;
/**
 Creates a file upload field.
 * /
public class FileUploadField extends FileUploadFieldBase{

    public static const xtype:String = "com.coremedia.ui.config.fileUploadField";

    public*/function FileUploadField$(config/*:FileUploadField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.fileupload.FileUploadFieldBase*/ =AS3.cast(com.coremedia.ui.components.fileupload.FileUploadFieldBase,{});
    var defaults_$1/*:FileUploadField*/ =AS3.cast(FileUploadField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$XMw0(config_$1);
  }/*

    /**

     The button text to display on the upload button (defaults to 'Browse...'). Note that if you supply a value for
     &lt;code>buttonCfg&lt;/code>, the buttonCfg.text value will be used instead if available.

     * /
    [Bindable]
    public var buttonText:String;


    /**

     The text shown below the button.

     * /
    [Bindable]
    public var helpText:String;


    /**

     True to display the file upload field as a button with no visible text field (defaults to false).
     If true, all inherited TextField members will still be available.

     * /
    [Bindable]
    public var buttonOnly:Boolean;


    /**

     The number of pixels of space reserved between the button and the text field (defaults to 3).
     Note that this only applies if &lt;code>buttonOnly&lt;/code> is &lt;code>false&lt;/code>.

     * /
    [Bindable]
    public var buttonOffset:int;


    /**

     A standard &lt;code>ext.Button&lt;/code> config object.

     @see ext.Button
     @see ext.config.button

     * /
    [Bindable]
    public var button:ext.button.Button;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.fileupload.FileUploadFieldBase",
      alias: "widget.com.coremedia.ui.config.fileUploadField",
      constructor: FileUploadField$,
      super$XMw0: function() {
        com.coremedia.ui.components.fileupload.FileUploadFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        buttonText: null,
        helpText: null,
        buttonOnly: false,
        buttonOffset: 0,
        button: null
      },
      requires: [
        "com.coremedia.ui.components.fileupload.FileUploadFieldBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
