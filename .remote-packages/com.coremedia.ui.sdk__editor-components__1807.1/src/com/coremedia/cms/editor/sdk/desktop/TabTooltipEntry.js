Ext.define("com.coremedia.cms.editor.sdk.desktop.TabTooltipEntry", function(TabTooltipEntry) {/* /**
 * Created by ebertel on 15.09.2017.
 * /
package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.ui.data.impl.BeanImpl;

public class TabTooltipEntry extends BeanImpl{
  public static const NAME:String = "name";
  public static const LOCALIZED_NAME:String = "localizedName";
  public static const VALUE:String = "value";

  public*/ function TabTooltipEntry$(name/*:String*/, localizedName/*:String*/, value/*:String*/) {
    this.super$Hh_u();
    this.set(TabTooltipEntry.NAME, name);
    this.set(TabTooltipEntry.LOCALIZED_NAME, localizedName);
    this.set(TabTooltipEntry.VALUE, value);
  }/*

  public*/ function getName()/*:String*/ {
    return this.get(TabTooltipEntry.NAME);
  }/*

  public*/ function getLocalizedName()/*:String*/ {
    return this.get(TabTooltipEntry.LOCALIZED_NAME);
  }/*

  public*/ function getValue()/*:String*/ {
    return this.get(TabTooltipEntry.VALUE);
  }/*

  override public*/ function toString()/*:String*/ {
    //when the entry is not localized then don't use the name
    if (!this.getLocalizedName()) {
      return this.getValue();
    } else {
      return this.getLocalizedName() + ': ' + this.getValue();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      constructor: TabTooltipEntry$,
      super$Hh_u: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      getName: getName,
      getLocalizedName: getLocalizedName,
      getValue: getValue,
      toString: toString,
      statics: {
        NAME: "name",
        LOCALIZED_NAME: "localizedName",
        VALUE: "value"
      },
      requires: ["com.coremedia.ui.data.impl.BeanImpl"]
    };
});
