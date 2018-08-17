Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewPanelBase", function(PreviewPanelBase) {/*package com.coremedia.cms.editor.sdk.preview {

import com.coremedia.cap.common.CapObject;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.messageService;
import com.coremedia.cms.editor.sdk.premular.FocusForwarder;
import com.coremedia.cms.editor.sdk.premular.FocusListener;
import com.coremedia.cms.editor.sdk.preview.metadata.IMetadataService;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataServiceImpl;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;
import com.coremedia.cms.editor.sdk.util.PreferencesUtil;
import com.coremedia.ui.components.IFrameMgr;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Previewable;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.impl.TimeTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.skins.LoadMaskSkin;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.LoadMask;
import ext.dom.DomHelper;
import ext.dom.Element;
import ext.event.Event;
import ext.menu.Menu;
import ext.panel.Panel;
import ext.tab.TabPanel;
import ext.toolbar.Toolbar;

import js.HTMLElement;

/**
 * Fires after the preview URL was set.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>oldPreviewUrl:String</code> the old preview URL
 *   </li>
 *   <li>
 *     <code>newPreviewUrl:String</code> the new preview URL
 *   </li>
 * </ul>
 * /
[Event(name = "previewUrl")] // NOSONAR - no type

/**
 * This is the code-half of the PreviewPanel component, which will usually be used only to inherit from
 * ("abstract"). For the complete component with behavior and layout, see PreviewPanel.
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
[PublicApi]
public class PreviewPanelBase extends Panel implements FocusListener {
  public static const DEFAULT_RELOAD_DELAY:Number = 1;

  private static const*/var ABOUT_BLANK_URL$static/*:String*/ = "about:blank";/*

  /**
   * The itemId of the component showing the no preview text.
   * /
  internal static const NO_PREVIEW_ITEM_ID:String = 'noPreview';

  private static const*/var PREVIEW_URL_PROPERTY$static/*:String*/ = 'previewUrl';/*

  /**
   * The context property name for the currently selected (via context-click) metadata chunk in the preview.
   * The context value is a MetadataTreeNode object.
   * /
  public static const CURRENT_PREVIEW_METADATA_SELECTION_VARIABLE_NAME:String = "currentPreviewMetadataSelection";

  /**
   * The context property name for the preview panel's current metadata tree.
   * The context value is a MetadataTree object.
   * /
  public static const CURRENT_PREVIEW_METADATA_TREE_VARIABLE_NAME:String = "currentPreviewMetadataTree";

  /**
   * The context property name for the current preview content.
   * The context value is a Content object.
   * /
  public static const CURRENT_PREVIEW_CONTENT_VARIABLE_NAME:String = "currentPreviewContent";

  /**
   * The content bean that triggers loading its preview into the contained iframe.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * A value expression to a ContextInfo bean, consisting of a 'content' and a 'property' property.
   * These properties are updated according to the right-click selection inside the preview panel.
   * /
  [Bindable]
  public var focusForwarder:FocusForwarder;

  public var contextMenu:Menu;

  private var previewIFrame:PreviewIFrame;
  private var innerPreviewPanelCmp:InnerPreviewPanel;
  private var _previewDependencyManager:PreviewDependencyManager;
  private var reloader:PreviewURIReloader;
  private var metadataService:MetadataServiceImpl;

  private var previewUrl:String;
  private var waitForReloadTimer:Object;
  private var transformers:Array;

  // IOC model
  private var currentPreviewContent:Previewable;
  private var currentPreviewMetadataSelection:MetadataTreeNode;
  private var currentPreviewMetadataTree:MetadataTree;

  private var prefDevice:String;

  private var disableUserInteraction:Boolean;

  private var previewExists:Boolean = false;
  private var previewLoadMask:LoadMask;

  private var visibleOnScreenValueExpression:ValueExpression;
  private var reloadSuppressed:Boolean = false;
  private var metadataUpdateSuppressed:Object = undefined;

  /**
   * Create a new PreviewPanelBase component.
   * /
  public*/ function PreviewPanelBase$(config/*:PreviewPanel = null*/) {var this$=this;if(arguments.length<=0)config=null;
    // workaround to make transformers available in sub classes as well
    this.transformers$67CD = [];
    var contextMenuConfig/*:Menu*/ = config.contextMenu;
    this.prefDevice$67CD = AS3.getBindable(config,"preferredDevice");
    this.disableUserInteraction$67CD = AS3.getBindable(config,"disableUserInteraction");

    this.super$67CD(config);

    this.innerPreviewPanelCmp$67CD =AS3.as( this.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel.xtype).build()),  com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel);
    if (!this.innerPreviewPanelCmp$67CD) {
      throw new AS3.Error("required child component '" + com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel.xtype + "' not found");
    }

    this.previewIFrame$67CD = this.innerPreviewPanelCmp$67CD.getIFrame();
    if (!this.previewIFrame$67CD) {
      throw new AS3.Error("preview iframe not found");
    }

    if (AS3.getBindable(this,"focusForwarder")) {
      AS3.getBindable(this,"focusForwarder").addListener(this);
    }

    if (contextMenuConfig) {
      if (!this.contextMenu['viewModel'] && this.lookupViewModel()) {
        this.contextMenu['viewModel'] = this.lookupViewModel();
      }

      this.contextMenu =AS3.as( Ext.ComponentManager.create(this.contextMenu),  Ext.menu.Menu);
    }

    this.registerTransformer(AS3.bind(this,"timestampUrlTransformer$67CD"));

    this.on('afterrender', function ()/*:void*/ {
      // prevent browser context menus
      this$.mon(this$.el, 'contextmenu', function (e/*:Event*/)/*:Boolean*/ {
        e.preventDefault();
        return false;
      });
    });

    this.mon(this.previewIFrame$67CD, 'afterrender', function ()/*:void*/ {
      com.coremedia.cms.editor.sdk.messageService.registerMessageListener(this$.previewIFrame$67CD.getEl().dom, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.INIT,AS3.bind( this$,"initListener$67CD"));
    });

    this.visibleOnScreenValueExpression$67CD = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"isVisibleOnScreen$67CD"));
    this.visibleOnScreenValueExpression$67CD.addChangeListener(AS3.bind(this,"checkForSuppressedOperations$67CD"));

    AS3.getBindable(config,"bindTo").addChangeListener(AS3.bind(this,"contentChanged$67CD"));
    this.contentChanged$67CD();

    this.on('previewUrl',AS3.bind( this,"previewUrlChanged$67CD"));
  }/*

  private*/ function timestampUrlTransformer(uri/*:PreviewURI*/, callback/*:Function*/)/*:void*/ {
    var timestamp/*:Number*/ = com.coremedia.ui.data.impl.TimeTracker.getTimestamp("content");
    if (timestamp) {
      uri.appendParameter("contentTimestamp", timestamp);
    }

    callback();
  }/*

  private*/ function isContextMenuVisible()/*:Boolean*/ {
    return this.contextMenu && this.contextMenu.isVisible(true);
  }/*

  ////////////////////////////////////////////////////
  // BASIC PREVIEW (RE)LOADING
  ////////////////////////////////////////////////////

  private*/ function contentChanged()/*:void*/ {
    this.previewExists$67CD = false;

    this.innerPreviewPanelCmp$67CD && this.innerPreviewPanelCmp$67CD.resetScrollPositions();

    if (this._previewDependencyManager$67CD) {
      this.mun(this._previewDependencyManager$67CD, com.coremedia.cms.editor.sdk.preview.PreviewDependencyManager.PREVIEW_DEPENDENCY_CHANGED_EVENT,AS3.bind(
              this,"previewDependencyChangedListener$67CD"));
      this._previewDependencyManager$67CD.cleanup();
    }

    if (AS3.getBindable(this,"bindTo").getValue()) {
      this._previewDependencyManager$67CD = new com.coremedia.cms.editor.sdk.preview.PreviewDependencyManager(this, AS3.getBindable(this,"bindTo").getValue());
      this.mon(this._previewDependencyManager$67CD, com.coremedia.cms.editor.sdk.preview.PreviewDependencyManager.PREVIEW_DEPENDENCY_CHANGED_EVENT,AS3.bind(
              this,"previewDependencyChangedListener$67CD"));
      this.updatePreview$67CD();
    }

    this.updateProvidedPropertyCurrentPreviewContent$67CD();
  }/*

  private*/ function updatePreview()/*:void*/ {var this$=this;
    if(AS3.getBindable(this,"bindTo") && this.previewIFrame$67CD) {
      var currentPreviewable/*:Previewable*/ =AS3.as( AS3.getBindable(this,"bindTo").getValue(),  com.coremedia.ui.data.Previewable);
      if (AS3.is(currentPreviewable,  com.coremedia.ui.data.RemoteBean)) {
        if (AS3.cast(com.coremedia.ui.data.RemoteBean,currentPreviewable).isLoaded()) {
          com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getCurrentPreviewUri")).loadValue(function(uri/*:String*/)/*:void*/ {
            com.coremedia.ui.logging.Logger.debug(PreviewPanelBase + ": updating preview url for current uri " + uri + " and current previewUrl "+ this$.previewUrl$67CD);
            if (uri) {
              new com.coremedia.cms.editor.sdk.preview.PreviewURI(uri, AS3.getBindable(this$,"bindTo").getValue(), this$.getTransformers(),AS3.bind( this$.previewIFrame$67CD,"setUrl")).transform();
            } else {
              this$.previewIFrame$67CD.setUrl(ABOUT_BLANK_URL$static);
            }
          });
        } else {
          // Load this content, then check again in case the current content changed.
          AS3.cast(com.coremedia.ui.data.RemoteBean,currentPreviewable).load(AS3.bind(this,"updatePreview$67CD"));
        }
      }
    }
  }/*

  internal*/ function getCurrentPreviewUri()/*:String*/ {
    var currentPreviewable/*:Previewable*/ =AS3.as( AS3.getBindable(this,"bindTo").getValue(),  com.coremedia.ui.data.Previewable);
    if (this.isShowPreview() === undefined) {
      return undefined;
    }
    return this.isShowPreview() ? currentPreviewable.getPreviewUrl() : null;
  }/*

  /**
   * Return a combined array holding the global and local transformers.
   * @return the transformers
   * /
  protected*/ function getTransformers()/*:Array*/ {
    return (AS3.as(com.coremedia.cms.editor.sdk.editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).getPreviewUrlTransformers().
            concat(this.transformers$67CD);
  }/*

  /**
   * Reloads the preview frame.
   * /
  public*/ function reloadFrame()/*:void*/ {
    this.setPreviewLoading$67CD();
    this.waitForReloadTimer$67CD = undefined;
    this.updatePreview$67CD();
  }/*

  /**
   * Reloads the preview frame. If it is hidden at the moment then the reload is postponed until the
   * frame is visible again.
   * /
  public*/ function reloadFrameWhenVisible()/*:void*/ {
    if (this.isVisibleOnScreen$67CD()) {
      this.reloadFrame();
    } else {
      this.reloadSuppressed$67CD = true;
    }
  }/*

  private*/ function previewUrlChanged()/*:void*/ {
    // invalidate breadcrumb
    this.setCurrentPreviewMetadataSelection(null);
  }/*

  ////////////////////////////////////////////////////
  // VISIBILITY HANDLING
  ////////////////////////////////////////////////////

  private*/ function isVisibleOnScreen()/*:Boolean*/ {
    var result/*:Boolean*/ = true;
    var current/*:Component*/ = this;
    while (current) {
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, "hide");
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, "show");
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, "render");
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, "layout");
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, "resize");
      if (AS3.is(current,  Ext.tab.Panel)) {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, "tabchange");
      }
      if (!current.isVisible(true)) {
        result = false;
      }
      if (!current.getEl() || current.getEl().getWidth() <= 0) {
        result = false;
      }
      current =AS3.as( current.up(),  Ext.Component);
    }

    return result;
  }/*

  private*/ function checkForSuppressedOperations()/*:void*/ {
    if (this.isVisibleOnScreen$67CD() && !this.isContextMenuVisible$67CD()) {
      if (this.reloadSuppressed$67CD) {
        this.reloadSuppressed$67CD = false;
        this.reloadFrame();
      }
      if (this.metadataUpdateSuppressed$67CD) {
        com.coremedia.ui.logging.Logger.debug(PreviewPanelBase + ": updating metadata.");
        this.getMetadataServiceImpl().setRawMetadata(this.metadataUpdateSuppressed$67CD);
        this.updateProvidedPropertyCurrentPreviewMetadataTree$67CD();
        this.metadataUpdateSuppressed$67CD = undefined;
      }
    }
  }/*

  ////////////////////////////////////////////////////
  // PREVIEW (PROTOCOL) INITIALIZATION
  ////////////////////////////////////////////////////

  private*/ function initListener()/*:void*/ {
    this.previewExists$67CD = true;
    this.setPreviewLoading$67CD();
    var tempResolver/*:HTMLElement*/ = Ext.dom.Helper.createDom({tag: "a", href: Ext.getResourcePath("previewProtocol.js", null, "com.coremedia.ui.sdk__editor-components")});
    com.coremedia.cms.editor.sdk.messageService.registerMessageListener(this.previewIFrame$67CD.getEl().dom, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.READY,AS3.bind( this,"readyListener$67CD"));
    this.sendMessage$67CD(com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.INIT_CONFIRM, {url: tempResolver.href});
  }/*

  private*/ function readyListener(messageBody/*:Object*/)/*:void*/ {
    com.coremedia.ui.logging.Logger.debug(PreviewPanelBase + ": setting previewUrl " + messageBody.url);
    this.setPreviewUrl(messageBody.url === ABOUT_BLANK_URL$static ? "" : messageBody.url);

    this.getMetadataServiceImpl().setRawMetadata(messageBody.cmMetadata);
    this.updateProvidedPropertyCurrentPreviewMetadataTree$67CD();

    var iFrameEl/*:HTMLElement*/ = this.previewIFrame$67CD.getEl().dom;
    com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameEl, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.READY,AS3.bind( this,"readyListener$67CD"));

    com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameEl, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.UPDATE,AS3.bind( this,"updateListener$67CD"));
    com.coremedia.cms.editor.sdk.messageService.registerMessageListener(iFrameEl, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.UPDATE,AS3.bind( this,"updateListener$67CD"));

    if (!this.disableUserInteraction$67CD) {
      // If a context menu listener already exists (e.g. because preview is only reloaded), delete it.
      com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameEl, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.CLICK,AS3.bind( this,"clickMessageListener$67CD"));
      com.coremedia.cms.editor.sdk.messageService.registerMessageListener(iFrameEl, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.CLICK,AS3.bind( this,"clickMessageListener$67CD"));

      com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameEl, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.HOVER,AS3.bind( this,"hoverMessageListener$67CD"));
      com.coremedia.cms.editor.sdk.messageService.registerMessageListener(iFrameEl, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.HOVER,AS3.bind( this,"hoverMessageListener$67CD"));
    }

    // Ensure that elements are highlighted after preview reload
    AS3.getBindable(this,"focusForwarder") && AS3.getBindable(this,"focusForwarder").refireShow();

    if (!this.waitForReloadTimer$67CD) {
      this.unsetPreviewLoading();
    }
  }/*

  private*/ function updateListener(messageBody/*:Object*/)/*:void*/ {
    if (messageBody.cmMetadata) {
      if (this.isVisibleOnScreen$67CD() && !this.isContextMenuVisible$67CD()) {
        com.coremedia.ui.logging.Logger.debug(PreviewPanelBase + ": updating metadata.");
        this.getMetadataServiceImpl().setRawMetadata(messageBody.cmMetadata);
        this.updateProvidedPropertyCurrentPreviewMetadataTree$67CD();
      } else {
        this.metadataUpdateSuppressed$67CD = messageBody.cmMetadata;
      }
    }
  }/*

  private*/ function setPreviewLoading()/*:void*/ {
    if(!this.rendered) {
      return;
    }

    var topToolbar/*:Toolbar*/ =AS3.as( this.getDockedItems("toolbar[dock=\"top\"]")[0],  Ext.toolbar.Toolbar);
    if (!topToolbar.rendered || !this.isShowPreview() || !this.previewExists$67CD) {
      return;
    }
    if (!this.previewLoadMask$67CD) {
      var loadMaskCfg/*:LoadMask*/ = AS3.cast(Ext.LoadMask,{
        target: topToolbar
      });
      loadMaskCfg.msg = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewPanelToolbar_preview_loading');
      loadMaskCfg.ui = com.coremedia.ui.skins.LoadMaskSkin.OPAQUE.getSkin();

      this.previewLoadMask$67CD = new Ext.LoadMask(loadMaskCfg);
      this.previewLoadMask$67CD.disable();
    }
    if (this.previewLoadMask$67CD.disabled) {
      this.previewLoadMask$67CD.enable();
      this.previewLoadMask$67CD.show();

      // If, for whatever reason, the preview load mask does not disappear, clicking the toolbar should close it.
      this.previewLoadMask$67CD.getEl().addListener('click',AS3.bind( this,"unsetPreviewLoading"));
    }
  }/*

  // 'internal' for tests
  internal*/ function unsetPreviewLoading()/*:void*/ {
    if (this.previewLoadMask$67CD) {
      this.previewLoadMask$67CD.hide();
      this.previewLoadMask$67CD.disable();

      this.previewLoadMask$67CD.getEl().removeListener('click',AS3.bind( this,"unsetPreviewLoading"));
    }
  }/*

  // 'internal' for tests
  internal*/ function isLoading()/*:Boolean*/ {
    return this.previewLoadMask$67CD && !this.previewLoadMask$67CD.disabled && this.previewLoadMask$67CD['el'].isMasked();
  }/*

  ////////////////////////////////////////////////////
  // ADDITIONAL PREVIEW API
  ////////////////////////////////////////////////////

  /**
   * Get the metadata service for this preview panel.
   *
   * @return the metadata service.
   *
   * @see com.coremedia.cms.editor.sdk.preview.metadataIMetadataService
   * /
  public*/ function getMetadataService()/*:IMetadataService*/ {
    return this.getMetadataServiceImpl();
  }/*

  internal*/ function getMetadataServiceImpl()/*:MetadataServiceImpl*/ {
    if (!this.metadataService$67CD) {
      this.metadataService$67CD = new com.coremedia.cms.editor.sdk.preview.metadata.MetadataServiceImpl();
    }
    return this.metadataService$67CD;
  }/*

  /**
   * Get the preview dependency manager for this preview panel.
   *
   * @return the preview dependency manager
   *
   * @see com.coremedia.cms.editor.sdk.preview.PreviewDependencyManager
   * /
  internal*/ function getPreviewDependencyManager()/*:PreviewDependencyManager*/ {
    return this._previewDependencyManager$67CD;
  }/*

  /**
   * Registers a transformer for this preview panel instance only.
   * @param transformer the transformer function
   * @see com.coremedia.cms.editor.sdk.IEditorContext.registerPreviewUrlTransformer
   * /
  public*/ function registerTransformer(transformer/*:Function*/)/*:void*/ {
    this.transformers$67CD.push(transformer);
  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * Returns the preview url.
   * @return the preview url
   * /
  public*/ function getPreviewUrl()/*:String*/ {
    return this.previewUrl$67CD;
  }/*

  /**
   * Sets the preview url.
   * @param previewUrl the preview url
   * /
  public*/ function setPreviewUrl(previewUrl/*:String*/)/*:void*/ {
    var oldPreviewUrl/*:String*/ = this.previewUrl$67CD;
    this.previewUrl$67CD = previewUrl;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, PREVIEW_URL_PROPERTY$static, oldPreviewUrl, previewUrl);
  }/*

  /**
   * <p> The urlParameterBean is provided to store additional query parameters for the
   * preview URL. Anytime the bean changes, the preview is automatically reloaded when being visible the next time.
   * It provides a convenient way for modifying the preview url.</p>
   *
   * <p>Use the current <code>IEditorContext</code> to register global preview handlers.</p>
   *
   * @see com.coremedia.cms.editor.sdk.IEditorContext.registerPreviewUrlTransformer
   * @see com.coremedia.cms.editor.sdk.preview.PreviewURI
   * /
  public*/ function getUrlParameterBean()/*:Bean*/ {
    if (!this.reloader$67CD) {
      com.coremedia.ui.logging.Logger.info(PreviewPanelBase + " initializing the urlParameter magic bean reloader");
      this.reloader$67CD = new com.coremedia.cms.editor.sdk.preview.PreviewURIReloader(this);
    }
    return this.reloader$67CD.getModel();
  }/*

  /**
   * Whether to show a preview. To show a preview there must be a bound capType with
   * a known type and the type must not be excluded from preview.
   * @return whether to show a preview
   * /
  internal*/ function isShowPreview()/*:Boolean*/ {
    if (this.isShowPreviewForced()) {
      return true;
    }

    var currentPreviewable/*:Previewable*/ =AS3.as( AS3.getBindable(this,"bindTo").getValue(),  com.coremedia.ui.data.Previewable);
    if (!currentPreviewable) {
      return false;
    }

    var currentContent/*:CapObject*/ =AS3.as( AS3.getBindable(this,"bindTo").getValue(),  com.coremedia.cap.common.CapObject);
    if (!currentContent) {
      //the bound value is a previewable but not content
      //the value is supposed to be previewed without further check.
      return true;
    }
    var capType/*:CapType*/ = currentContent.getType_();
    if(!capType || com.coremedia.cms.editor.sdk.editorContext.getDocumentTypesWithoutPreview().indexOf(capType.getName()) !== -1) {
      return false;
    }

    if(capType) {
      var mayPreview/*:Function*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).getPreviewFilter(capType);
      if(mayPreview) {
        return mayPreview.call(null, AS3.getBindable(this,"bindTo").getValue());
      }
    }

    return true;
  }/*

  protected*/ function isShowPreviewForced()/*:Boolean*/ {
    return false;
  }/*

  ////////////////////////////////////////////////////
  // DIRECT UPDATE - RELOAD AFTER PREVIEW DEP CHANGE
  ////////////////////////////////////////////////////

  private*/ function previewDependencyChangedListener(metadataId/*:String*/, oldValue/*:**/, newValue/*:**/)/*:void*/ {
    //do not reload when receiving initial property value from server
    if (oldValue !== undefined) {
      // Try direct update if value is a string
      if (AS3.is(oldValue,  String)) {
        var messageBody/*:Object*/ = {
          ids: metadataId,
          oldValue: oldValue,
          newValue: newValue
        };
        this.sendMessage$67CD(com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.DIRECT_UPDATE, messageBody);
      }
      // Reload preview
      this.reloadFrameAfterTimeout$67CD();
    } else {
      com.coremedia.ui.logging.Logger.info(PreviewPanelBase + " no need to reload the preview frame");
    }
  }/*

  private*/ function reloadFrameAfterTimeout()/*:void*/ {
    var reloadAfterChangesDelay/*:Number*/ = com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.PREVIEW_RELOAD_DELAY);
    if(reloadAfterChangesDelay === undefined) {
      reloadAfterChangesDelay = PreviewPanelBase.DEFAULT_RELOAD_DELAY;
    }

    if(reloadAfterChangesDelay > 0) {
      if (this.isVisibleOnScreen$67CD() && !this.isContextMenuVisible$67CD()) {
        if (this.waitForReloadTimer$67CD) {
          window.clearTimeout(this.waitForReloadTimer$67CD);
        }
        com.coremedia.ui.logging.Logger.debug(PreviewPanelBase + " setting reload frame timer");
        this.waitForReloadTimer$67CD = window.setTimeout(AS3.bind(this,"reloadFrame"), reloadAfterChangesDelay * 1000);
      } else {
        this.reloadSuppressed$67CD = true;
      }
    }
  }/*

  ////////////////////////////////////////////////////
  // FOCUS FORWARDER SYNC
  ////////////////////////////////////////////////////

  public*/ function onPropertyShow(bean/*:Bean*/, tabTitle/*:String*/, property/*:String*/, isFocus/*:Boolean*/, setCurrentProperty/*:Boolean*/, sendState/*:Boolean*/, position/*:Number*/, distance/*:Number*/, scrollOnly/*:Boolean*/)/*:void*/ {
    // Do not set preview selection.
    // The selection shall only change on click events within the preview itself.

    // Do not change highlights while there is an active menu. Context and highlight menus reset all highlights
    // while hiding (see hide event handler). Without this change the chain of events would be as follows:
    // Context click on article image -> highlight image + open context menu -> context menu open triggers blur
    // of active property editor (eg. richtext) -> reset highlights
    if (!this.isContextMenuVisible$67CD()) {
      this.highlightProperty$67CD(bean, property);
    }
  }/*

  public*/ function onCollapsibleChange(collapsibleItemId/*:String*/, expanded/*:Boolean*/)/*:void*/ {
    // Ignore.
  }/*

////////////////////////////////////////////////////
  // HIGHLIGHTING CODE
  ////////////////////////////////////////////////////

  private*/ function highlightMetadataNodeAndRelated(clickedMetadataNode/*:MetadataTreeNode*/, scrollIntoView/*:Boolean = true*/)/*:void*/ {if(arguments.length<=1)scrollIntoView=true;
    // Highlight in document form and preview
    var beanAndProperty/*:Array*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.extractBeanAndPropertyFromMetadataNode(clickedMetadataNode);
    var bean/*:Bean*/ = undefined;
    var property/*:String*/ = undefined;
    if (beanAndProperty &&AS3.is( beanAndProperty[0],  com.coremedia.ui.data.Bean)) {
      bean =AS3.as( beanAndProperty[0],  com.coremedia.ui.data.Bean);
      property = beanAndProperty[1];
    }
    this.highlightProperty$67CD(bean, property, scrollIntoView);
  }/*

  private*/ function highlightProperty(bean/*:Bean*/, property/*:String*/, scrollIntoView/*:Boolean = true*/)/*:void*/ {var this$=this;if(arguments.length<=2)scrollIntoView=true;
    if (this._previewDependencyManager$67CD) {
      var allMetadataIds/*:Array*/ = this._previewDependencyManager$67CD.getMetadataIdsForBeanProperty(bean, property) || [];
      // filter out all metadata nodes whose (direct) parent is also contained in the set:
      var metadataIds/*:Array*/ = allMetadataIds.filter(function (metadataId/*:String*/)/*:Boolean*/ {
        var node/*:MetadataTreeNode*/ = this$.currentPreviewMetadataTree$67CD.getNode(metadataId);
        if (!node) {
          // should not happen, but rather be robust:
          return false;
        }
        var parent/*:MetadataTreeNode*/ = node.getParent();
        return !(parent && allMetadataIds.indexOf(parent.getId()) !== -1);
      });
      this.highlightMetadataIds(metadataIds, scrollIntoView);
    }
  }/*

  protected*/ function highlightMetadataIds(metadataIds/*:Array*/, scrollIntoView/*:Boolean*/)/*:void*/ {
    // Default metadata id array to empty array if undefined. This enables us to remove all
    // highlights from the preview.
    if (!metadataIds) {
      metadataIds = [];
    }

    var messageBody/*:Object*/ = {
      metadataIds: metadataIds
    };
    this.sendMessage$67CD(com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.HIGHLIGHT_ELEMENTS, messageBody);

    if (metadataIds.length > 0 && scrollIntoView) {
      this.sendMessage$67CD(com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.SCROLL_ELEMENTS_INTO_VIEW, messageBody);
    }
  }/*

  /**
   * @private Used by tests!
   * /
  internal*/ function scrollElementsIntoView(bean/*:Bean*/, property/*:String*/)/*:void*/ {
    if (this._previewDependencyManager$67CD) {
      var metadataIds/*:Array*/ = this._previewDependencyManager$67CD.getMetadataIdsForBeanProperty(bean, property) || [];
      if (metadataIds.length > 0) {
        this.sendMessage$67CD(com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.SCROLL_ELEMENTS_INTO_VIEW, {metadataIds:metadataIds});
      }
    }
  }/*

  ////////////////////////////////////////////////////
  // HOVER
  ////////////////////////////////////////////////////

  private*/ function hoverMessageListener(messageBody/*:Object*/)/*:void*/ {
    var nodeIdsToHighlight/*:Array*/ = [];

    if (!com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.DISABLE_PREVIEW_HOVER_FRAMES)) {
      var hoveredMetadataNodeId/*:String*/ = messageBody.hoveredMetadataNodeId;
      var hoveredMetadataNode/*:MetadataTreeNode*/ = this.getMetadataService().getMetadataTree().getNode(hoveredMetadataNodeId);

      var beanParentNode/*:MetadataTreeNode*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getFirstBeanParentNode(hoveredMetadataNode);
      var contentFromMetadata/*:Content*/ = (AS3.as(com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(beanParentNode),  com.coremedia.cap.content.Content));
      if (contentFromMetadata) {
        // correct multiple nested references to the same bean by searching upwards until another bean is found:
        do {
          var nextBeanParentNode/*:MetadataTreeNode*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getFirstBeanParentNode(beanParentNode, false);
          if (com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(nextBeanParentNode) !== contentFromMetadata) {
            break;
          }
          beanParentNode = nextBeanParentNode;
        } while (true);
      }
      var isCurrentDocument/*:Boolean*/ = contentFromMetadata && this.currentPreviewContent$67CD ? contentFromMetadata === this.currentPreviewContent$67CD : false;

      var isHoveringBeanNode/*:Boolean*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.isBeanMetadataNode(hoveredMetadataNode);
      var isHoveringPropertyNode/*:Boolean*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.isPropertyMetadataNode(hoveredMetadataNode);
      if ((isHoveringPropertyNode && isCurrentDocument) || (isHoveringBeanNode && !isCurrentDocument)) {
        nodeIdsToHighlight = [hoveredMetadataNodeId];
      } else if (!isHoveringBeanNode && !isCurrentDocument && beanParentNode) {
        nodeIdsToHighlight = [beanParentNode.getId()];
      }
    }

    this.sendMessage$67CD(com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.SECONDARY_HIGHLIGHT_ELEMENTS, {metadataIds: nodeIdsToHighlight});
  }/*

  private*/ function sendMessage(messageType/*:String*/, messageBody/*:Object*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.messageService.sendMessage(this.previewIFrame$67CD.getContentWindow(), messageType, messageBody);
  }/*

  ////////////////////////////////////////////////////
  // CLEAN-UP
  ////////////////////////////////////////////////////


  override protected*/ function onRemoved(destroying/*:Boolean*/)/*:void*/ {
    var iFrameEl/*:Element*/ = this.previewIFrame$67CD.getEl();
    if (iFrameEl) {
      var iFrameElDOM/*:HTMLElement*/ = iFrameEl.dom;
      com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameElDOM, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.INIT,AS3.bind( this,"initListener$67CD"));
      com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameElDOM, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.CLICK,AS3.bind( this,"clickMessageListener$67CD"));
      com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameElDOM, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.HOVER,AS3.bind( this,"hoverMessageListener$67CD"));
      com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameElDOM, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.UPDATE,AS3.bind( this,"updateListener$67CD"));
      com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameElDOM, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.READY,AS3.bind( this,"readyListener$67CD"));
    }
    if (Ext.dom.Element["data"] && this.getTopToolbar().getEl() && this.getTopToolbar().getEl().dom) {
      var mask/*:Element*/ = Ext.dom.Element["data"](this.getTopToolbar().getEl().dom, "mask");
      mask && mask.removeListener('click',AS3.bind( this,"unsetPreviewLoading"));
    }
    if (this._previewDependencyManager$67CD) {
      this._previewDependencyManager$67CD.cleanup();
    }
    this.visibleOnScreenValueExpression$67CD.removeChangeListener(AS3.bind(this,"checkForSuppressedOperations$67CD"));

    AS3.getBindable(this,"bindTo").removeChangeListener(AS3.bind(this,"contentChanged$67CD"));
    AS3.getBindable(this,"focusForwarder") && AS3.getBindable(this,"focusForwarder").removeListener(this);
    Ext.panel.Panel.prototype.onDestroy.call(this);
    Ext.destroy(this.contextMenu, this.previewLoadMask$67CD);
    this.contextMenu = null;
    this.previewLoadMask$67CD = null;

    Ext.panel.Panel.prototype.onRemoved.call(this,destroying);
  }/*

  ////////////////////////////////////////////////////
  // CONTEXT MENU STUFF
  ////////////////////////////////////////////////////

  private*/ function clickMessageListener(messageBody/*:Object*/)/*:void*/ {
    var clickedMetadataNodeId/*:String*/ = messageBody.clickedMetadataNodeId;
    var candidate/*:MetadataTreeNode*/ = this.getMetadataService().getMetadataTree().getNode(clickedMetadataNodeId);

    // Search towards the metadata tree root until a clickable node is found.
    while (candidate) {
      var beanParentNode/*:MetadataTreeNode*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getFirstBeanParentNode(candidate);
      var contentFromMetadata/*:Content*/ = (AS3.as(com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(beanParentNode),  com.coremedia.cap.content.Content));
      var isCurrentDocument/*:Boolean*/ = contentFromMetadata && this.currentPreviewContent$67CD ? contentFromMetadata === this.currentPreviewContent$67CD : false;

      // Only allow preview selection of bean metadata nodes.
      if (!com.coremedia.cms.editor.sdk.preview.MetadataHelper.isBeanMetadataNode(candidate) && !isCurrentDocument) {
        candidate = beanParentNode;
        continue;
      }

      // Only update context and highlight elements if the clicked node does not represent
      // the current preview document.
      if ((com.coremedia.cms.editor.sdk.preview.MetadataHelper.isPropertyMetadataNode(candidate) && isCurrentDocument) ||
              (com.coremedia.cms.editor.sdk.preview.MetadataHelper.isBeanMetadataNode(candidate) && !isCurrentDocument)) {
        var showContextMenu/*:Boolean*/ = ! !this.contextMenu && messageBody.clickType === 'contextClick' && !isCurrentDocument;
        this.updateProvidedPropertyCurrentPreviewMetadataSelection$67CD(candidate, !showContextMenu);

        if (showContextMenu) {
          this.showContextMenuOnPreview$67CD(messageBody.eventCoords);
        }
        return;
      }

      candidate = candidate.getParent();
    }
  }/*

  private*/ function showContextMenuOnPreview(coords/*:Array*/)/*:void*/ {var this$=this;
    //hide the old menu before showing it anew
    this.isContextMenuVisible$67CD() && this.contextMenu.hide();

    var posX/*:int*/ = (coords[0] * this.innerPreviewPanelCmp$67CD.getZoom()) + this.previewIFrame$67CD.getEl().getX();
    var posY/*:int*/ = (coords[1] * this.innerPreviewPanelCmp$67CD.getZoom()) + this.previewIFrame$67CD.getEl().getY();

    // Invoke later to prevent menu item hiding/showing while menu is already visible.
    // However, the context menu should not rely on this later invoking. It needs to be implemented
    // robustly in the face of dynamically hidden/shown items (like the standard PreviewContextMenu is).
    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
      // Show context menu.
      var show/*:Boolean*/ = this$.contextMenu.fireEvent("beforeshow", this$.contextMenu);
      if (show) {
        com.coremedia.ui.components.IFrameMgr.getInstance().showShims();

        // Although allowed by the API, passing the coordinates to Component.showAt()
        // as an array leads to occasional problems (wrong positioning of menu).
        // Better to pass the coordinates as two numbers.
        var x/*:**/ = Math.max(posX, 0);
        var y/*:Number*/ = Math.max(posY, 0);
        this$.contextMenu.showAt(x, y);
        this$.contextMenu.on('hide', function ()/*:void*/ {
          com.coremedia.ui.components.IFrameMgr.getInstance().hideShims();
          this$.highlightMetadataIds(undefined, false);
          this$.checkForSuppressedOperations$67CD();
        }, null, {single: true});
      }
    });
  }/*

  private*/ function updateProvidedPropertyCurrentPreviewMetadataSelection(metadata/*:MetadataTreeNode*/, scrollIntoView/*:Boolean = true*/)/*:void*/ {if(arguments.length<=1)scrollIntoView=true;
    if (metadata !== this.currentPreviewMetadataSelection$67CD) {
      var oldValue/*:MetadataTreeNode*/ = this.currentPreviewMetadataSelection$67CD;
      this.currentPreviewMetadataSelection$67CD = metadata;
      com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, PreviewPanelBase.CURRENT_PREVIEW_METADATA_SELECTION_VARIABLE_NAME, oldValue, this.currentPreviewMetadataSelection$67CD);
      this.highlightMetadataNodeAndRelated$67CD(this.currentPreviewMetadataSelection$67CD, scrollIntoView);
      this.syncFocusBackToDocumentForm$67CD(this.currentPreviewMetadataSelection$67CD);
    }
  }/*

  /**
   * Walk up metadata tree to find a property node that matches one of the current preview
   * document's properties. We then try to focus this property in the document form.
   * @param nodeToSync
   * /
  private*/ function syncFocusBackToDocumentForm(nodeToSync/*:MetadataTreeNode*/)/*:void*/ {var this$=this;
    var rootPropNode/*:MetadataTreeNode*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getFirstParentNodeMatching(nodeToSync, function (metadataNode/*:MetadataTreeNode*/)/*:Boolean*/ {
      var beanAndProperty/*:Array*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.extractBeanAndPropertyFromMetadataNode(metadataNode);
      if (beanAndProperty) {
        return beanAndProperty[1] && beanAndProperty[1] === com.coremedia.cms.editor.sdk.preview.MetadataHelper.getPropertyMetadataValue(metadataNode) &&AS3.as( beanAndProperty[0],  com.coremedia.cap.content.Content) === this$.currentPreviewContent$67CD;
      }
      return false;
    });
    if (rootPropNode) {
      var beanAndProperty/*:Array*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.extractBeanAndPropertyFromMetadataNode(rootPropNode);
      AS3.getBindable(this,"focusForwarder") && AS3.getBindable(this,"focusForwarder").forwardShowToManager(beanAndProperty[0], null, beanAndProperty[1], false, false, NaN, NaN, false);
    }
  }/*

  private*/ function updateProvidedPropertyCurrentPreviewContent()/*:void*/ {
    var oldValue/*:Previewable*/ = this.currentPreviewContent$67CD;
    this.currentPreviewContent$67CD =AS3.as( AS3.getBindable(this,"bindTo").getValue(),  com.coremedia.ui.data.Previewable);
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, PreviewPanelBase.CURRENT_PREVIEW_CONTENT_VARIABLE_NAME, oldValue, this.currentPreviewContent$67CD);
  }/*

  private*/ function updateProvidedPropertyCurrentPreviewMetadataTree()/*:void*/ {
    var oldValue/*:MetadataTree*/ = this.currentPreviewMetadataTree$67CD;
    this.currentPreviewMetadataTree$67CD = this.getMetadataService().getMetadataTree();
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, PreviewPanelBase.CURRENT_PREVIEW_METADATA_TREE_VARIABLE_NAME, oldValue, this.currentPreviewMetadataTree$67CD);
  }/*

  ////////////////////////////////////////////////////
  // IOC STUFF
  ////////////////////////////////////////////////////

  [ProvideToExtChildren]
  public*/ function getCurrentPreviewMetadataSelection()/*:MetadataTreeNode*/ {
    return this.currentPreviewMetadataSelection$67CD;
  }/*

  internal*/ function setCurrentPreviewMetadataSelection(node/*:MetadataTreeNode*/)/*:void*/ {
    this.updateProvidedPropertyCurrentPreviewMetadataSelection$67CD(node);
  }/*

  [ProvideToExtChildren]
  public*/ function getCurrentPreviewMetadataTree()/*:MetadataTree*/ {
    return this.currentPreviewMetadataTree$67CD;
  }/*

  internal*/ function setCurrentPreviewMetadataTree(tree/*:MetadataTree*/)/*:void*/ {
    // metadata tree is read only.
  }/*

  [ProvideToExtChildren]
  public*/ function getCurrentPreviewContent()/*:Previewable*/ {
    return this.currentPreviewContent$67CD;
  }/*

  public*/ function getCurrentPreviewContentValueExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.create(PreviewPanelBase.CURRENT_PREVIEW_CONTENT_VARIABLE_NAME, this);
  }/*

  [ProvideToExtChildren]
  public*/ function getPreferredDevice()/*:String*/ {
    return this.prefDevice$67CD;
  }/*

  internal*/ function getActivePreviewPanelValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:String*/ {
      if(this$.isShowPreview() === undefined) {
        return undefined;
      }
      return this$.isShowPreview() ? 'innerPreviewPanel' : PreviewPanelBase.NO_PREVIEW_ITEM_ID;
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      mixins: ["com.coremedia.cms.editor.sdk.premular.FocusListener"],
      metadata: {
        "": [
          "Event",
          [
            "name",
            "previewUrl"
          ],
          "PublicApi"
        ],
        getCurrentPreviewMetadataSelection: ["ProvideToExtChildren"],
        getCurrentPreviewMetadataTree: ["ProvideToExtChildren"],
        getCurrentPreviewContent: ["ProvideToExtChildren"],
        getPreferredDevice: ["ProvideToExtChildren"]
      },
      contextMenu: null,
      previewIFrame$67CD: null,
      innerPreviewPanelCmp$67CD: null,
      _previewDependencyManager$67CD: null,
      reloader$67CD: null,
      metadataService$67CD: null,
      previewUrl$67CD: null,
      waitForReloadTimer$67CD: null,
      transformers$67CD: null,
      currentPreviewContent$67CD: null,
      currentPreviewMetadataSelection$67CD: null,
      currentPreviewMetadataTree$67CD: null,
      prefDevice$67CD: null,
      disableUserInteraction$67CD: false,
      previewExists$67CD: false,
      previewLoadMask$67CD: null,
      visibleOnScreenValueExpression$67CD: null,
      reloadSuppressed$67CD: false,
      metadataUpdateSuppressed$67CD: undefined,
      constructor: PreviewPanelBase$,
      super$67CD: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      timestampUrlTransformer$67CD: timestampUrlTransformer,
      isContextMenuVisible$67CD: isContextMenuVisible,
      contentChanged$67CD: contentChanged,
      updatePreview$67CD: updatePreview,
      getCurrentPreviewUri: getCurrentPreviewUri,
      getTransformers: getTransformers,
      reloadFrame: reloadFrame,
      reloadFrameWhenVisible: reloadFrameWhenVisible,
      previewUrlChanged$67CD: previewUrlChanged,
      isVisibleOnScreen$67CD: isVisibleOnScreen,
      checkForSuppressedOperations$67CD: checkForSuppressedOperations,
      initListener$67CD: initListener,
      readyListener$67CD: readyListener,
      updateListener$67CD: updateListener,
      setPreviewLoading$67CD: setPreviewLoading,
      unsetPreviewLoading: unsetPreviewLoading,
      isLoading: isLoading,
      getMetadataService: getMetadataService,
      getMetadataServiceImpl: getMetadataServiceImpl,
      getPreviewDependencyManager: getPreviewDependencyManager,
      registerTransformer: registerTransformer,
      getPreviewUrl: getPreviewUrl,
      setPreviewUrl: setPreviewUrl,
      getUrlParameterBean: getUrlParameterBean,
      isShowPreview: isShowPreview,
      isShowPreviewForced: isShowPreviewForced,
      previewDependencyChangedListener$67CD: previewDependencyChangedListener,
      reloadFrameAfterTimeout$67CD: reloadFrameAfterTimeout,
      onPropertyShow: onPropertyShow,
      onCollapsibleChange: onCollapsibleChange,
      highlightMetadataNodeAndRelated$67CD: highlightMetadataNodeAndRelated,
      highlightProperty$67CD: highlightProperty,
      highlightMetadataIds: highlightMetadataIds,
      scrollElementsIntoView: scrollElementsIntoView,
      hoverMessageListener$67CD: hoverMessageListener,
      sendMessage$67CD: sendMessage,
      onRemoved: onRemoved,
      clickMessageListener$67CD: clickMessageListener,
      showContextMenuOnPreview$67CD: showContextMenuOnPreview,
      updateProvidedPropertyCurrentPreviewMetadataSelection$67CD: updateProvidedPropertyCurrentPreviewMetadataSelection,
      syncFocusBackToDocumentForm$67CD: syncFocusBackToDocumentForm,
      updateProvidedPropertyCurrentPreviewContent$67CD: updateProvidedPropertyCurrentPreviewContent,
      updateProvidedPropertyCurrentPreviewMetadataTree$67CD: updateProvidedPropertyCurrentPreviewMetadataTree,
      getCurrentPreviewMetadataSelection: getCurrentPreviewMetadataSelection,
      setCurrentPreviewMetadataSelection: setCurrentPreviewMetadataSelection,
      getCurrentPreviewMetadataTree: getCurrentPreviewMetadataTree,
      setCurrentPreviewMetadataTree: setCurrentPreviewMetadataTree,
      getCurrentPreviewContent: getCurrentPreviewContent,
      getCurrentPreviewContentValueExpression: getCurrentPreviewContentValueExpression,
      getPreferredDevice: getPreferredDevice,
      getActivePreviewPanelValueExpression: getActivePreviewPanelValueExpression,
      config: {
        bindTo: null,
        focusForwarder: null
      },
      statics: {
        DEFAULT_RELOAD_DELAY: 1,
        NO_PREVIEW_ITEM_ID: 'noPreview',
        CURRENT_PREVIEW_METADATA_SELECTION_VARIABLE_NAME: "currentPreviewMetadataSelection",
        CURRENT_PREVIEW_METADATA_TREE_VARIABLE_NAME: "currentPreviewMetadataTree",
        CURRENT_PREVIEW_CONTENT_VARIABLE_NAME: "currentPreviewContent"
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.Component",
        "Ext.ComponentManager",
        "Ext.LoadMask",
        "Ext.dom.Element",
        "Ext.dom.Helper",
        "Ext.menu.Menu",
        "Ext.panel.Panel",
        "Ext.tab.Panel",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cap.common.CapObject",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.FocusListener",
        "com.coremedia.ui.components.IFrameMgr",
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.data.Previewable",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.impl.TimeTracker",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.skins.LoadMaskSkin",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames",
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.messageService",
        "com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel",
        "com.coremedia.cms.editor.sdk.preview.MetadataHelper",
        "com.coremedia.cms.editor.sdk.preview.PreviewDependencyManager",
        "com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes",
        "com.coremedia.cms.editor.sdk.preview.PreviewURI",
        "com.coremedia.cms.editor.sdk.preview.PreviewURIReloader",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataServiceImpl",
        "com.coremedia.cms.editor.sdk.util.PreferencesUtil"
      ]
    };
});
