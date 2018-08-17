Ext.define("com.coremedia.cms.editor.sdk.util.ContentUtilImpl", function(ContentUtilImpl) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.results.QueryResult;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.ExecuteEventually;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ContentUtilImpl implements IContentUtil {
  private static const*/var BELOW_FOLDER_QUERY_PATTERN$static/*:String*/ = "TYPE Document_ : BELOW ID '{0}'{1}";/*

  public native function set expandFolderLimit(limit:uint):void;
  public native function get expandFolderLimit():uint;

  public*/ function expandFolders(callback/*:Function, ...contents*/)/*:void*/ {var this$=this;var contents=Array.prototype.slice.call(arguments,1);
    var documents/*:Array*/ = [];
    var folders/*:Array*/ = [];

    var contentArray/*:Array*/ = com.coremedia.ui.util.ArrayUtils.flatten(contents);

    contentArray.forEach(function (content/*:Content*/)/*:Boolean*/ {
      if (content.isFolder()) {
        folders.push(content);
      } else {
        documents.push(content);
      }
    });

    computeDocumentsBelowFolders$static(
            function (folderDocuments/*:Array*/)/*:void*/ {
              var limit/*:uint*/ = this$.expandFolderLimit;
              if (limit && folderDocuments.length > limit) {
                com.coremedia.ui.logging.Logger.info(com.coremedia.cms.editor.sdk.util.FormatUtil.format("expandFolderLimit exceeded (limit: '{0}'); configurable via ContentUtilConfigurationPlugin", limit));
                com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(
                        mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'ExpandFolderLimit_exceeded_title'),
                        com.coremedia.cms.editor.sdk.util.FormatUtil.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'ExpandFolderLimit_exceeded_text'), limit));
                callback([]);
              } else {
                callback(com.coremedia.ui.util.ArrayUtils.unique(documents.concat(folderDocuments)));
              }
            },
            this.expandFolderLimit > 0 ? this.expandFolderLimit + 1 : 0,
            folders);
  }/*

  /**
   * Computes the multiset of documents below the given folders (at any level).
   *
   * @param callback the callback function ( signature: function(documents:Array):void )
   * @param limit the maximum amount of documents a folder is expanded to; 0 means unlimited
   * @param folders the given set of folders
   * /
  private static*/ function computeDocumentsBelowFolders$static(callback/*:Function*/, limit/*:uint, ...folders*/)/*:void*/ {var folders=Array.prototype.slice.call(arguments,2);
    var documents/*:Array*/ = [];

    var executeEventually/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(function ()/*:void*/ {
      callback(documents);
    });

    var folderArray/*:Array*/ = com.coremedia.ui.util.ArrayUtils.flatten(folders);

    folderArray.forEach(function (folder/*:Content*/)/*:void*/ {
      executeEventually.delay();

      folder.getRepository().query(
              function (result/*:QueryResult*/)/*:void*/ {
                if (result.error) {
                  com.coremedia.ui.logging.Logger.error(result.error.toString());
                } else {
                  documents = documents.concat(result.items);
                }
                executeEventually.proceed();
              },
              Ext.String.format(BELOW_FOLDER_QUERY_PATTERN$static,
                      folder.getId(),
                      limit > 0 ? ' LIMIT ' + limit : ''));
    });

    executeEventually.proceed();
  }/*
}*/function ContentUtilImpl$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.util.IContentUtil"],
      expandFolders: expandFolders,
      constructor: ContentUtilImpl$,
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.util.IContentUtil",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.ExecuteEventually",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.util.FormatUtil",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
