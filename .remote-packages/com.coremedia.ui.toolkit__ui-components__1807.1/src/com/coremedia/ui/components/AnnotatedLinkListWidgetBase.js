Ext.define("com.coremedia.ui.components.AnnotatedLinkListWidgetBase", function(AnnotatedLinkListWidgetBase) {/*package com.coremedia.ui.components {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.IAnnotatedLinkListWidgetMixin;

import ext.container.Container;

import js.KeyEvent;

public class AnnotatedLinkListWidgetBase extends Container implements IAnnotatedLinkListWidgetMixin {

  private var _settingsVE:ValueExpression;

  public*/ function AnnotatedLinkListWidgetBase$(config/*:AnnotatedLinkListWidgetBase = null*/) {if(arguments.length<=0)config=null;
    this.super$PBfn(config);
    this.initAnnotatedLinkListWidgetMixin(AS3.getBindable(this,"settingsVE"));
  }/*

  [Bindable]
  internal*/ function get$settingsVE()/*:ValueExpression*/ {
    if (!this._settingsVE$PBfn) {
      this._settingsVE$PBfn = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this._settingsVE$PBfn;
  }/*

  /** @inheritDoc * /
  [Bindable]
  public native function get listVE():ValueExpression;

  /** @private * /
  [Bindable]
  public native function set listVE(listVE:ValueExpression):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get recordIndex():Number;

  /** @inheritDoc * /
  public native function initAnnotatedLinkListWidgetMixin(annotationsVE:ValueExpression):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      mixins: ["com.coremedia.ui.mixins.AnnotatedLinkListWidgetMixin"],
      _settingsVE$PBfn: null,
      constructor: AnnotatedLinkListWidgetBase$,
      super$PBfn: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getSettingsVE: get$settingsVE,
      config: {settingsVE: undefined},
      requires: [
        "Ext.container.Container",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.AnnotatedLinkListWidgetMixin"
      ]
    };
});
