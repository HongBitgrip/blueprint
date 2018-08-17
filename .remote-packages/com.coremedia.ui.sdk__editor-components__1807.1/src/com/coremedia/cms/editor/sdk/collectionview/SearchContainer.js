Ext.define("com.coremedia.cms.editor.sdk.collectionview.SearchContainer", function(SearchContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class SearchContainer extends SearchContainerBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.searchContainer";

    public*/function SearchContainer$(config/*:SearchContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.SearchContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchContainerBase,{});
    var defaults_$1/*:SearchContainer*/ =AS3.cast(SearchContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9x$e(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.SearchContainerBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.searchContainer",
      constructor: SearchContainer$,
      super$9x$e: function() {
        com.coremedia.cms.editor.sdk.collectionview.SearchContainerBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.SearchContainerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
