Ext.define("com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcherBase", function(ReadOnlyDocumentFormToolbarDispatcherBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.content.Content;

import ext.container.Container;
import ext.layout.container.CardLayout;

public class ReadOnlyDocumentFormToolbarDispatcherBase extends Container {
  protected static const MASTER_COMPARISON_PANEL_ID:String = "masterComparisonPanel";
  protected static const VERSION_COMPARISON_PANEL_ID:String = "versionComparisonPanel";

  private var premular:Premular;

  public*/ function ReadOnlyDocumentFormToolbarDispatcherBase$(config/*:ReadOnlyDocumentFormToolbarDispatcher = null*/) {if(arguments.length<=0)config=null;
    this.super$8sKG(config);

    this.premular$8sKG = AS3.getBindable(config,"premular");

    // Register a bean listener. Do not use a value expression,
    // which would lead to unnecessary flickering. A SwitchingContainer
    // would also flicker for the same reason.
    this.premular$8sKG.addListener(com.coremedia.cms.editor.sdk.premular.PremularBase.READ_ONLY_CONTENT_PROPERTY_NAME,AS3.bind( this,"readOnlyContentChanged$8sKG"));
    this.readOnlyContentChanged$8sKG();
  }/*

  private*/ function readOnlyContentChanged()/*:void*/ {
    var activeItemId/*:String*/ = null;
    var readOnlyContent/*:Content*/ = this.premular$8sKG.getReadOnlyContent();
    if (this.premular$8sKG.isInVersionComparisonMode()) {
      activeItemId = ReadOnlyDocumentFormToolbarDispatcherBase.VERSION_COMPARISON_PANEL_ID;
    } else if (readOnlyContent) {
      activeItemId = ReadOnlyDocumentFormToolbarDispatcherBase.MASTER_COMPARISON_PANEL_ID;
    }

    if (activeItemId) {
      this['activeItem'] = activeItemId;
      this.fireEvent('activeItem', this, activeItemId ? this.getComponent(activeItemId) : null);
      if (this.rendered) {
        (AS3.as(this.getLayout(),  Ext.layout.container.Card)).setActiveItem(activeItemId);
      }
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.premular$8sKG.removeListener(com.coremedia.cms.editor.sdk.premular.PremularBase.READ_ONLY_CONTENT_PROPERTY_NAME,AS3.bind( this,"readOnlyContentChanged$8sKG"));

    Ext.container.Container.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      premular$8sKG: null,
      constructor: ReadOnlyDocumentFormToolbarDispatcherBase$,
      super$8sKG: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      readOnlyContentChanged$8sKG: readOnlyContentChanged,
      beforeDestroy: beforeDestroy,
      statics: {
        MASTER_COMPARISON_PANEL_ID: "masterComparisonPanel",
        VERSION_COMPARISON_PANEL_ID: "versionComparisonPanel"
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.Card"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.PremularBase"]
    };
});
