Ext.define("com.coremedia.cms.editor.sdk.premular.StandAloneDocumentViewBase", function(StandAloneDocumentViewBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.createComponentSelector;

import ext.Ext;
import ext.container.Container;

/**
 * The base class for StandAloneDocumentView. Do not use directly.
 *
 * @link com.coremedia.cms.editor.sdk.premular.StandAloneDocumentView
 * /
public class StandAloneDocumentViewBase extends Container {
  public*/ function StandAloneDocumentViewBase$(config/*:Container = null*/) {if(arguments.length<=0)config=null;
    this.super$ctiu(config);
  }/*

  public*/ function getPropertyFieldRegistry()/*:PropertyFieldRegistry*/ {
    return new com.coremedia.cms.editor.sdk.premular.PropertyFieldRegistry(this);
  }/*

  public*/ function getFocusForwarder()/*:FocusForwarder*/ {
    return new com.coremedia.cms.editor.sdk.premular.FocusForwarder(Ext.emptyFn, Ext.emptyFn);
  }/*

  public*/ function getTabbedDocumentFormDispatcher()/*:TabbedDocumentFormDispatcher*/ {
    return AS3.as( this.query(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher.xtype).build())[0],  com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      constructor: StandAloneDocumentViewBase$,
      super$ctiu: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getPropertyFieldRegistry: getPropertyFieldRegistry,
      getFocusForwarder: getFocusForwarder,
      getTabbedDocumentFormDispatcher: getTabbedDocumentFormDispatcher,
      requires: [
        "Ext",
        "Ext.container.Container",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.FocusForwarder",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldRegistry",
        "com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher"
      ]
    };
});
