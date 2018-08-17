Ext.define("com.coremedia.cms.studio.imageeditor.actions.EnlargeAllAction", function(EnlargeAllAction) {/*package com.coremedia.cms.studio.imageeditor.actions{
import com.coremedia.cms.studio.imageeditor.actions.*;
import net.jangaroo.ext.Exml;
public class EnlargeAllAction extends EnlargeAllActionBase{

    import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;

    public*/function EnlargeAllAction$(config/*:EnlargeAllAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.imageeditor.actions.EnlargeAllActionBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.EnlargeAllActionBase,{});
    var defaults_$1/*:EnlargeAllAction*/ =AS3.cast(EnlargeAllAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$eD8v(config_$1);
  }/*

    [Bindable]
    public var undoHistory:UndoHistory;

    [Bindable]
    public var variantsValueExpression:ValueExpression;

    [Bindable]
    public var imageDimensionsValueExpression:ValueExpression;

    [Bindable]
    public var variantBoxedImageDimensionsValueExpressions:ValueExpression;

    [Bindable]
    public var imageEditorViewModel:Bean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.actions.EnlargeAllActionBase",
      constructor: EnlargeAllAction$,
      super$eD8v: function() {
        com.coremedia.cms.studio.imageeditor.actions.EnlargeAllActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        undoHistory: null,
        variantsValueExpression: null,
        imageDimensionsValueExpression: null,
        variantBoxedImageDimensionsValueExpressions: null,
        imageEditorViewModel: null
      },
      requires: [
        "com.coremedia.cms.studio.imageeditor.actions.EnlargeAllActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
