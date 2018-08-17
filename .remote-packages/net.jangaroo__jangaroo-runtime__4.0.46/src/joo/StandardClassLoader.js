Ext.define("joo.StandardClassLoader", function(StandardClassLoader) {/* /*
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

public class StandardClassLoader extends SystemClassLoader {

  private static*/ var classDeclarations$static/* : Array*/;/* =*/function classDeclarations$static_(){classDeclarations$static=( []);};/*

  private var imports : Array;

  public*/ function StandardClassLoader$() {this.super$7Sng();
    this.imports$7Sng = [];
  }/*

  override protected*/ function createClassDeclaration(packageDef/*:String*/, metadata/*:Object*/, classDef/*:String*/, inheritanceLevel/*:int*/, memberFactory/*:Function*/, publicStaticMethodNames/*:Array*/, dependencies/*:Array*/)/*:JooClassDeclaration*/ {
    var cd/* : JooClassDeclaration*/ = new joo.JooClassDeclaration(packageDef, metadata, classDef, inheritanceLevel, memberFactory, publicStaticMethodNames, dependencies);
    classDeclarations$static.push(cd); // remember all created classes for later initialization.
    return cd;
  }/*

  /**
   * Import the class given by its fully qualified class name (package plus name).
   * All imports are collected in a hash and can be used in the #complete() callback function.
   * @param fullClassName : String the fully qualified class name (package plus name) of the class to load and import.
   * /
  public*/ function import_(fullClassName/* : String*/)/* : void*/ {    
    this.imports$7Sng.push(fullClassName);
  }/*

  /**
   * Run the static main method of a class given by its fully qualified name (package plus name), handing through the
   * given arguments (args).
   * The main method is executed after all classes are completed (see #complete()).
   * @param mainClassName : String the fully qualified name (package plus name) or the constructor function
   *   of the class to run.
   * @param args the arguments to hand over to the main method of the given class.
   * /
  public*/ function run(mainClassName/* : String, ...args*/)/* : void*/ {var this$=this;var args=Array.prototype.slice.call(arguments,1);
    this.complete(function()/* : void*/ {
      var mainClass/* : NativeClassDeclaration*/ = this$.getRequiredClassDeclaration(mainClassName).init();
      mainClass.constructor_["main"].apply(null,args);
    });
  }/*

  /**
   * Explicitly initialize the static members of the given class (constructor function).
   * If the class is not yet initialized, Initializers of static variables and static code blocks are called (once).
   * This is only necessary when you want to access constants of a class without importing the class,
   * or when you have loaded the class explicitly and want its static code to execute.
   * Explicit initializing is <i>not</i> necessary when you
   * - import the class or
   * - load the class and use the constructor or a static method of the class. This will trigger initialization
   *   automatically.
   * @param classes the classes (type Function) to initialize.
   * @return Function the last initialized class (constructor function). It only makes sense to use the return value
   *   if you use this method with exactly one parameter.
   * /
  public override*/ function init(/*... classes*/)/* : Function*/ {var classes=Array.prototype.slice.call(arguments);
    var clazz/* : Function*/;
    for (var i/*:int*/ =0; i<classes.length; ++i) {
      clazz = classes[i];
      if (clazz && clazz["$class"]) {
        clazz = AS3.cast(joo.NativeClassDeclaration,clazz["$class"]).init().constructor_;
      }
    }
    return clazz;
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
  public*/ function complete(onCompleteCallback/* : Function = undefined*/)/* : void*/ {
    this.initNativeClasses();
    if (onCompleteCallback) {
      this.doCompleteCallbacks([onCompleteCallback]);
    }
  }/*

  protected*/ function initNativeClasses()/* : void*/ {
    for (var i/*:int*/ = 0; i < classDeclarations$static.length; i++) {
      var classDeclaration/*:JooClassDeclaration*/ = classDeclarations$static[i];
      // init native class patches immediately:
      if (classDeclaration.isNative()) {
        classDeclaration.init();
      }
    }
  }/*

  protected*/ function doCompleteCallbacks(onCompleteCallbacks/* : Array*//*Function*/)/* : void*/ {
    if (onCompleteCallbacks.length) {
      var importMap/* : Object*/ = {};
      for (var j/*:int*/ = 0; j < this.imports$7Sng.length; j++) {
        var fullClassName/*:String*/ = this.imports$7Sng[j];
        var className/* : String*/ = fullClassName.substring(fullClassName.lastIndexOf(".") + 1);
        importMap[className] = joo.classLoader.getRequiredClassDeclaration(fullClassName).init().constructor_;
      }
      for (var i/*:int*/ = 0; i < onCompleteCallbacks.length; ++i) {
        onCompleteCallbacks[i](importMap);
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "joo.SystemClassLoader",
      imports$7Sng: null,
      constructor: StandardClassLoader$,
      super$7Sng: function() {
        joo.SystemClassLoader.prototype.constructor.apply(this, arguments);
      },
      createClassDeclaration: createClassDeclaration,
      import_: import_,
      run: run,
      init: init,
      complete: complete,
      initNativeClasses: initNativeClasses,
      doCompleteCallbacks: doCompleteCallbacks,
      statics: {
        classDeclarations: undefined,
        __initStatics__: function() {
          classDeclarations$static_();
        }
      },
      requires: ["joo.SystemClassLoader"],
      uses: [
        "joo.JooClassDeclaration",
        "joo.NativeClassDeclaration"
      ]
    };
});
