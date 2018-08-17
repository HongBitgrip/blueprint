Ext.define("com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPluginBase", function(AriaMainRegionPluginBase) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cms.editor.sdk.premular.DocumentTabPanel;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;

import ext.Component;
import ext.Plugin;
import ext.panel.Panel;
import ext.tab.TabPanel;

/**
 * Hook that provides tab change events for the WorkArea and DocumentTabPanel.
 * /
public class AriaMainRegionPluginBase implements Plugin {

  private static*/ var workAreaTabChangeExpression$static/*:ValueExpression*/=null;/*
  private static*/ var documentTabChangeExpression$static/*:ValueExpression*/=null;/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    component.addListener('beforetabchange', tabChanged$static);
    component.addListener('removed',AS3.bind( this,"doBeforeDestroy$5ePc"));
    component.addListener('beforeremove', doRemove$static);
  }/*

  /**
   * Returns the value expression work area tab change events are fired to.
   * @return
   * /
  private static*/ function getWorkAreaTabChangeExpression$static()/*:ValueExpression*/ {
    if (!workAreaTabChangeExpression$static) {
      workAreaTabChangeExpression$static = com.coremedia.ui.data.ValueExpressionFactory.create('workAreaTab', com.coremedia.ui.data.beanFactory.createLocalBean());
    }
    return workAreaTabChangeExpression$static;
  }/*

  /**
   * Returns the value expression document tab change events are fired to.
   * @return
   * /
  private static*/ function getDocumentTabChangeExpression$static()/*:ValueExpression*/ {
    if (!documentTabChangeExpression$static) {
      documentTabChangeExpression$static = com.coremedia.ui.data.ValueExpressionFactory.create('documentTab', com.coremedia.ui.data.beanFactory.createLocalBean());
    }
    return documentTabChangeExpression$static;
  }/*

  private static*/ function doRemove$static(tabPanel/*:TabPanel*/, tab/*:Panel*/)/*:void*/ {
    if(AS3.is(tabPanel,  com.coremedia.cms.editor.sdk.desktop.WorkArea) && getWorkAreaTabChangeExpression$static().getValue() === tab) {
      getWorkAreaTabChangeExpression$static().setValue(null);
    }
    else if(AS3.is(tabPanel,  com.coremedia.cms.editor.sdk.premular.DocumentTabPanel) && getDocumentTabChangeExpression$static().getValue() === tab) {
      getDocumentTabChangeExpression$static().setValue(null);
    }
  }/*

  private static*/ function tabChanged$static(panel/*:TabPanel*/, tab/*:Panel*/)/*:void*/ {
    if(AS3.is(panel,  com.coremedia.cms.editor.sdk.desktop.WorkArea)) {
      removeMainRegion$static();
      getWorkAreaTabChangeExpression$static().setValue(tab);
    }
    else if(AS3.is(panel,  com.coremedia.cms.editor.sdk.premular.DocumentTabPanel)) {
      removeMainRegion$static();
      getDocumentTabChangeExpression$static().setValue(tab);
      updateMainRegion$static();
    }
  }/*

  private static*/ function updateMainRegion$static()/*:void*/ {
    var documentTabPanel/*:DocumentTabPanel*/ = getDocumentTabChangeExpression$static().getValue();
    if (documentTabPanel.rendered) {
      documentTabPanel.el.dom.setAttribute('role', 'main');
    } else {
      documentTabPanel.on('afterrender', updateMainRegion$static, null, {single: true});
    }
  }/*

  private static*/ function removeMainRegion$static()/*:void*/ {
    var documentTabPanel/*:DocumentTabPanel*/ = getDocumentTabChangeExpression$static().getValue();
    if(documentTabPanel) {
      if (documentTabPanel.rendered) {
        documentTabPanel.el.dom.removeAttribute('role');
      } else {
        documentTabPanel.on("afterrender", removeMainRegion$static, null, {single:true});
      }
    }
  }/*

  private*/ function doBeforeDestroy(component/*:Component*/)/*:void*/ {
    if (AS3.is(component,  com.coremedia.cms.editor.sdk.desktop.WorkArea)) {
      var workAreaTabChangeExpression/*:ValueExpression*/ = getWorkAreaTabChangeExpression$static();
      var currentWorkAreaTab/*:Component*/ =AS3.as( workAreaTabChangeExpression.getValue(),  Ext.Component);
      if (currentWorkAreaTab && currentWorkAreaTab.findParentBy(function(cmp/*:Component*/)/*:Boolean*/ {return cmp === component;})) {
        workAreaTabChangeExpression.setValue(null);
      }
    }
    else if (AS3.is(component,  com.coremedia.cms.editor.sdk.premular.DocumentTabPanel)) {
      var documentTabChangeExpression/*:ValueExpression*/ = getDocumentTabChangeExpression$static();
      var currentDocumentTab/*:Component*/ =AS3.as( documentTabChangeExpression.getValue(),  Ext.Component);
      if (currentDocumentTab && currentDocumentTab.findParentBy(function(cmp/*:Component*/)/*:Boolean*/ {return cmp === component;})) {
        documentTabChangeExpression.setValue(null);
      }
    }
  }/*
}*/function AriaMainRegionPluginBase$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      init: init,
      doBeforeDestroy$5ePc: doBeforeDestroy,
      constructor: AriaMainRegionPluginBase$,
      requires: [
        "Ext.Component",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel"
      ]
    };
});
