Ext.define("com.coremedia.cms.editor.sdk.util.FormatUtil", function(FormatUtil) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.RemoteBeanUtil;

import ext.util.Format;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class FormatUtil {
  /**
   * Format a string according to a given pattern. The string may contain
   * substitution tokens of the form {0}, {1}, and so on, which are replaced
   * by the associated values as provided in the optional arguments.
   * Date objects are automatically formatted as localized date/time strings.
   * Content objects are formatted as their name, if available.
   * Unlike StringUtil.format, the tokens may appear in any order.
   *
   * @param pattern the pattern to format
   * @param values the substitution values
   * @return the formatted string
   * /
  public static*/ function format$static(pattern/*:String, ... values*/)/*:String*/ {var values=Array.prototype.slice.call(arguments,1);
    var result/*:Array*/ = [];
    var i/*:int*/ = 0;
    while (i < pattern.length) {
      var c/*:String*/ = pattern.charAt(i++);
      if (c === '{') {
        var tokenEnd/*:int*/ = pattern.indexOf('}', i + 1);
        if (tokenEnd === -1) {
          result.push('{');
        } else {
          // i has already been increased.
          var token/*:String*/ = pattern.substring(i, tokenEnd);
          i = tokenEnd + 1;

          result.push(formatToken$static(token, values));
        }
      } else {
        result.push(c);
      }
    }
    return result.join('');
  }/*

  private static*/ function formatToken$static(token/*:String*/, values/*:**/)/*:String*/ {
    // At the moment, only numbers are supported as substitution tokens.
    var tokenPos/*:Number*/ = Number(token);

    var object/*:Object*/ = values[tokenPos];
    if (AS3.is(object,  Date)) {
      object = Ext.util.Format.date(object, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dateFormat'));
    } else if (AS3.is(object,  com.coremedia.cap.content.Content)) {
      var content/*:Content*/ =AS3.as( object,  com.coremedia.cap.content.Content);
      if (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(content)) {
        var name/*:String*/ = content.getName();
        if (name) {
          object = name;
        }
      }
      if (AS3.is(object,  com.coremedia.cap.content.Content)) {
        object = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableName(content);
      }
    } else if (AS3.is(object,  com.coremedia.ui.data.Locale)) {
      var locale/*:Locale*/ =AS3.as( object,  com.coremedia.ui.data.Locale);
      var displayName/*:String*/ = locale.getDisplayName();
      if (displayName) {
        object = displayName;
      }
    } else if (AS3.is(object,  Number)) {
      object = Ext.util.Format.number(Number(object), "0,000");
    }
    return String(object);
  }/*
}*/function FormatUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: FormatUtil$,
      statics: {format: format$static},
      requires: [
        "Ext.util.Format",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.Locale",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"]
    };
});
