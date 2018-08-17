Ext.define("com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction", function(ToggleCollectionViewAction) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction;
import net.jangaroo.ext.Exml;
/**
 An action to toggle the collection view.
 * /
public class ToggleCollectionViewAction extends ToggleComponentInSidePanelAction{

    import mx.resources.ResourceManager;

    public static const ACTION_ID:String = "toggleCollectionViewAction";

    public*/function ToggleCollectionViewAction$(config/*:ToggleCollectionViewAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction,{});
    var defaults_$1/*:ToggleCollectionViewAction*/ =AS3.cast(ToggleCollectionViewAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"componentId" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer.ID));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_title')));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ih1U(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction",
      constructor: ToggleCollectionViewAction$,
      super$ih1U: function() {
        com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction.prototype.constructor.apply(this, arguments);
      },
      statics: {ACTION_ID: "toggleCollectionViewAction"},
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer"]
    };
});
