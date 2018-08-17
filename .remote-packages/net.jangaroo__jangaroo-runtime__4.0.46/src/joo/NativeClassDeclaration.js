Ext.define("joo.NativeClassDeclaration", function(NativeClassDeclaration) {/* /*
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
public class NativeClassDeclaration {

  internal static const RESOURCE_BUNDLE_PATTERN:RegExp = /_properties$/;

  internal static*/ function createEmptyConstructor$static(prototype_/* : Object*/)/* : Function*/ {
    var emptyConstructor/* : Function*/ = function()/* : void*/ {};
    if (prototype_) {
      emptyConstructor.prototype = prototype_;
    }
    return emptyConstructor;
  }/*

  internal static const STATE_LOADED : int = 0;
  internal static const STATE_COMPLETING : int = 1;
  internal static const STATE_COMPLETED : int = 2;
  internal static const STATE_INITIALIZING : int = 3;
  internal static const STATE_MEMBERS_INITIALIZED : int = 4;
  internal static const STATE_INITIALIZED : int = 5;

  public var
          fullClassName : String,
          constructor_ : Function,
          publicConstructor : Function,
          state  : int =*/function state_(){this.state=( NativeClassDeclaration.STATE_LOADED);}/*,
          Public : Function,
          superClassDeclaration : NativeClassDeclaration,
          interfaces : Array;

  public*/ function NativeClassDeclaration$() {state_.call(this);
  }/*

  public*/ function create(fullClassName/* : String*/, publicConstructor/* : Function*/)/* : NativeClassDeclaration*/ {
    this.fullClassName = fullClassName;
    this.publicConstructor = publicConstructor;
    if (publicConstructor) {
      try {
        this.publicConstructor["$class"] = this;
      } catch (e/*:**/) {
        // ignore that expando properties do not work with certain native objects in certain browsers, e.g. IE7 / XMLHttpRequest
      }
    }
    return this;
  }/*

  public*/ function complete()/* : NativeClassDeclaration*/ {
    if (this.state < NativeClassDeclaration.STATE_COMPLETING ) {
      this.state = NativeClassDeclaration.STATE_COMPLETING;
      this.doComplete();
      this.state = NativeClassDeclaration.STATE_COMPLETED;
    }
    return this;
  }/*

  internal*/ function doComplete()/* : void*/ {
    this.interfaces = [];
    this.constructor_ = AS3.cast(Class,this.publicConstructor) === AS3.Error ? joo.getQualifiedObject("joo.Error") : this.publicConstructor;
    this.Public = NativeClassDeclaration.createEmptyConstructor(this.publicConstructor.prototype);
  }/*

  public*/ function isInstance(obj/*:Object*/)/*:Boolean*/ {
    return obj instanceof this.publicConstructor;
  }/*

  private static*/ var initializationDepth$static/*:String*/ = "";/*

  public*/ function init()/* : NativeClassDeclaration*/ {
    if (this.state < NativeClassDeclaration.STATE_INITIALIZING ) {
      this.complete();
      this.state = NativeClassDeclaration.STATE_INITIALIZING;
      if (joo.classLoader.debug) {
        AS3.trace("[DEBUG]", "Jangaroo Runtime: initializing class " + initializationDepth$static + this.fullClassName);
        initializationDepth$static += "  ";
      }
      this.doInit();
      if (joo.classLoader.debug) {
        initializationDepth$static = initializationDepth$static.substr(0, initializationDepth$static.length - 2);
      }
      this.state = NativeClassDeclaration.STATE_INITIALIZED;
    } else if (this.state < NativeClassDeclaration.STATE_INITIALIZED && !this.fullClassName.match(NativeClassDeclaration.RESOURCE_BUNDLE_PATTERN)) {
      AS3.trace("[WARN]", "Jangaroo Runtime: cyclic static initializer dependency in " + this.fullClassName);
    }
    return this;
  }/*

  internal*/ function doInit()/* : void*/ {
  }/*

  public*/ function getQualifiedName()/* : String*/ {
    // AS uses namespace notation (::) to separate package and class name,
    // so replace the last dot ('.') by a double-colon ('::'):
    return this.fullClassName.replace(/\.([^.]+)$/, "::$1");
  }/*

  public*/ function toString()/* : String*/ {
    return this.fullClassName;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      fullClassName: null,
      constructor_: null,
      publicConstructor: null,
      Public: null,
      superClassDeclaration: null,
      interfaces: null,
      constructor: NativeClassDeclaration$,
      create: create,
      complete: complete,
      doComplete: doComplete,
      isInstance: isInstance,
      init: init,
      doInit: doInit,
      getQualifiedName: getQualifiedName,
      toString: toString,
      statics: {
        RESOURCE_BUNDLE_PATTERN: /_properties$/,
        createEmptyConstructor: createEmptyConstructor$static,
        STATE_LOADED: 0,
        STATE_COMPLETING: 1,
        STATE_COMPLETED: 2,
        STATE_INITIALIZING: 3,
        STATE_MEMBERS_INITIALIZED: 4,
        STATE_INITIALIZED: 5
      },
      uses: [
        "AS3.Error",
        "AS3.trace"
      ]
    };
});
