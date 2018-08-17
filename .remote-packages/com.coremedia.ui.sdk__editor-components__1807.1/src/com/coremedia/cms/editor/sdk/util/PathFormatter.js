Ext.define("com.coremedia.cms.editor.sdk.util.PathFormatter", function(PathFormatter) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SitesService;

/**
 * Utility class for handling multi site content
 * and their path information.
 * /
[PublicApi]
public class PathFormatter {

  /**
   * Formats the path for a site.
   * If the given path is relative, the preferred site root folder will be used as prefix.
   * If the content parameter is set, the site root folder of the content's site will be used instead.
   * @param path    The path that should be formatted, may be relative.
   * @param content The optional content to determine the preferred site.
   * @return The formatted paths or the original if the path has a leading slash.
   * /
  public static*/ function formatSitePath$static(path/*:String*/, content/*:Content = undefined*/)/*:String*/ {
    if (path.indexOf('/') === 0) {
      return path;
    }

    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var site/*:Site*/ = content
            ? sitesService.getSiteFor(content)
            : sitesService.getPreferredSite();

    if (site) {
      var sitePath/*:String*/ = site.getSiteRootFolder().getPath();
      return sitePath + '/' + path;
    }
    return null;
  }/*
}*/function PathFormatter$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: PathFormatter$,
      statics: {formatSitePath: formatSitePath$static},
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
