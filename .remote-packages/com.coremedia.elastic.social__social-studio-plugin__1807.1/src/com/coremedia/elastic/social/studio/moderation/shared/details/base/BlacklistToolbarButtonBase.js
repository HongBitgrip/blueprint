Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButtonBase", function(BlacklistToolbarButtonBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base {

import com.coremedia.elastic.social.studio.model.BlacklistAdministration;
import com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase;
import com.coremedia.ui.components.IconButton;

import ext.Ext;
import ext.button.Button;
import ext.container.Container;

public class BlacklistToolbarButtonBase extends IconButton {
  private var blacklistWindowCmp:BlacklistWindow;

  public*/ function BlacklistToolbarButtonBase$(config/*:BlacklistToolbarButton = null*/) {if(arguments.length<=0)config=null;
    config.toggleHandler =AS3.bind( this,"onToggle");
    config.enableToggle = true;
    this.super$ZOOB(config);
  }/*

  // start of config properties
  [Bindable]
  public var blacklistAdministration:BlacklistAdministration;

  internal native function get richTextAreaId():String;

  // end of config properties

  //noinspection JSUnusedLocalSymbols
  internal*/ function onToggle(button/*:Button*/, pressed/*:Boolean*/)/*:**/ {
    if (!pressed && this.blacklistWindowCmp$ZOOB) {
      this.blacklistWindowCmp$ZOOB.hide();
    } else {
      this.openWindow$ZOOB();
    }
  }/*

  private*/ function getWindow()/*:BlacklistWindow*/ {
    if (!this.blacklistWindowCmp$ZOOB) {
      var windowParent/*:Container*/ =AS3.as( Ext.getCmp(com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.ID),  Ext.container.Container);
      var blacklistWindowCfg/*:BlacklistWindow*/ = AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistWindow,{});
      blacklistWindowCfg.renderTo = windowParent.el.id;
      AS3.setBindable(blacklistWindowCfg,"blacklistAdministration" , AS3.getBindable(this,"blacklistAdministration"));
      AS3.setBindable(blacklistWindowCfg,"richtextAreaId" , this.richTextAreaId);
      this.blacklistWindowCmp$ZOOB = new com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistWindow(blacklistWindowCfg);
      this.blacklistWindowCmp$ZOOB.addListener('beforedestroy',AS3.bind( this,"windowDestroyed$ZOOB"));
      this.blacklistWindowCmp$ZOOB.addListener('hide',AS3.bind( this,"windowHide$ZOOB"));

      //change the position of the internalLinkWindow if the parent has been resized
      windowParent.addListener("resize",AS3.bind( this,"resizeHandler$ZOOB"));
    }

    return this.blacklistWindowCmp$ZOOB;
  }/*

  public*/ function getBlackListWindow()/*:BlacklistWindow*/ {
    return this.blacklistWindowCmp$ZOOB;
  }/*

  private*/ function openWindow()/*:void*/ {
    this.getWindow$ZOOB();
    //open the window relative to the parents width and the buttons height (some pixels below the button)
    this.resetLinkWindowPosition$ZOOB();
    this.getWindow$ZOOB().show();
    this.toggle(true);
  }/*

  private*/ function resetLinkWindowPosition()/*:void*/ {
    var windowParent/*:Container*/ =AS3.as( Ext.getCmp(com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.ID),  Ext.container.Container);
    var parentWidth/*:Number*/ = windowParent.getWidth();
    var parentX/*:Number*/ = windowParent.getPosition()[0];
    var xRightBorderOfWindowParent/*:Number*/ = parentX + (parentWidth - 20); //we asume that the scrollbar of the window parent takes some px

    var x/*:Number*/;
    if (this.getPosition()[0] + this.blacklistWindowCmp$ZOOB.getWidth() <= xRightBorderOfWindowParent) {
      //the window should not have a bigger x that the toggle button
      x = this.getPosition()[0];
    } else {
      x = xRightBorderOfWindowParent - this.blacklistWindowCmp$ZOOB.getWidth();
      if (x < parentX + 15) {
        x = parentX + 15;
      }
    }

    this.blacklistWindowCmp$ZOOB.setPagePosition(x, this.getPosition()[1] + this.getHeight());
  }/*

  private*/ function windowDestroyed()/*:void*/ {
    var windowParent/*:Container*/ =AS3.as( Ext.getCmp(com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.ID),  Ext.container.Container);
    windowParent.removeListener("resize",AS3.bind( this,"resizeHandler$ZOOB"));
    this.blacklistWindowCmp$ZOOB = null;
  }/*

  private*/ function resizeHandler()/*:void*/ {
    if (this.blacklistWindowCmp$ZOOB.isVisible(true)) {
      this.resetLinkWindowPosition$ZOOB();
    }
  }/*

  private*/ function windowHide()/*:void*/ {
    this.toggle(false);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      blacklistWindowCmp$ZOOB: null,
      constructor: BlacklistToolbarButtonBase$,
      super$ZOOB: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      onToggle: onToggle,
      getWindow$ZOOB: getWindow,
      getBlackListWindow: getBlackListWindow,
      openWindow$ZOOB: openWindow,
      resetLinkWindowPosition$ZOOB: resetLinkWindowPosition,
      windowDestroyed$ZOOB: windowDestroyed,
      resizeHandler$ZOOB: resizeHandler,
      windowHide$ZOOB: windowHide,
      config: {blacklistAdministration: null},
      requires: [
        "Ext",
        "Ext.container.Container",
        "com.coremedia.ui.components.IconButton"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistWindow"
      ]
    };
});
