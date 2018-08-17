Ext.define("com.coremedia.blueprint.base.components.sites.SiteAwareFeatures", function(SiteAwareFeatures) {/*package com.coremedia.blueprint.base.components.sites {
import com.coremedia.ui.util.Enum;

/**
 * Enum of various studio features, which can be switched on or off for individual sites.
 * /
public class SiteAwareFeatures extends Enum {

  /**
   * Enables a form panel which combines several form elements to an editor for one property named
   * externallyDisplayedDate. A combination of a radio group and a date picker field.
   * /
  public static const EXTERNALLY_VISIBLE_DATE_FORM:String = "Externally Visible Date Form";

}*/function SiteAwareFeatures$() {this.super$HwL6();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.util.Enum",
      super$HwL6: function() {
        com.coremedia.ui.util.Enum.prototype.constructor.apply(this, arguments);
      },
      constructor: SiteAwareFeatures$,
      statics: {EXTERNALLY_VISIBLE_DATE_FORM: "Externally Visible Date Form"},
      requires: ["com.coremedia.ui.util.Enum"]
    };
});
