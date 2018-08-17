Ext.define("com.coremedia.ui.ckeditor.PasteFromWordAction", function(PasteFromWordAction) {/*package com.coremedia.ui.ckeditor{
import com.coremedia.ui.ckeditor.RichTextAction;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 The customized dialog action for the paste from word button.
 * /
public class PasteFromWordAction extends RichTextAction{

    import mx.resources.ResourceManager;

    public*/function PasteFromWordAction$(config/*:PasteFromWordAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    var defaults_$1/*:PasteFromWordAction*/ =AS3.cast(PasteFromWordAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"commandName" , "pastefromword");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gSs8(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.RichTextAction",
      metadata: {"": ["PublicApi"]},
      constructor: PasteFromWordAction$,
      super$gSs8: function() {
        com.coremedia.ui.ckeditor.RichTextAction.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.ckeditor.RichTextAction",
        "net.jangaroo.ext.Exml"
      ]
    };
});
