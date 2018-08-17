Ext.define("com.coremedia.cms.editor.sdk.premular.FocusListener", function(FocusListener) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.ui.data.Bean;

public interface FocusListener {
  /**
   * <p>Upon this call, the listener should focus or show a
   * property field or a tab, possibly scrolling to the given position.</p>
   * <p>The distance that the form in the panel was scrolled since
   * a position was last transmitted can be used to replicate that movement
   * immediately while converting jumps due to inconsistent field
   * sizes to soft-scroll operations.</p>
   *
   * @param bean the bean defining the selected property
   * @param tabTitle the name of the tab being shown; null, if unknown
   * @param property the name of the selected property
   * @param isFocus whether the operation is a focus operation
   * @param setCurrentProperty whether the property should be highlighted as the current property
   * @param sendState whether to inform the forwarder about the current position
   * @param position the current vertical position of the property field relative to the position of the document form; NaN, if unknown
   * @param distance the distance that the form was scrolled since the last position was sent (form content moves up = positive); NaN, if unknown
   * @param scrollOnly whether the form should only be scroll without any focus changes
   * /
  function onPropertyShow(bean:Bean,
                          tabTitle:String,
                          property:String,
                          isFocus:Boolean,
                          setCurrentProperty:Boolean,
                          sendState:Boolean,
                          position:Number,
                          distance:Number,
                          scrollOnly:Boolean):void;

  function onCollapsibleChange(collapsibleItemId:String, expanded:Boolean):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
