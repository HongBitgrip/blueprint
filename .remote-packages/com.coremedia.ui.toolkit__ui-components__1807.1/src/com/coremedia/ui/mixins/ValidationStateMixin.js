Ext.define("com.coremedia.ui.mixins.ValidationStateMixin", function(ValidationStateMixin) {/*package com.coremedia.ui.mixins {

import com.coremedia.ui.components.StatefulQuickTip;
import com.coremedia.ui.util.AriaUtils;

import ext.Component;
import ext.Ext;
import ext.Mixin;
import ext.dom.Element;
import ext.form.FieldAncestor;
import ext.form.Labelable;
import ext.form.field.BaseField;
import ext.form.field.Field;
import ext.mixin.Observable;
import ext.tip.QuickTip;
import ext.util.Format;

/**
 * Default implementation of {@link IValidationStateMixin}.
 *
 * Adds a {#validationState} and a {#validationMessage} property to the class this mixin is mixed into.
 *
 * If the mixin is mixed into a {@link Component} the properties will be reflected in various ways:
 *
 * 1) if a {@link #validationState} is set a css class will be added reflecting it.
 * The class name is determined from {@link ValidationState#getCSSCls}.
 *
 * 2) If the {@link #validationState} is set to a non empty value and a {@link #validationMessage} is provided a
 * {@link QuickTip} is attached to {@link #getQuickTipTarget}. This behaviour does not occur if the {@link Component} is
 * also a {@link Field} and {@link Field#isValid} is false to not override the ExtJS validation framework (which we
 * cannot use as it prevents submitting the value as long as it is invalid - but we have a server side validation).
 *
 * 3) If the {@link #validationState} is set to a non empty value and a {@link #validationMessage} is provided the
 * message is also added a) as a status message which is linked via {@link AriaUtils#addDescribedBy} method and b) in an
 * dom element created by {@link AriaUtils#createAriaLiveRegionEl} using politeness setting
 * {@link AriaUtils#POLITENESS_SETTING_ASSERTIVE}. As {@link Ext#enableAria} is deprecated we decided that this
 * behaviour cannot be supressed as we want to provide build-in accessibility.
 *
 * Always call {@link #initValidationStateMixin} after calling the super constructor of the component. If used in
 * conjunction with any of the other mixins, make sure that the initialization is always called after the other mixins
 * have been initialized.
 * /
public class ValidationStateMixin extends Mixin implements IValidationStateMixin {

  /**
   * @event validationStateChanged
   * Fires when the validationState state changes
   * /

  /**
   * @event validationMessageChanged
   * Fires when the validationState state changes
   * /

  private var _validationState:ValidationState;

  private var _validationMessage:String;

  private var initialized:Boolean = false;

  private var _ariaStatusEl:Element;

  private var _ariaLiveEl:Element;

  private var isExtErrorActive:Boolean = false;

  private var activeCssClass:String;

  private var activeToolTipAttribute:String;

  /** @inheritDoc * /
  public*/ function initValidationStateMixin()/*:void*/ {
    var cmp/*:Component*/ =AS3.as( this,  Ext.Component);

    // initialize listeners to events for Ext validity changes which shall be forwarded to this mixin.
    if (cmp) {
      if (AS3.is(this,  Ext.form.field.Field)) {
        cmp.addListener("validitychange",AS3.bind( this,"onValidityChange$C4qX"));
      } else if (AS3.is(this,  Ext.form.FieldAncestor)) {
        cmp.addListener("fieldvaliditychange",AS3.bind( this,"onFieldValidityChange$C4qX"));
      }
      // TODO: What about errorchange and fielderrorchange?

      this.initOrUpdateCssClass$C4qX();
      this.initOrUpdateValidationMessage$C4qX();
      this.initOrUpdateAriaElements$C4qX();
    }
    this.initialized$C4qX = true;
  }/*

  //noinspection JSUnusedLocalSymbols callback signature
  private*/ function onValidityChange(field/*:Field*/, isValid/*:Boolean*/, eOpts/*:Object*/)/*:void*/ {
    var wasExtErrorActive/*:Boolean*/ = this.isExtErrorActive$C4qX;

    //Workaround: Base.js markInvalid & clearInvalid send the wrong value with their event so we take the information from the field itself!
    this.isExtErrorActive$C4qX = field.isValid() !== true;

    // make sure anything has changed. validitychange is always triggered once when transitioning from
    // undefined to defined (true/false), we already assume that there is no error active, so this transition is ignored
    if (this.isExtErrorActive$C4qX !== wasExtErrorActive) {

      if (this.initialized$C4qX) {
        this.initOrUpdateCssClass$C4qX();
        this.initOrUpdateValidationMessage$C4qX();
        this.initOrUpdateAriaElements$C4qX();
      }
    }
  }/*

  //noinspection JSUnusedLocalSymbols callback signature
  private*/ function onFieldValidityChange(cmp/*:FieldAncestor*/, field/*:Field*/, isValid/*:Boolean*/, eOpts/*:Object*/)/*:void*/ {
    // Ext 6.2.1 documentation says:
    // a) isValid is a String... but derived from the usages it seems to be a boolean value instead
    // b) field is Labelable... but derived from the usages it seems to be Field value instead
    this.onValidityChange$C4qX(field, isValid, eOpts);
  }/*

  /** @inheritDoc * /
  [Bindable]
  public*/ function get$validationState()/*:ValidationState*/ {
    return this._validationState$C4qX;
  }/*

  /** @private * /
  [Bindable]
  public*/ function set$validationState(newValidationState/*:ValidationState*/)/*:void*/ {
    var oldValidationState/*:ValidationState*/ = this._validationState$C4qX;

    if (newValidationState !== oldValidationState) {
      this._validationState$C4qX = newValidationState;

      if (this.initialized$C4qX) {
        this.initOrUpdateCssClass$C4qX();
        this.initOrUpdateValidationMessage$C4qX();
        this.initOrUpdateAriaElements$C4qX();
      }

      var observable/*:Observable*/ =AS3.as( this,  Ext.mixin.Observable);
      if (observable) {
        observable.fireEvent("validationStateChanged", observable, newValidationState, oldValidationState);
      }
    }
  }/*

  /** @inheritDoc * /
  [Bindable]
  public*/ function get$validationMessage()/*:String*/ {
    return this._validationMessage$C4qX;
  }/*

  /** @private * /
  [Bindable]
  public*/ function set$validationMessage(newValidationMessage/*:String*/)/*:void*/ {
    var oldValidationMessage/*:String*/ = this._validationMessage$C4qX;

    if (newValidationMessage !== oldValidationMessage) {
      this._validationMessage$C4qX = newValidationMessage;

      if (this.initialized$C4qX) {
        this.initOrUpdateCssClass$C4qX();
        this.initOrUpdateValidationMessage$C4qX();
        this.initOrUpdateAriaElements$C4qX();
      }

      var observable/*:Observable*/ =AS3.as( this,  Ext.mixin.Observable);
      if (observable) {
        observable.fireEvent("validationMessageChanged", observable, oldValidationMessage, newValidationMessage);
      }
    }
  }/*

  private*/ function initOrUpdateCssClass()/*:void*/ {
    var cmp/*:Component*/ =AS3.as( this,  Ext.Component);
    if (cmp) {
      var newCssClass/*:String*/;
      if (this.isExtErrorActive$C4qX) {
        newCssClass = com.coremedia.ui.mixins.ValidationState.ERROR.getCSSCls();
      } else {
        newCssClass = AS3.getBindable(this,"validationState") ? AS3.getBindable(this,"validationState").getCSSCls() : null;
      }
      if (this.activeCssClass$C4qX && this.activeCssClass$C4qX !== newCssClass) {
        cmp.removeCls(this.activeCssClass$C4qX);
        this.activeCssClass$C4qX = null;
      }
      if (newCssClass && this.activeCssClass$C4qX !== newCssClass) {
        cmp.addCls(newCssClass);
        this.activeCssClass$C4qX = newCssClass;
      }
    }
  }/*

  private static*/ function getAriaDescribedByTarget$static(cmp/*:Component*/)/*:Element*/ {
    return AS3.as( cmp["getActionEl"](),  Ext.dom.Element) || cmp["getEl"]();
  }/*

  private*/ function getAriaStatusEl()/*:Element*/ {
    if (!this._ariaStatusEl$C4qX) {
      var cmp/*:Component*/ =AS3.as( this,  Ext.Component);
      if (cmp && cmp.rendered) {
        this._ariaStatusEl$C4qX = com.coremedia.ui.util.AriaUtils.createReferenceableAriaEl(cmp, "validationStateStatusEl");
        com.coremedia.ui.util.AriaUtils.addDescribedBy(getAriaDescribedByTarget$static(cmp), this._ariaStatusEl$C4qX.id);
      }
    }
    return this._ariaStatusEl$C4qX;
  }/*

  private*/ function getAriaLiveEl()/*:Element*/ {
    if (!this._ariaLiveEl$C4qX) {
      var cmp/*:Component*/ =AS3.as( this,  Ext.Component);
      if (cmp && cmp.rendered) {
        this._ariaLiveEl$C4qX = com.coremedia.ui.util.AriaUtils.createAriaLiveRegionEl(cmp, "validationStateLiveEl", com.coremedia.ui.util.AriaUtils.POLITENESS_SETTING_ASSERTIVE);
      }
    }
    return this._ariaLiveEl$C4qX;
  }/*

  private*/ function getEl()/*:Element*/ {
    var cmp/*:Component*/ =AS3.as( this,  Ext.Component);
    if (cmp) {
      return cmp.el;
    }
    return null;
  }/*

  private*/ function getQuickTipTarget()/*:Element*/ {
    var labelable/*:Labelable*/ =AS3.as( this,  Ext.form.Labelable);
    if (labelable) {
      if (labelable.msgTarget === "qtip") {
        // TODO: private API access. consider adding to ext-as.
        return AS3.as( labelable["getActionEl"](),  Ext.dom.Element);
      }
      // not supported yet
      return null;
    }
    return this.getEl$C4qX();
  }/*

  private*/ function initOrUpdateValidationMessage()/*:void*/ {
    initCMQTipDataAttributes$static();
    var cmp/*:Component*/ =AS3.as( this,  Ext.Component);
    if (cmp) {
      if (cmp.rendered) {
        var toolTipTargetEl/*:Element*/ = this.getQuickTipTarget$C4qX();
        if (toolTipTargetEl) {
          // remove the last tooltip if it is represented by a different data attribute (and so it would not be replaced)
          // or if there is an error shown by ExtJS. We do not want to show both errors.
          if (this.activeToolTipAttribute$C4qX) {
            toolTipTargetEl.dom.removeAttribute(this.activeToolTipAttribute$C4qX);
            this.activeToolTipAttribute$C4qX = null;
          }

          // only show the new tooltip if ExtJS does not show an error.
          if (!this.isExtErrorActive$C4qX && AS3.getBindable(this,"validationMessage")) {
            var newToolTipAttribute/*:String*/ = getQuickTipAttribute$static(AS3.getBindable(this,"validationState"));
            if (newToolTipAttribute) {
              toolTipTargetEl.dom.setAttribute(newToolTipAttribute, AS3.getBindable(this,"validationMessage"));
              this.activeToolTipAttribute$C4qX = newToolTipAttribute;
            }
          }
        }
      } else {
        cmp.on("afterrender",AS3.bind( this,"initOrUpdateValidationMessage$C4qX"));
      }
    }
  }/*

  private*/ function initOrUpdateAriaElements()/*:void*/ {
    var cmp/*:Component*/ =AS3.as( this,  Ext.Component);
    if (cmp) {
      if (cmp.rendered) {
        var ariaMessage/*:String*/;
        // only show aria message if the validation state is set
        if (AS3.getBindable(this,"validationMessage") && !this.isExtErrorActive$C4qX) {
          ariaMessage = Ext.util.Format.stripTags(AS3.getBindable(this,"validationMessage"));
        } else {
          ariaMessage = "";
        }
        var ariaStatusEl/*:Element*/ = this.getAriaStatusEl$C4qX();
        if (ariaStatusEl) {
          ariaStatusEl.dom.innerHTML = ariaMessage;
        }
        var ariaLiveEl/*:Element*/ = this.getAriaLiveEl$C4qX();
        if (ariaLiveEl) {
          // only update the aria-live element if something has changed, otherwise the screen reader is triggered again
          if (ariaLiveEl.dom.innerHTML !== ariaMessage) {
            ariaLiveEl.dom.innerHTML = ariaMessage;
          }
        }
        // set aria-invalid when the component extends BaseField and the ariaRole is not a static role
        var base/*:BaseField*/ =AS3.as( cmp,  Ext.form.field.Base);
        if (base && !base["ariaStaticRoles"][base.ariaRole] && !this.isExtErrorActive$C4qX) {
          var isAriaInvalid/*:Boolean*/ = AS3.getBindable(this,"validationState") === com.coremedia.ui.mixins.ValidationState.ERROR;
          base.inputEl.dom.setAttribute('aria-invalid', isAriaInvalid);
        }
      } else {
        cmp.on("afterrender",AS3.bind( this,"initOrUpdateAriaElements$C4qX"));
      }
    }
  }/*

  private static*/ var REGISTERED_VALIDATION_QTIPS$static/*:Object*/=null;/*

  private static*/ function registerQuickTipAttribute$static(validationState/*:ValidationState*/, attributeName/*:String*/)/*:void*/ {
    var config/*:StatefulQuickTip*/ = AS3.cast(com.coremedia.ui.components.StatefulQuickTip,{});
    var value/*:String*/ = validationState ? validationState.id + "-" : "";
    config.id = "cm-validation-state-mixin-" + value + "tip";
    AS3.setBindable(config,"validationState" , validationState);

    var quickTip/*:StatefulQuickTip*/ = new com.coremedia.ui.components.StatefulQuickTip(config);

    // using private API here but attaching a tooltip to a data-attribute is too elegant to not use it...
    var copy/*:**/ = Ext.apply({}, quickTip["tagConfig"]);
    copy.attribute = attributeName;
    quickTip["setTagConfig"](copy);

    REGISTERED_VALIDATION_QTIPS$static[validationState] = quickTip;
  }/*

  private static*/ function getQuickTipAttribute$static(validationState/*:ValidationState*/)/*:String*/ {
    var tip/*:QuickTip*/ = REGISTERED_VALIDATION_QTIPS$static[validationState];
    var tagConfig/*:**/ = tip && tip["tagConfig"];
    if (tagConfig) {
      return tagConfig["namespace"] + tagConfig["attribute"];
    }
    return null;
  }/*

  /**
   * Use a custom {@link QuickTip} instances separate from the main {@link QuickTip}s singleton, so that we
   * can give it a custom style. Responds to cm-errorqtip and cm-warningqtip rather than the qtip property.
   *
   * @static
   * @private
   * /
  private static*/ function initCMQTipDataAttributes$static()/*:void*/ {
    if (!REGISTERED_VALIDATION_QTIPS$static) {
      REGISTERED_VALIDATION_QTIPS$static = {};
      registerQuickTipAttribute$static(com.coremedia.ui.mixins.ValidationState.ERROR, "cm-errorqtip");
      registerQuickTipAttribute$static(com.coremedia.ui.mixins.ValidationState.WARNING, "cm-warningqtip");
      registerQuickTipAttribute$static(com.coremedia.ui.mixins.ValidationState.INFO, "cm-infoqtip");
      registerQuickTipAttribute$static(com.coremedia.ui.mixins.ValidationState.SUCCESS, "cm-successqtip");
      registerQuickTipAttribute$static(null, 'cm-qtip');
    }
  }/*
}*/function ValidationStateMixin$() {this.super$C4qX();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Mixin",
      _validationState$C4qX: null,
      _validationMessage$C4qX: null,
      initialized$C4qX: false,
      _ariaStatusEl$C4qX: null,
      _ariaLiveEl$C4qX: null,
      isExtErrorActive$C4qX: false,
      activeCssClass$C4qX: null,
      activeToolTipAttribute$C4qX: null,
      initValidationStateMixin: initValidationStateMixin,
      onValidityChange$C4qX: onValidityChange,
      onFieldValidityChange$C4qX: onFieldValidityChange,
      getValidationState: get$validationState,
      setValidationState: set$validationState,
      getValidationMessage: get$validationMessage,
      setValidationMessage: set$validationMessage,
      initOrUpdateCssClass$C4qX: initOrUpdateCssClass,
      getAriaStatusEl$C4qX: getAriaStatusEl,
      getAriaLiveEl$C4qX: getAriaLiveEl,
      getEl$C4qX: getEl,
      getQuickTipTarget$C4qX: getQuickTipTarget,
      initOrUpdateValidationMessage$C4qX: initOrUpdateValidationMessage,
      initOrUpdateAriaElements$C4qX: initOrUpdateAriaElements,
      super$C4qX: function() {
        Ext.Mixin.prototype.constructor.apply(this, arguments);
      },
      constructor: ValidationStateMixin$,
      config: {
        validationState: undefined,
        validationMessage: undefined
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.Mixin",
        "Ext.dom.Element",
        "Ext.form.FieldAncestor",
        "Ext.form.Labelable",
        "Ext.form.field.Base",
        "Ext.form.field.Field",
        "Ext.mixin.Observable",
        "Ext.util.Format"
      ],
      uses: [
        "com.coremedia.ui.components.StatefulQuickTip",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.util.AriaUtils"
      ]
    };
});
