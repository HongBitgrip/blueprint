Ext.define("com.coremedia.cms.editor.sdk.premular.PropertyFieldBase", function(PropertyFieldBase) {/*package com.coremedia.cms.editor.sdk.premular {
import ext.Component;
import ext.dom.Element;
import ext.form.ILabelable;

/**
 * Use this class only for setting a typed default in a container
 * containing real property fields.
 * /
[PublicApi]
public class PropertyFieldBase extends Component implements ILabelable {
  /**
   * Do not call.
   * 
   * @see com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField
   * @see com.coremedia.cms.editor.sdk.premular.fields.IntegerPropertyField
   * /
  public*/ function PropertyFieldBase$(config/*:PropertyFieldBase = null*/) {this.super$EgQq();if(arguments.length<=0)config=null;
    throw new AS3.Error("PropertyField is abstract; use only for setting defaults on other components.");
  }/*

  /** @inheritDoc * /
  [ExtConfig]
  public native function get ariaErrorText():String;

  /** @private * /
  [ExtConfig]
  public native function set ariaErrorText(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get ariaHelp():String;

  /** @private * /
  [ExtConfig]
  public native function set ariaHelp(value:String):void;

  /** @inheritDoc * /
  public native function get bodyEl():Element;

  /** @private * /
  public native function set bodyEl(value:Element):void;

  /** @inheritDoc * /
  public native function get errorEl():Element;

  /** @private * /
  public native function set errorEl(value:Element):void;

  /** @inheritDoc * /
  public native function get isFieldLabelable():Boolean;

  /** @private * /
  public native function set isFieldLabelable(value:Boolean):void;

  /** @inheritDoc * /
  public native function get labelEl():Element;

  /** @private * /
  public native function set labelEl(value:Element):void;

  /** @inheritDoc * /
  [ExtConfig]
  [Bindable]
  public native function get activeError():String;

  /** @private * /
  [ExtConfig]
  [Bindable]
  public native function set activeError(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get activeErrorsTpl():*;

  /** @private * /
  [ExtConfig]
  public native function set activeErrorsTpl(value:*):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get afterBodyEl():*;

  /** @private * /
  [ExtConfig]
  public native function set afterBodyEl(value:*):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get afterLabelTextTpl():*;

  /** @private * /
  [ExtConfig]
  public native function set afterLabelTextTpl(value:*):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get afterLabelTpl():*;

  /** @private * /
  [ExtConfig]
  public native function set afterLabelTpl(value:*):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get afterSubTpl():*;

  /** @private * /
  [ExtConfig]
  public native function set afterSubTpl(value:*):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get autoFitErrors():Boolean;

  /** @private * /
  [ExtConfig]
  public native function set autoFitErrors(value:Boolean):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get baseBodyCls():String;

  /** @private * /
  [ExtConfig]
  public native function set baseBodyCls(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get beforeBodyEl():*;

  /** @private * /
  [ExtConfig]
  public native function set beforeBodyEl(value:*):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get beforeLabelTextTpl():*;

  /** @private * /
  [ExtConfig]
  public native function set beforeLabelTextTpl(value:*):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get beforeLabelTpl():*;

  /** @private * /
  [ExtConfig]
  public native function set beforeLabelTpl(value:*):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get beforeSubTpl():*;

  /** @private * /
  [ExtConfig]
  public native function set beforeSubTpl(value:*):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get errorMsgCls():String;

  /** @private * /
  [ExtConfig]
  public native function set errorMsgCls(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get fieldBodyCls():String;

  /** @private * /
  [ExtConfig]
  public native function set fieldBodyCls(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  [Bindable]
  public native function get fieldLabel():String;

  /** @private * /
  [ExtConfig]
  [Bindable]
  public native function set fieldLabel(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get formItemCls():String;

  /** @private * /
  [ExtConfig]
  public native function set formItemCls(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get hideEmptyLabel():Boolean;

  /** @private * /
  [ExtConfig]
  public native function set hideEmptyLabel(value:Boolean):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get hideLabel():Boolean;

  /** @private * /
  [ExtConfig]
  public native function set hideLabel(value:Boolean):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get invalidCls():String;

  /** @private * /
  [ExtConfig]
  public native function set invalidCls(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get labelAlign():String;

  /** @private * /
  [ExtConfig]
  public native function set labelAlign(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get labelAttrTpl():*;

  /** @private * /
  [ExtConfig]
  public native function set labelAttrTpl(value:*):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get labelCls():String;

  /** @private * /
  [ExtConfig]
  public native function set labelCls(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get labelClsExtra():String;

  /** @private * /
  [ExtConfig]
  public native function set labelClsExtra(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get labelPad():Number;

  /** @private * /
  [ExtConfig]
  public native function set labelPad(value:Number):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get labelSeparator():String;

  /** @private * /
  [ExtConfig]
  public native function set labelSeparator(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get labelStyle():String;

  /** @private * /
  [ExtConfig]
  public native function set labelStyle(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get labelWidth():Number;

  /** @private * /
  [ExtConfig]
  public native function set labelWidth(value:Number):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get msgTarget():String;

  /** @private * /
  [ExtConfig]
  public native function set msgTarget(value:String):void;

  /** @inheritDoc * /
  [ExtConfig]
  public native function get preventMark():Boolean;

  /** @private * /
  [ExtConfig]
  public native function set preventMark(value:Boolean):void;

  /** @inheritDoc * /
  public native function getActiveError():String;

  /** @inheritDoc * /
  public native function getActiveErrors():Array;

  /** @inheritDoc * /
  public native function getFieldLabel():String;

  /** @inheritDoc * /
  public native function getInputId():String;

  /** @inheritDoc * /
  public native function hasActiveError():Boolean;

  /** @inheritDoc * /
  public native function hasVisibleLabel():Boolean;

  /** @inheritDoc * /
  public native function initLabelable():void;

  /** @inheritDoc * /
  public native function setActiveError(msg:String):void;

  /** @inheritDoc * /
  public native function setActiveErrors(errors:Array):void;

  /** @inheritDoc * /
  public native function setFieldDefaults(defaults:Object):void;

  /** @inheritDoc * /
  public native function setFieldLabel(label:String):void;

  /** @inheritDoc * /
  public native function trimLabelSeparator():String;

  /** @inheritDoc * /
  public native function unsetActiveError():void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Component",
      mixins: ["Ext.form.Labelable"],
      metadata: {"": ["PublicApi"]},
      constructor: PropertyFieldBase$,
      super$EgQq: function() {
        Ext.Component.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "AS3.Error",
        "Ext.Component",
        "Ext.form.Labelable"
      ]
    };
});
