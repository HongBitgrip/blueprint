Ext.define("mx.resources.ResourceManager", function(ResourceManager) {/*package mx.resources {
import ext.StringUtil;

import joo.getQualifiedObject;

public class ResourceManager implements IResourceManager {

  private static const*/var resourceManager$static/*:ResourceManager*/;/* =*/function resourceManager$static_(){resourceManager$static=( new ResourceManager());};/*

  public static*/ function getInstance$static()/*:IResourceManager*/ {
    return resourceManager$static;
  }/*

  public*/ function  get$localeChain()/*:Array*/ {
    throw new AS3.Error("not implemented");
  }/*

  public*/ function  set$localeChain(value/*:Array*/)/*:void*/ {
    throw new AS3.Error("not implemented");
  }/*

  public*/ function unloadResourceModule(url/*:String*/, update/*:Boolean = true*/)/*:void*/ {if(arguments.length<=1)update=true;
    throw new AS3.Error("not implemented");
  }/*

  public*/ function addResourceBundle(resourceBundle/*:IResourceBundle*/, useWeakReference/*:Boolean = false*/)/*:void*/ {if(arguments.length<=1)useWeakReference=false;
    throw new AS3.Error("not implemented");
  }/*

  public*/ function removeResourceBundle(locale/*:String*/, bundleName/*:String*/)/*:void*/ {
    throw new AS3.Error("not implemented");
  }/*

  public*/ function removeResourceBundlesForLocale(locale/*:String*/)/*:void*/ {
    throw new AS3.Error("not implemented");
  }/*

  public*/ function update()/*:void*/ {
    throw new AS3.Error("not implemented");
  }/*

  public*/ function getLocales()/*:Array*/ {
    throw new AS3.Error("not implemented");
  }/*

  public*/ function getPreferredLocaleChain()/*:Array*/ {
    throw new AS3.Error("not implemented");
  }/*

  public*/ function getBundleNamesForLocale(locale/*:String*/)/*:Array*/ {
    throw new AS3.Error("not implemented");
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getResourceBundle(locale/*:String*/, bundleName/*:String*/)/*:IResourceBundle*/ {
    var content/*:Object*/ = getContent$static(bundleName);
    return content ? new mx.resources.ResourceBundle(locale, bundleName, content) : null;
  }/*

  private static*/ function getContent$static(bundleName/*:String*/)/*:Object*/ {
    return AS3.as( joo.getQualifiedObject(bundleName + "_properties.INSTANCE"),  Object);
  }/*

  public*/ function findResourceBundleWithResource(bundleName/*:String*/, resourceName/*:String*/)/*:IResourceBundle*/ {
    throw new AS3.Error("not implemented");
  }/*

  [Bindable("change")]
  public*/ function getObject(bundleName/*:String*/, resourceName/*:String*/, locale/*:String = null*/)/*:**/ {if(arguments.length<=2)locale=null;
    return null;
  }/*

  [Bindable("change")]
  /**
   * @inheritDoc
   * /
  public*/ function getString(bundleName/*:String*/, resourceName/*:String*/, parameters/*:Array = null*/, locale/*:String = null*/)/*:String*/ {switch(Math.max(arguments.length,2)){case 2:parameters=null;case 3:locale=null;}
    var content/*:Object*/ = getContent$static(bundleName);
    if (!content) {
      return null;
    }
    var string/*:String*/ =AS3.as( content[resourceName],  String);
    if (string && parameters && parameters.length) {
      string = Ext.String.format.apply(null, [string].concat(parameters));
    }
    return string;
  }/*

  [Bindable("change")]
  public*/ function getStringArray(bundleName/*:String*/, resourceName/*:String*/, locale/*:String = null*/)/*:Array*/ {if(arguments.length<=2)locale=null;
    throw new AS3.Error("not implemented");
  }/*

  [Bindable("change")]
  public*/ function getNumber(bundleName/*:String*/, resourceName/*:String*/, locale/*:String = null*/)/*:Number*/ {if(arguments.length<=2)locale=null;
    throw new AS3.Error("not implemented");
  }/*

  [Bindable("change")]
  public*/ function getInt(bundleName/*:String*/, resourceName/*:String*/, locale/*:String = null*/)/*:int*/ {if(arguments.length<=2)locale=null;
    throw new AS3.Error("not implemented");
  }/*

  [Bindable("change")]
  public*/ function getUint(bundleName/*:String*/, resourceName/*:String*/, locale/*:String = null*/)/*:uint*/ {if(arguments.length<=2)locale=null;
    throw new AS3.Error("not implemented");
  }/*

  [Bindable("change")]
  public*/ function getBoolean(bundleName/*:String*/, resourceName/*:String*/, locale/*:String = null*/)/*:Boolean*/ {if(arguments.length<=2)locale=null;
    throw new AS3.Error("not implemented");
  }/*

  [Bindable("change")]
  public*/ function getClass(bundleName/*:String*/, resourceName/*:String*/, locale/*:String = null*/)/*:Class*/ {if(arguments.length<=2)locale=null;
    throw new AS3.Error("not implemented");
  }/*

  public*/ function initializeLocaleChain(compiledLocales/*:Array*/)/*:void*/ {
    throw new AS3.Error("not implemented");
  }/*
}*/function ResourceManager$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["mx.resources.IResourceManager"],
      unloadResourceModule: unloadResourceModule,
      addResourceBundle: addResourceBundle,
      removeResourceBundle: removeResourceBundle,
      removeResourceBundlesForLocale: removeResourceBundlesForLocale,
      update: update,
      getLocales: getLocales,
      getPreferredLocaleChain: getPreferredLocaleChain,
      getBundleNamesForLocale: getBundleNamesForLocale,
      getResourceBundle: getResourceBundle,
      findResourceBundleWithResource: findResourceBundleWithResource,
      getObject: getObject,
      getString: getString,
      getStringArray: getStringArray,
      getNumber: getNumber,
      getInt: getInt,
      getUint: getUint,
      getBoolean: getBoolean,
      getClass: getClass,
      initializeLocaleChain: initializeLocaleChain,
      constructor: ResourceManager$,
      statics: {
        resourceManager: undefined,
        getInstance: getInstance$static,
        __initStatics__: function() {
          resourceManager$static_();
        }
      },
      __accessors__: {localeChain: {
        get: get$localeChain,
        set: set$localeChain
      }},
      requires: [
        "AS3.Error",
        "mx.resources.IResourceManager"
      ],
      uses: [
        "Ext.String",
        "mx.resources.ResourceBundle"
      ]
    };
});
