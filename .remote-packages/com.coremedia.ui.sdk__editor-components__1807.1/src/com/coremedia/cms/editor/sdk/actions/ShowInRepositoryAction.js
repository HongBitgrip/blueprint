Ext.define("com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction", function(ShowInRepositoryAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that opens the configured content in the repository view of the collection.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class ShowInRepositoryAction extends ShowInRepositoryActionBase{

    public static const ACTION_ID:String = "showInRepositoryAction";

    public*/function ShowInRepositoryAction$(config/*:ShowInRepositoryAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ShowInRepositoryActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryActionBase,{});
    var defaults_$1/*:ShowInRepositoryAction*/ =AS3.cast(ShowInRepositoryAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$3I5j(config_$1);
  }/*

    /**

     Optional config parameter for the view mode. Either CollectionViewConstants.LIST_VIEW for the list view
     or CollectionViewConstants.THUMBNAILS_VIEW for the thumbnail view.
     If not specified the current view is used.
     * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#LIST_VIEW
     * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#THUMBNAILS_VIEW

     * /
    [Bindable]
    public var view:String;


    /**

     The optional id of the CompoundTreeModel that should be used when displaying the given content.
     * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#TREE_MODEL_ID

     * /
    [Bindable]
    public var treeModelId:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ShowInRepositoryAction$,
      super$3I5j: function() {
        com.coremedia.cms.editor.sdk.actions.ShowInRepositoryActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        view: null,
        treeModelId: null
      },
      statics: {ACTION_ID: "showInRepositoryAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
