Ext.define("com.coremedia.cms.editor.sdk.desktop.EditorMainViewBase", function(EditorMainViewBase) {/*package com.coremedia.cms.editor.sdk.desktop {

import com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel;
import com.coremedia.cms.editor.sdk.util.LocaleUtil;
import com.coremedia.ui.util.createComponentSelector;

import ext.container.Viewport;

public class EditorMainViewBase extends Viewport {

  private var workAreaTabProxies:WorkAreaTabProxiesTabPanel;

  public*/ function EditorMainViewBase$(config/*:EditorMainView = null*/) {if(arguments.length<=0)config=null;
    this.super$YpGe(config);
  }/*

  public*/ function getWorkAreaTabProxies()/*:WorkAreaTabProxiesTabPanel*/ {
    if (!this.workAreaTabProxies$YpGe) {
      this.workAreaTabProxies$YpGe =AS3.as( this.query(com.coremedia.ui.util.createComponentSelector().itemId(com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel.WORK_AREA_TAB_PROXIES_TABBAR_ID).build())[0],  com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel);
    }
    return this.workAreaTabProxies$YpGe;
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Viewport.prototype.afterRender.call(this);
    this.getEl().dom.parentNode.setAttribute('lang', com.coremedia.cms.editor.sdk.util.LocaleUtil.getLocale());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Viewport",
      workAreaTabProxies$YpGe: null,
      constructor: EditorMainViewBase$,
      super$YpGe: function() {
        Ext.container.Viewport.prototype.constructor.apply(this, arguments);
      },
      getWorkAreaTabProxies: getWorkAreaTabProxies,
      afterRender: afterRender,
      requires: [
        "Ext.container.Viewport",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel",
        "com.coremedia.cms.editor.sdk.util.LocaleUtil"
      ]
    };
});
