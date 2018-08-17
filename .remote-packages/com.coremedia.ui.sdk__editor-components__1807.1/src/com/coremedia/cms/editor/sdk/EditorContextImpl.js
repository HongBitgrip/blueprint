Ext.define("com.coremedia.cms.editor.sdk.EditorContextImpl", function(EditorContextImpl) {/*package com.coremedia.cms.editor.sdk {

import com.coremedia.cap.common.CapSession;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManager;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerImpl;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanel;
import com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanel;
import com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanel;
import com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanel;
import com.coremedia.cms.editor.sdk.dashboard.DashboardConfiguration;
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetType;
import com.coremedia.cms.editor.sdk.desktop.ContentTabManager;
import com.coremedia.cms.editor.sdk.desktop.EditorMainView;
import com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManager;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRendererRegistry;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRendererRegistryImpl;
import com.coremedia.cms.editor.sdk.shortcuts.KeyboardShortcutManager;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.sites.SitesServiceImpl;
import com.coremedia.cms.editor.sdk.util.Thumbnail;
import com.coremedia.cms.editor.sdk.util.ThumbnailRenderer;
import com.coremedia.cms.editor.sdk.util.ThumbnailRendererBase;
import com.coremedia.cms.editor.sdk.util.ThumbnailResolver;
import com.coremedia.cms.editor.sdk.util.ThumbnailResolverImpl;
import com.coremedia.ui.ckeditor.RichTextArea;
import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.IBeanFactory;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.applicationContext;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.error.IRemoteErrorHandlerRegistry;
import com.coremedia.ui.data.error.remoteErrorHandlerRegistry;
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.util.ThumbnailImage;

import ext.Ext;
import ext.data.field.DataField;
import ext.tab.TabPanel;
import ext.util.MixedCollection;

import joo.getOrCreatePackage;

import js.XMLHttpRequest;

/**
 * @inheritDoc
 * /
public class EditorContextImpl implements IEditorContext {

  private const imageBlobPropertyByDocumentType:Object =*/function imageBlobPropertyByDocumentType_(){this.imageBlobPropertyByDocumentType$uRne=( {});}/*;
  private var defaultRichTextImageType:String = "CMPicture"; // stupid default; just for compatibility
  private const richTextEmbeddableTypes:Object =*/function richTextEmbeddableTypes_(){this.richTextEmbeddableTypes$uRne=( {});}/*;
  private const richTextLinkableTypes:Array =*/function richTextLinkableTypes_(){this.richTextLinkableTypes$uRne=( []);}/*;
  private const thumbnailUriRenderer:Object =*/function thumbnailUriRenderer_(){this.thumbnailUriRenderer$uRne=( {});}/*;
  private const tabTooltipHandlers:Object =*/function tabTooltipHandlers_(){this.tabTooltipHandlers$uRne=( {});}/*;
  private const tabTooltipSkipFlagsHandler:Array =*/function tabTooltipSkipFlagsHandler_(){this.tabTooltipSkipFlagsHandler$uRne=( []);}/*;
  private const initializerByDocumentType:Object =*/function initializerByDocumentType_(){this.initializerByDocumentType$uRne=( {});}/*;
  private var excludedDocumentTypes:Array =*/function excludedDocumentTypes_(){this.excludedDocumentTypes$uRne=( []);}/*;
  private var contentTypesExcludedFromSearch:Array =*/function contentTypesExcludedFromSearch_(){this.contentTypesExcludedFromSearch$uRne=( []);}/*;
  private var contentTypesExcludedFromSearchResult:Array =*/function contentTypesExcludedFromSearchResult_(){this.contentTypesExcludedFromSearchResult$uRne=( []);}/*;
  private var documentTypesHiddenInReferrers:Array =*/function documentTypesHiddenInReferrers_(){this.documentTypesHiddenInReferrers$uRne=( ["EditorPreferences", "Preferences"]);}/*;
  private var documentTypesWithoutPreview:Array =*/function documentTypesWithoutPreview_(){this.documentTypesWithoutPreview$uRne=( ["EditorPreferences", "Preferences", "Query", "Dictionary"]);}/*;
  private var enabledSearchFilterIds:Array =*/function enabledSearchFilterIds_(){this.enabledSearchFilterIds$uRne=( [
    com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanel.FILTER_ID,
    com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanel.FILTER_ID,
    'datefilter-panel-modificationdate',
    'datefilter-panel-publicationdate',
    com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanel.FILTER_ID,
    com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanel.FILTER_ID
  ]);}/*;
  private const previewUrlTransformers:Array =*/function previewUrlTransformers_(){this.previewUrlTransformers$uRne=( []);}/*;
  private var repositoryListViewColumns:Array =*/function repositoryListViewColumns_(){this.repositoryListViewColumns$uRne=( []);}/*;
  private var searchListViewColumns:Array =*/function searchListViewColumns_(){this.searchListViewColumns$uRne=( []);}/*;
  private const listViewDataFields:Array =*/function listViewDataFields_(){this.listViewDataFields$uRne=( []);}/*;
  private static*/ function createDashboardConfiguration$static()/*:DashboardConfiguration*/ {
    var config/*:DashboardConfiguration*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.DashboardConfiguration,{});
    AS3.setBindable(config,"widgets" , []);
    AS3.setBindable(config,"types" , [
            new com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetType(AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetType,{}))
    ]);
    return new com.coremedia.cms.editor.sdk.dashboard.DashboardConfiguration(config);
  }/*
  private var theDashboardConfiguration:DashboardConfiguration =*/function theDashboardConfiguration_(){this.theDashboardConfiguration$uRne=( createDashboardConfiguration$static());}/*;
  private var contentTabManager:ContentTabManager;
  private var workAreaTabManager:WorkAreaTabManager;
  private var workArea:TabPanel;
  private var workAreaTabProxies:WorkAreaTabProxiesTabPanel;
  private var collectionViewManager:CollectionViewManager;
  private var collectionViewModel:CollectionViewModel;
  private var extender:CollectionViewExtender;
  private var sitesService:SitesService;
  private var localesService:LocalesServiceImpl;

  // the global preferences struct
  private var preferences:Struct;

  // flag to enable/disable the default tab state manager
  private var defaultTabStateManagerEnabled:Boolean = true;

  private var metadataNodeRendererRegistry:MetadataNodeRendererRegistry;

  private var translationProcessDefinitions:Array =*/function translationProcessDefinitions_(){this.translationProcessDefinitions$uRne=( []);}/*;

  private var keyboardShortcutManager:KeyboardShortcutManager;
  private var stateBasedPublicationEnabled:Boolean = false;

  private var configuration:Object;
  private var newContentCreationFilters:Object =*/function newContentCreationFilters_(){this.newContentCreationFilters$uRne=( {});}/*;
  private var previewFilters:Object =*/function previewFilters_(){this.previewFilters$uRne=( {});}/*;

  private var thumbnailFinder:ThumbnailResolver;
  private var thumbnailRenderer:ThumbnailRenderer;
  private var thumbnailResolverRegistry:Bean;

  /**
   * Initialize the current editor context instance.
   * /
  public static*/ function initEditorContext$static()/* :void*/ {
    if(!com.coremedia.cms.editor.sdk.editorContext){
      joo.getOrCreatePackage("com.coremedia.cms.editor.sdk").editorContext = new EditorContextImpl();
    }
    com.coremedia.ui.context.ComponentContextManager.getInstance();

    com.coremedia.ui.data.impl.BeanFactoryImpl.initBeanFactory();
    com.coremedia.ui.data.applicationContext.set('editorContext', com.coremedia.cms.editor.sdk.editorContext);
    com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl.initRemoteErrorHandlerRegistry();
  }/*

  /**
   * @private
   * /
  public*/ function EditorContextImpl$() {imageBlobPropertyByDocumentType_.call(this);richTextEmbeddableTypes_.call(this);richTextLinkableTypes_.call(this);thumbnailUriRenderer_.call(this);tabTooltipHandlers_.call(this);tabTooltipSkipFlagsHandler_.call(this);initializerByDocumentType_.call(this);excludedDocumentTypes_.call(this);contentTypesExcludedFromSearch_.call(this);contentTypesExcludedFromSearchResult_.call(this);documentTypesHiddenInReferrers_.call(this);documentTypesWithoutPreview_.call(this);enabledSearchFilterIds_.call(this);previewUrlTransformers_.call(this);repositoryListViewColumns_.call(this);searchListViewColumns_.call(this);listViewDataFields_.call(this);theDashboardConfiguration_.call(this);translationProcessDefinitions_.call(this);newContentCreationFilters_.call(this);previewFilters_.call(this);
  }/*

  public static*/ function getInstance$static()/*:EditorContextImpl*/ {
    return AS3.as( com.coremedia.cms.editor.sdk.editorContext,  EditorContextImpl);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getTabManager()/*:TabManager*/ {
    return new com.coremedia.cms.editor.sdk.TabManagerImpl();
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getContentTabManager()/*:ContentTabManager*/ {
    return this.contentTabManager$uRne;
  }/*

  public*/ function setContentTabManager(contentTabManager/*:ContentTabManager*/)/*:void*/ {
    this.contentTabManager$uRne = contentTabManager;
  }/*

  public*/ function getWorkAreaTabManager()/*:WorkAreaTabManager*/ {
    return this.workAreaTabManager$uRne;
  }/*

  public*/ function setWorkAreaTabManager(workAreaTabManager/*:WorkAreaTabManager*/)/*:void*/ {
    this.workAreaTabManager$uRne = workAreaTabManager;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function registerRichTextEmbeddableType(documentTypeName/*:String*/, property/*:String*/)/*:void*/ {
    this.richTextEmbeddableTypes$uRne[documentTypeName] = property;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getRichTextEmbeddableTypes()/*:Array*/ {
    var types/*:Array*/ = new Array();
    for (var typeName/*:String*/ in this.richTextEmbeddableTypes$uRne) {
      var documentType/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(typeName);
      if(documentType) {
        types.push(documentType);
      }
    }
    return types;
  }/*


  public*/ function registerRichTextLinkableType(documentTypeName/*:String*/)/*:void*/ {
    this.richTextLinkableTypes$uRne.push(documentTypeName);
  }/*

  public*/ function getRichTextLinkableTypes()/*:Array*/ {
    var types/*:Array*/ = new Array();
    for/* each*/(var $1=0;$1</* in*/ this.richTextLinkableTypes$uRne.length;++$1) {var typeName/*:String*/ =this.richTextLinkableTypes$uRne[$1];
      var documentType/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(typeName);
      if(documentType) {
        types.push(documentType);
      }
    }
    return types;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getRichTextDragDropImageBlobProperty(documentTypeName/*:String*/)/*:String*/ {
    return getImageBlobPropertyFromRegistry$static(documentTypeName, this.richTextEmbeddableTypes$uRne);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function registerImageDocumentType(imageDocumentType/*:String*/, imageBlobProperty/*:String*/)/*:void*/ {
    this.imageBlobPropertyByDocumentType$uRne[imageDocumentType] = imageBlobProperty;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function setDefaultRichTextImageDocumentType(documentTypeName/*:String*/)/*:void*/ {
    this.defaultRichTextImageType$uRne = documentTypeName;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getDefaultRichTextImageDocumentType()/*:String*/ {
    return this.defaultRichTextImageType$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getImageBlobProperty(documentTypeName/*:String*/)/*:String*/ {
    return getImageBlobPropertyFromRegistry$static(documentTypeName, this.imageBlobPropertyByDocumentType$uRne);
  }/*

  private static*/ function getImageBlobPropertyFromRegistry$static(documentTypeName/*:String*/, registry/*:Object*/)/*:String*/ {
    var documentType/*:CapType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(documentTypeName);
    while (documentType) {
      var imageBlobProperty/*:String*/ = registry[documentType.getName()];
      if (imageBlobProperty) {
        return imageBlobProperty;
      }
      documentType = documentType.getParent();
    }
    return null;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getExcludedDocumentTypes()/*:Array*/ {
    return this.excludedDocumentTypes$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getContentTypesExcludedFromSearch()/*:Array*/ {
    return this.contentTypesExcludedFromSearch$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getDocumentTypesExcludedFromSearch()/*:Array*/ {
    return this.getContentTypesExcludedFromSearch();
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getContentTypesExcludedFromSearchResult()/*:Array*/ {
    return this.contentTypesExcludedFromSearchResult$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getDocumentTypesExcludedFromSearchResult()/*:Array*/ {
    return this.getContentTypesExcludedFromSearchResult();
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getDocumentTypesHiddenInReferrers()/*:Array*/ {
    return this.documentTypesHiddenInReferrers$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getDocumentTypesWithoutPreview()/*:Array*/ {
    return this.documentTypesWithoutPreview$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getEnabledSearchFilterIds()/*:Array*/ {
    return this.enabledSearchFilterIds$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function setDefaultTabStateManagerEnabled(enable/*:Boolean*/)/*:void*/ {
    this.defaultTabStateManagerEnabled$uRne = enable;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function isDefaultTabStateManagerEnabled()/*:Boolean*/ {
    return this.defaultTabStateManagerEnabled$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function registerContentInitializer(contentTypeName/*:String*/, initializer/*:Function*/)/*:void*/ {
    checkContentTypeExists$static(contentTypeName);
    this.initializerByDocumentType$uRne[contentTypeName] = initializer;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function extendContentInitializer(contentTypeName/*:String*/, initializerExtension/*:Function*/)/*:void*/ {
    checkContentTypeExists$static(contentTypeName);
    var currentInitFunction/*:Function*/ = this.initializerByDocumentType$uRne[contentTypeName];
    if (currentInitFunction) {
      this.initializerByDocumentType$uRne[contentTypeName] = (function (formerInitializer/*:Function*/)/*:Function*/ {
        function extendedInitializer(content/*:Content*/)/*:void*/ {
          formerInitializer(content);
          initializerExtension(content);
        }

        return extendedInitializer;
      })(currentInitFunction);
    }
    else {
      this.initializerByDocumentType$uRne[contentTypeName] = initializerExtension;
    }
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getContentInitializer(contentTypeName/*:String*/)/*:Function*/ {
    checkContentTypeExists$static(contentTypeName);
    return this.initializerByDocumentType$uRne[contentTypeName];
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function lookupContentInitializer(contentType/*:CapType*/)/*:Function*/ {
    return this.lookupTypeConfiguration$uRne(this.initializerByDocumentType$uRne, contentType);
  }/*

  private*/ function lookupTypeConfiguration(lookup/*:Object*/, contentType/*:CapType*/)/*:**/ {
    while (contentType) {
      var initializer/*:Function*/ = lookup[contentType.getName()];
      if (initializer) {
        return initializer;
      }
      contentType = contentType.getParent();
    }
    return undefined;
  }/*

  private static*/ function checkContentTypeExists$static(contentTypeName/*:String*/)/*:void*/ {
    if (!com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(contentTypeName)) {
      throw new AS3.Error("Unknown Content type '" + contentTypeName + "'.");
    }
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function addListViewDataField(field/*:DataField*/)/*:void*/ {
    this.listViewDataFields$uRne.push(field);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getListViewDataFields()/*:Array*/ {
    return this.listViewDataFields$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function setRepositoryListViewColumns(columns/*:Array*/, instanceName/*:String="defaultCollectionViewList"*/)/*:void*/ {if(arguments.length<=1)instanceName="defaultCollectionViewList";
    this.repositoryListViewColumns$uRne[instanceName] = columns;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function setSearchListViewColumns(columns/*:Array*/, instanceName/*:String="defaultCollectionViewList"*/)/*:void*/ {if(arguments.length<=1)instanceName="defaultCollectionViewList";
    this.searchListViewColumns$uRne[instanceName] = columns;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getRepositoryListViewColumns(instanceName/*:String = "defaultCollectionViewList"*/)/*:Array*/ {if(arguments.length<=0)instanceName="defaultCollectionViewList";
    return this.repositoryListViewColumns$uRne[instanceName];
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getSearchListViewColumns(instanceName/*:String = "defaultCollectionViewList"*/)/*:Array*/ {if(arguments.length<=0)instanceName="defaultCollectionViewList";
    return this.searchListViewColumns$uRne[instanceName];
  }/*

  /**
   * @return the registered preview url transformers
   * /
  public*/ function getPreviewUrlTransformers()/*:Array*/ {
    return this.previewUrlTransformers$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function registerPreviewUrlTransformer(transformer/*:Function*/)/*:void*/ {
    this.previewUrlTransformers$uRne.push(transformer);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getBeanFactory()/*:IBeanFactory*/ {
    return com.coremedia.ui.data.beanFactory;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getApplicationContext()/*:Bean*/ {
    return com.coremedia.ui.data.applicationContext;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getSession()/*:CapSession*/ {
    return com.coremedia.cap.common.SESSION;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getPreferences()/*:Struct*/ {
    return this.preferences$uRne;
  }/*

  /**
   * Set the remote struct bean storing preferences of the logged-in user.
   *
   * @param value the preferences struct
   * /
  public*/ function setPreferences(value/*:Struct*/)/*:void*/ {
    this.preferences$uRne = value;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getRemoteErrorRegistry()/*:IRemoteErrorHandlerRegistry*/ {
    return com.coremedia.ui.data.error.remoteErrorHandlerRegistry;
  }/*

  /**
   * Obtain a remote error from the given response an handle it.
   * @param response
   * @param source
   * @see com.coremedia.ui.data.error.RemoteError
   *
   * @private
   * /
  public*/ function handleRemoteError(response/*:XMLHttpRequest*/, source/*:Object*/)/*:void*/ {
    (AS3.as(com.coremedia.ui.data.error.remoteErrorHandlerRegistry,  com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl)).handleError(com.coremedia.ui.data.impl.RemoteService.createRemoteError(response),source);
  }/*

  /**
   * @inheritDoc
   * /
  [Deprecated]
  public*/ function registerRichTextSymbolMapping(mapping/*:Object*/)/*:void*/ {
    com.coremedia.ui.ckeditor.RichTextArea.addSymbolMapping(mapping);
  }/*

  public*/ function setDashboardConfiguration(config/*:DashboardConfiguration*/)/*:void*/ {
    this.theDashboardConfiguration$uRne = config;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getDashboardConfiguration()/*:DashboardConfiguration*/ {
    return this.theDashboardConfiguration$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getWorkArea()/*:TabPanel*/ {
    if (!this.workArea$uRne) {
      this.workArea$uRne =AS3.as( Ext.getCmp("workarea"),  Ext.tab.Panel);
    }
    return this.workArea$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getWorkAreaTabProxies()/*:WorkAreaTabProxiesTabPanel*/ {
    if (!this.workAreaTabProxies$uRne) {
      var mainView/*:EditorMainView*/ =AS3.as( Ext.getCmp(com.coremedia.cms.editor.sdk.desktop.EditorMainView.ID),  com.coremedia.cms.editor.sdk.desktop.EditorMainView);
      if (mainView) {
        this.workAreaTabProxies$uRne = mainView.getWorkAreaTabProxies();
      }
    }

    return this.workAreaTabProxies$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getCollectionViewManager()/*:CollectionViewManager*/ {
    if (!this.collectionViewManager$uRne) {
      this.collectionViewManager$uRne = new com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerImpl();
    }
    return this.collectionViewManager$uRne;
  }/*


  public*/ function getCollectionViewExtender()/*:CollectionViewExtender*/ {
    if (!this.extender$uRne) {
      this.extender$uRne = new com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender();
    }
    return this.extender$uRne;
  }/*

  /**
   * Return the collection view model
   * @return the collection view model
   * /
  public*/ function getCollectionViewModel(reset/*:Boolean = false*/)/*:CollectionViewModel*/ {if(arguments.length<=0)reset=false;
    if (!this.collectionViewModel$uRne || reset) {
      var preferredSite/*:Site*/ = this.getSitesService().getPreferredSite();
      this.collectionViewModel$uRne = new com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel(preferredSite && preferredSite.getSiteRootFolder());
    }
    return this.collectionViewModel$uRne;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getSitesService()/*:SitesService*/ {
    if (!this.sitesService$uRne) {
      this.sitesService$uRne = new com.coremedia.cms.editor.sdk.sites.SitesServiceImpl();
    }
    return this.sitesService$uRne;
  }/*

  /**
   * The <code>LocalesService</code> provides access to the locales available in the studio.
   *
   * @return the LocalesService instance
   * /
  public*/ function getLocalesService()/*:LocalesService*/ {
    if (!this.localesService$uRne) {
      this.localesService$uRne = new com.coremedia.cms.editor.sdk.LocalesServiceImpl();
    }
    return this.localesService$uRne;
  }/*

  /**
   * Register a translation process definition.
   * @param processDefinitionName the name
   * /
  public*/ function registerTranslationProcessDefinition(processDefinitionName/*:String*/)/*:void*/ {
    this.translationProcessDefinitions$uRne.push(processDefinitionName);
  }/*

  /**
   * Return the registered translation process definitions.
   * @return the registered translation process definitions
   * /
  public*/ function getTranslationProcessDefinitions()/*:Array*/ {
    return this.translationProcessDefinitions$uRne;
  }/*

  public*/ function getMetadataNodeRendererRegistry()/*:MetadataNodeRendererRegistry*/ {
    if (!this.metadataNodeRendererRegistry$uRne) {
      this.metadataNodeRendererRegistry$uRne = new com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRendererRegistryImpl();
    }
    return this.metadataNodeRendererRegistry$uRne;
  }/*

  public*/ function getKeyboardShortcutManager()/*:KeyboardShortcutManager*/ {
    if (!this.keyboardShortcutManager$uRne) {
      this.keyboardShortcutManager$uRne = new com.coremedia.cms.editor.sdk.shortcuts.KeyboardShortcutManager();
    }
    return this.keyboardShortcutManager$uRne;
  }/*

  public*/ function isStateBasedPublicationEnabled()/*:Boolean*/ {
    return this.stateBasedPublicationEnabled$uRne;
  }/*

  public*/ function enableStateBasedPublication()/*:void*/ {
    this.stateBasedPublicationEnabled$uRne = true;
  }/*

  public*/ function getConfiguration()/*:Object*/ {
    return this.configuration$uRne;
  }/*

  public*/ function setConfiguration(value/*:Object*/)/*:void*/ {
    this.configuration$uRne = value;
  }/*

  public*/ function registerThumbnailUriRenderer(doctype/*:String*/, renderFunction/*:Function*/)/*:void*/ {
    this.thumbnailUriRenderer$uRne[doctype] = renderFunction;
  }/*

  /**
   * Registers a thumbnail resolver for the type that is defined inside the resolver.
   * If no content type if given, the fallback will be used by using the ThumbnailFinder which is
   * filled via the ThumbnailResolverFactory.
   * @param resolver
   * /
  public*/ function registerThumbnailResolver(resolver/*:ThumbnailResolver*/)/*:void*/ {
    if(resolver.getContentType()) {
      this.getThumbnailResolverRegistry().set(resolver.getContentType(), resolver);
    }
  }/*

  public*/ function setThumbnailRenderer(thumbnailRenderer/*:ThumbnailRenderer*/)/*:void*/ {
    this.thumbnailRenderer$uRne = thumbnailRenderer;
  }/*

  private*/ function getThumbnail(model/*:Object*/, operations/*:String = null*/, docType/*:String = null*/)/*:Object*/ {switch(Math.max(arguments.length,1)){case 1:operations=null;case 2:docType=null;}
    if(AS3.as(model,  com.coremedia.ui.data.RemoteBean) && !(AS3.as(model,  com.coremedia.ui.data.RemoteBean)).isLoaded()) {
      return undefined;
    }
    var dt/*:String*/ = docType;
    if (AS3.as(model,  com.coremedia.cap.content.Content)) {
       var type/*:ContentType*/ = (AS3.as(model,  com.coremedia.cap.content.Content)).getType();
       if (!type) {
         return undefined;
       }
       dt = type.getName();
    }
    var thumbnailResolver/*:ThumbnailResolver*/ = this.getThumbnailResolverRegistry().get(dt);
    if(thumbnailResolver) {
      return thumbnailResolver.getThumbnail(model, operations);
    }
    return this.getDefaultThumbnailResolver().getThumbnail(model, operations);
  }/*

  public*/ function getThumbnailImage(model/*:Object*/, operations/*:String*/, docType/*:String = null*/)/*:ThumbnailImage*/ {if(arguments.length<=2)docType=null;
    var thumbnail/*:Object*/ = this.getThumbnail$uRne(model, operations, docType);
    if (AS3.is(thumbnail,  String)) {
      return new com.coremedia.ui.util.ThumbnailImage(AS3.as(thumbnail,  String));
    }
    var tn/*:Thumbnail*/ =AS3.as( thumbnail,  com.coremedia.cms.editor.sdk.util.Thumbnail);
    if (!tn) {
      return null;
    }
    if (isAnimatedGif$static(tn)) {
      return new com.coremedia.ui.util.ThumbnailImage(this.renderThumbnailUrl$uRne(tn, "png,jpeg"), this.renderThumbnailUrl$uRne(tn, "gif"), com.coremedia.ui.util.ThumbnailImage.ANIMATED_IMAGE_TYPE_GIF);
    }
    return new com.coremedia.ui.util.ThumbnailImage(this.renderThumbnailUrl$uRne(tn, "png,jpeg"));
  }/*

  private static*/ function isAnimatedGif$static(thumbnail/*:Thumbnail*/)/*:Boolean*/ {
    if (!thumbnail || !thumbnail.getBlob()) {
      return false;
    }
    var mimeType/*:String*/ = thumbnail.getBlob().getContentType();
    var gifParamsMatch/*:Array*/ = mimeType.match(/image\/gif(;.+)/);
    if (gifParamsMatch) {
      var gifParams/*:String*/ = gifParamsMatch[1];
      if (gifParams.match(/;\s*times=[^;]+/)) {
        return true;
      }
    }
    return false;
  }/*


  public*/ function getThumbnailUri(model/*:Object*/, operations/*:String = null*/, docType/*:String = null*/)/*:String*/ {switch(Math.max(arguments.length,1)){case 1:operations=null;case 2:docType=null;}
    if(AS3.as(model,  com.coremedia.ui.data.RemoteBean) && !(AS3.as(model,  com.coremedia.ui.data.RemoteBean)).isLoaded()) {
      return undefined;
    }

    var result/*:String*/ = undefined;
    //default content handling
    if (AS3.as(model,  com.coremedia.cap.content.Content)) {
      var content/*:Content*/ =AS3.as( model,  com.coremedia.cap.content.Content);
      if(content.getType()) {
        var renderFunction/*:Function*/ = this.findRenderer$uRne(content.getType());
        if (renderFunction !== null) {
          //deprecated lookup: search if a rendering method was defined for the given type
          result = this.renderWithFunction$uRne(renderFunction, content, operations);
        }
        else {
          //the recommended way: use the standard renderer where only properties have been applied
          result = this.renderWithRenderer$uRne(content, operations);
        }
      }
    }
    else { //support for other remote bean types
      var thumbnailResolver/*:ThumbnailResolver*/ = this.getThumbnailResolverRegistry().get(docType);
      if(thumbnailResolver) {
        var thumbnail/*:Object*/ = thumbnailResolver.getThumbnail(model, operations);
        if(thumbnail === null) {
          return null;
        }
        if(thumbnail) {
          return this.renderThumbnailUrl$uRne(thumbnail);
        }
      }
      else {
        return null;
      }
    }
    return result;
  }/*

  /**
   * The function takes the content as its single argument and returns a Array containing the TabTooltipEntries
   * Should return undefined if the entries are there but still being computed.
   * @param doctype
   * @param handlerFunction
   * /
  public*/ function registerTabTooltipHandler(doctype/*:String*/, handlerFunction/*:Function*/)/*:void*/ {
    this.tabTooltipHandlers$uRne[doctype] = handlerFunction;
  }/*

  public*/ function computeAdditionalTabTooltipEntries(content/*:Content*/)/*:Array*/ {
    var contentType/*:String*/ = content.getType().getName();
    //wait for the type string to be loaded.
    if (contentType === undefined) {
      return undefined;
    }
    var tabTooltipHandler/*:Function*/ = this.tabTooltipHandlers$uRne[contentType];
    if (!tabTooltipHandler) {
      return [];
    }
    return tabTooltipHandler.call(null, content);
  }/*

  public*/ function computeTooltipSkipFlags(tooltipSkipFlags/*:Bean*/, itemCollection/*:MixedCollection*/)/*:**/ {var this$=this;

    var sites/*:Array*/ = [];
    var entities/*:Array*/ = [];

    itemCollection.each(function (proxy/*:WorkAreaTabProxy*/)/*:Site*/ {
      var content/*:Content*/ =AS3.as( AS3.getBindable(proxy,"proxyState").entity,  com.coremedia.cap.content.Content);
      if (content) {
        var site/*:Site*/ = this$.sitesService$uRne.getSiteFor(content);
        sites.push(site);
      }
      entities.push(AS3.getBindable(proxy,"proxyState").entity);
    });

    //compute flags for the custom tooltip entities
    // and collect sites from non-content entities so that
    // they are included in the site-dependent flag computation below.
    this.tabTooltipSkipFlagsHandler$uRne.forEach(function(skipHandler/*:Function*/)/*:void*/ {
      skipHandler.call(null, tooltipSkipFlags, sites, entities);
    });

    var skipSiteName/*:Boolean*/ = true;
    var skipSiteLocale/*:Boolean*/ = true;

    var preferredSite/*:Site*/ = this.sitesService$uRne.getPreferredSite();
    if (preferredSite === undefined) {
      return undefined;
    }

    if (!preferredSite) {
      skipSiteName = false;
      skipSiteLocale = false;
    } else {
      var preferredSiteName/*:String*/ = preferredSite.getName();
      var preferredSiteLocale/*:Locale*/ = preferredSite.getLocale();

      var returnUndefined/*:Boolean*/ = false;
      for (var i/*:int*/ = 0; i < sites.length; i++) {
        var site/*:Site*/ = sites[i];
        if (site === undefined) {
          returnUndefined = true;
          continue;
        }

        var currentSiteName/*:String*/ = site && site.getName();
        if (preferredSiteName !== currentSiteName) {
          skipSiteName = false;
        }

        var currentSiteLocale/*:Locale*/ = site && site.getLocale();
        if (!preferredSiteLocale.equals(currentSiteLocale)) {
          skipSiteLocale = false;
        }

        if (!skipSiteName && !skipSiteLocale) {
          break;
        }
      }
    }

    tooltipSkipFlags.set(com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo.SITE, skipSiteName);
    tooltipSkipFlags.set(com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo.LOCALE, skipSiteLocale);


  }/*

  public*/ function registerTooltipSkipFlagHandler(skipHander/*:Function*/)/*:void*/ {
    this.tabTooltipSkipFlagsHandler$uRne.push(skipHander);
  }/*

  /**
   * Implementation that uses a ThumbnailResolver to determine the URL of a thumbnail
   * @param content the content to calculate the URL for
   * @param operations the optional image operations to apply
   * @return the URL for the thumbnail, undefined if not loaded yet or null.
   * /
  private*/ function renderWithRenderer(content/*:Content*/, operations/*:String = null*/)/*:String*/ {if(arguments.length<=1)operations=null;
    var result/*:String*/ = undefined;
    var thumbnailResolver/*:ThumbnailResolver*/ = this.getThumbnailResolverRegistry().get(content.getType().getName());
    var thumbnail/*:Object*/ = undefined;
    //check if there is a custom resolver in the registry
    if (thumbnailResolver) {
      thumbnail = thumbnailResolver.getThumbnail(content, operations);
    }
    else {
      //otherwise use the default lookup
      thumbnail = this.getDefaultThumbnailResolver().getThumbnail(content, operations);
    }

    if (thumbnail) {
      //the blob lookup is separated from the actual rendering
      result = this.renderThumbnailUrl$uRne(thumbnail);
    }
    else if(thumbnail === null) {
      //apply null as result, so there is no image
      result = null;
    }

    return result;
  }/*

  /**
   * Uses the given renderFunction to calculate the thumbnail URL of an object.
   * @param renderFunction the function that should be called with the content and image operations as parameters
   * @param content the content to retrieve the thumbnail URL for
   * @param operations the optional image operations.
   * @return the URL for the thumbnail or null.
   * /
  private*/ function renderWithFunction(renderFunction/*:Function*/, content/*:Content*/, operations/*:String*/)/*:String*/ {
    var object/*:Object*/ = renderFunction.call(null, content, operations);
    if (object &&AS3.as( object,  String)) {
      return AS3.as( object,  String);
    }
    else if (AS3.as(object,  com.coremedia.cms.editor.sdk.util.Thumbnail)) {
      //existing renderer function may return a thumbnail object too, this ensures that the same renderer is used.
      return this.renderThumbnailUrl$uRne(object);
    }
    return null;
  }/*

  private*/ function renderThumbnailUrl(thumbnail/*:Object*/, targetFormat/*:String = "png,jpeg"*/)/*:String*/ {if(arguments.length<=1)targetFormat="png,jpeg";
    if (AS3.as(thumbnail,  String)) {
      return this.getThumbnailRenderer().transformUrl(AS3.as(thumbnail,  String));
    }
    else if (AS3.as(thumbnail,  com.coremedia.cms.editor.sdk.util.Thumbnail)) {
      var tn/*:Thumbnail*/ =AS3.as( thumbnail,  com.coremedia.cms.editor.sdk.util.Thumbnail);
      if (targetFormat) {
        return this.getThumbnailRenderer().renderThumbnailUrl(tn, "convert;f="+targetFormat);
      }
      return this.getThumbnailRenderer().renderThumbnailUrl(tn);
    }
    throw new AS3.Error("Unsupported thumbnail type: must be an instance of String or Thumbnail");
  }/*

  public*/ function getDefaultThumbnailResolver()/*:ThumbnailResolver*/ {
    if(!this.thumbnailFinder$uRne) {
      this.thumbnailFinder$uRne = new com.coremedia.cms.editor.sdk.util.ThumbnailResolverImpl();
    }
    return this.thumbnailFinder$uRne;
  }/*

  public*/ function getThumbnailResolverRegistry()/*:Bean*/ {
    if(!this.thumbnailResolverRegistry$uRne) {
      this.thumbnailResolverRegistry$uRne = com.coremedia.ui.data.beanFactory.createLocalBean();
    }
    return this.thumbnailResolverRegistry$uRne;
  }/*

  public*/ function getThumbnailRenderer()/*:ThumbnailRenderer*/ {
    if(!this.thumbnailRenderer$uRne) {
      this.thumbnailRenderer$uRne = new com.coremedia.cms.editor.sdk.util.ThumbnailRendererBase();
    }
    return this.thumbnailRenderer$uRne;
  }/*

  public*/ function addContentCreationFilter(documentType/*:String*/, mayCreate/*:Function*/, includeSubtypes/*:Boolean = false*/)/*:void*/ {if(arguments.length<=2)includeSubtypes=false;
    this.newContentCreationFilters$uRne[documentType] = {'filterFunction': mayCreate, 'includeSubtypes': includeSubtypes};
  }/*

  public*/ function getContentCreationFilter(contentType/*:String*/)/*:Function*/ {
    var cType/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(contentType);
    for (var t/*:String*/ in this.newContentCreationFilters$uRne) {
      var includeSubTypes/*:Boolean*/ = this.newContentCreationFilters$uRne[t].includeSubtypes;
      if(includeSubTypes) {
        if(cType.isSubtypeOf(t)) {
          return this.newContentCreationFilters$uRne[t].filterFunction;
        }
      }
      else {
        if(cType.getName() === t) {
          return this.newContentCreationFilters$uRne[t].filterFunction;
        }
      }
    }
    return null;
  }/*

  public*/ function addPreviewFilter(documentType/*:String*/, mayPreview/*:Function*/)/*:void*/ {
    this.previewFilters$uRne[documentType] = mayPreview;
  }/*

  public*/ function getPreviewFilter(cType/*:CapType*/)/*:Function*/ {
    for (var t/*:String*/ in this.previewFilters$uRne) {
      if(cType.isSubtypeOf(t)) {
        return this.previewFilters$uRne[t];
      }
    }
    return null;
  }/*


  private*/ function findRenderer(contentType/*:CapType*/)/*:**/ {
    if (this.thumbnailUriRenderer$uRne[contentType.getName()]) {
      return this.thumbnailUriRenderer$uRne[contentType.getName()];
    } else if (contentType.getParent()) {
      return this.findRenderer$uRne(contentType.getParent());
    }
    return null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.IEditorContext"],
      metadata: {registerRichTextSymbolMapping: ["Deprecated"]},
      defaultRichTextImageType$uRne: "CMPicture",
      contentTabManager$uRne: null,
      workAreaTabManager$uRne: null,
      workArea$uRne: null,
      workAreaTabProxies$uRne: null,
      collectionViewManager$uRne: null,
      collectionViewModel$uRne: null,
      extender$uRne: null,
      sitesService$uRne: null,
      localesService$uRne: null,
      preferences$uRne: null,
      defaultTabStateManagerEnabled$uRne: true,
      metadataNodeRendererRegistry$uRne: null,
      keyboardShortcutManager$uRne: null,
      stateBasedPublicationEnabled$uRne: false,
      configuration$uRne: null,
      thumbnailFinder$uRne: null,
      thumbnailRenderer$uRne: null,
      thumbnailResolverRegistry$uRne: null,
      constructor: EditorContextImpl$,
      getTabManager: getTabManager,
      getContentTabManager: getContentTabManager,
      setContentTabManager: setContentTabManager,
      getWorkAreaTabManager: getWorkAreaTabManager,
      setWorkAreaTabManager: setWorkAreaTabManager,
      registerRichTextEmbeddableType: registerRichTextEmbeddableType,
      getRichTextEmbeddableTypes: getRichTextEmbeddableTypes,
      registerRichTextLinkableType: registerRichTextLinkableType,
      getRichTextLinkableTypes: getRichTextLinkableTypes,
      getRichTextDragDropImageBlobProperty: getRichTextDragDropImageBlobProperty,
      registerImageDocumentType: registerImageDocumentType,
      setDefaultRichTextImageDocumentType: setDefaultRichTextImageDocumentType,
      getDefaultRichTextImageDocumentType: getDefaultRichTextImageDocumentType,
      getImageBlobProperty: getImageBlobProperty,
      getExcludedDocumentTypes: getExcludedDocumentTypes,
      getContentTypesExcludedFromSearch: getContentTypesExcludedFromSearch,
      getDocumentTypesExcludedFromSearch: getDocumentTypesExcludedFromSearch,
      getContentTypesExcludedFromSearchResult: getContentTypesExcludedFromSearchResult,
      getDocumentTypesExcludedFromSearchResult: getDocumentTypesExcludedFromSearchResult,
      getDocumentTypesHiddenInReferrers: getDocumentTypesHiddenInReferrers,
      getDocumentTypesWithoutPreview: getDocumentTypesWithoutPreview,
      getEnabledSearchFilterIds: getEnabledSearchFilterIds,
      setDefaultTabStateManagerEnabled: setDefaultTabStateManagerEnabled,
      isDefaultTabStateManagerEnabled: isDefaultTabStateManagerEnabled,
      registerContentInitializer: registerContentInitializer,
      extendContentInitializer: extendContentInitializer,
      getContentInitializer: getContentInitializer,
      lookupContentInitializer: lookupContentInitializer,
      lookupTypeConfiguration$uRne: lookupTypeConfiguration,
      addListViewDataField: addListViewDataField,
      getListViewDataFields: getListViewDataFields,
      setRepositoryListViewColumns: setRepositoryListViewColumns,
      setSearchListViewColumns: setSearchListViewColumns,
      getRepositoryListViewColumns: getRepositoryListViewColumns,
      getSearchListViewColumns: getSearchListViewColumns,
      getPreviewUrlTransformers: getPreviewUrlTransformers,
      registerPreviewUrlTransformer: registerPreviewUrlTransformer,
      getBeanFactory: getBeanFactory,
      getApplicationContext: getApplicationContext,
      getSession: getSession,
      getPreferences: getPreferences,
      setPreferences: setPreferences,
      getRemoteErrorRegistry: getRemoteErrorRegistry,
      handleRemoteError: handleRemoteError,
      registerRichTextSymbolMapping: registerRichTextSymbolMapping,
      setDashboardConfiguration: setDashboardConfiguration,
      getDashboardConfiguration: getDashboardConfiguration,
      getWorkArea: getWorkArea,
      getWorkAreaTabProxies: getWorkAreaTabProxies,
      getCollectionViewManager: getCollectionViewManager,
      getCollectionViewExtender: getCollectionViewExtender,
      getCollectionViewModel: getCollectionViewModel,
      getSitesService: getSitesService,
      getLocalesService: getLocalesService,
      registerTranslationProcessDefinition: registerTranslationProcessDefinition,
      getTranslationProcessDefinitions: getTranslationProcessDefinitions,
      getMetadataNodeRendererRegistry: getMetadataNodeRendererRegistry,
      getKeyboardShortcutManager: getKeyboardShortcutManager,
      isStateBasedPublicationEnabled: isStateBasedPublicationEnabled,
      enableStateBasedPublication: enableStateBasedPublication,
      getConfiguration: getConfiguration,
      setConfiguration: setConfiguration,
      registerThumbnailUriRenderer: registerThumbnailUriRenderer,
      registerThumbnailResolver: registerThumbnailResolver,
      setThumbnailRenderer: setThumbnailRenderer,
      getThumbnail$uRne: getThumbnail,
      getThumbnailImage: getThumbnailImage,
      getThumbnailUri: getThumbnailUri,
      registerTabTooltipHandler: registerTabTooltipHandler,
      computeAdditionalTabTooltipEntries: computeAdditionalTabTooltipEntries,
      computeTooltipSkipFlags: computeTooltipSkipFlags,
      registerTooltipSkipFlagHandler: registerTooltipSkipFlagHandler,
      renderWithRenderer$uRne: renderWithRenderer,
      renderWithFunction$uRne: renderWithFunction,
      renderThumbnailUrl$uRne: renderThumbnailUrl,
      getDefaultThumbnailResolver: getDefaultThumbnailResolver,
      getThumbnailResolverRegistry: getThumbnailResolverRegistry,
      getThumbnailRenderer: getThumbnailRenderer,
      addContentCreationFilter: addContentCreationFilter,
      getContentCreationFilter: getContentCreationFilter,
      addPreviewFilter: addPreviewFilter,
      getPreviewFilter: getPreviewFilter,
      findRenderer$uRne: findRenderer,
      statics: {
        initEditorContext: initEditorContext$static,
        getInstance: getInstance$static
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.tab.Panel",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.IEditorContext",
        "com.coremedia.ui.ckeditor.RichTextArea",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.applicationContext",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.error.remoteErrorHandlerRegistry",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.util.ThumbnailImage"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.LocalesServiceImpl",
        "com.coremedia.cms.editor.sdk.TabManagerImpl",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerImpl",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanel",
        "com.coremedia.cms.editor.sdk.dashboard.DashboardConfiguration",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.SavedSearchWidgetType",
        "com.coremedia.cms.editor.sdk.desktop.EditorMainView",
        "com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRendererRegistryImpl",
        "com.coremedia.cms.editor.sdk.shortcuts.KeyboardShortcutManager",
        "com.coremedia.cms.editor.sdk.sites.SitesServiceImpl",
        "com.coremedia.cms.editor.sdk.util.Thumbnail",
        "com.coremedia.cms.editor.sdk.util.ThumbnailRendererBase",
        "com.coremedia.cms.editor.sdk.util.ThumbnailResolverImpl"
      ]
    };
});
