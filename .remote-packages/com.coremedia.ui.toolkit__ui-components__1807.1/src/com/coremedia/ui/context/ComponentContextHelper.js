Ext.define("com.coremedia.ui.context.ComponentContextHelper", function(ComponentContextHelper) {/*package com.coremedia.ui.context {
public class ComponentContextHelper {

  private static const*/var PROVIDE_CONTEXT_ANNOTATION$static/*:String*/ = "ProvideToExtChildren";/*
  private static const*/var INJECT_CONTEXT_ANNOTATION$static/*:String*/ = "InjectFromExtParent";/*

  internal static*/ function getProvideContextName$static(componentOrAction/*:**/, member/*:MemberDeclaration*/)/*:String*/ {
    return getContextName$static(componentOrAction, member, PROVIDE_CONTEXT_ANNOTATION$static);
  }/*

  internal static*/ function getInjectContextName$static(componentOrAction/*:**/, member/*:MemberDeclaration*/)/*:String*/ {
    return getContextName$static(componentOrAction, member, INJECT_CONTEXT_ANNOTATION$static);
  }/*
    /**
   * get the context variable name for the annotated member of the provider.
   * the name can be the variable parameter of the annotation or
   * the configured object's property of the name which is given in the variableNameConfig parameter of the annotation
   * or the generated name of the member.
   * @param componentOrAction
   * @param member
   * @param annotation
   * @return
   * /
  private static*/ function getContextName$static(componentOrAction/*:**/, member/*:MemberDeclaration*/, annotation/*:String*/)/*:String*/ {
    var contextName/*:String*/;
    var contextAnnotation/*:Object*/ = member.metadata[annotation];

    //is the annotation specified with the variable name config?
    if (contextAnnotation.variableNameConfig){
      //then check the componentOrAction's configuration of the variable name
      contextName = componentOrAction.initialConfig[contextAnnotation.variableNameConfig];
      if (contextName) {
        if (typeof contextName !== "string") {
          throw new AS3.Error("Configuration error: context name is not a string, it is " + typeof contextName + ".");
        }
        return contextName;
      } else {
        //the componentOrAction's configuration of the variable name is empty
        return null;
      }
    }

    if (contextAnnotation.variable) {
      return contextAnnotation.variable;
    }/*

    const*/var PREFIX_REG_EXP/* : RegExp*/ = /^(get|is|set)[A-Z]/;
    var memberName/*:String*/ = member.memberName;
    var match/* : Array*/ = memberName.match(PREFIX_REG_EXP);
    if (match) {
      var prefixLength/*:Number*/ = match[1].length;
      return memberName.charAt(prefixLength).toLowerCase() + memberName.substring(prefixLength + 1);
    }
    return memberName;
  }/*

  public static*/ function getClass$static(object/*:Object*/)/*:Class*/ {
    return object.self;
  }/*

  internal static*/ function getMemberDeclaration$static(clazz/*:Class*/, memberName/*:String*/)/*:MemberDeclaration*/ {
    var metadataArray/*:Array*/ = clazz.prototype.metadata && clazz.prototype.metadata[memberName];
    var member/*:MemberDeclaration*/ = new com.coremedia.ui.context.MemberDeclaration();
    member.memberName = memberName;
    if (metadataArray) {
      member.metadata = {};
      member.metadata[metadataArray[0]] = {};
      if (metadataArray.length > 1) {
        member.metadata[metadataArray[0]][metadataArray[1][0]] = metadataArray[1][1];
      }
    }
    return member;
  }/*

  internal static*/ function getProvideMetaData$static(member/*:MemberDeclaration*/)/*:Object*/ {
    return member.metadata && member.metadata[PROVIDE_CONTEXT_ANNOTATION$static];
  }/*

  internal static*/ function getInjectMetaData$static(member/*:MemberDeclaration*/)/*:Object*/ {
    return member.metadata && member.metadata[INJECT_CONTEXT_ANNOTATION$static];
  }/*

  internal static*/ function getSuperClass$static(clazz/*:Class*/)/*:Class*/ {
    var superClass/*:Class*/ = clazz.superclass && clazz.superclass.self;
    return AS3.is( superClass,  Class) ? superClass : null;
  }/*
}*/function ComponentContextHelper$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ComponentContextHelper$,
      statics: {
        getProvideContextName: getProvideContextName$static,
        getInjectContextName: getInjectContextName$static,
        getClass: getClass$static,
        getMemberDeclaration: getMemberDeclaration$static,
        getProvideMetaData: getProvideMetaData$static,
        getInjectMetaData: getInjectMetaData$static,
        getSuperClass: getSuperClass$static
      },
      requires: ["AS3.Error"],
      uses: ["com.coremedia.ui.context.MemberDeclaration"]
    };
});
