Ext.define("com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPlugin", function(HandleEmptySearchResultPlugin) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
/**
 A plugin to enrich a search result view by a hint that an empty search result
 might be caused by an overly restrictive base folder.
 * /
public class HandleEmptySearchResultPlugin extends HandleEmptySearchResultPluginBase{

    public*/function HandleEmptySearchResultPlugin$(config/*:HandleEmptySearchResultPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPluginBase,{});
    var defaults_$1/*:HandleEmptySearchResultPlugin*/ =AS3.cast(HandleEmptySearchResultPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$MHfC(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPluginBase",
      constructor: HandleEmptySearchResultPlugin$,
      super$MHfC: function() {
        com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
