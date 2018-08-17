Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase", function(LastEditedFilterPanelBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.User;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.util.ObjectUtils;

import ext.StringUtil;

public class LastEditedFilterPanelBase extends FilterPanel {
  // Property for the last editor filter group
  public static const LAST_EDITED_BY_PROPERTY:String = "lastEditedBy";
  public static const LAST_EDITED_BY_ME:String = "me";
  public static const LAST_EDITED_BY_ANYONE:String = "anyone";

  public static const DEFAULT_STATE:Object =*/function DEFAULT_STATE$static_(){LastEditedFilterPanelBase.DEFAULT_STATE=( {});}/*;*/function static$0(){
  LastEditedFilterPanelBase.DEFAULT_STATE[LastEditedFilterPanelBase.LAST_EDITED_BY_PROPERTY] = LastEditedFilterPanelBase.LAST_EDITED_BY_ANYONE;}/*

  /**
   * The names of all model properties used by this filter panel.
   * /
  public static const PROPERTY_NAMES:Array =*/function PROPERTY_NAMES$static_(){LastEditedFilterPanelBase.PROPERTY_NAMES=( com.coremedia.ui.util.ObjectUtils.getPropertyNames(LastEditedFilterPanelBase.DEFAULT_STATE));}/*;

  private static const*/var FILTER_QUERY_LAST_EDITED_BY$static/*:String*/ = "(editor:{0} OR modifier:{0})";/*

  public*/ function LastEditedFilterPanelBase$(config/*:LastEditedFilterPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$awof(config);
  }/*

  override public*/ function buildQuery()/*:String*/ {
    var stateBean/*:Bean*/ = this.getStateBean();
    if (stateBean.get(LastEditedFilterPanelBase.LAST_EDITED_BY_PROPERTY) === LastEditedFilterPanelBase.LAST_EDITED_BY_ME) {
      var user/*:User*/ = com.coremedia.cap.common.SESSION.getUser();
      return Ext.String.format(FILTER_QUERY_LAST_EDITED_BY$static, "<" + user.getUriPath() + ">");
    } else {
      return "";
    }
  }/*

  override public*/ function getDefaultState()/*:Object*/ {
    var state/*:Object*/ = {};
    state[LastEditedFilterPanelBase.LAST_EDITED_BY_PROPERTY] = LastEditedFilterPanelBase.LAST_EDITED_BY_ANYONE;
    return state;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
      constructor: LastEditedFilterPanelBase$,
      super$awof: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel.prototype.constructor.apply(this, arguments);
      },
      buildQuery: buildQuery,
      getDefaultState: getDefaultState,
      statics: {
        LAST_EDITED_BY_PROPERTY: "lastEditedBy",
        LAST_EDITED_BY_ME: "me",
        LAST_EDITED_BY_ANYONE: "anyone",
        DEFAULT_STATE: undefined,
        PROPERTY_NAMES: undefined,
        __initStatics__: function() {
          DEFAULT_STATE$static_();
          static$0();
          PROPERTY_NAMES$static_();
        }
      },
      requires: [
        "Ext.String",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
