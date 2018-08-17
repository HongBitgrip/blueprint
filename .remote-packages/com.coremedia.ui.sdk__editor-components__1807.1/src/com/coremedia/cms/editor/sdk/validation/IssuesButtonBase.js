Ext.define("com.coremedia.cms.editor.sdk.validation.IssuesButtonBase", function(IssuesButtonBase) {/*package com.coremedia.cms.editor.sdk.validation {

import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.AriaUtils;

import ext.button.Button;
import ext.dom.Element;

public class IssuesButtonBase extends IconButton implements IValidationStateMixin {

  [ExtConfig]
  public var hasIssuesText:String;

  [ExtConfig]
  public var hasNoIssuesText:String;

  private var _ariaDescription:String;

  private var ariaDescriptionEl:Element;
  private var _tooltip:*;

  public*/ function IssuesButtonBase$(config/*:IssuesButtonBase = null*/) {if(arguments.length<=0)config=null;
    this.super$83Yu(config);
    this.initValidationStateMixin();
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.ui.components.IconButton.prototype.afterRender.call(this);
    this.ariaDescriptionEl$83Yu = com.coremedia.ui.util.AriaUtils.createReferenceableAriaEl(this, "description");
    com.coremedia.ui.util.AriaUtils.addDescribedBy(this.el, this.ariaDescriptionEl$83Yu.id);
    this.updateAriaDescription$83Yu();
  }/*

  protected*/ function transformValidationState(issues/*:Array*/)/*:ValidationState*/ {
    return com.coremedia.cms.editor.sdk.validation.ValidationUtil.computeValidationState(issues);
  }/*

  protected*/ function transformDescription(issues/*:Array*/)/*:String*/ {
    if (issues && issues.length > 0) {
      return this.hasIssuesText;
    }
    return this.hasNoIssuesText;
  }/*

  protected*/ function transformIconCls(issues/*:Array*/)/*:String*/ {
    return com.coremedia.cms.editor.sdk.validation.ValidationUtil.computeValidationIconCls(issues);
  }/*

  // needed for the BindPropertyPlugin as it will otherwise always check for changes using the initial config which
  // has weird effects (see https://jira.coremedia.com/browse/CMS-9341)
  //noinspection JSUnusedGlobalSymbols
  override public*/ function setTooltip(newTooltip/*:**/, initial/*:* = undefined*/)/*:Button*/ {
    this._tooltip$83Yu = newTooltip;
    return com.coremedia.ui.components.IconButton.prototype.setTooltip.call(this,newTooltip, initial);
  }/*

  // needed for the BindPropertyPlugin as it will otherwise always check for changes using the initial config which
  // has weird effects (see https://jira.coremedia.com/browse/CMS-9341)
  //noinspection JSUnusedGlobalSymbols
  public*/ function getTooltip()/*:**/ {
    return this._tooltip$83Yu;
  }/*

  [Bindable]
  public*/ function get$ariaDescription()/*:String*/ {
    return this._ariaDescription$83Yu;
  }/*

  [Bindable]
  public*/ function set$ariaDescription(value/*:String*/)/*:void*/ {
    this._ariaDescription$83Yu = value;
    this.updateAriaDescription$83Yu();
  }/*

  private*/ function updateAriaDescription()/*:void*/ {
    if (this.ariaDescriptionEl$83Yu) {
      this.ariaDescriptionEl$83Yu.dom.innerHTML = AS3.getBindable(this,"ariaDescription");
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
      extend: "com.coremedia.ui.components.IconButton",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      hasIssuesText: null,
      hasNoIssuesText: null,
      _ariaDescription$83Yu: null,
      ariaDescriptionEl$83Yu: null,
      _tooltip$83Yu: undefined,
      constructor: IssuesButtonBase$,
      super$83Yu: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      transformValidationState: transformValidationState,
      transformDescription: transformDescription,
      transformIconCls: transformIconCls,
      setTooltip: setTooltip,
      getTooltip: getTooltip,
      getAriaDescription: get$ariaDescription,
      setAriaDescription: set$ariaDescription,
      updateAriaDescription$83Yu: updateAriaDescription,
      config: {ariaDescription: undefined},
      requires: [
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.util.AriaUtils"
      ],
      uses: ["com.coremedia.cms.editor.sdk.validation.ValidationUtil"]
    };
});
