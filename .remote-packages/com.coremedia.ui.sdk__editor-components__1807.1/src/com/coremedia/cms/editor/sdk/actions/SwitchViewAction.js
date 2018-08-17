Ext.define("com.coremedia.cms.editor.sdk.actions.SwitchViewAction", function(SwitchViewAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
public class SwitchViewAction extends SwitchViewActionBase{

    public*/function SwitchViewAction$(config/*:SwitchViewAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.SwitchViewActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.SwitchViewActionBase,{});
    var defaults_$1/*:SwitchViewAction*/ =AS3.cast(SwitchViewAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"_handler"));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$dHNw(config_$1);
  }/*

    /**
     The collectionViewModel object that holds the actual state of the view.
     * /
    [Bindable]
    public var collectionViewModel:com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;


    /**
     The view to be shown when this button is pressed.
     * /
    [Bindable]
    public var view:String;


    /**
     The view to be shown when this button is pressed and clicked again. Leave undefined to ignore a click on a pressed button.
     * /
    [Bindable]
    public var onUnpressSwitchToView:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.SwitchViewActionBase",
      constructor: SwitchViewAction$,
      super$dHNw: function() {
        com.coremedia.cms.editor.sdk.actions.SwitchViewActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        collectionViewModel: null,
        view: null,
        onUnpressSwitchToView: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.SwitchViewActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
