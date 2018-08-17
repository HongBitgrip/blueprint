Ext.define("com.coremedia.cms.editor.sdk.desktop.TabChangePluginBase", function(TabChangePluginBase) {/*package com.coremedia.cms.editor.sdk.desktop {
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
public class TabChangePluginBase implements Plugin {

  private static*/ var workAreaTabChangeExpression$static/*:ValueExpression*/=null;/*
  private static*/ var documentTabChangeExpression$static/*:ValueExpression*/=null;/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    component.addListener('beforetabchange', tabChanged$static);
    component.addListener('removed',AS3.bind( this,"doBeforeDestroy$R2rz"));
    component.addListener('beforeremove', doRemove$static);
  }/*

  /**
   * Returns the value expression work area tab change events are fired to.
   * @return
   * /
  public static*/ function getWorkAreaTabChangeExpression$static()/*:ValueExpression*/ {
    if (!workAreaTabChangeExpression$static) {
      workAreaTabChangeExpression$static = com.coremedia.ui.data.ValueExpressionFactory.create('workAreaTab', com.coremedia.ui.data.beanFactory.createLocalBean());
    }
    return workAreaTabChangeExpression$static;
  }/*

  /**
   * Returns the value expression document tab change events are fired to.
   * @return
   * /
  public static*/ function getDocumentTabChangeExpression$static()/*:ValueExpression*/ {
    if (!documentTabChangeExpression$static) {
      documentTabChangeExpression$static = com.coremedia.ui.data.ValueExpressionFactory.create('documentTab', com.coremedia.ui.data.beanFactory.createLocalBean());
    }
    return documentTabChangeExpression$static;
  }/*

  private static*/ function doRemove$static(tabPanel/*:TabPanel*/, tab/*:Panel*/)/*:void*/ {
    if(AS3.is(tabPanel,  com.coremedia.cms.editor.sdk.desktop.WorkArea) && TabChangePluginBase.getWorkAreaTabChangeExpression().getValue() === tab) {
      TabChangePluginBase.getWorkAreaTabChangeExpression().setValue(null);
    }
    else if(AS3.is(tabPanel,  com.coremedia.cms.editor.sdk.premular.DocumentTabPanel) && TabChangePluginBase.getDocumentTabChangeExpression().getValue() === tab) {
      TabChangePluginBase.getDocumentTabChangeExpression().setValue(null);
    }
  }/*

  private static*/ function tabChanged$static(panel/*:TabPanel*/, tab/*:Panel*/)/*:void*/ {
    if(AS3.is(panel,  com.coremedia.cms.editor.sdk.desktop.WorkArea)) {
      TabChangePluginBase.getWorkAreaTabChangeExpression().setValue(tab);
    }
    else if(AS3.is(panel,  com.coremedia.cms.editor.sdk.premular.DocumentTabPanel)) {
      TabChangePluginBase.getDocumentTabChangeExpression().setValue(tab);
    }
  }/*

  private*/ function doBeforeDestroy(component/*:Component*/)/*:void*/ {
    if (AS3.is(component,  com.coremedia.cms.editor.sdk.desktop.WorkArea)) {
      var workAreaTabChangeExpression/*:ValueExpression*/ = TabChangePluginBase.getWorkAreaTabChangeExpression();
      var currentWorkAreaTab/*:Component*/ =AS3.as( workAreaTabChangeExpression.getValue(),  Ext.Component);
      if (currentWorkAreaTab && currentWorkAreaTab.findParentBy(function(cmp/*:Component*/)/*:Boolean*/ {return cmp === component;})) {
        workAreaTabChangeExpression.setValue(null);
      }
    } else if (AS3.is(component,  com.coremedia.cms.editor.sdk.premular.DocumentTabPanel)) {
      var documentTabChangeExpression/*:ValueExpression*/ = TabChangePluginBase.getDocumentTabChangeExpression();
      var currentDocumentTab/*:Component*/ =AS3.as( documentTabChangeExpression.getValue(),  Ext.Component);
      if (currentDocumentTab && currentDocumentTab.findParentBy(function(cmp/*:Component*/)/*:Boolean*/ {return cmp === component;})) {
        documentTabChangeExpression.setValue(null);
      }
    }
  }/*
}*/function TabChangePluginBase$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      init: init,
      doBeforeDestroy$R2rz: doBeforeDestroy,
      constructor: TabChangePluginBase$,
      statics: {
        getWorkAreaTabChangeExpression: getWorkAreaTabChangeExpression$static,
        getDocumentTabChangeExpression: getDocumentTabChangeExpression$static
      },
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
