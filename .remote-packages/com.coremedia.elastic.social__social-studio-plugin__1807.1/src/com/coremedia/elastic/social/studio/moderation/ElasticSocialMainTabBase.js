Ext.define("com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase", function(ElasticSocialMainTabBase) {/*package com.coremedia.elastic.social.studio.moderation {

import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.impl.ModerationImpl;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.panel.Panel;

public class ElasticSocialMainTabBase extends Panel {
  public static const ID:String = "cm-elastic-social-main-tab";
  public static var ELASTIC_SOCIAL_START_TAB_TOOLBAR_HEIGHT:int = 40;
  public static const ACTIVE_TAB_MODERATION:String = "moderationTab";
  public static const ACTIVE_TAB_ARCHIVE:String = "archiveTab";

  protected static const TOOLBAR_ITEM_ID:String = "elastic-tab-toolbar";
  protected static const TAB_PANEL_ITEM_ID:String = "tab-panel";
  protected static const ES_MODERATION_TAB_PANEL_ITEM_ID:String = "cm-elastic-social-moderation-tab-panel";
  protected static const ES_ARCHIVE_TAB_PANEL_ITEM_ID:String = "cm-elastic-social-archive-tab-panel";


  private var activeTabValueExp:ValueExpression;

  public*/ function ElasticSocialMainTabBase$(config/*:ElasticSocialMainTab = null*/) {if(arguments.length<=0)config=null;
    this.super$wKSj(config);
    this.getActiveTabValueExpression().setValue(ElasticSocialMainTabBase.ACTIVE_TAB_MODERATION);
  }/*

  public static*/ function getModeration$static()/*:Moderation*/ {
    return com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance();
  }/*

  protected*/ function getActiveTabValueExpression()/*:ValueExpression*/ {
    if (!this.activeTabValueExp$wKSj) {
      this.activeTabValueExp$wKSj = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }
    return this.activeTabValueExp$wKSj;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      activeTabValueExp$wKSj: null,
      constructor: ElasticSocialMainTabBase$,
      super$wKSj: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getActiveTabValueExpression: getActiveTabValueExpression,
      statics: {
        ID: "cm-elastic-social-main-tab",
        ELASTIC_SOCIAL_START_TAB_TOOLBAR_HEIGHT: 40,
        ACTIVE_TAB_MODERATION: "moderationTab",
        ACTIVE_TAB_ARCHIVE: "archiveTab",
        TOOLBAR_ITEM_ID: "elastic-tab-toolbar",
        TAB_PANEL_ITEM_ID: "tab-panel",
        ES_MODERATION_TAB_PANEL_ITEM_ID: "cm-elastic-social-moderation-tab-panel",
        ES_ARCHIVE_TAB_PANEL_ITEM_ID: "cm-elastic-social-archive-tab-panel",
        getModeration: getModeration$static
      },
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.impl.ModerationImpl"]
    };
});
