Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentPanelBase", function(DocumentPanelBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cms.editor.sdk.premular.differencing.DiffManager;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.panel.Panel;

public class DocumentPanelBase extends Panel {
  public static const DISPATCHER_ITEM_ID:String = "dispatcher";

  private var forceReadOnlyValueExpression:ValueExpression;

  public*/ function DocumentPanelBase$(config/*:DocumentPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$6zOu(config);
  }/*

  /**
   * a property path to the Content to find a form for
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * Whether this panel shows the document in read-only mode.
   * /
  [Bindable]
  public var readOnly:Boolean;

  /**
   * The difference manager
   * /
  [Bindable]
  public var diffManager:DiffManager;

  public*/ function getTabbedDocumentFormDispatcher()/*:TabbedDocumentFormDispatcher*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher,this.getComponent(DocumentPanelBase.DISPATCHER_ITEM_ID));
  }/*

  protected*/ function getForceReadOnlyValueExpression(config/*:DocumentPanel*/)/*:ValueExpression*/ {
    if (!this.forceReadOnlyValueExpression$6zOu) {
      this.forceReadOnlyValueExpression$6zOu = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"readOnly") || false);
    }
    return this.forceReadOnlyValueExpression$6zOu;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      forceReadOnlyValueExpression$6zOu: null,
      constructor: DocumentPanelBase$,
      super$6zOu: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getTabbedDocumentFormDispatcher: getTabbedDocumentFormDispatcher,
      getForceReadOnlyValueExpression: getForceReadOnlyValueExpression,
      config: {
        bindTo: null,
        readOnly: false,
        diffManager: null
      },
      statics: {DISPATCHER_ITEM_ID: "dispatcher"},
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher"]
    };
});
