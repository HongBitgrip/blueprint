Ext.define("com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil", function(CapPropertyDescriptorUtil) {/*package com.coremedia.cap.common.descriptors.impl {

import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.descriptors.LinkPropertyDescriptor;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.BeanFactoryImpl;

public class CapPropertyDescriptorUtil {
  /**
   * From an array of property descriptors return the property descriptor
   * with the given name.
   *
   * @param descriptors the descriptors
   * @param propertyName the name
   * @return the descriptor
   * /
  public static*/ function getDescriptor$static(descriptors/*:Array*/, propertyName/*:String*/)/*:CapPropertyDescriptor*/ {
    if (descriptors) {
      for/* each*/ (var $1=0;$1</* in*/ descriptors.length;++$1) {var descriptor/*:CapPropertyDescriptor*/ =descriptors[$1];
        if (descriptor.name === propertyName) {
          return descriptor;
        }
      }
    }
    return null;
  }/*

  /**
   * Register a remote object resolver for property descriptors at the bean factory.
   * /
  public static*/ function registerResolver$static()/*:void*/ {
    AS3.cast(com.coremedia.ui.data.impl.BeanFactoryImpl,com.coremedia.ui.data.beanFactory).registerRemoteObjectResolver("$CapPropertyDescriptor", CapPropertyDescriptorUtil.resolve);
  }/*

  public static*/ function resolve$static(property/*:String*/, json/*:Object*/)/*:Object*/ {
    var rawDescriptor/*:Object*/ = com.coremedia.ui.data.impl.BeanFactoryImpl.resolveBeans(json[property]);
    return CapPropertyDescriptorUtil.create(rawDescriptor);
  }/*

  private static const*/var DESCRIPTOR_CLASSES_BY_TYPE$static/*:Object*/;/* =*/function DESCRIPTOR_CLASSES_BY_TYPE$static_(){DESCRIPTOR_CLASSES_BY_TYPE$static=( {
    LINK: com.coremedia.cap.common.descriptors.impl.LinkPropertyDescriptorImpl,
    STRING: com.coremedia.cap.common.descriptors.impl.StringPropertyDescriptorImpl,
    MARKUP: com.coremedia.cap.common.descriptors.impl.MarkupPropertyDescriptorImpl,
    BLOB: com.coremedia.cap.common.descriptors.impl.BlobPropertyDescriptorImpl
  });};/*

  public static*/ function create$static(rawDescriptor/*:Object*/)/*:CapPropertyDescriptor*/ {
    var type/*:String*/ = rawDescriptor['type'];
    var constructor/*:Function*/ = (DESCRIPTOR_CLASSES_BY_TYPE$static[type] || com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl);
    return AS3.cast(com.coremedia.cap.common.CapPropertyDescriptor,new constructor(rawDescriptor));
  }/*

  public static*/ function toObject$static(descriptor/*:CapPropertyDescriptor*/)/*:Object*/ {
    return AS3.cast(com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl,descriptor).toObject();
  }/*

  public static*/ function withName$static(descriptor/*:CapPropertyDescriptor*/, newName/*:String*/)/*:CapPropertyDescriptor*/ {
    var newRawDescriptor/*:Object*/ = CapPropertyDescriptorUtil.toObject(descriptor);
    newRawDescriptor.name = newName;
    return CapPropertyDescriptorUtil.create(newRawDescriptor);
  }/*

  public static*/ function getLinkType$static(descriptor/*:CapPropertyDescriptor*/)/*:CapType*/ {
    return descriptor.type === com.coremedia.cap.common.CapPropertyDescriptorType.LINK ? AS3.cast(com.coremedia.cap.common.descriptors.LinkPropertyDescriptor,descriptor).linkType : null;
  }/*
}*/function CapPropertyDescriptorUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: CapPropertyDescriptorUtil$,
      statics: {
        getDescriptor: getDescriptor$static,
        registerResolver: registerResolver$static,
        resolve: resolve$static,
        DESCRIPTOR_CLASSES_BY_TYPE: undefined,
        create: create$static,
        toObject: toObject$static,
        withName: withName$static,
        getLinkType: getLinkType$static,
        __initStatics__: function() {
          DESCRIPTOR_CLASSES_BY_TYPE$static_();
        }
      },
      requires: [
        "com.coremedia.cap.common.CapPropertyDescriptor",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.common.descriptors.LinkPropertyDescriptor",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.BeanFactoryImpl"
      ],
      uses: [
        "com.coremedia.cap.common.descriptors.impl.BlobPropertyDescriptorImpl",
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorImpl",
        "com.coremedia.cap.common.descriptors.impl.LinkPropertyDescriptorImpl",
        "com.coremedia.cap.common.descriptors.impl.MarkupPropertyDescriptorImpl",
        "com.coremedia.cap.common.descriptors.impl.StringPropertyDescriptorImpl"
      ]
    };
});
