Ext.define("com.coremedia.ui.ckeditor.PasteAction", function(PasteAction) {/*package com.coremedia.ui.ckeditor{
import com.coremedia.ui.ckeditor.RichTextAction;
import net.jangaroo.ext.Exml;
public class PasteAction extends RichTextAction{

    public*/function PasteAction$(config/*:PasteAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    var defaults_$1/*:PasteAction*/ =AS3.cast(PasteAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"commandName" , "paste");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$CM2K(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.RichTextAction",
      constructor: PasteAction$,
      super$CM2K: function() {
        com.coremedia.ui.ckeditor.RichTextAction.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.ckeditor.RichTextAction",
        "net.jangaroo.ext.Exml"
      ]
    };
});
