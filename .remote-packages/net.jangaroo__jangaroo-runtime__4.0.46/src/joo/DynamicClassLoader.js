Ext.define("joo.DynamicClassLoader", function(DynamicClassLoader) {/* /*
 * Copyright 2009 CoreMedia AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS
 * IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 * /

// JangarooScript runtime support. Author: Frank Wienberg

package joo {
public class DynamicClassLoader extends StandardClassLoader {

  private static*/ function isEmpty$static(object/* : Object*/)/* : Boolean*/ {
    //noinspection LoopStatementThatDoesntLoopJS
    for (var m/*:String*/ in object) {
      return false;
    }
    return true;
  }/*

  public static var INSTANCE:DynamicClassLoader;

  private var resourceByPath : Object =*/function resourceByPath_(){this.resourceByPath$Xxwm=( {});}/*;
  private var onCompleteCallbacks : Array/*<Function>* / =*/function onCompleteCallbacks_(){this.onCompleteCallbacks$Xxwm=( []);}/*;

  public*/ function DynamicClassLoader$() {this.super$Xxwm();resourceByPath_.call(this);onCompleteCallbacks_.call(this);pendingDependencies_.call(this);pendingClassState_.call(this);
    joo.classLoader = DynamicClassLoader.INSTANCE = this;
  }/*

  /**
   * Keep record of all classes whose dependencies still have to be loaded.
   * /
  private var pendingDependencies : Array/*<JooClassDeclaration>* / =*/function pendingDependencies_(){this.pendingDependencies$Xxwm=( []);}/*;
  /**
   * false => pending
   * true => loading
   * /
  private var pendingClassState : Object/*<String,Boolean>* / =*/function pendingClassState_(){this.pendingClassState$Xxwm=( {});}/*;

  override public*/ function prepare(/*...params*/)/*:JooClassDeclaration*/ {var params=Array.prototype.slice.call(arguments);
    var cd/*:JooClassDeclaration*/ = AS3.cast(joo.JooClassDeclaration,joo.StandardClassLoader.prototype.prepare.apply(this, params));
    this.pendingDependencies$Xxwm.push(cd);
    this.fireDependency(cd.fullClassName);
    return cd;
  }/*

  public*/ function addDependency(dependency/*:String*/)/*:void*/ {
    this.pendingClassState$Xxwm[dependency] = true;
  }/*

  public*/ function fireDependency(dependency/*:String*/)/*:void*/ {
    if (delete this.pendingClassState$Xxwm[dependency]) {
//      if (this.debug) {
//        trace("prepared class " + dependency + ", removed from pending classes.");
//      }
      if (this.onCompleteCallbacks$Xxwm.length) {
        this.loadPendingDependencies$Xxwm();
        if (isEmpty$static(this.pendingClassState$Xxwm)) {
          this.doCompleteCallbacks(this.onCompleteCallbacks$Xxwm);
        }
      }
    }
  }/*

  override protected*/ function doCompleteCallbacks(onCompleteCallbacks/* : Array*//*Function*/)/*:void*/ {var this$=this;
    this.onCompleteCallbacks$Xxwm = [];
    // "invoke later":
    joo.getQualifiedObject("setTimeout")(function()/* : void*/ {
      this$.initNativeClasses();
      this$.internalDoCompleteCallbacks$Xxwm(onCompleteCallbacks);
    }, 0);
  }/*

  private*/ function internalDoCompleteCallbacks(onCompleteCallbacks/* : Array*//*Function*/)/*:void*/ {
    joo.StandardClassLoader.prototype.doCompleteCallbacks.call(this,onCompleteCallbacks);
  }/*

  // separate factory function to move the anonymous function out of the caller's scope:
  private*/ function createClassLoadErrorHandler(fullClassName/*:String*/, url/*:String*/)/*:Function*/ {var this$=this;
    return function()/*:void*/ {
      this$.classLoadErrorHandler(fullClassName, url);
    };
  }/*

  public*/ function classLoadErrorHandler(fullClassName/*:String*/, url/*:String*/)/*:void*/ {
    AS3.trace("[ERROR]", "Jangaroo Runtime: Class "+fullClassName+" not found at URL ["+url+"].");
  }/*

  /**
   * Import the class given by its fully qualified class name (package plus name).
   * All imports are collected in a hash and can be used in the #complete() callback function.
   * Additionally, the DynamicClassLoader tries to load the class from a URL if it is not present on #complete().
   * @param fullClassName : String the fully qualified class name (package plus name) of the class to load and import.
   * /
  public override*/ function import_(fullClassName/* : String*/)/* : void*/ {
    var Ext/*:**/ = joo.getQualifiedObject("Ext");
    Ext.require(fullClassName);
  }/*

  override public*/ function run(mainClassName/* : String, ...args*/)/*:void*/ {var args=Array.prototype.slice.call(arguments,1);
    this.load$Xxwm(mainClassName);
    args.splice(0,0,mainClassName);
    joo.StandardClassLoader.prototype.run.apply(this,args);
  }/*

  private*/ function load(fullClassName/* : String*/)/* : void*/ {
    var resourcePathMatch/*:Array*/ = fullClassName.match(/^resource:(.*)$/);
    if (resourcePathMatch) {
      this.loadResource$Xxwm(resourcePathMatch[1]);
      return;
    }
    if (!this.getClassDeclaration(fullClassName)) {
      if (this.onCompleteCallbacks$Xxwm.length==0) {
        if (this.pendingClassState$Xxwm[fullClassName]===undefined) {
          // we are not yet in completion phase: just add to pending classes:
          this.pendingClassState$Xxwm[fullClassName] = false;
//          if (this.debug) {
//            trace("added to pending classes: "+fullClassName+".");
//          }
        }
      } else {
        if (this.pendingClassState$Xxwm[fullClassName]!==true) {
          // trigger loading:
          this.pendingClassState$Xxwm[fullClassName] = true;
          var url/*:String*/ = joo.getRelativeClassUrl(fullClassName);
//          if (this.debug) {
//            trace("triggering to load class " + fullClassName + " from URL " + url + ".");
//          }
          var script/*:Object*/ = joo.loadScriptAsync(url);
          // script.onerror does not work in IE, but since this feature is for debugging only, we don't mind:
          script.onerror = this.createClassLoadErrorHandler$Xxwm(fullClassName, script['src']);
        }
      }
    }
  }/*

  private static const*/var RESOURCE_TYPE_STRING$static/*:String*/ = "String";/*
  private static const*/var RESOURCE_TYPE_IMAGE$static/*:String*/ = "Image";/*
  private static const*/var RESOURCE_TYPE_AUDIO$static/*:String*/ = "Audio";/*
  private static const*/var RESOURCE_TYPE_BY_EXTENSION$static/*:Object*/;/* =*/function RESOURCE_TYPE_BY_EXTENSION$static_(){RESOURCE_TYPE_BY_EXTENSION$static=( {
    "txt": RESOURCE_TYPE_STRING$static,
    "csv": RESOURCE_TYPE_STRING$static,
    "png": RESOURCE_TYPE_IMAGE$static,
    "gif": RESOURCE_TYPE_IMAGE$static,
    "jpg": RESOURCE_TYPE_IMAGE$static,
    "jpeg": RESOURCE_TYPE_IMAGE$static,
    "mp3": RESOURCE_TYPE_AUDIO$static,
    "ogg": RESOURCE_TYPE_AUDIO$static,
    "wav": RESOURCE_TYPE_AUDIO$static
  });};/*
  // TODO: map more extensions, also for video etc.
  // TODO: improvement: instead of extensions, we could do a HEAD request to the path and map the Content-Type to media/resource type.

  private*/ function loadResource(path/*:String*/)/*:void*/ {var this$=this;
    var resource/*:Object*/ = this.resourceByPath$Xxwm[path];
    if (!resource) {
      var dotPos/*:int*/ = path.lastIndexOf('.');
      var extension/*:String*/ = path.substring(dotPos + 1);
      var resourceType/*:String*/ = RESOURCE_TYPE_BY_EXTENSION$static[extension];
      if (resourceType) {
        if (resourceType === RESOURCE_TYPE_STRING$static) {
          var xhr/*:Object*/ = new (joo.getQualifiedObject('XMLHttpRequest'))();
          xhr.open('GET', joo.resolveUrl("joo/classes/" + path));
          xhr.onreadystatechange = function()/*:void*/ {
            if (xhr.readyState === 4) {
              delete xhr.onreadystatechange; // only fire once!
              this$.resourceByPath$Xxwm[path] = xhr.responseText;
              this$.fireDependency("resource:" + path);
            }
          };
          xhr.send(null);
          return;
        }
        var resourceTypeClass/*:Class*/ = joo.getQualifiedObject(resourceType);
        if (resourceTypeClass) {
          this.resourceByPath$Xxwm[path] = resource = new (resourceTypeClass)();
          if (resourceType === RESOURCE_TYPE_IMAGE$static) {
            this.addDependency("resource:" + path);
            resource.onload = function()/*:void*/ {
              this$.fireDependency("resource:" + path);
            };
            resource.onerror = function(m/*:**/)/*:void*/ {
              AS3.trace("[WARN]", "Error while loading resource " + path + ": " + m);
              // however, we do not want dynamic loading to fail completely:
              this$.fireDependency("resource:" + path);
            };
          } else if (resourceType === RESOURCE_TYPE_AUDIO$static) {
            if (!resource['canPlayType']("audio/" + extension)) {
              // try another MIME type / extension:
              var fallbackExtension/*:String*/ = findFallback$static(resource);
              if (!fallbackExtension) {
                return;
              }
              path = path.substring(0, dotPos) + "." + fallbackExtension;
            }
            resource.preload = "auto"; // Embed -> load early, but don't wait for load like with images.
          }
          resource.src = joo.resolveUrl("joo/classes/" + path);
        } else {
          AS3.trace("[WARN]", "Resource type " + resourceType + " not supported by client, ignoring resource " + path);
        }
      } else {
        AS3.trace("[WARN]", "Ignoring unsupported media type of file " + path);
      }
    }
  }/*

  private static const*/var AUDIO_FALLBACK_ORDER$static/*:Array*/;/* =*/function AUDIO_FALLBACK_ORDER$static_(){AUDIO_FALLBACK_ORDER$static=( ["mp3", "ogg", "wav"]);};/*
  private static*/ var AUDIO_FALLBACK_EXTENSION$static/*:String*/ = null;/*
  private static*/ function findFallback$static(audio/*:Object*/)/*:String*/ {
    if (AUDIO_FALLBACK_EXTENSION$static === null) {
      for (var i/*:int*/ = 0; i < AUDIO_FALLBACK_ORDER$static.length; i++) {
        var fallback/*:String*/ = AUDIO_FALLBACK_ORDER$static[i];
        if (audio['canPlayType']("audio/" + fallback)) {
          return AUDIO_FALLBACK_EXTENSION$static = fallback;
        }
      }
      AS3.trace("[WARN]", "Could not find any audio extension that this client can play (" + AUDIO_FALLBACK_ORDER$static.join(",") +
        "), no sound available.");
      AUDIO_FALLBACK_EXTENSION$static = "";
    }
    return AUDIO_FALLBACK_EXTENSION$static;
  }/*

  public*/ function getResource(path/*:String*/)/*:Object*/ {
    return this.resourceByPath$Xxwm[path];
  }/*

  /**
   * Tell Jangaroo to load and initialize all required classes, then call the given function.
   * The function receives an import hash, which can be used in pure JavaScript in a 'with' statement
   * (Jangaroo does not support 'with', there, you would use import declarations!) like this:
   * <pre>
   * joo.classLoader.import_("com.custom.Foo");
   * joo.classLoader.complete(function(imports){with(imports){
   *   Foo.doSomething("bar");
   * }});
   * </pre>
   * @param onCompleteCallback : Function
   * @return void
   * /
  public override*/ function complete(onCompleteCallback/* : Function = undefined*/)/* : void*/ {
    var Ext/*:**/ = joo.getQualifiedObject("Ext");
    Ext.onReady(onCompleteCallback);
  }/*

  private static*/ function defaultOnCompleteCallback$static()/* : void*/ {
    AS3.trace("[INFO]", "Jangaroo Runtime: All classes loaded!");
  }/*

  private*/ function loadPendingDependencies()/*:void*/ {
    for (var j/*:int*/ =0; j<this.pendingDependencies$Xxwm.length; ++j) {
      var dependencies/* : Array*/ = AS3.cast(joo.JooClassDeclaration,this.pendingDependencies$Xxwm[j]).getDependencies();
      for (var i/*:int*/ =0; i<dependencies.length; ++i) {
        this.load$Xxwm(dependencies[i]);
      }
    }
    this.pendingDependencies$Xxwm = [];
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "joo.StandardClassLoader",
      constructor: DynamicClassLoader$,
      super$Xxwm: function() {
        joo.StandardClassLoader.prototype.constructor.apply(this, arguments);
      },
      prepare: prepare,
      addDependency: addDependency,
      fireDependency: fireDependency,
      doCompleteCallbacks: doCompleteCallbacks,
      internalDoCompleteCallbacks$Xxwm: internalDoCompleteCallbacks,
      createClassLoadErrorHandler$Xxwm: createClassLoadErrorHandler,
      classLoadErrorHandler: classLoadErrorHandler,
      import_: import_,
      run: run,
      load$Xxwm: load,
      loadResource$Xxwm: loadResource,
      getResource: getResource,
      complete: complete,
      loadPendingDependencies$Xxwm: loadPendingDependencies,
      statics: {
        INSTANCE: null,
        RESOURCE_TYPE_BY_EXTENSION: undefined,
        AUDIO_FALLBACK_ORDER: undefined,
        __initStatics__: function() {
          RESOURCE_TYPE_BY_EXTENSION$static_();
          AUDIO_FALLBACK_ORDER$static_();
        }
      },
      requires: ["joo.StandardClassLoader"],
      uses: [
        "AS3.trace",
        "joo.JooClassDeclaration"
      ]
    };
});
