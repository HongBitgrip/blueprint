Ext.define("com.coremedia.cms.editor.sdk.util.TeaserOverlayStyle", function(TeaserOverlayStyle) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase;

/**
 * Declares an observable with properties and their default values for the teaser overlay feature.
 * /
public class TeaserOverlayStyle extends PropertiesWithDefaultsAdapterBase {

  private static const*/var COLOR_PROPERTY_NAME$static/*:String*/ = "color";/*
  private static const*/var BACKGROUND_COLOR_PROPERTY_NAME$static/*:String*/ = "backgroundColor";/*

  public*/ function TeaserOverlayStyle$(ve/*:ValueExpression*/) {
    this.super$V_Q3(ve,
            COLOR_PROPERTY_NAME$static, "",
            BACKGROUND_COLOR_PROPERTY_NAME$static, ""
    );
  }/*

  public*/ function  get$color()/*:String*/ {
    return this.getProperty(COLOR_PROPERTY_NAME$static);
  }/*

  public*/ function  get$backgroundColor()/*:String*/ {
    return this.getProperty(BACKGROUND_COLOR_PROPERTY_NAME$static);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase",
      constructor: TeaserOverlayStyle$,
      super$V_Q3: function() {
        com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase.prototype.constructor.apply(this, arguments);
      },
      __accessors__: {
        color: {get: get$color},
        backgroundColor: {get: get$backgroundColor}
      },
      requires: ["com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase"]
    };
});
