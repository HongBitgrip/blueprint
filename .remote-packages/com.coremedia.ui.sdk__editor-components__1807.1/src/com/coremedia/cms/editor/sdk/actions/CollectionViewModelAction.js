Ext.define("com.coremedia.cms.editor.sdk.actions.CollectionViewModelAction", function(CollectionViewModelAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Action to modify a property of the collection view model.
 * /
public class CollectionViewModelAction extends CollectionViewModelActionBase{

    public*/function CollectionViewModelAction$(config/*:CollectionViewModelAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.CollectionViewModelActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.CollectionViewModelActionBase,{});
    var defaults_$1/*:CollectionViewModelAction*/ =AS3.cast(CollectionViewModelAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"_handler"));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$I0fH(config_$1);
  }/*

    /**
     The name of the property
     * /
    [Bindable]
    public var property:String;


    /**
     The value of the property
     * /
    [Bindable]
    public var value:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.CollectionViewModelActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: CollectionViewModelAction$,
      super$I0fH: function() {
        com.coremedia.cms.editor.sdk.actions.CollectionViewModelActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        property: null,
        value: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.CollectionViewModelActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
