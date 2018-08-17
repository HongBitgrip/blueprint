Ext.define("com.coremedia.cms.editor.sdk.util.ContentCreationUtil", function(ContentCreationUtil) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentCreateResult;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResultImpl;
import com.coremedia.cms.editor.sdk.components.folderprompt.FolderPrompt;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal;
import com.coremedia.cms.editor.sdk.util.StringHelper;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.error.remoteErrorHandlerRegistry;
import com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.EventUtil;

import ext.StringUtil;
import ext.window.MessageBoxWindow;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.EditorErrors')]
public class ContentCreationUtil {
  private static const*/var LAST_USED_NO_SITE_ID$static/*:String*/ = 'NO_SITE';/*
  private static const*/var LAST_USED_ALL_SITES_ID$static/*:String*/ = 'ALL';/*
  private static const*/var LAST_USED_MAX_ENTRIES$static/*:int*/ = 5;/*

  private static*/ var contentRepository$static/*:ContentRepository*/;/* =*/function contentRepository$static_(){contentRepository$static=( com.coremedia.cap.common.SESSION.getConnection().getContentRepository());};/*
  private static*/ var lastUsedBean$static/*:Bean*/;/* =*/function lastUsedBean$static_(){lastUsedBean$static=( com.coremedia.ui.data.beanFactory.createLocalBean());};/*

  /**
   * Create all required folders for a given path that are currently not present in the repository yet. For example,
   * if path is <code>/a/b/c/d/e</code>, and only the folder <code>/a/b</code> exists, this method will create the
   * folders <code>c</code>, <code>d</code>, and <code>e</code>.
   * @param path the path to create required subfolders for
   * @param callback a function that is called upon completion of the method, successful or not.
   *   Signature: <code>function(result:FolderCreationResult):void</code>
   * @param promptOnCreation when true, a modal dialog is displayed that asks the user to confirm that at least
   *   one subfolder needs to be created
   * /
  public static*/ function createRequiredSubfolders$static(path/*:String*/, callback/*:Function*/, promptOnCreation/*:Boolean = false*/)/*:void*/ {if(arguments.length<=2)promptOnCreation=false;
    determineFolders$static(path, function (baseFolder/*:Content*/, toCreate/*:Array*/)/*:void*/ {
      if (promptOnCreation && toCreate.length > 0) {
        var prompt/*:FolderPrompt*/ = new com.coremedia.cms.editor.sdk.components.folderprompt.FolderPrompt(AS3.cast(com.coremedia.cms.editor.sdk.components.folderprompt.FolderPrompt,{
          baseFolder:baseFolder,
          callback:callback,
          folders:toCreate
        }));
        prompt.show();
      }
      else {
        ContentCreationUtil.doCreateFolder(baseFolder, toCreate, callback, []);
      }
    }, null);
  }/*

  /**
   * Convenience method to create content. This method creates content, opens it in a new tab, runs initializers if
   * one is found for the given document Type, and updates the registry of last used folders that is used by the
   * @param folder the base folder to create content in
   * @param name the name of the document to be created
   * @param type the type of the document to be created
   * @param callback a function that is called upon completion of the content creation process.
   *   Signature: <code>function(createdContent:Content):void</code>
   * /
  public static*/ function createContent$static(folder/*:Content*/, openInTab/*:Boolean*/, skipInitializers/*:Boolean*/, name/*:String*/, type/*:ContentType*/, callback/*:Function*/, callback_error/*:Function = null*/, properties/*:Object = null*/)/*:void*/ {switch(Math.max(arguments.length,6)){case 6:callback_error=null;case 7:properties=null;}
    name = com.coremedia.cms.editor.sdk.util.StringHelper.trim(name, com.coremedia.cms.editor.sdk.util.StringHelper.stringToCharacter(' '));
    type.createWithProperties(folder, name, properties || {}, function (result/*:ContentCreateResult*/)/*:void*/ {
      if (!result.error) {
        var createdContent/*:Content*/ = result.createdContent;
        createdContent.load(function (c/*:Content*/)/*:void*/ {
          if (!skipInitializers) {
            var initializer/*:Function*/ = com.coremedia.cms.editor.sdk.editorContext.lookupContentInitializer(createdContent.getType());
            if (initializer) {
              initializer(createdContent);
            }
          }

          storeLastUsedFolder$static(createdContent);

          if (openInTab) {
            com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(createdContent);
          }
          callback(createdContent);
        });
      }
      else {
        if(callback_error) {
          callback_error(result.error);
        }
        if (!result.error.isHandled()) {
          (AS3.as(com.coremedia.ui.data.error.remoteErrorHandlerRegistry,  com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl)).handleError(result.error, null);
        }

      }
    });
  }/*

  /**
   * Convenience method to initialize already created content. This method runs initializers if
   * one is found for the given document Type.
   * /
  public static*/ function initialize$static(content/*:Content*/)/*:void*/ {
    var initializer/*:Function*/ = com.coremedia.cms.editor.sdk.editorContext.lookupContentInitializer(content.getType());
    if (initializer) {
      initializer(content);
    }
  }/*

  /**
   * Convenience method to initialize and show already created content. This method opens it in a new tab, runs initializers if
   * one is found for the given document Type.
   * /
  public static*/ function initializeAndShow$static(content/*:Content*/)/*:void*/ {
    ContentCreationUtil.initialize(content);
    // If no initializer ran, the flush is a no-op, but still calls the callback.
    content.flush(function()/*:void*/ {
      // The initial content has been written to the server. It should be possible to show the preview now.
      com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(content);
    });
  }/*

  private static*/ function storeLastUsedFolder$static(createdContent/*:Content*/)/*:void*/ {
    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:**/ {
      var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(createdContent);
      var contentType/*:ContentType*/ = createdContent.getType();
      var folder/*:Content*/ = createdContent.getParent();

      if (site === undefined) {
        return undefined;
      }

      if (!createdContent.isLoaded()) {
        createdContent.load();
        return undefined;
      }

      var id/*:String*/ = site ? site.getId() : LAST_USED_NO_SITE_ID$static;
      var contentTypeName/*:String*/ = contentType.getName();
      var path/*:String*/ = folder.getPath();

      if (path === undefined) {
        return undefined;
      }

      ContentCreationUtil.updateLastUsedBean(id, contentTypeName, path);
      ContentCreationUtil.updateLastUsedBean(LAST_USED_ALL_SITES_ID$static, contentTypeName, path);

      return null;
    }).loadValue(function()/*:void*/{});
  }/*

  public static*/ function updateLastUsedBean$static(siteId/*:String*/, contentType/*:String*/, path/*:String*/)/*:void*/ {
    if(!siteId) {
      siteId = LAST_USED_NO_SITE_ID$static;
    }

    var lastUsedExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create(
            siteId.concat('.', contentType), lastUsedBean$static);
    var lastUsed/*:Array*/ = com.coremedia.ui.util.ArrayUtils.asArray(lastUsedExpression.getValue());

    lastUsed = lastUsed.filter(function (obj/*:Object*/)/*:Boolean*/ {
      return obj.path !== path;
    });

    if (lastUsed.length >= LAST_USED_MAX_ENTRIES$static) {
      lastUsed = lastUsed.slice(0, LAST_USED_MAX_ENTRIES$static);
    }

    lastUsed.unshift({
      'path': path,
      'timestamp': new Date().getTime()
    });

    lastUsedExpression.setValue(lastUsed);
  }/*

  /**
   * Return an array that contains the paths of the folders in which the user has created documents of the given type.
   * These are kept track of by the FolderCombo, which inserts the last used folders per document type. Note
   * that content created via the library tree view does not update this store.
   * When the user has set a preferred site, the last used folders are filtered, so that only those folders are returned
   * that are part of the user's preferred site or not part of any site.
   * @param contentType the content type
   * @return an array containing the paths of the least recently used 5 folders for the document type, newest first
   * /
  public static*/ function getLastUsedFolders$static(contentType/*:ContentType*/)/*:Array*/ {
    var contentTypeName/*:String*/ = contentType.getName();
    var preferredSiteId/*:String*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteId();

    var lastUsed/*:Array*/;

    if (preferredSiteId) {
      var lastUsedInSite/*:Array*/ = getLastUsedFoldersForSiteAndType$static(preferredSiteId, contentTypeName);
      var lastUsedNoSite/*:Array*/ = getLastUsedFoldersForSiteAndType$static(LAST_USED_NO_SITE_ID$static, contentTypeName);

      lastUsed = lastUsedInSite.concat(lastUsedNoSite).sort(compareTimestamp$static);
    } else {
      lastUsed = getLastUsedFoldersForSiteAndType$static(LAST_USED_ALL_SITES_ID$static, contentTypeName);
    }

    if (lastUsed.length > LAST_USED_MAX_ENTRIES$static) {
      lastUsed = lastUsed. slice(0, LAST_USED_MAX_ENTRIES$static);
    }

    return lastUsed.map(function(obj/*:Object*/)/*:String*/ {
      return obj.path;
    });
  }/*

  private static*/ function getLastUsedFoldersForSiteAndType$static(siteId/*:String*/, contentType/*:String*/)/*:Array*/ {
    return com.coremedia.ui.util.ArrayUtils.asArray(com.coremedia.ui.data.ValueExpressionFactory.create(
            siteId.concat('.', contentType), lastUsedBean$static).getValue());
  }/*

  private static*/ function compareTimestamp$static(a/*:Object*/, b/*:Object*/)/*:Number*/ {
    if (a.timestamp > b.timestamp) return -1;
    if (a.timestamp < b.timestamp) return 1;
    if (a.timestamp === b.timestamp) return 0;
  }/*

  /**
   * Convenience method to create a "post-processor" function that can be used as an "onSuccess" callback function
   * for the quick create window to add created content to a linklist
   * @param sourceLinklist a value expression pointing to a linklist property to add the created content to
   * @return a function that takes content as its only parameter, and when called, adds that content to the linklist as
   *   configured through the parameter sourceLinklist
   * /
  public static*/ function linkInSourceLinklistHandler$static(sourceLinklist/*:ValueExpression*/, openInTab/*:Boolean = false*/)/*:Function*/ {if(arguments.length<=1)openInTab=false;
    return function (created/*:Content*/)/*:void*/ {
      var oldValue/*:Array*/ =AS3.as( sourceLinklist.getValue(),  Array);
      sourceLinklist.setValue(oldValue.concat(created));
      if (openInTab) {
        com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
          com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(created);
        });
      }
    };
  }/*

  public static*/ function doCreateFolder$static(folder/*:Content*/, toCreate/*:Array*/, callback/*:Function*/, created/*:Array*/)/*:void*/ {
    var name/*:String*/ = toCreate.pop();
    if (name) {
      contentRepository$static.getFolderContentType().create(folder, name, function (result/*:ContentCreateResult*/)/*:void*/ {
        if (result.error) {
          callback(new com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResultImpl(false, created, null, result.error));
        }
        else {
          result.createdContent.load(function ()/*:void*/ {
            created.push(result.createdContent);
            ContentCreationUtil.doCreateFolder(result.createdContent, toCreate, callback, created);
          });
        }
      });
    }
    else {
      callback(new com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResultImpl(true, created, folder));
    }
  }/*

  private static*/ function determineFolders$static(path/*:String*/, callback/*:Function*/, toCreate/*:Array*/)/*:void*/ {
    if(!toCreate) {
      toCreate = [];
    }
    contentRepository$static.getChild(path, function (folder/*:Content*/)/*:void*/ {
      if (!folder) {
        var newPath/*:String*/ = path.substr(0, path.lastIndexOf('/'));
        toCreate.push(path.substr(path.lastIndexOf('/') + 1));
        determineFolders$static(newPath, callback, toCreate);
      }
      else {
        if (folder.isDocument()) {
          var title/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'duplicateName_title');
          var text/*:String*/ = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'duplicateName_message'), folder.getName());
          com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(title, text, Ext.window.MessageBox.ERROR, Ext.window.MessageBox.OK, null, true, true);
        }
        else {
          folder.load(function ()/*:void*/ {
            callback(folder, toCreate);
          });
        }
      }
    });
  }/*
}*/function ContentCreationUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentCreationUtil$,
      statics: {
        contentRepository: undefined,
        lastUsedBean: undefined,
        createRequiredSubfolders: createRequiredSubfolders$static,
        createContent: createContent$static,
        initialize: initialize$static,
        initializeAndShow: initializeAndShow$static,
        updateLastUsedBean: updateLastUsedBean$static,
        getLastUsedFolders: getLastUsedFolders$static,
        linkInSourceLinklistHandler: linkInSourceLinklistHandler$static,
        doCreateFolder: doCreateFolder$static,
        __initStatics__: function() {
          contentRepository$static_();
          lastUsedBean$static_();
        }
      },
      requires: [
        "Ext.String",
        "Ext.window.MessageBox",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.EditorErrors_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.error.remoteErrorHandlerRegistry",
        "com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.EventUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResultImpl",
        "com.coremedia.cms.editor.sdk.components.folderprompt.FolderPrompt",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal",
        "com.coremedia.cms.editor.sdk.util.StringHelper"
      ]
    };
});
