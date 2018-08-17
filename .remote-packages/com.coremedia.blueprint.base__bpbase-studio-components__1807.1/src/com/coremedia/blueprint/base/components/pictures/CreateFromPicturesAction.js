Ext.define("com.coremedia.blueprint.base.components.pictures.CreateFromPicturesAction", function(CreateFromPicturesAction) {/*package com.coremedia.blueprint.base.components.pictures{
import com.coremedia.blueprint.base.components.pictures.*;
import net.jangaroo.ext.Exml;
public class CreateFromPicturesAction extends CreateFromPicturesActionBase{

    import com.coremedia.ui.data.Bean;

    public*/function CreateFromPicturesAction$(config/*:CreateFromPicturesAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.pictures.CreateFromPicturesActionBase*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.CreateFromPicturesActionBase,{});
    var defaults_$1/*:CreateFromPicturesAction*/ =AS3.cast(CreateFromPicturesAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$0q7_(config_$1);
  }/*

    [Bindable]
    public var viewModel:Bean;

    [Bindable]
    public var callback:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.CreateFromPicturesActionBase",
      constructor: CreateFromPicturesAction$,
      super$0q7_: function() {
        com.coremedia.blueprint.base.components.pictures.CreateFromPicturesActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        viewModel: null,
        callback: null
      },
      requires: [
        "com.coremedia.blueprint.base.components.pictures.CreateFromPicturesActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
