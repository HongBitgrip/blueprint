Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.SearchWidgetTitleFormatter", function(SearchWidgetTitleFormatter) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search {

import com.coremedia.cap.content.ContentTypeNames;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class SearchWidgetTitleFormatter {
  /**
   * Return a human readable string that concisely describes a search with the
   * given parameters.
   *
   * @param searchText the text to search for
   * @param contentType the limiting content type
   * @param preferredSite whether the search is restricted to the preferred site
   *   (null: not applicable; true: preferred site; false: entire repository)
   * @return the description
   * /
  public static*/ function formatTextType$static(searchText/*:String*/, contentType/*:String*/, preferredSite/*:* = null*/)/*:String*/ {if(arguments.length<=2)preferredSite=null;
    if (!contentType) {
      contentType = com.coremedia.cap.content.ContentTypeNames.DOCUMENT;
    }
    var contentTypeName/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(contentType);

    var result/*:String*/;
    if (searchText) {
      result = "'" + searchText + "' (" + contentTypeName + ")";
    } else {
      result =  contentTypeName;
    }
    if (preferredSite === false) {
      result = result + " " + mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SearchWidgetTitleFormatter_entireRepository_text');
    }
    return result;
  }/*
}*/function SearchWidgetTitleFormatter$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: SearchWidgetTitleFormatter$,
      statics: {formatTextType: formatTextType$static},
      requires: [
        "com.coremedia.cap.content.ContentTypeNames",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"]
    };
});
