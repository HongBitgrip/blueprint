Ext.define("com.coremedia.cms.studio.imageeditor.actions.EnlargeAction", function(EnlargeAction) {/*package com.coremedia.cms.studio.imageeditor.actions{
import com.coremedia.cms.studio.imageeditor.actions.*;
import net.jangaroo.ext.Exml;
public class EnlargeAction extends EnlargeActionBase{

    import com.coremedia.cms.studio.imageeditor.ImageVariant;
    import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;

    public*/function EnlargeAction$(config/*:EnlargeAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.imageeditor.actions.EnlargeActionBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.EnlargeActionBase,{});
    var defaults_$1/*:EnlargeAction*/ =AS3.cast(EnlargeAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ri9q(config_$1);
  }/*

    [Bindable]
    public var undoHistory:UndoHistory;

    [Bindable]
    public var imageDimensionsValueExpression:ValueExpression;

    [Bindable]
    public var variantBoxedImageDimensionsValueExpression:ValueExpression;

    [Bindable]
    public var imageEditorViewModel:Bean;

    [Bindable]
    public var variant:ImageVariant;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.actions.EnlargeActionBase",
      constructor: EnlargeAction$,
      super$ri9q: function() {
        com.coremedia.cms.studio.imageeditor.actions.EnlargeActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        undoHistory: null,
        imageDimensionsValueExpression: null,
        variantBoxedImageDimensionsValueExpression: null,
        imageEditorViewModel: null,
        variant: null
      },
      requires: [
        "com.coremedia.cms.studio.imageeditor.actions.EnlargeActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
