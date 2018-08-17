Ext.define("com.coremedia.blueprint.base.components.util.ContentLookupUtil", function(ContentLookupUtil) {/*package com.coremedia.blueprint.base.components.util {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;

public class ContentLookupUtil {
  public static*/ function findContentsOfTypeInPaths$static(paths/*:Array*/, contentTypes/*:Array*/, referenceContent/*:Content*/)/*:Array*/ {
    var result/*:Array*/ = [];

    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(referenceContent);
    if (site === undefined) {
      result = undefined;
    }
    var contentRepository/*:ContentRepository*/ = com.coremedia.cms.editor.sdk.editorContext.getSession().getConnection().getContentRepository();
    var siteRootFolder/*:Content*/ = site && site.getSiteRootFolder();
    for/* each*/ (var $2=0;$2</* in*/ paths.length;++$2) {var path/*:String*/ =paths[$2];
      var folder/*:Content*/ = contentRepository.getChild(path['trim'](), null, siteRootFolder);
      if (folder === undefined) {
        result = undefined;
      } else if (folder) {
        var childDocuments/*:Array*/ = folder.getChildDocuments();
        if (childDocuments === undefined) {
          result = undefined;
        } else {
          for/* each*/ (var $1=0;$1</* in*/ childDocuments.length;++$1) {var c/*:Content*/ =childDocuments[$1];
            var childContentType/*:ContentType*/ = c.getType();
            if (childContentType === undefined) {
              result = undefined;
            } else if (result && contentTypes.indexOf(childContentType.getName()) !== -1) {
              result.push(c);
            }
          }
        }
      }
    }
    return result;
  }/*
}*/function ContentLookupUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentLookupUtil$,
      statics: {findContentsOfTypeInPaths: findContentsOfTypeInPaths$static},
      requires: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
