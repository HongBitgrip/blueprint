Ext.define("com.coremedia.cms.editor.sdk.IEditorContext", function(IEditorContext) {/*package com.coremedia.cms.editor.sdk {
import com.coremedia.cap.common.CapSession;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManager;
import com.coremedia.cms.editor.sdk.dashboard.DashboardConfiguration;
import com.coremedia.cms.editor.sdk.desktop.ContentTabManager;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManager;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel;
import com.coremedia.cms.editor.sdk.shortcuts.KeyboardShortcutManager;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.util.ThumbnailRenderer;
import com.coremedia.cms.editor.sdk.util.ThumbnailResolver;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.IBeanFactory;
import com.coremedia.ui.data.error.IRemoteErrorHandlerRegistry;
import com.coremedia.ui.util.ThumbnailImage;

import ext.data.field.DataField;
import ext.tab.TabPanel;

/**
 * An IEditorContext bundles access to several Studio configuration options and extension points.
 * An EditorPlugin receives an IEditorContext in its <code>init()</code> method.
 * The editor context is also stored in the <code>editorContext</code> property
 * of the global application context.
 *
 * @see EditorPlugin#init
 * /
[PublicApi]
public interface IEditorContext {
  /**
   * @deprecated renamed to <code>getContentTabManager()</code>
   * Return the tab manager of this editor.
   * @return the tab manager
   * /
  function getTabManager():TabManager;

  /**
   * Return the global content items (CMS documents) tab manager.
   * @return the content tab manager
   * @see #getWorkAreaTabManager()
   * /
  function getContentTabManager():ContentTabManager;

  /**
   * Return this Studio's work area tab manager.
   * It can be used to open, activate or close work area tabs for given entities or tab states.
   * @return the work area tab manager
   * /
  function getWorkAreaTabManager():WorkAreaTabManager;

  /**
   * Return the work area as tab panel
   * @return the work area as tab panel
   * /
  function getWorkArea():TabPanel;

  /**
   * Return the tab panel holding the WorkAreaTabProxy proxies for the WorkArea tabs.
   *
   * @see WorkAreaTabProxiesTabPanel
   * @see WorkAreaTabProxy
   * @see WorkArea
   *
   * @return the WorkAreaTabProxiesTabPanel.
   * /
  function getWorkAreaTabProxies():WorkAreaTabProxiesTabPanel;

  /**
   * Return the collection view manager of this editor.
   * @return the collection view manager
   * /
  function getCollectionViewManager():CollectionViewManager;

  /**
   * Returns the CollectionViewExtender.
   * /
  function getCollectionViewExtender():CollectionViewExtender;

  /**
   * Return the object for retrieving the available sites and
   * for operating on sites.
   *
   * @return the site object
   * /
  function getSitesService():SitesService;

  /**
   * Register image document type and the name of the image blob property for the rich text drag'n'drop feature.
   * Every document type that is registered can be used for drag'n'drop out of the Library into any rich text editor.
   * The rich text editor then tries to create an image link in the rich text.
   * @param documentTypeName the name of the image document type
   * @param property the name of the image blob property
   * /
  function registerRichTextEmbeddableType(documentTypeName:String, property:String):void;

  /**
   * Get a list of the registered document types that should be used for image drag'n'drop into rich text property fields.
   * @return an Array of ContentTypes
   *
   * @see ContentType
   * /
  function getRichTextEmbeddableTypes():Array;

  /**
   * Register linkable document type.
   * Every document type that is registered can be used for dropping from the Library into any rich text editor.
   * The rich text editor then tries to create a link in the rich text.
   * @param documentTypeName the name of the linkable document type
   * /
  function registerRichTextLinkableType(documentTypeName:String):void;

  /**
   * Get a list of the registered document types that should be used for drag'n'drop into rich text property fields and link to them.
   * @return an Array of ContentTypes
   *
   * @see ContentType
   * /
  function getRichTextLinkableTypes():Array;
  
  /**
   * Get the image blob property of the given document type or null if the document type is not known.
   * @param documentTypeName the name of the image document type
   * @return the name of the image blob property
   * /
  function getRichTextDragDropImageBlobProperty(documentTypeName:String):String;

  /**
   * Set the name of the document type of images that are typically inserted
   * into rich text values. When opening the collection window from a
   * rich text property field, this document type will be preselected.
   *
   * @param documentTypeName the name of the image document type
   * /
  function setDefaultRichTextImageDocumentType(documentTypeName:String):void;

  /**
   * Get the name of the document type of images that are typically inserted
   * into rich text values. When opening the collection window from a
   * rich text property field, this document type will be preselected.
   *
   * @return the name of the image document type
   * /
  function getDefaultRichTextImageDocumentType():String;

  /**
   * Tell the Studio that a Document type contains an image BLOB that should be used for thumbnail views.
   * @param imageDocumentType the name of the Document type that contains the image BLOB property
   * @param imageBlobProperty the name of the image BLOB property
   * /
  function registerImageDocumentType(imageDocumentType:String, imageBlobProperty:String):void;

  /**
   * Return the name of the image BLOB property to use for thumbnail views of Content of the given
   * document type. If the document type itself does not define an image BLOB property, the super type
   * chain is considered.
   * @param documentTypeName the name of the document type to retrieve the image BLOB property name for
   * @return the name of the document type's image BLOB property
   *   or <code>null</code> if this document type does not have one
   * /
  function getImageBlobProperty(documentTypeName:String):String;

  /**
   * Return the list of document type names excluded from being listed in the "create new document" menu.
   * An EditorPlugin may modify this list as needed, e.g. push additional excluded document type names.
   * @return the list of document type names excluded from being listed in the "create new document" menu.
   * /
  function getExcludedDocumentTypes():Array;

  /**
   * Return the list of content type names excluded from being listed in the library's search filter combo.
   * Editor Plugins may modify this list as needed, e.g. push additional excluded content type names.
   * @return the list of content type names excluded from being listed in the library's search filter combo
   * /
  function getContentTypesExcludedFromSearch():Array;

  /**
   * Return the list of content type names excluded from being listed in the library's search filter combo.
   * Editor Plugins may modify this list as needed, e.g. push additional excluded content type names.
   * @return the list of content type names excluded from being listed in the library's search filter combo
   * @deprecated use <code>getContentTypesExcludedFromSearch</code> instead
   * /
  [Deprecated]
  function getDocumentTypesExcludedFromSearch():Array;

  /**
   * Return the list of content type names excluded from being listed in the library's search result list.
   * Editor Plugins may modify this list as needed, e.g. push additional excluded content type names.
   * @return the list of content type names excluded from being listed in the library's search list
   * /
  function getContentTypesExcludedFromSearchResult():Array;

  /**
   * Return the list of content type names excluded from being listed in the library's search result list.
   * Editor Plugins may modify this list as needed, e.g. push additional excluded content type names.
   * @return the list of content type names excluded from being listed in the library's search list
   * @deprecated use <code>getContentTypesExcludedFromSearchResult</code> instead
   * /
  [Deprecated]
  function getDocumentTypesExcludedFromSearchResult():Array;

  /**
   * Return the list of document type names that should be hidden in the referrers list panel of every content.
   * Editor Plugins may modify this list as needed, e.g. push additional hidden document type names.
   * @return the list of document type names that should be hidden in the referrers list panel of every content.
   * /
  function getDocumentTypesHiddenInReferrers():Array;

  /**
   * Return the list of document type names for which no preview is shown.
   * An EditorPlugin may modify this list as needed, e.g. by pushing additional document type names
   * or by splicing out existing document type names. By default, the list contains the
   * predefined document types EditorPreferences, Preferences, Query, and Dictionary.
   *
   * @return the list of document type names for which no preview is shown
   * /
  function getDocumentTypesWithoutPreview():Array;

  /**
   * Return the list of ids representing the enabled search filters in the library's search view.
   * Editor Plugins may modify this list as needed, e.g. push additional filter ids.
   * @return the list of ids representing the enabled search filters in the library's search view.
   * /
  function getEnabledSearchFilterIds():Array;

  /**
   * Register the given initializer function for the Content type given by its name. The initializer function is called
   * every time a new content of a corresponding type is created via the NewContentAction. Corresponding types include
   * the given type itself and any subtype for which there is no initializer that is more specific.
   * This means that when overriding an initializer, the new initializer must take care of calling the old initializer
   * if this behavior is intended.
   * @param contentTypeName the name of the Content type for which to register an initializer.
   * @param initializer the initializer function to call when a new Content has been created. It receives a single
   *   parameter, the newly created Content.
   * @throws Error if contentTypeName is not the name of an existing Content type.
   *
   * @see com.coremedia.cms.editor.sdk.actions.NewContentAction
   * /
  function registerContentInitializer(contentTypeName:String, initializer:Function):void;

  /**
   * Extends a given initializer function for the Content type given by its name. The extended initializer function is called
   * every time a new content of a corresponding type is created via the NewContentAction. Corresponding types include
   * the given type itself and any subtype for which there is no initializer that is more specific.
   * @param contentTypeName the name of the Content type for which to register an initializer.
   * @param initializerExtension the initializer function to call when a new Content has been created. It receives a single
   *   parameter, the newly created Content.
   * @throws Error if contentTypeName is not the name of an existing Content type.
   *
   * @see com.coremedia.cms.editor.sdk.actions.NewContentAction
   * /
  function extendContentInitializer(contentTypeName:String, initializerExtension:Function):void;

  /**
   * Return the initializer function registered exactly for the Content type given by its name or <code>undefined</code>
   * if there is no such initializer.
   * @param contentTypeName the name of the Content type for which to return the registered initializer.
   * @throws Error if contentTypeName is not the name of an existing Content type.
   * /
  function getContentInitializer(contentTypeName:String):Function;

  /**
   * Lookup the initializer function registered for the given Content type or any super type or <code>undefined</code>
   * if there is no such initializer.
   * @param contentType the name of the Content type for which to return the registered initializer.
   * /
  function lookupContentInitializer(contentType:CapType):Function;

  /**
   * Add a data field to the list views of the library window. This field can subsequently used in
   * the columns as configured using setRepositoryListViewColumns(...) and setSearchListViewColumns(...);
   *
   * @param field the config objects of the data field to add
   *
   * @see #setRepositoryListViewColumns()
   * @see #setSearchListViewColumns()
   * /
  function addListViewDataField(field:DataField):void;

  /**
   * Return the additional data fields for use in the list views of the library window.
   *
   * @return the additional data fields for use in the list views of the library window
   * /
  function getListViewDataFields():Array;

  /**
   * Set the list of columns that are displayed in the repository list view of the library window.
   * Some standard columns are provided as shorthand config classes, but you can use any
   * grid column you need. Configure the required data fields using possibly repeated calls of
   * addListViewDataField(...). Unless additional fields are configured,
   * the columns may only refer to the data fields
   * creationDate, name, nameClass, status, type, and typeCls.
   *
   * @param columns an array of GridColumn objects
   * @param instanceName the identifier of the repository list. This parameter is optional, if not set the columns of the
   * default list will be set
   *
   * @see #addListViewDataField()
   * @see ext.grid.column.Column
   * @see com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn
   * @see com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn
   * @see com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn
   * @see com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeColumn
   * /
  function setRepositoryListViewColumns(columns:Array, instanceName:String="defaultCollectionViewList"):void;

  /**
   * Return the list of columns that are displayed in the repository list view of the library window
   * for the given instanceName.
   *
   * @param instanceName the identifier for the repository list. The Parameter is optional, if not set the default will
   * be returned.
   *
   * @return the list of columns that are displayed in the repository list view of the library window
   * /
  function getRepositoryListViewColumns(instanceName:String="defaultCollectionViewList"):Array;

  /**
   * Set the list of columns that are displayed in the search list view of the library window.
   * Some standard columns are provided as shorthand config classes, but you can use any
   * grid column you need. Configure the required data fields using possibly repeated calls of
   * addListViewDataField(...). Unless additional fields are configured,
   * the columns may only refer to the data fields
   * creationDate, name, status, type, and typeCls.
   * Multiple configurations for the search list can be stored by using the parameter instanceName.
   *
   * @param columns an array of GridColumn objects
   * @param instanceName the identifier of the search list. This parameter is optional, if not set the columns of the
   * default list will be set
   *
   * @see #addListViewDataField()
   * @see ext.grid.column.Column
   * @see com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn
   * @see com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn
   * @see com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn
   * @see com.coremedia.cms.editor.sdk.collectionview.list.ListViewTypeColumn
   * /
  function setSearchListViewColumns(columns:Array, instanceName:String="defaultCollectionViewList"):void;

  /**
   * Return the list of columns that are displayed in the search list view of the library window
   * for the given instanceName.
   *
   * @param instanceName the identifier for the search list. The Parameter is optional, if not set the default will
   * be returned.
   *
   * @return the list of columns that are displayed in the search list view of the library window
   * /
  function getSearchListViewColumns(instanceName:String="defaultCollectionViewList"):Array;

  /**
   * Set to false in order to disable the default tab state manager,
   * which saves and restores the state of all tabs in the WorkArea to the user preferences.
   * @param enable false in order to disable the default tab state manager
   * /
  function setDefaultTabStateManagerEnabled(enable:Boolean):void;

  /**
   * Return false if the default tab state manager is disabled
   * @return false if the default tab state manager is disabled
   * /
  function isDefaultTabStateManagerEnabled():Boolean;

  /**
   * Register a function for post processing preview urls.
   * Signature:
   * <code>
   *   function(previewUri:com.coremedia.cms.editor.sdk.preview.PreviewURI,callback:Function):void;
   * </code>
   *
   * The callback's signature is
   * <code>
   *   function():void;
   * </code>
   *
   * and must be invoked after postprocessing the preview URL so that processing of the
   * preview URL proceeds.
   *
   * Preview URL transformers can also be registered on instances of <code>PreviewPanelBase</code>
   * which then have priority over transformers registered here.
   *
   * @param transformer the preview URL transformer to register
   *
   * @see com.coremedia.cms.editor.sdk.preview.PreviewPanelBase#registerTransformer
   * @see com.coremedia.cms.editor.sdk.preview.PreviewURI
   * /
  function registerPreviewUrlTransformer(transformer:Function):void;

  /**
   * Get the central factory for local and remote beans.
   *
   * @return the factory instance
   * /
  function getBeanFactory():IBeanFactory;

  /**
   * Returns the application context:
   * a bean to store application-wide properties, whose values may again be beans.
   * This bean instance is the central starting point to define client-side 'global'
   * beans.
   * Be careful when adding custom properties to avoid name clashes.
   * The editor context is itself stored in the <code>editorContext</code> property
   * of the application context.
   * @return a (non-remote) bean
   * /
  function getApplicationContext():Bean;

  /**
   * The CapSession instance provides access to common CMS services such as
   * the content repository, the user repository, and search services.
   *
   * @return the user's CapSession instance
   *
   * @see com.coremedia.cap.common.CapSession
   * @see com.coremedia.cap.common.CapConnection
   * @see com.coremedia.cap.common.CapLoginService
   * /
  function getSession():CapSession;

  /**
   * Return the remote struct bean storing preferences of the logged-in user.
   *
   * @return the preferences struct
   * /
  function getPreferences():Struct;

  /**
   * Get the IRemoteErrorHandlerRegistry instance associated with this
   * editor context.
   * @return the IRemoteErrorHandlerRegistry
   * /
  function getRemoteErrorRegistry():IRemoteErrorHandlerRegistry;

  /**
   * Register additional symbol mappings for pasting text from Word into the rich text area.
   * The given mapping object contains one property per symbol, using single-character
   * property names matching the character to map and string values that contain the
   * exact HTML text to be inserted into the rich text instead of the mapped character.
   *
   * @param json JSON Object of the symbol mapping data.
   * @deprecated set <code>symbolFontMapping</code> in CKEditor-Config via <code>customizeCKEditorPlugin<code> instead
   * /
  [Deprecated]
  function registerRichTextSymbolMapping(json:Object):void;

  /**
   * Get the dashboard configuration. The configuration determines the
   * initial state of the dashboard when no previous state has been saved and the
   * set of widgets that can be added. You may modify the returned
   * object up to editor startup time.
   *
   * @return the dashboard configuration
   * /
  function getDashboardConfiguration():DashboardConfiguration;

  /**
   * Get the keyboard shortcut manager through which you can add keyboard shortcuts for actions.
   * @return the keyboard shortcut manager
   * /
  function getKeyboardShortcutManager():KeyboardShortcutManager;

  /**
   * Get the global configuration object.
   * Configuration can be added by plug-ins under custom keys.
   * @return a hash from custom keys to feature-specific configuration objects.
   * /
  function getConfiguration():Object;

  /**
   * Register a function to compute the URI of the thumbnail image of a content for a given document type.
   * The function takes the content as its single argument and returns a string.
   * The registered functions are used to display thumbnails in the thumbnail view of the library.
   * To retrieve the thumbnail URI for a content use #getThumbnailUri.
   *
   * @param doctype the type of contents to which the given function applies
   * @param renderFunction the function that returns the URI of the thumbnail image to render
   *
   * @see #getThumbnailUri
   * @deprecated use <code>registerThumbnailResolver</code> instead
   * /
  function registerThumbnailUriRenderer(doctype:String, renderFunction:Function):void;

  /**
   * Adds a ThumbnailResolver for the given document type.
   * The ThumbnailResolver implements which content property to use to look up a content that contains an image.
   * By default, the lookup is made recursively. E.g. when a collection uses 'items' property to use the first
   * linked content for a thumbnail and this content item is a collection too, the lookup will continue until
   * a content is found that contains a blob property with an image.
   *
   * @param resolver a ThumbnailResolver to look up content that can be used for a preview thumbnail
   * /
  function registerThumbnailResolver(resolver:ThumbnailResolver):void;

  /**
   * The setter can be used to intercept the standard URL generation for all images in the Studio.
   * The ThumbnailRenderer is responsible for the URLs that are returned by the <code>getThumbnailUri(...)</code> method.
   *
   * @param thumbnailRenderer the custom ThumbnailRenderer instance
   * /
  function setThumbnailRenderer(thumbnailRenderer:ThumbnailRenderer):void;

  /**
   * Resolve the thumbnail URI for a given content, using the render functions registered with
   * #registerThumbnailUriRenderer.
   *
   * @param model the object for which the thumbnail URI should be retrieved
   * @param operations the list of operations to perform on the image
   * @param docType optional document type name that can be declared when a specific renderer should be used.
   *
   * @see #registerThumbnailUriRenderer
   * /
  function getThumbnailUri(model:Object, operations:String = null, docType:String = null):String;

  /**
   * Resolve the thumbnail image for a given content, using the render functions registered with
   * #registerThumbnailUriRenderer.
   *
   * @param model the object for which the thumbnail image should be retrieved
   * @param operations the list of operations to perform on the image
   * @param docType optional document type name that can be declared when a specific renderer should be used.
   *
   * @see #registerThumbnailUriRenderer
   * /
  function getThumbnailImage(model:Object, operations:String, docType:String = null):ThumbnailImage;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
