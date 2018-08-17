Ext.define("com.coremedia.ui.ckeditor.PropertiesAction", function(PropertiesAction) {/*package com.coremedia.ui.ckeditor{
import com.coremedia.ui.ckeditor.*;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
/**
 The customized dialog action for the image properties button.
 * /
public class PropertiesAction extends PropertiesActionBase{

    import mx.resources.ResourceManager;

    public*/function PropertiesAction$(config/*:PropertiesAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.ckeditor.PropertiesActionBase*/ =AS3.cast(com.coremedia.ui.ckeditor.PropertiesActionBase,{});
    var defaults_$1/*:PropertiesAction*/ =AS3.cast(PropertiesAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"exec"));
    AS3.setBindable(config_$1,"disabled" , true);
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', 'cmproperties_text')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', 'cmproperties_iconCls')));
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', 'cmproperties_tooltip'));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$y2u_(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.PropertiesActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: PropertiesAction$,
      super$y2u_: function() {
        com.coremedia.ui.ckeditor.PropertiesActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.ckeditor.PropertiesActionBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
