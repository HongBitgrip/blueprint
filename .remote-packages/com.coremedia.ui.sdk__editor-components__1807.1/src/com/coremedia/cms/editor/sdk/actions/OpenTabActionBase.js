Ext.define("com.coremedia.cms.editor.sdk.actions.OpenTabActionBase", function(OpenTabActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.util.createComponentSelector;

import ext.Action;
import ext.Ext;
import ext.panel.Panel;

[PublicApi]
public class OpenTabActionBase extends Action{

  /**
   * <p>the panel to be opened as a tab in the workarea. </p>
   * <p>Please note that when restoring the tab only the xtype of the given tab is used
   * and other config parameters are ignored.</p>
   * <p>To restore the internal state of the tab the tab can implement <code>StateHolder</code></p>
   *
   * @see com.coremedia.ui.data.StateHolder
   * /
  [Bindable]
  public var tab:Panel;

  private var singleton:Boolean;

  private var added:Panel;

  public*/ function OpenTabActionBase$(config/*:OpenTabAction = null*/) {if(arguments.length<=0)config=null;
    this.super$LnHd(AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenTabAction,Ext.apply({'handler':AS3.bind( this,"openTabHandler$LnHd")}, config)));
    AS3.setBindable(this,"tab" , AS3.getBindable(config,"tab"));
    this.singleton$LnHd = AS3.getBindable(config,"singleton");
  }/*

  private*/ function openTabHandler()/*:void*/ {
    if (this.singleton$LnHd && !this.added$LnHd) {
      var findByType/*:Array*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkArea().query(com.coremedia.ui.util.createComponentSelector()._xtype(AS3.getBindable(this,"tab").xtype, true).build());
      if (findByType && findByType.length > 0){
        this.added$LnHd = findByType[0];
      }
    }

    if (!this.singleton$LnHd || !this.added$LnHd) {
      this.added$LnHd =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea().add(AS3.getBindable(this,"tab"))[0],  Ext.panel.Panel);
    }

    if (this.added$LnHd) {
      com.coremedia.cms.editor.sdk.editorContext.getWorkArea().setActiveTab(this.added$LnHd);
      if (this.singleton$LnHd) {
        this.added$LnHd.addListener('beforedestroy',AS3.bind( this,"singletonDestroyed$LnHd"));
      }
    }
  }/*

  private*/ function singletonDestroyed()/*:void*/ {
    this.added$LnHd.removeListener('beforedestroy',AS3.bind( this,"singletonDestroyed$LnHd"));
    this.added$LnHd = null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {"": ["PublicApi"]},
      singleton$LnHd: false,
      added$LnHd: null,
      constructor: OpenTabActionBase$,
      super$LnHd: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      openTabHandler$LnHd: openTabHandler,
      singletonDestroyed$LnHd: singletonDestroyed,
      config: {tab: null},
      requires: [
        "Ext",
        "Ext.Action",
        "Ext.panel.Panel",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenTabAction",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
