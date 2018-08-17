Ext.define("com.coremedia.cms.editor.sdk.premular.PremularBase", function(PremularBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentObject;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.results.CheckInResult;
import com.coremedia.cap.content.results.RevertResult;
import com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaTab;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.plugins.TabExpandPlugin;
import com.coremedia.cms.editor.sdk.premular.differencing.DiffManager;
import com.coremedia.cms.editor.sdk.preview.PreviewPanel;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal;
import com.coremedia.ui.actions.OpenDialogAction;
import com.coremedia.ui.components.AsynchronouslyClosable;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.data.validation.Issues;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.Ext;
import ext.StringUtil;
import ext.container.Container;
import ext.panel.Panel;
import ext.tab.TabPanel;

/**
 * The base class for the premular component. This class coordinates
 * the wiring of its various components and it synchronizes their states.
 * A premular can be shown in various states, which are represented
 * by individual PremularState objects.
 * /
[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class PremularBase extends WorkAreaTab implements AsynchronouslyClosable {
  /**
   * The name of the event that is fired when the state
   * of this premular changes.
   *
   * @private
   * /
  public static const STATE_EVENT_NAME:String = "premularState";
  /**
   * The name of the event that is fired when the read-only content
   * of this premular changes.
   *
   * @private
   * /
  public static const READ_ONLY_CONTENT_PROPERTY_NAME:String = "readOnlyContent";

  /**
   * The itemId of the premular mode toolbar
   * /
  internal static const PREMULAR_MODE_TOOLBAR_ITEM_ID:String = "premularModeToolbar";
  /**
   * The itemId of the button to switch the differencing mode on and off.
   * /
  public static const SWITCH_DIFFERENCING_BUTTON_ITEM_ID:String = "switchDifferencingButton";
  /**
   * The itemId of the toolbar associated with the read-only document panel
   * /
  internal static const READ_ONLY_DOCUMENT_FORM_TOOLBAR_DISPATCHER_ITEM_ID:String = "readOnlyDocumentFormToolbarDispatcher";
  /**
   * The itemId of the toolbar associated with the read-only document panel
   * /
  internal static const READ_ONLY_DOCUMENT_FORM_TOOLBAR_CONTAINER_ITEM_ID:String = "readOnlyDocumentFormToolbarContainer";
  /**
   * The itemId of the read-only document panel
   * /
  internal static const READ_ONLY_DOCUMENT_PANEL_ITEM_ID:String = "readOnlyDocumentPanel";
  /**
   * The itemId of the separator between read-only panel and form
   * /
  internal static const DOCUMENT_PANEL_SPLIT_BAR_ITEM_ID:String = "documentPanelSplitBar";
  /**
   * The itemId of the separator between read-only panel header and form header
   * /
  internal static const DOCUMENT_PANEL_HEADER_SPLIT_BAR_ITEM_ID:String = "documentPanelHeaderSplitBar";
  /**
   * The itemId of the toolbar associated with the central document panel
   * /
  public static const DOCUMENT_FORM_TOOLBAR_ITEM_ID:String = "documentToolbar";
  /**
   * The itemId of the toolbar associated with the central document panel
   * /
  internal static const DOCUMENT_FORM_TOOLBAR_CONTAINER_ITEM_ID:String = "documentToolbarContainer";
  /**
   * The itemId of the document panel
   * /
  internal static const DOCUMENT_PANEL_ITEM_ID:String = "containerForm";
  /**
   * The itemId of the whole document (left-hand side) container
   * /
  internal static const DOCUMENT_CONTAINER_ITEM_ID:String = "documentContainer";
  /**
   * The itemId of the tabs component
   * /
  internal static const TABS_ITEM_ID:String = "tabs";
  /**
   * The itemId of the movable splitter between form and preview
   * /
  internal static const PREVIEW_SPLIT_BAR_ITEM_ID:String = "previewSplitBar";
  /**
   * The itemId of the preview panel
   * /
  internal static const PREVIEW_PANEL_ITEM_ID:String = "previewPanel";

  /**
   * The default min width for the document container.
   * /
  internal static const DEFAULT_DOCUMENT_CONTAINER_MIN_WIDTH:Number = 470;

  private static const*/var READ_ONLY_DOCUMENT_PANEL_VISIBLE_CLS$static/*:String*/ = "read-only-document-panel-visible";/*

  [Bindable]
  public var premularConfiguration:PremularConfiguration;

  /**
   * A value expression evaluating to the content shown in the
   * central document panel.
   * /
  private var contentBeanValueExpression:ValueExpression;
  /**
   * A value expression evaluating to the master version of the
   * content shown in the central document panel.
   * /
  private var masterVersionValueExpression:ValueExpression;
  /**
   * A value expression evaluating to the content shown in the
   * read-only document panel.
   * /
  private var readOnlyContentBeanValueExpression:ValueExpression;

  /**
   * The premular focus manager, which takes care of synchronizing
   * the alignment and the focus of the individual panels.
   * /
  private var premularFocusManager:PremularFocusManager;

  /**
   * The object in which all property field in all document type-specific
   * forms of the central document panel are registered.
   * /
  private var documentFormPropertyFieldRegistry:PropertyFieldRegistry;
  /**
   * The object in which all property field in all document type-specific
   * forms of the read-only document panel are registered.
   * /
  private var readOnlyPropertyFieldRegistry:PropertyFieldRegistry;

  private var diffManager:DiffManager;

  private var readOnlyDocumentPanelVisible:Boolean = false;

  /**
   * The content currently shown in the read-only document form.
   * /
  private var readOnlyContent:Content;

  /**
   * Whether the tabs component is currently being updated.
   * /
  private var isUpdatingTabs:Boolean = false;

  /**
   * The document tab panel whose tab state is currently reflected
   * in the visible tabs.
   * /
  private var observedDocumentTabPanel:DocumentTabPanel = null;

  private var readOnlyContentMonitorValueExpression:ValueExpression;

  private var hiddenTabs:Array =*/function hiddenTabs_(){this.hiddenTabs$L_z5=( []);}/*;
  private var preventCloseMessage:Boolean = false;

  /**
   * Base class for the tabs
   *
   * @param config the config object
   * /
  public*/ function PremularBase$(config/*:Premular = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"entity" , config.content);
    this.super$L_z5(config);hiddenTabs_.call(this);;

    this.initReadOnlyContentMonitor$L_z5();
    this.getDiffManager().initialize();

    this.addListener("beforerender",AS3.bind( this,"createItems$L_z5"));
    this.addListener("beforeclose",AS3.bind( this,"beforeClose$L_z5"));
    this.addListener("activate",AS3.bind( this,"activated$L_z5"));

    this.getPremularConfigurationVE(null).addChangeListener(AS3.bind(this,"applyPremularConfiguration$L_z5"));
  }/*


  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.desktop.WorkAreaTab.prototype.afterRender.call(this);
    this.applyPremularConfiguration$L_z5();
  }/*

  internal*/ function handleCollapse(itemId/*:String*/)/*:void*/ {
    var premularConfig/*:PremularConfiguration*/ = this.getPremularConfig$L_z5();

    switch (itemId) {
      case PremularBase.READ_ONLY_DOCUMENT_PANEL_ITEM_ID: {
        this.readOnlyDocumentPanelVisible$L_z5 = false;
        premularConfig.readOnlyContentObject = null;
        break;
      }
      case PremularBase.DOCUMENT_PANEL_ITEM_ID: {
        if (premularConfig.showPreview) {
          premularConfig.showForm = false;
        } else {
          premularConfig.showPreview = true;
        }
        break;
      }
      case PremularBase.PREVIEW_PANEL_ITEM_ID: {
        if (premularConfig.showForm) {
          premularConfig.showPreview = false;
        } else {
          premularConfig.showForm = true;
          premularConfig.readOnlyContentObject = this.getReadOnlyContentObject();
          this.readOnlyDocumentPanelVisible$L_z5 = premularConfig.readOnlyContentObject != null;
        }
        break;
      }
    }

    this.premularStateUpdated$L_z5();
  }/*

  internal*/ function handleExpand(itemId/*:String*/)/*:void*/ {
    var premularConfig/*:PremularConfiguration*/ = this.getPremularConfig$L_z5();

    switch (itemId) {
      case PremularBase.READ_ONLY_DOCUMENT_PANEL_ITEM_ID: {
        this.readOnlyDocumentPanelVisible$L_z5 = premularConfig.showForm;
        premularConfig.readOnlyContentObject = this.getReadOnlyContentObject();
        break;
      }
      case PremularBase.DOCUMENT_PANEL_ITEM_ID: {
        premularConfig.showForm = true;
        break;
      }
      case PremularBase.PREVIEW_PANEL_ITEM_ID: {
        premularConfig.showPreview = true;
        break;
      }
    }

    this.premularStateUpdated$L_z5();
  }/*

  override protected*/ function assumeState(tabState/*:Object*/)/*:Boolean*/ {
    if (com.coremedia.cms.editor.sdk.desktop.WorkAreaTab.prototype.assumeState.call(this,tabState)) {
      this.getPremularConfig$L_z5().applyState(tabState);
      this.applyPremularConfiguration$L_z5();
      return true;
    }
    return false;
  }/*

  private*/ function applyPremularConfiguration()/*:void*/ {
    var premularConfig/*:PremularConfiguration*/ = this.getPremularConfigurationVE(this.initialConfig.premularConfiguration).getValue();
    if (premularConfig.readOnlyContentObject) {
      this.openInReadOnlyDocumentPanel(premularConfig.readOnlyContentObject);
    } else {
      this.closeReadOnlyDocumentPanel();
    }

    if (premularConfig.showPreview === true) {
      this.openPreview();
    } else if (premularConfig.showPreview === false) {
      this.closePreview();
    }

    if (premularConfig.showForm === true) {
      this.openForm();
    } else if (premularConfig.showForm === false) {
      this.closeForm();
    }

    if (AS3.is(premularConfig.activeTabIndex,  Number)) {
      this.getTabs() && this.getTabs().setActiveTab(premularConfig.activeTabIndex );
    }
  }/*

  private*/ function initReadOnlyContentMonitor()/*:void*/ {
    this.readOnlyContentMonitorValueExpression$L_z5 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"monitorReadOnlyContent$L_z5"));
    // Make sure the method monitorReadOnlyContent is executed whenever
    // its dependencies change.
    this.readOnlyContentMonitorValueExpression$L_z5.addChangeListener(Ext.emptyFn);
  }/*

  private*/ function cleanUpReadOnlyContentMonitor()/*:void*/ {
    this.readOnlyContentMonitorValueExpression$L_z5.removeChangeListener(Ext.emptyFn);
  }/*

  private*/ function monitorReadOnlyContent()/*:void*/ {
    var readOnlyContent/*:Content*/ = this.getReadOnlyContent();
    if (readOnlyContent && readOnlyContent.isDestroyed()) {
      this.closeReadOnlyDocumentPanel();
      this.setReadOnlyContent$L_z5(null);
    }
  }/*

  private*/ function createItems()/*:void*/ {
    // Now that the components have been created, we can complete the setup.
    this.addTabsListeners$L_z5();

    // The components have been created and can be made visible or invisible as necessary.
    this.updateVisibility$L_z5();
  }/*

  /**
   * The content that should be edited in this panel.
   *
   * &lt;p>This option can be set as part of the state when opening a tab via WorkAreaTabManager.&lt;/p>
   *
   * @see com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManager#openTab()
   * /
  [ExtConfig]
  public var content:Content;

  private var premularConfigurationVE:ValueExpression;

  /**
   * Return the content currently shown in this premular.
   * This method is dependency-tracked.
   *
   * @return the content
   * /
  [ProvideToExtChildren]
  public*/ function getContent()/*:Content*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME);
    return this.content;
  }/*

  internal*/ function getPremularModeToolbar()/*:Container*/ {
    return AS3.cast(Ext.container.Container,this.queryById(PremularBase.PREMULAR_MODE_TOOLBAR_ITEM_ID));
  }/*

  internal*/ function getReadOnlyDocumentPanel()/*:DocumentPanel*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentPanel,this.queryById(PremularBase.READ_ONLY_DOCUMENT_PANEL_ITEM_ID));
  }/*

  internal*/ function getReadOnlyDocumentFormToolbarContainer()/*:Container*/ {
    return AS3.cast(Ext.container.Container,this.queryById(PremularBase.READ_ONLY_DOCUMENT_FORM_TOOLBAR_CONTAINER_ITEM_ID));
  }/*

  internal*/ function getDocumentPanelSplitBox()/*:Component*/ {
    return AS3.cast(Ext.Component,this.queryById(PremularBase.DOCUMENT_PANEL_SPLIT_BAR_ITEM_ID));
  }/*

  internal*/ function getDocumentPanelHeaderSplitBox()/*:Component*/ {
    return AS3.cast(Ext.Component,this.queryById(PremularBase.DOCUMENT_PANEL_HEADER_SPLIT_BAR_ITEM_ID));
  }/*

  internal*/ function getDocumentPanel()/*:DocumentPanel*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentPanel,this.queryById(PremularBase.DOCUMENT_PANEL_ITEM_ID));
  }/*

  internal*/ function getDocumentContainer()/*:Container*/ {
    return AS3.cast(Ext.container.Container,this.queryById(PremularBase.DOCUMENT_CONTAINER_ITEM_ID));
  }/*

  internal*/ function getDocumentFormToolbarContainer()/*:Container*/ {
    return AS3.cast(Ext.container.Container,this.queryById(PremularBase.DOCUMENT_FORM_TOOLBAR_CONTAINER_ITEM_ID));
  }/*

  internal*/ function getTabs()/*:TabPanel*/ {
    return AS3.cast(Ext.tab.Panel,this.queryById(PremularBase.TABS_ITEM_ID));
  }/*

  internal*/ function getPreviewSplitBox()/*:Component*/ {
    return AS3.cast(Ext.Component,this.queryById(PremularBase.PREVIEW_SPLIT_BAR_ITEM_ID));
  }/*

  internal*/ function getPreviewPanel()/*:PreviewPanel*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewPanel,this.queryById(PremularBase.PREVIEW_PANEL_ITEM_ID));
  }/*

  private*/ function addTabsListeners()/*:void*/ {
    // Track the TabbedDocumentFormDispatcher, so that the displayed tab are synchronized
    // with the tabs available for the currently used document type.
    var dispatcher/*:TabbedDocumentFormDispatcher*/ = this.getDocumentPanel().getTabbedDocumentFormDispatcher();
    dispatcher.addListener('activeItem',AS3.bind( this,"updateTabsFromDocumentTabPanel$L_z5"));
    if (!dispatcher.rendered) {
      dispatcher.addListener('afterRender',AS3.bind( this,"updateTabsFromDocumentTabPanel$L_z5"), this, {
        single:true
      });
    }
    this.updateTabsFromDocumentTabPanel$L_z5();

    // When a tab of the tabs component is clicked, forward this event
    // to the individual panels.
    this.getTabs().addListener("tabchange",AS3.bind( this,"tabChanged$L_z5"));
  }/*

  private*/ function updateTabsFromDocumentTabPanel()/*:void*/ {var this$=this;
    this.isUpdatingTabs$L_z5 = true;

    try {
      // Remove previous listeners. New listeners will be attached soon.
      this.removeListenersFromObservedDocumentTabPanel$L_z5();

      // Clear the list of tabs. New tabs will be created soon.
      var tabs/*:TabPanel*/ = this.getTabs();
      tabs.removeAll(true);

      // hiddenTabs have already been removed from TabPanel via tabExpandPlugin.refresh() without destroying them - so do that now
      this.hiddenTabs$L_z5.forEach(function (tab/*:Panel*/)/*:void*/ {
        if (AS3.is(tab.destroy,  Function)) {
          tab.destroy();
        }
      });
      this.hiddenTabs$L_z5 = [];

      // Determine the current tab panel, which might change depending on
      // the current document type.
      var dispatcher/*:TabbedDocumentFormDispatcher*/ = this.getDocumentPanel().getTabbedDocumentFormDispatcher();
      var documentTabPanel/*:DocumentTabPanel*/ =AS3.as( dispatcher.getActiveItem(),  com.coremedia.cms.editor.sdk.premular.DocumentTabPanel);
      if (documentTabPanel) {
        // Remember from which object to remove the listeners.
        this.observedDocumentTabPanel$L_z5 = documentTabPanel;
        // Make sure to update the tabs component timely.
        documentTabPanel.addListener("add",AS3.bind( this,"updateTabsFromDocumentTabPanel$L_z5"), null, {
          // Only react to additions of direct children. Ignore structural changes within a tab.
          target: documentTabPanel
        });
        documentTabPanel.addListener("tabchange",AS3.bind( this,"updateActiveTabFromDocumentTabPanel$L_z5"));
        // Add one visible tab per tab of the panel.
        documentTabPanel.itemCollection.each(function(item/*:Component*/)/*:void*/ {
          var autoHideEnabled/*:Boolean*/ = false;
          var documentForm/*:DocumentForm*/ =AS3.as( item,  com.coremedia.cms.editor.sdk.premular.DocumentForm);
          if(documentForm) {
            autoHideEnabled = documentForm.isAutoHideEnabled();
          }
          var title/*:String*/ =AS3.as( item['title'],  String);
          if (title) {
            var tabConfig/*:Panel*/ = AS3.cast(Ext.panel.Panel,{});
            tabConfig.itemId = item.getItemId();
            tabConfig["autoHide"] = autoHideEnabled;
            AS3.setBindable(tabConfig,"title" , title);

            var tabComponent/*:Panel*/ = tabs.add(tabConfig);
            if (autoHideEnabled) {
              this$.hiddenTabs$L_z5.push(tabComponent); // remember the tab component so we can call destroy() on it afterwards
            }
          }
        });
        // Make sure to select a tab. The previous selection has been destroyed.
        this.updateActiveTabFromDocumentTabPanel$L_z5();
      }

      //TODO move plugin into a tabbed component
      var tabExpandPlugin/*:TabExpandPlugin*/ =AS3.as( this.getTabs().getPlugin('tabExpandPlugin'),  com.coremedia.cms.editor.sdk.plugins.TabExpandPlugin);
      if(tabExpandPlugin) {
        tabExpandPlugin.refresh();
      }
      tabs.updateLayout();
    } finally {
      this.isUpdatingTabs$L_z5 = false;
    }
  }/*

  private*/ function removeListenersFromObservedDocumentTabPanel()/*:void*/ {
    if (this.observedDocumentTabPanel$L_z5) {
      this.observedDocumentTabPanel$L_z5.removeListener("add",AS3.bind( this,"updateTabsFromDocumentTabPanel$L_z5"));
      this.observedDocumentTabPanel$L_z5.removeListener("tabchange",AS3.bind( this,"updateActiveTabFromDocumentTabPanel$L_z5"));
    }
  }/*

  /**
   * Transfer the selection of a tab from the document panel to
   * the tabs component. Identification of tabs is based on the
   * title.
   * /
  private*/ function updateActiveTabFromDocumentTabPanel()/*:void*/ {
    if (this.observedDocumentTabPanel$L_z5) {
      var activeTab/*:Component*/ = this.observedDocumentTabPanel$L_z5.getActiveTab();
      if (activeTab) {
        var title/*:String*/ = activeTab['title'];
        if (title) {
          var tabs/*:TabPanel*/ = this.getTabs();
          var tabToBeActivated/*:Object*/ = tabs.itemCollection.findBy(function(item/*:Panel*/)/*:Boolean*/ {
            return AS3.getBindable(item,"title","DUMMY") === title;
          });
          if (!tabToBeActivated) {
            tabToBeActivated = this.hiddenTabs$L_z5.filter(function (item/*:Panel*/)/*:Boolean*/ {
              return AS3.getBindable(item,"title","DUMMY") === title;
            })[0];
          }
          if (tabToBeActivated && tabToBeActivated !== tabs.getActiveTab()) {
            this.isUpdatingTabs$L_z5 = true;
            try {
              tabs.setActiveTab(tabToBeActivated);
            } finally {
              this.isUpdatingTabs$L_z5 = false;
            }
          }
        }
      }
    }
  }/*

  /**
   * Forward a click on a tab of the tabs component
   * to the individual panels.
   * /
  private*/ function tabChanged()/*:void*/ {
    if (this.isUpdatingTabs$L_z5) {
      return;
    }

    if(this.getTabs()) {
      var activeTab/*:Panel*/ = AS3.cast(Ext.panel.Panel,this.getTabs().getActiveTab());
      if (activeTab) {
        var tabTitle/*:String*/ = AS3.getBindable(activeTab,"title","DUMMY");
        this.premularFocusManager$L_z5.showTab(tabTitle);

        this.getPremularConfig$L_z5().activeTabIndex = this.getTabs().itemCollection.indexOf(activeTab);
      }
    }
  }/*

  /**
   * Build or return a value expression holding the
   * content shown in this premular.
   *
   * @return the value expression
   * /
  internal*/ function getContentBeanValueExpression()/*:ValueExpression*/ {
    if (!this.contentBeanValueExpression$L_z5) {
      this.contentBeanValueExpression$L_z5 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME, this);
    }
    return this.contentBeanValueExpression$L_z5;
  }/*

  internal*/ function getMasterVersionValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.masterVersionValueExpression$L_z5) {
      this.masterVersionValueExpression$L_z5 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Version*/ {
        var derivedContent/*:Content*/ = this$.getContent();
        if (!derivedContent) {
          return null;
        }
        return com.coremedia.cms.editor.sdk.editorContext.getSitesService().getMasterVersion(derivedContent);
      });
    }
    return this.masterVersionValueExpression$L_z5;
  }/*

  /**
   * Build or return a value expression holding the
   * content shown in this read-only panel of this premular.
   *
   * @return the value expression
   * /
  internal*/ function getReadOnlyContentValueExpression()/*:ValueExpression*/ {
    if (!this.readOnlyContentBeanValueExpression$L_z5) {
      this.readOnlyContentBeanValueExpression$L_z5 = com.coremedia.ui.data.ValueExpressionFactory.create(PremularBase.READ_ONLY_CONTENT_PROPERTY_NAME, this);
    }
    return this.readOnlyContentBeanValueExpression$L_z5;
  }/*

  /**
   * Build or return the premular focus manager, which takes care of synchronizing
   * the alignment and the focus of the individual panels.
   *
   * @return the premular focus manager
   * @private
   * /
  public*/ function getPremularFocusManager()/*:PremularFocusManager*/ {
    if (!this.premularFocusManager$L_z5) {
      this.premularFocusManager$L_z5 = new com.coremedia.cms.editor.sdk.premular.PremularFocusManager(this.getReadOnlyContentValueExpression(), this.getContentBeanValueExpression());
    }
    return this.premularFocusManager$L_z5;
  }/*

  /**
   * Build or return the object in which all property field in all document type-specific
   * forms of the central document panel are registered.
   *
   * @return the property field registry
   * /
  internal*/ function getDocumentFormPropertyFieldRegistry()/*:PropertyFieldRegistry*/ {
    if (!this.documentFormPropertyFieldRegistry$L_z5) {
      this.documentFormPropertyFieldRegistry$L_z5 = new com.coremedia.cms.editor.sdk.premular.PropertyFieldRegistry(this);
    }
    return this.documentFormPropertyFieldRegistry$L_z5;
  }/*

  /**
   * Build or return the object in which all property field in all document type-specific
   * forms of the read-only document panel are registered.
   *
   * @return the property field registry
   * @private
   * /
  public*/ function getReadOnlyPropertyFieldRegistry()/*:PropertyFieldRegistry*/ {
    if (!this.readOnlyPropertyFieldRegistry$L_z5) {
      this.readOnlyPropertyFieldRegistry$L_z5 = new com.coremedia.cms.editor.sdk.premular.PropertyFieldRegistry(this);
    }
    return this.readOnlyPropertyFieldRegistry$L_z5;
  }/*

  /**
   * @private
   * /
  public*/ function getDiffManager()/*:DiffManager*/ {
    if (!this.diffManager$L_z5) {
      this.diffManager$L_z5 = new com.coremedia.cms.editor.sdk.premular.differencing.DiffManager(this);
    }
    return this.diffManager$L_z5;
  }/*

  private*/ function cleanUpDiffManager()/*:void*/ {
    if (this.diffManager$L_z5) {
      this.diffManager$L_z5.destroy();
    }
  }/*

  /**
   * Make sure the data shown in this premular is up to date.
   * While most beans are invalidated through event push, the issues
   * might have changed after changes were applied in other forms.
   * /
  internal*/ function refreshContent()/*:void*/ {
    invalidateIssues$static(this.content);
    invalidateIssues$static(AS3.as(this.getReadOnlyContentValueExpression().getValue(),  com.coremedia.cap.content.Content));
  }/*

  private static*/ function invalidateIssues$static(contentToInvalidate/*:Content*/)/*:void*/ {
    if (contentToInvalidate) {
      var issues/*:Issues*/ = contentToInvalidate.getIssues();
      if (issues) {
        issues.invalidate();
      }
    }
  }/*

  /**
   * Update the content to be shown in this premular.
   *
   * @param contentToBeShown the content to be shown
   * @private
   * /
  public*/ function setTheContent(contentToBeShown/*:Content*/)/*:void*/ {
    var oldValue/*:**/ = this.content;

//    closeReadOnlyDocumentPanel();
//    setReadOnlyContent(null);

    this['content'] = contentToBeShown;
    this.refreshContent();

    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME, oldValue, this.content);
    this.setEntity(contentToBeShown);
  }/*

  override public*/ function setEntity(entity/*:Object*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.desktop.WorkAreaTab.prototype.setEntity.call(this,entity);
    if (this.getContent() !== entity) {
      this.setTheContent(AS3.as(entity,  com.coremedia.cap.content.Content));
    }
  }/*

  override public*/ function calculateIcon()/*:String*/ {
    return com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase.getIconClsForContent(this.getContent());
  }/*

  /**
   * @private
   * /
  public*/ function isInEditMode()/*:Boolean*/ {
    // Both the current content's properties and the current session's user are already loaded, so we don't need a callback:
    try {
      return this.content && this.content.isCheckedOutByCurrentSession();
    } catch(e){if(AS3.is (e,AS3.Error)) {
      // Destroyed? Unreadable?
    }else throw e;}
    return false;
  }/*

  private*/ function activated()/*:void*/ {
    this.refreshContent();
  }/*

  /**
   * Executed while a tab is closed that is a Premular.
   * Depending on the state of the Premular, a pop-up is shown
   * for saving or discarding the changes.
   *
   * @return true, if the event could be handled synchronously
   * /
  private*/ function beforeClose()/*:Boolean*/ {
    this.removeListener("activate",AS3.bind( this,"activated$L_z5"));
    return this.closeAsynchronously();
  }/*

  /**
   * Close this premular tab, optionally displaying a message
   * appropriate for a deleted operation.
   *
   * @param ignoreDeletedContent whether to show an appropriate message
   * if the content in the closed tab has been deleted
   * /
  private*/ function closeTab(ignoreDeletedContent/*:Boolean*/)/*:void*/ {
    var showMessageAfterClose/*:Boolean*/ = !ignoreDeletedContent &&
            this.content &&
            (this.content.getState() === com.coremedia.ui.data.BeanState.NON_EXISTENT || this.content.isDeleted());

    //maybe already closed?
    if (this.up() !== undefined) { // avoid console error if closeTab is called again on an already removed Premular
      //fire close event. Removing the premular from the tab panel will not fire the close event.
      this.fireEvent("close", this);
      this.removeListener("beforeclose",AS3.bind( this,"beforeClose$L_z5"));
      this.close();
      if (showMessageAfterClose) {
        com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showInfo(this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Premular_closedMessage_title'),
                this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Premular_closedMessage_text'));
      }
    }
  }/*

  /**
   * @private
   * /
  public*/ function setPreventCloseMessage(value/*:Boolean*/)/*:void*/ {
    this.preventCloseMessage$L_z5 = value;
  }/*

  /**
   * Determine whether this given content can be opened in a premular.
   * Not yet loaded content is given the benefit of doubt.
   *
   * @param content the content
   * @return whether it can be opened
   * @private
   * /
  public static*/ function mayBeOpened$static(content/*:Content*/)/*:Boolean*/ {
    return content &&
            content.getState().readable !== false &&
            !content.isFolder() &&
            !content.isDeleted();
  }/*

  /**
   * Shows a confirmation dialog for the closing of the tab.
   * An optional 'continueClosingCallback' function is provided
   * (for example by the CloseTabMenuPlugin). This callback is used when multiple tabs
   * shall be closed in a bulk operation. If 'yes' or 'no'
   * buttons are pressed, the closing of other tabs shall continue and the
   * callback function is called with 'true'. If the 'cancel' button
   * is pressed, then the closing of all remaining tabs shall be stopped
   * and the callback function is called with 'false'.
   *
   * @param btn the button that was pressed
   * @param continueClosingCallback The callback to signal whether
   *        the closing of remaining tabs in a bulk close operation
   *        shall continue.

   * /
  private*/ function confirmCloseTab(btn/*:String*/, continueClosingCallback/*:Function*/)/*:void*/ {var this$=this;
    var continueClosingCallBck/*:Function*/ = continueClosingCallback ? continueClosingCallback : Ext.emptyFn;

    if (btn === 'yes') {
      this.content.checkIn(function(result/*:CheckInResult*/)/*:void*/ {
        if (result.successful) {
          this$.forceCloseTab();
        }
        continueClosingCallBck(true);
      });
    } else if (btn === 'no') {
      this.preventCloseMessage$L_z5 = true;
      this.content.revert(function(result/*:RevertResult*/)/*:void*/ {
        if(result.successful) {
          this$.forceCloseTab();
        } else {
          this$.preventCloseMessage$L_z5 = false;
        }
        continueClosingCallBck(true);
      });
    } else if (btn === 'cancel') {
      continueClosingCallBck(false);
    }
  }/*

  /**
   * Force the tab to be closed without asking the user for additional instructions.
   *
   * @private
   * /
  public*/ function forceCloseTab()/*:void*/ {
    try {
      this.closeTab$L_z5(true);
    } catch(e){if(AS3.is (e,AS3.Error)) {
      com.coremedia.ui.logging.Logger.warn("Could not close tab: " + e);
    }else throw e;}
  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * Show the issues window. Used by tests.
   *
   * @private
   * /
  public*/ function showIssues()/*:void*/ {
    var docPanel/*:DocumentPanel*/ = this.getDocumentPanel();
    if (docPanel) {
      var documentFormToolbar/*:DocumentFormToolbar*/ =AS3.as( docPanel.getTopToolbar(),  com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar);
      if (documentFormToolbar) {
        var openIssuesButton/*:OpenIssuesWindowButton*/ =AS3.as( documentFormToolbar.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.sdk.premular.OpenIssuesWindowButton.xtype).build()),  com.coremedia.cms.editor.sdk.premular.OpenIssuesWindowButton);
        if (openIssuesButton) {
          (AS3.as(openIssuesButton.baseAction,  com.coremedia.ui.actions.OpenDialogAction)).showDialog(AS3.as(openIssuesButton,  Ext.Component));
        }
      }
    }
  }/*

  override public*/ function calculateTitle()/*:String*/ {
    return com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase.getTitleForContent(this.getContent());
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.getPremularConfigurationVE(null).removeChangeListener(AS3.bind(this,"applyPremularConfiguration$L_z5"));
    this.cleanUpReadOnlyContentMonitor$L_z5();
    this.cleanUpDiffManager$L_z5();
    this.removeListenersFromObservedDocumentTabPanel$L_z5();
    com.coremedia.cms.editor.sdk.desktop.WorkAreaTab.prototype.onDestroy.call(this);

    // Hack to cut off ready built components configuration. This can happen due to IOC (cmOwnerCt configuration).
    this['initialConfig'] = null;
  }/*

  /**
   * Handler for collapsing either the document panel or the preview panel.
   * /
  protected*/ function collapsePanel(itemId/*:String*/)/*:void*/ {
    this.handleCollapse(itemId);
  }/*

  internal*/ function closePreview()/*:void*/ {
    this.handleCollapse(PremularBase.PREVIEW_PANEL_ITEM_ID);
  }/*

  internal*/ function openForm()/*:void*/ {
    this.handleExpand(PremularBase.DOCUMENT_PANEL_ITEM_ID);
  }/*

  internal*/ function closeForm()/*:void*/ {
    this.handleCollapse(PremularBase.DOCUMENT_PANEL_ITEM_ID);
  }/*

  internal*/ function openPreview()/*:void*/ {
    this.handleExpand(PremularBase.PREVIEW_PANEL_ITEM_ID);
  }/*

  internal*/ function closeReadOnlyDocumentPanel()/*:void*/ {
    if (this.isReadOnlyDocumentPanelVisible()) {
      this.handleCollapse(PremularBase.READ_ONLY_DOCUMENT_PANEL_ITEM_ID);
    }
  }/*

  internal*/ function openReadOnlyDocumentPanel()/*:void*/ {
    if (!this.isReadOnlyDocumentPanelVisible()) {
      this.handleExpand(PremularBase.READ_ONLY_DOCUMENT_PANEL_ITEM_ID);
    }
  }/*

  /**
   * Return whether the read-only document panel is visible.
   *
   * @private
   * /
  public*/ function isReadOnlyDocumentPanelVisible()/*:Boolean*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, PremularBase.STATE_EVENT_NAME);
    return this.readOnlyDocumentPanelVisible$L_z5;
  }/*

  private*/ function premularStateUpdated()/*:void*/ {
    this.fireEvent(PremularBase.STATE_EVENT_NAME);

    if (this.rendered) {
      this.updateVisibility$L_z5();
    }
  }/*

  private*/ function updateVisibility()/*:void*/ {var this$=this;
    // We use EventUtil.invokeLater() here to include all calls in the EventUtil suspend/resume layouts mechanism.
    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
      var premularModeToolbar/*:Container*/ = this$.getPremularModeToolbar();
      var readOnlyDocumentFormToolbarContainer/*:Container*/ = this$.getReadOnlyDocumentFormToolbarContainer();
      var documentFormToolbarContainer/*:Container*/ = this$.getDocumentFormToolbarContainer();
      var documentContainer/*:Container*/ = this$.getDocumentContainer();

      premularModeToolbar.setVisible(com.coremedia.cms.editor.sdk.editorContext.getSitesService().isMultiLanguageSupportEnabled() && (this$.readOnlyDocumentPanelVisible$L_z5 || this$.getPremularConfig$L_z5().showForm));
      if (this$.readOnlyDocumentPanelVisible$L_z5) {
        premularModeToolbar.addCls(READ_ONLY_DOCUMENT_PANEL_VISIBLE_CLS$static);
        documentContainer.setMinWidth(PremularBase.DEFAULT_DOCUMENT_CONTAINER_MIN_WIDTH*2);
        if (premularModeToolbar.ownerCt !== readOnlyDocumentFormToolbarContainer) {
          documentFormToolbarContainer.remove(premularModeToolbar, false);
          readOnlyDocumentFormToolbarContainer.insert(0, premularModeToolbar);
        }
      } else {
        premularModeToolbar.removeCls(READ_ONLY_DOCUMENT_PANEL_VISIBLE_CLS$static);
        documentContainer.setMinWidth(PremularBase.DEFAULT_DOCUMENT_CONTAINER_MIN_WIDTH);
        if (premularModeToolbar.ownerCt !== documentFormToolbarContainer) {
          readOnlyDocumentFormToolbarContainer.remove(premularModeToolbar, false);
          documentFormToolbarContainer.insert(0, premularModeToolbar);
        }
      }
      this$.getReadOnlyDocumentPanel().setVisible(this$.readOnlyDocumentPanelVisible$L_z5);
      readOnlyDocumentFormToolbarContainer.setVisible(this$.readOnlyDocumentPanelVisible$L_z5);
      this$.getDocumentPanelSplitBox().setVisible(this$.readOnlyDocumentPanelVisible$L_z5 && this$.getPremularConfig$L_z5().showForm);
      this$.getDocumentPanelHeaderSplitBox().setVisible(this$.readOnlyDocumentPanelVisible$L_z5 && this$.getPremularConfig$L_z5().showForm);
      this$.getDocumentContainer().setVisible(this$.getPremularConfig$L_z5().showForm);
      documentFormToolbarContainer.setVisible(this$.getPremularConfig$L_z5().showForm);
      this$.getTabs().setVisible(this$.readOnlyDocumentPanelVisible$L_z5 || this$.getPremularConfig$L_z5().showForm);
      this$.getPreviewSplitBox().setVisible(this$.getPremularConfig$L_z5().showForm && this$.getPremularConfig$L_z5().showPreview);
      this$.getPreviewPanel().setVisible(this$.getPremularConfig$L_z5().showPreview);

      this$.updateLayout();
    });
  }/*

  /**
   * @private
   * /
  public*/ function getReadOnlyContent()/*:Content*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, PremularBase.READ_ONLY_CONTENT_PROPERTY_NAME);
    return this.readOnlyContent$L_z5;
  }/*

  // used for WATF Tests
  /**
   * @private
   * /
  public*/ function getReadOnlyContentObject()/*:ContentObject*/ {
    var readOnlyContent/*:Content*/ = this.getReadOnlyContent();
    return (AS3.is(readOnlyContent,  com.coremedia.cms.editor.sdk.premular.HistoricContent)) ?
            AS3.cast(com.coremedia.cms.editor.sdk.premular.HistoricContent,readOnlyContent).getVersion() :
            readOnlyContent;
  }/*

  private*/ function setReadOnlyContent(readOnlyContent/*:Content*/)/*:void*/ {
    var oldValue/*:Content*/ = this.readOnlyContent$L_z5;
    this.readOnlyContent$L_z5 = readOnlyContent;
    this.fireEvent(PremularBase.READ_ONLY_CONTENT_PROPERTY_NAME,
            com.coremedia.ui.data.util.PropertyChangeEventUtil.createEvent(this, PremularBase.READ_ONLY_CONTENT_PROPERTY_NAME, oldValue, readOnlyContent));
  }/*

  internal*/ function openInReadOnlyDocumentPanel(readOnlyContentObject/*:ContentObject = null*/)/*:void*/ {var this$=this;if(arguments.length<=0)readOnlyContentObject=null;
    if (readOnlyContentObject) {
      com.coremedia.ui.data.RemoteBeanUtil.loadAll(function ()/*:void*/ {
                if (readOnlyContentObject.getType() !== this$.getContent().getType()) {
                  throw new AS3.Error("PremularBase#openReadOnlyDocumentPanel() - The side-by-side view can only show two content objects of the same type: document '"
                          + this$.getContent() + "'is of type '" +
                          this$.getContent().getType() + "', but the read-only content object '"
                          + readOnlyContentObject + "' is of type '" + readOnlyContentObject.getType() + "'");
                }

                var readOnlyContent/*:Content*/ = readOnlyContentObject.isVersion() ?
                        new com.coremedia.cms.editor.sdk.premular.HistoricContentImpl(AS3.cast(com.coremedia.cap.content.Version,readOnlyContentObject)) :
                        AS3.cast(com.coremedia.cap.content.Content,readOnlyContentObject);

                this$.setReadOnlyContent$L_z5(readOnlyContent);

                this$.openReadOnlyDocumentPanel();
              },
              readOnlyContentObject,
              this.getContent());
    } else {
      if (this.getReadOnlyContent()) {
        this.openReadOnlyDocumentPanel();
      }
    }
  }/*

  /**
   * @private
   * /
  public*/ function isInVersionComparisonMode()/*:Boolean*/ {
    var content/*:Content*/ = this.getContent();
    var readOnlyContent/*:Content*/ = this.getReadOnlyContent();

    return AS3.is( readOnlyContent,  com.coremedia.cms.editor.sdk.premular.HistoricContent) && AS3.cast(com.coremedia.cms.editor.sdk.premular.HistoricContent,readOnlyContent).getContent() === content;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function closeAsynchronously(continueClosingCallback/*:Function = null*/)/*:Boolean*/ {var this$=this;if(arguments.length<=0)continueClosingCallback=null;
    if (this.isInEditMode()) {
      com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(Ext.String.format(this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Premular_closeMessage_title_named'), this.getContent().getName()),
        Ext.String.format(this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Premular_closeMessage_text_named'), this.getContent().getName()),
        null,
        {
          yes:this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Premular_closeMessage_btn_checkin'),
          no:this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Premular_closeMessage_btn_revert'),
          cancel:this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Premular_closeMessage_btn_cancel')
        },
        function (btn/*:String*/)/*:void*/ {
          this$.confirmCloseTab$L_z5(btn, continueClosingCallback);
        }
      );
      return false;
    } else {
      this.forceCloseTab();
      return true;
    }
  }/*

  private*/ function getPremularConfig()/*:PremularConfiguration*/ {
    return AS3.as( this.getPremularConfigurationVE(this.initialConfig.premularConfiguration).getValue(),  com.coremedia.cms.editor.sdk.premular.PremularConfiguration);
  }/*

  protected*/ function getPremularConfigurationVE(initialPremularConfig/*:PremularConfiguration*/)/*:ValueExpression*/ {
    if (!this.premularConfigurationVE$L_z5) {
      this.premularConfigurationVE$L_z5 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(initialPremularConfig);
    }

    return this.premularConfigurationVE$L_z5;
  }/*

  public*/ function setPremularConfiguration(conf/*:PremularConfiguration*/)/*:void*/ {
    this.getPremularConfigurationVE(null).setValue(conf);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.WorkAreaTab",
      mixins: ["com.coremedia.ui.components.AsynchronouslyClosable"],
      metadata: {
        "": ["PublicApi"],
        getContent: ["ProvideToExtChildren"]
      },
      contentBeanValueExpression$L_z5: null,
      masterVersionValueExpression$L_z5: null,
      readOnlyContentBeanValueExpression$L_z5: null,
      premularFocusManager$L_z5: null,
      documentFormPropertyFieldRegistry$L_z5: null,
      readOnlyPropertyFieldRegistry$L_z5: null,
      diffManager$L_z5: null,
      readOnlyDocumentPanelVisible$L_z5: false,
      readOnlyContent$L_z5: null,
      isUpdatingTabs$L_z5: false,
      observedDocumentTabPanel$L_z5: null,
      readOnlyContentMonitorValueExpression$L_z5: null,
      preventCloseMessage$L_z5: false,
      constructor: PremularBase$,
      super$L_z5: function() {
        com.coremedia.cms.editor.sdk.desktop.WorkAreaTab.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      handleCollapse: handleCollapse,
      handleExpand: handleExpand,
      assumeState: assumeState,
      applyPremularConfiguration$L_z5: applyPremularConfiguration,
      initReadOnlyContentMonitor$L_z5: initReadOnlyContentMonitor,
      cleanUpReadOnlyContentMonitor$L_z5: cleanUpReadOnlyContentMonitor,
      monitorReadOnlyContent$L_z5: monitorReadOnlyContent,
      createItems$L_z5: createItems,
      content: null,
      premularConfigurationVE$L_z5: null,
      getContent: getContent,
      getPremularModeToolbar: getPremularModeToolbar,
      getReadOnlyDocumentPanel: getReadOnlyDocumentPanel,
      getReadOnlyDocumentFormToolbarContainer: getReadOnlyDocumentFormToolbarContainer,
      getDocumentPanelSplitBox: getDocumentPanelSplitBox,
      getDocumentPanelHeaderSplitBox: getDocumentPanelHeaderSplitBox,
      getDocumentPanel: getDocumentPanel,
      getDocumentContainer: getDocumentContainer,
      getDocumentFormToolbarContainer: getDocumentFormToolbarContainer,
      getTabs: getTabs,
      getPreviewSplitBox: getPreviewSplitBox,
      getPreviewPanel: getPreviewPanel,
      addTabsListeners$L_z5: addTabsListeners,
      updateTabsFromDocumentTabPanel$L_z5: updateTabsFromDocumentTabPanel,
      removeListenersFromObservedDocumentTabPanel$L_z5: removeListenersFromObservedDocumentTabPanel,
      updateActiveTabFromDocumentTabPanel$L_z5: updateActiveTabFromDocumentTabPanel,
      tabChanged$L_z5: tabChanged,
      getContentBeanValueExpression: getContentBeanValueExpression,
      getMasterVersionValueExpression: getMasterVersionValueExpression,
      getReadOnlyContentValueExpression: getReadOnlyContentValueExpression,
      getPremularFocusManager: getPremularFocusManager,
      getDocumentFormPropertyFieldRegistry: getDocumentFormPropertyFieldRegistry,
      getReadOnlyPropertyFieldRegistry: getReadOnlyPropertyFieldRegistry,
      getDiffManager: getDiffManager,
      cleanUpDiffManager$L_z5: cleanUpDiffManager,
      refreshContent: refreshContent,
      setTheContent: setTheContent,
      setEntity: setEntity,
      calculateIcon: calculateIcon,
      isInEditMode: isInEditMode,
      activated$L_z5: activated,
      beforeClose$L_z5: beforeClose,
      closeTab$L_z5: closeTab,
      setPreventCloseMessage: setPreventCloseMessage,
      confirmCloseTab$L_z5: confirmCloseTab,
      forceCloseTab: forceCloseTab,
      showIssues: showIssues,
      calculateTitle: calculateTitle,
      onDestroy: onDestroy,
      collapsePanel: collapsePanel,
      closePreview: closePreview,
      openForm: openForm,
      closeForm: closeForm,
      openPreview: openPreview,
      closeReadOnlyDocumentPanel: closeReadOnlyDocumentPanel,
      openReadOnlyDocumentPanel: openReadOnlyDocumentPanel,
      isReadOnlyDocumentPanelVisible: isReadOnlyDocumentPanelVisible,
      premularStateUpdated$L_z5: premularStateUpdated,
      updateVisibility$L_z5: updateVisibility,
      getReadOnlyContent: getReadOnlyContent,
      getReadOnlyContentObject: getReadOnlyContentObject,
      setReadOnlyContent$L_z5: setReadOnlyContent,
      openInReadOnlyDocumentPanel: openInReadOnlyDocumentPanel,
      isInVersionComparisonMode: isInVersionComparisonMode,
      closeAsynchronously: closeAsynchronously,
      getPremularConfig$L_z5: getPremularConfig,
      getPremularConfigurationVE: getPremularConfigurationVE,
      setPremularConfiguration: setPremularConfiguration,
      config: {premularConfiguration: null},
      statics: {
        STATE_EVENT_NAME: "premularState",
        READ_ONLY_CONTENT_PROPERTY_NAME: "readOnlyContent",
        PREMULAR_MODE_TOOLBAR_ITEM_ID: "premularModeToolbar",
        SWITCH_DIFFERENCING_BUTTON_ITEM_ID: "switchDifferencingButton",
        READ_ONLY_DOCUMENT_FORM_TOOLBAR_DISPATCHER_ITEM_ID: "readOnlyDocumentFormToolbarDispatcher",
        READ_ONLY_DOCUMENT_FORM_TOOLBAR_CONTAINER_ITEM_ID: "readOnlyDocumentFormToolbarContainer",
        READ_ONLY_DOCUMENT_PANEL_ITEM_ID: "readOnlyDocumentPanel",
        DOCUMENT_PANEL_SPLIT_BAR_ITEM_ID: "documentPanelSplitBar",
        DOCUMENT_PANEL_HEADER_SPLIT_BAR_ITEM_ID: "documentPanelHeaderSplitBar",
        DOCUMENT_FORM_TOOLBAR_ITEM_ID: "documentToolbar",
        DOCUMENT_FORM_TOOLBAR_CONTAINER_ITEM_ID: "documentToolbarContainer",
        DOCUMENT_PANEL_ITEM_ID: "containerForm",
        DOCUMENT_CONTAINER_ITEM_ID: "documentContainer",
        TABS_ITEM_ID: "tabs",
        PREVIEW_SPLIT_BAR_ITEM_ID: "previewSplitBar",
        PREVIEW_PANEL_ITEM_ID: "previewPanel",
        DEFAULT_DOCUMENT_CONTAINER_MIN_WIDTH: 470,
        mayBeOpened: mayBeOpened$static
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.Component",
        "Ext.String",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "Ext.tab.Panel",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.Version",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTab",
        "com.coremedia.ui.actions.OpenDialogAction",
        "com.coremedia.ui.components.AsynchronouslyClosable",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.plugins.TabExpandPlugin",
        "com.coremedia.cms.editor.sdk.premular.DocumentForm",
        "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar",
        "com.coremedia.cms.editor.sdk.premular.DocumentPanel",
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel",
        "com.coremedia.cms.editor.sdk.premular.HistoricContent",
        "com.coremedia.cms.editor.sdk.premular.HistoricContentImpl",
        "com.coremedia.cms.editor.sdk.premular.OpenIssuesWindowButton",
        "com.coremedia.cms.editor.sdk.premular.Premular",
        "com.coremedia.cms.editor.sdk.premular.PremularConfiguration",
        "com.coremedia.cms.editor.sdk.premular.PremularFocusManager",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldRegistry",
        "com.coremedia.cms.editor.sdk.premular.differencing.DiffManager",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanel",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal"
      ]
    };
});
