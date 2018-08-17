Ext.define("com.coremedia.cms.editor.sdk.components.BeanListChooserDataViewBase", function(BeanListChooserDataViewBase) {/*package com.coremedia.cms.editor.sdk.components {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.view.DataView;

public class BeanListChooserDataViewBase extends DataView {

  private var autocompletedItems:Array =*/function autocompletedItems_(){this.autocompletedItems$69Dl=( []);}/*;

  private static*/ var MERGED_ITEM_CLASS$static/*:String*/ = "merged-item";/*

  /**
   * @param config the config object
   * /
  public*/ function BeanListChooserDataViewBase$(config/*:BeanListChooserDataView = null*/) {if(arguments.length<=0)config=null;
    this.super$69Dl(config);autocompletedItems_.call(this);;
  }/*

  protected override*/ function onDisable()/*:void*/ {
    Ext.view.View.prototype.onDisable.call(this);
    this.on("beforeclick",AS3.bind( this,"onBeforeClickListenerWhenDisabled$69Dl"));
  }/*

  protected override*/ function onEnable()/*:void*/ {
    Ext.view.View.prototype.onEnable.call(this);
    this.removeListener("beforeclick",AS3.bind( this,"onBeforeClickListenerWhenDisabled$69Dl"));
  }/*

  internal*/ function completeListByMissingSelectedElements(listVE/*:ValueExpression*/, selectionVE/*:ValueExpression*/)/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Array*/ {
      var localAutocompletedItems/*:Array*/ = [];
      var beanList/*:Array*/ = listVE.getValue();
      var selection/*:Array*/ = selectionVE.getValue();
      if (beanList && selection) {
        if (selection.length > 0) {
          for (var i/*:Number*/ = 0; i < selection.length; i++) {
            var selectedBean/*:Bean*/ = selection[i];
            if (beanList.indexOf(selectedBean) === -1) {
              localAutocompletedItems.push(selectedBean);
            }
          }
        }
        this$.autocompletedItems$69Dl = localAutocompletedItems;
        return beanList.concat(localAutocompletedItems);
      } else {
        this$.autocompletedItems$69Dl = [];
        return undefined;
      }
    });
  }/*

  internal*/ function getMergedItemClass(name/*:String*/, c/*:Bean*/)/*:String*/ {
    if (this.autocompletedItems$69Dl.indexOf(c) !== -1) {
      return MERGED_ITEM_CLASS$static;
    }
    return "";
  }/*

  /**
   * Lock selection, when dataview is disabled to prevent changing the selection, which is
   * even possible, when the dataview is disabled.
   * @return false
   * /
  private*/ function onBeforeClickListenerWhenDisabled()/*:Boolean*/ {
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.view.View",
      constructor: BeanListChooserDataViewBase$,
      super$69Dl: function() {
        Ext.view.View.prototype.constructor.apply(this, arguments);
      },
      onDisable: onDisable,
      onEnable: onEnable,
      completeListByMissingSelectedElements: completeListByMissingSelectedElements,
      getMergedItemClass: getMergedItemClass,
      onBeforeClickListenerWhenDisabled$69Dl: onBeforeClickListenerWhenDisabled,
      requires: [
        "Ext.view.View",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
