Ext.define("com.coremedia.ui.data.impl.BeanFactoryImpl", function(BeanFactoryImpl) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.*;

import ext.Ext;

import joo.getOrCreatePackage;
import joo.getQualifiedObject;

public class BeanFactoryImpl implements IBeanFactory {

  /**
   * A property name for use in encoding bean types in an object structure.
   * /
  public static const BEAN_TYPE_NAME:String = '$Bean';
  /**
   * A property name for use in encoding lists of references to remote beans in
   * an object structure.
   * /
  public static const REFS_PROPERTY:String = '$Refs';

  private static const*/var URI_TEMPLATE_2_REMOTE_BEAN_CLASS$static/*:Array*/;/* =*/function URI_TEMPLATE_2_REMOTE_BEAN_CLASS$static_(){URI_TEMPLATE_2_REMOTE_BEAN_CLASS$static=( []);};/*

  public static*/ function initBeanFactory$static()/*:BeanFactoryImpl*/ {
    if (!com.coremedia.ui.data.beanFactory) {
      var dataPackage/*:**/ = joo.getOrCreatePackage("com.coremedia.ui.data");
      dataPackage.beanFactory = new BeanFactoryImpl();
      dataPackage.applicationContext = com.coremedia.ui.data.beanFactory.createLocalBean({});

      com.coremedia.ui.data.impl.BeanClassRegistry.registerTypeImplementation("com.coremedia.ui.data.validation.Issue", com.coremedia.ui.data.impl.IssueImpl);
      com.coremedia.ui.data.impl.BeanClassRegistry.registerTypeImplementation("com.coremedia.ui.data.WriteResult", com.coremedia.ui.data.impl.WriteResult);

      com.coremedia.ui.data.impl.BeanClassRegistry.registerRemoteObjectResolver(com.coremedia.ui.data.impl.RemoteBeanImpl.REF_PROPERTY,
              function (property/*:String*/, json/*:Object*/)/*:Bean*/ {
                return com.coremedia.ui.data.beanFactory.getRemoteBean(json[property]);
              });
      com.coremedia.ui.data.impl.BeanClassRegistry.registerRemoteObjectResolver(BeanFactoryImpl.REFS_PROPERTY,
              function (property/*:String*/, json/*:Object*/)/*:Array*/ {
                var refs/*:Array*/ = json[property];
                var prefix/*:String*/ = json.prefix || "";
                var result/*:Array*/ = [];
                for (var i/*:int*/ = 0; i < refs.length; i++) {
                  result.push(com.coremedia.ui.data.beanFactory.getRemoteBean(prefix + refs[i]));
                }
                return result;
              });
      com.coremedia.ui.data.impl.BeanClassRegistry.registerRemoteObjectResolver(BeanFactoryImpl.BEAN_TYPE_NAME,
              function (property/*:String*/, json/*:Object*/)/*:Bean*/ {
                var url/*:String*/ =AS3.as( json[property],  String);
                var bean/*:RemoteBeanImpl*/ =AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(url),  com.coremedia.ui.data.impl.RemoteBeanImpl);
                delete json[property];
                for (var m/*:String*/ in json) {
                  json[m] = com.coremedia.ui.data.impl.BeanClassRegistry.resolveBeans(json[m]);
                }
                AS3.assert(!(com.coremedia.ui.data.BeanState.PROPERTY_NAME in json), "BeanFactoryImpl.as", 54, 17);
                bean.inject(json);  // has been received as a sub-object
                return bean;
              });
      com.coremedia.ui.data.impl.BeanClassRegistry.registerRemoteObjectResolver('$BlobHash',
              function(property/*:String*/, json/*:Object*/)/*:BlobHash*/ {
                return new com.coremedia.ui.data.impl.BlobHash(json[property]);
              });
      com.coremedia.ui.data.impl.BeanClassRegistry.registerRemoteObjectResolver('$Blob',
              function(property/*:String*/, json/*:Object*/)/*:Blob*/ {
                return new com.coremedia.ui.data.impl.BlobImpl(json[property], json['contentType'], json['size'], undefined, json['hash'], AS3.cast(com.coremedia.ui.data.RemoteBean,com.coremedia.ui.data.impl.BeanClassRegistry.resolveBeans(json['metadata'])));
              });
    }
    return AS3.cast(BeanFactoryImpl,com.coremedia.ui.data.beanFactory);
  }/*

  /**
   * Register all given classes as the implementation types for the client-side representation of remote Beans.
   *
   * @param remoteBeanClasses the remote Bean classes to register. Each parameter can be a <code>Class</code>
   *   or an <code>Object</code> mapping an uriTemplate to a <code>Class</code> or class name (<code>String</code>).
   *   For the semantics of adding a single class, see <code>registerRemoteBeanClass(Class[,String])</code>.
   * 
   * @see #registerRemoteBeanClass()
   * /
  public*/ function registerRemoteBeanClasses(/*...remoteBeanClasses*/)/*:void*/ {var remoteBeanClasses=Array.prototype.slice.call(arguments);
    for (var i/*:int*/ = 0; i < remoteBeanClasses.length; i++) {
      var descriptor/*:Object*/ = remoteBeanClasses[i];
      if (AS3.is(descriptor,  Class)) {
        this.registerRemoteBeanClass(AS3.cast(Class,descriptor));
      } else {
        // for all given URI templates (keys), register the corresponding remote Bean class:
        for (var uriTemplate/*:String*/ in descriptor) {
          var classOrClassName/*:**/ = descriptor[uriTemplate];
          var remoteBeanClass/*:Class*/ =AS3.as( classOrClassName,  Class) ||AS3.as( joo.getQualifiedObject(classOrClassName),  Class);
          if (!remoteBeanClass) {
            throw new AS3.Error("Values of remote Bean classes descriptor must be Class objects or fully qualified names of classes (String).");
          }
          this.registerRemoteBeanClass(remoteBeanClass, uriTemplate);
        }
      }
    }
  }/*

  /**
   * Register a function that transforms JSON objects received from the
   * REST service. The resolver is only activated when the received JSON
   * object contains a property with the name given in the first argument
   * of this function. The signature of the resolver function is
   * <code>function(property:String, json:Object):Object</code> where
   * <code>property</code> is again the first argument of this function
   * and <code>json</code> is the received JSON object. The function
   * returns the modified JSON object or a new object replacing the
   * JSON object. If multiple resolver apply, resolvers registered
   * earlier take precedence of resolvers registered later.
   * 
   * @param property the property indicating the applicability of this resolver
   * @param resolver the resolver function.
   * /
  public*/ function registerRemoteObjectResolver(property/*:String*/, resolver/*:Function*/)/*:void*/ {
    com.coremedia.ui.data.impl.BeanClassRegistry.registerRemoteObjectResolver(property, resolver);
  }/*

  public*/ function registerTypeImplementation(type/*:String*/, clazz/*:Class*/)/*:void*/ {
    com.coremedia.ui.data.impl.BeanClassRegistry.registerTypeImplementation(type, clazz);
  }/*

  //noinspection JSMethodCanBeStatic
  /**
   * Register the given class as the implementation type for the client-side representation of a remote Bean.
   *
   * @param remoteBeanClass the remote Bean class to register
   * @param uriTemplate the URI template that triggers the given class to be used whose value
   *   is reflecting the JSR-311 <code>@Path("...")</code> annotation of the server-side resource.
   *   If no URI template is given, a <code>[RestResource(uriTemplate="...")]</code> annotation at class level is expected.
   * /
  public*/ function registerRemoteBeanClass(remoteBeanClass/*:Class*/, uriTemplate/*:String = null*/)/*:void*/ {if(arguments.length<=1)uriTemplate=null;
    if (!uriTemplate) {
      var metadata/*:Object*/ = remoteBeanClass.prototype['metadata'];
      if (metadata) {
        var classMetadata/*:Array*/ = metadata[''];
        if (classMetadata) {
          var restResourceAnnotation/*:Array*/;
          for (var i/*:int*/ = 0; i < classMetadata.length; i += 2) {
            var annotation/*:String*/ = classMetadata[i];
            if (annotation === "RestResource") {
              restResourceAnnotation = classMetadata[i + 1];
              break;
            }
          }
          if (restResourceAnnotation && restResourceAnnotation[0] === "uriTemplate") {
            uriTemplate = restResourceAnnotation[1];
          }
        }
      }
      if (!uriTemplate) {
        throw new AS3.Error("Class " + Ext.getClassName(remoteBeanClass) + " registered as a remote Bean class, but has no valid [RestResource(uriTemplate='...')] annotation.");
      }
    }
    URI_TEMPLATE_2_REMOTE_BEAN_CLASS$static.push(new com.coremedia.ui.data.impl.URITemplate(uriTemplate), remoteBeanClass);
  }/*


  /**
   * In the given object, resolve all references to remote beans as indicated
   * by a property named <code>BeanFactoryImpl#REF_PROPERTY</code> and all typed bean indicators as
   * indicated by a property named by <code>BeanFactory#BEAN_TYPE_NAME</code>.
   *
   * @param object the object to replace or rewrite
   * @return the resolved bean, potentially the rewritten argument object
   *
   * @see BeanClassRegistry#REF_PROPERTY
   * @see BeanClassRegistry#BEAN_TYPE_NAME
   * /
  public static*/ function resolveBeans$static(object/*:Object*/)/*:Object*/ {
    return com.coremedia.ui.data.impl.BeanClassRegistry.resolveBeans(object);
  }/*

  /**
   * Create a remote bean (without caching it)
   * /
  public static*/ function createRemoteBean$static(path/*:String*/)/*:RemoteBean*/ {
    for (var i/*:int*/ = 0; i < URI_TEMPLATE_2_REMOTE_BEAN_CLASS$static.length; i += 2) {
      var uriTemplate/*:URITemplate*/ =AS3.as( URI_TEMPLATE_2_REMOTE_BEAN_CLASS$static[i],  com.coremedia.ui.data.impl.URITemplate);
      var binding/*:Object*/ = uriTemplate.match(path);
      if (binding) {
        var typedClass/*:Class*/ =AS3.as( URI_TEMPLATE_2_REMOTE_BEAN_CLASS$static[i+1],  Class);
        return new typedClass(path, binding);
      }
    }
    // Not found, does not have a specific class, use generic RemoteBeanImpl:
    return new com.coremedia.ui.data.impl.RemoteBeanImpl(path);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getRemoteBean(path/*:String*/)/*:RemoteBean*/ {
    var bean/*:RemoteBean*/ = com.coremedia.ui.data.impl.RemoteBeanCache.getRemoteBean(path);
    if (!bean) {
      bean = BeanFactoryImpl.createRemoteBean(path);
      com.coremedia.ui.data.impl.RemoteBeanCache.registerRemoteBean(path, bean);
    }
    return bean;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function createLocalBean(properties/*:Object = null*/)/*:Bean*/ {if(arguments.length<=0)properties=null;
    return new com.coremedia.ui.data.impl.BeanImpl(properties);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function createLocalBeans(objects/*:Array*/)/*:Array*/ {var this$=this;
    var beans/*:Array*/ = [];
    objects.forEach(function(object/*:Object*/)/*:void*/ {
      beans.push(this$.createLocalBean(object));
    });
    return beans;
  }/*

  public*/ function dispose(bean/*:RemoteBean*/)/*:void*/ {
    com.coremedia.ui.data.impl.RemoteBeanCache.dispose(bean.getUriPath());
  }/*
}*/function BeanFactoryImpl$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.IBeanFactory"],
      registerRemoteBeanClasses: registerRemoteBeanClasses,
      registerRemoteObjectResolver: registerRemoteObjectResolver,
      registerTypeImplementation: registerTypeImplementation,
      registerRemoteBeanClass: registerRemoteBeanClass,
      getRemoteBean: getRemoteBean,
      createLocalBean: createLocalBean,
      createLocalBeans: createLocalBeans,
      dispose: dispose,
      constructor: BeanFactoryImpl$,
      statics: {
        BEAN_TYPE_NAME: '$Bean',
        REFS_PROPERTY: '$Refs',
        URI_TEMPLATE_2_REMOTE_BEAN_CLASS: undefined,
        initBeanFactory: initBeanFactory$static,
        resolveBeans: resolveBeans$static,
        createRemoteBean: createRemoteBean$static,
        __initStatics__: function() {
          URI_TEMPLATE_2_REMOTE_BEAN_CLASS$static_();
        }
      },
      requires: [
        "AS3.Error",
        "Ext",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.IBeanFactory",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.IssueImpl"
      ],
      uses: [
        "com.coremedia.ui.data.impl.BeanClassRegistry",
        "com.coremedia.ui.data.impl.BeanImpl",
        "com.coremedia.ui.data.impl.BlobHash",
        "com.coremedia.ui.data.impl.BlobImpl",
        "com.coremedia.ui.data.impl.RemoteBeanCache",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.URITemplate",
        "com.coremedia.ui.data.impl.WriteResult"
      ]
    };
});
