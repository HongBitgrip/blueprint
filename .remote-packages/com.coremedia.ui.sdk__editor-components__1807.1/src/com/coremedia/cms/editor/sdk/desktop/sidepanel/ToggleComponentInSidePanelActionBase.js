Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelActionBase", function(ToggleComponentInSidePanelActionBase) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel {

import com.coremedia.ui.actions.ToggleComponentAction;

import ext.Component;

/**
 * This action is intended to be used from within EXML, only.
 *
 * @see com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction
 * /
public class ToggleComponentInSidePanelActionBase extends ToggleComponentAction {

  private var componentId:String;

  public*/ function ToggleComponentInSidePanelActionBase$(config/*:ToggleComponentInSidePanelAction = null*/) {if(arguments.length<=0)config=null;
    this.super$A0rp(config);

    this.componentId$A0rp = AS3.getBindable(config,"componentId");
    if (!this.componentId$A0rp) {
      throw AS3.cast(AS3.Error,"Missing config: componentId");
    }
  }/*

  internal native function get items():Array;

  private static*/ function focusComponent$static(cmp/*:Component*/)/*:void*/ {
    cmp.isFocusable(true) && cmp.focus();
  }/*

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {var this$=this;
    com.coremedia.ui.actions.ToggleComponentAction.prototype.addComponent.call(this,comp);

    comp.on("render",AS3.bind( this,"addDropTarget$A0rp"));

    if (this.items.length === 1) {
      com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager.getComponentOnCreation(this.componentId$A0rp,
              function (sidePanelComp/*:Component*/)/*:void*/ {
                sidePanelComp.on('show',AS3.bind( this$,"onShow$A0rp"));
                sidePanelComp.on('hide',AS3.bind( this$,"onHide$A0rp"));
                AS3.setBindable(this$,"pressed" , sidePanelComp.isVisible(true));
              });
    }
  }/*

  private*/ function addDropTarget(comp/*:Component*/)/*:void*/ {var this$=this;
    new com.coremedia.cms.editor.sdk.desktop.sidepanel.ShowInSidePanelDropTarget(comp, function ()/*:void*/ {
      AS3.setBindable(this$,"pressed" , true);
    });
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {var this$=this;
    com.coremedia.ui.actions.ToggleComponentAction.prototype.removeComponent.call(this,comp);

    if (this.items.length === 0) {
      com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager.getComponentOnCreation(this.componentId$A0rp,
              function (sidePanelComp/*:Component*/)/*:void*/ {
                sidePanelComp.un('show',AS3.bind( this$,"onShow$A0rp"));
                sidePanelComp.un('hide',AS3.bind( this$,"onHide$A0rp"));
                AS3.setBindable(this$,"pressed" , sidePanelComp.isVisible(true));
              });
    }
  }/*

  private*/ function onShow()/*:void*/ {
    AS3.setBindable(this,"pressed" , true);
  }/*

  private*/ function onHide()/*:void*/ {
    AS3.setBindable(this,"pressed" , false);
  }/*

  override protected*/ function pressHandler()/*:void*/ {
    com.coremedia.ui.actions.ToggleComponentAction.prototype.pressHandler.call(this);
    var comp/*:Component*/ = com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager.getOrCreateComponent(this.componentId$A0rp);
    if (!comp.isVisible(true)) {
      var wasTriggeredByUser/*:Boolean*/ = this.triggeredByUser;
      comp.show();
      // Workaround:
      // although the contract for show() is that after show() is called without an animation it is
      // imitiately visible this is not the cases here because of what we do in the sidePanelManager
      // check if the component is visible otherwise wait for the next "show" event (if we attach the
      // event before calling "show" it is triggered although the component is not yet visible).
      if (comp.isVisible(true)) {
        focusComponent$static(comp);
      } else {
        comp.on("show", function ()/*:void*/ {
          if (wasTriggeredByUser) {
            focusComponent$static(comp);
          }
        }, null, {single: true});
      }
    }
  }/*

  override protected*/ function unpressHandler()/*:void*/ {
    com.coremedia.ui.actions.ToggleComponentAction.prototype.unpressHandler.call(this);
    var comp/*:Component*/ = com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager.getOrCreateComponent(this.componentId$A0rp);
    if (comp.isVisible(true)) {
      comp.hide();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.ToggleComponentAction",
      componentId$A0rp: null,
      constructor: ToggleComponentInSidePanelActionBase$,
      super$A0rp: function() {
        com.coremedia.ui.actions.ToggleComponentAction.prototype.constructor.apply(this, arguments);
      },
      addComponent: addComponent,
      addDropTarget$A0rp: addDropTarget,
      removeComponent: removeComponent,
      onShow$A0rp: onShow,
      onHide$A0rp: onHide,
      pressHandler: pressHandler,
      unpressHandler: unpressHandler,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.actions.ToggleComponentAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.ShowInSidePanelDropTarget",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager"
      ]
    };
});
