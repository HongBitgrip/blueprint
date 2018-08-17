Ext.define("com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase", function(PremularWorkAreaTabTypeBase) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.ContentProxy;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.impl.ContentImpl;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.LocalesService;
import com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState;
import com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState;
import com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.Premular;
import com.coremedia.cms.editor.sdk.premular.PremularConfiguration;
import com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase;
import com.coremedia.cms.editor.sdk.preview.PreviewIFrame;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SiteModel;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.reusableComponentsService;

import ext.Component;
import ext.layout.container.CardLayout;
import ext.panel.Panel;

import mx.resources.IResourceManager;
import mx.resources.ResourceManager;

public class PremularWorkAreaTabTypeBase extends ComponentBasedEntityWorkAreaTabType implements ReusableTabType {
  private static const*/var PREMULAR_PREFIX$static/*:String*/ = "premular_";/*
  private static const*/var ABOUT_BLANK_URL$static/*:String*/ = "about:blank";/*

  private var activePremular:Premular;
  private static const*/var resourceManager$static/*:IResourceManager*/;/* =*/function resourceManager$static_(){resourceManager$static=( mx.resources.ResourceManager.getInstance());};/*

  public*/ function PremularWorkAreaTabTypeBase$(config/*:PremularWorkAreaTabType = null*/) {if(arguments.length<=0)config=null;
    this.super$Uo64(config);
  }/*

  override public*/ function createTab(state/*:Object*/, callback/*:Function*/)/*:void*/ {var this$=this;
    this.prepareTabState$Uo64(state, function (tabState/*:PremularProxyTabState*/)/*:void*/ {
      this$.createTabInternal$Uo64(tabState.plainState(), callback);
    });
  }/*

  public*/ function transformTabState(tabState/*:Object*/, callback/*:Function*/)/*:void*/ {var this$=this;
    var me/*:PremularWorkAreaTabType*/ =AS3.as( this,  com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabType);

    this.prepareTabState$Uo64(tabState, function (preparedTabState/*:PremularProxyTabState*/)/*:void*/ {
      var key/*:String*/ = this$.computeReusabilityKey(preparedTabState);

      if (com.coremedia.ui.util.reusableComponentsService.isReusabilityEnabled(key)
              && com.coremedia.ui.util.reusableComponentsService.limitForReusableComponentsReached(key)) {
        callback(preparedTabState, null, tabState, me);
      } else {
        this$.createTabInternal$Uo64(preparedTabState.plainState(), function (tab/*:Panel*/, tabType/*:WorkAreaTabType*/, state/*:Object*/)/*:void*/ {
          if (com.coremedia.ui.util.reusableComponentsService.isReusabilityEnabled(key)
                  && !com.coremedia.ui.util.reusableComponentsService.limitForReusableComponentsReached(key)) {
            com.coremedia.ui.util.reusableComponentsService.registerComponentForReuse(key, tab);
          }

          if (com.coremedia.ui.util.reusableComponentsService.isReusabilityEnabled(key)) {
            callback(preparedTabState, null, tabState, me);
          } else {
            callback(preparedTabState, tab, tabState, me);
          }
        });
      }
    });
  }/*

  private*/ function prepareTabState(tabState/*:Object*/, callback/*:Function*/)/*:void*/ {
    if (com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies()) {
      var proxyForEntity/*:WorkAreaTabProxy*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies().getWorkAreaTabProxyForEntity(tabState.entity);
      if (proxyForEntity) {
        callback(AS3.getBindable(proxyForEntity,"proxyState"));
        return;
      }
    }

    if (! (AS3.is(tabState.premularConfiguration,  com.coremedia.cms.editor.sdk.premular.PremularConfiguration))) {
      var premularConfig/*:PremularConfiguration*/ = new com.coremedia.cms.editor.sdk.premular.PremularConfiguration(tabState.content, tabState.readOnlyContentObject, tabState.showPreview, tabState.showForm);

      tabState.premularConfiguration = premularConfig;
    }

    var premularState/*:PremularProxyTabState*/ = new com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState(tabState);

    premularState.premularConfiguration.load(function ()/*:void*/ {
      callback(premularState);
    });
  }/*

  private*/ function createTabInternal(state/*:Object*/, callback/*:Function*/)/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType.prototype.createTab.call(this,state, function (tab/*:Panel*/, tabType/*:WorkAreaTabType*/, tabState/*:Object*/)/*:void*/ {
      if (tab) {
        tab.addListener('afterrender',AS3.bind( this$,"tabActivated$Uo64"));
        tab.addListener('activate',AS3.bind( this$,"tabActivated$Uo64"));
        tab.addListener(com.coremedia.cms.editor.sdk.desktop.WorkArea.AFTER_TAB_REUSE_EVENT,AS3.bind( this$,"tabActivated$Uo64"));
        tab.addListener('deactivate',AS3.bind( this$,"tabDeactivated$Uo64"));
        tab.addListener('removed',AS3.bind( this$,"tabDeactivated$Uo64"));
        tab.addListener('destroy',AS3.bind( this$,"tabDestroyed$Uo64"));

      }
      callback(tab, tabType, tabState);
    });
  }/*

  private*/ function tabActivated(premular/*:Premular*/)/*:void*/ {
    var ownerCt/*:WorkArea*/ =AS3.as( premular.ownerCt,  com.coremedia.cms.editor.sdk.desktop.WorkArea);
    if (ownerCt && AS3.cast(Ext.layout.container.Card,ownerCt.getLayout()).getActiveItem() === premular) {
      this.activePremular$Uo64 = premular;
      com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION.setValue(premular.getContent());
    }
  }/*

  private*/ function tabDeactivated(premular/*:Premular*/)/*:void*/ {
    if (com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION.getValue() === premular.getContent()) {
      com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION.setValue(null);
    }

    if (this.activePremular$Uo64 === premular) {
      this.activePremular$Uo64 = null;
    }
  }/*

  override public*/ function getStateValueExpression(workAreaTab/*:Panel*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(getPremularState$static, workAreaTab);
  }/*

  private static*/ function getPremularState$static(premular/*:Premular*/)/*:Object*/ {
    return {
      content: premular.getContent()
    };
  }/*

  private*/ function tabDestroyed(premular/*:Premular*/)/*:void*/ {
    premular.removeListener('afterrender',AS3.bind( this,"tabActivated$Uo64"));
    premular.removeListener('activate',AS3.bind( this,"tabActivated$Uo64"));
    premular.removeListener(com.coremedia.cms.editor.sdk.desktop.WorkArea.AFTER_TAB_REUSE_EVENT,AS3.bind( this,"tabActivated$Uo64"));
    premular.removeListener('deactivate',AS3.bind( this,"tabDeactivated$Uo64"));
    premular.removeListener('removed',AS3.bind( this,"tabDeactivated$Uo64"));
    premular.removeListener('destroy',AS3.bind( this,"tabDestroyed$Uo64"));
    // Only trigger deactivate actions if the closed tab was the active tab: STUDIO-622
    if (premular === this.activePremular$Uo64) {
      this.tabDeactivated$Uo64(premular);
    }
  }/*

  override protected*/ function transformEntity(entity/*:Object*/)/*:Object*/ {
    var contentProxy/*:ContentProxy*/ =AS3.as( entity,  com.coremedia.cap.content.ContentProxy);
    return com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType.prototype.transformEntity.call(this,contentProxy ? contentProxy.getContent() : entity);
  }/*

  override protected*/ function isValidEntity(entity/*:Object*/)/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType.prototype.isValidEntity.call(this,entity) && PremularWorkAreaTabTypeBase.mayBeOpened(AS3.cast(com.coremedia.cap.content.Content,entity));
  }/*

  public static*/ function mayBeOpened$static(content/*:Content*/)/*:Boolean*/ {
    // Content may be opened in a work area tab when it is
    // loaded and readable (not destroyed) and
    // a document (not a folder) and
    // not deleted.
    return com.coremedia.ui.data.RemoteBeanUtil.isAccessible(content) && content.isDocument() && !content.isDeleted();
  }/*

  public*/ function computeStateSerialization(tabState/*:ProxyTabState*/)/*:Object*/ {
    return {content: tabState.entity};
  }/*

  public*/ function computeReusabilityKey(tabState/*:ProxyTabState*/)/*:String*/ {
    var content/*:Content*/;

    if (AS3.is(tabState,  com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState)) {
      content = (AS3.as(tabState,  com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState)).content;
    } else if (AS3.is(tabState,  com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState)) {
      content =AS3.as( (AS3.as(tabState,  com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState)).entity,  com.coremedia.cap.content.Content);
    }

    if (content) {
      return PREMULAR_PREFIX$static + content.getType().getName();
    }

    //try fallback
    if (AS3.is(tabState,  com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState)
            && (AS3.as(tabState,  com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState)).contentTypeName) {
      return PREMULAR_PREFIX$static + (AS3.as(tabState,  com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState)).contentTypeName;
    }

    return null;
  }/*

  public*/ function setupReusedTab(tabState/*:ProxyTabState*/, reusedTab/*:Component*/)/*:void*/ {
    var proxyState/*:PremularProxyTabState*/ =AS3.as( tabState,  com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState);
    var premular/*:Premular*/ =AS3.as( reusedTab,  com.coremedia.cms.editor.sdk.premular.Premular);
    var oldContent/*:Content*/ = premular.getContent();

    var previewIFrame/*:PreviewIFrame*/ =AS3.as( premular.queryById(com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.IFRAME_ITEM_ID),  com.coremedia.cms.editor.sdk.preview.PreviewIFrame);
    if (previewIFrame && oldContent !== proxyState.content) {
      // Set preview url to about:blank temporarily to avoid showing old preview on tab reuse
      previewIFrame.setUrl(ABOUT_BLANK_URL$static);
    }

    premular.setPremularConfiguration(proxyState.premularConfiguration);
    premular.setTheContent(proxyState.content);
  }/*

  public*/ function isDirectlyClosable(tabState/*:ProxyTabState*/)/*:Boolean*/ {
    var content/*:Content*/ =AS3.as( tabState.entity,  com.coremedia.cap.content.Content);

    try {
      return content && !content.isCheckedOutByCurrentSession();
    } catch(e){if(AS3.is (e,AS3.Error)) {
      // Destroyed? Unreadable?
    }else throw e;}
    return true;
  }/*

  public*/ function computeTabTitle(tabState/*:ProxyTabState*/)/*:String*/ {
    return PremularWorkAreaTabTypeBase.getTitleForContent(AS3.as(tabState.entity,  com.coremedia.cap.content.Content));
  }/*

  public*/ function computeTabIconCls(tabState/*:ProxyTabState*/)/*:String*/ {
    return PremularWorkAreaTabTypeBase.getIconClsForContent(AS3.as(tabState.entity,  com.coremedia.cap.content.Content));
  }/*

  public*/ function computeTooltipInfo(tabState/*:ProxyTabState*/)/*:TabTooltipInfo*/ {
    var content/*:Content*/ =AS3.as( tabState.entity,  com.coremedia.cap.content.Content);
    if (!content) {
      return undefined;
    }

    var tabTooltipInfo/*:TabTooltipInfo*/ = new com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo();

    var title/*:String*/ = com.coremedia.ui.util.EncodingUtil.encodeForHTML(this.computeTabTitle(tabState));
    if (!title) {
      return undefined;
    }
    tabTooltipInfo.addTooltipEntry(com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo.TITLE, null, title);

    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var siteModel/*:SiteModel*/ = sitesService.getSiteModel();
    if (!siteModel) {
      return tabTooltipInfo;
    }

    var site/*:Site*/ = sitesService.getSiteFor(content);
    if (site === undefined) {
      return undefined;
    }

    var siteName/*:String*/ = site && site.getName();
    var siteLocale/*:Locale*/ = site && site.getLocale();
    var contentLocale/*:Locale*/ = getContentLocale$static(content);
    if (contentLocale === undefined) {
      return undefined;
    }

    var needContentLocale/*:Boolean*/ = site && contentLocale && !contentLocale.equals(siteLocale);

    tabTooltipInfo.addTooltipEntry(com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo.SITE,
            resourceManager$static.getString('com.coremedia.cms.editor.Editor', 'WorkArea_Premular_tooltip_siteName'),
            siteName ? com.coremedia.ui.util.EncodingUtil.encodeForHTML(siteName) : resourceManager$static.getString('com.coremedia.cms.editor.Editor', 'WorkArea_Premular_tooltip_noSite'));

    if (siteLocale) {
      tabTooltipInfo.addTooltipEntry(com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo.LOCALE,
              needContentLocale ? resourceManager$static.getString('com.coremedia.cms.editor.Editor', 'WorkArea_Premular_tooltip_siteLocale') :
                      resourceManager$static.getString('com.coremedia.cms.editor.Editor', 'WorkArea_Premular_tooltip_locale'),
              siteLocale.getDisplayName());
    }
    if (needContentLocale) {
      tabTooltipInfo.addTooltipEntry(com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo.CONTENT_LOCALE,
              resourceManager$static.getString('com.coremedia.cms.editor.Editor', 'WorkArea_Premular_tooltip_contentLocale'),
              contentLocale.getDisplayName());
    }


    var contentType/*:ContentType*/ = content.getType();
    //wait for the type to be loaded
    if (!contentType) {
      return undefined;
    }
    var additionalTabTooltipEntries/*:Array*/ = AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).computeAdditionalTabTooltipEntries(content);

    //undefined means we have to wait for the asynchronous computation of the entries
    if (additionalTabTooltipEntries === undefined) {
      return undefined;
    }
    tabTooltipInfo.addTooltipEntries(additionalTabTooltipEntries);

    return tabTooltipInfo;
  }/*

  private static*/ function getContentLocale$static(content/*:Content*/)/*:Locale*/ {
    var siteModel/*:SiteModel*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteModel();
    if (!siteModel) {
      return null;
    }

    var localeDescriptor/*:CapPropertyDescriptor*/ = content.getType().getDescriptor(siteModel.getLocaleProperty());
    if (!localeDescriptor) {
      return null;
    }

    var properties/*:ContentProperties*/ = content.getProperties();
    if (!properties) {
      return undefined;
    }

    var contentLanguageTag/*:String*/ = properties.get(localeDescriptor.name);
    if (contentLanguageTag === undefined) {
      return undefined;
    }
    if (!contentLanguageTag) {
      return null;
    }

    var localesService/*:LocalesService*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).getLocalesService();
    return localesService.getLocale(contentLanguageTag);
  }/*

  public static*/ function getTitleForContent$static(content/*:Content*/)/*:String*/ {
    return content ? content.getName() : "";
  }/*

  public static*/ function getIconClsForContent$static(content/*:Content*/)/*:String*/ {
    if (!content) {
      return "";
    }

    try {
      if (content.isCheckedOutByCurrentSession()) {
        return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Premular_checked_out_by_me_icon');
      }
      if (content.isCheckedOutByOther()) {
        return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Premular_checked_out_by_other_icon');
      }
    } catch(e){if(AS3.is (e,AS3.Error)) {
      // Destroyed? Unreadable?
    }else throw e;}

    return com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(content.getType());
  }/*

  public*/ function notifyTabProxyReady(tabProxy/*:WorkAreaTabProxy*/)/*:void*/ {
    var proxyTabState/*:ProxyTabState*/ =AS3.as( AS3.getBindable(tabProxy,"proxyState"),  com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState);
    var content/*:Content*/ =AS3.as( proxyTabState.entity,  com.coremedia.cap.content.Content);
    if (content && PremularWorkAreaTabTypeBase.mayBeOpened(content)) {
      tabProxy.registerEntityChangeHandler(com.coremedia.cap.content.ContentPropertyNames.IS_DELETED, function ()/*:void*/ {
        recheckContentState$static(tabProxy);
      });
      tabProxy.registerEntityChangeHandler(com.coremedia.ui.data.BeanState.PROPERTY_NAME, function ()/*:void*/ {
        recheckContentState$static(tabProxy);
      });
    }

  }/*

  private static*/ function recheckContentState$static(tabProxy/*:WorkAreaTabProxy*/)/*:void*/ {
    var proxyTabState/*:ProxyTabState*/ = AS3.getBindable(tabProxy,"proxyState");
    if (!proxyTabState) {
      return;
    }

    var content/*:Content*/ =AS3.as( proxyTabState.entity,  com.coremedia.cap.content.Content);
    if (!content) {
      return;
    }

    if (!PremularWorkAreaTabTypeBase.mayBeOpened(content)) {
      // proxy's content was deleted

      // --> close proxy
      tabProxy.closeAsynchronously();

      // --> also show warning if content was deleted by another user
      if (com.coremedia.cap.common.SESSION.getUser() !== (AS3.as(content,  com.coremedia.cap.content.impl.ContentImpl)).getModifier()) {
        com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showInfo(resourceManager$static.getString('com.coremedia.cms.editor.Editor', 'Premular_closedMessage_title'),
                resourceManager$static.getString('com.coremedia.cms.editor.Editor', 'Premular_closedMessage_text'));
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType",
      mixins: ["com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType"],
      activePremular$Uo64: null,
      constructor: PremularWorkAreaTabTypeBase$,
      super$Uo64: function() {
        com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType.prototype.constructor.apply(this, arguments);
      },
      createTab: createTab,
      transformTabState: transformTabState,
      prepareTabState$Uo64: prepareTabState,
      createTabInternal$Uo64: createTabInternal,
      tabActivated$Uo64: tabActivated,
      tabDeactivated$Uo64: tabDeactivated,
      getStateValueExpression: getStateValueExpression,
      tabDestroyed$Uo64: tabDestroyed,
      transformEntity: transformEntity,
      isValidEntity: isValidEntity,
      computeStateSerialization: computeStateSerialization,
      computeReusabilityKey: computeReusabilityKey,
      setupReusedTab: setupReusedTab,
      isDirectlyClosable: isDirectlyClosable,
      computeTabTitle: computeTabTitle,
      computeTabIconCls: computeTabIconCls,
      computeTooltipInfo: computeTooltipInfo,
      notifyTabProxyReady: notifyTabProxyReady,
      statics: {
        resourceManager: undefined,
        mayBeOpened: mayBeOpened$static,
        getTitleForContent: getTitleForContent$static,
        getIconClsForContent: getIconClsForContent$static,
        __initStatics__: function() {
          resourceManager$static_();
        }
      },
      requires: [
        "AS3.Error",
        "Ext.layout.container.Card",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.content.ContentProxy",
        "com.coremedia.cap.content.impl.ContentImpl",
        "com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.reusableComponentsService",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState",
        "com.coremedia.cms.editor.sdk.desktop.reusability.ProxyTabState",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.Premular",
        "com.coremedia.cms.editor.sdk.premular.PremularConfiguration",
        "com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase",
        "com.coremedia.cms.editor.sdk.preview.PreviewIFrame",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
