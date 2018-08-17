Ext.define("com.coremedia.ui.components.ExtendedDisplayField", function(ExtendedDisplayField) {/*package com.coremedia.ui.components {

import com.coremedia.ui.mixins.ITextAlignMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.OverflowBehaviour;
import com.coremedia.ui.mixins.IOverflowBehaviourMixin;
import com.coremedia.ui.mixins.TextAlign;
import com.coremedia.ui.mixins.ValidationState;

import ext.Ext;
import ext.dom.Element;

import ext.form.field.DisplayField;
import ext.tip.QuickTipManager;

/**
 * Extended DisplayField supporting text overflow behaviour, text align and tooltips.
 *
 * @see {OverflowBehaviour}
 * @see {TextAlign}
 * /
public class ExtendedDisplayField extends DisplayField implements IOverflowBehaviourMixin, ITextAlignMixin, IValidationStateMixin {

  public static const TOOLTIP_TYPE_QTIP:String = "qtip";
  public static const TOOLTIP_TYPE_TITLE:String = "title";

  /**
   * The type of tooltip to use. Either {@link #TOOLTIP_TYPE_QTIP} (default) for QuickTips or
   * {@link #TOOLTIP_TYPE_TITLE} for title attribute.
   *
   * If an invalid valid is provided, the default applies.
   *
   * Cannot be changed dynamically.
   * /
  public var tooltipType:String =*/function tooltipType_(){this.tooltipType=( ExtendedDisplayField.TOOLTIP_TYPE_QTIP);}/*;

  private var _tooltip:*;

  protected var syncAriaHelpWithTooltip:Boolean;

  public*/ function ExtendedDisplayField$(config/*:ExtendedDisplayField = null*/) {var this$=this;if(arguments.length<=0)config=null;

    if (!this.ariaHelp) {
      this.syncAriaHelpWithTooltip = true;
    }

    this.super$_nG5(config);tooltipType_.call(this);;

    this.on("beforerender", function ()/*:void*/ {
      // make sure ariaHelp is always set, so the DOM element will be rendered
      if (!this$.ariaHelp) {
        var oldAriaHelp/*:String*/ = this$.ariaHelp;
        // set to a non empty string (may not be 'space' as it will not be properly handled)
        this$.ariaHelp = "-";
        this$.on("afterrender", function ()/*:void*/ {
          // restore the initial value if it has not been modifier in the meantime
          var oldSyncAriaHelpWithTooltip/*:Boolean*/ = this$.syncAriaHelpWithTooltip;
          this$.setAriaHelp(this$.ariaHelp === "-" ? oldAriaHelp : this$.ariaHelp);
          this$.syncAriaHelpWithTooltip = oldSyncAriaHelpWithTooltip;
        });
      }
    });

    this.initValidationStateMixin();

    AS3.setBindable(this,"overflowBehaviour" , AS3.getBindable(config,"overflowBehaviour"));
    AS3.setBindable(this,"textAlign" , AS3.getBindable(config,"textAlign"));
  }/*


  override protected*/ function initComponent()/*:void*/ {
    Ext.form.field.Display.prototype.initComponent.call(this);
    this.on("afterrender",AS3.bind( this,"fixAriaHelp$_nG5"));
  }/*

  public native function get ariaHelpEl():Element;

  private*/ function fixAriaHelp()/*:void*/ {
    this.ariaHelpEl && this.inputEl.dom.setAttribute("aria-describedby", this.ariaHelpEl.id);
  }/*

  /**
   * For convenience. Alias for {@link #getValue}.
   *
   * Returns the value set for this icon label.
   * @return
   * /
  [Deprecated]
  public*/ function getText()/*:String*/ {
    return this.getValue();
  }/*

  /**
   * For convenience. Alias for {@link #setValue}.
   *
   * Updates the displayField's value with the specified string.
   * @param {String} value The new displayField value
   * /
  [Deprecated]
  public*/ function setText(value/*:String*/)/*:void*/ {
    this.setValue(value);
  }/*

  /**
   * @return the actual tooltip
   * /
  [Bindable]
  public*/ function get$tooltip()/*:**/ {
    return this._tooltip$_nG5;
  }/*

  /**
   * Sets the tooltip for the label's icon - can be a string to be used as innerHTML (html tags are accepted) or a
   * config object used for QuickTip#register().
   *
   * @see ext.tip.QuickTipManager#register()
   *
   * @param newTooltip the tooltip as String
   * /
  [Bindable]
  public*/ function set$tooltip(newTooltip/*:**/)/*:void*/ {
    this.clearTooltip();
    this._tooltip$_nG5 = newTooltip;
    this.addTooltip();
    this.syncAriaHelp();
  }/*

  protected*/ function getTooltipAttr()/*:String*/ {
    return this.tooltipType !== ExtendedDisplayField.TOOLTIP_TYPE_QTIP ? "title" : "data-qtip";
  }/*

  /**
   * The element to attach the tooltip to. Default implementation is 'getEl()'.
   * /
  protected*/ function getTooltipEl()/*:Element*/ {
    return this.getEl();
  }/*

  protected*/ function addTooltip()/*:void*/ {
    if (this.rendered && this.getTooltipEl()) {
      if (AS3.is(AS3.getBindable(this,"tooltip"),  com.coremedia.ui.components.StatefulQuickTip)) {
        var valueTip/*:StatefulQuickTip*/ = AS3.cast(com.coremedia.ui.components.StatefulQuickTip,Ext.apply({}, AS3.getBindable(this,"tooltip")));
        AS3.setBindable(valueTip,"target" , valueTip.target || this.getTooltipEl());
        Ext.tip.QuickTipManager.register(valueTip);
      }
      if (AS3.is(AS3.getBindable(this,"tooltip"),  String)) {
        var attr/*:String*/ = this.getTooltipAttr();
        this.getTooltipEl().dom.setAttribute(attr, AS3.getBindable(this,"tooltip"));
      }
    }
  }/*

  protected*/ function clearTooltip()/*:void*/ {
    if (this.rendered && this.getTooltipEl()) {
      Ext.tip.QuickTipManager.unregister(this.getTooltipEl());

      if (AS3.is(AS3.getBindable(this,"tooltip"),  String)) {
        this.getTooltipEl().dom.removeAttribute(this.getTooltipAttr());
      }
    }
  }/*

  public*/ function setAriaHelp(newAriaHelp/*:String*/)/*:void*/ {
    this.ariaHelp = newAriaHelp;
    if (this.rendered && this.ariaHelpEl) {
      this.ariaHelpEl.setHtml(this.ariaHelp || "");
      this.ariaHelpEl.dom.setAttribute("aria-hidden", !this.ariaHelp ? "true" : "false");
    }
    this.syncAriaHelpWithTooltip = false;
  }/*

  protected*/ function syncAriaHelp()/*:void*/ {
    if (this.syncAriaHelpWithTooltip) {
      var help/*:String*/ =AS3.as( AS3.getBindable(this,"tooltip"),  String);
      if (!help) {
        var quickTip/*:StatefulQuickTip*/ =AS3.as( AS3.getBindable(this,"tooltip"),  com.coremedia.ui.components.StatefulQuickTip);
        if (quickTip) {
          var texts/*:Array*/ = [];
          if (AS3.getBindable(quickTip,"title","DUMMY")) {
            texts.push(AS3.getBindable(quickTip,"title","DUMMY") + ".");
          }
          if (quickTip.text) {
            texts.push(quickTip.text);
          }
          if (texts.length > 0) {
            help = texts.join(" ");
          }
        }
      }
      this.setAriaHelp(help);
      this.syncAriaHelpWithTooltip = true;
    }
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.form.field.Display.prototype.afterRender.call(this);
    this.addTooltip();
    this.syncAriaHelp();
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.clearTooltip();
    Ext.form.field.Display.prototype.beforeDestroy.call(this);
  }/*

  /** @private * /
  [Bindable]
  public native function get overflowBehaviour():OverflowBehaviour;

  /** @inheritDoc * /
  [Bindable]
  public native function set overflowBehaviour(overflowBehaviour:OverflowBehaviour):void;

  /** @private * /
  [Bindable]
  public native function set textAlign(textAlign:TextAlign):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get textAlign():TextAlign;

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
      extend: "Ext.form.field.Display",
      mixins: [
        "com.coremedia.ui.mixins.OverflowBehaviourMixin",
        "com.coremedia.ui.mixins.TextAlignMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      metadata: {
        getText: ["Deprecated"],
        setText: ["Deprecated"]
      },
      _tooltip$_nG5: undefined,
      syncAriaHelpWithTooltip: false,
      constructor: ExtendedDisplayField$,
      super$_nG5: function() {
        Ext.form.field.Display.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      fixAriaHelp$_nG5: fixAriaHelp,
      getText: getText,
      setText: setText,
      getTooltip: get$tooltip,
      setTooltip: set$tooltip,
      getTooltipAttr: getTooltipAttr,
      getTooltipEl: getTooltipEl,
      addTooltip: addTooltip,
      clearTooltip: clearTooltip,
      setAriaHelp: setAriaHelp,
      syncAriaHelp: syncAriaHelp,
      afterRender: afterRender,
      beforeDestroy: beforeDestroy,
      config: {tooltip: undefined},
      statics: {
        TOOLTIP_TYPE_QTIP: "qtip",
        TOOLTIP_TYPE_TITLE: "title"
      },
      requires: [
        "Ext",
        "Ext.form.field.Display",
        "Ext.tip.QuickTipManager",
        "com.coremedia.ui.mixins.OverflowBehaviourMixin",
        "com.coremedia.ui.mixins.TextAlignMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.ui.components.StatefulQuickTip"]
    };
});
