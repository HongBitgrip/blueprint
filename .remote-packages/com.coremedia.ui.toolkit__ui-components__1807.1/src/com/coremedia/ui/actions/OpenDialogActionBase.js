Ext.define("com.coremedia.ui.actions.OpenDialogActionBase", function(OpenDialogActionBase) {/*package com.coremedia.ui.actions {
import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.WindowManager;
import ext.button.Button;
import ext.dom.Element;
import ext.window.Window;

/**
 * An action to open a window dialog.
 * It provides several properties to control to which container the window should be rendered to.
 * /
[PublicApi]
public class OpenDialogActionBase extends DependencyTrackedAction {
  private var dialog:Window;
  private var toggleDialog:Boolean = false;
  private var activateOnToggle:Boolean = false;
  private var useActionAsAnimationTarget:Boolean = false;
  private var animationInProgress:Boolean = false;

  /**
   * @param config the config object
   * /
  public*/ function OpenDialogActionBase$(config/*:OpenDialogAction = null*/) {if(arguments.length<=0)config=null;
    this.toggleDialog$QiCE = ! !AS3.getBindable(config,"toggleDialog");
    this.activateOnToggle$QiCE = ! !AS3.getBindable(config,"activateOnToggle");
    this.useActionAsAnimationTarget$QiCE = ! !AS3.getBindable(config,"useActionAsAnimationTarget");
    config = AS3.cast(com.coremedia.ui.actions.OpenDialogAction,Ext.apply({}, config));
    AS3.setBindable(config,"handler" ,AS3.bind( this,"handlerFunction"));
    this.super$QiCE(config);
  }/*

  protected*/ function handlerFunction()/*:void*/ {
    if (this.items && this.items.length > 0) {
      this.openDialog$QiCE(AS3.cast(Ext.Component,this.items[0])); // type cast needed because of IDEA bug and to suppress Jangaroo warning
    }
  }/*

  /**
   * Initializes the dialog component shown by this action if necessary
   * /
  private*/ function initDialog(trigger/*:Component*/)/*:void*/ {
    if (!this.dialog$QiCE) {
      this.dialog$QiCE =AS3.as( Ext.ComponentManager.create(this.getDialogConfig(trigger), 'window'),  Ext.window.Window);
      this.dialog$QiCE.addListener('beforedestroy',AS3.bind( this,"dialogDestroyed$QiCE"));
      this.dialog$QiCE.addListener('beforehide',AS3.bind( this,"toggleBtnOff$QiCE"));
    }
  }/*

  private*/ function findParentLayoutTarget(trigger/*:Component*/)/*:Element*/{
    return trigger.findParentByType(AS3.cast(com.coremedia.ui.actions.OpenDialogAction,this.initialConfig).renderToParent.xtype).getLayout().getTarget();
  }/*

  protected*/ function getDialogConfig(trigger/*:Component*/)/*:Window*/ {
    var config/*:OpenDialogAction*/ = AS3.cast(com.coremedia.ui.actions.OpenDialogAction,this.initialConfig);
    //override default dialog configuration
    var dialogConfig/*:Window*/ = AS3.cast(Ext.window.Window,Ext.apply(Ext.apply({}, AS3.getBindable(config,"dialogDefaults")), AS3.getBindable(config,"dialog")));
    if (AS3.getBindable(config,"computeRenderTo") || config.renderToParent) {
      //clone before modify the original config
      dialogConfig = AS3.cast(Ext.window.Window,Ext.apply({}, dialogConfig));
      dialogConfig.renderTo = config.renderToParent ? this.findParentLayoutTarget$QiCE(trigger) : (AS3.getBindable(config,"computeRenderTo"))(trigger);
    }
    if(this.useActionAsAnimationTarget$QiCE) {
      //clone before modify the original config
      dialogConfig = AS3.cast(Ext.window.Window,Ext.apply({}, dialogConfig));
      dialogConfig.animateTarget = trigger.getEl();
    }
    return dialogConfig;
  }/*

  /**
   * Return the dialog bound to this action.
   * @return dialog bound to this action; might be null if not initialized yet
   * /
  public*/ function getDialog()/*:Window*/ {
    return this.dialog$QiCE;
  }/*

  /**
   * @private
   * /
  public*/ function showDialog(trigger/*:Component*/)/*:void*/ {
    this.initDialog$QiCE(trigger);
    var button/*:Button*/ =AS3.as( trigger,  Ext.button.Button);
    button && button.setPressed(true);
    this.activateOnToggle$QiCE && this.dialog$QiCE.toFront();
    this.dialog$QiCE.show();
  }/*

  private*/ function openDialog(trigger/*:Component*/)/*:void*/ {
    if (this.animationInProgress$QiCE) {
      return;
    }
    this.initDialog$QiCE(trigger);

    var button/*:Button*/ =AS3.as( trigger,  Ext.button.Button);
    if (!this.dialog$QiCE.isVisible(true)) {
      this.animationInProgress$QiCE = true;
      button && button.setPressed(true);
      this.dialog$QiCE.show(null,AS3.bind( this,"animationCompleted$QiCE"));
    } else {
      if (!this.toggleDialog$QiCE || this.activateOnToggle$QiCE && this.dialog$QiCE !== Ext.WindowManager.getActive()) {
        //Dialogs that are hidden behind other windows are brought to front if activate on toggle is selected
        this.dialog$QiCE.toFront();
      } else {
        this.animationInProgress$QiCE = true;
        button && button.setPressed(false);
        this.dialog$QiCE.hide(null,AS3.bind( this,"animationCompleted$QiCE"));
      }
    }
  }/*

  private*/ function animationCompleted()/*:void*/ {
    this.animationInProgress$QiCE = false;
  }/*

  private*/ function toggleBtnOff(trigger/*:Component*/)/*:void*/ {
    if(trigger.isVisible(true)){
      for (var i/*:int*/ = 0; i < this.items.length; i++) {
        var item/*:Button*/ =AS3.as( this.items[i],  Ext.button.Button);
        item && item.setPressed(false);
      }
    }
  }/*

  private*/ function dialogDestroyed()/*:void*/ {
    this.dialog$QiCE = null;
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    com.coremedia.ui.actions.DependencyTrackedAction.prototype.removeComponent.call(this,comp);
    if (this.items && this.items.length === 0 && this.dialog$QiCE) {
      if (this.useActionAsAnimationTarget$QiCE) {
        // At this point, the component may already be invisible.
        // Animating the dialog close might not be possible and
        // might in fact lead to errors.
        //TODO: EXT6_API
        this.dialog$QiCE['animateTarget'] = false;
      }
      this.dialog$QiCE.removeListener('beforedestroy',AS3.bind( this,"dialogDestroyed$QiCE"));
      this.dialog$QiCE.removeListener('beforehide',AS3.bind( this,"toggleBtnOff$QiCE"));
      this.dialog$QiCE.destroy();
      this.dialog$QiCE = null;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      metadata: {"": ["PublicApi"]},
      dialog$QiCE: null,
      toggleDialog$QiCE: false,
      activateOnToggle$QiCE: false,
      useActionAsAnimationTarget$QiCE: false,
      animationInProgress$QiCE: false,
      constructor: OpenDialogActionBase$,
      super$QiCE: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      handlerFunction: handlerFunction,
      initDialog$QiCE: initDialog,
      findParentLayoutTarget$QiCE: findParentLayoutTarget,
      getDialogConfig: getDialogConfig,
      getDialog: getDialog,
      showDialog: showDialog,
      openDialog$QiCE: openDialog,
      animationCompleted$QiCE: animationCompleted,
      toggleBtnOff$QiCE: toggleBtnOff,
      dialogDestroyed$QiCE: dialogDestroyed,
      removeComponent: removeComponent,
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.ComponentManager",
        "Ext.ZIndexManager",
        "Ext.button.Button",
        "Ext.window.Window",
        "com.coremedia.ui.actions.DependencyTrackedAction"
      ],
      uses: ["com.coremedia.ui.actions.OpenDialogAction"]
    };
});
