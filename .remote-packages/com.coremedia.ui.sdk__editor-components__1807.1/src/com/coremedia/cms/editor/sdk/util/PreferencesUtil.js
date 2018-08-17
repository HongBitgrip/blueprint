Ext.define("com.coremedia.cms.editor.sdk.util.PreferencesUtil", function(PreferencesUtil) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.impl.StructRemoteBeanImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.BeanFactoryImpl;

import ext.JSON;

/**
 * A class with helper methods for managing preferences.
 * /
[PublicApi]
public class PreferencesUtil {
  /**
   * We cannot use BeanFactoryImpl.REF_PROPERTY, as using $Ref as a Struct property
   * name confuses the REST wire format!
   * /
  private static const*/var REMOTE_BEAN_URI_PATH_PROPERTY$static/*:String*/ = "__Ref__";/*

  /**
   * Update a complex user preference property.
   * The property is stored in the preferences struct at the given path.
   * Intermediate substructs are generated as necessary.
   * If a non-struct value is encountered on the given path,
   * an error is thrown.
   * If the preferences are unavailable or unreadable, the operation
   * is silently skipped.
   * The old value stored at the given path is removed completely
   * in the process of storing the given value.
   * The value to set may be a string, a number, a boolean, a content,
   * or a nested structure of objects and arrays containing such values.
   * The value must not be a circular structure or contain leaf values
   * of other types.
   * The method <code>getPreferencesJSONProperty</code> will read back
   * values stored by this method to a structurally equivalent JSON object.
   *
   * @param value the value to set
   * @param path the path as a sequence of strings
   *
   * @see com.coremedia.cms.editor.sdk.IEditorContext#getPreferences
   * @see #getPreferencesJSONProperty
   * /
  public static*/ function updatePreferencesJSONProperty$static(value/*:Object, ... path*/)/*:void*/ {var path=Array.prototype.slice.call(arguments,1);
    if (path.length === 0) {
      throw new AS3.Error("unsupported attempt to update entire preferences struct at once");
    }

    var preferences/*:StructRemoteBeanImpl*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getPreferences(),  com.coremedia.cap.common.impl.StructRemoteBeanImpl);
    if (preferences && preferences.getState() === com.coremedia.ui.data.BeanState.READABLE) {
      var current/*:Struct*/ = preferences;
      for (var i/*:int*/ = 0; i < path.length - 1; i++) {
        var property/*:String*/ = path[i];
        current =AS3.as( current.instantiate(property),  com.coremedia.cap.struct.Struct);
        if (!current) {
          // Do not trash existing data on the path.
          throw new AS3.Error("non-struct blocks the preference update of " + path.join(".") +
                  " at " + path.slice(0, i + 1).join("."));
        }
      }

      // The very last path element must go away to make room for the new data.
      var lastPropertyName/*:String*/ = path[path.length - 1];
      current.getType().removeProperty(lastPropertyName);
      updateJSONProperty$static(value, current, lastPropertyName);
    }
  }/*

  private static*/ function updateJSONProperty$static(value/*:Object*/, struct/*:Struct*/, propertyName/*:String*/)/*:void*/ {
    if (value === null) {
      // A null is encoded as a null link. We do not know the exact type.
      struct.getType().addLinkProperty(propertyName, getContentContentType$static());
    } else if (AS3.is(value,  Boolean)) {
      struct.getType().addBooleanProperty(propertyName, value);
    } else if (AS3.is(value,  String)) {
      struct.getType().addStringProperty(propertyName, AS3.int_.MAX_VALUE,AS3.as( value,  String));
    } else if (AS3.is(value,  Number)) {
      struct.getType().addIntegerProperty(propertyName, value);
    } else if (AS3.is(value,  com.coremedia.cap.content.Content)) {
      struct.getType().addLinkProperty(propertyName, getContentContentType$static(), value);
    } else if (AS3.is(value,  com.coremedia.ui.data.RemoteBean)) {
      struct.getType().addStructProperty(propertyName);
      AS3.cast(com.coremedia.cap.struct.Struct,struct.get(propertyName)).getType()
              .addStringProperty(REMOTE_BEAN_URI_PATH_PROPERTY$static, AS3.int_.MAX_VALUE, AS3.cast(com.coremedia.ui.data.RemoteBean,value).getUriPath());
    } else if (AS3.is(value,  Date)) {
      struct.getType().addDateProperty(propertyName,AS3.as( value,  Date));
    } else if (AS3.is(value,  Array)) {
      var array/*:Array*/ =AS3.as( value,  Array);
      if (array.length === 0) {
        // An empty array is encoded as an empty link array.  We do not know the exact type.
        struct.getType().addLinkListProperty(propertyName, getContentContentType$static(), []);
      } else {
        // Guess the type from the first element.
        var first/*:Object*/ = array[0];
        if (AS3.is(first,  Boolean)) {
          struct.getType().addBooleanListProperty(propertyName, array);
        } else if (AS3.is(first,  String)) {
          struct.getType().addStringListProperty(propertyName, AS3.int_.MAX_VALUE, array);
        } else if (AS3.is(first,  Number)) {
          struct.getType().addIntegerListProperty(propertyName, array);
        } else if (AS3.is(first,  com.coremedia.cap.content.Content)) {
          struct.getType().addLinkListProperty(propertyName, getContentContentType$static(), array);
        } else if (AS3.is(first,  Date)) {
          struct.getType().addDateListProperty(propertyName, array);
        } else {
          struct.getType().addStructListProperty(propertyName, []);
          updateJSONStructArray$static(array, struct, propertyName);
        }
      }
    } else if (value === undefined) {
      if (struct.getType().hasProperty(propertyName)) {
        struct.getType().removeProperty(propertyName);
      }
    } else {
      updateJSONStruct$static(value, struct.instantiate(propertyName));
    }
  }/*

  private static*/ function getContentContentType$static()/*:ContentType*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentContentType();
  }/*

  private static*/ function updateJSONStructArray$static(array/*:Array*/, struct/*:Struct*/, propertyName/*:String*/)/*:void*/ {
    for (var i/*:int*/ = 0; i < array.length; i++) {
      var object/*:Object*/ = array[i];
      struct.addAt(propertyName);
      updateJSONStruct$static(object, struct.get(propertyName)[i]);
    }
  }/*

  private static*/ function updateJSONStruct$static(value/*:Object*/, struct/*:Struct*/)/*:void*/ {
    for (var propertyName/*:String*/ in value) {
      if (propertyName !== "$Struct" && value.hasOwnProperty(propertyName)) {
        updateJSONProperty$static(value[propertyName], struct, propertyName);
      }
    }
  }/*

  /**
   * @private
   *
   * A utility function that decodes an argument string by parsing it as a JSON string
   * and resolving any bean references afterwards. If the argument is not a string,
   * this function returns undefined.
   *
   * @param json
   * @return the decoded object or undefined
   * /
  public static*/ function decodeJsonString$static(json/*:Object*/)/*:Object*/ {
    if (!(AS3.is(json,  String))) {
      return undefined;
    }

    return com.coremedia.ui.data.impl.BeanFactoryImpl.resolveBeans(Ext.JSON.decode(AS3.as(json,  String)));
  }/*

  /**
   * <p>
   * Get a complex user preference property.
   * The property is read from the preferences struct at the given path.
   * If the preferences are unavailable or unreadable
   * or if the property does not exist, null is returned.
   * The returned object can be a string, a number, a boolean, a content,
   * or a nested structure of objects and arrays containing such values.
   * The method <code>updatePreferencesJSONProperty</code> can be used
   * to store an updated value.
   * </p>
   * <p>
   * A decoder configuration may be given,
   * which is a nested structure of arrays and objects
   * that ultimately contains converter functions.
   * The structure of the decoder configuration should match
   * the structure of the object to be retrieved.
   * For arrays, only the first element of any array
   * in the decoder configuration is considered and applied to all
   * array elements of the retrieved object.
   * If a converter function returns a value that is not undefined,
   * that value is used and the default conversion logic is skipped.
   * This is helpful for detecting legacy properties that used
   * a different encoding, especially a JSON string encoding.
   * If, for example, an entire preference property used to be stored
   * as a string but is now replaced by an object, the decoder
   * configuration would be a single function that takes a single
   * argument, converting the argument to its complex representation
   * if and only if it is a string.
   * </p>
   *
   * @param decoderConfiguration the decoder configuration
   * @param path the path as a sequence of strings
   * @return the parsed value
   *
   * @see #updatePreferencesJSONProperty
   * /
  public static*/ function getPreferencesJSONProperty$static(decoderConfiguration/*:Object, ... path*/)/*:Object*/ {var path=Array.prototype.slice.call(arguments,1);
    var value/*:Object*/ = PreferencesUtil.getPreferencesProperty.apply(null, path);
    if (value === null || value === undefined) {
      return null;
    }

    return decodePreferencesValue$static(decoderConfiguration, value);
  }/*

  private static*/ function decodePreferencesValue$static(decoderConfiguration/*:Object*/, value/*:Object*/)/*:Object*/ {
    if (AS3.is(decoderConfiguration,  Function)) {
      var decoded/*:**/ = AS3.cast(Function,decoderConfiguration)(value);
      if (decoded !== undefined) {
        return decoded;
      }
    }
    if (AS3.is(value,  com.coremedia.cap.struct.Struct)) {
      return decodePreferencesStruct$static(decoderConfiguration, AS3.cast(com.coremedia.cap.struct.Struct,value));
    } else if (AS3.is(value,  Array)) {
      return decodePreferencesArray$static(decoderConfiguration && decoderConfiguration[0],AS3.as( value,  Array));
    } else {
      return value;
    }
  }/*

  private static*/ function decodePreferencesStruct$static(decoderConfiguration/*:Object*/, struct/*:Struct*/)/*:Object*/ {
    var propertyNames/*:Array*/ = struct.getType().getPropertyNames();
    if (propertyNames.length === 1 && propertyNames[0] === REMOTE_BEAN_URI_PATH_PROPERTY$static) {
      var uriPath/*:String*/ = struct.get(propertyNames[0]);
      return com.coremedia.ui.data.beanFactory.getRemoteBean(uriPath);
    }
    var result/*:Object*/ = {};
    for/* each*/ (var $1=0;$1</* in*/ propertyNames.length;++$1) {var propertyName/*:String*/ =propertyNames[$1];
      result[propertyName] = decodePreferencesValue$static(decoderConfiguration && decoderConfiguration[propertyName], struct.get(propertyName));
    }
    return result;
  }/*

  private static*/ function decodePreferencesArray$static(decoderConfiguration/*:Object*/, array/*:Array*/)/*:Object*/ {
    var result/*:Array*/ = [];
    for/* each*/ (var $1=0;$1</* in*/ array.length;++$1) {var object/*:Object*/ =array[$1];
      result.push(decodePreferencesValue$static(decoderConfiguration, object));
    }
    return result;
  }/*

  /**
   * @private
   *
   * Get a property stored at the given path in the preferences struct.
   * If the property does not exist or if
   * a problem occurs, the method silently returns null.
   *
   * @param path the property path as a sequence of strings
   * @return the value
   * /
  public static*/ function getPreferencesProperty$static(/*... path*/)/*:**/ {var path=Array.prototype.slice.call(arguments);
    var preferences/*:Struct*/ = com.coremedia.cms.editor.sdk.editorContext.getPreferences();
    if (preferences && preferences.getState() === com.coremedia.ui.data.BeanState.READABLE) {
      var current/*:Struct*/ = preferences;
      for (var i/*:int*/ = 0; i < path.length - 1; i++) {
        var property/*:String*/ = path[i];
        current =AS3.as( current.get(property),  com.coremedia.cap.struct.Struct);
        if (!current) {
          return null;
        }
      }
      return current.get(path[path.length - 1]);
    }
    return null;
  }/*
}*/function PreferencesUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: PreferencesUtil$,
      statics: {
        updatePreferencesJSONProperty: updatePreferencesJSONProperty$static,
        decodeJsonString: decodeJsonString$static,
        getPreferencesJSONProperty: getPreferencesJSONProperty$static,
        getPreferencesProperty: getPreferencesProperty$static
      },
      requires: [
        "AS3.Error",
        "AS3.int_",
        "Ext.JSON",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.impl.StructRemoteBeanImpl",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.BeanFactoryImpl"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
