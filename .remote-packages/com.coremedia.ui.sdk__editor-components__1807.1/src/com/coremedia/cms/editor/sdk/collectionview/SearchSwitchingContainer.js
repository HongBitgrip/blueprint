Ext.define("com.coremedia.cms.editor.sdk.collectionview.SearchSwitchingContainer", function(SearchSwitchingContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainer;
import net.jangaroo.ext.Exml;
[PublicApi]
public class SearchSwitchingContainer extends SortableSwitchingContainer{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.searchSwitchingContainer";

    public*/function SearchSwitchingContainer$(config/*:SearchSwitchingContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainer,{});
    var defaults_$1/*:SearchSwitchingContainer*/ =AS3.cast(SearchSwitchingContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$runi(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainer",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.searchSwitchingContainer",
      constructor: SearchSwitchingContainer$,
      super$runi: function() {
        com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainer.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainer",
        "net.jangaroo.ext.Exml"
      ]
    };
});
