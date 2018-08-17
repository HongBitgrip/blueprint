Ext.define("com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPluginBase", function(ContentTabManagerPluginBase) {/*package com.coremedia.cms.editor.sdk.desktop {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel;
import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxy;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.PremularBase;
import com.coremedia.cms.editor.sdk.premular.PremularConfiguration;
import com.coremedia.ui.util.AsyncObserver;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Plugin;

public class ContentTabManagerPluginBase implements ContentTabManager, Plugin {

  private var workArea:WorkAreaBase;

  //noinspection JSUnusedLocalSymbols
  public*/ function ContentTabManagerPluginBase$(config/*:ContentTabManagerPlugin = null*/) {if(arguments.length<=0)config=null;
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    this.workArea$WxA9 =AS3.as( component,  com.coremedia.cms.editor.sdk.desktop.WorkAreaBase);
    AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).setContentTabManager(this);
  }/*

  public*/ function openDocument(content/*:Content*/)/*:void*/ {
    if (!content) {
      return;
    }
    this.openDocuments([content]);
  }/*

  public*/ function openDocuments(documents/*:Array*/, background/*:Boolean = false*/)/*:void*/ {if(arguments.length<=1)background=false;
    var premularConfigurations/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < documents.length; i++) {
      premularConfigurations.push(new com.coremedia.cms.editor.sdk.premular.PremularConfiguration(documents[i], null, true, true));
    }

    this.openPremulars(premularConfigurations, background);
  }/*

  public*/ function openPremulars(premularConfigurations/*:Array*/, background/*:Boolean = false*/)/*:void*/ {if(arguments.length<=1)background=false;
    com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().openTabs(premularConfigurations.map(ContentTabManagerPluginBase.premularConfigurationToTabState), background);
  }/*

  public static*/ function premularConfigurationToTabState$static(premularConfiguration/*:PremularConfiguration*/)/*:Object*/ {
    var tabState/*:Object*/ = {};
    tabState.content = premularConfiguration.content;
    tabState.readOnlyContentObject = premularConfiguration.readOnlyContentObject;
    tabState.showPreview = premularConfiguration.showPreview;
    tabState.showForm = premularConfiguration.showForm;
    return com.coremedia.ui.util.ObjectUtils.removeUndefinedProperties(tabState);
  }/*

  public*/ function closeDocument(content/*:Content*/)/*:void*/ {
    var premularTab/*:PremularBase*/ = findPremularWithContent$static(content);
    if (premularTab) {
      premularTab.forceCloseTab();
    }
  }/*

  public*/ function openDocumentInActiveTab(content/*:Content*/)/*:Boolean*/ {
    if (com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase.mayBeOpened(content)) {
      var activePremular/*:PremularBase*/ =AS3.as( this.workArea$WxA9.getActiveTab(),  com.coremedia.cms.editor.sdk.premular.PremularBase);

      if (activePremular && !activePremular.isInEditMode()) {

        var proxies/*:WorkAreaTabProxiesTabPanel*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabProxies();
        var proxyForContent/*:WorkAreaTabProxy*/ = proxies.getWorkAreaTabProxyForEntity(content);

        if (proxyForContent) {
          // If the content is already shown a tab, we rather reuse that tab
          // so that no content is shown in two tabs at once.
          proxies.setActiveTab(proxyForContent);
        } else {
          var currentPremularContent/*:Content*/ = activePremular.getContent();
          activePremular.fireEvent(com.coremedia.cms.editor.sdk.desktop.WorkArea.BEFORE_TAB_REUSE_EVENT, activePremular);
          var currentProxy/*:WorkAreaTabProxy*/ = proxies.getWorkAreaTabProxyForEntity(currentPremularContent);
          var newProxyState/*:PremularProxyTabState*/ = new com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState(AS3.getBindable(currentProxy,"proxyState").plainState());
          newProxyState.entity = content;
          newProxyState.content = content;
          AS3.setBindable(currentProxy,"proxyState" , newProxyState);
          com.coremedia.ui.util.AsyncObserver.complete(function ()/*:void*/ {
            activePremular.fireEvent(com.coremedia.cms.editor.sdk.desktop.WorkArea.AFTER_TAB_REUSE_EVENT, activePremular);
          });
        }
        return true;
      }
    }
    return false;
  }/*

  private static*/ function findPremularWithContent$static(content/*:Content*/)/*:PremularBase*/ {
    return AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().findTabForEntity(content),  com.coremedia.cms.editor.sdk.premular.PremularBase);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: [
        "com.coremedia.cms.editor.sdk.desktop.ContentTabManager",
        "ext.Plugin"
      ],
      workArea$WxA9: null,
      constructor: ContentTabManagerPluginBase$,
      init: init,
      openDocument: openDocument,
      openDocuments: openDocuments,
      openPremulars: openPremulars,
      closeDocument: closeDocument,
      openDocumentInActiveTab: openDocumentInActiveTab,
      statics: {premularConfigurationToTabState: premularConfigurationToTabState$static},
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.ContentTabManager",
        "com.coremedia.ui.util.AsyncObserver",
        "com.coremedia.ui.util.ObjectUtils",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaBase",
        "com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.PremularBase",
        "com.coremedia.cms.editor.sdk.premular.PremularConfiguration"
      ]
    };
});
