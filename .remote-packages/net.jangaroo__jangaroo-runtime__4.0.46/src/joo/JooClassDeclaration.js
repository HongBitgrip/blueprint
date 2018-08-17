Ext.define("joo.JooClassDeclaration", function(JooClassDeclaration) {/* /*
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

public class JooClassDeclaration extends NativeClassDeclaration {

  public static const STATE_EVENT_AFTER_INIT_MEMBERS:String = 'afterInitMembers';
  private static*/ var STATE_BY_EVENT$static/*:Object*/=null;function static$0(){
  STATE_BY_EVENT$static = {
    'afterInitMembers': joo.NativeClassDeclaration.STATE_MEMBERS_INITIALIZED
  };}/*

  internal var
          package_ : Object,
          type : String =*/function type_(){this.type=( joo.MemberDeclaration.MEMBER_TYPE_CLASS);}/*,
          namespace_ : String =*/function namespace__(){this.namespace_=( joo.MemberDeclaration.NAMESPACE_INTERNAL);}/*,
          className : String,
          native_ : Boolean = false,
          extends_ : String = "Object",
          level : int = -1,
          privateStatics : Object,
          memberDeclarations : * /* Function, then Array * /,
          memberDeclarationsByQualifiedName : Object,
          staticInitializers : Array/*<MemberDeclaration|Function>* /,
          publicStaticMethodNames : Array,
          implementingClasses: Array/*Class* /,
          dependencies : Array,
          stateListeners: Object;
  /**
   * The metadata (annotations) associated with this class.
   * /
  public var metadata : Object;

  private static const*/var DECLARATION_PATTERN_CLASS$static/*:RegExp*/ =
    /^\s*((public|internal|final|dynamic)\s+)*class\s+([a-zA-Z$_0-9]+)(\s+extends\s+([a-zA-Z$_0-9.]+))?(\s+implements\s+([a-zA-Z$_0-9.,\s]+))?\s*$/;/*
  private static const*/var DECLARATION_PATTERN_INTERFACE$static/*:RegExp*/ =
    /^\s*((public|internal)\s+)?interface\s+([a-zA-Z$_0-9]+)(\s+extends\s+([a-zA-Z$_0-9.,\s]+))?\s*$/;/*
  private static const*/var DECLARATION_PATTERN_OTHER$static/*:RegExp*/ =
    /^\s*((public|internal)\s+)?(const|var|function|namespace)\s+([a-zA-Z$_0-9]+)\s*$/;/*

  public*/ function JooClassDeclaration$(packageDef/*:String*/, metadata/*:Object*/, classDef/*:String*/, inheritanceLevel/*:int*/, memberDeclarations/*:Function*/, publicStaticMethodNames/*:Array*/, dependencies/*:Array*/) {this.super$1eI8();namespace__.call(this);type_.call(this);
    this.stateListeners = {};
    this.metadata = metadata;
    var packageName/* : String*/ = packageDef.split(/\s+/)[1] || "";
    this.package_ = joo.getOrCreatePackage(packageName);
    var classMatch/* : Array*/ = classDef.match(DECLARATION_PATTERN_CLASS$static);
    var interfaces/* : String*/;
    if (classMatch) {
      this.className = classMatch[3];
      if (classMatch[5]) {
        this.extends_ = classMatch[5];
      }
      interfaces = classMatch[7];
    } else {
      classMatch = classDef.match(DECLARATION_PATTERN_INTERFACE$static);
      if (classMatch) {
        this.className = classMatch[3];
        this.type = joo.MemberDeclaration.MEMBER_TYPE_INTERFACE;
        interfaces = classMatch[5];
      } else {
        classMatch = classDef.match(DECLARATION_PATTERN_OTHER$static);
        if (classMatch) {
          this.className = classMatch[4];
          this.type = classMatch[3];
        }
      }
    }
    if (!classMatch) {
      throw new AS3.Error("SyntaxError: \""+classDef+"\" does not match.");
    }
    this.level = inheritanceLevel;
    this.namespace_ = classMatch[2];
    var fullClassName/* : String*/ = this.className;
    if (packageName) {
      fullClassName = packageName+"."+this.className;
    }
    this.interfaces = interfaces ? interfaces.split(/\s*,\s*/) : [];
    this.memberDeclarations = memberDeclarations;
    this.publicStaticMethodNames = publicStaticMethodNames;
    this.dependencies = dependencies;
    this.privateStatics = {};
    this.publicConstructor = joo.getQualifiedObject(fullClassName);
    if (this.publicConstructor) {
      this.native_ = true;
    } else if (this.isClass() || this.isInterface()) {
      this.package_[this.className] = this.publicConstructor = createInitializingConstructor$static(this);
      for (var i/*:int*/ = 0; i < publicStaticMethodNames.length; i++) {
        this.createInitializingStaticMethod(publicStaticMethodNames[i]);
      }
    } else if (this.isFunction()) {
      this.package_[this.className] = createInitializingPackageMethod$static(this);
    } else if (this.isConst() || this.isVar()) {
      this.package_[this.className] = typeof this.memberDeclarations === "function" ?
        createInitializingPackageField$static(this) : this.memberDeclarations;
    }
    this.create(fullClassName, this.publicConstructor);
    this._processMetadata(); // for early annotation processing like adding dependencies
  }/*

  public*/ function addStateListener(state/*:String*/, listener/*:Function*/)/*:void*/ {
    if (this.state >= STATE_BY_EVENT$static[state]) {
      // when already past this state, call back immediately:
      listener(this);
    } else {
      var stateListeners/*:Array*/ = this.stateListeners[state];
      if (!stateListeners) {
        this.stateListeners[state] = stateListeners = [];
      }
      stateListeners.push(listener);
    }
  }/*

  public*/ function removeStateListener(state/*:String*/, listener/*:Function*/)/*:void*/ {
    var stateListeners/*:Array*/ = this.stateListeners[state];
    if (stateListeners) {
      var pos/*:int*/ = stateListeners.indexOf(listener);
      if (pos !== -1) {
        stateListeners.splice(pos, 1);
      }
    }
  }/*

  public*/ function isClass()/* : Boolean*/ {
    return this.type === joo.MemberDeclaration.MEMBER_TYPE_CLASS;
  }/*

  public*/ function isInterface()/* : Boolean*/ {
    return this.type === joo.MemberDeclaration.MEMBER_TYPE_INTERFACE;
  }/*

  public*/ function isFunction()/* : Boolean*/ {
    return this.type === joo.MemberDeclaration.MEMBER_TYPE_FUNCTION;
  }/*

  public*/ function isConst()/* : Boolean*/ {
    return this.type === joo.MemberDeclaration.MEMBER_TYPE_CONST;
  }/*

  public*/ function isVar()/* : Boolean*/ {
    return this.type === joo.MemberDeclaration.MEMBER_TYPE_VAR;
  }/*

  internal*/ function addToInterfaces(clazz/*:Function*/)/*:void*/ {
    var scd/*:JooClassDeclaration*/ =AS3.as( this.superClassDeclaration,  JooClassDeclaration);
    if (scd) {
      scd.addToInterfaces(clazz);
    }
    for (var i/*:int*/ = 0; i < this.interfaces.length; i++) {
      AS3.cast(JooClassDeclaration,this.interfaces[i]).addImplementingClass(clazz);
    }
  }/*

  internal*/ function addImplementingClass(clazz/*:Function*/)/*:void*/ {
    //trace("#### adding " + clazz + " to interface " + fullClassName + ":");
    var implementingClasses/*:Array*/ = [];
    //trace("####   before: " + this.implementingClasses.join(", "));
    for (var i/*:int*/ = 0; i < this.implementingClasses.length; i++) {
      var implementingClass/*:Function*/ = this.implementingClasses[i];
      // do not add new clazz if it or a superclass is already in the set:
      if (clazz === implementingClass || clazz.prototype instanceof implementingClass) {
        //trace("####   " + implementingClass + " already present, nothing changed.");
        return; // class or superclass already added!
      }
      // remove all subclasses from the set (keep only non-subclasses):
      if (!(implementingClass.prototype instanceof clazz)) {
        implementingClasses.push(implementingClass);
      }
    }
    implementingClasses.push(clazz);
    this.implementingClasses = implementingClasses;
    //trace("####   after: " + this.implementingClasses.join(", "));
    this.addToInterfaces(clazz);
  }/*

  override public*/ function isInstance(obj/*:Object*/)/*:Boolean*/ {
    return this.Public ? this.isInterface() ? this.implementingClasses.some(function(implementingClass/*:Function*/)/*:Boolean*/ {
      return obj instanceof implementingClass;
    }) : obj instanceof this.Public // cannot invoke super, since BootstrapClassLoader does not support super calls!
    : false; // class not even completed, cannot have instances!
  }/*

  public*/ function isNamespace()/* : Boolean*/ {
    return this.type === joo.MemberDeclaration.MEMBER_TYPE_NAMESPACE;
  }/*

  public*/ function isNative()/* : Boolean*/ {
    return this.native_;
  }/*

  internal override*/ function doComplete()/* : void*/ {
    this.superClassDeclaration = joo.classLoader.getRequiredClassDeclaration(this.extends_);
    this.superClassDeclaration.complete();
    var proto/*:Object*/ = this.native_ ? this.publicConstructor.prototype : new (this.superClassDeclaration.Public)();
    this.Public = joo.NativeClassDeclaration.createEmptyConstructor(proto);
  }/*

  internal*/ function initMembers()/* : void*/ {
    this.staticInitializers = [];
    var memberDeclarations/*:Array*/ = this.memberDeclarations(this.privateStatics);
    this.memberDeclarations = [];
    this.memberDeclarationsByQualifiedName = {};
    this.constructor_ = this.isNative() ? this.publicConstructor : null;
    var metadata/*:Object*/ = {};
    for (var i/*:int*/ = 0; i < memberDeclarations.length; ++i) {
      var item/*:**/ = memberDeclarations[i];
      switch (typeof item) {
        case "function":
          this.staticInitializers.push(item);
          break;
        case "string":
          var memberDeclaration/*:MemberDeclaration*/ = joo.MemberDeclaration.create(item);
          if (memberDeclaration) {
            memberDeclaration.metadata = metadata;
            metadata = {};
            if (!memberDeclaration.isNative()) {
              if (++i >= memberDeclarations.length) {
                throw new AS3.Error(this + ": Member expected after modifiers '" + item + "'.");
              }
              var member/*:**/ = memberDeclarations[i];
            }
            switch (memberDeclaration.memberType) {
              case joo.MemberDeclaration.MEMBER_TYPE_FUNCTION:
                this.initMethod(memberDeclaration, AS3.cast(Function,member));
                break;
              case joo.MemberDeclaration.MEMBER_TYPE_CLASS:
                //noinspection UnnecessaryLocalVariableJS
                var helperInheritanceLevel/*:int*/ = member;
                var helperMemberDeclarations/*:Function*/ = memberDeclarations[++i];
                var helperStatics/*:Array*/ = memberDeclarations[++i];
                var secondaryClass/*:NativeClassDeclaration*/ = joo.classLoader.prepare("package " + this.fullClassName, item,
                  helperInheritanceLevel, helperMemberDeclarations,
                  helperStatics, [], joo.runtimeApiVersion, joo.compilerVersion).complete();

                // revert that the class has already set itself as a static member, because it considers the primary class its package.
                // otherwise, the static initializer that inits the secondary class may not be set by _storeMember()!
                delete joo.getQualifiedObject(this.fullClassName)[memberDeclaration.memberName];

                memberDeclaration._static = true;
                memberDeclaration.initSlot(this.level);
                this._storeMember(memberDeclaration, createSecondaryClassInitializer$static(secondaryClass.publicConstructor));
                break;
              default:
                for (var memberName/*:String*/ in member) {
                  this._storeMember(this._createMemberDeclaration(memberDeclaration, {memberName: memberName}), member[memberName]);
                }
            }
          }
          break;
        case "object":
          joo.SystemClassLoader.addToMetadata(metadata, item);
      }
    }
    if (!this.isInterface() && !this.native_) {
      if (!this.superClassDeclaration.constructor_) {
        throw new AS3.Error("Class " + this.fullClassName + " extends " + this.superClassDeclaration.fullClassName + " whose constructor is not defined!");
      }
      // only add "super$..." for backwards compatibility, and never if we are a JavaScriptObject:
      if (!(this.Public.prototype instanceof joo.JavaScriptObject)) {
        this.Public.prototype["super$" + this.level] = this.superClassDeclaration.constructor_;
      }
      if (!this.constructor_) {
        // no explicit constructor found
        // generate constructor invoking super() and initialize it from the "collecting" constructor:
        this._setConstructor(createSuperConstructor$static(this));
      }
    }
  }/*

  private static*/ function createSecondaryClassInitializer$static(secondaryClass/*:Function*/)/*:Function*/ {
    return function()/*:Function*/ {
      // init secondary class together with primary class:
      return joo.classLoader.init(secondaryClass);
    };
  }/*

  //noinspection JSFieldCanBeLocalInspection
  private static*/ var jooClasstoString$static/*:Function*/=null;function static$1(){
  jooClasstoString$static = function()/*:String*/ {
    return "[class " + this.$class.className + "]";
  };}/*

  internal*/ function _setConstructor(constructor_/*:Function*/)/*:void*/ {
    // replay all non-private static members collected so far for new constructor_ function:
    for (var i/*:int*/ = 0; i < this.memberDeclarations.length; i++) {
      var memberDeclaration/*:MemberDeclaration*/ = this.memberDeclarations[i];
      if (memberDeclaration.isStatic() && !memberDeclaration.isPrivate()) {
        memberDeclaration.storeMember(constructor_);
      }
    }
    constructor_['$class'] = this;
    if (this.superClassDeclaration) {
      constructor_['superclass'] = this.superClassDeclaration.Public.prototype; // Ext Core compatibility!
    }
    constructor_.prototype = this.Public.prototype;
    Object.defineProperty(this.Public.prototype, 'constructor', {
      value: constructor_,
      writable: true,
      configurable: true
    });
    constructor_.toString = jooClasstoString$static;
    // replace initializing constructor by the real one:
    this.package_[this.className] = this.constructor_ = constructor_;
  }/*

  private static*/ function createSuperConstructor$static(classDeclaration/*:JooClassDeclaration*/)/*:Function*/ {
    return function generatedConstructor$()/*:void*/ {
      classDeclaration.constructor_["superclass"].constructor.call(this);
    };
  }/*

  internal*/ function initMethod(memberDeclaration/* : MemberDeclaration*/, member/* : Function*/)/* : void*/ {
    if (memberDeclaration.memberName == this.className && !memberDeclaration.isStatic()) {
      if (memberDeclaration.getterOrSetter) {
        throw new AS3.Error(this+": Class name cannot be used for getter or setter: "+memberDeclaration);
      }
      if (!this.native_ && !memberDeclaration.isNative()) {
        this._setConstructor(member);
      }
    } else {
      memberDeclaration.initSlot(this.level);
      if (memberDeclaration.isNative()) {
        member = memberDeclaration.getNativeMember(this.publicConstructor);
      }
      if (memberDeclaration.isMethod()) {
        if (this.extends_!="Object") {
          var superMethod/* : Function*/ = memberDeclaration.retrieveMember(this.superClassDeclaration.Public.prototype);
        }
        var overrides/* : Boolean*/ = ! !superMethod
          && superMethod!==member
          && superMethod!==Object['prototype'][memberDeclaration.memberName];
        if (overrides !== memberDeclaration.isOverride()) {
          var msg/* : String*/ = overrides
                  ? "Method overrides without 'override' modifier"
                  : "Method with 'override' modifier does not override";
          AS3.trace("[WARN]", this+": "+msg+": "+memberDeclaration);
        } else if (overrides) {
          // found overriding: store super class' method as private member:
          this._storeMember(this._createMemberDeclaration(memberDeclaration, {_namespace: joo.MemberDeclaration.NAMESPACE_PRIVATE}), superMethod);
        }
      }
      this._storeMember(memberDeclaration, member);
    }
  }/*

  internal*/ function _createMemberDeclaration(memberDeclaration/* : MemberDeclaration*/, changedProperties/* : Object*/)/* : MemberDeclaration*/ {
    var newMemberDeclaration/* : MemberDeclaration*/ = memberDeclaration.clone(changedProperties);
    newMemberDeclaration.initSlot(this.level);
    return newMemberDeclaration;
  }/*

  internal*/ function _storeMember(memberDeclaration/* : MemberDeclaration*/, value/* : Object*/)/* : void*/ {
    this.memberDeclarations.push(memberDeclaration);
    this.memberDeclarationsByQualifiedName[memberDeclaration.getQualifiedName()] = memberDeclaration;
    memberDeclaration.value = value;
    var _static/* : Boolean*/ = memberDeclaration.isStatic();
    var _private/* : Boolean*/ = memberDeclaration.isPrivate();

    if (_static && memberDeclaration.hasInitializer()) {
      this.staticInitializers.push(memberDeclaration);
    }
    this._processMetadata(memberDeclaration);
    var target/* : Object*/ = _static ? _private ? this.privateStatics : this.constructor_ : this.Public.prototype;

    if (target) {
      memberDeclaration.storeMember(target);
    }
    // if constructor_ is not yet set, static non-private members will be added later by _setConstructor().
  }/*

  internal*/ function _processMetadata(memberDeclaration/* : MemberDeclaration = null*/)/*:void*/ {if(arguments.length<=0)memberDeclaration=null;
    var metaPackage/*:**/ = joo.getQualifiedObject("joo.meta");
    if (metaPackage) {
      var metadata/*:Object*/ = memberDeclaration ? memberDeclaration.metadata : this.metadata;
      if (metadata) {
        for (var metaFunctionName/*:String*/ in metadata) {
          if (metaFunctionName in metaPackage) {
            metaPackage[metaFunctionName](this, memberDeclaration, metadata[metaFunctionName]);
          }
        }
      }
    }
  }/*

  internal override*/ function doInit()/* : void*/ {
    if (!this.isClass() && !this.isInterface()) {
      return;
    }
    this.superClassDeclaration.init();
    for (var j/*:int*/ = 0; j < this.interfaces.length; j++) {
      this.interfaces[j] = joo.classLoader.getRequiredClassDeclaration(this.interfaces[j]).init();
    }
    this.initMembers();
    if (this.isInterface()) {
      this.implementingClasses = [];
    } else {
      this.addToInterfaces(this.constructor_);
    }
    this.state = joo.NativeClassDeclaration.STATE_MEMBERS_INITIALIZED;
    this.fireStateEvent(JooClassDeclaration.STATE_EVENT_AFTER_INIT_MEMBERS);
    for (var i/*:int*/ =0; i<this.staticInitializers.length; ++i) {
      var staticInitializer/* : **/ = this.staticInitializers[i];
      if (typeof staticInitializer=="function") {
        // static statements
        staticInitializer();
      } else {
        //noinspection UnnecessaryLocalVariableJS
        var memberDeclaration/*:MemberDeclaration*/ = staticInitializer;
        // static variable initializer expression
        var target/* : Object*/ = memberDeclaration.isPrivate() ? this.privateStatics : this.constructor_;
        target[memberDeclaration.slot] = target[memberDeclaration.slot]();
      }
    }
  }/*

  internal*/ function fireStateEvent(event/*:String*/)/*:void*/ {
    var stateListeners/*:Array*/ = this.stateListeners[event];
    if (stateListeners) {
      for (var i/*:int*/ = 0; i < stateListeners.length; i++) {
        stateListeners[i](this);
      }
      delete this.stateListeners[event];
    }
  }/*

  public*/ function getMemberDeclaration(namespace_/* : String*/, memberName/* : String*/)/* : MemberDeclaration*/ {
    var memberDeclaration/*:MemberDeclaration*/ = this.memberDeclarationsByQualifiedName[namespace_ + "::" + memberName];
    return !memberDeclaration && this.superClassDeclaration && this.superClassDeclaration["getMemberDeclaration"]
      ? AS3.cast(JooClassDeclaration,this.superClassDeclaration).getMemberDeclaration(namespace_, memberName)
      : memberDeclaration;

  }/*

  public*/ function getDependencies()/* : Array*/ {
    return this.dependencies;
  }/*

  private static*/ function createInitializingConstructor$static(classDeclaration/* : JooClassDeclaration*/)/* : Function*/ {
    return function()/* : Object*/ {arguments=Array.prototype.slice.call(arguments);
      classDeclaration.init();
      // create an uninitialized Object with the correct prototype chain:
      var instance/*:Object*/ = new classDeclaration.Public();
      // now, apply the constructor to that Object.
      // classDeclaration.constructor_ must have been set, at least to a default constructor:
      classDeclaration.constructor_.apply(instance, arguments);
      return instance;
    };
  }/*

  private static*/ function createInitializingPackageMethod$static(classDeclaration/* : JooClassDeclaration*/)/* : Function*/ {
    return function()/* : **/ {arguments=Array.prototype.slice.call(arguments);
        var fun/*:Function*/ = classDeclaration.package_[classDeclaration.className] = classDeclaration.memberDeclarations();
        return fun.apply(null, arguments);
    };
  }/*

  private static*/ function createInitializingPackageField$static(classDeclaration/*:JooClassDeclaration*/)/*:Object*/ {
    return {
      $class: {
        init: function()/*:**/ {
          var value/*:**/ = classDeclaration.package_[classDeclaration.className] = classDeclaration.memberDeclarations();
          return {
            constructor_: value
          };
        }
      }
    };
  }/*

  internal*/ function createInitializingStaticMethod(methodName/* : String*/)/* : void*/ {var this$=this;
    this.publicConstructor[methodName] = function()/* : **/ {arguments=Array.prototype.slice.call(arguments);
      this$.init();
      return this$.constructor_[methodName].apply(null, arguments);
    };
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "joo.NativeClassDeclaration",
      package_: null,
      className: null,
      native_: false,
      extends_: "Object",
      level: -1,
      privateStatics: null,
      memberDeclarations: undefined,
      memberDeclarationsByQualifiedName: null,
      staticInitializers: null,
      publicStaticMethodNames: null,
      implementingClasses: null,
      dependencies: null,
      stateListeners: null,
      metadata: null,
      constructor: JooClassDeclaration$,
      super$1eI8: function() {
        joo.NativeClassDeclaration.prototype.constructor.apply(this, arguments);
      },
      addStateListener: addStateListener,
      removeStateListener: removeStateListener,
      isClass: isClass,
      isInterface: isInterface,
      isFunction: isFunction,
      isConst: isConst,
      isVar: isVar,
      addToInterfaces: addToInterfaces,
      addImplementingClass: addImplementingClass,
      isInstance: isInstance,
      isNamespace: isNamespace,
      isNative: isNative,
      doComplete: doComplete,
      initMembers: initMembers,
      _setConstructor: _setConstructor,
      initMethod: initMethod,
      _createMemberDeclaration: _createMemberDeclaration,
      _storeMember: _storeMember,
      _processMetadata: _processMetadata,
      doInit: doInit,
      fireStateEvent: fireStateEvent,
      getMemberDeclaration: getMemberDeclaration,
      getDependencies: getDependencies,
      createInitializingStaticMethod: createInitializingStaticMethod,
      statics: {
        STATE_EVENT_AFTER_INIT_MEMBERS: 'afterInitMembers',
        __initStatics__: function() {
          static$0();
          static$1();
        }
      },
      requires: ["joo.NativeClassDeclaration"],
      uses: [
        "AS3.Error",
        "AS3.trace",
        "joo.JavaScriptObject",
        "joo.MemberDeclaration",
        "joo.SystemClassLoader"
      ]
    };
});
