Ext.define("com.coremedia.cms.editor.configuration.RegisterRestResource", function(RegisterRestResource) {/*package com.coremedia.cms.editor.configuration{
import com.coremedia.cms.editor.configuration.*;
import net.jangaroo.ext.Exml;
/**
 Register a beanClass, annotated with [RestResource(uriTemplate='...')], to instantiate for remote Beans whose
 uriPath matches the URI template.

 @see com.coremedia.ui.data.impl.BeanFactoryImpl#registerRemoteBeanClass()
 * /
public class RegisterRestResource extends RegisterRestResourceBase{

    public*/function RegisterRestResource$(config/*:RegisterRestResource = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.configuration.RegisterRestResourceBase*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResourceBase,{});
    var defaults_$1/*:RegisterRestResource*/ =AS3.cast(RegisterRestResource,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wr8Z(config_$1);
  }/*

    /**
     The class, annotated with [RestResource(uriTemplate='...')], to instantiate for remote Beans whose uriPath
     matches the URI template.

     @see com.coremedia.ui.data.impl.BeanFactoryImpl#registerRemoteBeanClass()
     * /
    [Bindable]
    public var beanClass:Class;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.RegisterRestResourceBase",
      constructor: RegisterRestResource$,
      super$wr8Z: function() {
        com.coremedia.cms.editor.configuration.RegisterRestResourceBase.prototype.constructor.apply(this, arguments);
      },
      config: {beanClass: null},
      requires: [
        "com.coremedia.cms.editor.configuration.RegisterRestResourceBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
