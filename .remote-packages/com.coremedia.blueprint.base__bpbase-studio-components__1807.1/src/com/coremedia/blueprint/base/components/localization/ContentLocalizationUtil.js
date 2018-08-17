Ext.define("com.coremedia.blueprint.base.components.localization.ContentLocalizationUtil", function(ContentLocalizationUtil) {/*package com.coremedia.blueprint.base.components.localization {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cms.editor.sdk.util.LocaleUtil;
import com.coremedia.ui.util.ObjectUtils;

public class ContentLocalizationUtil {

  /**
   * This method provides a localized version of a content gathered by the following strategy:
   * It takes the actual local for the logged in user. Then first it tries to fetch a content in the same
   * folder as the origin content with _[locale] Prefix. If no content is found, it looks for a folder named with
   * locale, and then looks there, if a content with the same name as the origin exists.
   *
   * This is the synchronous variant for usage in function value expressions
   * @param c the origin content to search a translation for
   * @return the translated content, the origin content, if no translation is found, or undefined, if
   *         the async loading of contents is not finished yet.
   * /
  public static*/ function getLocalizedContentSync$static(c/*:Content*/)/*: Content*/ {
    var folder/*:Content*/ = c.getParent();
    if (folder && folder.getChildrenByName()) {
      var name/*:String*/ = c.getName();
      var locale/*:String*/ = com.coremedia.cms.editor.sdk.util.LocaleUtil.getLocale();
      var locContent/*:Content*/ = folder.getChildrenByName()[name+"_"+locale];
      if (!locContent) { // If no content exists, then try the subfolder strategy
        var locFolder/*:Content*/ = folder.getChildrenByName()[locale];
        if (!locFolder) {
          return c;
        } else if (locFolder && locFolder.getProperties()) {
          if (locFolder.isFolder()) {
            var locContentInFolder/*:Content*/ = locFolder.getChildrenByName()[name];
            if (!locContentInFolder) {
              return c;
            } else if (locContentInFolder && locContentInFolder.getProperties()){
              return locContentInFolder;
            } else {
              return undefined;
            }
          }
        } else {
          return undefined;
        }
      } else if (locContent && locContent.getProperties()) {
        return locContent;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
    return c;
  }/*

  /**
   * <p>
   *   Localize the given content, by determining the name, retrieving the value
   *   from a resource bundle, and consulting a default resolver if no entry was found.
   * </p>
   * <p>
   *   If a name resolver function is provided,
   *   the name returned by that function is used first before resorting to the content name.
   *   If the name resolver function returns null, its value is ignored.
   *   If the name resolver function returns undefined, this method returns undefined.
   *   If the content name cannot yet be determined, this method returns undefined.
   * </p>
   * <p>
   *   To localize a name, the name is joined with the given suffix and looked up in
   *   in the given resource bundle.
   * </p>
   * <p>
   *   If no matching entry is present in the resource bundle, return
   *   the result determined by invoking the default resolver function, if provided.
   *   If the default resolver returns undefined, this method returns undefined.
   *   If the default resolver is not provided or returns null,
   *   the name is returned.
   * </p>
   *
   * @param content the content
   * @param suffix the suffix
   * @param bundle the resource bundle the name of the bundle for logging purposes
   * @param nameResolver the name resolver function, which takes the content as its single argument
   * @param defaultResolver the default resolver function, which takes the content as its single argument
   * @return the name
   * /
  public static*/ function localize$static(content/*:Content*/,
                                  suffix/*:String*/,
                                  bundle/*:Object*/,
                                  nameResolver/*:Function = null*/,
                                  defaultResolver/*:Function = null*/)/*:String*/ {switch(Math.max(arguments.length,3)){case 3:nameResolver=null;case 4:defaultResolver=null;}
    if (content === undefined) {
      return undefined;
    }

    var names/*:Array*/ = getNames$static(content, nameResolver);
    if (names === undefined) {
      return undefined;
    }

    var label/*:String*/ = lookupAll$static(bundle, names, suffix);
    if (label) {
      return label;
    }

    if (defaultResolver) {
      var defaultValue/*:String*/ = defaultResolver(content);
      if (defaultValue === undefined) {
        return undefined;
      }
      if (defaultValue) {
        return defaultValue;
      }
    }

    return names[0];
  }/*

  private static*/ function getNames$static(content/*:Content*/, nameResolver/*:Function*/)/*:Array*/ {
    var names/*:Array*/ = [];

    if (content === null) {
      names.push("");
    } else {
      var namesUndefined/*:Boolean*/ = false;
      if (nameResolver) {
        var resolverName/*:String*/ = nameResolver(content);
        if (resolverName === undefined) {
          namesUndefined = true;
        }

        if (resolverName !== null) {
          names.push(resolverName);
        }
      }

      // Retrieve content name using utility function to allow the usage of mock contents.
      var name/*:String*/ = com.coremedia.ui.util.ObjectUtils.getProperty(content, com.coremedia.cap.content.ContentPropertyNames.NAME);
      if (name === undefined) {
        namesUndefined = true;
      } else {
        names.push(name);
      }
      if (namesUndefined) {
        names = undefined;
      }
    }

    return names;
  }/*

  private static*/ function lookupAll$static(bundle/*:Object*/, names/*:Array*/, suffix/*:String*/)/*:String*/ {
    for (var i/*:int*/ = 0; i < names.length; i++) {
      var name/*:String*/ = names[i];
      var label/*:String*/ = lookup$static(bundle, name, suffix);
      if (label) {
        return label;
      }
    }
    return null;
  }/*

  private static*/ function lookup$static(bundle/*:Object*/, resolverName/*:String*/, suffix/*:String*/)/*:**/ {
    return bundle[(resolverName.replace(/ /g, '') + suffix)];
  }/*
}*/function ContentLocalizationUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentLocalizationUtil$,
      statics: {
        getLocalizedContentSync: getLocalizedContentSync$static,
        localize: localize$static
      },
      requires: [
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cms.editor.sdk.util.LocaleUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
