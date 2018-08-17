Ext.define("com.coremedia.ui.plugins.HideObsoleteSeparatorsPluginBase", function(HideObsoleteSeparatorsPluginBase) {/*package com.coremedia.ui.plugins {

import ext.Component;
import ext.Plugin;
import ext.container.Container;
import ext.menu.Separator;
import ext.toolbar.Separator;
import ext.toolbar.Toolbar;

public class HideObsoleteSeparatorsPluginBase implements Plugin {

  private var container:Container;
  private var initiallyVisible:Boolean;

  public*/ function HideObsoleteSeparatorsPluginBase$(config/*:HideObsoleteSeparatorsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.initiallyVisible$2lHV = AS3.getBindable(config,"initiallyVisible");
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    this.container$2lHV =AS3.as( component,  Ext.container.Container);
    if (!this.container$2lHV) {
      throw new AS3.Error("HideObsoleteSeparatorsPlugin must be applied to an ext.Container.");
    }

    this.container$2lHV.itemCollection && this.container$2lHV.itemCollection.each(function (item/*:Component*/)/*:void*/ {
      if (!isSeparator$static(item)) {
        this$.registerItemVisibilityChangeHandlers$2lHV(item);
      }
    });

    this.container$2lHV.on("add", function (thys/*:Component*/, item/*:Component*/)/*:void*/ {
      this$.registerItemVisibilityChangeHandlers$2lHV(item);
      this$.handleItemVisibilityChange$2lHV();
    });
    this.container$2lHV.on("remove", function (thys/*:Component*/, item/*:Component*/)/*:void*/ {
      this$.unregisterItemVisibilityChangeHandlers$2lHV(item);
      this$.handleItemVisibilityChange$2lHV();
    });

    this.container$2lHV.on("beforeshow",AS3.bind( this,"beforeShow$2lHV"));
    this.container$2lHV.on("afterrender",AS3.bind( this,"hideSuperfluousSeparators$2lHV"));
  }/*

  private*/ function unregisterItemVisibilityChangeHandlers(item/*:Component*/)/*:void*/ {
    this.container$2lHV.mun(item, "show",AS3.bind( this,"handleItemVisibilityChange$2lHV"));
    this.container$2lHV.mun(item, "hide",AS3.bind( this,"handleItemVisibilityChange$2lHV"));
  }/*

  private*/ function registerItemVisibilityChangeHandlers(item/*:Component*/)/*:void*/ {
    this.container$2lHV.mon(item, "show",AS3.bind( this,"handleItemVisibilityChange$2lHV"));
    this.container$2lHV.mon(item, "hide",AS3.bind( this,"handleItemVisibilityChange$2lHV"));
  }/*

  private*/ function handleItemVisibilityChange()/*:void*/ {
    if (this.container$2lHV.isVisible(true)) {
      this.hideSuperfluousSeparators$2lHV();
      if (this.checkAllItemsHidden$2lHV() && !(AS3.is(this.container$2lHV,  Ext.toolbar.Toolbar))) {
        this.container$2lHV.hide();
      } else {
        this.container$2lHV.updateLayout();
      }
    }
  }/*

  private*/ function beforeShow()/*:Boolean*/ {
    this.hideSuperfluousSeparators$2lHV();
    return this.initiallyVisible$2lHV || !this.checkAllItemsHidden$2lHV();
  }/*

  private*/ function checkAllItemsHidden()/*:Boolean*/ {
    return !this.container$2lHV.itemCollection.findBy(AS3.bind(this,"isNotHidden$2lHV"));
  }/*

  private*/ function isNotHidden(item/*:Component*/)/*:Boolean*/ {
    return !this.isHidden$2lHV(item);
  }/*

  private*/ function hideSuperfluousSeparators()/*:void*/ {var this$=this;
    // Whether at least one separator changed its visibility.
    var changed/*:Boolean*/ = false;
    // Whether at least one visible non-separator has been observed.
    var afterVisibleItem/*:Boolean*/ = false;
    // The last separator observed so far, if the visibility of that
    // separator has not yet been decided.
    var undecidedSeparator/*:Component*/ = null;
    this.container$2lHV.itemCollection.each(function (item/*:Component*/)/*:void*/ {
      if (isSeparator$static(item)) {
        if (afterVisibleItem) {
          if (undecidedSeparator) {
            // No visible items are placed between this separator and the last
            // visible separator. Hide the last separator and consider showing
            // this once.
            if (!this$.isHidden$2lHV(undecidedSeparator)) {
              changed = true;
              undecidedSeparator.hide();
            }
          }
          // Show this separator once we find a visible item following it.
          undecidedSeparator = item;
        } else {
          // Separators before the first visible item are always hidden.
          if (!this$.isHidden$2lHV(item)) {
            changed = true;
            item.hide();
          }
        }

      } else if (!this$.isHidden$2lHV(item)) {
        if (undecidedSeparator) {
          // The undecided separator is sandwiched between two visible item.
          if (this$.isHidden$2lHV(undecidedSeparator)) {
            changed = true;
            undecidedSeparator.show();
          }
          undecidedSeparator = null;
        }
        afterVisibleItem = true;
      }
    });

    if (undecidedSeparator) {
      // The last separator that is not followed by a visible item is always hidden.
      if (!undecidedSeparator.hidden) {
        changed = true;
        undecidedSeparator.hide();
      }
    }

    if (changed) {
      // Make sure to adjust the size of the container.
      this.container$2lHV.updateLayout();
    }
  }/*

  private static*/ function isSeparator$static(item/*:Component*/)/*:Boolean*/ {
    return AS3.is( item,  Ext.menu.Separator) ||AS3.is( item,  Ext.toolbar.Separator);
  }/*

  private*/ function isHidden(item/*:Component*/)/*:Boolean*/ {
    return item.hidden;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      container$2lHV: null,
      initiallyVisible$2lHV: false,
      constructor: HideObsoleteSeparatorsPluginBase$,
      init: init,
      unregisterItemVisibilityChangeHandlers$2lHV: unregisterItemVisibilityChangeHandlers,
      registerItemVisibilityChangeHandlers$2lHV: registerItemVisibilityChangeHandlers,
      handleItemVisibilityChange$2lHV: handleItemVisibilityChange,
      beforeShow$2lHV: beforeShow,
      checkAllItemsHidden$2lHV: checkAllItemsHidden,
      isNotHidden$2lHV: isNotHidden,
      hideSuperfluousSeparators$2lHV: hideSuperfluousSeparators,
      isHidden$2lHV: isHidden,
      requires: [
        "AS3.Error",
        "Ext.container.Container",
        "Ext.menu.Separator",
        "Ext.toolbar.Separator",
        "Ext.toolbar.Toolbar",
        "ext.Plugin"
      ]
    };
});
