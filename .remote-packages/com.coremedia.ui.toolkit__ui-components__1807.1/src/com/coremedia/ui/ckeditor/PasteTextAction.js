Ext.define("com.coremedia.ui.ckeditor.PasteTextAction", function(PasteTextAction) {/*package com.coremedia.ui.ckeditor{
import com.coremedia.ui.ckeditor.RichTextAction;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 The customized dialog action for the paste text button.
 * /
public class PasteTextAction extends RichTextAction{

    import mx.resources.ResourceManager;

    public*/function PasteTextAction$(config/*:PasteTextAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    var defaults_$1/*:PasteTextAction*/ =AS3.cast(PasteTextAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"commandName" , "pastetext");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ADqX(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.RichTextAction",
      metadata: {"": ["PublicApi"]},
      constructor: PasteTextAction$,
      super$ADqX: function() {
        com.coremedia.ui.ckeditor.RichTextAction.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.ckeditor.RichTextAction",
        "net.jangaroo.ext.Exml"
      ]
    };
});
