Ext.define("com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel", function(TeaserOverlayViewModel) {/*package com.coremedia.cms.editor.sdk.premular.fields.teaser {
import com.coremedia.ui.data.impl.BeanImpl;

import mx.resources.ResourceManager;

public class TeaserOverlayViewModel extends BeanImpl {

  public static const STYLE_PROPERTY_NAME:String = "style";
  public static const RICHTEXT_BUTTONS_DISABLED_PROPERTY_NAME:String = "richtextButtonsDisabled";
  public static const RADIO_POSITION_PROPERTY_NAME:String = "radioPosition";
  public static const ICON_CLS_PROPERTY_NAME:String = "iconCls";
  public static const SLIDER_POSITION_X:String = "sliderPositionX";
  public static const SLIDER_POSITION_Y:String = "sliderPositionY";
  public static const SLIDER_WIDTH:String = "sliderWidth";

  public*/ function TeaserOverlayViewModel$() {this.super$4mMF();
  }/*

  public native function get style():String;

  public native function set style(value:String):void;

  public native function get richtextButtonsDisabled():Boolean;

  public native function set richtextButtonsDisabled(value:Boolean):void;

  public native function get radioPosition():Number;

  public native function set radioPosition(value:Number):void;

  public native function get sliderPositionX():Number;

  public native function set sliderPositionX(value:Number):void;

  public native function get sliderPositionY():Number;

  public native function set sliderPositionY(value:Number):void;

  public native function get sliderWidth():Number;

  public native function set sliderWidth(value:Number):void;

  public native function get iconCls():String;

  public native function set iconCls(value:String):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      constructor: TeaserOverlayViewModel$,
      super$4mMF: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      statics: {
        STYLE_PROPERTY_NAME: "style",
        RICHTEXT_BUTTONS_DISABLED_PROPERTY_NAME: "richtextButtonsDisabled",
        RADIO_POSITION_PROPERTY_NAME: "radioPosition",
        ICON_CLS_PROPERTY_NAME: "iconCls",
        SLIDER_POSITION_X: "sliderPositionX",
        SLIDER_POSITION_Y: "sliderPositionY",
        SLIDER_WIDTH: "sliderWidth"
      },
      requires: ["com.coremedia.ui.data.impl.BeanImpl"]
    };
});
