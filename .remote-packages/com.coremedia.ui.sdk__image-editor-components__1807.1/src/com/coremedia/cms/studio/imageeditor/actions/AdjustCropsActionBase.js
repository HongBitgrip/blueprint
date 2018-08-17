Ext.define("com.coremedia.cms.studio.imageeditor.actions.AdjustCropsActionBase", function(AdjustCropsActionBase) {/*package com.coremedia.cms.studio.imageeditor.actions {

import com.coremedia.cms.studio.imageeditor.ImageVariant;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.AsyncObserver;

public class AdjustCropsActionBase extends DependencyTrackedAction {

  private var imageEditorViewModel:Bean;
  private var variantsValueExpression:ValueExpression;

  public*/ function AdjustCropsActionBase$(config/*:AdjustCropsAction = null*/)/*:void*/ {if(arguments.length<=0)config=null;
    this.super$wnn7(config);

    this.imageEditorViewModel$wnn7 = AS3.getBindable(config,"imageEditorViewModel");
    this.variantsValueExpression$wnn7 = AS3.getBindable(config,"variantsValueExpression");
  }/*

  internal*/ function adjustCrops(handler/*:Function*/)/*:void*/ {var this$=this;
    com.coremedia.ui.util.AsyncObserver.complete(function()/*:void*/ {
      var focusArea/*:Object*/ = this$.imageEditorViewModel$wnn7.get('focusArea');
      focusArea = handler(focusArea);
      this$.imageEditorViewModel$wnn7.set('focusArea', focusArea);
      var focusPoint/*:Object*/ = this$.imageEditorViewModel$wnn7.get('focusPoint');
      focusPoint = handler(focusPoint);
      this$.imageEditorViewModel$wnn7.set('focusPoint', focusPoint);
      var variants/*:Array*/ = this$.variantsValueExpression$wnn7.getValue();
      for/* each*/ (var $1=0;$1</* in*/ variants.length;++$1) {var variant/*:ImageVariant*/ =variants[$1];
        var crop/*:Object*/ = this$.imageEditorViewModel$wnn7.get(variant.key);
        if (crop) {
          var variantModel/*:Object*/ = handler(crop);
          this$.imageEditorViewModel$wnn7.set(variant.key, variantModel);
        }
      }
    });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      imageEditorViewModel$wnn7: null,
      variantsValueExpression$wnn7: null,
      constructor: AdjustCropsActionBase$,
      super$wnn7: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      adjustCrops: adjustCrops,
      requires: [
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.util.AsyncObserver"
      ]
    };
});
