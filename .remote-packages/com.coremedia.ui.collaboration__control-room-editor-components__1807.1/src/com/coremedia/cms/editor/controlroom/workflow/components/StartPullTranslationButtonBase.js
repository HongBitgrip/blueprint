Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButtonBase", function(StartPullTranslationButtonBase) {/*package com.coremedia.cms.editor.controlroom.workflow.components {

import com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction;
import com.coremedia.ui.components.IconButton;

import ext.LoadMask;
import ext.dom.Element;

public class StartPullTranslationButtonBase extends IconButton {
  private var loadMask:LoadMask;

  public*/ function StartPullTranslationButtonBase$(config/*:StartPullTranslationButton = null*/) {if(arguments.length<=0)config=null;
    this.super$tMHo(config);

    this.on('afterrender',AS3.bind( this,"createLoadMask$tMHo"));
    this.on('click',AS3.bind( this,"registerWorkflowStartedCallback$tMHo"));
  }/*

  private*/ function createLoadMask()/*:void*/ {
    var el/*:Element*/ = this.getEl();
    if (el) {
      var loadMaskCfg/*:LoadMask*/ = AS3.cast(Ext.LoadMask,{});
      loadMaskCfg.msg = '';
      loadMaskCfg.target = this;
      this.loadMask$tMHo = new Ext.LoadMask(loadMaskCfg);
      this.loadMask$tMHo.disable();
    }
  }/*

  private*/ function registerWorkflowStartedCallback()/*:Function*/ {
    this.enableLoadMask$tMHo();

    var action/*:StartPullTranslationWorkflowAction*/ =AS3.as( this.baseAction,  com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction);
    action && action.registerFinallyCallback(AS3.bind(this,"disableLoadMask$tMHo"));
  }/*

  private*/ function enableLoadMask()/*:void*/ {
    if (this.loadMask$tMHo) {
      this.loadMask$tMHo.enable();
      this.loadMask$tMHo.show();
    }
  }/*

  private*/ function disableLoadMask()/*:void*/ {
    if (this.loadMask$tMHo) {
      this.loadMask$tMHo.disable();
      this.loadMask$tMHo.hide();
    }
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.ui.components.IconButton.prototype.onDestroy.call(this);
    if (this.loadMask$tMHo) {
      this.loadMask$tMHo.destroy();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      loadMask$tMHo: null,
      constructor: StartPullTranslationButtonBase$,
      super$tMHo: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      createLoadMask$tMHo: createLoadMask,
      registerWorkflowStartedCallback$tMHo: registerWorkflowStartedCallback,
      enableLoadMask$tMHo: enableLoadMask,
      disableLoadMask$tMHo: disableLoadMask,
      onDestroy: onDestroy,
      requires: [
        "Ext.LoadMask",
        "com.coremedia.ui.components.IconButton"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction"]
    };
});
