Ext.define("com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentAction", function(PasteContentAction) {/*package com.coremedia.cms.editor.sdk.premular.fields.richtext{
import com.coremedia.cms.editor.sdk.premular.fields.richtext.*;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 Action for the paste content button.
 * /
public class PasteContentAction extends PasteContentActionBase{

    import mx.resources.ResourceManager;

    public*/function PasteContentAction$(config/*:PasteContentAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentActionBase,{});
    var defaults_$1/*:PasteContentAction*/ =AS3.cast(PasteContentAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"exec"));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', 'pastecontent_text')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', 'pastecontent_iconCls')));
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', 'pastecontent_tooltip'));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$WKuk(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: PasteContentAction$,
      super$WKuk: function() {
        com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentActionBase",
        "com.coremedia.icons.CoreIcons_properties",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
