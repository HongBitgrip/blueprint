Ext.define("com.coremedia.cms.editor.sdk.actions.ShowTabEntityInRepositoryAction", function(ShowTabEntityInRepositoryAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class ShowTabEntityInRepositoryAction extends ShowTabEntityInRepositoryActionBase{

    import com.coremedia.ui.data.RemoteBean;

    public*/function ShowTabEntityInRepositoryAction$(config/*:ShowTabEntityInRepositoryAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ShowTabEntityInRepositoryActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowTabEntityInRepositoryActionBase,{});
    var defaults_$1/*:ShowTabEntityInRepositoryAction*/ =AS3.cast(ShowTabEntityInRepositoryAction,{});
    AS3.setBindable(defaults_$1,"entityType" , com.coremedia.ui.data.RemoteBean);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$vqHL(config_$1);
  }/*

    /**
     The entity type that this action can open in library.
     * /
    [Bindable]
    public var entityType:Class;


    /**
     Optional function to handle the selected entity.
     * /
    [Bindable]
    public var handleEntity:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ShowTabEntityInRepositoryActionBase",
      constructor: ShowTabEntityInRepositoryAction$,
      super$vqHL: function() {
        com.coremedia.cms.editor.sdk.actions.ShowTabEntityInRepositoryActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        entityType: null,
        handleEntity: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ShowTabEntityInRepositoryActionBase",
        "com.coremedia.ui.data.RemoteBean",
        "net.jangaroo.ext.Exml"
      ]
    };
});
