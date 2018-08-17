Ext.define("com.coremedia.cms.editor.sdk.util.TeaserOverlaySettings", function(TeaserOverlaySettings) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase;

/**
 * Declares an observable with properties and their default values for the teaser overlay feature.
 * /
public class TeaserOverlaySettings extends PropertiesWithDefaultsAdapterBase {

  public static const ENABLED_PROPERTY_NAME:String = "enabled";
  public static const STYLE_PROPERTY_NAME:String = "style";

  private static const*/var POSITION_X_PROPERTY_NAME$static/*:String*/ = "positionX";/*
  private static const*/var POSITION_Y_PROPERTY_NAME$static/*:String*/ = "positionY";/*
  private static const*/var WIDTH_PROPERTY_NAME$static/*:String*/ = "width";/*

  public*/ function TeaserOverlaySettings$(ve/*:ValueExpression*/) {
    this.super$M6eH(ve,
            TeaserOverlaySettings.ENABLED_PROPERTY_NAME, false,
            TeaserOverlaySettings.STYLE_PROPERTY_NAME, null,
            POSITION_X_PROPERTY_NAME$static, 0,
            POSITION_Y_PROPERTY_NAME$static, 0,
            WIDTH_PROPERTY_NAME$static, 50
    );
  }/*

  public*/ function  get$enabled()/*:Boolean*/ {
    return this.getProperty(TeaserOverlaySettings.ENABLED_PROPERTY_NAME);
  }/*

  public*/ function  set$enabled(value/*:Boolean*/)/*:void*/ {
    this.setProperty(TeaserOverlaySettings.ENABLED_PROPERTY_NAME, value);
  }/*

  public*/ function  get$style()/*:Content*/ {
    return this.getProperty(TeaserOverlaySettings.STYLE_PROPERTY_NAME);
  }/*

  public*/ function  set$style(value/*:Content*/)/*:void*/ {
    this.setProperty(TeaserOverlaySettings.STYLE_PROPERTY_NAME, value);
  }/*

  public*/ function  get$positionX()/*:Number*/ {
    return this.getProperty(POSITION_X_PROPERTY_NAME$static);
  }/*

  public*/ function  set$positionX(value/*:Number*/)/*:void*/ {
    this.setProperty(POSITION_X_PROPERTY_NAME$static, value);
  }/*

  public*/ function  get$positionY()/*:Number*/ {
    return this.getProperty(POSITION_Y_PROPERTY_NAME$static);
  }/*

  public*/ function  set$positionY(value/*:Number*/)/*:void*/ {
    this.setProperty(POSITION_Y_PROPERTY_NAME$static, value);
  }/*

  public*/ function  get$width()/*:Number*/ {
    return this.getProperty(WIDTH_PROPERTY_NAME$static);
  }/*

  public*/ function  set$width(value/*:Number*/)/*:void*/ {
    this.setProperty(WIDTH_PROPERTY_NAME$static, value);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase",
      constructor: TeaserOverlaySettings$,
      super$M6eH: function() {
        com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ENABLED_PROPERTY_NAME: "enabled",
        STYLE_PROPERTY_NAME: "style"
      },
      __accessors__: {
        enabled: {
          get: get$enabled,
          set: set$enabled
        },
        style: {
          get: get$style,
          set: set$style
        },
        positionX: {
          get: get$positionX,
          set: set$positionX
        },
        positionY: {
          get: get$positionY,
          set: set$positionY
        },
        width: {
          get: get$width,
          set: set$width
        }
      },
      requires: ["com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase"]
    };
});
