Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.StatusFilterPanelBase", function(StatusFilterPanelBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.User;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.util.ObjectUtils;

import ext.StringUtil;

public class StatusFilterPanelBase extends FilterPanel {
  // Properties for the status filter group
  public static const IN_PRODUCTION_FILTER_PROPERTY:String = "inProduction";
  public static const EDITED_BY_ME_FILTER_PROPERTY:String = "editedByMe";
  public static const EDITED_BY_OTHERS_FILTER_PROPERTY:String = "editedByOthers";
  public static const NOT_EDITED_FILTER_PROPERTY:String = "notEdited";
  public static const APPROVED_FILTER_PROPERTY:String = "approved";
  public static const PUBLISHED_FILTER_PROPERTY:String = "published";
  public static const DELETED_FILTER_PROPERTY:String = "deleted";

  public static const DEFAULT_STATE:Object =*/function DEFAULT_STATE$static_(){StatusFilterPanelBase.DEFAULT_STATE=( {});}/*;*/function static$0(){
  StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.IN_PRODUCTION_FILTER_PROPERTY] = true;
  StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.EDITED_BY_ME_FILTER_PROPERTY] = true;
  StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.EDITED_BY_OTHERS_FILTER_PROPERTY] = true;
  StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.NOT_EDITED_FILTER_PROPERTY] = true;
  StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.APPROVED_FILTER_PROPERTY] = true;
  StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.PUBLISHED_FILTER_PROPERTY] = true;
  StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.DELETED_FILTER_PROPERTY] = false;}/*

  /**
   * The names of all model properties used by this filter panel.
   * /
  public static const PROPERTY_NAMES:Array =*/function PROPERTY_NAMES$static_(){StatusFilterPanelBase.PROPERTY_NAMES=( com.coremedia.ui.util.ObjectUtils.getPropertyNames(StatusFilterPanelBase.DEFAULT_STATE));}/*;

  public*/ function StatusFilterPanelBase$(config/*:StatusFilterPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$G0Ws(config);
  }/*

  override public*/ function buildQuery()/*:String*/ {
    var stateBean/*:Bean*/ = this.getStateBean();
    var editedByMe/*:Boolean*/ = stateBean.get(StatusFilterPanelBase.IN_PRODUCTION_FILTER_PROPERTY) && stateBean.get(StatusFilterPanelBase.EDITED_BY_ME_FILTER_PROPERTY);
    var editedByOthers/*:Boolean*/ = stateBean.get(StatusFilterPanelBase.IN_PRODUCTION_FILTER_PROPERTY) && stateBean.get(StatusFilterPanelBase.EDITED_BY_OTHERS_FILTER_PROPERTY);
    var notEdited/*:Boolean*/ = stateBean.get(StatusFilterPanelBase.IN_PRODUCTION_FILTER_PROPERTY) && stateBean.get(StatusFilterPanelBase.NOT_EDITED_FILTER_PROPERTY);
    var approved/*:Boolean*/ = stateBean.get(StatusFilterPanelBase.APPROVED_FILTER_PROPERTY);
    var published/*:Boolean*/ = stateBean.get(StatusFilterPanelBase.PUBLISHED_FILTER_PROPERTY);
    var deleted/*:Boolean*/ = stateBean.get(StatusFilterPanelBase.DELETED_FILTER_PROPERTY);

    return buildQueryInternal$static(editedByMe, editedByOthers, notEdited, approved, published, deleted);
  }/*

  public static*/ function buildDefaultQuery$static()/*:String*/ {
    var editedByMe/*:Boolean*/ = StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.IN_PRODUCTION_FILTER_PROPERTY] && StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.EDITED_BY_ME_FILTER_PROPERTY];
    var editedByOthers/*:Boolean*/ = StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.IN_PRODUCTION_FILTER_PROPERTY] && StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.EDITED_BY_OTHERS_FILTER_PROPERTY];
    var notEdited/*:Boolean*/ = StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.IN_PRODUCTION_FILTER_PROPERTY] && StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.NOT_EDITED_FILTER_PROPERTY];
    var approved/*:Boolean*/ = StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.APPROVED_FILTER_PROPERTY];
    var published/*:Boolean*/ = StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.PUBLISHED_FILTER_PROPERTY];
    var deleted/*:Boolean*/ = StatusFilterPanelBase.DEFAULT_STATE[StatusFilterPanelBase.DELETED_FILTER_PROPERTY];
    return buildQueryInternal$static(editedByMe, editedByOthers, notEdited, approved, published, deleted);
  }/*

  private static*/ function buildQueryInternal$static(editedByMe/*:Boolean*/, editedByOthers/*:Boolean*/, notEdited/*:Boolean*/,
                                             approved/*:Boolean*/, published/*:Boolean*/, deleted/*:Boolean*/)/*: String*/ {
    if (editedByMe && editedByOthers && notEdited && approved && published && deleted) {
      // Nothing filtered.
      return "";
    } else {
      // Retrieve user URI for parametrized sub filter expressions:
      var user/*:User*/ = com.coremedia.cap.common.SESSION.getUser();
      var userUri/*:String*/ = "<" + user.getUriPath() + ">";

      // filterQueriesStatus, e.g. status:0 (inProduction), status:1 (approved) ...
      var filterQueriesStatus/*:Array*/ = [];
      if (editedByMe && editedByOthers && notEdited) {
        filterQueriesStatus.push("status:0");
      } else {
        if (editedByMe) {
          filterQueriesStatus.push(Ext.String.format("(ischeckedout:true AND editor:{0})", userUri));
        }
        if (editedByOthers) {
          filterQueriesStatus.push(Ext.String.format("(ischeckedout:true NOT editor:{0})", userUri));
        }
        if (notEdited) {
          filterQueriesStatus.push(Ext.String.format("(status:0 AND ischeckedout:false)", userUri));
        }
      }
      if (approved) {
        filterQueriesStatus.push("status:1");
      }
      if (published) {
        filterQueriesStatus.push("status:2");
      }
      if (deleted) {
        filterQueriesStatus.push("status:3");
      }

      if (filterQueriesStatus.length > 0) {
        return filterQueriesStatus.join(" OR ");
      } else {
        // Impossible. Ignore all filters.
        return "";
      }
    }
  }/*

  override public*/ function getDefaultState()/*:Object*/ {
    return StatusFilterPanelBase.DEFAULT_STATE;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
      constructor: StatusFilterPanelBase$,
      super$G0Ws: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel.prototype.constructor.apply(this, arguments);
      },
      buildQuery: buildQuery,
      getDefaultState: getDefaultState,
      statics: {
        IN_PRODUCTION_FILTER_PROPERTY: "inProduction",
        EDITED_BY_ME_FILTER_PROPERTY: "editedByMe",
        EDITED_BY_OTHERS_FILTER_PROPERTY: "editedByOthers",
        NOT_EDITED_FILTER_PROPERTY: "notEdited",
        APPROVED_FILTER_PROPERTY: "approved",
        PUBLISHED_FILTER_PROPERTY: "published",
        DELETED_FILTER_PROPERTY: "deleted",
        DEFAULT_STATE: undefined,
        PROPERTY_NAMES: undefined,
        buildDefaultQuery: buildDefaultQuery$static,
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
