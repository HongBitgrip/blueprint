Ext.define("com.coremedia.ui.components.LocalComboBoxBase", function(LocalComboBoxBase) {/*package com.coremedia.ui.components {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.Ext;

import ext.data.AbstractStore;
import ext.form.field.ComboBox;

[PublicApi]
public class LocalComboBoxBase extends StatefulComboBox{

  public*/ function LocalComboBoxBase$(config/*:LocalComboBox = null*/) {if(arguments.length<=0)config=null;
    if (config.queryMode !== "local") {
      throw new AS3.Error('mode of LocalComboBoxBase must be "local"');
    }
    this.super$2wA5(config);


    // blur is for tabbing out of the field or for clicking somewhere else
    this.on("blur",AS3.bind( this,"clearStoreFiltersEventually$2wA5"));
    // select is for pressing enter or for clicking in the drop-down
    this.on("select",AS3.bind( this,"clearStoreFiltersEventually$2wA5"));
  }/*

  /**
   * <p>
   *   Make sure to reset any filters on the store that were set up
   *   during type ahead. The store change is made in a setTimeout
   *   call to give the type ahead algorithm some time to read the current
   *   store state while making the final update. The type ahead delay
   *   is set to 1 to make sure that the type ahead operation finishes
   *   soon enough.
   * </p>
   * <p>
   *   We are not using EventUtil.invokeLater to make sure that the call is
   *   made late enough even if other EventUtil.invokeLater calls are
   *   pending.
   * </p>
   * <p>
   *   It is not possible to cancel the type ahead operation using
   *   <code>taTask.cancel()</code>. We tried. We do not know why.
   * </p>
   * <p>
   *   It is not sufficient to listen to change events. When retyping
   *   the old value, no change event is sent, so that the drop-down
   *   would get corrupted anyway.
   * </p>
   * /
  private*/ function clearStoreFiltersEventually()/*:void*/ {
    window.setTimeout(AS3.bind(this,"clearStoreFilters$2wA5"), 20);
  }/*

  private*/ function clearStoreFilters()/*:void*/ {
    var store/*:AbstractStore*/ = this.getStore();
    // Be safe in case the store has already been dismantled.
    store &&AS3.bind( store,"clearFilter") && store.clearFilter(false);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.ui.components.StatefulComboBox.prototype.afterRender.call(this);

    // The drop-down should open immediately.
    this.inputEl.addListener('click',AS3.bind( this,"onClick$2wA5"));
  }/*

  private*/ function onClick()/*:void*/ {
    if (!this.isExpanded) {
      this['onTriggerClick']();
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulComboBox",
      metadata: {"": ["PublicApi"]},
      constructor: LocalComboBoxBase$,
      super$2wA5: function() {
        com.coremedia.ui.components.StatefulComboBox.prototype.constructor.apply(this, arguments);
      },
      clearStoreFiltersEventually$2wA5: clearStoreFiltersEventually,
      clearStoreFilters$2wA5: clearStoreFilters,
      afterRender: afterRender,
      onClick$2wA5: onClick,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.components.StatefulComboBox"
      ]
    };
});
