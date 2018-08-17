Ext.define("com.coremedia.ui.components.StatefulResizer", function(StatefulResizer) {/*package com.coremedia.ui.components {

import com.coremedia.ui.mixins.HighlightableMixin;
import com.coremedia.ui.mixins.IHighlightableMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.dom.Element;
import ext.event.Event;
import ext.resizer.Resizer;

public class StatefulResizer extends Resizer implements IValidationStateMixin, IHighlightableMixin {

  public static const xtype:String = "com.coremedia.ui.config.statefulResizer";

  [Bindable]
  public var embed:Boolean;

  /**
   * Set this flag to false to disable horizontal resizing.
   * This can be helpful if vertical resize operations
   * accidentally freeze the horizontal size. Defaults to true.
   * /
  [Bindable]
  public var horizontalResize:Boolean;

  /**
   * Set this flag to false to disable vertical resizing.
   * This can be helpful if horizontal resize operations
   * accidentally freeze the vertical size. Defaults to true.
   * /
  [Bindable]
  public var verticalResize:Boolean;

  public*/ function StatefulResizer$(config/*:StatefulResizer = null*/) {if(arguments.length<=0)config=null;
    this.super$TRt_(config);
    this.initValidationStateMixin();

    AS3.setBindable(this,"embed" ,AS3.is( AS3.getBindable(config,"embed"),  Boolean) ? AS3.getBindable(config,"embed") : true);
    AS3.setBindable(this,"horizontalResize" , AS3.getBindable(config,"horizontalResize") !== false);
    AS3.setBindable(this,"verticalResize" , AS3.getBindable(config,"verticalResize") !== false);

    this.addListener("validationStateChanged",AS3.bind( this,"onValidationStateChanged$TRt_"));
    this.addListener("highlightedChanged",AS3.bind( this,"onHighlightedChanged$TRt_"));

    if (!AS3.getBindable(this,"embed")) {
      this.getHandleEls$TRt_().forEach(function (handle/*:Element*/)/*:void*/ {
        handle && handle.addCls("cm-resizable-handle--append");
      });
    }

    this.patchOnBeforeStart$TRt_();
    this.patchResize$TRt_();
  }/*

  private*/ function patchOnBeforeStart()/*:void*/ {
    var originalOnBeforeStart/*:Function*/ = this.resizeTracker['onBeforeStart'];
    this.resizeTracker['onBeforeStart'] = function (e/*:Event*/)/*:**/ {arguments=Array.prototype.slice.call(arguments);
      e.preventDefault();
      return originalOnBeforeStart.apply(this, arguments);
    };
  }/*

  private*/ function patchResize()/*:void*/ {var this$=this;
    if (!AS3.getBindable(this,"horizontalResize") || !AS3.getBindable(this,"verticalResize")) {
      var originalResize/*:Function*/ = this.resizeTracker['resize'];
      this.resizeTracker['resize'] = function (box/*:**/, atEnd/*:Boolean*/)/*:**/ {arguments=Array.prototype.slice.call(arguments);
        if (this$.resizeTracker['dynamic'] || atEnd) {
          if (!AS3.getBindable(this$,"horizontalResize")) {
            delete box['width'];
          }
          if (!AS3.getBindable(this$,"verticalResize")) {
            delete box['height'];
          }
        }
        return originalResize.apply(this, arguments);
      };
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

  /** @private * /
  [Bindable]
  public native function set highlighted(newHighlighted:Boolean):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get highlighted():Boolean;

  private*/ function getHandleEls()/*:Array*/ {
    return [this["north"], this["east"], this["south"], this["west"]];
  }/*

  private*/ function addRemoveHandleCls(newCls/*:String*/, oldCls/*:String*/)/*:void*/ {
    var handleEls/*:Array*/ = this.getHandleEls$TRt_();
    if (handleEls) {
      if (newCls) {
        handleEls.forEach(function (handleEl/*:Element*/)/*:void*/ {
          handleEl && handleEl.addCls(newCls);
        });
      }
      if (oldCls) {
        handleEls.forEach(function (handleEl/*:Element*/)/*:void*/ {
          handleEl && handleEl.removeCls(oldCls);
        });
      }
    }
  }/*

  private*/ function onValidationStateChanged(resizer/*:StatefulResizer*/, newValidationState/*:ValidationState*/, oldValidationState/*:ValidationState*/)/*:void*/ {
    this.addRemoveHandleCls$TRt_(
            newValidationState && newValidationState.getCSSCls(),
            oldValidationState && oldValidationState.getCSSCls()
    );
  }/*

  private*/ function onHighlightedChanged(resizer/*:StatefulResizer*/, newHighlighted/*:Boolean*/, oldHighlighted/*:Boolean*/)/*:void*/ {
    this.addRemoveHandleCls$TRt_(
            newHighlighted && com.coremedia.ui.mixins.HighlightableMixin.HIGHLIGHTED_CLS,
            oldHighlighted && com.coremedia.ui.mixins.HighlightableMixin.HIGHLIGHTED_CLS
    );
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.resizer.Resizer",
      mixins: [
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.mixins.HighlightableMixin"
      ],
      alias: "widget.com.coremedia.ui.config.statefulResizer",
      constructor: StatefulResizer$,
      super$TRt_: function() {
        Ext.resizer.Resizer.prototype.constructor.apply(this, arguments);
      },
      patchOnBeforeStart$TRt_: patchOnBeforeStart,
      patchResize$TRt_: patchResize,
      getHandleEls$TRt_: getHandleEls,
      addRemoveHandleCls$TRt_: addRemoveHandleCls,
      onValidationStateChanged$TRt_: onValidationStateChanged,
      onHighlightedChanged$TRt_: onHighlightedChanged,
      config: {
        embed: false,
        horizontalResize: false,
        verticalResize: false
      },
      requires: [
        "Ext.resizer.Resizer",
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
