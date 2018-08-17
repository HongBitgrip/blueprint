Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanelBase", function(ModerationTabPanelBase) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab {

import com.coremedia.elastic.social.studio.model.Moderation;

import ext.panel.Panel;

public class ModerationTabPanelBase extends Panel {
  public static const ID:String = "cm-elastic-social-main-tab";
  protected static const MODERATION_PANEL_ID:String = "cm-elastic-social-layout-left-column";
  protected static const MODERATION_PREVIEW_ID:String = "cm-elastic-preview-panel";

  private var moderation:Moderation;

  public*/ function ModerationTabPanelBase$(config/*:ModerationTabPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$RETd(config);
    this.moderation$RETd = AS3.getBindable(config,"moderation");
    this.moderation$RETd.getModerationContributionAdministration().startPolling();
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.moderation$RETd.getModerationContributionAdministration().stopPolling();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      moderation$RETd: null,
      constructor: ModerationTabPanelBase$,
      super$RETd: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      statics: {
        ID: "cm-elastic-social-main-tab",
        MODERATION_PANEL_ID: "cm-elastic-social-layout-left-column",
        MODERATION_PREVIEW_ID: "cm-elastic-preview-panel"
      },
      requires: ["Ext.panel.Panel"]
    };
});
