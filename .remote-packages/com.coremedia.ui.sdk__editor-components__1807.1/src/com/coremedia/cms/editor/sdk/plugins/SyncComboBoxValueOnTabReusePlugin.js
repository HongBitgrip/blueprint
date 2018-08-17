Ext.define("com.coremedia.cms.editor.sdk.plugins.SyncComboBoxValueOnTabReusePlugin", function(SyncComboBoxValueOnTabReusePlugin) {/*package com.coremedia.cms.editor.sdk.plugins {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;

import ext.Component;
import ext.Plugin;
import ext.form.field.ComboBox;

/**
 * Plugin for a ComboBox where the following applies:
 *
 * <ul>
 *   <li>The ComboBox has a parent container that is a WorkArea tab and is subject to tab reuse.</li>
 *   <li>The ComboBox uses both the BindPropertyPlugin and the BindListPlugin.</li>
 *   <li>The BindPropertyPlugin's componentProperty config is 'value'.</li>
 * </ul>
 *
 * The BindPropertyPlugin and BindListPlugin are independent from each other and have
 * no reference of each other. This plugin synchronizes their behaviour.
 * On tab reuse, the BindPropertyPlugin and the BindListPlugin bindTo ValueExpressions are likely to
 * change both which leaves room for race conditions when applying the new ComboBox value.
 * This plugin takes care that the ComboBox value is set safely by waiting until BindPropertyPlugin
 * and BindListPlugin are completely re-initialized.
 * /
[PublicApi]
public class SyncComboBoxValueOnTabReusePlugin extends TabReuseAwarePlugin {

  private var combo:ComboBox;

  private var propPlugin:BindPropertyPlugin;
  private var listPlugin:BindListPlugin;

  private var tabReuseInProgess:Boolean;

  private var boundValuePending:Boolean = false;


  public*/ function SyncComboBoxValueOnTabReusePlugin$(config/*:SyncComboBoxValueOnTabReusePlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$nWFY(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    if (!this.isComboBoxWithBindPlugins$nWFY(component)) {
      com.coremedia.ui.logging.Logger.warn("SyncComboBoxValueOnTabReusePlugin is only applicable to ComboBoxes with both BindPropertyPlugin (for 'value' property) and BindListPlugin.");
      return;
    }

    com.coremedia.cms.editor.sdk.plugins.TabReuseAwarePlugin.prototype.init.call(this,component);

    if (this.reusableParentTab) {
      // if store changes (via listPlugin), also trigger setting combo value (via propPlugin)
      AS3.getBindable(this.listPlugin$nWFY,"bindTo","DUMMY").addChangeListener(this.propPlugin$nWFY.boundValueChanged);
      // predicate to temporarily disable setting the combo value
      AS3.getBindable(this.propPlugin$nWFY,"setComponentPropertyAllowedPredicates","DUMMY").push(AS3.bind(this,"setComponentPropertyAllowed$nWFY"));
      // predicate to temporarily disable setting the bindProp's bindTo
      AS3.getBindable(this.propPlugin$nWFY,"setVEAllowedPredicates","DUMMY").push(AS3.bind(this,"setVEAllowed$nWFY"));

      this.combo$nWFY.on("beforedestroy", function ()/*:void*/ {
        this$.combo$nWFY.un("storechange",AS3.bind( this$,"waitForStore$nWFY"));
        if (this$.combo$nWFY.getStore()) {
          this$.combo$nWFY.getStore().un("load",AS3.bind( this$,"waitForStore$nWFY"));
        }
        AS3.getBindable(this$.listPlugin$nWFY,"bindTo","DUMMY").removeChangeListener(this$.propPlugin$nWFY.boundValueChanged);
      });
    }
  }/*

  private*/ function isComboBoxWithBindPlugins(component/*:Component*/)/*:Boolean*/ {
    this.combo$nWFY =AS3.as( component,  Ext.form.field.ComboBox);

    if (!this.combo$nWFY) {
      return false;
    }

    var plugins/*:Array*/ = this.combo$nWFY.plugins || [];
    var plug/*:Plugin*/;

    for (var i/*:int*/ = 0; i < plugins.length; i++) {
      plug = plugins[i];
      if (AS3.is(plug,  com.coremedia.ui.plugins.BindPropertyPlugin) && (AS3.as(plug,  com.coremedia.ui.plugins.BindPropertyPlugin)).componentProperty === 'value') {
        this.propPlugin$nWFY =AS3.as( plug,  com.coremedia.ui.plugins.BindPropertyPlugin);
        break;
      }
    }
    if (!this.propPlugin$nWFY) {
      return false;
    }

    for (var j/*:int*/ = 0; j < plugins.length; j++) {
      plug = plugins[j];
      if (AS3.is(plug,  com.coremedia.ui.plugins.BindListPlugin)) {
        this.listPlugin$nWFY =AS3.as( plug,  com.coremedia.ui.plugins.BindListPlugin);
        break;
      }
    }
    return this.listPlugin$nWFY;
  }/*

  private*/ function setVEAllowed()/*:Boolean*/ {
    return !this.tabReuseInProgess$nWFY && !this.boundValuePending$nWFY;
  }/*

  private*/ function setComponentPropertyAllowed(c/*:Component*/, value/*:**/)/*:Boolean*/ {
    if (this.tabReuseInProgess$nWFY) {
      return false;
    }

    if (!this.isComboStoreReady$nWFY()) {
      this.waitForStore$nWFY();
      return false;
    }

    if (!this.combo$nWFY.findRecordByValue(value)) {
      com.coremedia.ui.logging.Logger.warn("SyncComboBoxValueOnTabReusePlugin: Setting value of ComboBox not possible even after BindPropertyPlugin and BindListPlugin are synchronized => bound value is invalid.");
      return false;
    }

    this.lockCombo$nWFY(false);

    return true;
  }/*

  private*/ function isComboStoreReady()/*:Boolean*/ {var this$=this;
    if (!this.combo$nWFY.getStore()) {
      return false;
    }

    if (this.combo$nWFY.getStore()["isEmptyStore"]) {
      return true;
    }
    if (this.combo$nWFY.getStore().isLoading()) {
      return false;
    }

    var bindTo/*:ValueExpression*/ = AS3.getBindable(this.listPlugin$nWFY,"bindTo","DUMMY");
    var bindToValues/*:Array*/ =AS3.as( bindTo.getValue(),  Array);
    if (!bindToValues) {
      return false;
    }

    if (bindToValues.length !== this.combo$nWFY.getStore().getCount()) {
      return false;
    }

    return bindToValues.every(function (val/*:**/)/*:Boolean*/ {
      return ! !this$.combo$nWFY.findRecord("bean", val);
    });
  }/*

  private*/ function waitForStore()/*:void*/ {
    if (this.isComboStoreReady$nWFY()) {
      this.combo$nWFY.un("storechange",AS3.bind( this,"waitForStore$nWFY"));
      this.combo$nWFY.getStore().un("load",AS3.bind( this,"waitForStore$nWFY"));
      if (this.propPlugin$nWFY.isConsistent()) {
        this.lockCombo$nWFY(false);
      } else {
        this.propPlugin$nWFY.boundValueChanged();
      }
    } else {
      this.combo$nWFY.on("storechange",AS3.bind( this,"waitForStore$nWFY"));
      if(this.combo$nWFY.getStore()) {
        this.combo$nWFY.mon(this.combo$nWFY.getStore(), "load",AS3.bind( this,"waitForStore$nWFY"));
      }
    }
  }/*

  override protected*/ function onBeforeTabReuse()/*:void*/ {
    this.lockCombo$nWFY(true);
    this.tabReuseInProgess$nWFY = true;
  }/*

  override protected*/ function onAfterTabReuse()/*:void*/ {
    if (!this.tabReuseInProgess$nWFY) {
      return;
    }
    this.tabReuseInProgess$nWFY = false;
    if (this.propPlugin$nWFY.isConsistent()) {
      this.lockCombo$nWFY(false);
    } else {
      this.propPlugin$nWFY.boundValueChanged();
    }
  }/*

  private*/ function lockCombo(lock/*:Boolean*/)/*:void*/ {
    this.combo$nWFY['suspendCheckChange'] = lock;
    this.boundValuePending$nWFY = lock;
    this.combo$nWFY.setDisabled(lock);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.plugins.TabReuseAwarePlugin",
      metadata: {"": ["PublicApi"]},
      combo$nWFY: null,
      propPlugin$nWFY: null,
      listPlugin$nWFY: null,
      tabReuseInProgess$nWFY: false,
      boundValuePending$nWFY: false,
      constructor: SyncComboBoxValueOnTabReusePlugin$,
      super$nWFY: function() {
        com.coremedia.cms.editor.sdk.plugins.TabReuseAwarePlugin.prototype.constructor.apply(this, arguments);
      },
      init: init,
      isComboBoxWithBindPlugins$nWFY: isComboBoxWithBindPlugins,
      setVEAllowed$nWFY: setVEAllowed,
      setComponentPropertyAllowed$nWFY: setComponentPropertyAllowed,
      isComboStoreReady$nWFY: isComboStoreReady,
      waitForStore$nWFY: waitForStore,
      onBeforeTabReuse: onBeforeTabReuse,
      onAfterTabReuse: onAfterTabReuse,
      lockCombo$nWFY: lockCombo,
      requires: [
        "Ext.form.field.ComboBox",
        "com.coremedia.cms.editor.sdk.plugins.TabReuseAwarePlugin",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin"
      ]
    };
});
