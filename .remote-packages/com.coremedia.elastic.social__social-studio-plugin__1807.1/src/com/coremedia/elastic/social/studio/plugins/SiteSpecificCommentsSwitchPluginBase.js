Ext.define("com.coremedia.elastic.social.studio.plugins.SiteSpecificCommentsSwitchPluginBase", function(SiteSpecificCommentsSwitchPluginBase) {/*package com.coremedia.elastic.social.studio.plugins {
import com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanel;

import ext.Component;
import ext.Plugin;

public class SiteSpecificCommentsSwitchPluginBase implements Plugin {
  public*/ function SiteSpecificCommentsSwitchPluginBase$() {
    // nothing
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    (AS3.as(component,  com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanel)).getEnableSiteSpecificCommentsSwitchVE().setValue(true);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      constructor: SiteSpecificCommentsSwitchPluginBase$,
      init: init,
      requires: ["ext.Plugin"],
      uses: ["com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanel"]
    };
});
