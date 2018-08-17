Ext.define("com.coremedia.elastic.social.studio.model.impl.ContributionImpl", function(ContributionImpl) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ContributionPropertyNames;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

public class ContributionImpl extends RemoteBeanImpl implements Contribution {

  private var localModValExp:ValueExpression;

  public static const BLANK_PREVIEW_URL:String = "about:blank";

  public*/ function ContributionImpl$(path/*:String*/) {
    this.super$oyop(path);
  }/*

  override public*/ function getId()/*:String*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.ID);
  }/*

  public*/ function getCreationDate()/*:Date*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.CREATION_DATE);
  }/*

  public*/ function getContributionState()/*:String*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.STATE);
  }/*

  public*/ function getTarget(loaded/*:Function = null*/)/*:**/ {if(arguments.length<=0)loaded=null;
    if (loaded) {
      var self/*:Contribution*/ = this;
      this.load(function ()/*:void*/ {
        loaded(self.getTarget());
      });
    }
    return this.get(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.TARGET);
  }/*

  public*/ function getPreviewUrl()/*:String*/ {
    var url/*:String*/ = this.get(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.PREVIEW_URL);
    if (url) {
      return url;
    } else {
      return ContributionImpl.BLANK_PREVIEW_URL;
    }
  }/*

  public*/ function getCuratedContents(isReadable/*:Boolean = true*/, doesExist/*:Boolean = true*/)/*:Array*/ {switch(arguments.length){case 0:isReadable=true;case 1:doesExist=true;}
    var array/*:Array*/ = [];

    if (this.get(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.CURATED_CONTENTS)) {
      this.get(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.CURATED_CONTENTS).forEach(function (t/*:Content*/)/*:void*/ {
        if ((!isReadable || t.getState().readable) && (!doesExist || t.getState().exists) && !t.isDeleted()) {
          array.push(t);
        }
      });
    }
    return array;
  }/*

  public*/ function getDefaultModerationEmails()/*:Array*/ {
    return [];
  }/*

  public*/ function getNumberOfComplaints()/*:uint*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.NUMBER_OF_COMPLAINTS);
  }/*

  public*/ function getLastComplaintDate()/*:Date*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.LAST_COMPLAINT_DATE);
  }/*

  public*/ function approve(abstractContributionAdministration/*:AbstractContributionAdministration*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
  }/*

  public*/ function reject(abstractContributionAdministration/*:AbstractContributionAdministration*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:success=null;case 2:failure=null;}
  }/*

  public*/ function loadUserNotes(abstractContributionAdministration/*:AbstractContributionAdministration*/, user/*:User*/)/*:void*/ {
  }/*

  public*/ function hasLocalModifications()/*:Boolean*/ {
    return this.hasLocalModificationValueExpression().getValue();
  }/*

  //noinspection ReservedWordAsName
  override public*/ function set(property/*:**/, newValue/*:**/)/*:Boolean*/ {
    var moderationImpl/*:ModerationImpl*/ = (AS3.as(com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance(),  com.coremedia.elastic.social.studio.model.impl.ModerationImpl));
    if (moderationImpl.getModeratedProperties().indexOf(property) !== -1) {
      this.setLocalModificationState(true);
    }
    return com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.set.call(this,property, newValue);
  }/*

  public*/ function hasStageChanges()/*:Boolean*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.HAS_STAGE_CHANGES),  Boolean);
  }/*

  override public*/ function invalidate(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    this.setLocalModificationState(false);
    com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.invalidate.call(this,callback);
  }/*

  public*/ function hasLocalModificationValueExpression()/*:ValueExpression*/ {
    if (!this.localModValExp$oyop) {
      this.localModValExp$oyop = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.localModValExp$oyop;
  }/*

  protected*/ function setLocalModificationState(state/*:Boolean*/)/*:void*/ {
    this.hasLocalModificationValueExpression().setValue(state);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.elastic.social.studio.model.Contribution"],
      localModValExp$oyop: null,
      constructor: ContributionImpl$,
      super$oyop: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getId: getId,
      getCreationDate: getCreationDate,
      getContributionState: getContributionState,
      getTarget: getTarget,
      getPreviewUrl: getPreviewUrl,
      getCuratedContents: getCuratedContents,
      getDefaultModerationEmails: getDefaultModerationEmails,
      getNumberOfComplaints: getNumberOfComplaints,
      getLastComplaintDate: getLastComplaintDate,
      approve: approve,
      reject: reject,
      loadUserNotes: loadUserNotes,
      hasLocalModifications: hasLocalModifications,
      set: set,
      hasStageChanges: hasStageChanges,
      invalidate: invalidate,
      hasLocalModificationValueExpression: hasLocalModificationValueExpression,
      setLocalModificationState: setLocalModificationState,
      statics: {BLANK_PREVIEW_URL: "about:blank"},
      requires: [
        "com.coremedia.elastic.social.studio.model.Contribution",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl"
      ]
    };
});
