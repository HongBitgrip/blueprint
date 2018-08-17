Ext.define("com.coremedia.cms.editor.sdk.sites.SitesRemoteBean", function(SitesRemoteBean) {/*package com.coremedia.cms.editor.sdk.sites {

import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

public class SitesRemoteBean extends RemoteBeanImpl {
  private static const*/var PATH$static/*:String*/ = 'sites';/*
  private static const*/var SITE_TRANSLATION_STRATEGY_MAP_PATH$static/*:String*/;/* =*/function SITE_TRANSLATION_STRATEGY_MAP_PATH$static_(){SITE_TRANSLATION_STRATEGY_MAP_PATH$static=( PATH$static + "/siteTranslationStrategyMap");};/*

  public*/ function SitesRemoteBean$() {
    this.super$VVa6(PATH$static);
  }/*

  public*/ function getValidateUriSegmentUri()/*:String*/ {
    return this.get('validateUriSegmentUri');
  }/*

  public*/ function getSiteModel()/*:SiteModel*/ {
    return this.get('siteModel');
  }/*

  public static*/ function getSiteTranslationStrategyMap$static()/*:RemoteBean*/ {
    var remoteBean/*:RemoteBean*/ = com.coremedia.ui.data.beanFactory.getRemoteBean(SITE_TRANSLATION_STRATEGY_MAP_PATH$static);

    switch (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(remoteBean)) {
      case undefined: return undefined;
      case false: return null;
      case true: return remoteBean;
      default: return undefined;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      constructor: SitesRemoteBean$,
      super$VVa6: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getValidateUriSegmentUri: getValidateUriSegmentUri,
      getSiteModel: getSiteModel,
      statics: {
        SITE_TRANSLATION_STRATEGY_MAP_PATH: undefined,
        getSiteTranslationStrategyMap: getSiteTranslationStrategyMap$static,
        __initStatics__: function() {
          SITE_TRANSLATION_STRATEGY_MAP_PATH$static_();
        }
      },
      requires: [
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ]
    };
});
