Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaUtils", function(LinkListDropAreaUtils) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.ui.bem.IconWithTextBEMEntities;

import ext.XTemplate;

public class LinkListDropAreaUtils {

  private static const*/var CONTENT_SUGGESTIONS_BOUND_LIST_CLASS$static/*:String*/ = "cm-link-list-drop-area-content-suggestions-boundlist";/*

  public static*/ function getContentSuggestionsTemplate$static()/*:XTemplate*/ {
    var xTemplate/*:XTemplate*/ = new Ext.XTemplate([
      '<tpl for=".">',
      '<div class="' + CONTENT_SUGGESTIONS_BOUND_LIST_CLASS$static + ' ' + com.coremedia.ui.bem.IconWithTextBEMEntities.BLOCK + '">',
      '<div class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_ICON + ' {typeCls:htmlEncode}" data-qtip="{typeName}">',
      '</div>',
      '<div class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_TEXT + '" data-qtip="{name:htmlEncode}<br>{siteName:htmlEncode} - {siteLocale:htmlEncode}">',
      '{name:htmlEncode}',
      '</div>',
      '<div class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_ICON + ' {lifecycleStatusCls:htmlEncode}" data-qtip="{lifecycleStatus}">',
      '</div>',
      '</div>',
      '</tpl>'
    ]);
    return xTemplate;
  }/*

  public static*/ function getProjectContentSuggestionsTemplate$static()/*:XTemplate*/ {
    var xTemplate/*:XTemplate*/ = new Ext.XTemplate([
      '<tpl for=".">',
      '<div class="' + CONTENT_SUGGESTIONS_BOUND_LIST_CLASS$static + ' ' + com.coremedia.ui.bem.IconWithTextBEMEntities.BLOCK + '">',
      '<div class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_ICON + ' {typeCls:htmlEncode}" data-qtip="{typeName}">',
      '</div>',
      '<div style="width: 34%;" class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_TEXT + '" data-qtip="{path:htmlEncode}">',
      '{name:htmlEncode}',
      '</div>',
      '<div style="width: 33%;" class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_TEXT + '">',
      '{siteName:htmlEncode}',
      '</div>',
      '<div style="width: 33%;" class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_TEXT + '">',
      '{siteLocale:htmlEncode}',
      '</div>',
      '<div class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_ICON + ' {lifecycleStatusCls:htmlEncode}" data-qtip="{lifecycleStatus}">',
      '</div>',
      '</div>',
      '</tpl>'
    ]);
    return xTemplate;
  }/*
}*/function LinkListDropAreaUtils$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: LinkListDropAreaUtils$,
      statics: {
        getContentSuggestionsTemplate: getContentSuggestionsTemplate$static,
        getProjectContentSuggestionsTemplate: getProjectContentSuggestionsTemplate$static
      },
      requires: [
        "Ext.XTemplate",
        "com.coremedia.ui.bem.IconWithTextBEMEntities"
      ]
    };
});
