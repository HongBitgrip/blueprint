Ext.define("com.coremedia.cap.content.impl.ContentRepositoryImpl", function(ContentRepositoryImpl) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentObject;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.authorization.AccessControl;
import com.coremedia.cap.content.authorization.impl.AccessControlImpl;
import com.coremedia.cap.content.publication.PublicationService;
import com.coremedia.cap.content.publication.impl.PublicationServiceImpl;
import com.coremedia.cap.content.results.impl.QueryResultImpl;
import com.coremedia.cap.content.search.SearchService;
import com.coremedia.cap.content.search.impl.SearchServiceImpl;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.error.NotReadableError;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.BlobImpl;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.data.impl.URITemplate;

[RestResource(uriTemplate="content")]
public class ContentRepositoryImpl extends RemoteBeanImpl implements ContentRepositoryInternal {

  public static const FOLDER_CONTENT_TYPE:String = "Folder_";

  public static const RESOURCE_NAME_MAX_LENGTH:int = 233;

  private static const*/var UNREADABLE$static/*:String*/ = "unreadable";/*
  private static const*/var error403$static/*:RemoteError*/;/* =*/function error403$static_(){error403$static=( new com.coremedia.ui.data.error.RemoteError({message: 'Forbidden', method: 'GET', errorCode: 'UNKNOWN', errorName: 'UNKNOWN', status: 403}));};/*
  private static const*/var error404$static/*:RemoteError*/;/* =*/function error404$static_(){error404$static=( new com.coremedia.ui.data.error.RemoteError({message: 'Not found', method: 'GET', errorCode: 'UNKNOWN', errorName: 'UNKNOWN', status: 404}));};/*

  private var diffService:RemoteServiceMethod;
  private var diffMarkupService:RemoteServiceMethod;
  private var searchService:SearchService;
  private var publicationService:PublicationService;
  private var accessControl:AccessControl;

  private var referrersUriTemplate:URITemplate;
  private var referrersWithDescriptorUriTemplate:URITemplate;

  public*/ function ContentRepositoryImpl$(path/*:String*/) {
    this.super$0bbS(path);
    this.searchService$0bbS = new com.coremedia.cap.content.search.impl.SearchServiceImpl(this);
    this.publicationService$0bbS = new com.coremedia.cap.content.publication.impl.PublicationServiceImpl(this);
    this.accessControl$0bbS = new com.coremedia.cap.content.authorization.impl.AccessControlImpl(this);
    this.diffService$0bbS = new com.coremedia.ui.data.impl.RemoteServiceMethod(path + "/diff", "GET");
    this.diffMarkupService$0bbS = new com.coremedia.ui.data.impl.RemoteServiceMethod(path + "/diff/markup", "GET");
    // TODO: only add listener the first time someone asks for any of the derived properties?
    this.addPropertyChangeListener('contentTypes',AS3.bind( this,"contentTypesChanged$0bbS"));
  }/*

  public*/ function getReferrersUriTemplate()/*:URITemplate*/ {
    if (!this.referrersUriTemplate$0bbS) {
      var referrersUriTemplateString/*:String*/ = this.get("referrersUriTemplate");
      if (referrersUriTemplateString) {
        this.referrersUriTemplate$0bbS = new com.coremedia.ui.data.impl.URITemplate(referrersUriTemplateString);
      }
    }
    return this.referrersUriTemplate$0bbS;
  }/*

  public*/ function getReferrersWithDescriptorUriTemplate()/*:URITemplate*/ {
    if (!this.referrersWithDescriptorUriTemplate$0bbS) {
      var referrersWithDescriptorUriTemplateString/*:String*/ = this.get("referrersWithDescriptorUriTemplate");
      if (referrersWithDescriptorUriTemplateString) {
        this.referrersWithDescriptorUriTemplate$0bbS = new com.coremedia.ui.data.impl.URITemplate(referrersWithDescriptorUriTemplateString);
      }
    }
    return this.referrersWithDescriptorUriTemplate$0bbS;
  }/*

  public*/ function getRoot()/*:Content*/ {
    return this.get('root');
  }/*

  public*/ function getBaseHomeFolder()/*:Content*/ {
    return this.get('baseHomeFolder');
  }/*

  public*/ function getContentContentType()/*:ContentType*/ {
    return this.get('contentContentType');
  }/*

  public*/ function getFolderContentType()/*:ContentType*/ {
    return this.get('folderContentType');
  }/*

  public*/ function getDocumentContentType()/*:ContentType*/ {
    return this.get('documentContentType');
  }/*

  public*/ function getContentTypes()/*:Array*//* Vector.<ContentType> */ {
    return this.get('contentTypes');
  }/*

  public*/ function getDocumentTypes()/*:Array*//* Vector.<ContentType> */ {
    return this.get('documentTypes');
  }/*

  public*/ function getConcreteDocumentTypes()/*:Array*//* Vector.<ContentType> */ {
    return this.get('concreteDocumentTypes');
  }/*

  public*/ function getContentTypesByName()/*:Object*/ {
    return this.get('contentTypesByName');
  }/*

  public*/ function getContentType(name/*:String*/)/*:ContentType*/ {
    var contentTypesByName/*:Object*/ = this.getContentTypesByName();
    if (!contentTypesByName) {
      return undefined;
    }
    return contentTypesByName[name] ||AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(name),  com.coremedia.cap.content.ContentType);
  }/*

  private*/ function contentTypesChanged()/*:void*/{
    var contentTypes/*:Array*//* Vector.<ContentType> */ = this.getContentTypes();
    if(contentTypes) {
      contentTypes.forEach(function(contentType/*:ContentTypeImpl*/)/*:void*/ {
        contentType.init();
      });
      // also set derived properties:
      this.setInternalProperties({
        'documentTypes':         contentTypes.filter(AS3.bind(this,"isDocumentType$0bbS")),
        'concreteDocumentTypes': contentTypes.filter(isConcreteDocumentType$static),
        'contentTypesByName':    this.computeContentTypesByName$0bbS(contentTypes)
      });
    }
  }/*

  private*/ function isDocumentType(contentType/*:RemoteBean*/)/*:Boolean*/ {
    return contentType !== this.getFolderContentType() && contentType !== this.getContentContentType();
  }/*

  private static*/ function isConcreteDocumentType$static(contentType/*:ContentType*/)/*:Boolean*/ {
    return contentType.isConcrete() && (contentType.getName() !== ContentRepositoryImpl.FOLDER_CONTENT_TYPE);
  }/*

  private*/ function computeContentTypesByName(contentTypes/*:Array*//* Vector.<ContentType> */)/*:Object*/ {
    var contentTypesByName/*:Object*/ = {};
    contentTypes.forEach(function(contentType/*:ContentType*/)/*:void*/ {
      contentTypesByName[contentType.getName()] = contentType;
    });
    return contentTypesByName;
  }/*

  public*/ function getContent(uriPath/*:String*/)/*:Content*/ {
    return AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(uriPath),  com.coremedia.cap.content.Content);
  }/*

  public*/ function getChild(path/*:String = "/"*/, callback/*:Function = null*/, folder/*:Content = null*/)/*:Content*/ {switch(arguments.length){case 0:path="/";case 1:callback=null;case 2:folder=null;}
    if (!callback) {
      return this.getChildNow$0bbS(path, folder);
    }

    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getChildNowNoException$0bbS"), path, folder).loadValue(function (result/*:Object*/)/*:void*/ {
      var absolutePath/*:String*/ = path.charAt(0) !== '/'
              ? (folder ? folder.getUriPath() + '/' + path : path)
              : path;
      if (result === null) {
        callback(null, absolutePath, error404$static);
      } else if (result === UNREADABLE$static) {
        callback(null, absolutePath, error403$static);
      } else {
        callback(result, null, null);
      }
    });
    return undefined;
  }/*

  private*/ function getChildNowNoException(path/*:String*/, folder/*:Content*/)/*:Object*/ {
    var childNow/*:Content*/;
    try {
      childNow = this.getChildNow$0bbS(path, folder);
    } catch(e){if(AS3.is(e,com.coremedia.ui.data.error.NotReadableError)) {
      return UNREADABLE$static;
    }else throw e;}

    // Ensure that childNow is actually readable (emulate old lookup semantics)
    if (childNow) {
      if (childNow.getState() === com.coremedia.ui.data.BeanState.UNKNOWN) {
        childNow.load();
        return undefined;
      }
      if (!childNow.getState().readable) {
        return UNREADABLE$static;
      }
    }
    return childNow;
  }/*

  private*/ function getChildNow(path/*:String*/, folder/*:Content*/)/*:Content*/ {
    var currentContent/*:Content*/;
    if (path.charAt(0) === '/' || !folder) {
      currentContent = this.getRoot();
    } else {
      currentContent = folder;
    }
    var pathArcs/*:Array*/ = path.split('/');
    for/* each*/ (var $1=0;$1</* in*/ pathArcs.length;++$1) {var arc/*:String*/ =pathArcs[$1];
      if (!currentContent) {
        break;
      }
      if (!currentContent.isLoaded()) {
        currentContent.load();
        return undefined;
      }
      if (arc && arc !== ".") {
        if (arc === "..") {
          currentContent = currentContent.getParent();
        } else {
          var childrenByName/*:Object*/ = currentContent.getChildrenByName();
          if (childrenByName === undefined) {
            return undefined;
          }
          currentContent = childrenByName[arc] || null;
        }
      }
    }
    return currentContent;
  }/*

  /**
   * Compute differences between start and end object and invoke the callback
   * with a single object that maps property names to difference objects.
   *
   * @param start the start object
   * @param end the end object
   * @param callback the callback
   *
   * @see Difference
   * /
  public*/ function diff(start/*:ContentObject*/, end/*:ContentObject*/, callback/*:Function*/)/*:void*/ {
    if (!start || !end || !callback) {
      throw new AS3.Error("Missing argument");
    }
    this.diffService$0bbS.request({
      start: start,
      end: end
    }, function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      callback(response.getResponseJSON());
    }, function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      var error/*:RemoteError*/ = response.getError();
      callback(null, error);
    });
  }/*

  public*/ function diffMarkup(start/*:ContentObject*/, end/*:ContentObject*/, propertyName/*:String*/, callback/*:Function*/)/*:void*/ {
    if (!start || !end || !propertyName || !callback) {
      throw new AS3.Error("Missing argument");
    }
    this.diffMarkupService$0bbS.request({
      start: start,
      end: end,
      propertyName: propertyName
    }, function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      if (response.response.status === 204) {
        callback(null);
      } else {
        var responseText/*:String*/ = response.response.responseText;
        var blob/*:Blob*/ = com.coremedia.ui.data.impl.BlobImpl.create(null, responseText);
        callback(blob);
      }
    }, function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      var error/*:RemoteError*/ = response.getError();
      callback(null, error);
    });
  }/*

  public*/ function getPreviewControllerUriPattern()/*:String*/ {
    return this.get('previewControllerUriPattern');
  }/*

  public*/ function useStrictWorkflow()/*:Boolean*/ {
    return this.get('useStrictWorkflow');
  }/*

  /**
   * Return a list of valid preview origins.
   * @return
   * /
  internal*/ function getPreviewUrlWhitelist()/*:Array*/ {
    return this.get('previewUrlWhitelist');
  }/*

  /**
   * Return a list of supported time zones of the Coremedia Studio.
   * The format of the time zone strings depends on the configuration.
   * @return A list of supported and selectable time zones
   * /
  public*/ function getTimeZones()/*:Array*/ {
    return this.get('timeZones');
  }/*

  /**
   * Return the default time zone for this Studio installation.
   * @return Default time zone as string
   * /
  public*/ function getDefaultTimeZone()/*:String*/ {
    return this.get('defaultTimeZone');
  }/*


  public*/ function getAvailableLocalesContentPath()/*:String*/ {
    return this.get('availableLocalesContentPath');
  }/*
  
  public*/ function getAvailableLocalesPropertyPath()/*:String*/ {
    return this.get('availableLocalesPropertyPath');
  }/*

  public*/ function getValidatedActionLevel()/*:String*/ {
    return this.get('validatedActionLevel');
  }/*

  public*/ function getSearchService()/*:SearchService*/ {
    return this.searchService$0bbS;
  }/*

  public*/ function getPublicationService()/*:PublicationService*/ {
    return this.publicationService$0bbS;
  }/*

  public*/ function getAccessControl()/*:AccessControl*/ {
    return this.accessControl$0bbS;
  }/*

  /**
   * A content repository does not change its state. Ignore the
   * invalidation. Call the callback, if given.
   *
   * @param callback the optional callback
   * /
  override public*/ function invalidate(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    // The content repository does not change (or at least we do not react to
    // changes within the Studio). Swallow all invalidations.
    if (callback) {
      callback(this);
    }
  }/*

  public*/ function copyRecursivelyTo(sources/*:Array*/, target/*:Content*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=2)callback=null;
    new com.coremedia.cap.content.impl.BulkCopyMethod(this, sources,  target, callback).execute();
  }/*

  public*/ function moveTo(contents/*:Array*/, target/*:Content*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=2)callback=null;
    new com.coremedia.cap.content.impl.BulkMoveMethod(this, contents,  target, callback).execute();
  }/*

  public*/ function checkInAll(contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    new com.coremedia.cap.content.impl.BulkCheckInMethod(this, contents, callback).execute();
  }/*

  public*/ function revertAll(contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    new com.coremedia.cap.content.impl.BulkRevertMethod(this, contents, callback).execute();
  }/*

  public*/ function deleteAll(contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    new com.coremedia.cap.content.impl.BulkDeleteMethod(this, contents, callback).execute();
  }/*

  public*/ function isValidName(resourceName/*:String*/)/*:Boolean*/ {
    var rNameAsObject/*:**/ = resourceName; // use for trim

    return resourceName &&
            resourceName.length > 0 &&
            resourceName.length <= ContentRepositoryImpl.RESOURCE_NAME_MAX_LENGTH &&
            resourceName !== "." &&
            resourceName !== ".." &&
            resourceName.indexOf("/") === -1 &&
            resourceName === rNameAsObject.trim();

  }/*

  public*/ function undeleteAll(contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    new com.coremedia.cap.content.impl.BulkUndeleteMethod(this, contents, callback).execute();
  }/*

  public*/ function query(callback/*:Function*/, query/*:String*/)/*:void*/ {
    new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/query", "GET").request({query: query},
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              callback(com.coremedia.cap.content.results.impl.QueryResultImpl.fromResponse(response));
            });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.content.impl.ContentRepositoryInternal"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "content"
        ]
      ]},
      diffService$0bbS: null,
      diffMarkupService$0bbS: null,
      searchService$0bbS: null,
      publicationService$0bbS: null,
      accessControl$0bbS: null,
      referrersUriTemplate$0bbS: null,
      referrersWithDescriptorUriTemplate$0bbS: null,
      constructor: ContentRepositoryImpl$,
      super$0bbS: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getReferrersUriTemplate: getReferrersUriTemplate,
      getReferrersWithDescriptorUriTemplate: getReferrersWithDescriptorUriTemplate,
      getRoot: getRoot,
      getBaseHomeFolder: getBaseHomeFolder,
      getContentContentType: getContentContentType,
      getFolderContentType: getFolderContentType,
      getDocumentContentType: getDocumentContentType,
      getContentTypes: getContentTypes,
      getDocumentTypes: getDocumentTypes,
      getConcreteDocumentTypes: getConcreteDocumentTypes,
      getContentTypesByName: getContentTypesByName,
      getContentType: getContentType,
      contentTypesChanged$0bbS: contentTypesChanged,
      isDocumentType$0bbS: isDocumentType,
      computeContentTypesByName$0bbS: computeContentTypesByName,
      getContent: getContent,
      getChild: getChild,
      getChildNowNoException$0bbS: getChildNowNoException,
      getChildNow$0bbS: getChildNow,
      diff: diff,
      diffMarkup: diffMarkup,
      getPreviewControllerUriPattern: getPreviewControllerUriPattern,
      useStrictWorkflow: useStrictWorkflow,
      getPreviewUrlWhitelist: getPreviewUrlWhitelist,
      getTimeZones: getTimeZones,
      getDefaultTimeZone: getDefaultTimeZone,
      getAvailableLocalesContentPath: getAvailableLocalesContentPath,
      getAvailableLocalesPropertyPath: getAvailableLocalesPropertyPath,
      getValidatedActionLevel: getValidatedActionLevel,
      getSearchService: getSearchService,
      getPublicationService: getPublicationService,
      getAccessControl: getAccessControl,
      invalidate: invalidate,
      copyRecursivelyTo: copyRecursivelyTo,
      moveTo: moveTo,
      checkInAll: checkInAll,
      revertAll: revertAll,
      deleteAll: deleteAll,
      isValidName: isValidName,
      undeleteAll: undeleteAll,
      query: query,
      statics: {
        FOLDER_CONTENT_TYPE: "Folder_",
        RESOURCE_NAME_MAX_LENGTH: 233,
        error403: undefined,
        error404: undefined,
        __initStatics__: function() {
          error403$static_();
          error404$static_();
        }
      },
      requires: [
        "AS3.Error",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cap.content.impl.ContentRepositoryInternal",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.error.NotReadableError",
        "com.coremedia.ui.data.error.RemoteError",
        "com.coremedia.ui.data.impl.BlobImpl",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.data.impl.URITemplate"
      ],
      uses: [
        "com.coremedia.cap.content.authorization.impl.AccessControlImpl",
        "com.coremedia.cap.content.impl.BulkCheckInMethod",
        "com.coremedia.cap.content.impl.BulkCopyMethod",
        "com.coremedia.cap.content.impl.BulkDeleteMethod",
        "com.coremedia.cap.content.impl.BulkMoveMethod",
        "com.coremedia.cap.content.impl.BulkRevertMethod",
        "com.coremedia.cap.content.impl.BulkUndeleteMethod",
        "com.coremedia.cap.content.publication.impl.PublicationServiceImpl",
        "com.coremedia.cap.content.results.impl.QueryResultImpl",
        "com.coremedia.cap.content.search.impl.SearchServiceImpl"
      ]
    };
});
