Ext.define("com.coremedia.cms.editor.sdk.collectionview.SearchFilterState", function(SearchFilterState) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A state of a search filter. Useful when you want to establish a well-known state.
 * /
public class SearchFilterState extends SearchFilterStateBase{

    public*/function SearchFilterState$(config/*:SearchFilterState = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.SearchFilterStateBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchFilterStateBase,{});
    var defaults_$1/*:SearchFilterState*/ =AS3.cast(SearchFilterState,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8gcW(config_$1);
  }/*

    /**
     The id of the filter to be configured.
     * /
    [Bindable]
    public var filterId:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.SearchFilterStateBase",
      metadata: {"": ["PublicApi"]},
      constructor: SearchFilterState$,
      super$8gcW: function() {
        com.coremedia.cms.editor.sdk.collectionview.SearchFilterStateBase.prototype.constructor.apply(this, arguments);
      },
      config: {filterId: null},
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.SearchFilterStateBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
