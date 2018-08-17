Ext.define("com.coremedia.blueprint.base.components.previewhighlighting.AddPlacementHighlightButtonPluginBase", function(AddPlacementHighlightButtonPluginBase) {/*package com.coremedia.blueprint.base.components.previewhighlighting {
import com.coremedia.blueprint.base.components.previewhighlighting.*;
import com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbar;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.ValueHolder;
import com.coremedia.ui.plugins.AddItemsPlugin;

import ext.Component;

public class AddPlacementHighlightButtonPluginBase extends AddItemsPlugin implements ValueHolder{

  private var toolbar:PreviewIFrameToolbar;

  public*/ function AddPlacementHighlightButtonPluginBase$(config/*:AddPlacementHighlightButtonPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$h2JY(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    com.coremedia.ui.plugins.AddItemsPlugin.prototype.init.call(this,component);
    var toolbar/*:PreviewIFrameToolbar*/ =AS3.as( component,  com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbar);
    this.setValue(toolbar);
  }/*

  protected*/ function getSeperatorVisibilityVE()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromValueHolder(this);
  }/*

  public*/ function getValue()/*:**/ {
    return this.toolbar$h2JY;
  }/*

  public*/ function setValue(value/*:**/)/*:Boolean*/ {
    if (this.toolbar$h2JY !== value) {
      this.toolbar$h2JY = value;
      if (this.toolbar$h2JY.itemCollection.getCount() > 1) {
        return true;
      }
    }
    return false;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddItemsPlugin",
      mixins: ["com.coremedia.ui.data.ValueHolder"],
      toolbar$h2JY: null,
      constructor: AddPlacementHighlightButtonPluginBase$,
      super$h2JY: function() {
        com.coremedia.ui.plugins.AddItemsPlugin.prototype.constructor.apply(this, arguments);
      },
      init: init,
      getSeperatorVisibilityVE: getSeperatorVisibilityVE,
      getValue: getValue,
      setValue: setValue,
      requires: [
        "com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbar",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.ValueHolder",
        "com.coremedia.ui.plugins.AddItemsPlugin"
      ]
    };
});
