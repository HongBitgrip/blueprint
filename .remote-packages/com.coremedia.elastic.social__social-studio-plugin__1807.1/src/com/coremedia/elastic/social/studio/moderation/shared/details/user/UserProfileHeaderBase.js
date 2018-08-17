Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeaderBase", function(UserProfileHeaderBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.user {

import com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer;

import ext.container.Container;
import ext.toolbar.Toolbar;

public class UserProfileHeaderBase extends Container {
  protected static const STATUS_VIEW_ITEM_ID:String = "cm-elastic-social-detail-status";
  private var statusView:ContributionStatusContainer;

  public*/ function UserProfileHeaderBase$(config/*:UserProfileHeader = null*/) {if(arguments.length<=0)config=null;
    this.super$pfMC(config);
  }/*

  public*/ function setStatus(message/*:String*/, error/*:String*/)/*:void*/ {
    this.getStatusView$pfMC().setStatus(message, error);
  }/*

  public*/ function setCreationDate(creationDate/*:Date*/)/*:void*/ {
    this.getStatusView$pfMC().setCreationDate(creationDate);
  }/*

  private*/ function getStatusView()/*:ContributionStatusContainer*/ {
    if (!this.statusView$pfMC) {
      this.statusView$pfMC =AS3.as( this.getComponent(UserProfileHeaderBase.STATUS_VIEW_ITEM_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer);
    }
    return this.statusView$pfMC;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      statusView$pfMC: null,
      constructor: UserProfileHeaderBase$,
      super$pfMC: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      setStatus: setStatus,
      setCreationDate: setCreationDate,
      getStatusView$pfMC: getStatusView,
      statics: {STATUS_VIEW_ITEM_ID: "cm-elastic-social-detail-status"},
      requires: ["Ext.container.Container"],
      uses: ["com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer"]
    };
});
