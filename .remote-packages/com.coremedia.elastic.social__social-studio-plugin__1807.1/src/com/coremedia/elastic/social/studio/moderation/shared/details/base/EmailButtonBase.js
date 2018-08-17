Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButtonBase", function(EmailButtonBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base {

import com.coremedia.elastic.social.studio.email.EMailWindow;
import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.ComponentManager;
import ext.container.Container;
import ext.layout.container.CardLayout;

public class EmailButtonBase extends Container {
  private var abstractContributionAdministration:AbstractContributionAdministration;
  private var emailWindow:EMailWindow;
  private var displayedValueExpression:ValueExpression;

  public*/ function EmailButtonBase$(config/*:EmailButton = null*/) {if(arguments.length<=0)config=null;
    this.abstractContributionAdministration$7ILr = AS3.getBindable(config,"abstractContributionAdministration");
    this.displayedValueExpression$7ILr = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, this.abstractContributionAdministration$7ILr);
    this.super$7ILr(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Container.prototype.afterRender.call(this);
    this.toggleLink$7ILr();
    this.displayedValueExpression$7ILr.addChangeListener(AS3.bind(this,"toggleLink$7ILr"));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.container.Container.prototype.onDestroy.call(this);
    this.displayedValueExpression$7ILr.removeChangeListener(AS3.bind(this,"toggleLink$7ILr"));
  }/*

  private*/ function toggleLink()/*:void*/ {
    if (this.abstractContributionAdministration$7ILr) {
      var comment/*:Comment*/ =AS3.as( this.abstractContributionAdministration$7ILr.getDisplayed(),  com.coremedia.elastic.social.studio.model.Comment);
      var user/*:User*/ =AS3.as( this.abstractContributionAdministration$7ILr.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);

      if (comment) {
        this.toggleEMailWindowLink(comment.getAuthor());
      } else if (user) {
        this.toggleEMailWindowLink(user);
      } else {
        this.toggleEMailWindowLink(null);
      }
    }
  }/*

  public*/ function openEmailEditor()/*:void*/ {
    var emailWindow/*:EMailWindow*/ = this.getEmailWindow$7ILr();
    if (emailWindow) {
      emailWindow.setVisible(true);
      if (AS3.getBindable(emailWindow,"collapsed","DUMMY")) {
        emailWindow.expand(true);
      }
    } else {
      var emailWindowConfig/*:EMailWindow*/ = AS3.cast(com.coremedia.elastic.social.studio.email.EMailWindow,{});
      AS3.setBindable(emailWindowConfig,"emailProvider" , this.abstractContributionAdministration$7ILr);
      emailWindow = AS3.cast(com.coremedia.elastic.social.studio.email.EMailWindow,Ext.ComponentManager.create(emailWindowConfig));
      emailWindow.expand(true);
      emailWindow.show();
    }
  }/*

  public*/ function toggleEMailWindowLink(author/*:User*/)/*:void*/ {
    var layout/*:CardLayout*/ =AS3.as( this.getLayout(),  Ext.layout.container.Card);
    if (layout) {
      if (author && author.getId()) {
        if (author.isAnonymous()) {
          (AS3.as(this.getLayout(),  Ext.layout.container.Card)).setActiveItem(1);
        } else if (author.isBlocked()) {
          (AS3.as(this.getLayout(),  Ext.layout.container.Card)).setActiveItem(2);
        } else if (author.isIgnored()) {
          (AS3.as(this.getLayout(),  Ext.layout.container.Card)).setActiveItem(3);
        } else {
          (AS3.as(this.getLayout(),  Ext.layout.container.Card)).setActiveItem(0);
        }
      } else {
        (AS3.as(this.getLayout(),  Ext.layout.container.Card)).setActiveItem(1);
      }
    }
  }/*

  private*/ function getEmailWindow()/*:EMailWindow*/ {
    if (!this.emailWindow$7ILr) {
      this.emailWindow$7ILr =AS3.as( Ext.ComponentManager.get("cm-elastic-social-email-window"),  com.coremedia.elastic.social.studio.email.EMailWindow);
    }

    return this.emailWindow$7ILr;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      abstractContributionAdministration$7ILr: null,
      emailWindow$7ILr: null,
      displayedValueExpression$7ILr: null,
      constructor: EmailButtonBase$,
      super$7ILr: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      onDestroy: onDestroy,
      toggleLink$7ILr: toggleLink,
      openEmailEditor: openEmailEditor,
      toggleEMailWindowLink: toggleEMailWindowLink,
      getEmailWindow$7ILr: getEmailWindow,
      requires: [
        "Ext.ComponentManager",
        "Ext.container.Container",
        "Ext.layout.container.Card",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.email.EMailWindow",
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.User"
      ]
    };
});
