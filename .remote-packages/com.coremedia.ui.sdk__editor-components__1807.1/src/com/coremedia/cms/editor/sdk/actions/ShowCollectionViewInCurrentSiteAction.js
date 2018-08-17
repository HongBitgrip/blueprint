Ext.define("com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteAction", function(ShowCollectionViewInCurrentSiteAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 This action can be used to open the collection view showing a search result in the site folder of the given content.
 The appearance of the collection view can be controlled with several properties of this action.
 * /
public class ShowCollectionViewInCurrentSiteAction extends ShowCollectionViewInCurrentSiteActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function ShowCollectionViewInCurrentSiteAction$(config/*:ShowCollectionViewInCurrentSiteAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteActionBase,{});
    var defaults_$1/*:ShowCollectionViewInCurrentSiteAction*/ =AS3.cast(ShowCollectionViewInCurrentSiteAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Whkc(config_$1);
  }/*

    /**
     * Holds the content in which site the collection view should be opened.
     * /
    [Bindable]
    public var bindTo:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ShowCollectionViewInCurrentSiteAction$,
      super$Whkc: function() {
        com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {bindTo: null},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
