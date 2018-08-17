Ext.define("com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPlugin", function(BeanListChooserBindListPlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
/**

 A variant of the bind list plugin that allows to provide additional fields for the underlying store to customize the
 bean list chooser.

 * /
public class BeanListChooserBindListPlugin extends BeanListChooserBindListPluginBase{

    public*/function BeanListChooserBindListPlugin$(config/*:BeanListChooserBindListPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPluginBase,{});
    var defaults_$1/*:BeanListChooserBindListPlugin*/ =AS3.cast(BeanListChooserBindListPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Dtn8(config_$1);
  }/*

    /**
     The data fields to be added to the store underlying the bean list chooser..
     Elements of the array are instances of datafield.

     @see ext.config.datafield
     * /
    [Bindable]
    public var additionalFields:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPluginBase",
      constructor: BeanListChooserBindListPlugin$,
      super$Dtn8: function() {
        com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {additionalFields: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
