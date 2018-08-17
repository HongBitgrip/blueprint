Ext.define("com.coremedia.personalization.ui.util.PersonaContextHelper", function(PersonaContextHelper) {/*package com.coremedia.personalization.ui.util {
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;

/**
 * Provides some helpers for converting a string of properties from and to a bean representation.
 * /
public class PersonaContextHelper {

  public static const CONTEXT_NAME_SEPARATOR:String = '!';
  /**
   * Although the model of the TestUserProfileSettings is directly built from the blob and should
   * contain only the properties read from and written to the blob, we add this 'hidden' property
   * so that you can tell from the model if the blob has already been loaded.
   * /
  public static const HIDDEN_PROPERTY_NAME:String = 'blobPropertiesLoaded';

  public static const INVALID_VALUE:Bean =*/function INVALID_VALUE$static_(){PersonaContextHelper.INVALID_VALUE=( com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean({profileSettings:'invalid'}));}/*;

  private static const*/var CONTEXT$static/*:String*/ = "([a-zA-Z_][a-zA-Z_0-9]*)";/*
  private static const*/var KEY$static/*:String*/ = "([a-zA-Z_0-9]+)";/*
  private static const*/var VALUE$static/*:String*/ = "(.*\\S)?";/*
  private static const*/var COMMENT$static/*:String*/ = "(#.*)";/*
  private static const*/var PROPERTY$static/*:String*/;/* =*/function PROPERTY$static_(){PROPERTY$static=( '(?:\\s*(?:' + COMMENT$static + '|' + CONTEXT$static + '\\.' + KEY$static + '\\s*=\\s*' + VALUE$static + ')\\s*?)');};/*
  private static const*/var PROPERTIES$static/*:String*/;/* =*/function PROPERTIES$static_(){PROPERTIES$static=( '^' + PROPERTY$static + '(?:\\n' + PROPERTY$static + ')*$');};/*

  private static const*/var validationRegExp$static/*:RegExp*/;/* =*/function validationRegExp$static_(){validationRegExp$static=( new RegExp(PROPERTIES$static));};/*

  public static*/ function isValidPropertiesString$static(str/*:String*/)/*:Boolean*/ {
    return str == null || str.length == 0 || validationRegExp$static.exec(str) != null;
  }/*

  public static*/ function beanFromPropertiesString$static(str/*:String*/)/*:Bean*/ {
    if (!PersonaContextHelper.isValidPropertiesString(str)) {
      return PersonaContextHelper.INVALID_VALUE;
    }/*
    const*/var result/*:Bean*/ = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean({});/*
    const*/var tokenizer/*:RegExp*/ = new RegExp(PROPERTY$static, 'g');
    var match/*:Array*/ = tokenizer.exec(str);
    while (match != null) {
      // Need to check both: match[1] returns "undefined" in Firefox and Chrome and is empty in IE
      if (match[1] == undefined || match[1] == "") {/*
        // we didn't match the COMMENT group, so we've got a property definition
        const*/var context/*:String*/ = match[2];/*
        const*/var key/*:String*/ = match[3];/*
        const*/var value/*:String*/ = match[4];
        result.set(context + PersonaContextHelper.CONTEXT_NAME_SEPARATOR + key, value);
      } // else skip, because its either an empty line or a comment
      match = tokenizer.exec(str);
    }
    return result;
  }/*

  public static*/ function groupArrayFromPropertiesString$static(str/*:String*/)/*:Array*/ {
    if (!PersonaContextHelper.isValidPropertiesString(str)) {
      return [];
    }/*
    const*/var result/*:Array*/ = new Array();/*
    const*/var tokenizer/*:RegExp*/ = new RegExp(PROPERTY$static, 'g');
    var match/*:Array*/ = tokenizer.exec(str);
    while (match != null) {
      // Need to check both: match[1] returns "undefined" in Firefox and Chrome and is empty in IE
      if (match[1] == undefined || match[1] == "") {/*
        // we didn't match the COMMENT group, so we've got a property definition
        const*/var context/*:String*/ = match[2];/*
        const*/var key/*:String*/ = match[3];/*
        const*/var value/*:String*/ = match[4];
        result.push([context,  key, value]);
      } // else skip, because its either an empty line or a comment
      match = tokenizer.exec(str);
    }
    return result;
  }/*

  public static*/ function propertiesStringFromBean$static(bean/*:Bean*/)/*:String*/ {
    var result/*:String*/ = "";
    for (var property/*:String*/ in bean.toObject()) {
      if(property != PersonaContextHelper.HIDDEN_PROPERTY_NAME){/*
        const*/var value/*:String*/ = bean.get(property);
        if (value != "") {
          result += property.replace(PersonaContextHelper.CONTEXT_NAME_SEPARATOR, '.') + '=' + (value != null ? value : '') + '\n';
        }
      }
    }
    return result;
  }/*
}*/function PersonaContextHelper$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PersonaContextHelper$,
      statics: {
        CONTEXT_NAME_SEPARATOR: '!',
        HIDDEN_PROPERTY_NAME: 'blobPropertiesLoaded',
        INVALID_VALUE: undefined,
        PROPERTY: undefined,
        PROPERTIES: undefined,
        validationRegExp: undefined,
        isValidPropertiesString: isValidPropertiesString$static,
        beanFromPropertiesString: beanFromPropertiesString$static,
        groupArrayFromPropertiesString: groupArrayFromPropertiesString$static,
        propertiesStringFromBean: propertiesStringFromBean$static,
        __initStatics__: function() {
          INVALID_VALUE$static_();
          PROPERTY$static_();
          PROPERTIES$static_();
          validationRegExp$static_();
        }
      },
      requires: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
