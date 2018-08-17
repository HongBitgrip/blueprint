Ext.define("com.coremedia.ui.ckeditor.RichTextMenuCheckItem", function(RichTextMenuCheckItem) {/*package com.coremedia.ui.ckeditor{
import com.coremedia.ui.ckeditor.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A menucheckitem with special handling for use with richTextActions using context sensitive commands.
 * /
public class RichTextMenuCheckItem extends RichTextMenuCheckItemBase{

    public static const xtype:String = "com.coremedia.ui.config.richTextMenuCheckItem";

    public*/function RichTextMenuCheckItem$(config/*:RichTextMenuCheckItem = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItemBase*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItemBase,{});
    var defaults_$1/*:RichTextMenuCheckItem*/ =AS3.cast(RichTextMenuCheckItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$geGU(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.RichTextMenuCheckItemBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.ui.config.richTextMenuCheckItem",
      constructor: RichTextMenuCheckItem$,
      super$geGU: function() {
        com.coremedia.ui.ckeditor.RichTextMenuCheckItemBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.ckeditor.RichTextMenuCheckItemBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
