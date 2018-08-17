Ext.define("com.coremedia.cms.studio.imageeditor.actions.AdjustCropsAction", function(AdjustCropsAction) {/*package com.coremedia.cms.studio.imageeditor.actions{
import com.coremedia.cms.studio.imageeditor.actions.*;
import net.jangaroo.ext.Exml;
public class AdjustCropsAction extends AdjustCropsActionBase{

    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;

    public*/function AdjustCropsAction$(config/*:AdjustCropsAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.imageeditor.actions.AdjustCropsActionBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.AdjustCropsActionBase,{});
    var defaults_$1/*:AdjustCropsAction*/ =AS3.cast(AdjustCropsAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$JRnM(config_$1);
  }/*

    [Bindable]
    public var imageEditorViewModel:Bean;

    [Bindable]
    public var variantsValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.actions.AdjustCropsActionBase",
      constructor: AdjustCropsAction$,
      super$JRnM: function() {
        com.coremedia.cms.studio.imageeditor.actions.AdjustCropsActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        imageEditorViewModel: null,
        variantsValueExpression: null
      },
      requires: [
        "com.coremedia.cms.studio.imageeditor.actions.AdjustCropsActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
