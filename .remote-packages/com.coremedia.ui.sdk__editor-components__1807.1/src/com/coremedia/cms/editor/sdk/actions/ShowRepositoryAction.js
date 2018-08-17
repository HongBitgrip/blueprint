Ext.define("com.coremedia.cms.editor.sdk.actions.ShowRepositoryAction", function(ShowRepositoryAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 This action can be used to open the collection view showing the repository.
 * /
public class ShowRepositoryAction extends ShowRepositoryActionBase{

    import com.coremedia.cap.content.Content;

    public*/function ShowRepositoryAction$(config/*:ShowRepositoryAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ShowRepositoryActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowRepositoryActionBase,{});
    var defaults_$1/*:ShowRepositoryAction*/ =AS3.cast(ShowRepositoryAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Mnme(config_$1);
  }/*

    /**
     * The folder that is then selected in the collection and used as the search filter
     * Default the root folder
     * /
    [Bindable]
    public var folder:Content;

    /**
     Set true to preserve the currently selected folder.
     Default false.
     * /
    [Bindable]
    public var preserveFolder:Boolean;


    /**
     The view that is used.
     Default CollectionViewConstants.LIST_VIEW.

     @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#LIST_VIEW
     @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#THUMBNAILS_VIEW
     * /
    [Bindable]
    public var view:String;


    /**
     Currently unused.
     * /
    [Bindable]
    public var orderBy:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ShowRepositoryActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ShowRepositoryAction$,
      super$Mnme: function() {
        com.coremedia.cms.editor.sdk.actions.ShowRepositoryActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        folder: null,
        preserveFolder: false,
        view: null,
        orderBy: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ShowRepositoryActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
