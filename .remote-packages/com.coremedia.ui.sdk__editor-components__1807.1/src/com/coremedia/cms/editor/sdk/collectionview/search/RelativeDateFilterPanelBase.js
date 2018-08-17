Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanelBase", function(RelativeDateFilterPanelBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {
import com.coremedia.ui.data.Bean;

import ext.StringUtil;

public class RelativeDateFilterPanelBase extends FilterPanel {

  // use hour granularity to enable solr caching
  // (not NOW/DAY to support different client and server time zones)
  internal static const QUERY_FRAGMENT:String = '({0}:[NOW/HOUR-{1}DAYS TO NOW/HOUR+1HOUR] AND isdeleted:false)';
  internal static const ANY_DATE:int = -1;

  private var queryTemplate:String;

  private var fieldName:String;

  public*/ function RelativeDateFilterPanelBase$(config/*:RelativeDateFilterPanel = null*/) {if(arguments.length<=0)config=null;
    this.fieldName$pKvE = AS3.getBindable(config,"dateFieldName") || 'modificationdate';

    this.queryTemplate$pKvE = AS3.getBindable(config,"queryTemplate") || RelativeDateFilterPanelBase.QUERY_FRAGMENT;

    this.super$pKvE(config);
  }/*


  override public*/ function buildQuery()/*:String*/ {
    var state/*:Bean*/ = this.getStateBean();
    var freshness/*:**/ = state.get(this.fieldName$pKvE);
    if (freshness === undefined || freshness === null || freshness === RelativeDateFilterPanelBase.ANY_DATE) {
      return null;
    }
    else {
      return Ext.String.format(this.queryTemplate$pKvE, this.fieldName$pKvE, freshness);
    }
  }/*

  override public*/ function getDefaultState()/*:Object*/ {
    var state/*:Object*/ = {};
    state[this.fieldName$pKvE] = RelativeDateFilterPanelBase.ANY_DATE;
    return state;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
      queryTemplate$pKvE: null,
      fieldName$pKvE: null,
      constructor: RelativeDateFilterPanelBase$,
      super$pKvE: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel.prototype.constructor.apply(this, arguments);
      },
      buildQuery: buildQuery,
      getDefaultState: getDefaultState,
      statics: {
        QUERY_FRAGMENT: '({0}:[NOW/HOUR-{1}DAYS TO NOW/HOUR+1HOUR] AND isdeleted:false)',
        ANY_DATE: -1
      },
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel"
      ]
    };
});
