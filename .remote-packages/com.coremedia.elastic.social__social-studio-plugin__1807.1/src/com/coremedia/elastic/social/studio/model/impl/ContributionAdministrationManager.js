Ext.define("com.coremedia.elastic.social.studio.model.impl.ContributionAdministrationManager", function(ContributionAdministrationManager) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.ModerationEmail;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

import ext.util.Observable;

public class ContributionAdministrationManager extends Observable {
  private var abstractContributionAdmin:AbstractContributionAdministration;
  protected static const POLLING_INTERVAL:uint = 10000;

  protected var updatePoller:* = null;
  protected var paused:Boolean = false;

  // ValueExpressions to determine whether moderation/archive lists need to be updated
  private var preferredSiteIdExpression:ValueExpression;
  private var tenantAwareESUriPrefixExpression:ValueExpression;
  private var moderation:Moderation;

  public*/ function ContributionAdministrationManager$(abstractContributionAdmin/*:AbstractContributionAdministration*/, moderation/*:Moderation*/) {this.super$Kqyy();
    this.abstractContributionAdmin$Kqyy = abstractContributionAdmin;
    this.moderation$Kqyy = moderation;

    this.getPreferredSiteIdValueExpression$Kqyy().addChangeListener(AS3.bind(this,"updateList$Kqyy"));
    this.getTenantAwareESUriPrefixExpression$Kqyy().addChangeListener(AS3.bind(this,"updateList$Kqyy"));
  }/*

  private*/ function updateList()/*:void*/ {
    if (this.abstractContributionAdmin$Kqyy.isPolling()) {
      this.abstractContributionAdmin$Kqyy.updateList();
    }
  }/*

  public*/ function startPolling(immediatelyUpdateList/*:Boolean*/)/*:void*/ {var this$=this;
    if (!this.isPolling()) {
      if (!this.paused) {
        this.abstractContributionAdmin$Kqyy.registerSelectedChangeListener();
      }
      if (immediatelyUpdateList) {
        this.abstractContributionAdmin$Kqyy.updateList();
      }
      this.paused = false;
      this.updatePoller = window.setInterval(function ()/*:void*/ {
        this$.abstractContributionAdmin$Kqyy.updateList();
      }, ContributionAdministrationManager.POLLING_INTERVAL);
    }
  }/*

  public*/ function stopPolling()/*:void*/ {
    window.clearInterval(this.updatePoller);
    this.updatePoller = null;
    this.paused = false;
    this.abstractContributionAdmin$Kqyy.removeSelectedChangeListener();
    this.abstractContributionAdmin$Kqyy.setDisplayed(null);
    this.abstractContributionAdmin$Kqyy.setSelectedContribution(null);
  }/*

  public*/ function pausePolling()/*:void*/ {
    window.clearInterval(this.updatePoller);
    this.updatePoller = null;
    this.paused = true;
  }/*

  public*/ function isPolling()/*:Boolean*/ {
    return this.updatePoller;
  }/*

  public*/ function approve(contribution/*:Contribution*/, email/*:ModerationEmail*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:success=null;case 3:failure=null;}
    if (contribution) {
      this.process$Kqyy(contribution, new com.coremedia.ui.data.impl.RemoteServiceMethod(contribution.getUriPath() + "/approve", "POST"), email ? email.getText() : "", true, success, failure);
    }
  }/*

  public*/ function reject(contribution/*:Contribution*/, email/*:ModerationEmail*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:success=null;case 3:failure=null;}
    if (contribution) {
      this.process$Kqyy(contribution, new com.coremedia.ui.data.impl.RemoteServiceMethod(contribution.getUriPath() + "/reject", "POST"), email ? email.getText() : "", true, success, failure);
    }
  }/*

  private*/ function process(contribution/*:Contribution*/, serviceMethod/*:RemoteServiceMethod*/, emailText/*:String*/, selectNext/*:Boolean*/, success/*:Function*/, failure/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=5)failure=null;
    serviceMethod.request({'params':emailText},
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var errors/*:Object*/ = response.getResponseJSON();
              if (errors) {
                failure && failure(errors);
              } else {
                contribution.invalidate(function ()/*:void*/ {
                  this$.processed$Kqyy(contribution, selectNext, success);
                });
              }
            }, com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler.handleRemoteErrorFromResponse);
  }/*

  private*/ function processed(processed/*:Contribution*/, selectNext/*:Boolean*/, success/*:Function*/)/*:void*/ {
    if (processed && selectNext) {
      this.abstractContributionAdmin$Kqyy.removeFromList(processed);
      this.abstractContributionAdmin$Kqyy.processedContribution();

    }
    this.abstractContributionAdmin$Kqyy.invalidate();
    if (success) {
      success();
    }
  }/*

  public*/ function initUserNotes(user/*:User*/)/*:void*/ {
    var that/*:ContributionAdministrationManager*/ = this;
    if (user) {
      (AS3.as(user,  com.coremedia.elastic.social.studio.model.impl.UserImpl)).loadNotes(function (notes/*:NotesImpl*/)/*:void*/ {
        that.fireEvent("userNotesInit", notes);
      });
    }
    else {
      this.fireEvent("userNotesInit", null);
    }
  }/*

  private*/ function getPreferredSiteIdValueExpression()/*:ValueExpression*/ {
    if (!this.preferredSiteIdExpression$Kqyy) {
      this.preferredSiteIdExpression$Kqyy = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        return com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteId();
      });
    }
    return this.preferredSiteIdExpression$Kqyy;
  }/*

  private*/ function getTenantAwareESUriPrefixExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.tenantAwareESUriPrefixExpression$Kqyy) {
      this.tenantAwareESUriPrefixExpression$Kqyy = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        return (AS3.as(this$.moderation$Kqyy,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).getTenantAwareESUriPrefix();
      });
    }
    return this.tenantAwareESUriPrefixExpression$Kqyy;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      abstractContributionAdmin$Kqyy: null,
      updatePoller: null,
      paused: false,
      preferredSiteIdExpression$Kqyy: null,
      tenantAwareESUriPrefixExpression$Kqyy: null,
      moderation$Kqyy: null,
      constructor: ContributionAdministrationManager$,
      super$Kqyy: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      updateList$Kqyy: updateList,
      startPolling: startPolling,
      stopPolling: stopPolling,
      pausePolling: pausePolling,
      isPolling: isPolling,
      approve: approve,
      reject: reject,
      process$Kqyy: process,
      processed$Kqyy: processed,
      initUserNotes: initUserNotes,
      getPreferredSiteIdValueExpression$Kqyy: getPreferredSiteIdValueExpression,
      getTenantAwareESUriPrefixExpression$Kqyy: getTenantAwareESUriPrefixExpression,
      statics: {POLLING_INTERVAL: 10000},
      requires: [
        "Ext.util.Observable",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl",
        "com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler",
        "com.coremedia.elastic.social.studio.model.impl.UserImpl"
      ]
    };
});
