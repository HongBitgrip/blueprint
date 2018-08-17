Ext.define("com.coremedia.elastic.social.studio.actions.ShowInModerationActionBase", function(ShowInModerationActionBase) {/*package com.coremedia.elastic.social.studio.actions {

import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.util.ModerationAppUtil;

public class ShowInModerationActionBase extends ContributionAction {
  public*/ function ShowInModerationActionBase$(config/*:ShowInModerationAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"showContribution$DPb6"));
    this.super$DPb6(config);
  }/*

  private*/ function showContribution()/*:void*/ {
    var contribution/*:Contribution*/ = this.getContributions()[0];

    com.coremedia.elastic.social.studio.util.ModerationAppUtil.showContributionInArchive(contribution);
  }/*

  override protected*/ function isDisabledFor(contributions/*:Array*/)/*:Boolean*/ {
    return AS3.as( contributions[0],  com.coremedia.elastic.social.studio.model.Contribution) ? false : true;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.actions.ContributionAction",
      constructor: ShowInModerationActionBase$,
      super$DPb6: function() {
        com.coremedia.elastic.social.studio.actions.ContributionAction.prototype.constructor.apply(this, arguments);
      },
      showContribution$DPb6: showContribution,
      isDisabledFor: isDisabledFor,
      requires: ["com.coremedia.elastic.social.studio.actions.ContributionAction"],
      uses: [
        "com.coremedia.elastic.social.studio.model.Contribution",
        "com.coremedia.elastic.social.studio.util.ModerationAppUtil"
      ]
    };
});
