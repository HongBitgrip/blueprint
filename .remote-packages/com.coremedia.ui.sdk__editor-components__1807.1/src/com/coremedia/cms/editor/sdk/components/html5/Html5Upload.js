Ext.define("com.coremedia.cms.editor.sdk.components.html5.Html5Upload", function(Html5Upload) {/*package com.coremedia.cms.editor.sdk.components.html5{
import com.coremedia.cms.editor.sdk.components.html5.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.button.Button;
import com.coremedia.ui.components.ExtendedDisplayField;
public class Html5Upload extends Html5UploadBase{

    import com.coremedia.ui.mixins.OverflowBehaviour;
    import com.coremedia.ui.mixins.TextAlign;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.html5Upload";

    public*/function Html5Upload$(config/*:Html5Upload = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.html5.Html5UploadBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.html5.Html5UploadBase,{});
    var defaults_$1/*:Html5Upload*/ =AS3.cast(Html5Upload,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.FRAME.getSkin());
    var layout_VBox_31_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_31_5_$1,"align" , "center");
    AS3.setBindable(layout_VBox_31_5_$1,"pack" , "center");
    AS3.setBindable(config_$1,"layout" , layout_VBox_31_5_$1);
    var button_35_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_35_5_$1,"text" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"buttonText")));
    button_35_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.INLINE.getSkin());
    AS3.setBindable(button_35_5_$1,"handler" ,AS3.bind( this,"uploadHandler"));
    var editor_BrowsePlugin_39_9_$1/*: com.coremedia.cms.editor.sdk.components.html5.BrowsePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.html5.BrowsePlugin,{});
    AS3.setBindable(editor_BrowsePlugin_39_9_$1,"enableFileDrop" , true);
    AS3.setBindable(editor_BrowsePlugin_39_9_$1,"dropEl" , this.el);
    AS3.setBindable(editor_BrowsePlugin_39_9_$1,"inputFileName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"targetProperty")));
    button_35_5_$1.plugins = [editor_BrowsePlugin_39_9_$1];
    var ui_ExtendedDisplayField_44_5_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    AS3.setBindable(ui_ExtendedDisplayField_44_5_$1,"value" , AS3.getBindable(config,"helpText"));
    AS3.setBindable(ui_ExtendedDisplayField_44_5_$1,"maxWidth" , 100.0);
    AS3.setBindable(ui_ExtendedDisplayField_44_5_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.BREAK_WORD);
    AS3.setBindable(ui_ExtendedDisplayField_44_5_$1,"textAlign" , com.coremedia.ui.mixins.TextAlign.CENTER);
    AS3.setBindable(ui_ExtendedDisplayField_44_5_$1,"margin" , "6 0 0 0");
    ui_ExtendedDisplayField_44_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.ITALIC.getSkin());
    config_$1.items = [button_35_5_$1, ui_ExtendedDisplayField_44_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$tD89(config_$1);
  }/*

    /** The text to be passed to the upload button {@link ext.button.Button} config object. * /
    [Bindable]
    public var buttonText:String;


    /** The text shown below the button. * /
    [Bindable]
    public var helpText:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.html5.Html5UploadBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.html5Upload",
      constructor: Html5Upload$,
      super$tD89: function() {
        com.coremedia.cms.editor.sdk.components.html5.Html5UploadBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        buttonText: null,
        helpText: null
      },
      requires: [
        "Ext.button.Button",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.sdk.components.html5.Html5UploadBase",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.mixins.TextAlign",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.html5.BrowsePlugin"]
    };
});
