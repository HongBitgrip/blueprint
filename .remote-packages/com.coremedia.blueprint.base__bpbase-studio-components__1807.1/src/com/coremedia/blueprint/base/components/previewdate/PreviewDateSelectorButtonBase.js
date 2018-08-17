Ext.define("com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorButtonBase", function(PreviewDateSelectorButtonBase) {/*package com.coremedia.blueprint.base.components.previewdate {

import com.coremedia.cms.editor.sdk.preview.PreviewPanel;
import com.coremedia.ui.actions.OpenDialogAction;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.validation.validate;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.Ext;

/**
 * Base class of the button that opens the preview date selection dialog.
 * /
public class PreviewDateSelectorButtonBase extends IconButton implements IValidationStateMixin {
  private var dummyExpression:ValueExpression;
  private var dateExpression:ValueExpression;

  internal static const DATE_CHANGED_EVENT:String = "dateChanged";

  public*/ function PreviewDateSelectorButtonBase$(config/*:PreviewDateSelectorButton = null*/) {if(arguments.length<=0)config=null;
    this.super$kWyK(config);
    this.initValidationStateMixin();

    this.getDateExpression().addChangeListener(AS3.bind(this,"dateChanged$kWyK"));
  }/*

  private*/ function dateChanged()/*:void*/ {
    var date/*:Calendar*/ =AS3.as( this.getDateExpression().getValue(),  com.coremedia.ui.data.Calendar);

    if (date) {
      this.setPressed(true);
      AS3.setBindable(this,"validationState" , com.coremedia.ui.mixins.ValidationState.SUCCESS);
    } else {
      this.setPressed(false);
      AS3.setBindable(this,"validationState" , null);
    }

    this.fireEvent(PreviewDateSelectorButtonBase.DATE_CHANGED_EVENT);
  }/*

  // Used by test
  //noinspection JSUnusedGlobalSymbols
  internal*/ function getPreviewDateSelectorDialog()/*:PreviewDateSelectorDialog*/ {
    return AS3.cast(com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialog,AS3.cast(com.coremedia.ui.actions.OpenDialogAction,this.baseAction).getDialog());
  }/*

  internal*/ function getDummyExpression()/*:ValueExpression*/ {
    if (!this.dummyExpression$kWyK) {
      var contentWrapperBean/*:Bean*/ = com.coremedia.ui.data.beanFactory.createLocalBean({properties: com.coremedia.ui.data.beanFactory.createLocalBean()});
      this.dummyExpression$kWyK = com.coremedia.ui.data.ValueExpressionFactory.create('', contentWrapperBean);
    }
    return this.dummyExpression$kWyK;
  }/*

  internal*/ function getDateExpression()/*:ValueExpression*/ {
    if (!this.dateExpression$kWyK) {
      this.dateExpression$kWyK = this.getDummyExpression().extendBy('properties.previewDate');
      this.dateExpression$kWyK.setValue(null);
    }

    return this.dateExpression$kWyK;
  }/*

  internal static*/ function getDisabledValueExpression$static(previewPanel/*:PreviewPanel*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(AS3.getBindable(previewPanel,"bindTo","DUMMY"),AS3.bind( Ext,"isEmpty"));
  }/*

  internal*/ function applyReusabilityState(state/*:Object*/)/*:void*/ {
    this.getDateExpression().setValue(state.date ? state.date : null);
  }/*

  internal*/ function saveReusabilityState()/*:Object*/ {
    return {date: this.getDateExpression().getValue()};
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.getDateExpression().removeChangeListener(AS3.bind(this,"dateChanged$kWyK"));

    com.coremedia.ui.components.IconButton.prototype.onDestroy.call(this);
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
      dummyExpression$kWyK: null,
      dateExpression$kWyK: null,
      constructor: PreviewDateSelectorButtonBase$,
      super$kWyK: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      dateChanged$kWyK: dateChanged,
      getPreviewDateSelectorDialog: getPreviewDateSelectorDialog,
      getDummyExpression: getDummyExpression,
      getDateExpression: getDateExpression,
      applyReusabilityState: applyReusabilityState,
      saveReusabilityState: saveReusabilityState,
      onDestroy: onDestroy,
      statics: {
        DATE_CHANGED_EVENT: "dateChanged",
        getDisabledValueExpression: getDisabledValueExpression$static
      },
      requires: [
        "Ext",
        "com.coremedia.ui.actions.OpenDialogAction",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.Calendar",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorDialog"]
    };
});
