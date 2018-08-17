Ext.define("com.coremedia.cms.editor.configuration.CopyResourceBundleProperties", function(CopyResourceBundleProperties) {/*package com.coremedia.cms.editor.configuration{
import com.coremedia.cms.editor.configuration.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class CopyResourceBundleProperties extends CopyResourceBundlePropertiesBase{

    import mx.resources.IResourceBundle;

    /**
     * The source resource bundle with the properties that should be copied into the destination class
     * /
    [Bindable]
    public var source:IResourceBundle;

    /**
     * The resource bundle class that should be overridden
     * /
    [Bindable]
    public var destination:IResourceBundle;

    public*/function CopyResourceBundleProperties$(config/*:CopyResourceBundleProperties = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.configuration.CopyResourceBundlePropertiesBase*/ =AS3.cast(com.coremedia.cms.editor.configuration.CopyResourceBundlePropertiesBase,{});
    var defaults_$1/*:CopyResourceBundleProperties*/ =AS3.cast(CopyResourceBundleProperties,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Xmts(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.CopyResourceBundlePropertiesBase",
      metadata: {"": ["PublicApi"]},
      constructor: CopyResourceBundleProperties$,
      super$Xmts: function() {
        com.coremedia.cms.editor.configuration.CopyResourceBundlePropertiesBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        source: null,
        destination: null
      },
      requires: [
        "com.coremedia.cms.editor.configuration.CopyResourceBundlePropertiesBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
