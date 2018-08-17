Ext.define("com.coremedia.ui.components.AnimatedNotificationBase", function(AnimatedNotificationBase) {/*package com.coremedia.ui.components {
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.Ext;
import ext.dom.Element;
import ext.dom.Shadow;
import ext.tip.Tip;

/**
 * Fires when the notification is about to start hiding.
 * /
[Event(name = "hiding")] // NOSONAR - no type

/**
 * A notification window that appears left of a given component.
 * It is visible for three seconds or until closed explicitly.
 * It fades in and fades out softly.
 * /
public class AnimatedNotificationBase extends Tip implements IValidationStateMixin{
  /**
   * Set to true to hide the anchor.
   * /
  public var hideAnchor:Boolean = false;
  /**
   * the time in seconds to spend fading in
   * /
  private static const*/var FADEIN_DURATION$static/*:int*/ = 1;/*
  /**
   * the time in seconds to spend fading out
   * /
  private static const*/var FADEOUT_DURATION$static/*:int*/ = 1;/*
  /**
   * the time in milliseconds while the notification is fully visible
   * /
  private static const*/var VISIBILITY_DURATION$static/*:int*/ = 3000;/*

  private static const*/var ANCHOR_STYLE_BY_POSITION$static/*:Object*/;/* =*/function ANCHOR_STYLE_BY_POSITION$static_(){ANCHOR_STYLE_BY_POSITION$static=( {
    l: "x-tip-anchor-right",
    r: "x-tip-anchor-left"
  });};/*

  private var anchorStyle:String;
  private var anchorAlign:String;
  private var anchorOffset:Array;
  private var tipAlign:String;
  private var tipOffset:Array;

  /**
   * the id of the DOM element next to which this tip should be shown
   * /
  private var target:String;

  /**
   * whether the notification has already been requested to start hiding
   * or has completed the hiding process
   * /
  private var isHiding:Boolean = false;

  /**
   * whether a mouse over this notification keeps it from hiding
   * /
  private var isMouseAware:Boolean;

  /**
   * whether the mouse is over this notification
   * /
  private var mouseIsOver:Boolean = false;

  /**
   * Create a notification window that appears left of a given component.
   *
   * @param config the config object
   * /
  public*/ function AnimatedNotificationBase$(config/*:AnimatedNotification = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$B7Bp(config);
    this.target$B7Bp = AS3.getBindable(config,"target");
    this.isMouseAware$B7Bp = AS3.getBindable(config,"isMouseAware") === true;
    this.initValidationStateMixin();

    var position/*:String*/ = AS3.getBindable(config,"position") || 'lb';
    var lr/*:String*/ = position.substr(0, 1);
    var rl/*:String*/ = lr === 'l' ? 'r' : 'l';
    var tcb/*:String*/ = position.substr(1) || 'c';
    var yOffset/*:Number*/ = AS3.getBindable(config,"yOffset") || 0;
    var xOffset/*:Number*/ = AS3.getBindable(config,"xOffset") || 0;/*

    const*/var LR_TO_INT/*:Object*/ = {
      'r': 1,
      'l': -1
    };/*
    const*/var TCB_TO_INT/*:Object*/ = {
      't': -1,
      'c': 0,
      'b': 1
    };/*
    const*/var TCB_NO_C/*:Object*/ = {
      't': 't',
      'c': '',
      'b': 'b'
    };

    this.anchorStyle$B7Bp = ANCHOR_STYLE_BY_POSITION$static[lr];
    this.anchorAlign$B7Bp = TCB_NO_C[tcb] + lr + '-' + TCB_NO_C[tcb] + rl;
    this.anchorOffset$B7Bp = [LR_TO_INT[lr], TCB_TO_INT[tcb] * -7];
    this.tipAlign$B7Bp = TCB_NO_C[tcb] + rl + '-' + TCB_NO_C[tcb] + lr;
    this.tipOffset$B7Bp = [LR_TO_INT[lr] * 9 + xOffset, TCB_TO_INT[tcb] * -8 + yOffset];

    this.on("afterrender",AS3.bind( this,"decorateAfterRender$B7Bp"));

    // When the hide button is pressed, the event should be handled
    // by our own method to ensure that the right events are sent
    // and that the notification is correctly destroyed.
    this.on("beforehide", function()/*:Boolean*/ {
      this$.goAway(true);
      // Stop the event.
      return true;
    });
  }/*

  private*/ function decorateAfterRender()/*:void*/ {var this$=this;
    this.isMouseAware$B7Bp && this.mon(this.getEl(), "mouseover", function()/*:void*/ {
      this$.mouseIsOver$B7Bp = true;
    });

    this.isMouseAware$B7Bp && this.mon(this.getEl(), "mouseout", function()/*:void*/ {
      this$.mouseIsOver$B7Bp = false;
      window.setTimeout(AS3.bind(this$,"goAway"), VISIBILITY_DURATION$static + FADEIN_DURATION$static * 1000);
    });

    var toolbarEl/*:Element*/ = Ext.dom.Element.get(this.target$B7Bp);
    var tipEl/*:Element*/ = this.getEl();

    // Discard the notification eventually.
    window.setTimeout(AS3.bind(this,"goAway"), VISIBILITY_DURATION$static + FADEIN_DURATION$static * 1000);

    if (!this.hideAnchor) {
      // Add an anchor, only if not disabled.
      var anchorEl/*:Element*/ = tipEl.createChild({
        cls: 'x-tip-anchor ' + this.anchorStyle$B7Bp
      });
      anchorEl.setStyle('z-index', tipEl["getZIndex"]() + 1);
      anchorEl.alignTo(tipEl, this.anchorAlign$B7Bp, this.anchorOffset$B7Bp);
    }

    // Position the notification left of the reference component.
    tipEl.alignTo(toolbarEl, this.tipAlign$B7Bp, this.tipOffset$B7Bp);
    tipEl.hide();

    // Fade in slowly.
    tipEl.fadeIn({duration: FADEIN_DURATION$static});

    // Wait a little until showing the shadow element. It looks ugly if
    // the shadow starts appearing right away.
    tipEl.disableShadow();
    window.setTimeout(function()/*:void*/ {
      // Fade in the shadow element, too. Enable it to ensure it is already there.
      tipEl.enableShadow(true);
      var shadow/*:Shadow*/ = tipEl.shadow;
      shadow.show();
      if (!Ext.isIE) {
        shadow.el.fadeIn({duration: FADEIN_DURATION$static / 2});
      }
    }, FADEIN_DURATION$static * 500);
  }/*

  /**
   * Make sure that the notification component is destroyed,
   * but not just now.
   * /
  public*/ function destroyEventually()/*:void*/ {
    // Just in case the fade out of the shadow takes a little longer,
    // wait another second before destroying.
    window.setTimeout(AS3.bind(this,"destroy"), 1000);
  }/*

  /**
   * Make sure that the notification goes away. By default, it goes
   * away slowly, showing an animation. If specified, the notification
   * can be hidden immediately, however.
   *
   * @param quickly if the notification should disappear immediately
   * /
  public*/ function goAway(quickly/*:Boolean = false*/)/*:void*/ {var this$=this;if(arguments.length<=0)quickly=false;
    // Make sure to hide only once and handle mouse over.
    if (this.isHiding$B7Bp || this.mouseIsOver$B7Bp) {
      return;
    }
    this.isHiding$B7Bp = true;

    this.fireEvent("hiding");

    if (quickly) {
      this.hide();
      this.destroyEventually();
    } else {
      var tipEl/*:Element*/ =AS3.as( this.getEl(),  Ext.dom.Element);
      tipEl["fadeOut"]({
        duration: FADEOUT_DURATION$static,
        callback: function()/*:void*/ {
          // Repair the shadow without making it visible immediately.
          var shadow/*:Shadow*/ =AS3.as( tipEl["shadow"],  Ext.dom.Shadow);
          var shadowEl/*:Element*/ =AS3.as( shadow["el"],  Ext.dom.Element);
          if (shadowEl && shadowEl.dom) {
            shadowEl.dom.style["display"] = "none";
            shadowEl.dom.style["visibility"] = "visible";
          }
          // After the FX library is truly done with this component, destroy the component.
          this$.destroyEventually();
        }
      });
      var shadowEl/*:Element*/ =AS3.as( (AS3.as(tipEl["shadow"],  Ext.dom.Shadow))["el"],  Ext.dom.Element);
      if (shadowEl) {
        if (!Ext.isIE) {
          shadowEl["fadeOut"]({
            duration: FADEOUT_DURATION$static / 2,
            callback: function ()/*:void*/ {
              shadowEl.setStyle('opacity', null);
            }
          });
        } else {
          shadowEl.dom.style["display"] = "none";
        }
      }
    }
  }/*


  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tip.Tip",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      metadata: {"": [
        "Event",
        [
          "name",
          "hiding"
        ]
      ]},
      hideAnchor: false,
      anchorStyle$B7Bp: null,
      anchorAlign$B7Bp: null,
      anchorOffset$B7Bp: null,
      tipAlign$B7Bp: null,
      tipOffset$B7Bp: null,
      target$B7Bp: null,
      isHiding$B7Bp: false,
      isMouseAware$B7Bp: false,
      mouseIsOver$B7Bp: false,
      constructor: AnimatedNotificationBase$,
      super$B7Bp: function() {
        Ext.tip.Tip.prototype.constructor.apply(this, arguments);
      },
      decorateAfterRender$B7Bp: decorateAfterRender,
      destroyEventually: destroyEventually,
      goAway: goAway,
      statics: {
        ANCHOR_STYLE_BY_POSITION: undefined,
        __initStatics__: function() {
          ANCHOR_STYLE_BY_POSITION$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.dom.Element",
        "Ext.dom.Shadow",
        "Ext.tip.Tip",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
