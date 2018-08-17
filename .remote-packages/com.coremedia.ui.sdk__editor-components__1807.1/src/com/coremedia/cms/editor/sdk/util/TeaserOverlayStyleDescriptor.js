Ext.define("com.coremedia.cms.editor.sdk.util.TeaserOverlayStyleDescriptor", function(TeaserOverlayStyleDescriptor) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase;

/**
 * Declares an observable with properties and their default values for the teaser overlay feature.
 * /
public class TeaserOverlayStyleDescriptor extends PropertiesWithDefaultsAdapterBase {

  private static const*/var TITLE_PROPERTY_NAME$static/*:String*/ = "title";/*
  private static const*/var DESCRIPTION_PROPERTY_NAME$static/*:String*/ = "description";/*
  private static const*/var STYLE_PROPERTY_NAME$static/*:String*/ = "style";/*

  private static const*/var POSITION_X_PROPERTY_NAME$static/*:String*/ = "positionX";/*
  private static const*/var POSITION_Y_PROPERTY_NAME$static/*:String*/ = "positionY";/*
  private static const*/var WIDTH_PROPERTY_NAME$static/*:String*/ = "width";/*

  private var _style:TeaserOverlayStyle;

  public*/ function TeaserOverlayStyleDescriptor$(ve/*:ValueExpression*/) {
    this.super$bevI(ve,
            TITLE_PROPERTY_NAME$static, "",
            DESCRIPTION_PROPERTY_NAME$static, "",
            POSITION_X_PROPERTY_NAME$static, null,
            POSITION_Y_PROPERTY_NAME$static, null,
            WIDTH_PROPERTY_NAME$static, null,
            STYLE_PROPERTY_NAME$static, null
    );
  }/*

  public*/ function  get$title()/*:String*/ {
    return this.getProperty(TITLE_PROPERTY_NAME$static);
  }/*

  public*/ function  get$description()/*:String*/ {
    return this.getProperty(DESCRIPTION_PROPERTY_NAME$static);
  }/*

  public*/ function  get$positionX()/*:Number*/ {
    var value/*:**/ = this.getProperty(POSITION_X_PROPERTY_NAME$static);
    if (AS3.is(value,  Number)) {
      return Number(value);
    }
    return NaN;
  }/*

  public*/ function  get$positionY()/*:Number*/ {
    var value/*:**/ = this.getProperty(POSITION_Y_PROPERTY_NAME$static);
    if (AS3.is(value,  Number)) {
      return Number(value);
    }
    return NaN;
  }/*

  public*/ function  get$width()/*:Number*/ {
    var value/*:**/ = this.getProperty(WIDTH_PROPERTY_NAME$static);
    if (AS3.is(value,  Number)) {
      return Number(value);
    }
    return NaN;
  }/*

  public*/ function  get$style()/*:TeaserOverlayStyle*/ {
    if (!this._style$bevI) {
      var styleVE/*:ValueExpression*/ = this.getPropertyValueExpression(STYLE_PROPERTY_NAME$static);
      this._style$bevI = new com.coremedia.cms.editor.sdk.util.TeaserOverlayStyle(styleVE);
    }
    return this._style$bevI;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase",
      _style$bevI: null,
      constructor: TeaserOverlayStyleDescriptor$,
      super$bevI: function() {
        com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase.prototype.constructor.apply(this, arguments);
      },
      __accessors__: {
        title: {get: get$title},
        description: {get: get$description},
        positionX: {get: get$positionX},
        positionY: {get: get$positionY},
        width: {get: get$width},
        style: {get: get$style}
      },
      requires: ["com.coremedia.ui.data.PropertiesWithDefaultsAdapterBase"],
      uses: ["com.coremedia.cms.editor.sdk.util.TeaserOverlayStyle"]
    };
});
